import { OgBaseModule } from '../IModule';

export class CustomFoundryLogo extends OgBaseModule {
    public override get name(): string {
        return 'Custom Foundry Logo';
    }

    override init(): void {
        //@ts-ignore
        Hooks.on('renderPause', (pauseLayer, html, data) => {
            this.logDebug('renderPause: ', pauseLayer, html, data);
            this.updateIcon(html[0]);
        });
    }

    override ready(): void {
        this.updateIcon(document);
    }

    updateIcon(el: any) {
        const pauseIcon = el.querySelector('.paused img');
        if (pauseIcon) {
            //@ts-ignore
            pauseIcon.src = 'modules/og-experiments/src/CustomFoundryLogo/custom-foundry-logo-128x128.png';
            this.logDebug('Updated paused icons');
        }
    }
}
