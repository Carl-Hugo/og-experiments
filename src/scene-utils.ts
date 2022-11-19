import { extensions } from './GameExtensions';
import { IOgModule } from './IModule';
import { logText } from './utils';

export class SceneUtils implements IOgModule {
    init(): void {
        logText('SceneUtils initiating');

        (extensions as any).SceneUtils = {
            activate: this.activate,
        };

        // Inspired from https://github.com/claypooj21/journals-like-a-script
        (CONFIG as any).TextEditor.enrichers.push({
            pattern: /@ActivateScene\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: (match: any[], options: any) => {
                // logText(`match:`, match);
                // logText(`options:`, options);

                let [target, name] = match.slice(1, 3);
                var scene = (game as Game).scenes!.get(target);
                let broken = scene ? false : true;
                const data = {
                    name: name,
                    icon: 'fas fa-code',
                    classes: ['content-link'],
                    dataset: {
                        uuid: `ActivateScene.${target}`,
                        id: target,
                        type: 'ActivateScene',
                        tooltip: 'Scene',
                        broken: broken,
                    },
                };
                if (broken) {
                    (data as any).icon = 'fas fa-unlink';
                    data.classes.push('broken');
                    data.name = target;
                }

                const a = document.createElement('a');
                a.classList.add(...data.classes);
                a.draggable = true;
                for (let [k, v] of Object.entries(data.dataset)) {
                    a.dataset[k] = v;
                }
                a.innerHTML = `<i class="${data.icon}"></i><i class="fas fa-map"></i> ${data.name}`;
                return a;
            },
        });

        document.addEventListener('click', async (e) => {
            var target = e.target as any;
            logText('CLICK!', target.dataset.broken);
            if (target && target.dataset && target.dataset.type === 'ActivateScene' && target.dataset.broken === 'false') {
                e.preventDefault();
                await this.activate(target.dataset.id);
            }
        });

        logText('SceneUtils initiated');
    }
    ready(): void {}

    async activate(targetSceneId: string) {
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
    }
}
