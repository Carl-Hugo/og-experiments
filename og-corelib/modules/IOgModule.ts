export interface IOgModule {
    get id(): string;
    get name(): string;
    get description(): string | null;
    init(): void;
    i18nInit(): void;
    setup(): void;
    ready(): void;
}
