"use strict";
self["webpackHotUpdateog_experiments"]("main",{

/***/ "../../../../../../OneDrive - ForEvolve/Hobbies/RPG/FoundryVTT Data/Data/modules/og-experiments/src/scene-utils.ts":
/*!*************************************************************************************************************************!*\
  !*** ../../../../../../OneDrive - ForEvolve/Hobbies/RPG/FoundryVTT Data/Data/modules/og-experiments/src/scene-utils.ts ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneUtils = void 0;
var GameExtensions_1 = __webpack_require__(/*! ./GameExtensions */ "../../../../../../OneDrive - ForEvolve/Hobbies/RPG/FoundryVTT Data/Data/modules/og-experiments/src/GameExtensions.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "../../../../../../OneDrive - ForEvolve/Hobbies/RPG/FoundryVTT Data/Data/modules/og-experiments/src/utils.ts");
var SceneUtils = /** @class */ (function () {
    function SceneUtils() {
    }
    SceneUtils.prototype.init = function () {
        var _this = this;
        (0, utils_1.logText)('SceneUtils initiating');
        GameExtensions_1.extensions.scene = {
            activate: function (targetSceneId) { return __awaiter(_this, void 0, void 0, function () {
                var currentSceneJournal, targetScene;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            (0, utils_1.logText)("SceneUtils activating: ".concat(targetSceneId));
                            currentSceneJournal = game.scenes.active.journal;
                            if (currentSceneJournal && currentSceneJournal.sheet) {
                                currentSceneJournal.sheet.close();
                            }
                            targetScene = game.scenes.get(targetSceneId);
                            if (!targetScene) return [3 /*break*/, 3];
                            return [4 /*yield*/, targetScene.activate()];
                        case 1:
                            _a.sent();
                            if (!targetScene.journal) return [3 /*break*/, 3];
                            return [4 /*yield*/, targetScene.journal.show()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); },
        };
        CONFIG.TextEditor.enrichers.push({
            // Derived from resources/app/client/ui/editor.js
            pattern: new RegExp("@(ActivateScene)\\[([^\\]]+)\\](?:{([^}]+)})?", 'g'),
            enricher: function (match, options) {
                var _a;
                var _b = match.slice(1, 4), type = _b[0], target = _b[1], name = _b[2];
                (0, utils_1.logText)("JLAS | Match: ".concat(match));
                (0, utils_1.logText)("JLAS | Type: ".concat(type));
                (0, utils_1.logText)("JLAS | Target: ".concat(target));
                (0, utils_1.logText)("JLAS | Name: ".concat(name));
                // Prepare replacement data
                var data = {
                    cls: ['jlas-activate-scene'],
                    icon: null,
                    dataset: {},
                    name: name,
                };
                var broken = false;
                var doc_type = 'Scene';
                // Get the linked Scene
                var config = CONFIG[doc_type];
                var collection = game.collections.get(doc_type);
                var doc = /^[a-zA-Z0-9]{16}$/.test(target) ? collection.get(target) : collection.getName(target);
                if (!doc)
                    broken = true;
                // Update link data
                data.name = data.name || (broken ? target : doc.name);
                data.icon = config.sidebarIcon;
                data.dataset = { type: type, entity: doc_type, id: broken ? null : doc.id };
                // Flag a link as broken
                if (broken) {
                    data.icon = 'fas fa-unlink';
                    data.cls.push('broken');
                }
                // Construct the formed link
                var a = document.createElement('a');
                (_a = a.classList).add.apply(_a, data.cls);
                a.draggable = false;
                for (var _i = 0, _c = Object.entries(data.dataset); _i < _c.length; _i++) {
                    var _d = _c[_i], k = _d[0], v = _d[1];
                    a.dataset[k] = v;
                }
                a.innerHTML = "<i class=\"".concat(data.icon, "\"></i> ").concat(data.name);
                (0, utils_1.logText)('JLAS | Formed link:');
                (0, utils_1.logText)(a);
                return a;
            },
        });
        (0, utils_1.logText)('SceneUtils initiated');
    };
    SceneUtils.prototype.ready = function () { };
    return SceneUtils;
}());
exports.SceneUtils = SceneUtils;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("047ad12bc67764b5d834")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYTYwMjc4NmM1N2E3OGY4YWJjYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLGlCQUFpQixvREFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsdUJBQXVCLG1CQUFPLENBQUMsOElBQWtCO0FBQ2pELGNBQWMsbUJBQU8sQ0FBQyw0SEFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxJQUFJLElBQUk7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxHQUFHO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGdCQUFnQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCOzs7Ozs7Ozs7VUM5SGxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi4vLi4vLi4vLi4vLi4vLi4vT25lRHJpdmUgLSBGb3JFdm9sdmUvSG9iYmllcy9SUEcvRm91bmRyeVZUVCBEYXRhL0RhdGEvbW9kdWxlcy9vZy1leHBlcmltZW50cy9zcmMvc2NlbmUtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNjZW5lVXRpbHMgPSB2b2lkIDA7XHJcbnZhciBHYW1lRXh0ZW5zaW9uc18xID0gcmVxdWlyZShcIi4vR2FtZUV4dGVuc2lvbnNcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbnZhciBTY2VuZVV0aWxzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2NlbmVVdGlscygpIHtcclxuICAgIH1cclxuICAgIFNjZW5lVXRpbHMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnU2NlbmVVdGlscyBpbml0aWF0aW5nJyk7XHJcbiAgICAgICAgR2FtZUV4dGVuc2lvbnNfMS5leHRlbnNpb25zLnNjZW5lID0ge1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHRhcmdldFNjZW5lSWQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U2NlbmVKb3VybmFsLCB0YXJnZXRTY2VuZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKFwiU2NlbmVVdGlscyBhY3RpdmF0aW5nOiBcIi5jb25jYXQodGFyZ2V0U2NlbmVJZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNjZW5lSm91cm5hbCA9IGdhbWUuc2NlbmVzLmFjdGl2ZS5qb3VybmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY2VuZUpvdXJuYWwgJiYgY3VycmVudFNjZW5lSm91cm5hbC5zaGVldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTY2VuZUpvdXJuYWwuc2hlZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFNjZW5lID0gZ2FtZS5zY2VuZXMuZ2V0KHRhcmdldFNjZW5lSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRTY2VuZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0YXJnZXRTY2VuZS5hY3RpdmF0ZSgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRTY2VuZS5qb3VybmFsKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRhcmdldFNjZW5lLmpvdXJuYWwuc2hvdygpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7IH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBDT05GSUcuVGV4dEVkaXRvci5lbnJpY2hlcnMucHVzaCh7XHJcbiAgICAgICAgICAgIC8vIERlcml2ZWQgZnJvbSByZXNvdXJjZXMvYXBwL2NsaWVudC91aS9lZGl0b3IuanNcclxuICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChcIkAoQWN0aXZhdGVTY2VuZSlcXFxcWyhbXlxcXFxdXSspXFxcXF0oPzp7KFtefV0rKX0pP1wiLCAnZycpLFxyXG4gICAgICAgICAgICBlbnJpY2hlcjogZnVuY3Rpb24gKG1hdGNoLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBtYXRjaC5zbGljZSgxLCA0KSwgdHlwZSA9IF9iWzBdLCB0YXJnZXQgPSBfYlsxXSwgbmFtZSA9IF9iWzJdO1xyXG4gICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoXCJKTEFTIHwgTWF0Y2g6IFwiLmNvbmNhdChtYXRjaCkpO1xyXG4gICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoXCJKTEFTIHwgVHlwZTogXCIuY29uY2F0KHR5cGUpKTtcclxuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKFwiSkxBUyB8IFRhcmdldDogXCIuY29uY2F0KHRhcmdldCkpO1xyXG4gICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoXCJKTEFTIHwgTmFtZTogXCIuY29uY2F0KG5hbWUpKTtcclxuICAgICAgICAgICAgICAgIC8vIFByZXBhcmUgcmVwbGFjZW1lbnQgZGF0YVxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ2psYXMtYWN0aXZhdGUtc2NlbmUnXSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIGJyb2tlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRvY190eXBlID0gJ1NjZW5lJztcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbGlua2VkIFNjZW5lXHJcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnID0gQ09ORklHW2RvY190eXBlXTtcclxuICAgICAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gZ2FtZS5jb2xsZWN0aW9ucy5nZXQoZG9jX3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRvYyA9IC9eW2EtekEtWjAtOV17MTZ9JC8udGVzdCh0YXJnZXQpID8gY29sbGVjdGlvbi5nZXQodGFyZ2V0KSA6IGNvbGxlY3Rpb24uZ2V0TmFtZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkb2MpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBsaW5rIGRhdGFcclxuICAgICAgICAgICAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSB8fCAoYnJva2VuID8gdGFyZ2V0IDogZG9jLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5pY29uID0gY29uZmlnLnNpZGViYXJJY29uO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhc2V0ID0geyB0eXBlOiB0eXBlLCBlbnRpdHk6IGRvY190eXBlLCBpZDogYnJva2VuID8gbnVsbCA6IGRvYy5pZCB9O1xyXG4gICAgICAgICAgICAgICAgLy8gRmxhZyBhIGxpbmsgYXMgYnJva2VuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnJva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pY29uID0gJ2ZhcyBmYS11bmxpbmsnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY2xzLnB1c2goJ2Jyb2tlbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQ29uc3RydWN0IHRoZSBmb3JtZWQgbGlua1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICAoX2EgPSBhLmNsYXNzTGlzdCkuYWRkLmFwcGx5KF9hLCBkYXRhLmNscyk7XHJcbiAgICAgICAgICAgICAgICBhLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYyA9IE9iamVjdC5lbnRyaWVzKGRhdGEuZGF0YXNldCk7IF9pIDwgX2MubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9kID0gX2NbX2ldLCBrID0gX2RbMF0sIHYgPSBfZFsxXTtcclxuICAgICAgICAgICAgICAgICAgICBhLmRhdGFzZXRba10gPSB2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPVxcXCJcIi5jb25jYXQoZGF0YS5pY29uLCBcIlxcXCI+PC9pPiBcIikuY29uY2F0KGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnSkxBUyB8IEZvcm1lZCBsaW5rOicpO1xyXG4gICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoYSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnU2NlbmVVdGlscyBpbml0aWF0ZWQnKTtcclxuICAgIH07XHJcbiAgICBTY2VuZVV0aWxzLnByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIHJldHVybiBTY2VuZVV0aWxzO1xyXG59KCkpO1xyXG5leHBvcnRzLlNjZW5lVXRpbHMgPSBTY2VuZVV0aWxzO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNDdhZDEyYmM2Nzc2NGI1ZDgzNFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==