import { logText } from './src/utils.js';
import { VehicleMovement } from './src/movement.js';

const modules = [new VehicleMovement()];

Hooks.once('init', async function () {
    logText('initiating');
    game.og = {
        functions: {},
    };
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
