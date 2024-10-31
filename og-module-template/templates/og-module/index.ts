import { OgBaseModule, registerOgModule } from '@og-modules/og-corelib';
import ModuleInfo from './module.json' assert { type: 'json' };

export class OG_MODULE_CLASS_NAME extends OgBaseModule {
    override initialize(): void {
        // TODO: code here
    }
}

// Create an instance of the module and register it with Og Core Library.
registerOgModule(() => new OG_MODULE_CLASS_NAME(ModuleInfo));
