import { IOgModule, OgBaseModule } from './IModule';
import { OgSetting } from './OgSettings';
import { openJournalEntry } from './Journal/openJournalEntry';
import { registerGameExtensions } from './utils';

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
        registerGameExtensions('flow', {
            openSceneNotes,
        });
    }

    ready(): void {
        this.openSceneNotesOnReady.ready();
        if (this.openSceneNotesOnReady.value) {
            openSceneNotes();
        }
    }
}

export function openSceneNotes() {
    const currentSceneJournal = (game as Game).scenes!.active!.journal;
    openJournalEntry(currentSceneJournal);
}
