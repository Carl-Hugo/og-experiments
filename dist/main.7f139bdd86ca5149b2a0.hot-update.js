"use strict";
self["webpackHotUpdateog_experiments"]("main",{

/***/ "./src/SocketUtils.ts":
/*!****************************!*\
  !*** ./src/SocketUtils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OgGameModuleSocket": () => (/* binding */ OgGameModuleSocket)
/* harmony export */ });
/* harmony import */ var _OgSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


const foundryModuleEventName = `module.${_OgSettings__WEBPACK_IMPORTED_MODULE_0__.namespace}`;
class OgGameModuleSocket {
    constructor(ogModuleName) {
        this.ogModuleName = ogModuleName;
    }
    register(action, delegate) {
        const g = game;
        if (!g.socket) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logError)('registerToSocketEvent: The game socket was not found.');
            return;
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)(`Registering socket event ${this.ogModuleName}`);
        g.socket.on(foundryModuleEventName, async (receivedEvent) => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('Socket event received: ', receivedEvent);
            if (receivedEvent.name === this.ogModuleName && receivedEvent.action == action) {
                delegate(receivedEvent.payload);
            }
        });
    }
    registerAny(delegate) {
        const g = game;
        if (!g.socket) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logError)('registerToSocketEvent: The game socket was not found.');
            return;
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)(`Registering socket event ${this.ogModuleName}`);
        g.socket.on(foundryModuleEventName, async (receivedEvent) => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('Socket event received: ', receivedEvent);
            if (receivedEvent.name === this.ogModuleName) {
                delegate(receivedEvent);
            }
        });
    }
    broadcast(event) {
        const g = game;
        if (!g.socket) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logError)('broadcastSocketEvent: The game socket was not found.');
            return;
        }
        g.socket.emit(foundryModuleEventName, { ...event, name: this.ogModuleName });
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b8de598ae65257245fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ZjEzOWJkZDg2Y2E1MTQ5YjJhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNHO0FBQzVDLHlDQUF5QyxrREFBUyxDQUFDO0FBQzVDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBUTtBQUNwQjtBQUNBO0FBQ0EsUUFBUSwrQ0FBTyw2QkFBNkIsa0JBQWtCO0FBQzlEO0FBQ0EsWUFBWSwrQ0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdEQUFRO0FBQ3BCO0FBQ0E7QUFDQSxRQUFRLCtDQUFPLDZCQUE2QixrQkFBa0I7QUFDOUQ7QUFDQSxZQUFZLCtDQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0RBQVE7QUFDcEI7QUFDQTtBQUNBLGdEQUFnRCxtQ0FBbUM7QUFDbkY7QUFDQTs7Ozs7Ozs7O1VDM0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvU29ja2V0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5hbWVzcGFjZSB9IGZyb20gJy4vT2dTZXR0aW5ncyc7XHJcbmltcG9ydCB7IGxvZ0Vycm9yLCBsb2dUZXh0IH0gZnJvbSAnLi91dGlscyc7XHJcbmNvbnN0IGZvdW5kcnlNb2R1bGVFdmVudE5hbWUgPSBgbW9kdWxlLiR7bmFtZXNwYWNlfWA7XHJcbmV4cG9ydCBjbGFzcyBPZ0dhbWVNb2R1bGVTb2NrZXQge1xyXG4gICAgY29uc3RydWN0b3Iob2dNb2R1bGVOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5vZ01vZHVsZU5hbWUgPSBvZ01vZHVsZU5hbWU7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlcihhY3Rpb24sIGRlbGVnYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZyA9IGdhbWU7XHJcbiAgICAgICAgaWYgKCFnLnNvY2tldCkge1xyXG4gICAgICAgICAgICBsb2dFcnJvcigncmVnaXN0ZXJUb1NvY2tldEV2ZW50OiBUaGUgZ2FtZSBzb2NrZXQgd2FzIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dUZXh0KGBSZWdpc3RlcmluZyBzb2NrZXQgZXZlbnQgJHt0aGlzLm9nTW9kdWxlTmFtZX1gKTtcclxuICAgICAgICBnLnNvY2tldC5vbihmb3VuZHJ5TW9kdWxlRXZlbnROYW1lLCBhc3luYyAocmVjZWl2ZWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsb2dUZXh0KCdTb2NrZXQgZXZlbnQgcmVjZWl2ZWQ6ICcsIHJlY2VpdmVkRXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAocmVjZWl2ZWRFdmVudC5uYW1lID09PSB0aGlzLm9nTW9kdWxlTmFtZSAmJiByZWNlaXZlZEV2ZW50LmFjdGlvbiA9PSBhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGRlbGVnYXRlKHJlY2VpdmVkRXZlbnQucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQW55KGRlbGVnYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZyA9IGdhbWU7XHJcbiAgICAgICAgaWYgKCFnLnNvY2tldCkge1xyXG4gICAgICAgICAgICBsb2dFcnJvcigncmVnaXN0ZXJUb1NvY2tldEV2ZW50OiBUaGUgZ2FtZSBzb2NrZXQgd2FzIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dUZXh0KGBSZWdpc3RlcmluZyBzb2NrZXQgZXZlbnQgJHt0aGlzLm9nTW9kdWxlTmFtZX1gKTtcclxuICAgICAgICBnLnNvY2tldC5vbihmb3VuZHJ5TW9kdWxlRXZlbnROYW1lLCBhc3luYyAocmVjZWl2ZWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsb2dUZXh0KCdTb2NrZXQgZXZlbnQgcmVjZWl2ZWQ6ICcsIHJlY2VpdmVkRXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAocmVjZWl2ZWRFdmVudC5uYW1lID09PSB0aGlzLm9nTW9kdWxlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZWdhdGUocmVjZWl2ZWRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGJyb2FkY2FzdChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGcgPSBnYW1lO1xyXG4gICAgICAgIGlmICghZy5zb2NrZXQpIHtcclxuICAgICAgICAgICAgbG9nRXJyb3IoJ2Jyb2FkY2FzdFNvY2tldEV2ZW50OiBUaGUgZ2FtZSBzb2NrZXQgd2FzIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLnNvY2tldC5lbWl0KGZvdW5kcnlNb2R1bGVFdmVudE5hbWUsIHsgLi4uZXZlbnQsIG5hbWU6IHRoaXMub2dNb2R1bGVOYW1lIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBiOGRlNTk4YWU2NTI1NzI0NWZkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9