import { OgBaseModule, OgLib } from '@og-modules/og-corelib';

export class OG_MODULE_CLASS_NAME extends OgBaseModule {
    public override get name(): string {
        return 'OG_MODULE_NAME';
    }

    override init(): void {
        // TODO: code here
    }

    override ready(): void {
        // TODO: code here
    }
}

// Register the module of OgModuleManager
OgLib.moduleManager.register(new OG_MODULE_CLASS_NAME(OgLib.rootLogger));
