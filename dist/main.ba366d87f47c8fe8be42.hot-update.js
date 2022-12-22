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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'inspector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _OgSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



const enricherName = 'StarWarsCrawl';
class StarWarsCrawl {
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
                game.socket.emit(`module.${_OgSettings__WEBPACK_IMPORTED_MODULE_1__.namespace}`, {
                    name: enricherName,
                    payload: {
                        url: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'inspector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                    },
                });
                await loadCrawl(target.dataset.url);
            }
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('StarWarsCrawl initiated');
    }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('StarWarsCrawl is getting ready');
        game.socket.on(`module.${_OgSettings__WEBPACK_IMPORTED_MODULE_1__.namespace}`, (event) => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('Socket received event: ', event);
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('StarWarsCrawl is ready');
    }
}
async function loadCrawl(crawlId) {
    const url = `https://crawls.rpg.solutions/crawls/play/${crawlId}`;
    var popup = window.open(url, 'left=0,top=0,width=100%,height=100%,popup');
    if (!popup) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logError)('The popup has not loaded.');
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
/******/ 	__webpack_require__.h = () => ("ffbc4268e2283d976344")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iYTM2NmQ4N2Y0N2M4ZmU4YmU0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDUztBQUMyQjtBQUNwRTtBQUNPO0FBQ1A7QUFDQSxRQUFRLCtDQUFPO0FBQ2YsUUFBUSw4REFBc0I7QUFDOUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvREFBb0QsSUFBSSxJQUFJO0FBQzVEO0FBQ0EsZ0JBQWdCLCtDQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYSxHQUFHLElBQUk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBc0ksVUFBVTtBQUNoSjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsa0RBQVMsQ0FBQztBQUNyRDtBQUNBO0FBQ0EsNkJBQTZCLHdJQUFHO0FBQ2hDLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLCtDQUFPO0FBQ2Y7QUFDQTtBQUNBLFFBQVEsK0NBQU87QUFDZixpQ0FBaUMsa0RBQVMsQ0FBQztBQUMzQyxZQUFZLCtDQUFPO0FBQ25CLFNBQVM7QUFDVCxRQUFRLCtDQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFFBQVE7QUFDcEU7QUFDQTtBQUNBLFFBQVEsZ0RBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7QUFDQTs7Ozs7Ozs7O1VDNUZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvQ3Jhd2wudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVybCB9IGZyb20gJ2luc3BlY3Rvcic7XHJcbmltcG9ydCB7IG5hbWVzcGFjZSB9IGZyb20gJy4vT2dTZXR0aW5ncyc7XHJcbmltcG9ydCB7IGxvZ0Vycm9yLCBsb2dUZXh0LCByZWdpc3RlckdhbWVFeHRlbnNpb25zIH0gZnJvbSAnLi91dGlscyc7XHJcbmNvbnN0IGVucmljaGVyTmFtZSA9ICdTdGFyV2Fyc0NyYXdsJztcclxuZXhwb3J0IGNsYXNzIFN0YXJXYXJzQ3Jhd2wge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsb2dUZXh0KCdTdGFyV2Fyc0NyYXdsIGluaXRpYXRpbmcnKTtcclxuICAgICAgICByZWdpc3RlckdhbWVFeHRlbnNpb25zKCdjcmF3bCcsIHtcclxuICAgICAgICAgICAgbG9hZENyYXdsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIENPTkZJRy5UZXh0RWRpdG9yLmVucmljaGVycy5wdXNoKHtcclxuICAgICAgICAgICAgcGF0dGVybjogL0BTdGFyV2Fyc0NyYXdsXFxbKFteXFxdXSspXFxdKD86eyhbXn1dKyl9KT8vZ20sXHJcbiAgICAgICAgICAgIGVucmljaGVyOiAobWF0Y2gsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvZ1RleHQoJ1N0YXJXYXJzQ3Jhd2wgZW5yaWNoZXInKTtcclxuICAgICAgICAgICAgICAgIGxldCBbdXJsLCBuYW1lXSA9IG1hdGNoLnNsaWNlKDEsIDMpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIHNjZW5lID0gKGdhbWUgYXMgR2FtZSkuc2NlbmVzIS5nZXQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBicm9rZW4gPSBzY2VuZSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLWxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnY29udGVudC1saW5rJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBgJHtlbnJpY2hlck5hbWV9LiR7dXJsfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGVucmljaGVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJ0xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChicm9rZW4pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAoZGF0YSBhcyBhbnkpLmljb24gPSAnZmFzIGZhLXVubGluayc7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGF0YS5jbGFzc2VzLnB1c2goJ2Jyb2tlbicpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRhdGEubmFtZSA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoLi4uZGF0YS5jbGFzc2VzKTtcclxuICAgICAgICAgICAgICAgIGEuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhkYXRhLmRhdGFzZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5kYXRhc2V0W2tdID0gdjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdhbGFjdGljLXJlcHVibGljXCI+PC9pPjxpIGNsYXNzPVwiZmEtbGlnaHQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcIj48L2k+ICR7ZGF0YS5uYW1lfWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldCAmJiB0YXJnZXQuZGF0YXNldC50eXBlID09PSBlbnJpY2hlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0LmVtaXQoYG1vZHVsZS4ke25hbWVzcGFjZX1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZW5yaWNoZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbG9hZENyYXdsKHRhcmdldC5kYXRhc2V0LnVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2dUZXh0KCdTdGFyV2Fyc0NyYXdsIGluaXRpYXRlZCcpO1xyXG4gICAgfVxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpcyBnZXR0aW5nIHJlYWR5Jyk7XHJcbiAgICAgICAgZ2FtZS5zb2NrZXQub24oYG1vZHVsZS4ke25hbWVzcGFjZX1gLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbG9nVGV4dCgnU29ja2V0IHJlY2VpdmVkIGV2ZW50OiAnLCBldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpcyByZWFkeScpO1xyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRDcmF3bChjcmF3bElkKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jcmF3bHMucnBnLnNvbHV0aW9ucy9jcmF3bHMvcGxheS8ke2NyYXdsSWR9YDtcclxuICAgIHZhciBwb3B1cCA9IHdpbmRvdy5vcGVuKHVybCwgJ2xlZnQ9MCx0b3A9MCx3aWR0aD0xMDAlLGhlaWdodD0xMDAlLHBvcHVwJyk7XHJcbiAgICBpZiAoIXBvcHVwKSB7XHJcbiAgICAgICAgbG9nRXJyb3IoJ1RoZSBwb3B1cCBoYXMgbm90IGxvYWRlZC4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICAvLyBpZnJhbWUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAvLyBpZnJhbWUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgLy8gaWZyYW1lLnN0eWxlLnpJbmRleCA9ICc5OTk5OTk7JztcclxuICAgIC8vIGlmcmFtZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAvLyBpZnJhbWUuc3JjID0gdXJsO1xyXG4gICAgLy8gaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGxvZ1RleHQoJ0NyYXdsIGlmcmFtZSBpcyBsb2FkZWQnKTtcclxuICAgIC8vICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cgPT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICBsb2dFcnJvcignaWZyYW1lLmNvbnRlbnRXaW5kb3cgaXMgbnVsbCcpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQgJywgKGUpID0+IHtcclxuICAgIC8vICAgICAgICAgbG9nVGV4dCgnQ3Jhd2wgaWZyYW1lIERPTUNvbnRlbnRMb2FkZWQnKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZmYmM0MjY4ZTIyODNkOTc2MzQ0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9