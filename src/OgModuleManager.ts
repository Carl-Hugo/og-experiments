import { ILogger } from './utils';
import { IOgModule } from './IModule';

export class OgModuleManager {
    private logger: ILogger;
    constructor(private modules: IOgModule[], logger: ILogger) {
        this.logger = logger.createScope('OgModuleManager');
        this.registerHooks();
    }

    private registerHooks() {
        this.logger.logDebug('registering hooks');
        const modules = this.modules;
        const logger = this.logger.createScope('registerHooks');
        Hooks.once('init', async function () {
            logger.logDebug('initiating');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleLogger = logger.createScope(module.name);
                moduleLogger.logDebug('initiating');
                module.init();
                moduleLogger.logDebug('initiated');
            }
            logger.logDebug('initiated');
        });
        Hooks.once('i18nInit', async function () {
            logger.logDebug('initiating i18n');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleLogger = logger.createScope(module.name);
                moduleLogger.logDebug('initiating i18n');
                module.i18nInit();
                moduleLogger.logDebug('i18n initiated');
            }
            logger.logDebug('initiated i18n');
        });
        Hooks.once('setup', async function () {
            logger.logDebug('setting up');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleLogger = logger.createScope(module.name);
                moduleLogger.logDebug('setting up');
                module.setup();
                moduleLogger.logDebug('setted up');
            }
            logger.logDebug('setted up');
        });
        Hooks.once('ready', async function () {
            logger.logDebug('getting ready');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleLogger = logger.createScope(module.name);
                moduleLogger.logDebug('getting ready');
                module.ready();
                moduleLogger.logDebug('ready');
            }
            logger.logDebug('ready');
        });
        this.logger.logDebug('registered hooks');
    }
}
