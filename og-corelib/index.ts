import { IOgModule } from './modules';

export * from './modules';

// Game extensions
const gameExtensionsKey = 'og';
function initializeOgExtensions() {
    (globalThis as any)[gameExtensionsKey] = {};
}
function enforceOgExtensionsInitialized() {
    if ((globalThis as any)[gameExtensionsKey] === undefined) {
        initializeOgExtensions();
    }
}
export function registerGameExtensions(key: string, setting: any) {
    enforceOgExtensionsInitialized();
    (globalThis as any)[gameExtensionsKey][key] = {
        ...(globalThis as any)[gameExtensionsKey][key],
        ...setting,
    };
}

export function registerOgPlugin(plugin: IOgModule) {
    enforceOgExtensionsInitialized();
    (globalThis as any)[gameExtensionsKey][plugin.id] = {
        ...(globalThis as any)[gameExtensionsKey][plugin.id],
        ...plugin,
    };
}
