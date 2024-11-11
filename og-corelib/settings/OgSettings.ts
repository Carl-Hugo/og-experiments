import { IOgHooks } from '../hooks';
import { ILogger } from '../loggers';
import { IOgModule } from '../modules';

export class OgSetting<T extends ClientSettings.Type> {
    private _value: T;
    public beforeUpdate: (setting: OgSetting<T>, value: T) => void = () => {};
    public afterUpdate: (setting: OgSetting<T>) => void = () => {};
    private logger: ILogger;

    constructor(
        private module: IOgModule,
        private moduleLogger: ILogger,
        private hooks: IOgHooks,
        private key: string,
        private defaultValue: T,
        private scope: 'client' | 'world',
        private settings: ClientSettings.RegisterOptions<NoInfer<T>>,
        init: (setting: OgSetting<T>) => void
    ) {
        this.logger = this.moduleLogger.createScope('OgSetting').createScope(this.key);
        this._value = defaultValue;
        init(this);
        this.hooks.once('ready', () => this.ready.apply(this));
    }

    private ready(): void {
        this.logger.logDebug('getting ready', this.defaultValue);
        // @ts-expect-error
        game?.settings?.register(this.module.id, this.key, {
            ...{
                scope: this.scope,
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
        // @ts-expect-error
        this.value = game?.settings?.get(this.module.id, this.key) as T;
        this.logger.logDebug('ready', {
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
            // @ts-expect-error
            game?.settings?.set(this.module.id, this.key, value);
        }
    }
}

export interface OgSettingChangeArgs<T> {
    namespace: string;
    key: string;
    value: T;
}
