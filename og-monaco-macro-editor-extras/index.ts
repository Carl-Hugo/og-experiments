import ModuleInfo from './module.json' assert { type: 'json' };
import { generateDTSFromObject, registerTypes } from './runtime-types';

export class OgMonacoMacroEditorExtras extends og.BaseModule {
    private dynamicTypes = this.CreateWorldSetting(
        'MonacoMacroEditorAddExtraTypesDynamicTypes',
        '',
        {
            name: 'Dynamic types',
            hint: 'Enter a list of strings that represents JavaScript object to add to the Monaco Macro Editor definitions, separated by commas. It is important to note that scanning runtime object yields limited details.',
            type: String,
        },
        (s) => {
            s.afterUpdate = (setting) => {
                this.logDebug('dynamicTypes.afterUpdate', setting.value);
            };
        }
    );

    override initialize(): void {
        this.hooks.on('monaco-editor.ready', (register: typeof registerTypes) => {
            this.logDebug('monaco-editor.ready');
            const dynamicTypes = this.dynamicTypes.value.split(',');
            this.logDebug('dynamicTypes', dynamicTypes);
            dynamicTypes.forEach((dynamicType) => {
                const ogDTS = generateDTSFromObject(dynamicType);
                this.logDebug('register', dynamicType, ogDTS);
                register(dynamicType, ogDTS);
            });
        });
    }
}

// Create an instance of the module and register it with Og Core Library.
og.registerModule(() => new OgMonacoMacroEditorExtras(ModuleInfo));
