// const signalR = require('@microsoft/signalr');
import { HubConnectionBuilder } from '@microsoft/signalr';
import { IOgModule } from './IModule';
import Keycloak, { KeycloakAdapter } from 'keycloak-js';
import { registerGameExtensions, logError, logText, logWarn } from './utils';

// function logText(text: string) {
//     console.debug('og-experiments | ' + text);
// }

// var noteByIndex = game.journal._source[16]
// var journalEntryId = 'zEttYl2LliDg1W7O'; // "U3BmDb23GUxnMP9M"
/*
const journalEntryId = 'zEttYl2LliDg1W7O';
await game.experiments.showJournalEntryById(journalEntryId);
*/
// var noteById = game.journal.find((entry) => entry.data._id === journalEntryId);
// noteById.show();
//
//new JournalEntry(note).show()
class AuthService {
    private _keycloak: Keycloak;

    constructor() {
        this._keycloak = new Keycloak({
            url: 'http://localhost:8080/',
            realm: 'OgAuth',
            clientId: 'og-server',
        });
    }

    private _token?: string;
    public get token(): string | undefined {
        return this._token;
    }
    public set token(v: string | undefined) {
        this._token = v;
    }

    private _authenticated: boolean = false;
    public get authenticated(): boolean {
        return this._authenticated;
    }
    public set authenticated(v: boolean) {
        this._authenticated = v;
    }

    public get user(): Keycloak {
        return this._keycloak;
    }

    async init() {
        var me = this;
        await this._keycloak
            .init({
                onLoad: 'login-required', // check-sso | login-required // silentCheckSsoRedirectUri: 'https://localhost:7263/'
                // silentCheckSsoRedirectUri: 'https://localhost:30000/',
                enableLogging: true,
            })
            .then(function (authenticated) {
                logText(authenticated ? 'authenticated' : 'not authenticated');
                me.authenticated = authenticated;
                if (authenticated) {
                    me.token = me._keycloak.token;
                }
            })
            .catch(function (e) {
                console.error('failed to initialize', e);
            });
    }
}

export class ServerPush implements IOgModule {
    private auth = new AuthService();

    async ready(): Promise<void> {
        logText('ServerPush getting ready');

        await this.auth.init();
        if (!this.auth.authenticated) {
            logError("Not authenticated! Can't proceed with ServerPush.ready.");
            return;
        }
        var user = this.auth.user;
        if (!user.tokenParsed) {
            logError('The `tokenParsed` property is not defined.');
            return;
        }

        let connection = new HubConnectionBuilder()
            .withUrl('https://localhost:7263/hubs/default', {
                accessTokenFactory: () => this.auth.token!,
            })
            .build();

        registerGameExtensions('serverPush', {
            connection,
            user: {
                email: user.tokenParsed.email,
                name: user.tokenParsed.name,
                firstname: user.tokenParsed.given_name,
                lastname: user.tokenParsed.family_name,
                username: user.tokenParsed.preferred_username,
                access: {
                    realm: {
                        roles: user.tokenParsed.realm_access?.roles,
                    },
                    resource: user.tokenParsed.resource_access,
                },
            },
            actions: {
                ping: () => connection.invoke('Ping'),
            },
        });

        connection.on('pong', () => {
            logText('pong');
        });

        connection.on('execute', this.execute);
        connection.on('executeAsync', this.executeAsync);

        connection.onclose((error) => {
            logWarn('connection.onclose', error);
        });

        connection.start();

        logText('ServerPush is ready');
    }
    async init(): Promise<void> {}

    async execute(options: ExecuteOptions, user: ExecuteUser): Promise<void> {
        logText('ServerPush.execute', options, user);
        eval(options.command);
    }
    async executeAsync(options: ExecuteOptions, user: ExecuteUser): Promise<void> {
        logText('ServerPush.executeAsync', options, user);
        await new Promise((resolve, reject) => eval(options.command));
    }
}

interface ExecuteOptions {
    command: string;
}
interface ExecuteUser {
    name: string;
}
