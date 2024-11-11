import { OgSetting } from './OgSettings';

export interface ISettingFactory {
    CreateClientSetting<T extends ClientSettings.Type>(
        key: string,
        defaultValue: T,
        settings: ClientSettings.RegisterOptions<NoInfer<T>>,
        init: (setting: OgSetting<T>) => void | undefined
    ): OgSetting<T>;
    CreateWorldSetting<T extends ClientSettings.Type>(
        key: string,
        defaultValue: T,
        settings: ClientSettings.RegisterOptions<NoInfer<T>>,
        init: (setting: OgSetting<T>) => void | undefined
    ): OgSetting<T>;
}
