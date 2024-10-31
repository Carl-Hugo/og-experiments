import { IOgHooks, OgHooks } from '../hooks';
import { ILogger } from '../loggers';
import { IOgModule } from './IOgModule';

export abstract class OgBaseModule implements IOgModule, IOgHooks, ILogger {
    public abstract get id(): string;
    public abstract get name(): string;
    public get description(): string | null {
        return null;
    }

    constructor(protected logger: ILogger, protected hooks: IOgHooks = new OgHooks(logger)) {}

    logDebug(...data: any[]): void {
        this.logger.logDebug(this.id, ...data);
    }
    logInfo(...data: any[]): void {
        this.logger.logInfo(this.id, ...data);
    }
    logWarn(...data: any[]): void {
        this.logger.logWarn(this.id, ...data);
    }
    logError(...data: any[]): void {
        this.logger.logError(this.id, ...data);
    }
    createScope(scope: string): ILogger {
        return this.logger.createScope(scope);
    }

    /**
     * Forwarding methods for IOgHooks interface.
     */
    get events() {
        return this.hooks.events;
    }

    on<K extends keyof Hooks.StaticCallbacks | ((...args: any[]) => any)>(
        hook: K extends keyof Hooks.StaticCallbacks ? K : string,
        fn: K extends keyof Hooks.StaticCallbacks ? Hooks.StaticCallbacks[K] : K,
        options?: Hooks.OnOptions
    ): number {
        return this.hooks.on(hook, fn, options);
    }

    once<K extends keyof Hooks.StaticCallbacks | ((...args: any[]) => any)>(
        hook: K extends keyof Hooks.StaticCallbacks ? K : string,
        fn: K extends keyof Hooks.StaticCallbacks ? Hooks.StaticCallbacks[K] : K
    ): ReturnType<(typeof Hooks)['once']> {
        return this.hooks.once(hook, fn);
    }

    off<K extends keyof Hooks.StaticCallbacks | ((...args: any[]) => any)>(
        hook: K extends keyof Hooks.StaticCallbacks ? K : string,
        fn: number | (K extends keyof Hooks.StaticCallbacks ? Hooks.StaticCallbacks[K] : K)
    ): void {
        this.hooks.off(hook, fn);
    }

    callAll<K extends keyof Hooks.StaticCallbacks | string, H extends (...args: any[]) => any>(
        hook: K,
        ...args: K extends keyof Hooks.StaticCallbacks ? Parameters<Hooks.StaticCallbacks[K]> : Parameters<H>
    ): true {
        return this.hooks.callAll(hook, ...args);
    }

    call<K extends keyof Hooks.StaticCallbacks | string, H extends (...args: any[]) => any>(
        hook: K,
        ...args: K extends keyof Hooks.StaticCallbacks ? Parameters<Hooks.StaticCallbacks[K]> : Parameters<H>
    ): boolean {
        return this.hooks.call(hook, ...args);
    }

    onError(
        location: string,
        error: Error,
        options?: {
            [key: string]: unknown;
            msg?: string;
            notify?: keyof NonNullable<(typeof ui)['notifications']> | null;
            log?: keyof typeof console | null;
        }
    ): void {
        this.hooks.onError(location, error, options);
    }

    /**
     * Initialize the plugin.
     */
    public abstract initialize(): void;
}
