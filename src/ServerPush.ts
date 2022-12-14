import { HubConnectionBuilder } from '@microsoft/signalr';
import { OgBaseModule } from './IModule';
import Keycloak from 'keycloak-js';
import { ILogger, registerGameExtensions } from './utils';
import { OgSetting } from './OgSettings';

class AuthService {
    private _keycloak: Keycloak;

    constructor(private logger: ILogger) {
        this._keycloak = new Keycloak({
            url: 'http://localhost:8080/',
            realm: 'OgAuth',
            clientId: 'og-foundry-vtt-module',
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
            .then(function (authenticated: boolean) {
                me.logger.logDebug(authenticated ? 'authenticated' : 'not authenticated');
                me.authenticated = authenticated;
                if (authenticated) {
                    me.token = me._keycloak.token;
                }
            })
            .catch(function (e: any) {
                me.logger.logError('failed to initialize', e);
            });
    }
}

export class ServerPush extends OgBaseModule {
    public get name(): string {
        return 'ServerPush';
    }
    private auth = new AuthService(this.logger);
    private enableServerPush = new OgSetting<boolean>('enableServerPush', true, {
        name: 'Enable the ServerPush module?',
        hint: 'If enabled, the module will load and everyone will need to authenticate againt the KeyClock server.',
        type: Boolean,
        scope: 'world',
    });

    override async ready(): Promise<void> {
        if (!this.enableServerPush.value) {
            return;
        }

        await this.auth.init();
        if (!this.auth.authenticated) {
            this.logError("Not authenticated! Can't proceed with ServerPush.ready.");
            return;
        }
        var user = this.auth.user;
        if (!user.tokenParsed) {
            this.logError('The `tokenParsed` property is not defined.');
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
            this.logDebug('pong');
        });

        connection.on('execute', (options: ExecuteOptions, user: ExecuteUser) => this.execute.apply(this, [options, user]));
        connection.on('executeAsync', (options: ExecuteOptions, user: ExecuteUser) => this.executeAsync.apply(this, [options, user]));

        connection.onclose((error) => {
            this.logWarn('connection.onclose', error);
        });

        connection.start();
    }

    async execute(options: ExecuteOptions, user: ExecuteUser): Promise<void> {
        this.logDebug('ServerPush.execute', options, user);
        eval(options.command);
    }
    async executeAsync(options: ExecuteOptions, user: ExecuteUser): Promise<void> {
        this.logDebug('ServerPush.executeAsync', options, user);
        await new Promise((resolve, reject) => eval(options.command));
    }
}

interface ExecuteOptions {
    command: string;
}
interface ExecuteUser {
    name: string;
}
