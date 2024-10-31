import { OgSetting } from './OgSettings';

export interface ISettingFactory {
    CreateClientSetting<T>(
        key: string,
        defaultValue: T,
        settings: ClientSettings,
        init: (setting: OgSetting<T>) => void | undefined
    ): OgSetting<T>;
    CreateWorldSetting<T>(
        key: string,
        defaultValue: T,
        settings: ClientSettings,
        init: (setting: OgSetting<T>) => void | undefined
    ): OgSetting<T>;
}
