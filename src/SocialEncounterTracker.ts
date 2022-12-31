import { IOgModule, OgBaseModule } from './IModule';
import { OgSetting } from './OgSettings';
import { logText, registerGameExtensions } from './utils';
class SocialEncounterTrackerForm extends FormApplication {
    private playerStrain: OgSetting<number>;
    private maxPlayerStrain: OgSetting<number>;
    private targetStrain: OgSetting<number>;
    private maxTargetStrain: OgSetting<number>;
    private displayTargetToPlayers: OgSetting<boolean>;

    constructor(object = {}, options = {}) {
        super(object, options);
        this.playerStrain = (options as any).playerStrain as OgSetting<number>;
        this.maxPlayerStrain = (options as any).maxPlayerStrain as OgSetting<number>;
        this.targetStrain = (options as any).targetStrain as OgSetting<number>;
        this.maxTargetStrain = (options as any).maxTargetStrain as OgSetting<number>;
        this.displayTargetToPlayers = (options as any).displayTargetToPlayers as OgSetting<boolean>;
    }

    private get isGM(): boolean {
        // return true;
        return (game as Game).user!.isGM;
    }

    override getData(
        options?: Partial<FormApplicationOptions> | undefined
    ): FormApplication.Data<{}, FormApplicationOptions> | Promise<FormApplication.Data<{}, FormApplicationOptions>> {
        // Position the window at the bottom during the first render
        if (this._priorState == 0) {
            const y = $(window).height() as number;
            this.position.top = y;
        }
        return {
            playerStrain: this.playerStrain.value,
            maxPlayerStrain: this.maxPlayerStrain.value,
            playerStatus: computeStatus(this.playerStrain.value, this.maxPlayerStrain.value),

            targetStrain: this.targetStrain.value,
            maxTargetStrain: this.maxTargetStrain.value,
            targetStatus: computeStatus(this.targetStrain.value, this.maxTargetStrain.value),

            displayTargetToPlayers: this.displayTargetToPlayers.value,
            isGM: this.isGM,
        } as any;

        function computeStatus(current: number, max: number): string {
            if (max === 0) {
                return 'unknown';
            }
            if (current >= max) {
                return 'defeated';
            }
            const yellowThreshold = Math.ceil(max / 2.0);
            const redThreshold = Math.ceil(max * 0.75);
            return current >= redThreshold ? 'low' : current >= yellowThreshold ? 'average' : 'good';
        }
    }

    override activateListeners(html: JQuery): void {
        html.find('button').on('click', function () {
            (game as Game).socket?.emit('module.og-experiments', { whatver: true });
        });
        this.ActivateListenersFor(html, 'playerStrain', (value) => (this.playerStrain.value = value));
        this.ActivateListenersFor(html, 'maxPlayerStrain', (value) => (this.maxPlayerStrain.value = value));
        this.ActivateListenersFor(html, 'targetStrain', (value) => (this.targetStrain.value = value));
        this.ActivateListenersFor(html, 'maxTargetStrain', (value) => (this.maxTargetStrain.value = value));
    }

    ActivateListenersFor(html: JQuery, inputName: string, setter: (value: number) => void) {
        if (this.isGM) {
            html.find(`input[name="${inputName}"]`).on('focus', function (event) {
                $(this).select();
            });
            html.find(`input[name="${inputName}"]`).on('change', function (event) {
                setter(parseInt($(this).val() as string));
            });
        }
    }

    static override get defaultOptions(): FormApplicationOptions {
        // @ts-ignore
        return mergeObject(super.defaultOptions, {
            id: 'social-encounter-tracker',
            classes: ['og-social-encounter-tracker'],
            title: 'Social Encounter',
            template: 'modules/og-experiments/templates/og-social-encounter-tracker.hbs',
        });
    }

    protected _updateObject(event: Event, formData?: object | undefined): Promise<unknown> {
        logText('SocialEncounterTracker | _updateObject', event, formData);
        return Promise.resolve();
    }
}

export class SocialEncounterTracker extends OgBaseModule {
    public get name(): string {
        return 'SocialEncounterTracker';
    }
    private playerStrain: OgSetting<number> = new OgSetting<number>(
        'playerStrain',
        0,
        {
            name: 'Current social encounter players Strain',
            type: Number,
            scope: 'world',
            config: false,
        },
        (setting) => (setting.afterUpdate = () => this.form.render(true))
    );
    private maxPlayerStrain: OgSetting<number> = new OgSetting<number>(
        'maxPlayerStrain',
        0,
        {
            name: 'Current social encounter players Strain',
            type: Number,
            scope: 'world',
            config: false,
        },
        (setting) => (setting.afterUpdate = () => this.form.render(true))
    );
    private targetStrain: OgSetting<number> = new OgSetting<number>(
        'targetStrain',
        0,
        {
            name: 'Current social encounter players Strain',
            type: Number,
            scope: 'world',
            config: false,
        },
        (setting) => (setting.afterUpdate = () => this.form.render(true))
    );
    private maxTargetStrain: OgSetting<number> = new OgSetting<number>(
        'maxTargetStrain',
        0,
        {
            name: 'Current social encounter players Strain',
            type: Number,
            scope: 'world',
            config: false,
        },
        (setting) => (setting.afterUpdate = () => this.form.render(true))
    );
    private displayTargetToPlayers: OgSetting<boolean> = new OgSetting<boolean>(
        'displayTargetToPlayers',
        false,
        {
            name: "Display target's strain values?",
            hint: "If enabled, the players will see the social encounter's target's strain value. Otherwise, they will only see the color indicator.",
            type: Boolean,
            scope: 'world',
        },
        (setting) => (setting.afterUpdate = () => this.form.render(true))
    );
    private form = new SocialEncounterTrackerForm(undefined, {
        playerStrain: this.playerStrain,
        maxPlayerStrain: this.maxPlayerStrain,
        targetStrain: this.targetStrain,
        maxTargetStrain: this.maxTargetStrain,
        displayTargetToPlayers: this.displayTargetToPlayers,
    });
    init(): void {}
    ready(): void {
        logText('SocialEncounterTracker getting ready');
        this.playerStrain.ready();
        this.maxPlayerStrain.ready();
        this.targetStrain.ready();
        this.maxTargetStrain.ready();
        this.displayTargetToPlayers.ready();
        registerGameExtensions('SocialEncounterTracker', {
            open: (force: boolean = true) => this.form.render(force),
            close: () => this.form.close(),
            internal: { form: this.form },
        });
        this.form.render(true);
        logText('SocialEncounterTracker is ready');
    }
}

// TODO
// - Add a "show/hide" button in the config
// - Add a way to "force display" the window to all players
// - Add an icon when one of the two party reaches 0
