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
