import * as monaco from 'monaco-editor';
import { OgBaseModule } from '../IModule';
import { registerGameExtensions } from '../utils';

// @ts-ignore
self.MonacoEnvironment = {
    // @ts-ignore
    getWorkerUrl: function (moduleId, label) {
        if (label === 'json') {
            return './modules/og-experiments/json.worker.index.js';
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return './modules/og-experiments/css.worker.index.js';
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return './modules/og-experiments/html.worker.index.js';
        }
        if (label === 'typescript' || label === 'javascript') {
            return './modules/og-experiments/ts.worker.index.js';
        }
        return './modules/og-experiments/editor.worker.index.js';
    },
};

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
        const container = document.getElementById('monaco-container');
        if (container) {
            monaco.editor.create(container, {
                value: `// Start writing your code here`,
                language: 'javascript',
                theme: 'vs-dark',
                automaticLayout: true,
            });
            // monaco.languages.typescript.javascriptDefaults.addExtraLib('')
        } else {
            console.warn('#monaco-container is null');
        }
    }
}

export class MonacoEditor extends OgBaseModule {
    private monacoApp: MonacoEditorApp | undefined;
    public override get name(): string {
        return 'Monaco Editor';
    }
    override ready(): void {
        this.monacoApp = new MonacoEditorApp();
        registerGameExtensions('monacoEditor', {
            open: () => this.monacoApp?.render(true),
            close: () => this.monacoApp?.close(),
            monaco: monaco,
        });
    }
}
