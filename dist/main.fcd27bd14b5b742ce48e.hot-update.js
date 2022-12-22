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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

const enricherName = 'StarWarsCrawl';
class StarWarsCrawl {
    init() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('StarWarsCrawl initiating');
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.registerGameExtensions)('crawl', {
            loadCrawl,
        });
        CONFIG.TextEditor.enrichers.push({
            pattern: /@StarWarsCrawl\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: (match, options) => {
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('StarWarsCrawl enricher');
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
                await loadCrawl(target.dataset.url);
            }
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('StarWarsCrawl initiated');
    }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('StarWarsCrawl is getting ready');
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('StarWarsCrawl is ready');
    }
}
async function loadCrawl(crawlId) {
    const url = `https://crawls.rpg.solutions/crawls/play/${crawlId}`;
    var iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.zIndex = '999999;';
    iframe.style.position = 'absolute';
    iframe.src = url;
    iframe.contentWindow.addEventListener('DOMContentLoaded', (e) => {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('Crawl iframe is ready');
    });
    document.body.appendChild(iframe);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2632481d57552d27889b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mY2QyN2JkMTRiNWI3NDJjZTQ4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQzFEO0FBQ087QUFDUDtBQUNBLFFBQVEsK0NBQU87QUFDZixRQUFRLDhEQUFzQjtBQUM5QjtBQUNBLFNBQVM7QUFDVDtBQUNBLG9EQUFvRCxJQUFJLElBQUk7QUFDNUQ7QUFDQSxnQkFBZ0IsK0NBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhLEdBQUcsSUFBSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNJQUFzSSxVQUFVO0FBQ2hKO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSwrQ0FBTztBQUNmO0FBQ0E7QUFDQSxRQUFRLCtDQUFPO0FBQ2YsUUFBUSwrQ0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxRQUFRO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFPO0FBQ2YsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7OztVQ3JFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL0NyYXdsLnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dUZXh0LCByZWdpc3RlckdhbWVFeHRlbnNpb25zIH0gZnJvbSAnLi91dGlscyc7XHJcbmNvbnN0IGVucmljaGVyTmFtZSA9ICdTdGFyV2Fyc0NyYXdsJztcclxuZXhwb3J0IGNsYXNzIFN0YXJXYXJzQ3Jhd2wge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsb2dUZXh0KCdTdGFyV2Fyc0NyYXdsIGluaXRpYXRpbmcnKTtcclxuICAgICAgICByZWdpc3RlckdhbWVFeHRlbnNpb25zKCdjcmF3bCcsIHtcclxuICAgICAgICAgICAgbG9hZENyYXdsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIENPTkZJRy5UZXh0RWRpdG9yLmVucmljaGVycy5wdXNoKHtcclxuICAgICAgICAgICAgcGF0dGVybjogL0BTdGFyV2Fyc0NyYXdsXFxbKFteXFxdXSspXFxdKD86eyhbXn1dKyl9KT8vZ20sXHJcbiAgICAgICAgICAgIGVucmljaGVyOiAobWF0Y2gsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvZ1RleHQoJ1N0YXJXYXJzQ3Jhd2wgZW5yaWNoZXInKTtcclxuICAgICAgICAgICAgICAgIGxldCBbdXJsLCBuYW1lXSA9IG1hdGNoLnNsaWNlKDEsIDMpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIHNjZW5lID0gKGdhbWUgYXMgR2FtZSkuc2NlbmVzIS5nZXQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBicm9rZW4gPSBzY2VuZSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLWxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnY29udGVudC1saW5rJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBgJHtlbnJpY2hlck5hbWV9LiR7dXJsfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGVucmljaGVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJ0xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChicm9rZW4pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAoZGF0YSBhcyBhbnkpLmljb24gPSAnZmFzIGZhLXVubGluayc7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGF0YS5jbGFzc2VzLnB1c2goJ2Jyb2tlbicpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRhdGEubmFtZSA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoLi4uZGF0YS5jbGFzc2VzKTtcclxuICAgICAgICAgICAgICAgIGEuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhkYXRhLmRhdGFzZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5kYXRhc2V0W2tdID0gdjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdhbGFjdGljLXJlcHVibGljXCI+PC9pPjxpIGNsYXNzPVwiZmEtbGlnaHQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcIj48L2k+ICR7ZGF0YS5uYW1lfWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldCAmJiB0YXJnZXQuZGF0YXNldC50eXBlID09PSBlbnJpY2hlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGxvYWRDcmF3bCh0YXJnZXQuZGF0YXNldC51cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9nVGV4dCgnU3RhcldhcnNDcmF3bCBpbml0aWF0ZWQnKTtcclxuICAgIH1cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1N0YXJXYXJzQ3Jhd2wgaXMgZ2V0dGluZyByZWFkeScpO1xyXG4gICAgICAgIGxvZ1RleHQoJ1N0YXJXYXJzQ3Jhd2wgaXMgcmVhZHknKTtcclxuICAgIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBsb2FkQ3Jhd2woY3Jhd2xJZCkge1xyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vY3Jhd2xzLnJwZy5zb2x1dGlvbnMvY3Jhd2xzL3BsYXkvJHtjcmF3bElkfWA7XHJcbiAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBpZnJhbWUud2lkdGggPSAnMTAwJSc7XHJcbiAgICBpZnJhbWUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgaWZyYW1lLnN0eWxlLnpJbmRleCA9ICc5OTk5OTk7JztcclxuICAgIGlmcmFtZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpZnJhbWUuc3JjID0gdXJsO1xyXG4gICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XHJcbiAgICAgICAgbG9nVGV4dCgnQ3Jhd2wgaWZyYW1lIGlzIHJlYWR5Jyk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNjMyNDgxZDU3NTUyZDI3ODg5YlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==