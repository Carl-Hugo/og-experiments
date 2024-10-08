import { OgBaseModule } from '../IModule';

export class CustomFoundryLogo extends OgBaseModule {
    public override get name(): string {
        return 'Custom Foundry Logo';
    }

    override ready(): void {
        //@ts-ignore
        Hooks.on('renderPause', (pauseLayer, html, data) => {
            this.logDebug('renderPause: ', pauseLayer, html, data);

            this.updateIcon(html[0]);
            this.addClassToPauseElement(html[0]);
        });

        this.updateIcon(document);
        this.addClassToPauseElement(document);
    }
    updateIcon(el: any) {
        const pauseIcon = el.querySelector('.paused img');
        if (pauseIcon) {
            //@ts-ignore
            pauseIcon.src = 'modules/og-experiments/src/CustomFoundryLogo/custom-foundry-logo.png';
            this.logDebug('Updated paused icons');
        }
    }

    addClassToPauseElement(el: any) {
        const pauseContainer = el.querySelector('.paused');
        if (pauseContainer) {
            pauseContainer.classList.add('og-custom-logo');
            this.logDebug('Updated paused container');
        }
    }
}
