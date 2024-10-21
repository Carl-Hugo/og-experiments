import { ConfiguredDocumentClass } from '@league-of-foundry-developers/foundry-vtt-types/src/types/helperTypes';
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
        hint: 'If enabled, the scene notes of the current scene will open when the scene updates.',
        type: Boolean,
        scope: 'world',
    });

    private openSceneNotesActiveOnly = new OgSetting<boolean>('openSceneNotesActiveOnly', false, {
        name: 'Auto-open scene notes only for the active scene?',
        hint: 'If enabled, the scene notes of the current active scene will open when the server first load. Otherwise, the notes of any scene you navigate to will open.',
        type: Boolean,
        scope: 'world',
    });

    constructor(logger: ILogger) {
        super(logger);
    }

    override init(): void {
        registerGameExtensions('flow', {
            openSceneNotes: this.openSceneNotes,
        });
    }

    override ready(): void {
        if (this.openSceneNotesOnReady.value) {
            Hooks.on('updateScene', () => {
                this.logDebug('updateScene');
                this.openSceneNotes();
            });
            this.openSceneNotes();
        }
    }

    openSceneNotes() {
        let currentSceneJournal: InstanceType<ConfiguredDocumentClass<typeof JournalEntry>> | null | undefined;
        if (this.openSceneNotesActiveOnly.value) {
            if ((game as Game).scenes?.current === (game as Game).scenes?.active && (game as Game).scenes?.active !== null) {
                currentSceneJournal = (game as Game).scenes?.active?.journal;
            }
        } else {
            currentSceneJournal = (game as Game).scenes?.current?.journal;
        }
        this.logDebug('openSceneNotes: ', currentSceneJournal, 'openSceneNotesActiveOnly: ', this.openSceneNotesActiveOnly.value);
        if (currentSceneJournal) {
            OgJournalHelper.openJournalEntry(currentSceneJournal, this.logger);
        }
    }
}
