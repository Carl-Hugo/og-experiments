import { OgExperiment } from './OgExperiments';

// Console wrappers
// const prefix = `${OgExperiment.namespace} |`;
// export function logDebug(...data: any[]) {
//     console.debug(prefix, ...data);
// }
// export function logWarn(...data: any[]) {
//     console.warn(prefix, ...data);
// }
// export function logError(...data: any[]) {
//     console.error(prefix, ...data);
// }
// export function logInfo(...data: any[]) {
//     console.info(prefix, ...data);
// }

export interface ILogger {
    logDebug(...data: any[]): void;
    logInfo(...data: any[]): void;
    logWarn(...data: any[]): void;
    logError(...data: any[]): void;
    openSession(state: string): ILogger;
}

export class DefaultLoggerFactory {
    static create(...states: string[]): ILogger {
        return new ConsoleLogger(states);
    }
}
class ConsoleLogger implements ILogger {
    constructor(private prefixes: string[]) {}

    logDebug(...data: any[]) {
        console.debug(...this.prefixes, ...data);
    }
    logWarn(...data: any[]) {
        console.warn(...this.prefixes, ...data);
    }
    logError(...data: any[]) {
        console.error(...this.prefixes, ...data);
    }
    logInfo(...data: any[]) {
        console.info(...this.prefixes, ...data);
    }

    openSession(state: string): ILogger {
        return DefaultLoggerFactory.create(...this.prefixes, state);
    }
}

// Game extensions
const gameExtensionsKey = 'og';
function initializeOgExtensions() {
    (game as any)[gameExtensionsKey] = {};
}
function enforceOgExtensionsInitialized() {
    if ((game as any)[gameExtensionsKey] === undefined) {
        initializeOgExtensions();
    }
}
export function registerGameExtensions(key: string, setting: any) {
    enforceOgExtensionsInitialized();
    (game as any)[gameExtensionsKey][key] = {
        ...(game as any)[gameExtensionsKey][key],
        ...setting,
    };
}
// export function getGameExtension<T>(key: string): T {
//     return (game as any)[gameExtensionsKey][key] as T;
// }
