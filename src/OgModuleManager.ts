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
                module.init();
            }
            logger.logDebug('OgModuleManager is initiated');
        });
        Hooks.once('i18nInit', async function () {
            logger.logDebug('OgModuleManager is initiating i18n');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                module.i18nInit();
            }
            logger.logDebug('OgModuleManager has initiated i18n');
        });
        Hooks.once('setup', async function () {
            logger.logDebug('OgModuleManager is setuping');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                module.setup();
            }
            logger.logDebug('OgModuleManager is setup');
        });
        Hooks.once('ready', async function () {
            logger.logDebug('OgModuleManager is getting ready');
            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                module.ready();
            }
            logger.logDebug('OgModuleManager is ready');
        });
        this.logger.logDebug('OgModuleManager registered hooks');
    }
}
