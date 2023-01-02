import { OgBaseModule } from './IModule';
import { registerGameExtensions } from './utils';

export class Reload extends OgBaseModule {
    public get name(): string {
        return 'Reload';
    }
    override ready(): void {
        registerGameExtensions('reload', {
            // scripts: () => {
            //     const scripts = document.getElementsByTagName('script');
            //     for (var i = 0; i < scripts.length; i++) {
            //         const element = scripts[i];
            //         if (element.src.toLowerCase().match(/modules/)) {
            //             var src = element.src.replace(/(&|\?)rnd=\d+/, '');
            //             element.src = src + (src.match(/\?/) ? '&' : '?');
            //             element.src += 'rnd=' + new Date().valueOf();
            //         }
            //     }
            // },
            css: () => {
                // source: https://www.b3multimedia.ie/how-to-force-reload-all-cache/
                var e, r, a;
                for (e = 0, r = document.getElementsByTagName('link'); e < r.length; e++) {
                    if ((a = r[e]).rel.toLowerCase().match(/stylesheet/) && a.href) {
                        var t = a.href.replace(/(&|\?)rnd=\d+/, '');
                        (a.href = t + (t.match(/\?/) ? '&' : '?')), (a.href += 'rnd=' + new Date().valueOf());
                    }
                }
            },
        });
    }
}
