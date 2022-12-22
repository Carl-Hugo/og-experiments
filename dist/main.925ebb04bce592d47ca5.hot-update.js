"use strict";
self["webpackHotUpdateog_experiments"]("main",{

/***/ "./src/Crawl.ts":
/*!**********************!*\
  !*** ./src/Crawl.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarWarsCrawl": () => (/* binding */ StarWarsCrawl)
/* harmony export */ });
/* harmony import */ var _OgGameModuleSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OgGameModuleSocket */ "./src/OgGameModuleSocket.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


const enricherName = 'StarWarsCrawl';
const iframe = document.createElement('iframe');
iframe.width = '100%';
iframe.height = '100%';
iframe.style.zIndex = '999';
iframe.style.position = 'absolute';
iframe.style.border = '0px none';
const crawlIconClassName = 'fa-regular fa-projector'; //<i class="fa-brands fa-galactic-republic"></i>
const crawlIcon = `<i class="${crawlIconClassName}"></i>`;
const crawlIconElement = document.createElement('i');
crawlIconElement.className = crawlIconClassName;
const openCrawlIcon = '<i class="fa-regular fa-power-off"></i>'; //<i class="fa-light fa-presentation-screen"></i>
const closeCrawlIcon = '<i class="fa-regular fa-circle-xmark"></i>';
const playCrawlIcon = '<i class="fa-regular fa-play"></i>';
const closeButton = document.createElement('a');
closeButton.dataset['type'] = enricherName;
closeButton.dataset['socketAction'] = 'close';
closeButton.style.zIndex = '1000';
closeButton.style.position = 'absolute';
closeButton.style.top = '0';
closeButton.style.right = '0';
closeButton.classList.add('content-link');
closeButton.innerHTML = `${crawlIcon}${closeCrawlIcon} Close`;
class StarWarsCrawl {
    constructor() {
        this.ogGameModuleSocket = new _OgGameModuleSocket__WEBPACK_IMPORTED_MODULE_0__.OgGameModuleSocket(enricherName);
    }
    init() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl initiating');
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.registerGameExtensions)('crawl', {
            loadCrawl,
            unloadCrawl,
        });
        CONFIG.TextEditor.enrichers.push({
            pattern: /@StarWarsCrawl\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: (match, options) => {
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl enricher');
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
                container.appendChild(document.createTextNode(` ${data.name}`));
                container.appendChild(CreateButton('open', `Open « ${data.name} » for everyone`, openCrawlIcon));
                container.appendChild(CreateButton('play', `Play « ${data.name} » for everyone`, playCrawlIcon, true));
                container.appendChild(CreateButton('close', `Close « ${data.name} » for everyone`, closeCrawlIcon));
                return container;
                function CreateButton(socketAction, tooltip, innerHTML, disabled = false) {
                    const button = document.createElement('button');
                    button.classList.add(...data.classes);
                    button.draggable = false;
                    for (let [k, v] of Object.entries(data.dataset)) {
                        button.dataset[k] = v;
                    }
                    button.innerHTML = innerHTML;
                    button.dataset['tooltip'] = tooltip;
                    if (disabled) {
                        button.classList.add('broken');
                        button.dataset['broken'] = 'true';
                        button.dataset['tooltip'] += ' (not supported yet)';
                    }
                    else {
                        button.dataset['socketAction'] = socketAction;
                    }
                    return button;
                }
            },
        });
        const eventListener = async (e) => {
            var target = e.target;
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('Click: ', target.dataset);
            if (target && target.dataset && target.dataset.type === enricherName && target.dataset.socketAction) {
                e.preventDefault();
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('Click: ', enricherName, target.dataset.socketAction);
                this.ogGameModuleSocket.broadcastToAll({
                    action: target.dataset.socketAction,
                    payload: {
                        crawlId: target.dataset.url,
                    },
                });
            }
        };
        // document.addEventListener('click', eventListener);
        $(document).on('click', '.og-crawl-player button', eventListener);
        // document.addEventListener(
        //     'click',
        //     async (e) => {
        //         var target = e.target as any;
        //         logText('Click: ', target.dataset);
        //         if (target && target.dataset && target.dataset.type === enricherName && target.dataset.socketAction) {
        //             e.preventDefault();
        //             logText('Click: ', enricherName, target.dataset.socketAction);
        //             this.ogGameModuleSocket.broadcastToAll<CrawlPayload>({
        //                 action: target.dataset.socketAction,
        //                 payload: {
        //                     crawlId: target.dataset.url,
        //                 },
        //             });
        //         }
        //     },
        //     true
        // );
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl initiated');
    }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl is getting ready');
        this.ogGameModuleSocket.registerAction('open', loadCrawl);
        this.ogGameModuleSocket.registerAction('close', unloadCrawl);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl is ready');
    }
}
async function loadCrawl(payload) {
    if (hasIframe()) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('The iframe is already there; cannot add.');
        return;
    }
    const url = `https://crawls.rpg.solutions/crawls/play/${payload.crawlId}`;
    iframe.src = url;
    iframe.addEventListener('load', (e) => {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('Crawl iframe is loaded');
        if (iframe.contentWindow == null) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logError)('iframe.contentWindow is null');
            return;
        }
    });
    document.body.appendChild(iframe);
    // GM can reload everyone's UI
    if (game.user?.isGM) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('GM');
        document.body.appendChild(closeButton);
    }
}
async function unloadCrawl(payload) {
    if (!hasIframe()) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('The iframe is not present; cannot remove.');
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("28156f9db42f9c5ecc31")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45MjVlYmIwNGJjZTU5MmQ0N2NhNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNVO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVLEVBQUUsZ0JBQWdCO0FBQ2hEO0FBQ1A7QUFDQSxzQ0FBc0MsbUVBQWtCO0FBQ3hEO0FBQ0E7QUFDQSxRQUFRLCtDQUFPO0FBQ2YsUUFBUSw4REFBc0I7QUFDOUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9EQUFvRCxJQUFJLElBQUk7QUFDNUQ7QUFDQSxnQkFBZ0IsK0NBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGFBQWEsR0FBRyxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsVUFBVTtBQUM1RSxxRUFBcUUsV0FBVztBQUNoRixxRUFBcUUsV0FBVztBQUNoRix1RUFBdUUsV0FBVztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSwrQ0FBTztBQUNuQjtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLFFBQVEsK0NBQU87QUFDZjtBQUNBO0FBQ0EsUUFBUSwrQ0FBTztBQUNmO0FBQ0E7QUFDQSxRQUFRLCtDQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFPLCtCQUErQjtBQUM5QztBQUNBO0FBQ0EsNERBQTRELGdCQUFnQjtBQUM1RTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTztBQUNmO0FBQ0EsWUFBWSxnREFBUTtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTyw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDbEtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvQ3Jhd2wudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9nR2FtZU1vZHVsZVNvY2tldCB9IGZyb20gJy4vT2dHYW1lTW9kdWxlU29ja2V0JztcclxuaW1wb3J0IHsgbG9nRXJyb3IsIGxvZ1RleHQsIHJlZ2lzdGVyR2FtZUV4dGVuc2lvbnMgfSBmcm9tICcuL3V0aWxzJztcclxuY29uc3QgZW5yaWNoZXJOYW1lID0gJ1N0YXJXYXJzQ3Jhd2wnO1xyXG5jb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuaWZyYW1lLndpZHRoID0gJzEwMCUnO1xyXG5pZnJhbWUuaGVpZ2h0ID0gJzEwMCUnO1xyXG5pZnJhbWUuc3R5bGUuekluZGV4ID0gJzk5OSc7XHJcbmlmcmFtZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbmlmcmFtZS5zdHlsZS5ib3JkZXIgPSAnMHB4IG5vbmUnO1xyXG5jb25zdCBjcmF3bEljb25DbGFzc05hbWUgPSAnZmEtcmVndWxhciBmYS1wcm9qZWN0b3InOyAvLzxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdhbGFjdGljLXJlcHVibGljXCI+PC9pPlxyXG5jb25zdCBjcmF3bEljb24gPSBgPGkgY2xhc3M9XCIke2NyYXdsSWNvbkNsYXNzTmFtZX1cIj48L2k+YDtcclxuY29uc3QgY3Jhd2xJY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuY3Jhd2xJY29uRWxlbWVudC5jbGFzc05hbWUgPSBjcmF3bEljb25DbGFzc05hbWU7XHJcbmNvbnN0IG9wZW5DcmF3bEljb24gPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXBvd2VyLW9mZlwiPjwvaT4nOyAvLzxpIGNsYXNzPVwiZmEtbGlnaHQgZmEtcHJlc2VudGF0aW9uLXNjcmVlblwiPjwvaT5cclxuY29uc3QgY2xvc2VDcmF3bEljb24gPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS14bWFya1wiPjwvaT4nO1xyXG5jb25zdCBwbGF5Q3Jhd2xJY29uID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1wbGF5XCI+PC9pPic7XHJcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5jbG9zZUJ1dHRvbi5kYXRhc2V0Wyd0eXBlJ10gPSBlbnJpY2hlck5hbWU7XHJcbmNsb3NlQnV0dG9uLmRhdGFzZXRbJ3NvY2tldEFjdGlvbiddID0gJ2Nsb3NlJztcclxuY2xvc2VCdXR0b24uc3R5bGUuekluZGV4ID0gJzEwMDAnO1xyXG5jbG9zZUJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbmNsb3NlQnV0dG9uLnN0eWxlLnRvcCA9ICcwJztcclxuY2xvc2VCdXR0b24uc3R5bGUucmlnaHQgPSAnMCc7XHJcbmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtbGluaycpO1xyXG5jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBgJHtjcmF3bEljb259JHtjbG9zZUNyYXdsSWNvbn0gQ2xvc2VgO1xyXG5leHBvcnQgY2xhc3MgU3RhcldhcnNDcmF3bCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9nR2FtZU1vZHVsZVNvY2tldCA9IG5ldyBPZ0dhbWVNb2R1bGVTb2NrZXQoZW5yaWNoZXJOYW1lKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpbml0aWF0aW5nJyk7XHJcbiAgICAgICAgcmVnaXN0ZXJHYW1lRXh0ZW5zaW9ucygnY3Jhd2wnLCB7XHJcbiAgICAgICAgICAgIGxvYWRDcmF3bCxcclxuICAgICAgICAgICAgdW5sb2FkQ3Jhd2wsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ09ORklHLlRleHRFZGl0b3IuZW5yaWNoZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXR0ZXJuOiAvQFN0YXJXYXJzQ3Jhd2xcXFsoW15cXF1dKylcXF0oPzp7KFtefV0rKX0pPy9nbSxcclxuICAgICAgICAgICAgZW5yaWNoZXI6IChtYXRjaCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBlbnJpY2hlcicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IFt1cmwsIG5hbWVdID0gbWF0Y2guc2xpY2UoMSwgMyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1saW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2NvbnRlbnQtbGluayddLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDogYCR7ZW5yaWNoZXJOYW1lfS4ke3VybH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlbnJpY2hlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICd0bXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvZy1jcmF3bC1wbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmF3bEljb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgICR7ZGF0YS5uYW1lfWApKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDcmVhdGVCdXR0b24oJ29wZW4nLCBgT3BlbiDCqyAke2RhdGEubmFtZX0gwrsgZm9yIGV2ZXJ5b25lYCwgb3BlbkNyYXdsSWNvbikpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKENyZWF0ZUJ1dHRvbigncGxheScsIGBQbGF5IMKrICR7ZGF0YS5uYW1lfSDCuyBmb3IgZXZlcnlvbmVgLCBwbGF5Q3Jhd2xJY29uLCB0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQ3JlYXRlQnV0dG9uKCdjbG9zZScsIGBDbG9zZSDCqyAke2RhdGEubmFtZX0gwrsgZm9yIGV2ZXJ5b25lYCwgY2xvc2VDcmF3bEljb24pKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBDcmVhdGVCdXR0b24oc29ja2V0QWN0aW9uLCB0b29sdGlwLCBpbm5lckhUTUwsIGRpc2FibGVkID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCguLi5kYXRhLmNsYXNzZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YS5kYXRhc2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uZGF0YXNldFtrXSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRhdGFzZXRbJ3Rvb2x0aXAnXSA9IHRvb2x0aXA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdicm9rZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRhdGFzZXRbJ2Jyb2tlbiddID0gJ3RydWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uZGF0YXNldFsndG9vbHRpcCddICs9ICcgKG5vdCBzdXBwb3J0ZWQgeWV0KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uZGF0YXNldFsnc29ja2V0QWN0aW9uJ10gPSBzb2NrZXRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgbG9nVGV4dCgnQ2xpY2s6ICcsIHRhcmdldC5kYXRhc2V0KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldCAmJiB0YXJnZXQuZGF0YXNldC50eXBlID09PSBlbnJpY2hlck5hbWUgJiYgdGFyZ2V0LmRhdGFzZXQuc29ja2V0QWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBsb2dUZXh0KCdDbGljazogJywgZW5yaWNoZXJOYW1lLCB0YXJnZXQuZGF0YXNldC5zb2NrZXRBY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vZ0dhbWVNb2R1bGVTb2NrZXQuYnJvYWRjYXN0VG9BbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGFyZ2V0LmRhdGFzZXQuc29ja2V0QWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Jhd2xJZDogdGFyZ2V0LmRhdGFzZXQudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudExpc3RlbmVyKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm9nLWNyYXdsLXBsYXllciBidXR0b24nLCBldmVudExpc3RlbmVyKTtcclxuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIC8vICAgICAnY2xpY2snLFxyXG4gICAgICAgIC8vICAgICBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IGFzIGFueTtcclxuICAgICAgICAvLyAgICAgICAgIGxvZ1RleHQoJ0NsaWNrOiAnLCB0YXJnZXQuZGF0YXNldCk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5kYXRhc2V0ICYmIHRhcmdldC5kYXRhc2V0LnR5cGUgPT09IGVucmljaGVyTmFtZSAmJiB0YXJnZXQuZGF0YXNldC5zb2NrZXRBY3Rpb24pIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbG9nVGV4dCgnQ2xpY2s6ICcsIGVucmljaGVyTmFtZSwgdGFyZ2V0LmRhdGFzZXQuc29ja2V0QWN0aW9uKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm9nR2FtZU1vZHVsZVNvY2tldC5icm9hZGNhc3RUb0FsbDxDcmF3bFBheWxvYWQ+KHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYWN0aW9uOiB0YXJnZXQuZGF0YXNldC5zb2NrZXRBY3Rpb24sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNyYXdsSWQ6IHRhcmdldC5kYXRhc2V0LnVybCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgdHJ1ZVxyXG4gICAgICAgIC8vICk7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpbml0aWF0ZWQnKTtcclxuICAgIH1cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1N0YXJXYXJzQ3Jhd2wgaXMgZ2V0dGluZyByZWFkeScpO1xyXG4gICAgICAgIHRoaXMub2dHYW1lTW9kdWxlU29ja2V0LnJlZ2lzdGVyQWN0aW9uKCdvcGVuJywgbG9hZENyYXdsKTtcclxuICAgICAgICB0aGlzLm9nR2FtZU1vZHVsZVNvY2tldC5yZWdpc3RlckFjdGlvbignY2xvc2UnLCB1bmxvYWRDcmF3bCk7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpcyByZWFkeScpO1xyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRDcmF3bChwYXlsb2FkKSB7XHJcbiAgICBpZiAoaGFzSWZyYW1lKCkpIHtcclxuICAgICAgICBsb2dUZXh0KCdUaGUgaWZyYW1lIGlzIGFscmVhZHkgdGhlcmU7IGNhbm5vdCBhZGQuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vY3Jhd2xzLnJwZy5zb2x1dGlvbnMvY3Jhd2xzL3BsYXkvJHtwYXlsb2FkLmNyYXdsSWR9YDtcclxuICAgIGlmcmFtZS5zcmMgPSB1cmw7XHJcbiAgICBpZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XHJcbiAgICAgICAgbG9nVGV4dCgnQ3Jhd2wgaWZyYW1lIGlzIGxvYWRlZCcpO1xyXG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxvZ0Vycm9yKCdpZnJhbWUuY29udGVudFdpbmRvdyBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAgIC8vIEdNIGNhbiByZWxvYWQgZXZlcnlvbmUncyBVSVxyXG4gICAgaWYgKGdhbWUudXNlcj8uaXNHTSkge1xyXG4gICAgICAgIGxvZ1RleHQoJ0dNJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdW5sb2FkQ3Jhd2wocGF5bG9hZCkge1xyXG4gICAgaWYgKCFoYXNJZnJhbWUoKSkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1RoZSBpZnJhbWUgaXMgbm90IHByZXNlbnQ7IGNhbm5vdCByZW1vdmUuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9zZUJ1dHRvbik7XHJcbn1cclxuZnVuY3Rpb24gaGFzSWZyYW1lKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW5baV07XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IGlmcmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjgxNTZmOWRiNDJmOWM1ZWNjMzFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=