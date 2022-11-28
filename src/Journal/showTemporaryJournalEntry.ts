import { logError, logText } from '../utils';

export async function showTemporaryJournalEntry(options: ICreateAndShowTemporaryJournalEntry): Promise<void> {
    const entry = await JournalEntry.create(
        {
            name: options.name,
            pages: [
                {
                    name: options.name,
                    type: 'text',
                    text: {
                        content: options.content,
                    },
                    // @ts-ignore
                    ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER },
                },
            ],
            // @ts-ignore
            ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER },
        },
        { temporary: true, renderSheet: true }
    );

    if (!entry) {
        logError('No entry was created.');
        return;
    }

    logText(`Journal entry '${options.name}' created.`, entry);
    await entry.sheet?.render(true);
}

interface ICreateAndShowTemporaryJournalEntry {
    name: string;
    content: string;
    ownership: number;
}

// async showAndDeleteNewJournalEntry(options: ICreateShowAndDeleteNewJournalEntry): Promise<void> {
//     const entry = await JournalEntry.create({
//         name: options.name,
//         content: options.content,
//     });
//     if (entry === undefined) {
//         console.error('No entry was created.');
//         return;
//     }
//     logText(`Journal entry '${options.name}' created with isPermanent = ${options.isPermanent}.`);
//     await entry.show('text', true);
//
//     if (options.isPermanent) {
//         return;
//     }
//     const deleteEntryInMS = options.deleteDelay || 60000;
//     logText(`Scheduling journal entry deletion in ${deleteEntryInMS} ms.`);
//     setTimeout(async () => {
//         console.debug('Deleting journal entry', entry);
//         await entry.delete();
//         logText('Journal entry deleted');
//     }, deleteEntryInMS);
//
//     // V10 multi-page syntax
//     // JournalEntry.create({name: "Journal name", pages:[{type: "text", name: "Quest hook", text:{content: `HTML content here`}}]})
// }
//
// interface ICreateShowAndDeleteNewJournalEntry {
//     name: string;
//     content: string;
//     deleteDelay?: number;
//     isPermanent: boolean;
// }
