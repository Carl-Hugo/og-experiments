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
        this.openTheWindow = new _OgSettings__WEBPACK_IMPORTED_MODULE_0__.OgSetting('openTheWindow', this.form, {
            name: 'Open the Social Encounter window?',
            hint: '...',
            type: SocialEncounterTrackerForm,
            scope: 'world',
        }, (setting) => (setting.afterUpdate = () => this.form.render(true)));
        this.form = new SocialEncounterTrackerForm(undefined, {
            playerStrain: this.playerStrain,
            maxPlayerStrain: this.maxPlayerStrain,
            targetStrain: this.targetStrain,
            maxTargetStrain: this.maxTargetStrain,
            displayTargetToPlayers: this.displayTargetToPlayers,
            openTheWindow: this.openTheWindow,
        });
    }
    init() { }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('SocialEncounterTracker getting ready');
        this.playerStrain.ready();
        this.maxPlayerStrain.ready();
        this.targetStrain.ready();
        this.maxTargetStrain.ready();
        this.displayTargetToPlayers.ready();
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
/******/ 	__webpack_require__.h = () => ("4788a4aa1ea7063b9cad")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMDlhOTIwZDc4MWQ5MDhmZDU5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDaUI7QUFDOUI7QUFDNUIsZUFBZSxxQ0FBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGVBQWU7QUFDeEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQSxhQUFhO0FBQ2IscUNBQXFDLFVBQVU7QUFDL0M7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLCtDQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGdDQUFnQyxrREFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQ0FBbUMsa0RBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0NBQWdDLGtEQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1DQUFtQyxrREFBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwQ0FBMEMsa0RBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDLGtEQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFzQjtBQUM5QjtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QyxTQUFTO0FBQ1Q7QUFDQSxRQUFRLCtDQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNuT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9Tb2NpYWxFbmNvdW50ZXJUcmFja2VyLnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPZ1NldHRpbmcgfSBmcm9tICcuL09nU2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBsb2dUZXh0LCByZWdpc3RlckdhbWVFeHRlbnNpb25zIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJy4vY3NzJztcclxuY29uc3Qgc3R5bGVzID0gY3NzIGBcclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLndpbmRvdy10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAud2luZG93LWhlYWRlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMCBub25lO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciBoZWFkZXIgOm5vdChoNCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC53aW5kb3ctY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuaXRlbSB7XHJcbiAgICAgICAgLyogd2lkdGg6IDVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA0cmVtOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS41ZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjVlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcclxuICAgICAgICBib3JkZXI6IDAuNWVtIHNvbGlkO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuaXRlbS5zdGF0dXMtbG93IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtyZWQ7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5pdGVtLnN0YXR1cy1hdmVyYWdlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLml0ZW0uc3RhdHVzLWdvb2Qge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2dyZWVuO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuaXRlbS5zdGF0dXMtZGVmZWF0ZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuaXRlbSBzdHJvbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDVweCBibGFjaztcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLml0ZW0gc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMTBweCBibGFjaztcclxuICAgICAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDRlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5lZGl0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLmVkaXQtY29udGFpbmVyIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5lZGl0LWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDNlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMHB4IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbmA7XHJcbmNsYXNzIFNvY2lhbEVuY291bnRlclRyYWNrZXJGb3JtIGV4dGVuZHMgRm9ybUFwcGxpY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBzdXBlcihvYmplY3QsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucGxheWVyU3RyYWluID0gb3B0aW9ucy5wbGF5ZXJTdHJhaW47XHJcbiAgICAgICAgdGhpcy5tYXhQbGF5ZXJTdHJhaW4gPSBvcHRpb25zLm1heFBsYXllclN0cmFpbjtcclxuICAgICAgICB0aGlzLnRhcmdldFN0cmFpbiA9IG9wdGlvbnMudGFyZ2V0U3RyYWluO1xyXG4gICAgICAgIHRoaXMubWF4VGFyZ2V0U3RyYWluID0gb3B0aW9ucy5tYXhUYXJnZXRTdHJhaW47XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFyZ2V0VG9QbGF5ZXJzID0gb3B0aW9ucy5kaXNwbGF5VGFyZ2V0VG9QbGF5ZXJzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzR00oKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGdhbWUudXNlci5pc0dNO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YShvcHRpb25zKSB7XHJcbiAgICAgICAgLy8gUG9zaXRpb24gdGhlIHdpbmRvdyBhdCB0aGUgYm90dG9tIGR1cmluZyB0aGUgZmlyc3QgcmVuZGVyXHJcbiAgICAgICAgaWYgKHRoaXMuX3ByaW9yU3RhdGUgPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlcyxcclxuICAgICAgICAgICAgcGxheWVyU3RyYWluOiB0aGlzLnBsYXllclN0cmFpbi52YWx1ZSxcclxuICAgICAgICAgICAgbWF4UGxheWVyU3RyYWluOiB0aGlzLm1heFBsYXllclN0cmFpbi52YWx1ZSxcclxuICAgICAgICAgICAgcGxheWVyU3RhdHVzOiBjb21wdXRlU3RhdHVzKHRoaXMucGxheWVyU3RyYWluLnZhbHVlLCB0aGlzLm1heFBsYXllclN0cmFpbi52YWx1ZSksXHJcbiAgICAgICAgICAgIHRhcmdldFN0cmFpbjogdGhpcy50YXJnZXRTdHJhaW4udmFsdWUsXHJcbiAgICAgICAgICAgIG1heFRhcmdldFN0cmFpbjogdGhpcy5tYXhUYXJnZXRTdHJhaW4udmFsdWUsXHJcbiAgICAgICAgICAgIHRhcmdldFN0YXR1czogY29tcHV0ZVN0YXR1cyh0aGlzLnRhcmdldFN0cmFpbi52YWx1ZSwgdGhpcy5tYXhUYXJnZXRTdHJhaW4udmFsdWUpLFxyXG4gICAgICAgICAgICBkaXNwbGF5VGFyZ2V0VG9QbGF5ZXJzOiB0aGlzLmRpc3BsYXlUYXJnZXRUb1BsYXllcnMudmFsdWUsXHJcbiAgICAgICAgICAgIGlzR006IHRoaXMuaXNHTSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVTdGF0dXMoY3VycmVudCwgbWF4KSB7XHJcbiAgICAgICAgICAgIGlmIChtYXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndW5rbm93bic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2RlZmVhdGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB5ZWxsb3dUaHJlc2hvbGQgPSBNYXRoLmNlaWwobWF4IC8gMi4wKTtcclxuICAgICAgICAgICAgY29uc3QgcmVkVGhyZXNob2xkID0gTWF0aC5jZWlsKG1heCAqIDAuNzUpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudCA+PSByZWRUaHJlc2hvbGQgPyAnbG93JyA6IGN1cnJlbnQgPj0geWVsbG93VGhyZXNob2xkID8gJ2F2ZXJhZ2UnIDogJ2dvb2QnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcclxuICAgICAgICBodG1sLmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ2FtZS5zb2NrZXQ/LmVtaXQoJ21vZHVsZS5vZy1leHBlcmltZW50cycsIHsgd2hhdHZlcjogdHJ1ZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLkFjdGl2YXRlTGlzdGVuZXJzRm9yKGh0bWwsICdwbGF5ZXJTdHJhaW4nLCAodmFsdWUpID0+ICh0aGlzLnBsYXllclN0cmFpbi52YWx1ZSA9IHZhbHVlKSk7XHJcbiAgICAgICAgdGhpcy5BY3RpdmF0ZUxpc3RlbmVyc0ZvcihodG1sLCAnbWF4UGxheWVyU3RyYWluJywgKHZhbHVlKSA9PiAodGhpcy5tYXhQbGF5ZXJTdHJhaW4udmFsdWUgPSB2YWx1ZSkpO1xyXG4gICAgICAgIHRoaXMuQWN0aXZhdGVMaXN0ZW5lcnNGb3IoaHRtbCwgJ3RhcmdldFN0cmFpbicsICh2YWx1ZSkgPT4gKHRoaXMudGFyZ2V0U3RyYWluLnZhbHVlID0gdmFsdWUpKTtcclxuICAgICAgICB0aGlzLkFjdGl2YXRlTGlzdGVuZXJzRm9yKGh0bWwsICdtYXhUYXJnZXRTdHJhaW4nLCAodmFsdWUpID0+ICh0aGlzLm1heFRhcmdldFN0cmFpbi52YWx1ZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBBY3RpdmF0ZUxpc3RlbmVyc0ZvcihodG1sLCBpbnB1dE5hbWUsIHNldHRlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR00pIHtcclxuICAgICAgICAgICAgaHRtbC5maW5kKGBpbnB1dFtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYCkub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaHRtbC5maW5kKGBpbnB1dFtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYCkub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGVyKHBhcnNlSW50KCQodGhpcykudmFsKCkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XHJcbiAgICAgICAgICAgIGlkOiAnc29jaWFsLWVuY291bnRlci10cmFja2VyJyxcclxuICAgICAgICAgICAgY2xhc3NlczogWydvZy1zb2NpYWwtZW5jb3VudGVyLXRyYWNrZXInXSxcclxuICAgICAgICAgICAgdGl0bGU6ICdTb2NpYWwgRW5jb3VudGVyJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdtb2R1bGVzL29nLWV4cGVyaW1lbnRzL3RlbXBsYXRlcy9vZy1zb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIuaGJzJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF91cGRhdGVPYmplY3QoZXZlbnQsIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgbG9nVGV4dCgnU29jaWFsRW5jb3VudGVyVHJhY2tlciB8IF91cGRhdGVPYmplY3QnLCBldmVudCwgZm9ybURhdGEpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgU29jaWFsRW5jb3VudGVyVHJhY2tlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBsYXllclN0cmFpbiA9IG5ldyBPZ1NldHRpbmcoJ3BsYXllclN0cmFpbicsIDAsIHtcclxuICAgICAgICAgICAgbmFtZTogJ0N1cnJlbnQgc29jaWFsIGVuY291bnRlciBwbGF5ZXJzIFN0cmFpbicsXHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgc2NvcGU6ICd3b3JsZCcsXHJcbiAgICAgICAgICAgIGNvbmZpZzogZmFsc2UsXHJcbiAgICAgICAgfSwgKHNldHRpbmcpID0+IChzZXR0aW5nLmFmdGVyVXBkYXRlID0gKCkgPT4gdGhpcy5mb3JtLnJlbmRlcih0cnVlKSkpO1xyXG4gICAgICAgIHRoaXMubWF4UGxheWVyU3RyYWluID0gbmV3IE9nU2V0dGluZygnbWF4UGxheWVyU3RyYWluJywgMCwge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ3VycmVudCBzb2NpYWwgZW5jb3VudGVyIHBsYXllcnMgU3RyYWluJyxcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBzY29wZTogJ3dvcmxkJyxcclxuICAgICAgICAgICAgY29uZmlnOiBmYWxzZSxcclxuICAgICAgICB9LCAoc2V0dGluZykgPT4gKHNldHRpbmcuYWZ0ZXJVcGRhdGUgPSAoKSA9PiB0aGlzLmZvcm0ucmVuZGVyKHRydWUpKSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRTdHJhaW4gPSBuZXcgT2dTZXR0aW5nKCd0YXJnZXRTdHJhaW4nLCAwLCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDdXJyZW50IHNvY2lhbCBlbmNvdW50ZXIgcGxheWVycyBTdHJhaW4nLFxyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHNjb3BlOiAnd29ybGQnLFxyXG4gICAgICAgICAgICBjb25maWc6IGZhbHNlLFxyXG4gICAgICAgIH0sIChzZXR0aW5nKSA9PiAoc2V0dGluZy5hZnRlclVwZGF0ZSA9ICgpID0+IHRoaXMuZm9ybS5yZW5kZXIodHJ1ZSkpKTtcclxuICAgICAgICB0aGlzLm1heFRhcmdldFN0cmFpbiA9IG5ldyBPZ1NldHRpbmcoJ21heFRhcmdldFN0cmFpbicsIDAsIHtcclxuICAgICAgICAgICAgbmFtZTogJ0N1cnJlbnQgc29jaWFsIGVuY291bnRlciBwbGF5ZXJzIFN0cmFpbicsXHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgc2NvcGU6ICd3b3JsZCcsXHJcbiAgICAgICAgICAgIGNvbmZpZzogZmFsc2UsXHJcbiAgICAgICAgfSwgKHNldHRpbmcpID0+IChzZXR0aW5nLmFmdGVyVXBkYXRlID0gKCkgPT4gdGhpcy5mb3JtLnJlbmRlcih0cnVlKSkpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVRhcmdldFRvUGxheWVycyA9IG5ldyBPZ1NldHRpbmcoJ2Rpc3BsYXlUYXJnZXRUb1BsYXllcnMnLCBmYWxzZSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkRpc3BsYXkgdGFyZ2V0J3Mgc3RyYWluIHZhbHVlcz9cIixcclxuICAgICAgICAgICAgaGludDogXCJJZiBlbmFibGVkLCB0aGUgcGxheWVycyB3aWxsIHNlZSB0aGUgc29jaWFsIGVuY291bnRlcidzIHRhcmdldCdzIHN0cmFpbiB2YWx1ZS4gT3RoZXJ3aXNlLCB0aGV5IHdpbGwgb25seSBzZWUgdGhlIGNvbG9yIGluZGljYXRvci5cIixcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgc2NvcGU6ICd3b3JsZCcsXHJcbiAgICAgICAgfSwgKHNldHRpbmcpID0+IChzZXR0aW5nLmFmdGVyVXBkYXRlID0gKCkgPT4gdGhpcy5mb3JtLnJlbmRlcih0cnVlKSkpO1xyXG4gICAgICAgIHRoaXMub3BlblRoZVdpbmRvdyA9IG5ldyBPZ1NldHRpbmcoJ29wZW5UaGVXaW5kb3cnLCB0aGlzLmZvcm0sIHtcclxuICAgICAgICAgICAgbmFtZTogJ09wZW4gdGhlIFNvY2lhbCBFbmNvdW50ZXIgd2luZG93PycsXHJcbiAgICAgICAgICAgIGhpbnQ6ICcuLi4nLFxyXG4gICAgICAgICAgICB0eXBlOiBTb2NpYWxFbmNvdW50ZXJUcmFja2VyRm9ybSxcclxuICAgICAgICAgICAgc2NvcGU6ICd3b3JsZCcsXHJcbiAgICAgICAgfSwgKHNldHRpbmcpID0+IChzZXR0aW5nLmFmdGVyVXBkYXRlID0gKCkgPT4gdGhpcy5mb3JtLnJlbmRlcih0cnVlKSkpO1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IG5ldyBTb2NpYWxFbmNvdW50ZXJUcmFja2VyRm9ybSh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgcGxheWVyU3RyYWluOiB0aGlzLnBsYXllclN0cmFpbixcclxuICAgICAgICAgICAgbWF4UGxheWVyU3RyYWluOiB0aGlzLm1heFBsYXllclN0cmFpbixcclxuICAgICAgICAgICAgdGFyZ2V0U3RyYWluOiB0aGlzLnRhcmdldFN0cmFpbixcclxuICAgICAgICAgICAgbWF4VGFyZ2V0U3RyYWluOiB0aGlzLm1heFRhcmdldFN0cmFpbixcclxuICAgICAgICAgICAgZGlzcGxheVRhcmdldFRvUGxheWVyczogdGhpcy5kaXNwbGF5VGFyZ2V0VG9QbGF5ZXJzLFxyXG4gICAgICAgICAgICBvcGVuVGhlV2luZG93OiB0aGlzLm9wZW5UaGVXaW5kb3csXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkgeyB9XHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBsb2dUZXh0KCdTb2NpYWxFbmNvdW50ZXJUcmFja2VyIGdldHRpbmcgcmVhZHknKTtcclxuICAgICAgICB0aGlzLnBsYXllclN0cmFpbi5yZWFkeSgpO1xyXG4gICAgICAgIHRoaXMubWF4UGxheWVyU3RyYWluLnJlYWR5KCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRTdHJhaW4ucmVhZHkoKTtcclxuICAgICAgICB0aGlzLm1heFRhcmdldFN0cmFpbi5yZWFkeSgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVRhcmdldFRvUGxheWVycy5yZWFkeSgpO1xyXG4gICAgICAgIHRoaXMub3BlblRoZVdpbmRvdy5yZWFkeSgpO1xyXG4gICAgICAgIHJlZ2lzdGVyR2FtZUV4dGVuc2lvbnMoJ1NvY2lhbEVuY291bnRlclRyYWNrZXInLCB7XHJcbiAgICAgICAgICAgIG9wZW46IChmb3JjZSA9IHRydWUpID0+IHRoaXMuZm9ybS5yZW5kZXIoZm9yY2UpLFxyXG4gICAgICAgICAgICBjbG9zZTogKCkgPT4gdGhpcy5mb3JtLmNsb3NlKCksXHJcbiAgICAgICAgICAgIGludGVybmFsOiB7IGZvcm06IHRoaXMuZm9ybSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZm9ybS5yZW5kZXIodHJ1ZSk7XHJcbiAgICAgICAgbG9nVGV4dCgnU29jaWFsRW5jb3VudGVyVHJhY2tlciBpcyByZWFkeScpO1xyXG4gICAgfVxyXG59XHJcbi8vIFRPRE9cclxuLy8gLSBBZGQgYSBcInNob3cvaGlkZVwiIGJ1dHRvbiBpbiB0aGUgY29uZmlnXHJcbi8vIC0gQWRkIGEgd2F5IHRvIFwiZm9yY2UgZGlzcGxheVwiIHRoZSB3aW5kb3cgdG8gYWxsIHBsYXllcnNcclxuLy8gLSBBZGQgYW4gaWNvbiB3aGVuIG9uZSBvZiB0aGUgdHdvIHBhcnR5IHJlYWNoZXMgMFxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0Nzg4YTRhYTFlYTcwNjNiOWNhZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==