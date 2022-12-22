"use strict";
self["webpackHotUpdateog_experiments"]("main",{

/***/ "./src/SocialEncounterTracker.ts":
/*!***************************************!*\
  !*** ./src/SocialEncounterTracker.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialEncounterTracker": () => (/* binding */ SocialEncounterTracker)
/* harmony export */ });
/* harmony import */ var _OgSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css */ "./src/css.ts");



const styles = _css__WEBPACK_IMPORTED_MODULE_2__.css `
    #social-encounter-tracker {
        box-shadow: none;
        background: rgba(0, 0, 0, 0.25);
    }
    #social-encounter-tracker .window-title {
        text-align: center;
    }
    #social-encounter-tracker .window-header {
        border-bottom: 0 none;
    }
    #social-encounter-tracker header :not(h4) {
        display: none;
    }
    #social-encounter-tracker .window-content {
        background: transparent;
    }
    #social-encounter-tracker .container {
        display: flex;
        justify-content: space-between;
    }
    #social-encounter-tracker .item {
        /* width: 5rem;
        height: 4rem; */
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 1.5em;
        margin: 0.5em;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        flex-direction: column-reverse;
        color: #fff;
        padding: 0.25em 0.5em;
        border: 0.5em solid;
    }
    #social-encounter-tracker .item.status-low {
        border-color: darkred;
    }
    #social-encounter-tracker .item.status-average {
        border-color: orange;
    }
    #social-encounter-tracker .item.status-good {
        border-color: darkgreen;
    }
    #social-encounter-tracker .item.status-defeated {
        border-color: red;
        color: red;
    }

    #social-encounter-tracker .item strong {
        display: block;
        text-shadow: 1px 2px 5px black;
    }
    #social-encounter-tracker .item span {
        font-size: 1.5rem;
        font-weight: bold;
        display: block;
        text-shadow: 1px 2px 10px black;
        padding: 0.2em;
        min-width: 4em;
        text-align: center;
    }
    #social-encounter-tracker .edit-container {
        display: flex;
    }
    #social-encounter-tracker .edit-container label {
        width: 100%;
        text-align: center;
        display: block;
    }
    #social-encounter-tracker .edit-container input {
        width: 3em;
        font-size: 1.5rem;
        padding: 0.25em 0.5em;
        text-align: center;
        font-weight: bold;
        color: #fff;
        border: 0px none;
        background-color: transparent;
    }
`;
class SocialEncounterTrackerForm extends FormApplication {
    constructor(object = {}, options = {}) {
        super(object, options);
        this.playerStrain = options.playerStrain;
        this.maxPlayerStrain = options.maxPlayerStrain;
        this.targetStrain = options.targetStrain;
        this.maxTargetStrain = options.maxTargetStrain;
        this.displayTargetToPlayers = options.displayTargetToPlayers;
    }
    get isGM() {
        // return true;
        return game.user.isGM;
    }
    getData(options) {
        // Position the window at the bottom during the first render
        if (this._priorState == 0) {
            const y = $(window).height();
            this.position.top = y;
        }
        return {
            styles,
            playerStrain: this.playerStrain.value,
            maxPlayerStrain: this.maxPlayerStrain.value,
            playerStatus: computeStatus(this.playerStrain.value, this.maxPlayerStrain.value),
            targetStrain: this.targetStrain.value,
            maxTargetStrain: this.maxTargetStrain.value,
            targetStatus: computeStatus(this.targetStrain.value, this.maxTargetStrain.value),
            displayTargetToPlayers: this.displayTargetToPlayers.value,
            isGM: this.isGM,
        };
        function computeStatus(current, max) {
            if (max === 0) {
                return 'unknown';
            }
            if (current >= max) {
                return 'defeated';
            }
            const yellowThreshold = Math.ceil(max / 2.0);
            const redThreshold = Math.ceil(max * 0.75);
            return current >= redThreshold ? 'low' : current >= yellowThreshold ? 'average' : 'good';
        }
    }
    activateListeners(html) {
        html.find('button').on('click', function () {
            game.socket?.emit('module.og-experiments', { whatver: true });
        });
        this.ActivateListenersFor(html, 'playerStrain', (value) => (this.playerStrain.value = value));
        this.ActivateListenersFor(html, 'maxPlayerStrain', (value) => (this.maxPlayerStrain.value = value));
        this.ActivateListenersFor(html, 'targetStrain', (value) => (this.targetStrain.value = value));
        this.ActivateListenersFor(html, 'maxTargetStrain', (value) => (this.maxTargetStrain.value = value));
    }
    ActivateListenersFor(html, inputName, setter) {
        if (this.isGM) {
            html.find(`input[name="${inputName}"]`).on('focus', function (event) {
                $(this).select();
            });
            html.find(`input[name="${inputName}"]`).on('change', function (event) {
                setter(parseInt($(this).val()));
            });
        }
    }
    static get defaultOptions() {
        // @ts-ignore
        return mergeObject(super.defaultOptions, {
            id: 'social-encounter-tracker',
            classes: ['og-social-encounter-tracker'],
            title: 'Social Encounter',
            template: 'modules/og-experiments/templates/og-social-encounter-tracker.hbs',
        });
    }
    _updateObject(event, formData) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('SocialEncounterTracker | _updateObject', event, formData);
        return Promise.resolve();
    }
}
class SocialEncounterTracker {
    constructor() {
        this.playerStrain = new _OgSettings__WEBPACK_IMPORTED_MODULE_0__.OgSetting('playerStrain', 0, {
            name: 'Current social encounter players Strain',
            type: Number,
            scope: 'world',
            config: false,
        }, (setting) => (setting.afterUpdate = () => this.form.render(true)));
        this.maxPlayerStrain = new _OgSettings__WEBPACK_IMPORTED_MODULE_0__.OgSetting('maxPlayerStrain', 0, {
            name: 'Current social encounter players Strain',
            type: Number,
            scope: 'world',
            config: false,
        }, (setting) => (setting.afterUpdate = () => this.form.render(true)));
        this.targetStrain = new _OgSettings__WEBPACK_IMPORTED_MODULE_0__.OgSetting('targetStrain', 0, {
            name: 'Current social encounter players Strain',
            type: Number,
            scope: 'world',
            config: false,
        }, (setting) => (setting.afterUpdate = () => this.form.render(true)));
        this.maxTargetStrain = new _OgSettings__WEBPACK_IMPORTED_MODULE_0__.OgSetting('maxTargetStrain', 0, {
            name: 'Current social encounter players Strain',
            type: Number,
            scope: 'world',
            config: false,
        }, (setting) => (setting.afterUpdate = () => this.form.render(true)));
        this.displayTargetToPlayers = new _OgSettings__WEBPACK_IMPORTED_MODULE_0__.OgSetting('displayTargetToPlayers', false, {
            name: "Display target's strain values?",
            hint: "If enabled, the players will see the social encounter's target's strain value. Otherwise, they will only see the color indicator.",
            type: Boolean,
            scope: 'world',
        }, (setting) => (setting.afterUpdate = () => this.form.render(true)));
        this.form = new SocialEncounterTrackerForm(undefined, {
            playerStrain: this.playerStrain,
            maxPlayerStrain: this.maxPlayerStrain,
            targetStrain: this.targetStrain,
            maxTargetStrain: this.maxTargetStrain,
            displayTargetToPlayers: this.displayTargetToPlayers,
        });
        this.openTheWindow = new _OgSettings__WEBPACK_IMPORTED_MODULE_0__.OgSetting('openTheWindow', {}, {
            name: 'Open the Social Encounter window?',
            hint: '...',
            type: Object,
            scope: 'world',
        }, (setting) => (setting.afterUpdate = () => this.form.render(true)));
    }
    init() { }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('SocialEncounterTracker getting ready');
        this.playerStrain.ready();
        this.maxPlayerStrain.ready();
        this.targetStrain.ready();
        this.maxTargetStrain.ready();
        this.displayTargetToPlayers.ready();
        game.settings.registerMenu(namespace, 'mySettingsMenu', {
            name: 'My Settings Submenu',
            label: 'Settings Menu Label',
            hint: 'A description of what will occur in the submenu dialog.',
            icon: 'fas fa-bars',
            type: SocialEncounterTrackerForm,
            restricted: true, // Restrict this submenu to gamemaster only?
        });
        this.openTheWindow.ready();
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.registerGameExtensions)('SocialEncounterTracker', {
            open: (force = true) => this.form.render(force),
            close: () => this.form.close(),
            internal: { form: this.form },
        });
        this.form.render(true);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('SocialEncounterTracker is ready');
    }
}
// TODO
// - Add a "show/hide" button in the config
// - Add a way to "force display" the window to all players
// - Add an icon when one of the two party reaches 0


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dc146cef579e23f90487")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZDg3ODQyOGU0NTlmNTBiODE1NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDaUI7QUFDOUI7QUFDNUIsZUFBZSxxQ0FBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGVBQWU7QUFDeEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQSxhQUFhO0FBQ2IscUNBQXFDLFVBQVU7QUFDL0M7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLCtDQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGdDQUFnQyxrREFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQ0FBbUMsa0RBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0NBQWdDLGtEQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1DQUFtQyxrREFBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwQ0FBMEMsa0RBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGlDQUFpQyxrREFBUyxvQkFBb0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVEsOERBQXNCO0FBQzlCO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDLFNBQVM7QUFDVDtBQUNBLFFBQVEsK0NBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQzFPQSIsInNvdXJjZXMiOlsid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL1NvY2lhbEVuY291bnRlclRyYWNrZXIudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9nU2V0dGluZyB9IGZyb20gJy4vT2dTZXR0aW5ncyc7XHJcbmltcG9ydCB7IGxvZ1RleHQsIHJlZ2lzdGVyR2FtZUV4dGVuc2lvbnMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi9jc3MnO1xyXG5jb25zdCBzdHlsZXMgPSBjc3MgYFxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAud2luZG93LXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC53aW5kb3ctaGVhZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwIG5vbmU7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIGhlYWRlciA6bm90KGg0KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLndpbmRvdy1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5pdGVtIHtcclxuICAgICAgICAvKiB3aWR0aDogNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDRyZW07ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcclxuICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xyXG4gICAgICAgIGJvcmRlcjogMC41ZW0gc29saWQ7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5pdGVtLnN0YXR1cy1sb3cge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya3JlZDtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLml0ZW0uc3RhdHVzLWF2ZXJhZ2Uge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuaXRlbS5zdGF0dXMtZ29vZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5pdGVtLnN0YXR1cy1kZWZlYXRlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5pdGVtIHN0cm9uZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggNXB4IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuaXRlbSBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMHB4IGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogNGVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLmVkaXQtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuZWRpdC1jb250YWluZXIgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLmVkaXQtY29udGFpbmVyIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogM2VtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAwcHggbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuYDtcclxuY2xhc3MgU29jaWFsRW5jb3VudGVyVHJhY2tlckZvcm0gZXh0ZW5kcyBGb3JtQXBwbGljYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0ID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKG9iamVjdCwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTdHJhaW4gPSBvcHRpb25zLnBsYXllclN0cmFpbjtcclxuICAgICAgICB0aGlzLm1heFBsYXllclN0cmFpbiA9IG9wdGlvbnMubWF4UGxheWVyU3RyYWluO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0U3RyYWluID0gb3B0aW9ucy50YXJnZXRTdHJhaW47XHJcbiAgICAgICAgdGhpcy5tYXhUYXJnZXRTdHJhaW4gPSBvcHRpb25zLm1heFRhcmdldFN0cmFpbjtcclxuICAgICAgICB0aGlzLmRpc3BsYXlUYXJnZXRUb1BsYXllcnMgPSBvcHRpb25zLmRpc3BsYXlUYXJnZXRUb1BsYXllcnM7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNHTSgpIHtcclxuICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZ2FtZS51c2VyLmlzR007XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKG9wdGlvbnMpIHtcclxuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgd2luZG93IGF0IHRoZSBib3R0b20gZHVyaW5nIHRoZSBmaXJzdCByZW5kZXJcclxuICAgICAgICBpZiAodGhpcy5fcHJpb3JTdGF0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3R5bGVzLFxyXG4gICAgICAgICAgICBwbGF5ZXJTdHJhaW46IHRoaXMucGxheWVyU3RyYWluLnZhbHVlLFxyXG4gICAgICAgICAgICBtYXhQbGF5ZXJTdHJhaW46IHRoaXMubWF4UGxheWVyU3RyYWluLnZhbHVlLFxyXG4gICAgICAgICAgICBwbGF5ZXJTdGF0dXM6IGNvbXB1dGVTdGF0dXModGhpcy5wbGF5ZXJTdHJhaW4udmFsdWUsIHRoaXMubWF4UGxheWVyU3RyYWluLnZhbHVlKSxcclxuICAgICAgICAgICAgdGFyZ2V0U3RyYWluOiB0aGlzLnRhcmdldFN0cmFpbi52YWx1ZSxcclxuICAgICAgICAgICAgbWF4VGFyZ2V0U3RyYWluOiB0aGlzLm1heFRhcmdldFN0cmFpbi52YWx1ZSxcclxuICAgICAgICAgICAgdGFyZ2V0U3RhdHVzOiBjb21wdXRlU3RhdHVzKHRoaXMudGFyZ2V0U3RyYWluLnZhbHVlLCB0aGlzLm1heFRhcmdldFN0cmFpbi52YWx1ZSksXHJcbiAgICAgICAgICAgIGRpc3BsYXlUYXJnZXRUb1BsYXllcnM6IHRoaXMuZGlzcGxheVRhcmdldFRvUGxheWVycy52YWx1ZSxcclxuICAgICAgICAgICAgaXNHTTogdGhpcy5pc0dNLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gY29tcHV0ZVN0YXR1cyhjdXJyZW50LCBtYXgpIHtcclxuICAgICAgICAgICAgaWYgKG1heCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmtub3duJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudCA+PSBtYXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZGVmZWF0ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHllbGxvd1RocmVzaG9sZCA9IE1hdGguY2VpbChtYXggLyAyLjApO1xyXG4gICAgICAgICAgICBjb25zdCByZWRUaHJlc2hvbGQgPSBNYXRoLmNlaWwobWF4ICogMC43NSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50ID49IHJlZFRocmVzaG9sZCA/ICdsb3cnIDogY3VycmVudCA+PSB5ZWxsb3dUaHJlc2hvbGQgPyAnYXZlcmFnZScgOiAnZ29vZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xyXG4gICAgICAgIGh0bWwuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBnYW1lLnNvY2tldD8uZW1pdCgnbW9kdWxlLm9nLWV4cGVyaW1lbnRzJywgeyB3aGF0dmVyOiB0cnVlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuQWN0aXZhdGVMaXN0ZW5lcnNGb3IoaHRtbCwgJ3BsYXllclN0cmFpbicsICh2YWx1ZSkgPT4gKHRoaXMucGxheWVyU3RyYWluLnZhbHVlID0gdmFsdWUpKTtcclxuICAgICAgICB0aGlzLkFjdGl2YXRlTGlzdGVuZXJzRm9yKGh0bWwsICdtYXhQbGF5ZXJTdHJhaW4nLCAodmFsdWUpID0+ICh0aGlzLm1heFBsYXllclN0cmFpbi52YWx1ZSA9IHZhbHVlKSk7XHJcbiAgICAgICAgdGhpcy5BY3RpdmF0ZUxpc3RlbmVyc0ZvcihodG1sLCAndGFyZ2V0U3RyYWluJywgKHZhbHVlKSA9PiAodGhpcy50YXJnZXRTdHJhaW4udmFsdWUgPSB2YWx1ZSkpO1xyXG4gICAgICAgIHRoaXMuQWN0aXZhdGVMaXN0ZW5lcnNGb3IoaHRtbCwgJ21heFRhcmdldFN0cmFpbicsICh2YWx1ZSkgPT4gKHRoaXMubWF4VGFyZ2V0U3RyYWluLnZhbHVlID0gdmFsdWUpKTtcclxuICAgIH1cclxuICAgIEFjdGl2YXRlTGlzdGVuZXJzRm9yKGh0bWwsIGlucHV0TmFtZSwgc2V0dGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHTSkge1xyXG4gICAgICAgICAgICBodG1sLmZpbmQoYGlucHV0W25hbWU9XCIke2lucHV0TmFtZX1cIl1gKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBodG1sLmZpbmQoYGlucHV0W25hbWU9XCIke2lucHV0TmFtZX1cIl1gKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0ZXIocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3Qoc3VwZXIuZGVmYXVsdE9wdGlvbnMsIHtcclxuICAgICAgICAgICAgaWQ6ICdzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXInLFxyXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ29nLXNvY2lhbC1lbmNvdW50ZXItdHJhY2tlciddLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvY2lhbCBFbmNvdW50ZXInLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ21vZHVsZXMvb2ctZXhwZXJpbWVudHMvdGVtcGxhdGVzL29nLXNvY2lhbC1lbmNvdW50ZXItdHJhY2tlci5oYnMnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3VwZGF0ZU9iamVjdChldmVudCwgZm9ybURhdGEpIHtcclxuICAgICAgICBsb2dUZXh0KCdTb2NpYWxFbmNvdW50ZXJUcmFja2VyIHwgX3VwZGF0ZU9iamVjdCcsIGV2ZW50LCBmb3JtRGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTb2NpYWxFbmNvdW50ZXJUcmFja2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyU3RyYWluID0gbmV3IE9nU2V0dGluZygncGxheWVyU3RyYWluJywgMCwge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ3VycmVudCBzb2NpYWwgZW5jb3VudGVyIHBsYXllcnMgU3RyYWluJyxcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBzY29wZTogJ3dvcmxkJyxcclxuICAgICAgICAgICAgY29uZmlnOiBmYWxzZSxcclxuICAgICAgICB9LCAoc2V0dGluZykgPT4gKHNldHRpbmcuYWZ0ZXJVcGRhdGUgPSAoKSA9PiB0aGlzLmZvcm0ucmVuZGVyKHRydWUpKSk7XHJcbiAgICAgICAgdGhpcy5tYXhQbGF5ZXJTdHJhaW4gPSBuZXcgT2dTZXR0aW5nKCdtYXhQbGF5ZXJTdHJhaW4nLCAwLCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDdXJyZW50IHNvY2lhbCBlbmNvdW50ZXIgcGxheWVycyBTdHJhaW4nLFxyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHNjb3BlOiAnd29ybGQnLFxyXG4gICAgICAgICAgICBjb25maWc6IGZhbHNlLFxyXG4gICAgICAgIH0sIChzZXR0aW5nKSA9PiAoc2V0dGluZy5hZnRlclVwZGF0ZSA9ICgpID0+IHRoaXMuZm9ybS5yZW5kZXIodHJ1ZSkpKTtcclxuICAgICAgICB0aGlzLnRhcmdldFN0cmFpbiA9IG5ldyBPZ1NldHRpbmcoJ3RhcmdldFN0cmFpbicsIDAsIHtcclxuICAgICAgICAgICAgbmFtZTogJ0N1cnJlbnQgc29jaWFsIGVuY291bnRlciBwbGF5ZXJzIFN0cmFpbicsXHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgc2NvcGU6ICd3b3JsZCcsXHJcbiAgICAgICAgICAgIGNvbmZpZzogZmFsc2UsXHJcbiAgICAgICAgfSwgKHNldHRpbmcpID0+IChzZXR0aW5nLmFmdGVyVXBkYXRlID0gKCkgPT4gdGhpcy5mb3JtLnJlbmRlcih0cnVlKSkpO1xyXG4gICAgICAgIHRoaXMubWF4VGFyZ2V0U3RyYWluID0gbmV3IE9nU2V0dGluZygnbWF4VGFyZ2V0U3RyYWluJywgMCwge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ3VycmVudCBzb2NpYWwgZW5jb3VudGVyIHBsYXllcnMgU3RyYWluJyxcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBzY29wZTogJ3dvcmxkJyxcclxuICAgICAgICAgICAgY29uZmlnOiBmYWxzZSxcclxuICAgICAgICB9LCAoc2V0dGluZykgPT4gKHNldHRpbmcuYWZ0ZXJVcGRhdGUgPSAoKSA9PiB0aGlzLmZvcm0ucmVuZGVyKHRydWUpKSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFyZ2V0VG9QbGF5ZXJzID0gbmV3IE9nU2V0dGluZygnZGlzcGxheVRhcmdldFRvUGxheWVycycsIGZhbHNlLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRGlzcGxheSB0YXJnZXQncyBzdHJhaW4gdmFsdWVzP1wiLFxyXG4gICAgICAgICAgICBoaW50OiBcIklmIGVuYWJsZWQsIHRoZSBwbGF5ZXJzIHdpbGwgc2VlIHRoZSBzb2NpYWwgZW5jb3VudGVyJ3MgdGFyZ2V0J3Mgc3RyYWluIHZhbHVlLiBPdGhlcndpc2UsIHRoZXkgd2lsbCBvbmx5IHNlZSB0aGUgY29sb3IgaW5kaWNhdG9yLlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBzY29wZTogJ3dvcmxkJyxcclxuICAgICAgICB9LCAoc2V0dGluZykgPT4gKHNldHRpbmcuYWZ0ZXJVcGRhdGUgPSAoKSA9PiB0aGlzLmZvcm0ucmVuZGVyKHRydWUpKSk7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gbmV3IFNvY2lhbEVuY291bnRlclRyYWNrZXJGb3JtKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICBwbGF5ZXJTdHJhaW46IHRoaXMucGxheWVyU3RyYWluLFxyXG4gICAgICAgICAgICBtYXhQbGF5ZXJTdHJhaW46IHRoaXMubWF4UGxheWVyU3RyYWluLFxyXG4gICAgICAgICAgICB0YXJnZXRTdHJhaW46IHRoaXMudGFyZ2V0U3RyYWluLFxyXG4gICAgICAgICAgICBtYXhUYXJnZXRTdHJhaW46IHRoaXMubWF4VGFyZ2V0U3RyYWluLFxyXG4gICAgICAgICAgICBkaXNwbGF5VGFyZ2V0VG9QbGF5ZXJzOiB0aGlzLmRpc3BsYXlUYXJnZXRUb1BsYXllcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcGVuVGhlV2luZG93ID0gbmV3IE9nU2V0dGluZygnb3BlblRoZVdpbmRvdycsIHt9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdPcGVuIHRoZSBTb2NpYWwgRW5jb3VudGVyIHdpbmRvdz8nLFxyXG4gICAgICAgICAgICBoaW50OiAnLi4uJyxcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICBzY29wZTogJ3dvcmxkJyxcclxuICAgICAgICB9LCAoc2V0dGluZykgPT4gKHNldHRpbmcuYWZ0ZXJVcGRhdGUgPSAoKSA9PiB0aGlzLmZvcm0ucmVuZGVyKHRydWUpKSk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkgeyB9XHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBsb2dUZXh0KCdTb2NpYWxFbmNvdW50ZXJUcmFja2VyIGdldHRpbmcgcmVhZHknKTtcclxuICAgICAgICB0aGlzLnBsYXllclN0cmFpbi5yZWFkeSgpO1xyXG4gICAgICAgIHRoaXMubWF4UGxheWVyU3RyYWluLnJlYWR5KCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRTdHJhaW4ucmVhZHkoKTtcclxuICAgICAgICB0aGlzLm1heFRhcmdldFN0cmFpbi5yZWFkeSgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVRhcmdldFRvUGxheWVycy5yZWFkeSgpO1xyXG4gICAgICAgIGdhbWUuc2V0dGluZ3MucmVnaXN0ZXJNZW51KG5hbWVzcGFjZSwgJ215U2V0dGluZ3NNZW51Jywge1xyXG4gICAgICAgICAgICBuYW1lOiAnTXkgU2V0dGluZ3MgU3VibWVudScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnU2V0dGluZ3MgTWVudSBMYWJlbCcsXHJcbiAgICAgICAgICAgIGhpbnQ6ICdBIGRlc2NyaXB0aW9uIG9mIHdoYXQgd2lsbCBvY2N1ciBpbiB0aGUgc3VibWVudSBkaWFsb2cuJyxcclxuICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1iYXJzJyxcclxuICAgICAgICAgICAgdHlwZTogU29jaWFsRW5jb3VudGVyVHJhY2tlckZvcm0sXHJcbiAgICAgICAgICAgIHJlc3RyaWN0ZWQ6IHRydWUsIC8vIFJlc3RyaWN0IHRoaXMgc3VibWVudSB0byBnYW1lbWFzdGVyIG9ubHk/XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcGVuVGhlV2luZG93LnJlYWR5KCk7XHJcbiAgICAgICAgcmVnaXN0ZXJHYW1lRXh0ZW5zaW9ucygnU29jaWFsRW5jb3VudGVyVHJhY2tlcicsIHtcclxuICAgICAgICAgICAgb3BlbjogKGZvcmNlID0gdHJ1ZSkgPT4gdGhpcy5mb3JtLnJlbmRlcihmb3JjZSksXHJcbiAgICAgICAgICAgIGNsb3NlOiAoKSA9PiB0aGlzLmZvcm0uY2xvc2UoKSxcclxuICAgICAgICAgICAgaW50ZXJuYWw6IHsgZm9ybTogdGhpcy5mb3JtIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLnJlbmRlcih0cnVlKTtcclxuICAgICAgICBsb2dUZXh0KCdTb2NpYWxFbmNvdW50ZXJUcmFja2VyIGlzIHJlYWR5Jyk7XHJcbiAgICB9XHJcbn1cclxuLy8gVE9ET1xyXG4vLyAtIEFkZCBhIFwic2hvdy9oaWRlXCIgYnV0dG9uIGluIHRoZSBjb25maWdcclxuLy8gLSBBZGQgYSB3YXkgdG8gXCJmb3JjZSBkaXNwbGF5XCIgdGhlIHdpbmRvdyB0byBhbGwgcGxheWVyc1xyXG4vLyAtIEFkZCBhbiBpY29uIHdoZW4gb25lIG9mIHRoZSB0d28gcGFydHkgcmVhY2hlcyAwXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRjMTQ2Y2VmNTc5ZTIzZjkwNDg3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9