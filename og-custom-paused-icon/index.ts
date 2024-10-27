import { OgBaseModule, OgLib } from '@og-modules/og-corelib';
import ModuleInfo from './module.json' assert { type: 'json' };

//og-custom-paused-icon
export class CustomPausedIcon extends OgBaseModule {
    public override get name(): string {
        return "Og's Custom Foundry VTT Paused Icon";
    }

    override init(): void {
        Hooks.on('renderPause', (pauseLayer: any, html: any, data: any) => {
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
            pauseIcon.src = `modules/${ModuleInfo.id}/og-paused-icon-128x128.webp`;
            this.logDebug('Updated paused icons');
        }
    }
}

// Register the module of OgModuleManager
OgLib.moduleManager.register(new CustomPausedIcon(OgLib.rootLogger));
