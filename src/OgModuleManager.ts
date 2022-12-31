import { ILogger } from './utils';
import { IOgModule } from './IModule';

export class OgModuleManager {
    constructor(private modules: IOgModule[], private logger: ILogger) {
        this.registerHooks();
    }

    private registerHooks() {
        this.logger.logDebug('OgModuleManager is registering hooks');
        const modules = this.modules;
        const logger = this.logger;
        Hooks.once('init', async function () {
            logger.logDebug('OgModuleManager is initiating');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleLogger = logger.openSession(module.name);
                moduleLogger.logDebug('initiating');
                module.init();
                moduleLogger.logDebug('initiated');
            }
            logger.logDebug('OgModuleManager is initiated');
        });
        Hooks.once('i18nInit', async function () {
            logger.logDebug('OgModuleManager is initiating i18n');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleLogger = logger.openSession(module.name);
                moduleLogger.logDebug('initiating i18n');
                module.i18nInit();
                moduleLogger.logDebug('i18n initiated');
            }
            logger.logDebug('OgModuleManager has initiated i18n');
        });
        Hooks.once('setup', async function () {
            logger.logDebug('OgModuleManager is setuping');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleLogger = logger.openSession(module.name);
                moduleLogger.logDebug('setting up');
                module.setup();
                moduleLogger.logDebug('setted up');
            }
            logger.logDebug('OgModuleManager is setup');
        });
        Hooks.once('ready', async function () {
            logger.logDebug('OgModuleManager is getting ready');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleLogger = logger.openSession(module.name);
                moduleLogger.logDebug('getting ready');
                module.ready();
                moduleLogger.logDebug('ready');
            }
            logger.logDebug('OgModuleManager is ready');
        });
        this.logger.logDebug('OgModuleManager registered hooks');
    }
}
