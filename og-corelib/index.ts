import { IOgModule, OgBaseModule } from './modules';
import { OgSetting } from './settings';
import { Lazy } from './utils';

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

function registerOgModule(moduleFactory: () => IOgModule): IOgModule {
    enforceOgExtensionsInitialized();
    const module = moduleFactory();
    (globalThis as any)[gameExtensionsKey][module.id] = {
        ...(globalThis as any)[gameExtensionsKey][module.id],
        ...module,
    };
    // Object.assign((globalThis.og as any)[module.id] || {}, module);
    return module;
}

export {};

export interface IOgCoreLib {
    registerModule: (moduleFactory: () => IOgModule) => IOgModule;
    Lazy: typeof Lazy;
    Setting: typeof OgSetting;
    BaseModule: typeof OgBaseModule;
}

export interface IOgGlobal extends IOgCoreLib {}

declare global {
    var og: IOgGlobal;
}

globalThis.og = window.og || {
    registerModule: registerOgModule,
    Lazy: Lazy,
    Setting: OgSetting,
    BaseModule: OgBaseModule,
};
