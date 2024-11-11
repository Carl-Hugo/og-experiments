import { IOgHooks } from './IOgHooks';
import { ILogger } from '../loggers';

export class OgHooks implements IOgHooks {
    constructor(protected logger: ILogger) {}

    /**
     * A mapping of hook events which have functions registered to them.
     */
    get events(): Hooks.HookedFunction[] {
        return Hooks.events;
    }

    /**
     * Register a callback handler which should be triggered when a hook is triggered.
     *
     * @param hook    - The unique name of the hooked event
     * @param fn      - The callback function which should be triggered when the hook event occurs
     * @param options - Options which customize hook registration
     * @returns An ID number of the hooked function which can be used to turn off the hook later
     */
    on<K extends keyof Hooks.StaticCallbacks | ((...args: any[]) => any)>(
        hook: K extends keyof Hooks.StaticCallbacks ? K : string,
        fn: K extends keyof Hooks.StaticCallbacks ? Hooks.StaticCallbacks[K] : K,
        options?: Hooks.OnOptions
    ): number {
        this.logger.logDebug('');
        return Hooks.on(hook as string, fn as any, options);
    }

    /**
     * Register a callback handler for an event which is only triggered once the first time the event occurs.
     * An alias for Hooks.on with `{once: true}`
     * @param hook - The unique name of the hooked event
     * @param fn   - The callback function which should be triggered when the hook event occurs
     * @returns An ID number of the hooked function which can be used to turn off the hook later
     */
    once<K extends keyof Hooks.StaticCallbacks | ((...args: any[]) => any)>(
        hook: K extends keyof Hooks.StaticCallbacks ? K : string,
        fn: K extends keyof Hooks.StaticCallbacks ? Hooks.StaticCallbacks[K] : K
    ): ReturnType<(typeof Hooks)['once']> {
        return Hooks.once(hook as string, fn as any);
    }

    // /**
    //  * Unregister a callback handler for a particular hook event
    //  *
    //  * @param hook - The unique name of the hooked event
    //  * @param fn   - The function, or ID number for the function, that should be turned off
    //  */
    off<K extends keyof Hooks.StaticCallbacks | ((...args: any[]) => any)>(
        hook: K extends keyof Hooks.StaticCallbacks ? K : string,
        fn: number | (K extends keyof Hooks.StaticCallbacks ? Hooks.StaticCallbacks[K] : K)
    ): void {
        Hooks.off(hook as string, fn as any);
    }

    // /**
    //  * Call all hook listeners in the order in which they were registered
    //  * Hooks called this way can not be handled by returning false and will always trigger every hook callback.
    //  *
    //  * @param hook - The hook being triggered
    //  * @param args - Arguments passed to the hook callback functions
    //  */
    callAll<K extends keyof Hooks.StaticCallbacks | string, H extends (...args: any[]) => any>(
        hook: K,
        ...args: K extends keyof Hooks.StaticCallbacks ? Parameters<Hooks.StaticCallbacks[K]> : Parameters<H>
    ): true {
        return Hooks.callAll(hook as string, ...(args as any));
    }

    // /**
    //  * Call hook listeners in the order in which they were registered.
    //  * Continue calling hooks until either all have been called or one returns false.
    //  *
    //  * Hook listeners which return false denote that the original event has been adequately handled and no further
    //  * hooks should be called.
    //  *
    //  * @param hook - The hook being triggered
    //  * @param args - Arguments passed to the hook callback functions
    //  */
    call<K extends keyof Hooks.StaticCallbacks | string, H extends (...args: any[]) => any>(
        hook: K,
        ...args: K extends keyof Hooks.StaticCallbacks ? Parameters<Hooks.StaticCallbacks[K]> : Parameters<H>
    ): boolean {
        return Hooks.call(hook as string, ...args);
    }

    // /**
    //  * Notify subscribers that an error has occurred within foundry.
    //  * @param location - The method where the error was caught.
    //  * @param error    - The error.
    //  * @param options  - Additional options to configure behaviour.
    //  */
    onError(
        location: string,
        error: Error,
        {
            msg,
            notify,
            log,
            ...data
        }: {
            [key: string]: unknown;
            msg?: string;
            notify?: keyof NonNullable<(typeof ui)['notifications']> | null;
            log?: keyof typeof console | null;
        } = {}
    ): void {
        Hooks.onError(location, error, { msg, notify, log, ...data });
    }
}
