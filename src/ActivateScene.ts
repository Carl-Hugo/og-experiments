import { OgBaseModule } from './IModule';
import { OgJournalHelper } from './Journal';
import { registerGameExtensions } from './utils';

export class ActivateScene extends OgBaseModule {
    public get name(): string {
        return 'ActivateScene';
    }

    init(): void {
        registerGameExtensions('flow', {
            activateScene: this.activateScene,
        });

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
                await this.activateScene(target.dataset.id);
            }
        });
    }

    async activateScene(targetSceneId: string) {
        this.logDebug(`Activating: ${targetSceneId}`);

        const currentSceneJournal = (game as Game).scenes!.active!.journal;
        if (currentSceneJournal && currentSceneJournal.sheet) {
            currentSceneJournal.sheet.close();
        }

        const targetScene = (game as Game).scenes!.get(targetSceneId);
        if (targetScene) {
            await targetScene.activate();
            OgJournalHelper.openJournalEntry(targetScene.journal, this.logger);
        }
    }
}
