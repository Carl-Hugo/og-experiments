import { GlobalSettings } from './OgSettings';
import { ILogger } from './utils';

export interface IOgExperiment {
    namespace: string;
    defaultLogger: ILogger;
    globalSettings: GlobalSettings;
}

export const OgExperiment: IOgExperiment = {
    namespace: 'og-experiments',
    // @ts-ignore
    defaultLogger: null,
    // @ts-ignore
    globalSettings: null,
};
