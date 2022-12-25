import { namespace } from './OgSettings';
import { logError, logText } from './utils';

const foundryModuleEventName = `module.${namespace}`;

export interface OgGameModuleSocketEvent<T> {
    action: string;
    payload: T;
}

export class OgGameModuleSocket {
    private registrations: { action: string; delegate: (payload: any) => void | Promise<void> }[] = [];
    constructor(public ogModuleName: string) {}

    registerAction<T>(action: string, delegate: (payload: T) => void | Promise<void>, thisArgs: unknown = undefined) {
        const g = game as Game;
        if (!g.socket) {
            logError('registerToSocketEvent: The game socket was not found.');
            return;
        }
        logText(`Registering socket event ${this.ogModuleName}`);

        if (thisArgs) {
            logText(`OgGameModuleSocket:registerAction:${action} | Binding delegate.`, thisArgs);
            this.registrations.push({ action, delegate: (payload: T) => delegate.apply(thisArgs, [payload]) });
        } else {
            this.registrations.push({ action, delegate });
        }
        g.socket.on(foundryModuleEventName, async (receivedEvent: InternalSocketEvent) => {
            logText('Socket event received: ', receivedEvent);
            if (receivedEvent.name === this.ogModuleName && receivedEvent.action == action) {
                delegate.apply(thisArgs, [receivedEvent.payload]);
            }
        });
    }

    broadcast<T>(event: OgGameModuleSocketEvent<T>) {
        const g = game as Game;
        if (!g.socket) {
            logError('broadcastSocketEvent: The game socket was not found.');
            return;
        }
        g.socket.emit(foundryModuleEventName, { ...event, name: this.ogModuleName } as InternalSocketEvent);
    }

    broadcastToAll<T>(event: OgGameModuleSocketEvent<T>) {
        this.broadcast(event);
        var registration = this.registrations.find((e) => e.action == event.action);
        if (registration) {
            registration.delegate(event.payload);
        } else {
            logError('Impossible to broadcast the event to self.', registration, event);
        }
    }
}

interface InternalSocketEvent {
    name: string;
    action: string;
    payload: any;
}
