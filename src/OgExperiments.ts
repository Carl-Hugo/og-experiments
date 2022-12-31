import { GlobalSettings } from './OgSettings';
import { ILogger } from './utils';

export interface IOgExperiment {
    namespace: string;
    globalSettings: GlobalSettings;
}

export const OgExperiment: IOgExperiment = {
    namespace: 'og-experiments',
    // @ts-ignore
    globalSettings: null,
};
