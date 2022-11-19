import { extensions } from './GameExtensions';
import { IOgModule } from './IModule';
import { logText } from './utils';

export class SceneUtils implements IOgModule {
    init(): void {
        logText('SceneUtils initiating');

        (extensions as any).scene = {
            activate: async (targetSceneId: string) => {
                logText(`SceneUtils activating: ${targetSceneId}`);

                const currentSceneJournal = (game as Game).scenes!.active!.journal;
                if (currentSceneJournal && currentSceneJournal.sheet) {
                    currentSceneJournal.sheet.close();
                }

                const targetScene = (game as Game).scenes!.get(targetSceneId);
                if (targetScene) {
                    await targetScene.activate();
                    if (targetScene.journal) {
                        await targetScene.journal.show();
                    }
                }
            },
        };

        logText('SceneUtils initiated');
    }
    ready(): void {}
}
