export function logText(...data: any[]) {
    console.debug('og-experiments |', ...data);
}

function initializeOgExtensions() {
    (game as any)['og'] = {};
}

function enforceOgExtensionsInitialized() {
    if ((game as any)['og'] === undefined) {
        initializeOgExtensions();
    }
}

export function addGameExtensions(key: string, setting: any) {
    enforceOgExtensionsInitialized();
    (game as any)['og'][key] = {
        ...(game as any)['og'][key],
        ...setting,
    };
}
