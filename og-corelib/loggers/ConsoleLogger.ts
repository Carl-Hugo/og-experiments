import { DefaultLoggerFactory } from './DefaultLoggerFactory';
import { ILogger } from './ILogger';

export class ConsoleLogger implements ILogger {
    constructor(private prefixes: string[]) {}

    logDebug(...data: any[]) {
        console.debug(...this.prefixes, ...data);
    }
    logWarn(...data: any[]) {
        console.warn(...this.prefixes, ...data);
    }
    logError(...data: any[]) {
        console.error(...this.prefixes, ...data);
    }
    logInfo(...data: any[]) {
        console.info(...this.prefixes, ...data);
    }

    createScope(scope: string): ILogger {
        return DefaultLoggerFactory.create(...this.prefixes, scope);
    }
}
