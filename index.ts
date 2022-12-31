import { ServerPush } from './src/ServerPush';
import { ActivateScene } from './src/ActivateScene';
import { OpenSceneNotes } from './src/OpenSceneNotes';
import { JournalModule } from './src/Journal';
import { SocialEncounterTracker } from './src/SocialEncounterTracker';
import { Reload } from './src/Reload';
import { StarWarsCrawl } from './src/Crawl';
import { IOgModule } from './src/IModule';
import { OgModuleManager } from './src/OgModuleManager';
import { OgExperiment } from './src/OgExperiments';
import { DefaultLoggerFactory, ILogger } from './src/utils';
import { GlobalSettings } from './src/OgSettings';

const rootLogger: ILogger = DefaultLoggerFactory.create(OgExperiment.namespace);
const globalSettings = new GlobalSettings(rootLogger);

OgExperiment.defaultLogger = rootLogger; // TODO: remove this field from OgExperiment and ensure an ILogger is injected into OgSetting instead.
OgExperiment.globalSettings = globalSettings;

const modules = [
    new JournalModule(rootLogger),
    new ActivateScene(rootLogger),
    new OpenSceneNotes(rootLogger),
    new SocialEncounterTracker(rootLogger),
    new ServerPush(rootLogger),
    new Reload(rootLogger),
    new StarWarsCrawl(rootLogger),
    globalSettings,
] as IOgModule[];
export const moduleManager = new OgModuleManager(modules, rootLogger);

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
