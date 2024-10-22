export interface IOgModule {
    get name(): string;
    get description(): string | null;
    init(): void;
    i18nInit(): void;
    setup(): void;
    ready(): void;
}
