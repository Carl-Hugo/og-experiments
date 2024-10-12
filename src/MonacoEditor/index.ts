// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { OgBaseModule } from '../IModule';
import { registerGameExtensions } from '../utils';

class MonacoEditorApp extends Application {
    constructor(options: ApplicationOptions | undefined = undefined) {
        super(options);
    }

    static override get defaultOptions(): ApplicationOptions {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: 'monaco-editor-app',
            template: 'modules/og-experiments/src/MonacoEditor/editor.hbs',
            width: 800,
            height: 600,
            resizable: true,
            title: 'Monaco Editor',
        });
    }

    override activateListeners(html: JQuery): void {
        super.activateListeners(html);
        // this.initializeMonacoEditor();
    }

    // private async initializeMonacoEditor(): Promise<void> {
    //     // const monaco = await import('monaco-editor');
    //     const monaco = (window as any).monaco;
    //     const container = document.getElementById('monaco-editor');
    //     if (container) {
    //         monaco.editor.create(container, {
    //             value: `// Start writing your code here`,
    //             language: 'javascript', // Set the default language (you can change this dynamically)
    //             theme: 'vs-dark',
    //         });
    //     }
    // }
}

export class MonacoEditor extends OgBaseModule {
    private monacoApp: MonacoEditorApp | undefined;
    public override get name(): string {
        return 'Monaco Editor';
    }
    override ready(): void {
        // const script = document.createElement('script');
        // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.0/min/vs/loader.js';
        // script.onload = () => {
        //     this.logDebug('Monaco Editor script loaded');
        //     (window as any).require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.0/min/vs' } });
        // };
        // document.body.appendChild(script);
        // this.logDebug('MonacoEditor ready hook called');

        this.monacoApp = new MonacoEditorApp();
        registerGameExtensions('monacoEditor', {
            open: () => this.monacoApp?.render(true),
            close: () => this.monacoApp?.close(),
        });
    }
}
