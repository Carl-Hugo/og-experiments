import { OgBaseModule } from '../IModule';
import { OgSetting } from '../OgSettings';
import { generateDTSFromObject, registerTypes } from './runtime-types';

export class MonacoMacroEditorAddExtraTypes extends OgBaseModule {
    public override get name(): string {
        return 'MonacoMacroEditorAddExtraTypes';
    }
    override get description(): string | null {
        return 'Allow registering additional .d.ts files to the monaco-macro-editor plugin.';
    }

    private dynamicTypes = new OgSetting<String>(
        'MonacoMacroEditorAddExtraTypesDynamicTypes',
        '',
        {
            name: 'Dynamic types',
            hint: 'Enter a list of strings that represents JavaScript object to add to the Monaco Macro Editor definitions, separated by commas. It is important to note that scanning runtime object yields limited details.',
            type: String,
            scope: 'world',
        },
        (s) => {
            s.afterUpdate = (setting) => {
                this.logDebug('dynamicTypes.afterUpdate', setting.value);
            };
        }
    );

    override ready(): void {
        Hooks.on('monaco-editor.ready', (register: typeof registerTypes) => {
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
