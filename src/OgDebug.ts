import { OgBaseModule } from './IModule';
import { OgSetting } from './OgSettings';

export class OgDebug extends OgBaseModule {
    public override get name(): string {
        return 'OgDebug';
    }
    override get description(): string | null {
        return 'Enables debugging utilities, including setting `CONFIG.debug.hooks` to `true`.';
    }

    private ogDebugHooks = new OgSetting<boolean>(
        'ogDebugHooks',
        false,
        {
            name: 'Debug Hooks?',
            hint: 'If enabled, sets the CONFIG.debug.hooks to true.',
            type: Boolean,
            scope: 'world',
        },
        (s) => {
            s.afterUpdate = (setting) => {
                this.logDebug('ogDebugHooks.afterUpdate', setting.value);
                CONFIG.debug.hooks = setting.value;
            };
        }
    );

    override init(): void {
        this.logDebug('init', this.ogDebugHooks.value);
        CONFIG.debug.hooks = this.ogDebugHooks.value;
        // CONFIG.debug.time = true;
        // CONFIG.debug.keybindings = true;
        // CONFIG.debug.mouseInteraction = true;
    }
}
