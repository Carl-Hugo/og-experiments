import { IOgModule } from '../IModule';
import { registerGameExtensions } from '../utils';
import { showTemporaryJournalEntry } from './showTemporaryJournalEntry';
import { openJournalEntry } from './openJournalEntry';

export { showTemporaryJournalEntry, openJournalEntry };

export class JournalModule implements IOgModule {
    init(): void {}
    ready(): void {
        registerGameExtensions('flow', {
            showTemporaryJournalEntry,
            openJournalEntry,
        });
    }
}
