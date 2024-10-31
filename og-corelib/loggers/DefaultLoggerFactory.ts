import { ILogger } from './ILogger';
import { ConsoleLogger } from './ConsoleLogger';

export class DefaultLoggerFactory {
    static create(...states: string[]): ILogger {
        return new ConsoleLogger(states);
    }
}
