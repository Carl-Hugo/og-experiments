import { IOgModule, OgBaseModule } from './IModule';
import { OgSetting } from './OgSettings';
import { openJournalEntry } from './Journal/openJournalEntry';
import { registerGameExtensions, logDebug } from './utils';

export class OpenSceneNotes extends OgBaseModule {
    public get name(): string {
        return 'OpenSceneNotes';
    }
    private openSceneNotesOnReady = new OgSetting<boolean>('openSceneNotesOnReady', true, {
        name: 'Auto-open scene notes?',
        hint: 'If enabled, the scene notes of the current scene will open when the server first load.',
        type: Boolean,
    });

    init(): void {
        logDebug('OpenSceneNotes initiating');
        registerGameExtensions('flow', {
            openSceneNotes,
        });
        logDebug('OpenSceneNotes initiated');
    }

    ready(): void {
        logDebug('OpenSceneNotes is getting ready');
        this.openSceneNotesOnReady.ready();
        if (this.openSceneNotesOnReady.value) {
            openSceneNotes();
        }
        logDebug('OpenSceneNotes is ready');
    }
}

export function openSceneNotes() {
    const currentSceneJournal = (game as Game).scenes!.active!.journal;
    openJournalEntry(currentSceneJournal);
}
