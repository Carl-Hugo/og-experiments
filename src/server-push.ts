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
    ready(): void {}
    init() {
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

        let connection = new HubConnectionBuilder().withUrl('https://localhost:7263/journal-entry').build();

        connection.on('pong', () => {
            logText('pong');
        });

        connection.start().then(() => connection.invoke('Ping'));

        logText('ServerPush initiated');
    }
}
// await game.experiments.showNewJournalEntry('Invented note', '<p>Some cool text with <strong>bold content</strong>.</p>');
