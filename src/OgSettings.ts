import { OgBaseModule } from './IModule';
import { OgExperiment } from './OgExperiments';
import { DefaultLoggerFactory, ILogger } from './utils';

export class OgSetting<T> {
    private _value: T;
    public beforeUpdate: (setting: OgSetting<T>, value: T) => void = () => {};
    public afterUpdate: (setting: OgSetting<T>) => void = () => {};
    private logger: ILogger;

    constructor(
        private key: string,
        private defaultValue: T,
        private settings: InexactPartial<Omit<SettingConfig<T>, 'key' | 'namespace'>>,
        init: (setting: OgSetting<T>) => void = () => {}
    ) {
        this.logger = DefaultLoggerFactory.createRootLogger().createScope('OgSetting').createScope(this.key);
        this._value = defaultValue;
        init(this);
        Hooks.once('ready', () => this.ready.apply(this));
    }

    private ready(): void {
        this.logger.logDebug('getting ready', this.key, this.defaultValue);
        (game as Game).settings.register(OgExperiment.namespace, this.key, {
            ...{
                scope: 'client',
                config: true,
                default: this.defaultValue,
                onChange: (value: T) => {
                    this.beforeUpdate(this, value);
                    this._value = value;
                    this.afterUpdate(this);
                },
            },
            ...this.settings,
        });
        this.value = (game as Game).settings.get(OgExperiment.namespace, this.key) as T;
        this.logger.logDebug('ready', {
            key: this.key,
            defaultValue: this.defaultValue,
            value: this.value,
        });
    }

    public get value(): T {
        return this._value;
    }

    public set value(value: T) {
        if (this._value != value) {
            this._value = value;
            (game as Game).settings.set(OgExperiment.namespace, this.key, value);
        }
    }
}

export interface OgSettingChangeArgs<T> {
    namespace: string;
    key: string;
    value: T;
}

export class GlobalSettings extends OgBaseModule {
    public get name(): string {
        return 'GlobalSettings';
    }
    public accessDeniedSilentlyFails = new OgSetting<boolean>('accessDeniedSilentlyFails', true, {
        name: 'Fail silently?',
        hint: `If enabled, warnings will be displayed in the UI when the user cannot open scene notes or other elements.
        This is mainly used by the extensions. 
        The warnings will still be displayed in the console. 
        If you have no clue what this is, chances are you should not worry about it.`,
        type: Boolean,
    });
}
