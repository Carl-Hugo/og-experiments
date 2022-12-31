import { OgBaseModule } from './IModule';
import { namespace, OgSetting } from './OgSettings';
import { OgGameModuleSocket } from './OgGameModuleSocket';
import { logError, logText, registerGameExtensions } from './utils';

const defaultCrawlUrlPrefix = 'https://crawls.rpg.solutions/crawls/play/';
const debugCrawlUrlPrefix = 'http://localhost:4200/crawls/play/';

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
const stopCrawlIcon = 'fa-regular fa-stop';

const crawlIconElement = document.createElement('i');
crawlIconElement.className = crawlIcon;

export class StarWarsCrawl extends OgBaseModule {
    public get name(): string {
        return 'StarWarsCrawl';
    }
    private ogGameModuleSocket = new OgGameModuleSocket(enricherName);
    private crawlUrlPrefix = new OgSetting<string>('crawlUrlPrefix', 'https://crawls.rpg.solutions/crawls/play/', {
        scope: 'world',
        name: "Base Og's Crawls Central URL",
        hint: `This represents the base URL to load crawls from (${defaultCrawlUrlPrefix}). You should not need to change this. This option is useful mainly to use a local instance of the app, during development (${debugCrawlUrlPrefix}).`,
        type: String,
    });
    private restrictCrawlsControlsToGM = new OgSetting<boolean>('restrictCrawlsControlsToGM', true, {
        scope: 'world',
        name: 'Only GM can open Crawls',
        hint: `When this option is checked, only GMs will see the buttons to open, play, stop, and close Crawls for all. The players will see the Crawl name, without any button.`,
        type: Boolean,
    });

    init(): void {
        logText('StarWarsCrawl initiating');

        registerGameExtensions('crawl', {
            loadCrawl: this.loadCrawl,
            unloadCrawl: this.unloadCrawl,
            playCrawl: this.playCrawl,
            stopCrawl: this.stopCrawl,
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
                var disabled = !isGM() && this.restrictCrawlsControlsToGM.value;
                container.appendChild(
                    CreateButton(CrawlActions.open, `Open « ${data.name} » for everyone`, 'Open', openCrawlIcon, disabled)
                );
                container.appendChild(
                    CreateButton(CrawlActions.play, `Play « ${data.name} » for everyone`, 'Play', playCrawlIcon, disabled)
                );
                container.appendChild(
                    CreateButton(CrawlActions.stop, `Stop « ${data.name} » for everyone`, 'Stop', stopCrawlIcon, disabled)
                );
                container.appendChild(
                    CreateButton(CrawlActions.close, `Close « ${data.name} » for everyone`, 'Close', closeCrawlIcon, disabled)
                );
                return container;

                function CreateButton(
                    socketAction: CrawlActions,
                    tooltip: string,
                    text: string,
                    iconName: string,
                    disabled = false,
                    broken = false
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
                    button.disabled = disabled || socketAction !== CrawlActions.open;

                    button.dataset['tooltip'] = tooltip;
                    if (broken) {
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

        // on open
        document.addEventListener(`${namespace}:${enricherName}:${CrawlActions.open}`, () => {
            disableElement(CrawlActions.open, true);
            disableElement(CrawlActions.play, false);
            disableElement(CrawlActions.stop, true);
            disableElement(CrawlActions.close, false);
        });
        // on play
        document.addEventListener(`${namespace}:${enricherName}:${CrawlActions.play}`, () => {
            disableElement(CrawlActions.open, true);
            disableElement(CrawlActions.play, true);
            disableElement(CrawlActions.stop, false);
            disableElement(CrawlActions.close, false);
        });
        // on stop
        document.addEventListener(`${namespace}:${enricherName}:${CrawlActions.stop}`, () => {
            disableElement(CrawlActions.open, true);
            disableElement(CrawlActions.play, false);
            disableElement(CrawlActions.stop, true);
            disableElement(CrawlActions.close, false);
        });
        // on close
        document.addEventListener(`${namespace}:${enricherName}:${CrawlActions.close}`, () => {
            disableElement(CrawlActions.open, false);
            disableElement(CrawlActions.play, true);
            disableElement(CrawlActions.stop, true);
            disableElement(CrawlActions.close, true);
        });

        logText('StarWarsCrawl initiated');
        function disableElement(action: CrawlActions, disabled: boolean) {
            document.querySelectorAll(`.og-crawl-button-${action}`).forEach((el) => ((el as HTMLButtonElement).disabled = disabled));
        }
    }

    ready(): void {
        logText('StarWarsCrawl is getting ready');
        this.crawlUrlPrefix.ready();
        this.restrictCrawlsControlsToGM.ready();
        this.ogGameModuleSocket.registerAction<CrawlPayload>(CrawlActions.open, this.loadCrawl, this);
        this.ogGameModuleSocket.registerAction<CrawlPayload>(CrawlActions.play, this.playCrawl, this);
        this.ogGameModuleSocket.registerAction<CrawlPayload>(CrawlActions.stop, this.stopCrawl, this);
        this.ogGameModuleSocket.registerAction<CrawlPayload>(CrawlActions.close, this.unloadCrawl, this);
        logText('StarWarsCrawl is ready');
    }

    stopCrawl(payload: CrawlPayload) {
        if (iframe.contentWindow) {
            iframe.contentWindow.postMessage({ name: 'OgExperiments:StarWarsCrawl:Stop' }, '*');
        }
    }

    playCrawl(payload: CrawlPayload) {
        if (iframe.contentWindow) {
            iframe.contentWindow.postMessage({ name: 'OgExperiments:StarWarsCrawl:Play' }, '*');
        }
    }

    loadCrawl(payload: CrawlPayload) {
        if (hasIframe()) {
            logText('The iframe is already there; cannot add.');
            return;
        }
        const url = this.crawlUrlPrefix.value + payload.crawlId;
        iframe.src = url;
        iframe.addEventListener('load', (e) => {
            logText('Crawl iframe is loaded', url);
            if (iframe.contentWindow == null) {
                logError('iframe.contentWindow is null');
                return;
            }
        });
        document.body.appendChild(iframe);

        addButtonBar(payload.name);
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

function addButtonBar(name: string) {
    logText('addButtonBar');

    const buttonBar = findButtonBar(name);
    const controlsBar = wrapButtonBarWithContainer(buttonBar);
    document.body.appendChild(controlsBar);
}
function removeGMButtonBar(name: string) {
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

const isGM = () => (game as Game).user?.isGM;

interface CrawlPayload {
    crawlId: string;
    name: string;
}
enum CrawlActions {
    'open' = 'open',
    'play' = 'play',
    'stop' = 'stop',
    'close' = 'close',
}
