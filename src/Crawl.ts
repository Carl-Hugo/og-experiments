import { IOgModule } from './IModule';
import { namespace } from './OgSettings';
import { logError, logText, registerGameExtensions } from './utils';

const enricherName = 'StarWarsCrawl';
const iframe = document.createElement('iframe');
iframe.width = '100%';
iframe.height = '100%';
iframe.style.zIndex = '999999;';
iframe.style.position = 'absolute';
iframe.style.border = '0px none';

export class StarWarsCrawl implements IOgModule {
    init(): void {
        logText('StarWarsCrawl initiating');

        registerGameExtensions('crawl', {
            loadCrawl,
        });

        (CONFIG as any).TextEditor.enrichers.push({
            pattern: /@StarWarsCrawl\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: (match: any[], options: any) => {
                logText('StarWarsCrawl enricher');
                let [url, name] = match.slice(1, 3);
                const data = {
                    name: name,
                    icon: 'fas fa-link',
                    classes: ['content-link'],
                    dataset: {
                        uuid: `${enricherName}.${url}`,
                        id: url,
                        type: enricherName,
                        tooltip: 'Link',
                        broken: false,
                        url: url,
                    },
                };

                const actionButton = document.createElement('a');
                actionButton.classList.add(...data.classes);
                actionButton.draggable = false;
                for (let [k, v] of Object.entries(data.dataset)) {
                    actionButton.dataset[k] = v;
                }
                actionButton.dataset['socketAction'] = 'open';
                actionButton.innerHTML = `<i class="fa-brands fa-galactic-republic"></i><i class="fa-light fa-arrow-up-right-from-square"></i> ${data.name}`;

                const closeButton = document.createElement('a');
                closeButton.classList.add(...data.classes);
                closeButton.draggable = false;
                for (let [k, v] of Object.entries(data.dataset)) {
                    closeButton.dataset[k] = v;
                }
                closeButton.dataset['socketAction'] = 'close';
                closeButton.innerHTML = `<i class="fa-brands fa-galactic-republic"></i><i class="fa-regular fa-circle-xmark"></i> Close ${data.name}`;

                const container = document.createElement('span');
                container.appendChild(actionButton);
                container.appendChild(closeButton);
                return container;
            },
        });

        document.addEventListener('click', async (e) => {
            var target = e.target as any;
            logText('Click: ', target.dataset);
            if (target && target.dataset && target.dataset.type === enricherName) {
                e.preventDefault();
                (game as Game).socket!.emit(`module.${namespace}`, {
                    name: enricherName,
                    action: target.dataset.socketAction,
                    payload: {
                        url: target.dataset.url,
                    },
                });
                if (target.dataset.socketAction === 'open') {
                    await loadCrawl(target.dataset.url);
                } else if (target.dataset.socketAction === 'close') {
                    await unloadCrawl(target.dataset.url);
                }
            }
        });

        logText('StarWarsCrawl initiated');
    }
    ready(): void {
        logText('StarWarsCrawl is getting ready');
        (game as Game).socket!.on(`module.${namespace}`, async (event: SocketEvent) => {
            logText('Socket received event: ', event);
            if (event.name === enricherName) {
                if (event.action === 'open') {
                    await loadCrawl(event.payload.url);
                } else if (event.action === 'close') {
                    await unloadCrawl(event.payload.url);
                }
            }
        });
        logText('StarWarsCrawl is ready');
    }
}

interface SocketEvent {
    name: string;
    action: string;
    payload: any;
}

async function loadCrawl(crawlId: string) {
    if (hasIframe()) {
        logText('The iframe is already there; cannot add.');
        return;
    }
    const url = `https://crawls.rpg.solutions/crawls/play/${crawlId}`;
    iframe.src = url;
    iframe.addEventListener('load', (e) => {
        logText('Crawl iframe is loaded');
        if (iframe.contentWindow == null) {
            logError('iframe.contentWindow is null');
            return;
        }
    });
    document.body.appendChild(iframe);
}

async function unloadCrawl(crawlId: string) {
    if (!hasIframe()) {
        logText('The iframe is not present; cannot remove.');
        return;
    }
    document.body.removeChild(iframe);
}

function hasIframe() {
    for (let i = 0; i < document.body.children.length; i++) {
        const element = document.body.children[i];
        if (element === iframe) {
            return true;
        }
    }
    return false;
}
