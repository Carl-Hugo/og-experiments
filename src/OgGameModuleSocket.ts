import { namespace } from './OgSettings';
import { logError, logText } from './utils';

const foundryModuleEventName = `module.${namespace}`;

export interface OgGameModuleSocketEvent<T> {
    action: string;
    payload: T;
}

interface InternalSocketEvent {
    name: string;
    action: string;
    payload: any;
}

export class OgGameModuleSocket {
    constructor(public ogModuleName: string) {}

    registerAction<T>(action: string, delegate: (payload: T) => {}) {
        const g = game as Game;
        if (!g.socket) {
            logError('registerToSocketEvent: The game socket was not found.');
            return;
        }
        logText(`Registering socket event ${this.ogModuleName}`);
        g.socket.on(foundryModuleEventName, async (receivedEvent: InternalSocketEvent) => {
            logText('Socket event received: ', receivedEvent);
            if (receivedEvent.name === this.ogModuleName && receivedEvent.action == action) {
                delegate(receivedEvent.payload);
            }
        });
    }

    // registerAny<T>(delegate: (event: OgGameModuleSocketEvent<T>) => {}) {
    //     const g = game as Game;
    //     if (!g.socket) {
    //         logError('registerToSocketEvent: The game socket was not found.');
    //         return;
    //     }
    //     logText(`Registering socket event ${this.ogModuleName}`);
    //     g.socket.on(foundryModuleEventName, async (receivedEvent: InternalSocketEvent) => {
    //         logText('Socket event received: ', receivedEvent);
    //         if (receivedEvent.name === this.ogModuleName) {
    //             delegate(receivedEvent);
    //         }
    //     });
    // }

    broadcast<T>(event: OgGameModuleSocketEvent<T>) {
        const g = game as Game;
        if (!g.socket) {
            logError('broadcastSocketEvent: The game socket was not found.');
            return;
        }
        g.socket.emit(foundryModuleEventName, { ...event, name: this.ogModuleName } as InternalSocketEvent);
    }
}
