import { IOgModule } from './IModule';
import { namespace } from './OgSettings';
import { OgGameModuleSocket } from './OgGameModuleSocket';
import { logError, logText, registerGameExtensions } from './utils';

const enricherName = 'StarWarsCrawl';
const iframe = document.createElement('iframe');
iframe.width = '100%';
iframe.height = '100%';
iframe.style.zIndex = '999';
iframe.style.position = 'absolute';
iframe.style.border = '0px none';

const crawlIcon = 'fa-regular fa-projector'; //<i class="fa-brands fa-galactic-republic"></i>
const openCrawlIcon = 'fa-regular fa-power-off'; //<i class="fa-light fa-presentation-screen"></i>
const closeCrawlIcon = 'fa-regular fa-circle-xmark';
const playCrawlIcon = 'fa-regular fa-play';

const crawlIconElement = document.createElement('i');
crawlIconElement.className = crawlIcon;

const closeButton = document.createElement('a');
closeButton.dataset['type'] = enricherName;
closeButton.dataset['socketAction'] = 'close';
closeButton.style.zIndex = '1000';
closeButton.style.position = 'absolute';
closeButton.style.top = '0';
closeButton.style.right = '0';
closeButton.classList.add('content-link');
closeButton.innerHTML = `<i class="${crawlIcon}"></i><i class="${closeCrawlIcon}"></i> Close`;

export class StarWarsCrawl implements IOgModule {
    private ogGameModuleSocket = new OgGameModuleSocket(enricherName);
    init(): void {
        logText('StarWarsCrawl initiating');

        registerGameExtensions('crawl', {
            loadCrawl,
            unloadCrawl,
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
                        broken: false,
                        tooltip: 'tmp',
                        url: url,
                    },
                };

                const container = document.createElement('span');
                container.classList.add('og-crawl-player');
                container.appendChild(crawlIconElement);
                container.appendChild(document.createTextNode(` ${data.name} `));
                container.appendChild(CreateButton('open', `Open « ${data.name} » for everyone`, 'Open', openCrawlIcon));
                container.appendChild(CreateButton('play', `Play « ${data.name} » for everyone`, 'Play', playCrawlIcon, true));
                container.appendChild(CreateButton('close', `Close « ${data.name} » for everyone`, 'Close', closeCrawlIcon));
                return container;

                function CreateButton(
                    socketAction: string,
                    tooltip: string,
                    text: string,
                    iconName: string,
                    disabled = false
                ): HTMLElement {
                    const button = document.createElement('a');
                    button.classList.add(...data.classes);
                    button.draggable = false;
                    for (let [k, v] of Object.entries(data.dataset)) {
                        button.dataset[k] = v;
                    }
                    const icon = document.createElement('i');
                    icon.className = iconName;
                    button.appendChild(icon);
                    button.appendChild(document.createTextNode(text));

                    button.dataset['tooltip'] = tooltip;
                    if (disabled) {
                        button.classList.add('broken');
                        button.dataset['broken'] = 'true';
                        button.dataset['tooltip'] += ' (not supported yet)';
                    } else {
                        button.dataset['socketAction'] = socketAction;
                    }
                    return button;
                }
            },
        });
        document.addEventListener('click', (e) => {
            var target = e.target as any;
            if (target && target.dataset && target.dataset.type === enricherName && target.dataset.socketAction) {
                e.preventDefault();
                logText('Click: ', enricherName, target.dataset.socketAction);
                this.ogGameModuleSocket.broadcastToAll<CrawlPayload>({
                    action: target.dataset.socketAction,
                    payload: {
                        crawlId: target.dataset.url,
                    },
                });
            }
        });

        logText('StarWarsCrawl initiated');
    }
    ready(): void {
        logText('StarWarsCrawl is getting ready');
        this.ogGameModuleSocket.registerAction<CrawlPayload>('open', loadCrawl);
        this.ogGameModuleSocket.registerAction<CrawlPayload>('close', unloadCrawl);
        logText('StarWarsCrawl is ready');
    }
}

async function loadCrawl(payload: CrawlPayload) {
    if (hasIframe()) {
        logText('The iframe is already there; cannot add.');
        return;
    }
    const url = `https://crawls.rpg.solutions/crawls/play/${payload.crawlId}`;
    iframe.src = url;
    iframe.addEventListener('load', (e) => {
        logText('Crawl iframe is loaded');
        if (iframe.contentWindow == null) {
            logError('iframe.contentWindow is null');
            return;
        }
    });
    document.body.appendChild(iframe);

    // GM can reload everyone's UI
    if ((game as Game).user?.isGM) {
        logText('GM');
        document.body.appendChild(closeButton);
    }
}

async function unloadCrawl(payload: CrawlPayload) {
    if (!hasIframe()) {
        logText('The iframe is not present; cannot remove.');
        return;
    }
    document.body.removeChild(iframe);
    document.body.removeChild(closeButton);
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

interface CrawlPayload {
    crawlId: string;
}
