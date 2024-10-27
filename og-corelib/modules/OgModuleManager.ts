import { ILogger } from '../loggers';
import { OgSetting } from '../settings';
import { IOgModule } from '../modules';

export class OgModuleManager {
    private logger: ILogger;
    private featureFlags: Map<string, OgSetting<boolean>> = new Map();

    // private modules: IOgModule[] = new Array<IOgModule>();
    public register(module: IOgModule): OgModuleManager {
        this.logger.logDebug('Registering module', module);
        // this.modules.push(module);
        // this.registerFeatureFlag(module);
        this.registerHook(module);
        this.logger.logDebug('Module registered', module);
        return this;
    }

    constructor(logger: ILogger) {
        this.logger = logger.createScope('OgModuleManager');
    }
    public registerHook(module: IOgModule) {
        const logger = this.logger.createScope('registerHook');
        Hooks.once('init', async function () {
            const moduleLogger = logger.createScope(module.name);
            moduleLogger.logDebug('initiating');
            module.init();
            moduleLogger.logDebug('initiated');
        });
        Hooks.once('i18nInit', async function () {
            const moduleLogger = logger.createScope(module.name);
            moduleLogger.logDebug('initiating i18n');
            module.i18nInit();
            moduleLogger.logDebug('i18n initiated');
        });
        Hooks.once('setup', async function () {
            const moduleLogger = logger.createScope(module.name);
            moduleLogger.logDebug('setting up');
            module.setup();
            moduleLogger.logDebug('setted up');
        });
        Hooks.once('ready', async function () {
            const moduleLogger = logger.createScope(module.name);
            moduleLogger.logDebug('getting ready');
            module.ready();
            moduleLogger.logDebug('ready');
        });
    }

    // public registerHook(module: IOgModule) {
    //     const logger = this.logger.createScope('registerHook');
    //     const featureFlags = this.featureFlags;
    //     const executeIfActive = (hook: string, action: () => void) => {
    //         const activeFlag = featureFlags.get(module.name);
    //         if (activeFlag?.value) {
    //             action();
    //         } else {
    //             logger.logWarn(`Module ${module.name} is not active (hook: ${hook}).`);
    //         }
    //     };

    //     Hooks.once('init', async function () {
    //         executeIfActive('init', () => {
    //             const moduleLogger = logger.createScope(module.name);
    //             moduleLogger.logDebug('initiating');
    //             module.init();
    //             moduleLogger.logDebug('initiated');
    //         });
    //     });
    //     Hooks.once('i18nInit', async function () {
    //         executeIfActive('i18nInit', () => {
    //             const moduleLogger = logger.createScope(module.name);
    //             moduleLogger.logDebug('initiating i18n');
    //             module.i18nInit();
    //             moduleLogger.logDebug('i18n initiated');
    //         });
    //     });
    //     Hooks.once('setup', async function () {
    //         executeIfActive('setup', () => {
    //             const moduleLogger = logger.createScope(module.name);
    //             moduleLogger.logDebug('setting up');
    //             module.setup();
    //             moduleLogger.logDebug('setted up');
    //         });
    //     });
    //     Hooks.once('ready', async function () {
    //         executeIfActive('ready', () => {
    //             const moduleLogger = logger.createScope(module.name);
    //             moduleLogger.logDebug('getting ready');
    //             module.ready();
    //             moduleLogger.logDebug('ready');
    //         });
    //     });
    // }

    // public registerFeatureFlag(module: IOgModule) {
    //     const logger = this.logger.createScope('registerFeatureFlags');
    //     logger.logDebug('registering module activation feature flags');
    //     const flag = new OgSetting<boolean>(`featureflag-${module.name}-active`, true, {
    //         name: `Is module '${module.name}' active?`,
    //         hint: `${
    //             module.description === null ? '' : module.description + '\n'
    //         }You must RELOAD THE WINDOW for this change to take effect.`,
    //         type: Boolean,
    //         scope: 'world',
    //     });
    //     this.featureFlags.set(module.name, flag);
    //     logger.logDebug('module activation feature flags registered');
    // }
}
