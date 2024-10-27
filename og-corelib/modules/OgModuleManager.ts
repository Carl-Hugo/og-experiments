import { ILogger } from '../loggers';
import { IOgModule } from '../modules';

export class OgModuleManager {
    constructor(private logger: ILogger) {
        this.logger = logger.createScope('OgModuleManager');
    }

    public register(module: IOgModule): OgModuleManager {
        const moduleLogger = this.logger.createScope(module.id);
        moduleLogger.logDebug('Registering module', module);
        this.registerHook(module);
        moduleLogger.logDebug('Module registered');
        return this;
    }

    public registerHook(module: IOgModule) {
        const logger = this.logger.createScope('registerHook');
        Hooks.once('init', async function () {
            const moduleLogger = logger.createScope(module.id);
            moduleLogger.logDebug('initiating');
            module.init();
            moduleLogger.logDebug('initiated');
        });
        Hooks.once('i18nInit', async function () {
            const moduleLogger = logger.createScope(module.id);
            moduleLogger.logDebug('initiating i18n');
            module.i18nInit();
            moduleLogger.logDebug('i18n initiated');
        });
        Hooks.once('setup', async function () {
            const moduleLogger = logger.createScope(module.id);
            moduleLogger.logDebug('setting up');
            module.setup();
            moduleLogger.logDebug('setted up');
        });
        Hooks.once('ready', async function () {
            const moduleLogger = logger.createScope(module.id);
            moduleLogger.logDebug('getting ready');
            module.ready();
            moduleLogger.logDebug('ready');
        });
    }
}
