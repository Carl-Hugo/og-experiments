import { OgBaseModule, registerGameExtensions } from '@og-modules/og-corelib';
import ModuleInfo from './module.json' assert { type: 'json' };
import { DefaultLoggerFactory, ILogger } from '@og-modules/og-corelib/loggers';

//og-custom-paused-icon
export class CustomPausedIcon extends OgBaseModule {
    public override get id(): string {
        return ModuleInfo.id;
    }
    public override get name(): string {
        return ModuleInfo.title;
    }

    public override initialize(): void {
        this.hooks.on('renderPause', (pauseLayer: any, html: any, data: any) => {
            this.updateIcon(html[0]);
        });
        this.hooks.on('ready', () => {
            this.updateIcon(document);
        });
    }

    // override init(): void {
    //     Hooks.on('renderPause', (pauseLayer: any, html: any, data: any) => {
    //         this.logDebug('renderPause', pauseLayer, html, data);
    //         this.updateIcon(html[0]);
    //     });
    // }

    // override ready(): void {
    //     this.updateIcon(document);
    // }

    updateIcon(el: any) {
        const pauseIcon = el.querySelector('.paused img');
        if (pauseIcon) {
            //@ts-ignore
            pauseIcon.src = `modules/${ModuleInfo.id}/og-paused-icon-128x128.webp`;
            this.logDebug('Updated paused icons');
        }
    }
}

// Create an instance of the module's plugin and register it as an `og` extension.
const rootLogger: ILogger = DefaultLoggerFactory.create(ModuleInfo.id);
registerGameExtensions(ModuleInfo.id, new CustomPausedIcon(rootLogger));
