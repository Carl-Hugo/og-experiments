import { namespace } from './OgSettings';

// Console wrappers
const prefix = `${namespace} |`;
export function logDebug(...data: any[]) {
    console.debug(prefix, ...data);
}
export function logWarn(...data: any[]) {
    console.warn(prefix, ...data);
}
export function logError(...data: any[]) {
    console.error(prefix, ...data);
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
