import { logText } from './src/utils';
// import { VehicleMovement } from './src/movement.js';
import { ServerPush } from './src/server-push';
import { IOgModule } from './src/IModule';

const modules = [/*new VehicleMovement(),*/ new ServerPush()] as IOgModule[];

Hooks.once('init', async function () {
    logText('initiating');
    // game.experiments = {};
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
