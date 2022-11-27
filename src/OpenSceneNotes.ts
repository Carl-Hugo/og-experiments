import { IOgModule } from './IModule';
import { namespace } from './OgSettings';
import { addGameExtensions, logText } from './utils';

export class OpenSceneNotes implements IOgModule {
    private _openSceneNotesOnReady: Boolean = true;
    private _openSceneNotesKeyOnReady: string = 'openSceneNotesOnReady';

    init(): void {
        logText('OpenSceneNotes initiating');

        (game as Game).settings.register(namespace, this._openSceneNotesKeyOnReady, {
            name: 'Auto-open scene notes?',
            hint: 'If enabled, the scene notes of the current scene will open when the server first load.',
            scope: 'client',
            config: true,
            type: Boolean,
            default: this._openSceneNotesOnReady,
            onChange: (value) => (this._openSceneNotesOnReady = value),
        });
        this.openSceneNotesOnReady = (game as Game).settings.get(namespace, this._openSceneNotesKeyOnReady) as boolean;

        addGameExtensions('flow', {
            openSceneNotes: this.openSceneNotes,
        });

        logText('OpenSceneNotes initiated');
    }
    ready(): void {
        logText('OpenSceneNotes is getting ready');
        if (this.openSceneNotesOnReady) {
            this.openSceneNotes();
        }
        logText('OpenSceneNotes is ready');
    }

    private openSceneNotes() {
        const currentSceneJournal = (game as Game).scenes!.active!.journal;
        if (currentSceneJournal && currentSceneJournal.sheet) {
            currentSceneJournal.sheet.render(true);
        }
    }

    public get openSceneNotesOnReady() {
        return this._openSceneNotesOnReady;
    }

    public set openSceneNotesOnReady(value: Boolean) {
        this._openSceneNotesOnReady = value;
        (game as Game).settings.set(namespace, this._openSceneNotesKeyOnReady, value);
    }
}
