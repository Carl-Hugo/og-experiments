import { GlobalSettings } from './OgSettings';
import PackageInfo from '../module.json' assert { type: 'json' };

export interface IOgExperiment {
    namespace: string;
    globalSettings: GlobalSettings;
}

export const OgExperiment: IOgExperiment = {
    namespace: PackageInfo.name,
    // @ts-ignore
    globalSettings: null,
};
