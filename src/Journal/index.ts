import { OgBaseModule } from '../IModule';
import { registerGameExtensions } from '../utils';
import { showTemporaryJournalEntry } from './showTemporaryJournalEntry';
import { openJournalEntry } from './openJournalEntry';

export { showTemporaryJournalEntry, openJournalEntry };

export class JournalModule extends OgBaseModule {
    public get name(): string {
        return 'Journal';
    }
    public override ready(): void {
        registerGameExtensions('flow', {
            showTemporaryJournalEntry,
            openJournalEntry,
        });
    }
}
