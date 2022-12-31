import { ServerPush } from './src/ServerPush';
import { IOgModule } from './src/IModule';
import { ActivateScene } from './src/ActivateScene';
import { OpenSceneNotes } from './src/OpenSceneNotes';
import { globalSettings } from './src/OgSettings';
import { JournalModule } from './src/Journal';
import { SocialEncounterTracker } from './src/SocialEncounterTracker';
import { Reload } from './src/Reload';
import { StarWarsCrawl } from './src/Crawl';
import { OgModuleManager } from './src/OgModuleManager';

const modules = [
    new JournalModule(),
    new ActivateScene(),
    new OpenSceneNotes(),
    new SocialEncounterTracker(),
    new ServerPush(),
    new Reload(),
    new StarWarsCrawl(),
    globalSettings,
] as IOgModule[];
export const moduleManager = new OgModuleManager(modules);

if (process.env.NODE_ENV === 'development') {
    if ((module as any).hot) {
        (module as any).hot.accept();

        if ((module as any).hot.status() === 'apply') {
            for (const template in _templateCache) {
                if (Object.prototype.hasOwnProperty.call(_templateCache, template)) {
                    delete _templateCache[template];
                }
            }
        }
    }
}
