import { DefaultLoggerFactory, ILogger } from './loggers';
import PackageInfo from './module.json' assert { type: 'json' };
import { OgBaseModule, OgModuleManager } from './modules';
export * from './modules';

export class OgLib {
    public static get namespace(): string {
        return PackageInfo.id;
    }
    public static get id(): string {
        return PackageInfo.id;
    }

    public static get rootLogger(): ILogger {
        return rootLogger;
    }

    public static get moduleManager(): OgModuleManager {
        return moduleManager;
    }
}

class PingPongModule extends OgBaseModule {
    public override get name(): string {
        return 'PingPongModule';
    }

    override init(): void {
        this.logDebug('PingPongModule');
    }

    override ready(): void {
        this.logDebug('PingPongModule');
    }
}

const rootLogger: ILogger = DefaultLoggerFactory.createRootLogger();
const moduleManager: OgModuleManager = new OgModuleManager(rootLogger);
OgLib.moduleManager.register(new PingPongModule(rootLogger));
