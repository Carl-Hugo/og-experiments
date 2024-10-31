export interface IOgModule {
    get id(): string;
    get name(): string;
    get description(): string | null;
    initialize(): void;
    // init(): void;
    // i18nInit(): void;
    // setup(): void;
    // ready(): void;
}
