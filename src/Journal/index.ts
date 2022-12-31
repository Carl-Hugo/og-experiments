import { globalSettings } from '../..';
import { OgBaseModule } from '../IModule';
import { ILogger, registerGameExtensions } from '../utils';

export class JournalModule extends OgBaseModule {
    public get name(): string {
        return 'Journal';
    }
    public override ready(): void {
        registerGameExtensions('flow', {
            showTemporaryJournalEntry: (options: ICreateAndShowTemporaryJournalEntry) =>
                OgJournalHelper.showTemporaryJournalEntry(options, this.logger),
            openJournalEntry: (journal: JournalEntry | null) => OgJournalHelper.openJournalEntry(journal, this.logger),
        });
    }
}

interface ICreateAndShowTemporaryJournalEntry {
    name: string;
    content: string;
    ownership: number;
}

export class OgJournalHelper {
    static async showTemporaryJournalEntry(options: ICreateAndShowTemporaryJournalEntry, logger: ILogger): Promise<void> {
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
            logger.logError('No entry was created.');
            return;
        }

        logger.logDebug(`Journal entry '${options.name}' created.`, entry);
        await entry.sheet?.render(true);
    }

    static openJournalEntry(journal: JournalEntry | null, logger: ILogger) {
        if (journal && journal.sheet) {
            if (!journal.testUserPermission((game as Game).user!, 'LIMITED')) {
                const message = `You do not have permission to view this ${journal.documentName} journal entry.`;
                logger.logWarn(message);
                if (globalSettings.accessDeniedSilentlyFails.value) {
                    return;
                }
                return ui.notifications!.warn(message);
            }
            journal.sheet.render(true);
        }
    }
}
