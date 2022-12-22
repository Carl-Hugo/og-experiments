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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './SocketUtils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


const enricherName = 'StarWarsCrawl';
const iframe = document.createElement('iframe');
iframe.width = '100%';
iframe.height = '100%';
iframe.style.zIndex = '999999;';
iframe.style.position = 'absolute';
iframe.style.border = '0px none';
class StarWarsCrawl {
    constructor() {
        this.ogGameModuleSocket = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './SocketUtils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(enricherName);
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
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('Click: ', target.dataset);
            if (target && target.dataset && target.dataset.type === enricherName) {
                e.preventDefault();
                this.ogGameModuleSocket.broadcast({
                    action: target.dataset.socketAction,
                    payload: {
                        crawlId: target.dataset.url,
                    },
                });
                if (target.dataset.socketAction === 'open') {
                    await loadCrawl(target.dataset.url);
                }
                else if (target.dataset.socketAction === 'close') {
                    await unloadCrawl(target.dataset.url);
                }
            }
        });
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
}
async function unloadCrawl(payload) {
    if (!hasIframe()) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('The iframe is not present; cannot remove.');
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("80bdefaaf9b749e44c2d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNzdjMDQxNGZkNjhlOGIwNWI2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNpQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUDtBQUNBLHNDQUFzQyw0SUFBa0I7QUFDeEQ7QUFDQTtBQUNBLFFBQVEsK0NBQU87QUFDZixRQUFRLDhEQUFzQjtBQUM5QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0RBQW9ELElBQUksSUFBSTtBQUM1RDtBQUNBLGdCQUFnQiwrQ0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYSxHQUFHLElBQUk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUpBQWlKLFVBQVU7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSUFBMEksVUFBVTtBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVksK0NBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLCtDQUFPO0FBQ2Y7QUFDQTtBQUNBLFFBQVEsK0NBQU87QUFDZjtBQUNBO0FBQ0EsUUFBUSwrQ0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTywrQkFBK0I7QUFDOUM7QUFDQTtBQUNBLDREQUE0RCxnQkFBZ0I7QUFDNUU7QUFDQTtBQUNBLFFBQVEsK0NBQU87QUFDZjtBQUNBLFlBQVksZ0RBQVE7QUFDcEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU8sNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUN0SEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9DcmF3bC50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2dHYW1lTW9kdWxlU29ja2V0IH0gZnJvbSAnLi9Tb2NrZXRVdGlscyc7XHJcbmltcG9ydCB7IGxvZ0Vycm9yLCBsb2dUZXh0LCByZWdpc3RlckdhbWVFeHRlbnNpb25zIH0gZnJvbSAnLi91dGlscyc7XHJcbmNvbnN0IGVucmljaGVyTmFtZSA9ICdTdGFyV2Fyc0NyYXdsJztcclxuY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbmlmcmFtZS53aWR0aCA9ICcxMDAlJztcclxuaWZyYW1lLmhlaWdodCA9ICcxMDAlJztcclxuaWZyYW1lLnN0eWxlLnpJbmRleCA9ICc5OTk5OTk7JztcclxuaWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuaWZyYW1lLnN0eWxlLmJvcmRlciA9ICcwcHggbm9uZSc7XHJcbmV4cG9ydCBjbGFzcyBTdGFyV2Fyc0NyYXdsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2dHYW1lTW9kdWxlU29ja2V0ID0gbmV3IE9nR2FtZU1vZHVsZVNvY2tldChlbnJpY2hlck5hbWUpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsb2dUZXh0KCdTdGFyV2Fyc0NyYXdsIGluaXRpYXRpbmcnKTtcclxuICAgICAgICByZWdpc3RlckdhbWVFeHRlbnNpb25zKCdjcmF3bCcsIHtcclxuICAgICAgICAgICAgbG9hZENyYXdsLFxyXG4gICAgICAgICAgICB1bmxvYWRDcmF3bCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBDT05GSUcuVGV4dEVkaXRvci5lbnJpY2hlcnMucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdHRlcm46IC9AU3RhcldhcnNDcmF3bFxcWyhbXlxcXV0rKVxcXSg/OnsoW159XSspfSk/L2dtLFxyXG4gICAgICAgICAgICBlbnJpY2hlcjogKG1hdGNoLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2dUZXh0KCdTdGFyV2Fyc0NyYXdsIGVucmljaGVyJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgW3VybCwgbmFtZV0gPSBtYXRjaC5zbGljZSgxLCAzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLWxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnY29udGVudC1saW5rJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBgJHtlbnJpY2hlck5hbWV9LiR7dXJsfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGVucmljaGVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJ0xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLmRhdGEuY2xhc3Nlcyk7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YS5kYXRhc2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5kYXRhc2V0W2tdID0gdjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5kYXRhc2V0Wydzb2NrZXRBY3Rpb24nXSA9ICdvcGVuJztcclxuICAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2FsYWN0aWMtcmVwdWJsaWNcIj48L2k+PGkgY2xhc3M9XCJmYS1saWdodCBmYS1hcnJvdy11cC1yaWdodC1mcm9tLXNxdWFyZVwiPjwvaT4gJHtkYXRhLm5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5kYXRhLmNsYXNzZXMpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YS5kYXRhc2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLmRhdGFzZXRba10gPSB2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uZGF0YXNldFsnc29ja2V0QWN0aW9uJ10gPSAnY2xvc2UnO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdhbGFjdGljLXJlcHVibGljXCI+PC9pPjxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmtcIj48L2k+IENsb3NlICR7ZGF0YS5uYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBsb2dUZXh0KCdDbGljazogJywgdGFyZ2V0LmRhdGFzZXQpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5kYXRhc2V0ICYmIHRhcmdldC5kYXRhc2V0LnR5cGUgPT09IGVucmljaGVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vZ0dhbWVNb2R1bGVTb2NrZXQuYnJvYWRjYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IHRhcmdldC5kYXRhc2V0LnNvY2tldEFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyYXdsSWQ6IHRhcmdldC5kYXRhc2V0LnVybCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmRhdGFzZXQuc29ja2V0QWN0aW9uID09PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBsb2FkQ3Jhd2wodGFyZ2V0LmRhdGFzZXQudXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5kYXRhc2V0LnNvY2tldEFjdGlvbiA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHVubG9hZENyYXdsKHRhcmdldC5kYXRhc2V0LnVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2dUZXh0KCdTdGFyV2Fyc0NyYXdsIGluaXRpYXRlZCcpO1xyXG4gICAgfVxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpcyBnZXR0aW5nIHJlYWR5Jyk7XHJcbiAgICAgICAgdGhpcy5vZ0dhbWVNb2R1bGVTb2NrZXQucmVnaXN0ZXJBY3Rpb24oJ29wZW4nLCBsb2FkQ3Jhd2wpO1xyXG4gICAgICAgIHRoaXMub2dHYW1lTW9kdWxlU29ja2V0LnJlZ2lzdGVyQWN0aW9uKCdjbG9zZScsIHVubG9hZENyYXdsKTtcclxuICAgICAgICBsb2dUZXh0KCdTdGFyV2Fyc0NyYXdsIGlzIHJlYWR5Jyk7XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gbG9hZENyYXdsKHBheWxvYWQpIHtcclxuICAgIGlmIChoYXNJZnJhbWUoKSkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1RoZSBpZnJhbWUgaXMgYWxyZWFkeSB0aGVyZTsgY2Fubm90IGFkZC4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jcmF3bHMucnBnLnNvbHV0aW9ucy9jcmF3bHMvcGxheS8ke3BheWxvYWQuY3Jhd2xJZH1gO1xyXG4gICAgaWZyYW1lLnNyYyA9IHVybDtcclxuICAgIGlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcclxuICAgICAgICBsb2dUZXh0KCdDcmF3bCBpZnJhbWUgaXMgbG9hZGVkJyk7XHJcbiAgICAgICAgaWYgKGlmcmFtZS5jb250ZW50V2luZG93ID09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9nRXJyb3IoJ2lmcmFtZS5jb250ZW50V2luZG93IGlzIG51bGwnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHVubG9hZENyYXdsKHBheWxvYWQpIHtcclxuICAgIGlmICghaGFzSWZyYW1lKCkpIHtcclxuICAgICAgICBsb2dUZXh0KCdUaGUgaWZyYW1lIGlzIG5vdCBwcmVzZW50OyBjYW5ub3QgcmVtb3ZlLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcclxufVxyXG5mdW5jdGlvbiBoYXNJZnJhbWUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuYm9keS5jaGlsZHJlbltpXTtcclxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gaWZyYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MGJkZWZhYWY5Yjc0OWU0NGMyZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==