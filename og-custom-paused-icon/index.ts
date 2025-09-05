import ModuleInfo from './module.json' assert { type: 'json' };

//og-custom-paused-icon
export class CustomPausedIcon extends og.BaseModule {
    public override initialize(): void {
        this.hooks.on('renderPause', (pauseLayer: any, html: any, data: any) => {
            this.updateIcon(html[0]);
        });
        this.hooks.on('ready', () => {
            this.updateIcon(document);
        });
    }

    updateIcon(el: any) {
        const pauseIcon = el.querySelector('#paused img');
        if (pauseIcon) {
            //@ts-ignore
            pauseIcon.src = `modules/${this.id}/og-paused-icon-128x128.webp`;
            this.logDebug('Updated paused icons');
        }
    }
}

// Create an instance of the module and register it with Og Core Library.
og.registerModule(() => new CustomPausedIcon(ModuleInfo));
