import { IOgModule } from './modules';
export * from './modules';
export * from './utils';

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

export function registerOgModule(moduleFactory: () => IOgModule): IOgModule {
    enforceOgExtensionsInitialized();
    const module = moduleFactory();
    (globalThis as any)[gameExtensionsKey][module.id] = {
        ...(globalThis as any)[gameExtensionsKey][module.id],
        ...module,
    };
    return module;
}
