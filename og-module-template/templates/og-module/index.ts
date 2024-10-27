import { OgBaseModule, OgLib } from '@og-modules/og-corelib';
import ModuleInfo from './module.json' assert { type: 'json' };

export class OG_MODULE_CLASS_NAME extends OgBaseModule {
    public override get id(): string {
        return ModuleInfo.id;
    }
    public override get name(): string {
        return ModuleInfo.title;
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
