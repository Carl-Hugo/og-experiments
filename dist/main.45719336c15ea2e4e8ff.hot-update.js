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
/* harmony import */ var _OgSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
/* harmony import */ var _SocketUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocketUtils */ "./src/SocketUtils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



const enricherName = 'StarWarsCrawl';
const iframe = document.createElement('iframe');
iframe.width = '100%';
iframe.height = '100%';
iframe.style.zIndex = '999999;';
iframe.style.position = 'absolute';
iframe.style.border = '0px none';
class StarWarsCrawl {
    constructor() {
        this.ogSocket = new _SocketUtils__WEBPACK_IMPORTED_MODULE_1__.OgGameSocket(enricherName);
    }
    init() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('StarWarsCrawl initiating');
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.registerGameExtensions)('crawl', {
            loadCrawl,
        });
        CONFIG.TextEditor.enrichers.push({
            pattern: /@StarWarsCrawl\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: (match, options) => {
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('StarWarsCrawl enricher');
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
            var target = e.target;
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('Click: ', target.dataset);
            if (target && target.dataset && target.dataset.type === enricherName) {
                e.preventDefault();
                this.ogSocket.broadcastSocketEvent({
                    action: target.dataset.socketAction,
                    payload: {
                        url: target.dataset.url,
                    },
                });
                // (game as Game).socket!.emit(`module.${namespace}`, {
                //     name: enricherName,
                //     action: target.dataset.socketAction,
                //     payload: {
                //         url: target.dataset.url,
                //     },
                // });
                if (target.dataset.socketAction === 'open') {
                    await loadCrawl(target.dataset.url);
                }
                else if (target.dataset.socketAction === 'close') {
                    await unloadCrawl(target.dataset.url);
                }
            }
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('StarWarsCrawl initiated');
    }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('StarWarsCrawl is getting ready');
        registerToSocketEvent(game).socket.on(`module.${_OgSettings__WEBPACK_IMPORTED_MODULE_0__.namespace}`, async (event) => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('Socket received event: ', event);
            if (event.name === enricherName) {
                if (event.action === 'open') {
                    await loadCrawl(event.payload.url);
                }
                else if (event.action === 'close') {
                    await unloadCrawl(event.payload.url);
                }
            }
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('StarWarsCrawl is ready');
    }
}
async function loadCrawl(crawlId) {
    if (hasIframe()) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('The iframe is already there; cannot add.');
        return;
    }
    const url = `https://crawls.rpg.solutions/crawls/play/${crawlId}`;
    iframe.src = url;
    iframe.addEventListener('load', (e) => {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('Crawl iframe is loaded');
        if (iframe.contentWindow == null) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logError)('iframe.contentWindow is null');
            return;
        }
    });
    document.body.appendChild(iframe);
}
async function unloadCrawl(crawlId) {
    if (!hasIframe()) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('The iframe is not present; cannot remove.');
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


/***/ }),

/***/ "./src/SocketUtils.ts":
/*!****************************!*\
  !*** ./src/SocketUtils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OgGameSocket": () => (/* binding */ OgGameSocket)
/* harmony export */ });
/* harmony import */ var _OgSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


