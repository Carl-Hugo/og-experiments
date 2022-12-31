import { globalSettings } from '../OgSettings';
import { defaultLogger } from '../utils';

export function openJournalEntry(journal: JournalEntry | null) {
    if (journal && journal.sheet) {
        if (!journal.testUserPermission((game as Game).user!, 'LIMITED')) {
            const message = `You do not have permission to view this ${journal.documentName} journal entry.`;
            defaultLogger.logWarn(message);
            if (globalSettings.accessDeniedSilentlyFails.value) {
                return;
            }
            return ui.notifications!.warn(message);
        }
        journal.sheet.render(true);
    }
}
