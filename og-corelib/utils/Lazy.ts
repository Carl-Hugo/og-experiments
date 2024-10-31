// Source: https://blog.dotnetnerd.dk/post/2017/07/12/TypeScript-patterns-Lazy.aspx
export interface ILazyInitializer<T> {
    (): T;
}

export class Lazy<T> {
    private instance: T | null = null;
    private initializer: ILazyInitializer<T>;

    constructor(initializer: ILazyInitializer<T>) {
        this.initializer = initializer;
    }

    public get value(): T {
        if (this.instance == null) {
            this.instance = this.initializer();
        }

        return this.instance;
    }
}
