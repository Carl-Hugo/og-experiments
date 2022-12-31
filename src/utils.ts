import { namespace } from './OgSettings';

// Console wrappers
const prefix = `${namespace} |`;
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
}
class DefaultLogger implements ILogger {
    logDebug(...data: any[]) {
        console.debug(prefix, ...data);
    }
    logWarn(...data: any[]) {
        console.warn(prefix, ...data);
    }
    logError(...data: any[]) {
        console.error(prefix, ...data);
    }
    logInfo(...data: any[]) {
        console.info(prefix, ...data);
    }
}
export const defaultLogger: ILogger = new DefaultLogger();

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
