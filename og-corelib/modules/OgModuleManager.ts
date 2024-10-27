import { ILogger } from '../loggers';
import { OgSetting } from '../settings';
import { IOgModule } from '../modules';

export class OgModuleManager {
    private logger: ILogger;
    private featureFlags: Map<string, OgSetting<boolean>> = new Map();

    private modules: IOgModule[] = new Array<IOgModule>();
    public register(module: IOgModule): OgModuleManager {
        this.logger.logDebug('registering module', module);
        this.modules.push(module);
        this.registerHook(module);
        this.registerFeatureFlag(module);
        this.logger.logDebug('Module', module, 'registered');
        return this;
    }

    constructor(logger: ILogger) {
        this.logger = logger.createScope('OgModuleManager');
    }

    public registerHook(module: IOgModule) {
        this.logger.logDebug('registering hook', module);
        const logger = this.logger.createScope('registerHook');
        const featureFlags = this.featureFlags;
        const executeIfActive = (action: () => void) => {
            const activeFlag = featureFlags.get(module.name);
            if (activeFlag?.value) {
                action();
            }
        };

        Hooks.once('init', async function () {
            logger.logDebug('initiating', module);
            executeIfActive(() => {
                const moduleLogger = logger.createScope(module.name);
                moduleLogger.logDebug('initiating');
                module.init();
                moduleLogger.logDebug('initiated');
            });
            logger.logDebug('initiated', module);
        });
        Hooks.once('i18nInit', async function () {
            logger.logDebug('initiating i18n', module);
            executeIfActive(() => {
                const moduleLogger = logger.createScope(module.name);
                moduleLogger.logDebug('initiating i18n');
                module.i18nInit();
                moduleLogger.logDebug('i18n initiated');
            });
            logger.logDebug('initiated i18n', module);
        });
        Hooks.once('setup', async function () {
            logger.logDebug('setting up', module);
            executeIfActive(() => {
                const moduleLogger = logger.createScope(module.name);
                moduleLogger.logDebug('setting up');
                module.setup();
                moduleLogger.logDebug('setted up');
            });
            logger.logDebug('setted up', module);
        });
        Hooks.once('ready', async function () {
            logger.logDebug('getting ready', module);
            executeIfActive(() => {
                const moduleLogger = logger.createScope(module.name);
                moduleLogger.logDebug('getting ready');
                module.ready();
                moduleLogger.logDebug('ready');
            });
            logger.logDebug('ready', module);
        });
        this.logger.logDebug('registered hook', module);
    }

    public registerFeatureFlag(module: IOgModule) {
        const logger = this.logger.createScope('registerFeatureFlags');
        logger.logDebug('registering module activation feature flags');
        const flag = new OgSetting<boolean>(`featureflag-${module.name}-active`, true, {
            name: `Is module '${module.name}' active?`,
            hint: `${
                module.description === null ? '' : module.description + '\n'
            }You must RELOAD THE WINDOW for this change to take effect.`,
            type: Boolean,
            scope: 'world',
        });
        this.featureFlags.set(module.name, flag);
        logger.logDebug('module activation feature flags registered');
    }
}
