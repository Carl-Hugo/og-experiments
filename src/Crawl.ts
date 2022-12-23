import { IOgModule } from './IModule';
import { namespace } from './OgSettings';
import { OgGameModuleSocket } from './OgGameModuleSocket';
import { logError, logText, registerGameExtensions } from './utils';

const crawlUrlPrefix = 'https://crawls.rpg.solutions/crawls/play/';

const enricherName = 'StarWarsCrawl';
const iframe = document.createElement('iframe');
iframe.width = '100%';
iframe.height = '100%';
iframe.style.zIndex = '999';
iframe.style.position = 'absolute';
iframe.style.border = '0px none';

const crawlIcon = 'fa-regular fa-projector';
const openCrawlIcon = 'fa-regular fa-power-off';
const closeCrawlIcon = 'fa-regular fa-circle-xmark';
const playCrawlIcon = 'fa-regular fa-play';

const crawlIconElement = document.createElement('i');
crawlIconElement.className = crawlIcon;

export class StarWarsCrawl implements IOgModule {
    private ogGameModuleSocket = new OgGameModuleSocket(enricherName);
    init(): void {
        logText('StarWarsCrawl initiating');

        registerGameExtensions('crawl', {
            loadCrawl: this.loadCrawl,
            unloadCrawl: this.unloadCrawl,
        });

        (CONFIG as any).TextEditor.enrichers.push({
            pattern: /@StarWarsCrawl\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: (match: any[], options: any) => {
                logText('StarWarsCrawl enricher');
                let [url, name] = match.slice(1, 3);
                const data = {
                    name: name,
                    icon: 'fas fa-link',
                    classes: ['content-link', 'og-crawl-button'],
                    dataset: {
                        uuid: `${enricherName}.${url}`,
                        id: url,
                        type: enricherName,
                        broken: false,
                        tooltip: 'tmp',
                        url: url,
                        ogCrawlPlayerName: name,
                    },
                };

                const container = document.createElement('span');
                container.classList.add('og-crawl-player');
                container.dataset.ogCrawlPlayerName = data.name;
                container.appendChild(crawlIconElement);
                container.appendChild(document.createTextNode(` ${data.name} `));
                container.appendChild(CreateButton(CrawlActions.open, `Open « ${data.name} » for everyone`, 'Open', openCrawlIcon));
                container.appendChild(CreateButton(CrawlActions.play, `Play « ${data.name} » for everyone`, 'Play', playCrawlIcon, true));
                container.appendChild(CreateButton(CrawlActions.close, `Close « ${data.name} » for everyone`, 'Close', closeCrawlIcon));
                return container;

                function CreateButton(
                    socketAction: CrawlActions,
                    tooltip: string,
                    text: string,
                    iconName: string,
                    disabled = false
                ): HTMLElement {
                    const button = document.createElement('button');
                    button.classList.add(...data.classes);
                    button.classList.add(`og-crawl-button-${socketAction}`);
                    button.draggable = false;
                    for (let [k, v] of Object.entries(data.dataset)) {
                        button.dataset[k] = v;
                    }
                    const icon = document.createElement('i');
                    icon.className = iconName;
                    button.appendChild(icon);
                    button.appendChild(document.createTextNode(text));
                    button.disabled = socketAction !== CrawlActions.open;

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
                        name: target.dataset.ogCrawlPlayerName,
                    },
                });
                document.dispatchEvent(new Event(`${namespace}:${enricherName}:${target.dataset.socketAction}`));
            }
        });

        document.addEventListener(`${namespace}:${enricherName}:${CrawlActions.open}`, () => {
            document
                .querySelectorAll(`.og-crawl-button-${CrawlActions.play}`)
                .forEach((el) => ((el as HTMLButtonElement).disabled = false));
            document
                .querySelectorAll(`.og-crawl-button-${CrawlActions.close}`)
                .forEach((el) => ((el as HTMLButtonElement).disabled = false));
            document.querySelectorAll(`.og-crawl-button-${CrawlActions.open}`).forEach((el) => ((el as HTMLButtonElement).disabled = true));
        });
        document.addEventListener(`${namespace}:${enricherName}:${CrawlActions.close}`, () => {
            document.querySelectorAll(`.og-crawl-button-${CrawlActions.play}`).forEach((el) => ((el as HTMLButtonElement).disabled = true));
            document
                .querySelectorAll(`.og-crawl-button-${CrawlActions.close}`)
                .forEach((el) => ((el as HTMLButtonElement).disabled = true));
            document
                .querySelectorAll(`.og-crawl-button-${CrawlActions.open}`)
                .forEach((el) => ((el as HTMLButtonElement).disabled = false));
        });

        logText('StarWarsCrawl initiated');
    }
    ready(): void {
        logText('StarWarsCrawl is getting ready');
        this.ogGameModuleSocket.registerAction<CrawlPayload>(CrawlActions.open, this.loadCrawl);
        this.ogGameModuleSocket.registerAction<CrawlPayload>(CrawlActions.close, this.unloadCrawl);
        logText('StarWarsCrawl is ready');
    }

    loadCrawl(payload: CrawlPayload) {
        if (hasIframe()) {
            logText('The iframe is already there; cannot add.');
            return;
        }
        const url = crawlUrlPrefix + payload.crawlId;
        iframe.src = url;
        iframe.addEventListener('load', (e) => {
            logText('Crawl iframe is loaded');
            if (iframe.contentWindow == null) {
                logError('iframe.contentWindow is null');
                return;
            }
        });
        document.body.appendChild(iframe);

        addGMButtonBar(payload.name);
        logText('loadCrawl', payload);
    }

    unloadCrawl(payload: CrawlPayload) {
        if (!hasIframe()) {
            logText('The iframe is not present; cannot remove.');
            return;
        }
        document.body.removeChild(iframe);

        removeGMButtonBar(payload.name);
        logText('unloadCrawl', payload);
    }
}

function addGMButtonBar(name: string) {
    if (!(game as Game).user?.isGM) {
        return;
    }
    logText('addButtonBar');

    const buttonBar = findButtonBar(name);
    const controlsBar = wrapButtonBarWithContainer(buttonBar);
    document.body.appendChild(controlsBar);
}
function removeGMButtonBar(name: string) {
    if (!(game as Game).user?.isGM) {
        return;
    }
    logText('removeButtonBar');

    const controlsBar = document.getElementById('og-crawl-controls-container');
    document.body.removeChild(controlsBar as Node);
}
function wrapButtonBarWithContainer(buttonBar: HTMLElement): HTMLElement {
    const container = document.createElement('div');
    container.id = 'og-crawl-controls-container';
    container.style.zIndex = '1000';
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.right = '0';
    container.appendChild(buttonBar.cloneNode(true));
    return container;
}
function findButtonBar(name: string): HTMLElement {
    const bar = document.querySelector(`.og-crawl-player[data-og-crawl-player-name="${name}"]`);
    return bar as HTMLElement;
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
    name: string;
}
enum CrawlActions {
    'open' = 'open',
    'play' = 'play',
    'close' = 'close',
}
