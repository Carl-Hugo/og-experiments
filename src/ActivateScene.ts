import { extensions } from './GameExtensions';
import { IOgModule } from './IModule';
import { logText } from './utils';

export class ActivateScene implements IOgModule {
    init(): void {
        logText('ActivateScene initiating');

        extensions.flow = {
            activate: this.activate,
        };

        (CONFIG as any).TextEditor.enrichers.push({
            pattern: /@ActivateScene\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: (match: any[], options: any) => {
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
            if (target && target.dataset && target.dataset.type === 'ActivateScene' && target.dataset.broken === 'false') {
                e.preventDefault();
                await this.activate(target.dataset.id);
            }
        });

        logText('ActivateScene initiated');
    }
    ready(): void {}

    async activate(targetSceneId: string) {
        logText(`ActivateScene activating: ${targetSceneId}`);

        const currentSceneJournal = (game as Game).scenes!.active!.journal;
        if (currentSceneJournal && currentSceneJournal.sheet) {
            currentSceneJournal.sheet.close();
        }

        const targetScene = (game as Game).scenes!.get(targetSceneId);
        if (targetScene) {
            await targetScene.activate();
            if (targetScene.journal) {
                // await targetScene.journal.show();
                const journal = targetScene.journal;
                if (journal.sheet) {
                    if (!journal.testUserPermission((game as Game).user!, 'LIMITED')) {
                        return ui.notifications!.warn(`You do not have permission to view this ${journal.documentName} sheet.`);
                    }
                    journal.sheet.render(true);
                }
            }
        }
    }
}
