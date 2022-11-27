import { IOgModule } from './IModule';
import { OgSetting } from './OgSettings';
import { addGameExtensions, logText } from './utils';

export class OpenSceneNotes implements IOgModule {
    private openSceneNotesOnReady = new OgSetting<boolean>('openSceneNotesOnReady', true, {
        name: 'Auto-open scene notes?',
        hint: 'If enabled, the scene notes of the current scene will open when the server first load.',
        type: Boolean,
    });

    init(): void {
        logText('OpenSceneNotes initiating');
        this.openSceneNotesOnReady.init();
        addGameExtensions('flow', {
            openSceneNotes,
        });
        logText('OpenSceneNotes initiated');
    }

    ready(): void {
        logText('OpenSceneNotes is getting ready');
        if (this.openSceneNotesOnReady.value) {
            openSceneNotes();
        }
        logText('OpenSceneNotes is ready');
    }
}

export function openSceneNotes() {
    const currentSceneJournal = (game as Game).scenes!.active!.journal;
    if (currentSceneJournal && currentSceneJournal.sheet) {
        if (!currentSceneJournal.testUserPermission((game as Game).user!, 'LIMITED')) {
            return ui.notifications!.warn(`You do not have permission to view this ${currentSceneJournal.documentName} sheet.`);
        }
        currentSceneJournal.sheet.render(true);
    }
}
