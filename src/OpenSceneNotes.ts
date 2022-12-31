import { OgBaseModule } from './IModule';
import { OgJournalHelper } from './Journal';
import { OgSetting } from './OgSettings';
import { ILogger, registerGameExtensions } from './utils';

export class OpenSceneNotes extends OgBaseModule {
    public get name(): string {
        return 'OpenSceneNotes';
    }
    private openSceneNotesOnReady = new OgSetting<boolean>('openSceneNotesOnReady', true, {
        name: 'Auto-open scene notes?',
        hint: 'If enabled, the scene notes of the current scene will open when the server first load.',
        type: Boolean,
    });

    constructor(logger: ILogger) {
        super(logger);
    }

    init(): void {
        registerGameExtensions('flow', {
            openSceneNotes: this.openSceneNotes,
        });
    }

    ready(): void {
        if (this.openSceneNotesOnReady.value) {
            this.openSceneNotes();
        }
    }

    openSceneNotes() {
        const currentSceneJournal = (game as Game).scenes!.active!.journal;
        OgJournalHelper.openJournalEntry(currentSceneJournal, this.logger);
    }
}
