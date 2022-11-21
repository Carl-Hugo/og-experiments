import './styles/module.scss';
import { logText } from './src/utils';
import { ServerPush } from './src/server-push';
import { IOgModule } from './src/IModule';
import { ActivateScene } from './src/ActivateScene';
import { extensions } from './src/GameExtensions';
import { OpenSceneNotes } from './src/OpenSceneNotes';

const modules = [
    // extensions.settings,
    new ActivateScene(),
    new OpenSceneNotes(),
    /*, new ServerPush()*/
    /*, new VehicleMovement(),*/
] as IOgModule[];

Hooks.once('init', async function () {
    logText('initiating');

    for (let index = 0; index < modules.length; index++) {
        const module = modules[index];
        if (module.init) {
            module.init();
        }
    }

    (game as any)['og'] = extensions;

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
