/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@microsoft/signalr/dist/esm/AbortController.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/AbortController.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortController": () => (/* binding */ AbortController)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
class AbortController {
    constructor() {
        this._isAborted = false;
        this.onabort = null;
    }
    abort() {
        if (!this._isAborted) {
            this._isAborted = true;
            if (this.onabort) {
                this.onabort();
            }
        }
    }
    get signal() {
        return this;
    }
    get aborted() {
        return this._isAborted;
    }
}
//# sourceMappingURL=AbortController.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultHttpClient": () => (/* binding */ DefaultHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ "./node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchHttpClient */ "./node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@microsoft/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
/* harmony import */ var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XhrHttpClient */ "./node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





/** Default implementation of {@link @microsoft/signalr.HttpClient}. */
class DefaultHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
    /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
    constructor(logger) {
        super();
        if (typeof fetch !== "undefined" || _Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode) {
            this._httpClient = new _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__.FetchHttpClient(logger);
        }
        else if (typeof XMLHttpRequest !== "undefined") {
            this._httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__.XhrHttpClient(logger);
        }
        else {
            throw new Error("No usable HttpClient found.");
        }
    }
    /** @inheritDoc */
    send(request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_4__.AbortError());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return this._httpClient.send(request);
    }
    getCookieString(url) {
        return this._httpClient.getCookieString(url);
    }
}
//# sourceMappingURL=DefaultHttpClient.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultReconnectPolicy": () => (/* binding */ DefaultReconnectPolicy)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// 0, 2, 10, 30 second delays before reconnect attempts.
const DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
/** @private */
class DefaultReconnectPolicy {
    constructor(retryDelays) {
        this._retryDelays = retryDelays !== undefined ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
    }
    nextRetryDelayInMilliseconds(retryContext) {
        return this._retryDelays[retryContext.previousRetryCount];
    }
}
//# sourceMappingURL=DefaultReconnectPolicy.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/Errors.js":
/*!************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Errors.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortError": () => (/* binding */ AbortError),
/* harmony export */   "AggregateErrors": () => (/* binding */ AggregateErrors),
/* harmony export */   "DisabledTransportError": () => (/* binding */ DisabledTransportError),
/* harmony export */   "FailedToNegotiateWithServerError": () => (/* binding */ FailedToNegotiateWithServerError),
/* harmony export */   "FailedToStartTransportError": () => (/* binding */ FailedToStartTransportError),
/* harmony export */   "HttpError": () => (/* binding */ HttpError),
/* harmony export */   "TimeoutError": () => (/* binding */ TimeoutError),
/* harmony export */   "UnsupportedTransportError": () => (/* binding */ UnsupportedTransportError)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Error thrown when an HTTP request fails. */
class HttpError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    constructor(errorMessage, statusCode) {
        const trueProto = new.target.prototype;
        super(`${errorMessage}: Status code '${statusCode}'`);
        this.statusCode = statusCode;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when a timeout elapses. */
class TimeoutError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    constructor(errorMessage = "A timeout occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when an action is aborted. */
class AbortError extends Error {
    /** Constructs a new instance of {@link AbortError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    constructor(errorMessage = "An abort occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the selected transport is unsupported by the browser. */
/** @private */
class UnsupportedTransportError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
     *
     * @param {string} message A descriptive error message.
     * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occured on.
     */
    constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = 'UnsupportedTransportError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the selected transport is disabled by the browser. */
/** @private */
class DisabledTransportError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
     *
     * @param {string} message A descriptive error message.
     * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occured on.
     */
    constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = 'DisabledTransportError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the selected transport cannot be started. */
/** @private */
class FailedToStartTransportError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
     *
     * @param {string} message A descriptive error message.
     * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occured on.
     */
    constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = 'FailedToStartTransportError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the negotiation with the server failed to complete. */
/** @private */
class FailedToNegotiateWithServerError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
     *
     * @param {string} message A descriptive error message.
     */
    constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.errorType = 'FailedToNegotiateWithServerError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when multiple errors have occured. */
/** @private */
class AggregateErrors extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
     *
     * @param {string} message A descriptive error message.
     * @param {Error[]} innerErrors The collection of errors this error is aggregating.
     */
    constructor(message, innerErrors) {
        const trueProto = new.target.prototype;
        super(message);
        this.innerErrors = innerErrors;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchHttpClient": () => (/* binding */ FetchHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errors */ "./node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@microsoft/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.




class FetchHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
    constructor(logger) {
        super();
        this._logger = logger;
        if (typeof fetch === "undefined") {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            const requireFunc =  true ? require : 0;
            // Cookies aren't automatically handled in Node so we need to add a CookieJar to preserve cookies across requests
            this._jar = new (requireFunc("tough-cookie")).CookieJar();
            this._fetchType = requireFunc("node-fetch");
            // node-fetch doesn't have a nice API for getting and setting cookies
            // fetch-cookie will wrap a fetch implementation with a default CookieJar or a provided one
            this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
        }
        else {
            this._fetchType = fetch.bind((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)());
        }
        if (typeof AbortController === "undefined") {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            const requireFunc =  true ? require : 0;
            // Node needs EventListener methods on AbortController which our custom polyfill doesn't provide
            this._abortControllerType = requireFunc("abort-controller");
        }
        else {
            this._abortControllerType = AbortController;
        }
    }
    /** @inheritDoc */
    async send(request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_2__.AbortError();
        }
        if (!request.method) {
            throw new Error("No method defined.");
        }
        if (!request.url) {
            throw new Error("No url defined.");
        }
        const abortController = new this._abortControllerType();
        let error;
        // Hook our abortSignal into the abort controller
        if (request.abortSignal) {
            request.abortSignal.onabort = () => {
                abortController.abort();
                error = new _Errors__WEBPACK_IMPORTED_MODULE_2__.AbortError();
            };
        }
        // If a timeout has been passed in, setup a timeout to call abort
        // Type needs to be any to fit window.setTimeout and NodeJS.setTimeout
        let timeoutId = null;
        if (request.timeout) {
            const msTimeout = request.timeout;
            timeoutId = setTimeout(() => {
                abortController.abort();
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Timeout from HTTP request.`);
                error = new _Errors__WEBPACK_IMPORTED_MODULE_2__.TimeoutError();
            }, msTimeout);
        }
        let response;
        try {
            response = await this._fetchType(request.url, {
                body: request.content,
                cache: "no-cache",
                credentials: request.withCredentials === true ? "include" : "same-origin",
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest",
                    ...request.headers,
                },
                method: request.method,
                mode: "cors",
                redirect: "follow",
                signal: abortController.signal,
            });
        }
        catch (e) {
            if (error) {
                throw error;
            }
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Error from HTTP request. ${e}.`);
            throw e;
        }
        finally {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = null;
            }
        }
        if (!response.ok) {
            const errorMessage = await deserializeContent(response, "text");
            throw new _Errors__WEBPACK_IMPORTED_MODULE_2__.HttpError(errorMessage || response.statusText, response.status);
        }
        const content = deserializeContent(response, request.responseType);
        const payload = await content;
        return new _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpResponse(response.status, response.statusText, payload);
    }
    getCookieString(url) {
        let cookies = "";
        if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && this._jar) {
            // @ts-ignore: unused variable
            this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
        }
        return cookies;
    }
}
function deserializeContent(response, responseType) {
    let content;
    switch (responseType) {
        case "arraybuffer":
            content = response.arrayBuffer();
            break;
        case "text":
            content = response.text();
            break;
        case "blob":
        case "document":
        case "json":
            throw new Error(`${responseType} is not supported.`);
        default:
            content = response.text();
            break;
    }
    return content;
}
//# sourceMappingURL=FetchHttpClient.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandshakeProtocol": () => (/* binding */ HandshakeProtocol)
/* harmony export */ });
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMessageFormat */ "./node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


/** @private */
class HandshakeProtocol {
    // Handshake request is always JSON
    writeHandshakeRequest(handshakeRequest) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.write(JSON.stringify(handshakeRequest));
    }
    parseHandshakeResponse(data) {
        let messageData;
        let remainingData;
        if ((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(data)) {
            // Format is binary but still need to read JSON text from handshake response
            const binaryData = new Uint8Array(data);
            const separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparatorCode);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            const responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
            remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
        }
        else {
            const textData = data;
            const separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparator);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            const responseLength = separatorIndex + 1;
            messageData = textData.substring(0, responseLength);
            remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
        }
        // At this point we should have just the single handshake message
        const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.parse(messageData);
        const response = JSON.parse(messages[0]);
        if (response.type) {
            throw new Error("Expected a handshake response from the server.");
        }
        const responseMessage = response;
        // multiple messages could have arrived with handshake
        // return additional data to be parsed as usual, or null if all parsed
        return [remainingData, responseMessage];
    }
}
//# sourceMappingURL=HandshakeProtocol.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/HeaderNames.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HeaderNames.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderNames": () => (/* binding */ HeaderNames)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
class HeaderNames {
}
HeaderNames.Authorization = "Authorization";
HeaderNames.Cookie = "Cookie";
//# sourceMappingURL=HeaderNames.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/HttpClient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HttpClient.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClient": () => (/* binding */ HttpClient),
/* harmony export */   "HttpResponse": () => (/* binding */ HttpResponse)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Represents an HTTP response. */
class HttpResponse {
    constructor(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
    }
}
/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
class HttpClient {
    get(url, options) {
        return this.send({
            ...options,
            method: "GET",
            url,
        });
    }
    post(url, options) {
        return this.send({
            ...options,
            method: "POST",
            url,
        });
    }
    delete(url, options) {
        return this.send({
            ...options,
            method: "DELETE",
            url,
        });
    }
    /** Gets all cookies that apply to the specified URL.
     *
     * @param url The URL that the cookies are valid for.
     * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
     */
    // @ts-ignore
    getCookieString(url) {
        return "";
    }
}
//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/HttpConnection.js":
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HttpConnection.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConnection": () => (/* binding */ HttpConnection),
/* harmony export */   "TransportSendQueue": () => (/* binding */ TransportSendQueue)
/* harmony export */ });
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultHttpClient */ "./node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Errors */ "./node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderNames */ "./node_modules/@microsoft/signalr/dist/esm/HeaderNames.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LongPollingTransport */ "./node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js");
/* harmony import */ var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServerSentEventsTransport */ "./node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
/* harmony import */ var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebSocketTransport */ "./node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.









const MAX_REDIRECTS = 100;
/** @private */
class HttpConnection {
    constructor(url, options = {}) {
        this._stopPromiseResolver = () => { };
        this.features = {};
        this._negotiateVersion = 1;
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(url, "url");
        this._logger = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.createLogger)(options.logger);
        this.baseUrl = this._resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent === undefined ? false : options.logMessageContent;
        if (typeof options.withCredentials === "boolean" || options.withCredentials === undefined) {
            options.withCredentials = options.withCredentials === undefined ? true : options.withCredentials;
        }
        else {
            throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
        }
        options.timeout = options.timeout === undefined ? 100 * 1000 : options.timeout;
        let webSocketModule = null;
        let eventSourceModule = null;
        if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && "function" !== "undefined") {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            const requireFunc =  true ? require : 0;
            webSocketModule = requireFunc("ws");
            eventSourceModule = requireFunc("eventsource");
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
            options.WebSocket = WebSocket;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && !options.WebSocket) {
            if (webSocketModule) {
                options.WebSocket = webSocketModule;
            }
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
            options.EventSource = EventSource;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && !options.EventSource) {
            if (typeof eventSourceModule !== "undefined") {
                options.EventSource = eventSourceModule;
            }
        }
        this._httpClient = options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_1__.DefaultHttpClient(this._logger);
        this._connectionState = "Disconnected" /* Disconnected */;
        this._connectionStarted = false;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
    }
    async start(transferFormat) {
        transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Binary;
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat, "transferFormat");
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Starting connection with transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat[transferFormat]}'.`);
        if (this._connectionState !== "Disconnected" /* Disconnected */) {
            return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = "Connecting" /* Connecting */;
        this._startInternalPromise = this._startInternal(transferFormat);
        await this._startInternalPromise;
        // The TypeScript compiler thinks that connectionState must be Connecting here. The TypeScript compiler is wrong.
        if (this._connectionState === "Disconnecting" /* Disconnecting */) {
            // stop() was called and transitioned the client into the Disconnecting state.
            const message = "Failed to start the HttpConnection before stop() was called.";
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, message);
            // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
            await this._stopPromise;
            return Promise.reject(new Error(message));
        }
        else if (this._connectionState !== "Connected" /* Connected */) {
            // stop() was called and transitioned the client into the Disconnecting state.
            const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, message);
            return Promise.reject(new Error(message));
        }
        this._connectionStarted = true;
    }
    send(data) {
        if (this._connectionState !== "Connected" /* Connected */) {
            return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }
        if (!this._sendQueue) {
            this._sendQueue = new TransportSendQueue(this.transport);
        }
        // Transport will not be null if state is connected
        return this._sendQueue.send(data);
    }
    async stop(error) {
        if (this._connectionState === "Disconnected" /* Disconnected */) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);
            return Promise.resolve();
        }
        if (this._connectionState === "Disconnecting" /* Disconnecting */) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
            return this._stopPromise;
        }
        this._connectionState = "Disconnecting" /* Disconnecting */;
        this._stopPromise = new Promise((resolve) => {
            // Don't complete stop() until stopConnection() completes.
            this._stopPromiseResolver = resolve;
        });
        // stopInternal should never throw so just observe it.
        await this._stopInternal(error);
        await this._stopPromise;
    }
    async _stopInternal(error) {
        // Set error as soon as possible otherwise there is a race between
        // the transport closing and providing an error and the error from a close message
        // We would prefer the close message error.
        this._stopError = error;
        try {
            await this._startInternalPromise;
        }
        catch (e) {
            // This exception is returned to the user as a rejected Promise from the start method.
        }
        // The transport's onclose will trigger stopConnection which will run our onclose event.
        // The transport should always be set if currently connected. If it wasn't set, it's likely because
        // stop was called during start() and start() failed.
        if (this.transport) {
            try {
                await this.transport.stop();
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);
                this._stopConnection();
            }
            this.transport = undefined;
        }
        else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
        }
    }
    async _startInternal(transferFormat) {
        // Store the original base url and the access token factory since they may change
        // as part of negotiating
        let url = this.baseUrl;
        this._accessTokenFactory = this._options.accessTokenFactory;
        try {
            if (this._options.skipNegotiation) {
                if (this._options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType.WebSockets) {
                    // No need to add a connection ID in this case
                    this.transport = this._constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType.WebSockets);
                    // We should just call connect directly in this case.
                    // No fallback or negotiate in this case.
                    await this._startTransport(url, transferFormat);
                }
                else {
                    throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                }
            }
            else {
                let negotiateResponse = null;
                let redirects = 0;
                do {
                    negotiateResponse = await this._getNegotiationResponse(url);
                    // the user tries to stop the connection when it is being started
                    if (this._connectionState === "Disconnecting" /* Disconnecting */ || this._connectionState === "Disconnected" /* Disconnected */) {
                        throw new Error("The connection was stopped during negotiation.");
                    }
                    if (negotiateResponse.error) {
                        throw new Error(negotiateResponse.error);
                    }
                    if (negotiateResponse.ProtocolVersion) {
                        throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                    }
                    if (negotiateResponse.url) {
                        url = negotiateResponse.url;
                    }
                    if (negotiateResponse.accessToken) {
                        // Replace the current access token factory with one that uses
                        // the returned access token
                        const accessToken = negotiateResponse.accessToken;
                        this._accessTokenFactory = () => accessToken;
                    }
                    redirects++;
                } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
                if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                    throw new Error("Negotiate redirection limit exceeded.");
                }
                await this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
            }
            if (this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_4__.LongPollingTransport) {
                this.features.inherentKeepAlive = true;
            }
            if (this._connectionState === "Connecting" /* Connecting */) {
                // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
                // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, "The HttpConnection connected successfully.");
                this._connectionState = "Connected" /* Connected */;
            }
            // stop() is waiting on us via this.startInternalPromise so keep this.transport around so it can clean up.
            // This is the only case startInternal can exit in neither the connected nor disconnected state because stopConnection()
            // will transition to the disconnected state. start() will wait for the transition using the stopPromise.
        }
        catch (e) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, "Failed to start the connection: " + e);
            this._connectionState = "Disconnected" /* Disconnected */;
            this.transport = undefined;
            // if start fails, any active calls to stop assume that start will complete the stop promise
            this._stopPromiseResolver();
            return Promise.reject(e);
        }
    }
    async _getNegotiationResponse(url) {
        const headers = {};
        if (this._accessTokenFactory) {
            const token = await this._accessTokenFactory();
            if (token) {
                headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_5__.HeaderNames.Authorization] = `Bearer ${token}`;
            }
        }
        const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeader)();
        headers[name] = value;
        const negotiateUrl = this._resolveNegotiateUrl(url);
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
        try {
            const response = await this._httpClient.post(negotiateUrl, {
                content: "",
                headers: { ...headers, ...this._options.headers },
                timeout: this._options.timeout,
                withCredentials: this._options.withCredentials,
            });
            if (response.statusCode !== 200) {
                return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
            }
            const negotiateResponse = JSON.parse(response.content);
            if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
                // Negotiate version 0 doesn't use connectionToken
                // So we set it equal to connectionId so all our logic can use connectionToken without being aware of the negotiate version
                negotiateResponse.connectionToken = negotiateResponse.connectionId;
            }
            return negotiateResponse;
        }
        catch (e) {
            let errorMessage = "Failed to complete negotiation with the server: " + e;
            if (e instanceof _Errors__WEBPACK_IMPORTED_MODULE_6__.HttpError) {
                if (e.statusCode === 404) {
                    errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
                }
            }
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, errorMessage);
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__.FailedToNegotiateWithServerError(errorMessage));
        }
    }
    _createConnectUrl(url, connectionToken) {
        if (!connectionToken) {
            return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
    }
    async _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        let connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
        if (this._isITransport(requestedTransport)) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
            this.transport = requestedTransport;
            await this._startTransport(connectUrl, requestedTransferFormat);
            this.connectionId = negotiateResponse.connectionId;
            return;
        }
        const transportExceptions = [];
        const transports = negotiateResponse.availableTransports || [];
        let negotiate = negotiateResponse;
        for (const endpoint of transports) {
            const transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat);
            if (transportOrError instanceof Error) {
                // Store the error and continue, we don't want to cause a re-negotiate in these cases
                transportExceptions.push(`${endpoint.transport} failed:`);
                transportExceptions.push(transportOrError);
            }
            else if (this._isITransport(transportOrError)) {
                this.transport = transportOrError;
                if (!negotiate) {
                    try {
                        negotiate = await this._getNegotiationResponse(url);
                    }
                    catch (ex) {
                        return Promise.reject(ex);
                    }
                    connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
                }
                try {
                    await this._startTransport(connectUrl, requestedTransferFormat);
                    this.connectionId = negotiate.connectionId;
                    return;
                }
                catch (ex) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
                    negotiate = undefined;
                    transportExceptions.push(new _Errors__WEBPACK_IMPORTED_MODULE_6__.FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, _ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType[endpoint.transport]));
                    if (this._connectionState !== "Connecting" /* Connecting */) {
                        const message = "Failed to select transport before stop() was called.";
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, message);
                        return Promise.reject(new Error(message));
                    }
                }
            }
        }
        if (transportExceptions.length > 0) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__.AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
        }
        return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
    }
    _constructTransport(transport) {
        switch (transport) {
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType.WebSockets:
                if (!this._options.WebSocket) {
                    throw new Error("'WebSocket' is not supported in your environment.");
                }
                return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_7__.WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType.ServerSentEvents:
                if (!this._options.EventSource) {
                    throw new Error("'EventSource' is not supported in your environment.");
                }
                return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_8__.ServerSentEventsTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options);
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType.LongPolling:
                return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_4__.LongPollingTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options);
            default:
                throw new Error(`Unknown transport: ${transport}.`);
        }
    }
    _startTransport(url, transferFormat) {
        this.transport.onreceive = this.onreceive;
        this.transport.onclose = (e) => this._stopConnection(e);
        return this.transport.connect(url, transferFormat);
    }
    _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat) {
        const transport = _ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType[endpoint.transport];
        if (transport === null || transport === undefined) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
            return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
        }
        else {
            if (transportMatches(requestedTransport, transport)) {
                const transferFormats = endpoint.transferFormats.map((s) => _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat[s]);
                if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                    if ((transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType.WebSockets && !this._options.WebSocket) ||
                        (transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType.ServerSentEvents && !this._options.EventSource)) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType[transport]}' because it is not supported in your environment.'`);
                        return new _Errors__WEBPACK_IMPORTED_MODULE_6__.UnsupportedTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType[transport]}' is not supported in your environment.`, transport);
                    }
                    else {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Selecting transport '${_ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType[transport]}'.`);
                        try {
                            return this._constructTransport(transport);
                        }
                        catch (ex) {
                            return ex;
                        }
                    }
                }
                else {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType[transport]}' because it does not support the requested transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat[requestedTransferFormat]}'.`);
                    return new Error(`'${_ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType[transport]}' does not support ${_ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat[requestedTransferFormat]}.`);
                }
            }
            else {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType[transport]}' because it was disabled by the client.`);
                return new _Errors__WEBPACK_IMPORTED_MODULE_6__.DisabledTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_2__.HttpTransportType[transport]}' is disabled by the client.`, transport);
            }
        }
    }
    _isITransport(transport) {
        return transport && typeof (transport) === "object" && "connect" in transport;
    }
    _stopConnection(error) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);
        this.transport = undefined;
        // If we have a stopError, it takes precedence over the error from the transport
        error = this._stopError || error;
        this._stopError = undefined;
        if (this._connectionState === "Disconnected" /* Disconnected */) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);
            return;
        }
        if (this._connectionState === "Connecting" /* Connecting */) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);
            throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
        }
        if (this._connectionState === "Disconnecting" /* Disconnecting */) {
            // A call to stop() induced this call to stopConnection and needs to be completed.
            // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
            this._stopPromiseResolver();
        }
        if (error) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `Connection disconnected with error '${error}'.`);
        }
        else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, "Connection disconnected.");
        }
        if (this._sendQueue) {
            this._sendQueue.stop().catch((e) => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
            });
            this._sendQueue = undefined;
        }
        this.connectionId = undefined;
        this._connectionState = "Disconnected" /* Disconnected */;
        if (this._connectionStarted) {
            this._connectionStarted = false;
            try {
                if (this.onclose) {
                    this.onclose(error);
                }
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e}'.`);
            }
        }
    }
    _resolveUrl(url) {
        // startsWith is not supported in IE
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
            return url;
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isBrowser) {
            throw new Error(`Cannot resolve '${url}'.`);
        }
        // Setting the url to the href propery of an anchor tag handles normalization
        // for us. There are 3 main cases.
        // 1. Relative path normalization e.g "b" -> "http://localhost:5000/a/b"
        // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
        // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
        const aTag = window.document.createElement("a");
        aTag.href = url;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);
        return aTag.href;
    }
    _resolveNegotiateUrl(url) {
        const index = url.indexOf("?");
        let negotiateUrl = url.substring(0, index === -1 ? url.length : index);
        if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
            negotiateUrl += "/";
        }
        negotiateUrl += "negotiate";
        negotiateUrl += index === -1 ? "" : url.substring(index);
        if (negotiateUrl.indexOf("negotiateVersion") === -1) {
            negotiateUrl += index === -1 ? "?" : "&";
            negotiateUrl += "negotiateVersion=" + this._negotiateVersion;
        }
        return negotiateUrl;
    }
}
function transportMatches(requestedTransport, actualTransport) {
    return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
}
/** @private */
class TransportSendQueue {
    constructor(_transport) {
        this._transport = _transport;
        this._buffer = [];
        this._executing = true;
        this._sendBufferedData = new PromiseSource();
        this._transportResult = new PromiseSource();
        this._sendLoopPromise = this._sendLoop();
    }
    send(data) {
        this._bufferData(data);
        if (!this._transportResult) {
            this._transportResult = new PromiseSource();
        }
        return this._transportResult.promise;
    }
    stop() {
        this._executing = false;
        this._sendBufferedData.resolve();
        return this._sendLoopPromise;
    }
    _bufferData(data) {
        if (this._buffer.length && typeof (this._buffer[0]) !== typeof (data)) {
            throw new Error(`Expected data to be of type ${typeof (this._buffer)} but was of type ${typeof (data)}`);
        }
        this._buffer.push(data);
        this._sendBufferedData.resolve();
    }
    async _sendLoop() {
        while (true) {
            await this._sendBufferedData.promise;
            if (!this._executing) {
                if (this._transportResult) {
                    this._transportResult.reject("Connection stopped.");
                }
                break;
            }
            this._sendBufferedData = new PromiseSource();
            const transportResult = this._transportResult;
            this._transportResult = undefined;
            const data = typeof (this._buffer[0]) === "string" ?
                this._buffer.join("") :
                TransportSendQueue._concatBuffers(this._buffer);
            this._buffer.length = 0;
            try {
                await this._transport.send(data);
                transportResult.resolve();
            }
            catch (error) {
                transportResult.reject(error);
            }
        }
    }
    static _concatBuffers(arrayBuffers) {
        const totalLength = arrayBuffers.map((b) => b.byteLength).reduce((a, b) => a + b);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const item of arrayBuffers) {
            result.set(new Uint8Array(item), offset);
            offset += item.byteLength;
        }
        return result.buffer;
    }
}
class PromiseSource {
    constructor() {
        this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
    }
    resolve() {
        this._resolver();
    }
    reject(reason) {
        this._rejecter(reason);
    }
}
//# sourceMappingURL=HttpConnection.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/HubConnection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HubConnection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubConnection": () => (/* binding */ HubConnection),
/* harmony export */   "HubConnectionState": () => (/* binding */ HubConnectionState)
/* harmony export */ });
/* harmony import */ var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HandshakeProtocol */ "./node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js");
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IHubProtocol */ "./node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Subject */ "./node_modules/@microsoft/signalr/dist/esm/Subject.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





const DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
const DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
/** Describes the current state of the {@link HubConnection} to the server. */
var HubConnectionState;
(function (HubConnectionState) {
    /** The hub connection is disconnected. */
    HubConnectionState["Disconnected"] = "Disconnected";
    /** The hub connection is connecting. */
    HubConnectionState["Connecting"] = "Connecting";
    /** The hub connection is connected. */
    HubConnectionState["Connected"] = "Connected";
    /** The hub connection is disconnecting. */
    HubConnectionState["Disconnecting"] = "Disconnecting";
    /** The hub connection is reconnecting. */
    HubConnectionState["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */
class HubConnection {
    constructor(connection, logger, protocol, reconnectPolicy) {
        this._nextKeepAlive = 0;
        this._freezeEventListener = () => {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
        };
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(connection, "connection");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(logger, "logger");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
        this._logger = logger;
        this._protocol = protocol;
        this.connection = connection;
        this._reconnectPolicy = reconnectPolicy;
        this._handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_2__.HandshakeProtocol();
        this.connection.onreceive = (data) => this._processIncomingData(data);
        this.connection.onclose = (error) => this._connectionClosed(error);
        this._callbacks = {};
        this._methods = {};
        this._closedCallbacks = [];
        this._reconnectingCallbacks = [];
        this._reconnectedCallbacks = [];
        this._invocationId = 0;
        this._receivedHandshakeResponse = false;
        this._connectionState = HubConnectionState.Disconnected;
        this._connectionStarted = false;
        this._cachedPingMessage = this._protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping });
    }
    /** @internal */
    // Using a public static factory method means we can have a private constructor and an _internal_
    // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
    // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
    // public parameter-less constructor.
    static create(connection, logger, protocol, reconnectPolicy) {
        return new HubConnection(connection, logger, protocol, reconnectPolicy);
    }
    /** Indicates the state of the {@link HubConnection} to the server. */
    get state() {
        return this._connectionState;
    }
    /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
     *  in the disconnected state or if the negotiation step was skipped.
     */
    get connectionId() {
        return this.connection ? (this.connection.connectionId || null) : null;
    }
    /** Indicates the url of the {@link HubConnection} to the server. */
    get baseUrl() {
        return this.connection.baseUrl || "";
    }
    /**
     * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
     * Reconnecting states.
     * @param {string} url The url to connect to.
     */
    set baseUrl(url) {
        if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
            throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
        }
        if (!url) {
            throw new Error("The HubConnection url must be a valid url.");
        }
        this.connection.baseUrl = url;
    }
    /** Starts the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
     */
    start() {
        this._startPromise = this._startWithStateTransitions();
        return this._startPromise;
    }
    async _startWithStateTransitions() {
        if (this._connectionState !== HubConnectionState.Disconnected) {
            return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = HubConnectionState.Connecting;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Starting HubConnection.");
        try {
            await this._startInternal();
            if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser) {
                // Log when the browser freezes the tab so users know why their connection unexpectedly stopped working
                window.document.addEventListener("freeze", this._freezeEventListener);
            }
            this._connectionState = HubConnectionState.Connected;
            this._connectionStarted = true;
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "HubConnection connected successfully.");
        }
        catch (e) {
            this._connectionState = HubConnectionState.Disconnected;
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);
            return Promise.reject(e);
        }
    }
    async _startInternal() {
        this._stopDuringStartError = undefined;
        this._receivedHandshakeResponse = false;
        // Set up the promise before any connection is (re)started otherwise it could race with received messages
        const handshakePromise = new Promise((resolve, reject) => {
            this._handshakeResolver = resolve;
            this._handshakeRejecter = reject;
        });
        await this.connection.start(this._protocol.transferFormat);
        try {
            const handshakeRequest = {
                protocol: this._protocol.name,
                version: this._protocol.version,
            };
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Sending handshake request.");
            await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Using HubProtocol '${this._protocol.name}'.`);
            // defensively cleanup timeout in case we receive a message from the server before we finish start
            this._cleanupTimeout();
            this._resetTimeoutPeriod();
            this._resetKeepAliveInterval();
            await handshakePromise;
            // It's important to check the stopDuringStartError instead of just relying on the handshakePromise
            // being rejected on close, because this continuation can run after both the handshake completed successfully
            // and the connection was closed.
            if (this._stopDuringStartError) {
                // It's important to throw instead of returning a rejected promise, because we don't want to allow any state
                // transitions to occur between now and the calling code observing the exceptions. Returning a rejected promise
                // will cause the calling continuation to get scheduled to run later.
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw this._stopDuringStartError;
            }
        }
        catch (e) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);
            this._cleanupTimeout();
            this._cleanupPingTimer();
            // HttpConnection.stop() should not complete until after the onclose callback is invoked.
            // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
            await this.connection.stop(e);
            throw e;
        }
    }
    /** Stops the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
     */
    async stop() {
        // Capture the start promise before the connection might be restarted in an onclose callback.
        const startPromise = this._startPromise;
        this._stopPromise = this._stopInternal();
        await this._stopPromise;
        try {
            // Awaiting undefined continues immediately
            await startPromise;
        }
        catch (e) {
            // This exception is returned to the user as a rejected Promise from the start method.
        }
    }
    _stopInternal(error) {
        if (this._connectionState === HubConnectionState.Disconnected) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);
            return Promise.resolve();
        }
        if (this._connectionState === HubConnectionState.Disconnecting) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
            return this._stopPromise;
        }
        this._connectionState = HubConnectionState.Disconnecting;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Stopping HubConnection.");
        if (this._reconnectDelayHandle) {
            // We're in a reconnect delay which means the underlying connection is currently already stopped.
            // Just clear the handle to stop the reconnect loop (which no one is waiting on thankfully) and
            // fire the onclose callbacks.
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
            clearTimeout(this._reconnectDelayHandle);
            this._reconnectDelayHandle = undefined;
            this._completeClose();
            return Promise.resolve();
        }
        this._cleanupTimeout();
        this._cleanupPingTimer();
        this._stopDuringStartError = error || new Error("The connection was stopped before the hub handshake could complete.");
        // HttpConnection.stop() should not complete until after either HttpConnection.start() fails
        // or the onclose callback is invoked. The onclose callback will transition the HubConnection
        // to the disconnected state if need be before HttpConnection.stop() completes.
        return this.connection.stop(error);
    }
    /** Invokes a streaming hub method on the server using the specified name and arguments.
     *
     * @typeparam T The type of the items returned by the server.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
     */
    stream(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
        // eslint-disable-next-line prefer-const
        let promiseQueue;
        const subject = new _Subject__WEBPACK_IMPORTED_MODULE_4__.Subject();
        subject.cancelCallback = () => {
            const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
            delete this._callbacks[invocationDescriptor.invocationId];
            return promiseQueue.then(() => {
                return this._sendWithProtocol(cancelInvocation);
            });
        };
        this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
            if (error) {
                subject.error(error);
                return;
            }
            else if (invocationEvent) {
                // invocationEvent will not be null when an error is not passed to the callback
                if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion) {
                    if (invocationEvent.error) {
                        subject.error(new Error(invocationEvent.error));
                    }
                    else {
                        subject.complete();
                    }
                }
                else {
                    subject.next((invocationEvent.item));
                }
            }
        };
        promiseQueue = this._sendWithProtocol(invocationDescriptor)
            .catch((e) => {
            subject.error(e);
            delete this._callbacks[invocationDescriptor.invocationId];
        });
        this._launchStreams(streams, promiseQueue);
        return subject;
    }
    _sendMessage(message) {
        this._resetKeepAliveInterval();
        return this.connection.send(message);
    }
    /**
     * Sends a js object to the server.
     * @param message The js object to serialize and send.
     */
    _sendWithProtocol(message) {
        return this._sendMessage(this._protocol.writeMessage(message));
    }
    /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
     *
     * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
     * be processing the invocation.
     *
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
     */
    send(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
        this._launchStreams(streams, sendPromise);
        return sendPromise;
    }
    /** Invokes a hub method on the server using the specified name and arguments.
     *
     * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
     * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
     * resolving the Promise.
     *
     * @typeparam T The expected return type.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
     */
    invoke(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
        const p = new Promise((resolve, reject) => {
            // invocationId will always have a value for a non-blocking invocation
            this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
                if (error) {
                    reject(error);
                    return;
                }
                else if (invocationEvent) {
                    // invocationEvent will not be null when an error is not passed to the callback
                    if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion) {
                        if (invocationEvent.error) {
                            reject(new Error(invocationEvent.error));
                        }
                        else {
                            resolve(invocationEvent.result);
                        }
                    }
                    else {
                        reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
                    }
                }
            };
            const promiseQueue = this._sendWithProtocol(invocationDescriptor)
                .catch((e) => {
                reject(e);
                // invocationId will always have a value for a non-blocking invocation
                delete this._callbacks[invocationDescriptor.invocationId];
            });
            this._launchStreams(streams, promiseQueue);
        });
        return p;
    }
    /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
     *
     * @param {string} methodName The name of the hub method to define.
     * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
     */
    on(methodName, newMethod) {
        if (!methodName || !newMethod) {
            return;
        }
        methodName = methodName.toLowerCase();
        if (!this._methods[methodName]) {
            this._methods[methodName] = [];
        }
        // Preventing adding the same handler multiple times.
        if (this._methods[methodName].indexOf(newMethod) !== -1) {
            return;
        }
        this._methods[methodName].push(newMethod);
    }
    off(methodName, method) {
        if (!methodName) {
            return;
        }
        methodName = methodName.toLowerCase();
        const handlers = this._methods[methodName];
        if (!handlers) {
            return;
        }
        if (method) {
            const removeIdx = handlers.indexOf(method);
            if (removeIdx !== -1) {
                handlers.splice(removeIdx, 1);
                if (handlers.length === 0) {
                    delete this._methods[methodName];
                }
            }
        }
        else {
            delete this._methods[methodName];
        }
    }
    /** Registers a handler that will be invoked when the connection is closed.
     *
     * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
     */
    onclose(callback) {
        if (callback) {
            this._closedCallbacks.push(callback);
        }
    }
    /** Registers a handler that will be invoked when the connection starts reconnecting.
     *
     * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
     */
    onreconnecting(callback) {
        if (callback) {
            this._reconnectingCallbacks.push(callback);
        }
    }
    /** Registers a handler that will be invoked when the connection successfully reconnects.
     *
     * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
     */
    onreconnected(callback) {
        if (callback) {
            this._reconnectedCallbacks.push(callback);
        }
    }
    _processIncomingData(data) {
        this._cleanupTimeout();
        if (!this._receivedHandshakeResponse) {
            data = this._processHandshakeResponse(data);
            this._receivedHandshakeResponse = true;
        }
        // Data may have all been read when processing handshake response
        if (data) {
            // Parse the messages
            const messages = this._protocol.parseMessages(data, this._logger);
            for (const message of messages) {
                switch (message.type) {
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation:
                        this._invokeClientMethod(message);
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion: {
                        const callback = this._callbacks[message.invocationId];
                        if (callback) {
                            if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion) {
                                delete this._callbacks[message.invocationId];
                            }
                            try {
                                callback(message);
                            }
                            catch (e) {
                                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Stream callback threw error: ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getErrorString)(e)}`);
                            }
                        }
                        break;
                    }
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping:
                        // Don't care about pings
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close: {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, "Close message received from server.");
                        const error = message.error ? new Error("Server returned an error on close: " + message.error) : undefined;
                        if (message.allowReconnect === true) {
                            // It feels wrong not to await connection.stop() here, but processIncomingData is called as part of an onreceive callback which is not async,
                            // this is already the behavior for serverTimeout(), and HttpConnection.Stop() should catch and log all possible exceptions.
                            // eslint-disable-next-line @typescript-eslint/no-floating-promises
                            this.connection.stop(error);
                        }
                        else {
                            // We cannot await stopInternal() here, but subsequent calls to stop() will await this if stopInternal() is still ongoing.
                            this._stopPromise = this._stopInternal(error);
                        }
                        break;
                    }
                    default:
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `Invalid message type: ${message.type}.`);
                        break;
                }
            }
        }
        this._resetTimeoutPeriod();
    }
    _processHandshakeResponse(data) {
        let responseMessage;
        let remainingData;
        try {
            [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
        }
        catch (e) {
            const message = "Error parsing handshake response: " + e;
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, message);
            const error = new Error(message);
            this._handshakeRejecter(error);
            throw error;
        }
        if (responseMessage.error) {
            const message = "Server returned handshake error: " + responseMessage.error;
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, message);
            const error = new Error(message);
            this._handshakeRejecter(error);
            throw error;
        }
        else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Server handshake complete.");
        }
        this._handshakeResolver();
        return remainingData;
    }
    _resetKeepAliveInterval() {
        if (this.connection.features.inherentKeepAlive) {
            return;
        }
        // Set the time we want the next keep alive to be sent
        // Timer will be setup on next message receive
        this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds;
        this._cleanupPingTimer();
    }
    _resetTimeoutPeriod() {
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
            // Set the timeout timer
            this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
            // Set keepAlive timer if there isn't one
            if (this._pingServerHandle === undefined) {
                let nextPing = this._nextKeepAlive - new Date().getTime();
                if (nextPing < 0) {
                    nextPing = 0;
                }
                // The timer needs to be set from a networking callback to avoid Chrome timer throttling from causing timers to run once a minute
                this._pingServerHandle = setTimeout(async () => {
                    if (this._connectionState === HubConnectionState.Connected) {
                        try {
                            await this._sendMessage(this._cachedPingMessage);
                        }
                        catch {
                            // We don't care about the error. It should be seen elsewhere in the client.
                            // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
                            this._cleanupPingTimer();
                        }
                    }
                }, nextPing);
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    serverTimeout() {
        // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
        // Terminate the connection, but we don't need to wait on the promise. This could trigger reconnecting.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    }
    _invokeClientMethod(invocationMessage) {
        const methods = this._methods[invocationMessage.target.toLowerCase()];
        if (methods) {
            try {
                methods.forEach((m) => m.apply(this, invocationMessage.arguments));
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `A callback for the method ${invocationMessage.target.toLowerCase()} threw error '${e}'.`);
            }
            if (invocationMessage.invocationId) {
                // This is not supported in v1. So we return an error to avoid blocking the server waiting for the response.
                const message = "Server requested a response, which is not supported in this version of the client.";
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, message);
                // We don't want to wait on the stop itself.
                this._stopPromise = this._stopInternal(new Error(message));
            }
        }
        else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `No client method with the name '${invocationMessage.target}' found.`);
        }
    }
    _connectionClosed(error) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`);
        // Triggering this.handshakeRejecter is insufficient because it could already be resolved without the continuation having run yet.
        this._stopDuringStartError = this._stopDuringStartError || error || new Error("The underlying connection was closed before the hub handshake could complete.");
        // If the handshake is in progress, start will be waiting for the handshake promise, so we complete it.
        // If it has already completed, this should just noop.
        if (this._handshakeResolver) {
            this._handshakeResolver();
        }
        this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
        this._cleanupTimeout();
        this._cleanupPingTimer();
        if (this._connectionState === HubConnectionState.Disconnecting) {
            this._completeClose(error);
        }
        else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._reconnect(error);
        }
        else if (this._connectionState === HubConnectionState.Connected) {
            this._completeClose(error);
        }
        // If none of the above if conditions were true were called the HubConnection must be in either:
        // 1. The Connecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail it.
        // 2. The Reconnecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail the current reconnect attempt
        //    and potentially continue the reconnect() loop.
        // 3. The Disconnected state in which case we're already done.
    }
    _completeClose(error) {
        if (this._connectionStarted) {
            this._connectionState = HubConnectionState.Disconnected;
            this._connectionStarted = false;
            if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser) {
                window.document.removeEventListener("freeze", this._freezeEventListener);
            }
            try {
                this._closedCallbacks.forEach((c) => c.apply(this, [error]));
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e}'.`);
            }
        }
    }
    async _reconnect(error) {
        const reconnectStartTime = Date.now();
        let previousReconnectAttempts = 0;
        let retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");
        let nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
        if (nextRetryDelay === null) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
            this._completeClose(error);
            return;
        }
        this._connectionState = HubConnectionState.Reconnecting;
        if (error) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
        }
        else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, "Connection reconnecting.");
        }
        if (this._reconnectingCallbacks.length !== 0) {
            try {
                this._reconnectingCallbacks.forEach((c) => c.apply(this, [error]));
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e}'.`);
            }
            // Exit early if an onreconnecting callback called connection.stop().
            if (this._connectionState !== HubConnectionState.Reconnecting) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                return;
            }
        }
        while (nextRetryDelay !== null) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts} will start in ${nextRetryDelay} ms.`);
            await new Promise((resolve) => {
                this._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
            });
            this._reconnectDelayHandle = undefined;
            if (this._connectionState !== HubConnectionState.Reconnecting) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                return;
            }
            try {
                await this._startInternal();
                this._connectionState = HubConnectionState.Connected;
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, "HubConnection reconnected successfully.");
                if (this._reconnectedCallbacks.length !== 0) {
                    try {
                        this._reconnectedCallbacks.forEach((c) => c.apply(this, [this.connection.connectionId]));
                    }
                    catch (e) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
                    }
                }
                return;
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);
                if (this._connectionState !== HubConnectionState.Reconnecting) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
                    // The TypeScript compiler thinks that connectionState must be Connected here. The TypeScript compiler is wrong.
                    if (this._connectionState === HubConnectionState.Disconnecting) {
                        this._completeClose();
                    }
                    return;
                }
                retryError = e instanceof Error ? e : new Error(e.toString());
                nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
            }
        }
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
        this._completeClose();
    }
    _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
        try {
            return this._reconnectPolicy.nextRetryDelayInMilliseconds({
                elapsedMilliseconds,
                previousRetryCount,
                retryReason,
            });
        }
        catch (e) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);
            return null;
        }
    }
    _cancelCallbacksWithError(error) {
        const callbacks = this._callbacks;
        this._callbacks = {};
        Object.keys(callbacks)
            .forEach((key) => {
            const callback = callbacks[key];
            try {
                callback(null, error);
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getErrorString)(e)}`);
            }
        });
    }
    _cleanupPingTimer() {
        if (this._pingServerHandle) {
            clearTimeout(this._pingServerHandle);
            this._pingServerHandle = undefined;
        }
    }
    _cleanupTimeout() {
        if (this._timeoutHandle) {
            clearTimeout(this._timeoutHandle);
        }
    }
    _createInvocation(methodName, args, nonblocking, streamIds) {
        if (nonblocking) {
            if (streamIds.length !== 0) {
                return {
                    arguments: args,
                    streamIds,
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation,
                };
            }
            else {
                return {
                    arguments: args,
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation,
                };
            }
        }
        else {
            const invocationId = this._invocationId;
            this._invocationId++;
            if (streamIds.length !== 0) {
                return {
                    arguments: args,
                    invocationId: invocationId.toString(),
                    streamIds,
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation,
                };
            }
            else {
                return {
                    arguments: args,
                    invocationId: invocationId.toString(),
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation,
                };
            }
        }
    }
    _launchStreams(streams, promiseQueue) {
        if (streams.length === 0) {
            return;
        }
        // Synchronize stream data so they arrive in-order on the server
        if (!promiseQueue) {
            promiseQueue = Promise.resolve();
        }
        // We want to iterate over the keys, since the keys are the stream ids
        // eslint-disable-next-line guard-for-in
        for (const streamId in streams) {
            streams[streamId].subscribe({
                complete: () => {
                    promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
                },
                error: (err) => {
                    let message;
                    if (err instanceof Error) {
                        message = err.message;
                    }
                    else if (err && err.toString) {
                        message = err.toString();
                    }
                    else {
                        message = "Unknown error";
                    }
                    promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
                },
                next: (item) => {
                    promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
                },
            });
        }
    }
    _replaceStreamingParams(args) {
        const streams = [];
        const streamIds = [];
        for (let i = 0; i < args.length; i++) {
            const argument = args[i];
            if (this._isObservable(argument)) {
                const streamId = this._invocationId;
                this._invocationId++;
                // Store the stream for later use
                streams[streamId] = argument;
                streamIds.push(streamId.toString());
                // remove stream from args
                args.splice(i, 1);
            }
        }
        return [streams, streamIds];
    }
    _isObservable(arg) {
        // This allows other stream implementations to just work (like rxjs)
        return arg && arg.subscribe && typeof arg.subscribe === "function";
    }
    _createStreamInvocation(methodName, args, streamIds) {
        const invocationId = this._invocationId;
        this._invocationId++;
        if (streamIds.length !== 0) {
            return {
                arguments: args,
                invocationId: invocationId.toString(),
                streamIds,
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamInvocation,
            };
        }
        else {
            return {
                arguments: args,
                invocationId: invocationId.toString(),
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamInvocation,
            };
        }
    }
    _createCancelInvocation(id) {
        return {
            invocationId: id,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.CancelInvocation,
        };
    }
    _createStreamItemMessage(id, item) {
        return {
            invocationId: id,
            item,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem,
        };
    }
    _createCompletionMessage(id, error, result) {
        if (error) {
            return {
                error,
                invocationId: id,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion,
            };
        }
        return {
            invocationId: id,
            result,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion,
        };
    }
}
//# sourceMappingURL=HubConnection.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubConnectionBuilder": () => (/* binding */ HubConnectionBuilder)
/* harmony export */ });
/* harmony import */ var _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultReconnectPolicy */ "./node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js");
/* harmony import */ var _HttpConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpConnection */ "./node_modules/@microsoft/signalr/dist/esm/HttpConnection.js");
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HubConnection */ "./node_modules/@microsoft/signalr/dist/esm/HubConnection.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JsonHubProtocol */ "./node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@microsoft/signalr/dist/esm/Loggers.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.







const LogLevelNameMapping = {
    trace: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace,
    debug: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug,
    info: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
    information: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
    warn: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
    warning: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
    error: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error,
    critical: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Critical,
    none: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.None,
};
function parseLogLevel(name) {
    // Case-insensitive matching via lower-casing
    // Yes, I know case-folding is a complicated problem in Unicode, but we only support
    // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
    const mapping = LogLevelNameMapping[name.toLowerCase()];
    if (typeof mapping !== "undefined") {
        return mapping;
    }
    else {
        throw new Error(`Unknown log level: ${name}`);
    }
}
/** A builder for configuring {@link @microsoft/signalr.HubConnection} instances. */
class HubConnectionBuilder {
    configureLogging(logging) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(logging, "logging");
        if (isLogger(logging)) {
            this.logger = logging;
        }
        else if (typeof logging === "string") {
            const logLevel = parseLogLevel(logging);
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logLevel);
        }
        else {
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logging);
        }
        return this;
    }
    withUrl(url, transportTypeOrOptions) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isNotEmpty(url, "url");
        this.url = url;
        // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
        // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
        if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = { ...this.httpConnectionOptions, ...transportTypeOrOptions };
        }
        else {
            this.httpConnectionOptions = {
                ...this.httpConnectionOptions,
                transport: transportTypeOrOptions,
            };
        }
        return this;
    }
    /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
     *
     * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
     */
    withHubProtocol(protocol) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
    }
    withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
            throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy();
        }
        else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
        }
        else {
            this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
    }
    /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
     *
     * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
     */
    build() {
        // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
        // provided to configureLogger
        const httpConnectionOptions = this.httpConnectionOptions || {};
        // If it's 'null', the user **explicitly** asked for null, don't mess with it.
        if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
        }
        // Now create the connection
        if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        const connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_3__.HttpConnection(this.url, httpConnectionOptions);
        return _HubConnection__WEBPACK_IMPORTED_MODULE_4__.HubConnection.create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_5__.NullLogger.instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__.JsonHubProtocol(), this.reconnectPolicy);
    }
}
function isLogger(logger) {
    return logger.log !== undefined;
}
//# sourceMappingURL=HubConnectionBuilder.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js":
/*!******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageType": () => (/* binding */ MessageType)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
    /** Indicates the message is an Invocation message and implements the {@link @microsoft/signalr.InvocationMessage} interface. */
    MessageType[MessageType["Invocation"] = 1] = "Invocation";
    /** Indicates the message is a StreamItem message and implements the {@link @microsoft/signalr.StreamItemMessage} interface. */
    MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
    /** Indicates the message is a Completion message and implements the {@link @microsoft/signalr.CompletionMessage} interface. */
    MessageType[MessageType["Completion"] = 3] = "Completion";
    /** Indicates the message is a Stream Invocation message and implements the {@link @microsoft/signalr.StreamInvocationMessage} interface. */
    MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
    /** Indicates the message is a Cancel Invocation message and implements the {@link @microsoft/signalr.CancelInvocationMessage} interface. */
    MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
    /** Indicates the message is a Ping message and implements the {@link @microsoft/signalr.PingMessage} interface. */
    MessageType[MessageType["Ping"] = 6] = "Ping";
    /** Indicates the message is a Close message and implements the {@link @microsoft/signalr.CloseMessage} interface. */
    MessageType[MessageType["Close"] = 7] = "Close";
})(MessageType || (MessageType = {}));
//# sourceMappingURL=IHubProtocol.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js":
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ILogger.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
    /** Log level for very low severity diagnostic messages. */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Log level for low severity diagnostic messages. */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /** Log level for informational diagnostic messages. */
    LogLevel[LogLevel["Information"] = 2] = "Information";
    /** Log level for diagnostic messages that indicate a non-fatal problem. */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /** Log level for diagnostic messages that indicate a failure in the current operation. */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=ILogger.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/ITransport.js":
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ITransport.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpTransportType": () => (/* binding */ HttpTransportType),
/* harmony export */   "TransferFormat": () => (/* binding */ TransferFormat)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
    /** Specifies no transport preference. */
    HttpTransportType[HttpTransportType["None"] = 0] = "None";
    /** Specifies the WebSockets transport. */
    HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
    /** Specifies the Server-Sent Events transport. */
    HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
    /** Specifies the Long Polling transport. */
    HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
    /** Specifies that only text data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Text"] = 1] = "Text";
    /** Specifies that binary data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));
//# sourceMappingURL=ITransport.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonHubProtocol": () => (/* binding */ JsonHubProtocol)
/* harmony export */ });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IHubProtocol */ "./node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@microsoft/signalr/dist/esm/Loggers.js");
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextMessageFormat */ "./node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





const JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
class JsonHubProtocol {
    constructor() {
        /** @inheritDoc */
        this.name = JSON_HUB_PROTOCOL_NAME;
        /** @inheritDoc */
        this.version = 1;
        /** @inheritDoc */
        this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_0__.TransferFormat.Text;
    }
    /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
    parseMessages(input, logger) {
        // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
        if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
            return [];
        }
        if (logger === null) {
            logger = _Loggers__WEBPACK_IMPORTED_MODULE_1__.NullLogger.instance;
        }
        // Parse the messages
        const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.parse(input);
        const hubMessages = [];
        for (const message of messages) {
            const parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
                throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation:
                    this._isInvocationMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem:
                    this._isStreamItemMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion:
                    this._isCompletionMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping:
                    // Single value, no need to validate
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close:
                    // All optional values, no need to validate
                    break;
                default:
                    // Future protocol changes can add message types, old clients can ignore them
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                    continue;
            }
            hubMessages.push(parsedMessage);
        }
        return hubMessages;
    }
    /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
     *
     * @param {HubMessage} message The message to write.
     * @returns {string} A string containing the serialized representation of the message.
     */
    writeMessage(message) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.write(JSON.stringify(message));
    }
    _isInvocationMessage(message) {
        this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== undefined) {
            this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
    }
    _isStreamItemMessage(message) {
        this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
        }
    }
    _isCompletionMessage(message) {
        if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
            this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
    }
    _assertNotEmptyString(value, errorMessage) {
        if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
        }
    }
}
//# sourceMappingURL=JsonHubProtocol.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/Loggers.js":
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Loggers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NullLogger": () => (/* binding */ NullLogger)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** A logger that does nothing when log messages are sent to it. */
class NullLogger {
    constructor() { }
    /** @inheritDoc */
    // eslint-disable-next-line
    log(_logLevel, _message) {
    }
}
/** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
NullLogger.instance = new NullLogger();
//# sourceMappingURL=Loggers.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LongPollingTransport": () => (/* binding */ LongPollingTransport)
/* harmony export */ });
/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortController */ "./node_modules/@microsoft/signalr/dist/esm/AbortController.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ "./node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderNames */ "./node_modules/@microsoft/signalr/dist/esm/HeaderNames.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.






// Not exported from 'index', this type is internal.
/** @private */
class LongPollingTransport {
    constructor(httpClient, accessTokenFactory, logger, options) {
        this._httpClient = httpClient;
        this._accessTokenFactory = accessTokenFactory;
        this._logger = logger;
        this._pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_0__.AbortController();
        this._options = options;
        this._running = false;
        this.onreceive = null;
        this.onclose = null;
    }
    // This is an internal type, not exported from 'index' so this is really just internal.
    get pollAborted() {
        return this._pollAbort.aborted;
    }
    async connect(url, transferFormat) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(transferFormat, "transferFormat");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat, "transferFormat");
        this._url = url;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Connecting.");
        // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Binary &&
            (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
        }
        const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
        const headers = { [name]: value, ...this._options.headers };
        const pollOptions = {
            abortSignal: this._pollAbort.signal,
            headers,
            timeout: 100000,
            withCredentials: this._options.withCredentials,
        };
        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Binary) {
            pollOptions.responseType = "arraybuffer";
        }
        const token = await this._getAccessToken();
        this._updateHeaderToken(pollOptions, token);
        // Make initial long polling request
        // Server uses first long polling request to finish initializing connection and it returns without data
        const pollUrl = `${url}&_=${Date.now()}`;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
        const response = await this._httpClient.get(pollUrl, pollOptions);
        if (response.statusCode !== 200) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
            // Mark running as false so that the poll immediately ends and runs the close logic
            this._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_4__.HttpError(response.statusText || "", response.statusCode);
            this._running = false;
        }
        else {
            this._running = true;
        }
        this._receiving = this._poll(this._url, pollOptions);
    }
    async _getAccessToken() {
        if (this._accessTokenFactory) {
            return await this._accessTokenFactory();
        }
        return null;
    }
    _updateHeaderToken(request, token) {
        if (!request.headers) {
            request.headers = {};
        }
        if (token) {
            request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_5__.HeaderNames.Authorization] = `Bearer ${token}`;
            return;
        }
        if (request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_5__.HeaderNames.Authorization]) {
            delete request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_5__.HeaderNames.Authorization];
        }
    }
    async _poll(url, pollOptions) {
        try {
            while (this._running) {
                // We have to get the access token on each poll, in case it changes
                const token = await this._getAccessToken();
                this._updateHeaderToken(pollOptions, token);
                try {
                    const pollUrl = `${url}&_=${Date.now()}`;
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
                    const response = await this._httpClient.get(pollUrl, pollOptions);
                    if (response.statusCode === 204) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                        this._running = false;
                    }
                    else if (response.statusCode !== 200) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
                        // Unexpected status code
                        this._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_4__.HttpError(response.statusText || "", response.statusCode);
                        this._running = false;
                    }
                    else {
                        // Process the response
                        if (response.content) {
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getDataDetail)(response.content, this._options.logMessageContent)}.`);
                            if (this.onreceive) {
                                this.onreceive(response.content);
                            }
                        }
                        else {
                            // This is another way timeout manifest.
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                        }
                    }
                }
                catch (e) {
                    if (!this._running) {
                        // Log but disregard errors that occur after stopping
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
                    }
                    else {
                        if (e instanceof _Errors__WEBPACK_IMPORTED_MODULE_4__.TimeoutError) {
                            // Ignore timeouts and reissue the poll.
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                        }
                        else {
                            // Close the connection with the error as the result.
                            this._closeError = e;
                            this._running = false;
                        }
                    }
                }
            }
        }
        finally {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Polling complete.");
            // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
            // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
            if (!this.pollAborted) {
                this._raiseOnClose();
            }
        }
    }
    async send(data) {
        if (!this._running) {
            return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, data, this._options);
    }
    async stop() {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Stopping polling.");
        // Tell receiving loop to stop, abort any current request, and then wait for it to finish
        this._running = false;
        this._pollAbort.abort();
        try {
            await this._receiving;
            // Send DELETE to clean up long polling on the server
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
            const headers = {};
            const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
            headers[name] = value;
            const deleteOptions = {
                headers: { ...headers, ...this._options.headers },
                timeout: this._options.timeout,
                withCredentials: this._options.withCredentials,
            };
            const token = await this._getAccessToken();
            this._updateHeaderToken(deleteOptions, token);
            await this._httpClient.delete(this._url, deleteOptions);
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) DELETE request sent.");
        }
        finally {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Stop finished.");
            // Raise close event here instead of in polling
            // It needs to happen after the DELETE request is sent
            this._raiseOnClose();
        }
    }
    _raiseOnClose() {
        if (this.onclose) {
            let logMessage = "(LongPolling transport) Firing onclose event.";
            if (this._closeError) {
                logMessage += " Error: " + this._closeError;
            }
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, logMessage);
            this.onclose(this._closeError);
        }
    }
}
//# sourceMappingURL=LongPollingTransport.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerSentEventsTransport": () => (/* binding */ ServerSentEventsTransport)
/* harmony export */ });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.



/** @private */
class ServerSentEventsTransport {
    constructor(httpClient, accessTokenFactory, logger, options) {
        this._httpClient = httpClient;
        this._accessTokenFactory = accessTokenFactory;
        this._logger = logger;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
    }
    async connect(url, transferFormat) {
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(transferFormat, "transferFormat");
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat, "transferFormat");
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, "(SSE transport) Connecting.");
        // set url before accessTokenFactory because this.url is only for send and we set the auth header instead of the query string for send
        this._url = url;
        if (this._accessTokenFactory) {
            const token = await this._accessTokenFactory();
            if (token) {
                url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
            }
        }
        return new Promise((resolve, reject) => {
            let opened = false;
            if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat.Text) {
                reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                return;
            }
            let eventSource;
            if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isBrowser || _Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isWebWorker) {
                eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials });
            }
            else {
                // Non-browser passes cookies via the dictionary
                const cookies = this._httpClient.getCookieString(url);
                const headers = {};
                headers.Cookie = cookies;
                const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeader)();
                headers[name] = value;
                eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials, headers: { ...headers, ...this._options.headers } });
            }
            try {
                eventSource.onmessage = (e) => {
                    if (this.onreceive) {
                        try {
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, `(SSE transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getDataDetail)(e.data, this._options.logMessageContent)}.`);
                            this.onreceive(e.data);
                        }
                        catch (error) {
                            this._close(error);
                            return;
                        }
                    }
                };
                // @ts-ignore: not using event on purpose
                eventSource.onerror = (e) => {
                    // EventSource doesn't give any useful information about server side closes.
                    if (opened) {
                        this._close();
                    }
                    else {
                        reject(new Error("EventSource failed to connect. The connection could not be found on the server,"
                            + " either the connection ID is not present on the server, or a proxy is refusing/buffering the connection."
                            + " If you have multiple servers check that sticky sessions are enabled."));
                    }
                };
                eventSource.onopen = () => {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information, `SSE connected to ${this._url}`);
                    this._eventSource = eventSource;
                    opened = true;
                    resolve();
                };
            }
            catch (e) {
                reject(e);
                return;
            }
        });
    }
    async send(data) {
        if (!this._eventSource) {
            return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, data, this._options);
    }
    stop() {
        this._close();
        return Promise.resolve();
    }
    _close(e) {
        if (this._eventSource) {
            this._eventSource.close();
            this._eventSource = undefined;
            if (this.onclose) {
                this.onclose(e);
            }
        }
    }
}
//# sourceMappingURL=ServerSentEventsTransport.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/Subject.js":
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Subject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subject": () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

/** Stream implementation to stream items to the server. */
class Subject {
    constructor() {
        this.observers = [];
    }
    next(item) {
        for (const observer of this.observers) {
            observer.next(item);
        }
    }
    error(err) {
        for (const observer of this.observers) {
            if (observer.error) {
                observer.error(err);
            }
        }
    }
    complete() {
        for (const observer of this.observers) {
            if (observer.complete) {
                observer.complete();
            }
        }
    }
    subscribe(observer) {
        this.observers.push(observer);
        return new _Utils__WEBPACK_IMPORTED_MODULE_0__.SubjectSubscription(this, observer);
    }
}
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextMessageFormat": () => (/* binding */ TextMessageFormat)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// Not exported from index
/** @private */
class TextMessageFormat {
    static write(output) {
        return `${output}${TextMessageFormat.RecordSeparator}`;
    }
    static parse(input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
        }
        const messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
    }
}
TextMessageFormat.RecordSeparatorCode = 0x1e;
TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
//# sourceMappingURL=TextMessageFormat.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/Utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arg": () => (/* binding */ Arg),
/* harmony export */   "ConsoleLogger": () => (/* binding */ ConsoleLogger),
/* harmony export */   "Platform": () => (/* binding */ Platform),
/* harmony export */   "SubjectSubscription": () => (/* binding */ SubjectSubscription),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "constructUserAgent": () => (/* binding */ constructUserAgent),
/* harmony export */   "createLogger": () => (/* binding */ createLogger),
/* harmony export */   "formatArrayBuffer": () => (/* binding */ formatArrayBuffer),
/* harmony export */   "getDataDetail": () => (/* binding */ getDataDetail),
/* harmony export */   "getErrorString": () => (/* binding */ getErrorString),
/* harmony export */   "getGlobalThis": () => (/* binding */ getGlobalThis),
/* harmony export */   "getUserAgentHeader": () => (/* binding */ getUserAgentHeader),
/* harmony export */   "isArrayBuffer": () => (/* binding */ isArrayBuffer),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage)
/* harmony export */ });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@microsoft/signalr/dist/esm/Loggers.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */
const VERSION = "6.0.8";
/** @private */
class Arg {
    static isRequired(val, name) {
        if (val === null || val === undefined) {
            throw new Error(`The '${name}' argument is required.`);
        }
    }
    static isNotEmpty(val, name) {
        if (!val || val.match(/^\s*$/)) {
            throw new Error(`The '${name}' argument should not be empty.`);
        }
    }
    static isIn(val, values, name) {
        // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
        if (!(val in values)) {
            throw new Error(`Unknown ${name} value: ${val}.`);
        }
    }
}
/** @private */
class Platform {
    // react-native has a window but no document so we should check both
    static get isBrowser() {
        return typeof window === "object" && typeof window.document === "object";
    }
    // WebWorkers don't have a window object so the isBrowser check would fail
    static get isWebWorker() {
        return typeof self === "object" && "importScripts" in self;
    }
    // react-native has a window but no document
    static get isReactNative() {
        return typeof window === "object" && typeof window.document === "undefined";
    }
    // Node apps shouldn't have a window object, but WebWorkers don't either
    // so we need to check for both WebWorker and window
    static get isNode() {
        return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
    }
}
/** @private */
function getDataDetail(data, includeContent) {
    let detail = "";
    if (isArrayBuffer(data)) {
        detail = `Binary data of length ${data.byteLength}`;
        if (includeContent) {
            detail += `. Content: '${formatArrayBuffer(data)}'`;
        }
    }
    else if (typeof data === "string") {
        detail = `String data of length ${data.length}`;
        if (includeContent) {
            detail += `. Content: '${data}'`;
        }
    }
    return detail;
}
/** @private */
function formatArrayBuffer(data) {
    const view = new Uint8Array(data);
    // Uint8Array.map only supports returning another Uint8Array?
    let str = "";
    view.forEach((num) => {
        const pad = num < 16 ? "0" : "";
        str += `0x${pad}${num.toString(16)} `;
    });
    // Trim of trailing space.
    return str.substr(0, str.length - 1);
}
// Also in signalr-protocol-msgpack/Utils.ts
/** @private */
function isArrayBuffer(val) {
    return val && typeof ArrayBuffer !== "undefined" &&
        (val instanceof ArrayBuffer ||
            // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
            (val.constructor && val.constructor.name === "ArrayBuffer"));
}
/** @private */
async function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, options) {
    let headers = {};
    if (accessTokenFactory) {
        const token = await accessTokenFactory();
        if (token) {
            headers = {
                ["Authorization"]: `Bearer ${token}`,
            };
        }
    }
    const [name, value] = getUserAgentHeader();
    headers[name] = value;
    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
    const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
    const response = await httpClient.post(url, {
        content,
        headers: { ...headers, ...options.headers },
        responseType,
        timeout: options.timeout,
        withCredentials: options.withCredentials,
    });
    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
}
/** @private */
function createLogger(logger) {
    if (logger === undefined) {
        return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information);
    }
    if (logger === null) {
        return _Loggers__WEBPACK_IMPORTED_MODULE_1__.NullLogger.instance;
    }
    if (logger.log !== undefined) {
        return logger;
    }
    return new ConsoleLogger(logger);
}
/** @private */
class SubjectSubscription {
    constructor(subject, observer) {
        this._subject = subject;
        this._observer = observer;
    }
    dispose() {
        const index = this._subject.observers.indexOf(this._observer);
        if (index > -1) {
            this._subject.observers.splice(index, 1);
        }
        if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
            this._subject.cancelCallback().catch((_) => { });
        }
    }
}
/** @private */
class ConsoleLogger {
    constructor(minimumLogLevel) {
        this._minLevel = minimumLogLevel;
        this.out = console;
    }
    log(logLevel, message) {
        if (logLevel >= this._minLevel) {
            const msg = `[${new Date().toISOString()}] ${_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel[logLevel]}: ${message}`;
            switch (logLevel) {
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Critical:
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error:
                    this.out.error(msg);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning:
                    this.out.warn(msg);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information:
                    this.out.info(msg);
                    break;
                default:
                    // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                    this.out.log(msg);
                    break;
            }
        }
    }
}
/** @private */
function getUserAgentHeader() {
    let userAgentHeaderName = "X-SignalR-User-Agent";
    if (Platform.isNode) {
        userAgentHeaderName = "User-Agent";
    }
    return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
}
/** @private */
function constructUserAgent(version, os, runtime, runtimeVersion) {
    // Microsoft SignalR/[Version] ([Detailed Version]; [Operating System]; [Runtime]; [Runtime Version])
    let userAgent = "Microsoft SignalR/";
    const majorAndMinor = version.split(".");
    userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
    userAgent += ` (${version}; `;
    if (os && os !== "") {
        userAgent += `${os}; `;
    }
    else {
        userAgent += "Unknown OS; ";
    }
    userAgent += `${runtime}`;
    if (runtimeVersion) {
        userAgent += `; ${runtimeVersion}`;
    }
    else {
        userAgent += "; Unknown Runtime Version";
    }
    userAgent += ")";
    return userAgent;
}
// eslint-disable-next-line spaced-comment
/*#__PURE__*/ function getOsName() {
    if (Platform.isNode) {
        switch (process.platform) {
            case "win32":
                return "Windows NT";
            case "darwin":
                return "macOS";
            case "linux":
                return "Linux";
            default:
                return process.platform;
        }
    }
    else {
        return "";
    }
}
// eslint-disable-next-line spaced-comment
/*#__PURE__*/ function getRuntimeVersion() {
    if (Platform.isNode) {
        return process.versions.node;
    }
    return undefined;
}
function getRuntime() {
    if (Platform.isNode) {
        return "NodeJS";
    }
    else {
        return "Browser";
    }
}
/** @private */
function getErrorString(e) {
    if (e.stack) {
        return e.stack;
    }
    else if (e.message) {
        return e.message;
    }
    return `${e}`;
}
/** @private */
function getGlobalThis() {
    // globalThis is semi-new and not available in Node until v12
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof __webpack_require__.g !== "undefined") {
        return __webpack_require__.g;
    }
    throw new Error("could not find global");
}
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js":
/*!************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketTransport": () => (/* binding */ WebSocketTransport)
/* harmony export */ });
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderNames */ "./node_modules/@microsoft/signalr/dist/esm/HeaderNames.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.




/** @private */
class WebSocketTransport {
    constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
        this._logger = logger;
        this._accessTokenFactory = accessTokenFactory;
        this._logMessageContent = logMessageContent;
        this._webSocketConstructor = webSocketConstructor;
        this._httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
        this._headers = headers;
    }
    async connect(url, transferFormat) {
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(transferFormat, "transferFormat");
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat, "transferFormat");
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, "(WebSockets transport) Connecting.");
        if (this._accessTokenFactory) {
            const token = await this._accessTokenFactory();
            if (token) {
                url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
            }
        }
        return new Promise((resolve, reject) => {
            url = url.replace(/^http/, "ws");
            let webSocket;
            const cookies = this._httpClient.getCookieString(url);
            let opened = false;
            if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode) {
                const headers = {};
                const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeader)();
                headers[name] = value;
                if (cookies) {
                    headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_3__.HeaderNames.Cookie] = `${cookies}`;
                }
                // Only pass headers when in non-browser environments
                webSocket = new this._webSocketConstructor(url, undefined, {
                    headers: { ...headers, ...this._headers },
                });
            }
            if (!webSocket) {
                // Chrome is not happy with passing 'undefined' as protocol
                webSocket = new this._webSocketConstructor(url);
            }
            if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat.Binary) {
                webSocket.binaryType = "arraybuffer";
            }
            webSocket.onopen = (_event) => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information, `WebSocket connected to ${url}.`);
                this._webSocket = webSocket;
                opened = true;
                resolve();
            };
            webSocket.onerror = (event) => {
                let error = null;
                // ErrorEvent is a browser only type we need to check if the type exists before using it
                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                    error = event.error;
                }
                else {
                    error = "There was an error with the transport";
                }
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information, `(WebSockets transport) ${error}.`);
            };
            webSocket.onmessage = (message) => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, `(WebSockets transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getDataDetail)(message.data, this._logMessageContent)}.`);
                if (this.onreceive) {
                    try {
                        this.onreceive(message.data);
                    }
                    catch (error) {
                        this._close(error);
                        return;
                    }
                }
            };
            webSocket.onclose = (event) => {
                // Don't call close handler if connection was never established
                // We'll reject the connect call instead
                if (opened) {
                    this._close(event);
                }
                else {
                    let error = null;
                    // ErrorEvent is a browser only type we need to check if the type exists before using it
                    if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                        error = event.error;
                    }
                    else {
                        error = "WebSocket failed to connect. The connection could not be found on the server,"
                            + " either the endpoint may not be a SignalR endpoint,"
                            + " the connection ID is not present on the server, or there is a proxy blocking WebSockets."
                            + " If you have multiple servers check that sticky sessions are enabled.";
                    }
                    reject(new Error(error));
                }
            };
        });
    }
    send(data) {
        if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, `(WebSockets transport) sending data. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getDataDetail)(data, this._logMessageContent)}.`);
            this._webSocket.send(data);
            return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
    }
    stop() {
        if (this._webSocket) {
            // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
            // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
            this._close(undefined);
        }
        return Promise.resolve();
    }
    _close(event) {
        // webSocket will be null if the transport did not start successfully
        if (this._webSocket) {
            // Clear websocket handlers because we are considering the socket closed now
            this._webSocket.onclose = () => { };
            this._webSocket.onmessage = () => { };
            this._webSocket.onerror = () => { };
            this._webSocket.close();
            this._webSocket = undefined;
        }
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
            if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1000)) {
                this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
            }
            else if (event instanceof Error) {
                this.onclose(event);
            }
            else {
                this.onclose();
            }
        }
    }
    _isCloseEvent(event) {
        return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
    }
}
//# sourceMappingURL=WebSocketTransport.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XhrHttpClient": () => (/* binding */ XhrHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "./node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@microsoft/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.



class XhrHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
    constructor(logger) {
        super();
        this._logger = logger;
    }
    /** @inheritDoc */
    send(request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = request.withCredentials === undefined ? true : request.withCredentials;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // Explicitly setting the Content-Type header for React Native on Android platform.
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            const headers = request.headers;
            if (headers) {
                Object.keys(headers)
                    .forEach((header) => {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }
            if (request.responseType) {
                xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = () => {
                    xhr.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
                };
            }
            if (request.timeout) {
                xhr.timeout = request.timeout;
            }
            xhr.onload = () => {
                if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
                }
            };
            xhr.onerror = () => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.statusText, xhr.status));
            };
            xhr.ontimeout = () => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Warning, `Timeout from HTTP request.`);
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.TimeoutError());
            };
            xhr.send(request.content || "");
        });
    }
}
//# sourceMappingURL=XhrHttpClient.js.map

/***/ }),

/***/ "./node_modules/@microsoft/signalr/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortError": () => (/* reexport safe */ _Errors__WEBPACK_IMPORTED_MODULE_0__.AbortError),
/* harmony export */   "DefaultHttpClient": () => (/* reexport safe */ _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__.DefaultHttpClient),
/* harmony export */   "HttpClient": () => (/* reexport safe */ _HttpClient__WEBPACK_IMPORTED_MODULE_1__.HttpClient),
/* harmony export */   "HttpError": () => (/* reexport safe */ _Errors__WEBPACK_IMPORTED_MODULE_0__.HttpError),
/* harmony export */   "HttpResponse": () => (/* reexport safe */ _HttpClient__WEBPACK_IMPORTED_MODULE_1__.HttpResponse),
/* harmony export */   "HttpTransportType": () => (/* reexport safe */ _ITransport__WEBPACK_IMPORTED_MODULE_7__.HttpTransportType),
/* harmony export */   "HubConnection": () => (/* reexport safe */ _HubConnection__WEBPACK_IMPORTED_MODULE_3__.HubConnection),
/* harmony export */   "HubConnectionBuilder": () => (/* reexport safe */ _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__.HubConnectionBuilder),
/* harmony export */   "HubConnectionState": () => (/* reexport safe */ _HubConnection__WEBPACK_IMPORTED_MODULE_3__.HubConnectionState),
/* harmony export */   "JsonHubProtocol": () => (/* reexport safe */ _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__.JsonHubProtocol),
/* harmony export */   "LogLevel": () => (/* reexport safe */ _ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel),
/* harmony export */   "MessageType": () => (/* reexport safe */ _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__.MessageType),
/* harmony export */   "NullLogger": () => (/* reexport safe */ _Loggers__WEBPACK_IMPORTED_MODULE_8__.NullLogger),
/* harmony export */   "Subject": () => (/* reexport safe */ _Subject__WEBPACK_IMPORTED_MODULE_10__.Subject),
/* harmony export */   "TimeoutError": () => (/* reexport safe */ _Errors__WEBPACK_IMPORTED_MODULE_0__.TimeoutError),
/* harmony export */   "TransferFormat": () => (/* reexport safe */ _ITransport__WEBPACK_IMPORTED_MODULE_7__.TransferFormat),
/* harmony export */   "VERSION": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_11__.VERSION)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@microsoft/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultHttpClient */ "./node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js");
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HubConnection */ "./node_modules/@microsoft/signalr/dist/esm/HubConnection.js");
/* harmony import */ var _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HubConnectionBuilder */ "./node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js");
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IHubProtocol */ "./node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@microsoft/signalr/dist/esm/Loggers.js");
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JsonHubProtocol */ "./node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Subject */ "./node_modules/@microsoft/signalr/dist/esm/Subject.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/js-sha256/src/sha256.js":
/*!**********************************************!*\
  !*** ./node_modules/js-sha256/src/sha256.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = __webpack_require__.g;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" === 'object' && module.exports;
  var AMD =  true && __webpack_require__.amdO;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var algorithm = is224 ? 'sha224' : 'sha256';
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
      HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
      HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
      HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
      HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >> 28) & 0x0F] + HEX_CHARS[(h5 >> 24) & 0x0F] +
      HEX_CHARS[(h5 >> 20) & 0x0F] + HEX_CHARS[(h5 >> 16) & 0x0F] +
      HEX_CHARS[(h5 >> 12) & 0x0F] + HEX_CHARS[(h5 >> 8) & 0x0F] +
      HEX_CHARS[(h5 >> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >> 28) & 0x0F] + HEX_CHARS[(h6 >> 24) & 0x0F] +
      HEX_CHARS[(h6 >> 20) & 0x0F] + HEX_CHARS[(h6 >> 16) & 0x0F] +
      HEX_CHARS[(h6 >> 12) & 0x0F] + HEX_CHARS[(h6 >> 8) & 0x0F] +
      HEX_CHARS[(h6 >> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >> 28) & 0x0F] + HEX_CHARS[(h7 >> 24) & 0x0F] +
        HEX_CHARS[(h7 >> 20) & 0x0F] + HEX_CHARS[(h7 >> 16) & 0x0F] +
        HEX_CHARS[(h7 >> 12) & 0x0F] + HEX_CHARS[(h7 >> 8) & 0x0F] +
        HEX_CHARS[(h7 >> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF,
      (h5 >> 24) & 0xFF, (h5 >> 16) & 0xFF, (h5 >> 8) & 0xFF, h5 & 0xFF,
      (h6 >> 24) & 0xFF, (h6 >> 16) & 0xFF, (h6 >> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >> 24) & 0xFF, (h7 >> 16) & 0xFF, (h7 >> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >> 12));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >> 18));
          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var utils_1 = __webpack_require__(/*! ./src/utils */ "./src/utils.ts");
// import { VehicleMovement } from './src/movement.js';
var server_push_1 = __webpack_require__(/*! ./src/server-push */ "./src/server-push.ts");
var ActivateScene_1 = __webpack_require__(/*! ./src/ActivateScene */ "./src/ActivateScene.ts");
// import { OgSettings } from './src/OgSettings';
var OpenSceneNotes_1 = __webpack_require__(/*! ./src/OpenSceneNotes */ "./src/OpenSceneNotes.ts");
var modules = [
    // extensions.settings,
    new ActivateScene_1.ActivateScene(),
    new OpenSceneNotes_1.OpenSceneNotes(),
    new server_push_1.ServerPush(),
    //new VehicleMovement()
];
Hooks.once('init', function () {
    return __awaiter(this, void 0, void 0, function () {
        var index, module_1;
        return __generator(this, function (_a) {
            (0, utils_1.logText)('initiating');
            for (index = 0; index < modules.length; index++) {
                module_1 = modules[index];
                if (module_1.init) {
                    module_1.init();
                }
            }
            (0, utils_1.logText)('initiated');
            return [2 /*return*/];
        });
    });
});
Hooks.once('ready', function () {
    return __awaiter(this, void 0, void 0, function () {
        var index, module_2;
        return __generator(this, function (_a) {
            (0, utils_1.logText)('readying');
            for (index = 0; index < modules.length; index++) {
                module_2 = modules[index];
                if (module_2.ready) {
                    module_2.ready();
                }
            }
            (0, utils_1.logText)('ready');
            return [2 /*return*/];
        });
    });
});
if (true) {
    if (false) { var template; }
}


/***/ }),

/***/ "./src/ActivateScene.ts":
/*!******************************!*\
  !*** ./src/ActivateScene.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.ActivateScene = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var ActivateScene = /** @class */ (function () {
    function ActivateScene() {
    }
    ActivateScene.prototype.init = function () {
        var _this = this;
        (0, utils_1.logText)('ActivateScene initiating');
        (0, utils_1.addGameExtensions)('flow', {
            activate: this.activate,
        });
        CONFIG.TextEditor.enrichers.push({
            pattern: /@ActivateScene\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: function (match, options) {
                var _a;
                var _b = match.slice(1, 3), target = _b[0], name = _b[1];
                var scene = game.scenes.get(target);
                var broken = scene ? false : true;
                var data = {
                    name: name,
                    icon: 'fas fa-code',
                    classes: ['content-link'],
                    dataset: {
                        uuid: "ActivateScene.".concat(target),
                        id: target,
                        type: 'ActivateScene',
                        tooltip: 'Scene',
                        broken: broken,
                    },
                };
                if (broken) {
                    data.icon = 'fas fa-unlink';
                    data.classes.push('broken');
                    data.name = target;
                }
                var a = document.createElement('a');
                (_a = a.classList).add.apply(_a, data.classes);
                a.draggable = true;
                for (var _i = 0, _c = Object.entries(data.dataset); _i < _c.length; _i++) {
                    var _d = _c[_i], k = _d[0], v = _d[1];
                    a.dataset[k] = v;
                }
                a.innerHTML = "<i class=\"".concat(data.icon, "\"></i><i class=\"fas fa-map\"></i> ").concat(data.name);
                return a;
            },
        });
        document.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
            var target;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        target = e.target;
                        if (!(target && target.dataset && target.dataset.type === 'ActivateScene' && target.dataset.broken === 'false')) return [3 /*break*/, 2];
                        e.preventDefault();
                        return [4 /*yield*/, this.activate(target.dataset.id)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        (0, utils_1.logText)('ActivateScene initiated');
    };
    ActivateScene.prototype.ready = function () { };
    ActivateScene.prototype.activate = function (targetSceneId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentSceneJournal, targetScene, journal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, utils_1.logText)("ActivateScene activating: ".concat(targetSceneId));
                        currentSceneJournal = game.scenes.active.journal;
                        if (currentSceneJournal && currentSceneJournal.sheet) {
                            currentSceneJournal.sheet.close();
                        }
                        targetScene = game.scenes.get(targetSceneId);
                        if (!targetScene) return [3 /*break*/, 2];
                        return [4 /*yield*/, targetScene.activate()];
                    case 1:
                        _a.sent();
                        if (targetScene.journal) {
                            journal = targetScene.journal;
                            if (journal.sheet) {
                                if (!journal.testUserPermission(game.user, 'LIMITED')) {
                                    return [2 /*return*/, ui.notifications.warn("You do not have permission to view this ".concat(journal.documentName, " sheet."))];
                                }
                                journal.sheet.render(true);
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return ActivateScene;
}());
exports.ActivateScene = ActivateScene;


/***/ }),

/***/ "./src/OgSettings.ts":
/*!***************************!*\
  !*** ./src/OgSettings.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.namespace = void 0;
exports.namespace = 'og-experiments';


/***/ }),

/***/ "./src/OpenSceneNotes.ts":
/*!*******************************!*\
  !*** ./src/OpenSceneNotes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenSceneNotes = void 0;
var OgSettings_1 = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var OpenSceneNotes = /** @class */ (function () {
    function OpenSceneNotes() {
        this._openSceneNotesOnReady = true;
        this._openSceneNotesKeyOnReady = 'openSceneNotesOnReady';
    }
    OpenSceneNotes.prototype.init = function () {
        var _this = this;
        (0, utils_1.logText)('OpenSceneNotes initiating');
        game.settings.register(OgSettings_1.namespace, this._openSceneNotesKeyOnReady, {
            name: 'Auto-open scene notes?',
            hint: 'If enabled, the scene notes of the current scene will open when the server first load.',
            scope: 'client',
            config: true,
            type: Boolean,
            default: this._openSceneNotesOnReady,
            onChange: function (value) { return (_this._openSceneNotesOnReady = value); },
        });
        this.openSceneNotesOnReady = game.settings.get(OgSettings_1.namespace, this._openSceneNotesKeyOnReady);
        (0, utils_1.addGameExtensions)('flow', {
            openSceneNotes: this.openSceneNotes,
        });
        (0, utils_1.logText)('OpenSceneNotes initiated');
    };
    OpenSceneNotes.prototype.ready = function () {
        (0, utils_1.logText)('OpenSceneNotes is getting ready');
        if (this.openSceneNotesOnReady) {
            this.openSceneNotes();
        }
        (0, utils_1.logText)('OpenSceneNotes is ready');
    };
    OpenSceneNotes.prototype.openSceneNotes = function () {
        var currentSceneJournal = game.scenes.active.journal;
        if (currentSceneJournal && currentSceneJournal.sheet) {
            currentSceneJournal.sheet.render(true);
        }
    };
    Object.defineProperty(OpenSceneNotes.prototype, "openSceneNotesOnReady", {
        get: function () {
            return this._openSceneNotesOnReady;
        },
        set: function (value) {
            this._openSceneNotesOnReady = value;
            game.settings.set(OgSettings_1.namespace, this._openSceneNotesKeyOnReady, value);
        },
        enumerable: false,
        configurable: true
    });
    return OpenSceneNotes;
}());
exports.OpenSceneNotes = OpenSceneNotes;


/***/ }),

/***/ "./src/server-push.ts":
/*!****************************!*\
  !*** ./src/server-push.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.ServerPush = void 0;
// const signalR = require('@microsoft/signalr');
var signalr_1 = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");
var keycloak_js_1 = __webpack_require__(/*! keycloak-js */ "./node_modules/keycloak-js/dist/keycloak.mjs");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
// function logText(text: string) {
//     console.debug('og-experiments | ' + text);
// }
// var noteByIndex = game.journal._source[16]
// var journalEntryId = 'zEttYl2LliDg1W7O'; // "U3BmDb23GUxnMP9M"
/*
const journalEntryId = 'zEttYl2LliDg1W7O';
await game.experiments.showJournalEntryById(journalEntryId);
*/
// var noteById = game.journal.find((entry) => entry.data._id === journalEntryId);
// noteById.show();
//
//new JournalEntry(note).show()
var AuthService = /** @class */ (function () {
    function AuthService() {
        this._authenticated = false;
        this._keycloak = new keycloak_js_1.default({
            url: 'http://localhost:8080/',
            realm: 'OgAuth',
            clientId: 'og-server',
        });
    }
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (v) {
            this._token = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this._authenticated;
        },
        set: function (v) {
            this._authenticated = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this._keycloak;
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        me = this;
                        return [4 /*yield*/, this._keycloak
                                .init({
                                onLoad: 'login-required',
                                // silentCheckSsoRedirectUri: 'https://localhost:30000/',
                                enableLogging: true,
                            })
                                .then(function (authenticated) {
                                (0, utils_1.logText)(authenticated ? 'authenticated' : 'not authenticated');
                                me.authenticated = authenticated;
                                if (authenticated) {
                                    me.token = me._keycloak.token;
                                }
                            })
                                .catch(function (e) {
                                console.error('failed to initialize', e);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AuthService;
}());
var ServerPush = /** @class */ (function () {
    function ServerPush() {
        this.auth = new AuthService();
    }
    ServerPush.prototype.ready = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, user;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, utils_1.logText)('ServerPush getting ready');
                        return [4 /*yield*/, this.auth.init()];
                    case 1:
                        _a.sent();
                        if (!this.auth.authenticated) {
                            console.error("Not authenticated! Can't proceed with ServerPush.ready.");
                            return [2 /*return*/];
                        }
                        connection = new signalr_1.HubConnectionBuilder()
                            .withUrl('https://localhost:7263/hubs/default', {
                            accessTokenFactory: function () { return _this.auth.token; },
                        })
                            .build();
                        user = this.auth.user;
                        (0, utils_1.addGameExtensions)('serverPush', {
                            connection: connection,
                            user: user,
                            ping: function () { return connection.invoke('Ping'); },
                        });
                        connection.on('pong', function () {
                            (0, utils_1.logText)('pong');
                        });
                        connection.on('createShowAndDeleteNewJournalEntry', this.createShowAndDeleteNewJournalEntry);
                        connection.on('createAndShowTemporaryJournalEntry', this.createAndShowTemporaryJournalEntry);
                        connection.on('execute', this.execute);
                        connection.on('executeAsync', this.executeAsync);
                        connection.start();
                        (0, utils_1.logText)('ServerPush is ready');
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerPush.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, utils_1.logText)('ServerPush initiating');
                // Javascript
                // game.experiments.showJournalEntryById = async function (journalEntryId) {
                //     // var noteById = game.journal.find((entry) => entry.data._id === journalEntryId);
                //     // await noteById.show();
                //     game.StoryTeller.showStoryByIDToAll(journalEntryId);
                // };
                // //var journalEntryId="a7LBKwELqDwwcCzz"
                // game.experiments.showNewJournalEntry = async function (name, content, deleteDelay, isPermanent) {
                //     const entry = await JournalEntry.create({
                //         name: name,
                //         content: content,
                //     });
                //     logText(`Journal entry '${name}' created with isPermanent = ${isPermanent}.`);
                //     await entry.show('text', true);
                //     if (isPermanent) {
                //         return;
                //     }
                //     const deleteEntryInMS = deleteDelay || 60000;
                //     logText(`Scheduling journal entry deletion in ${deleteEntryInMS} ms.`);
                //     setTimeout(async () => {
                //         logText('Deleting journal entry', entry);
                //         await entry.delete();
                //         logText('Journal entry deleted');
                //     }, deleteEntryInMS);
                //     // V10 multi-page syntax
                //     // JournalEntry.create({name: "Journal name", pages:[{type: "text", name: "Quest hook", text:{content: `HTML content here`}}]})
                // };
                (0, utils_1.logText)('ServerPush initiated');
                return [2 /*return*/];
            });
        });
    };
    ServerPush.prototype.createAndShowTemporaryJournalEntry = function (options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var entry;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, JournalEntry.create({
                            name: options.name,
                            content: options.content,
                            // permission: foundry.CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER,
                            permissions: foundry.CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER,
                        }, { temporary: true, renderSheet: true })];
                    case 1:
                        entry = _b.sent();
                        if (entry === undefined) {
                            console.error('No entry was created.');
                            return [2 /*return*/];
                        }
                        (0, utils_1.logText)("Journal entry '".concat(options.name, "' created."));
                        // await entry.show('text', true);
                        return [4 /*yield*/, ((_a = entry.sheet) === null || _a === void 0 ? void 0 : _a.render(true))];
                    case 2:
                        // await entry.show('text', true);
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerPush.prototype.createShowAndDeleteNewJournalEntry = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var entry, deleteEntryInMS;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, JournalEntry.create({
                            name: options.name,
                            content: options.content,
                        })];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined) {
                            console.error('No entry was created.');
                            return [2 /*return*/];
                        }
                        (0, utils_1.logText)("Journal entry '".concat(options.name, "' created with isPermanent = ").concat(options.isPermanent, "."));
                        return [4 /*yield*/, entry.show('text', true)];
                    case 2:
                        _a.sent();
                        if (options.isPermanent) {
                            return [2 /*return*/];
                        }
                        deleteEntryInMS = options.deleteDelay || 60000;
                        (0, utils_1.logText)("Scheduling journal entry deletion in ".concat(deleteEntryInMS, " ms."));
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.debug('Deleting journal entry', entry);
                                        return [4 /*yield*/, entry.delete()];
                                    case 1:
                                        _a.sent();
                                        (0, utils_1.logText)('Journal entry deleted');
                                        return [2 /*return*/];
                                }
                            });
                        }); }, deleteEntryInMS);
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerPush.prototype.execute = function (options, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, utils_1.logText)('ServerPush.execute', options, user);
                eval(options.command);
                return [2 /*return*/];
            });
        });
    };
    ServerPush.prototype.executeAsync = function (options, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, utils_1.logText)('ServerPush.executeAsync', options, user);
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return eval(options.command); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ServerPush;
}());
exports.ServerPush = ServerPush;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addGameExtensions = exports.logText = void 0;
function logText() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.debug.apply(console, __spreadArray(['og-experiments |'], data, false));
}
exports.logText = logText;
function initializeOgExtensions() {
    game['og'] = {};
}
function enforceOgExtensionsInitialized() {
    if (game['og'] === undefined) {
        initializeOgExtensions();
    }
}
function addGameExtensions(key, setting) {
    enforceOgExtensionsInitialized();
    game['og'][key] = __assign(__assign({}, game['og'][key]), setting);
}
exports.addGameExtensions = addGameExtensions;


/***/ }),

/***/ "./node_modules/keycloak-js/dist/keycloak.mjs":
/*!****************************************************!*\
  !*** ./node_modules/keycloak-js/dist/keycloak.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keycloak)
/* harmony export */ });
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js");



/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof Promise === 'undefined') {
    throw Error('Keycloak requires an environment that supports Promises. Make sure that you include the appropriate polyfill.');
}

var loggedPromiseDeprecation = false;

function logPromiseDeprecation() {
    if (!loggedPromiseDeprecation) {
        loggedPromiseDeprecation = true;
        console.warn('[KEYCLOAK] Usage of legacy style promise methods such as `.error()` and `.success()` has been deprecated and support will be removed in future versions. Use standard style promise methods such as `.then() and `.catch()` instead.');
    }
}

function Keycloak (config) {
    if (!(this instanceof Keycloak)) {
        return new Keycloak(config);
    }

    var kc = this;
    var adapter;
    var refreshQueue = [];
    var callbackStorage;

    var loginIframe = {
        enable: true,
        callbackList: [],
        interval: 5
    };

    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        if ((scripts[i].src.indexOf('keycloak.js') !== -1 || scripts[i].src.indexOf('keycloak.min.js') !== -1) && scripts[i].src.indexOf('version=') !== -1) {
            kc.iframeVersion = scripts[i].src.substring(scripts[i].src.indexOf('version=') + 8).split('&')[0];
        }
    }

    var useNonce = true;
    var logInfo = createLogger(console.info);
    var logWarn = createLogger(console.warn);

    kc.init = function (initOptions) {
        kc.authenticated = false;

        callbackStorage = createCallbackStorage();
        var adapters = ['default', 'cordova', 'cordova-native'];

        if (initOptions && adapters.indexOf(initOptions.adapter) > -1) {
            adapter = loadAdapter(initOptions.adapter);
        } else if (initOptions && typeof initOptions.adapter === "object") {
            adapter = initOptions.adapter;
        } else {
            if (window.Cordova || window.cordova) {
                adapter = loadAdapter('cordova');
            } else {
                adapter = loadAdapter();
            }
        }

        if (initOptions) {
            if (typeof initOptions.useNonce !== 'undefined') {
                useNonce = initOptions.useNonce;
            }

            if (typeof initOptions.checkLoginIframe !== 'undefined') {
                loginIframe.enable = initOptions.checkLoginIframe;
            }

            if (initOptions.checkLoginIframeInterval) {
                loginIframe.interval = initOptions.checkLoginIframeInterval;
            }

            if (initOptions.onLoad === 'login-required') {
                kc.loginRequired = true;
            }

            if (initOptions.responseMode) {
                if (initOptions.responseMode === 'query' || initOptions.responseMode === 'fragment') {
                    kc.responseMode = initOptions.responseMode;
                } else {
                    throw 'Invalid value for responseMode';
                }
            }

            if (initOptions.flow) {
                switch (initOptions.flow) {
                    case 'standard':
                        kc.responseType = 'code';
                        break;
                    case 'implicit':
                        kc.responseType = 'id_token token';
                        break;
                    case 'hybrid':
                        kc.responseType = 'code id_token token';
                        break;
                    default:
                        throw 'Invalid value for flow';
                }
                kc.flow = initOptions.flow;
            }

            if (initOptions.timeSkew != null) {
                kc.timeSkew = initOptions.timeSkew;
            }

            if(initOptions.redirectUri) {
                kc.redirectUri = initOptions.redirectUri;
            }

            if (initOptions.silentCheckSsoRedirectUri) {
                kc.silentCheckSsoRedirectUri = initOptions.silentCheckSsoRedirectUri;
            }

            if (typeof initOptions.silentCheckSsoFallback === 'boolean') {
                kc.silentCheckSsoFallback = initOptions.silentCheckSsoFallback;
            } else {
                kc.silentCheckSsoFallback = true;
            }

            if (initOptions.pkceMethod) {
                if (initOptions.pkceMethod !== "S256") {
                    throw 'Invalid value for pkceMethod';
                }
                kc.pkceMethod = initOptions.pkceMethod;
            }

            if (typeof initOptions.enableLogging === 'boolean') {
                kc.enableLogging = initOptions.enableLogging;
            } else {
                kc.enableLogging = false;
            }

            if (typeof initOptions.scope === 'string') {
                kc.scope = initOptions.scope;
            }

            if (typeof initOptions.messageReceiveTimeout === 'number' && initOptions.messageReceiveTimeout > 0) {
                kc.messageReceiveTimeout = initOptions.messageReceiveTimeout;
            } else {
                kc.messageReceiveTimeout = 10000;
            }
        }

        if (!kc.responseMode) {
            kc.responseMode = 'fragment';
        }
        if (!kc.responseType) {
            kc.responseType = 'code';
            kc.flow = 'standard';
        }

        var promise = createPromise();

        var initPromise = createPromise();
        initPromise.promise.then(function() {
            kc.onReady && kc.onReady(kc.authenticated);
            promise.setSuccess(kc.authenticated);
        }).catch(function(error) {
            promise.setError(error);
        });

        var configPromise = loadConfig();

        function onLoad() {
            var doLogin = function(prompt) {
                if (!prompt) {
                    options.prompt = 'none';
                }

                kc.login(options).then(function () {
                    initPromise.setSuccess();
                }).catch(function (error) {
                    initPromise.setError(error);
                });
            };

            var checkSsoSilently = function() {
                var ifrm = document.createElement("iframe");
                var src = kc.createLoginUrl({prompt: 'none', redirectUri: kc.silentCheckSsoRedirectUri});
                ifrm.setAttribute("src", src);
                ifrm.setAttribute("title", "keycloak-silent-check-sso");
                ifrm.style.display = "none";
                document.body.appendChild(ifrm);

                var messageCallback = function(event) {
                    if (event.origin !== window.location.origin || ifrm.contentWindow !== event.source) {
                        return;
                    }

                    var oauth = parseCallback(event.data);
                    processCallback(oauth, initPromise);

                    document.body.removeChild(ifrm);
                    window.removeEventListener("message", messageCallback);
                };

                window.addEventListener("message", messageCallback);
            };

            var options = {};
            switch (initOptions.onLoad) {
                case 'check-sso':
                    if (loginIframe.enable) {
                        setupCheckLoginIframe().then(function() {
                            checkLoginIframe().then(function (unchanged) {
                                if (!unchanged) {
                                    kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
                                } else {
                                    initPromise.setSuccess();
                                }
                            }).catch(function (error) {
                                initPromise.setError(error);
                            });
                        });
                    } else {
                        kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
                    }
                    break;
                case 'login-required':
                    doLogin(true);
                    break;
                default:
                    throw 'Invalid value for onLoad';
            }
        }

        function processInit() {
            var callback = parseCallback(window.location.href);

            if (callback) {
                window.history.replaceState(window.history.state, null, callback.newUrl);
            }

            if (callback && callback.valid) {
                return setupCheckLoginIframe().then(function() {
                    processCallback(callback, initPromise);
                }).catch(function (error) {
                    initPromise.setError(error);
                });
            } else if (initOptions) {
                if (initOptions.token && initOptions.refreshToken) {
                    setToken(initOptions.token, initOptions.refreshToken, initOptions.idToken);

                    if (loginIframe.enable) {
                        setupCheckLoginIframe().then(function() {
                            checkLoginIframe().then(function (unchanged) {
                                if (unchanged) {
                                    kc.onAuthSuccess && kc.onAuthSuccess();
                                    initPromise.setSuccess();
                                    scheduleCheckIframe();
                                } else {
                                    initPromise.setSuccess();
                                }
                            }).catch(function (error) {
                                initPromise.setError(error);
                            });
                        });
                    } else {
                        kc.updateToken(-1).then(function() {
                            kc.onAuthSuccess && kc.onAuthSuccess();
                            initPromise.setSuccess();
                        }).catch(function(error) {
                            kc.onAuthError && kc.onAuthError();
                            if (initOptions.onLoad) {
                                onLoad();
                            } else {
                                initPromise.setError(error);
                            }
                        });
                    }
                } else if (initOptions.onLoad) {
                    onLoad();
                } else {
                    initPromise.setSuccess();
                }
            } else {
                initPromise.setSuccess();
            }
        }

        function domReady() {
            var promise = createPromise();

            var checkReadyState = function () {
                if (document.readyState === 'interactive' || document.readyState === 'complete') {
                    document.removeEventListener('readystatechange', checkReadyState);
                    promise.setSuccess();
                }
            };
            document.addEventListener('readystatechange', checkReadyState);

            checkReadyState(); // just in case the event was already fired and we missed it (in case the init is done later than at the load time, i.e. it's done from code)

            return promise.promise;
        }

        configPromise.then(function () {
            domReady()
                .then(check3pCookiesSupported)
                .then(processInit)
                .catch(function (error) {
                    promise.setError(error);
                });
        });
        configPromise.catch(function (error) {
            promise.setError(error);
        });

        return promise.promise;
    };

    kc.login = function (options) {
        return adapter.login(options);
    };

    function generateRandomData(len) {
        // use web crypto APIs if possible
        var array = null;
        var crypto = window.crypto || window.msCrypto;
        if (crypto && crypto.getRandomValues && window.Uint8Array) {
            array = new Uint8Array(len);
            crypto.getRandomValues(array);
            return array;
        }

        // fallback to Math random
        array = new Array(len);
        for (var j = 0; j < array.length; j++) {
            array[j] = Math.floor(256 * Math.random());
        }
        return array;
    }

    function generateCodeVerifier(len) {
        return generateRandomString(len, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
    }

    function generateRandomString(len, alphabet){
        var randomData = generateRandomData(len);
        var chars = new Array(len);
        for (var i = 0; i < len; i++) {
            chars[i] = alphabet.charCodeAt(randomData[i] % alphabet.length);
        }
        return String.fromCharCode.apply(null, chars);
    }

    function generatePkceChallenge(pkceMethod, codeVerifier) {
        switch (pkceMethod) {
            // The use of the "plain" method is considered insecure and therefore not supported.
            case "S256":
                // hash codeVerifier, then encode as url-safe base64 without padding
                var hashBytes = new Uint8Array(js_sha256__WEBPACK_IMPORTED_MODULE_1__.arrayBuffer(codeVerifier));
                var encodedHash = base64_js__WEBPACK_IMPORTED_MODULE_0__.fromByteArray(hashBytes)
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_')
                    .replace(/\=/g, '');
                return encodedHash;
            default:
                throw 'Invalid value for pkceMethod';
        }
    }

    function buildClaimsParameter(requestedAcr){
        var claims = {
            id_token: {
                acr: requestedAcr
            }
        };
        return JSON.stringify(claims);
    }

    kc.createLoginUrl = function(options) {
        var state = createUUID();
        var nonce = createUUID();

        var redirectUri = adapter.redirectUri(options);

        var callbackState = {
            state: state,
            nonce: nonce,
            redirectUri: encodeURIComponent(redirectUri)
        };

        if (options && options.prompt) {
            callbackState.prompt = options.prompt;
        }

        var baseUrl;
        if (options && options.action == 'register') {
            baseUrl = kc.endpoints.register();
        } else {
            baseUrl = kc.endpoints.authorize();
        }

        var scope = options && options.scope || kc.scope;
        if (!scope) {
            // if scope is not set, default to "openid"
            scope = "openid";
        } else if (scope.indexOf("openid") === -1) {
            // if openid scope is missing, prefix the given scopes with it
            scope = "openid " + scope;
        }

        var url = baseUrl
            + '?client_id=' + encodeURIComponent(kc.clientId)
            + '&redirect_uri=' + encodeURIComponent(redirectUri)
            + '&state=' + encodeURIComponent(state)
            + '&response_mode=' + encodeURIComponent(kc.responseMode)
            + '&response_type=' + encodeURIComponent(kc.responseType)
            + '&scope=' + encodeURIComponent(scope);
        if (useNonce) {
            url = url + '&nonce=' + encodeURIComponent(nonce);
        }

        if (options && options.prompt) {
            url += '&prompt=' + encodeURIComponent(options.prompt);
        }

        if (options && options.maxAge) {
            url += '&max_age=' + encodeURIComponent(options.maxAge);
        }

        if (options && options.loginHint) {
            url += '&login_hint=' + encodeURIComponent(options.loginHint);
        }

        if (options && options.idpHint) {
            url += '&kc_idp_hint=' + encodeURIComponent(options.idpHint);
        }

        if (options && options.action && options.action != 'register') {
            url += '&kc_action=' + encodeURIComponent(options.action);
        }

        if (options && options.locale) {
            url += '&ui_locales=' + encodeURIComponent(options.locale);
        }

        if (options && options.acr) {
            var claimsParameter = buildClaimsParameter(options.acr);
            url += '&claims=' + encodeURIComponent(claimsParameter);
        }

        if (kc.pkceMethod) {
            var codeVerifier = generateCodeVerifier(96);
            callbackState.pkceCodeVerifier = codeVerifier;
            var pkceChallenge = generatePkceChallenge(kc.pkceMethod, codeVerifier);
            url += '&code_challenge=' + pkceChallenge;
            url += '&code_challenge_method=' + kc.pkceMethod;
        }

        callbackStorage.add(callbackState);

        return url;
    };

    kc.logout = function(options) {
        return adapter.logout(options);
    };

    kc.createLogoutUrl = function(options) {
        var url = kc.endpoints.logout()
            + '?client_id=' + encodeURIComponent(kc.clientId)
            + '&post_logout_redirect_uri=' + encodeURIComponent(adapter.redirectUri(options, false));

        if (kc.idToken) {
            url += '&id_token_hint=' + encodeURIComponent(kc.idToken);
        }

        return url;
    };

    kc.register = function (options) {
        return adapter.register(options);
    };

    kc.createRegisterUrl = function(options) {
        if (!options) {
            options = {};
        }
        options.action = 'register';
        return kc.createLoginUrl(options);
    };

    kc.createAccountUrl = function(options) {
        var realm = getRealmUrl();
        var url = undefined;
        if (typeof realm !== 'undefined') {
            url = realm
            + '/account'
            + '?referrer=' + encodeURIComponent(kc.clientId)
            + '&referrer_uri=' + encodeURIComponent(adapter.redirectUri(options));
        }
        return url;
    };

    kc.accountManagement = function() {
        return adapter.accountManagement();
    };

    kc.hasRealmRole = function (role) {
        var access = kc.realmAccess;
        return !!access && access.roles.indexOf(role) >= 0;
    };

    kc.hasResourceRole = function(role, resource) {
        if (!kc.resourceAccess) {
            return false;
        }

        var access = kc.resourceAccess[resource || kc.clientId];
        return !!access && access.roles.indexOf(role) >= 0;
    };

    kc.loadUserProfile = function() {
        var url = getRealmUrl() + '/account';
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.setRequestHeader('Accept', 'application/json');
        req.setRequestHeader('Authorization', 'bearer ' + kc.token);

        var promise = createPromise();

        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    kc.profile = JSON.parse(req.responseText);
                    promise.setSuccess(kc.profile);
                } else {
                    promise.setError();
                }
            }
        };

        req.send();

        return promise.promise;
    };

    kc.loadUserInfo = function() {
        var url = kc.endpoints.userinfo();
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.setRequestHeader('Accept', 'application/json');
        req.setRequestHeader('Authorization', 'bearer ' + kc.token);

        var promise = createPromise();

        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    kc.userInfo = JSON.parse(req.responseText);
                    promise.setSuccess(kc.userInfo);
                } else {
                    promise.setError();
                }
            }
        };

        req.send();

        return promise.promise;
    };

    kc.isTokenExpired = function(minValidity) {
        if (!kc.tokenParsed || (!kc.refreshToken && kc.flow != 'implicit' )) {
            throw 'Not authenticated';
        }

        if (kc.timeSkew == null) {
            logInfo('[KEYCLOAK] Unable to determine if token is expired as timeskew is not set');
            return true;
        }

        var expiresIn = kc.tokenParsed['exp'] - Math.ceil(new Date().getTime() / 1000) + kc.timeSkew;
        if (minValidity) {
            if (isNaN(minValidity)) {
                throw 'Invalid minValidity';
            }
            expiresIn -= minValidity;
        }
        return expiresIn < 0;
    };

    kc.updateToken = function(minValidity) {
        var promise = createPromise();

        if (!kc.refreshToken) {
            promise.setError();
            return promise.promise;
        }

        minValidity = minValidity || 5;

        var exec = function() {
            var refreshToken = false;
            if (minValidity == -1) {
                refreshToken = true;
                logInfo('[KEYCLOAK] Refreshing token: forced refresh');
            } else if (!kc.tokenParsed || kc.isTokenExpired(minValidity)) {
                refreshToken = true;
                logInfo('[KEYCLOAK] Refreshing token: token expired');
            }

            if (!refreshToken) {
                promise.setSuccess(false);
            } else {
                var params = 'grant_type=refresh_token&' + 'refresh_token=' + kc.refreshToken;
                var url = kc.endpoints.token();

                refreshQueue.push(promise);

                if (refreshQueue.length == 1) {
                    var req = new XMLHttpRequest();
                    req.open('POST', url, true);
                    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    req.withCredentials = true;

                    params += '&client_id=' + encodeURIComponent(kc.clientId);

                    var timeLocal = new Date().getTime();

                    req.onreadystatechange = function () {
                        if (req.readyState == 4) {
                            if (req.status == 200) {
                                logInfo('[KEYCLOAK] Token refreshed');

                                timeLocal = (timeLocal + new Date().getTime()) / 2;

                                var tokenResponse = JSON.parse(req.responseText);

                                setToken(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], timeLocal);

                                kc.onAuthRefreshSuccess && kc.onAuthRefreshSuccess();
                                for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                                    p.setSuccess(true);
                                }
                            } else {
                                logWarn('[KEYCLOAK] Failed to refresh token');

                                if (req.status == 400) {
                                    kc.clearToken();
                                }

                                kc.onAuthRefreshError && kc.onAuthRefreshError();
                                for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                                    p.setError(true);
                                }
                            }
                        }
                    };

                    req.send(params);
                }
            }
        };

        if (loginIframe.enable) {
            var iframePromise = checkLoginIframe();
            iframePromise.then(function() {
                exec();
            }).catch(function(error) {
                promise.setError(error);
            });
        } else {
            exec();
        }

        return promise.promise;
    };

    kc.clearToken = function() {
        if (kc.token) {
            setToken(null, null, null);
            kc.onAuthLogout && kc.onAuthLogout();
            if (kc.loginRequired) {
                kc.login();
            }
        }
    };

    function getRealmUrl() {
        if (typeof kc.authServerUrl !== 'undefined') {
            if (kc.authServerUrl.charAt(kc.authServerUrl.length - 1) == '/') {
                return kc.authServerUrl + 'realms/' + encodeURIComponent(kc.realm);
            } else {
                return kc.authServerUrl + '/realms/' + encodeURIComponent(kc.realm);
            }
        } else {
            return undefined;
        }
    }

    function getOrigin() {
        if (!window.location.origin) {
            return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
        } else {
            return window.location.origin;
        }
    }

    function processCallback(oauth, promise) {
        var code = oauth.code;
        var error = oauth.error;
        var prompt = oauth.prompt;

        var timeLocal = new Date().getTime();

        if (oauth['kc_action_status']) {
            kc.onActionUpdate && kc.onActionUpdate(oauth['kc_action_status']);
        }

        if (error) {
            if (prompt != 'none') {
                var errorData = { error: error, error_description: oauth.error_description };
                kc.onAuthError && kc.onAuthError(errorData);
                promise && promise.setError(errorData);
            } else {
                promise && promise.setSuccess();
            }
            return;
        } else if ((kc.flow != 'standard') && (oauth.access_token || oauth.id_token)) {
            authSuccess(oauth.access_token, null, oauth.id_token, true);
        }

        if ((kc.flow != 'implicit') && code) {
            var params = 'code=' + code + '&grant_type=authorization_code';
            var url = kc.endpoints.token();

            var req = new XMLHttpRequest();
            req.open('POST', url, true);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            params += '&client_id=' + encodeURIComponent(kc.clientId);
            params += '&redirect_uri=' + oauth.redirectUri;

            if (oauth.pkceCodeVerifier) {
                params += '&code_verifier=' + oauth.pkceCodeVerifier;
            }

            req.withCredentials = true;

            req.onreadystatechange = function() {
                if (req.readyState == 4) {
                    if (req.status == 200) {

                        var tokenResponse = JSON.parse(req.responseText);
                        authSuccess(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], kc.flow === 'standard');
                        scheduleCheckIframe();
                    } else {
                        kc.onAuthError && kc.onAuthError();
                        promise && promise.setError();
                    }
                }
            };

            req.send(params);
        }

        function authSuccess(accessToken, refreshToken, idToken, fulfillPromise) {
            timeLocal = (timeLocal + new Date().getTime()) / 2;

            setToken(accessToken, refreshToken, idToken, timeLocal);

            if (useNonce && ((kc.tokenParsed && kc.tokenParsed.nonce != oauth.storedNonce) ||
                (kc.refreshTokenParsed && kc.refreshTokenParsed.nonce != oauth.storedNonce) ||
                (kc.idTokenParsed && kc.idTokenParsed.nonce != oauth.storedNonce))) {

                logInfo('[KEYCLOAK] Invalid nonce, clearing token');
                kc.clearToken();
                promise && promise.setError();
            } else {
                if (fulfillPromise) {
                    kc.onAuthSuccess && kc.onAuthSuccess();
                    promise && promise.setSuccess();
                }
            }
        }

    }

    function loadConfig(url) {
        var promise = createPromise();
        var configUrl;

        if (!config) {
            configUrl = 'keycloak.json';
        } else if (typeof config === 'string') {
            configUrl = config;
        }

        function setupOidcEndoints(oidcConfiguration) {
            if (! oidcConfiguration) {
                kc.endpoints = {
                    authorize: function() {
                        return getRealmUrl() + '/protocol/openid-connect/auth';
                    },
                    token: function() {
                        return getRealmUrl() + '/protocol/openid-connect/token';
                    },
                    logout: function() {
                        return getRealmUrl() + '/protocol/openid-connect/logout';
                    },
                    checkSessionIframe: function() {
                        var src = getRealmUrl() + '/protocol/openid-connect/login-status-iframe.html';
                        if (kc.iframeVersion) {
                            src = src + '?version=' + kc.iframeVersion;
                        }
                        return src;
                    },
                    thirdPartyCookiesIframe: function() {
                        var src = getRealmUrl() + '/protocol/openid-connect/3p-cookies/step1.html';
                        if (kc.iframeVersion) {
                            src = src + '?version=' + kc.iframeVersion;
                        }
                        return src;
                    },
                    register: function() {
                        return getRealmUrl() + '/protocol/openid-connect/registrations';
                    },
                    userinfo: function() {
                        return getRealmUrl() + '/protocol/openid-connect/userinfo';
                    }
                };
            } else {
                kc.endpoints = {
                    authorize: function() {
                        return oidcConfiguration.authorization_endpoint;
                    },
                    token: function() {
                        return oidcConfiguration.token_endpoint;
                    },
                    logout: function() {
                        if (!oidcConfiguration.end_session_endpoint) {
                            throw "Not supported by the OIDC server";
                        }
                        return oidcConfiguration.end_session_endpoint;
                    },
                    checkSessionIframe: function() {
                        if (!oidcConfiguration.check_session_iframe) {
                            throw "Not supported by the OIDC server";
                        }
                        return oidcConfiguration.check_session_iframe;
                    },
                    register: function() {
                        throw 'Redirection to "Register user" page not supported in standard OIDC mode';
                    },
                    userinfo: function() {
                        if (!oidcConfiguration.userinfo_endpoint) {
                            throw "Not supported by the OIDC server";
                        }
                        return oidcConfiguration.userinfo_endpoint;
                    }
                };
            }
        }

        if (configUrl) {
            var req = new XMLHttpRequest();
            req.open('GET', configUrl, true);
            req.setRequestHeader('Accept', 'application/json');

            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200 || fileLoaded(req)) {
                        var config = JSON.parse(req.responseText);

                        kc.authServerUrl = config['auth-server-url'];
                        kc.realm = config['realm'];
                        kc.clientId = config['resource'];
                        setupOidcEndoints(null);
                        promise.setSuccess();
                    } else {
                        promise.setError();
                    }
                }
            };

            req.send();
        } else {
            if (!config.clientId) {
                throw 'clientId missing';
            }

            kc.clientId = config.clientId;

            var oidcProvider = config['oidcProvider'];
            if (!oidcProvider) {
                if (!config['url']) {
                    var scripts = document.getElementsByTagName('script');
                    for (var i = 0; i < scripts.length; i++) {
                        if (scripts[i].src.match(/.*keycloak\.js/)) {
                            config.url = scripts[i].src.substr(0, scripts[i].src.indexOf('/js/keycloak.js'));
                            break;
                        }
                    }
                }
                if (!config.realm) {
                    throw 'realm missing';
                }

                kc.authServerUrl = config.url;
                kc.realm = config.realm;
                setupOidcEndoints(null);
                promise.setSuccess();
            } else {
                if (typeof oidcProvider === 'string') {
                    var oidcProviderConfigUrl;
                    if (oidcProvider.charAt(oidcProvider.length - 1) == '/') {
                        oidcProviderConfigUrl = oidcProvider + '.well-known/openid-configuration';
                    } else {
                        oidcProviderConfigUrl = oidcProvider + '/.well-known/openid-configuration';
                    }
                    var req = new XMLHttpRequest();
                    req.open('GET', oidcProviderConfigUrl, true);
                    req.setRequestHeader('Accept', 'application/json');

                    req.onreadystatechange = function () {
                        if (req.readyState == 4) {
                            if (req.status == 200 || fileLoaded(req)) {
                                var oidcProviderConfig = JSON.parse(req.responseText);
                                setupOidcEndoints(oidcProviderConfig);
                                promise.setSuccess();
                            } else {
                                promise.setError();
                            }
                        }
                    };

                    req.send();
                } else {
                    setupOidcEndoints(oidcProvider);
                    promise.setSuccess();
                }
            }
        }

        return promise.promise;
    }

    function fileLoaded(xhr) {
        return xhr.status == 0 && xhr.responseText && xhr.responseURL.startsWith('file:');
    }

    function setToken(token, refreshToken, idToken, timeLocal) {
        if (kc.tokenTimeoutHandle) {
            clearTimeout(kc.tokenTimeoutHandle);
            kc.tokenTimeoutHandle = null;
        }

        if (refreshToken) {
            kc.refreshToken = refreshToken;
            kc.refreshTokenParsed = decodeToken(refreshToken);
        } else {
            delete kc.refreshToken;
            delete kc.refreshTokenParsed;
        }

        if (idToken) {
            kc.idToken = idToken;
            kc.idTokenParsed = decodeToken(idToken);
        } else {
            delete kc.idToken;
            delete kc.idTokenParsed;
        }

        if (token) {
            kc.token = token;
            kc.tokenParsed = decodeToken(token);
            kc.sessionId = kc.tokenParsed.session_state;
            kc.authenticated = true;
            kc.subject = kc.tokenParsed.sub;
            kc.realmAccess = kc.tokenParsed.realm_access;
            kc.resourceAccess = kc.tokenParsed.resource_access;

            if (timeLocal) {
                kc.timeSkew = Math.floor(timeLocal / 1000) - kc.tokenParsed.iat;
            }

            if (kc.timeSkew != null) {
                logInfo('[KEYCLOAK] Estimated time difference between browser and server is ' + kc.timeSkew + ' seconds');

                if (kc.onTokenExpired) {
                    var expiresIn = (kc.tokenParsed['exp'] - (new Date().getTime() / 1000) + kc.timeSkew) * 1000;
                    logInfo('[KEYCLOAK] Token expires in ' + Math.round(expiresIn / 1000) + ' s');
                    if (expiresIn <= 0) {
                        kc.onTokenExpired();
                    } else {
                        kc.tokenTimeoutHandle = setTimeout(kc.onTokenExpired, expiresIn);
                    }
                }
            }
        } else {
            delete kc.token;
            delete kc.tokenParsed;
            delete kc.subject;
            delete kc.realmAccess;
            delete kc.resourceAccess;

            kc.authenticated = false;
        }
    }

    function decodeToken(str) {
        str = str.split('.')[1];

        str = str.replace(/-/g, '+');
        str = str.replace(/_/g, '/');
        switch (str.length % 4) {
            case 0:
                break;
            case 2:
                str += '==';
                break;
            case 3:
                str += '=';
                break;
            default:
                throw 'Invalid token';
        }

        str = decodeURIComponent(escape(atob(str)));

        str = JSON.parse(str);
        return str;
    }

    function createUUID() {
        var hexDigits = '0123456789abcdef';
        var s = generateRandomString(36, hexDigits).split("");
        s[14] = '4';
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = '-';
        var uuid = s.join('');
        return uuid;
    }

    function parseCallback(url) {
        var oauth = parseCallbackUrl(url);
        if (!oauth) {
            return;
        }

        var oauthState = callbackStorage.get(oauth.state);

        if (oauthState) {
            oauth.valid = true;
            oauth.redirectUri = oauthState.redirectUri;
            oauth.storedNonce = oauthState.nonce;
            oauth.prompt = oauthState.prompt;
            oauth.pkceCodeVerifier = oauthState.pkceCodeVerifier;
        }

        return oauth;
    }

    function parseCallbackUrl(url) {
        var supportedParams;
        switch (kc.flow) {
            case 'standard':
                supportedParams = ['code', 'state', 'session_state', 'kc_action_status'];
                break;
            case 'implicit':
                supportedParams = ['access_token', 'token_type', 'id_token', 'state', 'session_state', 'expires_in', 'kc_action_status'];
                break;
            case 'hybrid':
                supportedParams = ['access_token', 'token_type', 'id_token', 'code', 'state', 'session_state', 'expires_in', 'kc_action_status'];
                break;
        }

        supportedParams.push('error');
        supportedParams.push('error_description');
        supportedParams.push('error_uri');

        var queryIndex = url.indexOf('?');
        var fragmentIndex = url.indexOf('#');

        var newUrl;
        var parsed;

        if (kc.responseMode === 'query' && queryIndex !== -1) {
            newUrl = url.substring(0, queryIndex);
            parsed = parseCallbackParams(url.substring(queryIndex + 1, fragmentIndex !== -1 ? fragmentIndex : url.length), supportedParams);
            if (parsed.paramsString !== '') {
                newUrl += '?' + parsed.paramsString;
            }
            if (fragmentIndex !== -1) {
                newUrl += url.substring(fragmentIndex);
            }
        } else if (kc.responseMode === 'fragment' && fragmentIndex !== -1) {
            newUrl = url.substring(0, fragmentIndex);
            parsed = parseCallbackParams(url.substring(fragmentIndex + 1), supportedParams);
            if (parsed.paramsString !== '') {
                newUrl += '#' + parsed.paramsString;
            }
        }

        if (parsed && parsed.oauthParams) {
            if (kc.flow === 'standard' || kc.flow === 'hybrid') {
                if ((parsed.oauthParams.code || parsed.oauthParams.error) && parsed.oauthParams.state) {
                    parsed.oauthParams.newUrl = newUrl;
                    return parsed.oauthParams;
                }
            } else if (kc.flow === 'implicit') {
                if ((parsed.oauthParams.access_token || parsed.oauthParams.error) && parsed.oauthParams.state) {
                    parsed.oauthParams.newUrl = newUrl;
                    return parsed.oauthParams;
                }
            }
        }
    }

    function parseCallbackParams(paramsString, supportedParams) {
        var p = paramsString.split('&');
        var result = {
            paramsString: '',
            oauthParams: {}
        };
        for (var i = 0; i < p.length; i++) {
            var split = p[i].indexOf("=");
            var key = p[i].slice(0, split);
            if (supportedParams.indexOf(key) !== -1) {
                result.oauthParams[key] = p[i].slice(split + 1);
            } else {
                if (result.paramsString !== '') {
                    result.paramsString += '&';
                }
                result.paramsString += p[i];
            }
        }
        return result;
    }

    function createPromise() {
        // Need to create a native Promise which also preserves the
        // interface of the custom promise type previously used by the API
        var p = {
            setSuccess: function(result) {
                p.resolve(result);
            },

            setError: function(result) {
                p.reject(result);
            }
        };
        p.promise = new Promise(function(resolve, reject) {
            p.resolve = resolve;
            p.reject = reject;
        });

        p.promise.success = function(callback) {
            logPromiseDeprecation();

            this.then(function handleSuccess(value) {
                callback(value);
            });

            return this;
        };

        p.promise.error = function(callback) {
            logPromiseDeprecation();

            this.catch(function handleError(error) {
                callback(error);
            });

            return this;
        };

        return p;
    }

    // Function to extend existing native Promise with timeout
    function applyTimeoutToPromise(promise, timeout, errorMessage) {
        var timeoutHandle = null;
        var timeoutPromise = new Promise(function (resolve, reject) {
            timeoutHandle = setTimeout(function () {
                reject({ "error": errorMessage || "Promise is not settled within timeout of " + timeout + "ms" });
            }, timeout);
        });

        return Promise.race([promise, timeoutPromise]).finally(function () {
            clearTimeout(timeoutHandle);
        });
    }

    function setupCheckLoginIframe() {
        var promise = createPromise();

        if (!loginIframe.enable) {
            promise.setSuccess();
            return promise.promise;
        }

        if (loginIframe.iframe) {
            promise.setSuccess();
            return promise.promise;
        }

        var iframe = document.createElement('iframe');
        loginIframe.iframe = iframe;

        iframe.onload = function() {
            var authUrl = kc.endpoints.authorize();
            if (authUrl.charAt(0) === '/') {
                loginIframe.iframeOrigin = getOrigin();
            } else {
                loginIframe.iframeOrigin = authUrl.substring(0, authUrl.indexOf('/', 8));
            }
            promise.setSuccess();
        };

        var src = kc.endpoints.checkSessionIframe();
        iframe.setAttribute('src', src );
        iframe.setAttribute('title', 'keycloak-session-iframe' );
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        var messageCallback = function(event) {
            if ((event.origin !== loginIframe.iframeOrigin) || (loginIframe.iframe.contentWindow !== event.source)) {
                return;
            }

            if (!(event.data == 'unchanged' || event.data == 'changed' || event.data == 'error')) {
                return;
            }


            if (event.data != 'unchanged') {
                kc.clearToken();
            }

            var callbacks = loginIframe.callbackList.splice(0, loginIframe.callbackList.length);

            for (var i = callbacks.length - 1; i >= 0; --i) {
                var promise = callbacks[i];
                if (event.data == 'error') {
                    promise.setError();
                } else {
                    promise.setSuccess(event.data == 'unchanged');
                }
            }
        };

        window.addEventListener('message', messageCallback, false);

        return promise.promise;
    }

    function scheduleCheckIframe() {
        if (loginIframe.enable) {
            if (kc.token) {
                setTimeout(function() {
                    checkLoginIframe().then(function(unchanged) {
                        if (unchanged) {
                            scheduleCheckIframe();
                        }
                    });
                }, loginIframe.interval * 1000);
            }
        }
    }

    function checkLoginIframe() {
        var promise = createPromise();

        if (loginIframe.iframe && loginIframe.iframeOrigin ) {
            var msg = kc.clientId + ' ' + (kc.sessionId ? kc.sessionId : '');
            loginIframe.callbackList.push(promise);
            var origin = loginIframe.iframeOrigin;
            if (loginIframe.callbackList.length == 1) {
                loginIframe.iframe.contentWindow.postMessage(msg, origin);
            }
        } else {
            promise.setSuccess();
        }

        return promise.promise;
    }

    function check3pCookiesSupported() {
        var promise = createPromise();

        if (loginIframe.enable || kc.silentCheckSsoRedirectUri) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', kc.endpoints.thirdPartyCookiesIframe());
            iframe.setAttribute('title', 'keycloak-3p-check-iframe' );
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            var messageCallback = function(event) {
                if (iframe.contentWindow !== event.source) {
                    return;
                }

                if (event.data !== "supported" && event.data !== "unsupported") {
                    return;
                } else if (event.data === "unsupported") {
                    loginIframe.enable = false;
                    if (kc.silentCheckSsoFallback) {
                        kc.silentCheckSsoRedirectUri = false;
                    }
                    logWarn("[KEYCLOAK] 3rd party cookies aren't supported by this browser. checkLoginIframe and " +
                        "silent check-sso are not available.");
                }

                document.body.removeChild(iframe);
                window.removeEventListener("message", messageCallback);
                promise.setSuccess();
            };

            window.addEventListener('message', messageCallback, false);
        } else {
            promise.setSuccess();
        }

        return applyTimeoutToPromise(promise.promise, kc.messageReceiveTimeout, "Timeout when waiting for 3rd party check iframe message.");
    }

    function loadAdapter(type) {
        if (!type || type == 'default') {
            return {
                login: function(options) {
                    window.location.replace(kc.createLoginUrl(options));
                    return createPromise().promise;
                },

                logout: function(options) {
                    window.location.replace(kc.createLogoutUrl(options));
                    return createPromise().promise;
                },

                register: function(options) {
                    window.location.replace(kc.createRegisterUrl(options));
                    return createPromise().promise;
                },

                accountManagement : function() {
                    var accountUrl = kc.createAccountUrl();
                    if (typeof accountUrl !== 'undefined') {
                        window.location.href = accountUrl;
                    } else {
                        throw "Not supported by the OIDC server";
                    }
                    return createPromise().promise;
                },

                redirectUri: function(options, encodeHash) {

                    if (options && options.redirectUri) {
                        return options.redirectUri;
                    } else if (kc.redirectUri) {
                        return kc.redirectUri;
                    } else {
                        return location.href;
                    }
                }
            };
        }

        if (type == 'cordova') {
            loginIframe.enable = false;
            var cordovaOpenWindowWrapper = function(loginUrl, target, options) {
                if (window.cordova && window.cordova.InAppBrowser) {
                    // Use inappbrowser for IOS and Android if available
                    return window.cordova.InAppBrowser.open(loginUrl, target, options);
                } else {
                    return window.open(loginUrl, target, options);
                }
            };

            var shallowCloneCordovaOptions = function (userOptions) {
                if (userOptions && userOptions.cordovaOptions) {
                    return Object.keys(userOptions.cordovaOptions).reduce(function (options, optionName) {
                        options[optionName] = userOptions.cordovaOptions[optionName];
                        return options;
                    }, {});
                } else {
                    return {};
                }
            };

            var formatCordovaOptions = function (cordovaOptions) {
                return Object.keys(cordovaOptions).reduce(function (options, optionName) {
                    options.push(optionName+"="+cordovaOptions[optionName]);
                    return options;
                }, []).join(",");
            };

            var createCordovaOptions = function (userOptions) {
                var cordovaOptions = shallowCloneCordovaOptions(userOptions);
                cordovaOptions.location = 'no';
                if (userOptions && userOptions.prompt == 'none') {
                    cordovaOptions.hidden = 'yes';
                }
                return formatCordovaOptions(cordovaOptions);
            };

            return {
                login: function(options) {
                    var promise = createPromise();

                    var cordovaOptions = createCordovaOptions(options);
                    var loginUrl = kc.createLoginUrl(options);
                    var ref = cordovaOpenWindowWrapper(loginUrl, '_blank', cordovaOptions);
                    var completed = false;

                    var closed = false;
                    var closeBrowser = function() {
                        closed = true;
                        ref.close();
                    };

                    ref.addEventListener('loadstart', function(event) {
                        if (event.url.indexOf('http://localhost') == 0) {
                            var callback = parseCallback(event.url);
                            processCallback(callback, promise);
                            closeBrowser();
                            completed = true;
                        }
                    });

                    ref.addEventListener('loaderror', function(event) {
                        if (!completed) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                var callback = parseCallback(event.url);
                                processCallback(callback, promise);
                                closeBrowser();
                                completed = true;
                            } else {
                                promise.setError();
                                closeBrowser();
                            }
                        }
                    });

                    ref.addEventListener('exit', function(event) {
                        if (!closed) {
                            promise.setError({
                                reason: "closed_by_user"
                            });
                        }
                    });

                    return promise.promise;
                },

                logout: function(options) {
                    var promise = createPromise();

                    var logoutUrl = kc.createLogoutUrl(options);
                    var ref = cordovaOpenWindowWrapper(logoutUrl, '_blank', 'location=no,hidden=yes,clearcache=yes');

                    var error;

                    ref.addEventListener('loadstart', function(event) {
                        if (event.url.indexOf('http://localhost') == 0) {
                            ref.close();
                        }
                    });

                    ref.addEventListener('loaderror', function(event) {
                        if (event.url.indexOf('http://localhost') == 0) {
                            ref.close();
                        } else {
                            error = true;
                            ref.close();
                        }
                    });

                    ref.addEventListener('exit', function(event) {
                        if (error) {
                            promise.setError();
                        } else {
                            kc.clearToken();
                            promise.setSuccess();
                        }
                    });

                    return promise.promise;
                },

                register : function(options) {
                    var promise = createPromise();
                    var registerUrl = kc.createRegisterUrl();
                    var cordovaOptions = createCordovaOptions(options);
                    var ref = cordovaOpenWindowWrapper(registerUrl, '_blank', cordovaOptions);
                    ref.addEventListener('loadstart', function(event) {
                        if (event.url.indexOf('http://localhost') == 0) {
                            ref.close();
                            var oauth = parseCallback(event.url);
                            processCallback(oauth, promise);
                        }
                    });
                    return promise.promise;
                },

                accountManagement : function() {
                    var accountUrl = kc.createAccountUrl();
                    if (typeof accountUrl !== 'undefined') {
                        var ref = cordovaOpenWindowWrapper(accountUrl, '_blank', 'location=no');
                        ref.addEventListener('loadstart', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                ref.close();
                            }
                        });
                    } else {
                        throw "Not supported by the OIDC server";
                    }
                },

                redirectUri: function(options) {
                    return 'http://localhost';
                }
            }
        }

        if (type == 'cordova-native') {
            loginIframe.enable = false;

            return {
                login: function(options) {
                    var promise = createPromise();
                    var loginUrl = kc.createLoginUrl(options);

                    universalLinks.subscribe('keycloak', function(event) {
                        universalLinks.unsubscribe('keycloak');
                        window.cordova.plugins.browsertab.close();
                        var oauth = parseCallback(event.url);
                        processCallback(oauth, promise);
                    });

                    window.cordova.plugins.browsertab.openUrl(loginUrl);
                    return promise.promise;
                },

                logout: function(options) {
                    var promise = createPromise();
                    var logoutUrl = kc.createLogoutUrl(options);

                    universalLinks.subscribe('keycloak', function(event) {
                        universalLinks.unsubscribe('keycloak');
                        window.cordova.plugins.browsertab.close();
                        kc.clearToken();
                        promise.setSuccess();
                    });

                    window.cordova.plugins.browsertab.openUrl(logoutUrl);
                    return promise.promise;
                },

                register : function(options) {
                    var promise = createPromise();
                    var registerUrl = kc.createRegisterUrl(options);
                    universalLinks.subscribe('keycloak' , function(event) {
                        universalLinks.unsubscribe('keycloak');
                        window.cordova.plugins.browsertab.close();
                        var oauth = parseCallback(event.url);
                        processCallback(oauth, promise);
                    });
                    window.cordova.plugins.browsertab.openUrl(registerUrl);
                    return promise.promise;

                },

                accountManagement : function() {
                    var accountUrl = kc.createAccountUrl();
                    if (typeof accountUrl !== 'undefined') {
                        window.cordova.plugins.browsertab.openUrl(accountUrl);
                    } else {
                        throw "Not supported by the OIDC server";
                    }
                },

                redirectUri: function(options) {
                    if (options && options.redirectUri) {
                        return options.redirectUri;
                    } else if (kc.redirectUri) {
                        return kc.redirectUri;
                    } else {
                        return "http://localhost";
                    }
                }
            }
        }

        throw 'invalid adapter type: ' + type;
    }

    var LocalStorage = function() {
        if (!(this instanceof LocalStorage)) {
            return new LocalStorage();
        }

        localStorage.setItem('kc-test', 'test');
        localStorage.removeItem('kc-test');

        var cs = this;

        function clearExpired() {
            var time = new Date().getTime();
            for (var i = 0; i < localStorage.length; i++)  {
                var key = localStorage.key(i);
                if (key && key.indexOf('kc-callback-') == 0) {
                    var value = localStorage.getItem(key);
                    if (value) {
                        try {
                            var expires = JSON.parse(value).expires;
                            if (!expires || expires < time) {
                                localStorage.removeItem(key);
                            }
                        } catch (err) {
                            localStorage.removeItem(key);
                        }
                    }
                }
            }
        }

        cs.get = function(state) {
            if (!state) {
                return;
            }

            var key = 'kc-callback-' + state;
            var value = localStorage.getItem(key);
            if (value) {
                localStorage.removeItem(key);
                value = JSON.parse(value);
            }

            clearExpired();
            return value;
        };

        cs.add = function(state) {
            clearExpired();

            var key = 'kc-callback-' + state.state;
            state.expires = new Date().getTime() + (60 * 60 * 1000);
            localStorage.setItem(key, JSON.stringify(state));
        };
    };

    var CookieStorage = function() {
        if (!(this instanceof CookieStorage)) {
            return new CookieStorage();
        }

        var cs = this;

        cs.get = function(state) {
            if (!state) {
                return;
            }

            var value = getCookie('kc-callback-' + state);
            setCookie('kc-callback-' + state, '', cookieExpiration(-100));
            if (value) {
                return JSON.parse(value);
            }
        };

        cs.add = function(state) {
            setCookie('kc-callback-' + state.state, JSON.stringify(state), cookieExpiration(60));
        };

        cs.removeItem = function(key) {
            setCookie(key, '', cookieExpiration(-100));
        };

        var cookieExpiration = function (minutes) {
            var exp = new Date();
            exp.setTime(exp.getTime() + (minutes*60*1000));
            return exp;
        };

        var getCookie = function (key) {
            var name = key + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        };

        var setCookie = function (key, value, expirationDate) {
            var cookie = key + '=' + value + '; '
                + 'expires=' + expirationDate.toUTCString() + '; ';
            document.cookie = cookie;
        };
    };

    function createCallbackStorage() {
        try {
            return new LocalStorage();
        } catch (err) {
        }

        return new CookieStorage();
    }

    function createLogger(fn) {
        return function() {
            if (kc.enableLogging) {
                fn.apply(console, Array.prototype.slice.call(arguments));
            }
        };
    }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZ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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7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O0FBQzdDLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hELGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0I7Ozs7Ozs7VUN6c0QvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9BYm9ydENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0RlZmF1bHRIdHRwQ2xpZW50LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9EZWZhdWx0UmVjb25uZWN0UG9saWN5LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0ZldGNoSHR0cENsaWVudC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSGFuZHNoYWtlUHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0hlYWRlck5hbWVzLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9IdHRwQ2xpZW50LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9IdHRwQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSHViQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSHViQ29ubmVjdGlvbkJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0lIdWJQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSVRyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSnNvbkh1YlByb3RvY29sLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9Mb2dnZXJzLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9Mb25nUG9sbGluZ1RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vU3ViamVjdC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vVGV4dE1lc3NhZ2VGb3JtYXQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL1V0aWxzLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9XZWJTb2NrZXRUcmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL1hockh0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9qcy1zaGEyNTYvc3JjL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL2luZGV4LnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL0FjdGl2YXRlU2NlbmUudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvT2dTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9PcGVuU2NlbmVOb3Rlcy50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9zZXJ2ZXItcHVzaC50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9rZXljbG9hay1qcy9kaXN0L2tleWNsb2FrLm1qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIFJvdWdoIHBvbHlmaWxsIG9mIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9BYm9ydENvbnRyb2xsZXJcclxuLy8gV2UgZG9uJ3QgYWN0dWFsbHkgZXZlciB1c2UgdGhlIEFQSSBiZWluZyBwb2x5ZmlsbGVkLCB3ZSBhbHdheXMgdXNlIHRoZSBwb2x5ZmlsbCBiZWNhdXNlXHJcbi8vIGl0J3MgYSB2ZXJ5IG5ldyBBUEkgcmlnaHQgbm93LlxyXG4vLyBOb3QgZXhwb3J0ZWQgZnJvbSBpbmRleC5cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBBYm9ydENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5faXNBYm9ydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbmFib3J0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGFib3J0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNBYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uYWJvcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25hYm9ydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHNpZ25hbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldCBhYm9ydGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Fib3J0ZWQ7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWJvcnRDb250cm9sbGVyLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgQWJvcnRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBGZXRjaEh0dHBDbGllbnQgfSBmcm9tIFwiLi9GZXRjaEh0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCIuL0h0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBYaHJIdHRwQ2xpZW50IH0gZnJvbSBcIi4vWGhySHR0cENsaWVudFwiO1xyXG4vKiogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh0dHBDbGllbnR9LiAqL1xyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEh0dHBDbGllbnQgZXh0ZW5kcyBIdHRwQ2xpZW50IHtcclxuICAgIC8qKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkRlZmF1bHRIdHRwQ2xpZW50fSwgdXNpbmcgdGhlIHByb3ZpZGVkIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSUxvZ2dlcn0gdG8gbG9nIG1lc3NhZ2VzLiAqL1xyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBpZiAodHlwZW9mIGZldGNoICE9PSBcInVuZGVmaW5lZFwiIHx8IFBsYXRmb3JtLmlzTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9odHRwQ2xpZW50ID0gbmV3IEZldGNoSHR0cENsaWVudChsb2dnZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IG5ldyBYaHJIdHRwQ2xpZW50KGxvZ2dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2FibGUgSHR0cENsaWVudCBmb3VuZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBzZW5kKHJlcXVlc3QpIHtcclxuICAgICAgICAvLyBDaGVjayB0aGF0IGFib3J0IHdhcyBub3Qgc2lnbmFsZWQgYmVmb3JlIGNhbGxpbmcgc2VuZFxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsICYmIHJlcXVlc3QuYWJvcnRTaWduYWwuYWJvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFib3J0RXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC5tZXRob2QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG1ldGhvZCBkZWZpbmVkLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC51cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBkZWZpbmVkLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LnNlbmQocmVxdWVzdCk7XHJcbiAgICB9XHJcbiAgICBnZXRDb29raWVTdHJpbmcodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQuZ2V0Q29va2llU3RyaW5nKHVybCk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVmYXVsdEh0dHBDbGllbnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyAwLCAyLCAxMCwgMzAgc2Vjb25kIGRlbGF5cyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHRzLlxyXG5jb25zdCBERUZBVUxUX1JFVFJZX0RFTEFZU19JTl9NSUxMSVNFQ09ORFMgPSBbMCwgMjAwMCwgMTAwMDAsIDMwMDAwLCBudWxsXTtcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0UmVjb25uZWN0UG9saWN5IHtcclxuICAgIGNvbnN0cnVjdG9yKHJldHJ5RGVsYXlzKSB7XHJcbiAgICAgICAgdGhpcy5fcmV0cnlEZWxheXMgPSByZXRyeURlbGF5cyAhPT0gdW5kZWZpbmVkID8gWy4uLnJldHJ5RGVsYXlzLCBudWxsXSA6IERFRkFVTFRfUkVUUllfREVMQVlTX0lOX01JTExJU0VDT05EUztcclxuICAgIH1cclxuICAgIG5leHRSZXRyeURlbGF5SW5NaWxsaXNlY29uZHMocmV0cnlDb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JldHJ5RGVsYXlzW3JldHJ5Q29udGV4dC5wcmV2aW91c1JldHJ5Q291bnRdO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURlZmF1bHRSZWNvbm5lY3RQb2xpY3kuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gYW4gSFRUUCByZXF1ZXN0IGZhaWxzLiAqL1xyXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdHRwRXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1c0NvZGUgVGhlIEhUVFAgc3RhdHVzIGNvZGUgcmVwcmVzZW50ZWQgYnkgdGhpcyBlcnJvci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZXJyb3JNZXNzYWdlLCBzdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIoYCR7ZXJyb3JNZXNzYWdlfTogU3RhdHVzIGNvZGUgJyR7c3RhdHVzQ29kZX0nYCk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gYSB0aW1lb3V0IGVsYXBzZXMuICovXHJcbmV4cG9ydCBjbGFzcyBUaW1lb3V0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLlRpbWVvdXRFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yTWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yTWVzc2FnZSA9IFwiQSB0aW1lb3V0IG9jY3VycmVkLlwiKSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gYW4gYWN0aW9uIGlzIGFib3J0ZWQuICovXHJcbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEFib3J0RXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2UgPSBcIkFuIGFib3J0IG9jY3VycmVkLlwiKSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gdGhlIHNlbGVjdGVkIHRyYW5zcG9ydCBpcyB1bnN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gKi9cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBVbnN1cHBvcnRlZFRyYW5zcG9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5VbnN1cHBvcnRlZFRyYW5zcG9ydEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0ge0h0dHBUcmFuc3BvcnRUeXBlfSB0cmFuc3BvcnQgVGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHR0cFRyYW5zcG9ydFR5cGV9IHRoaXMgZXJyb3Igb2NjdXJlZCBvbi5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgdHJhbnNwb3J0KSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XHJcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSAnVW5zdXBwb3J0ZWRUcmFuc3BvcnRFcnJvcic7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLyoqIEVycm9yIHRocm93biB3aGVuIHRoZSBzZWxlY3RlZCB0cmFuc3BvcnQgaXMgZGlzYWJsZWQgYnkgdGhlIGJyb3dzZXIuICovXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgRGlzYWJsZWRUcmFuc3BvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuRGlzYWJsZWRUcmFuc3BvcnRFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIHtIdHRwVHJhbnNwb3J0VHlwZX0gdHJhbnNwb3J0IFRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh0dHBUcmFuc3BvcnRUeXBlfSB0aGlzIGVycm9yIG9jY3VyZWQgb24uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHRyYW5zcG9ydCkge1xyXG4gICAgICAgIGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gJ0Rpc2FibGVkVHJhbnNwb3J0RXJyb3InO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiB0aGUgc2VsZWN0ZWQgdHJhbnNwb3J0IGNhbm5vdCBiZSBzdGFydGVkLiAqL1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIEZhaWxlZFRvU3RhcnRUcmFuc3BvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuRmFpbGVkVG9TdGFydFRyYW5zcG9ydEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0ge0h0dHBUcmFuc3BvcnRUeXBlfSB0cmFuc3BvcnQgVGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHR0cFRyYW5zcG9ydFR5cGV9IHRoaXMgZXJyb3Igb2NjdXJlZCBvbi5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgdHJhbnNwb3J0KSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XHJcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSAnRmFpbGVkVG9TdGFydFRyYW5zcG9ydEVycm9yJztcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gdGhlIG5lZ290aWF0aW9uIHdpdGggdGhlIHNlcnZlciBmYWlsZWQgdG8gY29tcGxldGUuICovXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgRmFpbGVkVG9OZWdvdGlhdGVXaXRoU2VydmVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkZhaWxlZFRvTmVnb3RpYXRlV2l0aFNlcnZlckVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9ICdGYWlsZWRUb05lZ290aWF0ZVdpdGhTZXJ2ZXJFcnJvcic7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLyoqIEVycm9yIHRocm93biB3aGVuIG11bHRpcGxlIGVycm9ycyBoYXZlIG9jY3VyZWQuICovXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlRXJyb3JzIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5BZ2dyZWdhdGVFcnJvcnN9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqIEBwYXJhbSB7RXJyb3JbXX0gaW5uZXJFcnJvcnMgVGhlIGNvbGxlY3Rpb24gb2YgZXJyb3JzIHRoaXMgZXJyb3IgaXMgYWdncmVnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGlubmVyRXJyb3JzKSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckVycm9ycyA9IGlubmVyRXJyb3JzO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVycm9ycy5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEFib3J0RXJyb3IsIEh0dHBFcnJvciwgVGltZW91dEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCIuL0h0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtLCBnZXRHbG9iYWxUaGlzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuZXhwb3J0IGNsYXNzIEZldGNoSHR0cENsaWVudCBleHRlbmRzIEh0dHBDbGllbnQge1xyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAvLyBJbiBvcmRlciB0byBpZ25vcmUgdGhlIGR5bmFtaWMgcmVxdWlyZSBpbiB3ZWJwYWNrIGJ1aWxkcyB3ZSBuZWVkIHRvIGRvIHRoaXMgbWFnaWNcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogVFMgZG9lc24ndCBrbm93IGFib3V0IHRoZXNlIG5hbWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVGdW5jID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09IFwiZnVuY3Rpb25cIiA/IF9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fIDogcmVxdWlyZTtcclxuICAgICAgICAgICAgLy8gQ29va2llcyBhcmVuJ3QgYXV0b21hdGljYWxseSBoYW5kbGVkIGluIE5vZGUgc28gd2UgbmVlZCB0byBhZGQgYSBDb29raWVKYXIgdG8gcHJlc2VydmUgY29va2llcyBhY3Jvc3MgcmVxdWVzdHNcclxuICAgICAgICAgICAgdGhpcy5famFyID0gbmV3IChyZXF1aXJlRnVuYyhcInRvdWdoLWNvb2tpZVwiKSkuQ29va2llSmFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZldGNoVHlwZSA9IHJlcXVpcmVGdW5jKFwibm9kZS1mZXRjaFwiKTtcclxuICAgICAgICAgICAgLy8gbm9kZS1mZXRjaCBkb2Vzbid0IGhhdmUgYSBuaWNlIEFQSSBmb3IgZ2V0dGluZyBhbmQgc2V0dGluZyBjb29raWVzXHJcbiAgICAgICAgICAgIC8vIGZldGNoLWNvb2tpZSB3aWxsIHdyYXAgYSBmZXRjaCBpbXBsZW1lbnRhdGlvbiB3aXRoIGEgZGVmYXVsdCBDb29raWVKYXIgb3IgYSBwcm92aWRlZCBvbmVcclxuICAgICAgICAgICAgdGhpcy5fZmV0Y2hUeXBlID0gcmVxdWlyZUZ1bmMoXCJmZXRjaC1jb29raWVcIikodGhpcy5fZmV0Y2hUeXBlLCB0aGlzLl9qYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZmV0Y2hUeXBlID0gZmV0Y2guYmluZChnZXRHbG9iYWxUaGlzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAvLyBJbiBvcmRlciB0byBpZ25vcmUgdGhlIGR5bmFtaWMgcmVxdWlyZSBpbiB3ZWJwYWNrIGJ1aWxkcyB3ZSBuZWVkIHRvIGRvIHRoaXMgbWFnaWNcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogVFMgZG9lc24ndCBrbm93IGFib3V0IHRoZXNlIG5hbWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVGdW5jID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09IFwiZnVuY3Rpb25cIiA/IF9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fIDogcmVxdWlyZTtcclxuICAgICAgICAgICAgLy8gTm9kZSBuZWVkcyBFdmVudExpc3RlbmVyIG1ldGhvZHMgb24gQWJvcnRDb250cm9sbGVyIHdoaWNoIG91ciBjdXN0b20gcG9seWZpbGwgZG9lc24ndCBwcm92aWRlXHJcbiAgICAgICAgICAgIHRoaXMuX2Fib3J0Q29udHJvbGxlclR5cGUgPSByZXF1aXJlRnVuYyhcImFib3J0LWNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hYm9ydENvbnRyb2xsZXJUeXBlID0gQWJvcnRDb250cm9sbGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgYXN5bmMgc2VuZChyZXF1ZXN0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBhYm9ydCB3YXMgbm90IHNpZ25hbGVkIGJlZm9yZSBjYWxsaW5nIHNlbmRcclxuICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCAmJiByZXF1ZXN0LmFib3J0U2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEFib3J0RXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtZXRob2QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC51cmwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdXJsIGRlZmluZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgdGhpcy5fYWJvcnRDb250cm9sbGVyVHlwZSgpO1xyXG4gICAgICAgIGxldCBlcnJvcjtcclxuICAgICAgICAvLyBIb29rIG91ciBhYm9ydFNpZ25hbCBpbnRvIHRoZSBhYm9ydCBjb250cm9sbGVyXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBBYm9ydEVycm9yKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGEgdGltZW91dCBoYXMgYmVlbiBwYXNzZWQgaW4sIHNldHVwIGEgdGltZW91dCB0byBjYWxsIGFib3J0XHJcbiAgICAgICAgLy8gVHlwZSBuZWVkcyB0byBiZSBhbnkgdG8gZml0IHdpbmRvdy5zZXRUaW1lb3V0IGFuZCBOb2RlSlMuc2V0VGltZW91dFxyXG4gICAgICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbXNUaW1lb3V0ID0gcmVxdWVzdC50aW1lb3V0O1xyXG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgVGltZW91dCBmcm9tIEhUVFAgcmVxdWVzdC5gKTtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IFRpbWVvdXRFcnJvcigpO1xyXG4gICAgICAgICAgICB9LCBtc1RpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9mZXRjaFR5cGUocmVxdWVzdC51cmwsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IHJlcXVlc3QuY29udGVudCxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPT09IHRydWUgPyBcImluY2x1ZGVcIiA6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVxdWVzdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiLFxyXG4gICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBFcnJvciBmcm9tIEhUVFAgcmVxdWVzdC4gJHtlfS5gKTtcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmFib3J0U2lnbmFsLm9uYWJvcnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgZGVzZXJpYWxpemVDb250ZW50KHJlc3BvbnNlLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBIdHRwRXJyb3IoZXJyb3JNZXNzYWdlIHx8IHJlc3BvbnNlLnN0YXR1c1RleHQsIHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkZXNlcmlhbGl6ZUNvbnRlbnQocmVzcG9uc2UsIHJlcXVlc3QucmVzcG9uc2VUeXBlKTtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgY29udGVudDtcclxuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQsIHBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29va2llU3RyaW5nKHVybCkge1xyXG4gICAgICAgIGxldCBjb29raWVzID0gXCJcIjtcclxuICAgICAgICBpZiAoUGxhdGZvcm0uaXNOb2RlICYmIHRoaXMuX2phcikge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiB1bnVzZWQgdmFyaWFibGVcclxuICAgICAgICAgICAgdGhpcy5famFyLmdldENvb2tpZXModXJsLCAoZSwgYykgPT4gY29va2llcyA9IGMuam9pbihcIjsgXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZXM7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVDb250ZW50KHJlc3BvbnNlLCByZXNwb25zZVR5cGUpIHtcclxuICAgIGxldCBjb250ZW50O1xyXG4gICAgc3dpdGNoIChyZXNwb25zZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiYXJyYXlidWZmZXJcIjpcclxuICAgICAgICAgICAgY29udGVudCA9IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJibG9iXCI6XHJcbiAgICAgICAgY2FzZSBcImRvY3VtZW50XCI6XHJcbiAgICAgICAgY2FzZSBcImpzb25cIjpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlVHlwZX0gaXMgbm90IHN1cHBvcnRlZC5gKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb250ZW50ID0gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZldGNoSHR0cENsaWVudC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IFRleHRNZXNzYWdlRm9ybWF0IH0gZnJvbSBcIi4vVGV4dE1lc3NhZ2VGb3JtYXRcIjtcclxuaW1wb3J0IHsgaXNBcnJheUJ1ZmZlciB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgSGFuZHNoYWtlUHJvdG9jb2wge1xyXG4gICAgLy8gSGFuZHNoYWtlIHJlcXVlc3QgaXMgYWx3YXlzIEpTT05cclxuICAgIHdyaXRlSGFuZHNoYWtlUmVxdWVzdChoYW5kc2hha2VSZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIFRleHRNZXNzYWdlRm9ybWF0LndyaXRlKEpTT04uc3RyaW5naWZ5KGhhbmRzaGFrZVJlcXVlc3QpKTtcclxuICAgIH1cclxuICAgIHBhcnNlSGFuZHNoYWtlUmVzcG9uc2UoZGF0YSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGF0YTtcclxuICAgICAgICBsZXQgcmVtYWluaW5nRGF0YTtcclxuICAgICAgICBpZiAoaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xyXG4gICAgICAgICAgICAvLyBGb3JtYXQgaXMgYmluYXJ5IGJ1dCBzdGlsbCBuZWVkIHRvIHJlYWQgSlNPTiB0ZXh0IGZyb20gaGFuZHNoYWtlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmFyeURhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9ySW5kZXggPSBiaW5hcnlEYXRhLmluZGV4T2YoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yQ29kZSk7XHJcbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1lc3NhZ2UgaXMgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29udGVudCBiZWZvcmUgc2VwYXJhdG9yIGlzIGhhbmRzaGFrZSByZXNwb25zZVxyXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBjb250ZW50IGFmdGVyIGlzIGFkZGl0aW9uYWwgbWVzc2FnZXNcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VMZW5ndGggPSBzZXBhcmF0b3JJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiaW5hcnlEYXRhLnNsaWNlKDAsIHJlc3BvbnNlTGVuZ3RoKSkpO1xyXG4gICAgICAgICAgICByZW1haW5pbmdEYXRhID0gKGJpbmFyeURhdGEuYnl0ZUxlbmd0aCA+IHJlc3BvbnNlTGVuZ3RoKSA/IGJpbmFyeURhdGEuc2xpY2UocmVzcG9uc2VMZW5ndGgpLmJ1ZmZlciA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvckluZGV4ID0gdGV4dERhdGEuaW5kZXhPZihUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXNzYWdlIGlzIGluY29tcGxldGUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnRlbnQgYmVmb3JlIHNlcGFyYXRvciBpcyBoYW5kc2hha2UgcmVzcG9uc2VcclxuICAgICAgICAgICAgLy8gb3B0aW9uYWwgY29udGVudCBhZnRlciBpcyBhZGRpdGlvbmFsIG1lc3NhZ2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlTGVuZ3RoID0gc2VwYXJhdG9ySW5kZXggKyAxO1xyXG4gICAgICAgICAgICBtZXNzYWdlRGF0YSA9IHRleHREYXRhLnN1YnN0cmluZygwLCByZXNwb25zZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJlbWFpbmluZ0RhdGEgPSAodGV4dERhdGEubGVuZ3RoID4gcmVzcG9uc2VMZW5ndGgpID8gdGV4dERhdGEuc3Vic3RyaW5nKHJlc3BvbnNlTGVuZ3RoKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEF0IHRoaXMgcG9pbnQgd2Ugc2hvdWxkIGhhdmUganVzdCB0aGUgc2luZ2xlIGhhbmRzaGFrZSBtZXNzYWdlXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBUZXh0TWVzc2FnZUZvcm1hdC5wYXJzZShtZXNzYWdlRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKG1lc3NhZ2VzWzBdKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UudHlwZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhIGhhbmRzaGFrZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZU1lc3NhZ2UgPSByZXNwb25zZTtcclxuICAgICAgICAvLyBtdWx0aXBsZSBtZXNzYWdlcyBjb3VsZCBoYXZlIGFycml2ZWQgd2l0aCBoYW5kc2hha2VcclxuICAgICAgICAvLyByZXR1cm4gYWRkaXRpb25hbCBkYXRhIHRvIGJlIHBhcnNlZCBhcyB1c3VhbCwgb3IgbnVsbCBpZiBhbGwgcGFyc2VkXHJcbiAgICAgICAgcmV0dXJuIFtyZW1haW5pbmdEYXRhLCByZXNwb25zZU1lc3NhZ2VdO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhhbmRzaGFrZVByb3RvY29sLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuZXhwb3J0IGNsYXNzIEhlYWRlck5hbWVzIHtcclxufVxyXG5IZWFkZXJOYW1lcy5BdXRob3JpemF0aW9uID0gXCJBdXRob3JpemF0aW9uXCI7XHJcbkhlYWRlck5hbWVzLkNvb2tpZSA9IFwiQ29va2llXCI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhlYWRlck5hbWVzLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLyoqIFJlcHJlc2VudHMgYW4gSFRUUCByZXNwb25zZS4gKi9cclxuZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlLCBzdGF0dXNUZXh0LCBjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcclxuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuLyoqIEFic3RyYWN0aW9uIG92ZXIgYW4gSFRUUCBjbGllbnQuXHJcbiAqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgYW4gYWJzdHJhY3Rpb24gb3ZlciBhbiBIVFRQIGNsaWVudCBzbyB0aGF0IGEgZGlmZmVyZW50IGltcGxlbWVudGF0aW9uIGNhbiBiZSBwcm92aWRlZCBvbiBkaWZmZXJlbnQgcGxhdGZvcm1zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnQge1xyXG4gICAgZ2V0KHVybCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoe1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHBvc3QodXJsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZCh7XHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSh1cmwsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKHtcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKiogR2V0cyBhbGwgY29va2llcyB0aGF0IGFwcGx5IHRvIHRoZSBzcGVjaWZpZWQgVVJMLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0aGF0IHRoZSBjb29raWVzIGFyZSB2YWxpZCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIGFsbCB0aGUga2V5LXZhbHVlIGNvb2tpZSBwYWlycyBmb3IgdGhlIHNwZWNpZmllZCBVUkwuXHJcbiAgICAgKi9cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGdldENvb2tpZVN0cmluZyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdHRwQ2xpZW50LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgRGVmYXVsdEh0dHBDbGllbnQgfSBmcm9tIFwiLi9EZWZhdWx0SHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdGVFcnJvcnMsIERpc2FibGVkVHJhbnNwb3J0RXJyb3IsIEZhaWxlZFRvTmVnb3RpYXRlV2l0aFNlcnZlckVycm9yLCBGYWlsZWRUb1N0YXJ0VHJhbnNwb3J0RXJyb3IsIEh0dHBFcnJvciwgVW5zdXBwb3J0ZWRUcmFuc3BvcnRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBIZWFkZXJOYW1lcyB9IGZyb20gXCIuL0hlYWRlck5hbWVzXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBIdHRwVHJhbnNwb3J0VHlwZSwgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IExvbmdQb2xsaW5nVHJhbnNwb3J0IH0gZnJvbSBcIi4vTG9uZ1BvbGxpbmdUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydCB9IGZyb20gXCIuL1NlcnZlclNlbnRFdmVudHNUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBjcmVhdGVMb2dnZXIsIGdldFVzZXJBZ2VudEhlYWRlciwgUGxhdGZvcm0gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBXZWJTb2NrZXRUcmFuc3BvcnQgfSBmcm9tIFwiLi9XZWJTb2NrZXRUcmFuc3BvcnRcIjtcclxuY29uc3QgTUFYX1JFRElSRUNUUyA9IDEwMDtcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ29ubmVjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX3N0b3BQcm9taXNlUmVzb2x2ZXIgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX25lZ290aWF0ZVZlcnNpb24gPSAxO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKG9wdGlvbnMubG9nZ2VyKTtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLl9yZXNvbHZlVXJsKHVybCk7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCA9IG9wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudDtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID09PSBcImJvb2xlYW5cIiB8fCBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLndpdGhDcmVkZW50aWFscztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndpdGhDcmVkZW50aWFscyBvcHRpb24gd2FzIG5vdCBhICdib29sZWFuJyBvciAndW5kZWZpbmVkJyB2YWx1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9ucy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0ID09PSB1bmRlZmluZWQgPyAxMDAgKiAxMDAwIDogb3B0aW9ucy50aW1lb3V0O1xyXG4gICAgICAgIGxldCB3ZWJTb2NrZXRNb2R1bGUgPSBudWxsO1xyXG4gICAgICAgIGxldCBldmVudFNvdXJjZU1vZHVsZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKFBsYXRmb3JtLmlzTm9kZSAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAvLyBJbiBvcmRlciB0byBpZ25vcmUgdGhlIGR5bmFtaWMgcmVxdWlyZSBpbiB3ZWJwYWNrIGJ1aWxkcyB3ZSBuZWVkIHRvIGRvIHRoaXMgbWFnaWNcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogVFMgZG9lc24ndCBrbm93IGFib3V0IHRoZXNlIG5hbWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVGdW5jID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09IFwiZnVuY3Rpb25cIiA/IF9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fIDogcmVxdWlyZTtcclxuICAgICAgICAgICAgd2ViU29ja2V0TW9kdWxlID0gcmVxdWlyZUZ1bmMoXCJ3c1wiKTtcclxuICAgICAgICAgICAgZXZlbnRTb3VyY2VNb2R1bGUgPSByZXF1aXJlRnVuYyhcImV2ZW50c291cmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVBsYXRmb3JtLmlzTm9kZSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiICYmICFvcHRpb25zLldlYlNvY2tldCkge1xyXG4gICAgICAgICAgICBvcHRpb25zLldlYlNvY2tldCA9IFdlYlNvY2tldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoUGxhdGZvcm0uaXNOb2RlICYmICFvcHRpb25zLldlYlNvY2tldCkge1xyXG4gICAgICAgICAgICBpZiAod2ViU29ja2V0TW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLldlYlNvY2tldCA9IHdlYlNvY2tldE1vZHVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVBsYXRmb3JtLmlzTm9kZSAmJiB0eXBlb2YgRXZlbnRTb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgIW9wdGlvbnMuRXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChQbGF0Zm9ybS5pc05vZGUgJiYgIW9wdGlvbnMuRXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBldmVudFNvdXJjZU1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5FdmVudFNvdXJjZSA9IGV2ZW50U291cmNlTW9kdWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2h0dHBDbGllbnQgPSBvcHRpb25zLmh0dHBDbGllbnQgfHwgbmV3IERlZmF1bHRIdHRwQ2xpZW50KHRoaXMuX2xvZ2dlcik7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi87XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLm9ucmVjZWl2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gbnVsbDtcclxuICAgIH1cclxuICAgIGFzeW5jIHN0YXJ0KHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgdHJhbnNmZXJGb3JtYXQgPSB0cmFuc2ZlckZvcm1hdCB8fCBUcmFuc2ZlckZvcm1hdC5CaW5hcnk7XHJcbiAgICAgICAgQXJnLmlzSW4odHJhbnNmZXJGb3JtYXQsIFRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTdGFydGluZyBjb25uZWN0aW9uIHdpdGggdHJhbnNmZXIgZm9ybWF0ICcke1RyYW5zZmVyRm9ybWF0W3RyYW5zZmVyRm9ybWF0XX0nLmApO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc3RhcnQgYW4gSHR0cENvbm5lY3Rpb24gdGhhdCBpcyBub3QgaW4gdGhlICdEaXNjb25uZWN0ZWQnIHN0YXRlLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IFwiQ29ubmVjdGluZ1wiIC8qIENvbm5lY3RpbmcgKi87XHJcbiAgICAgICAgdGhpcy5fc3RhcnRJbnRlcm5hbFByb21pc2UgPSB0aGlzLl9zdGFydEludGVybmFsKHRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9zdGFydEludGVybmFsUHJvbWlzZTtcclxuICAgICAgICAvLyBUaGUgVHlwZVNjcmlwdCBjb21waWxlciB0aGlua3MgdGhhdCBjb25uZWN0aW9uU3RhdGUgbXVzdCBiZSBDb25uZWN0aW5nIGhlcmUuIFRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIGlzIHdyb25nLlxyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGluZ1wiIC8qIERpc2Nvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgLy8gc3RvcCgpIHdhcyBjYWxsZWQgYW5kIHRyYW5zaXRpb25lZCB0aGUgY2xpZW50IGludG8gdGhlIERpc2Nvbm5lY3Rpbmcgc3RhdGUuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkZhaWxlZCB0byBzdGFydCB0aGUgSHR0cENvbm5lY3Rpb24gYmVmb3JlIHN0b3AoKSB3YXMgY2FsbGVkLlwiO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgLy8gV2UgY2Fubm90IGF3YWl0IHN0b3BQcm9taXNlIGluc2lkZSBzdGFydEludGVybmFsIHNpbmNlIHN0b3BJbnRlcm5hbCBhd2FpdHMgdGhlIHN0YXJ0SW50ZXJuYWxQcm9taXNlLlxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zdG9wUHJvbWlzZTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgLy8gc3RvcCgpIHdhcyBjYWxsZWQgYW5kIHRyYW5zaXRpb25lZCB0aGUgY2xpZW50IGludG8gdGhlIERpc2Nvbm5lY3Rpbmcgc3RhdGUuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkh0dHBDb25uZWN0aW9uLnN0YXJ0SW50ZXJuYWwgY29tcGxldGVkIGdyYWNlZnVsbHkgYnV0IGRpZG4ndCBlbnRlciB0aGUgY29ubmVjdGlvbiBpbnRvIHRoZSBjb25uZWN0ZWQgc3RhdGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzZW5kIGRhdGEgaWYgdGhlIGNvbm5lY3Rpb24gaXMgbm90IGluIHRoZSAnQ29ubmVjdGVkJyBTdGF0ZS5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX3NlbmRRdWV1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUXVldWUgPSBuZXcgVHJhbnNwb3J0U2VuZFF1ZXVlKHRoaXMudHJhbnNwb3J0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVHJhbnNwb3J0IHdpbGwgbm90IGJlIG51bGwgaWYgc3RhdGUgaXMgY29ubmVjdGVkXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRRdWV1ZS5zZW5kKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RvcChlcnJvcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3AoJHtlcnJvcn0pIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wKCR7ZXJyb3J9KSBpZ25vcmVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGluZyBzdGF0ZS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3BQcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovO1xyXG4gICAgICAgIHRoaXMuX3N0b3BQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgLy8gRG9uJ3QgY29tcGxldGUgc3RvcCgpIHVudGlsIHN0b3BDb25uZWN0aW9uKCkgY29tcGxldGVzLlxyXG4gICAgICAgICAgICB0aGlzLl9zdG9wUHJvbWlzZVJlc29sdmVyID0gcmVzb2x2ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBzdG9wSW50ZXJuYWwgc2hvdWxkIG5ldmVyIHRocm93IHNvIGp1c3Qgb2JzZXJ2ZSBpdC5cclxuICAgICAgICBhd2FpdCB0aGlzLl9zdG9wSW50ZXJuYWwoZXJyb3IpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX3N0b3BQcm9taXNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgX3N0b3BJbnRlcm5hbChlcnJvcikge1xyXG4gICAgICAgIC8vIFNldCBlcnJvciBhcyBzb29uIGFzIHBvc3NpYmxlIG90aGVyd2lzZSB0aGVyZSBpcyBhIHJhY2UgYmV0d2VlblxyXG4gICAgICAgIC8vIHRoZSB0cmFuc3BvcnQgY2xvc2luZyBhbmQgcHJvdmlkaW5nIGFuIGVycm9yIGFuZCB0aGUgZXJyb3IgZnJvbSBhIGNsb3NlIG1lc3NhZ2VcclxuICAgICAgICAvLyBXZSB3b3VsZCBwcmVmZXIgdGhlIGNsb3NlIG1lc3NhZ2UgZXJyb3IuXHJcbiAgICAgICAgdGhpcy5fc3RvcEVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRJbnRlcm5hbFByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXhjZXB0aW9uIGlzIHJldHVybmVkIHRvIHRoZSB1c2VyIGFzIGEgcmVqZWN0ZWQgUHJvbWlzZSBmcm9tIHRoZSBzdGFydCBtZXRob2QuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRoZSB0cmFuc3BvcnQncyBvbmNsb3NlIHdpbGwgdHJpZ2dlciBzdG9wQ29ubmVjdGlvbiB3aGljaCB3aWxsIHJ1biBvdXIgb25jbG9zZSBldmVudC5cclxuICAgICAgICAvLyBUaGUgdHJhbnNwb3J0IHNob3VsZCBhbHdheXMgYmUgc2V0IGlmIGN1cnJlbnRseSBjb25uZWN0ZWQuIElmIGl0IHdhc24ndCBzZXQsIGl0J3MgbGlrZWx5IGJlY2F1c2VcclxuICAgICAgICAvLyBzdG9wIHdhcyBjYWxsZWQgZHVyaW5nIHN0YXJ0KCkgYW5kIHN0YXJ0KCkgZmFpbGVkLlxyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy50cmFuc3BvcnQuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgSHR0cENvbm5lY3Rpb24udHJhbnNwb3J0LnN0b3AoKSB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9wQ29ubmVjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJIdHRwQ29ubmVjdGlvbi50cmFuc3BvcnQgaXMgdW5kZWZpbmVkIGluIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBiZWNhdXNlIHN0YXJ0KCkgZmFpbGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBfc3RhcnRJbnRlcm5hbCh0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBiYXNlIHVybCBhbmQgdGhlIGFjY2VzcyB0b2tlbiBmYWN0b3J5IHNpbmNlIHRoZXkgbWF5IGNoYW5nZVxyXG4gICAgICAgIC8vIGFzIHBhcnQgb2YgbmVnb3RpYXRpbmdcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSA9IHRoaXMuX29wdGlvbnMuYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNraXBOZWdvdGlhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudHJhbnNwb3J0ID09PSBIdHRwVHJhbnNwb3J0VHlwZS5XZWJTb2NrZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBhZGQgYSBjb25uZWN0aW9uIElEIGluIHRoaXMgY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdGhpcy5fY29uc3RydWN0VHJhbnNwb3J0KEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBqdXN0IGNhbGwgY29ubmVjdCBkaXJlY3RseSBpbiB0aGlzIGNhc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZmFsbGJhY2sgb3IgbmVnb3RpYXRlIGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zdGFydFRyYW5zcG9ydCh1cmwsIHRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5lZ290aWF0aW9uIGNhbiBvbmx5IGJlIHNraXBwZWQgd2hlbiB1c2luZyB0aGUgV2ViU29ja2V0IHRyYW5zcG9ydCBkaXJlY3RseS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmVnb3RpYXRlUmVzcG9uc2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZGlyZWN0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVnb3RpYXRlUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9nZXROZWdvdGlhdGlvblJlc3BvbnNlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHVzZXIgdHJpZXMgdG8gc3RvcCB0aGUgY29ubmVjdGlvbiB3aGVuIGl0IGlzIGJlaW5nIHN0YXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovIHx8IHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbm5lY3Rpb24gd2FzIHN0b3BwZWQgZHVyaW5nIG5lZ290aWF0aW9uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ290aWF0ZVJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuZWdvdGlhdGVSZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS5Qcm90b2NvbFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGV0ZWN0ZWQgYSBjb25uZWN0aW9uIGF0dGVtcHQgdG8gYW4gQVNQLk5FVCBTaWduYWxSIFNlcnZlci4gVGhpcyBjbGllbnQgb25seSBzdXBwb3J0cyBjb25uZWN0aW5nIHRvIGFuIEFTUC5ORVQgQ29yZSBTaWduYWxSIFNlcnZlci4gU2VlIGh0dHBzOi8vYWthLm1zL3NpZ25hbHItY29yZS1kaWZmZXJlbmNlcyBmb3IgZGV0YWlscy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gbmVnb3RpYXRlUmVzcG9uc2UudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmVnb3RpYXRlUmVzcG9uc2UuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBhY2Nlc3MgdG9rZW4gZmFjdG9yeSB3aXRoIG9uZSB0aGF0IHVzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJldHVybmVkIGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IG5lZ290aWF0ZVJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkgPSAoKSA9PiBhY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RzKys7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChuZWdvdGlhdGVSZXNwb25zZS51cmwgJiYgcmVkaXJlY3RzIDwgTUFYX1JFRElSRUNUUyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RzID09PSBNQVhfUkVESVJFQ1RTICYmIG5lZ290aWF0ZVJlc3BvbnNlLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5lZ290aWF0ZSByZWRpcmVjdGlvbiBsaW1pdCBleGNlZWRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9jcmVhdGVUcmFuc3BvcnQodXJsLCB0aGlzLl9vcHRpb25zLnRyYW5zcG9ydCwgbmVnb3RpYXRlUmVzcG9uc2UsIHRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQgaW5zdGFuY2VvZiBMb25nUG9sbGluZ1RyYW5zcG9ydCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcy5pbmhlcmVudEtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJDb25uZWN0aW5nXCIgLyogQ29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBjb25uZWN0aW9uIHRyYW5zaXRpb25zIHRvIHRoZSBjb25uZWN0ZWQgc3RhdGUgcHJpb3IgdG8gY29tcGxldGluZyB0aGlzLnN0YXJ0SW50ZXJuYWxQcm9taXNlLlxyXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQoKSB3aWxsIGhhbmRsZSB0aGUgY2FzZSB3aGVuIHN0b3Agd2FzIGNhbGxlZCBhbmQgc3RhcnRJbnRlcm5hbCBleGl0cyBzdGlsbCBpbiB0aGUgZGlzY29ubmVjdGluZyBzdGF0ZS5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiVGhlIEh0dHBDb25uZWN0aW9uIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc3RvcCgpIGlzIHdhaXRpbmcgb24gdXMgdmlhIHRoaXMuc3RhcnRJbnRlcm5hbFByb21pc2Ugc28ga2VlcCB0aGlzLnRyYW5zcG9ydCBhcm91bmQgc28gaXQgY2FuIGNsZWFuIHVwLlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IGNhc2Ugc3RhcnRJbnRlcm5hbCBjYW4gZXhpdCBpbiBuZWl0aGVyIHRoZSBjb25uZWN0ZWQgbm9yIGRpc2Nvbm5lY3RlZCBzdGF0ZSBiZWNhdXNlIHN0b3BDb25uZWN0aW9uKClcclxuICAgICAgICAgICAgLy8gd2lsbCB0cmFuc2l0aW9uIHRvIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUuIHN0YXJ0KCkgd2lsbCB3YWl0IGZvciB0aGUgdHJhbnNpdGlvbiB1c2luZyB0aGUgc3RvcFByb21pc2UuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiRmFpbGVkIHRvIHN0YXJ0IHRoZSBjb25uZWN0aW9uOiBcIiArIGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLztcclxuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIC8vIGlmIHN0YXJ0IGZhaWxzLCBhbnkgYWN0aXZlIGNhbGxzIHRvIHN0b3AgYXNzdW1lIHRoYXQgc3RhcnQgd2lsbCBjb21wbGV0ZSB0aGUgc3RvcCBwcm9taXNlXHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3BQcm9taXNlUmVzb2x2ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIF9nZXROZWdvdGlhdGlvblJlc3BvbnNlKHVybCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAodGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyc1tIZWFkZXJOYW1lcy5BdXRob3JpemF0aW9uXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBnZXRVc2VyQWdlbnRIZWFkZXIoKTtcclxuICAgICAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmVnb3RpYXRlVXJsID0gdGhpcy5fcmVzb2x2ZU5lZ290aWF0ZVVybCh1cmwpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTZW5kaW5nIG5lZ290aWF0aW9uIHJlcXVlc3Q6ICR7bmVnb3RpYXRlVXJsfS5gKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2h0dHBDbGllbnQucG9zdChuZWdvdGlhdGVVcmwsIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMsIC4uLnRoaXMuX29wdGlvbnMuaGVhZGVycyB9LFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy5fb3B0aW9ucy50aW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLl9vcHRpb25zLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgc3RhdHVzIGNvZGUgcmV0dXJuZWQgZnJvbSBuZWdvdGlhdGUgJyR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0nYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5lZ290aWF0ZVJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50KTtcclxuICAgICAgICAgICAgaWYgKCFuZWdvdGlhdGVSZXNwb25zZS5uZWdvdGlhdGVWZXJzaW9uIHx8IG5lZ290aWF0ZVJlc3BvbnNlLm5lZ290aWF0ZVZlcnNpb24gPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOZWdvdGlhdGUgdmVyc2lvbiAwIGRvZXNuJ3QgdXNlIGNvbm5lY3Rpb25Ub2tlblxyXG4gICAgICAgICAgICAgICAgLy8gU28gd2Ugc2V0IGl0IGVxdWFsIHRvIGNvbm5lY3Rpb25JZCBzbyBhbGwgb3VyIGxvZ2ljIGNhbiB1c2UgY29ubmVjdGlvblRva2VuIHdpdGhvdXQgYmVpbmcgYXdhcmUgb2YgdGhlIG5lZ290aWF0ZSB2ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uVG9rZW4gPSBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5lZ290aWF0ZVJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJGYWlsZWQgdG8gY29tcGxldGUgbmVnb3RpYXRpb24gd2l0aCB0aGUgc2VydmVyOiBcIiArIGU7XHJcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgSHR0cEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zdGF0dXNDb2RlID09PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgKyBcIiBFaXRoZXIgdGhpcyBpcyBub3QgYSBTaWduYWxSIGVuZHBvaW50IG9yIHRoZXJlIGlzIGEgcHJveHkgYmxvY2tpbmcgdGhlIGNvbm5lY3Rpb24uXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBGYWlsZWRUb05lZ290aWF0ZVdpdGhTZXJ2ZXJFcnJvcihlcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlQ29ubmVjdFVybCh1cmwsIGNvbm5lY3Rpb25Ub2tlbikge1xyXG4gICAgICAgIGlmICghY29ubmVjdGlvblRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmwgKyAodXJsLmluZGV4T2YoXCI/XCIpID09PSAtMSA/IFwiP1wiIDogXCImXCIpICsgYGlkPSR7Y29ubmVjdGlvblRva2VufWA7XHJcbiAgICB9XHJcbiAgICBhc3luYyBfY3JlYXRlVHJhbnNwb3J0KHVybCwgcmVxdWVzdGVkVHJhbnNwb3J0LCBuZWdvdGlhdGVSZXNwb25zZSwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICBsZXQgY29ubmVjdFVybCA9IHRoaXMuX2NyZWF0ZUNvbm5lY3RVcmwodXJsLCBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uVG9rZW4pO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0lUcmFuc3BvcnQocmVxdWVzdGVkVHJhbnNwb3J0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gd2FzIHByb3ZpZGVkIGFuIGluc3RhbmNlIG9mIElUcmFuc3BvcnQsIHVzaW5nIHRoYXQgZGlyZWN0bHkuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHJlcXVlc3RlZFRyYW5zcG9ydDtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRUcmFuc3BvcnQoY29ubmVjdFVybCwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25JZCA9IG5lZ290aWF0ZVJlc3BvbnNlLmNvbm5lY3Rpb25JZDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cmFuc3BvcnRFeGNlcHRpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0cyA9IG5lZ290aWF0ZVJlc3BvbnNlLmF2YWlsYWJsZVRyYW5zcG9ydHMgfHwgW107XHJcbiAgICAgICAgbGV0IG5lZ290aWF0ZSA9IG5lZ290aWF0ZVJlc3BvbnNlO1xyXG4gICAgICAgIGZvciAoY29uc3QgZW5kcG9pbnQgb2YgdHJhbnNwb3J0cykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc3BvcnRPckVycm9yID0gdGhpcy5fcmVzb2x2ZVRyYW5zcG9ydE9yRXJyb3IoZW5kcG9pbnQsIHJlcXVlc3RlZFRyYW5zcG9ydCwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNwb3J0T3JFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgZXJyb3IgYW5kIGNvbnRpbnVlLCB3ZSBkb24ndCB3YW50IHRvIGNhdXNlIGEgcmUtbmVnb3RpYXRlIGluIHRoZXNlIGNhc2VzXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRFeGNlcHRpb25zLnB1c2goYCR7ZW5kcG9pbnQudHJhbnNwb3J0fSBmYWlsZWQ6YCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRFeGNlcHRpb25zLnB1c2godHJhbnNwb3J0T3JFcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5faXNJVHJhbnNwb3J0KHRyYW5zcG9ydE9yRXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydE9yRXJyb3I7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5lZ290aWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ290aWF0ZSA9IGF3YWl0IHRoaXMuX2dldE5lZ290aWF0aW9uUmVzcG9uc2UodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RVcmwgPSB0aGlzLl9jcmVhdGVDb25uZWN0VXJsKHVybCwgbmVnb3RpYXRlLmNvbm5lY3Rpb25Ub2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0VHJhbnNwb3J0KGNvbm5lY3RVcmwsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25JZCA9IG5lZ290aWF0ZS5jb25uZWN0aW9uSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEZhaWxlZCB0byBzdGFydCB0aGUgdHJhbnNwb3J0ICcke2VuZHBvaW50LnRyYW5zcG9ydH0nOiAke2V4fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5lZ290aWF0ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnRFeGNlcHRpb25zLnB1c2gobmV3IEZhaWxlZFRvU3RhcnRUcmFuc3BvcnRFcnJvcihgJHtlbmRwb2ludC50cmFuc3BvcnR9IGZhaWxlZDogJHtleH1gLCBIdHRwVHJhbnNwb3J0VHlwZVtlbmRwb2ludC50cmFuc3BvcnRdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gXCJDb25uZWN0aW5nXCIgLyogQ29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJGYWlsZWQgdG8gc2VsZWN0IHRyYW5zcG9ydCBiZWZvcmUgc3RvcCgpIHdhcyBjYWxsZWQuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zcG9ydEV4Y2VwdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9ycyhgVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIHNlcnZlciB3aXRoIGFueSBvZiB0aGUgYXZhaWxhYmxlIHRyYW5zcG9ydHMuICR7dHJhbnNwb3J0RXhjZXB0aW9ucy5qb2luKFwiIFwiKX1gLCB0cmFuc3BvcnRFeGNlcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJOb25lIG9mIHRoZSB0cmFuc3BvcnRzIHN1cHBvcnRlZCBieSB0aGUgY2xpZW50IGFyZSBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlci5cIikpO1xyXG4gICAgfVxyXG4gICAgX2NvbnN0cnVjdFRyYW5zcG9ydCh0cmFuc3BvcnQpIHtcclxuICAgICAgICBzd2l0Y2ggKHRyYW5zcG9ydCkge1xyXG4gICAgICAgICAgICBjYXNlIEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHM6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMuV2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ1dlYlNvY2tldCcgaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIGVudmlyb25tZW50LlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViU29ja2V0VHJhbnNwb3J0KHRoaXMuX2h0dHBDbGllbnQsIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSwgdGhpcy5fbG9nZ2VyLCB0aGlzLl9vcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50LCB0aGlzLl9vcHRpb25zLldlYlNvY2tldCwgdGhpcy5fb3B0aW9ucy5oZWFkZXJzIHx8IHt9KTtcclxuICAgICAgICAgICAgY2FzZSBIdHRwVHJhbnNwb3J0VHlwZS5TZXJ2ZXJTZW50RXZlbnRzOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLkV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ0V2ZW50U291cmNlJyBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0KHRoaXMuX2h0dHBDbGllbnQsIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSwgdGhpcy5fbG9nZ2VyLCB0aGlzLl9vcHRpb25zKTtcclxuICAgICAgICAgICAgY2FzZSBIdHRwVHJhbnNwb3J0VHlwZS5Mb25nUG9sbGluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9uZ1BvbGxpbmdUcmFuc3BvcnQodGhpcy5faHR0cENsaWVudCwgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5LCB0aGlzLl9sb2dnZXIsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHRyYW5zcG9ydDogJHt0cmFuc3BvcnR9LmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9zdGFydFRyYW5zcG9ydCh1cmwsIHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQub25yZWNlaXZlID0gdGhpcy5vbnJlY2VpdmU7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQub25jbG9zZSA9IChlKSA9PiB0aGlzLl9zdG9wQ29ubmVjdGlvbihlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuY29ubmVjdCh1cmwsIHRyYW5zZmVyRm9ybWF0KTtcclxuICAgIH1cclxuICAgIF9yZXNvbHZlVHJhbnNwb3J0T3JFcnJvcihlbmRwb2ludCwgcmVxdWVzdGVkVHJhbnNwb3J0LCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zcG9ydCA9IEh0dHBUcmFuc3BvcnRUeXBlW2VuZHBvaW50LnRyYW5zcG9ydF07XHJcbiAgICAgICAgaWYgKHRyYW5zcG9ydCA9PT0gbnVsbCB8fCB0cmFuc3BvcnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgU2tpcHBpbmcgdHJhbnNwb3J0ICcke2VuZHBvaW50LnRyYW5zcG9ydH0nIGJlY2F1c2UgaXQgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGNsaWVudC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgU2tpcHBpbmcgdHJhbnNwb3J0ICcke2VuZHBvaW50LnRyYW5zcG9ydH0nIGJlY2F1c2UgaXQgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGNsaWVudC5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc3BvcnRNYXRjaGVzKHJlcXVlc3RlZFRyYW5zcG9ydCwgdHJhbnNwb3J0KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmZXJGb3JtYXRzID0gZW5kcG9pbnQudHJhbnNmZXJGb3JtYXRzLm1hcCgocykgPT4gVHJhbnNmZXJGb3JtYXRbc10pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0cy5pbmRleE9mKHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0cmFuc3BvcnQgPT09IEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHMgJiYgIXRoaXMuX29wdGlvbnMuV2ViU29ja2V0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodHJhbnNwb3J0ID09PSBIdHRwVHJhbnNwb3J0VHlwZS5TZXJ2ZXJTZW50RXZlbnRzICYmICF0aGlzLl9vcHRpb25zLkV2ZW50U291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgU2tpcHBpbmcgdHJhbnNwb3J0ICcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19JyBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBlbnZpcm9ubWVudC4nYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVW5zdXBwb3J0ZWRUcmFuc3BvcnRFcnJvcihgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nIGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBlbnZpcm9ubWVudC5gLCB0cmFuc3BvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYFNlbGVjdGluZyB0cmFuc3BvcnQgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nLmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnN0cnVjdFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYFNraXBwaW5nIHRyYW5zcG9ydCAnJHtIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdfScgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdXBwb3J0IHRoZSByZXF1ZXN0ZWQgdHJhbnNmZXIgZm9ybWF0ICcke1RyYW5zZmVyRm9ybWF0W3JlcXVlc3RlZFRyYW5zZmVyRm9ybWF0XX0nLmApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYCcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19JyBkb2VzIG5vdCBzdXBwb3J0ICR7VHJhbnNmZXJGb3JtYXRbcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXRdfS5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTa2lwcGluZyB0cmFuc3BvcnQgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nIGJlY2F1c2UgaXQgd2FzIGRpc2FibGVkIGJ5IHRoZSBjbGllbnQuYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERpc2FibGVkVHJhbnNwb3J0RXJyb3IoYCcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19JyBpcyBkaXNhYmxlZCBieSB0aGUgY2xpZW50LmAsIHRyYW5zcG9ydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaXNJVHJhbnNwb3J0KHRyYW5zcG9ydCkge1xyXG4gICAgICAgIHJldHVybiB0cmFuc3BvcnQgJiYgdHlwZW9mICh0cmFuc3BvcnQpID09PSBcIm9iamVjdFwiICYmIFwiY29ubmVjdFwiIGluIHRyYW5zcG9ydDtcclxuICAgIH1cclxuICAgIF9zdG9wQ29ubmVjdGlvbihlcnJvcikge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBIdHRwQ29ubmVjdGlvbi5zdG9wQ29ubmVjdGlvbigke2Vycm9yfSkgY2FsbGVkIHdoaWxlIGluIHN0YXRlICR7dGhpcy5fY29ubmVjdGlvblN0YXRlfS5gKTtcclxuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgc3RvcEVycm9yLCBpdCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIGVycm9yIGZyb20gdGhlIHRyYW5zcG9ydFxyXG4gICAgICAgIGVycm9yID0gdGhpcy5fc3RvcEVycm9yIHx8IGVycm9yO1xyXG4gICAgICAgIHRoaXMuX3N0b3BFcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wQ29ubmVjdGlvbigke2Vycm9yfSkgd2FzIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJDb25uZWN0aW5nXCIgLyogQ29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3BDb25uZWN0aW9uKCR7ZXJyb3J9KSB3YXMgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIHN0aWxsIGluIHRoZSBjb25uZWN0aW5nIHN0YXRlLmApO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEh0dHBDb25uZWN0aW9uLnN0b3BDb25uZWN0aW9uKCR7ZXJyb3J9KSB3YXMgY2FsbGVkIHdoaWxlIHRoZSBjb25uZWN0aW9uIGlzIHN0aWxsIGluIHRoZSBjb25uZWN0aW5nIHN0YXRlLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovKSB7XHJcbiAgICAgICAgICAgIC8vIEEgY2FsbCB0byBzdG9wKCkgaW5kdWNlZCB0aGlzIGNhbGwgdG8gc3RvcENvbm5lY3Rpb24gYW5kIG5lZWRzIHRvIGJlIGNvbXBsZXRlZC5cclxuICAgICAgICAgICAgLy8gQW55IHN0b3AoKSBhd2FpdGVycyB3aWxsIGJlIHNjaGVkdWxlZCB0byBjb250aW51ZSBhZnRlciB0aGUgb25jbG9zZSBjYWxsYmFjayBmaXJlcy5cclxuICAgICAgICAgICAgdGhpcy5fc3RvcFByb21pc2VSZXNvbHZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYENvbm5lY3Rpb24gZGlzY29ubmVjdGVkIHdpdGggZXJyb3IgJyR7ZXJyb3J9Jy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiQ29ubmVjdGlvbiBkaXNjb25uZWN0ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2VuZFF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRRdWV1ZS5zdG9wKCkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBUcmFuc3BvcnRTZW5kUXVldWUuc3RvcCgpIHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRRdWV1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uSWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi87XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNsb3NlKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEh0dHBDb25uZWN0aW9uLm9uY2xvc2UoJHtlcnJvcn0pIHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZXNvbHZlVXJsKHVybCkge1xyXG4gICAgICAgIC8vIHN0YXJ0c1dpdGggaXMgbm90IHN1cHBvcnRlZCBpbiBJRVxyXG4gICAgICAgIGlmICh1cmwubGFzdEluZGV4T2YoXCJodHRwczovL1wiLCAwKSA9PT0gMCB8fCB1cmwubGFzdEluZGV4T2YoXCJodHRwOi8vXCIsIDApID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHJlc29sdmUgJyR7dXJsfScuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHVybCB0byB0aGUgaHJlZiBwcm9wZXJ5IG9mIGFuIGFuY2hvciB0YWcgaGFuZGxlcyBub3JtYWxpemF0aW9uXHJcbiAgICAgICAgLy8gZm9yIHVzLiBUaGVyZSBhcmUgMyBtYWluIGNhc2VzLlxyXG4gICAgICAgIC8vIDEuIFJlbGF0aXZlIHBhdGggbm9ybWFsaXphdGlvbiBlLmcgXCJiXCIgLT4gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYS9iXCJcclxuICAgICAgICAvLyAyLiBBYnNvbHV0ZSBwYXRoIG5vcm1hbGl6YXRpb24gZS5nIFwiL2EvYlwiIC0+IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2EvYlwiXHJcbiAgICAgICAgLy8gMy4gTmV0d29ya3BhdGggcmVmZXJlbmNlIG5vcm1hbGl6YXRpb24gZS5nIFwiLy9sb2NhbGhvc3Q6NTAwMC9hL2JcIiAtPiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hL2JcIlxyXG4gICAgICAgIGNvbnN0IGFUYWcgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgYVRhZy5ocmVmID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBOb3JtYWxpemluZyAnJHt1cmx9JyB0byAnJHthVGFnLmhyZWZ9Jy5gKTtcclxuICAgICAgICByZXR1cm4gYVRhZy5ocmVmO1xyXG4gICAgfVxyXG4gICAgX3Jlc29sdmVOZWdvdGlhdGVVcmwodXJsKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB1cmwuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgbGV0IG5lZ290aWF0ZVVybCA9IHVybC5zdWJzdHJpbmcoMCwgaW5kZXggPT09IC0xID8gdXJsLmxlbmd0aCA6IGluZGV4KTtcclxuICAgICAgICBpZiAobmVnb3RpYXRlVXJsW25lZ290aWF0ZVVybC5sZW5ndGggLSAxXSAhPT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgbmVnb3RpYXRlVXJsICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZWdvdGlhdGVVcmwgKz0gXCJuZWdvdGlhdGVcIjtcclxuICAgICAgICBuZWdvdGlhdGVVcmwgKz0gaW5kZXggPT09IC0xID8gXCJcIiA6IHVybC5zdWJzdHJpbmcoaW5kZXgpO1xyXG4gICAgICAgIGlmIChuZWdvdGlhdGVVcmwuaW5kZXhPZihcIm5lZ290aWF0ZVZlcnNpb25cIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIG5lZ290aWF0ZVVybCArPSBpbmRleCA9PT0gLTEgPyBcIj9cIiA6IFwiJlwiO1xyXG4gICAgICAgICAgICBuZWdvdGlhdGVVcmwgKz0gXCJuZWdvdGlhdGVWZXJzaW9uPVwiICsgdGhpcy5fbmVnb3RpYXRlVmVyc2lvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5lZ290aWF0ZVVybDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0cmFuc3BvcnRNYXRjaGVzKHJlcXVlc3RlZFRyYW5zcG9ydCwgYWN0dWFsVHJhbnNwb3J0KSB7XHJcbiAgICByZXR1cm4gIXJlcXVlc3RlZFRyYW5zcG9ydCB8fCAoKGFjdHVhbFRyYW5zcG9ydCAmIHJlcXVlc3RlZFRyYW5zcG9ydCkgIT09IDApO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgVHJhbnNwb3J0U2VuZFF1ZXVlIHtcclxuICAgIGNvbnN0cnVjdG9yKF90cmFuc3BvcnQpIHtcclxuICAgICAgICB0aGlzLl90cmFuc3BvcnQgPSBfdHJhbnNwb3J0O1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2V4ZWN1dGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc2VuZEJ1ZmZlcmVkRGF0YSA9IG5ldyBQcm9taXNlU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0UmVzdWx0ID0gbmV3IFByb21pc2VTb3VyY2UoKTtcclxuICAgICAgICB0aGlzLl9zZW5kTG9vcFByb21pc2UgPSB0aGlzLl9zZW5kTG9vcCgpO1xyXG4gICAgfVxyXG4gICAgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyRGF0YShkYXRhKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zcG9ydFJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc3BvcnRSZXN1bHQgPSBuZXcgUHJvbWlzZVNvdXJjZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNwb3J0UmVzdWx0LnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX2V4ZWN1dGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NlbmRCdWZmZXJlZERhdGEucmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZW5kTG9vcFByb21pc2U7XHJcbiAgICB9XHJcbiAgICBfYnVmZmVyRGF0YShkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlci5sZW5ndGggJiYgdHlwZW9mICh0aGlzLl9idWZmZXJbMF0pICE9PSB0eXBlb2YgKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgZGF0YSB0byBiZSBvZiB0eXBlICR7dHlwZW9mICh0aGlzLl9idWZmZXIpfSBidXQgd2FzIG9mIHR5cGUgJHt0eXBlb2YgKGRhdGEpfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXIucHVzaChkYXRhKTtcclxuICAgICAgICB0aGlzLl9zZW5kQnVmZmVyZWREYXRhLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIF9zZW5kTG9vcCgpIHtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zZW5kQnVmZmVyZWREYXRhLnByb21pc2U7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZXhlY3V0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdHJhbnNwb3J0UmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNwb3J0UmVzdWx0LnJlamVjdChcIkNvbm5lY3Rpb24gc3RvcHBlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zZW5kQnVmZmVyZWREYXRhID0gbmV3IFByb21pc2VTb3VyY2UoKTtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNwb3J0UmVzdWx0ID0gdGhpcy5fdHJhbnNwb3J0UmVzdWx0O1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc3BvcnRSZXN1bHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0eXBlb2YgKHRoaXMuX2J1ZmZlclswXSkgPT09IFwic3RyaW5nXCIgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyLmpvaW4oXCJcIikgOlxyXG4gICAgICAgICAgICAgICAgVHJhbnNwb3J0U2VuZFF1ZXVlLl9jb25jYXRCdWZmZXJzKHRoaXMuX2J1ZmZlcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlci5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fdHJhbnNwb3J0LnNlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRSZXN1bHQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0UmVzdWx0LnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgX2NvbmNhdEJ1ZmZlcnMoYXJyYXlCdWZmZXJzKSB7XHJcbiAgICAgICAgY29uc3QgdG90YWxMZW5ndGggPSBhcnJheUJ1ZmZlcnMubWFwKChiKSA9PiBiLmJ5dGVMZW5ndGgpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyYXlCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQobmV3IFVpbnQ4QXJyYXkoaXRlbSksIG9mZnNldCk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBpdGVtLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQuYnVmZmVyO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFByb21pc2VTb3VyY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gW3RoaXMuX3Jlc29sdmVyLCB0aGlzLl9yZWplY3Rlcl0gPSBbcmVzb2x2ZSwgcmVqZWN0XSk7XHJcbiAgICB9XHJcbiAgICByZXNvbHZlKCkge1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmVyKCk7XHJcbiAgICB9XHJcbiAgICByZWplY3QocmVhc29uKSB7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0ZXIocmVhc29uKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdHRwQ29ubmVjdGlvbi5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEhhbmRzaGFrZVByb3RvY29sIH0gZnJvbSBcIi4vSGFuZHNoYWtlUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9JSHViUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9TdWJqZWN0XCI7XHJcbmltcG9ydCB7IEFyZywgZ2V0RXJyb3JTdHJpbmcsIFBsYXRmb3JtIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuY29uc3QgREVGQVVMVF9USU1FT1VUX0lOX01TID0gMzAgKiAxMDAwO1xyXG5jb25zdCBERUZBVUxUX1BJTkdfSU5URVJWQUxfSU5fTVMgPSAxNSAqIDEwMDA7XHJcbi8qKiBEZXNjcmliZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHtAbGluayBIdWJDb25uZWN0aW9ufSB0byB0aGUgc2VydmVyLiAqL1xyXG5leHBvcnQgdmFyIEh1YkNvbm5lY3Rpb25TdGF0ZTtcclxuKGZ1bmN0aW9uIChIdWJDb25uZWN0aW9uU3RhdGUpIHtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiRGlzY29ubmVjdGVkXCJdID0gXCJEaXNjb25uZWN0ZWRcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgY29ubmVjdGluZy4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkNvbm5lY3RpbmdcIl0gPSBcIkNvbm5lY3RpbmdcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgY29ubmVjdGVkLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiQ29ubmVjdGVkXCJdID0gXCJDb25uZWN0ZWRcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGluZy4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkRpc2Nvbm5lY3RpbmdcIl0gPSBcIkRpc2Nvbm5lY3RpbmdcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgcmVjb25uZWN0aW5nLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiUmVjb25uZWN0aW5nXCJdID0gXCJSZWNvbm5lY3RpbmdcIjtcclxufSkoSHViQ29ubmVjdGlvblN0YXRlIHx8IChIdWJDb25uZWN0aW9uU3RhdGUgPSB7fSkpO1xyXG4vKiogUmVwcmVzZW50cyBhIGNvbm5lY3Rpb24gdG8gYSBTaWduYWxSIEh1Yi4gKi9cclxuZXhwb3J0IGNsYXNzIEh1YkNvbm5lY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoY29ubmVjdGlvbiwgbG9nZ2VyLCBwcm90b2NvbCwgcmVjb25uZWN0UG9saWN5KSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dEtlZXBBbGl2ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fZnJlZXplRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBcIlRoZSBwYWdlIGlzIGJlaW5nIGZyb3plbiwgdGhpcyB3aWxsIGxpa2VseSBsZWFkIHRvIHRoZSBjb25uZWN0aW9uIGJlaW5nIGNsb3NlZCBhbmQgbWVzc2FnZXMgYmVpbmcgbG9zdC4gRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIHRoZSBkb2NzIGF0IGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2FzcG5ldC9jb3JlL3NpZ25hbHIvamF2YXNjcmlwdC1jbGllbnQjYnNsZWVwXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQoY29ubmVjdGlvbiwgXCJjb25uZWN0aW9uXCIpO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKGxvZ2dlciwgXCJsb2dnZXJcIik7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQocHJvdG9jb2wsIFwicHJvdG9jb2xcIik7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lb3V0SW5NaWxsaXNlY29uZHMgPSBERUZBVUxUX1RJTUVPVVRfSU5fTVM7XHJcbiAgICAgICAgdGhpcy5rZWVwQWxpdmVJbnRlcnZhbEluTWlsbGlzZWNvbmRzID0gREVGQVVMVF9QSU5HX0lOVEVSVkFMX0lOX01TO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLl9wcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0UG9saWN5ID0gcmVjb25uZWN0UG9saWN5O1xyXG4gICAgICAgIHRoaXMuX2hhbmRzaGFrZVByb3RvY29sID0gbmV3IEhhbmRzaGFrZVByb3RvY29sKCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9ucmVjZWl2ZSA9IChkYXRhKSA9PiB0aGlzLl9wcm9jZXNzSW5jb21pbmdEYXRhKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbmNsb3NlID0gKGVycm9yKSA9PiB0aGlzLl9jb25uZWN0aW9uQ2xvc2VkKGVycm9yKTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICB0aGlzLl9tZXRob2RzID0ge307XHJcbiAgICAgICAgdGhpcy5fY2xvc2VkQ2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nQ2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0ZWRDYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLl9pbnZvY2F0aW9uSWQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3JlY2VpdmVkSGFuZHNoYWtlUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY2FjaGVkUGluZ01lc3NhZ2UgPSB0aGlzLl9wcm90b2NvbC53cml0ZU1lc3NhZ2UoeyB0eXBlOiBNZXNzYWdlVHlwZS5QaW5nIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgLy8gVXNpbmcgYSBwdWJsaWMgc3RhdGljIGZhY3RvcnkgbWV0aG9kIG1lYW5zIHdlIGNhbiBoYXZlIGEgcHJpdmF0ZSBjb25zdHJ1Y3RvciBhbmQgYW4gX2ludGVybmFsX1xyXG4gICAgLy8gY3JlYXRlIG1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIGJ5IEh1YkNvbm5lY3Rpb25CdWlsZGVyLiBBbiBcImludGVybmFsXCIgY29uc3RydWN0b3Igd291bGQganVzdFxyXG4gICAgLy8gYmUgc3RyaXBwZWQgYXdheSBhbmQgdGhlICcuZC50cycgZmlsZSB3b3VsZCBoYXZlIG5vIGNvbnN0cnVjdG9yLCB3aGljaCBpcyBpbnRlcnByZXRlZCBhcyBhXHJcbiAgICAvLyBwdWJsaWMgcGFyYW1ldGVyLWxlc3MgY29uc3RydWN0b3IuXHJcbiAgICBzdGF0aWMgY3JlYXRlKGNvbm5lY3Rpb24sIGxvZ2dlciwgcHJvdG9jb2wsIHJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSHViQ29ubmVjdGlvbihjb25uZWN0aW9uLCBsb2dnZXIsIHByb3RvY29sLCByZWNvbm5lY3RQb2xpY3kpO1xyXG4gICAgfVxyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgc3RhdGUgb2YgdGhlIHtAbGluayBIdWJDb25uZWN0aW9ufSB0byB0aGUgc2VydmVyLiAqL1xyXG4gICAgZ2V0IHN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uU3RhdGU7XHJcbiAgICB9XHJcbiAgICAvKiogUmVwcmVzZW50cyB0aGUgY29ubmVjdGlvbiBpZCBvZiB0aGUge0BsaW5rIEh1YkNvbm5lY3Rpb259IG9uIHRoZSBzZXJ2ZXIuIFRoZSBjb25uZWN0aW9uIGlkIHdpbGwgYmUgbnVsbCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGVpdGhlclxyXG4gICAgICogIGluIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUgb3IgaWYgdGhlIG5lZ290aWF0aW9uIHN0ZXAgd2FzIHNraXBwZWQuXHJcbiAgICAgKi9cclxuICAgIGdldCBjb25uZWN0aW9uSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbiA/ICh0aGlzLmNvbm5lY3Rpb24uY29ubmVjdGlvbklkIHx8IG51bGwpIDogbnVsbDtcclxuICAgIH1cclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIHVybCBvZiB0aGUge0BsaW5rIEh1YkNvbm5lY3Rpb259IHRvIHRoZSBzZXJ2ZXIuICovXHJcbiAgICBnZXQgYmFzZVVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLmJhc2VVcmwgfHwgXCJcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhIG5ldyB1cmwgZm9yIHRoZSBIdWJDb25uZWN0aW9uLiBOb3RlIHRoYXQgdGhlIHVybCBjYW4gb25seSBiZSBjaGFuZ2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgaW4gZWl0aGVyIHRoZSBEaXNjb25uZWN0ZWQgb3JcclxuICAgICAqIFJlY29ubmVjdGluZyBzdGF0ZXMuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gY29ubmVjdCB0by5cclxuICAgICAqL1xyXG4gICAgc2V0IGJhc2VVcmwodXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZCAmJiB0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIEh1YkNvbm5lY3Rpb24gbXVzdCBiZSBpbiB0aGUgRGlzY29ubmVjdGVkIG9yIFJlY29ubmVjdGluZyBzdGF0ZSB0byBjaGFuZ2UgdGhlIHVybC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBIdWJDb25uZWN0aW9uIHVybCBtdXN0IGJlIGEgdmFsaWQgdXJsLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJhc2VVcmwgPSB1cmw7XHJcbiAgICB9XHJcbiAgICAvKiogU3RhcnRzIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBjb25uZWN0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBlc3RhYmxpc2hlZCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9zdGFydFByb21pc2UgPSB0aGlzLl9zdGFydFdpdGhTdGF0ZVRyYW5zaXRpb25zKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0UHJvbWlzZTtcclxuICAgIH1cclxuICAgIGFzeW5jIF9zdGFydFdpdGhTdGF0ZVRyYW5zaXRpb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzdGFydCBhIEh1YkNvbm5lY3Rpb24gdGhhdCBpcyBub3QgaW4gdGhlICdEaXNjb25uZWN0ZWQnIHN0YXRlLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0aW5nO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU3RhcnRpbmcgSHViQ29ubmVjdGlvbi5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRJbnRlcm5hbCgpO1xyXG4gICAgICAgICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMb2cgd2hlbiB0aGUgYnJvd3NlciBmcmVlemVzIHRoZSB0YWIgc28gdXNlcnMga25vdyB3aHkgdGhlaXIgY29ubmVjdGlvbiB1bmV4cGVjdGVkbHkgc3RvcHBlZCB3b3JraW5nXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZyZWV6ZVwiLCB0aGlzLl9mcmVlemVFdmVudExpc3RlbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiSHViQ29ubmVjdGlvbiBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZDtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYEh1YkNvbm5lY3Rpb24gZmFpbGVkIHRvIHN0YXJ0IHN1Y2Nlc3NmdWxseSBiZWNhdXNlIG9mIGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIF9zdGFydEludGVybmFsKCkge1xyXG4gICAgICAgIHRoaXMuX3N0b3BEdXJpbmdTdGFydEVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX3JlY2VpdmVkSGFuZHNoYWtlUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgICAgICAvLyBTZXQgdXAgdGhlIHByb21pc2UgYmVmb3JlIGFueSBjb25uZWN0aW9uIGlzIChyZSlzdGFydGVkIG90aGVyd2lzZSBpdCBjb3VsZCByYWNlIHdpdGggcmVjZWl2ZWQgbWVzc2FnZXNcclxuICAgICAgICBjb25zdCBoYW5kc2hha2VQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kc2hha2VSZXNvbHZlciA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlamVjdGVyID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdGlvbi5zdGFydCh0aGlzLl9wcm90b2NvbC50cmFuc2ZlckZvcm1hdCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZHNoYWtlUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgIHByb3RvY29sOiB0aGlzLl9wcm90b2NvbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5fcHJvdG9jb2wudmVyc2lvbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTZW5kaW5nIGhhbmRzaGFrZSByZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UodGhpcy5faGFuZHNoYWtlUHJvdG9jb2wud3JpdGVIYW5kc2hha2VSZXF1ZXN0KGhhbmRzaGFrZVJlcXVlc3QpKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYFVzaW5nIEh1YlByb3RvY29sICcke3RoaXMuX3Byb3RvY29sLm5hbWV9Jy5gKTtcclxuICAgICAgICAgICAgLy8gZGVmZW5zaXZlbHkgY2xlYW51cCB0aW1lb3V0IGluIGNhc2Ugd2UgcmVjZWl2ZSBhIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyIGJlZm9yZSB3ZSBmaW5pc2ggc3RhcnRcclxuICAgICAgICAgICAgdGhpcy5fY2xlYW51cFRpbWVvdXQoKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRUaW1lb3V0UGVyaW9kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0S2VlcEFsaXZlSW50ZXJ2YWwoKTtcclxuICAgICAgICAgICAgYXdhaXQgaGFuZHNoYWtlUHJvbWlzZTtcclxuICAgICAgICAgICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gY2hlY2sgdGhlIHN0b3BEdXJpbmdTdGFydEVycm9yIGluc3RlYWQgb2YganVzdCByZWx5aW5nIG9uIHRoZSBoYW5kc2hha2VQcm9taXNlXHJcbiAgICAgICAgICAgIC8vIGJlaW5nIHJlamVjdGVkIG9uIGNsb3NlLCBiZWNhdXNlIHRoaXMgY29udGludWF0aW9uIGNhbiBydW4gYWZ0ZXIgYm90aCB0aGUgaGFuZHNoYWtlIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgLy8gYW5kIHRoZSBjb25uZWN0aW9uIHdhcyBjbG9zZWQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gdGhyb3cgaW5zdGVhZCBvZiByZXR1cm5pbmcgYSByZWplY3RlZCBwcm9taXNlLCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gYWxsb3cgYW55IHN0YXRlXHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9ucyB0byBvY2N1ciBiZXR3ZWVuIG5vdyBhbmQgdGhlIGNhbGxpbmcgY29kZSBvYnNlcnZpbmcgdGhlIGV4Y2VwdGlvbnMuIFJldHVybmluZyBhIHJlamVjdGVkIHByb21pc2VcclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgY2F1c2UgdGhlIGNhbGxpbmcgY29udGludWF0aW9uIHRvIGdldCBzY2hlZHVsZWQgdG8gcnVuIGxhdGVyLlxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aHJvdy1saXRlcmFsXHJcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgSHViIGhhbmRzaGFrZSBmYWlsZWQgd2l0aCBlcnJvciAnJHtlfScgZHVyaW5nIHN0YXJ0KCkuIFN0b3BwaW5nIEh1YkNvbm5lY3Rpb24uYCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFudXBUaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFudXBQaW5nVGltZXIoKTtcclxuICAgICAgICAgICAgLy8gSHR0cENvbm5lY3Rpb24uc3RvcCgpIHNob3VsZCBub3QgY29tcGxldGUgdW50aWwgYWZ0ZXIgdGhlIG9uY2xvc2UgY2FsbGJhY2sgaXMgaW52b2tlZC5cclxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRyYW5zaXRpb24gdGhlIEh1YkNvbm5lY3Rpb24gdG8gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZSBiZWZvcmUgSHR0cENvbm5lY3Rpb24uc3RvcCgpIGNvbXBsZXRlcy5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0aW9uLnN0b3AoZSk7XHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIFN0b3BzIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBjb25uZWN0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB0ZXJtaW5hdGVkLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHN0b3AoKSB7XHJcbiAgICAgICAgLy8gQ2FwdHVyZSB0aGUgc3RhcnQgcHJvbWlzZSBiZWZvcmUgdGhlIGNvbm5lY3Rpb24gbWlnaHQgYmUgcmVzdGFydGVkIGluIGFuIG9uY2xvc2UgY2FsbGJhY2suXHJcbiAgICAgICAgY29uc3Qgc3RhcnRQcm9taXNlID0gdGhpcy5fc3RhcnRQcm9taXNlO1xyXG4gICAgICAgIHRoaXMuX3N0b3BQcm9taXNlID0gdGhpcy5fc3RvcEludGVybmFsKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc3RvcFByb21pc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gQXdhaXRpbmcgdW5kZWZpbmVkIGNvbnRpbnVlcyBpbW1lZGlhdGVseVxyXG4gICAgICAgICAgICBhd2FpdCBzdGFydFByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXhjZXB0aW9uIGlzIHJldHVybmVkIHRvIHRoZSB1c2VyIGFzIGEgcmVqZWN0ZWQgUHJvbWlzZSBmcm9tIHRoZSBzdGFydCBtZXRob2QuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3N0b3BJbnRlcm5hbChlcnJvcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYENhbGwgdG8gSHViQ29ubmVjdGlvbi5zdG9wKCR7ZXJyb3J9KSBpZ25vcmVkIGJlY2F1c2UgaXQgaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGVkIHN0YXRlLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3AoJHtlcnJvcn0pIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0aW5nIHN0YXRlLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RvcFByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0aW5nO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU3RvcHBpbmcgSHViQ29ubmVjdGlvbi5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdERlbGF5SGFuZGxlKSB7XHJcbiAgICAgICAgICAgIC8vIFdlJ3JlIGluIGEgcmVjb25uZWN0IGRlbGF5IHdoaWNoIG1lYW5zIHRoZSB1bmRlcmx5aW5nIGNvbm5lY3Rpb24gaXMgY3VycmVudGx5IGFscmVhZHkgc3RvcHBlZC5cclxuICAgICAgICAgICAgLy8gSnVzdCBjbGVhciB0aGUgaGFuZGxlIHRvIHN0b3AgdGhlIHJlY29ubmVjdCBsb29wICh3aGljaCBubyBvbmUgaXMgd2FpdGluZyBvbiB0aGFua2Z1bGx5KSBhbmRcclxuICAgICAgICAgICAgLy8gZmlyZSB0aGUgb25jbG9zZSBjYWxsYmFja3MuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBzdG9wcGVkIGR1cmluZyByZWNvbm5lY3QgZGVsYXkuIERvbmUgcmVjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JlY29ubmVjdERlbGF5SGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0RGVsYXlIYW5kbGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlQ2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXBQaW5nVGltZXIoKTtcclxuICAgICAgICB0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvciA9IGVycm9yIHx8IG5ldyBFcnJvcihcIlRoZSBjb25uZWN0aW9uIHdhcyBzdG9wcGVkIGJlZm9yZSB0aGUgaHViIGhhbmRzaGFrZSBjb3VsZCBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgLy8gSHR0cENvbm5lY3Rpb24uc3RvcCgpIHNob3VsZCBub3QgY29tcGxldGUgdW50aWwgYWZ0ZXIgZWl0aGVyIEh0dHBDb25uZWN0aW9uLnN0YXJ0KCkgZmFpbHNcclxuICAgICAgICAvLyBvciB0aGUgb25jbG9zZSBjYWxsYmFjayBpcyBpbnZva2VkLiBUaGUgb25jbG9zZSBjYWxsYmFjayB3aWxsIHRyYW5zaXRpb24gdGhlIEh1YkNvbm5lY3Rpb25cclxuICAgICAgICAvLyB0byB0aGUgZGlzY29ubmVjdGVkIHN0YXRlIGlmIG5lZWQgYmUgYmVmb3JlIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBjb21wbGV0ZXMuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zdG9wKGVycm9yKTtcclxuICAgIH1cclxuICAgIC8qKiBJbnZva2VzIGEgc3RyZWFtaW5nIGh1YiBtZXRob2Qgb24gdGhlIHNlcnZlciB1c2luZyB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIGFyZ3VtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZXBhcmFtIFQgVGhlIHR5cGUgb2YgdGhlIGl0ZW1zIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmVyIG1ldGhvZCB0byBpbnZva2UuXHJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBhcmdzIFRoZSBhcmd1bWVudHMgdXNlZCB0byBpbnZva2UgdGhlIHNlcnZlciBtZXRob2QuXHJcbiAgICAgKiBAcmV0dXJucyB7SVN0cmVhbVJlc3VsdDxUPn0gQW4gb2JqZWN0IHRoYXQgeWllbGRzIHJlc3VsdHMgZnJvbSB0aGUgc2VydmVyIGFzIHRoZXkgYXJlIHJlY2VpdmVkLlxyXG4gICAgICovXHJcbiAgICBzdHJlYW0obWV0aG9kTmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IFtzdHJlYW1zLCBzdHJlYW1JZHNdID0gdGhpcy5fcmVwbGFjZVN0cmVhbWluZ1BhcmFtcyhhcmdzKTtcclxuICAgICAgICBjb25zdCBpbnZvY2F0aW9uRGVzY3JpcHRvciA9IHRoaXMuX2NyZWF0ZVN0cmVhbUludm9jYXRpb24obWV0aG9kTmFtZSwgYXJncywgc3RyZWFtSWRzKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XHJcbiAgICAgICAgbGV0IHByb21pc2VRdWV1ZTtcclxuICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICBzdWJqZWN0LmNhbmNlbENhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxJbnZvY2F0aW9uID0gdGhpcy5fY3JlYXRlQ2FuY2VsSW52b2NhdGlvbihpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWQpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUXVldWUudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VuZFdpdGhQcm90b2NvbChjYW5jZWxJbnZvY2F0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXSA9IChpbnZvY2F0aW9uRXZlbnQsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW52b2NhdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnZvY2F0aW9uRXZlbnQgd2lsbCBub3QgYmUgbnVsbCB3aGVuIGFuIGVycm9yIGlzIG5vdCBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LnR5cGUgPT09IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuZXJyb3IobmV3IEVycm9yKGludm9jYXRpb25FdmVudC5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dCgoaW52b2NhdGlvbkV2ZW50Lml0ZW0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcHJvbWlzZVF1ZXVlID0gdGhpcy5fc2VuZFdpdGhQcm90b2NvbChpbnZvY2F0aW9uRGVzY3JpcHRvcilcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9sYXVuY2hTdHJlYW1zKHN0cmVhbXMsIHByb21pc2VRdWV1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XHJcbiAgICB9XHJcbiAgICBfc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX3Jlc2V0S2VlcEFsaXZlSW50ZXJ2YWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmQobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEganMgb2JqZWN0IHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUganMgb2JqZWN0IHRvIHNlcmlhbGl6ZSBhbmQgc2VuZC5cclxuICAgICAqL1xyXG4gICAgX3NlbmRXaXRoUHJvdG9jb2wobWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZW5kTWVzc2FnZSh0aGlzLl9wcm90b2NvbC53cml0ZU1lc3NhZ2UobWVzc2FnZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqIEludm9rZXMgYSBodWIgbWV0aG9kIG9uIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBhcmd1bWVudHMuIERvZXMgbm90IHdhaXQgZm9yIGEgcmVzcG9uc2UgZnJvbSB0aGUgcmVjZWl2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIFByb21pc2UgcmV0dXJuZWQgYnkgdGhpcyBtZXRob2QgcmVzb2x2ZXMgd2hlbiB0aGUgY2xpZW50IGhhcyBzZW50IHRoZSBpbnZvY2F0aW9uIHRvIHRoZSBzZXJ2ZXIuIFRoZSBzZXJ2ZXIgbWF5IHN0aWxsXHJcbiAgICAgKiBiZSBwcm9jZXNzaW5nIHRoZSBpbnZvY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIgbWV0aG9kIHRvIGludm9rZS5cclxuICAgICAqIEBwYXJhbSB7YW55W119IGFyZ3MgVGhlIGFyZ3VtZW50cyB1c2VkIHRvIGludm9rZSB0aGUgc2VydmVyIG1ldGhvZC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBpbnZvY2F0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzZW50LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHNlbmQobWV0aG9kTmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IFtzdHJlYW1zLCBzdHJlYW1JZHNdID0gdGhpcy5fcmVwbGFjZVN0cmVhbWluZ1BhcmFtcyhhcmdzKTtcclxuICAgICAgICBjb25zdCBzZW5kUHJvbWlzZSA9IHRoaXMuX3NlbmRXaXRoUHJvdG9jb2wodGhpcy5fY3JlYXRlSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCB0cnVlLCBzdHJlYW1JZHMpKTtcclxuICAgICAgICB0aGlzLl9sYXVuY2hTdHJlYW1zKHN0cmVhbXMsIHNlbmRQcm9taXNlKTtcclxuICAgICAgICByZXR1cm4gc2VuZFByb21pc2U7XHJcbiAgICB9XHJcbiAgICAvKiogSW52b2tlcyBhIGh1YiBtZXRob2Qgb24gdGhlIHNlcnZlciB1c2luZyB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIGFyZ3VtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgUHJvbWlzZSByZXR1cm5lZCBieSB0aGlzIG1ldGhvZCByZXNvbHZlcyB3aGVuIHRoZSBzZXJ2ZXIgaW5kaWNhdGVzIGl0IGhhcyBmaW5pc2hlZCBpbnZva2luZyB0aGUgbWV0aG9kLiBXaGVuIHRoZSBwcm9taXNlXHJcbiAgICAgKiByZXNvbHZlcywgdGhlIHNlcnZlciBoYXMgZmluaXNoZWQgaW52b2tpbmcgdGhlIG1ldGhvZC4gSWYgdGhlIHNlcnZlciBtZXRob2QgcmV0dXJucyBhIHJlc3VsdCwgaXQgaXMgcHJvZHVjZWQgYXMgdGhlIHJlc3VsdCBvZlxyXG4gICAgICogcmVzb2x2aW5nIHRoZSBQcm9taXNlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlcGFyYW0gVCBUaGUgZXhwZWN0ZWQgcmV0dXJuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmVyIG1ldGhvZCB0byBpbnZva2UuXHJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBhcmdzIFRoZSBhcmd1bWVudHMgdXNlZCB0byBpbnZva2UgdGhlIHNlcnZlciBtZXRob2QuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPn0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBzZXJ2ZXIgbWV0aG9kIChpZiBhbnkpLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGludm9rZShtZXRob2ROYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgW3N0cmVhbXMsIHN0cmVhbUlkc10gPSB0aGlzLl9yZXBsYWNlU3RyZWFtaW5nUGFyYW1zKGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IGludm9jYXRpb25EZXNjcmlwdG9yID0gdGhpcy5fY3JlYXRlSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCBmYWxzZSwgc3RyZWFtSWRzKTtcclxuICAgICAgICBjb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpbnZvY2F0aW9uSWQgd2lsbCBhbHdheXMgaGF2ZSBhIHZhbHVlIGZvciBhIG5vbi1ibG9ja2luZyBpbnZvY2F0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdID0gKGludm9jYXRpb25FdmVudCwgZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaW52b2NhdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52b2NhdGlvbkV2ZW50IHdpbGwgbm90IGJlIG51bGwgd2hlbiBhbiBlcnJvciBpcyBub3QgcGFzc2VkIHRvIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uRXZlbnQudHlwZSA9PT0gTWVzc2FnZVR5cGUuQ29tcGxldGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGludm9jYXRpb25FdmVudC5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbnZvY2F0aW9uRXZlbnQucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVW5leHBlY3RlZCBtZXNzYWdlIHR5cGU6ICR7aW52b2NhdGlvbkV2ZW50LnR5cGV9YCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZVF1ZXVlID0gdGhpcy5fc2VuZFdpdGhQcm90b2NvbChpbnZvY2F0aW9uRGVzY3JpcHRvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gaW52b2NhdGlvbklkIHdpbGwgYWx3YXlzIGhhdmUgYSB2YWx1ZSBmb3IgYSBub24tYmxvY2tpbmcgaW52b2NhdGlvblxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fbGF1bmNoU3RyZWFtcyhzdHJlYW1zLCBwcm9taXNlUXVldWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgaHViIG1ldGhvZCB3aXRoIHRoZSBzcGVjaWZpZWQgbWV0aG9kIG5hbWUgaXMgaW52b2tlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgaHViIG1ldGhvZCB0byBkZWZpbmUuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXdNZXRob2QgVGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHJhaXNlZCB3aGVuIHRoZSBodWIgbWV0aG9kIGlzIGludm9rZWQuXHJcbiAgICAgKi9cclxuICAgIG9uKG1ldGhvZE5hbWUsIG5ld01ldGhvZCkge1xyXG4gICAgICAgIGlmICghbWV0aG9kTmFtZSB8fCAhbmV3TWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZE5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX21ldGhvZHNbbWV0aG9kTmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQcmV2ZW50aW5nIGFkZGluZyB0aGUgc2FtZSBoYW5kbGVyIG11bHRpcGxlIHRpbWVzLlxyXG4gICAgICAgIGlmICh0aGlzLl9tZXRob2RzW21ldGhvZE5hbWVdLmluZGV4T2YobmV3TWV0aG9kKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9tZXRob2RzW21ldGhvZE5hbWVdLnB1c2gobmV3TWV0aG9kKTtcclxuICAgIH1cclxuICAgIG9mZihtZXRob2ROYW1lLCBtZXRob2QpIHtcclxuICAgICAgICBpZiAoIW1ldGhvZE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2ROYW1lID0gbWV0aG9kTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICBpZiAoIWhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVJZHggPSBoYW5kbGVycy5pbmRleE9mKG1ldGhvZCk7XHJcbiAgICAgICAgICAgIGlmIChyZW1vdmVJZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UocmVtb3ZlSWR4LCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQuIE9wdGlvbmFsbHkgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQgY29udGFpbmluZyB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGNvbm5lY3Rpb24gdG8gY2xvc2UgKGlmIGFueSkuXHJcbiAgICAgKi9cclxuICAgIG9uY2xvc2UoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2VkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBSZWdpc3RlcnMgYSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gc3RhcnRzIHJlY29ubmVjdGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIHN0YXJ0cyByZWNvbm5lY3RpbmcuIE9wdGlvbmFsbHkgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQgY29udGFpbmluZyB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGNvbm5lY3Rpb24gdG8gc3RhcnQgcmVjb25uZWN0aW5nIChpZiBhbnkpLlxyXG4gICAgICovXHJcbiAgICBvbnJlY29ubmVjdGluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmdDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBzdWNjZXNzZnVsbHkgcmVjb25uZWN0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSByZWNvbm5lY3RzLlxyXG4gICAgICovXHJcbiAgICBvbnJlY29ubmVjdGVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9wcm9jZXNzSW5jb21pbmdEYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5fcmVjZWl2ZWRIYW5kc2hha2VSZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fcHJvY2Vzc0hhbmRzaGFrZVJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWNlaXZlZEhhbmRzaGFrZVJlc3BvbnNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGF0YSBtYXkgaGF2ZSBhbGwgYmVlbiByZWFkIHdoZW4gcHJvY2Vzc2luZyBoYW5kc2hha2UgcmVzcG9uc2VcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgbWVzc2FnZXNcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLl9wcm90b2NvbC5wYXJzZU1lc3NhZ2VzKGRhdGEsIHRoaXMuX2xvZ2dlcik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkludm9jYXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZUNsaWVudE1ldGhvZChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5TdHJlYW1JdGVtOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ29tcGxldGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrc1ttZXNzYWdlLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gTWVzc2FnZVR5cGUuQ29tcGxldGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbWVzc2FnZS5pbnZvY2F0aW9uSWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYFN0cmVhbSBjYWxsYmFjayB0aHJldyBlcnJvcjogJHtnZXRFcnJvclN0cmluZyhlKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5QaW5nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBjYXJlIGFib3V0IHBpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ2xvc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJDbG9zZSBtZXNzYWdlIHJlY2VpdmVkIGZyb20gc2VydmVyLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBtZXNzYWdlLmVycm9yID8gbmV3IEVycm9yKFwiU2VydmVyIHJldHVybmVkIGFuIGVycm9yIG9uIGNsb3NlOiBcIiArIG1lc3NhZ2UuZXJyb3IpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5hbGxvd1JlY29ubmVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQgZmVlbHMgd3Jvbmcgbm90IHRvIGF3YWl0IGNvbm5lY3Rpb24uc3RvcCgpIGhlcmUsIGJ1dCBwcm9jZXNzSW5jb21pbmdEYXRhIGlzIGNhbGxlZCBhcyBwYXJ0IG9mIGFuIG9ucmVjZWl2ZSBjYWxsYmFjayB3aGljaCBpcyBub3QgYXN5bmMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGFscmVhZHkgdGhlIGJlaGF2aW9yIGZvciBzZXJ2ZXJUaW1lb3V0KCksIGFuZCBIdHRwQ29ubmVjdGlvbi5TdG9wKCkgc2hvdWxkIGNhdGNoIGFuZCBsb2cgYWxsIHBvc3NpYmxlIGV4Y2VwdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc3RvcChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW5ub3QgYXdhaXQgc3RvcEludGVybmFsKCkgaGVyZSwgYnV0IHN1YnNlcXVlbnQgY2FsbHMgdG8gc3RvcCgpIHdpbGwgYXdhaXQgdGhpcyBpZiBzdG9wSW50ZXJuYWwoKSBpcyBzdGlsbCBvbmdvaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcFByb21pc2UgPSB0aGlzLl9zdG9wSW50ZXJuYWwoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBJbnZhbGlkIG1lc3NhZ2UgdHlwZTogJHttZXNzYWdlLnR5cGV9LmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXNldFRpbWVvdXRQZXJpb2QoKTtcclxuICAgIH1cclxuICAgIF9wcm9jZXNzSGFuZHNoYWtlUmVzcG9uc2UoZGF0YSkge1xyXG4gICAgICAgIGxldCByZXNwb25zZU1lc3NhZ2U7XHJcbiAgICAgICAgbGV0IHJlbWFpbmluZ0RhdGE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgW3JlbWFpbmluZ0RhdGEsIHJlc3BvbnNlTWVzc2FnZV0gPSB0aGlzLl9oYW5kc2hha2VQcm90b2NvbC5wYXJzZUhhbmRzaGFrZVJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJFcnJvciBwYXJzaW5nIGhhbmRzaGFrZSByZXNwb25zZTogXCIgKyBlO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlamVjdGVyKGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXNwb25zZU1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiU2VydmVyIHJldHVybmVkIGhhbmRzaGFrZSBlcnJvcjogXCIgKyByZXNwb25zZU1lc3NhZ2UuZXJyb3I7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZHNoYWtlUmVqZWN0ZXIoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU2VydmVyIGhhbmRzaGFrZSBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlc29sdmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZ0RhdGE7XHJcbiAgICB9XHJcbiAgICBfcmVzZXRLZWVwQWxpdmVJbnRlcnZhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uLmZlYXR1cmVzLmluaGVyZW50S2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2V0IHRoZSB0aW1lIHdlIHdhbnQgdGhlIG5leHQga2VlcCBhbGl2ZSB0byBiZSBzZW50XHJcbiAgICAgICAgLy8gVGltZXIgd2lsbCBiZSBzZXR1cCBvbiBuZXh0IG1lc3NhZ2UgcmVjZWl2ZVxyXG4gICAgICAgIHRoaXMuX25leHRLZWVwQWxpdmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRoaXMua2VlcEFsaXZlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcztcclxuICAgICAgICB0aGlzLl9jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICB9XHJcbiAgICBfcmVzZXRUaW1lb3V0UGVyaW9kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0aW9uLmZlYXR1cmVzIHx8ICF0aGlzLmNvbm5lY3Rpb24uZmVhdHVyZXMuaW5oZXJlbnRLZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgLy8gU2V0IHRoZSB0aW1lb3V0IHRpbWVyXHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VydmVyVGltZW91dCgpLCB0aGlzLnNlcnZlclRpbWVvdXRJbk1pbGxpc2Vjb25kcyk7XHJcbiAgICAgICAgICAgIC8vIFNldCBrZWVwQWxpdmUgdGltZXIgaWYgdGhlcmUgaXNuJ3Qgb25lXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9waW5nU2VydmVySGFuZGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0UGluZyA9IHRoaXMuX25leHRLZWVwQWxpdmUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0UGluZyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0UGluZyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgdGltZXIgbmVlZHMgdG8gYmUgc2V0IGZyb20gYSBuZXR3b3JraW5nIGNhbGxiYWNrIHRvIGF2b2lkIENocm9tZSB0aW1lciB0aHJvdHRsaW5nIGZyb20gY2F1c2luZyB0aW1lcnMgdG8gcnVuIG9uY2UgYSBtaW51dGVcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BpbmdTZXJ2ZXJIYW5kbGUgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZSh0aGlzLl9jYWNoZWRQaW5nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY2FyZSBhYm91dCB0aGUgZXJyb3IuIEl0IHNob3VsZCBiZSBzZWVuIGVsc2V3aGVyZSBpbiB0aGUgY2xpZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGNvbm5lY3Rpb24gaXMgcHJvYmFibHkgaW4gYSBiYWQgb3IgY2xvc2VkIHN0YXRlIG5vdywgY2xlYW51cCB0aGUgdGltZXIgc28gaXQgc3RvcHMgdHJpZ2dlcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgbmV4dFBpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgc2VydmVyVGltZW91dCgpIHtcclxuICAgICAgICAvLyBUaGUgc2VydmVyIGhhc24ndCB0YWxrZWQgdG8gdXMgaW4gYSB3aGlsZS4gSXQgZG9lc24ndCBsaWtlIHVzIGFueW1vcmUgLi4uIDooXHJcbiAgICAgICAgLy8gVGVybWluYXRlIHRoZSBjb25uZWN0aW9uLCBidXQgd2UgZG9uJ3QgbmVlZCB0byB3YWl0IG9uIHRoZSBwcm9taXNlLiBUaGlzIGNvdWxkIHRyaWdnZXIgcmVjb25uZWN0aW5nLlxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc3RvcChuZXcgRXJyb3IoXCJTZXJ2ZXIgdGltZW91dCBlbGFwc2VkIHdpdGhvdXQgcmVjZWl2aW5nIGEgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIuXCIpKTtcclxuICAgIH1cclxuICAgIF9pbnZva2VDbGllbnRNZXRob2QoaW52b2NhdGlvbk1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCBtZXRob2RzID0gdGhpcy5fbWV0aG9kc1tpbnZvY2F0aW9uTWVzc2FnZS50YXJnZXQudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgaWYgKG1ldGhvZHMpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaCgobSkgPT4gbS5hcHBseSh0aGlzLCBpbnZvY2F0aW9uTWVzc2FnZS5hcmd1bWVudHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEEgY2FsbGJhY2sgZm9yIHRoZSBtZXRob2QgJHtpbnZvY2F0aW9uTWVzc2FnZS50YXJnZXQudG9Mb3dlckNhc2UoKX0gdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uTWVzc2FnZS5pbnZvY2F0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgbm90IHN1cHBvcnRlZCBpbiB2MS4gU28gd2UgcmV0dXJuIGFuIGVycm9yIHRvIGF2b2lkIGJsb2NraW5nIHRoZSBzZXJ2ZXIgd2FpdGluZyBmb3IgdGhlIHJlc3BvbnNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiU2VydmVyIHJlcXVlc3RlZCBhIHJlc3BvbnNlLCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgdmVyc2lvbiBvZiB0aGUgY2xpZW50LlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHdhaXQgb24gdGhlIHN0b3AgaXRzZWxmLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcFByb21pc2UgPSB0aGlzLl9zdG9wSW50ZXJuYWwobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgTm8gY2xpZW50IG1ldGhvZCB3aXRoIHRoZSBuYW1lICcke2ludm9jYXRpb25NZXNzYWdlLnRhcmdldH0nIGZvdW5kLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9jb25uZWN0aW9uQ2xvc2VkKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYEh1YkNvbm5lY3Rpb24uY29ubmVjdGlvbkNsb3NlZCgke2Vycm9yfSkgY2FsbGVkIHdoaWxlIGluIHN0YXRlICR7dGhpcy5fY29ubmVjdGlvblN0YXRlfS5gKTtcclxuICAgICAgICAvLyBUcmlnZ2VyaW5nIHRoaXMuaGFuZHNoYWtlUmVqZWN0ZXIgaXMgaW5zdWZmaWNpZW50IGJlY2F1c2UgaXQgY291bGQgYWxyZWFkeSBiZSByZXNvbHZlZCB3aXRob3V0IHRoZSBjb250aW51YXRpb24gaGF2aW5nIHJ1biB5ZXQuXHJcbiAgICAgICAgdGhpcy5fc3RvcER1cmluZ1N0YXJ0RXJyb3IgPSB0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvciB8fCBlcnJvciB8fCBuZXcgRXJyb3IoXCJUaGUgdW5kZXJseWluZyBjb25uZWN0aW9uIHdhcyBjbG9zZWQgYmVmb3JlIHRoZSBodWIgaGFuZHNoYWtlIGNvdWxkIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICAvLyBJZiB0aGUgaGFuZHNoYWtlIGlzIGluIHByb2dyZXNzLCBzdGFydCB3aWxsIGJlIHdhaXRpbmcgZm9yIHRoZSBoYW5kc2hha2UgcHJvbWlzZSwgc28gd2UgY29tcGxldGUgaXQuXHJcbiAgICAgICAgLy8gSWYgaXQgaGFzIGFscmVhZHkgY29tcGxldGVkLCB0aGlzIHNob3VsZCBqdXN0IG5vb3AuXHJcbiAgICAgICAgaWYgKHRoaXMuX2hhbmRzaGFrZVJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlc29sdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhbmNlbENhbGxiYWNrc1dpdGhFcnJvcihlcnJvciB8fCBuZXcgRXJyb3IoXCJJbnZvY2F0aW9uIGNhbmNlbGVkIGR1ZSB0byB0aGUgdW5kZXJseWluZyBjb25uZWN0aW9uIGJlaW5nIGNsb3NlZC5cIikpO1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXBUaW1lb3V0KCk7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlQ2xvc2UoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0ZWQgJiYgdGhpcy5fcmVjb25uZWN0UG9saWN5KSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlQ2xvc2UoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBub25lIG9mIHRoZSBhYm92ZSBpZiBjb25kaXRpb25zIHdlcmUgdHJ1ZSB3ZXJlIGNhbGxlZCB0aGUgSHViQ29ubmVjdGlvbiBtdXN0IGJlIGluIGVpdGhlcjpcclxuICAgICAgICAvLyAxLiBUaGUgQ29ubmVjdGluZyBzdGF0ZSBpbiB3aGljaCBjYXNlIHRoZSBoYW5kc2hha2VSZXNvbHZlciB3aWxsIGNvbXBsZXRlIGl0IGFuZCBzdG9wRHVyaW5nU3RhcnRFcnJvciB3aWxsIGZhaWwgaXQuXHJcbiAgICAgICAgLy8gMi4gVGhlIFJlY29ubmVjdGluZyBzdGF0ZSBpbiB3aGljaCBjYXNlIHRoZSBoYW5kc2hha2VSZXNvbHZlciB3aWxsIGNvbXBsZXRlIGl0IGFuZCBzdG9wRHVyaW5nU3RhcnRFcnJvciB3aWxsIGZhaWwgdGhlIGN1cnJlbnQgcmVjb25uZWN0IGF0dGVtcHRcclxuICAgICAgICAvLyAgICBhbmQgcG90ZW50aWFsbHkgY29udGludWUgdGhlIHJlY29ubmVjdCgpIGxvb3AuXHJcbiAgICAgICAgLy8gMy4gVGhlIERpc2Nvbm5lY3RlZCBzdGF0ZSBpbiB3aGljaCBjYXNlIHdlJ3JlIGFscmVhZHkgZG9uZS5cclxuICAgIH1cclxuICAgIF9jb21wbGV0ZUNsb3NlKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZnJlZXplXCIsIHRoaXMuX2ZyZWV6ZUV2ZW50TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZWRDYWxsYmFja3MuZm9yRWFjaCgoYykgPT4gYy5hcHBseSh0aGlzLCBbZXJyb3JdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBBbiBvbmNsb3NlIGNhbGxiYWNrIGNhbGxlZCB3aXRoIGVycm9yICcke2Vycm9yfScgdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgX3JlY29ubmVjdChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHJlY29ubmVjdFN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgIGxldCByZXRyeUVycm9yID0gZXJyb3IgIT09IHVuZGVmaW5lZCA/IGVycm9yIDogbmV3IEVycm9yKFwiQXR0ZW1wdGluZyB0byByZWNvbm5lY3QgZHVlIHRvIGEgdW5rbm93biBlcnJvci5cIik7XHJcbiAgICAgICAgbGV0IG5leHRSZXRyeURlbGF5ID0gdGhpcy5fZ2V0TmV4dFJldHJ5RGVsYXkocHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0cysrLCAwLCByZXRyeUVycm9yKTtcclxuICAgICAgICBpZiAobmV4dFJldHJ5RGVsYXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIG5vdCByZWNvbm5lY3RpbmcgYmVjYXVzZSB0aGUgSVJldHJ5UG9saWN5IHJldHVybmVkIG51bGwgb24gdGhlIGZpcnN0IHJlY29ubmVjdCBhdHRlbXB0LlwiKTtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGVDbG9zZShlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZztcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYENvbm5lY3Rpb24gcmVjb25uZWN0aW5nIGJlY2F1c2Ugb2YgZXJyb3IgJyR7ZXJyb3J9Jy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiQ29ubmVjdGlvbiByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW5nQ2FsbGJhY2tzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nQ2FsbGJhY2tzLmZvckVhY2goKGMpID0+IGMuYXBwbHkodGhpcywgW2Vycm9yXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgQW4gb25yZWNvbm5lY3RpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggZXJyb3IgJyR7ZXJyb3J9JyB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRXhpdCBlYXJseSBpZiBhbiBvbnJlY29ubmVjdGluZyBjYWxsYmFjayBjYWxsZWQgY29ubmVjdGlvbi5zdG9wKCkuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBsZWZ0IHRoZSByZWNvbm5lY3Rpbmcgc3RhdGUgaW4gb25yZWNvbm5lY3RpbmcgY2FsbGJhY2suIERvbmUgcmVjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAobmV4dFJldHJ5RGVsYXkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYFJlY29ubmVjdCBhdHRlbXB0IG51bWJlciAke3ByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHN9IHdpbGwgc3RhcnQgaW4gJHtuZXh0UmV0cnlEZWxheX0gbXMuYCk7XHJcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3REZWxheUhhbmRsZSA9IHNldFRpbWVvdXQocmVzb2x2ZSwgbmV4dFJldHJ5RGVsYXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0RGVsYXlIYW5kbGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBsZWZ0IHRoZSByZWNvbm5lY3Rpbmcgc3RhdGUgZHVyaW5nIHJlY29ubmVjdCBkZWxheS4gRG9uZSByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zdGFydEludGVybmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJIdWJDb25uZWN0aW9uIHJlY29ubmVjdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0ZWRDYWxsYmFja3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0ZWRDYWxsYmFja3MuZm9yRWFjaCgoYykgPT4gYy5hcHBseSh0aGlzLCBbdGhpcy5jb25uZWN0aW9uLmNvbm5lY3Rpb25JZF0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEFuIG9ucmVjb25uZWN0ZWQgY2FsbGJhY2sgY2FsbGVkIHdpdGggY29ubmVjdGlvbklkICcke3RoaXMuY29ubmVjdGlvbi5jb25uZWN0aW9uSWR9OyB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgUmVjb25uZWN0IGF0dGVtcHQgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBDb25uZWN0aW9uIG1vdmVkIHRvIHRoZSAnJHt0aGlzLl9jb25uZWN0aW9uU3RhdGV9JyBmcm9tIHRoZSByZWNvbm5lY3Rpbmcgc3RhdGUgZHVyaW5nIHJlY29ubmVjdCBhdHRlbXB0LiBEb25lIHJlY29ubmVjdGluZy5gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgVHlwZVNjcmlwdCBjb21waWxlciB0aGlua3MgdGhhdCBjb25uZWN0aW9uU3RhdGUgbXVzdCBiZSBDb25uZWN0ZWQgaGVyZS4gVGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgaXMgd3JvbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29tcGxldGVDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXRyeUVycm9yID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZSA6IG5ldyBFcnJvcihlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgbmV4dFJldHJ5RGVsYXkgPSB0aGlzLl9nZXROZXh0UmV0cnlEZWxheShwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzKyssIERhdGUubm93KCkgLSByZWNvbm5lY3RTdGFydFRpbWUsIHJldHJ5RXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBSZWNvbm5lY3QgcmV0cmllcyBoYXZlIGJlZW4gZXhoYXVzdGVkIGFmdGVyICR7RGF0ZS5ub3coKSAtIHJlY29ubmVjdFN0YXJ0VGltZX0gbXMgYW5kICR7cHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0c30gZmFpbGVkIGF0dGVtcHRzLiBDb25uZWN0aW9uIGRpc2Nvbm5lY3RpbmcuYCk7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgX2dldE5leHRSZXRyeURlbGF5KHByZXZpb3VzUmV0cnlDb3VudCwgZWxhcHNlZE1pbGxpc2Vjb25kcywgcmV0cnlSZWFzb24pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0UG9saWN5Lm5leHRSZXRyeURlbGF5SW5NaWxsaXNlY29uZHMoe1xyXG4gICAgICAgICAgICAgICAgZWxhcHNlZE1pbGxpc2Vjb25kcyxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUmV0cnlDb3VudCxcclxuICAgICAgICAgICAgICAgIHJldHJ5UmVhc29uLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYElSZXRyeVBvbGljeS5uZXh0UmV0cnlEZWxheUluTWlsbGlzZWNvbmRzKCR7cHJldmlvdXNSZXRyeUNvdW50fSwgJHtlbGFwc2VkTWlsbGlzZWNvbmRzfSkgdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfY2FuY2VsQ2FsbGJhY2tzV2l0aEVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGNhbGxiYWNrcylcclxuICAgICAgICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrc1trZXldO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgU3RyZWFtICdlcnJvcicgY2FsbGJhY2sgY2FsbGVkIHdpdGggJyR7ZXJyb3J9JyB0aHJldyBlcnJvcjogJHtnZXRFcnJvclN0cmluZyhlKX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2NsZWFudXBQaW5nVGltZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BpbmdTZXJ2ZXJIYW5kbGUpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3BpbmdTZXJ2ZXJIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9waW5nU2VydmVySGFuZGxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9jbGVhbnVwVGltZW91dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZW91dEhhbmRsZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dEhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUludm9jYXRpb24obWV0aG9kTmFtZSwgYXJncywgbm9uYmxvY2tpbmcsIHN0cmVhbUlkcykge1xyXG4gICAgICAgIGlmIChub25ibG9ja2luZykge1xyXG4gICAgICAgICAgICBpZiAoc3RyZWFtSWRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaW52b2NhdGlvbklkID0gdGhpcy5faW52b2NhdGlvbklkO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnZvY2F0aW9uSWQrKztcclxuICAgICAgICAgICAgaWYgKHN0cmVhbUlkcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGludm9jYXRpb25JZDogaW52b2NhdGlvbklkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGludm9jYXRpb25JZDogaW52b2NhdGlvbklkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkludm9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2xhdW5jaFN0cmVhbXMoc3RyZWFtcywgcHJvbWlzZVF1ZXVlKSB7XHJcbiAgICAgICAgaWYgKHN0cmVhbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3luY2hyb25pemUgc3RyZWFtIGRhdGEgc28gdGhleSBhcnJpdmUgaW4tb3JkZXIgb24gdGhlIHNlcnZlclxyXG4gICAgICAgIGlmICghcHJvbWlzZVF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZSB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgdGhlIGtleXMgYXJlIHRoZSBzdHJlYW0gaWRzXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxyXG4gICAgICAgIGZvciAoY29uc3Qgc3RyZWFtSWQgaW4gc3RyZWFtcykge1xyXG4gICAgICAgICAgICBzdHJlYW1zW3N0cmVhbUlkXS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbigoKSA9PiB0aGlzLl9zZW5kV2l0aFByb3RvY29sKHRoaXMuX2NyZWF0ZUNvbXBsZXRpb25NZXNzYWdlKHN0cmVhbUlkKSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyICYmIGVyci50b1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJVbmtub3duIGVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IHByb21pc2VRdWV1ZS50aGVuKCgpID0+IHRoaXMuX3NlbmRXaXRoUHJvdG9jb2wodGhpcy5fY3JlYXRlQ29tcGxldGlvbk1lc3NhZ2Uoc3RyZWFtSWQsIG1lc3NhZ2UpKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV4dDogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbigoKSA9PiB0aGlzLl9zZW5kV2l0aFByb3RvY29sKHRoaXMuX2NyZWF0ZVN0cmVhbUl0ZW1NZXNzYWdlKHN0cmVhbUlkLCBpdGVtKSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlcGxhY2VTdHJlYW1pbmdQYXJhbXMoYXJncykge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbXMgPSBbXTtcclxuICAgICAgICBjb25zdCBzdHJlYW1JZHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYXJndW1lbnQgPSBhcmdzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNPYnNlcnZhYmxlKGFyZ3VtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFtSWQgPSB0aGlzLl9pbnZvY2F0aW9uSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZvY2F0aW9uSWQrKztcclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzdHJlYW0gZm9yIGxhdGVyIHVzZVxyXG4gICAgICAgICAgICAgICAgc3RyZWFtc1tzdHJlYW1JZF0gPSBhcmd1bWVudDtcclxuICAgICAgICAgICAgICAgIHN0cmVhbUlkcy5wdXNoKHN0cmVhbUlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHN0cmVhbSBmcm9tIGFyZ3NcclxuICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbc3RyZWFtcywgc3RyZWFtSWRzXTtcclxuICAgIH1cclxuICAgIF9pc09ic2VydmFibGUoYXJnKSB7XHJcbiAgICAgICAgLy8gVGhpcyBhbGxvd3Mgb3RoZXIgc3RyZWFtIGltcGxlbWVudGF0aW9ucyB0byBqdXN0IHdvcmsgKGxpa2UgcnhqcylcclxuICAgICAgICByZXR1cm4gYXJnICYmIGFyZy5zdWJzY3JpYmUgJiYgdHlwZW9mIGFyZy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIH1cclxuICAgIF9jcmVhdGVTdHJlYW1JbnZvY2F0aW9uKG1ldGhvZE5hbWUsIGFyZ3MsIHN0cmVhbUlkcykge1xyXG4gICAgICAgIGNvbnN0IGludm9jYXRpb25JZCA9IHRoaXMuX2ludm9jYXRpb25JZDtcclxuICAgICAgICB0aGlzLl9pbnZvY2F0aW9uSWQrKztcclxuICAgICAgICBpZiAoc3RyZWFtSWRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpbnZvY2F0aW9uSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHN0cmVhbUlkcyxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlN0cmVhbUludm9jYXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpbnZvY2F0aW9uSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlN0cmVhbUludm9jYXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUNhbmNlbEludm9jYXRpb24oaWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5DYW5jZWxJbnZvY2F0aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlU3RyZWFtSXRlbU1lc3NhZ2UoaWQsIGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGlkLFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5TdHJlYW1JdGVtLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlQ29tcGxldGlvbk1lc3NhZ2UoaWQsIGVycm9yLCByZXN1bHQpIHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25JZDogaWQsXHJcbiAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuQ29tcGxldGlvbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh1YkNvbm5lY3Rpb24uanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBEZWZhdWx0UmVjb25uZWN0UG9saWN5IH0gZnJvbSBcIi4vRGVmYXVsdFJlY29ubmVjdFBvbGljeVwiO1xyXG5pbXBvcnQgeyBIdHRwQ29ubmVjdGlvbiB9IGZyb20gXCIuL0h0dHBDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IEh1YkNvbm5lY3Rpb24gfSBmcm9tIFwiLi9IdWJDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBKc29uSHViUHJvdG9jb2wgfSBmcm9tIFwiLi9Kc29uSHViUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTnVsbExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlcnNcIjtcclxuaW1wb3J0IHsgQXJnLCBDb25zb2xlTG9nZ2VyIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuY29uc3QgTG9nTGV2ZWxOYW1lTWFwcGluZyA9IHtcclxuICAgIHRyYWNlOiBMb2dMZXZlbC5UcmFjZSxcclxuICAgIGRlYnVnOiBMb2dMZXZlbC5EZWJ1ZyxcclxuICAgIGluZm86IExvZ0xldmVsLkluZm9ybWF0aW9uLFxyXG4gICAgaW5mb3JtYXRpb246IExvZ0xldmVsLkluZm9ybWF0aW9uLFxyXG4gICAgd2FybjogTG9nTGV2ZWwuV2FybmluZyxcclxuICAgIHdhcm5pbmc6IExvZ0xldmVsLldhcm5pbmcsXHJcbiAgICBlcnJvcjogTG9nTGV2ZWwuRXJyb3IsXHJcbiAgICBjcml0aWNhbDogTG9nTGV2ZWwuQ3JpdGljYWwsXHJcbiAgICBub25lOiBMb2dMZXZlbC5Ob25lLFxyXG59O1xyXG5mdW5jdGlvbiBwYXJzZUxvZ0xldmVsKG5hbWUpIHtcclxuICAgIC8vIENhc2UtaW5zZW5zaXRpdmUgbWF0Y2hpbmcgdmlhIGxvd2VyLWNhc2luZ1xyXG4gICAgLy8gWWVzLCBJIGtub3cgY2FzZS1mb2xkaW5nIGlzIGEgY29tcGxpY2F0ZWQgcHJvYmxlbSBpbiBVbmljb2RlLCBidXQgd2Ugb25seSBzdXBwb3J0XHJcbiAgICAvLyB0aGUgQVNDSUkgc3RyaW5ncyBkZWZpbmVkIGluIExvZ0xldmVsTmFtZU1hcHBpbmcgYW55d2F5LCBzbyBpdCdzIGZpbmUgLWFudXJzZS5cclxuICAgIGNvbnN0IG1hcHBpbmcgPSBMb2dMZXZlbE5hbWVNYXBwaW5nW25hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICBpZiAodHlwZW9mIG1hcHBpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gbWFwcGluZztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBsb2cgbGV2ZWw6ICR7bmFtZX1gKTtcclxuICAgIH1cclxufVxyXG4vKiogQSBidWlsZGVyIGZvciBjb25maWd1cmluZyB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh1YkNvbm5lY3Rpb259IGluc3RhbmNlcy4gKi9cclxuZXhwb3J0IGNsYXNzIEh1YkNvbm5lY3Rpb25CdWlsZGVyIHtcclxuICAgIGNvbmZpZ3VyZUxvZ2dpbmcobG9nZ2luZykge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKGxvZ2dpbmcsIFwibG9nZ2luZ1wiKTtcclxuICAgICAgICBpZiAoaXNMb2dnZXIobG9nZ2luZykpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgbG9nZ2luZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCBsb2dMZXZlbCA9IHBhcnNlTG9nTGV2ZWwobG9nZ2luZyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IENvbnNvbGVMb2dnZXIobG9nTGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgQ29uc29sZUxvZ2dlcihsb2dnaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB3aXRoVXJsKHVybCwgdHJhbnNwb3J0VHlwZU9yT3B0aW9ucykge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgQXJnLmlzTm90RW1wdHkodXJsLCBcInVybFwiKTtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICAvLyBGbG93LXR5cGluZyBrbm93cyB3aGVyZSBpdCdzIGF0LiBTaW5jZSBIdHRwVHJhbnNwb3J0VHlwZSBpcyBhIG51bWJlciBhbmQgSUh0dHBDb25uZWN0aW9uT3B0aW9ucyBpcyBndWFyYW50ZWVkXHJcbiAgICAgICAgLy8gdG8gYmUgYW4gb2JqZWN0LCB3ZSBrbm93IChhcyBkb2VzIFR5cGVTY3JpcHQpIHRoaXMgY29tcGFyaXNvbiBpcyBhbGwgd2UgbmVlZCB0byBmaWd1cmUgb3V0IHdoaWNoIG92ZXJsb2FkIHdhcyBjYWxsZWQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc3BvcnRUeXBlT3JPcHRpb25zID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cENvbm5lY3Rpb25PcHRpb25zID0geyAuLi50aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucywgLi4udHJhbnNwb3J0VHlwZU9yT3B0aW9ucyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogdHJhbnNwb3J0VHlwZU9yT3B0aW9ucyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKiogQ29uZmlndXJlcyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdWJDb25uZWN0aW9ufSB0byB1c2UgdGhlIHNwZWNpZmllZCBIdWIgUHJvdG9jb2wuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtJSHViUHJvdG9jb2x9IHByb3RvY29sIFRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLklIdWJQcm90b2NvbH0gaW1wbGVtZW50YXRpb24gdG8gdXNlLlxyXG4gICAgICovXHJcbiAgICB3aXRoSHViUHJvdG9jb2wocHJvdG9jb2wpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZChwcm90b2NvbCwgXCJwcm90b2NvbFwiKTtcclxuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2w7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB3aXRoQXV0b21hdGljUmVjb25uZWN0KHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSByZWNvbm5lY3RQb2xpY3kgaGFzIGFscmVhZHkgYmVlbiBzZXQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RQb2xpY3kgPSBuZXcgRGVmYXVsdFJlY29ubmVjdFBvbGljeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0UG9saWN5ID0gbmV3IERlZmF1bHRSZWNvbm5lY3RQb2xpY3kocmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdFBvbGljeSA9IHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3k7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIENyZWF0ZXMgYSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh1YkNvbm5lY3Rpb259IGZyb20gdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBzcGVjaWZpZWQgaW4gdGhpcyBidWlsZGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtIdWJDb25uZWN0aW9ufSBUaGUgY29uZmlndXJlZCB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh1YkNvbm5lY3Rpb259LlxyXG4gICAgICovXHJcbiAgICBidWlsZCgpIHtcclxuICAgICAgICAvLyBJZiBodHRwQ29ubmVjdGlvbk9wdGlvbnMgaGFzIGEgbG9nZ2VyLCB1c2UgaXQuIE90aGVyd2lzZSwgb3ZlcnJpZGUgaXQgd2l0aCB0aGUgb25lXHJcbiAgICAgICAgLy8gcHJvdmlkZWQgdG8gY29uZmlndXJlTG9nZ2VyXHJcbiAgICAgICAgY29uc3QgaHR0cENvbm5lY3Rpb25PcHRpb25zID0gdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMgfHwge307XHJcbiAgICAgICAgLy8gSWYgaXQncyAnbnVsbCcsIHRoZSB1c2VyICoqZXhwbGljaXRseSoqIGFza2VkIGZvciBudWxsLCBkb24ndCBtZXNzIHdpdGggaXQuXHJcbiAgICAgICAgaWYgKGh0dHBDb25uZWN0aW9uT3B0aW9ucy5sb2dnZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBJZiBvdXIgbG9nZ2VyIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGF0J3MgT0ssIHRoZSBIdHRwQ29ubmVjdGlvbiBjb25zdHJ1Y3RvciB3aWxsIGhhbmRsZSBpdC5cclxuICAgICAgICAgICAgaHR0cENvbm5lY3Rpb25PcHRpb25zLmxvZ2dlciA9IHRoaXMubG9nZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBOb3cgY3JlYXRlIHRoZSBjb25uZWN0aW9uXHJcbiAgICAgICAgaWYgKCF0aGlzLnVybCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ0h1YkNvbm5lY3Rpb25CdWlsZGVyLndpdGhVcmwnIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgYnVpbGRpbmcgdGhlIGNvbm5lY3Rpb24uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IEh0dHBDb25uZWN0aW9uKHRoaXMudXJsLCBodHRwQ29ubmVjdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBIdWJDb25uZWN0aW9uLmNyZWF0ZShjb25uZWN0aW9uLCB0aGlzLmxvZ2dlciB8fCBOdWxsTG9nZ2VyLmluc3RhbmNlLCB0aGlzLnByb3RvY29sIHx8IG5ldyBKc29uSHViUHJvdG9jb2woKSwgdGhpcy5yZWNvbm5lY3RQb2xpY3kpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzTG9nZ2VyKGxvZ2dlcikge1xyXG4gICAgcmV0dXJuIGxvZ2dlci5sb2cgIT09IHVuZGVmaW5lZDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdWJDb25uZWN0aW9uQnVpbGRlci5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8qKiBEZWZpbmVzIHRoZSB0eXBlIG9mIGEgSHViIE1lc3NhZ2UuICovXHJcbmV4cG9ydCB2YXIgTWVzc2FnZVR5cGU7XHJcbihmdW5jdGlvbiAoTWVzc2FnZVR5cGUpIHtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYW4gSW52b2NhdGlvbiBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkludm9jYXRpb25NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkludm9jYXRpb25cIl0gPSAxXSA9IFwiSW52b2NhdGlvblwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIFN0cmVhbUl0ZW0gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5TdHJlYW1JdGVtTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJTdHJlYW1JdGVtXCJdID0gMl0gPSBcIlN0cmVhbUl0ZW1cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBDb21wbGV0aW9uIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuQ29tcGxldGlvbk1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiQ29tcGxldGlvblwiXSA9IDNdID0gXCJDb21wbGV0aW9uXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgU3RyZWFtIEludm9jYXRpb24gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5TdHJlYW1JbnZvY2F0aW9uTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJTdHJlYW1JbnZvY2F0aW9uXCJdID0gNF0gPSBcIlN0cmVhbUludm9jYXRpb25cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBDYW5jZWwgSW52b2NhdGlvbiBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkNhbmNlbEludm9jYXRpb25NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkNhbmNlbEludm9jYXRpb25cIl0gPSA1XSA9IFwiQ2FuY2VsSW52b2NhdGlvblwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIFBpbmcgbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5QaW5nTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJQaW5nXCJdID0gNl0gPSBcIlBpbmdcIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBDbG9zZSBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkNsb3NlTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJDbG9zZVwiXSA9IDddID0gXCJDbG9zZVwiO1xyXG59KShNZXNzYWdlVHlwZSB8fCAoTWVzc2FnZVR5cGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JSHViUHJvdG9jb2wuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBUaGVzZSB2YWx1ZXMgYXJlIGRlc2lnbmVkIHRvIG1hdGNoIHRoZSBBU1AuTkVUIExvZyBMZXZlbHMgc2luY2UgdGhhdCdzIHRoZSBwYXR0ZXJuIHdlJ3JlIGVtdWxhdGluZyBoZXJlLlxyXG4vKiogSW5kaWNhdGVzIHRoZSBzZXZlcml0eSBvZiBhIGxvZyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBMb2cgTGV2ZWxzIGFyZSBvcmRlcmVkIGluIGluY3JlYXNpbmcgc2V2ZXJpdHkuIFNvIGBEZWJ1Z2AgaXMgbW9yZSBzZXZlcmUgdGhhbiBgVHJhY2VgLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIExvZ0xldmVsO1xyXG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciB2ZXJ5IGxvdyBzZXZlcml0eSBkaWFnbm9zdGljIG1lc3NhZ2VzLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJUcmFjZVwiXSA9IDBdID0gXCJUcmFjZVwiO1xyXG4gICAgLyoqIExvZyBsZXZlbCBmb3IgbG93IHNldmVyaXR5IGRpYWdub3N0aWMgbWVzc2FnZXMuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRlYnVnXCJdID0gMV0gPSBcIkRlYnVnXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBpbmZvcm1hdGlvbmFsIGRpYWdub3N0aWMgbWVzc2FnZXMuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkluZm9ybWF0aW9uXCJdID0gMl0gPSBcIkluZm9ybWF0aW9uXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBkaWFnbm9zdGljIG1lc3NhZ2VzIHRoYXQgaW5kaWNhdGUgYSBub24tZmF0YWwgcHJvYmxlbS4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiV2FybmluZ1wiXSA9IDNdID0gXCJXYXJuaW5nXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBkaWFnbm9zdGljIG1lc3NhZ2VzIHRoYXQgaW5kaWNhdGUgYSBmYWlsdXJlIGluIHRoZSBjdXJyZW50IG9wZXJhdGlvbi4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRXJyb3JcIl0gPSA0XSA9IFwiRXJyb3JcIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGRpYWdub3N0aWMgbWVzc2FnZXMgdGhhdCBpbmRpY2F0ZSBhIGZhaWx1cmUgdGhhdCB3aWxsIHRlcm1pbmF0ZSB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJDcml0aWNhbFwiXSA9IDVdID0gXCJDcml0aWNhbFwiO1xyXG4gICAgLyoqIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGxvZyBsZXZlbC4gVXNlZCB3aGVuIGNvbmZpZ3VyaW5nIGxvZ2dpbmcgdG8gaW5kaWNhdGUgdGhhdCBubyBsb2cgbWVzc2FnZXMgc2hvdWxkIGJlIGVtaXR0ZWQuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIk5vbmVcIl0gPSA2XSA9IFwiTm9uZVwiO1xyXG59KShMb2dMZXZlbCB8fCAoTG9nTGV2ZWwgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JTG9nZ2VyLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gVGhpcyB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBiaXQgZmxhZyBpbiB0aGUgZnV0dXJlLCBzbyB3ZSBrZWVwIGl0IHVzaW5nIHBvd2VyLW9mLXR3byB2YWx1ZXMuXHJcbi8qKiBTcGVjaWZpZXMgYSBzcGVjaWZpYyBIVFRQIHRyYW5zcG9ydCB0eXBlLiAqL1xyXG5leHBvcnQgdmFyIEh0dHBUcmFuc3BvcnRUeXBlO1xyXG4oZnVuY3Rpb24gKEh0dHBUcmFuc3BvcnRUeXBlKSB7XHJcbiAgICAvKiogU3BlY2lmaWVzIG5vIHRyYW5zcG9ydCBwcmVmZXJlbmNlLiAqL1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGVbSHR0cFRyYW5zcG9ydFR5cGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhlIFdlYlNvY2tldHMgdHJhbnNwb3J0LiAqL1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGVbSHR0cFRyYW5zcG9ydFR5cGVbXCJXZWJTb2NrZXRzXCJdID0gMV0gPSBcIldlYlNvY2tldHNcIjtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhlIFNlcnZlci1TZW50IEV2ZW50cyB0cmFuc3BvcnQuICovXHJcbiAgICBIdHRwVHJhbnNwb3J0VHlwZVtIdHRwVHJhbnNwb3J0VHlwZVtcIlNlcnZlclNlbnRFdmVudHNcIl0gPSAyXSA9IFwiU2VydmVyU2VudEV2ZW50c1wiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGUgTG9uZyBQb2xsaW5nIHRyYW5zcG9ydC4gKi9cclxuICAgIEh0dHBUcmFuc3BvcnRUeXBlW0h0dHBUcmFuc3BvcnRUeXBlW1wiTG9uZ1BvbGxpbmdcIl0gPSA0XSA9IFwiTG9uZ1BvbGxpbmdcIjtcclxufSkoSHR0cFRyYW5zcG9ydFR5cGUgfHwgKEh0dHBUcmFuc3BvcnRUeXBlID0ge30pKTtcclxuLyoqIFNwZWNpZmllcyB0aGUgdHJhbnNmZXIgZm9ybWF0IGZvciBhIGNvbm5lY3Rpb24uICovXHJcbmV4cG9ydCB2YXIgVHJhbnNmZXJGb3JtYXQ7XHJcbihmdW5jdGlvbiAoVHJhbnNmZXJGb3JtYXQpIHtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhhdCBvbmx5IHRleHQgZGF0YSB3aWxsIGJlIHRyYW5zbWl0dGVkIG92ZXIgdGhlIGNvbm5lY3Rpb24uICovXHJcbiAgICBUcmFuc2ZlckZvcm1hdFtUcmFuc2ZlckZvcm1hdFtcIlRleHRcIl0gPSAxXSA9IFwiVGV4dFwiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGF0IGJpbmFyeSBkYXRhIHdpbGwgYmUgdHJhbnNtaXR0ZWQgb3ZlciB0aGUgY29ubmVjdGlvbi4gKi9cclxuICAgIFRyYW5zZmVyRm9ybWF0W1RyYW5zZmVyRm9ybWF0W1wiQmluYXJ5XCJdID0gMl0gPSBcIkJpbmFyeVwiO1xyXG59KShUcmFuc2ZlckZvcm1hdCB8fCAoVHJhbnNmZXJGb3JtYXQgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVHJhbnNwb3J0LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9JSHViUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBOdWxsTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2Vyc1wiO1xyXG5pbXBvcnQgeyBUZXh0TWVzc2FnZUZvcm1hdCB9IGZyb20gXCIuL1RleHRNZXNzYWdlRm9ybWF0XCI7XHJcbmNvbnN0IEpTT05fSFVCX1BST1RPQ09MX05BTUUgPSBcImpzb25cIjtcclxuLyoqIEltcGxlbWVudHMgdGhlIEpTT04gSHViIFByb3RvY29sLiAqL1xyXG5leHBvcnQgY2xhc3MgSnNvbkh1YlByb3RvY29sIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgICAgIHRoaXMubmFtZSA9IEpTT05fSFVCX1BST1RPQ09MX05BTUU7XHJcbiAgICAgICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gMTtcclxuICAgICAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgICAgICB0aGlzLnRyYW5zZmVyRm9ybWF0ID0gVHJhbnNmZXJGb3JtYXQuVGV4dDtcclxuICAgIH1cclxuICAgIC8qKiBDcmVhdGVzIGFuIGFycmF5IG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHViTWVzc2FnZX0gb2JqZWN0cyBmcm9tIHRoZSBzcGVjaWZpZWQgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgQSBzdHJpbmcgY29udGFpbmluZyB0aGUgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqIEBwYXJhbSB7SUxvZ2dlcn0gbG9nZ2VyIEEgbG9nZ2VyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGxvZyBtZXNzYWdlcyB0aGF0IG9jY3VyIGR1cmluZyBwYXJzaW5nLlxyXG4gICAgICovXHJcbiAgICBwYXJzZU1lc3NhZ2VzKGlucHV0LCBsb2dnZXIpIHtcclxuICAgICAgICAvLyBUaGUgaW50ZXJmYWNlIGRvZXMgYWxsb3cgXCJBcnJheUJ1ZmZlclwiIHRvIGJlIHBhc3NlZCBpbiwgYnV0IHRoaXMgaW1wbGVtZW50YXRpb24gZG9lcyBub3QuIFNvIGxldCdzIHRocm93IGEgdXNlZnVsIGVycm9yLlxyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCBmb3IgSlNPTiBodWIgcHJvdG9jb2wuIEV4cGVjdGVkIGEgc3RyaW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2dnZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9nZ2VyID0gTnVsbExvZ2dlci5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUGFyc2UgdGhlIG1lc3NhZ2VzXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBUZXh0TWVzc2FnZUZvcm1hdC5wYXJzZShpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgaHViTWVzc2FnZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkTWVzc2FnZSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyc2VkTWVzc2FnZS50eXBlICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBheWxvYWQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN3aXRjaCAocGFyc2VkTWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkludm9jYXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNJbnZvY2F0aW9uTWVzc2FnZShwYXJzZWRNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU3RyZWFtSXRlbTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1N0cmVhbUl0ZW1NZXNzYWdlKHBhcnNlZE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQ29tcGxldGlvbk1lc3NhZ2UocGFyc2VkTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlBpbmc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luZ2xlIHZhbHVlLCBubyBuZWVkIHRvIHZhbGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNsb3NlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFsbCBvcHRpb25hbCB2YWx1ZXMsIG5vIG5lZWQgdG8gdmFsaWRhdGVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRnV0dXJlIHByb3RvY29sIGNoYW5nZXMgY2FuIGFkZCBtZXNzYWdlIHR5cGVzLCBvbGQgY2xpZW50cyBjYW4gaWdub3JlIHRoZW1cclxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIlVua25vd24gbWVzc2FnZSB0eXBlICdcIiArIHBhcnNlZE1lc3NhZ2UudHlwZSArIFwiJyBpZ25vcmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBodWJNZXNzYWdlcy5wdXNoKHBhcnNlZE1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHViTWVzc2FnZXM7XHJcbiAgICB9XHJcbiAgICAvKiogV3JpdGVzIHRoZSBzcGVjaWZpZWQge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdWJNZXNzYWdlfSB0byBhIHN0cmluZyBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0h1Yk1lc3NhZ2V9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gd3JpdGUuXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIHRoZSBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICB3cml0ZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBUZXh0TWVzc2FnZUZvcm1hdC53cml0ZShKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcbiAgICB9XHJcbiAgICBfaXNJbnZvY2F0aW9uTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS50YXJnZXQsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBJbnZvY2F0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlLmludm9jYXRpb25JZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2VydE5vdEVtcHR5U3RyaW5nKG1lc3NhZ2UuaW52b2NhdGlvbklkLCBcIkludmFsaWQgcGF5bG9hZCBmb3IgSW52b2NhdGlvbiBtZXNzYWdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaXNTdHJlYW1JdGVtTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS5pbnZvY2F0aW9uSWQsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBTdHJlYW1JdGVtIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlLml0ZW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBheWxvYWQgZm9yIFN0cmVhbUl0ZW0gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2lzQ29tcGxldGlvbk1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLnJlc3VsdCAmJiBtZXNzYWdlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGF5bG9hZCBmb3IgQ29tcGxldGlvbiBtZXNzYWdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtZXNzYWdlLnJlc3VsdCAmJiBtZXNzYWdlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2VydE5vdEVtcHR5U3RyaW5nKG1lc3NhZ2UuZXJyb3IsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBDb21wbGV0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLmludm9jYXRpb25JZCwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIENvbXBsZXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICB9XHJcbiAgICBfYXNzZXJ0Tm90RW1wdHlTdHJpbmcodmFsdWUsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgdmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUpzb25IdWJQcm90b2NvbC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8qKiBBIGxvZ2dlciB0aGF0IGRvZXMgbm90aGluZyB3aGVuIGxvZyBtZXNzYWdlcyBhcmUgc2VudCB0byBpdC4gKi9cclxuZXhwb3J0IGNsYXNzIE51bGxMb2dnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBsb2coX2xvZ0xldmVsLCBfbWVzc2FnZSkge1xyXG4gICAgfVxyXG59XHJcbi8qKiBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLk51bGxMb2dnZXJ9LiAqL1xyXG5OdWxsTG9nZ2VyLmluc3RhbmNlID0gbmV3IE51bGxMb2dnZXIoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9nZ2Vycy5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEFib3J0Q29udHJvbGxlciB9IGZyb20gXCIuL0Fib3J0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3IsIFRpbWVvdXRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBIZWFkZXJOYW1lcyB9IGZyb20gXCIuL0hlYWRlck5hbWVzXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBnZXREYXRhRGV0YWlsLCBnZXRVc2VyQWdlbnRIZWFkZXIsIHNlbmRNZXNzYWdlIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLy8gTm90IGV4cG9ydGVkIGZyb20gJ2luZGV4JywgdGhpcyB0eXBlIGlzIGludGVybmFsLlxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIExvbmdQb2xsaW5nVHJhbnNwb3J0IHtcclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgbG9nZ2VyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5ID0gYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLl9wb2xsQWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25yZWNlaXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8gVGhpcyBpcyBhbiBpbnRlcm5hbCB0eXBlLCBub3QgZXhwb3J0ZWQgZnJvbSAnaW5kZXgnIHNvIHRoaXMgaXMgcmVhbGx5IGp1c3QgaW50ZXJuYWwuXHJcbiAgICBnZXQgcG9sbEFib3J0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbGxBYm9ydC5hYm9ydGVkO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY29ubmVjdCh1cmwsIHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodXJsLCBcInVybFwiKTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh0cmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICBBcmcuaXNJbih0cmFuc2ZlckZvcm1hdCwgVHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgQ29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgLy8gQWxsb3cgYmluYXJ5IGZvcm1hdCBvbiBOb2RlIGFuZCBCcm93c2VycyB0aGF0IHN1cHBvcnQgYmluYXJ5IGNvbnRlbnQgKGluZGljYXRlZCBieSB0aGUgcHJlc2VuY2Ugb2YgcmVzcG9uc2VUeXBlIHByb3BlcnR5KVxyXG4gICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdCA9PT0gVHJhbnNmZXJGb3JtYXQuQmluYXJ5ICYmXHJcbiAgICAgICAgICAgICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG5ldyBYTUxIdHRwUmVxdWVzdCgpLnJlc3BvbnNlVHlwZSAhPT0gXCJzdHJpbmdcIikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmluYXJ5IHByb3RvY29scyBvdmVyIFhtbEh0dHBSZXF1ZXN0IG5vdCBpbXBsZW1lbnRpbmcgYWR2YW5jZWQgZmVhdHVyZXMgYXJlIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZ2V0VXNlckFnZW50SGVhZGVyKCk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgW25hbWVdOiB2YWx1ZSwgLi4udGhpcy5fb3B0aW9ucy5oZWFkZXJzIH07XHJcbiAgICAgICAgY29uc3QgcG9sbE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGFib3J0U2lnbmFsOiB0aGlzLl9wb2xsQWJvcnQuc2lnbmFsLFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwMDAsXHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5fb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodHJhbnNmZXJGb3JtYXQgPT09IFRyYW5zZmVyRm9ybWF0LkJpbmFyeSkge1xyXG4gICAgICAgICAgICBwb2xsT3B0aW9ucy5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVIZWFkZXJUb2tlbihwb2xsT3B0aW9ucywgdG9rZW4pO1xyXG4gICAgICAgIC8vIE1ha2UgaW5pdGlhbCBsb25nIHBvbGxpbmcgcmVxdWVzdFxyXG4gICAgICAgIC8vIFNlcnZlciB1c2VzIGZpcnN0IGxvbmcgcG9sbGluZyByZXF1ZXN0IHRvIGZpbmlzaCBpbml0aWFsaXppbmcgY29ubmVjdGlvbiBhbmQgaXQgcmV0dXJucyB3aXRob3V0IGRhdGFcclxuICAgICAgICBjb25zdCBwb2xsVXJsID0gYCR7dXJsfSZfPSR7RGF0ZS5ub3coKX1gO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBwb2xsaW5nOiAke3BvbGxVcmx9LmApO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5faHR0cENsaWVudC5nZXQocG9sbFVybCwgcG9sbE9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIFVuZXhwZWN0ZWQgcmVzcG9uc2UgY29kZTogJHtyZXNwb25zZS5zdGF0dXNDb2RlfS5gKTtcclxuICAgICAgICAgICAgLy8gTWFyayBydW5uaW5nIGFzIGZhbHNlIHNvIHRoYXQgdGhlIHBvbGwgaW1tZWRpYXRlbHkgZW5kcyBhbmQgcnVucyB0aGUgY2xvc2UgbG9naWNcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2VFcnJvciA9IG5ldyBIdHRwRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCB8fCBcIlwiLCByZXNwb25zZS5zdGF0dXNDb2RlKTtcclxuICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlY2VpdmluZyA9IHRoaXMuX3BvbGwodGhpcy5fdXJsLCBwb2xsT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBfZ2V0QWNjZXNzVG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgX3VwZGF0ZUhlYWRlclRva2VuKHJlcXVlc3QsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnNbSGVhZGVyTmFtZXMuQXV0aG9yaXphdGlvbl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVxdWVzdC5oZWFkZXJzW0hlYWRlck5hbWVzLkF1dGhvcml6YXRpb25dKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbSGVhZGVyTmFtZXMuQXV0aG9yaXphdGlvbl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgX3BvbGwodXJsLCBwb2xsT3B0aW9ucykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRvIGdldCB0aGUgYWNjZXNzIHRva2VuIG9uIGVhY2ggcG9sbCwgaW4gY2FzZSBpdCBjaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2dldEFjY2Vzc1Rva2VuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVIZWFkZXJUb2tlbihwb2xsT3B0aW9ucywgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2xsVXJsID0gYCR7dXJsfSZfPSR7RGF0ZS5ub3coKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBwb2xsaW5nOiAke3BvbGxVcmx9LmApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5faHR0cENsaWVudC5nZXQocG9sbFVybCwgcG9sbE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsIHRlcm1pbmF0ZWQgYnkgc2VydmVyLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIFVuZXhwZWN0ZWQgcmVzcG9uc2UgY29kZTogJHtyZXNwb25zZS5zdGF0dXNDb2RlfS5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5leHBlY3RlZCBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZUVycm9yID0gbmV3IEh0dHBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0IHx8IFwiXCIsIHJlc3BvbnNlLnN0YXR1c0NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIGRhdGEgcmVjZWl2ZWQuICR7Z2V0RGF0YURldGFpbChyZXNwb25zZS5jb250ZW50LCB0aGlzLl9vcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50KX0uYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vbnJlY2VpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ucmVjZWl2ZShyZXNwb25zZS5jb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW5vdGhlciB3YXkgdGltZW91dCBtYW5pZmVzdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbCB0aW1lZCBvdXQsIHJlaXNzdWluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fcnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMb2cgYnV0IGRpc3JlZ2FyZCBlcnJvcnMgdGhhdCBvY2N1ciBhZnRlciBzdG9wcGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbCBlcnJvcmVkIGFmdGVyIHNodXRkb3duOiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgVGltZW91dEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgdGltZW91dHMgYW5kIHJlaXNzdWUgdGhlIHBvbGwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGwgdGltZWQgb3V0LCByZWlzc3VpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGNvbm5lY3Rpb24gd2l0aCB0aGUgZXJyb3IgYXMgdGhlIHJlc3VsdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlRXJyb3IgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGxpbmcgY29tcGxldGUuXCIpO1xyXG4gICAgICAgICAgICAvLyBXZSB3aWxsIHJlYWNoIGhlcmUgd2l0aCBwb2xsQWJvcnRlZD09ZmFsc2Ugd2hlbiB0aGUgc2VydmVyIHJldHVybmVkIGEgcmVzcG9uc2UgY2F1c2luZyB0aGUgdHJhbnNwb3J0IHRvIHN0b3AuXHJcbiAgICAgICAgICAgIC8vIElmIHBvbGxBYm9ydGVkPT10cnVlIHRoZW4gY2xpZW50IGluaXRpYXRlZCB0aGUgc3RvcCBhbmQgdGhlIHN0b3AgbWV0aG9kIHdpbGwgcmFpc2UgdGhlIGNsb3NlIGV2ZW50IGFmdGVyIERFTEVURSBpcyBzZW50LlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucG9sbEFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhaXNlT25DbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc2VuZCB1bnRpbCB0aGUgdHJhbnNwb3J0IGlzIGNvbm5lY3RlZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZW5kTWVzc2FnZSh0aGlzLl9sb2dnZXIsIFwiTG9uZ1BvbGxpbmdcIiwgdGhpcy5faHR0cENsaWVudCwgdGhpcy5fdXJsLCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnksIGRhdGEsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFN0b3BwaW5nIHBvbGxpbmcuXCIpO1xyXG4gICAgICAgIC8vIFRlbGwgcmVjZWl2aW5nIGxvb3AgdG8gc3RvcCwgYWJvcnQgYW55IGN1cnJlbnQgcmVxdWVzdCwgYW5kIHRoZW4gd2FpdCBmb3IgaXQgdG8gZmluaXNoXHJcbiAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3BvbGxBYm9ydC5hYm9ydCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3JlY2VpdmluZztcclxuICAgICAgICAgICAgLy8gU2VuZCBERUxFVEUgdG8gY2xlYW4gdXAgbG9uZyBwb2xsaW5nIG9uIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIHNlbmRpbmcgREVMRVRFIHJlcXVlc3QgdG8gJHt0aGlzLl91cmx9LmApO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBnZXRVc2VyQWdlbnRIZWFkZXIoKTtcclxuICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAuLi5oZWFkZXJzLCAuLi50aGlzLl9vcHRpb25zLmhlYWRlcnMgfSxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuX29wdGlvbnMudGltZW91dCxcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5fb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSGVhZGVyVG9rZW4oZGVsZXRlT3B0aW9ucywgdG9rZW4pO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9odHRwQ2xpZW50LmRlbGV0ZSh0aGlzLl91cmwsIGRlbGV0ZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIERFTEVURSByZXF1ZXN0IHNlbnQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBTdG9wIGZpbmlzaGVkLlwiKTtcclxuICAgICAgICAgICAgLy8gUmFpc2UgY2xvc2UgZXZlbnQgaGVyZSBpbnN0ZWFkIG9mIGluIHBvbGxpbmdcclxuICAgICAgICAgICAgLy8gSXQgbmVlZHMgdG8gaGFwcGVuIGFmdGVyIHRoZSBERUxFVEUgcmVxdWVzdCBpcyBzZW50XHJcbiAgICAgICAgICAgIHRoaXMuX3JhaXNlT25DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yYWlzZU9uQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25jbG9zZSkge1xyXG4gICAgICAgICAgICBsZXQgbG9nTWVzc2FnZSA9IFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgRmlyaW5nIG9uY2xvc2UgZXZlbnQuXCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dNZXNzYWdlICs9IFwiIEVycm9yOiBcIiArIHRoaXMuX2Nsb3NlRXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgbG9nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMub25jbG9zZSh0aGlzLl9jbG9zZUVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9uZ1BvbGxpbmdUcmFuc3BvcnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IEFyZywgZ2V0RGF0YURldGFpbCwgZ2V0VXNlckFnZW50SGVhZGVyLCBQbGF0Zm9ybSwgc2VuZE1lc3NhZ2UgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQge1xyXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudCwgYWNjZXNzVG9rZW5GYWN0b3J5LCBsb2dnZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkgPSBhY2Nlc3NUb2tlbkZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMub25yZWNlaXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY29ubmVjdCh1cmwsIHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodXJsLCBcInVybFwiKTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh0cmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICBBcmcuaXNJbih0cmFuc2ZlckZvcm1hdCwgVHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoU1NFIHRyYW5zcG9ydCkgQ29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgLy8gc2V0IHVybCBiZWZvcmUgYWNjZXNzVG9rZW5GYWN0b3J5IGJlY2F1c2UgdGhpcy51cmwgaXMgb25seSBmb3Igc2VuZCBhbmQgd2Ugc2V0IHRoZSBhdXRoIGhlYWRlciBpbnN0ZWFkIG9mIHRoZSBxdWVyeSBzdHJpbmcgZm9yIHNlbmRcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogXCImXCIpICsgYGFjY2Vzc190b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdCAhPT0gVHJhbnNmZXJGb3JtYXQuVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBTZXJ2ZXItU2VudCBFdmVudHMgdHJhbnNwb3J0IG9ubHkgc3VwcG9ydHMgdGhlICdUZXh0JyB0cmFuc2ZlciBmb3JtYXRcIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBldmVudFNvdXJjZTtcclxuICAgICAgICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciB8fCBQbGF0Zm9ybS5pc1dlYldvcmtlcikge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRTb3VyY2UgPSBuZXcgdGhpcy5fb3B0aW9ucy5FdmVudFNvdXJjZSh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0aGlzLl9vcHRpb25zLndpdGhDcmVkZW50aWFscyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vbi1icm93c2VyIHBhc3NlcyBjb29raWVzIHZpYSB0aGUgZGljdGlvbmFyeVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29va2llcyA9IHRoaXMuX2h0dHBDbGllbnQuZ2V0Q29va2llU3RyaW5nKHVybCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLkNvb2tpZSA9IGNvb2tpZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZ2V0VXNlckFnZW50SGVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZSA9IG5ldyB0aGlzLl9vcHRpb25zLkV2ZW50U291cmNlKHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuX29wdGlvbnMud2l0aENyZWRlbnRpYWxzLCBoZWFkZXJzOiB7IC4uLmhlYWRlcnMsIC4uLnRoaXMuX29wdGlvbnMuaGVhZGVycyB9IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ucmVjZWl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChTU0UgdHJhbnNwb3J0KSBkYXRhIHJlY2VpdmVkLiAke2dldERhdGFEZXRhaWwoZS5kYXRhLCB0aGlzLl9vcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50KX0uYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ucmVjZWl2ZShlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IG5vdCB1c2luZyBldmVudCBvbiBwdXJwb3NlXHJcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbmVycm9yID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFdmVudFNvdXJjZSBkb2Vzbid0IGdpdmUgYW55IHVzZWZ1bCBpbmZvcm1hdGlvbiBhYm91dCBzZXJ2ZXIgc2lkZSBjbG9zZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkV2ZW50U291cmNlIGZhaWxlZCB0byBjb25uZWN0LiBUaGUgY29ubmVjdGlvbiBjb3VsZCBub3QgYmUgZm91bmQgb24gdGhlIHNlcnZlcixcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBlaXRoZXIgdGhlIGNvbm5lY3Rpb24gSUQgaXMgbm90IHByZXNlbnQgb24gdGhlIHNlcnZlciwgb3IgYSBwcm94eSBpcyByZWZ1c2luZy9idWZmZXJpbmcgdGhlIGNvbm5lY3Rpb24uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgSWYgeW91IGhhdmUgbXVsdGlwbGUgc2VydmVycyBjaGVjayB0aGF0IHN0aWNreSBzZXNzaW9ucyBhcmUgZW5hYmxlZC5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYFNTRSBjb25uZWN0ZWQgdG8gJHt0aGlzLl91cmx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRTb3VyY2UgPSBldmVudFNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudFNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHNlbmQgdW50aWwgdGhlIHRyYW5zcG9ydCBpcyBjb25uZWN0ZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VuZE1lc3NhZ2UodGhpcy5fbG9nZ2VyLCBcIlNTRVwiLCB0aGlzLl9odHRwQ2xpZW50LCB0aGlzLl91cmwsIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSwgZGF0YSwgdGhpcy5fb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgX2Nsb3NlKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRTb3VyY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRTb3VyY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jbG9zZShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgU3ViamVjdFN1YnNjcmlwdGlvbiB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8qKiBTdHJlYW0gaW1wbGVtZW50YXRpb24gdG8gc3RyZWFtIGl0ZW1zIHRvIHRoZSBzZXJ2ZXIuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICB9XHJcbiAgICBuZXh0KGl0ZW0pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXJyb3IoZXJyKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVycykge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZlci5jb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcikge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBvYnNlcnZlcik7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIE5vdCBleHBvcnRlZCBmcm9tIGluZGV4XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dE1lc3NhZ2VGb3JtYXQge1xyXG4gICAgc3RhdGljIHdyaXRlKG91dHB1dCkge1xyXG4gICAgICAgIHJldHVybiBgJHtvdXRwdXR9JHtUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3J9YDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBwYXJzZShpbnB1dCkge1xyXG4gICAgICAgIGlmIChpbnB1dFtpbnB1dC5sZW5ndGggLSAxXSAhPT0gVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1lc3NhZ2UgaXMgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gaW5wdXQuc3BsaXQoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yKTtcclxuICAgICAgICBtZXNzYWdlcy5wb3AoKTtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZXM7XHJcbiAgICB9XHJcbn1cclxuVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yQ29kZSA9IDB4MWU7XHJcblRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yQ29kZSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRleHRNZXNzYWdlRm9ybWF0LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IE51bGxMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJzXCI7XHJcbi8vIFZlcnNpb24gdG9rZW4gdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBwcmVwYWNrIGNvbW1hbmRcclxuLyoqIFRoZSB2ZXJzaW9uIG9mIHRoZSBTaWduYWxSIGNsaWVudC4gKi9cclxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIjYuMC44XCI7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgQXJnIHtcclxuICAgIHN0YXRpYyBpc1JlcXVpcmVkKHZhbCwgbmFtZSkge1xyXG4gICAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7bmFtZX0nIGFyZ3VtZW50IGlzIHJlcXVpcmVkLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBpc05vdEVtcHR5KHZhbCwgbmFtZSkge1xyXG4gICAgICAgIGlmICghdmFsIHx8IHZhbC5tYXRjaCgvXlxccyokLykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7bmFtZX0nIGFyZ3VtZW50IHNob3VsZCBub3QgYmUgZW1wdHkuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGlzSW4odmFsLCB2YWx1ZXMsIG5hbWUpIHtcclxuICAgICAgICAvLyBUeXBlU2NyaXB0IGVudW1zIGhhdmUga2V5cyBmb3IgKipib3RoKiogdGhlIG5hbWUgYW5kIHRoZSB2YWx1ZSBvZiBlYWNoIGVudW0gbWVtYmVyIG9uIHRoZSB0eXBlIGl0c2VsZi5cclxuICAgICAgICBpZiAoISh2YWwgaW4gdmFsdWVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gJHtuYW1lfSB2YWx1ZTogJHt2YWx9LmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcclxuICAgIC8vIHJlYWN0LW5hdGl2ZSBoYXMgYSB3aW5kb3cgYnV0IG5vIGRvY3VtZW50IHNvIHdlIHNob3VsZCBjaGVjayBib3RoXHJcbiAgICBzdGF0aWMgZ2V0IGlzQnJvd3NlcigpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ID09PSBcIm9iamVjdFwiO1xyXG4gICAgfVxyXG4gICAgLy8gV2ViV29ya2VycyBkb24ndCBoYXZlIGEgd2luZG93IG9iamVjdCBzbyB0aGUgaXNCcm93c2VyIGNoZWNrIHdvdWxkIGZhaWxcclxuICAgIHN0YXRpYyBnZXQgaXNXZWJXb3JrZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIFwiaW1wb3J0U2NyaXB0c1wiIGluIHNlbGY7XHJcbiAgICB9XHJcbiAgICAvLyByZWFjdC1uYXRpdmUgaGFzIGEgd2luZG93IGJ1dCBubyBkb2N1bWVudFxyXG4gICAgc3RhdGljIGdldCBpc1JlYWN0TmF0aXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICB9XHJcbiAgICAvLyBOb2RlIGFwcHMgc2hvdWxkbid0IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBidXQgV2ViV29ya2VycyBkb24ndCBlaXRoZXJcclxuICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgZm9yIGJvdGggV2ViV29ya2VyIGFuZCB3aW5kb3dcclxuICAgIHN0YXRpYyBnZXQgaXNOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc0Jyb3dzZXIgJiYgIXRoaXMuaXNXZWJXb3JrZXIgJiYgIXRoaXMuaXNSZWFjdE5hdGl2ZTtcclxuICAgIH1cclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFEZXRhaWwoZGF0YSwgaW5jbHVkZUNvbnRlbnQpIHtcclxuICAgIGxldCBkZXRhaWwgPSBcIlwiO1xyXG4gICAgaWYgKGlzQXJyYXlCdWZmZXIoZGF0YSkpIHtcclxuICAgICAgICBkZXRhaWwgPSBgQmluYXJ5IGRhdGEgb2YgbGVuZ3RoICR7ZGF0YS5ieXRlTGVuZ3RofWA7XHJcbiAgICAgICAgaWYgKGluY2x1ZGVDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGRldGFpbCArPSBgLiBDb250ZW50OiAnJHtmb3JtYXRBcnJheUJ1ZmZlcihkYXRhKX0nYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGRldGFpbCA9IGBTdHJpbmcgZGF0YSBvZiBsZW5ndGggJHtkYXRhLmxlbmd0aH1gO1xyXG4gICAgICAgIGlmIChpbmNsdWRlQ29udGVudCkge1xyXG4gICAgICAgICAgICBkZXRhaWwgKz0gYC4gQ29udGVudDogJyR7ZGF0YX0nYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGV0YWlsO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QXJyYXlCdWZmZXIoZGF0YSkge1xyXG4gICAgY29uc3QgdmlldyA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgLy8gVWludDhBcnJheS5tYXAgb25seSBzdXBwb3J0cyByZXR1cm5pbmcgYW5vdGhlciBVaW50OEFycmF5P1xyXG4gICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICB2aWV3LmZvckVhY2goKG51bSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhZCA9IG51bSA8IDE2ID8gXCIwXCIgOiBcIlwiO1xyXG4gICAgICAgIHN0ciArPSBgMHgke3BhZH0ke251bS50b1N0cmluZygxNil9IGA7XHJcbiAgICB9KTtcclxuICAgIC8vIFRyaW0gb2YgdHJhaWxpbmcgc3BhY2UuXHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSk7XHJcbn1cclxuLy8gQWxzbyBpbiBzaWduYWxyLXByb3RvY29sLW1zZ3BhY2svVXRpbHMudHNcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAodmFsIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHxcclxuICAgICAgICAgICAgLy8gU29tZXRpbWVzIHdlIGdldCBhbiBBcnJheUJ1ZmZlciB0aGF0IGRvZXNuJ3Qgc2F0aXNmeSBpbnN0YW5jZW9mXHJcbiAgICAgICAgICAgICh2YWwuY29uc3RydWN0b3IgJiYgdmFsLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlCdWZmZXJcIikpO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobG9nZ2VyLCB0cmFuc3BvcnROYW1lLCBodHRwQ2xpZW50LCB1cmwsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgY29udGVudCwgb3B0aW9ucykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcclxuICAgIGlmIChhY2Nlc3NUb2tlbkZhY3RvcnkpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGFjY2Vzc1Rva2VuRmFjdG9yeSgpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgW1wiQXV0aG9yaXphdGlvblwiXTogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGdldFVzZXJBZ2VudEhlYWRlcigpO1xyXG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYCgke3RyYW5zcG9ydE5hbWV9IHRyYW5zcG9ydCkgc2VuZGluZyBkYXRhLiAke2dldERhdGFEZXRhaWwoY29udGVudCwgb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCl9LmApO1xyXG4gICAgY29uc3QgcmVzcG9uc2VUeXBlID0gaXNBcnJheUJ1ZmZlcihjb250ZW50KSA/IFwiYXJyYXlidWZmZXJcIiA6IFwidGV4dFwiO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwQ2xpZW50LnBvc3QodXJsLCB7XHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMsIC4uLm9wdGlvbnMuaGVhZGVycyB9LFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgICB0aW1lb3V0OiBvcHRpb25zLnRpbWVvdXQsXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBvcHRpb25zLndpdGhDcmVkZW50aWFscyxcclxuICAgIH0pO1xyXG4gICAgbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYCgke3RyYW5zcG9ydE5hbWV9IHRyYW5zcG9ydCkgcmVxdWVzdCBjb21wbGV0ZS4gUmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LmApO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKGxvZ2dlcikge1xyXG4gICAgaWYgKGxvZ2dlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zb2xlTG9nZ2VyKExvZ0xldmVsLkluZm9ybWF0aW9uKTtcclxuICAgIH1cclxuICAgIGlmIChsb2dnZXIgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gTnVsbExvZ2dlci5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGlmIChsb2dnZXIubG9nICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBDb25zb2xlTG9nZ2VyKGxvZ2dlcik7XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBTdWJqZWN0U3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHN1YmplY3QsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc3ViamVjdCA9IHN1YmplY3Q7XHJcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuICAgIH1cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9zdWJqZWN0Lm9ic2VydmVycy5pbmRleE9mKHRoaXMuX29ic2VydmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJqZWN0Lm9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc3ViamVjdC5vYnNlcnZlcnMubGVuZ3RoID09PSAwICYmIHRoaXMuX3N1YmplY3QuY2FuY2VsQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ViamVjdC5jYW5jZWxDYWxsYmFjaygpLmNhdGNoKChfKSA9PiB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIENvbnNvbGVMb2dnZXIge1xyXG4gICAgY29uc3RydWN0b3IobWluaW11bUxvZ0xldmVsKSB7XHJcbiAgICAgICAgdGhpcy5fbWluTGV2ZWwgPSBtaW5pbXVtTG9nTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5vdXQgPSBjb25zb2xlO1xyXG4gICAgfVxyXG4gICAgbG9nKGxvZ0xldmVsLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGxvZ0xldmVsID49IHRoaXMuX21pbkxldmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBbJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9XSAke0xvZ0xldmVsW2xvZ0xldmVsXX06ICR7bWVzc2FnZX1gO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxvZ0xldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExvZ0xldmVsLkNyaXRpY2FsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5FcnJvcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dC5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0Lndhcm4obXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuSW5mb3JtYXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXQuaW5mbyhtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnIG9ubHkgZ29lcyB0byBhdHRhY2hlZCBkZWJ1Z2dlcnMgaW4gTm9kZSwgc28gd2UgdXNlIGNvbnNvbGUubG9nIGZvciBUcmFjZSBhbmQgRGVidWdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dC5sb2cobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJBZ2VudEhlYWRlcigpIHtcclxuICAgIGxldCB1c2VyQWdlbnRIZWFkZXJOYW1lID0gXCJYLVNpZ25hbFItVXNlci1BZ2VudFwiO1xyXG4gICAgaWYgKFBsYXRmb3JtLmlzTm9kZSkge1xyXG4gICAgICAgIHVzZXJBZ2VudEhlYWRlck5hbWUgPSBcIlVzZXItQWdlbnRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBbdXNlckFnZW50SGVhZGVyTmFtZSwgY29uc3RydWN0VXNlckFnZW50KFZFUlNJT04sIGdldE9zTmFtZSgpLCBnZXRSdW50aW1lKCksIGdldFJ1bnRpbWVWZXJzaW9uKCkpXTtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdFVzZXJBZ2VudCh2ZXJzaW9uLCBvcywgcnVudGltZSwgcnVudGltZVZlcnNpb24pIHtcclxuICAgIC8vIE1pY3Jvc29mdCBTaWduYWxSL1tWZXJzaW9uXSAoW0RldGFpbGVkIFZlcnNpb25dOyBbT3BlcmF0aW5nIFN5c3RlbV07IFtSdW50aW1lXTsgW1J1bnRpbWUgVmVyc2lvbl0pXHJcbiAgICBsZXQgdXNlckFnZW50ID0gXCJNaWNyb3NvZnQgU2lnbmFsUi9cIjtcclxuICAgIGNvbnN0IG1ham9yQW5kTWlub3IgPSB2ZXJzaW9uLnNwbGl0KFwiLlwiKTtcclxuICAgIHVzZXJBZ2VudCArPSBgJHttYWpvckFuZE1pbm9yWzBdfS4ke21ham9yQW5kTWlub3JbMV19YDtcclxuICAgIHVzZXJBZ2VudCArPSBgICgke3ZlcnNpb259OyBgO1xyXG4gICAgaWYgKG9zICYmIG9zICE9PSBcIlwiKSB7XHJcbiAgICAgICAgdXNlckFnZW50ICs9IGAke29zfTsgYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHVzZXJBZ2VudCArPSBcIlVua25vd24gT1M7IFwiO1xyXG4gICAgfVxyXG4gICAgdXNlckFnZW50ICs9IGAke3J1bnRpbWV9YDtcclxuICAgIGlmIChydW50aW1lVmVyc2lvbikge1xyXG4gICAgICAgIHVzZXJBZ2VudCArPSBgOyAke3J1bnRpbWVWZXJzaW9ufWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB1c2VyQWdlbnQgKz0gXCI7IFVua25vd24gUnVudGltZSBWZXJzaW9uXCI7XHJcbiAgICB9XHJcbiAgICB1c2VyQWdlbnQgKz0gXCIpXCI7XHJcbiAgICByZXR1cm4gdXNlckFnZW50O1xyXG59XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzcGFjZWQtY29tbWVudFxyXG4vKiNfX1BVUkVfXyovIGZ1bmN0aW9uIGdldE9zTmFtZSgpIHtcclxuICAgIGlmIChQbGF0Zm9ybS5pc05vZGUpIHtcclxuICAgICAgICBzd2l0Y2ggKHByb2Nlc3MucGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIndpbjMyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJXaW5kb3dzIE5UXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXJ3aW5cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIm1hY09TXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW51eFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGludXhcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLnBsYXRmb3JtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzcGFjZWQtY29tbWVudFxyXG4vKiNfX1BVUkVfXyovIGZ1bmN0aW9uIGdldFJ1bnRpbWVWZXJzaW9uKCkge1xyXG4gICAgaWYgKFBsYXRmb3JtLmlzTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9jZXNzLnZlcnNpb25zLm5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIGdldFJ1bnRpbWUoKSB7XHJcbiAgICBpZiAoUGxhdGZvcm0uaXNOb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTm9kZUpTXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJCcm93c2VyXCI7XHJcbiAgICB9XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvclN0cmluZyhlKSB7XHJcbiAgICBpZiAoZS5zdGFjaykge1xyXG4gICAgICAgIHJldHVybiBlLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS5tZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGUubWVzc2FnZTtcclxuICAgIH1cclxuICAgIHJldHVybiBgJHtlfWA7XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxUaGlzKCkge1xyXG4gICAgLy8gZ2xvYmFsVGhpcyBpcyBzZW1pLW5ldyBhbmQgbm90IGF2YWlsYWJsZSBpbiBOb2RlIHVudGlsIHYxMlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbFRoaXM7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmaW5kIGdsb2JhbFwiKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1VdGlscy5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEhlYWRlck5hbWVzIH0gZnJvbSBcIi4vSGVhZGVyTmFtZXNcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBBcmcsIGdldERhdGFEZXRhaWwsIGdldFVzZXJBZ2VudEhlYWRlciwgUGxhdGZvcm0gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFdlYlNvY2tldFRyYW5zcG9ydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50LCBhY2Nlc3NUb2tlbkZhY3RvcnksIGxvZ2dlciwgbG9nTWVzc2FnZUNvbnRlbnQsIHdlYlNvY2tldENvbnN0cnVjdG9yLCBoZWFkZXJzKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSA9IGFjY2Vzc1Rva2VuRmFjdG9yeTtcclxuICAgICAgICB0aGlzLl9sb2dNZXNzYWdlQ29udGVudCA9IGxvZ01lc3NhZ2VDb250ZW50O1xyXG4gICAgICAgIHRoaXMuX3dlYlNvY2tldENvbnN0cnVjdG9yID0gd2ViU29ja2V0Q29uc3RydWN0b3I7XHJcbiAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5vbnJlY2VpdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjb25uZWN0KHVybCwgdHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgIEFyZy5pc0luKHRyYW5zZmVyRm9ybWF0LCBUcmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihXZWJTb2NrZXRzIHRyYW5zcG9ydCkgQ29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogXCImXCIpICsgYGFjY2Vzc190b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXmh0dHAvLCBcIndzXCIpO1xyXG4gICAgICAgICAgICBsZXQgd2ViU29ja2V0O1xyXG4gICAgICAgICAgICBjb25zdCBjb29raWVzID0gdGhpcy5faHR0cENsaWVudC5nZXRDb29raWVTdHJpbmcodXJsKTtcclxuICAgICAgICAgICAgbGV0IG9wZW5lZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoUGxhdGZvcm0uaXNOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZ2V0VXNlckFnZW50SGVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29va2llcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbSGVhZGVyTmFtZXMuQ29va2llXSA9IGAke2Nvb2tpZXN9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgcGFzcyBoZWFkZXJzIHdoZW4gaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXHJcbiAgICAgICAgICAgICAgICB3ZWJTb2NrZXQgPSBuZXcgdGhpcy5fd2ViU29ja2V0Q29uc3RydWN0b3IodXJsLCB1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMsIC4uLnRoaXMuX2hlYWRlcnMgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaHJvbWUgaXMgbm90IGhhcHB5IHdpdGggcGFzc2luZyAndW5kZWZpbmVkJyBhcyBwcm90b2NvbFxyXG4gICAgICAgICAgICAgICAgd2ViU29ja2V0ID0gbmV3IHRoaXMuX3dlYlNvY2tldENvbnN0cnVjdG9yKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0ID09PSBUcmFuc2ZlckZvcm1hdC5CaW5hcnkpIHtcclxuICAgICAgICAgICAgICAgIHdlYlNvY2tldC5iaW5hcnlUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdlYlNvY2tldC5vbm9wZW4gPSAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgV2ViU29ja2V0IGNvbm5lY3RlZCB0byAke3VybH0uYCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQgPSB3ZWJTb2NrZXQ7XHJcbiAgICAgICAgICAgICAgICBvcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3ZWJTb2NrZXQub25lcnJvciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9yRXZlbnQgaXMgYSBicm93c2VyIG9ubHkgdHlwZSB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSB0eXBlIGV4aXN0cyBiZWZvcmUgdXNpbmcgaXRcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgRXJyb3JFdmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldmVudCBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGV2ZW50LmVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBcIlRoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHRoZSB0cmFuc3BvcnRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGAoV2ViU29ja2V0cyB0cmFuc3BvcnQpICR7ZXJyb3J9LmApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3ZWJTb2NrZXQub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoV2ViU29ja2V0cyB0cmFuc3BvcnQpIGRhdGEgcmVjZWl2ZWQuICR7Z2V0RGF0YURldGFpbChtZXNzYWdlLmRhdGEsIHRoaXMuX2xvZ01lc3NhZ2VDb250ZW50KX0uYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbnJlY2VpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ucmVjZWl2ZShtZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3ZWJTb2NrZXQub25jbG9zZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgY2FsbCBjbG9zZSBoYW5kbGVyIGlmIGNvbm5lY3Rpb24gd2FzIG5ldmVyIGVzdGFibGlzaGVkXHJcbiAgICAgICAgICAgICAgICAvLyBXZSdsbCByZWplY3QgdGhlIGNvbm5lY3QgY2FsbCBpbnN0ZWFkXHJcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2UoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFcnJvckV2ZW50IGlzIGEgYnJvd3NlciBvbmx5IHR5cGUgd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgdHlwZSBleGlzdHMgYmVmb3JlIHVzaW5nIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBFcnJvckV2ZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGV2ZW50IGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGV2ZW50LmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBcIldlYlNvY2tldCBmYWlsZWQgdG8gY29ubmVjdC4gVGhlIGNvbm5lY3Rpb24gY291bGQgbm90IGJlIGZvdW5kIG9uIHRoZSBzZXJ2ZXIsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgZWl0aGVyIHRoZSBlbmRwb2ludCBtYXkgbm90IGJlIGEgU2lnbmFsUiBlbmRwb2ludCxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiB0aGUgY29ubmVjdGlvbiBJRCBpcyBub3QgcHJlc2VudCBvbiB0aGUgc2VydmVyLCBvciB0aGVyZSBpcyBhIHByb3h5IGJsb2NraW5nIFdlYlNvY2tldHMuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgSWYgeW91IGhhdmUgbXVsdGlwbGUgc2VydmVycyBjaGVjayB0aGF0IHN0aWNreSBzZXNzaW9ucyBhcmUgZW5hYmxlZC5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dlYlNvY2tldCAmJiB0aGlzLl93ZWJTb2NrZXQucmVhZHlTdGF0ZSA9PT0gdGhpcy5fd2ViU29ja2V0Q29uc3RydWN0b3IuT1BFTikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKFdlYlNvY2tldHMgdHJhbnNwb3J0KSBzZW5kaW5nIGRhdGEuICR7Z2V0RGF0YURldGFpbChkYXRhLCB0aGlzLl9sb2dNZXNzYWdlQ29udGVudCl9LmApO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQuc2VuZChkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJXZWJTb2NrZXQgaXMgbm90IGluIHRoZSBPUEVOIHN0YXRlXCIpO1xyXG4gICAgfVxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IGludm9rZSBvbmNsb3NlIGNhbGxiYWNrIGlubGluZSBzbyB3ZSBrbm93IHRoZSBIdHRwQ29ubmVjdGlvbiB3YXMgY2xvc2VkIHByb3Blcmx5IGJlZm9yZSByZXR1cm5pbmdcclxuICAgICAgICAgICAgLy8gVGhpcyBhbHNvIHNvbHZlcyBhbiBpc3N1ZSB3aGVyZSB3ZWJzb2NrZXQub25jbG9zZSBjb3VsZCB0YWtlIDE4KyBzZWNvbmRzIHRvIHRyaWdnZXIgZHVyaW5nIG5ldHdvcmsgZGlzY29ubmVjdHNcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2UodW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgX2Nsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gd2ViU29ja2V0IHdpbGwgYmUgbnVsbCBpZiB0aGUgdHJhbnNwb3J0IGRpZCBub3Qgc3RhcnQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgaWYgKHRoaXMuX3dlYlNvY2tldCkge1xyXG4gICAgICAgICAgICAvLyBDbGVhciB3ZWJzb2NrZXQgaGFuZGxlcnMgYmVjYXVzZSB3ZSBhcmUgY29uc2lkZXJpbmcgdGhlIHNvY2tldCBjbG9zZWQgbm93XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldC5vbmNsb3NlID0gKCkgPT4geyB9O1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQub25tZXNzYWdlID0gKCkgPT4geyB9O1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQub25lcnJvciA9ICgpID0+IHsgfTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoV2ViU29ja2V0cyB0cmFuc3BvcnQpIHNvY2tldCBjbG9zZWQuXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQ2xvc2VFdmVudChldmVudCkgJiYgKGV2ZW50Lndhc0NsZWFuID09PSBmYWxzZSB8fCBldmVudC5jb2RlICE9PSAxMDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsb3NlKG5ldyBFcnJvcihgV2ViU29ja2V0IGNsb3NlZCB3aXRoIHN0YXR1cyBjb2RlOiAke2V2ZW50LmNvZGV9ICgke2V2ZW50LnJlYXNvbiB8fCBcIm5vIHJlYXNvbiBnaXZlblwifSkuYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jbG9zZShldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pc0Nsb3NlRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gZXZlbnQgJiYgdHlwZW9mIGV2ZW50Lndhc0NsZWFuID09PSBcImJvb2xlYW5cIiAmJiB0eXBlb2YgZXZlbnQuY29kZSA9PT0gXCJudW1iZXJcIjtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWJTb2NrZXRUcmFuc3BvcnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBBYm9ydEVycm9yLCBIdHRwRXJyb3IsIFRpbWVvdXRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiLi9IdHRwQ2xpZW50XCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5leHBvcnQgY2xhc3MgWGhySHR0cENsaWVudCBleHRlbmRzIEh0dHBDbGllbnQge1xyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICB9XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIHNlbmQocmVxdWVzdCkge1xyXG4gICAgICAgIC8vIENoZWNrIHRoYXQgYWJvcnQgd2FzIG5vdCBzaWduYWxlZCBiZWZvcmUgY2FsbGluZyBzZW5kXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwgJiYgcmVxdWVzdC5hYm9ydFNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWJvcnRFcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gbWV0aG9kIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LnVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gdXJsIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuICAgICAgICAgICAgLy8gRXhwbGljaXRseSBzZXR0aW5nIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyIGZvciBSZWFjdCBOYXRpdmUgb24gQW5kcm9pZCBwbGF0Zm9ybS5cclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnM7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChoZWFkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIGhlYWRlcnNbaGVhZGVyXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5yZXNwb25zZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSByZXF1ZXN0LnJlc3BvbnNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQWJvcnRFcnJvcigpKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QudGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSByZXF1ZXN0LnRpbWVvdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgSHR0cFJlc3BvbnNlKHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0LCB4aHIucmVzcG9uc2UgfHwgeGhyLnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBIdHRwRXJyb3IoeGhyLnJlc3BvbnNlIHx8IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnN0YXR1c1RleHQsIHhoci5zdGF0dXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBFcnJvciBmcm9tIEhUVFAgcmVxdWVzdC4gJHt4aHIuc3RhdHVzfTogJHt4aHIuc3RhdHVzVGV4dH0uYCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEh0dHBFcnJvcih4aHIuc3RhdHVzVGV4dCwgeGhyLnN0YXR1cykpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgVGltZW91dCBmcm9tIEhUVFAgcmVxdWVzdC5gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgVGltZW91dEVycm9yKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIuc2VuZChyZXF1ZXN0LmNvbnRlbnQgfHwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9WGhySHR0cENsaWVudC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmV4cG9ydCB7IEFib3J0RXJyb3IsIEh0dHBFcnJvciwgVGltZW91dEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmV4cG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCIuL0h0dHBDbGllbnRcIjtcclxuZXhwb3J0IHsgRGVmYXVsdEh0dHBDbGllbnQgfSBmcm9tIFwiLi9EZWZhdWx0SHR0cENsaWVudFwiO1xyXG5leHBvcnQgeyBIdWJDb25uZWN0aW9uLCBIdWJDb25uZWN0aW9uU3RhdGUgfSBmcm9tIFwiLi9IdWJDb25uZWN0aW9uXCI7XHJcbmV4cG9ydCB7IEh1YkNvbm5lY3Rpb25CdWlsZGVyIH0gZnJvbSBcIi4vSHViQ29ubmVjdGlvbkJ1aWxkZXJcIjtcclxuZXhwb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9JSHViUHJvdG9jb2xcIjtcclxuZXhwb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmV4cG9ydCB7IEh0dHBUcmFuc3BvcnRUeXBlLCBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuZXhwb3J0IHsgTnVsbExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlcnNcIjtcclxuZXhwb3J0IHsgSnNvbkh1YlByb3RvY29sIH0gZnJvbSBcIi4vSnNvbkh1YlByb3RvY29sXCI7XHJcbmV4cG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9TdWJqZWN0XCI7XHJcbmV4cG9ydCB7IFZFUlNJT04gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qKlxuICogW2pzLXNoYTI1Nl17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2VtbjE3OC9qcy1zaGEyNTZ9XG4gKlxuICogQHZlcnNpb24gMC45LjBcbiAqIEBhdXRob3IgQ2hlbiwgWWktQ3l1YW4gW2VtbjE3OEBnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IENoZW4sIFlpLUN5dWFuIDIwMTQtMjAxN1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbi8qanNsaW50IGJpdHdpc2U6IHRydWUgKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgRVJST1IgPSAnaW5wdXQgaXMgaW52YWxpZCB0eXBlJztcbiAgdmFyIFdJTkRPVyA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnO1xuICB2YXIgcm9vdCA9IFdJTkRPVyA/IHdpbmRvdyA6IHt9O1xuICBpZiAocm9vdC5KU19TSEEyNTZfTk9fV0lORE9XKSB7XG4gICAgV0lORE9XID0gZmFsc2U7XG4gIH1cbiAgdmFyIFdFQl9XT1JLRVIgPSAhV0lORE9XICYmIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JztcbiAgdmFyIE5PREVfSlMgPSAhcm9vdC5KU19TSEEyNTZfTk9fTk9ERV9KUyAmJiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGU7XG4gIGlmIChOT0RFX0pTKSB7XG4gICAgcm9vdCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChXRUJfV09SS0VSKSB7XG4gICAgcm9vdCA9IHNlbGY7XG4gIH1cbiAgdmFyIENPTU1PTl9KUyA9ICFyb290LkpTX1NIQTI1Nl9OT19DT01NT05fSlMgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHM7XG4gIHZhciBBTUQgPSB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQ7XG4gIHZhciBBUlJBWV9CVUZGRVIgPSAhcm9vdC5KU19TSEEyNTZfTk9fQVJSQVlfQlVGRkVSICYmIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBIRVhfQ0hBUlMgPSAnMDEyMzQ1Njc4OWFiY2RlZicuc3BsaXQoJycpO1xuICB2YXIgRVhUUkEgPSBbLTIxNDc0ODM2NDgsIDgzODg2MDgsIDMyNzY4LCAxMjhdO1xuICB2YXIgU0hJRlQgPSBbMjQsIDE2LCA4LCAwXTtcbiAgdmFyIEsgPSBbXG4gICAgMHg0MjhhMmY5OCwgMHg3MTM3NDQ5MSwgMHhiNWMwZmJjZiwgMHhlOWI1ZGJhNSwgMHgzOTU2YzI1YiwgMHg1OWYxMTFmMSwgMHg5MjNmODJhNCwgMHhhYjFjNWVkNSxcbiAgICAweGQ4MDdhYTk4LCAweDEyODM1YjAxLCAweDI0MzE4NWJlLCAweDU1MGM3ZGMzLCAweDcyYmU1ZDc0LCAweDgwZGViMWZlLCAweDliZGMwNmE3LCAweGMxOWJmMTc0LFxuICAgIDB4ZTQ5YjY5YzEsIDB4ZWZiZTQ3ODYsIDB4MGZjMTlkYzYsIDB4MjQwY2ExY2MsIDB4MmRlOTJjNmYsIDB4NGE3NDg0YWEsIDB4NWNiMGE5ZGMsIDB4NzZmOTg4ZGEsXG4gICAgMHg5ODNlNTE1MiwgMHhhODMxYzY2ZCwgMHhiMDAzMjdjOCwgMHhiZjU5N2ZjNywgMHhjNmUwMGJmMywgMHhkNWE3OTE0NywgMHgwNmNhNjM1MSwgMHgxNDI5Mjk2NyxcbiAgICAweDI3YjcwYTg1LCAweDJlMWIyMTM4LCAweDRkMmM2ZGZjLCAweDUzMzgwZDEzLCAweDY1MGE3MzU0LCAweDc2NmEwYWJiLCAweDgxYzJjOTJlLCAweDkyNzIyYzg1LFxuICAgIDB4YTJiZmU4YTEsIDB4YTgxYTY2NGIsIDB4YzI0YjhiNzAsIDB4Yzc2YzUxYTMsIDB4ZDE5MmU4MTksIDB4ZDY5OTA2MjQsIDB4ZjQwZTM1ODUsIDB4MTA2YWEwNzAsXG4gICAgMHgxOWE0YzExNiwgMHgxZTM3NmMwOCwgMHgyNzQ4Nzc0YywgMHgzNGIwYmNiNSwgMHgzOTFjMGNiMywgMHg0ZWQ4YWE0YSwgMHg1YjljY2E0ZiwgMHg2ODJlNmZmMyxcbiAgICAweDc0OGY4MmVlLCAweDc4YTU2MzZmLCAweDg0Yzg3ODE0LCAweDhjYzcwMjA4LCAweDkwYmVmZmZhLCAweGE0NTA2Y2ViLCAweGJlZjlhM2Y3LCAweGM2NzE3OGYyXG4gIF07XG4gIHZhciBPVVRQVVRfVFlQRVMgPSBbJ2hleCcsICdhcnJheScsICdkaWdlc3QnLCAnYXJyYXlCdWZmZXInXTtcblxuICB2YXIgYmxvY2tzID0gW107XG5cbiAgaWYgKHJvb3QuSlNfU0hBMjU2X05PX05PREVfSlMgfHwgIUFycmF5LmlzQXJyYXkpIHtcbiAgICBBcnJheS5pc0FycmF5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG4gIH1cblxuICBpZiAoQVJSQVlfQlVGRkVSICYmIChyb290LkpTX1NIQTI1Nl9OT19BUlJBWV9CVUZGRVJfSVNfVklFVyB8fCAhQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIEFycmF5QnVmZmVyLmlzVmlldyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouYnVmZmVyICYmIG9iai5idWZmZXIuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyO1xuICAgIH07XG4gIH1cblxuICB2YXIgY3JlYXRlT3V0cHV0TWV0aG9kID0gZnVuY3Rpb24gKG91dHB1dFR5cGUsIGlzMjI0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbmV3IFNoYTI1NihpczIyNCwgdHJ1ZSkudXBkYXRlKG1lc3NhZ2UpW291dHB1dFR5cGVdKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKGlzMjI0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGNyZWF0ZU91dHB1dE1ldGhvZCgnaGV4JywgaXMyMjQpO1xuICAgIGlmIChOT0RFX0pTKSB7XG4gICAgICBtZXRob2QgPSBub2RlV3JhcChtZXRob2QsIGlzMjI0KTtcbiAgICB9XG4gICAgbWV0aG9kLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgU2hhMjU2KGlzMjI0KTtcbiAgICB9O1xuICAgIG1ldGhvZC51cGRhdGUgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG1ldGhvZC5jcmVhdGUoKS51cGRhdGUobWVzc2FnZSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE9VVFBVVF9UWVBFUy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIHR5cGUgPSBPVVRQVVRfVFlQRVNbaV07XG4gICAgICBtZXRob2RbdHlwZV0gPSBjcmVhdGVPdXRwdXRNZXRob2QodHlwZSwgaXMyMjQpO1xuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kO1xuICB9O1xuXG4gIHZhciBub2RlV3JhcCA9IGZ1bmN0aW9uIChtZXRob2QsIGlzMjI0KSB7XG4gICAgdmFyIGNyeXB0byA9IGV2YWwoXCJyZXF1aXJlKCdjcnlwdG8nKVwiKTtcbiAgICB2YXIgQnVmZmVyID0gZXZhbChcInJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlclwiKTtcbiAgICB2YXIgYWxnb3JpdGhtID0gaXMyMjQgPyAnc2hhMjI0JyA6ICdzaGEyNTYnO1xuICAgIHZhciBub2RlTWV0aG9kID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0by5jcmVhdGVIYXNoKGFsZ29yaXRobSkudXBkYXRlKG1lc3NhZ2UsICd1dGY4JykuZGlnZXN0KCdoZXgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsIHx8IG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICBtZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lc3NhZ2UpIHx8IEFycmF5QnVmZmVyLmlzVmlldyhtZXNzYWdlKSB8fFxuICAgICAgICBtZXNzYWdlLmNvbnN0cnVjdG9yID09PSBCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0by5jcmVhdGVIYXNoKGFsZ29yaXRobSkudXBkYXRlKG5ldyBCdWZmZXIobWVzc2FnZSkpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWV0aG9kKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG5vZGVNZXRob2Q7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUhtYWNPdXRwdXRNZXRob2QgPSBmdW5jdGlvbiAob3V0cHV0VHlwZSwgaXMyMjQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgbWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG5ldyBIbWFjU2hhMjU2KGtleSwgaXMyMjQsIHRydWUpLnVwZGF0ZShtZXNzYWdlKVtvdXRwdXRUeXBlXSgpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUhtYWNNZXRob2QgPSBmdW5jdGlvbiAoaXMyMjQpIHtcbiAgICB2YXIgbWV0aG9kID0gY3JlYXRlSG1hY091dHB1dE1ldGhvZCgnaGV4JywgaXMyMjQpO1xuICAgIG1ldGhvZC5jcmVhdGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbmV3IEhtYWNTaGEyNTYoa2V5LCBpczIyNCk7XG4gICAgfTtcbiAgICBtZXRob2QudXBkYXRlID0gZnVuY3Rpb24gKGtleSwgbWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG1ldGhvZC5jcmVhdGUoa2V5KS51cGRhdGUobWVzc2FnZSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE9VVFBVVF9UWVBFUy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIHR5cGUgPSBPVVRQVVRfVFlQRVNbaV07XG4gICAgICBtZXRob2RbdHlwZV0gPSBjcmVhdGVIbWFjT3V0cHV0TWV0aG9kKHR5cGUsIGlzMjI0KTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZDtcbiAgfTtcblxuICBmdW5jdGlvbiBTaGEyNTYoaXMyMjQsIHNoYXJlZE1lbW9yeSkge1xuICAgIGlmIChzaGFyZWRNZW1vcnkpIHtcbiAgICAgIGJsb2Nrc1swXSA9IGJsb2Nrc1sxNl0gPSBibG9ja3NbMV0gPSBibG9ja3NbMl0gPSBibG9ja3NbM10gPVxuICAgICAgICBibG9ja3NbNF0gPSBibG9ja3NbNV0gPSBibG9ja3NbNl0gPSBibG9ja3NbN10gPVxuICAgICAgICBibG9ja3NbOF0gPSBibG9ja3NbOV0gPSBibG9ja3NbMTBdID0gYmxvY2tzWzExXSA9XG4gICAgICAgIGJsb2Nrc1sxMl0gPSBibG9ja3NbMTNdID0gYmxvY2tzWzE0XSA9IGJsb2Nrc1sxNV0gPSAwO1xuICAgICAgdGhpcy5ibG9ja3MgPSBibG9ja3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvY2tzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIH1cblxuICAgIGlmIChpczIyNCkge1xuICAgICAgdGhpcy5oMCA9IDB4YzEwNTllZDg7XG4gICAgICB0aGlzLmgxID0gMHgzNjdjZDUwNztcbiAgICAgIHRoaXMuaDIgPSAweDMwNzBkZDE3O1xuICAgICAgdGhpcy5oMyA9IDB4ZjcwZTU5Mzk7XG4gICAgICB0aGlzLmg0ID0gMHhmZmMwMGIzMTtcbiAgICAgIHRoaXMuaDUgPSAweDY4NTgxNTExO1xuICAgICAgdGhpcy5oNiA9IDB4NjRmOThmYTc7XG4gICAgICB0aGlzLmg3ID0gMHhiZWZhNGZhNDtcbiAgICB9IGVsc2UgeyAvLyAyNTZcbiAgICAgIHRoaXMuaDAgPSAweDZhMDllNjY3O1xuICAgICAgdGhpcy5oMSA9IDB4YmI2N2FlODU7XG4gICAgICB0aGlzLmgyID0gMHgzYzZlZjM3MjtcbiAgICAgIHRoaXMuaDMgPSAweGE1NGZmNTNhO1xuICAgICAgdGhpcy5oNCA9IDB4NTEwZTUyN2Y7XG4gICAgICB0aGlzLmg1ID0gMHg5YjA1Njg4YztcbiAgICAgIHRoaXMuaDYgPSAweDFmODNkOWFiO1xuICAgICAgdGhpcy5oNyA9IDB4NWJlMGNkMTk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9jayA9IHRoaXMuc3RhcnQgPSB0aGlzLmJ5dGVzID0gdGhpcy5oQnl0ZXMgPSAwO1xuICAgIHRoaXMuZmluYWxpemVkID0gdGhpcy5oYXNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLmlzMjI0ID0gaXMyMjQ7XG4gIH1cblxuICBTaGEyNTYucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBub3RTdHJpbmcsIHR5cGUgPSB0eXBlb2YgbWVzc2FnZTtcbiAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICAgIH0gZWxzZSBpZiAoQVJSQVlfQlVGRkVSICYmIG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG1lc3NhZ2UpKSB7XG4gICAgICAgICAgaWYgKCFBUlJBWV9CVUZGRVIgfHwgIUFycmF5QnVmZmVyLmlzVmlldyhtZXNzYWdlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICB9XG4gICAgICBub3RTdHJpbmcgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgY29kZSwgaW5kZXggPSAwLCBpLCBsZW5ndGggPSBtZXNzYWdlLmxlbmd0aCwgYmxvY2tzID0gdGhpcy5ibG9ja3M7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLmhhc2hlZCkge1xuICAgICAgICB0aGlzLmhhc2hlZCA9IGZhbHNlO1xuICAgICAgICBibG9ja3NbMF0gPSB0aGlzLmJsb2NrO1xuICAgICAgICBibG9ja3NbMTZdID0gYmxvY2tzWzFdID0gYmxvY2tzWzJdID0gYmxvY2tzWzNdID1cbiAgICAgICAgICBibG9ja3NbNF0gPSBibG9ja3NbNV0gPSBibG9ja3NbNl0gPSBibG9ja3NbN10gPVxuICAgICAgICAgIGJsb2Nrc1s4XSA9IGJsb2Nrc1s5XSA9IGJsb2Nrc1sxMF0gPSBibG9ja3NbMTFdID1cbiAgICAgICAgICBibG9ja3NbMTJdID0gYmxvY2tzWzEzXSA9IGJsb2Nrc1sxNF0gPSBibG9ja3NbMTVdID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vdFN0cmluZykge1xuICAgICAgICBmb3IgKGkgPSB0aGlzLnN0YXJ0OyBpbmRleCA8IGxlbmd0aCAmJiBpIDwgNjQ7ICsraW5kZXgpIHtcbiAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSBtZXNzYWdlW2luZGV4XSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gdGhpcy5zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IDY0OyArK2luZGV4KSB7XG4gICAgICAgICAgY29kZSA9IG1lc3NhZ2UuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgICAgaWYgKGNvZGUgPCAweDgwKSB7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSBjb2RlIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhjMCB8IChjb2RlID4+IDYpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKGNvZGUgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhkODAwIHx8IGNvZGUgPj0gMHhlMDAwKSB7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhlMCB8IChjb2RlID4+IDEyKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKGNvZGUgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGUgPSAweDEwMDAwICsgKCgoY29kZSAmIDB4M2ZmKSA8PCAxMCkgfCAobWVzc2FnZS5jaGFyQ29kZUF0KCsraW5kZXgpICYgMHgzZmYpKTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweGYwIHwgKGNvZGUgPj4gMTgpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDEyKSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDYpICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0Qnl0ZUluZGV4ID0gaTtcbiAgICAgIHRoaXMuYnl0ZXMgKz0gaSAtIHRoaXMuc3RhcnQ7XG4gICAgICBpZiAoaSA+PSA2NCkge1xuICAgICAgICB0aGlzLmJsb2NrID0gYmxvY2tzWzE2XTtcbiAgICAgICAgdGhpcy5zdGFydCA9IGkgLSA2NDtcbiAgICAgICAgdGhpcy5oYXNoKCk7XG4gICAgICAgIHRoaXMuaGFzaGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5ieXRlcyA+IDQyOTQ5NjcyOTUpIHtcbiAgICAgIHRoaXMuaEJ5dGVzICs9IHRoaXMuYnl0ZXMgLyA0Mjk0OTY3Mjk2IDw8IDA7XG4gICAgICB0aGlzLmJ5dGVzID0gdGhpcy5ieXRlcyAlIDQyOTQ5NjcyOTY7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuZmluYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcbiAgICB2YXIgYmxvY2tzID0gdGhpcy5ibG9ja3MsIGkgPSB0aGlzLmxhc3RCeXRlSW5kZXg7XG4gICAgYmxvY2tzWzE2XSA9IHRoaXMuYmxvY2s7XG4gICAgYmxvY2tzW2kgPj4gMl0gfD0gRVhUUkFbaSAmIDNdO1xuICAgIHRoaXMuYmxvY2sgPSBibG9ja3NbMTZdO1xuICAgIGlmIChpID49IDU2KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzaGVkKSB7XG4gICAgICAgIHRoaXMuaGFzaCgpO1xuICAgICAgfVxuICAgICAgYmxvY2tzWzBdID0gdGhpcy5ibG9jaztcbiAgICAgIGJsb2Nrc1sxNl0gPSBibG9ja3NbMV0gPSBibG9ja3NbMl0gPSBibG9ja3NbM10gPVxuICAgICAgICBibG9ja3NbNF0gPSBibG9ja3NbNV0gPSBibG9ja3NbNl0gPSBibG9ja3NbN10gPVxuICAgICAgICBibG9ja3NbOF0gPSBibG9ja3NbOV0gPSBibG9ja3NbMTBdID0gYmxvY2tzWzExXSA9XG4gICAgICAgIGJsb2Nrc1sxMl0gPSBibG9ja3NbMTNdID0gYmxvY2tzWzE0XSA9IGJsb2Nrc1sxNV0gPSAwO1xuICAgIH1cbiAgICBibG9ja3NbMTRdID0gdGhpcy5oQnl0ZXMgPDwgMyB8IHRoaXMuYnl0ZXMgPj4+IDI5O1xuICAgIGJsb2Nrc1sxNV0gPSB0aGlzLmJ5dGVzIDw8IDM7XG4gICAgdGhpcy5oYXNoKCk7XG4gIH07XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5oYXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhID0gdGhpcy5oMCwgYiA9IHRoaXMuaDEsIGMgPSB0aGlzLmgyLCBkID0gdGhpcy5oMywgZSA9IHRoaXMuaDQsIGYgPSB0aGlzLmg1LCBnID0gdGhpcy5oNixcbiAgICAgIGggPSB0aGlzLmg3LCBibG9ja3MgPSB0aGlzLmJsb2NrcywgaiwgczAsIHMxLCBtYWosIHQxLCB0MiwgY2gsIGFiLCBkYSwgY2QsIGJjO1xuXG4gICAgZm9yIChqID0gMTY7IGogPCA2NDsgKytqKSB7XG4gICAgICAvLyByaWdodHJvdGF0ZVxuICAgICAgdDEgPSBibG9ja3NbaiAtIDE1XTtcbiAgICAgIHMwID0gKCh0MSA+Pj4gNykgfCAodDEgPDwgMjUpKSBeICgodDEgPj4+IDE4KSB8ICh0MSA8PCAxNCkpIF4gKHQxID4+PiAzKTtcbiAgICAgIHQxID0gYmxvY2tzW2ogLSAyXTtcbiAgICAgIHMxID0gKCh0MSA+Pj4gMTcpIHwgKHQxIDw8IDE1KSkgXiAoKHQxID4+PiAxOSkgfCAodDEgPDwgMTMpKSBeICh0MSA+Pj4gMTApO1xuICAgICAgYmxvY2tzW2pdID0gYmxvY2tzW2ogLSAxNl0gKyBzMCArIGJsb2Nrc1tqIC0gN10gKyBzMSA8PCAwO1xuICAgIH1cblxuICAgIGJjID0gYiAmIGM7XG4gICAgZm9yIChqID0gMDsgaiA8IDY0OyBqICs9IDQpIHtcbiAgICAgIGlmICh0aGlzLmZpcnN0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzMjI0KSB7XG4gICAgICAgICAgYWIgPSAzMDAwMzI7XG4gICAgICAgICAgdDEgPSBibG9ja3NbMF0gLSAxNDEzMjU3ODE5O1xuICAgICAgICAgIGggPSB0MSAtIDE1MDA1NDU5OSA8PCAwO1xuICAgICAgICAgIGQgPSB0MSArIDI0MTc3MDc3IDw8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWIgPSA3MDQ3NTExMDk7XG4gICAgICAgICAgdDEgPSBibG9ja3NbMF0gLSAyMTAyNDQyNDg7XG4gICAgICAgICAgaCA9IHQxIC0gMTUyMTQ4NjUzNCA8PCAwO1xuICAgICAgICAgIGQgPSB0MSArIDE0MzY5NDU2NSA8PCAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyc3QgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMwID0gKChhID4+PiAyKSB8IChhIDw8IDMwKSkgXiAoKGEgPj4+IDEzKSB8IChhIDw8IDE5KSkgXiAoKGEgPj4+IDIyKSB8IChhIDw8IDEwKSk7XG4gICAgICAgIHMxID0gKChlID4+PiA2KSB8IChlIDw8IDI2KSkgXiAoKGUgPj4+IDExKSB8IChlIDw8IDIxKSkgXiAoKGUgPj4+IDI1KSB8IChlIDw8IDcpKTtcbiAgICAgICAgYWIgPSBhICYgYjtcbiAgICAgICAgbWFqID0gYWIgXiAoYSAmIGMpIF4gYmM7XG4gICAgICAgIGNoID0gKGUgJiBmKSBeICh+ZSAmIGcpO1xuICAgICAgICB0MSA9IGggKyBzMSArIGNoICsgS1tqXSArIGJsb2Nrc1tqXTtcbiAgICAgICAgdDIgPSBzMCArIG1hajtcbiAgICAgICAgaCA9IGQgKyB0MSA8PCAwO1xuICAgICAgICBkID0gdDEgKyB0MiA8PCAwO1xuICAgICAgfVxuICAgICAgczAgPSAoKGQgPj4+IDIpIHwgKGQgPDwgMzApKSBeICgoZCA+Pj4gMTMpIHwgKGQgPDwgMTkpKSBeICgoZCA+Pj4gMjIpIHwgKGQgPDwgMTApKTtcbiAgICAgIHMxID0gKChoID4+PiA2KSB8IChoIDw8IDI2KSkgXiAoKGggPj4+IDExKSB8IChoIDw8IDIxKSkgXiAoKGggPj4+IDI1KSB8IChoIDw8IDcpKTtcbiAgICAgIGRhID0gZCAmIGE7XG4gICAgICBtYWogPSBkYSBeIChkICYgYikgXiBhYjtcbiAgICAgIGNoID0gKGggJiBlKSBeICh+aCAmIGYpO1xuICAgICAgdDEgPSBnICsgczEgKyBjaCArIEtbaiArIDFdICsgYmxvY2tzW2ogKyAxXTtcbiAgICAgIHQyID0gczAgKyBtYWo7XG4gICAgICBnID0gYyArIHQxIDw8IDA7XG4gICAgICBjID0gdDEgKyB0MiA8PCAwO1xuICAgICAgczAgPSAoKGMgPj4+IDIpIHwgKGMgPDwgMzApKSBeICgoYyA+Pj4gMTMpIHwgKGMgPDwgMTkpKSBeICgoYyA+Pj4gMjIpIHwgKGMgPDwgMTApKTtcbiAgICAgIHMxID0gKChnID4+PiA2KSB8IChnIDw8IDI2KSkgXiAoKGcgPj4+IDExKSB8IChnIDw8IDIxKSkgXiAoKGcgPj4+IDI1KSB8IChnIDw8IDcpKTtcbiAgICAgIGNkID0gYyAmIGQ7XG4gICAgICBtYWogPSBjZCBeIChjICYgYSkgXiBkYTtcbiAgICAgIGNoID0gKGcgJiBoKSBeICh+ZyAmIGUpO1xuICAgICAgdDEgPSBmICsgczEgKyBjaCArIEtbaiArIDJdICsgYmxvY2tzW2ogKyAyXTtcbiAgICAgIHQyID0gczAgKyBtYWo7XG4gICAgICBmID0gYiArIHQxIDw8IDA7XG4gICAgICBiID0gdDEgKyB0MiA8PCAwO1xuICAgICAgczAgPSAoKGIgPj4+IDIpIHwgKGIgPDwgMzApKSBeICgoYiA+Pj4gMTMpIHwgKGIgPDwgMTkpKSBeICgoYiA+Pj4gMjIpIHwgKGIgPDwgMTApKTtcbiAgICAgIHMxID0gKChmID4+PiA2KSB8IChmIDw8IDI2KSkgXiAoKGYgPj4+IDExKSB8IChmIDw8IDIxKSkgXiAoKGYgPj4+IDI1KSB8IChmIDw8IDcpKTtcbiAgICAgIGJjID0gYiAmIGM7XG4gICAgICBtYWogPSBiYyBeIChiICYgZCkgXiBjZDtcbiAgICAgIGNoID0gKGYgJiBnKSBeICh+ZiAmIGgpO1xuICAgICAgdDEgPSBlICsgczEgKyBjaCArIEtbaiArIDNdICsgYmxvY2tzW2ogKyAzXTtcbiAgICAgIHQyID0gczAgKyBtYWo7XG4gICAgICBlID0gYSArIHQxIDw8IDA7XG4gICAgICBhID0gdDEgKyB0MiA8PCAwO1xuICAgIH1cblxuICAgIHRoaXMuaDAgPSB0aGlzLmgwICsgYSA8PCAwO1xuICAgIHRoaXMuaDEgPSB0aGlzLmgxICsgYiA8PCAwO1xuICAgIHRoaXMuaDIgPSB0aGlzLmgyICsgYyA8PCAwO1xuICAgIHRoaXMuaDMgPSB0aGlzLmgzICsgZCA8PCAwO1xuICAgIHRoaXMuaDQgPSB0aGlzLmg0ICsgZSA8PCAwO1xuICAgIHRoaXMuaDUgPSB0aGlzLmg1ICsgZiA8PCAwO1xuICAgIHRoaXMuaDYgPSB0aGlzLmg2ICsgZyA8PCAwO1xuICAgIHRoaXMuaDcgPSB0aGlzLmg3ICsgaCA8PCAwO1xuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuaGV4ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZmluYWxpemUoKTtcblxuICAgIHZhciBoMCA9IHRoaXMuaDAsIGgxID0gdGhpcy5oMSwgaDIgPSB0aGlzLmgyLCBoMyA9IHRoaXMuaDMsIGg0ID0gdGhpcy5oNCwgaDUgPSB0aGlzLmg1LFxuICAgICAgaDYgPSB0aGlzLmg2LCBoNyA9IHRoaXMuaDc7XG5cbiAgICB2YXIgaGV4ID0gSEVYX0NIQVJTWyhoMCA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMCA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMCA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgwID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDAgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMSA+PiAyNCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMSA+PiAxNikgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMSA+PiA4KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDEgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDIgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgyID4+IDI0KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDIgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgyID4+IDE2KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDIgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgyID4+IDgpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMiA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2gyICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgzID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDMgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg0ID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNCA+PiAyNCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg0ID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNCA+PiAxNikgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg0ID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNCA+PiA4KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDQgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toNCAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDUgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg1ID4+IDI0KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDUgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg1ID4+IDE2KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDUgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg1ID4+IDgpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNSA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2g1ICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNiA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDYgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNiA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDYgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNiA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDYgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg2ID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDYgJiAweDBGXTtcbiAgICBpZiAoIXRoaXMuaXMyMjQpIHtcbiAgICAgIGhleCArPSBIRVhfQ0hBUlNbKGg3ID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNyA+PiAyNCkgJiAweDBGXSArXG4gICAgICAgIEhFWF9DSEFSU1soaDcgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg3ID4+IDE2KSAmIDB4MEZdICtcbiAgICAgICAgSEVYX0NIQVJTWyhoNyA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDcgPj4gOCkgJiAweDBGXSArXG4gICAgICAgIEhFWF9DSEFSU1soaDcgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toNyAmIDB4MEZdO1xuICAgIH1cbiAgICByZXR1cm4gaGV4O1xuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUudG9TdHJpbmcgPSBTaGEyNTYucHJvdG90eXBlLmhleDtcblxuICBTaGEyNTYucHJvdG90eXBlLmRpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZpbmFsaXplKCk7XG5cbiAgICB2YXIgaDAgPSB0aGlzLmgwLCBoMSA9IHRoaXMuaDEsIGgyID0gdGhpcy5oMiwgaDMgPSB0aGlzLmgzLCBoNCA9IHRoaXMuaDQsIGg1ID0gdGhpcy5oNSxcbiAgICAgIGg2ID0gdGhpcy5oNiwgaDcgPSB0aGlzLmg3O1xuXG4gICAgdmFyIGFyciA9IFtcbiAgICAgIChoMCA+PiAyNCkgJiAweEZGLCAoaDAgPj4gMTYpICYgMHhGRiwgKGgwID4+IDgpICYgMHhGRiwgaDAgJiAweEZGLFxuICAgICAgKGgxID4+IDI0KSAmIDB4RkYsIChoMSA+PiAxNikgJiAweEZGLCAoaDEgPj4gOCkgJiAweEZGLCBoMSAmIDB4RkYsXG4gICAgICAoaDIgPj4gMjQpICYgMHhGRiwgKGgyID4+IDE2KSAmIDB4RkYsIChoMiA+PiA4KSAmIDB4RkYsIGgyICYgMHhGRixcbiAgICAgIChoMyA+PiAyNCkgJiAweEZGLCAoaDMgPj4gMTYpICYgMHhGRiwgKGgzID4+IDgpICYgMHhGRiwgaDMgJiAweEZGLFxuICAgICAgKGg0ID4+IDI0KSAmIDB4RkYsIChoNCA+PiAxNikgJiAweEZGLCAoaDQgPj4gOCkgJiAweEZGLCBoNCAmIDB4RkYsXG4gICAgICAoaDUgPj4gMjQpICYgMHhGRiwgKGg1ID4+IDE2KSAmIDB4RkYsIChoNSA+PiA4KSAmIDB4RkYsIGg1ICYgMHhGRixcbiAgICAgIChoNiA+PiAyNCkgJiAweEZGLCAoaDYgPj4gMTYpICYgMHhGRiwgKGg2ID4+IDgpICYgMHhGRiwgaDYgJiAweEZGXG4gICAgXTtcbiAgICBpZiAoIXRoaXMuaXMyMjQpIHtcbiAgICAgIGFyci5wdXNoKChoNyA+PiAyNCkgJiAweEZGLCAoaDcgPj4gMTYpICYgMHhGRiwgKGg3ID4+IDgpICYgMHhGRiwgaDcgJiAweEZGKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBTaGEyNTYucHJvdG90eXBlLmFycmF5ID0gU2hhMjU2LnByb3RvdHlwZS5kaWdlc3Q7XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZpbmFsaXplKCk7XG5cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuaXMyMjQgPyAyOCA6IDMyKTtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoMCwgdGhpcy5oMCk7XG4gICAgZGF0YVZpZXcuc2V0VWludDMyKDQsIHRoaXMuaDEpO1xuICAgIGRhdGFWaWV3LnNldFVpbnQzMig4LCB0aGlzLmgyKTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoMTIsIHRoaXMuaDMpO1xuICAgIGRhdGFWaWV3LnNldFVpbnQzMigxNiwgdGhpcy5oNCk7XG4gICAgZGF0YVZpZXcuc2V0VWludDMyKDIwLCB0aGlzLmg1KTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoMjQsIHRoaXMuaDYpO1xuICAgIGlmICghdGhpcy5pczIyNCkge1xuICAgICAgZGF0YVZpZXcuc2V0VWludDMyKDI4LCB0aGlzLmg3KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBmdW5jdGlvbiBIbWFjU2hhMjU2KGtleSwgaXMyMjQsIHNoYXJlZE1lbW9yeSkge1xuICAgIHZhciBpLCB0eXBlID0gdHlwZW9mIGtleTtcbiAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBieXRlcyA9IFtdLCBsZW5ndGggPSBrZXkubGVuZ3RoLCBpbmRleCA9IDAsIGNvZGU7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29kZSA9IGtleS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoY29kZSA8IDB4ODApIHtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9IGNvZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHhjMCB8IChjb2RlID4+IDYpKTtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweDgwIHwgKGNvZGUgJiAweDNmKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ZDgwMCB8fCBjb2RlID49IDB4ZTAwMCkge1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ZTAgfCAoY29kZSA+PiAxMikpO1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ODAgfCAoKGNvZGUgPj4gNikgJiAweDNmKSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHg4MCB8IChjb2RlICYgMHgzZikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvZGUgPSAweDEwMDAwICsgKCgoY29kZSAmIDB4M2ZmKSA8PCAxMCkgfCAoa2V5LmNoYXJDb2RlQXQoKytpKSAmIDB4M2ZmKSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHhmMCB8IChjb2RlID4+IDE4KSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHg4MCB8ICgoY29kZSA+PiAxMikgJiAweDNmKSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpKTtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweDgwIHwgKGNvZGUgJiAweDNmKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGtleSA9IGJ5dGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICAgIH0gZWxzZSBpZiAoQVJSQVlfQlVGRkVSICYmIGtleS5jb25zdHJ1Y3RvciA9PT0gQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICBrZXkgPSBuZXcgVWludDhBcnJheShrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgICBpZiAoIUFSUkFZX0JVRkZFUiB8fCAhQXJyYXlCdWZmZXIuaXNWaWV3KGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkubGVuZ3RoID4gNjQpIHtcbiAgICAgIGtleSA9IChuZXcgU2hhMjU2KGlzMjI0LCB0cnVlKSkudXBkYXRlKGtleSkuYXJyYXkoKTtcbiAgICB9XG5cbiAgICB2YXIgb0tleVBhZCA9IFtdLCBpS2V5UGFkID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDY0OyArK2kpIHtcbiAgICAgIHZhciBiID0ga2V5W2ldIHx8IDA7XG4gICAgICBvS2V5UGFkW2ldID0gMHg1YyBeIGI7XG4gICAgICBpS2V5UGFkW2ldID0gMHgzNiBeIGI7XG4gICAgfVxuXG4gICAgU2hhMjU2LmNhbGwodGhpcywgaXMyMjQsIHNoYXJlZE1lbW9yeSk7XG5cbiAgICB0aGlzLnVwZGF0ZShpS2V5UGFkKTtcbiAgICB0aGlzLm9LZXlQYWQgPSBvS2V5UGFkO1xuICAgIHRoaXMuaW5uZXIgPSB0cnVlO1xuICAgIHRoaXMuc2hhcmVkTWVtb3J5ID0gc2hhcmVkTWVtb3J5O1xuICB9XG4gIEhtYWNTaGEyNTYucHJvdG90eXBlID0gbmV3IFNoYTI1NigpO1xuXG4gIEhtYWNTaGEyNTYucHJvdG90eXBlLmZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIFNoYTI1Ni5wcm90b3R5cGUuZmluYWxpemUuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5pbm5lcikge1xuICAgICAgdGhpcy5pbm5lciA9IGZhbHNlO1xuICAgICAgdmFyIGlubmVySGFzaCA9IHRoaXMuYXJyYXkoKTtcbiAgICAgIFNoYTI1Ni5jYWxsKHRoaXMsIHRoaXMuaXMyMjQsIHRoaXMuc2hhcmVkTWVtb3J5KTtcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMub0tleVBhZCk7XG4gICAgICB0aGlzLnVwZGF0ZShpbm5lckhhc2gpO1xuICAgICAgU2hhMjU2LnByb3RvdHlwZS5maW5hbGl6ZS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZXhwb3J0cyA9IGNyZWF0ZU1ldGhvZCgpO1xuICBleHBvcnRzLnNoYTI1NiA9IGV4cG9ydHM7XG4gIGV4cG9ydHMuc2hhMjI0ID0gY3JlYXRlTWV0aG9kKHRydWUpO1xuICBleHBvcnRzLnNoYTI1Ni5obWFjID0gY3JlYXRlSG1hY01ldGhvZCgpO1xuICBleHBvcnRzLnNoYTIyNC5obWFjID0gY3JlYXRlSG1hY01ldGhvZCh0cnVlKTtcblxuICBpZiAoQ09NTU9OX0pTKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIHJvb3Quc2hhMjU2ID0gZXhwb3J0cy5zaGEyNTY7XG4gICAgcm9vdC5zaGEyMjQgPSBleHBvcnRzLnNoYTIyNDtcbiAgICBpZiAoQU1EKSB7XG4gICAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSkoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3NyYy91dGlsc1wiKTtcclxuLy8gaW1wb3J0IHsgVmVoaWNsZU1vdmVtZW50IH0gZnJvbSAnLi9zcmMvbW92ZW1lbnQuanMnO1xyXG52YXIgc2VydmVyX3B1c2hfMSA9IHJlcXVpcmUoXCIuL3NyYy9zZXJ2ZXItcHVzaFwiKTtcclxudmFyIEFjdGl2YXRlU2NlbmVfMSA9IHJlcXVpcmUoXCIuL3NyYy9BY3RpdmF0ZVNjZW5lXCIpO1xyXG4vLyBpbXBvcnQgeyBPZ1NldHRpbmdzIH0gZnJvbSAnLi9zcmMvT2dTZXR0aW5ncyc7XHJcbnZhciBPcGVuU2NlbmVOb3Rlc18xID0gcmVxdWlyZShcIi4vc3JjL09wZW5TY2VuZU5vdGVzXCIpO1xyXG52YXIgbW9kdWxlcyA9IFtcclxuICAgIC8vIGV4dGVuc2lvbnMuc2V0dGluZ3MsXHJcbiAgICBuZXcgQWN0aXZhdGVTY2VuZV8xLkFjdGl2YXRlU2NlbmUoKSxcclxuICAgIG5ldyBPcGVuU2NlbmVOb3Rlc18xLk9wZW5TY2VuZU5vdGVzKCksXHJcbiAgICBuZXcgc2VydmVyX3B1c2hfMS5TZXJ2ZXJQdXNoKCksXHJcbiAgICAvL25ldyBWZWhpY2xlTW92ZW1lbnQoKVxyXG5dO1xyXG5Ib29rcy5vbmNlKCdpbml0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCwgbW9kdWxlXzE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnaW5pdGlhdGluZycpO1xyXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBtb2R1bGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlXzEgPSBtb2R1bGVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChtb2R1bGVfMS5pbml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlXzEuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdpbml0aWF0ZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5Ib29rcy5vbmNlKCdyZWFkeScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5kZXgsIG1vZHVsZV8yO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ3JlYWR5aW5nJyk7XHJcbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG1vZHVsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGVfMiA9IG1vZHVsZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZHVsZV8yLnJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlXzIucmVhZHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgncmVhZHknKTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxuICAgICAgICBpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2FwcGx5Jykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0ZW1wbGF0ZSBpbiBfdGVtcGxhdGVDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfdGVtcGxhdGVDYWNoZSwgdGVtcGxhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90ZW1wbGF0ZUNhY2hlW3RlbXBsYXRlXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BY3RpdmF0ZVNjZW5lID0gdm9pZCAwO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG52YXIgQWN0aXZhdGVTY2VuZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFjdGl2YXRlU2NlbmUoKSB7XHJcbiAgICB9XHJcbiAgICBBY3RpdmF0ZVNjZW5lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ0FjdGl2YXRlU2NlbmUgaW5pdGlhdGluZycpO1xyXG4gICAgICAgICgwLCB1dGlsc18xLmFkZEdhbWVFeHRlbnNpb25zKSgnZmxvdycsIHtcclxuICAgICAgICAgICAgYWN0aXZhdGU6IHRoaXMuYWN0aXZhdGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ09ORklHLlRleHRFZGl0b3IuZW5yaWNoZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXR0ZXJuOiAvQEFjdGl2YXRlU2NlbmVcXFsoW15cXF1dKylcXF0oPzp7KFtefV0rKX0pPy9nbSxcclxuICAgICAgICAgICAgZW5yaWNoZXI6IGZ1bmN0aW9uIChtYXRjaCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9iID0gbWF0Y2guc2xpY2UoMSwgMyksIHRhcmdldCA9IF9iWzBdLCBuYW1lID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NlbmUgPSBnYW1lLnNjZW5lcy5nZXQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIHZhciBicm9rZW4gPSBzY2VuZSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1jb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2NvbnRlbnQtbGluayddLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDogXCJBY3RpdmF0ZVNjZW5lLlwiLmNvbmNhdCh0YXJnZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQWN0aXZhdGVTY2VuZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdTY2VuZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlbjogYnJva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGJyb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaWNvbiA9ICdmYXMgZmEtdW5saW5rJztcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNsYXNzZXMucHVzaCgnYnJva2VuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5uYW1lID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICAoX2EgPSBhLmNsYXNzTGlzdCkuYWRkLmFwcGx5KF9hLCBkYXRhLmNsYXNzZXMpO1xyXG4gICAgICAgICAgICAgICAgYS5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYyA9IE9iamVjdC5lbnRyaWVzKGRhdGEuZGF0YXNldCk7IF9pIDwgX2MubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9kID0gX2NbX2ldLCBrID0gX2RbMF0sIHYgPSBfZFsxXTtcclxuICAgICAgICAgICAgICAgICAgICBhLmRhdGFzZXRba10gPSB2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPVxcXCJcIi5jb25jYXQoZGF0YS5pY29uLCBcIlxcXCI+PC9pPjxpIGNsYXNzPVxcXCJmYXMgZmEtbWFwXFxcIj48L2k+IFwiKS5jb25jYXQoZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldCAmJiB0YXJnZXQuZGF0YXNldC50eXBlID09PSAnQWN0aXZhdGVTY2VuZScgJiYgdGFyZ2V0LmRhdGFzZXQuYnJva2VuID09PSAnZmFsc2UnKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hY3RpdmF0ZSh0YXJnZXQuZGF0YXNldC5pZCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnQWN0aXZhdGVTY2VuZSBpbml0aWF0ZWQnKTtcclxuICAgIH07XHJcbiAgICBBY3RpdmF0ZVNjZW5lLnByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIEFjdGl2YXRlU2NlbmUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKHRhcmdldFNjZW5lSWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2NlbmVKb3VybmFsLCB0YXJnZXRTY2VuZSwgam91cm5hbDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoXCJBY3RpdmF0ZVNjZW5lIGFjdGl2YXRpbmc6IFwiLmNvbmNhdCh0YXJnZXRTY2VuZUlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTY2VuZUpvdXJuYWwgPSBnYW1lLnNjZW5lcy5hY3RpdmUuam91cm5hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY2VuZUpvdXJuYWwgJiYgY3VycmVudFNjZW5lSm91cm5hbC5zaGVldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNjZW5lSm91cm5hbC5zaGVldC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFNjZW5lID0gZ2FtZS5zY2VuZXMuZ2V0KHRhcmdldFNjZW5lSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFNjZW5lKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGFyZ2V0U2NlbmUuYWN0aXZhdGUoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTY2VuZS5qb3VybmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb3VybmFsID0gdGFyZ2V0U2NlbmUuam91cm5hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb3VybmFsLnNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFqb3VybmFsLnRlc3RVc2VyUGVybWlzc2lvbihnYW1lLnVzZXIsICdMSU1JVEVEJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHVpLm5vdGlmaWNhdGlvbnMud2FybihcIllvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIHZpZXcgdGhpcyBcIi5jb25jYXQoam91cm5hbC5kb2N1bWVudE5hbWUsIFwiIHNoZWV0LlwiKSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb3VybmFsLnNoZWV0LnJlbmRlcih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBY3RpdmF0ZVNjZW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLkFjdGl2YXRlU2NlbmUgPSBBY3RpdmF0ZVNjZW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLm5hbWVzcGFjZSA9IHZvaWQgMDtcclxuZXhwb3J0cy5uYW1lc3BhY2UgPSAnb2ctZXhwZXJpbWVudHMnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk9wZW5TY2VuZU5vdGVzID0gdm9pZCAwO1xyXG52YXIgT2dTZXR0aW5nc18xID0gcmVxdWlyZShcIi4vT2dTZXR0aW5nc1wiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxudmFyIE9wZW5TY2VuZU5vdGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT3BlblNjZW5lTm90ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fb3BlblNjZW5lTm90ZXNPblJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9vcGVuU2NlbmVOb3Rlc0tleU9uUmVhZHkgPSAnb3BlblNjZW5lTm90ZXNPblJlYWR5JztcclxuICAgIH1cclxuICAgIE9wZW5TY2VuZU5vdGVzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ09wZW5TY2VuZU5vdGVzIGluaXRpYXRpbmcnKTtcclxuICAgICAgICBnYW1lLnNldHRpbmdzLnJlZ2lzdGVyKE9nU2V0dGluZ3NfMS5uYW1lc3BhY2UsIHRoaXMuX29wZW5TY2VuZU5vdGVzS2V5T25SZWFkeSwge1xyXG4gICAgICAgICAgICBuYW1lOiAnQXV0by1vcGVuIHNjZW5lIG5vdGVzPycsXHJcbiAgICAgICAgICAgIGhpbnQ6ICdJZiBlbmFibGVkLCB0aGUgc2NlbmUgbm90ZXMgb2YgdGhlIGN1cnJlbnQgc2NlbmUgd2lsbCBvcGVuIHdoZW4gdGhlIHNlcnZlciBmaXJzdCBsb2FkLicsXHJcbiAgICAgICAgICAgIHNjb3BlOiAnY2xpZW50JyxcclxuICAgICAgICAgICAgY29uZmlnOiB0cnVlLFxyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB0aGlzLl9vcGVuU2NlbmVOb3Rlc09uUmVhZHksXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIChfdGhpcy5fb3BlblNjZW5lTm90ZXNPblJlYWR5ID0gdmFsdWUpOyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3BlblNjZW5lTm90ZXNPblJlYWR5ID0gZ2FtZS5zZXR0aW5ncy5nZXQoT2dTZXR0aW5nc18xLm5hbWVzcGFjZSwgdGhpcy5fb3BlblNjZW5lTm90ZXNLZXlPblJlYWR5KTtcclxuICAgICAgICAoMCwgdXRpbHNfMS5hZGRHYW1lRXh0ZW5zaW9ucykoJ2Zsb3cnLCB7XHJcbiAgICAgICAgICAgIG9wZW5TY2VuZU5vdGVzOiB0aGlzLm9wZW5TY2VuZU5vdGVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdPcGVuU2NlbmVOb3RlcyBpbml0aWF0ZWQnKTtcclxuICAgIH07XHJcbiAgICBPcGVuU2NlbmVOb3Rlcy5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ09wZW5TY2VuZU5vdGVzIGlzIGdldHRpbmcgcmVhZHknKTtcclxuICAgICAgICBpZiAodGhpcy5vcGVuU2NlbmVOb3Rlc09uUmVhZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuU2NlbmVOb3RlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnT3BlblNjZW5lTm90ZXMgaXMgcmVhZHknKTtcclxuICAgIH07XHJcbiAgICBPcGVuU2NlbmVOb3Rlcy5wcm90b3R5cGUub3BlblNjZW5lTm90ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTY2VuZUpvdXJuYWwgPSBnYW1lLnNjZW5lcy5hY3RpdmUuam91cm5hbDtcclxuICAgICAgICBpZiAoY3VycmVudFNjZW5lSm91cm5hbCAmJiBjdXJyZW50U2NlbmVKb3VybmFsLnNoZWV0KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTY2VuZUpvdXJuYWwuc2hlZXQucmVuZGVyKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT3BlblNjZW5lTm90ZXMucHJvdG90eXBlLCBcIm9wZW5TY2VuZU5vdGVzT25SZWFkeVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vcGVuU2NlbmVOb3Rlc09uUmVhZHk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVuU2NlbmVOb3Rlc09uUmVhZHkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgZ2FtZS5zZXR0aW5ncy5zZXQoT2dTZXR0aW5nc18xLm5hbWVzcGFjZSwgdGhpcy5fb3BlblNjZW5lTm90ZXNLZXlPblJlYWR5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIE9wZW5TY2VuZU5vdGVzO1xyXG59KCkpO1xyXG5leHBvcnRzLk9wZW5TY2VuZU5vdGVzID0gT3BlblNjZW5lTm90ZXM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNlcnZlclB1c2ggPSB2b2lkIDA7XHJcbi8vIGNvbnN0IHNpZ25hbFIgPSByZXF1aXJlKCdAbWljcm9zb2Z0L3NpZ25hbHInKTtcclxudmFyIHNpZ25hbHJfMSA9IHJlcXVpcmUoXCJAbWljcm9zb2Z0L3NpZ25hbHJcIik7XHJcbnZhciBrZXljbG9ha19qc18xID0gcmVxdWlyZShcImtleWNsb2FrLWpzXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG4vLyBmdW5jdGlvbiBsb2dUZXh0KHRleHQ6IHN0cmluZykge1xyXG4vLyAgICAgY29uc29sZS5kZWJ1Zygnb2ctZXhwZXJpbWVudHMgfCAnICsgdGV4dCk7XHJcbi8vIH1cclxuLy8gdmFyIG5vdGVCeUluZGV4ID0gZ2FtZS5qb3VybmFsLl9zb3VyY2VbMTZdXHJcbi8vIHZhciBqb3VybmFsRW50cnlJZCA9ICd6RXR0WWwyTGxpRGcxVzdPJzsgLy8gXCJVM0JtRGIyM0dVeG5NUDlNXCJcclxuLypcclxuY29uc3Qgam91cm5hbEVudHJ5SWQgPSAnekV0dFlsMkxsaURnMVc3Tyc7XHJcbmF3YWl0IGdhbWUuZXhwZXJpbWVudHMuc2hvd0pvdXJuYWxFbnRyeUJ5SWQoam91cm5hbEVudHJ5SWQpO1xyXG4qL1xyXG4vLyB2YXIgbm90ZUJ5SWQgPSBnYW1lLmpvdXJuYWwuZmluZCgoZW50cnkpID0+IGVudHJ5LmRhdGEuX2lkID09PSBqb3VybmFsRW50cnlJZCk7XHJcbi8vIG5vdGVCeUlkLnNob3coKTtcclxuLy9cclxuLy9uZXcgSm91cm5hbEVudHJ5KG5vdGUpLnNob3coKVxyXG52YXIgQXV0aFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBdXRoU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5Y2xvYWsgPSBuZXcga2V5Y2xvYWtfanNfMS5kZWZhdWx0KHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwLycsXHJcbiAgICAgICAgICAgIHJlYWxtOiAnT2dBdXRoJyxcclxuICAgICAgICAgICAgY2xpZW50SWQ6ICdvZy1zZXJ2ZXInLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhTZXJ2aWNlLnByb3RvdHlwZSwgXCJ0b2tlblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSB2O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRoU2VydmljZS5wcm90b3R5cGUsIFwiYXV0aGVudGljYXRlZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGVkID0gdjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aFNlcnZpY2UucHJvdG90eXBlLCBcInVzZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5Y2xvYWs7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fa2V5Y2xvYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkOiAnbG9naW4tcmVxdWlyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmk6ICdodHRwczovL2xvY2FsaG9zdDozMDAwMC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoYXV0aGVudGljYXRlZCA/ICdhdXRoZW50aWNhdGVkJyA6ICdub3QgYXV0aGVudGljYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmF1dGhlbnRpY2F0ZWQgPSBhdXRoZW50aWNhdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnRva2VuID0gbWUuX2tleWNsb2FrLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGluaXRpYWxpemUnLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXV0aFNlcnZpY2U7XHJcbn0oKSk7XHJcbnZhciBTZXJ2ZXJQdXNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2VydmVyUHVzaCgpIHtcclxuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aFNlcnZpY2UoKTtcclxuICAgIH1cclxuICAgIFNlcnZlclB1c2gucHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24sIHVzZXI7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoIGdldHRpbmcgcmVhZHknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hdXRoLmluaXQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYXV0aGVudGljYXRlZCEgQ2FuJ3QgcHJvY2VlZCB3aXRoIFNlcnZlclB1c2gucmVhZHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBuZXcgc2lnbmFscl8xLkh1YkNvbm5lY3Rpb25CdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoVXJsKCdodHRwczovL2xvY2FsaG9zdDo3MjYzL2h1YnMvZGVmYXVsdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuRmFjdG9yeTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYXV0aC50b2tlbjsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyID0gdGhpcy5hdXRoLnVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmFkZEdhbWVFeHRlbnNpb25zKSgnc2VydmVyUHVzaCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb246IGNvbm5lY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29ubmVjdGlvbi5pbnZva2UoJ1BpbmcnKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ub24oJ3BvbmcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgncG9uZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5vbignY3JlYXRlU2hvd0FuZERlbGV0ZU5ld0pvdXJuYWxFbnRyeScsIHRoaXMuY3JlYXRlU2hvd0FuZERlbGV0ZU5ld0pvdXJuYWxFbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ub24oJ2NyZWF0ZUFuZFNob3dUZW1wb3JhcnlKb3VybmFsRW50cnknLCB0aGlzLmNyZWF0ZUFuZFNob3dUZW1wb3JhcnlKb3VybmFsRW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLm9uKCdleGVjdXRlJywgdGhpcy5leGVjdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5vbignZXhlY3V0ZUFzeW5jJywgdGhpcy5leGVjdXRlQXN5bmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoIGlzIHJlYWR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoIGluaXRpYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIC8vIEphdmFzY3JpcHRcclxuICAgICAgICAgICAgICAgIC8vIGdhbWUuZXhwZXJpbWVudHMuc2hvd0pvdXJuYWxFbnRyeUJ5SWQgPSBhc3luYyBmdW5jdGlvbiAoam91cm5hbEVudHJ5SWQpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2YXIgbm90ZUJ5SWQgPSBnYW1lLmpvdXJuYWwuZmluZCgoZW50cnkpID0+IGVudHJ5LmRhdGEuX2lkID09PSBqb3VybmFsRW50cnlJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gYXdhaXQgbm90ZUJ5SWQuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGdhbWUuU3RvcnlUZWxsZXIuc2hvd1N0b3J5QnlJRFRvQWxsKGpvdXJuYWxFbnRyeUlkKTtcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICAvLyAvL3ZhciBqb3VybmFsRW50cnlJZD1cImE3TEJLd0VMcUR3d2NDenpcIlxyXG4gICAgICAgICAgICAgICAgLy8gZ2FtZS5leHBlcmltZW50cy5zaG93TmV3Sm91cm5hbEVudHJ5ID0gYXN5bmMgZnVuY3Rpb24gKG5hbWUsIGNvbnRlbnQsIGRlbGV0ZURlbGF5LCBpc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgSm91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nVGV4dChgSm91cm5hbCBlbnRyeSAnJHtuYW1lfScgY3JlYXRlZCB3aXRoIGlzUGVybWFuZW50ID0gJHtpc1Blcm1hbmVudH0uYCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYXdhaXQgZW50cnkuc2hvdygndGV4dCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChpc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGRlbGV0ZUVudHJ5SW5NUyA9IGRlbGV0ZURlbGF5IHx8IDYwMDAwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ1RleHQoYFNjaGVkdWxpbmcgam91cm5hbCBlbnRyeSBkZWxldGlvbiBpbiAke2RlbGV0ZUVudHJ5SW5NU30gbXMuYCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxvZ1RleHQoJ0RlbGV0aW5nIGpvdXJuYWwgZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGF3YWl0IGVudHJ5LmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsb2dUZXh0KCdKb3VybmFsIGVudHJ5IGRlbGV0ZWQnKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LCBkZWxldGVFbnRyeUluTVMpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIFYxMCBtdWx0aS1wYWdlIHN5bnRheFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIEpvdXJuYWxFbnRyeS5jcmVhdGUoe25hbWU6IFwiSm91cm5hbCBuYW1lXCIsIHBhZ2VzOlt7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiUXVlc3QgaG9va1wiLCB0ZXh0Ontjb250ZW50OiBgSFRNTCBjb250ZW50IGhlcmVgfX1dfSlcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnU2VydmVyUHVzaCBpbml0aWF0ZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUuY3JlYXRlQW5kU2hvd1RlbXBvcmFyeUpvdXJuYWxFbnRyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBKb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG9wdGlvbnMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcm1pc3Npb246IGZvdW5kcnkuQ09OU1QuRE9DVU1FTlRfUEVSTUlTU0lPTl9MRVZFTFMuT0JTRVJWRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogZm91bmRyeS5DT05TVC5ET0NVTUVOVF9QRVJNSVNTSU9OX0xFVkVMUy5PQlNFUlZFUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgeyB0ZW1wb3Jhcnk6IHRydWUsIHJlbmRlclNoZWV0OiB0cnVlIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gZW50cnkgd2FzIGNyZWF0ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoXCJKb3VybmFsIGVudHJ5ICdcIi5jb25jYXQob3B0aW9ucy5uYW1lLCBcIicgY3JlYXRlZC5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhd2FpdCBlbnRyeS5zaG93KCd0ZXh0JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sICgoX2EgPSBlbnRyeS5zaGVldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbmRlcih0cnVlKSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXdhaXQgZW50cnkuc2hvdygndGV4dCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUuY3JlYXRlU2hvd0FuZERlbGV0ZU5ld0pvdXJuYWxFbnRyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZW50cnksIGRlbGV0ZUVudHJ5SW5NUztcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgSm91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBvcHRpb25zLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gZW50cnkgd2FzIGNyZWF0ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoXCJKb3VybmFsIGVudHJ5ICdcIi5jb25jYXQob3B0aW9ucy5uYW1lLCBcIicgY3JlYXRlZCB3aXRoIGlzUGVybWFuZW50ID0gXCIpLmNvbmNhdChvcHRpb25zLmlzUGVybWFuZW50LCBcIi5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBlbnRyeS5zaG93KCd0ZXh0JywgdHJ1ZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5pc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUVudHJ5SW5NUyA9IG9wdGlvbnMuZGVsZXRlRGVsYXkgfHwgNjAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKFwiU2NoZWR1bGluZyBqb3VybmFsIGVudHJ5IGRlbGV0aW9uIGluIFwiLmNvbmNhdChkZWxldGVFbnRyeUluTVMsIFwiIG1zLlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnRGVsZXRpbmcgam91cm5hbCBlbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGVudHJ5LmRlbGV0ZSgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ0pvdXJuYWwgZW50cnkgZGVsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSwgZGVsZXRlRW50cnlJbk1TKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTZXJ2ZXJQdXNoLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKG9wdGlvbnMsIHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoLmV4ZWN1dGUnLCBvcHRpb25zLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgIGV2YWwob3B0aW9ucy5jb21tYW5kKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUuZXhlY3V0ZUFzeW5jID0gZnVuY3Rpb24gKG9wdGlvbnMsIHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoLmV4ZWN1dGVBc3luYycsIG9wdGlvbnMsIHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHJldHVybiBldmFsKG9wdGlvbnMuY29tbWFuZCk7IH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VydmVyUHVzaDtcclxufSgpKTtcclxuZXhwb3J0cy5TZXJ2ZXJQdXNoID0gU2VydmVyUHVzaDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmFkZEdhbWVFeHRlbnNpb25zID0gZXhwb3J0cy5sb2dUZXh0ID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBsb2dUZXh0KCkge1xyXG4gICAgdmFyIGRhdGEgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgZGF0YVtfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5KFsnb2ctZXhwZXJpbWVudHMgfCddLCBkYXRhLCBmYWxzZSkpO1xyXG59XHJcbmV4cG9ydHMubG9nVGV4dCA9IGxvZ1RleHQ7XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVPZ0V4dGVuc2lvbnMoKSB7XHJcbiAgICBnYW1lWydvZyddID0ge307XHJcbn1cclxuZnVuY3Rpb24gZW5mb3JjZU9nRXh0ZW5zaW9uc0luaXRpYWxpemVkKCkge1xyXG4gICAgaWYgKGdhbWVbJ29nJ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGluaXRpYWxpemVPZ0V4dGVuc2lvbnMoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRHYW1lRXh0ZW5zaW9ucyhrZXksIHNldHRpbmcpIHtcclxuICAgIGVuZm9yY2VPZ0V4dGVuc2lvbnNJbml0aWFsaXplZCgpO1xyXG4gICAgZ2FtZVsnb2cnXVtrZXldID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGdhbWVbJ29nJ11ba2V5XSksIHNldHRpbmcpO1xyXG59XHJcbmV4cG9ydHMuYWRkR2FtZUV4dGVuc2lvbnMgPSBhZGRHYW1lRXh0ZW5zaW9ucztcclxuIiwiaW1wb3J0IGJhc2U2NCBmcm9tICdiYXNlNjQtanMnO1xuaW1wb3J0IHNoYTI1NiBmcm9tICdqcy1zaGEyNTYnO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXNcbiAqIGFuZCBvdGhlciBjb250cmlidXRvcnMgYXMgaW5kaWNhdGVkIGJ5IHRoZSBAYXV0aG9yIHRhZ3MuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IEVycm9yKCdLZXljbG9hayByZXF1aXJlcyBhbiBlbnZpcm9ubWVudCB0aGF0IHN1cHBvcnRzIFByb21pc2VzLiBNYWtlIHN1cmUgdGhhdCB5b3UgaW5jbHVkZSB0aGUgYXBwcm9wcmlhdGUgcG9seWZpbGwuJyk7XG59XG5cbnZhciBsb2dnZWRQcm9taXNlRGVwcmVjYXRpb24gPSBmYWxzZTtcblxuZnVuY3Rpb24gbG9nUHJvbWlzZURlcHJlY2F0aW9uKCkge1xuICAgIGlmICghbG9nZ2VkUHJvbWlzZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGxvZ2dlZFByb21pc2VEZXByZWNhdGlvbiA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUud2FybignW0tFWUNMT0FLXSBVc2FnZSBvZiBsZWdhY3kgc3R5bGUgcHJvbWlzZSBtZXRob2RzIHN1Y2ggYXMgYC5lcnJvcigpYCBhbmQgYC5zdWNjZXNzKClgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHN1cHBvcnQgd2lsbCBiZSByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucy4gVXNlIHN0YW5kYXJkIHN0eWxlIHByb21pc2UgbWV0aG9kcyBzdWNoIGFzIGAudGhlbigpIGFuZCBgLmNhdGNoKClgIGluc3RlYWQuJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBLZXljbG9hayAoY29uZmlnKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEtleWNsb2FrKSkge1xuICAgICAgICByZXR1cm4gbmV3IEtleWNsb2FrKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgdmFyIGtjID0gdGhpcztcbiAgICB2YXIgYWRhcHRlcjtcbiAgICB2YXIgcmVmcmVzaFF1ZXVlID0gW107XG4gICAgdmFyIGNhbGxiYWNrU3RvcmFnZTtcblxuICAgIHZhciBsb2dpbklmcmFtZSA9IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBjYWxsYmFja0xpc3Q6IFtdLFxuICAgICAgICBpbnRlcnZhbDogNVxuICAgIH07XG5cbiAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKChzY3JpcHRzW2ldLnNyYy5pbmRleE9mKCdrZXljbG9hay5qcycpICE9PSAtMSB8fCBzY3JpcHRzW2ldLnNyYy5pbmRleE9mKCdrZXljbG9hay5taW4uanMnKSAhPT0gLTEpICYmIHNjcmlwdHNbaV0uc3JjLmluZGV4T2YoJ3ZlcnNpb249JykgIT09IC0xKSB7XG4gICAgICAgICAgICBrYy5pZnJhbWVWZXJzaW9uID0gc2NyaXB0c1tpXS5zcmMuc3Vic3RyaW5nKHNjcmlwdHNbaV0uc3JjLmluZGV4T2YoJ3ZlcnNpb249JykgKyA4KS5zcGxpdCgnJicpWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHVzZU5vbmNlID0gdHJ1ZTtcbiAgICB2YXIgbG9nSW5mbyA9IGNyZWF0ZUxvZ2dlcihjb25zb2xlLmluZm8pO1xuICAgIHZhciBsb2dXYXJuID0gY3JlYXRlTG9nZ2VyKGNvbnNvbGUud2Fybik7XG5cbiAgICBrYy5pbml0ID0gZnVuY3Rpb24gKGluaXRPcHRpb25zKSB7XG4gICAgICAgIGtjLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICAgICAgICBjYWxsYmFja1N0b3JhZ2UgPSBjcmVhdGVDYWxsYmFja1N0b3JhZ2UoKTtcbiAgICAgICAgdmFyIGFkYXB0ZXJzID0gWydkZWZhdWx0JywgJ2NvcmRvdmEnLCAnY29yZG92YS1uYXRpdmUnXTtcblxuICAgICAgICBpZiAoaW5pdE9wdGlvbnMgJiYgYWRhcHRlcnMuaW5kZXhPZihpbml0T3B0aW9ucy5hZGFwdGVyKSA+IC0xKSB7XG4gICAgICAgICAgICBhZGFwdGVyID0gbG9hZEFkYXB0ZXIoaW5pdE9wdGlvbnMuYWRhcHRlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdE9wdGlvbnMgJiYgdHlwZW9mIGluaXRPcHRpb25zLmFkYXB0ZXIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIgPSBpbml0T3B0aW9ucy5hZGFwdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5Db3Jkb3ZhIHx8IHdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IGxvYWRBZGFwdGVyKCdjb3Jkb3ZhJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBsb2FkQWRhcHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluaXRPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRPcHRpb25zLnVzZU5vbmNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHVzZU5vbmNlID0gaW5pdE9wdGlvbnMudXNlTm9uY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5pdE9wdGlvbnMuY2hlY2tMb2dpbklmcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBsb2dpbklmcmFtZS5lbmFibGUgPSBpbml0T3B0aW9ucy5jaGVja0xvZ2luSWZyYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMuY2hlY2tMb2dpbklmcmFtZUludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgbG9naW5JZnJhbWUuaW50ZXJ2YWwgPSBpbml0T3B0aW9ucy5jaGVja0xvZ2luSWZyYW1lSW50ZXJ2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5vbkxvYWQgPT09ICdsb2dpbi1yZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgICBrYy5sb2dpblJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnJlc3BvbnNlTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5yZXNwb25zZU1vZGUgPT09ICdxdWVyeScgfHwgaW5pdE9wdGlvbnMucmVzcG9uc2VNb2RlID09PSAnZnJhZ21lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGtjLnJlc3BvbnNlTW9kZSA9IGluaXRPcHRpb25zLnJlc3BvbnNlTW9kZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCB2YWx1ZSBmb3IgcmVzcG9uc2VNb2RlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5mbG93KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbml0T3B0aW9ucy5mbG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YW5kYXJkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnJlc3BvbnNlVHlwZSA9ICdjb2RlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbXBsaWNpdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5yZXNwb25zZVR5cGUgPSAnaWRfdG9rZW4gdG9rZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2h5YnJpZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5yZXNwb25zZVR5cGUgPSAnY29kZSBpZF90b2tlbiB0b2tlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIHZhbHVlIGZvciBmbG93JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2MuZmxvdyA9IGluaXRPcHRpb25zLmZsb3c7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy50aW1lU2tldyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAga2MudGltZVNrZXcgPSBpbml0T3B0aW9ucy50aW1lU2tldztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaW5pdE9wdGlvbnMucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICAgICAgICBrYy5yZWRpcmVjdFVyaSA9IGluaXRPcHRpb25zLnJlZGlyZWN0VXJpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMuc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaSkge1xuICAgICAgICAgICAgICAgIGtjLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmkgPSBpbml0T3B0aW9ucy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRPcHRpb25zLnNpbGVudENoZWNrU3NvRmFsbGJhY2sgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGtjLnNpbGVudENoZWNrU3NvRmFsbGJhY2sgPSBpbml0T3B0aW9ucy5zaWxlbnRDaGVja1Nzb0ZhbGxiYWNrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb0ZhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnBrY2VNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMucGtjZU1ldGhvZCAhPT0gXCJTMjU2XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgdmFsdWUgZm9yIHBrY2VNZXRob2QnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrYy5wa2NlTWV0aG9kID0gaW5pdE9wdGlvbnMucGtjZU1ldGhvZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0T3B0aW9ucy5lbmFibGVMb2dnaW5nID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICBrYy5lbmFibGVMb2dnaW5nID0gaW5pdE9wdGlvbnMuZW5hYmxlTG9nZ2luZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2MuZW5hYmxlTG9nZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRPcHRpb25zLnNjb3BlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGtjLnNjb3BlID0gaW5pdE9wdGlvbnMuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5pdE9wdGlvbnMubWVzc2FnZVJlY2VpdmVUaW1lb3V0ID09PSAnbnVtYmVyJyAmJiBpbml0T3B0aW9ucy5tZXNzYWdlUmVjZWl2ZVRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAga2MubWVzc2FnZVJlY2VpdmVUaW1lb3V0ID0gaW5pdE9wdGlvbnMubWVzc2FnZVJlY2VpdmVUaW1lb3V0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrYy5tZXNzYWdlUmVjZWl2ZVRpbWVvdXQgPSAxMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgha2MucmVzcG9uc2VNb2RlKSB7XG4gICAgICAgICAgICBrYy5yZXNwb25zZU1vZGUgPSAnZnJhZ21lbnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICgha2MucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgICAgICBrYy5yZXNwb25zZVR5cGUgPSAnY29kZSc7XG4gICAgICAgICAgICBrYy5mbG93ID0gJ3N0YW5kYXJkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgIHZhciBpbml0UHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcbiAgICAgICAgaW5pdFByb21pc2UucHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAga2Mub25SZWFkeSAmJiBrYy5vblJlYWR5KGtjLmF1dGhlbnRpY2F0ZWQpO1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKGtjLmF1dGhlbnRpY2F0ZWQpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjb25maWdQcm9taXNlID0gbG9hZENvbmZpZygpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHZhciBkb0xvZ2luID0gZnVuY3Rpb24ocHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9tcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9tcHQgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAga2MubG9naW4ob3B0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNoZWNrU3NvU2lsZW50bHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWZybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgICAgICAgICAgdmFyIHNyYyA9IGtjLmNyZWF0ZUxvZ2luVXJsKHtwcm9tcHQ6ICdub25lJywgcmVkaXJlY3RVcmk6IGtjLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcml9KTtcbiAgICAgICAgICAgICAgICBpZnJtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpO1xuICAgICAgICAgICAgICAgIGlmcm0uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJrZXljbG9hay1zaWxlbnQtY2hlY2stc3NvXCIpO1xuICAgICAgICAgICAgICAgIGlmcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZybSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZUNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiB8fCBpZnJtLmNvbnRlbnRXaW5kb3cgIT09IGV2ZW50LnNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9hdXRoID0gcGFyc2VDYWxsYmFjayhldmVudC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKG9hdXRoLCBpbml0UHJvbWlzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJtKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG1lc3NhZ2VDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBtZXNzYWdlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5pdE9wdGlvbnMub25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hlY2stc3NvJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXBDaGVja0xvZ2luSWZyYW1lKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xvZ2luSWZyYW1lKCkudGhlbihmdW5jdGlvbiAodW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpID8gY2hlY2tTc29TaWxlbnRseSgpIDogZG9Mb2dpbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpID8gY2hlY2tTc29TaWxlbnRseSgpIDogZG9Mb2dpbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbG9naW4tcmVxdWlyZWQnOlxuICAgICAgICAgICAgICAgICAgICBkb0xvZ2luKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCB2YWx1ZSBmb3Igb25Mb2FkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NJbml0KCkge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcGFyc2VDYWxsYmFjayh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh3aW5kb3cuaGlzdG9yeS5zdGF0ZSwgbnVsbCwgY2FsbGJhY2submV3VXJsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGNhbGxiYWNrLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldHVwQ2hlY2tMb2dpbklmcmFtZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgaW5pdFByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnRva2VuICYmIGluaXRPcHRpb25zLnJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbihpbml0T3B0aW9ucy50b2tlbiwgaW5pdE9wdGlvbnMucmVmcmVzaFRva2VuLCBpbml0T3B0aW9ucy5pZFRva2VuKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5JZnJhbWUuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR1cENoZWNrTG9naW5JZnJhbWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTG9naW5JZnJhbWUoKS50aGVuKGZ1bmN0aW9uICh1bmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2Mub25BdXRoU3VjY2VzcyAmJiBrYy5vbkF1dGhTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZUNoZWNrSWZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy51cGRhdGVUb2tlbigtMSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhTdWNjZXNzICYmIGtjLm9uQXV0aFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLm9uQXV0aEVycm9yICYmIGtjLm9uQXV0aEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLm9uTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRPcHRpb25zLm9uTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkb21SZWFkeSgpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICB2YXIgY2hlY2tSZWFkeVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGNoZWNrUmVhZHlTdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgY2hlY2tSZWFkeVN0YXRlKTtcblxuICAgICAgICAgICAgY2hlY2tSZWFkeVN0YXRlKCk7IC8vIGp1c3QgaW4gY2FzZSB0aGUgZXZlbnQgd2FzIGFscmVhZHkgZmlyZWQgYW5kIHdlIG1pc3NlZCBpdCAoaW4gY2FzZSB0aGUgaW5pdCBpcyBkb25lIGxhdGVyIHRoYW4gYXQgdGhlIGxvYWQgdGltZSwgaS5lLiBpdCdzIGRvbmUgZnJvbSBjb2RlKVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvbVJlYWR5KClcbiAgICAgICAgICAgICAgICAudGhlbihjaGVjazNwQ29va2llc1N1cHBvcnRlZClcbiAgICAgICAgICAgICAgICAudGhlbihwcm9jZXNzSW5pdClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnUHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH07XG5cbiAgICBrYy5sb2dpbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBhZGFwdGVyLmxvZ2luKG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbURhdGEobGVuKSB7XG4gICAgICAgIC8vIHVzZSB3ZWIgY3J5cHRvIEFQSXMgaWYgcG9zc2libGVcbiAgICAgICAgdmFyIGFycmF5ID0gbnVsbDtcbiAgICAgICAgdmFyIGNyeXB0byA9IHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvO1xuICAgICAgICBpZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgd2luZG93LlVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgICAgICAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gTWF0aCByYW5kb21cbiAgICAgICAgYXJyYXkgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgYXJyYXlbal0gPSBNYXRoLmZsb29yKDI1NiAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvZGVWZXJpZmllcihsZW4pIHtcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlUmFuZG9tU3RyaW5nKGxlbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TdHJpbmcobGVuLCBhbHBoYWJldCl7XG4gICAgICAgIHZhciByYW5kb21EYXRhID0gZ2VuZXJhdGVSYW5kb21EYXRhKGxlbik7XG4gICAgICAgIHZhciBjaGFycyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGFyc1tpXSA9IGFscGhhYmV0LmNoYXJDb2RlQXQocmFuZG9tRGF0YVtpXSAlIGFscGhhYmV0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY2hhcnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUGtjZUNoYWxsZW5nZShwa2NlTWV0aG9kLCBjb2RlVmVyaWZpZXIpIHtcbiAgICAgICAgc3dpdGNoIChwa2NlTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgdXNlIG9mIHRoZSBcInBsYWluXCIgbWV0aG9kIGlzIGNvbnNpZGVyZWQgaW5zZWN1cmUgYW5kIHRoZXJlZm9yZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgICAgY2FzZSBcIlMyNTZcIjpcbiAgICAgICAgICAgICAgICAvLyBoYXNoIGNvZGVWZXJpZmllciwgdGhlbiBlbmNvZGUgYXMgdXJsLXNhZmUgYmFzZTY0IHdpdGhvdXQgcGFkZGluZ1xuICAgICAgICAgICAgICAgIHZhciBoYXNoQnl0ZXMgPSBuZXcgVWludDhBcnJheShzaGEyNTYuYXJyYXlCdWZmZXIoY29kZVZlcmlmaWVyKSk7XG4gICAgICAgICAgICAgICAgdmFyIGVuY29kZWRIYXNoID0gYmFzZTY0LmZyb21CeXRlQXJyYXkoaGFzaEJ5dGVzKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXD0vZywgJycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVkSGFzaDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgdmFsdWUgZm9yIHBrY2VNZXRob2QnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRDbGFpbXNQYXJhbWV0ZXIocmVxdWVzdGVkQWNyKXtcbiAgICAgICAgdmFyIGNsYWltcyA9IHtcbiAgICAgICAgICAgIGlkX3Rva2VuOiB7XG4gICAgICAgICAgICAgICAgYWNyOiByZXF1ZXN0ZWRBY3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNsYWltcyk7XG4gICAgfVxuXG4gICAga2MuY3JlYXRlTG9naW5VcmwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGNyZWF0ZVVVSUQoKTtcbiAgICAgICAgdmFyIG5vbmNlID0gY3JlYXRlVVVJRCgpO1xuXG4gICAgICAgIHZhciByZWRpcmVjdFVyaSA9IGFkYXB0ZXIucmVkaXJlY3RVcmkob3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIGNhbGxiYWNrU3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBub25jZTogbm9uY2UsXG4gICAgICAgICAgICByZWRpcmVjdFVyaTogZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0VXJpKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJvbXB0KSB7XG4gICAgICAgICAgICBjYWxsYmFja1N0YXRlLnByb21wdCA9IG9wdGlvbnMucHJvbXB0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJhc2VVcmw7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWN0aW9uID09ICdyZWdpc3RlcicpIHtcbiAgICAgICAgICAgIGJhc2VVcmwgPSBrYy5lbmRwb2ludHMucmVnaXN0ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhc2VVcmwgPSBrYy5lbmRwb2ludHMuYXV0aG9yaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2NvcGUgPSBvcHRpb25zICYmIG9wdGlvbnMuc2NvcGUgfHwga2Muc2NvcGU7XG4gICAgICAgIGlmICghc2NvcGUpIHtcbiAgICAgICAgICAgIC8vIGlmIHNjb3BlIGlzIG5vdCBzZXQsIGRlZmF1bHQgdG8gXCJvcGVuaWRcIlxuICAgICAgICAgICAgc2NvcGUgPSBcIm9wZW5pZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlLmluZGV4T2YoXCJvcGVuaWRcIikgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBpZiBvcGVuaWQgc2NvcGUgaXMgbWlzc2luZywgcHJlZml4IHRoZSBnaXZlbiBzY29wZXMgd2l0aCBpdFxuICAgICAgICAgICAgc2NvcGUgPSBcIm9wZW5pZCBcIiArIHNjb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybCA9IGJhc2VVcmxcbiAgICAgICAgICAgICsgJz9jbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5jbGllbnRJZClcbiAgICAgICAgICAgICsgJyZyZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdFVyaSlcbiAgICAgICAgICAgICsgJyZzdGF0ZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0YXRlKVxuICAgICAgICAgICAgKyAnJnJlc3BvbnNlX21vZGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5yZXNwb25zZU1vZGUpXG4gICAgICAgICAgICArICcmcmVzcG9uc2VfdHlwZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLnJlc3BvbnNlVHlwZSlcbiAgICAgICAgICAgICsgJyZzY29wZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNjb3BlKTtcbiAgICAgICAgaWYgKHVzZU5vbmNlKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnJm5vbmNlPScgKyBlbmNvZGVVUklDb21wb25lbnQobm9uY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm9tcHQpIHtcbiAgICAgICAgICAgIHVybCArPSAnJnByb21wdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMucHJvbXB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubWF4QWdlKSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZtYXhfYWdlPScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5tYXhBZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sb2dpbkhpbnQpIHtcbiAgICAgICAgICAgIHVybCArPSAnJmxvZ2luX2hpbnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmxvZ2luSGludCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmlkcEhpbnQpIHtcbiAgICAgICAgICAgIHVybCArPSAnJmtjX2lkcF9oaW50PScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5pZHBIaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWN0aW9uICYmIG9wdGlvbnMuYWN0aW9uICE9ICdyZWdpc3RlcicpIHtcbiAgICAgICAgICAgIHVybCArPSAnJmtjX2FjdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubG9jYWxlKSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZ1aV9sb2NhbGVzPScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5sb2NhbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hY3IpIHtcbiAgICAgICAgICAgIHZhciBjbGFpbXNQYXJhbWV0ZXIgPSBidWlsZENsYWltc1BhcmFtZXRlcihvcHRpb25zLmFjcik7XG4gICAgICAgICAgICB1cmwgKz0gJyZjbGFpbXM9JyArIGVuY29kZVVSSUNvbXBvbmVudChjbGFpbXNQYXJhbWV0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtjLnBrY2VNZXRob2QpIHtcbiAgICAgICAgICAgIHZhciBjb2RlVmVyaWZpZXIgPSBnZW5lcmF0ZUNvZGVWZXJpZmllcig5Nik7XG4gICAgICAgICAgICBjYWxsYmFja1N0YXRlLnBrY2VDb2RlVmVyaWZpZXIgPSBjb2RlVmVyaWZpZXI7XG4gICAgICAgICAgICB2YXIgcGtjZUNoYWxsZW5nZSA9IGdlbmVyYXRlUGtjZUNoYWxsZW5nZShrYy5wa2NlTWV0aG9kLCBjb2RlVmVyaWZpZXIpO1xuICAgICAgICAgICAgdXJsICs9ICcmY29kZV9jaGFsbGVuZ2U9JyArIHBrY2VDaGFsbGVuZ2U7XG4gICAgICAgICAgICB1cmwgKz0gJyZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9JyArIGtjLnBrY2VNZXRob2Q7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFja1N0b3JhZ2UuYWRkKGNhbGxiYWNrU3RhdGUpO1xuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfTtcblxuICAgIGtjLmxvZ291dCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXIubG9nb3V0KG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBrYy5jcmVhdGVMb2dvdXRVcmwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciB1cmwgPSBrYy5lbmRwb2ludHMubG9nb3V0KClcbiAgICAgICAgICAgICsgJz9jbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5jbGllbnRJZClcbiAgICAgICAgICAgICsgJyZwb3N0X2xvZ291dF9yZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChhZGFwdGVyLnJlZGlyZWN0VXJpKG9wdGlvbnMsIGZhbHNlKSk7XG5cbiAgICAgICAgaWYgKGtjLmlkVG9rZW4pIHtcbiAgICAgICAgICAgIHVybCArPSAnJmlkX3Rva2VuX2hpbnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5pZFRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfTtcblxuICAgIGtjLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXIucmVnaXN0ZXIob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGtjLmNyZWF0ZVJlZ2lzdGVyVXJsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmFjdGlvbiA9ICdyZWdpc3Rlcic7XG4gICAgICAgIHJldHVybiBrYy5jcmVhdGVMb2dpblVybChvcHRpb25zKTtcbiAgICB9O1xuXG4gICAga2MuY3JlYXRlQWNjb3VudFVybCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlYWxtID0gZ2V0UmVhbG1VcmwoKTtcbiAgICAgICAgdmFyIHVybCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHR5cGVvZiByZWFsbSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHVybCA9IHJlYWxtXG4gICAgICAgICAgICArICcvYWNjb3VudCdcbiAgICAgICAgICAgICsgJz9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLmNsaWVudElkKVxuICAgICAgICAgICAgKyAnJnJlZmVycmVyX3VyaT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFkYXB0ZXIucmVkaXJlY3RVcmkob3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfTtcblxuICAgIGtjLmFjY291bnRNYW5hZ2VtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhZGFwdGVyLmFjY291bnRNYW5hZ2VtZW50KCk7XG4gICAgfTtcblxuICAgIGtjLmhhc1JlYWxtUm9sZSA9IGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgIHZhciBhY2Nlc3MgPSBrYy5yZWFsbUFjY2VzcztcbiAgICAgICAgcmV0dXJuICEhYWNjZXNzICYmIGFjY2Vzcy5yb2xlcy5pbmRleE9mKHJvbGUpID49IDA7XG4gICAgfTtcblxuICAgIGtjLmhhc1Jlc291cmNlUm9sZSA9IGZ1bmN0aW9uKHJvbGUsIHJlc291cmNlKSB7XG4gICAgICAgIGlmICgha2MucmVzb3VyY2VBY2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY2Nlc3MgPSBrYy5yZXNvdXJjZUFjY2Vzc1tyZXNvdXJjZSB8fCBrYy5jbGllbnRJZF07XG4gICAgICAgIHJldHVybiAhIWFjY2VzcyAmJiBhY2Nlc3Mucm9sZXMuaW5kZXhPZihyb2xlKSA+PSAwO1xuICAgIH07XG5cbiAgICBrYy5sb2FkVXNlclByb2ZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVybCA9IGdldFJlYWxtVXJsKCkgKyAnL2FjY291bnQnO1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnYmVhcmVyICcgKyBrYy50b2tlbik7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtjLnByb2ZpbGUgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3Moa2MucHJvZmlsZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXEuc2VuZCgpO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfTtcblxuICAgIGtjLmxvYWRVc2VySW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdXJsID0ga2MuZW5kcG9pbnRzLnVzZXJpbmZvKCk7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdiZWFyZXIgJyArIGtjLnRva2VuKTtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAga2MudXNlckluZm8gPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3Moa2MudXNlckluZm8pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxLnNlbmQoKTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH07XG5cbiAgICBrYy5pc1Rva2VuRXhwaXJlZCA9IGZ1bmN0aW9uKG1pblZhbGlkaXR5KSB7XG4gICAgICAgIGlmICgha2MudG9rZW5QYXJzZWQgfHwgKCFrYy5yZWZyZXNoVG9rZW4gJiYga2MuZmxvdyAhPSAnaW1wbGljaXQnICkpIHtcbiAgICAgICAgICAgIHRocm93ICdOb3QgYXV0aGVudGljYXRlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2MudGltZVNrZXcgPT0gbnVsbCkge1xuICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBVbmFibGUgdG8gZGV0ZXJtaW5lIGlmIHRva2VuIGlzIGV4cGlyZWQgYXMgdGltZXNrZXcgaXMgbm90IHNldCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwaXJlc0luID0ga2MudG9rZW5QYXJzZWRbJ2V4cCddIC0gTWF0aC5jZWlsKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgKyBrYy50aW1lU2tldztcbiAgICAgICAgaWYgKG1pblZhbGlkaXR5KSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4obWluVmFsaWRpdHkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgbWluVmFsaWRpdHknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhwaXJlc0luIC09IG1pblZhbGlkaXR5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHBpcmVzSW4gPCAwO1xuICAgIH07XG5cbiAgICBrYy51cGRhdGVUb2tlbiA9IGZ1bmN0aW9uKG1pblZhbGlkaXR5KSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgIGlmICgha2MucmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWluVmFsaWRpdHkgPSBtaW5WYWxpZGl0eSB8fCA1O1xuXG4gICAgICAgIHZhciBleGVjID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVmcmVzaFRva2VuID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAobWluVmFsaWRpdHkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxvZ0luZm8oJ1tLRVlDTE9BS10gUmVmcmVzaGluZyB0b2tlbjogZm9yY2VkIHJlZnJlc2gnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWtjLnRva2VuUGFyc2VkIHx8IGtjLmlzVG9rZW5FeHBpcmVkKG1pblZhbGlkaXR5KSkge1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBSZWZyZXNoaW5nIHRva2VuOiB0b2tlbiBleHBpcmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9ICdncmFudF90eXBlPXJlZnJlc2hfdG9rZW4mJyArICdyZWZyZXNoX3Rva2VuPScgKyBrYy5yZWZyZXNoVG9rZW47XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IGtjLmVuZHBvaW50cy50b2tlbigpO1xuXG4gICAgICAgICAgICAgICAgcmVmcmVzaFF1ZXVlLnB1c2gocHJvbWlzZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVmcmVzaFF1ZXVlLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXEud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgKz0gJyZjbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5jbGllbnRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVMb2NhbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKCdbS0VZQ0xPQUtdIFRva2VuIHJlZnJlc2hlZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMb2NhbCA9ICh0aW1lTG9jYWwgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlblJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbih0b2tlblJlc3BvbnNlWydhY2Nlc3NfdG9rZW4nXSwgdG9rZW5SZXNwb25zZVsncmVmcmVzaF90b2tlbiddLCB0b2tlblJlc3BvbnNlWydpZF90b2tlbiddLCB0aW1lTG9jYWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLm9uQXV0aFJlZnJlc2hTdWNjZXNzICYmIGtjLm9uQXV0aFJlZnJlc2hTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSByZWZyZXNoUXVldWUucG9wKCk7IHAgIT0gbnVsbDsgcCA9IHJlZnJlc2hRdWV1ZS5wb3AoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5zZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nV2FybignW0tFWUNMT0FLXSBGYWlsZWQgdG8gcmVmcmVzaCB0b2tlbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2MuY2xlYXJUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2Mub25BdXRoUmVmcmVzaEVycm9yICYmIGtjLm9uQXV0aFJlZnJlc2hFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gcmVmcmVzaFF1ZXVlLnBvcCgpOyBwICE9IG51bGw7IHAgPSByZWZyZXNoUXVldWUucG9wKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuc2V0RXJyb3IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLnNlbmQocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmVuYWJsZSkge1xuICAgICAgICAgICAgdmFyIGlmcmFtZVByb21pc2UgPSBjaGVja0xvZ2luSWZyYW1lKCk7XG4gICAgICAgICAgICBpZnJhbWVQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICB9O1xuXG4gICAga2MuY2xlYXJUb2tlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoa2MudG9rZW4pIHtcbiAgICAgICAgICAgIHNldFRva2VuKG51bGwsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAga2Mub25BdXRoTG9nb3V0ICYmIGtjLm9uQXV0aExvZ291dCgpO1xuICAgICAgICAgICAgaWYgKGtjLmxvZ2luUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBrYy5sb2dpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFJlYWxtVXJsKCkge1xuICAgICAgICBpZiAodHlwZW9mIGtjLmF1dGhTZXJ2ZXJVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoa2MuYXV0aFNlcnZlclVybC5jaGFyQXQoa2MuYXV0aFNlcnZlclVybC5sZW5ndGggLSAxKSA9PSAnLycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2MuYXV0aFNlcnZlclVybCArICdyZWFsbXMvJyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5yZWFsbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBrYy5hdXRoU2VydmVyVXJsICsgJy9yZWFsbXMvJyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5yZWFsbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3JpZ2luKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQ2FsbGJhY2sob2F1dGgsIHByb21pc2UpIHtcbiAgICAgICAgdmFyIGNvZGUgPSBvYXV0aC5jb2RlO1xuICAgICAgICB2YXIgZXJyb3IgPSBvYXV0aC5lcnJvcjtcbiAgICAgICAgdmFyIHByb21wdCA9IG9hdXRoLnByb21wdDtcblxuICAgICAgICB2YXIgdGltZUxvY2FsID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKG9hdXRoWydrY19hY3Rpb25fc3RhdHVzJ10pIHtcbiAgICAgICAgICAgIGtjLm9uQWN0aW9uVXBkYXRlICYmIGtjLm9uQWN0aW9uVXBkYXRlKG9hdXRoWydrY19hY3Rpb25fc3RhdHVzJ10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAocHJvbXB0ICE9ICdub25lJykge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvckRhdGEgPSB7IGVycm9yOiBlcnJvciwgZXJyb3JfZGVzY3JpcHRpb246IG9hdXRoLmVycm9yX2Rlc2NyaXB0aW9uIH07XG4gICAgICAgICAgICAgICAga2Mub25BdXRoRXJyb3IgJiYga2Mub25BdXRoRXJyb3IoZXJyb3JEYXRhKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlICYmIHByb21pc2Uuc2V0RXJyb3IoZXJyb3JEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJiBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICgoa2MuZmxvdyAhPSAnc3RhbmRhcmQnKSAmJiAob2F1dGguYWNjZXNzX3Rva2VuIHx8IG9hdXRoLmlkX3Rva2VuKSkge1xuICAgICAgICAgICAgYXV0aFN1Y2Nlc3Mob2F1dGguYWNjZXNzX3Rva2VuLCBudWxsLCBvYXV0aC5pZF90b2tlbiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKGtjLmZsb3cgIT0gJ2ltcGxpY2l0JykgJiYgY29kZSkge1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9ICdjb2RlPScgKyBjb2RlICsgJyZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZSc7XG4gICAgICAgICAgICB2YXIgdXJsID0ga2MuZW5kcG9pbnRzLnRva2VuKCk7XG5cbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcS5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgICAgICAgICAgIHBhcmFtcyArPSAnJmNsaWVudF9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLmNsaWVudElkKTtcbiAgICAgICAgICAgIHBhcmFtcyArPSAnJnJlZGlyZWN0X3VyaT0nICsgb2F1dGgucmVkaXJlY3RVcmk7XG5cbiAgICAgICAgICAgIGlmIChvYXV0aC5wa2NlQ29kZVZlcmlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zICs9ICcmY29kZV92ZXJpZmllcj0nICsgb2F1dGgucGtjZUNvZGVWZXJpZmllcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFN1Y2Nlc3ModG9rZW5SZXNwb25zZVsnYWNjZXNzX3Rva2VuJ10sIHRva2VuUmVzcG9uc2VbJ3JlZnJlc2hfdG9rZW4nXSwgdG9rZW5SZXNwb25zZVsnaWRfdG9rZW4nXSwga2MuZmxvdyA9PT0gJ3N0YW5kYXJkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZUNoZWNrSWZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhFcnJvciAmJiBrYy5vbkF1dGhFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSAmJiBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXEuc2VuZChwYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYXV0aFN1Y2Nlc3MoYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgaWRUb2tlbiwgZnVsZmlsbFByb21pc2UpIHtcbiAgICAgICAgICAgIHRpbWVMb2NhbCA9ICh0aW1lTG9jYWwgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAyO1xuXG4gICAgICAgICAgICBzZXRUb2tlbihhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBpZFRva2VuLCB0aW1lTG9jYWwpO1xuXG4gICAgICAgICAgICBpZiAodXNlTm9uY2UgJiYgKChrYy50b2tlblBhcnNlZCAmJiBrYy50b2tlblBhcnNlZC5ub25jZSAhPSBvYXV0aC5zdG9yZWROb25jZSkgfHxcbiAgICAgICAgICAgICAgICAoa2MucmVmcmVzaFRva2VuUGFyc2VkICYmIGtjLnJlZnJlc2hUb2tlblBhcnNlZC5ub25jZSAhPSBvYXV0aC5zdG9yZWROb25jZSkgfHxcbiAgICAgICAgICAgICAgICAoa2MuaWRUb2tlblBhcnNlZCAmJiBrYy5pZFRva2VuUGFyc2VkLm5vbmNlICE9IG9hdXRoLnN0b3JlZE5vbmNlKSkpIHtcblxuICAgICAgICAgICAgICAgIGxvZ0luZm8oJ1tLRVlDTE9BS10gSW52YWxpZCBub25jZSwgY2xlYXJpbmcgdG9rZW4nKTtcbiAgICAgICAgICAgICAgICBrYy5jbGVhclRva2VuKCk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJiBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChmdWxmaWxsUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhTdWNjZXNzICYmIGtjLm9uQXV0aFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSAmJiBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRDb25maWcodXJsKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuICAgICAgICB2YXIgY29uZmlnVXJsO1xuXG4gICAgICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWdVcmwgPSAna2V5Y2xvYWsuanNvbic7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbmZpZ1VybCA9IGNvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwT2lkY0VuZG9pbnRzKG9pZGNDb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoISBvaWRjQ29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGtjLmVuZHBvaW50cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC9hdXRoJztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlYWxtVXJsKCkgKyAnL3Byb3RvY29sL29wZW5pZC1jb25uZWN0L3Rva2VuJztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC9sb2dvdXQnO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGVja1Nlc3Npb25JZnJhbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9IGdldFJlYWxtVXJsKCkgKyAnL3Byb3RvY29sL29wZW5pZC1jb25uZWN0L2xvZ2luLXN0YXR1cy1pZnJhbWUuaHRtbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2MuaWZyYW1lVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA9IHNyYyArICc/dmVyc2lvbj0nICsga2MuaWZyYW1lVmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXJkUGFydHlDb29raWVzSWZyYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmMgPSBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC8zcC1jb29raWVzL3N0ZXAxLmh0bWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtjLmlmcmFtZVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgPSBzcmMgKyAnP3ZlcnNpb249JyArIGtjLmlmcmFtZVZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVhbG1VcmwoKSArICcvcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvcmVnaXN0cmF0aW9ucyc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVzZXJpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC91c2VyaW5mbyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrYy5lbmRwb2ludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2lkY0NvbmZpZ3VyYXRpb24uYXV0aG9yaXphdGlvbl9lbmRwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9pZGNDb25maWd1cmF0aW9uLnRva2VuX2VuZHBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsb2dvdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvaWRjQ29uZmlndXJhdGlvbi5lbmRfc2Vzc2lvbl9lbmRwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IHN1cHBvcnRlZCBieSB0aGUgT0lEQyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvaWRjQ29uZmlndXJhdGlvbi5lbmRfc2Vzc2lvbl9lbmRwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tTZXNzaW9uSWZyYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2lkY0NvbmZpZ3VyYXRpb24uY2hlY2tfc2Vzc2lvbl9pZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBzdXBwb3J0ZWQgYnkgdGhlIE9JREMgc2VydmVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2lkY0NvbmZpZ3VyYXRpb24uY2hlY2tfc2Vzc2lvbl9pZnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93ICdSZWRpcmVjdGlvbiB0byBcIlJlZ2lzdGVyIHVzZXJcIiBwYWdlIG5vdCBzdXBwb3J0ZWQgaW4gc3RhbmRhcmQgT0lEQyBtb2RlJztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcmluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvaWRjQ29uZmlndXJhdGlvbi51c2VyaW5mb19lbmRwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IHN1cHBvcnRlZCBieSB0aGUgT0lEQyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvaWRjQ29uZmlndXJhdGlvbi51c2VyaW5mb19lbmRwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnVXJsKSB7XG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXEub3BlbignR0VUJywgY29uZmlnVXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCB8fCBmaWxlTG9hZGVkKHJlcSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25maWcgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5hdXRoU2VydmVyVXJsID0gY29uZmlnWydhdXRoLXNlcnZlci11cmwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnJlYWxtID0gY29uZmlnWydyZWFsbSddO1xuICAgICAgICAgICAgICAgICAgICAgICAga2MuY2xpZW50SWQgPSBjb25maWdbJ3Jlc291cmNlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR1cE9pZGNFbmRvaW50cyhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVxLnNlbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghY29uZmlnLmNsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ2NsaWVudElkIG1pc3NpbmcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrYy5jbGllbnRJZCA9IGNvbmZpZy5jbGllbnRJZDtcblxuICAgICAgICAgICAgdmFyIG9pZGNQcm92aWRlciA9IGNvbmZpZ1snb2lkY1Byb3ZpZGVyJ107XG4gICAgICAgICAgICBpZiAoIW9pZGNQcm92aWRlcikge1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnWyd1cmwnXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyaXB0c1tpXS5zcmMubWF0Y2goLy4qa2V5Y2xvYWtcXC5qcy8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnVybCA9IHNjcmlwdHNbaV0uc3JjLnN1YnN0cigwLCBzY3JpcHRzW2ldLnNyYy5pbmRleE9mKCcvanMva2V5Y2xvYWsuanMnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWcucmVhbG0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ3JlYWxtIG1pc3NpbmcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGtjLmF1dGhTZXJ2ZXJVcmwgPSBjb25maWcudXJsO1xuICAgICAgICAgICAgICAgIGtjLnJlYWxtID0gY29uZmlnLnJlYWxtO1xuICAgICAgICAgICAgICAgIHNldHVwT2lkY0VuZG9pbnRzKG51bGwpO1xuICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9pZGNQcm92aWRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9pZGNQcm92aWRlckNvbmZpZ1VybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9pZGNQcm92aWRlci5jaGFyQXQob2lkY1Byb3ZpZGVyLmxlbmd0aCAtIDEpID09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2lkY1Byb3ZpZGVyQ29uZmlnVXJsID0gb2lkY1Byb3ZpZGVyICsgJy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9pZGNQcm92aWRlckNvbmZpZ1VybCA9IG9pZGNQcm92aWRlciArICcvLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIG9pZGNQcm92aWRlckNvbmZpZ1VybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCB8fCBmaWxlTG9hZGVkKHJlcSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9pZGNQcm92aWRlckNvbmZpZyA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwT2lkY0VuZG9pbnRzKG9pZGNQcm92aWRlckNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXR1cE9pZGNFbmRvaW50cyhvaWRjUHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbGVMb2FkZWQoeGhyKSB7XG4gICAgICAgIHJldHVybiB4aHIuc3RhdHVzID09IDAgJiYgeGhyLnJlc3BvbnNlVGV4dCAmJiB4aHIucmVzcG9uc2VVUkwuc3RhcnRzV2l0aCgnZmlsZTonKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUb2tlbih0b2tlbiwgcmVmcmVzaFRva2VuLCBpZFRva2VuLCB0aW1lTG9jYWwpIHtcbiAgICAgICAgaWYgKGtjLnRva2VuVGltZW91dEhhbmRsZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGtjLnRva2VuVGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICBrYy50b2tlblRpbWVvdXRIYW5kbGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAga2MucmVmcmVzaFRva2VuID0gcmVmcmVzaFRva2VuO1xuICAgICAgICAgICAga2MucmVmcmVzaFRva2VuUGFyc2VkID0gZGVjb2RlVG9rZW4ocmVmcmVzaFRva2VuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy5yZWZyZXNoVG9rZW47XG4gICAgICAgICAgICBkZWxldGUga2MucmVmcmVzaFRva2VuUGFyc2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlkVG9rZW4pIHtcbiAgICAgICAgICAgIGtjLmlkVG9rZW4gPSBpZFRva2VuO1xuICAgICAgICAgICAga2MuaWRUb2tlblBhcnNlZCA9IGRlY29kZVRva2VuKGlkVG9rZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIGtjLmlkVG9rZW47XG4gICAgICAgICAgICBkZWxldGUga2MuaWRUb2tlblBhcnNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAga2MudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIGtjLnRva2VuUGFyc2VkID0gZGVjb2RlVG9rZW4odG9rZW4pO1xuICAgICAgICAgICAga2Muc2Vzc2lvbklkID0ga2MudG9rZW5QYXJzZWQuc2Vzc2lvbl9zdGF0ZTtcbiAgICAgICAgICAgIGtjLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgICAga2Muc3ViamVjdCA9IGtjLnRva2VuUGFyc2VkLnN1YjtcbiAgICAgICAgICAgIGtjLnJlYWxtQWNjZXNzID0ga2MudG9rZW5QYXJzZWQucmVhbG1fYWNjZXNzO1xuICAgICAgICAgICAga2MucmVzb3VyY2VBY2Nlc3MgPSBrYy50b2tlblBhcnNlZC5yZXNvdXJjZV9hY2Nlc3M7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTG9jYWwpIHtcbiAgICAgICAgICAgICAgICBrYy50aW1lU2tldyA9IE1hdGguZmxvb3IodGltZUxvY2FsIC8gMTAwMCkgLSBrYy50b2tlblBhcnNlZC5pYXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrYy50aW1lU2tldyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBFc3RpbWF0ZWQgdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gYnJvd3NlciBhbmQgc2VydmVyIGlzICcgKyBrYy50aW1lU2tldyArICcgc2Vjb25kcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtjLm9uVG9rZW5FeHBpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHBpcmVzSW4gPSAoa2MudG9rZW5QYXJzZWRbJ2V4cCddIC0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgKyBrYy50aW1lU2tldykgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKCdbS0VZQ0xPQUtdIFRva2VuIGV4cGlyZXMgaW4gJyArIE1hdGgucm91bmQoZXhwaXJlc0luIC8gMTAwMCkgKyAnIHMnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZXNJbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5vblRva2VuRXhwaXJlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2MudG9rZW5UaW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChrYy5vblRva2VuRXhwaXJlZCwgZXhwaXJlc0luKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy50b2tlbjtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy50b2tlblBhcnNlZDtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy5zdWJqZWN0O1xuICAgICAgICAgICAgZGVsZXRlIGtjLnJlYWxtQWNjZXNzO1xuICAgICAgICAgICAgZGVsZXRlIGtjLnJlc291cmNlQWNjZXNzO1xuXG4gICAgICAgICAgICBrYy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNvZGVUb2tlbihzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyLnNwbGl0KCcuJylbMV07XG5cbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICAgICAgc3dpdGNoIChzdHIubGVuZ3RoICUgNCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHN0ciArPSAnPT0nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHN0ciArPSAnPSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIHRva2VuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoYXRvYihzdHIpKSk7XG5cbiAgICAgICAgc3RyID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVVSUQoKSB7XG4gICAgICAgIHZhciBoZXhEaWdpdHMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG4gICAgICAgIHZhciBzID0gZ2VuZXJhdGVSYW5kb21TdHJpbmcoMzYsIGhleERpZ2l0cykuc3BsaXQoXCJcIik7XG4gICAgICAgIHNbMTRdID0gJzQnO1xuICAgICAgICBzWzE5XSA9IGhleERpZ2l0cy5zdWJzdHIoKHNbMTldICYgMHgzKSB8IDB4OCwgMSk7XG4gICAgICAgIHNbOF0gPSBzWzEzXSA9IHNbMThdID0gc1syM10gPSAnLSc7XG4gICAgICAgIHZhciB1dWlkID0gcy5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VDYWxsYmFjayh1cmwpIHtcbiAgICAgICAgdmFyIG9hdXRoID0gcGFyc2VDYWxsYmFja1VybCh1cmwpO1xuICAgICAgICBpZiAoIW9hdXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2F1dGhTdGF0ZSA9IGNhbGxiYWNrU3RvcmFnZS5nZXQob2F1dGguc3RhdGUpO1xuXG4gICAgICAgIGlmIChvYXV0aFN0YXRlKSB7XG4gICAgICAgICAgICBvYXV0aC52YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBvYXV0aC5yZWRpcmVjdFVyaSA9IG9hdXRoU3RhdGUucmVkaXJlY3RVcmk7XG4gICAgICAgICAgICBvYXV0aC5zdG9yZWROb25jZSA9IG9hdXRoU3RhdGUubm9uY2U7XG4gICAgICAgICAgICBvYXV0aC5wcm9tcHQgPSBvYXV0aFN0YXRlLnByb21wdDtcbiAgICAgICAgICAgIG9hdXRoLnBrY2VDb2RlVmVyaWZpZXIgPSBvYXV0aFN0YXRlLnBrY2VDb2RlVmVyaWZpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2F1dGg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VDYWxsYmFja1VybCh1cmwpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRlZFBhcmFtcztcbiAgICAgICAgc3dpdGNoIChrYy5mbG93KSB7XG4gICAgICAgICAgICBjYXNlICdzdGFuZGFyZCc6XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkUGFyYW1zID0gWydjb2RlJywgJ3N0YXRlJywgJ3Nlc3Npb25fc3RhdGUnLCAna2NfYWN0aW9uX3N0YXR1cyddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW1wbGljaXQnOlxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZFBhcmFtcyA9IFsnYWNjZXNzX3Rva2VuJywgJ3Rva2VuX3R5cGUnLCAnaWRfdG9rZW4nLCAnc3RhdGUnLCAnc2Vzc2lvbl9zdGF0ZScsICdleHBpcmVzX2luJywgJ2tjX2FjdGlvbl9zdGF0dXMnXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2h5YnJpZCc6XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkUGFyYW1zID0gWydhY2Nlc3NfdG9rZW4nLCAndG9rZW5fdHlwZScsICdpZF90b2tlbicsICdjb2RlJywgJ3N0YXRlJywgJ3Nlc3Npb25fc3RhdGUnLCAnZXhwaXJlc19pbicsICdrY19hY3Rpb25fc3RhdHVzJ107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBwb3J0ZWRQYXJhbXMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgc3VwcG9ydGVkUGFyYW1zLnB1c2goJ2Vycm9yX2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHN1cHBvcnRlZFBhcmFtcy5wdXNoKCdlcnJvcl91cmknKTtcblxuICAgICAgICB2YXIgcXVlcnlJbmRleCA9IHVybC5pbmRleE9mKCc/Jyk7XG4gICAgICAgIHZhciBmcmFnbWVudEluZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcblxuICAgICAgICB2YXIgbmV3VXJsO1xuICAgICAgICB2YXIgcGFyc2VkO1xuXG4gICAgICAgIGlmIChrYy5yZXNwb25zZU1vZGUgPT09ICdxdWVyeScgJiYgcXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG5ld1VybCA9IHVybC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCk7XG4gICAgICAgICAgICBwYXJzZWQgPSBwYXJzZUNhbGxiYWNrUGFyYW1zKHVybC5zdWJzdHJpbmcocXVlcnlJbmRleCArIDEsIGZyYWdtZW50SW5kZXggIT09IC0xID8gZnJhZ21lbnRJbmRleCA6IHVybC5sZW5ndGgpLCBzdXBwb3J0ZWRQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXJhbXNTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbmV3VXJsICs9ICc/JyArIHBhcnNlZC5wYXJhbXNTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnJhZ21lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBuZXdVcmwgKz0gdXJsLnN1YnN0cmluZyhmcmFnbWVudEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrYy5yZXNwb25zZU1vZGUgPT09ICdmcmFnbWVudCcgJiYgZnJhZ21lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG5ld1VybCA9IHVybC5zdWJzdHJpbmcoMCwgZnJhZ21lbnRJbmRleCk7XG4gICAgICAgICAgICBwYXJzZWQgPSBwYXJzZUNhbGxiYWNrUGFyYW1zKHVybC5zdWJzdHJpbmcoZnJhZ21lbnRJbmRleCArIDEpLCBzdXBwb3J0ZWRQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXJhbXNTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbmV3VXJsICs9ICcjJyArIHBhcnNlZC5wYXJhbXNTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkICYmIHBhcnNlZC5vYXV0aFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKGtjLmZsb3cgPT09ICdzdGFuZGFyZCcgfHwga2MuZmxvdyA9PT0gJ2h5YnJpZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHBhcnNlZC5vYXV0aFBhcmFtcy5jb2RlIHx8IHBhcnNlZC5vYXV0aFBhcmFtcy5lcnJvcikgJiYgcGFyc2VkLm9hdXRoUGFyYW1zLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5vYXV0aFBhcmFtcy5uZXdVcmwgPSBuZXdVcmw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQub2F1dGhQYXJhbXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrYy5mbG93ID09PSAnaW1wbGljaXQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKChwYXJzZWQub2F1dGhQYXJhbXMuYWNjZXNzX3Rva2VuIHx8IHBhcnNlZC5vYXV0aFBhcmFtcy5lcnJvcikgJiYgcGFyc2VkLm9hdXRoUGFyYW1zLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5vYXV0aFBhcmFtcy5uZXdVcmwgPSBuZXdVcmw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQub2F1dGhQYXJhbXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VDYWxsYmFja1BhcmFtcyhwYXJhbXNTdHJpbmcsIHN1cHBvcnRlZFBhcmFtcykge1xuICAgICAgICB2YXIgcCA9IHBhcmFtc1N0cmluZy5zcGxpdCgnJicpO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgcGFyYW1zU3RyaW5nOiAnJyxcbiAgICAgICAgICAgIG9hdXRoUGFyYW1zOiB7fVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzcGxpdCA9IHBbaV0uaW5kZXhPZihcIj1cIik7XG4gICAgICAgICAgICB2YXIga2V5ID0gcFtpXS5zbGljZSgwLCBzcGxpdCk7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkUGFyYW1zLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQub2F1dGhQYXJhbXNba2V5XSA9IHBbaV0uc2xpY2Uoc3BsaXQgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5wYXJhbXNTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wYXJhbXNTdHJpbmcgKz0gJyYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucGFyYW1zU3RyaW5nICs9IHBbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9taXNlKCkge1xuICAgICAgICAvLyBOZWVkIHRvIGNyZWF0ZSBhIG5hdGl2ZSBQcm9taXNlIHdoaWNoIGFsc28gcHJlc2VydmVzIHRoZVxuICAgICAgICAvLyBpbnRlcmZhY2Ugb2YgdGhlIGN1c3RvbSBwcm9taXNlIHR5cGUgcHJldmlvdXNseSB1c2VkIGJ5IHRoZSBBUElcbiAgICAgICAgdmFyIHAgPSB7XG4gICAgICAgICAgICBzZXRTdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBwLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldEVycm9yOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBwLnJlamVjdChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHAucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBwLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcC5wcm9taXNlLnN1Y2Nlc3MgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgbG9nUHJvbWlzZURlcHJlY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMudGhlbihmdW5jdGlvbiBoYW5kbGVTdWNjZXNzKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHAucHJvbWlzZS5lcnJvciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBsb2dQcm9taXNlRGVwcmVjYXRpb24oKTtcblxuICAgICAgICAgICAgdGhpcy5jYXRjaChmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBleHRlbmQgZXhpc3RpbmcgbmF0aXZlIFByb21pc2Ugd2l0aCB0aW1lb3V0XG4gICAgZnVuY3Rpb24gYXBwbHlUaW1lb3V0VG9Qcm9taXNlKHByb21pc2UsIHRpbWVvdXQsIGVycm9yTWVzc2FnZSkge1xuICAgICAgICB2YXIgdGltZW91dEhhbmRsZSA9IG51bGw7XG4gICAgICAgIHZhciB0aW1lb3V0UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoeyBcImVycm9yXCI6IGVycm9yTWVzc2FnZSB8fCBcIlByb21pc2UgaXMgbm90IHNldHRsZWQgd2l0aGluIHRpbWVvdXQgb2YgXCIgKyB0aW1lb3V0ICsgXCJtc1wiIH0pO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJhY2UoW3Byb21pc2UsIHRpbWVvdXRQcm9taXNlXSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwQ2hlY2tMb2dpbklmcmFtZSgpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgaWYgKCFsb2dpbklmcmFtZS5lbmFibGUpIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2dpbklmcmFtZS5pZnJhbWUpIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgbG9naW5JZnJhbWUuaWZyYW1lID0gaWZyYW1lO1xuXG4gICAgICAgIGlmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhdXRoVXJsID0ga2MuZW5kcG9pbnRzLmF1dGhvcml6ZSgpO1xuICAgICAgICAgICAgaWYgKGF1dGhVcmwuY2hhckF0KDApID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICBsb2dpbklmcmFtZS5pZnJhbWVPcmlnaW4gPSBnZXRPcmlnaW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9naW5JZnJhbWUuaWZyYW1lT3JpZ2luID0gYXV0aFVybC5zdWJzdHJpbmcoMCwgYXV0aFVybC5pbmRleE9mKCcvJywgOCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNyYyA9IGtjLmVuZHBvaW50cy5jaGVja1Nlc3Npb25JZnJhbWUoKTtcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjICk7XG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ2tleWNsb2FrLXNlc3Npb24taWZyYW1lJyApO1xuICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgICAgIHZhciBtZXNzYWdlQ2FsbGJhY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKChldmVudC5vcmlnaW4gIT09IGxvZ2luSWZyYW1lLmlmcmFtZU9yaWdpbikgfHwgKGxvZ2luSWZyYW1lLmlmcmFtZS5jb250ZW50V2luZG93ICE9PSBldmVudC5zb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShldmVudC5kYXRhID09ICd1bmNoYW5nZWQnIHx8IGV2ZW50LmRhdGEgPT0gJ2NoYW5nZWQnIHx8IGV2ZW50LmRhdGEgPT0gJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgIT0gJ3VuY2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgICBrYy5jbGVhclRva2VuKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBsb2dpbklmcmFtZS5jYWxsYmFja0xpc3Quc3BsaWNlKDAsIGxvZ2luSWZyYW1lLmNhbGxiYWNrTGlzdC5sZW5ndGgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gY2FsbGJhY2tzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjYWxsYmFja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKGV2ZW50LmRhdGEgPT0gJ3VuY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lc3NhZ2VDYWxsYmFjaywgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NoZWR1bGVDaGVja0lmcmFtZSgpIHtcbiAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmVuYWJsZSkge1xuICAgICAgICAgICAgaWYgKGtjLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMb2dpbklmcmFtZSgpLnRoZW4oZnVuY3Rpb24odW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVDaGVja0lmcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBsb2dpbklmcmFtZS5pbnRlcnZhbCAqIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tMb2dpbklmcmFtZSgpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmlmcmFtZSAmJiBsb2dpbklmcmFtZS5pZnJhbWVPcmlnaW4gKSB7XG4gICAgICAgICAgICB2YXIgbXNnID0ga2MuY2xpZW50SWQgKyAnICcgKyAoa2Muc2Vzc2lvbklkID8ga2Muc2Vzc2lvbklkIDogJycpO1xuICAgICAgICAgICAgbG9naW5JZnJhbWUuY2FsbGJhY2tMaXN0LnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gbG9naW5JZnJhbWUuaWZyYW1lT3JpZ2luO1xuICAgICAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmNhbGxiYWNrTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIGxvZ2luSWZyYW1lLmlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG1zZywgb3JpZ2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVjazNwQ29va2llc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmVuYWJsZSB8fCBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBrYy5lbmRwb2ludHMudGhpcmRQYXJ0eUNvb2tpZXNJZnJhbWUoKSk7XG4gICAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCd0aXRsZScsICdrZXljbG9hay0zcC1jaGVjay1pZnJhbWUnICk7XG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblxuICAgICAgICAgICAgdmFyIG1lc3NhZ2VDYWxsYmFjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGlmcmFtZS5jb250ZW50V2luZG93ICE9PSBldmVudC5zb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhICE9PSBcInN1cHBvcnRlZFwiICYmIGV2ZW50LmRhdGEgIT09IFwidW5zdXBwb3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5kYXRhID09PSBcInVuc3VwcG9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9naW5JZnJhbWUuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrYy5zaWxlbnRDaGVja1Nzb0ZhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9nV2FybihcIltLRVlDTE9BS10gM3JkIHBhcnR5IGNvb2tpZXMgYXJlbid0IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuIGNoZWNrTG9naW5JZnJhbWUgYW5kIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2lsZW50IGNoZWNrLXNzbyBhcmUgbm90IGF2YWlsYWJsZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBtZXNzYWdlQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwcGx5VGltZW91dFRvUHJvbWlzZShwcm9taXNlLnByb21pc2UsIGtjLm1lc3NhZ2VSZWNlaXZlVGltZW91dCwgXCJUaW1lb3V0IHdoZW4gd2FpdGluZyBmb3IgM3JkIHBhcnR5IGNoZWNrIGlmcmFtZSBtZXNzYWdlLlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQWRhcHRlcih0eXBlKSB7XG4gICAgICAgIGlmICghdHlwZSB8fCB0eXBlID09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2dpbjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShrYy5jcmVhdGVMb2dpblVybChvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9taXNlKCkucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGtjLmNyZWF0ZUxvZ291dFVybChvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9taXNlKCkucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoa2MuY3JlYXRlUmVnaXN0ZXJVcmwob3B0aW9ucykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUHJvbWlzZSgpLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGFjY291bnRNYW5hZ2VtZW50IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2NvdW50VXJsID0ga2MuY3JlYXRlQWNjb3VudFVybCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjY291bnRVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjY291bnRVcmw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBzdXBwb3J0ZWQgYnkgdGhlIE9JREMgc2VydmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb21pc2UoKS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZWRpcmVjdFVyaTogZnVuY3Rpb24ob3B0aW9ucywgZW5jb2RlSGFzaCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnJlZGlyZWN0VXJpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtjLnJlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2MucmVkaXJlY3RVcmk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PSAnY29yZG92YScpIHtcbiAgICAgICAgICAgIGxvZ2luSWZyYW1lLmVuYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGNvcmRvdmFPcGVuV2luZG93V3JhcHBlciA9IGZ1bmN0aW9uKGxvZ2luVXJsLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEuSW5BcHBCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBpbmFwcGJyb3dzZXIgZm9yIElPUyBhbmQgQW5kcm9pZCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb3Jkb3ZhLkluQXBwQnJvd3Nlci5vcGVuKGxvZ2luVXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cub3Blbihsb2dpblVybCwgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgc2hhbGxvd0Nsb25lQ29yZG92YU9wdGlvbnMgPSBmdW5jdGlvbiAodXNlck9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMuY29yZG92YU9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHVzZXJPcHRpb25zLmNvcmRvdmFPcHRpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uTmFtZV0gPSB1c2VyT3B0aW9ucy5jb3Jkb3ZhT3B0aW9uc1tvcHRpb25OYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBmb3JtYXRDb3Jkb3ZhT3B0aW9ucyA9IGZ1bmN0aW9uIChjb3Jkb3ZhT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjb3Jkb3ZhT3B0aW9ucykucmVkdWNlKGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChvcHRpb25OYW1lK1wiPVwiK2NvcmRvdmFPcHRpb25zW29wdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oXCIsXCIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNyZWF0ZUNvcmRvdmFPcHRpb25zID0gZnVuY3Rpb24gKHVzZXJPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcmRvdmFPcHRpb25zID0gc2hhbGxvd0Nsb25lQ29yZG92YU9wdGlvbnModXNlck9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNvcmRvdmFPcHRpb25zLmxvY2F0aW9uID0gJ25vJztcbiAgICAgICAgICAgICAgICBpZiAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMucHJvbXB0ID09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBjb3Jkb3ZhT3B0aW9ucy5oaWRkZW4gPSAneWVzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdENvcmRvdmFPcHRpb25zKGNvcmRvdmFPcHRpb25zKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9naW46IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvcmRvdmFPcHRpb25zID0gY3JlYXRlQ29yZG92YU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpblVybCA9IGtjLmNyZWF0ZUxvZ2luVXJsKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gY29yZG92YU9wZW5XaW5kb3dXcmFwcGVyKGxvZ2luVXJsLCAnX2JsYW5rJywgY29yZG92YU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VCcm93c2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YoJ2h0dHA6Ly9sb2NhbGhvc3QnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcGFyc2VDYWxsYmFjayhldmVudC51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VCcm93c2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlcnJvcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignaHR0cDovL2xvY2FsaG9zdCcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcGFyc2VDYWxsYmFjayhldmVudC51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ2FsbGJhY2soY2FsbGJhY2ssIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJyb3dzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnJvd3NlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2V4aXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uOiBcImNsb3NlZF9ieV91c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dvdXRVcmwgPSBrYy5jcmVhdGVMb2dvdXRVcmwob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWYgPSBjb3Jkb3ZhT3BlbldpbmRvd1dyYXBwZXIobG9nb3V0VXJsLCAnX2JsYW5rJywgJ2xvY2F0aW9uPW5vLGhpZGRlbj15ZXMsY2xlYXJjYWNoZT15ZXMnKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3I7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YoJ2h0dHA6Ly9sb2NhbGhvc3QnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2FkZXJyb3InLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKCdodHRwOi8vbG9jYWxob3N0JykgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdleGl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2MuY2xlYXJUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZWdpc3RlciA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWdpc3RlclVybCA9IGtjLmNyZWF0ZVJlZ2lzdGVyVXJsKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3Jkb3ZhT3B0aW9ucyA9IGNyZWF0ZUNvcmRvdmFPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gY29yZG92YU9wZW5XaW5kb3dXcmFwcGVyKHJlZ2lzdGVyVXJsLCAnX2JsYW5rJywgY29yZG92YU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignaHR0cDovL2xvY2FsaG9zdCcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2F1dGggPSBwYXJzZUNhbGxiYWNrKGV2ZW50LnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKG9hdXRoLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGFjY291bnRNYW5hZ2VtZW50IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2NvdW50VXJsID0ga2MuY3JlYXRlQWNjb3VudFVybCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjY291bnRVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gY29yZG92YU9wZW5XaW5kb3dXcmFwcGVyKGFjY291bnRVcmwsICdfYmxhbmsnLCAnbG9jYXRpb249bm8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignaHR0cDovL2xvY2FsaG9zdCcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBzdXBwb3J0ZWQgYnkgdGhlIE9JREMgc2VydmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PSAnY29yZG92YS1uYXRpdmUnKSB7XG4gICAgICAgICAgICBsb2dpbklmcmFtZS5lbmFibGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2dpbjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ2luVXJsID0ga2MuY3JlYXRlTG9naW5Vcmwob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsTGlua3Muc3Vic2NyaWJlKCdrZXljbG9haycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxMaW5rcy51bnN1YnNjcmliZSgna2V5Y2xvYWsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9hdXRoID0gcGFyc2VDYWxsYmFjayhldmVudC51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKG9hdXRoLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLm9wZW5VcmwobG9naW5VcmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBsb2dvdXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dvdXRVcmwgPSBrYy5jcmVhdGVMb2dvdXRVcmwob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsTGlua3Muc3Vic2NyaWJlKCdrZXljbG9haycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxMaW5rcy51bnN1YnNjcmliZSgna2V5Y2xvYWsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2MuY2xlYXJUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5vcGVuVXJsKGxvZ291dFVybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyIDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2lzdGVyVXJsID0ga2MuY3JlYXRlUmVnaXN0ZXJVcmwob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbExpbmtzLnN1YnNjcmliZSgna2V5Y2xvYWsnICwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbExpbmtzLnVuc3Vic2NyaWJlKCdrZXljbG9haycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2F1dGggPSBwYXJzZUNhbGxiYWNrKGV2ZW50LnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ2FsbGJhY2sob2F1dGgsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLm9wZW5VcmwocmVnaXN0ZXJVcmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGFjY291bnRNYW5hZ2VtZW50IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2NvdW50VXJsID0ga2MuY3JlYXRlQWNjb3VudFVybCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjY291bnRVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIub3BlblVybChhY2NvdW50VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IHN1cHBvcnRlZCBieSB0aGUgT0lEQyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZWRpcmVjdFVyaTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5yZWRpcmVjdFVyaTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrYy5yZWRpcmVjdFVyaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtjLnJlZGlyZWN0VXJpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaHR0cDovL2xvY2FsaG9zdFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgJ2ludmFsaWQgYWRhcHRlciB0eXBlOiAnICsgdHlwZTtcbiAgICB9XG5cbiAgICB2YXIgTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMb2NhbFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tjLXRlc3QnLCAndGVzdCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgna2MtdGVzdCcpO1xuXG4gICAgICAgIHZhciBjcyA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJFeHBpcmVkKCkge1xuICAgICAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSAge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkgJiYga2V5LmluZGV4T2YoJ2tjLWNhbGxiYWNrLScpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHBpcmVzID0gSlNPTi5wYXJzZSh2YWx1ZSkuZXhwaXJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cGlyZXMgfHwgZXhwaXJlcyA8IHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3MuZ2V0ID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSAna2MtY2FsbGJhY2stJyArIHN0YXRlO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYXJFeHBpcmVkKCk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgY3MuYWRkID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgIGNsZWFyRXhwaXJlZCgpO1xuXG4gICAgICAgICAgICB2YXIga2V5ID0gJ2tjLWNhbGxiYWNrLScgKyBzdGF0ZS5zdGF0ZTtcbiAgICAgICAgICAgIHN0YXRlLmV4cGlyZXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICg2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBDb29raWVTdG9yYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb29raWVTdG9yYWdlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb29raWVTdG9yYWdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3MgPSB0aGlzO1xuXG4gICAgICAgIGNzLmdldCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBnZXRDb29raWUoJ2tjLWNhbGxiYWNrLScgKyBzdGF0ZSk7XG4gICAgICAgICAgICBzZXRDb29raWUoJ2tjLWNhbGxiYWNrLScgKyBzdGF0ZSwgJycsIGNvb2tpZUV4cGlyYXRpb24oLTEwMCkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNzLmFkZCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgICBzZXRDb29raWUoJ2tjLWNhbGxiYWNrLScgKyBzdGF0ZS5zdGF0ZSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpLCBjb29raWVFeHBpcmF0aW9uKDYwKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY3MucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgc2V0Q29va2llKGtleSwgJycsIGNvb2tpZUV4cGlyYXRpb24oLTEwMCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjb29raWVFeHBpcmF0aW9uID0gZnVuY3Rpb24gKG1pbnV0ZXMpIHtcbiAgICAgICAgICAgIHZhciBleHAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZXhwLnNldFRpbWUoZXhwLmdldFRpbWUoKSArIChtaW51dGVzKjYwKjEwMDApKTtcbiAgICAgICAgICAgIHJldHVybiBleHA7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdldENvb2tpZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0ga2V5ICsgJz0nO1xuICAgICAgICAgICAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc2V0Q29va2llID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGV4cGlyYXRpb25EYXRlKSB7XG4gICAgICAgICAgICB2YXIgY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyAnOyAnXG4gICAgICAgICAgICAgICAgKyAnZXhwaXJlcz0nICsgZXhwaXJhdGlvbkRhdGUudG9VVENTdHJpbmcoKSArICc7ICc7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWU7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrU3RvcmFnZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDb29raWVTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrYy5lbmFibGVMb2dnaW5nKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgeyBLZXljbG9hayBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==