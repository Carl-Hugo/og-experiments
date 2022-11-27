import { IOgModule } from './IModule';
import { logText } from './utils';

export const namespace = 'og-experiments';

export class OgSetting<T> {
    private _value: T;
    constructor(
        private key: string,
        private defaultValue: T,
        private settings: InexactPartial<Omit<SettingConfig<T>, 'key' | 'namespace'>>
    ) {
        this._value = defaultValue;
    }

    public init(): void {
        logText('OgSetting initializing', this.key, this.defaultValue);
        (game as Game).settings.register(namespace, this.key, {
            ...{
                scope: 'client',
                config: true,
                default: this.defaultValue,
                onChange: (value: T) => (this._value = value),
            },
            ...this.settings,
        });
        this.value = (game as Game).settings.get(namespace, this.key) as T;
    }

    public get value(): T {
        return this._value;
    }

    public set value(value: T) {
        this._value = value;
        (game as Game).settings.set(namespace, this.key, value);
    }
}

export class GlobalSettings implements IOgModule {
    public accessDeniedSilentlyFails = new OgSetting<boolean>('accessDeniedSilentlyFails', true, {
        name: 'Fail silently?',
        hint: `If enabled, warnings will be displayed in the UI when the user cannot open scene notes or other elements.
        This is mainly used by the extensions. 
        The warnings will still be displayed in the console. 
        If you have no clue what this is, chances are you should not worry about it.`,
        type: Boolean,
    });

    init(): void {
        this.accessDeniedSilentlyFails.init();
    }
    ready(): void {}
}
export const globalSettings = new GlobalSettings();
