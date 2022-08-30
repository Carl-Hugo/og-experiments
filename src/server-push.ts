// import { logText } from './utils.js';
// const signalR = require('@microsoft/signalr');
import { HubConnectionBuilder } from '@microsoft/signalr';
import { IOgModule } from './IModule';

function logText(text: string) {
    console.log('og-experiments | ' + text);
}

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

export class ServerPush implements IOgModule {
    ready(): void {
        logText('ServerPush getting ready');

        let connection = new HubConnectionBuilder().withUrl('https://localhost:7263/journal-entry').build();

        connection.on('pong', () => {
            logText('pong');
        });

        connection.on('createShowAndDeleteNewJournalEntry', this.createShowAndDeleteNewJournalEntry);
        connection.on('createAndShowTemporaryJournalEntry', this.createAndShowTemporaryJournalEntry);

        connection.start().then(() => connection.invoke('Ping'));

        logText('ServerPush is ready');
    }
    init(): void {
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
        //     console.log(`Journal entry '${name}' created with isPermanent = ${isPermanent}.`);
        //     await entry.show('text', true);

        //     if (isPermanent) {
        //         return;
        //     }
        //     const deleteEntryInMS = deleteDelay || 60000;
        //     console.log(`Scheduling journal entry deletion in ${deleteEntryInMS} ms.`);
        //     setTimeout(async () => {
        //         console.log('Deleting journal entry', entry);
        //         await entry.delete();
        //         console.log('Journal entry deleted');
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
        console.log(`Journal entry '${options.name}' created.`);
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
        console.log(`Journal entry '${options.name}' created with isPermanent = ${options.isPermanent}.`);
        await entry.show('text', true);

        if (options.isPermanent) {
            return;
        }
        const deleteEntryInMS = options.deleteDelay || 60000;
        console.log(`Scheduling journal entry deletion in ${deleteEntryInMS} ms.`);
        setTimeout(async () => {
            console.log('Deleting journal entry', entry);
            await entry.delete();
            console.log('Journal entry deleted');
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
