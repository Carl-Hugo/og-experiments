import { IOgModule } from './IModule';
import { namespace } from './OgSettings';
import { logText } from './utils';

export class OpenSceneNotes implements IOgModule {
    private _openSceneNotes: Boolean = true;
    private _openSceneNotesKey: string = 'openSceneNotes';

    init(): void {
        logText('OpenSceneNotes initiating');

        (game as Game).settings.register(namespace, this._openSceneNotesKey, {
            name: 'Auto-open scene notes?',
            hint: 'If enabled, the scene notes of the current scene will open when the server first load.',
            scope: 'client',
            config: true,
            type: Boolean,
            default: this._openSceneNotes,
            onChange: (value) => (this._openSceneNotes = value),
        });
        this.openSceneNotes = (game as Game).settings.get(namespace, this._openSceneNotesKey) as boolean;

        logText('OpenSceneNotes initiated');
    }
    ready(): void {
        logText('OpenSceneNotes is getting ready');
        if (this.openSceneNotes) {
            const currentSceneJournal = (game as Game).scenes!.active!.journal;
            if (currentSceneJournal && currentSceneJournal.sheet) {
                currentSceneJournal.sheet.render(true);
            }
        }
        logText('OpenSceneNotes is ready');
    }

    public get openSceneNotes() {
        return this._openSceneNotes;
    }

    public set openSceneNotes(value: Boolean) {
        this._openSceneNotes = value;
        (game as Game).settings.set(namespace, this._openSceneNotesKey, value);
    }
}
