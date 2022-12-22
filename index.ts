import { logText } from './src/utils';
// import { VehicleMovement } from './src/movement.js';
import { ServerPush } from './src/ServerPush';
import { IOgModule } from './src/IModule';
import { ActivateScene } from './src/ActivateScene';
import { OpenSceneNotes } from './src/OpenSceneNotes';
import { globalSettings } from './src/OgSettings';
import { JournalModule } from './src/Journal';
import { SocialEncounterTracker } from './src/SocialEncounterTracker';
import { Reload } from './src/Reload';
import { StarWarsCrawl } from './src/Crawl';

const modules = [
    new JournalModule(),
    new ActivateScene(),
    new OpenSceneNotes(),
    new SocialEncounterTracker(),
    new ServerPush(),
    new Reload(),
    new StarWarsCrawl(),
    globalSettings,
    //new VehicleMovement()
] as IOgModule[];

Hooks.once('init', async function () {
    logText('initiating');

    for (let index = 0; index < modules.length; index++) {
        const module = modules[index];
        if (module.init) {
            module.init();
        }
    }

    logText('initiated');
});

Hooks.once('ready', async function () {
    logText('readying');
    for (let index = 0; index < modules.length; index++) {
        const module = modules[index];
        if (module.ready) {
            module.ready();
        }
    }
    logText('ready');
});

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
