import { defaultLogger, ILogger } from './utils';

export interface IOgModule {
    get name(): string;
    get description(): string | null;
    init(): void;
    i18nInit(): void;
    setup(): void;
    ready(): void;
}
export abstract class OgBaseModule implements IOgModule, ILogger {
    public abstract get name(): string;
    public get description(): string | null {
        return null;
    }
    constructor(protected logger: ILogger = defaultLogger) {}

    logDebug(...data: any[]): void {
        this.logger.logDebug(`${this.name} |`, ...data);
    }
    logInfo(...data: any[]): void {
        this.logger.logInfo(`${this.name} |`, ...data);
    }
    logWarn(...data: any[]): void {
        this.logger.logWarn(`${this.name} |`, ...data);
    }
    logError(...data: any[]): void {
        this.logger.logError(`${this.name} |`, ...data);
    }

    /**
     * A hook event that fires as Foundry is initializing, right before any initialization tasks have begun.
     */
    public init(): void {}
    /**
     * A hook event that fires once Localization translations have been loaded and are ready for use.
     */
    public i18nInit(): void {}
    /**
     * A hook event that fires when Foundry has finished initializing but before the game state has been set up. Fires before any Documents, UI applications, or the Canvas have been initialized.
     */
    public setup(): void {}
    /**
     * A hook event that fires when the game is fully ready.
     */
    public ready(): void {}
}
