import { logText } from './utils.js';

// var tokenID = 'LwesQv3Es3FcXf8c';
// var token = game.scenes.current.tokens.get(tokenID);

// token.data.name
// token.data.x
// token.data.y

// Get
// token.hidden

const logTokenPosition = (token, state) => {
    if (state) {
        logText(`${token.data.name} position: { x: ${token.data.x}, y: ${token.data.y} }`);
    }
};

// { x: 1600, y: 1200 }
// { x: 1950, y: 1000 }

// await token.update({ x: 1600, y: 1200 })
// await token.update({ x: 1950, y: 1000 })

// var canvasToken = canvas.tokens.get(tokenID)
// await canvas.scene.updateEmbeddedDocuments('Token', [{ _id: tokenID, hidden: false }]);

async function animateVehicleEntry(tokenID, targetPosition, soundSrc, waitTimeBeforeAnim) {
    await AudioHelper.preloadSound(soundSrc);
    const token = game.scenes.current.tokens.get(tokenID);
    AudioHelper.play({ src: soundSrc, volume: 0.8, loop: false }, true);
    const timeout = waitTimeBeforeAnim || 0;
    setTimeout(async () => {
        await canvas.scene.updateEmbeddedDocuments('Token', [{ _id: token.id, hidden: false }]);
        await token.update(targetPosition); // { x: 1600, y: 1200 }
    }, timeout);
}

// await game.og.functions.animateVehicleEntry(tokenID, { x: 1600, y: 1200 }, 'worlds/star-wars-eote/sounds/Landing Speeder Truck.mp3', 1000);
// await game.og.functions.animateVehicleEntry(tokenID, { x: 1950, y: 1000 }, 'worlds/star-wars-eote/sounds/Landing Speeder Truck.mp3', 1000);

//Falcon landing.mp3
//Landing Speeder Truck.mp3

export class VehicleMovement {
    init() {
        logText('VehicleMovement initiating');
        Hooks.on('hoverToken', logTokenPosition);
        Hooks.on('controlToken', logTokenPosition);
        game.og.functions.animateVehicleEntry = animateVehicleEntry;
        logText('VehicleMovement initiated');
    }
}
