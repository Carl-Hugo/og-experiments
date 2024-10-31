export interface IOgModule extends IModuleInfo {
    // get id(): string;
    // get name(): string;
    // get description(): string | null;
    initialize(): void;
    // init(): void;
    // i18nInit(): void;
    // setup(): void;
    // ready(): void;
}

export interface IModuleInfo {
    get id(): string;
    get title(): string;
    get description(): string | undefined;
}
