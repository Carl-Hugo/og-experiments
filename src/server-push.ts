// const signalR = require('@microsoft/signalr');
import { HubConnectionBuilder } from '@microsoft/signalr';
import { IOgModule } from './IModule';
import Keycloak, { KeycloakAdapter } from 'keycloak-js';
import { logText } from './utils';

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

    async init() {
        var me = this;
        await this._keycloak
            .init({ onLoad: 'check-sso' }) // check-sso | login-required // silentCheckSsoRedirectUri: 'https://localhost:7263/'
            .then(function (authenticated) {
                console.warn(authenticated ? 'authenticated' : 'not authenticated');
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
            console.error("Not authenticated! Can't proceed with ServerPush.ready.");
            return;
        }

        let connection = new HubConnectionBuilder()
            .withUrl('https://localhost:7263/journal-entry', {
                accessTokenFactory: () => this.auth.token!,
            })
            .build();

        connection.on('pong', () => {
            logText('pong');
        });

        connection.on('createShowAndDeleteNewJournalEntry', this.createShowAndDeleteNewJournalEntry);
        connection.on('createAndShowTemporaryJournalEntry', this.createAndShowTemporaryJournalEntry);

        connection.start().then(() => connection.invoke('Ping'));

        logText('ServerPush is ready');
    }
    async init(): Promise<void> {
        logText('ServerPush initiating');
        // Javascript
        // game.experiments.showJournalEntryById = async function (journalEntryId) {
        //     // var noteById = game.journal.find((entry) => entry.data._id === journalEntryId);
        //     // await noteById.show();
        //     game.StoryTeller.showStoryByIDToAll(journalEntryId);
        // };
        // //var journalEntryId="a7LBKwELqDwwcCzz"
        // game.experiments.showNewJournalEntry = async function (name, content, deleteDelay, isPermanent) {
        //     const entry = await JournalEntry.create({
        //         name: name,
        //         content: content,
        //     });
        //     logText(`Journal entry '${name}' created with isPermanent = ${isPermanent}.`);
        //     await entry.show('text', true);

        //     if (isPermanent) {
        //         return;
        //     }
        //     const deleteEntryInMS = deleteDelay || 60000;
        //     logText(`Scheduling journal entry deletion in ${deleteEntryInMS} ms.`);
        //     setTimeout(async () => {
        //         logText('Deleting journal entry', entry);
        //         await entry.delete();
        //         logText('Journal entry deleted');
        //     }, deleteEntryInMS);

        //     // V10 multi-page syntax
        //     // JournalEntry.create({name: "Journal name", pages:[{type: "text", name: "Quest hook", text:{content: `HTML content here`}}]})
        // };

        logText('ServerPush initiated');
    }

    async createAndShowTemporaryJournalEntry(options: ICreateAndShowTemporaryJournalEntry): Promise<void> {
        const entry = await JournalEntry.create(
            {
                name: options.name,
                content: options.content,
                // permission: foundry.CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER,
                permissions: foundry.CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER,
            },
            { temporary: true, renderSheet: true }
        );
        if (entry === undefined) {
            console.error('No entry was created.');
            return;
        }
        logText(`Journal entry '${options.name}' created.`);
        // await entry.show('text', true);
        await entry.sheet?.render(true);
    }

    async createShowAndDeleteNewJournalEntry(options: ICreateShowAndDeleteNewJournalEntry): Promise<void> {
        const entry = await JournalEntry.create({
            name: options.name,
            content: options.content,
        });
        if (entry === undefined) {
            console.error('No entry was created.');
            return;
        }
        logText(`Journal entry '${options.name}' created with isPermanent = ${options.isPermanent}.`);
        await entry.show('text', true);

        if (options.isPermanent) {
            return;
        }
        const deleteEntryInMS = options.deleteDelay || 60000;
        logText(`Scheduling journal entry deletion in ${deleteEntryInMS} ms.`);
        setTimeout(async () => {
            console.debug('Deleting journal entry', entry);
            await entry.delete();
            logText('Journal entry deleted');
        }, deleteEntryInMS);

        // V10 multi-page syntax
        // JournalEntry.create({name: "Journal name", pages:[{type: "text", name: "Quest hook", text:{content: `HTML content here`}}]})
    }
}
// await game.experiments.showNewJournalEntry('Invented note', '<p>Some cool text with <strong>bold content</strong>.</p>');

interface ICreateShowAndDeleteNewJournalEntry {
    name: string;
    content: string;
    deleteDelay?: number;
    isPermanent: boolean;
}
interface ICreateAndShowTemporaryJournalEntry {
    name: string;
    content: string;
    deleteDelay?: number;
    isPermanent: boolean;
}
