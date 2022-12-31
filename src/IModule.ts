export interface IOgModule {
    get name(): string;
    get description(): string | null;
    init(): void;
    i18nInit(): void;
    setup(): void;
    ready(): void;
}

export abstract class OgBaseModule implements IOgModule {
    public abstract get name(): string;
    public get description(): string | null {
        return null;
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

class OgModuleManager {
    constructor(private modules: IOgModule[]) {
        this.registerHooks();
    }

    private registerHooks() {
        Hooks.once('init', async function () {
            // logText('initiating');
            // for (let index = 0; index < modules.length; index++) {
            //     const module = modules[index];
            //     if (module.init) {
            //         module.init();
            //     }
            // }
            // logText('initiated');
        });
    }
    // const modules = [
    //     new JournalModule(),
    //     new ActivateScene(),
    //     new OpenSceneNotes(),
    //     new SocialEncounterTracker(),
    //     new ServerPush(),
    //     new Reload(),
    //     new StarWarsCrawl(),
    //     globalSettings,
    //     //new VehicleMovement()
    // ] as IOgModule[];
}
