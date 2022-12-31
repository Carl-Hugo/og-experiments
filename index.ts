import { ServerPush } from './src/ServerPush';
import { ActivateScene } from './src/ActivateScene';
import { OpenSceneNotes } from './src/OpenSceneNotes';
import { GlobalSettings } from './src/OgSettings';
import { JournalModule } from './src/Journal';
import { SocialEncounterTracker } from './src/SocialEncounterTracker';
import { Reload } from './src/Reload';
import { StarWarsCrawl } from './src/Crawl';
import { IOgModule } from './src/IModule';
import { OgModuleManager } from './src/OgModuleManager';
import { DefaultLogger, ILogger } from './src/utils';

const defaultLogger: ILogger = new DefaultLogger();
export const globalSettings = new GlobalSettings(defaultLogger);
const modules = [
    // new JournalModule(),
    // new ActivateScene(),
    // new OpenSceneNotes(),
    // new SocialEncounterTracker(),
    // new ServerPush(),
    // new Reload(),
    // new StarWarsCrawl(),
    // globalSettings,
] as IOgModule[];
export const moduleManager = new OgModuleManager(modules, defaultLogger);

// if (process.env.NODE_ENV === 'development') {
//     if ((module as any).hot) {
//         (module as any).hot.accept();

//         if ((module as any).hot.status() === 'apply') {
//             for (const template in _templateCache) {
//                 if (Object.prototype.hasOwnProperty.call(_templateCache, template)) {
//                     delete _templateCache[template];
//                 }
//             }
//         }
//     }
// }
