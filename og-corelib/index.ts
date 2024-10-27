import { DefaultLoggerFactory, ILogger } from './loggers';
import PackageInfo from './module.json' assert { type: 'json' };
import { OgModuleManager } from './modules';
export * from './modules';

const rootLogger: ILogger = DefaultLoggerFactory.createRootLogger();
const moduleManager: OgModuleManager = new OgModuleManager(rootLogger);

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
