export interface ILogger {
    logDebug(...data: any[]): void;
    logInfo(...data: any[]): void;
    logWarn(...data: any[]): void;
    logError(...data: any[]): void;
    createScope(scope: string): ILogger;
}
