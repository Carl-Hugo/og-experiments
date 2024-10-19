// import { ILogger } from '../utils';

import { ILogger } from '../utils';

// export class JournalPickerApplication extends FormApplication {
//     constructor(object = {}, options = {}, private logger: ILogger) {
//         super(object, options);
//     }

//     override getData(
//         options?: Partial<FormApplicationOptions> | undefined
//     ): FormApplication.Data<{}, FormApplicationOptions> | Promise<FormApplication.Data<{}, FormApplicationOptions>> {
//         return {
//             rootFolders: (options as any).rootFolders as Folder[],
//         } as JournalPickerApplicationData as any;
//     }

//     // override getData(
//     //     options?: Partial<FormApplicationOptions> | undefined
//     // ): FormApplication.Data<{}, FormApplicationOptions> | Promise<FormApplication.Data<{}, FormApplicationOptions>> {
//     //     return {
//     //         rootFolders: (options as any).rootFolders as Folder[],
//     //     } as JournalPickerApplicationData;
//     // }

//     protected override _updateObject(event: Event, formData?: object): Promise<unknown> {
//         this.logger.logDebug('SocialEncounterTracker | _updateObject', event, formData);
//         return Promise.resolve();
//     }
// }

// //og-journal-picker-screen.hbs

export class JournalPickerApplication extends Application {
    constructor(private data: JournalPickerApplicationData, options = {}, private logger: ILogger) {
        super(options);
    }

    static override get defaultOptions(): ApplicationOptions {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: 'modules/og-experiments/src/Journal/og-journal-picker-screen.hbs',
            title: 'Journal Picker',
            width: 600,
            height: '80%',
            resizable: true,
        }) as any;
    }

    override getData(options?: Application.RenderOptions): any {
        return this.data;
    }

    override activateListeners(html: JQuery): void {
        super.activateListeners(html);

        html.find('.collapsible').on('click', (e) => this._toggle(e));
        html.find('button.cancel').on('click', () => this.close());
        html.find('button.next').on('click', () => this._onNext());
    }

    private _toggle(e: JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>): void {
        var collapsible = e.target;
        collapsible.classList.toggle('active');
        // const content = collapsible.nextElementSibling;
        // // @ts-ignore
        // if (content.style.maxHeight) {
        //     // @ts-ignore
        //     content.style.maxHeight = null;
        // } else {
        //     // @ts-ignore
        //     content.style.maxHeight = content.scrollHeight + 'px';
        // }
    }

    private _onNext(): void {
        const selectedPages = Array.from(document.querySelectorAll('input[name="page"]:checked')).map(
            (input: Element) => (input as HTMLInputElement).value
        );
        this.logger.logInfo('Selected Pages:', selectedPages);
        this.data.nextAction({ selectedPages });
        this.close();
    }
}

// // Example usage
// const data: JournalPickerApplicationData = {
//     rootFolders: [
//         // Populate with actual data
//     ],
// };

// const journalPicker = new JournalPickerApplication(data);
// journalPicker.render(true);

interface JournalPickerApplicationData {
    rootFolders: Folder[];
    nextAction: (result: JournalPickerNextResult) => void;
}

interface JournalPickerNextResult {
    selectedPages: string[];
}
