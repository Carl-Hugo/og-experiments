import { ILogger } from './utils';
import { IOgModule } from './IModule';
import { OgSetting } from './OgSettings';

export class OgModuleManager {
    private logger: ILogger;
    private featureFlags: Map<string, OgSetting<boolean>> = new Map();

    constructor(private modules: IOgModule[], logger: ILogger) {
        this.logger = logger.createScope('OgModuleManager');
        this.registerFeatureFlags();
        this.registerHooks();
    }

    private registerHooks() {
        this.logger.logDebug('registering hooks');
        const modules = this.modules;
        const logger = this.logger.createScope('registerHooks');
        const featureFlags = this.featureFlags;
        const executeIfActive = (module: IOgModule, action: () => void) => {
            const activeFlag = featureFlags.get(module.name);
            if (activeFlag?.value) {
                action();
            }
        };

        Hooks.once('init', async function () {
            logger.logDebug('initiating');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                executeIfActive(module, () => {
                    const moduleLogger = logger.createScope(module.name);
                    moduleLogger.logDebug('initiating');
                    module.init();
                    moduleLogger.logDebug('initiated');
                });
            }
            logger.logDebug('initiated');
        });
        Hooks.once('i18nInit', async function () {
            logger.logDebug('initiating i18n');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                executeIfActive(module, () => {
                    const moduleLogger = logger.createScope(module.name);
                    moduleLogger.logDebug('initiating i18n');
                    module.i18nInit();
                    moduleLogger.logDebug('i18n initiated');
                });
            }
            logger.logDebug('initiated i18n');
        });
        Hooks.once('setup', async function () {
            logger.logDebug('setting up');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                executeIfActive(module, () => {
                    const moduleLogger = logger.createScope(module.name);
                    moduleLogger.logDebug('setting up');
                    module.setup();
                    moduleLogger.logDebug('setted up');
                });
            }
            logger.logDebug('setted up');
        });
        Hooks.once('ready', async function () {
            logger.logDebug('getting ready');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                executeIfActive(module, () => {
                    const moduleLogger = logger.createScope(module.name);
                    moduleLogger.logDebug('getting ready');
                    module.ready();
                    moduleLogger.logDebug('ready');
                });
            }
            logger.logDebug('ready');
        });
        this.logger.logDebug('registered hooks');
    }
    registerFeatureFlags() {
        const modules = this.modules;
        const logger = this.logger.createScope('registerFeatureFlags');
        logger.logDebug('registering module activation feature flags');
        for (let index = 0; index < modules.length; index++) {
            const module = modules[index];
            const flag = new OgSetting<boolean>(`featureflag-${module.name}-active`, true, {
                name: `Is module '${module.name}' active?`,
                hint: `${module.description}\nYou must RELOAD THE WINDOW for this change to take effect.`,
                type: Boolean,
                scope: 'world',
            });
            this.featureFlags.set(module.name, flag);
        }
        logger.logDebug('module activation feature flags registered');
    }
}
