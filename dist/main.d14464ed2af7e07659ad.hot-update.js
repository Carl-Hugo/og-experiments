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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


const enricherName = 'StarWarsCrawl';
class StarWarsCrawl {
    init() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl initiating');
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.registerGameExtensions)('crawl', {
            loadCrawl,
        });
        CONFIG.TextEditor.enrichers.push({
            pattern: /@StarWarsCrawl\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: (match, options) => {
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl enricher');
                let [url, name] = match.slice(1, 3);
                // var scene = (game as Game).scenes!.get(target);
                // let broken = scene ? false : true;
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
                // if (broken) {
                //     (data as any).icon = 'fas fa-unlink';
                //     data.classes.push('broken');
                //     data.name = target;
                // }
                const a = document.createElement('a');
                a.classList.add(...data.classes);
                a.draggable = true;
                for (let [k, v] of Object.entries(data.dataset)) {
                    a.dataset[k] = v;
                }
                a.innerHTML = `<i class="fa-brands fa-galactic-republic"></i><i class="fa-light fa-arrow-up-right-from-square"></i> ${data.name}`;
                return a;
            },
        });
        document.addEventListener('click', async (e) => {
            var target = e.target;
            if (target && target.dataset && target.dataset.type === enricherName) {
                e.preventDefault();
                game.socket.emit(`module.${_OgSettings__WEBPACK_IMPORTED_MODULE_0__.namespace}`, {
                    name: enricherName,
                    payload: {
                        url: url,
                    },
                });
                await loadCrawl(target.dataset.url);
            }
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl initiated');
    }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl is getting ready');
        game.socket.on(`module.${_OgSettings__WEBPACK_IMPORTED_MODULE_0__.namespace}`, (event) => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('Socket received event: ', event);
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('StarWarsCrawl is ready');
    }
}
async function loadCrawl(crawlId) {
    const url = `https://crawls.rpg.solutions/crawls/play/${crawlId}`;
    var popup = window.open(url, 'left=0,top=0,width=100%,height=100%,popup');
    if (!popup) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logError)('The popup has not loaded.');
        return;
    }
    // var iframe = document.createElement('iframe');
    // iframe.width = '100%';
    // iframe.height = '100%';
    // iframe.style.zIndex = '999999;';
    // iframe.style.position = 'absolute';
    // iframe.src = url;
    // iframe.addEventListener('load', (e) => {
    //     logText('Crawl iframe is loaded');
    //     if (iframe.contentWindow == null) {
    //         logError('iframe.contentWindow is null');
    //         return;
    //     }
    //     iframe.contentWindow.document.addEventListener('DOMContentLoaded ', (e) => {
    //         logText('Crawl iframe DOMContentLoaded');
    //     });
    // });
    // document.body.appendChild(iframe);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8d69be3142829f6e4bed")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMTQ0NjRlZDJhZjdlMDc2NTlhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUMyQjtBQUNwRTtBQUNPO0FBQ1A7QUFDQSxRQUFRLCtDQUFPO0FBQ2YsUUFBUSw4REFBc0I7QUFDOUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvREFBb0QsSUFBSSxJQUFJO0FBQzVEO0FBQ0EsZ0JBQWdCLCtDQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYSxHQUFHLElBQUk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBc0ksVUFBVTtBQUNoSjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsa0RBQVMsQ0FBQztBQUNyRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSwrQ0FBTztBQUNmO0FBQ0E7QUFDQSxRQUFRLCtDQUFPO0FBQ2YsaUNBQWlDLGtEQUFTLENBQUM7QUFDM0MsWUFBWSwrQ0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSwrQ0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxRQUFRO0FBQ3BFO0FBQ0E7QUFDQSxRQUFRLGdEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7Ozs7Ozs7OztVQzNGQSIsInNvdXJjZXMiOlsid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL0NyYXdsLnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuYW1lc3BhY2UgfSBmcm9tICcuL09nU2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBsb2dFcnJvciwgbG9nVGV4dCwgcmVnaXN0ZXJHYW1lRXh0ZW5zaW9ucyB9IGZyb20gJy4vdXRpbHMnO1xyXG5jb25zdCBlbnJpY2hlck5hbWUgPSAnU3RhcldhcnNDcmF3bCc7XHJcbmV4cG9ydCBjbGFzcyBTdGFyV2Fyc0NyYXdsIHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpbml0aWF0aW5nJyk7XHJcbiAgICAgICAgcmVnaXN0ZXJHYW1lRXh0ZW5zaW9ucygnY3Jhd2wnLCB7XHJcbiAgICAgICAgICAgIGxvYWRDcmF3bCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBDT05GSUcuVGV4dEVkaXRvci5lbnJpY2hlcnMucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdHRlcm46IC9AU3RhcldhcnNDcmF3bFxcWyhbXlxcXV0rKVxcXSg/OnsoW159XSspfSk/L2dtLFxyXG4gICAgICAgICAgICBlbnJpY2hlcjogKG1hdGNoLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2dUZXh0KCdTdGFyV2Fyc0NyYXdsIGVucmljaGVyJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgW3VybCwgbmFtZV0gPSBtYXRjaC5zbGljZSgxLCAzKTtcclxuICAgICAgICAgICAgICAgIC8vIHZhciBzY2VuZSA9IChnYW1lIGFzIEdhbWUpLnNjZW5lcyEuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgYnJva2VuID0gc2NlbmUgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1saW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2NvbnRlbnQtbGluayddLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDogYCR7ZW5yaWNoZXJOYW1lfS4ke3VybH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlbnJpY2hlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdMaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoYnJva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKGRhdGEgYXMgYW55KS5pY29uID0gJ2ZhcyBmYS11bmxpbmsnO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRhdGEuY2xhc3Nlcy5wdXNoKCdicm9rZW4nKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBkYXRhLm5hbWUgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICAgICAgYS5jbGFzc0xpc3QuYWRkKC4uLmRhdGEuY2xhc3Nlcyk7XHJcbiAgICAgICAgICAgICAgICBhLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YS5kYXRhc2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGEuZGF0YXNldFtrXSA9IHY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1nYWxhY3RpYy1yZXB1YmxpY1wiPjwvaT48aSBjbGFzcz1cImZhLWxpZ2h0IGZhLWFycm93LXVwLXJpZ2h0LWZyb20tc3F1YXJlXCI+PC9pPiAke2RhdGEubmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmRhdGFzZXQgJiYgdGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gZW5yaWNoZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lLnNvY2tldC5lbWl0KGBtb2R1bGUuJHtuYW1lc3BhY2V9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGVucmljaGVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGxvYWRDcmF3bCh0YXJnZXQuZGF0YXNldC51cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpbml0aWF0ZWQnKTtcclxuICAgIH1cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1N0YXJXYXJzQ3Jhd2wgaXMgZ2V0dGluZyByZWFkeScpO1xyXG4gICAgICAgIGdhbWUuc29ja2V0Lm9uKGBtb2R1bGUuJHtuYW1lc3BhY2V9YCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxvZ1RleHQoJ1NvY2tldCByZWNlaXZlZCBldmVudDogJywgZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvZ1RleHQoJ1N0YXJXYXJzQ3Jhd2wgaXMgcmVhZHknKTtcclxuICAgIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBsb2FkQ3Jhd2woY3Jhd2xJZCkge1xyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vY3Jhd2xzLnJwZy5zb2x1dGlvbnMvY3Jhd2xzL3BsYXkvJHtjcmF3bElkfWA7XHJcbiAgICB2YXIgcG9wdXAgPSB3aW5kb3cub3Blbih1cmwsICdsZWZ0PTAsdG9wPTAsd2lkdGg9MTAwJSxoZWlnaHQ9MTAwJSxwb3B1cCcpO1xyXG4gICAgaWYgKCFwb3B1cCkge1xyXG4gICAgICAgIGxvZ0Vycm9yKCdUaGUgcG9wdXAgaGFzIG5vdCBsb2FkZWQuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgLy8gaWZyYW1lLndpZHRoID0gJzEwMCUnO1xyXG4gICAgLy8gaWZyYW1lLmhlaWdodCA9ICcxMDAlJztcclxuICAgIC8vIGlmcmFtZS5zdHlsZS56SW5kZXggPSAnOTk5OTk5Oyc7XHJcbiAgICAvLyBpZnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgLy8gaWZyYW1lLnNyYyA9IHVybDtcclxuICAgIC8vIGlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcclxuICAgIC8vICAgICBsb2dUZXh0KCdDcmF3bCBpZnJhbWUgaXMgbG9hZGVkJyk7XHJcbiAgICAvLyAgICAgaWYgKGlmcmFtZS5jb250ZW50V2luZG93ID09IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgbG9nRXJyb3IoJ2lmcmFtZS5jb250ZW50V2luZG93IGlzIG51bGwnKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkICcsIChlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxvZ1RleHQoJ0NyYXdsIGlmcmFtZSBET01Db250ZW50TG9hZGVkJyk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZDY5YmUzMTQyODI5ZjZlNGJlZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==