const moduleEventName = `module.${_OgSettings__WEBPACK_IMPORTED_MODULE_0__.namespace}`;
class OgGameSocket {
    constructor(ogModuleName) {
        this.ogModuleName = ogModuleName;
        this.game = game;
    }
    registerToSocketEvent(delegate) {
        if (!this.game.socket) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logError)('The game socket was not found.');
            return;
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)(`Registering socket event ${this.ogModuleName}`);
        this.game.socket.on(moduleEventName, async (receivedEvent) => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('Socket event received: ', receivedEvent);
            if (receivedEvent.name === this.ogModuleName) {
                delegate(receivedEvent);
            }
        });
    }
    broadcastSocketEvent(event) {
        if (!this.game.socket) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logError)('The game socket was not found.');
            return;
        }
        this.game.socket.emit(moduleEventName, { ...event, name: this.ogModuleName });
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("439e5feac74424eae796")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NTcxOTMzNmMxNWVhMmU0ZThmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSTtBQUN1QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUDtBQUNBLDRCQUE0QixzREFBWTtBQUN4QztBQUNBO0FBQ0EsUUFBUSwrQ0FBTztBQUNmLFFBQVEsOERBQXNCO0FBQzlCO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0RBQW9ELElBQUksSUFBSTtBQUM1RDtBQUNBLGdCQUFnQiwrQ0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYSxHQUFHLElBQUk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUpBQWlKLFVBQVU7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSUFBMEksVUFBVTtBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVksK0NBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQix5REFBeUQsVUFBVTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSwrQ0FBTztBQUNmO0FBQ0E7QUFDQSxRQUFRLCtDQUFPO0FBQ2Ysd0RBQXdELGtEQUFTLENBQUM7QUFDbEUsWUFBWSwrQ0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsK0NBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU8sK0JBQStCO0FBQzlDO0FBQ0E7QUFDQSw0REFBNEQsUUFBUTtBQUNwRTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTztBQUNmO0FBQ0EsWUFBWSxnREFBUTtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTyw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEl5QztBQUNHO0FBQzVDLGtDQUFrQyxrREFBUyxDQUFDO0FBQ3JDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBUTtBQUNwQjtBQUNBO0FBQ0EsUUFBUSwrQ0FBTyw2QkFBNkIsa0JBQWtCO0FBQzlEO0FBQ0EsWUFBWSwrQ0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBUTtBQUNwQjtBQUNBO0FBQ0EsaURBQWlELG1DQUFtQztBQUNwRjtBQUNBOzs7Ozs7Ozs7VUM1QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9DcmF3bC50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9Tb2NrZXRVdGlscy50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmFtZXNwYWNlIH0gZnJvbSAnLi9PZ1NldHRpbmdzJztcclxuaW1wb3J0IHsgT2dHYW1lU29ja2V0IH0gZnJvbSAnLi9Tb2NrZXRVdGlscyc7XHJcbmltcG9ydCB7IGxvZ0Vycm9yLCBsb2dUZXh0LCByZWdpc3RlckdhbWVFeHRlbnNpb25zIH0gZnJvbSAnLi91dGlscyc7XHJcbmNvbnN0IGVucmljaGVyTmFtZSA9ICdTdGFyV2Fyc0NyYXdsJztcclxuY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbmlmcmFtZS53aWR0aCA9ICcxMDAlJztcclxuaWZyYW1lLmhlaWdodCA9ICcxMDAlJztcclxuaWZyYW1lLnN0eWxlLnpJbmRleCA9ICc5OTk5OTk7JztcclxuaWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuaWZyYW1lLnN0eWxlLmJvcmRlciA9ICcwcHggbm9uZSc7XHJcbmV4cG9ydCBjbGFzcyBTdGFyV2Fyc0NyYXdsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2dTb2NrZXQgPSBuZXcgT2dHYW1lU29ja2V0KGVucmljaGVyTmFtZSk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1N0YXJXYXJzQ3Jhd2wgaW5pdGlhdGluZycpO1xyXG4gICAgICAgIHJlZ2lzdGVyR2FtZUV4dGVuc2lvbnMoJ2NyYXdsJywge1xyXG4gICAgICAgICAgICBsb2FkQ3Jhd2wsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ09ORklHLlRleHRFZGl0b3IuZW5yaWNoZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXR0ZXJuOiAvQFN0YXJXYXJzQ3Jhd2xcXFsoW15cXF1dKylcXF0oPzp7KFtefV0rKX0pPy9nbSxcclxuICAgICAgICAgICAgZW5yaWNoZXI6IChtYXRjaCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBlbnJpY2hlcicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IFt1cmwsIG5hbWVdID0gbWF0Y2guc2xpY2UoMSwgMyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1saW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2NvbnRlbnQtbGluayddLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDogYCR7ZW5yaWNoZXJOYW1lfS4ke3VybH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlbnJpY2hlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdMaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZCguLi5kYXRhLmNsYXNzZXMpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEuZGF0YXNldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uZGF0YXNldFtrXSA9IHY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uZGF0YXNldFsnc29ja2V0QWN0aW9uJ10gPSAnb3Blbic7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdhbGFjdGljLXJlcHVibGljXCI+PC9pPjxpIGNsYXNzPVwiZmEtbGlnaHQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcIj48L2k+ICR7ZGF0YS5uYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uZGF0YS5jbGFzc2VzKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEuZGF0YXNldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5kYXRhc2V0W2tdID0gdjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLmRhdGFzZXRbJ3NvY2tldEFjdGlvbiddID0gJ2Nsb3NlJztcclxuICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1nYWxhY3RpYy1yZXB1YmxpY1wiPjwvaT48aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrXCI+PC9pPiBDbG9zZSAke2RhdGEubmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgbG9nVGV4dCgnQ2xpY2s6ICcsIHRhcmdldC5kYXRhc2V0KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldCAmJiB0YXJnZXQuZGF0YXNldC50eXBlID09PSBlbnJpY2hlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2dTb2NrZXQuYnJvYWRjYXN0U29ja2V0RXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGFyZ2V0LmRhdGFzZXQuc29ja2V0QWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0YXJnZXQuZGF0YXNldC51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gKGdhbWUgYXMgR2FtZSkuc29ja2V0IS5lbWl0KGBtb2R1bGUuJHtuYW1lc3BhY2V9YCwge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6IGVucmljaGVyTmFtZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhY3Rpb246IHRhcmdldC5kYXRhc2V0LnNvY2tldEFjdGlvbixcclxuICAgICAgICAgICAgICAgIC8vICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHVybDogdGFyZ2V0LmRhdGFzZXQudXJsLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuZGF0YXNldC5zb2NrZXRBY3Rpb24gPT09ICdvcGVuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGxvYWRDcmF3bCh0YXJnZXQuZGF0YXNldC51cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmRhdGFzZXQuc29ja2V0QWN0aW9uID09PSAnY2xvc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdW5sb2FkQ3Jhd2wodGFyZ2V0LmRhdGFzZXQudXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvZ1RleHQoJ1N0YXJXYXJzQ3Jhd2wgaW5pdGlhdGVkJyk7XHJcbiAgICB9XHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBsb2dUZXh0KCdTdGFyV2Fyc0NyYXdsIGlzIGdldHRpbmcgcmVhZHknKTtcclxuICAgICAgICByZWdpc3RlclRvU29ja2V0RXZlbnQoZ2FtZSkuc29ja2V0Lm9uKGBtb2R1bGUuJHtuYW1lc3BhY2V9YCwgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxvZ1RleHQoJ1NvY2tldCByZWNlaXZlZCBldmVudDogJywgZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQubmFtZSA9PT0gZW5yaWNoZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYWN0aW9uID09PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBsb2FkQ3Jhd2woZXZlbnQucGF5bG9hZC51cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuYWN0aW9uID09PSAnY2xvc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdW5sb2FkQ3Jhd2woZXZlbnQucGF5bG9hZC51cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpcyByZWFkeScpO1xyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRDcmF3bChjcmF3bElkKSB7XHJcbiAgICBpZiAoaGFzSWZyYW1lKCkpIHtcclxuICAgICAgICBsb2dUZXh0KCdUaGUgaWZyYW1lIGlzIGFscmVhZHkgdGhlcmU7IGNhbm5vdCBhZGQuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vY3Jhd2xzLnJwZy5zb2x1dGlvbnMvY3Jhd2xzL3BsYXkvJHtjcmF3bElkfWA7XHJcbiAgICBpZnJhbWUuc3JjID0gdXJsO1xyXG4gICAgaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGxvZ1RleHQoJ0NyYXdsIGlmcmFtZSBpcyBsb2FkZWQnKTtcclxuICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsb2dFcnJvcignaWZyYW1lLmNvbnRlbnRXaW5kb3cgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdW5sb2FkQ3Jhd2woY3Jhd2xJZCkge1xyXG4gICAgaWYgKCFoYXNJZnJhbWUoKSkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1RoZSBpZnJhbWUgaXMgbm90IHByZXNlbnQ7IGNhbm5vdCByZW1vdmUuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG59XHJcbmZ1bmN0aW9uIGhhc0lmcmFtZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jdW1lbnQuYm9keS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgIGlmIChlbGVtZW50ID09PSBpZnJhbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7IG5hbWVzcGFjZSB9IGZyb20gJy4vT2dTZXR0aW5ncyc7XHJcbmltcG9ydCB7IGxvZ0Vycm9yLCBsb2dUZXh0IH0gZnJvbSAnLi91dGlscyc7XHJcbmNvbnN0IG1vZHVsZUV2ZW50TmFtZSA9IGBtb2R1bGUuJHtuYW1lc3BhY2V9YDtcclxuZXhwb3J0IGNsYXNzIE9nR2FtZVNvY2tldCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvZ01vZHVsZU5hbWUpIHtcclxuICAgICAgICB0aGlzLm9nTW9kdWxlTmFtZSA9IG9nTW9kdWxlTmFtZTtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJUb1NvY2tldEV2ZW50KGRlbGVnYXRlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuc29ja2V0KSB7XHJcbiAgICAgICAgICAgIGxvZ0Vycm9yKCdUaGUgZ2FtZSBzb2NrZXQgd2FzIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dUZXh0KGBSZWdpc3RlcmluZyBzb2NrZXQgZXZlbnQgJHt0aGlzLm9nTW9kdWxlTmFtZX1gKTtcclxuICAgICAgICB0aGlzLmdhbWUuc29ja2V0Lm9uKG1vZHVsZUV2ZW50TmFtZSwgYXN5bmMgKHJlY2VpdmVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbG9nVGV4dCgnU29ja2V0IGV2ZW50IHJlY2VpdmVkOiAnLCByZWNlaXZlZEV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKHJlY2VpdmVkRXZlbnQubmFtZSA9PT0gdGhpcy5vZ01vZHVsZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGVnYXRlKHJlY2VpdmVkRXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBicm9hZGNhc3RTb2NrZXRFdmVudChldmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lLnNvY2tldCkge1xyXG4gICAgICAgICAgICBsb2dFcnJvcignVGhlIGdhbWUgc29ja2V0IHdhcyBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lLnNvY2tldC5lbWl0KG1vZHVsZUV2ZW50TmFtZSwgeyAuLi5ldmVudCwgbmFtZTogdGhpcy5vZ01vZHVsZU5hbWUgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDM5ZTVmZWFjNzQ0MjRlYWU3OTZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=