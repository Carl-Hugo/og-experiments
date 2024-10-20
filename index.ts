// import { ServerPush } from './src/ServerPush';
import { ActivateScene } from './src/ActivateScene';
import { OpenSceneNotes } from './src/OpenSceneNotes';
import { JournalModule } from './src/Journal';
import { SocialEncounterTracker } from './src/SocialEncounterTracker';
import { StarWarsCrawl } from './src/Crawl';
import { Reload } from './src/Reload';
import { IOgModule } from './src/IModule';
import { OgModuleManager } from './src/OgModuleManager';
import { OgExperiment } from './src/OgExperiments';
import { DefaultLoggerFactory, ILogger } from './src/utils';
import { GlobalSettings } from './src/OgSettings';
import { LoreSyncModule } from './src/Journal/LoreSync';
import { ChaosElemental } from './src/ChaosElemental';
import { CustomFoundryLogo } from './src/CustomFoundryLogo';
import { OgDebug } from './src/OgDebug';
import { MonacoMacroEditorAddExtraTypes } from './src/MonacoMacroEditor';

const rootLogger: ILogger = DefaultLoggerFactory.createRootLogger();
const globalSettings = new GlobalSettings(rootLogger);

// TODO: remove the globalSettings field from OgExperiment, remove its usage from
// OgJournalHelper, and remove the OgJournalHelper class altogether (create a better
// implementation instead).
OgExperiment.globalSettings = globalSettings;

const modules = [
    new ChaosElemental(rootLogger),
    new LoreSyncModule(rootLogger),
    new JournalModule(rootLogger),
    new ActivateScene(rootLogger),
    new OpenSceneNotes(rootLogger),
    new SocialEncounterTracker(rootLogger),
    // new ServerPush(rootLogger),
    new Reload(rootLogger),
    new StarWarsCrawl(rootLogger),
    new CustomFoundryLogo(rootLogger),
    new OgDebug(rootLogger),
    new MonacoMacroEditorAddExtraTypes(rootLogger),
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
//                     console.debug(OgExperiment.namespace, 'HOT RELOAD', template);
//                 }
//             }
//         }
//     }
// }
