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

/***/ "./src/ActivateScene.ts":
/*!******************************!*\
  !*** ./src/ActivateScene.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateScene": () => (/* binding */ ActivateScene),
/* harmony export */   "activateScene": () => (/* binding */ activateScene)
/* harmony export */ });
/* harmony import */ var _Journal_openJournalEntry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Journal/openJournalEntry */ "./src/Journal/openJournalEntry.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


class ActivateScene {
    init() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('ActivateScene initiating');
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.registerGameExtensions)('flow', {
            activateScene,
        });
        CONFIG.TextEditor.enrichers.push({
            pattern: /@ActivateScene\[([^\]]+)\](?:{([^}]+)})?/gm,
            enricher: (match, options) => {
                let [target, name] = match.slice(1, 3);
                var scene = game.scenes.get(target);
                let broken = scene ? false : true;
                const data = {
                    name: name,
                    icon: 'fas fa-code',
                    classes: ['content-link'],
                    dataset: {
                        uuid: `ActivateScene.${target}`,
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
                const a = document.createElement('a');
                a.classList.add(...data.classes);
                a.draggable = true;
                for (let [k, v] of Object.entries(data.dataset)) {
                    a.dataset[k] = v;
                }
                a.innerHTML = `<i class="${data.icon}"></i><i class="fas fa-map"></i> ${data.name}`;
                return a;
            },
        });
        document.addEventListener('click', async (e) => {
            var target = e.target;
            if (target && target.dataset && target.dataset.type === 'ActivateScene' && target.dataset.broken === 'false') {
                e.preventDefault();
                await activateScene(target.dataset.id);
            }
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('ActivateScene initiated');
    }
    ready() { }
}
async function activateScene(targetSceneId) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)(`ActivateScene activating: ${targetSceneId}`);
    const currentSceneJournal = game.scenes.active.journal;
    if (currentSceneJournal && currentSceneJournal.sheet) {
        currentSceneJournal.sheet.close();
    }
    const targetScene = game.scenes.get(targetSceneId);
    if (targetScene) {
        await targetScene.activate();
        (0,_Journal_openJournalEntry__WEBPACK_IMPORTED_MODULE_0__.openJournalEntry)(targetScene.journal);
    }
}


/***/ }),

/***/ "./src/Journal/index.ts":
/*!******************************!*\
  !*** ./src/Journal/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JournalModule": () => (/* binding */ JournalModule),
/* harmony export */   "openJournalEntry": () => (/* reexport safe */ _openJournalEntry__WEBPACK_IMPORTED_MODULE_2__.openJournalEntry),
/* harmony export */   "showTemporaryJournalEntry": () => (/* reexport safe */ _showTemporaryJournalEntry__WEBPACK_IMPORTED_MODULE_1__.showTemporaryJournalEntry)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _showTemporaryJournalEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showTemporaryJournalEntry */ "./src/Journal/showTemporaryJournalEntry.ts");
/* harmony import */ var _openJournalEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openJournalEntry */ "./src/Journal/openJournalEntry.ts");




class JournalModule {
    init() { }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.registerGameExtensions)('flow', {
            showTemporaryJournalEntry: _showTemporaryJournalEntry__WEBPACK_IMPORTED_MODULE_1__.showTemporaryJournalEntry,
            openJournalEntry: _openJournalEntry__WEBPACK_IMPORTED_MODULE_2__.openJournalEntry,
        });
    }
}


/***/ }),

/***/ "./src/Journal/openJournalEntry.ts":
/*!*****************************************!*\
  !*** ./src/Journal/openJournalEntry.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openJournalEntry": () => (/* binding */ openJournalEntry)
/* harmony export */ });
/* harmony import */ var _OgSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OgSettings */ "./src/OgSettings.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");


function openJournalEntry(journal) {
    if (journal && journal.sheet) {
        if (!journal.testUserPermission(game.user, 'LIMITED')) {
            const message = `You do not have permission to view this ${journal.documentName} journal entry.`;
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logWarn)(message);
            if (_OgSettings__WEBPACK_IMPORTED_MODULE_0__.globalSettings.accessDeniedSilentlyFails.value) {
                return;
            }
            return ui.notifications.warn(message);
        }
        journal.sheet.render(true);
    }
}


/***/ }),

/***/ "./src/Journal/showTemporaryJournalEntry.ts":
/*!**************************************************!*\
  !*** ./src/Journal/showTemporaryJournalEntry.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showTemporaryJournalEntry": () => (/* binding */ showTemporaryJournalEntry)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

async function showTemporaryJournalEntry(options) {
    const entry = await JournalEntry.create({
        name: options.name,
        pages: [
            {
                name: options.name,
                type: 'text',
                text: {
                    content: options.content,
                },
                // @ts-ignore
                ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER },
            },
        ],
        // @ts-ignore
        ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER },
    }, { temporary: true, renderSheet: true });
    if (!entry) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logError)('No entry was created.');
        return;
    }
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logText)(`Journal entry '${options.name}' created.`, entry);
    await entry.sheet?.render(true);
}
// async showAndDeleteNewJournalEntry(options: ICreateShowAndDeleteNewJournalEntry): Promise<void> {
//     const entry = await JournalEntry.create({
//         name: options.name,
//         content: options.content,
//     });
//     if (entry === undefined) {
//         console.error('No entry was created.');
//         return;
//     }
//     logText(`Journal entry '${options.name}' created with isPermanent = ${options.isPermanent}.`);
//     await entry.show('text', true);
//
//     if (options.isPermanent) {
//         return;
//     }
//     const deleteEntryInMS = options.deleteDelay || 60000;
//     logText(`Scheduling journal entry deletion in ${deleteEntryInMS} ms.`);
//     setTimeout(async () => {
//         console.debug('Deleting journal entry', entry);
//         await entry.delete();
//         logText('Journal entry deleted');
//     }, deleteEntryInMS);
//
//     // V10 multi-page syntax
//     // JournalEntry.create({name: "Journal name", pages:[{type: "text", name: "Quest hook", text:{content: `HTML content here`}}]})
// }
//
// interface ICreateShowAndDeleteNewJournalEntry {
//     name: string;
//     content: string;
//     deleteDelay?: number;
//     isPermanent: boolean;
// }


/***/ }),

/***/ "./src/OgSettings.ts":
/*!***************************!*\
  !*** ./src/OgSettings.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalSettings": () => (/* binding */ GlobalSettings),
/* harmony export */   "OgSetting": () => (/* binding */ OgSetting),
/* harmony export */   "globalSettings": () => (/* binding */ globalSettings),
/* harmony export */   "namespace": () => (/* binding */ namespace)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

const namespace = 'og-experiments';
class OgSetting {
    constructor(key, defaultValue, settings, init = () => { }) {
        this.key = key;
        this.defaultValue = defaultValue;
        this.settings = settings;
        this.beforeUpdate = () => { };
        this.afterUpdate = () => { };
        this._value = defaultValue;
        init(this);
    }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('OgSetting getting ready', this.key, this.defaultValue);
        game.settings.register(namespace, this.key, {
            ...{
                scope: 'client',
                config: true,
                default: this.defaultValue,
                onChange: (value) => {
                    this.beforeUpdate(this, value);
                    this._value = value;
                    this.afterUpdate(this);
                },
            },
            ...this.settings,
        });
        this.value = game.settings.get(namespace, this.key);
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('OgSetting is ready', {
            key: this.key,
            defaultValue: this.defaultValue,
            value: this.value,
        });
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value != value) {
            this._value = value;
            game.settings.set(namespace, this.key, value);
        }
    }
}
class GlobalSettings {
    constructor() {
        this.accessDeniedSilentlyFails = new OgSetting('accessDeniedSilentlyFails', true, {
            name: 'Fail silently?',
            hint: `If enabled, warnings will be displayed in the UI when the user cannot open scene notes or other elements.
        This is mainly used by the extensions. 
        The warnings will still be displayed in the console. 
        If you have no clue what this is, chances are you should not worry about it.`,
            type: Boolean,
        });
    }
    init() { }
    ready() {
        this.accessDeniedSilentlyFails.ready();
    }
}
const globalSettings = new GlobalSettings();


/***/ }),

/***/ "./src/OpenSceneNotes.ts":
/*!*******************************!*\
  !*** ./src/OpenSceneNotes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenSceneNotes": () => (/* binding */ OpenSceneNotes),
/* harmony export */   "openSceneNotes": () => (/* binding */ openSceneNotes)
/* harmony export */ });
/* harmony import */ var _OgSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
/* harmony import */ var _Journal_openJournalEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Journal/openJournalEntry */ "./src/Journal/openJournalEntry.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



class OpenSceneNotes {
    constructor() {
        this.openSceneNotesOnReady = new _OgSettings__WEBPACK_IMPORTED_MODULE_0__.OgSetting('openSceneNotesOnReady', true, {
            name: 'Auto-open scene notes?',
            hint: 'If enabled, the scene notes of the current scene will open when the server first load.',
            type: Boolean,
        });
    }
    init() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('OpenSceneNotes initiating');
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.registerGameExtensions)('flow', {
            openSceneNotes,
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('OpenSceneNotes initiated');
    }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('OpenSceneNotes is getting ready');
        this.openSceneNotesOnReady.ready();
        if (this.openSceneNotesOnReady.value) {
            openSceneNotes();
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.logText)('OpenSceneNotes is ready');
    }
}
function openSceneNotes() {
    const currentSceneJournal = game.scenes.active.journal;
    (0,_Journal_openJournalEntry__WEBPACK_IMPORTED_MODULE_1__.openJournalEntry)(currentSceneJournal);
}


/***/ }),

/***/ "./src/ServerPush.ts":
/*!***************************!*\
  !*** ./src/ServerPush.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerPush": () => (/* binding */ ServerPush)
/* harmony export */ });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js");
/* harmony import */ var keycloak_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keycloak-js */ "./node_modules/keycloak-js/dist/keycloak.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _OgSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
// const signalR = require('@microsoft/signalr');




class AuthService {
    constructor() {
        this._authenticated = false;
        this._keycloak = new keycloak_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            url: 'http://localhost:8080/',
            realm: 'OgAuth',
            clientId: 'og-server',
        });
    }
    get token() {
        return this._token;
    }
    set token(v) {
        this._token = v;
    }
    get authenticated() {
        return this._authenticated;
    }
    set authenticated(v) {
        this._authenticated = v;
    }
    get user() {
        return this._keycloak;
    }
    async init() {
        var me = this;
        await this._keycloak
            .init({
            onLoad: 'login-required',
            // silentCheckSsoRedirectUri: 'https://localhost:30000/',
            enableLogging: true,
        })
            .then(function (authenticated) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)(authenticated ? 'authenticated' : 'not authenticated');
            me.authenticated = authenticated;
            if (authenticated) {
                me.token = me._keycloak.token;
            }
        })
            .catch(function (e) {
            console.error('failed to initialize', e);
        });
    }
}
class ServerPush {
    constructor() {
        this.auth = new AuthService();
        this.enableServerPush = new _OgSettings__WEBPACK_IMPORTED_MODULE_2__.OgSetting('enableServerPush', true, {
            name: 'Enable the server-push module?',
            hint: 'If enabled, the module will load and everyone will need to authenticate againt the KeyClock server.',
            type: Boolean,
            scope: 'world',
        });
    }
    async init() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('ServerPush initializing');
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('ServerPush initialized');
    }
    async ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('ServerPush getting ready');
        this.enableServerPush.ready();
        if (!this.enableServerPush.value) {
            return;
        }
        await this.auth.init();
        if (!this.auth.authenticated) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logError)("Not authenticated! Can't proceed with ServerPush.ready.");
            return;
        }
        var user = this.auth.user;
        if (!user.tokenParsed) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logError)('The `tokenParsed` property is not defined.');
            return;
        }
        let connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__.HubConnectionBuilder()
            .withUrl('https://localhost:7263/hubs/default', {
            accessTokenFactory: () => this.auth.token,
        })
            .build();
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.registerGameExtensions)('serverPush', {
            connection,
            user: {
                email: user.tokenParsed.email,
                name: user.tokenParsed.name,
                firstname: user.tokenParsed.given_name,
                lastname: user.tokenParsed.family_name,
                username: user.tokenParsed.preferred_username,
                access: {
                    realm: {
                        roles: user.tokenParsed.realm_access?.roles,
                    },
                    resource: user.tokenParsed.resource_access,
                },
            },
            actions: {
                ping: () => connection.invoke('Ping'),
            },
        });
        connection.on('pong', () => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('pong');
        });
        connection.on('execute', this.execute);
        connection.on('executeAsync', this.executeAsync);
        connection.onclose((error) => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logWarn)('connection.onclose', error);
        });
        connection.start();
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('ServerPush is ready');
    }
    async execute(options, user) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('ServerPush.execute', options, user);
        eval(options.command);
    }
    async executeAsync(options, user) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('ServerPush.executeAsync', options, user);
        await new Promise((resolve, reject) => eval(options.command));
    }
}


/***/ }),

/***/ "./src/SocialEncounterTracker.ts":
/*!***************************************!*\
  !*** ./src/SocialEncounterTracker.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
            if (current === 0) {
                return 'defeated';
            }
            const yellowThreshold = Math.round(max / 2);
            const redThreshold = Math.round(max / 4);
            return current <= redThreshold ? 'low' : current <= yellowThreshold ? 'average' : 'good';
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
    }
    init() { }
    ready() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('SocialEncounterTracker getting ready');
        this.playerStrain.ready();
        this.maxPlayerStrain.ready();
        this.targetStrain.ready();
        this.maxTargetStrain.ready();
        this.displayTargetToPlayers.ready();
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.registerGameExtensions)('SocialEncounterTracker', {
            open: (force = true) => this.form.render(force),
            close: () => this.form.close(),
            form: this.form,
        });
        this.form.render(true);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.logText)('SocialEncounterTracker is ready');
    }
}


/***/ }),

/***/ "./src/css.ts":
/*!********************!*\
  !*** ./src/css.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ css)
/* harmony export */ });
function css(...args) {
    if (args.length == 1) {
        return args[0][0];
    }
    let result = '';
    for (let i = 0; i < args[0].length; i++) {
        result += args[0][i];
        const nextIndex = i + 1;
        if (nextIndex < args.length) {
            result += args[nextIndex];
        }
    }
    return result;
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logError": () => (/* binding */ logError),
/* harmony export */   "logText": () => (/* binding */ logText),
/* harmony export */   "logWarn": () => (/* binding */ logWarn),
/* harmony export */   "registerGameExtensions": () => (/* binding */ registerGameExtensions)
/* harmony export */ });
/* harmony import */ var _OgSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");

// Console wrappers
const prefix = `${_OgSettings__WEBPACK_IMPORTED_MODULE_0__.namespace} |`;
function logText(...data) {
    console.debug(prefix, ...data);
}
function logWarn(...data) {
    console.warn(prefix, ...data);
}
function logError(...data) {
    console.error(prefix, ...data);
}
// Game extensions
const gameExtensionsKey = 'og';
function initializeOgExtensions() {
    game[gameExtensionsKey] = {};
}
function enforceOgExtensionsInitialized() {
    if (game[gameExtensionsKey] === undefined) {
        initializeOgExtensions();
    }
}
function registerGameExtensions(key, setting) {
    enforceOgExtensionsInitialized();
    game[gameExtensionsKey][key] = {
        ...game[gameExtensionsKey][key],
        ...setting,
    };
}


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils */ "./src/utils.ts");
/* harmony import */ var _src_ServerPush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ServerPush */ "./src/ServerPush.ts");
/* harmony import */ var _src_ActivateScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ActivateScene */ "./src/ActivateScene.ts");
/* harmony import */ var _src_OpenSceneNotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/OpenSceneNotes */ "./src/OpenSceneNotes.ts");
/* harmony import */ var _src_OgSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/OgSettings */ "./src/OgSettings.ts");
/* harmony import */ var _src_Journal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Journal */ "./src/Journal/index.ts");
/* harmony import */ var _src_SocialEncounterTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/SocialEncounterTracker */ "./src/SocialEncounterTracker.ts");

// import { VehicleMovement } from './src/movement.js';






const modules = [
    new _src_Journal__WEBPACK_IMPORTED_MODULE_5__.JournalModule(),
    new _src_ActivateScene__WEBPACK_IMPORTED_MODULE_2__.ActivateScene(),
    new _src_OpenSceneNotes__WEBPACK_IMPORTED_MODULE_3__.OpenSceneNotes(),
    new _src_ServerPush__WEBPACK_IMPORTED_MODULE_1__.ServerPush(),
    new _src_SocialEncounterTracker__WEBPACK_IMPORTED_MODULE_6__.SocialEncounterTracker(),
    _src_OgSettings__WEBPACK_IMPORTED_MODULE_4__.globalSettings,
    //new VehicleMovement()
];
Hooks.once('init', async function () {
    (0,_src_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('initiating');
    for (let index = 0; index < modules.length; index++) {
        const module = modules[index];
        if (module.init) {
            module.init();
        }
    }
    (0,_src_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('initiated');
});
Hooks.once('ready', async function () {
    (0,_src_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('readying');
    for (let index = 0; index < modules.length; index++) {
        const module = modules[index];
        if (module.ready) {
            module.ready();
        }
    }
    (0,_src_utils__WEBPACK_IMPORTED_MODULE_0__.logText)('ready');
});
if (true) {
    if (false) {}
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsaUVBQWlFLFdBQVc7QUFDNUU7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBaUUsV0FBVztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1RkFBdUY7QUFDaEgsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7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QTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStCOzs7Ozs7O1VDenNEL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDdEMsWUFBWSxrQkFBa0I7QUFDZ0I7QUFDTTtBQUNFO0FBQ0o7QUFDSjtBQUN3QjtBQUN0RTtBQUNBLFFBQVEsdURBQWE7QUFDckIsUUFBUSw2REFBYTtBQUNyQixRQUFRLCtEQUFjO0FBQ3RCLFFBQVEsdURBQVU7QUFDbEIsUUFBUSwrRUFBc0I7QUFDOUIsSUFBSSwyREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFPO0FBQ1gsd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBTztBQUNYLENBQUM7QUFDRDtBQUNBLElBQUksbURBQU87QUFDWCx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFPO0FBQ1gsQ0FBQztBQUNELElBQUksSUFBc0M7QUFDMUMsUUFBUSxLQUFVLEVBQUUsRUFTZjtBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0Fib3J0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vRGVmYXVsdEh0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0RlZmF1bHRSZWNvbm5lY3RQb2xpY3kuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vRmV0Y2hIdHRwQ2xpZW50LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9IYW5kc2hha2VQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSGVhZGVyTmFtZXMuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0h0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0h0dHBDb25uZWN0aW9uLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9IdWJDb25uZWN0aW9uLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9IdWJDb25uZWN0aW9uQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSUh1YlByb3RvY29sLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9JTG9nZ2VyLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9JVHJhbnNwb3J0LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9Kc29uSHViUHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0xvZ2dlcnMuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0xvbmdQb2xsaW5nVHJhbnNwb3J0LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9TZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9TdWJqZWN0LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9UZXh0TWVzc2FnZUZvcm1hdC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vVXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL1dlYlNvY2tldFRyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vWGhySHR0cENsaWVudC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvanMtc2hhMjU2L3NyYy9zaGEyNTYuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvQWN0aXZhdGVTY2VuZS50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9Kb3VybmFsL2luZGV4LnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL0pvdXJuYWwvb3BlbkpvdXJuYWxFbnRyeS50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9Kb3VybmFsL3Nob3dUZW1wb3JhcnlKb3VybmFsRW50cnkudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvT2dTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9PcGVuU2NlbmVOb3Rlcy50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9TZXJ2ZXJQdXNoLnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL1NvY2lhbEVuY291bnRlclRyYWNrZXIudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvY3NzLnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL2tleWNsb2FrLWpzL2Rpc3Qva2V5Y2xvYWsubWpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIFJvdWdoIHBvbHlmaWxsIG9mIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9BYm9ydENvbnRyb2xsZXJcclxuLy8gV2UgZG9uJ3QgYWN0dWFsbHkgZXZlciB1c2UgdGhlIEFQSSBiZWluZyBwb2x5ZmlsbGVkLCB3ZSBhbHdheXMgdXNlIHRoZSBwb2x5ZmlsbCBiZWNhdXNlXHJcbi8vIGl0J3MgYSB2ZXJ5IG5ldyBBUEkgcmlnaHQgbm93LlxyXG4vLyBOb3QgZXhwb3J0ZWQgZnJvbSBpbmRleC5cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBBYm9ydENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5faXNBYm9ydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbmFib3J0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGFib3J0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNBYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uYWJvcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25hYm9ydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHNpZ25hbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldCBhYm9ydGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Fib3J0ZWQ7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWJvcnRDb250cm9sbGVyLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgQWJvcnRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBGZXRjaEh0dHBDbGllbnQgfSBmcm9tIFwiLi9GZXRjaEh0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCIuL0h0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBYaHJIdHRwQ2xpZW50IH0gZnJvbSBcIi4vWGhySHR0cENsaWVudFwiO1xyXG4vKiogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh0dHBDbGllbnR9LiAqL1xyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEh0dHBDbGllbnQgZXh0ZW5kcyBIdHRwQ2xpZW50IHtcclxuICAgIC8qKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkRlZmF1bHRIdHRwQ2xpZW50fSwgdXNpbmcgdGhlIHByb3ZpZGVkIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSUxvZ2dlcn0gdG8gbG9nIG1lc3NhZ2VzLiAqL1xyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBpZiAodHlwZW9mIGZldGNoICE9PSBcInVuZGVmaW5lZFwiIHx8IFBsYXRmb3JtLmlzTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9odHRwQ2xpZW50ID0gbmV3IEZldGNoSHR0cENsaWVudChsb2dnZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IG5ldyBYaHJIdHRwQ2xpZW50KGxvZ2dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2FibGUgSHR0cENsaWVudCBmb3VuZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBzZW5kKHJlcXVlc3QpIHtcclxuICAgICAgICAvLyBDaGVjayB0aGF0IGFib3J0IHdhcyBub3Qgc2lnbmFsZWQgYmVmb3JlIGNhbGxpbmcgc2VuZFxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsICYmIHJlcXVlc3QuYWJvcnRTaWduYWwuYWJvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFib3J0RXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC5tZXRob2QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG1ldGhvZCBkZWZpbmVkLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC51cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBkZWZpbmVkLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LnNlbmQocmVxdWVzdCk7XHJcbiAgICB9XHJcbiAgICBnZXRDb29raWVTdHJpbmcodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQuZ2V0Q29va2llU3RyaW5nKHVybCk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVmYXVsdEh0dHBDbGllbnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyAwLCAyLCAxMCwgMzAgc2Vjb25kIGRlbGF5cyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHRzLlxyXG5jb25zdCBERUZBVUxUX1JFVFJZX0RFTEFZU19JTl9NSUxMSVNFQ09ORFMgPSBbMCwgMjAwMCwgMTAwMDAsIDMwMDAwLCBudWxsXTtcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0UmVjb25uZWN0UG9saWN5IHtcclxuICAgIGNvbnN0cnVjdG9yKHJldHJ5RGVsYXlzKSB7XHJcbiAgICAgICAgdGhpcy5fcmV0cnlEZWxheXMgPSByZXRyeURlbGF5cyAhPT0gdW5kZWZpbmVkID8gWy4uLnJldHJ5RGVsYXlzLCBudWxsXSA6IERFRkFVTFRfUkVUUllfREVMQVlTX0lOX01JTExJU0VDT05EUztcclxuICAgIH1cclxuICAgIG5leHRSZXRyeURlbGF5SW5NaWxsaXNlY29uZHMocmV0cnlDb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JldHJ5RGVsYXlzW3JldHJ5Q29udGV4dC5wcmV2aW91c1JldHJ5Q291bnRdO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURlZmF1bHRSZWNvbm5lY3RQb2xpY3kuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gYW4gSFRUUCByZXF1ZXN0IGZhaWxzLiAqL1xyXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdHRwRXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1c0NvZGUgVGhlIEhUVFAgc3RhdHVzIGNvZGUgcmVwcmVzZW50ZWQgYnkgdGhpcyBlcnJvci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZXJyb3JNZXNzYWdlLCBzdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIoYCR7ZXJyb3JNZXNzYWdlfTogU3RhdHVzIGNvZGUgJyR7c3RhdHVzQ29kZX0nYCk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gYSB0aW1lb3V0IGVsYXBzZXMuICovXHJcbmV4cG9ydCBjbGFzcyBUaW1lb3V0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLlRpbWVvdXRFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yTWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yTWVzc2FnZSA9IFwiQSB0aW1lb3V0IG9jY3VycmVkLlwiKSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gYW4gYWN0aW9uIGlzIGFib3J0ZWQuICovXHJcbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEFib3J0RXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2UgPSBcIkFuIGFib3J0IG9jY3VycmVkLlwiKSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gdGhlIHNlbGVjdGVkIHRyYW5zcG9ydCBpcyB1bnN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gKi9cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBVbnN1cHBvcnRlZFRyYW5zcG9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5VbnN1cHBvcnRlZFRyYW5zcG9ydEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0ge0h0dHBUcmFuc3BvcnRUeXBlfSB0cmFuc3BvcnQgVGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHR0cFRyYW5zcG9ydFR5cGV9IHRoaXMgZXJyb3Igb2NjdXJlZCBvbi5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgdHJhbnNwb3J0KSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XHJcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSAnVW5zdXBwb3J0ZWRUcmFuc3BvcnRFcnJvcic7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLyoqIEVycm9yIHRocm93biB3aGVuIHRoZSBzZWxlY3RlZCB0cmFuc3BvcnQgaXMgZGlzYWJsZWQgYnkgdGhlIGJyb3dzZXIuICovXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgRGlzYWJsZWRUcmFuc3BvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuRGlzYWJsZWRUcmFuc3BvcnRFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIHtIdHRwVHJhbnNwb3J0VHlwZX0gdHJhbnNwb3J0IFRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh0dHBUcmFuc3BvcnRUeXBlfSB0aGlzIGVycm9yIG9jY3VyZWQgb24uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHRyYW5zcG9ydCkge1xyXG4gICAgICAgIGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gJ0Rpc2FibGVkVHJhbnNwb3J0RXJyb3InO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiB0aGUgc2VsZWN0ZWQgdHJhbnNwb3J0IGNhbm5vdCBiZSBzdGFydGVkLiAqL1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIEZhaWxlZFRvU3RhcnRUcmFuc3BvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuRmFpbGVkVG9TdGFydFRyYW5zcG9ydEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0ge0h0dHBUcmFuc3BvcnRUeXBlfSB0cmFuc3BvcnQgVGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHR0cFRyYW5zcG9ydFR5cGV9IHRoaXMgZXJyb3Igb2NjdXJlZCBvbi5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgdHJhbnNwb3J0KSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XHJcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSAnRmFpbGVkVG9TdGFydFRyYW5zcG9ydEVycm9yJztcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gdGhlIG5lZ290aWF0aW9uIHdpdGggdGhlIHNlcnZlciBmYWlsZWQgdG8gY29tcGxldGUuICovXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgRmFpbGVkVG9OZWdvdGlhdGVXaXRoU2VydmVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkZhaWxlZFRvTmVnb3RpYXRlV2l0aFNlcnZlckVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9ICdGYWlsZWRUb05lZ290aWF0ZVdpdGhTZXJ2ZXJFcnJvcic7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLyoqIEVycm9yIHRocm93biB3aGVuIG11bHRpcGxlIGVycm9ycyBoYXZlIG9jY3VyZWQuICovXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlRXJyb3JzIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5BZ2dyZWdhdGVFcnJvcnN9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqIEBwYXJhbSB7RXJyb3JbXX0gaW5uZXJFcnJvcnMgVGhlIGNvbGxlY3Rpb24gb2YgZXJyb3JzIHRoaXMgZXJyb3IgaXMgYWdncmVnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGlubmVyRXJyb3JzKSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckVycm9ycyA9IGlubmVyRXJyb3JzO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVycm9ycy5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEFib3J0RXJyb3IsIEh0dHBFcnJvciwgVGltZW91dEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCIuL0h0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtLCBnZXRHbG9iYWxUaGlzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuZXhwb3J0IGNsYXNzIEZldGNoSHR0cENsaWVudCBleHRlbmRzIEh0dHBDbGllbnQge1xyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAvLyBJbiBvcmRlciB0byBpZ25vcmUgdGhlIGR5bmFtaWMgcmVxdWlyZSBpbiB3ZWJwYWNrIGJ1aWxkcyB3ZSBuZWVkIHRvIGRvIHRoaXMgbWFnaWNcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogVFMgZG9lc24ndCBrbm93IGFib3V0IHRoZXNlIG5hbWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVGdW5jID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09IFwiZnVuY3Rpb25cIiA/IF9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fIDogcmVxdWlyZTtcclxuICAgICAgICAgICAgLy8gQ29va2llcyBhcmVuJ3QgYXV0b21hdGljYWxseSBoYW5kbGVkIGluIE5vZGUgc28gd2UgbmVlZCB0byBhZGQgYSBDb29raWVKYXIgdG8gcHJlc2VydmUgY29va2llcyBhY3Jvc3MgcmVxdWVzdHNcclxuICAgICAgICAgICAgdGhpcy5famFyID0gbmV3IChyZXF1aXJlRnVuYyhcInRvdWdoLWNvb2tpZVwiKSkuQ29va2llSmFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZldGNoVHlwZSA9IHJlcXVpcmVGdW5jKFwibm9kZS1mZXRjaFwiKTtcclxuICAgICAgICAgICAgLy8gbm9kZS1mZXRjaCBkb2Vzbid0IGhhdmUgYSBuaWNlIEFQSSBmb3IgZ2V0dGluZyBhbmQgc2V0dGluZyBjb29raWVzXHJcbiAgICAgICAgICAgIC8vIGZldGNoLWNvb2tpZSB3aWxsIHdyYXAgYSBmZXRjaCBpbXBsZW1lbnRhdGlvbiB3aXRoIGEgZGVmYXVsdCBDb29raWVKYXIgb3IgYSBwcm92aWRlZCBvbmVcclxuICAgICAgICAgICAgdGhpcy5fZmV0Y2hUeXBlID0gcmVxdWlyZUZ1bmMoXCJmZXRjaC1jb29raWVcIikodGhpcy5fZmV0Y2hUeXBlLCB0aGlzLl9qYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZmV0Y2hUeXBlID0gZmV0Y2guYmluZChnZXRHbG9iYWxUaGlzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAvLyBJbiBvcmRlciB0byBpZ25vcmUgdGhlIGR5bmFtaWMgcmVxdWlyZSBpbiB3ZWJwYWNrIGJ1aWxkcyB3ZSBuZWVkIHRvIGRvIHRoaXMgbWFnaWNcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogVFMgZG9lc24ndCBrbm93IGFib3V0IHRoZXNlIG5hbWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVGdW5jID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09IFwiZnVuY3Rpb25cIiA/IF9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fIDogcmVxdWlyZTtcclxuICAgICAgICAgICAgLy8gTm9kZSBuZWVkcyBFdmVudExpc3RlbmVyIG1ldGhvZHMgb24gQWJvcnRDb250cm9sbGVyIHdoaWNoIG91ciBjdXN0b20gcG9seWZpbGwgZG9lc24ndCBwcm92aWRlXHJcbiAgICAgICAgICAgIHRoaXMuX2Fib3J0Q29udHJvbGxlclR5cGUgPSByZXF1aXJlRnVuYyhcImFib3J0LWNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hYm9ydENvbnRyb2xsZXJUeXBlID0gQWJvcnRDb250cm9sbGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgYXN5bmMgc2VuZChyZXF1ZXN0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBhYm9ydCB3YXMgbm90IHNpZ25hbGVkIGJlZm9yZSBjYWxsaW5nIHNlbmRcclxuICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCAmJiByZXF1ZXN0LmFib3J0U2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEFib3J0RXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtZXRob2QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC51cmwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdXJsIGRlZmluZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgdGhpcy5fYWJvcnRDb250cm9sbGVyVHlwZSgpO1xyXG4gICAgICAgIGxldCBlcnJvcjtcclxuICAgICAgICAvLyBIb29rIG91ciBhYm9ydFNpZ25hbCBpbnRvIHRoZSBhYm9ydCBjb250cm9sbGVyXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBBYm9ydEVycm9yKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGEgdGltZW91dCBoYXMgYmVlbiBwYXNzZWQgaW4sIHNldHVwIGEgdGltZW91dCB0byBjYWxsIGFib3J0XHJcbiAgICAgICAgLy8gVHlwZSBuZWVkcyB0byBiZSBhbnkgdG8gZml0IHdpbmRvdy5zZXRUaW1lb3V0IGFuZCBOb2RlSlMuc2V0VGltZW91dFxyXG4gICAgICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbXNUaW1lb3V0ID0gcmVxdWVzdC50aW1lb3V0O1xyXG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgVGltZW91dCBmcm9tIEhUVFAgcmVxdWVzdC5gKTtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IFRpbWVvdXRFcnJvcigpO1xyXG4gICAgICAgICAgICB9LCBtc1RpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9mZXRjaFR5cGUocmVxdWVzdC51cmwsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IHJlcXVlc3QuY29udGVudCxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPT09IHRydWUgPyBcImluY2x1ZGVcIiA6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVxdWVzdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiLFxyXG4gICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBFcnJvciBmcm9tIEhUVFAgcmVxdWVzdC4gJHtlfS5gKTtcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmFib3J0U2lnbmFsLm9uYWJvcnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgZGVzZXJpYWxpemVDb250ZW50KHJlc3BvbnNlLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBIdHRwRXJyb3IoZXJyb3JNZXNzYWdlIHx8IHJlc3BvbnNlLnN0YXR1c1RleHQsIHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkZXNlcmlhbGl6ZUNvbnRlbnQocmVzcG9uc2UsIHJlcXVlc3QucmVzcG9uc2VUeXBlKTtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgY29udGVudDtcclxuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQsIHBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29va2llU3RyaW5nKHVybCkge1xyXG4gICAgICAgIGxldCBjb29raWVzID0gXCJcIjtcclxuICAgICAgICBpZiAoUGxhdGZvcm0uaXNOb2RlICYmIHRoaXMuX2phcikge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiB1bnVzZWQgdmFyaWFibGVcclxuICAgICAgICAgICAgdGhpcy5famFyLmdldENvb2tpZXModXJsLCAoZSwgYykgPT4gY29va2llcyA9IGMuam9pbihcIjsgXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZXM7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVDb250ZW50KHJlc3BvbnNlLCByZXNwb25zZVR5cGUpIHtcclxuICAgIGxldCBjb250ZW50O1xyXG4gICAgc3dpdGNoIChyZXNwb25zZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiYXJyYXlidWZmZXJcIjpcclxuICAgICAgICAgICAgY29udGVudCA9IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJibG9iXCI6XHJcbiAgICAgICAgY2FzZSBcImRvY3VtZW50XCI6XHJcbiAgICAgICAgY2FzZSBcImpzb25cIjpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlVHlwZX0gaXMgbm90IHN1cHBvcnRlZC5gKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb250ZW50ID0gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZldGNoSHR0cENsaWVudC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IFRleHRNZXNzYWdlRm9ybWF0IH0gZnJvbSBcIi4vVGV4dE1lc3NhZ2VGb3JtYXRcIjtcclxuaW1wb3J0IHsgaXNBcnJheUJ1ZmZlciB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgSGFuZHNoYWtlUHJvdG9jb2wge1xyXG4gICAgLy8gSGFuZHNoYWtlIHJlcXVlc3QgaXMgYWx3YXlzIEpTT05cclxuICAgIHdyaXRlSGFuZHNoYWtlUmVxdWVzdChoYW5kc2hha2VSZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIFRleHRNZXNzYWdlRm9ybWF0LndyaXRlKEpTT04uc3RyaW5naWZ5KGhhbmRzaGFrZVJlcXVlc3QpKTtcclxuICAgIH1cclxuICAgIHBhcnNlSGFuZHNoYWtlUmVzcG9uc2UoZGF0YSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGF0YTtcclxuICAgICAgICBsZXQgcmVtYWluaW5nRGF0YTtcclxuICAgICAgICBpZiAoaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xyXG4gICAgICAgICAgICAvLyBGb3JtYXQgaXMgYmluYXJ5IGJ1dCBzdGlsbCBuZWVkIHRvIHJlYWQgSlNPTiB0ZXh0IGZyb20gaGFuZHNoYWtlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmFyeURhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9ySW5kZXggPSBiaW5hcnlEYXRhLmluZGV4T2YoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yQ29kZSk7XHJcbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1lc3NhZ2UgaXMgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29udGVudCBiZWZvcmUgc2VwYXJhdG9yIGlzIGhhbmRzaGFrZSByZXNwb25zZVxyXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBjb250ZW50IGFmdGVyIGlzIGFkZGl0aW9uYWwgbWVzc2FnZXNcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VMZW5ndGggPSBzZXBhcmF0b3JJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiaW5hcnlEYXRhLnNsaWNlKDAsIHJlc3BvbnNlTGVuZ3RoKSkpO1xyXG4gICAgICAgICAgICByZW1haW5pbmdEYXRhID0gKGJpbmFyeURhdGEuYnl0ZUxlbmd0aCA+IHJlc3BvbnNlTGVuZ3RoKSA/IGJpbmFyeURhdGEuc2xpY2UocmVzcG9uc2VMZW5ndGgpLmJ1ZmZlciA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvckluZGV4ID0gdGV4dERhdGEuaW5kZXhPZihUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXNzYWdlIGlzIGluY29tcGxldGUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnRlbnQgYmVmb3JlIHNlcGFyYXRvciBpcyBoYW5kc2hha2UgcmVzcG9uc2VcclxuICAgICAgICAgICAgLy8gb3B0aW9uYWwgY29udGVudCBhZnRlciBpcyBhZGRpdGlvbmFsIG1lc3NhZ2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlTGVuZ3RoID0gc2VwYXJhdG9ySW5kZXggKyAxO1xyXG4gICAgICAgICAgICBtZXNzYWdlRGF0YSA9IHRleHREYXRhLnN1YnN0cmluZygwLCByZXNwb25zZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJlbWFpbmluZ0RhdGEgPSAodGV4dERhdGEubGVuZ3RoID4gcmVzcG9uc2VMZW5ndGgpID8gdGV4dERhdGEuc3Vic3RyaW5nKHJlc3BvbnNlTGVuZ3RoKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEF0IHRoaXMgcG9pbnQgd2Ugc2hvdWxkIGhhdmUganVzdCB0aGUgc2luZ2xlIGhhbmRzaGFrZSBtZXNzYWdlXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBUZXh0TWVzc2FnZUZvcm1hdC5wYXJzZShtZXNzYWdlRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKG1lc3NhZ2VzWzBdKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UudHlwZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhIGhhbmRzaGFrZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZU1lc3NhZ2UgPSByZXNwb25zZTtcclxuICAgICAgICAvLyBtdWx0aXBsZSBtZXNzYWdlcyBjb3VsZCBoYXZlIGFycml2ZWQgd2l0aCBoYW5kc2hha2VcclxuICAgICAgICAvLyByZXR1cm4gYWRkaXRpb25hbCBkYXRhIHRvIGJlIHBhcnNlZCBhcyB1c3VhbCwgb3IgbnVsbCBpZiBhbGwgcGFyc2VkXHJcbiAgICAgICAgcmV0dXJuIFtyZW1haW5pbmdEYXRhLCByZXNwb25zZU1lc3NhZ2VdO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhhbmRzaGFrZVByb3RvY29sLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuZXhwb3J0IGNsYXNzIEhlYWRlck5hbWVzIHtcclxufVxyXG5IZWFkZXJOYW1lcy5BdXRob3JpemF0aW9uID0gXCJBdXRob3JpemF0aW9uXCI7XHJcbkhlYWRlck5hbWVzLkNvb2tpZSA9IFwiQ29va2llXCI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhlYWRlck5hbWVzLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLyoqIFJlcHJlc2VudHMgYW4gSFRUUCByZXNwb25zZS4gKi9cclxuZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlLCBzdGF0dXNUZXh0LCBjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcclxuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuLyoqIEFic3RyYWN0aW9uIG92ZXIgYW4gSFRUUCBjbGllbnQuXHJcbiAqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgYW4gYWJzdHJhY3Rpb24gb3ZlciBhbiBIVFRQIGNsaWVudCBzbyB0aGF0IGEgZGlmZmVyZW50IGltcGxlbWVudGF0aW9uIGNhbiBiZSBwcm92aWRlZCBvbiBkaWZmZXJlbnQgcGxhdGZvcm1zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnQge1xyXG4gICAgZ2V0KHVybCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoe1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHBvc3QodXJsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZCh7XHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSh1cmwsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKHtcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKiogR2V0cyBhbGwgY29va2llcyB0aGF0IGFwcGx5IHRvIHRoZSBzcGVjaWZpZWQgVVJMLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0aGF0IHRoZSBjb29raWVzIGFyZSB2YWxpZCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIGFsbCB0aGUga2V5LXZhbHVlIGNvb2tpZSBwYWlycyBmb3IgdGhlIHNwZWNpZmllZCBVUkwuXHJcbiAgICAgKi9cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGdldENvb2tpZVN0cmluZyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdHRwQ2xpZW50LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgRGVmYXVsdEh0dHBDbGllbnQgfSBmcm9tIFwiLi9EZWZhdWx0SHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdGVFcnJvcnMsIERpc2FibGVkVHJhbnNwb3J0RXJyb3IsIEZhaWxlZFRvTmVnb3RpYXRlV2l0aFNlcnZlckVycm9yLCBGYWlsZWRUb1N0YXJ0VHJhbnNwb3J0RXJyb3IsIEh0dHBFcnJvciwgVW5zdXBwb3J0ZWRUcmFuc3BvcnRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBIZWFkZXJOYW1lcyB9IGZyb20gXCIuL0hlYWRlck5hbWVzXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBIdHRwVHJhbnNwb3J0VHlwZSwgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IExvbmdQb2xsaW5nVHJhbnNwb3J0IH0gZnJvbSBcIi4vTG9uZ1BvbGxpbmdUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydCB9IGZyb20gXCIuL1NlcnZlclNlbnRFdmVudHNUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBjcmVhdGVMb2dnZXIsIGdldFVzZXJBZ2VudEhlYWRlciwgUGxhdGZvcm0gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBXZWJTb2NrZXRUcmFuc3BvcnQgfSBmcm9tIFwiLi9XZWJTb2NrZXRUcmFuc3BvcnRcIjtcclxuY29uc3QgTUFYX1JFRElSRUNUUyA9IDEwMDtcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ29ubmVjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX3N0b3BQcm9taXNlUmVzb2x2ZXIgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX25lZ290aWF0ZVZlcnNpb24gPSAxO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKG9wdGlvbnMubG9nZ2VyKTtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLl9yZXNvbHZlVXJsKHVybCk7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCA9IG9wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudDtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID09PSBcImJvb2xlYW5cIiB8fCBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLndpdGhDcmVkZW50aWFscztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndpdGhDcmVkZW50aWFscyBvcHRpb24gd2FzIG5vdCBhICdib29sZWFuJyBvciAndW5kZWZpbmVkJyB2YWx1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9ucy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0ID09PSB1bmRlZmluZWQgPyAxMDAgKiAxMDAwIDogb3B0aW9ucy50aW1lb3V0O1xyXG4gICAgICAgIGxldCB3ZWJTb2NrZXRNb2R1bGUgPSBudWxsO1xyXG4gICAgICAgIGxldCBldmVudFNvdXJjZU1vZHVsZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKFBsYXRmb3JtLmlzTm9kZSAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAvLyBJbiBvcmRlciB0byBpZ25vcmUgdGhlIGR5bmFtaWMgcmVxdWlyZSBpbiB3ZWJwYWNrIGJ1aWxkcyB3ZSBuZWVkIHRvIGRvIHRoaXMgbWFnaWNcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogVFMgZG9lc24ndCBrbm93IGFib3V0IHRoZXNlIG5hbWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVGdW5jID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09IFwiZnVuY3Rpb25cIiA/IF9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fIDogcmVxdWlyZTtcclxuICAgICAgICAgICAgd2ViU29ja2V0TW9kdWxlID0gcmVxdWlyZUZ1bmMoXCJ3c1wiKTtcclxuICAgICAgICAgICAgZXZlbnRTb3VyY2VNb2R1bGUgPSByZXF1aXJlRnVuYyhcImV2ZW50c291cmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVBsYXRmb3JtLmlzTm9kZSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiICYmICFvcHRpb25zLldlYlNvY2tldCkge1xyXG4gICAgICAgICAgICBvcHRpb25zLldlYlNvY2tldCA9IFdlYlNvY2tldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoUGxhdGZvcm0uaXNOb2RlICYmICFvcHRpb25zLldlYlNvY2tldCkge1xyXG4gICAgICAgICAgICBpZiAod2ViU29ja2V0TW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLldlYlNvY2tldCA9IHdlYlNvY2tldE1vZHVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVBsYXRmb3JtLmlzTm9kZSAmJiB0eXBlb2YgRXZlbnRTb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgIW9wdGlvbnMuRXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChQbGF0Zm9ybS5pc05vZGUgJiYgIW9wdGlvbnMuRXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBldmVudFNvdXJjZU1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5FdmVudFNvdXJjZSA9IGV2ZW50U291cmNlTW9kdWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2h0dHBDbGllbnQgPSBvcHRpb25zLmh0dHBDbGllbnQgfHwgbmV3IERlZmF1bHRIdHRwQ2xpZW50KHRoaXMuX2xvZ2dlcik7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi87XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLm9ucmVjZWl2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gbnVsbDtcclxuICAgIH1cclxuICAgIGFzeW5jIHN0YXJ0KHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgdHJhbnNmZXJGb3JtYXQgPSB0cmFuc2ZlckZvcm1hdCB8fCBUcmFuc2ZlckZvcm1hdC5CaW5hcnk7XHJcbiAgICAgICAgQXJnLmlzSW4odHJhbnNmZXJGb3JtYXQsIFRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTdGFydGluZyBjb25uZWN0aW9uIHdpdGggdHJhbnNmZXIgZm9ybWF0ICcke1RyYW5zZmVyRm9ybWF0W3RyYW5zZmVyRm9ybWF0XX0nLmApO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc3RhcnQgYW4gSHR0cENvbm5lY3Rpb24gdGhhdCBpcyBub3QgaW4gdGhlICdEaXNjb25uZWN0ZWQnIHN0YXRlLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IFwiQ29ubmVjdGluZ1wiIC8qIENvbm5lY3RpbmcgKi87XHJcbiAgICAgICAgdGhpcy5fc3RhcnRJbnRlcm5hbFByb21pc2UgPSB0aGlzLl9zdGFydEludGVybmFsKHRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9zdGFydEludGVybmFsUHJvbWlzZTtcclxuICAgICAgICAvLyBUaGUgVHlwZVNjcmlwdCBjb21waWxlciB0aGlua3MgdGhhdCBjb25uZWN0aW9uU3RhdGUgbXVzdCBiZSBDb25uZWN0aW5nIGhlcmUuIFRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIGlzIHdyb25nLlxyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGluZ1wiIC8qIERpc2Nvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgLy8gc3RvcCgpIHdhcyBjYWxsZWQgYW5kIHRyYW5zaXRpb25lZCB0aGUgY2xpZW50IGludG8gdGhlIERpc2Nvbm5lY3Rpbmcgc3RhdGUuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkZhaWxlZCB0byBzdGFydCB0aGUgSHR0cENvbm5lY3Rpb24gYmVmb3JlIHN0b3AoKSB3YXMgY2FsbGVkLlwiO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgLy8gV2UgY2Fubm90IGF3YWl0IHN0b3BQcm9taXNlIGluc2lkZSBzdGFydEludGVybmFsIHNpbmNlIHN0b3BJbnRlcm5hbCBhd2FpdHMgdGhlIHN0YXJ0SW50ZXJuYWxQcm9taXNlLlxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zdG9wUHJvbWlzZTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgLy8gc3RvcCgpIHdhcyBjYWxsZWQgYW5kIHRyYW5zaXRpb25lZCB0aGUgY2xpZW50IGludG8gdGhlIERpc2Nvbm5lY3Rpbmcgc3RhdGUuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkh0dHBDb25uZWN0aW9uLnN0YXJ0SW50ZXJuYWwgY29tcGxldGVkIGdyYWNlZnVsbHkgYnV0IGRpZG4ndCBlbnRlciB0aGUgY29ubmVjdGlvbiBpbnRvIHRoZSBjb25uZWN0ZWQgc3RhdGUhXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzZW5kIGRhdGEgaWYgdGhlIGNvbm5lY3Rpb24gaXMgbm90IGluIHRoZSAnQ29ubmVjdGVkJyBTdGF0ZS5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX3NlbmRRdWV1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUXVldWUgPSBuZXcgVHJhbnNwb3J0U2VuZFF1ZXVlKHRoaXMudHJhbnNwb3J0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVHJhbnNwb3J0IHdpbGwgbm90IGJlIG51bGwgaWYgc3RhdGUgaXMgY29ubmVjdGVkXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRRdWV1ZS5zZW5kKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RvcChlcnJvcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3AoJHtlcnJvcn0pIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wKCR7ZXJyb3J9KSBpZ25vcmVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGluZyBzdGF0ZS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3BQcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovO1xyXG4gICAgICAgIHRoaXMuX3N0b3BQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgLy8gRG9uJ3QgY29tcGxldGUgc3RvcCgpIHVudGlsIHN0b3BDb25uZWN0aW9uKCkgY29tcGxldGVzLlxyXG4gICAgICAgICAgICB0aGlzLl9zdG9wUHJvbWlzZVJlc29sdmVyID0gcmVzb2x2ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBzdG9wSW50ZXJuYWwgc2hvdWxkIG5ldmVyIHRocm93IHNvIGp1c3Qgb2JzZXJ2ZSBpdC5cclxuICAgICAgICBhd2FpdCB0aGlzLl9zdG9wSW50ZXJuYWwoZXJyb3IpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX3N0b3BQcm9taXNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgX3N0b3BJbnRlcm5hbChlcnJvcikge1xyXG4gICAgICAgIC8vIFNldCBlcnJvciBhcyBzb29uIGFzIHBvc3NpYmxlIG90aGVyd2lzZSB0aGVyZSBpcyBhIHJhY2UgYmV0d2VlblxyXG4gICAgICAgIC8vIHRoZSB0cmFuc3BvcnQgY2xvc2luZyBhbmQgcHJvdmlkaW5nIGFuIGVycm9yIGFuZCB0aGUgZXJyb3IgZnJvbSBhIGNsb3NlIG1lc3NhZ2VcclxuICAgICAgICAvLyBXZSB3b3VsZCBwcmVmZXIgdGhlIGNsb3NlIG1lc3NhZ2UgZXJyb3IuXHJcbiAgICAgICAgdGhpcy5fc3RvcEVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRJbnRlcm5hbFByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXhjZXB0aW9uIGlzIHJldHVybmVkIHRvIHRoZSB1c2VyIGFzIGEgcmVqZWN0ZWQgUHJvbWlzZSBmcm9tIHRoZSBzdGFydCBtZXRob2QuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRoZSB0cmFuc3BvcnQncyBvbmNsb3NlIHdpbGwgdHJpZ2dlciBzdG9wQ29ubmVjdGlvbiB3aGljaCB3aWxsIHJ1biBvdXIgb25jbG9zZSBldmVudC5cclxuICAgICAgICAvLyBUaGUgdHJhbnNwb3J0IHNob3VsZCBhbHdheXMgYmUgc2V0IGlmIGN1cnJlbnRseSBjb25uZWN0ZWQuIElmIGl0IHdhc24ndCBzZXQsIGl0J3MgbGlrZWx5IGJlY2F1c2VcclxuICAgICAgICAvLyBzdG9wIHdhcyBjYWxsZWQgZHVyaW5nIHN0YXJ0KCkgYW5kIHN0YXJ0KCkgZmFpbGVkLlxyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy50cmFuc3BvcnQuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgSHR0cENvbm5lY3Rpb24udHJhbnNwb3J0LnN0b3AoKSB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9wQ29ubmVjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJIdHRwQ29ubmVjdGlvbi50cmFuc3BvcnQgaXMgdW5kZWZpbmVkIGluIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBiZWNhdXNlIHN0YXJ0KCkgZmFpbGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBfc3RhcnRJbnRlcm5hbCh0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBiYXNlIHVybCBhbmQgdGhlIGFjY2VzcyB0b2tlbiBmYWN0b3J5IHNpbmNlIHRoZXkgbWF5IGNoYW5nZVxyXG4gICAgICAgIC8vIGFzIHBhcnQgb2YgbmVnb3RpYXRpbmdcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSA9IHRoaXMuX29wdGlvbnMuYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNraXBOZWdvdGlhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudHJhbnNwb3J0ID09PSBIdHRwVHJhbnNwb3J0VHlwZS5XZWJTb2NrZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBhZGQgYSBjb25uZWN0aW9uIElEIGluIHRoaXMgY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdGhpcy5fY29uc3RydWN0VHJhbnNwb3J0KEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBqdXN0IGNhbGwgY29ubmVjdCBkaXJlY3RseSBpbiB0aGlzIGNhc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZmFsbGJhY2sgb3IgbmVnb3RpYXRlIGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zdGFydFRyYW5zcG9ydCh1cmwsIHRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5lZ290aWF0aW9uIGNhbiBvbmx5IGJlIHNraXBwZWQgd2hlbiB1c2luZyB0aGUgV2ViU29ja2V0IHRyYW5zcG9ydCBkaXJlY3RseS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmVnb3RpYXRlUmVzcG9uc2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZGlyZWN0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVnb3RpYXRlUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9nZXROZWdvdGlhdGlvblJlc3BvbnNlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHVzZXIgdHJpZXMgdG8gc3RvcCB0aGUgY29ubmVjdGlvbiB3aGVuIGl0IGlzIGJlaW5nIHN0YXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovIHx8IHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbm5lY3Rpb24gd2FzIHN0b3BwZWQgZHVyaW5nIG5lZ290aWF0aW9uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ290aWF0ZVJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuZWdvdGlhdGVSZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS5Qcm90b2NvbFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGV0ZWN0ZWQgYSBjb25uZWN0aW9uIGF0dGVtcHQgdG8gYW4gQVNQLk5FVCBTaWduYWxSIFNlcnZlci4gVGhpcyBjbGllbnQgb25seSBzdXBwb3J0cyBjb25uZWN0aW5nIHRvIGFuIEFTUC5ORVQgQ29yZSBTaWduYWxSIFNlcnZlci4gU2VlIGh0dHBzOi8vYWthLm1zL3NpZ25hbHItY29yZS1kaWZmZXJlbmNlcyBmb3IgZGV0YWlscy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gbmVnb3RpYXRlUmVzcG9uc2UudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmVnb3RpYXRlUmVzcG9uc2UuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBhY2Nlc3MgdG9rZW4gZmFjdG9yeSB3aXRoIG9uZSB0aGF0IHVzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJldHVybmVkIGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IG5lZ290aWF0ZVJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkgPSAoKSA9PiBhY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RzKys7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChuZWdvdGlhdGVSZXNwb25zZS51cmwgJiYgcmVkaXJlY3RzIDwgTUFYX1JFRElSRUNUUyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RzID09PSBNQVhfUkVESVJFQ1RTICYmIG5lZ290aWF0ZVJlc3BvbnNlLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5lZ290aWF0ZSByZWRpcmVjdGlvbiBsaW1pdCBleGNlZWRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9jcmVhdGVUcmFuc3BvcnQodXJsLCB0aGlzLl9vcHRpb25zLnRyYW5zcG9ydCwgbmVnb3RpYXRlUmVzcG9uc2UsIHRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQgaW5zdGFuY2VvZiBMb25nUG9sbGluZ1RyYW5zcG9ydCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcy5pbmhlcmVudEtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJDb25uZWN0aW5nXCIgLyogQ29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBjb25uZWN0aW9uIHRyYW5zaXRpb25zIHRvIHRoZSBjb25uZWN0ZWQgc3RhdGUgcHJpb3IgdG8gY29tcGxldGluZyB0aGlzLnN0YXJ0SW50ZXJuYWxQcm9taXNlLlxyXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQoKSB3aWxsIGhhbmRsZSB0aGUgY2FzZSB3aGVuIHN0b3Agd2FzIGNhbGxlZCBhbmQgc3RhcnRJbnRlcm5hbCBleGl0cyBzdGlsbCBpbiB0aGUgZGlzY29ubmVjdGluZyBzdGF0ZS5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiVGhlIEh0dHBDb25uZWN0aW9uIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc3RvcCgpIGlzIHdhaXRpbmcgb24gdXMgdmlhIHRoaXMuc3RhcnRJbnRlcm5hbFByb21pc2Ugc28ga2VlcCB0aGlzLnRyYW5zcG9ydCBhcm91bmQgc28gaXQgY2FuIGNsZWFuIHVwLlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IGNhc2Ugc3RhcnRJbnRlcm5hbCBjYW4gZXhpdCBpbiBuZWl0aGVyIHRoZSBjb25uZWN0ZWQgbm9yIGRpc2Nvbm5lY3RlZCBzdGF0ZSBiZWNhdXNlIHN0b3BDb25uZWN0aW9uKClcclxuICAgICAgICAgICAgLy8gd2lsbCB0cmFuc2l0aW9uIHRvIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUuIHN0YXJ0KCkgd2lsbCB3YWl0IGZvciB0aGUgdHJhbnNpdGlvbiB1c2luZyB0aGUgc3RvcFByb21pc2UuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIFwiRmFpbGVkIHRvIHN0YXJ0IHRoZSBjb25uZWN0aW9uOiBcIiArIGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLztcclxuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIC8vIGlmIHN0YXJ0IGZhaWxzLCBhbnkgYWN0aXZlIGNhbGxzIHRvIHN0b3AgYXNzdW1lIHRoYXQgc3RhcnQgd2lsbCBjb21wbGV0ZSB0aGUgc3RvcCBwcm9taXNlXHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3BQcm9taXNlUmVzb2x2ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIF9nZXROZWdvdGlhdGlvblJlc3BvbnNlKHVybCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAodGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyc1tIZWFkZXJOYW1lcy5BdXRob3JpemF0aW9uXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBnZXRVc2VyQWdlbnRIZWFkZXIoKTtcclxuICAgICAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmVnb3RpYXRlVXJsID0gdGhpcy5fcmVzb2x2ZU5lZ290aWF0ZVVybCh1cmwpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTZW5kaW5nIG5lZ290aWF0aW9uIHJlcXVlc3Q6ICR7bmVnb3RpYXRlVXJsfS5gKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2h0dHBDbGllbnQucG9zdChuZWdvdGlhdGVVcmwsIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMsIC4uLnRoaXMuX29wdGlvbnMuaGVhZGVycyB9LFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy5fb3B0aW9ucy50aW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLl9vcHRpb25zLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgc3RhdHVzIGNvZGUgcmV0dXJuZWQgZnJvbSBuZWdvdGlhdGUgJyR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0nYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5lZ290aWF0ZVJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50KTtcclxuICAgICAgICAgICAgaWYgKCFuZWdvdGlhdGVSZXNwb25zZS5uZWdvdGlhdGVWZXJzaW9uIHx8IG5lZ290aWF0ZVJlc3BvbnNlLm5lZ290aWF0ZVZlcnNpb24gPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOZWdvdGlhdGUgdmVyc2lvbiAwIGRvZXNuJ3QgdXNlIGNvbm5lY3Rpb25Ub2tlblxyXG4gICAgICAgICAgICAgICAgLy8gU28gd2Ugc2V0IGl0IGVxdWFsIHRvIGNvbm5lY3Rpb25JZCBzbyBhbGwgb3VyIGxvZ2ljIGNhbiB1c2UgY29ubmVjdGlvblRva2VuIHdpdGhvdXQgYmVpbmcgYXdhcmUgb2YgdGhlIG5lZ290aWF0ZSB2ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uVG9rZW4gPSBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5lZ290aWF0ZVJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJGYWlsZWQgdG8gY29tcGxldGUgbmVnb3RpYXRpb24gd2l0aCB0aGUgc2VydmVyOiBcIiArIGU7XHJcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgSHR0cEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zdGF0dXNDb2RlID09PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgKyBcIiBFaXRoZXIgdGhpcyBpcyBub3QgYSBTaWduYWxSIGVuZHBvaW50IG9yIHRoZXJlIGlzIGEgcHJveHkgYmxvY2tpbmcgdGhlIGNvbm5lY3Rpb24uXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBGYWlsZWRUb05lZ290aWF0ZVdpdGhTZXJ2ZXJFcnJvcihlcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlQ29ubmVjdFVybCh1cmwsIGNvbm5lY3Rpb25Ub2tlbikge1xyXG4gICAgICAgIGlmICghY29ubmVjdGlvblRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmwgKyAodXJsLmluZGV4T2YoXCI/XCIpID09PSAtMSA/IFwiP1wiIDogXCImXCIpICsgYGlkPSR7Y29ubmVjdGlvblRva2VufWA7XHJcbiAgICB9XHJcbiAgICBhc3luYyBfY3JlYXRlVHJhbnNwb3J0KHVybCwgcmVxdWVzdGVkVHJhbnNwb3J0LCBuZWdvdGlhdGVSZXNwb25zZSwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICBsZXQgY29ubmVjdFVybCA9IHRoaXMuX2NyZWF0ZUNvbm5lY3RVcmwodXJsLCBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uVG9rZW4pO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0lUcmFuc3BvcnQocmVxdWVzdGVkVHJhbnNwb3J0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gd2FzIHByb3ZpZGVkIGFuIGluc3RhbmNlIG9mIElUcmFuc3BvcnQsIHVzaW5nIHRoYXQgZGlyZWN0bHkuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHJlcXVlc3RlZFRyYW5zcG9ydDtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRUcmFuc3BvcnQoY29ubmVjdFVybCwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25JZCA9IG5lZ290aWF0ZVJlc3BvbnNlLmNvbm5lY3Rpb25JZDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cmFuc3BvcnRFeGNlcHRpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0cyA9IG5lZ290aWF0ZVJlc3BvbnNlLmF2YWlsYWJsZVRyYW5zcG9ydHMgfHwgW107XHJcbiAgICAgICAgbGV0IG5lZ290aWF0ZSA9IG5lZ290aWF0ZVJlc3BvbnNlO1xyXG4gICAgICAgIGZvciAoY29uc3QgZW5kcG9pbnQgb2YgdHJhbnNwb3J0cykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc3BvcnRPckVycm9yID0gdGhpcy5fcmVzb2x2ZVRyYW5zcG9ydE9yRXJyb3IoZW5kcG9pbnQsIHJlcXVlc3RlZFRyYW5zcG9ydCwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNwb3J0T3JFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgZXJyb3IgYW5kIGNvbnRpbnVlLCB3ZSBkb24ndCB3YW50IHRvIGNhdXNlIGEgcmUtbmVnb3RpYXRlIGluIHRoZXNlIGNhc2VzXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRFeGNlcHRpb25zLnB1c2goYCR7ZW5kcG9pbnQudHJhbnNwb3J0fSBmYWlsZWQ6YCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRFeGNlcHRpb25zLnB1c2godHJhbnNwb3J0T3JFcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5faXNJVHJhbnNwb3J0KHRyYW5zcG9ydE9yRXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydE9yRXJyb3I7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5lZ290aWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ290aWF0ZSA9IGF3YWl0IHRoaXMuX2dldE5lZ290aWF0aW9uUmVzcG9uc2UodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RVcmwgPSB0aGlzLl9jcmVhdGVDb25uZWN0VXJsKHVybCwgbmVnb3RpYXRlLmNvbm5lY3Rpb25Ub2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0VHJhbnNwb3J0KGNvbm5lY3RVcmwsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25JZCA9IG5lZ290aWF0ZS5jb25uZWN0aW9uSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEZhaWxlZCB0byBzdGFydCB0aGUgdHJhbnNwb3J0ICcke2VuZHBvaW50LnRyYW5zcG9ydH0nOiAke2V4fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5lZ290aWF0ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnRFeGNlcHRpb25zLnB1c2gobmV3IEZhaWxlZFRvU3RhcnRUcmFuc3BvcnRFcnJvcihgJHtlbmRwb2ludC50cmFuc3BvcnR9IGZhaWxlZDogJHtleH1gLCBIdHRwVHJhbnNwb3J0VHlwZVtlbmRwb2ludC50cmFuc3BvcnRdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gXCJDb25uZWN0aW5nXCIgLyogQ29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJGYWlsZWQgdG8gc2VsZWN0IHRyYW5zcG9ydCBiZWZvcmUgc3RvcCgpIHdhcyBjYWxsZWQuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zcG9ydEV4Y2VwdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9ycyhgVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIHNlcnZlciB3aXRoIGFueSBvZiB0aGUgYXZhaWxhYmxlIHRyYW5zcG9ydHMuICR7dHJhbnNwb3J0RXhjZXB0aW9ucy5qb2luKFwiIFwiKX1gLCB0cmFuc3BvcnRFeGNlcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJOb25lIG9mIHRoZSB0cmFuc3BvcnRzIHN1cHBvcnRlZCBieSB0aGUgY2xpZW50IGFyZSBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlci5cIikpO1xyXG4gICAgfVxyXG4gICAgX2NvbnN0cnVjdFRyYW5zcG9ydCh0cmFuc3BvcnQpIHtcclxuICAgICAgICBzd2l0Y2ggKHRyYW5zcG9ydCkge1xyXG4gICAgICAgICAgICBjYXNlIEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHM6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMuV2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ1dlYlNvY2tldCcgaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIGVudmlyb25tZW50LlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViU29ja2V0VHJhbnNwb3J0KHRoaXMuX2h0dHBDbGllbnQsIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSwgdGhpcy5fbG9nZ2VyLCB0aGlzLl9vcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50LCB0aGlzLl9vcHRpb25zLldlYlNvY2tldCwgdGhpcy5fb3B0aW9ucy5oZWFkZXJzIHx8IHt9KTtcclxuICAgICAgICAgICAgY2FzZSBIdHRwVHJhbnNwb3J0VHlwZS5TZXJ2ZXJTZW50RXZlbnRzOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLkV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ0V2ZW50U291cmNlJyBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0KHRoaXMuX2h0dHBDbGllbnQsIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSwgdGhpcy5fbG9nZ2VyLCB0aGlzLl9vcHRpb25zKTtcclxuICAgICAgICAgICAgY2FzZSBIdHRwVHJhbnNwb3J0VHlwZS5Mb25nUG9sbGluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9uZ1BvbGxpbmdUcmFuc3BvcnQodGhpcy5faHR0cENsaWVudCwgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5LCB0aGlzLl9sb2dnZXIsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHRyYW5zcG9ydDogJHt0cmFuc3BvcnR9LmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9zdGFydFRyYW5zcG9ydCh1cmwsIHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQub25yZWNlaXZlID0gdGhpcy5vbnJlY2VpdmU7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQub25jbG9zZSA9IChlKSA9PiB0aGlzLl9zdG9wQ29ubmVjdGlvbihlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuY29ubmVjdCh1cmwsIHRyYW5zZmVyRm9ybWF0KTtcclxuICAgIH1cclxuICAgIF9yZXNvbHZlVHJhbnNwb3J0T3JFcnJvcihlbmRwb2ludCwgcmVxdWVzdGVkVHJhbnNwb3J0LCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zcG9ydCA9IEh0dHBUcmFuc3BvcnRUeXBlW2VuZHBvaW50LnRyYW5zcG9ydF07XHJcbiAgICAgICAgaWYgKHRyYW5zcG9ydCA9PT0gbnVsbCB8fCB0cmFuc3BvcnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgU2tpcHBpbmcgdHJhbnNwb3J0ICcke2VuZHBvaW50LnRyYW5zcG9ydH0nIGJlY2F1c2UgaXQgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGNsaWVudC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgU2tpcHBpbmcgdHJhbnNwb3J0ICcke2VuZHBvaW50LnRyYW5zcG9ydH0nIGJlY2F1c2UgaXQgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGNsaWVudC5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc3BvcnRNYXRjaGVzKHJlcXVlc3RlZFRyYW5zcG9ydCwgdHJhbnNwb3J0KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmZXJGb3JtYXRzID0gZW5kcG9pbnQudHJhbnNmZXJGb3JtYXRzLm1hcCgocykgPT4gVHJhbnNmZXJGb3JtYXRbc10pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0cy5pbmRleE9mKHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0cmFuc3BvcnQgPT09IEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHMgJiYgIXRoaXMuX29wdGlvbnMuV2ViU29ja2V0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodHJhbnNwb3J0ID09PSBIdHRwVHJhbnNwb3J0VHlwZS5TZXJ2ZXJTZW50RXZlbnRzICYmICF0aGlzLl9vcHRpb25zLkV2ZW50U291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgU2tpcHBpbmcgdHJhbnNwb3J0ICcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19JyBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBlbnZpcm9ubWVudC4nYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVW5zdXBwb3J0ZWRUcmFuc3BvcnRFcnJvcihgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nIGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBlbnZpcm9ubWVudC5gLCB0cmFuc3BvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYFNlbGVjdGluZyB0cmFuc3BvcnQgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nLmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnN0cnVjdFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYFNraXBwaW5nIHRyYW5zcG9ydCAnJHtIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdfScgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdXBwb3J0IHRoZSByZXF1ZXN0ZWQgdHJhbnNmZXIgZm9ybWF0ICcke1RyYW5zZmVyRm9ybWF0W3JlcXVlc3RlZFRyYW5zZmVyRm9ybWF0XX0nLmApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYCcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19JyBkb2VzIG5vdCBzdXBwb3J0ICR7VHJhbnNmZXJGb3JtYXRbcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXRdfS5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTa2lwcGluZyB0cmFuc3BvcnQgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nIGJlY2F1c2UgaXQgd2FzIGRpc2FibGVkIGJ5IHRoZSBjbGllbnQuYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERpc2FibGVkVHJhbnNwb3J0RXJyb3IoYCcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19JyBpcyBkaXNhYmxlZCBieSB0aGUgY2xpZW50LmAsIHRyYW5zcG9ydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaXNJVHJhbnNwb3J0KHRyYW5zcG9ydCkge1xyXG4gICAgICAgIHJldHVybiB0cmFuc3BvcnQgJiYgdHlwZW9mICh0cmFuc3BvcnQpID09PSBcIm9iamVjdFwiICYmIFwiY29ubmVjdFwiIGluIHRyYW5zcG9ydDtcclxuICAgIH1cclxuICAgIF9zdG9wQ29ubmVjdGlvbihlcnJvcikge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBIdHRwQ29ubmVjdGlvbi5zdG9wQ29ubmVjdGlvbigke2Vycm9yfSkgY2FsbGVkIHdoaWxlIGluIHN0YXRlICR7dGhpcy5fY29ubmVjdGlvblN0YXRlfS5gKTtcclxuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgc3RvcEVycm9yLCBpdCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIGVycm9yIGZyb20gdGhlIHRyYW5zcG9ydFxyXG4gICAgICAgIGVycm9yID0gdGhpcy5fc3RvcEVycm9yIHx8IGVycm9yO1xyXG4gICAgICAgIHRoaXMuX3N0b3BFcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wQ29ubmVjdGlvbigke2Vycm9yfSkgd2FzIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJDb25uZWN0aW5nXCIgLyogQ29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3BDb25uZWN0aW9uKCR7ZXJyb3J9KSB3YXMgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIHN0aWxsIGluIHRoZSBjb25uZWN0aW5nIHN0YXRlLmApO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEh0dHBDb25uZWN0aW9uLnN0b3BDb25uZWN0aW9uKCR7ZXJyb3J9KSB3YXMgY2FsbGVkIHdoaWxlIHRoZSBjb25uZWN0aW9uIGlzIHN0aWxsIGluIHRoZSBjb25uZWN0aW5nIHN0YXRlLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovKSB7XHJcbiAgICAgICAgICAgIC8vIEEgY2FsbCB0byBzdG9wKCkgaW5kdWNlZCB0aGlzIGNhbGwgdG8gc3RvcENvbm5lY3Rpb24gYW5kIG5lZWRzIHRvIGJlIGNvbXBsZXRlZC5cclxuICAgICAgICAgICAgLy8gQW55IHN0b3AoKSBhd2FpdGVycyB3aWxsIGJlIHNjaGVkdWxlZCB0byBjb250aW51ZSBhZnRlciB0aGUgb25jbG9zZSBjYWxsYmFjayBmaXJlcy5cclxuICAgICAgICAgICAgdGhpcy5fc3RvcFByb21pc2VSZXNvbHZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYENvbm5lY3Rpb24gZGlzY29ubmVjdGVkIHdpdGggZXJyb3IgJyR7ZXJyb3J9Jy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiQ29ubmVjdGlvbiBkaXNjb25uZWN0ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2VuZFF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRRdWV1ZS5zdG9wKCkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBUcmFuc3BvcnRTZW5kUXVldWUuc3RvcCgpIHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRRdWV1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uSWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi87XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNsb3NlKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEh0dHBDb25uZWN0aW9uLm9uY2xvc2UoJHtlcnJvcn0pIHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZXNvbHZlVXJsKHVybCkge1xyXG4gICAgICAgIC8vIHN0YXJ0c1dpdGggaXMgbm90IHN1cHBvcnRlZCBpbiBJRVxyXG4gICAgICAgIGlmICh1cmwubGFzdEluZGV4T2YoXCJodHRwczovL1wiLCAwKSA9PT0gMCB8fCB1cmwubGFzdEluZGV4T2YoXCJodHRwOi8vXCIsIDApID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHJlc29sdmUgJyR7dXJsfScuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHVybCB0byB0aGUgaHJlZiBwcm9wZXJ5IG9mIGFuIGFuY2hvciB0YWcgaGFuZGxlcyBub3JtYWxpemF0aW9uXHJcbiAgICAgICAgLy8gZm9yIHVzLiBUaGVyZSBhcmUgMyBtYWluIGNhc2VzLlxyXG4gICAgICAgIC8vIDEuIFJlbGF0aXZlIHBhdGggbm9ybWFsaXphdGlvbiBlLmcgXCJiXCIgLT4gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYS9iXCJcclxuICAgICAgICAvLyAyLiBBYnNvbHV0ZSBwYXRoIG5vcm1hbGl6YXRpb24gZS5nIFwiL2EvYlwiIC0+IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2EvYlwiXHJcbiAgICAgICAgLy8gMy4gTmV0d29ya3BhdGggcmVmZXJlbmNlIG5vcm1hbGl6YXRpb24gZS5nIFwiLy9sb2NhbGhvc3Q6NTAwMC9hL2JcIiAtPiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hL2JcIlxyXG4gICAgICAgIGNvbnN0IGFUYWcgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgYVRhZy5ocmVmID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBOb3JtYWxpemluZyAnJHt1cmx9JyB0byAnJHthVGFnLmhyZWZ9Jy5gKTtcclxuICAgICAgICByZXR1cm4gYVRhZy5ocmVmO1xyXG4gICAgfVxyXG4gICAgX3Jlc29sdmVOZWdvdGlhdGVVcmwodXJsKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB1cmwuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgbGV0IG5lZ290aWF0ZVVybCA9IHVybC5zdWJzdHJpbmcoMCwgaW5kZXggPT09IC0xID8gdXJsLmxlbmd0aCA6IGluZGV4KTtcclxuICAgICAgICBpZiAobmVnb3RpYXRlVXJsW25lZ290aWF0ZVVybC5sZW5ndGggLSAxXSAhPT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgbmVnb3RpYXRlVXJsICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZWdvdGlhdGVVcmwgKz0gXCJuZWdvdGlhdGVcIjtcclxuICAgICAgICBuZWdvdGlhdGVVcmwgKz0gaW5kZXggPT09IC0xID8gXCJcIiA6IHVybC5zdWJzdHJpbmcoaW5kZXgpO1xyXG4gICAgICAgIGlmIChuZWdvdGlhdGVVcmwuaW5kZXhPZihcIm5lZ290aWF0ZVZlcnNpb25cIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIG5lZ290aWF0ZVVybCArPSBpbmRleCA9PT0gLTEgPyBcIj9cIiA6IFwiJlwiO1xyXG4gICAgICAgICAgICBuZWdvdGlhdGVVcmwgKz0gXCJuZWdvdGlhdGVWZXJzaW9uPVwiICsgdGhpcy5fbmVnb3RpYXRlVmVyc2lvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5lZ290aWF0ZVVybDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0cmFuc3BvcnRNYXRjaGVzKHJlcXVlc3RlZFRyYW5zcG9ydCwgYWN0dWFsVHJhbnNwb3J0KSB7XHJcbiAgICByZXR1cm4gIXJlcXVlc3RlZFRyYW5zcG9ydCB8fCAoKGFjdHVhbFRyYW5zcG9ydCAmIHJlcXVlc3RlZFRyYW5zcG9ydCkgIT09IDApO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgVHJhbnNwb3J0U2VuZFF1ZXVlIHtcclxuICAgIGNvbnN0cnVjdG9yKF90cmFuc3BvcnQpIHtcclxuICAgICAgICB0aGlzLl90cmFuc3BvcnQgPSBfdHJhbnNwb3J0O1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2V4ZWN1dGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc2VuZEJ1ZmZlcmVkRGF0YSA9IG5ldyBQcm9taXNlU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0UmVzdWx0ID0gbmV3IFByb21pc2VTb3VyY2UoKTtcclxuICAgICAgICB0aGlzLl9zZW5kTG9vcFByb21pc2UgPSB0aGlzLl9zZW5kTG9vcCgpO1xyXG4gICAgfVxyXG4gICAgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyRGF0YShkYXRhKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zcG9ydFJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc3BvcnRSZXN1bHQgPSBuZXcgUHJvbWlzZVNvdXJjZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNwb3J0UmVzdWx0LnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX2V4ZWN1dGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NlbmRCdWZmZXJlZERhdGEucmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZW5kTG9vcFByb21pc2U7XHJcbiAgICB9XHJcbiAgICBfYnVmZmVyRGF0YShkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlci5sZW5ndGggJiYgdHlwZW9mICh0aGlzLl9idWZmZXJbMF0pICE9PSB0eXBlb2YgKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgZGF0YSB0byBiZSBvZiB0eXBlICR7dHlwZW9mICh0aGlzLl9idWZmZXIpfSBidXQgd2FzIG9mIHR5cGUgJHt0eXBlb2YgKGRhdGEpfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9idWZmZXIucHVzaChkYXRhKTtcclxuICAgICAgICB0aGlzLl9zZW5kQnVmZmVyZWREYXRhLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIF9zZW5kTG9vcCgpIHtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zZW5kQnVmZmVyZWREYXRhLnByb21pc2U7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZXhlY3V0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdHJhbnNwb3J0UmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNwb3J0UmVzdWx0LnJlamVjdChcIkNvbm5lY3Rpb24gc3RvcHBlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zZW5kQnVmZmVyZWREYXRhID0gbmV3IFByb21pc2VTb3VyY2UoKTtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNwb3J0UmVzdWx0ID0gdGhpcy5fdHJhbnNwb3J0UmVzdWx0O1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc3BvcnRSZXN1bHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0eXBlb2YgKHRoaXMuX2J1ZmZlclswXSkgPT09IFwic3RyaW5nXCIgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyLmpvaW4oXCJcIikgOlxyXG4gICAgICAgICAgICAgICAgVHJhbnNwb3J0U2VuZFF1ZXVlLl9jb25jYXRCdWZmZXJzKHRoaXMuX2J1ZmZlcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlci5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fdHJhbnNwb3J0LnNlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRSZXN1bHQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0UmVzdWx0LnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgX2NvbmNhdEJ1ZmZlcnMoYXJyYXlCdWZmZXJzKSB7XHJcbiAgICAgICAgY29uc3QgdG90YWxMZW5ndGggPSBhcnJheUJ1ZmZlcnMubWFwKChiKSA9PiBiLmJ5dGVMZW5ndGgpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyYXlCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQobmV3IFVpbnQ4QXJyYXkoaXRlbSksIG9mZnNldCk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBpdGVtLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQuYnVmZmVyO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFByb21pc2VTb3VyY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gW3RoaXMuX3Jlc29sdmVyLCB0aGlzLl9yZWplY3Rlcl0gPSBbcmVzb2x2ZSwgcmVqZWN0XSk7XHJcbiAgICB9XHJcbiAgICByZXNvbHZlKCkge1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmVyKCk7XHJcbiAgICB9XHJcbiAgICByZWplY3QocmVhc29uKSB7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0ZXIocmVhc29uKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdHRwQ29ubmVjdGlvbi5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEhhbmRzaGFrZVByb3RvY29sIH0gZnJvbSBcIi4vSGFuZHNoYWtlUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9JSHViUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9TdWJqZWN0XCI7XHJcbmltcG9ydCB7IEFyZywgZ2V0RXJyb3JTdHJpbmcsIFBsYXRmb3JtIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuY29uc3QgREVGQVVMVF9USU1FT1VUX0lOX01TID0gMzAgKiAxMDAwO1xyXG5jb25zdCBERUZBVUxUX1BJTkdfSU5URVJWQUxfSU5fTVMgPSAxNSAqIDEwMDA7XHJcbi8qKiBEZXNjcmliZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHtAbGluayBIdWJDb25uZWN0aW9ufSB0byB0aGUgc2VydmVyLiAqL1xyXG5leHBvcnQgdmFyIEh1YkNvbm5lY3Rpb25TdGF0ZTtcclxuKGZ1bmN0aW9uIChIdWJDb25uZWN0aW9uU3RhdGUpIHtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiRGlzY29ubmVjdGVkXCJdID0gXCJEaXNjb25uZWN0ZWRcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgY29ubmVjdGluZy4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkNvbm5lY3RpbmdcIl0gPSBcIkNvbm5lY3RpbmdcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgY29ubmVjdGVkLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiQ29ubmVjdGVkXCJdID0gXCJDb25uZWN0ZWRcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGluZy4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkRpc2Nvbm5lY3RpbmdcIl0gPSBcIkRpc2Nvbm5lY3RpbmdcIjtcclxuICAgIC8qKiBUaGUgaHViIGNvbm5lY3Rpb24gaXMgcmVjb25uZWN0aW5nLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiUmVjb25uZWN0aW5nXCJdID0gXCJSZWNvbm5lY3RpbmdcIjtcclxufSkoSHViQ29ubmVjdGlvblN0YXRlIHx8IChIdWJDb25uZWN0aW9uU3RhdGUgPSB7fSkpO1xyXG4vKiogUmVwcmVzZW50cyBhIGNvbm5lY3Rpb24gdG8gYSBTaWduYWxSIEh1Yi4gKi9cclxuZXhwb3J0IGNsYXNzIEh1YkNvbm5lY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoY29ubmVjdGlvbiwgbG9nZ2VyLCBwcm90b2NvbCwgcmVjb25uZWN0UG9saWN5KSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dEtlZXBBbGl2ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fZnJlZXplRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBcIlRoZSBwYWdlIGlzIGJlaW5nIGZyb3plbiwgdGhpcyB3aWxsIGxpa2VseSBsZWFkIHRvIHRoZSBjb25uZWN0aW9uIGJlaW5nIGNsb3NlZCBhbmQgbWVzc2FnZXMgYmVpbmcgbG9zdC4gRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIHRoZSBkb2NzIGF0IGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2FzcG5ldC9jb3JlL3NpZ25hbHIvamF2YXNjcmlwdC1jbGllbnQjYnNsZWVwXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQoY29ubmVjdGlvbiwgXCJjb25uZWN0aW9uXCIpO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKGxvZ2dlciwgXCJsb2dnZXJcIik7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQocHJvdG9jb2wsIFwicHJvdG9jb2xcIik7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lb3V0SW5NaWxsaXNlY29uZHMgPSBERUZBVUxUX1RJTUVPVVRfSU5fTVM7XHJcbiAgICAgICAgdGhpcy5rZWVwQWxpdmVJbnRlcnZhbEluTWlsbGlzZWNvbmRzID0gREVGQVVMVF9QSU5HX0lOVEVSVkFMX0lOX01TO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLl9wcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0UG9saWN5ID0gcmVjb25uZWN0UG9saWN5O1xyXG4gICAgICAgIHRoaXMuX2hhbmRzaGFrZVByb3RvY29sID0gbmV3IEhhbmRzaGFrZVByb3RvY29sKCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9ucmVjZWl2ZSA9IChkYXRhKSA9PiB0aGlzLl9wcm9jZXNzSW5jb21pbmdEYXRhKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbmNsb3NlID0gKGVycm9yKSA9PiB0aGlzLl9jb25uZWN0aW9uQ2xvc2VkKGVycm9yKTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICB0aGlzLl9tZXRob2RzID0ge307XHJcbiAgICAgICAgdGhpcy5fY2xvc2VkQ2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nQ2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0ZWRDYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLl9pbnZvY2F0aW9uSWQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3JlY2VpdmVkSGFuZHNoYWtlUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY2FjaGVkUGluZ01lc3NhZ2UgPSB0aGlzLl9wcm90b2NvbC53cml0ZU1lc3NhZ2UoeyB0eXBlOiBNZXNzYWdlVHlwZS5QaW5nIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgLy8gVXNpbmcgYSBwdWJsaWMgc3RhdGljIGZhY3RvcnkgbWV0aG9kIG1lYW5zIHdlIGNhbiBoYXZlIGEgcHJpdmF0ZSBjb25zdHJ1Y3RvciBhbmQgYW4gX2ludGVybmFsX1xyXG4gICAgLy8gY3JlYXRlIG1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIGJ5IEh1YkNvbm5lY3Rpb25CdWlsZGVyLiBBbiBcImludGVybmFsXCIgY29uc3RydWN0b3Igd291bGQganVzdFxyXG4gICAgLy8gYmUgc3RyaXBwZWQgYXdheSBhbmQgdGhlICcuZC50cycgZmlsZSB3b3VsZCBoYXZlIG5vIGNvbnN0cnVjdG9yLCB3aGljaCBpcyBpbnRlcnByZXRlZCBhcyBhXHJcbiAgICAvLyBwdWJsaWMgcGFyYW1ldGVyLWxlc3MgY29uc3RydWN0b3IuXHJcbiAgICBzdGF0aWMgY3JlYXRlKGNvbm5lY3Rpb24sIGxvZ2dlciwgcHJvdG9jb2wsIHJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSHViQ29ubmVjdGlvbihjb25uZWN0aW9uLCBsb2dnZXIsIHByb3RvY29sLCByZWNvbm5lY3RQb2xpY3kpO1xyXG4gICAgfVxyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgc3RhdGUgb2YgdGhlIHtAbGluayBIdWJDb25uZWN0aW9ufSB0byB0aGUgc2VydmVyLiAqL1xyXG4gICAgZ2V0IHN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uU3RhdGU7XHJcbiAgICB9XHJcbiAgICAvKiogUmVwcmVzZW50cyB0aGUgY29ubmVjdGlvbiBpZCBvZiB0aGUge0BsaW5rIEh1YkNvbm5lY3Rpb259IG9uIHRoZSBzZXJ2ZXIuIFRoZSBjb25uZWN0aW9uIGlkIHdpbGwgYmUgbnVsbCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGVpdGhlclxyXG4gICAgICogIGluIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUgb3IgaWYgdGhlIG5lZ290aWF0aW9uIHN0ZXAgd2FzIHNraXBwZWQuXHJcbiAgICAgKi9cclxuICAgIGdldCBjb25uZWN0aW9uSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbiA/ICh0aGlzLmNvbm5lY3Rpb24uY29ubmVjdGlvbklkIHx8IG51bGwpIDogbnVsbDtcclxuICAgIH1cclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIHVybCBvZiB0aGUge0BsaW5rIEh1YkNvbm5lY3Rpb259IHRvIHRoZSBzZXJ2ZXIuICovXHJcbiAgICBnZXQgYmFzZVVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLmJhc2VVcmwgfHwgXCJcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhIG5ldyB1cmwgZm9yIHRoZSBIdWJDb25uZWN0aW9uLiBOb3RlIHRoYXQgdGhlIHVybCBjYW4gb25seSBiZSBjaGFuZ2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgaW4gZWl0aGVyIHRoZSBEaXNjb25uZWN0ZWQgb3JcclxuICAgICAqIFJlY29ubmVjdGluZyBzdGF0ZXMuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gY29ubmVjdCB0by5cclxuICAgICAqL1xyXG4gICAgc2V0IGJhc2VVcmwodXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZCAmJiB0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIEh1YkNvbm5lY3Rpb24gbXVzdCBiZSBpbiB0aGUgRGlzY29ubmVjdGVkIG9yIFJlY29ubmVjdGluZyBzdGF0ZSB0byBjaGFuZ2UgdGhlIHVybC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBIdWJDb25uZWN0aW9uIHVybCBtdXN0IGJlIGEgdmFsaWQgdXJsLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJhc2VVcmwgPSB1cmw7XHJcbiAgICB9XHJcbiAgICAvKiogU3RhcnRzIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBjb25uZWN0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBlc3RhYmxpc2hlZCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9zdGFydFByb21pc2UgPSB0aGlzLl9zdGFydFdpdGhTdGF0ZVRyYW5zaXRpb25zKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0UHJvbWlzZTtcclxuICAgIH1cclxuICAgIGFzeW5jIF9zdGFydFdpdGhTdGF0ZVRyYW5zaXRpb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzdGFydCBhIEh1YkNvbm5lY3Rpb24gdGhhdCBpcyBub3QgaW4gdGhlICdEaXNjb25uZWN0ZWQnIHN0YXRlLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0aW5nO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU3RhcnRpbmcgSHViQ29ubmVjdGlvbi5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRJbnRlcm5hbCgpO1xyXG4gICAgICAgICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMb2cgd2hlbiB0aGUgYnJvd3NlciBmcmVlemVzIHRoZSB0YWIgc28gdXNlcnMga25vdyB3aHkgdGhlaXIgY29ubmVjdGlvbiB1bmV4cGVjdGVkbHkgc3RvcHBlZCB3b3JraW5nXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZyZWV6ZVwiLCB0aGlzLl9mcmVlemVFdmVudExpc3RlbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiSHViQ29ubmVjdGlvbiBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZDtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYEh1YkNvbm5lY3Rpb24gZmFpbGVkIHRvIHN0YXJ0IHN1Y2Nlc3NmdWxseSBiZWNhdXNlIG9mIGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIF9zdGFydEludGVybmFsKCkge1xyXG4gICAgICAgIHRoaXMuX3N0b3BEdXJpbmdTdGFydEVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX3JlY2VpdmVkSGFuZHNoYWtlUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgICAgICAvLyBTZXQgdXAgdGhlIHByb21pc2UgYmVmb3JlIGFueSBjb25uZWN0aW9uIGlzIChyZSlzdGFydGVkIG90aGVyd2lzZSBpdCBjb3VsZCByYWNlIHdpdGggcmVjZWl2ZWQgbWVzc2FnZXNcclxuICAgICAgICBjb25zdCBoYW5kc2hha2VQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kc2hha2VSZXNvbHZlciA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlamVjdGVyID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdGlvbi5zdGFydCh0aGlzLl9wcm90b2NvbC50cmFuc2ZlckZvcm1hdCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZHNoYWtlUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgIHByb3RvY29sOiB0aGlzLl9wcm90b2NvbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5fcHJvdG9jb2wudmVyc2lvbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTZW5kaW5nIGhhbmRzaGFrZSByZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UodGhpcy5faGFuZHNoYWtlUHJvdG9jb2wud3JpdGVIYW5kc2hha2VSZXF1ZXN0KGhhbmRzaGFrZVJlcXVlc3QpKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYFVzaW5nIEh1YlByb3RvY29sICcke3RoaXMuX3Byb3RvY29sLm5hbWV9Jy5gKTtcclxuICAgICAgICAgICAgLy8gZGVmZW5zaXZlbHkgY2xlYW51cCB0aW1lb3V0IGluIGNhc2Ugd2UgcmVjZWl2ZSBhIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyIGJlZm9yZSB3ZSBmaW5pc2ggc3RhcnRcclxuICAgICAgICAgICAgdGhpcy5fY2xlYW51cFRpbWVvdXQoKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRUaW1lb3V0UGVyaW9kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0S2VlcEFsaXZlSW50ZXJ2YWwoKTtcclxuICAgICAgICAgICAgYXdhaXQgaGFuZHNoYWtlUHJvbWlzZTtcclxuICAgICAgICAgICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gY2hlY2sgdGhlIHN0b3BEdXJpbmdTdGFydEVycm9yIGluc3RlYWQgb2YganVzdCByZWx5aW5nIG9uIHRoZSBoYW5kc2hha2VQcm9taXNlXHJcbiAgICAgICAgICAgIC8vIGJlaW5nIHJlamVjdGVkIG9uIGNsb3NlLCBiZWNhdXNlIHRoaXMgY29udGludWF0aW9uIGNhbiBydW4gYWZ0ZXIgYm90aCB0aGUgaGFuZHNoYWtlIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgLy8gYW5kIHRoZSBjb25uZWN0aW9uIHdhcyBjbG9zZWQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gdGhyb3cgaW5zdGVhZCBvZiByZXR1cm5pbmcgYSByZWplY3RlZCBwcm9taXNlLCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gYWxsb3cgYW55IHN0YXRlXHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9ucyB0byBvY2N1ciBiZXR3ZWVuIG5vdyBhbmQgdGhlIGNhbGxpbmcgY29kZSBvYnNlcnZpbmcgdGhlIGV4Y2VwdGlvbnMuIFJldHVybmluZyBhIHJlamVjdGVkIHByb21pc2VcclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgY2F1c2UgdGhlIGNhbGxpbmcgY29udGludWF0aW9uIHRvIGdldCBzY2hlZHVsZWQgdG8gcnVuIGxhdGVyLlxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aHJvdy1saXRlcmFsXHJcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgSHViIGhhbmRzaGFrZSBmYWlsZWQgd2l0aCBlcnJvciAnJHtlfScgZHVyaW5nIHN0YXJ0KCkuIFN0b3BwaW5nIEh1YkNvbm5lY3Rpb24uYCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFudXBUaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFudXBQaW5nVGltZXIoKTtcclxuICAgICAgICAgICAgLy8gSHR0cENvbm5lY3Rpb24uc3RvcCgpIHNob3VsZCBub3QgY29tcGxldGUgdW50aWwgYWZ0ZXIgdGhlIG9uY2xvc2UgY2FsbGJhY2sgaXMgaW52b2tlZC5cclxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRyYW5zaXRpb24gdGhlIEh1YkNvbm5lY3Rpb24gdG8gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZSBiZWZvcmUgSHR0cENvbm5lY3Rpb24uc3RvcCgpIGNvbXBsZXRlcy5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0aW9uLnN0b3AoZSk7XHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIFN0b3BzIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBjb25uZWN0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB0ZXJtaW5hdGVkLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHN0b3AoKSB7XHJcbiAgICAgICAgLy8gQ2FwdHVyZSB0aGUgc3RhcnQgcHJvbWlzZSBiZWZvcmUgdGhlIGNvbm5lY3Rpb24gbWlnaHQgYmUgcmVzdGFydGVkIGluIGFuIG9uY2xvc2UgY2FsbGJhY2suXHJcbiAgICAgICAgY29uc3Qgc3RhcnRQcm9taXNlID0gdGhpcy5fc3RhcnRQcm9taXNlO1xyXG4gICAgICAgIHRoaXMuX3N0b3BQcm9taXNlID0gdGhpcy5fc3RvcEludGVybmFsKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc3RvcFByb21pc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gQXdhaXRpbmcgdW5kZWZpbmVkIGNvbnRpbnVlcyBpbW1lZGlhdGVseVxyXG4gICAgICAgICAgICBhd2FpdCBzdGFydFByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXhjZXB0aW9uIGlzIHJldHVybmVkIHRvIHRoZSB1c2VyIGFzIGEgcmVqZWN0ZWQgUHJvbWlzZSBmcm9tIHRoZSBzdGFydCBtZXRob2QuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3N0b3BJbnRlcm5hbChlcnJvcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYENhbGwgdG8gSHViQ29ubmVjdGlvbi5zdG9wKCR7ZXJyb3J9KSBpZ25vcmVkIGJlY2F1c2UgaXQgaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGVkIHN0YXRlLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3AoJHtlcnJvcn0pIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0aW5nIHN0YXRlLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RvcFByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0aW5nO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU3RvcHBpbmcgSHViQ29ubmVjdGlvbi5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdERlbGF5SGFuZGxlKSB7XHJcbiAgICAgICAgICAgIC8vIFdlJ3JlIGluIGEgcmVjb25uZWN0IGRlbGF5IHdoaWNoIG1lYW5zIHRoZSB1bmRlcmx5aW5nIGNvbm5lY3Rpb24gaXMgY3VycmVudGx5IGFscmVhZHkgc3RvcHBlZC5cclxuICAgICAgICAgICAgLy8gSnVzdCBjbGVhciB0aGUgaGFuZGxlIHRvIHN0b3AgdGhlIHJlY29ubmVjdCBsb29wICh3aGljaCBubyBvbmUgaXMgd2FpdGluZyBvbiB0aGFua2Z1bGx5KSBhbmRcclxuICAgICAgICAgICAgLy8gZmlyZSB0aGUgb25jbG9zZSBjYWxsYmFja3MuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBzdG9wcGVkIGR1cmluZyByZWNvbm5lY3QgZGVsYXkuIERvbmUgcmVjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JlY29ubmVjdERlbGF5SGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0RGVsYXlIYW5kbGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlQ2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXBQaW5nVGltZXIoKTtcclxuICAgICAgICB0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvciA9IGVycm9yIHx8IG5ldyBFcnJvcihcIlRoZSBjb25uZWN0aW9uIHdhcyBzdG9wcGVkIGJlZm9yZSB0aGUgaHViIGhhbmRzaGFrZSBjb3VsZCBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgLy8gSHR0cENvbm5lY3Rpb24uc3RvcCgpIHNob3VsZCBub3QgY29tcGxldGUgdW50aWwgYWZ0ZXIgZWl0aGVyIEh0dHBDb25uZWN0aW9uLnN0YXJ0KCkgZmFpbHNcclxuICAgICAgICAvLyBvciB0aGUgb25jbG9zZSBjYWxsYmFjayBpcyBpbnZva2VkLiBUaGUgb25jbG9zZSBjYWxsYmFjayB3aWxsIHRyYW5zaXRpb24gdGhlIEh1YkNvbm5lY3Rpb25cclxuICAgICAgICAvLyB0byB0aGUgZGlzY29ubmVjdGVkIHN0YXRlIGlmIG5lZWQgYmUgYmVmb3JlIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBjb21wbGV0ZXMuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zdG9wKGVycm9yKTtcclxuICAgIH1cclxuICAgIC8qKiBJbnZva2VzIGEgc3RyZWFtaW5nIGh1YiBtZXRob2Qgb24gdGhlIHNlcnZlciB1c2luZyB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIGFyZ3VtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZXBhcmFtIFQgVGhlIHR5cGUgb2YgdGhlIGl0ZW1zIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmVyIG1ldGhvZCB0byBpbnZva2UuXHJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBhcmdzIFRoZSBhcmd1bWVudHMgdXNlZCB0byBpbnZva2UgdGhlIHNlcnZlciBtZXRob2QuXHJcbiAgICAgKiBAcmV0dXJucyB7SVN0cmVhbVJlc3VsdDxUPn0gQW4gb2JqZWN0IHRoYXQgeWllbGRzIHJlc3VsdHMgZnJvbSB0aGUgc2VydmVyIGFzIHRoZXkgYXJlIHJlY2VpdmVkLlxyXG4gICAgICovXHJcbiAgICBzdHJlYW0obWV0aG9kTmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IFtzdHJlYW1zLCBzdHJlYW1JZHNdID0gdGhpcy5fcmVwbGFjZVN0cmVhbWluZ1BhcmFtcyhhcmdzKTtcclxuICAgICAgICBjb25zdCBpbnZvY2F0aW9uRGVzY3JpcHRvciA9IHRoaXMuX2NyZWF0ZVN0cmVhbUludm9jYXRpb24obWV0aG9kTmFtZSwgYXJncywgc3RyZWFtSWRzKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XHJcbiAgICAgICAgbGV0IHByb21pc2VRdWV1ZTtcclxuICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICBzdWJqZWN0LmNhbmNlbENhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxJbnZvY2F0aW9uID0gdGhpcy5fY3JlYXRlQ2FuY2VsSW52b2NhdGlvbihpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWQpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUXVldWUudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VuZFdpdGhQcm90b2NvbChjYW5jZWxJbnZvY2F0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXSA9IChpbnZvY2F0aW9uRXZlbnQsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW52b2NhdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnZvY2F0aW9uRXZlbnQgd2lsbCBub3QgYmUgbnVsbCB3aGVuIGFuIGVycm9yIGlzIG5vdCBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LnR5cGUgPT09IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuZXJyb3IobmV3IEVycm9yKGludm9jYXRpb25FdmVudC5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dCgoaW52b2NhdGlvbkV2ZW50Lml0ZW0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcHJvbWlzZVF1ZXVlID0gdGhpcy5fc2VuZFdpdGhQcm90b2NvbChpbnZvY2F0aW9uRGVzY3JpcHRvcilcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9sYXVuY2hTdHJlYW1zKHN0cmVhbXMsIHByb21pc2VRdWV1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XHJcbiAgICB9XHJcbiAgICBfc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX3Jlc2V0S2VlcEFsaXZlSW50ZXJ2YWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmQobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEganMgb2JqZWN0IHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUganMgb2JqZWN0IHRvIHNlcmlhbGl6ZSBhbmQgc2VuZC5cclxuICAgICAqL1xyXG4gICAgX3NlbmRXaXRoUHJvdG9jb2wobWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZW5kTWVzc2FnZSh0aGlzLl9wcm90b2NvbC53cml0ZU1lc3NhZ2UobWVzc2FnZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqIEludm9rZXMgYSBodWIgbWV0aG9kIG9uIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBhcmd1bWVudHMuIERvZXMgbm90IHdhaXQgZm9yIGEgcmVzcG9uc2UgZnJvbSB0aGUgcmVjZWl2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIFByb21pc2UgcmV0dXJuZWQgYnkgdGhpcyBtZXRob2QgcmVzb2x2ZXMgd2hlbiB0aGUgY2xpZW50IGhhcyBzZW50IHRoZSBpbnZvY2F0aW9uIHRvIHRoZSBzZXJ2ZXIuIFRoZSBzZXJ2ZXIgbWF5IHN0aWxsXHJcbiAgICAgKiBiZSBwcm9jZXNzaW5nIHRoZSBpbnZvY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIgbWV0aG9kIHRvIGludm9rZS5cclxuICAgICAqIEBwYXJhbSB7YW55W119IGFyZ3MgVGhlIGFyZ3VtZW50cyB1c2VkIHRvIGludm9rZSB0aGUgc2VydmVyIG1ldGhvZC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBpbnZvY2F0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzZW50LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHNlbmQobWV0aG9kTmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IFtzdHJlYW1zLCBzdHJlYW1JZHNdID0gdGhpcy5fcmVwbGFjZVN0cmVhbWluZ1BhcmFtcyhhcmdzKTtcclxuICAgICAgICBjb25zdCBzZW5kUHJvbWlzZSA9IHRoaXMuX3NlbmRXaXRoUHJvdG9jb2wodGhpcy5fY3JlYXRlSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCB0cnVlLCBzdHJlYW1JZHMpKTtcclxuICAgICAgICB0aGlzLl9sYXVuY2hTdHJlYW1zKHN0cmVhbXMsIHNlbmRQcm9taXNlKTtcclxuICAgICAgICByZXR1cm4gc2VuZFByb21pc2U7XHJcbiAgICB9XHJcbiAgICAvKiogSW52b2tlcyBhIGh1YiBtZXRob2Qgb24gdGhlIHNlcnZlciB1c2luZyB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIGFyZ3VtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgUHJvbWlzZSByZXR1cm5lZCBieSB0aGlzIG1ldGhvZCByZXNvbHZlcyB3aGVuIHRoZSBzZXJ2ZXIgaW5kaWNhdGVzIGl0IGhhcyBmaW5pc2hlZCBpbnZva2luZyB0aGUgbWV0aG9kLiBXaGVuIHRoZSBwcm9taXNlXHJcbiAgICAgKiByZXNvbHZlcywgdGhlIHNlcnZlciBoYXMgZmluaXNoZWQgaW52b2tpbmcgdGhlIG1ldGhvZC4gSWYgdGhlIHNlcnZlciBtZXRob2QgcmV0dXJucyBhIHJlc3VsdCwgaXQgaXMgcHJvZHVjZWQgYXMgdGhlIHJlc3VsdCBvZlxyXG4gICAgICogcmVzb2x2aW5nIHRoZSBQcm9taXNlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlcGFyYW0gVCBUaGUgZXhwZWN0ZWQgcmV0dXJuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmVyIG1ldGhvZCB0byBpbnZva2UuXHJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBhcmdzIFRoZSBhcmd1bWVudHMgdXNlZCB0byBpbnZva2UgdGhlIHNlcnZlciBtZXRob2QuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPn0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBzZXJ2ZXIgbWV0aG9kIChpZiBhbnkpLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGludm9rZShtZXRob2ROYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgW3N0cmVhbXMsIHN0cmVhbUlkc10gPSB0aGlzLl9yZXBsYWNlU3RyZWFtaW5nUGFyYW1zKGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IGludm9jYXRpb25EZXNjcmlwdG9yID0gdGhpcy5fY3JlYXRlSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCBmYWxzZSwgc3RyZWFtSWRzKTtcclxuICAgICAgICBjb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpbnZvY2F0aW9uSWQgd2lsbCBhbHdheXMgaGF2ZSBhIHZhbHVlIGZvciBhIG5vbi1ibG9ja2luZyBpbnZvY2F0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdID0gKGludm9jYXRpb25FdmVudCwgZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaW52b2NhdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52b2NhdGlvbkV2ZW50IHdpbGwgbm90IGJlIG51bGwgd2hlbiBhbiBlcnJvciBpcyBub3QgcGFzc2VkIHRvIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uRXZlbnQudHlwZSA9PT0gTWVzc2FnZVR5cGUuQ29tcGxldGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGludm9jYXRpb25FdmVudC5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbnZvY2F0aW9uRXZlbnQucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVW5leHBlY3RlZCBtZXNzYWdlIHR5cGU6ICR7aW52b2NhdGlvbkV2ZW50LnR5cGV9YCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZVF1ZXVlID0gdGhpcy5fc2VuZFdpdGhQcm90b2NvbChpbnZvY2F0aW9uRGVzY3JpcHRvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gaW52b2NhdGlvbklkIHdpbGwgYWx3YXlzIGhhdmUgYSB2YWx1ZSBmb3IgYSBub24tYmxvY2tpbmcgaW52b2NhdGlvblxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fbGF1bmNoU3RyZWFtcyhzdHJlYW1zLCBwcm9taXNlUXVldWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgaHViIG1ldGhvZCB3aXRoIHRoZSBzcGVjaWZpZWQgbWV0aG9kIG5hbWUgaXMgaW52b2tlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgaHViIG1ldGhvZCB0byBkZWZpbmUuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXdNZXRob2QgVGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHJhaXNlZCB3aGVuIHRoZSBodWIgbWV0aG9kIGlzIGludm9rZWQuXHJcbiAgICAgKi9cclxuICAgIG9uKG1ldGhvZE5hbWUsIG5ld01ldGhvZCkge1xyXG4gICAgICAgIGlmICghbWV0aG9kTmFtZSB8fCAhbmV3TWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZE5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX21ldGhvZHNbbWV0aG9kTmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQcmV2ZW50aW5nIGFkZGluZyB0aGUgc2FtZSBoYW5kbGVyIG11bHRpcGxlIHRpbWVzLlxyXG4gICAgICAgIGlmICh0aGlzLl9tZXRob2RzW21ldGhvZE5hbWVdLmluZGV4T2YobmV3TWV0aG9kKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9tZXRob2RzW21ldGhvZE5hbWVdLnB1c2gobmV3TWV0aG9kKTtcclxuICAgIH1cclxuICAgIG9mZihtZXRob2ROYW1lLCBtZXRob2QpIHtcclxuICAgICAgICBpZiAoIW1ldGhvZE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2ROYW1lID0gbWV0aG9kTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICBpZiAoIWhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVJZHggPSBoYW5kbGVycy5pbmRleE9mKG1ldGhvZCk7XHJcbiAgICAgICAgICAgIGlmIChyZW1vdmVJZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UocmVtb3ZlSWR4LCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQuIE9wdGlvbmFsbHkgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQgY29udGFpbmluZyB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGNvbm5lY3Rpb24gdG8gY2xvc2UgKGlmIGFueSkuXHJcbiAgICAgKi9cclxuICAgIG9uY2xvc2UoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2VkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBSZWdpc3RlcnMgYSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gc3RhcnRzIHJlY29ubmVjdGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIHN0YXJ0cyByZWNvbm5lY3RpbmcuIE9wdGlvbmFsbHkgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQgY29udGFpbmluZyB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGNvbm5lY3Rpb24gdG8gc3RhcnQgcmVjb25uZWN0aW5nIChpZiBhbnkpLlxyXG4gICAgICovXHJcbiAgICBvbnJlY29ubmVjdGluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmdDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBzdWNjZXNzZnVsbHkgcmVjb25uZWN0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSByZWNvbm5lY3RzLlxyXG4gICAgICovXHJcbiAgICBvbnJlY29ubmVjdGVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9wcm9jZXNzSW5jb21pbmdEYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5fcmVjZWl2ZWRIYW5kc2hha2VSZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fcHJvY2Vzc0hhbmRzaGFrZVJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWNlaXZlZEhhbmRzaGFrZVJlc3BvbnNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGF0YSBtYXkgaGF2ZSBhbGwgYmVlbiByZWFkIHdoZW4gcHJvY2Vzc2luZyBoYW5kc2hha2UgcmVzcG9uc2VcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgbWVzc2FnZXNcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLl9wcm90b2NvbC5wYXJzZU1lc3NhZ2VzKGRhdGEsIHRoaXMuX2xvZ2dlcik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkludm9jYXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZUNsaWVudE1ldGhvZChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5TdHJlYW1JdGVtOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ29tcGxldGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrc1ttZXNzYWdlLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gTWVzc2FnZVR5cGUuQ29tcGxldGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbWVzc2FnZS5pbnZvY2F0aW9uSWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYFN0cmVhbSBjYWxsYmFjayB0aHJldyBlcnJvcjogJHtnZXRFcnJvclN0cmluZyhlKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5QaW5nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBjYXJlIGFib3V0IHBpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ2xvc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJDbG9zZSBtZXNzYWdlIHJlY2VpdmVkIGZyb20gc2VydmVyLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBtZXNzYWdlLmVycm9yID8gbmV3IEVycm9yKFwiU2VydmVyIHJldHVybmVkIGFuIGVycm9yIG9uIGNsb3NlOiBcIiArIG1lc3NhZ2UuZXJyb3IpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5hbGxvd1JlY29ubmVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQgZmVlbHMgd3Jvbmcgbm90IHRvIGF3YWl0IGNvbm5lY3Rpb24uc3RvcCgpIGhlcmUsIGJ1dCBwcm9jZXNzSW5jb21pbmdEYXRhIGlzIGNhbGxlZCBhcyBwYXJ0IG9mIGFuIG9ucmVjZWl2ZSBjYWxsYmFjayB3aGljaCBpcyBub3QgYXN5bmMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGFscmVhZHkgdGhlIGJlaGF2aW9yIGZvciBzZXJ2ZXJUaW1lb3V0KCksIGFuZCBIdHRwQ29ubmVjdGlvbi5TdG9wKCkgc2hvdWxkIGNhdGNoIGFuZCBsb2cgYWxsIHBvc3NpYmxlIGV4Y2VwdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc3RvcChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW5ub3QgYXdhaXQgc3RvcEludGVybmFsKCkgaGVyZSwgYnV0IHN1YnNlcXVlbnQgY2FsbHMgdG8gc3RvcCgpIHdpbGwgYXdhaXQgdGhpcyBpZiBzdG9wSW50ZXJuYWwoKSBpcyBzdGlsbCBvbmdvaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcFByb21pc2UgPSB0aGlzLl9zdG9wSW50ZXJuYWwoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBJbnZhbGlkIG1lc3NhZ2UgdHlwZTogJHttZXNzYWdlLnR5cGV9LmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXNldFRpbWVvdXRQZXJpb2QoKTtcclxuICAgIH1cclxuICAgIF9wcm9jZXNzSGFuZHNoYWtlUmVzcG9uc2UoZGF0YSkge1xyXG4gICAgICAgIGxldCByZXNwb25zZU1lc3NhZ2U7XHJcbiAgICAgICAgbGV0IHJlbWFpbmluZ0RhdGE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgW3JlbWFpbmluZ0RhdGEsIHJlc3BvbnNlTWVzc2FnZV0gPSB0aGlzLl9oYW5kc2hha2VQcm90b2NvbC5wYXJzZUhhbmRzaGFrZVJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJFcnJvciBwYXJzaW5nIGhhbmRzaGFrZSByZXNwb25zZTogXCIgKyBlO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlamVjdGVyKGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXNwb25zZU1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiU2VydmVyIHJldHVybmVkIGhhbmRzaGFrZSBlcnJvcjogXCIgKyByZXNwb25zZU1lc3NhZ2UuZXJyb3I7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZHNoYWtlUmVqZWN0ZXIoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU2VydmVyIGhhbmRzaGFrZSBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlc29sdmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZ0RhdGE7XHJcbiAgICB9XHJcbiAgICBfcmVzZXRLZWVwQWxpdmVJbnRlcnZhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uLmZlYXR1cmVzLmluaGVyZW50S2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2V0IHRoZSB0aW1lIHdlIHdhbnQgdGhlIG5leHQga2VlcCBhbGl2ZSB0byBiZSBzZW50XHJcbiAgICAgICAgLy8gVGltZXIgd2lsbCBiZSBzZXR1cCBvbiBuZXh0IG1lc3NhZ2UgcmVjZWl2ZVxyXG4gICAgICAgIHRoaXMuX25leHRLZWVwQWxpdmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRoaXMua2VlcEFsaXZlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcztcclxuICAgICAgICB0aGlzLl9jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICB9XHJcbiAgICBfcmVzZXRUaW1lb3V0UGVyaW9kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0aW9uLmZlYXR1cmVzIHx8ICF0aGlzLmNvbm5lY3Rpb24uZmVhdHVyZXMuaW5oZXJlbnRLZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgLy8gU2V0IHRoZSB0aW1lb3V0IHRpbWVyXHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VydmVyVGltZW91dCgpLCB0aGlzLnNlcnZlclRpbWVvdXRJbk1pbGxpc2Vjb25kcyk7XHJcbiAgICAgICAgICAgIC8vIFNldCBrZWVwQWxpdmUgdGltZXIgaWYgdGhlcmUgaXNuJ3Qgb25lXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9waW5nU2VydmVySGFuZGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0UGluZyA9IHRoaXMuX25leHRLZWVwQWxpdmUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0UGluZyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0UGluZyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgdGltZXIgbmVlZHMgdG8gYmUgc2V0IGZyb20gYSBuZXR3b3JraW5nIGNhbGxiYWNrIHRvIGF2b2lkIENocm9tZSB0aW1lciB0aHJvdHRsaW5nIGZyb20gY2F1c2luZyB0aW1lcnMgdG8gcnVuIG9uY2UgYSBtaW51dGVcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BpbmdTZXJ2ZXJIYW5kbGUgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZSh0aGlzLl9jYWNoZWRQaW5nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY2FyZSBhYm91dCB0aGUgZXJyb3IuIEl0IHNob3VsZCBiZSBzZWVuIGVsc2V3aGVyZSBpbiB0aGUgY2xpZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGNvbm5lY3Rpb24gaXMgcHJvYmFibHkgaW4gYSBiYWQgb3IgY2xvc2VkIHN0YXRlIG5vdywgY2xlYW51cCB0aGUgdGltZXIgc28gaXQgc3RvcHMgdHJpZ2dlcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgbmV4dFBpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgc2VydmVyVGltZW91dCgpIHtcclxuICAgICAgICAvLyBUaGUgc2VydmVyIGhhc24ndCB0YWxrZWQgdG8gdXMgaW4gYSB3aGlsZS4gSXQgZG9lc24ndCBsaWtlIHVzIGFueW1vcmUgLi4uIDooXHJcbiAgICAgICAgLy8gVGVybWluYXRlIHRoZSBjb25uZWN0aW9uLCBidXQgd2UgZG9uJ3QgbmVlZCB0byB3YWl0IG9uIHRoZSBwcm9taXNlLiBUaGlzIGNvdWxkIHRyaWdnZXIgcmVjb25uZWN0aW5nLlxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc3RvcChuZXcgRXJyb3IoXCJTZXJ2ZXIgdGltZW91dCBlbGFwc2VkIHdpdGhvdXQgcmVjZWl2aW5nIGEgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIuXCIpKTtcclxuICAgIH1cclxuICAgIF9pbnZva2VDbGllbnRNZXRob2QoaW52b2NhdGlvbk1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCBtZXRob2RzID0gdGhpcy5fbWV0aG9kc1tpbnZvY2F0aW9uTWVzc2FnZS50YXJnZXQudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgaWYgKG1ldGhvZHMpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaCgobSkgPT4gbS5hcHBseSh0aGlzLCBpbnZvY2F0aW9uTWVzc2FnZS5hcmd1bWVudHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEEgY2FsbGJhY2sgZm9yIHRoZSBtZXRob2QgJHtpbnZvY2F0aW9uTWVzc2FnZS50YXJnZXQudG9Mb3dlckNhc2UoKX0gdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uTWVzc2FnZS5pbnZvY2F0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgbm90IHN1cHBvcnRlZCBpbiB2MS4gU28gd2UgcmV0dXJuIGFuIGVycm9yIHRvIGF2b2lkIGJsb2NraW5nIHRoZSBzZXJ2ZXIgd2FpdGluZyBmb3IgdGhlIHJlc3BvbnNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiU2VydmVyIHJlcXVlc3RlZCBhIHJlc3BvbnNlLCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgdmVyc2lvbiBvZiB0aGUgY2xpZW50LlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHdhaXQgb24gdGhlIHN0b3AgaXRzZWxmLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcFByb21pc2UgPSB0aGlzLl9zdG9wSW50ZXJuYWwobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgTm8gY2xpZW50IG1ldGhvZCB3aXRoIHRoZSBuYW1lICcke2ludm9jYXRpb25NZXNzYWdlLnRhcmdldH0nIGZvdW5kLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9jb25uZWN0aW9uQ2xvc2VkKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYEh1YkNvbm5lY3Rpb24uY29ubmVjdGlvbkNsb3NlZCgke2Vycm9yfSkgY2FsbGVkIHdoaWxlIGluIHN0YXRlICR7dGhpcy5fY29ubmVjdGlvblN0YXRlfS5gKTtcclxuICAgICAgICAvLyBUcmlnZ2VyaW5nIHRoaXMuaGFuZHNoYWtlUmVqZWN0ZXIgaXMgaW5zdWZmaWNpZW50IGJlY2F1c2UgaXQgY291bGQgYWxyZWFkeSBiZSByZXNvbHZlZCB3aXRob3V0IHRoZSBjb250aW51YXRpb24gaGF2aW5nIHJ1biB5ZXQuXHJcbiAgICAgICAgdGhpcy5fc3RvcER1cmluZ1N0YXJ0RXJyb3IgPSB0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvciB8fCBlcnJvciB8fCBuZXcgRXJyb3IoXCJUaGUgdW5kZXJseWluZyBjb25uZWN0aW9uIHdhcyBjbG9zZWQgYmVmb3JlIHRoZSBodWIgaGFuZHNoYWtlIGNvdWxkIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICAvLyBJZiB0aGUgaGFuZHNoYWtlIGlzIGluIHByb2dyZXNzLCBzdGFydCB3aWxsIGJlIHdhaXRpbmcgZm9yIHRoZSBoYW5kc2hha2UgcHJvbWlzZSwgc28gd2UgY29tcGxldGUgaXQuXHJcbiAgICAgICAgLy8gSWYgaXQgaGFzIGFscmVhZHkgY29tcGxldGVkLCB0aGlzIHNob3VsZCBqdXN0IG5vb3AuXHJcbiAgICAgICAgaWYgKHRoaXMuX2hhbmRzaGFrZVJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlc29sdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhbmNlbENhbGxiYWNrc1dpdGhFcnJvcihlcnJvciB8fCBuZXcgRXJyb3IoXCJJbnZvY2F0aW9uIGNhbmNlbGVkIGR1ZSB0byB0aGUgdW5kZXJseWluZyBjb25uZWN0aW9uIGJlaW5nIGNsb3NlZC5cIikpO1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXBUaW1lb3V0KCk7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlQ2xvc2UoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0ZWQgJiYgdGhpcy5fcmVjb25uZWN0UG9saWN5KSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlQ2xvc2UoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBub25lIG9mIHRoZSBhYm92ZSBpZiBjb25kaXRpb25zIHdlcmUgdHJ1ZSB3ZXJlIGNhbGxlZCB0aGUgSHViQ29ubmVjdGlvbiBtdXN0IGJlIGluIGVpdGhlcjpcclxuICAgICAgICAvLyAxLiBUaGUgQ29ubmVjdGluZyBzdGF0ZSBpbiB3aGljaCBjYXNlIHRoZSBoYW5kc2hha2VSZXNvbHZlciB3aWxsIGNvbXBsZXRlIGl0IGFuZCBzdG9wRHVyaW5nU3RhcnRFcnJvciB3aWxsIGZhaWwgaXQuXHJcbiAgICAgICAgLy8gMi4gVGhlIFJlY29ubmVjdGluZyBzdGF0ZSBpbiB3aGljaCBjYXNlIHRoZSBoYW5kc2hha2VSZXNvbHZlciB3aWxsIGNvbXBsZXRlIGl0IGFuZCBzdG9wRHVyaW5nU3RhcnRFcnJvciB3aWxsIGZhaWwgdGhlIGN1cnJlbnQgcmVjb25uZWN0IGF0dGVtcHRcclxuICAgICAgICAvLyAgICBhbmQgcG90ZW50aWFsbHkgY29udGludWUgdGhlIHJlY29ubmVjdCgpIGxvb3AuXHJcbiAgICAgICAgLy8gMy4gVGhlIERpc2Nvbm5lY3RlZCBzdGF0ZSBpbiB3aGljaCBjYXNlIHdlJ3JlIGFscmVhZHkgZG9uZS5cclxuICAgIH1cclxuICAgIF9jb21wbGV0ZUNsb3NlKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZnJlZXplXCIsIHRoaXMuX2ZyZWV6ZUV2ZW50TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZWRDYWxsYmFja3MuZm9yRWFjaCgoYykgPT4gYy5hcHBseSh0aGlzLCBbZXJyb3JdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBBbiBvbmNsb3NlIGNhbGxiYWNrIGNhbGxlZCB3aXRoIGVycm9yICcke2Vycm9yfScgdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgX3JlY29ubmVjdChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHJlY29ubmVjdFN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgIGxldCByZXRyeUVycm9yID0gZXJyb3IgIT09IHVuZGVmaW5lZCA/IGVycm9yIDogbmV3IEVycm9yKFwiQXR0ZW1wdGluZyB0byByZWNvbm5lY3QgZHVlIHRvIGEgdW5rbm93biBlcnJvci5cIik7XHJcbiAgICAgICAgbGV0IG5leHRSZXRyeURlbGF5ID0gdGhpcy5fZ2V0TmV4dFJldHJ5RGVsYXkocHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0cysrLCAwLCByZXRyeUVycm9yKTtcclxuICAgICAgICBpZiAobmV4dFJldHJ5RGVsYXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIG5vdCByZWNvbm5lY3RpbmcgYmVjYXVzZSB0aGUgSVJldHJ5UG9saWN5IHJldHVybmVkIG51bGwgb24gdGhlIGZpcnN0IHJlY29ubmVjdCBhdHRlbXB0LlwiKTtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGVDbG9zZShlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZztcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYENvbm5lY3Rpb24gcmVjb25uZWN0aW5nIGJlY2F1c2Ugb2YgZXJyb3IgJyR7ZXJyb3J9Jy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiQ29ubmVjdGlvbiByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW5nQ2FsbGJhY2tzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nQ2FsbGJhY2tzLmZvckVhY2goKGMpID0+IGMuYXBwbHkodGhpcywgW2Vycm9yXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgQW4gb25yZWNvbm5lY3RpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggZXJyb3IgJyR7ZXJyb3J9JyB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRXhpdCBlYXJseSBpZiBhbiBvbnJlY29ubmVjdGluZyBjYWxsYmFjayBjYWxsZWQgY29ubmVjdGlvbi5zdG9wKCkuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBsZWZ0IHRoZSByZWNvbm5lY3Rpbmcgc3RhdGUgaW4gb25yZWNvbm5lY3RpbmcgY2FsbGJhY2suIERvbmUgcmVjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAobmV4dFJldHJ5RGVsYXkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYFJlY29ubmVjdCBhdHRlbXB0IG51bWJlciAke3ByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHN9IHdpbGwgc3RhcnQgaW4gJHtuZXh0UmV0cnlEZWxheX0gbXMuYCk7XHJcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3REZWxheUhhbmRsZSA9IHNldFRpbWVvdXQocmVzb2x2ZSwgbmV4dFJldHJ5RGVsYXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0RGVsYXlIYW5kbGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBsZWZ0IHRoZSByZWNvbm5lY3Rpbmcgc3RhdGUgZHVyaW5nIHJlY29ubmVjdCBkZWxheS4gRG9uZSByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zdGFydEludGVybmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJIdWJDb25uZWN0aW9uIHJlY29ubmVjdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0ZWRDYWxsYmFja3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0ZWRDYWxsYmFja3MuZm9yRWFjaCgoYykgPT4gYy5hcHBseSh0aGlzLCBbdGhpcy5jb25uZWN0aW9uLmNvbm5lY3Rpb25JZF0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEFuIG9ucmVjb25uZWN0ZWQgY2FsbGJhY2sgY2FsbGVkIHdpdGggY29ubmVjdGlvbklkICcke3RoaXMuY29ubmVjdGlvbi5jb25uZWN0aW9uSWR9OyB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgUmVjb25uZWN0IGF0dGVtcHQgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBDb25uZWN0aW9uIG1vdmVkIHRvIHRoZSAnJHt0aGlzLl9jb25uZWN0aW9uU3RhdGV9JyBmcm9tIHRoZSByZWNvbm5lY3Rpbmcgc3RhdGUgZHVyaW5nIHJlY29ubmVjdCBhdHRlbXB0LiBEb25lIHJlY29ubmVjdGluZy5gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgVHlwZVNjcmlwdCBjb21waWxlciB0aGlua3MgdGhhdCBjb25uZWN0aW9uU3RhdGUgbXVzdCBiZSBDb25uZWN0ZWQgaGVyZS4gVGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgaXMgd3JvbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29tcGxldGVDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXRyeUVycm9yID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZSA6IG5ldyBFcnJvcihlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgbmV4dFJldHJ5RGVsYXkgPSB0aGlzLl9nZXROZXh0UmV0cnlEZWxheShwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzKyssIERhdGUubm93KCkgLSByZWNvbm5lY3RTdGFydFRpbWUsIHJldHJ5RXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBSZWNvbm5lY3QgcmV0cmllcyBoYXZlIGJlZW4gZXhoYXVzdGVkIGFmdGVyICR7RGF0ZS5ub3coKSAtIHJlY29ubmVjdFN0YXJ0VGltZX0gbXMgYW5kICR7cHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0c30gZmFpbGVkIGF0dGVtcHRzLiBDb25uZWN0aW9uIGRpc2Nvbm5lY3RpbmcuYCk7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgX2dldE5leHRSZXRyeURlbGF5KHByZXZpb3VzUmV0cnlDb3VudCwgZWxhcHNlZE1pbGxpc2Vjb25kcywgcmV0cnlSZWFzb24pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0UG9saWN5Lm5leHRSZXRyeURlbGF5SW5NaWxsaXNlY29uZHMoe1xyXG4gICAgICAgICAgICAgICAgZWxhcHNlZE1pbGxpc2Vjb25kcyxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUmV0cnlDb3VudCxcclxuICAgICAgICAgICAgICAgIHJldHJ5UmVhc29uLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYElSZXRyeVBvbGljeS5uZXh0UmV0cnlEZWxheUluTWlsbGlzZWNvbmRzKCR7cHJldmlvdXNSZXRyeUNvdW50fSwgJHtlbGFwc2VkTWlsbGlzZWNvbmRzfSkgdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfY2FuY2VsQ2FsbGJhY2tzV2l0aEVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGNhbGxiYWNrcylcclxuICAgICAgICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrc1trZXldO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgU3RyZWFtICdlcnJvcicgY2FsbGJhY2sgY2FsbGVkIHdpdGggJyR7ZXJyb3J9JyB0aHJldyBlcnJvcjogJHtnZXRFcnJvclN0cmluZyhlKX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2NsZWFudXBQaW5nVGltZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BpbmdTZXJ2ZXJIYW5kbGUpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3BpbmdTZXJ2ZXJIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9waW5nU2VydmVySGFuZGxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9jbGVhbnVwVGltZW91dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZW91dEhhbmRsZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dEhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUludm9jYXRpb24obWV0aG9kTmFtZSwgYXJncywgbm9uYmxvY2tpbmcsIHN0cmVhbUlkcykge1xyXG4gICAgICAgIGlmIChub25ibG9ja2luZykge1xyXG4gICAgICAgICAgICBpZiAoc3RyZWFtSWRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaW52b2NhdGlvbklkID0gdGhpcy5faW52b2NhdGlvbklkO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnZvY2F0aW9uSWQrKztcclxuICAgICAgICAgICAgaWYgKHN0cmVhbUlkcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGludm9jYXRpb25JZDogaW52b2NhdGlvbklkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGludm9jYXRpb25JZDogaW52b2NhdGlvbklkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkludm9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2xhdW5jaFN0cmVhbXMoc3RyZWFtcywgcHJvbWlzZVF1ZXVlKSB7XHJcbiAgICAgICAgaWYgKHN0cmVhbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3luY2hyb25pemUgc3RyZWFtIGRhdGEgc28gdGhleSBhcnJpdmUgaW4tb3JkZXIgb24gdGhlIHNlcnZlclxyXG4gICAgICAgIGlmICghcHJvbWlzZVF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZSB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgdGhlIGtleXMgYXJlIHRoZSBzdHJlYW0gaWRzXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxyXG4gICAgICAgIGZvciAoY29uc3Qgc3RyZWFtSWQgaW4gc3RyZWFtcykge1xyXG4gICAgICAgICAgICBzdHJlYW1zW3N0cmVhbUlkXS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbigoKSA9PiB0aGlzLl9zZW5kV2l0aFByb3RvY29sKHRoaXMuX2NyZWF0ZUNvbXBsZXRpb25NZXNzYWdlKHN0cmVhbUlkKSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyICYmIGVyci50b1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJVbmtub3duIGVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IHByb21pc2VRdWV1ZS50aGVuKCgpID0+IHRoaXMuX3NlbmRXaXRoUHJvdG9jb2wodGhpcy5fY3JlYXRlQ29tcGxldGlvbk1lc3NhZ2Uoc3RyZWFtSWQsIG1lc3NhZ2UpKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV4dDogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbigoKSA9PiB0aGlzLl9zZW5kV2l0aFByb3RvY29sKHRoaXMuX2NyZWF0ZVN0cmVhbUl0ZW1NZXNzYWdlKHN0cmVhbUlkLCBpdGVtKSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlcGxhY2VTdHJlYW1pbmdQYXJhbXMoYXJncykge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbXMgPSBbXTtcclxuICAgICAgICBjb25zdCBzdHJlYW1JZHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYXJndW1lbnQgPSBhcmdzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNPYnNlcnZhYmxlKGFyZ3VtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFtSWQgPSB0aGlzLl9pbnZvY2F0aW9uSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZvY2F0aW9uSWQrKztcclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzdHJlYW0gZm9yIGxhdGVyIHVzZVxyXG4gICAgICAgICAgICAgICAgc3RyZWFtc1tzdHJlYW1JZF0gPSBhcmd1bWVudDtcclxuICAgICAgICAgICAgICAgIHN0cmVhbUlkcy5wdXNoKHN0cmVhbUlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHN0cmVhbSBmcm9tIGFyZ3NcclxuICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbc3RyZWFtcywgc3RyZWFtSWRzXTtcclxuICAgIH1cclxuICAgIF9pc09ic2VydmFibGUoYXJnKSB7XHJcbiAgICAgICAgLy8gVGhpcyBhbGxvd3Mgb3RoZXIgc3RyZWFtIGltcGxlbWVudGF0aW9ucyB0byBqdXN0IHdvcmsgKGxpa2UgcnhqcylcclxuICAgICAgICByZXR1cm4gYXJnICYmIGFyZy5zdWJzY3JpYmUgJiYgdHlwZW9mIGFyZy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIH1cclxuICAgIF9jcmVhdGVTdHJlYW1JbnZvY2F0aW9uKG1ldGhvZE5hbWUsIGFyZ3MsIHN0cmVhbUlkcykge1xyXG4gICAgICAgIGNvbnN0IGludm9jYXRpb25JZCA9IHRoaXMuX2ludm9jYXRpb25JZDtcclxuICAgICAgICB0aGlzLl9pbnZvY2F0aW9uSWQrKztcclxuICAgICAgICBpZiAoc3RyZWFtSWRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpbnZvY2F0aW9uSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHN0cmVhbUlkcyxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlN0cmVhbUludm9jYXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpbnZvY2F0aW9uSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlN0cmVhbUludm9jYXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUNhbmNlbEludm9jYXRpb24oaWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5DYW5jZWxJbnZvY2F0aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlU3RyZWFtSXRlbU1lc3NhZ2UoaWQsIGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGlkLFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5TdHJlYW1JdGVtLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlQ29tcGxldGlvbk1lc3NhZ2UoaWQsIGVycm9yLCByZXN1bHQpIHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25JZDogaWQsXHJcbiAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuQ29tcGxldGlvbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh1YkNvbm5lY3Rpb24uanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBEZWZhdWx0UmVjb25uZWN0UG9saWN5IH0gZnJvbSBcIi4vRGVmYXVsdFJlY29ubmVjdFBvbGljeVwiO1xyXG5pbXBvcnQgeyBIdHRwQ29ubmVjdGlvbiB9IGZyb20gXCIuL0h0dHBDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IEh1YkNvbm5lY3Rpb24gfSBmcm9tIFwiLi9IdWJDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBKc29uSHViUHJvdG9jb2wgfSBmcm9tIFwiLi9Kc29uSHViUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTnVsbExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlcnNcIjtcclxuaW1wb3J0IHsgQXJnLCBDb25zb2xlTG9nZ2VyIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuY29uc3QgTG9nTGV2ZWxOYW1lTWFwcGluZyA9IHtcclxuICAgIHRyYWNlOiBMb2dMZXZlbC5UcmFjZSxcclxuICAgIGRlYnVnOiBMb2dMZXZlbC5EZWJ1ZyxcclxuICAgIGluZm86IExvZ0xldmVsLkluZm9ybWF0aW9uLFxyXG4gICAgaW5mb3JtYXRpb246IExvZ0xldmVsLkluZm9ybWF0aW9uLFxyXG4gICAgd2FybjogTG9nTGV2ZWwuV2FybmluZyxcclxuICAgIHdhcm5pbmc6IExvZ0xldmVsLldhcm5pbmcsXHJcbiAgICBlcnJvcjogTG9nTGV2ZWwuRXJyb3IsXHJcbiAgICBjcml0aWNhbDogTG9nTGV2ZWwuQ3JpdGljYWwsXHJcbiAgICBub25lOiBMb2dMZXZlbC5Ob25lLFxyXG59O1xyXG5mdW5jdGlvbiBwYXJzZUxvZ0xldmVsKG5hbWUpIHtcclxuICAgIC8vIENhc2UtaW5zZW5zaXRpdmUgbWF0Y2hpbmcgdmlhIGxvd2VyLWNhc2luZ1xyXG4gICAgLy8gWWVzLCBJIGtub3cgY2FzZS1mb2xkaW5nIGlzIGEgY29tcGxpY2F0ZWQgcHJvYmxlbSBpbiBVbmljb2RlLCBidXQgd2Ugb25seSBzdXBwb3J0XHJcbiAgICAvLyB0aGUgQVNDSUkgc3RyaW5ncyBkZWZpbmVkIGluIExvZ0xldmVsTmFtZU1hcHBpbmcgYW55d2F5LCBzbyBpdCdzIGZpbmUgLWFudXJzZS5cclxuICAgIGNvbnN0IG1hcHBpbmcgPSBMb2dMZXZlbE5hbWVNYXBwaW5nW25hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICBpZiAodHlwZW9mIG1hcHBpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gbWFwcGluZztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBsb2cgbGV2ZWw6ICR7bmFtZX1gKTtcclxuICAgIH1cclxufVxyXG4vKiogQSBidWlsZGVyIGZvciBjb25maWd1cmluZyB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh1YkNvbm5lY3Rpb259IGluc3RhbmNlcy4gKi9cclxuZXhwb3J0IGNsYXNzIEh1YkNvbm5lY3Rpb25CdWlsZGVyIHtcclxuICAgIGNvbmZpZ3VyZUxvZ2dpbmcobG9nZ2luZykge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKGxvZ2dpbmcsIFwibG9nZ2luZ1wiKTtcclxuICAgICAgICBpZiAoaXNMb2dnZXIobG9nZ2luZykpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgbG9nZ2luZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCBsb2dMZXZlbCA9IHBhcnNlTG9nTGV2ZWwobG9nZ2luZyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IENvbnNvbGVMb2dnZXIobG9nTGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgQ29uc29sZUxvZ2dlcihsb2dnaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB3aXRoVXJsKHVybCwgdHJhbnNwb3J0VHlwZU9yT3B0aW9ucykge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgQXJnLmlzTm90RW1wdHkodXJsLCBcInVybFwiKTtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICAvLyBGbG93LXR5cGluZyBrbm93cyB3aGVyZSBpdCdzIGF0LiBTaW5jZSBIdHRwVHJhbnNwb3J0VHlwZSBpcyBhIG51bWJlciBhbmQgSUh0dHBDb25uZWN0aW9uT3B0aW9ucyBpcyBndWFyYW50ZWVkXHJcbiAgICAgICAgLy8gdG8gYmUgYW4gb2JqZWN0LCB3ZSBrbm93IChhcyBkb2VzIFR5cGVTY3JpcHQpIHRoaXMgY29tcGFyaXNvbiBpcyBhbGwgd2UgbmVlZCB0byBmaWd1cmUgb3V0IHdoaWNoIG92ZXJsb2FkIHdhcyBjYWxsZWQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc3BvcnRUeXBlT3JPcHRpb25zID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cENvbm5lY3Rpb25PcHRpb25zID0geyAuLi50aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucywgLi4udHJhbnNwb3J0VHlwZU9yT3B0aW9ucyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogdHJhbnNwb3J0VHlwZU9yT3B0aW9ucyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKiogQ29uZmlndXJlcyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdWJDb25uZWN0aW9ufSB0byB1c2UgdGhlIHNwZWNpZmllZCBIdWIgUHJvdG9jb2wuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtJSHViUHJvdG9jb2x9IHByb3RvY29sIFRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLklIdWJQcm90b2NvbH0gaW1wbGVtZW50YXRpb24gdG8gdXNlLlxyXG4gICAgICovXHJcbiAgICB3aXRoSHViUHJvdG9jb2wocHJvdG9jb2wpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZChwcm90b2NvbCwgXCJwcm90b2NvbFwiKTtcclxuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2w7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB3aXRoQXV0b21hdGljUmVjb25uZWN0KHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSByZWNvbm5lY3RQb2xpY3kgaGFzIGFscmVhZHkgYmVlbiBzZXQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RQb2xpY3kgPSBuZXcgRGVmYXVsdFJlY29ubmVjdFBvbGljeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0UG9saWN5ID0gbmV3IERlZmF1bHRSZWNvbm5lY3RQb2xpY3kocmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdFBvbGljeSA9IHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3k7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIENyZWF0ZXMgYSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh1YkNvbm5lY3Rpb259IGZyb20gdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBzcGVjaWZpZWQgaW4gdGhpcyBidWlsZGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtIdWJDb25uZWN0aW9ufSBUaGUgY29uZmlndXJlZCB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh1YkNvbm5lY3Rpb259LlxyXG4gICAgICovXHJcbiAgICBidWlsZCgpIHtcclxuICAgICAgICAvLyBJZiBodHRwQ29ubmVjdGlvbk9wdGlvbnMgaGFzIGEgbG9nZ2VyLCB1c2UgaXQuIE90aGVyd2lzZSwgb3ZlcnJpZGUgaXQgd2l0aCB0aGUgb25lXHJcbiAgICAgICAgLy8gcHJvdmlkZWQgdG8gY29uZmlndXJlTG9nZ2VyXHJcbiAgICAgICAgY29uc3QgaHR0cENvbm5lY3Rpb25PcHRpb25zID0gdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMgfHwge307XHJcbiAgICAgICAgLy8gSWYgaXQncyAnbnVsbCcsIHRoZSB1c2VyICoqZXhwbGljaXRseSoqIGFza2VkIGZvciBudWxsLCBkb24ndCBtZXNzIHdpdGggaXQuXHJcbiAgICAgICAgaWYgKGh0dHBDb25uZWN0aW9uT3B0aW9ucy5sb2dnZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBJZiBvdXIgbG9nZ2VyIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGF0J3MgT0ssIHRoZSBIdHRwQ29ubmVjdGlvbiBjb25zdHJ1Y3RvciB3aWxsIGhhbmRsZSBpdC5cclxuICAgICAgICAgICAgaHR0cENvbm5lY3Rpb25PcHRpb25zLmxvZ2dlciA9IHRoaXMubG9nZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBOb3cgY3JlYXRlIHRoZSBjb25uZWN0aW9uXHJcbiAgICAgICAgaWYgKCF0aGlzLnVybCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ0h1YkNvbm5lY3Rpb25CdWlsZGVyLndpdGhVcmwnIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgYnVpbGRpbmcgdGhlIGNvbm5lY3Rpb24uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IEh0dHBDb25uZWN0aW9uKHRoaXMudXJsLCBodHRwQ29ubmVjdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBIdWJDb25uZWN0aW9uLmNyZWF0ZShjb25uZWN0aW9uLCB0aGlzLmxvZ2dlciB8fCBOdWxsTG9nZ2VyLmluc3RhbmNlLCB0aGlzLnByb3RvY29sIHx8IG5ldyBKc29uSHViUHJvdG9jb2woKSwgdGhpcy5yZWNvbm5lY3RQb2xpY3kpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzTG9nZ2VyKGxvZ2dlcikge1xyXG4gICAgcmV0dXJuIGxvZ2dlci5sb2cgIT09IHVuZGVmaW5lZDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdWJDb25uZWN0aW9uQnVpbGRlci5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8qKiBEZWZpbmVzIHRoZSB0eXBlIG9mIGEgSHViIE1lc3NhZ2UuICovXHJcbmV4cG9ydCB2YXIgTWVzc2FnZVR5cGU7XHJcbihmdW5jdGlvbiAoTWVzc2FnZVR5cGUpIHtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYW4gSW52b2NhdGlvbiBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkludm9jYXRpb25NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkludm9jYXRpb25cIl0gPSAxXSA9IFwiSW52b2NhdGlvblwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIFN0cmVhbUl0ZW0gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5TdHJlYW1JdGVtTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJTdHJlYW1JdGVtXCJdID0gMl0gPSBcIlN0cmVhbUl0ZW1cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBDb21wbGV0aW9uIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuQ29tcGxldGlvbk1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiQ29tcGxldGlvblwiXSA9IDNdID0gXCJDb21wbGV0aW9uXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgU3RyZWFtIEludm9jYXRpb24gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5TdHJlYW1JbnZvY2F0aW9uTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJTdHJlYW1JbnZvY2F0aW9uXCJdID0gNF0gPSBcIlN0cmVhbUludm9jYXRpb25cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBDYW5jZWwgSW52b2NhdGlvbiBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkNhbmNlbEludm9jYXRpb25NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkNhbmNlbEludm9jYXRpb25cIl0gPSA1XSA9IFwiQ2FuY2VsSW52b2NhdGlvblwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIFBpbmcgbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5QaW5nTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJQaW5nXCJdID0gNl0gPSBcIlBpbmdcIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBDbG9zZSBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkNsb3NlTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJDbG9zZVwiXSA9IDddID0gXCJDbG9zZVwiO1xyXG59KShNZXNzYWdlVHlwZSB8fCAoTWVzc2FnZVR5cGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JSHViUHJvdG9jb2wuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBUaGVzZSB2YWx1ZXMgYXJlIGRlc2lnbmVkIHRvIG1hdGNoIHRoZSBBU1AuTkVUIExvZyBMZXZlbHMgc2luY2UgdGhhdCdzIHRoZSBwYXR0ZXJuIHdlJ3JlIGVtdWxhdGluZyBoZXJlLlxyXG4vKiogSW5kaWNhdGVzIHRoZSBzZXZlcml0eSBvZiBhIGxvZyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBMb2cgTGV2ZWxzIGFyZSBvcmRlcmVkIGluIGluY3JlYXNpbmcgc2V2ZXJpdHkuIFNvIGBEZWJ1Z2AgaXMgbW9yZSBzZXZlcmUgdGhhbiBgVHJhY2VgLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIExvZ0xldmVsO1xyXG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciB2ZXJ5IGxvdyBzZXZlcml0eSBkaWFnbm9zdGljIG1lc3NhZ2VzLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJUcmFjZVwiXSA9IDBdID0gXCJUcmFjZVwiO1xyXG4gICAgLyoqIExvZyBsZXZlbCBmb3IgbG93IHNldmVyaXR5IGRpYWdub3N0aWMgbWVzc2FnZXMuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRlYnVnXCJdID0gMV0gPSBcIkRlYnVnXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBpbmZvcm1hdGlvbmFsIGRpYWdub3N0aWMgbWVzc2FnZXMuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkluZm9ybWF0aW9uXCJdID0gMl0gPSBcIkluZm9ybWF0aW9uXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBkaWFnbm9zdGljIG1lc3NhZ2VzIHRoYXQgaW5kaWNhdGUgYSBub24tZmF0YWwgcHJvYmxlbS4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiV2FybmluZ1wiXSA9IDNdID0gXCJXYXJuaW5nXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBkaWFnbm9zdGljIG1lc3NhZ2VzIHRoYXQgaW5kaWNhdGUgYSBmYWlsdXJlIGluIHRoZSBjdXJyZW50IG9wZXJhdGlvbi4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRXJyb3JcIl0gPSA0XSA9IFwiRXJyb3JcIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGRpYWdub3N0aWMgbWVzc2FnZXMgdGhhdCBpbmRpY2F0ZSBhIGZhaWx1cmUgdGhhdCB3aWxsIHRlcm1pbmF0ZSB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJDcml0aWNhbFwiXSA9IDVdID0gXCJDcml0aWNhbFwiO1xyXG4gICAgLyoqIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGxvZyBsZXZlbC4gVXNlZCB3aGVuIGNvbmZpZ3VyaW5nIGxvZ2dpbmcgdG8gaW5kaWNhdGUgdGhhdCBubyBsb2cgbWVzc2FnZXMgc2hvdWxkIGJlIGVtaXR0ZWQuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIk5vbmVcIl0gPSA2XSA9IFwiTm9uZVwiO1xyXG59KShMb2dMZXZlbCB8fCAoTG9nTGV2ZWwgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JTG9nZ2VyLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gVGhpcyB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBiaXQgZmxhZyBpbiB0aGUgZnV0dXJlLCBzbyB3ZSBrZWVwIGl0IHVzaW5nIHBvd2VyLW9mLXR3byB2YWx1ZXMuXHJcbi8qKiBTcGVjaWZpZXMgYSBzcGVjaWZpYyBIVFRQIHRyYW5zcG9ydCB0eXBlLiAqL1xyXG5leHBvcnQgdmFyIEh0dHBUcmFuc3BvcnRUeXBlO1xyXG4oZnVuY3Rpb24gKEh0dHBUcmFuc3BvcnRUeXBlKSB7XHJcbiAgICAvKiogU3BlY2lmaWVzIG5vIHRyYW5zcG9ydCBwcmVmZXJlbmNlLiAqL1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGVbSHR0cFRyYW5zcG9ydFR5cGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhlIFdlYlNvY2tldHMgdHJhbnNwb3J0LiAqL1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGVbSHR0cFRyYW5zcG9ydFR5cGVbXCJXZWJTb2NrZXRzXCJdID0gMV0gPSBcIldlYlNvY2tldHNcIjtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhlIFNlcnZlci1TZW50IEV2ZW50cyB0cmFuc3BvcnQuICovXHJcbiAgICBIdHRwVHJhbnNwb3J0VHlwZVtIdHRwVHJhbnNwb3J0VHlwZVtcIlNlcnZlclNlbnRFdmVudHNcIl0gPSAyXSA9IFwiU2VydmVyU2VudEV2ZW50c1wiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGUgTG9uZyBQb2xsaW5nIHRyYW5zcG9ydC4gKi9cclxuICAgIEh0dHBUcmFuc3BvcnRUeXBlW0h0dHBUcmFuc3BvcnRUeXBlW1wiTG9uZ1BvbGxpbmdcIl0gPSA0XSA9IFwiTG9uZ1BvbGxpbmdcIjtcclxufSkoSHR0cFRyYW5zcG9ydFR5cGUgfHwgKEh0dHBUcmFuc3BvcnRUeXBlID0ge30pKTtcclxuLyoqIFNwZWNpZmllcyB0aGUgdHJhbnNmZXIgZm9ybWF0IGZvciBhIGNvbm5lY3Rpb24uICovXHJcbmV4cG9ydCB2YXIgVHJhbnNmZXJGb3JtYXQ7XHJcbihmdW5jdGlvbiAoVHJhbnNmZXJGb3JtYXQpIHtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhhdCBvbmx5IHRleHQgZGF0YSB3aWxsIGJlIHRyYW5zbWl0dGVkIG92ZXIgdGhlIGNvbm5lY3Rpb24uICovXHJcbiAgICBUcmFuc2ZlckZvcm1hdFtUcmFuc2ZlckZvcm1hdFtcIlRleHRcIl0gPSAxXSA9IFwiVGV4dFwiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGF0IGJpbmFyeSBkYXRhIHdpbGwgYmUgdHJhbnNtaXR0ZWQgb3ZlciB0aGUgY29ubmVjdGlvbi4gKi9cclxuICAgIFRyYW5zZmVyRm9ybWF0W1RyYW5zZmVyRm9ybWF0W1wiQmluYXJ5XCJdID0gMl0gPSBcIkJpbmFyeVwiO1xyXG59KShUcmFuc2ZlckZvcm1hdCB8fCAoVHJhbnNmZXJGb3JtYXQgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVHJhbnNwb3J0LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9JSHViUHJvdG9jb2xcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBOdWxsTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2Vyc1wiO1xyXG5pbXBvcnQgeyBUZXh0TWVzc2FnZUZvcm1hdCB9IGZyb20gXCIuL1RleHRNZXNzYWdlRm9ybWF0XCI7XHJcbmNvbnN0IEpTT05fSFVCX1BST1RPQ09MX05BTUUgPSBcImpzb25cIjtcclxuLyoqIEltcGxlbWVudHMgdGhlIEpTT04gSHViIFByb3RvY29sLiAqL1xyXG5leHBvcnQgY2xhc3MgSnNvbkh1YlByb3RvY29sIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgICAgIHRoaXMubmFtZSA9IEpTT05fSFVCX1BST1RPQ09MX05BTUU7XHJcbiAgICAgICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gMTtcclxuICAgICAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgICAgICB0aGlzLnRyYW5zZmVyRm9ybWF0ID0gVHJhbnNmZXJGb3JtYXQuVGV4dDtcclxuICAgIH1cclxuICAgIC8qKiBDcmVhdGVzIGFuIGFycmF5IG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHViTWVzc2FnZX0gb2JqZWN0cyBmcm9tIHRoZSBzcGVjaWZpZWQgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgQSBzdHJpbmcgY29udGFpbmluZyB0aGUgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqIEBwYXJhbSB7SUxvZ2dlcn0gbG9nZ2VyIEEgbG9nZ2VyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGxvZyBtZXNzYWdlcyB0aGF0IG9jY3VyIGR1cmluZyBwYXJzaW5nLlxyXG4gICAgICovXHJcbiAgICBwYXJzZU1lc3NhZ2VzKGlucHV0LCBsb2dnZXIpIHtcclxuICAgICAgICAvLyBUaGUgaW50ZXJmYWNlIGRvZXMgYWxsb3cgXCJBcnJheUJ1ZmZlclwiIHRvIGJlIHBhc3NlZCBpbiwgYnV0IHRoaXMgaW1wbGVtZW50YXRpb24gZG9lcyBub3QuIFNvIGxldCdzIHRocm93IGEgdXNlZnVsIGVycm9yLlxyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCBmb3IgSlNPTiBodWIgcHJvdG9jb2wuIEV4cGVjdGVkIGEgc3RyaW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2dnZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9nZ2VyID0gTnVsbExvZ2dlci5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUGFyc2UgdGhlIG1lc3NhZ2VzXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBUZXh0TWVzc2FnZUZvcm1hdC5wYXJzZShpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgaHViTWVzc2FnZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkTWVzc2FnZSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyc2VkTWVzc2FnZS50eXBlICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBheWxvYWQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN3aXRjaCAocGFyc2VkTWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkludm9jYXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNJbnZvY2F0aW9uTWVzc2FnZShwYXJzZWRNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU3RyZWFtSXRlbTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1N0cmVhbUl0ZW1NZXNzYWdlKHBhcnNlZE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQ29tcGxldGlvbk1lc3NhZ2UocGFyc2VkTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlBpbmc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luZ2xlIHZhbHVlLCBubyBuZWVkIHRvIHZhbGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNsb3NlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFsbCBvcHRpb25hbCB2YWx1ZXMsIG5vIG5lZWQgdG8gdmFsaWRhdGVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRnV0dXJlIHByb3RvY29sIGNoYW5nZXMgY2FuIGFkZCBtZXNzYWdlIHR5cGVzLCBvbGQgY2xpZW50cyBjYW4gaWdub3JlIHRoZW1cclxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIlVua25vd24gbWVzc2FnZSB0eXBlICdcIiArIHBhcnNlZE1lc3NhZ2UudHlwZSArIFwiJyBpZ25vcmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBodWJNZXNzYWdlcy5wdXNoKHBhcnNlZE1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHViTWVzc2FnZXM7XHJcbiAgICB9XHJcbiAgICAvKiogV3JpdGVzIHRoZSBzcGVjaWZpZWQge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdWJNZXNzYWdlfSB0byBhIHN0cmluZyBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0h1Yk1lc3NhZ2V9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gd3JpdGUuXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIHRoZSBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICB3cml0ZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBUZXh0TWVzc2FnZUZvcm1hdC53cml0ZShKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcbiAgICB9XHJcbiAgICBfaXNJbnZvY2F0aW9uTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS50YXJnZXQsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBJbnZvY2F0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlLmludm9jYXRpb25JZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2VydE5vdEVtcHR5U3RyaW5nKG1lc3NhZ2UuaW52b2NhdGlvbklkLCBcIkludmFsaWQgcGF5bG9hZCBmb3IgSW52b2NhdGlvbiBtZXNzYWdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaXNTdHJlYW1JdGVtTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS5pbnZvY2F0aW9uSWQsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBTdHJlYW1JdGVtIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlLml0ZW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBheWxvYWQgZm9yIFN0cmVhbUl0ZW0gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2lzQ29tcGxldGlvbk1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLnJlc3VsdCAmJiBtZXNzYWdlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGF5bG9hZCBmb3IgQ29tcGxldGlvbiBtZXNzYWdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtZXNzYWdlLnJlc3VsdCAmJiBtZXNzYWdlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2VydE5vdEVtcHR5U3RyaW5nKG1lc3NhZ2UuZXJyb3IsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBDb21wbGV0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLmludm9jYXRpb25JZCwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIENvbXBsZXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICB9XHJcbiAgICBfYXNzZXJ0Tm90RW1wdHlTdHJpbmcodmFsdWUsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgdmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUpzb25IdWJQcm90b2NvbC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8qKiBBIGxvZ2dlciB0aGF0IGRvZXMgbm90aGluZyB3aGVuIGxvZyBtZXNzYWdlcyBhcmUgc2VudCB0byBpdC4gKi9cclxuZXhwb3J0IGNsYXNzIE51bGxMb2dnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBsb2coX2xvZ0xldmVsLCBfbWVzc2FnZSkge1xyXG4gICAgfVxyXG59XHJcbi8qKiBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLk51bGxMb2dnZXJ9LiAqL1xyXG5OdWxsTG9nZ2VyLmluc3RhbmNlID0gbmV3IE51bGxMb2dnZXIoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9nZ2Vycy5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEFib3J0Q29udHJvbGxlciB9IGZyb20gXCIuL0Fib3J0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3IsIFRpbWVvdXRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBIZWFkZXJOYW1lcyB9IGZyb20gXCIuL0hlYWRlck5hbWVzXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBnZXREYXRhRGV0YWlsLCBnZXRVc2VyQWdlbnRIZWFkZXIsIHNlbmRNZXNzYWdlIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLy8gTm90IGV4cG9ydGVkIGZyb20gJ2luZGV4JywgdGhpcyB0eXBlIGlzIGludGVybmFsLlxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIExvbmdQb2xsaW5nVHJhbnNwb3J0IHtcclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgbG9nZ2VyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5ID0gYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLl9wb2xsQWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25yZWNlaXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8gVGhpcyBpcyBhbiBpbnRlcm5hbCB0eXBlLCBub3QgZXhwb3J0ZWQgZnJvbSAnaW5kZXgnIHNvIHRoaXMgaXMgcmVhbGx5IGp1c3QgaW50ZXJuYWwuXHJcbiAgICBnZXQgcG9sbEFib3J0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbGxBYm9ydC5hYm9ydGVkO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY29ubmVjdCh1cmwsIHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodXJsLCBcInVybFwiKTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh0cmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICBBcmcuaXNJbih0cmFuc2ZlckZvcm1hdCwgVHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgQ29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgLy8gQWxsb3cgYmluYXJ5IGZvcm1hdCBvbiBOb2RlIGFuZCBCcm93c2VycyB0aGF0IHN1cHBvcnQgYmluYXJ5IGNvbnRlbnQgKGluZGljYXRlZCBieSB0aGUgcHJlc2VuY2Ugb2YgcmVzcG9uc2VUeXBlIHByb3BlcnR5KVxyXG4gICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdCA9PT0gVHJhbnNmZXJGb3JtYXQuQmluYXJ5ICYmXHJcbiAgICAgICAgICAgICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG5ldyBYTUxIdHRwUmVxdWVzdCgpLnJlc3BvbnNlVHlwZSAhPT0gXCJzdHJpbmdcIikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmluYXJ5IHByb3RvY29scyBvdmVyIFhtbEh0dHBSZXF1ZXN0IG5vdCBpbXBsZW1lbnRpbmcgYWR2YW5jZWQgZmVhdHVyZXMgYXJlIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZ2V0VXNlckFnZW50SGVhZGVyKCk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgW25hbWVdOiB2YWx1ZSwgLi4udGhpcy5fb3B0aW9ucy5oZWFkZXJzIH07XHJcbiAgICAgICAgY29uc3QgcG9sbE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGFib3J0U2lnbmFsOiB0aGlzLl9wb2xsQWJvcnQuc2lnbmFsLFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwMDAsXHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5fb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodHJhbnNmZXJGb3JtYXQgPT09IFRyYW5zZmVyRm9ybWF0LkJpbmFyeSkge1xyXG4gICAgICAgICAgICBwb2xsT3B0aW9ucy5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVIZWFkZXJUb2tlbihwb2xsT3B0aW9ucywgdG9rZW4pO1xyXG4gICAgICAgIC8vIE1ha2UgaW5pdGlhbCBsb25nIHBvbGxpbmcgcmVxdWVzdFxyXG4gICAgICAgIC8vIFNlcnZlciB1c2VzIGZpcnN0IGxvbmcgcG9sbGluZyByZXF1ZXN0IHRvIGZpbmlzaCBpbml0aWFsaXppbmcgY29ubmVjdGlvbiBhbmQgaXQgcmV0dXJucyB3aXRob3V0IGRhdGFcclxuICAgICAgICBjb25zdCBwb2xsVXJsID0gYCR7dXJsfSZfPSR7RGF0ZS5ub3coKX1gO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBwb2xsaW5nOiAke3BvbGxVcmx9LmApO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5faHR0cENsaWVudC5nZXQocG9sbFVybCwgcG9sbE9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIFVuZXhwZWN0ZWQgcmVzcG9uc2UgY29kZTogJHtyZXNwb25zZS5zdGF0dXNDb2RlfS5gKTtcclxuICAgICAgICAgICAgLy8gTWFyayBydW5uaW5nIGFzIGZhbHNlIHNvIHRoYXQgdGhlIHBvbGwgaW1tZWRpYXRlbHkgZW5kcyBhbmQgcnVucyB0aGUgY2xvc2UgbG9naWNcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2VFcnJvciA9IG5ldyBIdHRwRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCB8fCBcIlwiLCByZXNwb25zZS5zdGF0dXNDb2RlKTtcclxuICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlY2VpdmluZyA9IHRoaXMuX3BvbGwodGhpcy5fdXJsLCBwb2xsT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBfZ2V0QWNjZXNzVG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgX3VwZGF0ZUhlYWRlclRva2VuKHJlcXVlc3QsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnNbSGVhZGVyTmFtZXMuQXV0aG9yaXphdGlvbl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVxdWVzdC5oZWFkZXJzW0hlYWRlck5hbWVzLkF1dGhvcml6YXRpb25dKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbSGVhZGVyTmFtZXMuQXV0aG9yaXphdGlvbl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgX3BvbGwodXJsLCBwb2xsT3B0aW9ucykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRvIGdldCB0aGUgYWNjZXNzIHRva2VuIG9uIGVhY2ggcG9sbCwgaW4gY2FzZSBpdCBjaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2dldEFjY2Vzc1Rva2VuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVIZWFkZXJUb2tlbihwb2xsT3B0aW9ucywgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2xsVXJsID0gYCR7dXJsfSZfPSR7RGF0ZS5ub3coKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBwb2xsaW5nOiAke3BvbGxVcmx9LmApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5faHR0cENsaWVudC5nZXQocG9sbFVybCwgcG9sbE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsIHRlcm1pbmF0ZWQgYnkgc2VydmVyLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIFVuZXhwZWN0ZWQgcmVzcG9uc2UgY29kZTogJHtyZXNwb25zZS5zdGF0dXNDb2RlfS5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5leHBlY3RlZCBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZUVycm9yID0gbmV3IEh0dHBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0IHx8IFwiXCIsIHJlc3BvbnNlLnN0YXR1c0NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIGRhdGEgcmVjZWl2ZWQuICR7Z2V0RGF0YURldGFpbChyZXNwb25zZS5jb250ZW50LCB0aGlzLl9vcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50KX0uYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vbnJlY2VpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ucmVjZWl2ZShyZXNwb25zZS5jb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW5vdGhlciB3YXkgdGltZW91dCBtYW5pZmVzdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbCB0aW1lZCBvdXQsIHJlaXNzdWluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fcnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMb2cgYnV0IGRpc3JlZ2FyZCBlcnJvcnMgdGhhdCBvY2N1ciBhZnRlciBzdG9wcGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbCBlcnJvcmVkIGFmdGVyIHNodXRkb3duOiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgVGltZW91dEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgdGltZW91dHMgYW5kIHJlaXNzdWUgdGhlIHBvbGwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGwgdGltZWQgb3V0LCByZWlzc3VpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGNvbm5lY3Rpb24gd2l0aCB0aGUgZXJyb3IgYXMgdGhlIHJlc3VsdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlRXJyb3IgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGxpbmcgY29tcGxldGUuXCIpO1xyXG4gICAgICAgICAgICAvLyBXZSB3aWxsIHJlYWNoIGhlcmUgd2l0aCBwb2xsQWJvcnRlZD09ZmFsc2Ugd2hlbiB0aGUgc2VydmVyIHJldHVybmVkIGEgcmVzcG9uc2UgY2F1c2luZyB0aGUgdHJhbnNwb3J0IHRvIHN0b3AuXHJcbiAgICAgICAgICAgIC8vIElmIHBvbGxBYm9ydGVkPT10cnVlIHRoZW4gY2xpZW50IGluaXRpYXRlZCB0aGUgc3RvcCBhbmQgdGhlIHN0b3AgbWV0aG9kIHdpbGwgcmFpc2UgdGhlIGNsb3NlIGV2ZW50IGFmdGVyIERFTEVURSBpcyBzZW50LlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucG9sbEFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhaXNlT25DbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc2VuZCB1bnRpbCB0aGUgdHJhbnNwb3J0IGlzIGNvbm5lY3RlZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZW5kTWVzc2FnZSh0aGlzLl9sb2dnZXIsIFwiTG9uZ1BvbGxpbmdcIiwgdGhpcy5faHR0cENsaWVudCwgdGhpcy5fdXJsLCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnksIGRhdGEsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFN0b3BwaW5nIHBvbGxpbmcuXCIpO1xyXG4gICAgICAgIC8vIFRlbGwgcmVjZWl2aW5nIGxvb3AgdG8gc3RvcCwgYWJvcnQgYW55IGN1cnJlbnQgcmVxdWVzdCwgYW5kIHRoZW4gd2FpdCBmb3IgaXQgdG8gZmluaXNoXHJcbiAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3BvbGxBYm9ydC5hYm9ydCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3JlY2VpdmluZztcclxuICAgICAgICAgICAgLy8gU2VuZCBERUxFVEUgdG8gY2xlYW4gdXAgbG9uZyBwb2xsaW5nIG9uIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIHNlbmRpbmcgREVMRVRFIHJlcXVlc3QgdG8gJHt0aGlzLl91cmx9LmApO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBnZXRVc2VyQWdlbnRIZWFkZXIoKTtcclxuICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAuLi5oZWFkZXJzLCAuLi50aGlzLl9vcHRpb25zLmhlYWRlcnMgfSxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuX29wdGlvbnMudGltZW91dCxcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5fb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSGVhZGVyVG9rZW4oZGVsZXRlT3B0aW9ucywgdG9rZW4pO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9odHRwQ2xpZW50LmRlbGV0ZSh0aGlzLl91cmwsIGRlbGV0ZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIERFTEVURSByZXF1ZXN0IHNlbnQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBTdG9wIGZpbmlzaGVkLlwiKTtcclxuICAgICAgICAgICAgLy8gUmFpc2UgY2xvc2UgZXZlbnQgaGVyZSBpbnN0ZWFkIG9mIGluIHBvbGxpbmdcclxuICAgICAgICAgICAgLy8gSXQgbmVlZHMgdG8gaGFwcGVuIGFmdGVyIHRoZSBERUxFVEUgcmVxdWVzdCBpcyBzZW50XHJcbiAgICAgICAgICAgIHRoaXMuX3JhaXNlT25DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yYWlzZU9uQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25jbG9zZSkge1xyXG4gICAgICAgICAgICBsZXQgbG9nTWVzc2FnZSA9IFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgRmlyaW5nIG9uY2xvc2UgZXZlbnQuXCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dNZXNzYWdlICs9IFwiIEVycm9yOiBcIiArIHRoaXMuX2Nsb3NlRXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgbG9nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMub25jbG9zZSh0aGlzLl9jbG9zZUVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9uZ1BvbGxpbmdUcmFuc3BvcnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IEFyZywgZ2V0RGF0YURldGFpbCwgZ2V0VXNlckFnZW50SGVhZGVyLCBQbGF0Zm9ybSwgc2VuZE1lc3NhZ2UgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQge1xyXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudCwgYWNjZXNzVG9rZW5GYWN0b3J5LCBsb2dnZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkgPSBhY2Nlc3NUb2tlbkZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMub25yZWNlaXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY29ubmVjdCh1cmwsIHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodXJsLCBcInVybFwiKTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh0cmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICBBcmcuaXNJbih0cmFuc2ZlckZvcm1hdCwgVHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoU1NFIHRyYW5zcG9ydCkgQ29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgLy8gc2V0IHVybCBiZWZvcmUgYWNjZXNzVG9rZW5GYWN0b3J5IGJlY2F1c2UgdGhpcy51cmwgaXMgb25seSBmb3Igc2VuZCBhbmQgd2Ugc2V0IHRoZSBhdXRoIGhlYWRlciBpbnN0ZWFkIG9mIHRoZSBxdWVyeSBzdHJpbmcgZm9yIHNlbmRcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogXCImXCIpICsgYGFjY2Vzc190b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdCAhPT0gVHJhbnNmZXJGb3JtYXQuVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBTZXJ2ZXItU2VudCBFdmVudHMgdHJhbnNwb3J0IG9ubHkgc3VwcG9ydHMgdGhlICdUZXh0JyB0cmFuc2ZlciBmb3JtYXRcIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBldmVudFNvdXJjZTtcclxuICAgICAgICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciB8fCBQbGF0Zm9ybS5pc1dlYldvcmtlcikge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRTb3VyY2UgPSBuZXcgdGhpcy5fb3B0aW9ucy5FdmVudFNvdXJjZSh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0aGlzLl9vcHRpb25zLndpdGhDcmVkZW50aWFscyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vbi1icm93c2VyIHBhc3NlcyBjb29raWVzIHZpYSB0aGUgZGljdGlvbmFyeVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29va2llcyA9IHRoaXMuX2h0dHBDbGllbnQuZ2V0Q29va2llU3RyaW5nKHVybCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLkNvb2tpZSA9IGNvb2tpZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZ2V0VXNlckFnZW50SGVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZSA9IG5ldyB0aGlzLl9vcHRpb25zLkV2ZW50U291cmNlKHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuX29wdGlvbnMud2l0aENyZWRlbnRpYWxzLCBoZWFkZXJzOiB7IC4uLmhlYWRlcnMsIC4uLnRoaXMuX29wdGlvbnMuaGVhZGVycyB9IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ucmVjZWl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChTU0UgdHJhbnNwb3J0KSBkYXRhIHJlY2VpdmVkLiAke2dldERhdGFEZXRhaWwoZS5kYXRhLCB0aGlzLl9vcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50KX0uYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ucmVjZWl2ZShlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IG5vdCB1c2luZyBldmVudCBvbiBwdXJwb3NlXHJcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbmVycm9yID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFdmVudFNvdXJjZSBkb2Vzbid0IGdpdmUgYW55IHVzZWZ1bCBpbmZvcm1hdGlvbiBhYm91dCBzZXJ2ZXIgc2lkZSBjbG9zZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkV2ZW50U291cmNlIGZhaWxlZCB0byBjb25uZWN0LiBUaGUgY29ubmVjdGlvbiBjb3VsZCBub3QgYmUgZm91bmQgb24gdGhlIHNlcnZlcixcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBlaXRoZXIgdGhlIGNvbm5lY3Rpb24gSUQgaXMgbm90IHByZXNlbnQgb24gdGhlIHNlcnZlciwgb3IgYSBwcm94eSBpcyByZWZ1c2luZy9idWZmZXJpbmcgdGhlIGNvbm5lY3Rpb24uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgSWYgeW91IGhhdmUgbXVsdGlwbGUgc2VydmVycyBjaGVjayB0aGF0IHN0aWNreSBzZXNzaW9ucyBhcmUgZW5hYmxlZC5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYFNTRSBjb25uZWN0ZWQgdG8gJHt0aGlzLl91cmx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRTb3VyY2UgPSBldmVudFNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudFNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHNlbmQgdW50aWwgdGhlIHRyYW5zcG9ydCBpcyBjb25uZWN0ZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VuZE1lc3NhZ2UodGhpcy5fbG9nZ2VyLCBcIlNTRVwiLCB0aGlzLl9odHRwQ2xpZW50LCB0aGlzLl91cmwsIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSwgZGF0YSwgdGhpcy5fb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgX2Nsb3NlKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRTb3VyY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRTb3VyY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jbG9zZShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgU3ViamVjdFN1YnNjcmlwdGlvbiB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8qKiBTdHJlYW0gaW1wbGVtZW50YXRpb24gdG8gc3RyZWFtIGl0ZW1zIHRvIHRoZSBzZXJ2ZXIuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICB9XHJcbiAgICBuZXh0KGl0ZW0pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXJyb3IoZXJyKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVycykge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZlci5jb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcikge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBvYnNlcnZlcik7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIE5vdCBleHBvcnRlZCBmcm9tIGluZGV4XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dE1lc3NhZ2VGb3JtYXQge1xyXG4gICAgc3RhdGljIHdyaXRlKG91dHB1dCkge1xyXG4gICAgICAgIHJldHVybiBgJHtvdXRwdXR9JHtUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3J9YDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBwYXJzZShpbnB1dCkge1xyXG4gICAgICAgIGlmIChpbnB1dFtpbnB1dC5sZW5ndGggLSAxXSAhPT0gVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1lc3NhZ2UgaXMgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gaW5wdXQuc3BsaXQoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yKTtcclxuICAgICAgICBtZXNzYWdlcy5wb3AoKTtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZXM7XHJcbiAgICB9XHJcbn1cclxuVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yQ29kZSA9IDB4MWU7XHJcblRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yQ29kZSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRleHRNZXNzYWdlRm9ybWF0LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IE51bGxMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJzXCI7XHJcbi8vIFZlcnNpb24gdG9rZW4gdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBwcmVwYWNrIGNvbW1hbmRcclxuLyoqIFRoZSB2ZXJzaW9uIG9mIHRoZSBTaWduYWxSIGNsaWVudC4gKi9cclxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIjYuMC44XCI7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgQXJnIHtcclxuICAgIHN0YXRpYyBpc1JlcXVpcmVkKHZhbCwgbmFtZSkge1xyXG4gICAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7bmFtZX0nIGFyZ3VtZW50IGlzIHJlcXVpcmVkLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBpc05vdEVtcHR5KHZhbCwgbmFtZSkge1xyXG4gICAgICAgIGlmICghdmFsIHx8IHZhbC5tYXRjaCgvXlxccyokLykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7bmFtZX0nIGFyZ3VtZW50IHNob3VsZCBub3QgYmUgZW1wdHkuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGlzSW4odmFsLCB2YWx1ZXMsIG5hbWUpIHtcclxuICAgICAgICAvLyBUeXBlU2NyaXB0IGVudW1zIGhhdmUga2V5cyBmb3IgKipib3RoKiogdGhlIG5hbWUgYW5kIHRoZSB2YWx1ZSBvZiBlYWNoIGVudW0gbWVtYmVyIG9uIHRoZSB0eXBlIGl0c2VsZi5cclxuICAgICAgICBpZiAoISh2YWwgaW4gdmFsdWVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gJHtuYW1lfSB2YWx1ZTogJHt2YWx9LmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcclxuICAgIC8vIHJlYWN0LW5hdGl2ZSBoYXMgYSB3aW5kb3cgYnV0IG5vIGRvY3VtZW50IHNvIHdlIHNob3VsZCBjaGVjayBib3RoXHJcbiAgICBzdGF0aWMgZ2V0IGlzQnJvd3NlcigpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ID09PSBcIm9iamVjdFwiO1xyXG4gICAgfVxyXG4gICAgLy8gV2ViV29ya2VycyBkb24ndCBoYXZlIGEgd2luZG93IG9iamVjdCBzbyB0aGUgaXNCcm93c2VyIGNoZWNrIHdvdWxkIGZhaWxcclxuICAgIHN0YXRpYyBnZXQgaXNXZWJXb3JrZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIFwiaW1wb3J0U2NyaXB0c1wiIGluIHNlbGY7XHJcbiAgICB9XHJcbiAgICAvLyByZWFjdC1uYXRpdmUgaGFzIGEgd2luZG93IGJ1dCBubyBkb2N1bWVudFxyXG4gICAgc3RhdGljIGdldCBpc1JlYWN0TmF0aXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICB9XHJcbiAgICAvLyBOb2RlIGFwcHMgc2hvdWxkbid0IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBidXQgV2ViV29ya2VycyBkb24ndCBlaXRoZXJcclxuICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgZm9yIGJvdGggV2ViV29ya2VyIGFuZCB3aW5kb3dcclxuICAgIHN0YXRpYyBnZXQgaXNOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc0Jyb3dzZXIgJiYgIXRoaXMuaXNXZWJXb3JrZXIgJiYgIXRoaXMuaXNSZWFjdE5hdGl2ZTtcclxuICAgIH1cclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFEZXRhaWwoZGF0YSwgaW5jbHVkZUNvbnRlbnQpIHtcclxuICAgIGxldCBkZXRhaWwgPSBcIlwiO1xyXG4gICAgaWYgKGlzQXJyYXlCdWZmZXIoZGF0YSkpIHtcclxuICAgICAgICBkZXRhaWwgPSBgQmluYXJ5IGRhdGEgb2YgbGVuZ3RoICR7ZGF0YS5ieXRlTGVuZ3RofWA7XHJcbiAgICAgICAgaWYgKGluY2x1ZGVDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGRldGFpbCArPSBgLiBDb250ZW50OiAnJHtmb3JtYXRBcnJheUJ1ZmZlcihkYXRhKX0nYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGRldGFpbCA9IGBTdHJpbmcgZGF0YSBvZiBsZW5ndGggJHtkYXRhLmxlbmd0aH1gO1xyXG4gICAgICAgIGlmIChpbmNsdWRlQ29udGVudCkge1xyXG4gICAgICAgICAgICBkZXRhaWwgKz0gYC4gQ29udGVudDogJyR7ZGF0YX0nYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGV0YWlsO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QXJyYXlCdWZmZXIoZGF0YSkge1xyXG4gICAgY29uc3QgdmlldyA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgLy8gVWludDhBcnJheS5tYXAgb25seSBzdXBwb3J0cyByZXR1cm5pbmcgYW5vdGhlciBVaW50OEFycmF5P1xyXG4gICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICB2aWV3LmZvckVhY2goKG51bSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhZCA9IG51bSA8IDE2ID8gXCIwXCIgOiBcIlwiO1xyXG4gICAgICAgIHN0ciArPSBgMHgke3BhZH0ke251bS50b1N0cmluZygxNil9IGA7XHJcbiAgICB9KTtcclxuICAgIC8vIFRyaW0gb2YgdHJhaWxpbmcgc3BhY2UuXHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSk7XHJcbn1cclxuLy8gQWxzbyBpbiBzaWduYWxyLXByb3RvY29sLW1zZ3BhY2svVXRpbHMudHNcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAodmFsIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHxcclxuICAgICAgICAgICAgLy8gU29tZXRpbWVzIHdlIGdldCBhbiBBcnJheUJ1ZmZlciB0aGF0IGRvZXNuJ3Qgc2F0aXNmeSBpbnN0YW5jZW9mXHJcbiAgICAgICAgICAgICh2YWwuY29uc3RydWN0b3IgJiYgdmFsLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlCdWZmZXJcIikpO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobG9nZ2VyLCB0cmFuc3BvcnROYW1lLCBodHRwQ2xpZW50LCB1cmwsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgY29udGVudCwgb3B0aW9ucykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcclxuICAgIGlmIChhY2Nlc3NUb2tlbkZhY3RvcnkpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGFjY2Vzc1Rva2VuRmFjdG9yeSgpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgW1wiQXV0aG9yaXphdGlvblwiXTogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGdldFVzZXJBZ2VudEhlYWRlcigpO1xyXG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYCgke3RyYW5zcG9ydE5hbWV9IHRyYW5zcG9ydCkgc2VuZGluZyBkYXRhLiAke2dldERhdGFEZXRhaWwoY29udGVudCwgb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCl9LmApO1xyXG4gICAgY29uc3QgcmVzcG9uc2VUeXBlID0gaXNBcnJheUJ1ZmZlcihjb250ZW50KSA/IFwiYXJyYXlidWZmZXJcIiA6IFwidGV4dFwiO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwQ2xpZW50LnBvc3QodXJsLCB7XHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMsIC4uLm9wdGlvbnMuaGVhZGVycyB9LFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgICB0aW1lb3V0OiBvcHRpb25zLnRpbWVvdXQsXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBvcHRpb25zLndpdGhDcmVkZW50aWFscyxcclxuICAgIH0pO1xyXG4gICAgbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYCgke3RyYW5zcG9ydE5hbWV9IHRyYW5zcG9ydCkgcmVxdWVzdCBjb21wbGV0ZS4gUmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LmApO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKGxvZ2dlcikge1xyXG4gICAgaWYgKGxvZ2dlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zb2xlTG9nZ2VyKExvZ0xldmVsLkluZm9ybWF0aW9uKTtcclxuICAgIH1cclxuICAgIGlmIChsb2dnZXIgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gTnVsbExvZ2dlci5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGlmIChsb2dnZXIubG9nICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBDb25zb2xlTG9nZ2VyKGxvZ2dlcik7XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBTdWJqZWN0U3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHN1YmplY3QsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc3ViamVjdCA9IHN1YmplY3Q7XHJcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuICAgIH1cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9zdWJqZWN0Lm9ic2VydmVycy5pbmRleE9mKHRoaXMuX29ic2VydmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJqZWN0Lm9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc3ViamVjdC5vYnNlcnZlcnMubGVuZ3RoID09PSAwICYmIHRoaXMuX3N1YmplY3QuY2FuY2VsQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ViamVjdC5jYW5jZWxDYWxsYmFjaygpLmNhdGNoKChfKSA9PiB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIENvbnNvbGVMb2dnZXIge1xyXG4gICAgY29uc3RydWN0b3IobWluaW11bUxvZ0xldmVsKSB7XHJcbiAgICAgICAgdGhpcy5fbWluTGV2ZWwgPSBtaW5pbXVtTG9nTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5vdXQgPSBjb25zb2xlO1xyXG4gICAgfVxyXG4gICAgbG9nKGxvZ0xldmVsLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGxvZ0xldmVsID49IHRoaXMuX21pbkxldmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBbJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9XSAke0xvZ0xldmVsW2xvZ0xldmVsXX06ICR7bWVzc2FnZX1gO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxvZ0xldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExvZ0xldmVsLkNyaXRpY2FsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5FcnJvcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dC5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0Lndhcm4obXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuSW5mb3JtYXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXQuaW5mbyhtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnIG9ubHkgZ29lcyB0byBhdHRhY2hlZCBkZWJ1Z2dlcnMgaW4gTm9kZSwgc28gd2UgdXNlIGNvbnNvbGUubG9nIGZvciBUcmFjZSBhbmQgRGVidWdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dC5sb2cobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJBZ2VudEhlYWRlcigpIHtcclxuICAgIGxldCB1c2VyQWdlbnRIZWFkZXJOYW1lID0gXCJYLVNpZ25hbFItVXNlci1BZ2VudFwiO1xyXG4gICAgaWYgKFBsYXRmb3JtLmlzTm9kZSkge1xyXG4gICAgICAgIHVzZXJBZ2VudEhlYWRlck5hbWUgPSBcIlVzZXItQWdlbnRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBbdXNlckFnZW50SGVhZGVyTmFtZSwgY29uc3RydWN0VXNlckFnZW50KFZFUlNJT04sIGdldE9zTmFtZSgpLCBnZXRSdW50aW1lKCksIGdldFJ1bnRpbWVWZXJzaW9uKCkpXTtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdFVzZXJBZ2VudCh2ZXJzaW9uLCBvcywgcnVudGltZSwgcnVudGltZVZlcnNpb24pIHtcclxuICAgIC8vIE1pY3Jvc29mdCBTaWduYWxSL1tWZXJzaW9uXSAoW0RldGFpbGVkIFZlcnNpb25dOyBbT3BlcmF0aW5nIFN5c3RlbV07IFtSdW50aW1lXTsgW1J1bnRpbWUgVmVyc2lvbl0pXHJcbiAgICBsZXQgdXNlckFnZW50ID0gXCJNaWNyb3NvZnQgU2lnbmFsUi9cIjtcclxuICAgIGNvbnN0IG1ham9yQW5kTWlub3IgPSB2ZXJzaW9uLnNwbGl0KFwiLlwiKTtcclxuICAgIHVzZXJBZ2VudCArPSBgJHttYWpvckFuZE1pbm9yWzBdfS4ke21ham9yQW5kTWlub3JbMV19YDtcclxuICAgIHVzZXJBZ2VudCArPSBgICgke3ZlcnNpb259OyBgO1xyXG4gICAgaWYgKG9zICYmIG9zICE9PSBcIlwiKSB7XHJcbiAgICAgICAgdXNlckFnZW50ICs9IGAke29zfTsgYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHVzZXJBZ2VudCArPSBcIlVua25vd24gT1M7IFwiO1xyXG4gICAgfVxyXG4gICAgdXNlckFnZW50ICs9IGAke3J1bnRpbWV9YDtcclxuICAgIGlmIChydW50aW1lVmVyc2lvbikge1xyXG4gICAgICAgIHVzZXJBZ2VudCArPSBgOyAke3J1bnRpbWVWZXJzaW9ufWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB1c2VyQWdlbnQgKz0gXCI7IFVua25vd24gUnVudGltZSBWZXJzaW9uXCI7XHJcbiAgICB9XHJcbiAgICB1c2VyQWdlbnQgKz0gXCIpXCI7XHJcbiAgICByZXR1cm4gdXNlckFnZW50O1xyXG59XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzcGFjZWQtY29tbWVudFxyXG4vKiNfX1BVUkVfXyovIGZ1bmN0aW9uIGdldE9zTmFtZSgpIHtcclxuICAgIGlmIChQbGF0Zm9ybS5pc05vZGUpIHtcclxuICAgICAgICBzd2l0Y2ggKHByb2Nlc3MucGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIndpbjMyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJXaW5kb3dzIE5UXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXJ3aW5cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIm1hY09TXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW51eFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGludXhcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLnBsYXRmb3JtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzcGFjZWQtY29tbWVudFxyXG4vKiNfX1BVUkVfXyovIGZ1bmN0aW9uIGdldFJ1bnRpbWVWZXJzaW9uKCkge1xyXG4gICAgaWYgKFBsYXRmb3JtLmlzTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9jZXNzLnZlcnNpb25zLm5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIGdldFJ1bnRpbWUoKSB7XHJcbiAgICBpZiAoUGxhdGZvcm0uaXNOb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTm9kZUpTXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJCcm93c2VyXCI7XHJcbiAgICB9XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvclN0cmluZyhlKSB7XHJcbiAgICBpZiAoZS5zdGFjaykge1xyXG4gICAgICAgIHJldHVybiBlLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS5tZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGUubWVzc2FnZTtcclxuICAgIH1cclxuICAgIHJldHVybiBgJHtlfWA7XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxUaGlzKCkge1xyXG4gICAgLy8gZ2xvYmFsVGhpcyBpcyBzZW1pLW5ldyBhbmQgbm90IGF2YWlsYWJsZSBpbiBOb2RlIHVudGlsIHYxMlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbFRoaXM7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmaW5kIGdsb2JhbFwiKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1VdGlscy5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEhlYWRlck5hbWVzIH0gZnJvbSBcIi4vSGVhZGVyTmFtZXNcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBBcmcsIGdldERhdGFEZXRhaWwsIGdldFVzZXJBZ2VudEhlYWRlciwgUGxhdGZvcm0gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFdlYlNvY2tldFRyYW5zcG9ydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50LCBhY2Nlc3NUb2tlbkZhY3RvcnksIGxvZ2dlciwgbG9nTWVzc2FnZUNvbnRlbnQsIHdlYlNvY2tldENvbnN0cnVjdG9yLCBoZWFkZXJzKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSA9IGFjY2Vzc1Rva2VuRmFjdG9yeTtcclxuICAgICAgICB0aGlzLl9sb2dNZXNzYWdlQ29udGVudCA9IGxvZ01lc3NhZ2VDb250ZW50O1xyXG4gICAgICAgIHRoaXMuX3dlYlNvY2tldENvbnN0cnVjdG9yID0gd2ViU29ja2V0Q29uc3RydWN0b3I7XHJcbiAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5vbnJlY2VpdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjb25uZWN0KHVybCwgdHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgIEFyZy5pc0luKHRyYW5zZmVyRm9ybWF0LCBUcmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihXZWJTb2NrZXRzIHRyYW5zcG9ydCkgQ29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogXCImXCIpICsgYGFjY2Vzc190b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXmh0dHAvLCBcIndzXCIpO1xyXG4gICAgICAgICAgICBsZXQgd2ViU29ja2V0O1xyXG4gICAgICAgICAgICBjb25zdCBjb29raWVzID0gdGhpcy5faHR0cENsaWVudC5nZXRDb29raWVTdHJpbmcodXJsKTtcclxuICAgICAgICAgICAgbGV0IG9wZW5lZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoUGxhdGZvcm0uaXNOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZ2V0VXNlckFnZW50SGVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29va2llcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbSGVhZGVyTmFtZXMuQ29va2llXSA9IGAke2Nvb2tpZXN9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgcGFzcyBoZWFkZXJzIHdoZW4gaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXHJcbiAgICAgICAgICAgICAgICB3ZWJTb2NrZXQgPSBuZXcgdGhpcy5fd2ViU29ja2V0Q29uc3RydWN0b3IodXJsLCB1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMsIC4uLnRoaXMuX2hlYWRlcnMgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaHJvbWUgaXMgbm90IGhhcHB5IHdpdGggcGFzc2luZyAndW5kZWZpbmVkJyBhcyBwcm90b2NvbFxyXG4gICAgICAgICAgICAgICAgd2ViU29ja2V0ID0gbmV3IHRoaXMuX3dlYlNvY2tldENvbnN0cnVjdG9yKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0ID09PSBUcmFuc2ZlckZvcm1hdC5CaW5hcnkpIHtcclxuICAgICAgICAgICAgICAgIHdlYlNvY2tldC5iaW5hcnlUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdlYlNvY2tldC5vbm9wZW4gPSAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgV2ViU29ja2V0IGNvbm5lY3RlZCB0byAke3VybH0uYCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQgPSB3ZWJTb2NrZXQ7XHJcbiAgICAgICAgICAgICAgICBvcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3ZWJTb2NrZXQub25lcnJvciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9yRXZlbnQgaXMgYSBicm93c2VyIG9ubHkgdHlwZSB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSB0eXBlIGV4aXN0cyBiZWZvcmUgdXNpbmcgaXRcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgRXJyb3JFdmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldmVudCBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGV2ZW50LmVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBcIlRoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHRoZSB0cmFuc3BvcnRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGAoV2ViU29ja2V0cyB0cmFuc3BvcnQpICR7ZXJyb3J9LmApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3ZWJTb2NrZXQub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoV2ViU29ja2V0cyB0cmFuc3BvcnQpIGRhdGEgcmVjZWl2ZWQuICR7Z2V0RGF0YURldGFpbChtZXNzYWdlLmRhdGEsIHRoaXMuX2xvZ01lc3NhZ2VDb250ZW50KX0uYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbnJlY2VpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ucmVjZWl2ZShtZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3ZWJTb2NrZXQub25jbG9zZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgY2FsbCBjbG9zZSBoYW5kbGVyIGlmIGNvbm5lY3Rpb24gd2FzIG5ldmVyIGVzdGFibGlzaGVkXHJcbiAgICAgICAgICAgICAgICAvLyBXZSdsbCByZWplY3QgdGhlIGNvbm5lY3QgY2FsbCBpbnN0ZWFkXHJcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2UoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFcnJvckV2ZW50IGlzIGEgYnJvd3NlciBvbmx5IHR5cGUgd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgdHlwZSBleGlzdHMgYmVmb3JlIHVzaW5nIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBFcnJvckV2ZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGV2ZW50IGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGV2ZW50LmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBcIldlYlNvY2tldCBmYWlsZWQgdG8gY29ubmVjdC4gVGhlIGNvbm5lY3Rpb24gY291bGQgbm90IGJlIGZvdW5kIG9uIHRoZSBzZXJ2ZXIsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgZWl0aGVyIHRoZSBlbmRwb2ludCBtYXkgbm90IGJlIGEgU2lnbmFsUiBlbmRwb2ludCxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiB0aGUgY29ubmVjdGlvbiBJRCBpcyBub3QgcHJlc2VudCBvbiB0aGUgc2VydmVyLCBvciB0aGVyZSBpcyBhIHByb3h5IGJsb2NraW5nIFdlYlNvY2tldHMuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgSWYgeW91IGhhdmUgbXVsdGlwbGUgc2VydmVycyBjaGVjayB0aGF0IHN0aWNreSBzZXNzaW9ucyBhcmUgZW5hYmxlZC5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dlYlNvY2tldCAmJiB0aGlzLl93ZWJTb2NrZXQucmVhZHlTdGF0ZSA9PT0gdGhpcy5fd2ViU29ja2V0Q29uc3RydWN0b3IuT1BFTikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKFdlYlNvY2tldHMgdHJhbnNwb3J0KSBzZW5kaW5nIGRhdGEuICR7Z2V0RGF0YURldGFpbChkYXRhLCB0aGlzLl9sb2dNZXNzYWdlQ29udGVudCl9LmApO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQuc2VuZChkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJXZWJTb2NrZXQgaXMgbm90IGluIHRoZSBPUEVOIHN0YXRlXCIpO1xyXG4gICAgfVxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IGludm9rZSBvbmNsb3NlIGNhbGxiYWNrIGlubGluZSBzbyB3ZSBrbm93IHRoZSBIdHRwQ29ubmVjdGlvbiB3YXMgY2xvc2VkIHByb3Blcmx5IGJlZm9yZSByZXR1cm5pbmdcclxuICAgICAgICAgICAgLy8gVGhpcyBhbHNvIHNvbHZlcyBhbiBpc3N1ZSB3aGVyZSB3ZWJzb2NrZXQub25jbG9zZSBjb3VsZCB0YWtlIDE4KyBzZWNvbmRzIHRvIHRyaWdnZXIgZHVyaW5nIG5ldHdvcmsgZGlzY29ubmVjdHNcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2UodW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgX2Nsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gd2ViU29ja2V0IHdpbGwgYmUgbnVsbCBpZiB0aGUgdHJhbnNwb3J0IGRpZCBub3Qgc3RhcnQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgaWYgKHRoaXMuX3dlYlNvY2tldCkge1xyXG4gICAgICAgICAgICAvLyBDbGVhciB3ZWJzb2NrZXQgaGFuZGxlcnMgYmVjYXVzZSB3ZSBhcmUgY29uc2lkZXJpbmcgdGhlIHNvY2tldCBjbG9zZWQgbm93XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldC5vbmNsb3NlID0gKCkgPT4geyB9O1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQub25tZXNzYWdlID0gKCkgPT4geyB9O1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQub25lcnJvciA9ICgpID0+IHsgfTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoV2ViU29ja2V0cyB0cmFuc3BvcnQpIHNvY2tldCBjbG9zZWQuXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQ2xvc2VFdmVudChldmVudCkgJiYgKGV2ZW50Lndhc0NsZWFuID09PSBmYWxzZSB8fCBldmVudC5jb2RlICE9PSAxMDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsb3NlKG5ldyBFcnJvcihgV2ViU29ja2V0IGNsb3NlZCB3aXRoIHN0YXR1cyBjb2RlOiAke2V2ZW50LmNvZGV9ICgke2V2ZW50LnJlYXNvbiB8fCBcIm5vIHJlYXNvbiBnaXZlblwifSkuYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jbG9zZShldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pc0Nsb3NlRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gZXZlbnQgJiYgdHlwZW9mIGV2ZW50Lndhc0NsZWFuID09PSBcImJvb2xlYW5cIiAmJiB0eXBlb2YgZXZlbnQuY29kZSA9PT0gXCJudW1iZXJcIjtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWJTb2NrZXRUcmFuc3BvcnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBBYm9ydEVycm9yLCBIdHRwRXJyb3IsIFRpbWVvdXRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiLi9IdHRwQ2xpZW50XCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5leHBvcnQgY2xhc3MgWGhySHR0cENsaWVudCBleHRlbmRzIEh0dHBDbGllbnQge1xyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICB9XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIHNlbmQocmVxdWVzdCkge1xyXG4gICAgICAgIC8vIENoZWNrIHRoYXQgYWJvcnQgd2FzIG5vdCBzaWduYWxlZCBiZWZvcmUgY2FsbGluZyBzZW5kXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwgJiYgcmVxdWVzdC5hYm9ydFNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWJvcnRFcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gbWV0aG9kIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LnVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gdXJsIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuICAgICAgICAgICAgLy8gRXhwbGljaXRseSBzZXR0aW5nIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyIGZvciBSZWFjdCBOYXRpdmUgb24gQW5kcm9pZCBwbGF0Zm9ybS5cclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnM7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChoZWFkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIGhlYWRlcnNbaGVhZGVyXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5yZXNwb25zZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSByZXF1ZXN0LnJlc3BvbnNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQWJvcnRFcnJvcigpKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QudGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSByZXF1ZXN0LnRpbWVvdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgSHR0cFJlc3BvbnNlKHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0LCB4aHIucmVzcG9uc2UgfHwgeGhyLnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBIdHRwRXJyb3IoeGhyLnJlc3BvbnNlIHx8IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnN0YXR1c1RleHQsIHhoci5zdGF0dXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBFcnJvciBmcm9tIEhUVFAgcmVxdWVzdC4gJHt4aHIuc3RhdHVzfTogJHt4aHIuc3RhdHVzVGV4dH0uYCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEh0dHBFcnJvcih4aHIuc3RhdHVzVGV4dCwgeGhyLnN0YXR1cykpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgVGltZW91dCBmcm9tIEhUVFAgcmVxdWVzdC5gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgVGltZW91dEVycm9yKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIuc2VuZChyZXF1ZXN0LmNvbnRlbnQgfHwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9WGhySHR0cENsaWVudC5qcy5tYXAiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qKlxuICogW2pzLXNoYTI1Nl17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2VtbjE3OC9qcy1zaGEyNTZ9XG4gKlxuICogQHZlcnNpb24gMC45LjBcbiAqIEBhdXRob3IgQ2hlbiwgWWktQ3l1YW4gW2VtbjE3OEBnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IENoZW4sIFlpLUN5dWFuIDIwMTQtMjAxN1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbi8qanNsaW50IGJpdHdpc2U6IHRydWUgKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgRVJST1IgPSAnaW5wdXQgaXMgaW52YWxpZCB0eXBlJztcbiAgdmFyIFdJTkRPVyA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnO1xuICB2YXIgcm9vdCA9IFdJTkRPVyA/IHdpbmRvdyA6IHt9O1xuICBpZiAocm9vdC5KU19TSEEyNTZfTk9fV0lORE9XKSB7XG4gICAgV0lORE9XID0gZmFsc2U7XG4gIH1cbiAgdmFyIFdFQl9XT1JLRVIgPSAhV0lORE9XICYmIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JztcbiAgdmFyIE5PREVfSlMgPSAhcm9vdC5KU19TSEEyNTZfTk9fTk9ERV9KUyAmJiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGU7XG4gIGlmIChOT0RFX0pTKSB7XG4gICAgcm9vdCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChXRUJfV09SS0VSKSB7XG4gICAgcm9vdCA9IHNlbGY7XG4gIH1cbiAgdmFyIENPTU1PTl9KUyA9ICFyb290LkpTX1NIQTI1Nl9OT19DT01NT05fSlMgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHM7XG4gIHZhciBBTUQgPSB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQ7XG4gIHZhciBBUlJBWV9CVUZGRVIgPSAhcm9vdC5KU19TSEEyNTZfTk9fQVJSQVlfQlVGRkVSICYmIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBIRVhfQ0hBUlMgPSAnMDEyMzQ1Njc4OWFiY2RlZicuc3BsaXQoJycpO1xuICB2YXIgRVhUUkEgPSBbLTIxNDc0ODM2NDgsIDgzODg2MDgsIDMyNzY4LCAxMjhdO1xuICB2YXIgU0hJRlQgPSBbMjQsIDE2LCA4LCAwXTtcbiAgdmFyIEsgPSBbXG4gICAgMHg0MjhhMmY5OCwgMHg3MTM3NDQ5MSwgMHhiNWMwZmJjZiwgMHhlOWI1ZGJhNSwgMHgzOTU2YzI1YiwgMHg1OWYxMTFmMSwgMHg5MjNmODJhNCwgMHhhYjFjNWVkNSxcbiAgICAweGQ4MDdhYTk4LCAweDEyODM1YjAxLCAweDI0MzE4NWJlLCAweDU1MGM3ZGMzLCAweDcyYmU1ZDc0LCAweDgwZGViMWZlLCAweDliZGMwNmE3LCAweGMxOWJmMTc0LFxuICAgIDB4ZTQ5YjY5YzEsIDB4ZWZiZTQ3ODYsIDB4MGZjMTlkYzYsIDB4MjQwY2ExY2MsIDB4MmRlOTJjNmYsIDB4NGE3NDg0YWEsIDB4NWNiMGE5ZGMsIDB4NzZmOTg4ZGEsXG4gICAgMHg5ODNlNTE1MiwgMHhhODMxYzY2ZCwgMHhiMDAzMjdjOCwgMHhiZjU5N2ZjNywgMHhjNmUwMGJmMywgMHhkNWE3OTE0NywgMHgwNmNhNjM1MSwgMHgxNDI5Mjk2NyxcbiAgICAweDI3YjcwYTg1LCAweDJlMWIyMTM4LCAweDRkMmM2ZGZjLCAweDUzMzgwZDEzLCAweDY1MGE3MzU0LCAweDc2NmEwYWJiLCAweDgxYzJjOTJlLCAweDkyNzIyYzg1LFxuICAgIDB4YTJiZmU4YTEsIDB4YTgxYTY2NGIsIDB4YzI0YjhiNzAsIDB4Yzc2YzUxYTMsIDB4ZDE5MmU4MTksIDB4ZDY5OTA2MjQsIDB4ZjQwZTM1ODUsIDB4MTA2YWEwNzAsXG4gICAgMHgxOWE0YzExNiwgMHgxZTM3NmMwOCwgMHgyNzQ4Nzc0YywgMHgzNGIwYmNiNSwgMHgzOTFjMGNiMywgMHg0ZWQ4YWE0YSwgMHg1YjljY2E0ZiwgMHg2ODJlNmZmMyxcbiAgICAweDc0OGY4MmVlLCAweDc4YTU2MzZmLCAweDg0Yzg3ODE0LCAweDhjYzcwMjA4LCAweDkwYmVmZmZhLCAweGE0NTA2Y2ViLCAweGJlZjlhM2Y3LCAweGM2NzE3OGYyXG4gIF07XG4gIHZhciBPVVRQVVRfVFlQRVMgPSBbJ2hleCcsICdhcnJheScsICdkaWdlc3QnLCAnYXJyYXlCdWZmZXInXTtcblxuICB2YXIgYmxvY2tzID0gW107XG5cbiAgaWYgKHJvb3QuSlNfU0hBMjU2X05PX05PREVfSlMgfHwgIUFycmF5LmlzQXJyYXkpIHtcbiAgICBBcnJheS5pc0FycmF5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG4gIH1cblxuICBpZiAoQVJSQVlfQlVGRkVSICYmIChyb290LkpTX1NIQTI1Nl9OT19BUlJBWV9CVUZGRVJfSVNfVklFVyB8fCAhQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIEFycmF5QnVmZmVyLmlzVmlldyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouYnVmZmVyICYmIG9iai5idWZmZXIuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyO1xuICAgIH07XG4gIH1cblxuICB2YXIgY3JlYXRlT3V0cHV0TWV0aG9kID0gZnVuY3Rpb24gKG91dHB1dFR5cGUsIGlzMjI0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbmV3IFNoYTI1NihpczIyNCwgdHJ1ZSkudXBkYXRlKG1lc3NhZ2UpW291dHB1dFR5cGVdKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKGlzMjI0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGNyZWF0ZU91dHB1dE1ldGhvZCgnaGV4JywgaXMyMjQpO1xuICAgIGlmIChOT0RFX0pTKSB7XG4gICAgICBtZXRob2QgPSBub2RlV3JhcChtZXRob2QsIGlzMjI0KTtcbiAgICB9XG4gICAgbWV0aG9kLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgU2hhMjU2KGlzMjI0KTtcbiAgICB9O1xuICAgIG1ldGhvZC51cGRhdGUgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG1ldGhvZC5jcmVhdGUoKS51cGRhdGUobWVzc2FnZSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE9VVFBVVF9UWVBFUy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIHR5cGUgPSBPVVRQVVRfVFlQRVNbaV07XG4gICAgICBtZXRob2RbdHlwZV0gPSBjcmVhdGVPdXRwdXRNZXRob2QodHlwZSwgaXMyMjQpO1xuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kO1xuICB9O1xuXG4gIHZhciBub2RlV3JhcCA9IGZ1bmN0aW9uIChtZXRob2QsIGlzMjI0KSB7XG4gICAgdmFyIGNyeXB0byA9IGV2YWwoXCJyZXF1aXJlKCdjcnlwdG8nKVwiKTtcbiAgICB2YXIgQnVmZmVyID0gZXZhbChcInJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlclwiKTtcbiAgICB2YXIgYWxnb3JpdGhtID0gaXMyMjQgPyAnc2hhMjI0JyA6ICdzaGEyNTYnO1xuICAgIHZhciBub2RlTWV0aG9kID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0by5jcmVhdGVIYXNoKGFsZ29yaXRobSkudXBkYXRlKG1lc3NhZ2UsICd1dGY4JykuZGlnZXN0KCdoZXgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsIHx8IG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICBtZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lc3NhZ2UpIHx8IEFycmF5QnVmZmVyLmlzVmlldyhtZXNzYWdlKSB8fFxuICAgICAgICBtZXNzYWdlLmNvbnN0cnVjdG9yID09PSBCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0by5jcmVhdGVIYXNoKGFsZ29yaXRobSkudXBkYXRlKG5ldyBCdWZmZXIobWVzc2FnZSkpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWV0aG9kKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG5vZGVNZXRob2Q7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUhtYWNPdXRwdXRNZXRob2QgPSBmdW5jdGlvbiAob3V0cHV0VHlwZSwgaXMyMjQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgbWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG5ldyBIbWFjU2hhMjU2KGtleSwgaXMyMjQsIHRydWUpLnVwZGF0ZShtZXNzYWdlKVtvdXRwdXRUeXBlXSgpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUhtYWNNZXRob2QgPSBmdW5jdGlvbiAoaXMyMjQpIHtcbiAgICB2YXIgbWV0aG9kID0gY3JlYXRlSG1hY091dHB1dE1ldGhvZCgnaGV4JywgaXMyMjQpO1xuICAgIG1ldGhvZC5jcmVhdGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbmV3IEhtYWNTaGEyNTYoa2V5LCBpczIyNCk7XG4gICAgfTtcbiAgICBtZXRob2QudXBkYXRlID0gZnVuY3Rpb24gKGtleSwgbWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG1ldGhvZC5jcmVhdGUoa2V5KS51cGRhdGUobWVzc2FnZSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE9VVFBVVF9UWVBFUy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIHR5cGUgPSBPVVRQVVRfVFlQRVNbaV07XG4gICAgICBtZXRob2RbdHlwZV0gPSBjcmVhdGVIbWFjT3V0cHV0TWV0aG9kKHR5cGUsIGlzMjI0KTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZDtcbiAgfTtcblxuICBmdW5jdGlvbiBTaGEyNTYoaXMyMjQsIHNoYXJlZE1lbW9yeSkge1xuICAgIGlmIChzaGFyZWRNZW1vcnkpIHtcbiAgICAgIGJsb2Nrc1swXSA9IGJsb2Nrc1sxNl0gPSBibG9ja3NbMV0gPSBibG9ja3NbMl0gPSBibG9ja3NbM10gPVxuICAgICAgICBibG9ja3NbNF0gPSBibG9ja3NbNV0gPSBibG9ja3NbNl0gPSBibG9ja3NbN10gPVxuICAgICAgICBibG9ja3NbOF0gPSBibG9ja3NbOV0gPSBibG9ja3NbMTBdID0gYmxvY2tzWzExXSA9XG4gICAgICAgIGJsb2Nrc1sxMl0gPSBibG9ja3NbMTNdID0gYmxvY2tzWzE0XSA9IGJsb2Nrc1sxNV0gPSAwO1xuICAgICAgdGhpcy5ibG9ja3MgPSBibG9ja3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvY2tzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIH1cblxuICAgIGlmIChpczIyNCkge1xuICAgICAgdGhpcy5oMCA9IDB4YzEwNTllZDg7XG4gICAgICB0aGlzLmgxID0gMHgzNjdjZDUwNztcbiAgICAgIHRoaXMuaDIgPSAweDMwNzBkZDE3O1xuICAgICAgdGhpcy5oMyA9IDB4ZjcwZTU5Mzk7XG4gICAgICB0aGlzLmg0ID0gMHhmZmMwMGIzMTtcbiAgICAgIHRoaXMuaDUgPSAweDY4NTgxNTExO1xuICAgICAgdGhpcy5oNiA9IDB4NjRmOThmYTc7XG4gICAgICB0aGlzLmg3ID0gMHhiZWZhNGZhNDtcbiAgICB9IGVsc2UgeyAvLyAyNTZcbiAgICAgIHRoaXMuaDAgPSAweDZhMDllNjY3O1xuICAgICAgdGhpcy5oMSA9IDB4YmI2N2FlODU7XG4gICAgICB0aGlzLmgyID0gMHgzYzZlZjM3MjtcbiAgICAgIHRoaXMuaDMgPSAweGE1NGZmNTNhO1xuICAgICAgdGhpcy5oNCA9IDB4NTEwZTUyN2Y7XG4gICAgICB0aGlzLmg1ID0gMHg5YjA1Njg4YztcbiAgICAgIHRoaXMuaDYgPSAweDFmODNkOWFiO1xuICAgICAgdGhpcy5oNyA9IDB4NWJlMGNkMTk7XG4gICAgfVxuXG4gICAgdGhpcy5ibG9jayA9IHRoaXMuc3RhcnQgPSB0aGlzLmJ5dGVzID0gdGhpcy5oQnl0ZXMgPSAwO1xuICAgIHRoaXMuZmluYWxpemVkID0gdGhpcy5oYXNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLmlzMjI0ID0gaXMyMjQ7XG4gIH1cblxuICBTaGEyNTYucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBub3RTdHJpbmcsIHR5cGUgPSB0eXBlb2YgbWVzc2FnZTtcbiAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICAgIH0gZWxzZSBpZiAoQVJSQVlfQlVGRkVSICYmIG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG1lc3NhZ2UpKSB7XG4gICAgICAgICAgaWYgKCFBUlJBWV9CVUZGRVIgfHwgIUFycmF5QnVmZmVyLmlzVmlldyhtZXNzYWdlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICB9XG4gICAgICBub3RTdHJpbmcgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgY29kZSwgaW5kZXggPSAwLCBpLCBsZW5ndGggPSBtZXNzYWdlLmxlbmd0aCwgYmxvY2tzID0gdGhpcy5ibG9ja3M7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLmhhc2hlZCkge1xuICAgICAgICB0aGlzLmhhc2hlZCA9IGZhbHNlO1xuICAgICAgICBibG9ja3NbMF0gPSB0aGlzLmJsb2NrO1xuICAgICAgICBibG9ja3NbMTZdID0gYmxvY2tzWzFdID0gYmxvY2tzWzJdID0gYmxvY2tzWzNdID1cbiAgICAgICAgICBibG9ja3NbNF0gPSBibG9ja3NbNV0gPSBibG9ja3NbNl0gPSBibG9ja3NbN10gPVxuICAgICAgICAgIGJsb2Nrc1s4XSA9IGJsb2Nrc1s5XSA9IGJsb2Nrc1sxMF0gPSBibG9ja3NbMTFdID1cbiAgICAgICAgICBibG9ja3NbMTJdID0gYmxvY2tzWzEzXSA9IGJsb2Nrc1sxNF0gPSBibG9ja3NbMTVdID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vdFN0cmluZykge1xuICAgICAgICBmb3IgKGkgPSB0aGlzLnN0YXJ0OyBpbmRleCA8IGxlbmd0aCAmJiBpIDwgNjQ7ICsraW5kZXgpIHtcbiAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSBtZXNzYWdlW2luZGV4XSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gdGhpcy5zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IDY0OyArK2luZGV4KSB7XG4gICAgICAgICAgY29kZSA9IG1lc3NhZ2UuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgICAgaWYgKGNvZGUgPCAweDgwKSB7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSBjb2RlIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhjMCB8IChjb2RlID4+IDYpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKGNvZGUgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhkODAwIHx8IGNvZGUgPj0gMHhlMDAwKSB7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhlMCB8IChjb2RlID4+IDEyKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKGNvZGUgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGUgPSAweDEwMDAwICsgKCgoY29kZSAmIDB4M2ZmKSA8PCAxMCkgfCAobWVzc2FnZS5jaGFyQ29kZUF0KCsraW5kZXgpICYgMHgzZmYpKTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweGYwIHwgKGNvZGUgPj4gMTgpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDEyKSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDYpICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0Qnl0ZUluZGV4ID0gaTtcbiAgICAgIHRoaXMuYnl0ZXMgKz0gaSAtIHRoaXMuc3RhcnQ7XG4gICAgICBpZiAoaSA+PSA2NCkge1xuICAgICAgICB0aGlzLmJsb2NrID0gYmxvY2tzWzE2XTtcbiAgICAgICAgdGhpcy5zdGFydCA9IGkgLSA2NDtcbiAgICAgICAgdGhpcy5oYXNoKCk7XG4gICAgICAgIHRoaXMuaGFzaGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5ieXRlcyA+IDQyOTQ5NjcyOTUpIHtcbiAgICAgIHRoaXMuaEJ5dGVzICs9IHRoaXMuYnl0ZXMgLyA0Mjk0OTY3Mjk2IDw8IDA7XG4gICAgICB0aGlzLmJ5dGVzID0gdGhpcy5ieXRlcyAlIDQyOTQ5NjcyOTY7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuZmluYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcbiAgICB2YXIgYmxvY2tzID0gdGhpcy5ibG9ja3MsIGkgPSB0aGlzLmxhc3RCeXRlSW5kZXg7XG4gICAgYmxvY2tzWzE2XSA9IHRoaXMuYmxvY2s7XG4gICAgYmxvY2tzW2kgPj4gMl0gfD0gRVhUUkFbaSAmIDNdO1xuICAgIHRoaXMuYmxvY2sgPSBibG9ja3NbMTZdO1xuICAgIGlmIChpID49IDU2KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzaGVkKSB7XG4gICAgICAgIHRoaXMuaGFzaCgpO1xuICAgICAgfVxuICAgICAgYmxvY2tzWzBdID0gdGhpcy5ibG9jaztcbiAgICAgIGJsb2Nrc1sxNl0gPSBibG9ja3NbMV0gPSBibG9ja3NbMl0gPSBibG9ja3NbM10gPVxuICAgICAgICBibG9ja3NbNF0gPSBibG9ja3NbNV0gPSBibG9ja3NbNl0gPSBibG9ja3NbN10gPVxuICAgICAgICBibG9ja3NbOF0gPSBibG9ja3NbOV0gPSBibG9ja3NbMTBdID0gYmxvY2tzWzExXSA9XG4gICAgICAgIGJsb2Nrc1sxMl0gPSBibG9ja3NbMTNdID0gYmxvY2tzWzE0XSA9IGJsb2Nrc1sxNV0gPSAwO1xuICAgIH1cbiAgICBibG9ja3NbMTRdID0gdGhpcy5oQnl0ZXMgPDwgMyB8IHRoaXMuYnl0ZXMgPj4+IDI5O1xuICAgIGJsb2Nrc1sxNV0gPSB0aGlzLmJ5dGVzIDw8IDM7XG4gICAgdGhpcy5oYXNoKCk7XG4gIH07XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5oYXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhID0gdGhpcy5oMCwgYiA9IHRoaXMuaDEsIGMgPSB0aGlzLmgyLCBkID0gdGhpcy5oMywgZSA9IHRoaXMuaDQsIGYgPSB0aGlzLmg1LCBnID0gdGhpcy5oNixcbiAgICAgIGggPSB0aGlzLmg3LCBibG9ja3MgPSB0aGlzLmJsb2NrcywgaiwgczAsIHMxLCBtYWosIHQxLCB0MiwgY2gsIGFiLCBkYSwgY2QsIGJjO1xuXG4gICAgZm9yIChqID0gMTY7IGogPCA2NDsgKytqKSB7XG4gICAgICAvLyByaWdodHJvdGF0ZVxuICAgICAgdDEgPSBibG9ja3NbaiAtIDE1XTtcbiAgICAgIHMwID0gKCh0MSA+Pj4gNykgfCAodDEgPDwgMjUpKSBeICgodDEgPj4+IDE4KSB8ICh0MSA8PCAxNCkpIF4gKHQxID4+PiAzKTtcbiAgICAgIHQxID0gYmxvY2tzW2ogLSAyXTtcbiAgICAgIHMxID0gKCh0MSA+Pj4gMTcpIHwgKHQxIDw8IDE1KSkgXiAoKHQxID4+PiAxOSkgfCAodDEgPDwgMTMpKSBeICh0MSA+Pj4gMTApO1xuICAgICAgYmxvY2tzW2pdID0gYmxvY2tzW2ogLSAxNl0gKyBzMCArIGJsb2Nrc1tqIC0gN10gKyBzMSA8PCAwO1xuICAgIH1cblxuICAgIGJjID0gYiAmIGM7XG4gICAgZm9yIChqID0gMDsgaiA8IDY0OyBqICs9IDQpIHtcbiAgICAgIGlmICh0aGlzLmZpcnN0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzMjI0KSB7XG4gICAgICAgICAgYWIgPSAzMDAwMzI7XG4gICAgICAgICAgdDEgPSBibG9ja3NbMF0gLSAxNDEzMjU3ODE5O1xuICAgICAgICAgIGggPSB0MSAtIDE1MDA1NDU5OSA8PCAwO1xuICAgICAgICAgIGQgPSB0MSArIDI0MTc3MDc3IDw8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWIgPSA3MDQ3NTExMDk7XG4gICAgICAgICAgdDEgPSBibG9ja3NbMF0gLSAyMTAyNDQyNDg7XG4gICAgICAgICAgaCA9IHQxIC0gMTUyMTQ4NjUzNCA8PCAwO1xuICAgICAgICAgIGQgPSB0MSArIDE0MzY5NDU2NSA8PCAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyc3QgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMwID0gKChhID4+PiAyKSB8IChhIDw8IDMwKSkgXiAoKGEgPj4+IDEzKSB8IChhIDw8IDE5KSkgXiAoKGEgPj4+IDIyKSB8IChhIDw8IDEwKSk7XG4gICAgICAgIHMxID0gKChlID4+PiA2KSB8IChlIDw8IDI2KSkgXiAoKGUgPj4+IDExKSB8IChlIDw8IDIxKSkgXiAoKGUgPj4+IDI1KSB8IChlIDw8IDcpKTtcbiAgICAgICAgYWIgPSBhICYgYjtcbiAgICAgICAgbWFqID0gYWIgXiAoYSAmIGMpIF4gYmM7XG4gICAgICAgIGNoID0gKGUgJiBmKSBeICh+ZSAmIGcpO1xuICAgICAgICB0MSA9IGggKyBzMSArIGNoICsgS1tqXSArIGJsb2Nrc1tqXTtcbiAgICAgICAgdDIgPSBzMCArIG1hajtcbiAgICAgICAgaCA9IGQgKyB0MSA8PCAwO1xuICAgICAgICBkID0gdDEgKyB0MiA8PCAwO1xuICAgICAgfVxuICAgICAgczAgPSAoKGQgPj4+IDIpIHwgKGQgPDwgMzApKSBeICgoZCA+Pj4gMTMpIHwgKGQgPDwgMTkpKSBeICgoZCA+Pj4gMjIpIHwgKGQgPDwgMTApKTtcbiAgICAgIHMxID0gKChoID4+PiA2KSB8IChoIDw8IDI2KSkgXiAoKGggPj4+IDExKSB8IChoIDw8IDIxKSkgXiAoKGggPj4+IDI1KSB8IChoIDw8IDcpKTtcbiAgICAgIGRhID0gZCAmIGE7XG4gICAgICBtYWogPSBkYSBeIChkICYgYikgXiBhYjtcbiAgICAgIGNoID0gKGggJiBlKSBeICh+aCAmIGYpO1xuICAgICAgdDEgPSBnICsgczEgKyBjaCArIEtbaiArIDFdICsgYmxvY2tzW2ogKyAxXTtcbiAgICAgIHQyID0gczAgKyBtYWo7XG4gICAgICBnID0gYyArIHQxIDw8IDA7XG4gICAgICBjID0gdDEgKyB0MiA8PCAwO1xuICAgICAgczAgPSAoKGMgPj4+IDIpIHwgKGMgPDwgMzApKSBeICgoYyA+Pj4gMTMpIHwgKGMgPDwgMTkpKSBeICgoYyA+Pj4gMjIpIHwgKGMgPDwgMTApKTtcbiAgICAgIHMxID0gKChnID4+PiA2KSB8IChnIDw8IDI2KSkgXiAoKGcgPj4+IDExKSB8IChnIDw8IDIxKSkgXiAoKGcgPj4+IDI1KSB8IChnIDw8IDcpKTtcbiAgICAgIGNkID0gYyAmIGQ7XG4gICAgICBtYWogPSBjZCBeIChjICYgYSkgXiBkYTtcbiAgICAgIGNoID0gKGcgJiBoKSBeICh+ZyAmIGUpO1xuICAgICAgdDEgPSBmICsgczEgKyBjaCArIEtbaiArIDJdICsgYmxvY2tzW2ogKyAyXTtcbiAgICAgIHQyID0gczAgKyBtYWo7XG4gICAgICBmID0gYiArIHQxIDw8IDA7XG4gICAgICBiID0gdDEgKyB0MiA8PCAwO1xuICAgICAgczAgPSAoKGIgPj4+IDIpIHwgKGIgPDwgMzApKSBeICgoYiA+Pj4gMTMpIHwgKGIgPDwgMTkpKSBeICgoYiA+Pj4gMjIpIHwgKGIgPDwgMTApKTtcbiAgICAgIHMxID0gKChmID4+PiA2KSB8IChmIDw8IDI2KSkgXiAoKGYgPj4+IDExKSB8IChmIDw8IDIxKSkgXiAoKGYgPj4+IDI1KSB8IChmIDw8IDcpKTtcbiAgICAgIGJjID0gYiAmIGM7XG4gICAgICBtYWogPSBiYyBeIChiICYgZCkgXiBjZDtcbiAgICAgIGNoID0gKGYgJiBnKSBeICh+ZiAmIGgpO1xuICAgICAgdDEgPSBlICsgczEgKyBjaCArIEtbaiArIDNdICsgYmxvY2tzW2ogKyAzXTtcbiAgICAgIHQyID0gczAgKyBtYWo7XG4gICAgICBlID0gYSArIHQxIDw8IDA7XG4gICAgICBhID0gdDEgKyB0MiA8PCAwO1xuICAgIH1cblxuICAgIHRoaXMuaDAgPSB0aGlzLmgwICsgYSA8PCAwO1xuICAgIHRoaXMuaDEgPSB0aGlzLmgxICsgYiA8PCAwO1xuICAgIHRoaXMuaDIgPSB0aGlzLmgyICsgYyA8PCAwO1xuICAgIHRoaXMuaDMgPSB0aGlzLmgzICsgZCA8PCAwO1xuICAgIHRoaXMuaDQgPSB0aGlzLmg0ICsgZSA8PCAwO1xuICAgIHRoaXMuaDUgPSB0aGlzLmg1ICsgZiA8PCAwO1xuICAgIHRoaXMuaDYgPSB0aGlzLmg2ICsgZyA8PCAwO1xuICAgIHRoaXMuaDcgPSB0aGlzLmg3ICsgaCA8PCAwO1xuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuaGV4ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZmluYWxpemUoKTtcblxuICAgIHZhciBoMCA9IHRoaXMuaDAsIGgxID0gdGhpcy5oMSwgaDIgPSB0aGlzLmgyLCBoMyA9IHRoaXMuaDMsIGg0ID0gdGhpcy5oNCwgaDUgPSB0aGlzLmg1LFxuICAgICAgaDYgPSB0aGlzLmg2LCBoNyA9IHRoaXMuaDc7XG5cbiAgICB2YXIgaGV4ID0gSEVYX0NIQVJTWyhoMCA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMCA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMCA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgwID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDAgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMSA+PiAyNCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMSA+PiAxNikgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMSA+PiA4KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDEgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDIgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgyID4+IDI0KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDIgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgyID4+IDE2KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDIgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgyID4+IDgpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMiA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2gyICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgzID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDMgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg0ID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNCA+PiAyNCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg0ID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNCA+PiAxNikgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg0ID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNCA+PiA4KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDQgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toNCAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDUgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg1ID4+IDI0KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDUgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg1ID4+IDE2KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDUgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg1ID4+IDgpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNSA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2g1ICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNiA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDYgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNiA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDYgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNiA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDYgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg2ID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDYgJiAweDBGXTtcbiAgICBpZiAoIXRoaXMuaXMyMjQpIHtcbiAgICAgIGhleCArPSBIRVhfQ0hBUlNbKGg3ID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNyA+PiAyNCkgJiAweDBGXSArXG4gICAgICAgIEhFWF9DSEFSU1soaDcgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg3ID4+IDE2KSAmIDB4MEZdICtcbiAgICAgICAgSEVYX0NIQVJTWyhoNyA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDcgPj4gOCkgJiAweDBGXSArXG4gICAgICAgIEhFWF9DSEFSU1soaDcgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toNyAmIDB4MEZdO1xuICAgIH1cbiAgICByZXR1cm4gaGV4O1xuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUudG9TdHJpbmcgPSBTaGEyNTYucHJvdG90eXBlLmhleDtcblxuICBTaGEyNTYucHJvdG90eXBlLmRpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZpbmFsaXplKCk7XG5cbiAgICB2YXIgaDAgPSB0aGlzLmgwLCBoMSA9IHRoaXMuaDEsIGgyID0gdGhpcy5oMiwgaDMgPSB0aGlzLmgzLCBoNCA9IHRoaXMuaDQsIGg1ID0gdGhpcy5oNSxcbiAgICAgIGg2ID0gdGhpcy5oNiwgaDcgPSB0aGlzLmg3O1xuXG4gICAgdmFyIGFyciA9IFtcbiAgICAgIChoMCA+PiAyNCkgJiAweEZGLCAoaDAgPj4gMTYpICYgMHhGRiwgKGgwID4+IDgpICYgMHhGRiwgaDAgJiAweEZGLFxuICAgICAgKGgxID4+IDI0KSAmIDB4RkYsIChoMSA+PiAxNikgJiAweEZGLCAoaDEgPj4gOCkgJiAweEZGLCBoMSAmIDB4RkYsXG4gICAgICAoaDIgPj4gMjQpICYgMHhGRiwgKGgyID4+IDE2KSAmIDB4RkYsIChoMiA+PiA4KSAmIDB4RkYsIGgyICYgMHhGRixcbiAgICAgIChoMyA+PiAyNCkgJiAweEZGLCAoaDMgPj4gMTYpICYgMHhGRiwgKGgzID4+IDgpICYgMHhGRiwgaDMgJiAweEZGLFxuICAgICAgKGg0ID4+IDI0KSAmIDB4RkYsIChoNCA+PiAxNikgJiAweEZGLCAoaDQgPj4gOCkgJiAweEZGLCBoNCAmIDB4RkYsXG4gICAgICAoaDUgPj4gMjQpICYgMHhGRiwgKGg1ID4+IDE2KSAmIDB4RkYsIChoNSA+PiA4KSAmIDB4RkYsIGg1ICYgMHhGRixcbiAgICAgIChoNiA+PiAyNCkgJiAweEZGLCAoaDYgPj4gMTYpICYgMHhGRiwgKGg2ID4+IDgpICYgMHhGRiwgaDYgJiAweEZGXG4gICAgXTtcbiAgICBpZiAoIXRoaXMuaXMyMjQpIHtcbiAgICAgIGFyci5wdXNoKChoNyA+PiAyNCkgJiAweEZGLCAoaDcgPj4gMTYpICYgMHhGRiwgKGg3ID4+IDgpICYgMHhGRiwgaDcgJiAweEZGKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBTaGEyNTYucHJvdG90eXBlLmFycmF5ID0gU2hhMjU2LnByb3RvdHlwZS5kaWdlc3Q7XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZpbmFsaXplKCk7XG5cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuaXMyMjQgPyAyOCA6IDMyKTtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoMCwgdGhpcy5oMCk7XG4gICAgZGF0YVZpZXcuc2V0VWludDMyKDQsIHRoaXMuaDEpO1xuICAgIGRhdGFWaWV3LnNldFVpbnQzMig4LCB0aGlzLmgyKTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoMTIsIHRoaXMuaDMpO1xuICAgIGRhdGFWaWV3LnNldFVpbnQzMigxNiwgdGhpcy5oNCk7XG4gICAgZGF0YVZpZXcuc2V0VWludDMyKDIwLCB0aGlzLmg1KTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoMjQsIHRoaXMuaDYpO1xuICAgIGlmICghdGhpcy5pczIyNCkge1xuICAgICAgZGF0YVZpZXcuc2V0VWludDMyKDI4LCB0aGlzLmg3KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBmdW5jdGlvbiBIbWFjU2hhMjU2KGtleSwgaXMyMjQsIHNoYXJlZE1lbW9yeSkge1xuICAgIHZhciBpLCB0eXBlID0gdHlwZW9mIGtleTtcbiAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBieXRlcyA9IFtdLCBsZW5ndGggPSBrZXkubGVuZ3RoLCBpbmRleCA9IDAsIGNvZGU7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29kZSA9IGtleS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoY29kZSA8IDB4ODApIHtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9IGNvZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHhjMCB8IChjb2RlID4+IDYpKTtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweDgwIHwgKGNvZGUgJiAweDNmKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ZDgwMCB8fCBjb2RlID49IDB4ZTAwMCkge1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ZTAgfCAoY29kZSA+PiAxMikpO1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ODAgfCAoKGNvZGUgPj4gNikgJiAweDNmKSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHg4MCB8IChjb2RlICYgMHgzZikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvZGUgPSAweDEwMDAwICsgKCgoY29kZSAmIDB4M2ZmKSA8PCAxMCkgfCAoa2V5LmNoYXJDb2RlQXQoKytpKSAmIDB4M2ZmKSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHhmMCB8IChjb2RlID4+IDE4KSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHg4MCB8ICgoY29kZSA+PiAxMikgJiAweDNmKSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpKTtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweDgwIHwgKGNvZGUgJiAweDNmKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGtleSA9IGJ5dGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICAgIH0gZWxzZSBpZiAoQVJSQVlfQlVGRkVSICYmIGtleS5jb25zdHJ1Y3RvciA9PT0gQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICBrZXkgPSBuZXcgVWludDhBcnJheShrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgICBpZiAoIUFSUkFZX0JVRkZFUiB8fCAhQXJyYXlCdWZmZXIuaXNWaWV3KGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkubGVuZ3RoID4gNjQpIHtcbiAgICAgIGtleSA9IChuZXcgU2hhMjU2KGlzMjI0LCB0cnVlKSkudXBkYXRlKGtleSkuYXJyYXkoKTtcbiAgICB9XG5cbiAgICB2YXIgb0tleVBhZCA9IFtdLCBpS2V5UGFkID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDY0OyArK2kpIHtcbiAgICAgIHZhciBiID0ga2V5W2ldIHx8IDA7XG4gICAgICBvS2V5UGFkW2ldID0gMHg1YyBeIGI7XG4gICAgICBpS2V5UGFkW2ldID0gMHgzNiBeIGI7XG4gICAgfVxuXG4gICAgU2hhMjU2LmNhbGwodGhpcywgaXMyMjQsIHNoYXJlZE1lbW9yeSk7XG5cbiAgICB0aGlzLnVwZGF0ZShpS2V5UGFkKTtcbiAgICB0aGlzLm9LZXlQYWQgPSBvS2V5UGFkO1xuICAgIHRoaXMuaW5uZXIgPSB0cnVlO1xuICAgIHRoaXMuc2hhcmVkTWVtb3J5ID0gc2hhcmVkTWVtb3J5O1xuICB9XG4gIEhtYWNTaGEyNTYucHJvdG90eXBlID0gbmV3IFNoYTI1NigpO1xuXG4gIEhtYWNTaGEyNTYucHJvdG90eXBlLmZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIFNoYTI1Ni5wcm90b3R5cGUuZmluYWxpemUuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5pbm5lcikge1xuICAgICAgdGhpcy5pbm5lciA9IGZhbHNlO1xuICAgICAgdmFyIGlubmVySGFzaCA9IHRoaXMuYXJyYXkoKTtcbiAgICAgIFNoYTI1Ni5jYWxsKHRoaXMsIHRoaXMuaXMyMjQsIHRoaXMuc2hhcmVkTWVtb3J5KTtcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMub0tleVBhZCk7XG4gICAgICB0aGlzLnVwZGF0ZShpbm5lckhhc2gpO1xuICAgICAgU2hhMjU2LnByb3RvdHlwZS5maW5hbGl6ZS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZXhwb3J0cyA9IGNyZWF0ZU1ldGhvZCgpO1xuICBleHBvcnRzLnNoYTI1NiA9IGV4cG9ydHM7XG4gIGV4cG9ydHMuc2hhMjI0ID0gY3JlYXRlTWV0aG9kKHRydWUpO1xuICBleHBvcnRzLnNoYTI1Ni5obWFjID0gY3JlYXRlSG1hY01ldGhvZCgpO1xuICBleHBvcnRzLnNoYTIyNC5obWFjID0gY3JlYXRlSG1hY01ldGhvZCh0cnVlKTtcblxuICBpZiAoQ09NTU9OX0pTKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIHJvb3Quc2hhMjU2ID0gZXhwb3J0cy5zaGEyNTY7XG4gICAgcm9vdC5zaGEyMjQgPSBleHBvcnRzLnNoYTIyNDtcbiAgICBpZiAoQU1EKSB7XG4gICAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSkoKTtcbiIsImltcG9ydCB7IG9wZW5Kb3VybmFsRW50cnkgfSBmcm9tICcuL0pvdXJuYWwvb3BlbkpvdXJuYWxFbnRyeSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR2FtZUV4dGVuc2lvbnMsIGxvZ1RleHQgfSBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlU2NlbmUge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsb2dUZXh0KCdBY3RpdmF0ZVNjZW5lIGluaXRpYXRpbmcnKTtcclxuICAgICAgICByZWdpc3RlckdhbWVFeHRlbnNpb25zKCdmbG93Jywge1xyXG4gICAgICAgICAgICBhY3RpdmF0ZVNjZW5lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIENPTkZJRy5UZXh0RWRpdG9yLmVucmljaGVycy5wdXNoKHtcclxuICAgICAgICAgICAgcGF0dGVybjogL0BBY3RpdmF0ZVNjZW5lXFxbKFteXFxdXSspXFxdKD86eyhbXn1dKyl9KT8vZ20sXHJcbiAgICAgICAgICAgIGVucmljaGVyOiAobWF0Y2gsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBbdGFyZ2V0LCBuYW1lXSA9IG1hdGNoLnNsaWNlKDEsIDMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjZW5lID0gZ2FtZS5zY2VuZXMuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnJva2VuID0gc2NlbmUgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1jb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2NvbnRlbnQtbGluayddLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDogYEFjdGl2YXRlU2NlbmUuJHt0YXJnZXR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FjdGl2YXRlU2NlbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAnU2NlbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW46IGJyb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChicm9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmljb24gPSAnZmFzIGZhLXVubGluayc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jbGFzc2VzLnB1c2goJ2Jyb2tlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubmFtZSA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoLi4uZGF0YS5jbGFzc2VzKTtcclxuICAgICAgICAgICAgICAgIGEuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhkYXRhLmRhdGFzZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5kYXRhc2V0W2tdID0gdjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiJHtkYXRhLmljb259XCI+PC9pPjxpIGNsYXNzPVwiZmFzIGZhLW1hcFwiPjwvaT4gJHtkYXRhLm5hbWV9YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5kYXRhc2V0ICYmIHRhcmdldC5kYXRhc2V0LnR5cGUgPT09ICdBY3RpdmF0ZVNjZW5lJyAmJiB0YXJnZXQuZGF0YXNldC5icm9rZW4gPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGFjdGl2YXRlU2NlbmUodGFyZ2V0LmRhdGFzZXQuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9nVGV4dCgnQWN0aXZhdGVTY2VuZSBpbml0aWF0ZWQnKTtcclxuICAgIH1cclxuICAgIHJlYWR5KCkgeyB9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGl2YXRlU2NlbmUodGFyZ2V0U2NlbmVJZCkge1xyXG4gICAgbG9nVGV4dChgQWN0aXZhdGVTY2VuZSBhY3RpdmF0aW5nOiAke3RhcmdldFNjZW5lSWR9YCk7XHJcbiAgICBjb25zdCBjdXJyZW50U2NlbmVKb3VybmFsID0gZ2FtZS5zY2VuZXMuYWN0aXZlLmpvdXJuYWw7XHJcbiAgICBpZiAoY3VycmVudFNjZW5lSm91cm5hbCAmJiBjdXJyZW50U2NlbmVKb3VybmFsLnNoZWV0KSB7XHJcbiAgICAgICAgY3VycmVudFNjZW5lSm91cm5hbC5zaGVldC5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFyZ2V0U2NlbmUgPSBnYW1lLnNjZW5lcy5nZXQodGFyZ2V0U2NlbmVJZCk7XHJcbiAgICBpZiAodGFyZ2V0U2NlbmUpIHtcclxuICAgICAgICBhd2FpdCB0YXJnZXRTY2VuZS5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIG9wZW5Kb3VybmFsRW50cnkodGFyZ2V0U2NlbmUuam91cm5hbCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJHYW1lRXh0ZW5zaW9ucyB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgc2hvd1RlbXBvcmFyeUpvdXJuYWxFbnRyeSB9IGZyb20gJy4vc2hvd1RlbXBvcmFyeUpvdXJuYWxFbnRyeSc7XHJcbmltcG9ydCB7IG9wZW5Kb3VybmFsRW50cnkgfSBmcm9tICcuL29wZW5Kb3VybmFsRW50cnknO1xyXG5leHBvcnQgeyBzaG93VGVtcG9yYXJ5Sm91cm5hbEVudHJ5LCBvcGVuSm91cm5hbEVudHJ5IH07XHJcbmV4cG9ydCBjbGFzcyBKb3VybmFsTW9kdWxlIHtcclxuICAgIGluaXQoKSB7IH1cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHJlZ2lzdGVyR2FtZUV4dGVuc2lvbnMoJ2Zsb3cnLCB7XHJcbiAgICAgICAgICAgIHNob3dUZW1wb3JhcnlKb3VybmFsRW50cnksXHJcbiAgICAgICAgICAgIG9wZW5Kb3VybmFsRW50cnksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xvYmFsU2V0dGluZ3MgfSBmcm9tICcuLi9PZ1NldHRpbmdzJztcclxuaW1wb3J0IHsgbG9nV2FybiB9IGZyb20gJy4uL3V0aWxzJztcclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Kb3VybmFsRW50cnkoam91cm5hbCkge1xyXG4gICAgaWYgKGpvdXJuYWwgJiYgam91cm5hbC5zaGVldCkge1xyXG4gICAgICAgIGlmICgham91cm5hbC50ZXN0VXNlclBlcm1pc3Npb24oZ2FtZS51c2VyLCAnTElNSVRFRCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgWW91IGRvIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gdmlldyB0aGlzICR7am91cm5hbC5kb2N1bWVudE5hbWV9IGpvdXJuYWwgZW50cnkuYDtcclxuICAgICAgICAgICAgbG9nV2FybihtZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbFNldHRpbmdzLmFjY2Vzc0RlbmllZFNpbGVudGx5RmFpbHMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdWkubm90aWZpY2F0aW9ucy53YXJuKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqb3VybmFsLnNoZWV0LnJlbmRlcih0cnVlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBsb2dFcnJvciwgbG9nVGV4dCB9IGZyb20gJy4uL3V0aWxzJztcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3dUZW1wb3JhcnlKb3VybmFsRW50cnkob3B0aW9ucykge1xyXG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCBKb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXHJcbiAgICAgICAgcGFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG9wdGlvbnMuY29udGVudCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBvd25lcnNoaXA6IHsgZGVmYXVsdDogQ09OU1QuRE9DVU1FTlRfT1dORVJTSElQX0xFVkVMUy5PQlNFUlZFUiB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIG93bmVyc2hpcDogeyBkZWZhdWx0OiBDT05TVC5ET0NVTUVOVF9PV05FUlNISVBfTEVWRUxTLk9CU0VSVkVSIH0sXHJcbiAgICB9LCB7IHRlbXBvcmFyeTogdHJ1ZSwgcmVuZGVyU2hlZXQ6IHRydWUgfSk7XHJcbiAgICBpZiAoIWVudHJ5KSB7XHJcbiAgICAgICAgbG9nRXJyb3IoJ05vIGVudHJ5IHdhcyBjcmVhdGVkLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxvZ1RleHQoYEpvdXJuYWwgZW50cnkgJyR7b3B0aW9ucy5uYW1lfScgY3JlYXRlZC5gLCBlbnRyeSk7XHJcbiAgICBhd2FpdCBlbnRyeS5zaGVldD8ucmVuZGVyKHRydWUpO1xyXG59XHJcbi8vIGFzeW5jIHNob3dBbmREZWxldGVOZXdKb3VybmFsRW50cnkob3B0aW9uczogSUNyZWF0ZVNob3dBbmREZWxldGVOZXdKb3VybmFsRW50cnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuLy8gICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgSm91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbi8vICAgICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxyXG4vLyAgICAgICAgIGNvbnRlbnQ6IG9wdGlvbnMuY29udGVudCxcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgaWYgKGVudHJ5ID09PSB1bmRlZmluZWQpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdObyBlbnRyeSB3YXMgY3JlYXRlZC4nKTtcclxuLy8gICAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcbi8vICAgICBsb2dUZXh0KGBKb3VybmFsIGVudHJ5ICcke29wdGlvbnMubmFtZX0nIGNyZWF0ZWQgd2l0aCBpc1Blcm1hbmVudCA9ICR7b3B0aW9ucy5pc1Blcm1hbmVudH0uYCk7XHJcbi8vICAgICBhd2FpdCBlbnRyeS5zaG93KCd0ZXh0JywgdHJ1ZSk7XHJcbi8vXHJcbi8vICAgICBpZiAob3B0aW9ucy5pc1Blcm1hbmVudCkge1xyXG4vLyAgICAgICAgIHJldHVybjtcclxuLy8gICAgIH1cclxuLy8gICAgIGNvbnN0IGRlbGV0ZUVudHJ5SW5NUyA9IG9wdGlvbnMuZGVsZXRlRGVsYXkgfHwgNjAwMDA7XHJcbi8vICAgICBsb2dUZXh0KGBTY2hlZHVsaW5nIGpvdXJuYWwgZW50cnkgZGVsZXRpb24gaW4gJHtkZWxldGVFbnRyeUluTVN9IG1zLmApO1xyXG4vLyAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5kZWJ1ZygnRGVsZXRpbmcgam91cm5hbCBlbnRyeScsIGVudHJ5KTtcclxuLy8gICAgICAgICBhd2FpdCBlbnRyeS5kZWxldGUoKTtcclxuLy8gICAgICAgICBsb2dUZXh0KCdKb3VybmFsIGVudHJ5IGRlbGV0ZWQnKTtcclxuLy8gICAgIH0sIGRlbGV0ZUVudHJ5SW5NUyk7XHJcbi8vXHJcbi8vICAgICAvLyBWMTAgbXVsdGktcGFnZSBzeW50YXhcclxuLy8gICAgIC8vIEpvdXJuYWxFbnRyeS5jcmVhdGUoe25hbWU6IFwiSm91cm5hbCBuYW1lXCIsIHBhZ2VzOlt7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiUXVlc3QgaG9va1wiLCB0ZXh0Ontjb250ZW50OiBgSFRNTCBjb250ZW50IGhlcmVgfX1dfSlcclxuLy8gfVxyXG4vL1xyXG4vLyBpbnRlcmZhY2UgSUNyZWF0ZVNob3dBbmREZWxldGVOZXdKb3VybmFsRW50cnkge1xyXG4vLyAgICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgICAgY29udGVudDogc3RyaW5nO1xyXG4vLyAgICAgZGVsZXRlRGVsYXk/OiBudW1iZXI7XHJcbi8vICAgICBpc1Blcm1hbmVudDogYm9vbGVhbjtcclxuLy8gfVxyXG4iLCJpbXBvcnQgeyBsb2dUZXh0IH0gZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCBjb25zdCBuYW1lc3BhY2UgPSAnb2ctZXhwZXJpbWVudHMnO1xyXG5leHBvcnQgY2xhc3MgT2dTZXR0aW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKGtleSwgZGVmYXVsdFZhbHVlLCBzZXR0aW5ncywgaW5pdCA9ICgpID0+IHsgfSkge1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLmJlZm9yZVVwZGF0ZSA9ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLmFmdGVyVXBkYXRlID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIGluaXQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBsb2dUZXh0KCdPZ1NldHRpbmcgZ2V0dGluZyByZWFkeScsIHRoaXMua2V5LCB0aGlzLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgZ2FtZS5zZXR0aW5ncy5yZWdpc3RlcihuYW1lc3BhY2UsIHRoaXMua2V5LCB7XHJcbiAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgIHNjb3BlOiAnY2xpZW50JyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRoaXMuZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVmb3JlVXBkYXRlKHRoaXMsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJVcGRhdGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBnYW1lLnNldHRpbmdzLmdldChuYW1lc3BhY2UsIHRoaXMua2V5KTtcclxuICAgICAgICBsb2dUZXh0KCdPZ1NldHRpbmcgaXMgcmVhZHknLCB7XHJcbiAgICAgICAgICAgIGtleTogdGhpcy5rZXksXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBnYW1lLnNldHRpbmdzLnNldChuYW1lc3BhY2UsIHRoaXMua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxTZXR0aW5ncyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc0RlbmllZFNpbGVudGx5RmFpbHMgPSBuZXcgT2dTZXR0aW5nKCdhY2Nlc3NEZW5pZWRTaWxlbnRseUZhaWxzJywgdHJ1ZSwge1xyXG4gICAgICAgICAgICBuYW1lOiAnRmFpbCBzaWxlbnRseT8nLFxyXG4gICAgICAgICAgICBoaW50OiBgSWYgZW5hYmxlZCwgd2FybmluZ3Mgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIFVJIHdoZW4gdGhlIHVzZXIgY2Fubm90IG9wZW4gc2NlbmUgbm90ZXMgb3Igb3RoZXIgZWxlbWVudHMuXHJcbiAgICAgICAgVGhpcyBpcyBtYWlubHkgdXNlZCBieSB0aGUgZXh0ZW5zaW9ucy4gXHJcbiAgICAgICAgVGhlIHdhcm5pbmdzIHdpbGwgc3RpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBjb25zb2xlLiBcclxuICAgICAgICBJZiB5b3UgaGF2ZSBubyBjbHVlIHdoYXQgdGhpcyBpcywgY2hhbmNlcyBhcmUgeW91IHNob3VsZCBub3Qgd29ycnkgYWJvdXQgaXQuYCxcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7IH1cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRGVuaWVkU2lsZW50bHlGYWlscy5yZWFkeSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBnbG9iYWxTZXR0aW5ncyA9IG5ldyBHbG9iYWxTZXR0aW5ncygpO1xyXG4iLCJpbXBvcnQgeyBPZ1NldHRpbmcgfSBmcm9tICcuL09nU2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBvcGVuSm91cm5hbEVudHJ5IH0gZnJvbSAnLi9Kb3VybmFsL29wZW5Kb3VybmFsRW50cnknO1xyXG5pbXBvcnQgeyByZWdpc3RlckdhbWVFeHRlbnNpb25zLCBsb2dUZXh0IH0gZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2NlbmVOb3RlcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9wZW5TY2VuZU5vdGVzT25SZWFkeSA9IG5ldyBPZ1NldHRpbmcoJ29wZW5TY2VuZU5vdGVzT25SZWFkeScsIHRydWUsIHtcclxuICAgICAgICAgICAgbmFtZTogJ0F1dG8tb3BlbiBzY2VuZSBub3Rlcz8nLFxyXG4gICAgICAgICAgICBoaW50OiAnSWYgZW5hYmxlZCwgdGhlIHNjZW5lIG5vdGVzIG9mIHRoZSBjdXJyZW50IHNjZW5lIHdpbGwgb3BlbiB3aGVuIHRoZSBzZXJ2ZXIgZmlyc3QgbG9hZC4nLFxyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsb2dUZXh0KCdPcGVuU2NlbmVOb3RlcyBpbml0aWF0aW5nJyk7XHJcbiAgICAgICAgcmVnaXN0ZXJHYW1lRXh0ZW5zaW9ucygnZmxvdycsIHtcclxuICAgICAgICAgICAgb3BlblNjZW5lTm90ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9nVGV4dCgnT3BlblNjZW5lTm90ZXMgaW5pdGlhdGVkJyk7XHJcbiAgICB9XHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBsb2dUZXh0KCdPcGVuU2NlbmVOb3RlcyBpcyBnZXR0aW5nIHJlYWR5Jyk7XHJcbiAgICAgICAgdGhpcy5vcGVuU2NlbmVOb3Rlc09uUmVhZHkucmVhZHkoKTtcclxuICAgICAgICBpZiAodGhpcy5vcGVuU2NlbmVOb3Rlc09uUmVhZHkudmFsdWUpIHtcclxuICAgICAgICAgICAgb3BlblNjZW5lTm90ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nVGV4dCgnT3BlblNjZW5lTm90ZXMgaXMgcmVhZHknKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gb3BlblNjZW5lTm90ZXMoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U2NlbmVKb3VybmFsID0gZ2FtZS5zY2VuZXMuYWN0aXZlLmpvdXJuYWw7XHJcbiAgICBvcGVuSm91cm5hbEVudHJ5KGN1cnJlbnRTY2VuZUpvdXJuYWwpO1xyXG59XHJcbiIsIi8vIGNvbnN0IHNpZ25hbFIgPSByZXF1aXJlKCdAbWljcm9zb2Z0L3NpZ25hbHInKTtcclxuaW1wb3J0IHsgSHViQ29ubmVjdGlvbkJ1aWxkZXIgfSBmcm9tICdAbWljcm9zb2Z0L3NpZ25hbHInO1xyXG5pbXBvcnQgS2V5Y2xvYWsgZnJvbSAna2V5Y2xvYWstanMnO1xyXG5pbXBvcnQgeyByZWdpc3RlckdhbWVFeHRlbnNpb25zLCBsb2dFcnJvciwgbG9nVGV4dCwgbG9nV2FybiB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBPZ1NldHRpbmcgfSBmcm9tICcuL09nU2V0dGluZ3MnO1xyXG5jbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5Y2xvYWsgPSBuZXcgS2V5Y2xvYWsoe1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvJyxcclxuICAgICAgICAgICAgcmVhbG06ICdPZ0F1dGgnLFxyXG4gICAgICAgICAgICBjbGllbnRJZDogJ29nLXNlcnZlcicsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgdG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xyXG4gICAgfVxyXG4gICAgc2V0IHRva2VuKHYpIHtcclxuICAgICAgICB0aGlzLl90b2tlbiA9IHY7XHJcbiAgICB9XHJcbiAgICBnZXQgYXV0aGVudGljYXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aGVudGljYXRlZDtcclxuICAgIH1cclxuICAgIHNldCBhdXRoZW50aWNhdGVkKHYpIHtcclxuICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGVkID0gdjtcclxuICAgIH1cclxuICAgIGdldCB1c2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXljbG9haztcclxuICAgIH1cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICBhd2FpdCB0aGlzLl9rZXljbG9ha1xyXG4gICAgICAgICAgICAuaW5pdCh7XHJcbiAgICAgICAgICAgIG9uTG9hZDogJ2xvZ2luLXJlcXVpcmVkJyxcclxuICAgICAgICAgICAgLy8gc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaTogJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAwLycsXHJcbiAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgbG9nVGV4dChhdXRoZW50aWNhdGVkID8gJ2F1dGhlbnRpY2F0ZWQnIDogJ25vdCBhdXRoZW50aWNhdGVkJyk7XHJcbiAgICAgICAgICAgIG1lLmF1dGhlbnRpY2F0ZWQgPSBhdXRoZW50aWNhdGVkO1xyXG4gICAgICAgICAgICBpZiAoYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgbWUudG9rZW4gPSBtZS5fa2V5Y2xvYWsudG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGluaXRpYWxpemUnLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgU2VydmVyUHVzaCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aFNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmVuYWJsZVNlcnZlclB1c2ggPSBuZXcgT2dTZXR0aW5nKCdlbmFibGVTZXJ2ZXJQdXNoJywgdHJ1ZSwge1xyXG4gICAgICAgICAgICBuYW1lOiAnRW5hYmxlIHRoZSBzZXJ2ZXItcHVzaCBtb2R1bGU/JyxcclxuICAgICAgICAgICAgaGludDogJ0lmIGVuYWJsZWQsIHRoZSBtb2R1bGUgd2lsbCBsb2FkIGFuZCBldmVyeW9uZSB3aWxsIG5lZWQgdG8gYXV0aGVudGljYXRlIGFnYWludCB0aGUgS2V5Q2xvY2sgc2VydmVyLicsXHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHNjb3BlOiAnd29ybGQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBsb2dUZXh0KCdTZXJ2ZXJQdXNoIGluaXRpYWxpemluZycpO1xyXG4gICAgICAgIGxvZ1RleHQoJ1NlcnZlclB1c2ggaW5pdGlhbGl6ZWQnKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHJlYWR5KCkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1NlcnZlclB1c2ggZ2V0dGluZyByZWFkeScpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlU2VydmVyUHVzaC5yZWFkeSgpO1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVTZXJ2ZXJQdXNoLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hdXRoLmluaXQoKTtcclxuICAgICAgICBpZiAoIXRoaXMuYXV0aC5hdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgIGxvZ0Vycm9yKFwiTm90IGF1dGhlbnRpY2F0ZWQhIENhbid0IHByb2NlZWQgd2l0aCBTZXJ2ZXJQdXNoLnJlYWR5LlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXNlciA9IHRoaXMuYXV0aC51c2VyO1xyXG4gICAgICAgIGlmICghdXNlci50b2tlblBhcnNlZCkge1xyXG4gICAgICAgICAgICBsb2dFcnJvcignVGhlIGB0b2tlblBhcnNlZGAgcHJvcGVydHkgaXMgbm90IGRlZmluZWQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbm5lY3Rpb24gPSBuZXcgSHViQ29ubmVjdGlvbkJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAud2l0aFVybCgnaHR0cHM6Ly9sb2NhbGhvc3Q6NzI2My9odWJzL2RlZmF1bHQnLCB7XHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuRmFjdG9yeTogKCkgPT4gdGhpcy5hdXRoLnRva2VuLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5idWlsZCgpO1xyXG4gICAgICAgIHJlZ2lzdGVyR2FtZUV4dGVuc2lvbnMoJ3NlcnZlclB1c2gnLCB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24sXHJcbiAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLnRva2VuUGFyc2VkLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdXNlci50b2tlblBhcnNlZC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiB1c2VyLnRva2VuUGFyc2VkLmdpdmVuX25hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTogdXNlci50b2tlblBhcnNlZC5mYW1pbHlfbmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnRva2VuUGFyc2VkLnByZWZlcnJlZF91c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIGFjY2Vzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWxtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVzOiB1c2VyLnRva2VuUGFyc2VkLnJlYWxtX2FjY2Vzcz8ucm9sZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTogdXNlci50b2tlblBhcnNlZC5yZXNvdXJjZV9hY2Nlc3MsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBwaW5nOiAoKSA9PiBjb25uZWN0aW9uLmludm9rZSgnUGluZycpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbm5lY3Rpb24ub24oJ3BvbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvZ1RleHQoJ3BvbmcnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25uZWN0aW9uLm9uKCdleGVjdXRlJywgdGhpcy5leGVjdXRlKTtcclxuICAgICAgICBjb25uZWN0aW9uLm9uKCdleGVjdXRlQXN5bmMnLCB0aGlzLmV4ZWN1dGVBc3luYyk7XHJcbiAgICAgICAgY29ubmVjdGlvbi5vbmNsb3NlKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBsb2dXYXJuKCdjb25uZWN0aW9uLm9uY2xvc2UnLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29ubmVjdGlvbi5zdGFydCgpO1xyXG4gICAgICAgIGxvZ1RleHQoJ1NlcnZlclB1c2ggaXMgcmVhZHknKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGV4ZWN1dGUob3B0aW9ucywgdXNlcikge1xyXG4gICAgICAgIGxvZ1RleHQoJ1NlcnZlclB1c2guZXhlY3V0ZScsIG9wdGlvbnMsIHVzZXIpO1xyXG4gICAgICAgIGV2YWwob3B0aW9ucy5jb21tYW5kKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGV4ZWN1dGVBc3luYyhvcHRpb25zLCB1c2VyKSB7XHJcbiAgICAgICAgbG9nVGV4dCgnU2VydmVyUHVzaC5leGVjdXRlQXN5bmMnLCBvcHRpb25zLCB1c2VyKTtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBldmFsKG9wdGlvbnMuY29tbWFuZCkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9nU2V0dGluZyB9IGZyb20gJy4vT2dTZXR0aW5ncyc7XHJcbmltcG9ydCB7IGxvZ1RleHQsIHJlZ2lzdGVyR2FtZUV4dGVuc2lvbnMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi9jc3MnO1xyXG5jb25zdCBzdHlsZXMgPSBjc3MgYFxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAud2luZG93LXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC53aW5kb3ctaGVhZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwIG5vbmU7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIGhlYWRlciA6bm90KGg0KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLndpbmRvdy1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5pdGVtIHtcclxuICAgICAgICAvKiB3aWR0aDogNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDRyZW07ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcclxuICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xyXG4gICAgICAgIGJvcmRlcjogMC41ZW0gc29saWQ7XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5pdGVtLnN0YXR1cy1sb3cge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya3JlZDtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLml0ZW0uc3RhdHVzLWF2ZXJhZ2Uge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuaXRlbS5zdGF0dXMtZ29vZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICB9XHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5pdGVtLnN0YXR1cy1kZWZlYXRlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAjc29jaWFsLWVuY291bnRlci10cmFja2VyIC5pdGVtIHN0cm9uZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggNXB4IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuaXRlbSBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMHB4IGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogNGVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLmVkaXQtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgI3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlciAuZWRpdC1jb250YWluZXIgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgICNzb2NpYWwtZW5jb3VudGVyLXRyYWNrZXIgLmVkaXQtY29udGFpbmVyIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogM2VtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAwcHggbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuYDtcclxuY2xhc3MgU29jaWFsRW5jb3VudGVyVHJhY2tlckZvcm0gZXh0ZW5kcyBGb3JtQXBwbGljYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0ID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKG9iamVjdCwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTdHJhaW4gPSBvcHRpb25zLnBsYXllclN0cmFpbjtcclxuICAgICAgICB0aGlzLm1heFBsYXllclN0cmFpbiA9IG9wdGlvbnMubWF4UGxheWVyU3RyYWluO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0U3RyYWluID0gb3B0aW9ucy50YXJnZXRTdHJhaW47XHJcbiAgICAgICAgdGhpcy5tYXhUYXJnZXRTdHJhaW4gPSBvcHRpb25zLm1heFRhcmdldFN0cmFpbjtcclxuICAgICAgICB0aGlzLmRpc3BsYXlUYXJnZXRUb1BsYXllcnMgPSBvcHRpb25zLmRpc3BsYXlUYXJnZXRUb1BsYXllcnM7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNHTSgpIHtcclxuICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZ2FtZS51c2VyLmlzR007XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKG9wdGlvbnMpIHtcclxuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgd2luZG93IGF0IHRoZSBib3R0b20gZHVyaW5nIHRoZSBmaXJzdCByZW5kZXJcclxuICAgICAgICBpZiAodGhpcy5fcHJpb3JTdGF0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3R5bGVzLFxyXG4gICAgICAgICAgICBwbGF5ZXJTdHJhaW46IHRoaXMucGxheWVyU3RyYWluLnZhbHVlLFxyXG4gICAgICAgICAgICBtYXhQbGF5ZXJTdHJhaW46IHRoaXMubWF4UGxheWVyU3RyYWluLnZhbHVlLFxyXG4gICAgICAgICAgICBwbGF5ZXJTdGF0dXM6IGNvbXB1dGVTdGF0dXModGhpcy5wbGF5ZXJTdHJhaW4udmFsdWUsIHRoaXMubWF4UGxheWVyU3RyYWluLnZhbHVlKSxcclxuICAgICAgICAgICAgdGFyZ2V0U3RyYWluOiB0aGlzLnRhcmdldFN0cmFpbi52YWx1ZSxcclxuICAgICAgICAgICAgbWF4VGFyZ2V0U3RyYWluOiB0aGlzLm1heFRhcmdldFN0cmFpbi52YWx1ZSxcclxuICAgICAgICAgICAgdGFyZ2V0U3RhdHVzOiBjb21wdXRlU3RhdHVzKHRoaXMudGFyZ2V0U3RyYWluLnZhbHVlLCB0aGlzLm1heFRhcmdldFN0cmFpbi52YWx1ZSksXHJcbiAgICAgICAgICAgIGRpc3BsYXlUYXJnZXRUb1BsYXllcnM6IHRoaXMuZGlzcGxheVRhcmdldFRvUGxheWVycy52YWx1ZSxcclxuICAgICAgICAgICAgaXNHTTogdGhpcy5pc0dNLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gY29tcHV0ZVN0YXR1cyhjdXJyZW50LCBtYXgpIHtcclxuICAgICAgICAgICAgaWYgKG1heCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmtub3duJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdkZWZlYXRlZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgeWVsbG93VGhyZXNob2xkID0gTWF0aC5yb3VuZChtYXggLyAyKTtcclxuICAgICAgICAgICAgY29uc3QgcmVkVGhyZXNob2xkID0gTWF0aC5yb3VuZChtYXggLyA0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQgPD0gcmVkVGhyZXNob2xkID8gJ2xvdycgOiBjdXJyZW50IDw9IHllbGxvd1RocmVzaG9sZCA/ICdhdmVyYWdlJyA6ICdnb29kJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sKSB7XHJcbiAgICAgICAgaHRtbC5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGdhbWUuc29ja2V0Py5lbWl0KCdtb2R1bGUub2ctZXhwZXJpbWVudHMnLCB7IHdoYXR2ZXI6IHRydWUgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5BY3RpdmF0ZUxpc3RlbmVyc0ZvcihodG1sLCAncGxheWVyU3RyYWluJywgKHZhbHVlKSA9PiAodGhpcy5wbGF5ZXJTdHJhaW4udmFsdWUgPSB2YWx1ZSkpO1xyXG4gICAgICAgIHRoaXMuQWN0aXZhdGVMaXN0ZW5lcnNGb3IoaHRtbCwgJ21heFBsYXllclN0cmFpbicsICh2YWx1ZSkgPT4gKHRoaXMubWF4UGxheWVyU3RyYWluLnZhbHVlID0gdmFsdWUpKTtcclxuICAgICAgICB0aGlzLkFjdGl2YXRlTGlzdGVuZXJzRm9yKGh0bWwsICd0YXJnZXRTdHJhaW4nLCAodmFsdWUpID0+ICh0aGlzLnRhcmdldFN0cmFpbi52YWx1ZSA9IHZhbHVlKSk7XHJcbiAgICAgICAgdGhpcy5BY3RpdmF0ZUxpc3RlbmVyc0ZvcihodG1sLCAnbWF4VGFyZ2V0U3RyYWluJywgKHZhbHVlKSA9PiAodGhpcy5tYXhUYXJnZXRTdHJhaW4udmFsdWUgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgQWN0aXZhdGVMaXN0ZW5lcnNGb3IoaHRtbCwgaW5wdXROYW1lLCBzZXR0ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dNKSB7XHJcbiAgICAgICAgICAgIGh0bWwuZmluZChgaW5wdXRbbmFtZT1cIiR7aW5wdXROYW1lfVwiXWApLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGh0bWwuZmluZChgaW5wdXRbbmFtZT1cIiR7aW5wdXROYW1lfVwiXWApLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldHRlcihwYXJzZUludCgkKHRoaXMpLnZhbCgpKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdChzdXBlci5kZWZhdWx0T3B0aW9ucywge1xyXG4gICAgICAgICAgICBpZDogJ3NvY2lhbC1lbmNvdW50ZXItdHJhY2tlcicsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnb2ctc29jaWFsLWVuY291bnRlci10cmFja2VyJ10sXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29jaWFsIEVuY291bnRlcicsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnbW9kdWxlcy9vZy1leHBlcmltZW50cy90ZW1wbGF0ZXMvb2ctc29jaWFsLWVuY291bnRlci10cmFja2VyLmhicycsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfdXBkYXRlT2JqZWN0KGV2ZW50LCBmb3JtRGF0YSkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1NvY2lhbEVuY291bnRlclRyYWNrZXIgfCBfdXBkYXRlT2JqZWN0JywgZXZlbnQsIGZvcm1EYXRhKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNvY2lhbEVuY291bnRlclRyYWNrZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTdHJhaW4gPSBuZXcgT2dTZXR0aW5nKCdwbGF5ZXJTdHJhaW4nLCAwLCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDdXJyZW50IHNvY2lhbCBlbmNvdW50ZXIgcGxheWVycyBTdHJhaW4nLFxyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHNjb3BlOiAnd29ybGQnLFxyXG4gICAgICAgICAgICBjb25maWc6IGZhbHNlLFxyXG4gICAgICAgIH0sIChzZXR0aW5nKSA9PiAoc2V0dGluZy5hZnRlclVwZGF0ZSA9ICgpID0+IHRoaXMuZm9ybS5yZW5kZXIodHJ1ZSkpKTtcclxuICAgICAgICB0aGlzLm1heFBsYXllclN0cmFpbiA9IG5ldyBPZ1NldHRpbmcoJ21heFBsYXllclN0cmFpbicsIDAsIHtcclxuICAgICAgICAgICAgbmFtZTogJ0N1cnJlbnQgc29jaWFsIGVuY291bnRlciBwbGF5ZXJzIFN0cmFpbicsXHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgc2NvcGU6ICd3b3JsZCcsXHJcbiAgICAgICAgICAgIGNvbmZpZzogZmFsc2UsXHJcbiAgICAgICAgfSwgKHNldHRpbmcpID0+IChzZXR0aW5nLmFmdGVyVXBkYXRlID0gKCkgPT4gdGhpcy5mb3JtLnJlbmRlcih0cnVlKSkpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0U3RyYWluID0gbmV3IE9nU2V0dGluZygndGFyZ2V0U3RyYWluJywgMCwge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ3VycmVudCBzb2NpYWwgZW5jb3VudGVyIHBsYXllcnMgU3RyYWluJyxcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBzY29wZTogJ3dvcmxkJyxcclxuICAgICAgICAgICAgY29uZmlnOiBmYWxzZSxcclxuICAgICAgICB9LCAoc2V0dGluZykgPT4gKHNldHRpbmcuYWZ0ZXJVcGRhdGUgPSAoKSA9PiB0aGlzLmZvcm0ucmVuZGVyKHRydWUpKSk7XHJcbiAgICAgICAgdGhpcy5tYXhUYXJnZXRTdHJhaW4gPSBuZXcgT2dTZXR0aW5nKCdtYXhUYXJnZXRTdHJhaW4nLCAwLCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDdXJyZW50IHNvY2lhbCBlbmNvdW50ZXIgcGxheWVycyBTdHJhaW4nLFxyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHNjb3BlOiAnd29ybGQnLFxyXG4gICAgICAgICAgICBjb25maWc6IGZhbHNlLFxyXG4gICAgICAgIH0sIChzZXR0aW5nKSA9PiAoc2V0dGluZy5hZnRlclVwZGF0ZSA9ICgpID0+IHRoaXMuZm9ybS5yZW5kZXIodHJ1ZSkpKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlUYXJnZXRUb1BsYXllcnMgPSBuZXcgT2dTZXR0aW5nKCdkaXNwbGF5VGFyZ2V0VG9QbGF5ZXJzJywgZmFsc2UsIHtcclxuICAgICAgICAgICAgbmFtZTogXCJEaXNwbGF5IHRhcmdldCdzIHN0cmFpbiB2YWx1ZXM/XCIsXHJcbiAgICAgICAgICAgIGhpbnQ6IFwiSWYgZW5hYmxlZCwgdGhlIHBsYXllcnMgd2lsbCBzZWUgdGhlIHNvY2lhbCBlbmNvdW50ZXIncyB0YXJnZXQncyBzdHJhaW4gdmFsdWUuIE90aGVyd2lzZSwgdGhleSB3aWxsIG9ubHkgc2VlIHRoZSBjb2xvciBpbmRpY2F0b3IuXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHNjb3BlOiAnd29ybGQnLFxyXG4gICAgICAgIH0sIChzZXR0aW5nKSA9PiAoc2V0dGluZy5hZnRlclVwZGF0ZSA9ICgpID0+IHRoaXMuZm9ybS5yZW5kZXIodHJ1ZSkpKTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBuZXcgU29jaWFsRW5jb3VudGVyVHJhY2tlckZvcm0odW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgIHBsYXllclN0cmFpbjogdGhpcy5wbGF5ZXJTdHJhaW4sXHJcbiAgICAgICAgICAgIG1heFBsYXllclN0cmFpbjogdGhpcy5tYXhQbGF5ZXJTdHJhaW4sXHJcbiAgICAgICAgICAgIHRhcmdldFN0cmFpbjogdGhpcy50YXJnZXRTdHJhaW4sXHJcbiAgICAgICAgICAgIG1heFRhcmdldFN0cmFpbjogdGhpcy5tYXhUYXJnZXRTdHJhaW4sXHJcbiAgICAgICAgICAgIGRpc3BsYXlUYXJnZXRUb1BsYXllcnM6IHRoaXMuZGlzcGxheVRhcmdldFRvUGxheWVycyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7IH1cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIGxvZ1RleHQoJ1NvY2lhbEVuY291bnRlclRyYWNrZXIgZ2V0dGluZyByZWFkeScpO1xyXG4gICAgICAgIHRoaXMucGxheWVyU3RyYWluLnJlYWR5KCk7XHJcbiAgICAgICAgdGhpcy5tYXhQbGF5ZXJTdHJhaW4ucmVhZHkoKTtcclxuICAgICAgICB0aGlzLnRhcmdldFN0cmFpbi5yZWFkeSgpO1xyXG4gICAgICAgIHRoaXMubWF4VGFyZ2V0U3RyYWluLnJlYWR5KCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFyZ2V0VG9QbGF5ZXJzLnJlYWR5KCk7XHJcbiAgICAgICAgcmVnaXN0ZXJHYW1lRXh0ZW5zaW9ucygnU29jaWFsRW5jb3VudGVyVHJhY2tlcicsIHtcclxuICAgICAgICAgICAgb3BlbjogKGZvcmNlID0gdHJ1ZSkgPT4gdGhpcy5mb3JtLnJlbmRlcihmb3JjZSksXHJcbiAgICAgICAgICAgIGNsb3NlOiAoKSA9PiB0aGlzLmZvcm0uY2xvc2UoKSxcclxuICAgICAgICAgICAgZm9ybTogdGhpcy5mb3JtLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZm9ybS5yZW5kZXIodHJ1ZSk7XHJcbiAgICAgICAgbG9nVGV4dCgnU29jaWFsRW5jb3VudGVyVHJhY2tlciBpcyByZWFkeScpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjc3MoLi4uYXJncykge1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09IDEpIHtcclxuICAgICAgICByZXR1cm4gYXJnc1swXVswXTtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnc1swXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdCArPSBhcmdzWzBdW2ldO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgIGlmIChuZXh0SW5kZXggPCBhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gYXJnc1tuZXh0SW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgbmFtZXNwYWNlIH0gZnJvbSAnLi9PZ1NldHRpbmdzJztcclxuLy8gQ29uc29sZSB3cmFwcGVyc1xyXG5jb25zdCBwcmVmaXggPSBgJHtuYW1lc3BhY2V9IHxgO1xyXG5leHBvcnQgZnVuY3Rpb24gbG9nVGV4dCguLi5kYXRhKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKHByZWZpeCwgLi4uZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ1dhcm4oLi4uZGF0YSkge1xyXG4gICAgY29uc29sZS53YXJuKHByZWZpeCwgLi4uZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ0Vycm9yKC4uLmRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IocHJlZml4LCAuLi5kYXRhKTtcclxufVxyXG4vLyBHYW1lIGV4dGVuc2lvbnNcclxuY29uc3QgZ2FtZUV4dGVuc2lvbnNLZXkgPSAnb2cnO1xyXG5mdW5jdGlvbiBpbml0aWFsaXplT2dFeHRlbnNpb25zKCkge1xyXG4gICAgZ2FtZVtnYW1lRXh0ZW5zaW9uc0tleV0gPSB7fTtcclxufVxyXG5mdW5jdGlvbiBlbmZvcmNlT2dFeHRlbnNpb25zSW5pdGlhbGl6ZWQoKSB7XHJcbiAgICBpZiAoZ2FtZVtnYW1lRXh0ZW5zaW9uc0tleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGluaXRpYWxpemVPZ0V4dGVuc2lvbnMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJHYW1lRXh0ZW5zaW9ucyhrZXksIHNldHRpbmcpIHtcclxuICAgIGVuZm9yY2VPZ0V4dGVuc2lvbnNJbml0aWFsaXplZCgpO1xyXG4gICAgZ2FtZVtnYW1lRXh0ZW5zaW9uc0tleV1ba2V5XSA9IHtcclxuICAgICAgICAuLi5nYW1lW2dhbWVFeHRlbnNpb25zS2V5XVtrZXldLFxyXG4gICAgICAgIC4uLnNldHRpbmcsXHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCBiYXNlNjQgZnJvbSAnYmFzZTY0LWpzJztcbmltcG9ydCBzaGEyNTYgZnJvbSAnanMtc2hhMjU2JztcblxuLypcbiAqIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzXG4gKiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIGFzIGluZGljYXRlZCBieSB0aGUgQGF1dGhvciB0YWdzLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBFcnJvcignS2V5Y2xvYWsgcmVxdWlyZXMgYW4gZW52aXJvbm1lbnQgdGhhdCBzdXBwb3J0cyBQcm9taXNlcy4gTWFrZSBzdXJlIHRoYXQgeW91IGluY2x1ZGUgdGhlIGFwcHJvcHJpYXRlIHBvbHlmaWxsLicpO1xufVxuXG52YXIgbG9nZ2VkUHJvbWlzZURlcHJlY2F0aW9uID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGxvZ1Byb21pc2VEZXByZWNhdGlvbigpIHtcbiAgICBpZiAoIWxvZ2dlZFByb21pc2VEZXByZWNhdGlvbikge1xuICAgICAgICBsb2dnZWRQcm9taXNlRGVwcmVjYXRpb24gPSB0cnVlO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tLRVlDTE9BS10gVXNhZ2Ugb2YgbGVnYWN5IHN0eWxlIHByb21pc2UgbWV0aG9kcyBzdWNoIGFzIGAuZXJyb3IoKWAgYW5kIGAuc3VjY2VzcygpYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzdXBwb3J0IHdpbGwgYmUgcmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMuIFVzZSBzdGFuZGFyZCBzdHlsZSBwcm9taXNlIG1ldGhvZHMgc3VjaCBhcyBgLnRoZW4oKSBhbmQgYC5jYXRjaCgpYCBpbnN0ZWFkLicpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gS2V5Y2xvYWsgKGNvbmZpZykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBLZXljbG9haykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBLZXljbG9hayhjb25maWcpO1xuICAgIH1cblxuICAgIHZhciBrYyA9IHRoaXM7XG4gICAgdmFyIGFkYXB0ZXI7XG4gICAgdmFyIHJlZnJlc2hRdWV1ZSA9IFtdO1xuICAgIHZhciBjYWxsYmFja1N0b3JhZ2U7XG5cbiAgICB2YXIgbG9naW5JZnJhbWUgPSB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgY2FsbGJhY2tMaXN0OiBbXSxcbiAgICAgICAgaW50ZXJ2YWw6IDVcbiAgICB9O1xuXG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgoc2NyaXB0c1tpXS5zcmMuaW5kZXhPZigna2V5Y2xvYWsuanMnKSAhPT0gLTEgfHwgc2NyaXB0c1tpXS5zcmMuaW5kZXhPZigna2V5Y2xvYWsubWluLmpzJykgIT09IC0xKSAmJiBzY3JpcHRzW2ldLnNyYy5pbmRleE9mKCd2ZXJzaW9uPScpICE9PSAtMSkge1xuICAgICAgICAgICAga2MuaWZyYW1lVmVyc2lvbiA9IHNjcmlwdHNbaV0uc3JjLnN1YnN0cmluZyhzY3JpcHRzW2ldLnNyYy5pbmRleE9mKCd2ZXJzaW9uPScpICsgOCkuc3BsaXQoJyYnKVswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciB1c2VOb25jZSA9IHRydWU7XG4gICAgdmFyIGxvZ0luZm8gPSBjcmVhdGVMb2dnZXIoY29uc29sZS5pbmZvKTtcbiAgICB2YXIgbG9nV2FybiA9IGNyZWF0ZUxvZ2dlcihjb25zb2xlLndhcm4pO1xuXG4gICAga2MuaW5pdCA9IGZ1bmN0aW9uIChpbml0T3B0aW9ucykge1xuICAgICAgICBrYy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgY2FsbGJhY2tTdG9yYWdlID0gY3JlYXRlQ2FsbGJhY2tTdG9yYWdlKCk7XG4gICAgICAgIHZhciBhZGFwdGVycyA9IFsnZGVmYXVsdCcsICdjb3Jkb3ZhJywgJ2NvcmRvdmEtbmF0aXZlJ107XG5cbiAgICAgICAgaWYgKGluaXRPcHRpb25zICYmIGFkYXB0ZXJzLmluZGV4T2YoaW5pdE9wdGlvbnMuYWRhcHRlcikgPiAtMSkge1xuICAgICAgICAgICAgYWRhcHRlciA9IGxvYWRBZGFwdGVyKGluaXRPcHRpb25zLmFkYXB0ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGluaXRPcHRpb25zICYmIHR5cGVvZiBpbml0T3B0aW9ucy5hZGFwdGVyID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBhZGFwdGVyID0gaW5pdE9wdGlvbnMuYWRhcHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuQ29yZG92YSB8fCB3aW5kb3cuY29yZG92YSkge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBsb2FkQWRhcHRlcignY29yZG92YScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGFwdGVyID0gbG9hZEFkYXB0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbml0T3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0T3B0aW9ucy51c2VOb25jZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB1c2VOb25jZSA9IGluaXRPcHRpb25zLnVzZU5vbmNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRPcHRpb25zLmNoZWNrTG9naW5JZnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgbG9naW5JZnJhbWUuZW5hYmxlID0gaW5pdE9wdGlvbnMuY2hlY2tMb2dpbklmcmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLmNoZWNrTG9naW5JZnJhbWVJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIGxvZ2luSWZyYW1lLmludGVydmFsID0gaW5pdE9wdGlvbnMuY2hlY2tMb2dpbklmcmFtZUludGVydmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMub25Mb2FkID09PSAnbG9naW4tcmVxdWlyZWQnKSB7XG4gICAgICAgICAgICAgICAga2MubG9naW5SZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5yZXNwb25zZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMucmVzcG9uc2VNb2RlID09PSAncXVlcnknIHx8IGluaXRPcHRpb25zLnJlc3BvbnNlTW9kZSA9PT0gJ2ZyYWdtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBrYy5yZXNwb25zZU1vZGUgPSBpbml0T3B0aW9ucy5yZXNwb25zZU1vZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgdmFsdWUgZm9yIHJlc3BvbnNlTW9kZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMuZmxvdykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5pdE9wdGlvbnMuZmxvdykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdGFuZGFyZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5yZXNwb25zZVR5cGUgPSAnY29kZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW1wbGljaXQnOlxuICAgICAgICAgICAgICAgICAgICAgICAga2MucmVzcG9uc2VUeXBlID0gJ2lkX3Rva2VuIHRva2VuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdoeWJyaWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAga2MucmVzcG9uc2VUeXBlID0gJ2NvZGUgaWRfdG9rZW4gdG9rZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCB2YWx1ZSBmb3IgZmxvdyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGtjLmZsb3cgPSBpbml0T3B0aW9ucy5mbG93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMudGltZVNrZXcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGtjLnRpbWVTa2V3ID0gaW5pdE9wdGlvbnMudGltZVNrZXc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGluaXRPcHRpb25zLnJlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICAgICAga2MucmVkaXJlY3RVcmkgPSBpbml0T3B0aW9ucy5yZWRpcmVjdFVyaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpID0gaW5pdE9wdGlvbnMuc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0T3B0aW9ucy5zaWxlbnRDaGVja1Nzb0ZhbGxiYWNrID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb0ZhbGxiYWNrID0gaW5pdE9wdGlvbnMuc2lsZW50Q2hlY2tTc29GYWxsYmFjaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2Muc2lsZW50Q2hlY2tTc29GYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5wa2NlTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnBrY2VNZXRob2QgIT09IFwiUzI1NlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIHZhbHVlIGZvciBwa2NlTWV0aG9kJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2MucGtjZU1ldGhvZCA9IGluaXRPcHRpb25zLnBrY2VNZXRob2Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5pdE9wdGlvbnMuZW5hYmxlTG9nZ2luZyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAga2MuZW5hYmxlTG9nZ2luZyA9IGluaXRPcHRpb25zLmVuYWJsZUxvZ2dpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtjLmVuYWJsZUxvZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0T3B0aW9ucy5zY29wZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBrYy5zY29wZSA9IGluaXRPcHRpb25zLnNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRPcHRpb25zLm1lc3NhZ2VSZWNlaXZlVGltZW91dCA9PT0gJ251bWJlcicgJiYgaW5pdE9wdGlvbnMubWVzc2FnZVJlY2VpdmVUaW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgICAgIGtjLm1lc3NhZ2VSZWNlaXZlVGltZW91dCA9IGluaXRPcHRpb25zLm1lc3NhZ2VSZWNlaXZlVGltZW91dDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2MubWVzc2FnZVJlY2VpdmVUaW1lb3V0ID0gMTAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWtjLnJlc3BvbnNlTW9kZSkge1xuICAgICAgICAgICAga2MucmVzcG9uc2VNb2RlID0gJ2ZyYWdtZW50JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWtjLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAga2MucmVzcG9uc2VUeXBlID0gJ2NvZGUnO1xuICAgICAgICAgICAga2MuZmxvdyA9ICdzdGFuZGFyZCc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICB2YXIgaW5pdFByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG4gICAgICAgIGluaXRQcm9taXNlLnByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGtjLm9uUmVhZHkgJiYga2Mub25SZWFkeShrYy5hdXRoZW50aWNhdGVkKTtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcyhrYy5hdXRoZW50aWNhdGVkKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY29uZmlnUHJvbWlzZSA9IGxvYWRDb25maWcoKTtcblxuICAgICAgICBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgICAgICB2YXIgZG9Mb2dpbiA9IGZ1bmN0aW9uKHByb21wdCkge1xuICAgICAgICAgICAgICAgIGlmICghcHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvbXB0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGtjLmxvZ2luKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjaGVja1Nzb1NpbGVudGx5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlmcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICAgICAgICAgIHZhciBzcmMgPSBrYy5jcmVhdGVMb2dpblVybCh7cHJvbXB0OiAnbm9uZScsIHJlZGlyZWN0VXJpOiBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpfSk7XG4gICAgICAgICAgICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTtcbiAgICAgICAgICAgICAgICBpZnJtLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwia2V5Y2xvYWstc2lsZW50LWNoZWNrLXNzb1wiKTtcbiAgICAgICAgICAgICAgICBpZnJtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcm0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VDYWxsYmFjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gfHwgaWZybS5jb250ZW50V2luZG93ICE9PSBldmVudC5zb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvYXV0aCA9IHBhcnNlQ2FsbGJhY2soZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NDYWxsYmFjayhvYXV0aCwgaW5pdFByb21pc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZybSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBtZXNzYWdlQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgbWVzc2FnZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge307XG4gICAgICAgICAgICBzd2l0Y2ggKGluaXRPcHRpb25zLm9uTG9hZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrLXNzbyc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dpbklmcmFtZS5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwQ2hlY2tMb2dpbklmcmFtZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tMb2dpbklmcmFtZSgpLnRoZW4oZnVuY3Rpb24gKHVuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2Muc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaSA/IGNoZWNrU3NvU2lsZW50bHkoKSA6IGRvTG9naW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2Muc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaSA/IGNoZWNrU3NvU2lsZW50bHkoKSA6IGRvTG9naW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvZ2luLXJlcXVpcmVkJzpcbiAgICAgICAgICAgICAgICAgICAgZG9Mb2dpbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgdmFsdWUgZm9yIG9uTG9hZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzSW5pdCgpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHBhcnNlQ2FsbGJhY2sod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUod2luZG93Lmhpc3Rvcnkuc3RhdGUsIG51bGwsIGNhbGxiYWNrLm5ld1VybCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBjYWxsYmFjay52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXR1cENoZWNrTG9naW5JZnJhbWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ2FsbGJhY2soY2FsbGJhY2ssIGluaXRQcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy50b2tlbiAmJiBpbml0T3B0aW9ucy5yZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9rZW4oaW5pdE9wdGlvbnMudG9rZW4sIGluaXRPcHRpb25zLnJlZnJlc2hUb2tlbiwgaW5pdE9wdGlvbnMuaWRUb2tlbik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXBDaGVja0xvZ2luSWZyYW1lKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xvZ2luSWZyYW1lKCkudGhlbihmdW5jdGlvbiAodW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLm9uQXV0aFN1Y2Nlc3MgJiYga2Mub25BdXRoU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVDaGVja0lmcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2MudXBkYXRlVG9rZW4oLTEpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2Mub25BdXRoU3VjY2VzcyAmJiBrYy5vbkF1dGhTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhFcnJvciAmJiBrYy5vbkF1dGhFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5vbkxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0T3B0aW9ucy5vbkxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZG9tUmVhZHkoKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICAgICAgdmFyIGNoZWNrUmVhZHlTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBjaGVja1JlYWR5U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGNoZWNrUmVhZHlTdGF0ZSk7XG5cbiAgICAgICAgICAgIGNoZWNrUmVhZHlTdGF0ZSgpOyAvLyBqdXN0IGluIGNhc2UgdGhlIGV2ZW50IHdhcyBhbHJlYWR5IGZpcmVkIGFuZCB3ZSBtaXNzZWQgaXQgKGluIGNhc2UgdGhlIGluaXQgaXMgZG9uZSBsYXRlciB0aGFuIGF0IHRoZSBsb2FkIHRpbWUsIGkuZS4gaXQncyBkb25lIGZyb20gY29kZSlcblxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ1Byb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb21SZWFkeSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oY2hlY2szcENvb2tpZXNTdXBwb3J0ZWQpXG4gICAgICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0luaXQpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZ1Byb21pc2UuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICB9O1xuXG4gICAga2MubG9naW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gYWRhcHRlci5sb2dpbihvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21EYXRhKGxlbikge1xuICAgICAgICAvLyB1c2Ugd2ViIGNyeXB0byBBUElzIGlmIHBvc3NpYmxlXG4gICAgICAgIHZhciBhcnJheSA9IG51bGw7XG4gICAgICAgIHZhciBjcnlwdG8gPSB3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0bztcbiAgICAgICAgaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIHdpbmRvdy5VaW50OEFycmF5KSB7XG4gICAgICAgICAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGxlbik7XG4gICAgICAgICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycmF5KTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIE1hdGggcmFuZG9tXG4gICAgICAgIGFycmF5ID0gbmV3IEFycmF5KGxlbik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGFycmF5W2pdID0gTWF0aC5mbG9vcigyNTYgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb2RlVmVyaWZpZXIobGVuKSB7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVJhbmRvbVN0cmluZyhsZW4sICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tU3RyaW5nKGxlbiwgYWxwaGFiZXQpe1xuICAgICAgICB2YXIgcmFuZG9tRGF0YSA9IGdlbmVyYXRlUmFuZG9tRGF0YShsZW4pO1xuICAgICAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hhcnNbaV0gPSBhbHBoYWJldC5jaGFyQ29kZUF0KHJhbmRvbURhdGFbaV0gJSBhbHBoYWJldC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNoYXJzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVBrY2VDaGFsbGVuZ2UocGtjZU1ldGhvZCwgY29kZVZlcmlmaWVyKSB7XG4gICAgICAgIHN3aXRjaCAocGtjZU1ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIHVzZSBvZiB0aGUgXCJwbGFpblwiIG1ldGhvZCBpcyBjb25zaWRlcmVkIGluc2VjdXJlIGFuZCB0aGVyZWZvcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgICAgICAgIGNhc2UgXCJTMjU2XCI6XG4gICAgICAgICAgICAgICAgLy8gaGFzaCBjb2RlVmVyaWZpZXIsIHRoZW4gZW5jb2RlIGFzIHVybC1zYWZlIGJhc2U2NCB3aXRob3V0IHBhZGRpbmdcbiAgICAgICAgICAgICAgICB2YXIgaGFzaEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc2hhMjU2LmFycmF5QnVmZmVyKGNvZGVWZXJpZmllcikpO1xuICAgICAgICAgICAgICAgIHZhciBlbmNvZGVkSGFzaCA9IGJhc2U2NC5mcm9tQnl0ZUFycmF5KGhhc2hCeXRlcylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAnLScpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFw9L2csICcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlZEhhc2g7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIHZhbHVlIGZvciBwa2NlTWV0aG9kJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkQ2xhaW1zUGFyYW1ldGVyKHJlcXVlc3RlZEFjcil7XG4gICAgICAgIHZhciBjbGFpbXMgPSB7XG4gICAgICAgICAgICBpZF90b2tlbjoge1xuICAgICAgICAgICAgICAgIGFjcjogcmVxdWVzdGVkQWNyXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShjbGFpbXMpO1xuICAgIH1cblxuICAgIGtjLmNyZWF0ZUxvZ2luVXJsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgc3RhdGUgPSBjcmVhdGVVVUlEKCk7XG4gICAgICAgIHZhciBub25jZSA9IGNyZWF0ZVVVSUQoKTtcblxuICAgICAgICB2YXIgcmVkaXJlY3RVcmkgPSBhZGFwdGVyLnJlZGlyZWN0VXJpKG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBjYWxsYmFja1N0YXRlID0ge1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgICAgICAgcmVkaXJlY3RVcmk6IGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdFVyaSlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnByb21wdCkge1xuICAgICAgICAgICAgY2FsbGJhY2tTdGF0ZS5wcm9tcHQgPSBvcHRpb25zLnByb21wdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiYXNlVXJsO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmFjdGlvbiA9PSAncmVnaXN0ZXInKSB7XG4gICAgICAgICAgICBiYXNlVXJsID0ga2MuZW5kcG9pbnRzLnJlZ2lzdGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYXNlVXJsID0ga2MuZW5kcG9pbnRzLmF1dGhvcml6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNjb3BlID0gb3B0aW9ucyAmJiBvcHRpb25zLnNjb3BlIHx8IGtjLnNjb3BlO1xuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICAvLyBpZiBzY29wZSBpcyBub3Qgc2V0LCBkZWZhdWx0IHRvIFwib3BlbmlkXCJcbiAgICAgICAgICAgIHNjb3BlID0gXCJvcGVuaWRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZS5pbmRleE9mKFwib3BlbmlkXCIpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gaWYgb3BlbmlkIHNjb3BlIGlzIG1pc3NpbmcsIHByZWZpeCB0aGUgZ2l2ZW4gc2NvcGVzIHdpdGggaXRcbiAgICAgICAgICAgIHNjb3BlID0gXCJvcGVuaWQgXCIgKyBzY29wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cmwgPSBiYXNlVXJsXG4gICAgICAgICAgICArICc/Y2xpZW50X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoa2MuY2xpZW50SWQpXG4gICAgICAgICAgICArICcmcmVkaXJlY3RfdXJpPScgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RVcmkpXG4gICAgICAgICAgICArICcmc3RhdGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZSlcbiAgICAgICAgICAgICsgJyZyZXNwb25zZV9tb2RlPScgKyBlbmNvZGVVUklDb21wb25lbnQoa2MucmVzcG9uc2VNb2RlKVxuICAgICAgICAgICAgKyAnJnJlc3BvbnNlX3R5cGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5yZXNwb25zZVR5cGUpXG4gICAgICAgICAgICArICcmc2NvcGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChzY29wZSk7XG4gICAgICAgIGlmICh1c2VOb25jZSkge1xuICAgICAgICAgICAgdXJsID0gdXJsICsgJyZub25jZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG5vbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJvbXB0KSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZwcm9tcHQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLnByb21wdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm1heEFnZSkge1xuICAgICAgICAgICAgdXJsICs9ICcmbWF4X2FnZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMubWF4QWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubG9naW5IaW50KSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZsb2dpbl9oaW50PScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5sb2dpbkhpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pZHBIaW50KSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZrY19pZHBfaGludD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuaWRwSGludCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmFjdGlvbiAmJiBvcHRpb25zLmFjdGlvbiAhPSAncmVnaXN0ZXInKSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZrY19hY3Rpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxvY2FsZSkge1xuICAgICAgICAgICAgdXJsICs9ICcmdWlfbG9jYWxlcz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMubG9jYWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWNyKSB7XG4gICAgICAgICAgICB2YXIgY2xhaW1zUGFyYW1ldGVyID0gYnVpbGRDbGFpbXNQYXJhbWV0ZXIob3B0aW9ucy5hY3IpO1xuICAgICAgICAgICAgdXJsICs9ICcmY2xhaW1zPScgKyBlbmNvZGVVUklDb21wb25lbnQoY2xhaW1zUGFyYW1ldGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrYy5wa2NlTWV0aG9kKSB7XG4gICAgICAgICAgICB2YXIgY29kZVZlcmlmaWVyID0gZ2VuZXJhdGVDb2RlVmVyaWZpZXIoOTYpO1xuICAgICAgICAgICAgY2FsbGJhY2tTdGF0ZS5wa2NlQ29kZVZlcmlmaWVyID0gY29kZVZlcmlmaWVyO1xuICAgICAgICAgICAgdmFyIHBrY2VDaGFsbGVuZ2UgPSBnZW5lcmF0ZVBrY2VDaGFsbGVuZ2Uoa2MucGtjZU1ldGhvZCwgY29kZVZlcmlmaWVyKTtcbiAgICAgICAgICAgIHVybCArPSAnJmNvZGVfY2hhbGxlbmdlPScgKyBwa2NlQ2hhbGxlbmdlO1xuICAgICAgICAgICAgdXJsICs9ICcmY29kZV9jaGFsbGVuZ2VfbWV0aG9kPScgKyBrYy5wa2NlTWV0aG9kO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2tTdG9yYWdlLmFkZChjYWxsYmFja1N0YXRlKTtcblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH07XG5cbiAgICBrYy5sb2dvdXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBhZGFwdGVyLmxvZ291dChvcHRpb25zKTtcbiAgICB9O1xuXG4gICAga2MuY3JlYXRlTG9nb3V0VXJsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgdXJsID0ga2MuZW5kcG9pbnRzLmxvZ291dCgpXG4gICAgICAgICAgICArICc/Y2xpZW50X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoa2MuY2xpZW50SWQpXG4gICAgICAgICAgICArICcmcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpPScgKyBlbmNvZGVVUklDb21wb25lbnQoYWRhcHRlci5yZWRpcmVjdFVyaShvcHRpb25zLCBmYWxzZSkpO1xuXG4gICAgICAgIGlmIChrYy5pZFRva2VuKSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZpZF90b2tlbl9oaW50PScgKyBlbmNvZGVVUklDb21wb25lbnQoa2MuaWRUb2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH07XG5cbiAgICBrYy5yZWdpc3RlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBhZGFwdGVyLnJlZ2lzdGVyKG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBrYy5jcmVhdGVSZWdpc3RlclVybCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gPSAncmVnaXN0ZXInO1xuICAgICAgICByZXR1cm4ga2MuY3JlYXRlTG9naW5Vcmwob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGtjLmNyZWF0ZUFjY291bnRVcmwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciByZWFsbSA9IGdldFJlYWxtVXJsKCk7XG4gICAgICAgIHZhciB1cmwgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0eXBlb2YgcmVhbG0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB1cmwgPSByZWFsbVxuICAgICAgICAgICAgKyAnL2FjY291bnQnXG4gICAgICAgICAgICArICc/cmVmZXJyZXI9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5jbGllbnRJZClcbiAgICAgICAgICAgICsgJyZyZWZlcnJlcl91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChhZGFwdGVyLnJlZGlyZWN0VXJpKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH07XG5cbiAgICBrYy5hY2NvdW50TWFuYWdlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYWRhcHRlci5hY2NvdW50TWFuYWdlbWVudCgpO1xuICAgIH07XG5cbiAgICBrYy5oYXNSZWFsbVJvbGUgPSBmdW5jdGlvbiAocm9sZSkge1xuICAgICAgICB2YXIgYWNjZXNzID0ga2MucmVhbG1BY2Nlc3M7XG4gICAgICAgIHJldHVybiAhIWFjY2VzcyAmJiBhY2Nlc3Mucm9sZXMuaW5kZXhPZihyb2xlKSA+PSAwO1xuICAgIH07XG5cbiAgICBrYy5oYXNSZXNvdXJjZVJvbGUgPSBmdW5jdGlvbihyb2xlLCByZXNvdXJjZSkge1xuICAgICAgICBpZiAoIWtjLnJlc291cmNlQWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWNjZXNzID0ga2MucmVzb3VyY2VBY2Nlc3NbcmVzb3VyY2UgfHwga2MuY2xpZW50SWRdO1xuICAgICAgICByZXR1cm4gISFhY2Nlc3MgJiYgYWNjZXNzLnJvbGVzLmluZGV4T2Yocm9sZSkgPj0gMDtcbiAgICB9O1xuXG4gICAga2MubG9hZFVzZXJQcm9maWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cmwgPSBnZXRSZWFsbVVybCgpICsgJy9hY2NvdW50JztcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ2JlYXJlciAnICsga2MudG9rZW4pO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBrYy5wcm9maWxlID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKGtjLnByb2ZpbGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxLnNlbmQoKTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH07XG5cbiAgICBrYy5sb2FkVXNlckluZm8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVybCA9IGtjLmVuZHBvaW50cy51c2VyaW5mbygpO1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnYmVhcmVyICcgKyBrYy50b2tlbik7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtjLnVzZXJJbmZvID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKGtjLnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlcS5zZW5kKCk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICB9O1xuXG4gICAga2MuaXNUb2tlbkV4cGlyZWQgPSBmdW5jdGlvbihtaW5WYWxpZGl0eSkge1xuICAgICAgICBpZiAoIWtjLnRva2VuUGFyc2VkIHx8ICgha2MucmVmcmVzaFRva2VuICYmIGtjLmZsb3cgIT0gJ2ltcGxpY2l0JyApKSB7XG4gICAgICAgICAgICB0aHJvdyAnTm90IGF1dGhlbnRpY2F0ZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtjLnRpbWVTa2V3ID09IG51bGwpIHtcbiAgICAgICAgICAgIGxvZ0luZm8oJ1tLRVlDTE9BS10gVW5hYmxlIHRvIGRldGVybWluZSBpZiB0b2tlbiBpcyBleHBpcmVkIGFzIHRpbWVza2V3IGlzIG5vdCBzZXQnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4cGlyZXNJbiA9IGtjLnRva2VuUGFyc2VkWydleHAnXSAtIE1hdGguY2VpbChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApICsga2MudGltZVNrZXc7XG4gICAgICAgIGlmIChtaW5WYWxpZGl0eSkge1xuICAgICAgICAgICAgaWYgKGlzTmFOKG1pblZhbGlkaXR5KSkge1xuICAgICAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIG1pblZhbGlkaXR5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cGlyZXNJbiAtPSBtaW5WYWxpZGl0eTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwaXJlc0luIDwgMDtcbiAgICB9O1xuXG4gICAga2MudXBkYXRlVG9rZW4gPSBmdW5jdGlvbihtaW5WYWxpZGl0eSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICBpZiAoIWtjLnJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1pblZhbGlkaXR5ID0gbWluVmFsaWRpdHkgfHwgNTtcblxuICAgICAgICB2YXIgZXhlYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlZnJlc2hUb2tlbiA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG1pblZhbGlkaXR5ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsb2dJbmZvKCdbS0VZQ0xPQUtdIFJlZnJlc2hpbmcgdG9rZW46IGZvcmNlZCByZWZyZXNoJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFrYy50b2tlblBhcnNlZCB8fCBrYy5pc1Rva2VuRXhwaXJlZChtaW5WYWxpZGl0eSkpIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxvZ0luZm8oJ1tLRVlDTE9BS10gUmVmcmVzaGluZyB0b2tlbjogdG9rZW4gZXhwaXJlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSAnZ3JhbnRfdHlwZT1yZWZyZXNoX3Rva2VuJicgKyAncmVmcmVzaF90b2tlbj0nICsga2MucmVmcmVzaFRva2VuO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBrYy5lbmRwb2ludHMudG9rZW4oKTtcblxuICAgICAgICAgICAgICAgIHJlZnJlc2hRdWV1ZS5wdXNoKHByb21pc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlZnJlc2hRdWV1ZS5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zICs9ICcmY2xpZW50X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoa2MuY2xpZW50SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aW1lTG9jYWwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBUb2tlbiByZWZyZXNoZWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lTG9jYWwgPSAodGltZUxvY2FsICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW5SZXNwb25zZSA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9rZW4odG9rZW5SZXNwb25zZVsnYWNjZXNzX3Rva2VuJ10sIHRva2VuUmVzcG9uc2VbJ3JlZnJlc2hfdG9rZW4nXSwgdG9rZW5SZXNwb25zZVsnaWRfdG9rZW4nXSwgdGltZUxvY2FsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhSZWZyZXNoU3VjY2VzcyAmJiBrYy5vbkF1dGhSZWZyZXNoU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gcmVmcmVzaFF1ZXVlLnBvcCgpOyBwICE9IG51bGw7IHAgPSByZWZyZXNoUXVldWUucG9wKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1dhcm4oJ1tLRVlDTE9BS10gRmFpbGVkIHRvIHJlZnJlc2ggdG9rZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLmNsZWFyVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLm9uQXV0aFJlZnJlc2hFcnJvciAmJiBrYy5vbkF1dGhSZWZyZXNoRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IHJlZnJlc2hRdWV1ZS5wb3AoKTsgcCAhPSBudWxsOyBwID0gcmVmcmVzaFF1ZXVlLnBvcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnNldEVycm9yKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5zZW5kKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChsb2dpbklmcmFtZS5lbmFibGUpIHtcbiAgICAgICAgICAgIHZhciBpZnJhbWVQcm9taXNlID0gY2hlY2tMb2dpbklmcmFtZSgpO1xuICAgICAgICAgICAgaWZyYW1lUHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGV4ZWMoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4ZWMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfTtcblxuICAgIGtjLmNsZWFyVG9rZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGtjLnRva2VuKSB7XG4gICAgICAgICAgICBzZXRUb2tlbihudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIGtjLm9uQXV0aExvZ291dCAmJiBrYy5vbkF1dGhMb2dvdXQoKTtcbiAgICAgICAgICAgIGlmIChrYy5sb2dpblJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAga2MubG9naW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRSZWFsbVVybCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrYy5hdXRoU2VydmVyVXJsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGtjLmF1dGhTZXJ2ZXJVcmwuY2hhckF0KGtjLmF1dGhTZXJ2ZXJVcmwubGVuZ3RoIC0gMSkgPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtjLmF1dGhTZXJ2ZXJVcmwgKyAncmVhbG1zLycgKyBlbmNvZGVVUklDb21wb25lbnQoa2MucmVhbG0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2MuYXV0aFNlcnZlclVybCArICcvcmVhbG1zLycgKyBlbmNvZGVVUklDb21wb25lbnQoa2MucmVhbG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9yaWdpbigpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0NhbGxiYWNrKG9hdXRoLCBwcm9taXNlKSB7XG4gICAgICAgIHZhciBjb2RlID0gb2F1dGguY29kZTtcbiAgICAgICAgdmFyIGVycm9yID0gb2F1dGguZXJyb3I7XG4gICAgICAgIHZhciBwcm9tcHQgPSBvYXV0aC5wcm9tcHQ7XG5cbiAgICAgICAgdmFyIHRpbWVMb2NhbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmIChvYXV0aFsna2NfYWN0aW9uX3N0YXR1cyddKSB7XG4gICAgICAgICAgICBrYy5vbkFjdGlvblVwZGF0ZSAmJiBrYy5vbkFjdGlvblVwZGF0ZShvYXV0aFsna2NfYWN0aW9uX3N0YXR1cyddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKHByb21wdCAhPSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JEYXRhID0geyBlcnJvcjogZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uOiBvYXV0aC5lcnJvcl9kZXNjcmlwdGlvbiB9O1xuICAgICAgICAgICAgICAgIGtjLm9uQXV0aEVycm9yICYmIGtjLm9uQXV0aEVycm9yKGVycm9yRGF0YSk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJiBwcm9taXNlLnNldEVycm9yKGVycm9yRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2UgJiYgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoKGtjLmZsb3cgIT0gJ3N0YW5kYXJkJykgJiYgKG9hdXRoLmFjY2Vzc190b2tlbiB8fCBvYXV0aC5pZF90b2tlbikpIHtcbiAgICAgICAgICAgIGF1dGhTdWNjZXNzKG9hdXRoLmFjY2Vzc190b2tlbiwgbnVsbCwgb2F1dGguaWRfdG9rZW4sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChrYy5mbG93ICE9ICdpbXBsaWNpdCcpICYmIGNvZGUpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSAnY29kZT0nICsgY29kZSArICcmZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGUnO1xuICAgICAgICAgICAgdmFyIHVybCA9IGtjLmVuZHBvaW50cy50b2tlbigpO1xuXG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXEub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXG4gICAgICAgICAgICBwYXJhbXMgKz0gJyZjbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5jbGllbnRJZCk7XG4gICAgICAgICAgICBwYXJhbXMgKz0gJyZyZWRpcmVjdF91cmk9JyArIG9hdXRoLnJlZGlyZWN0VXJpO1xuXG4gICAgICAgICAgICBpZiAob2F1dGgucGtjZUNvZGVWZXJpZmllcikge1xuICAgICAgICAgICAgICAgIHBhcmFtcyArPSAnJmNvZGVfdmVyaWZpZXI9JyArIG9hdXRoLnBrY2VDb2RlVmVyaWZpZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcS53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlblJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhTdWNjZXNzKHRva2VuUmVzcG9uc2VbJ2FjY2Vzc190b2tlbiddLCB0b2tlblJlc3BvbnNlWydyZWZyZXNoX3Rva2VuJ10sIHRva2VuUmVzcG9uc2VbJ2lkX3Rva2VuJ10sIGtjLmZsb3cgPT09ICdzdGFuZGFyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVDaGVja0lmcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2Mub25BdXRoRXJyb3IgJiYga2Mub25BdXRoRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UgJiYgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVxLnNlbmQocGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGF1dGhTdWNjZXNzKGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIGlkVG9rZW4sIGZ1bGZpbGxQcm9taXNlKSB7XG4gICAgICAgICAgICB0aW1lTG9jYWwgPSAodGltZUxvY2FsICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMjtcblxuICAgICAgICAgICAgc2V0VG9rZW4oYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgaWRUb2tlbiwgdGltZUxvY2FsKTtcblxuICAgICAgICAgICAgaWYgKHVzZU5vbmNlICYmICgoa2MudG9rZW5QYXJzZWQgJiYga2MudG9rZW5QYXJzZWQubm9uY2UgIT0gb2F1dGguc3RvcmVkTm9uY2UpIHx8XG4gICAgICAgICAgICAgICAgKGtjLnJlZnJlc2hUb2tlblBhcnNlZCAmJiBrYy5yZWZyZXNoVG9rZW5QYXJzZWQubm9uY2UgIT0gb2F1dGguc3RvcmVkTm9uY2UpIHx8XG4gICAgICAgICAgICAgICAgKGtjLmlkVG9rZW5QYXJzZWQgJiYga2MuaWRUb2tlblBhcnNlZC5ub25jZSAhPSBvYXV0aC5zdG9yZWROb25jZSkpKSB7XG5cbiAgICAgICAgICAgICAgICBsb2dJbmZvKCdbS0VZQ0xPQUtdIEludmFsaWQgbm9uY2UsIGNsZWFyaW5nIHRva2VuJyk7XG4gICAgICAgICAgICAgICAga2MuY2xlYXJUb2tlbigpO1xuICAgICAgICAgICAgICAgIHByb21pc2UgJiYgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZnVsZmlsbFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAga2Mub25BdXRoU3VjY2VzcyAmJiBrYy5vbkF1dGhTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgJiYgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQ29uZmlnKHVybCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcbiAgICAgICAgdmFyIGNvbmZpZ1VybDtcblxuICAgICAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnVXJsID0gJ2tleWNsb2FrLmpzb24nO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25maWdVcmwgPSBjb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXR1cE9pZGNFbmRvaW50cyhvaWRjQ29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgaWYgKCEgb2lkY0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBrYy5lbmRwb2ludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVhbG1VcmwoKSArICcvcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvYXV0aCc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC90b2tlbic7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxvZ291dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVhbG1VcmwoKSArICcvcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvbG9nb3V0JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tTZXNzaW9uSWZyYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmMgPSBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC9sb2dpbi1zdGF0dXMtaWZyYW1lLmh0bWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtjLmlmcmFtZVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgPSBzcmMgKyAnP3ZlcnNpb249JyArIGtjLmlmcmFtZVZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlyZFBhcnR5Q29va2llc0lmcmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjID0gZ2V0UmVhbG1VcmwoKSArICcvcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvM3AtY29va2llcy9zdGVwMS5odG1sJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrYy5pZnJhbWVWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjID0gc3JjICsgJz92ZXJzaW9uPScgKyBrYy5pZnJhbWVWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlYWxtVXJsKCkgKyAnL3Byb3RvY29sL29wZW5pZC1jb25uZWN0L3JlZ2lzdHJhdGlvbnMnO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1c2VyaW5mbzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVhbG1VcmwoKSArICcvcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvdXNlcmluZm8nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2MuZW5kcG9pbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9pZGNDb25maWd1cmF0aW9uLmF1dGhvcml6YXRpb25fZW5kcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvaWRjQ29uZmlndXJhdGlvbi50b2tlbl9lbmRwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2lkY0NvbmZpZ3VyYXRpb24uZW5kX3Nlc3Npb25fZW5kcG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBzdXBwb3J0ZWQgYnkgdGhlIE9JREMgc2VydmVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2lkY0NvbmZpZ3VyYXRpb24uZW5kX3Nlc3Npb25fZW5kcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrU2Vzc2lvbklmcmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9pZGNDb25maWd1cmF0aW9uLmNoZWNrX3Nlc3Npb25faWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb3Qgc3VwcG9ydGVkIGJ5IHRoZSBPSURDIHNlcnZlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9pZGNDb25maWd1cmF0aW9uLmNoZWNrX3Nlc3Npb25faWZyYW1lO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnUmVkaXJlY3Rpb24gdG8gXCJSZWdpc3RlciB1c2VyXCIgcGFnZSBub3Qgc3VwcG9ydGVkIGluIHN0YW5kYXJkIE9JREMgbW9kZSc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVzZXJpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2lkY0NvbmZpZ3VyYXRpb24udXNlcmluZm9fZW5kcG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBzdXBwb3J0ZWQgYnkgdGhlIE9JREMgc2VydmVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2lkY0NvbmZpZ3VyYXRpb24udXNlcmluZm9fZW5kcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZ1VybCkge1xuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIGNvbmZpZ1VybCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgICAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDAgfHwgZmlsZUxvYWRlZChyZXEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAga2MuYXV0aFNlcnZlclVybCA9IGNvbmZpZ1snYXV0aC1zZXJ2ZXItdXJsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5yZWFsbSA9IGNvbmZpZ1sncmVhbG0nXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLmNsaWVudElkID0gY29uZmlnWydyZXNvdXJjZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXBPaWRjRW5kb2ludHMobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5jbGllbnRJZCkge1xuICAgICAgICAgICAgICAgIHRocm93ICdjbGllbnRJZCBtaXNzaW5nJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2MuY2xpZW50SWQgPSBjb25maWcuY2xpZW50SWQ7XG5cbiAgICAgICAgICAgIHZhciBvaWRjUHJvdmlkZXIgPSBjb25maWdbJ29pZGNQcm92aWRlciddO1xuICAgICAgICAgICAgaWYgKCFvaWRjUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZ1sndXJsJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcmlwdHNbaV0uc3JjLm1hdGNoKC8uKmtleWNsb2FrXFwuanMvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy51cmwgPSBzY3JpcHRzW2ldLnNyYy5zdWJzdHIoMCwgc2NyaXB0c1tpXS5zcmMuaW5kZXhPZignL2pzL2tleWNsb2FrLmpzJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLnJlYWxtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdyZWFsbSBtaXNzaW5nJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrYy5hdXRoU2VydmVyVXJsID0gY29uZmlnLnVybDtcbiAgICAgICAgICAgICAgICBrYy5yZWFsbSA9IGNvbmZpZy5yZWFsbTtcbiAgICAgICAgICAgICAgICBzZXR1cE9pZGNFbmRvaW50cyhudWxsKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvaWRjUHJvdmlkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvaWRjUHJvdmlkZXJDb25maWdVcmw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvaWRjUHJvdmlkZXIuY2hhckF0KG9pZGNQcm92aWRlci5sZW5ndGggLSAxKSA9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9pZGNQcm92aWRlckNvbmZpZ1VybCA9IG9pZGNQcm92aWRlciArICcud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbic7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvaWRjUHJvdmlkZXJDb25maWdVcmwgPSBvaWRjUHJvdmlkZXIgKyAnLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5vcGVuKCdHRVQnLCBvaWRjUHJvdmlkZXJDb25maWdVcmwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDAgfHwgZmlsZUxvYWRlZChyZXEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvaWRjUHJvdmlkZXJDb25maWcgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR1cE9pZGNFbmRvaW50cyhvaWRjUHJvdmlkZXJDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBPaWRjRW5kb2ludHMob2lkY1Byb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWxlTG9hZGVkKHhocikge1xuICAgICAgICByZXR1cm4geGhyLnN0YXR1cyA9PSAwICYmIHhoci5yZXNwb25zZVRleHQgJiYgeGhyLnJlc3BvbnNlVVJMLnN0YXJ0c1dpdGgoJ2ZpbGU6Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VG9rZW4odG9rZW4sIHJlZnJlc2hUb2tlbiwgaWRUb2tlbiwgdGltZUxvY2FsKSB7XG4gICAgICAgIGlmIChrYy50b2tlblRpbWVvdXRIYW5kbGUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChrYy50b2tlblRpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAga2MudG9rZW5UaW1lb3V0SGFuZGxlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgICAgIGtjLnJlZnJlc2hUb2tlbiA9IHJlZnJlc2hUb2tlbjtcbiAgICAgICAgICAgIGtjLnJlZnJlc2hUb2tlblBhcnNlZCA9IGRlY29kZVRva2VuKHJlZnJlc2hUb2tlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUga2MucmVmcmVzaFRva2VuO1xuICAgICAgICAgICAgZGVsZXRlIGtjLnJlZnJlc2hUb2tlblBhcnNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZFRva2VuKSB7XG4gICAgICAgICAgICBrYy5pZFRva2VuID0gaWRUb2tlbjtcbiAgICAgICAgICAgIGtjLmlkVG9rZW5QYXJzZWQgPSBkZWNvZGVUb2tlbihpZFRva2VuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy5pZFRva2VuO1xuICAgICAgICAgICAgZGVsZXRlIGtjLmlkVG9rZW5QYXJzZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIGtjLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICBrYy50b2tlblBhcnNlZCA9IGRlY29kZVRva2VuKHRva2VuKTtcbiAgICAgICAgICAgIGtjLnNlc3Npb25JZCA9IGtjLnRva2VuUGFyc2VkLnNlc3Npb25fc3RhdGU7XG4gICAgICAgICAgICBrYy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGtjLnN1YmplY3QgPSBrYy50b2tlblBhcnNlZC5zdWI7XG4gICAgICAgICAgICBrYy5yZWFsbUFjY2VzcyA9IGtjLnRva2VuUGFyc2VkLnJlYWxtX2FjY2VzcztcbiAgICAgICAgICAgIGtjLnJlc291cmNlQWNjZXNzID0ga2MudG9rZW5QYXJzZWQucmVzb3VyY2VfYWNjZXNzO1xuXG4gICAgICAgICAgICBpZiAodGltZUxvY2FsKSB7XG4gICAgICAgICAgICAgICAga2MudGltZVNrZXcgPSBNYXRoLmZsb29yKHRpbWVMb2NhbCAvIDEwMDApIC0ga2MudG9rZW5QYXJzZWQuaWF0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoa2MudGltZVNrZXcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvZ0luZm8oJ1tLRVlDTE9BS10gRXN0aW1hdGVkIHRpbWUgZGlmZmVyZW5jZSBiZXR3ZWVuIGJyb3dzZXIgYW5kIHNlcnZlciBpcyAnICsga2MudGltZVNrZXcgKyAnIHNlY29uZHMnKTtcblxuICAgICAgICAgICAgICAgIGlmIChrYy5vblRva2VuRXhwaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwaXJlc0luID0gKGtjLnRva2VuUGFyc2VkWydleHAnXSAtIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApICsga2MudGltZVNrZXcpICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBUb2tlbiBleHBpcmVzIGluICcgKyBNYXRoLnJvdW5kKGV4cGlyZXNJbiAvIDEwMDApICsgJyBzJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmVzSW4gPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAga2Mub25Ub2tlbkV4cGlyZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnRva2VuVGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoa2Mub25Ub2tlbkV4cGlyZWQsIGV4cGlyZXNJbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUga2MudG9rZW47XG4gICAgICAgICAgICBkZWxldGUga2MudG9rZW5QYXJzZWQ7XG4gICAgICAgICAgICBkZWxldGUga2Muc3ViamVjdDtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy5yZWFsbUFjY2VzcztcbiAgICAgICAgICAgIGRlbGV0ZSBrYy5yZXNvdXJjZUFjY2VzcztcblxuICAgICAgICAgICAga2MuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjb2RlVG9rZW4oc3RyKSB7XG4gICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnLicpWzFdO1xuXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8tL2csICcrJyk7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgICAgIHN3aXRjaCAoc3RyLmxlbmd0aCAlIDQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBzdHIgKz0gJz09JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBzdHIgKz0gJz0nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCB0b2tlbic7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGF0b2Ioc3RyKSkpO1xuXG4gICAgICAgIHN0ciA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVVVUlEKCkge1xuICAgICAgICB2YXIgaGV4RGlnaXRzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuICAgICAgICB2YXIgcyA9IGdlbmVyYXRlUmFuZG9tU3RyaW5nKDM2LCBoZXhEaWdpdHMpLnNwbGl0KFwiXCIpO1xuICAgICAgICBzWzE0XSA9ICc0JztcbiAgICAgICAgc1sxOV0gPSBoZXhEaWdpdHMuc3Vic3RyKChzWzE5XSAmIDB4MykgfCAweDgsIDEpO1xuICAgICAgICBzWzhdID0gc1sxM10gPSBzWzE4XSA9IHNbMjNdID0gJy0nO1xuICAgICAgICB2YXIgdXVpZCA9IHMuam9pbignJyk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlQ2FsbGJhY2sodXJsKSB7XG4gICAgICAgIHZhciBvYXV0aCA9IHBhcnNlQ2FsbGJhY2tVcmwodXJsKTtcbiAgICAgICAgaWYgKCFvYXV0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9hdXRoU3RhdGUgPSBjYWxsYmFja1N0b3JhZ2UuZ2V0KG9hdXRoLnN0YXRlKTtcblxuICAgICAgICBpZiAob2F1dGhTdGF0ZSkge1xuICAgICAgICAgICAgb2F1dGgudmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgb2F1dGgucmVkaXJlY3RVcmkgPSBvYXV0aFN0YXRlLnJlZGlyZWN0VXJpO1xuICAgICAgICAgICAgb2F1dGguc3RvcmVkTm9uY2UgPSBvYXV0aFN0YXRlLm5vbmNlO1xuICAgICAgICAgICAgb2F1dGgucHJvbXB0ID0gb2F1dGhTdGF0ZS5wcm9tcHQ7XG4gICAgICAgICAgICBvYXV0aC5wa2NlQ29kZVZlcmlmaWVyID0gb2F1dGhTdGF0ZS5wa2NlQ29kZVZlcmlmaWVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9hdXRoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlQ2FsbGJhY2tVcmwodXJsKSB7XG4gICAgICAgIHZhciBzdXBwb3J0ZWRQYXJhbXM7XG4gICAgICAgIHN3aXRjaCAoa2MuZmxvdykge1xuICAgICAgICAgICAgY2FzZSAnc3RhbmRhcmQnOlxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZFBhcmFtcyA9IFsnY29kZScsICdzdGF0ZScsICdzZXNzaW9uX3N0YXRlJywgJ2tjX2FjdGlvbl9zdGF0dXMnXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ltcGxpY2l0JzpcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRQYXJhbXMgPSBbJ2FjY2Vzc190b2tlbicsICd0b2tlbl90eXBlJywgJ2lkX3Rva2VuJywgJ3N0YXRlJywgJ3Nlc3Npb25fc3RhdGUnLCAnZXhwaXJlc19pbicsICdrY19hY3Rpb25fc3RhdHVzJ107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoeWJyaWQnOlxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZFBhcmFtcyA9IFsnYWNjZXNzX3Rva2VuJywgJ3Rva2VuX3R5cGUnLCAnaWRfdG9rZW4nLCAnY29kZScsICdzdGF0ZScsICdzZXNzaW9uX3N0YXRlJywgJ2V4cGlyZXNfaW4nLCAna2NfYWN0aW9uX3N0YXR1cyddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwcG9ydGVkUGFyYW1zLnB1c2goJ2Vycm9yJyk7XG4gICAgICAgIHN1cHBvcnRlZFBhcmFtcy5wdXNoKCdlcnJvcl9kZXNjcmlwdGlvbicpO1xuICAgICAgICBzdXBwb3J0ZWRQYXJhbXMucHVzaCgnZXJyb3JfdXJpJyk7XG5cbiAgICAgICAgdmFyIHF1ZXJ5SW5kZXggPSB1cmwuaW5kZXhPZignPycpO1xuICAgICAgICB2YXIgZnJhZ21lbnRJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG5cbiAgICAgICAgdmFyIG5ld1VybDtcbiAgICAgICAgdmFyIHBhcnNlZDtcblxuICAgICAgICBpZiAoa2MucmVzcG9uc2VNb2RlID09PSAncXVlcnknICYmIHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBuZXdVcmwgPSB1cmwuc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXgpO1xuICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VDYWxsYmFja1BhcmFtcyh1cmwuc3Vic3RyaW5nKHF1ZXJ5SW5kZXggKyAxLCBmcmFnbWVudEluZGV4ICE9PSAtMSA/IGZyYWdtZW50SW5kZXggOiB1cmwubGVuZ3RoKSwgc3VwcG9ydGVkUGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGFyYW1zU3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld1VybCArPSAnPycgKyBwYXJzZWQucGFyYW1zU3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZyYWdtZW50SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbmV3VXJsICs9IHVybC5zdWJzdHJpbmcoZnJhZ21lbnRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2MucmVzcG9uc2VNb2RlID09PSAnZnJhZ21lbnQnICYmIGZyYWdtZW50SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBuZXdVcmwgPSB1cmwuc3Vic3RyaW5nKDAsIGZyYWdtZW50SW5kZXgpO1xuICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VDYWxsYmFja1BhcmFtcyh1cmwuc3Vic3RyaW5nKGZyYWdtZW50SW5kZXggKyAxKSwgc3VwcG9ydGVkUGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGFyYW1zU3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld1VybCArPSAnIycgKyBwYXJzZWQucGFyYW1zU3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQub2F1dGhQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChrYy5mbG93ID09PSAnc3RhbmRhcmQnIHx8IGtjLmZsb3cgPT09ICdoeWJyaWQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKChwYXJzZWQub2F1dGhQYXJhbXMuY29kZSB8fCBwYXJzZWQub2F1dGhQYXJhbXMuZXJyb3IpICYmIHBhcnNlZC5vYXV0aFBhcmFtcy5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQub2F1dGhQYXJhbXMubmV3VXJsID0gbmV3VXJsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkLm9hdXRoUGFyYW1zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2MuZmxvdyA9PT0gJ2ltcGxpY2l0Jykge1xuICAgICAgICAgICAgICAgIGlmICgocGFyc2VkLm9hdXRoUGFyYW1zLmFjY2Vzc190b2tlbiB8fCBwYXJzZWQub2F1dGhQYXJhbXMuZXJyb3IpICYmIHBhcnNlZC5vYXV0aFBhcmFtcy5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQub2F1dGhQYXJhbXMubmV3VXJsID0gbmV3VXJsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkLm9hdXRoUGFyYW1zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlQ2FsbGJhY2tQYXJhbXMocGFyYW1zU3RyaW5nLCBzdXBwb3J0ZWRQYXJhbXMpIHtcbiAgICAgICAgdmFyIHAgPSBwYXJhbXNTdHJpbmcuc3BsaXQoJyYnKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHBhcmFtc1N0cmluZzogJycsXG4gICAgICAgICAgICBvYXV0aFBhcmFtczoge31cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc3BsaXQgPSBwW2ldLmluZGV4T2YoXCI9XCIpO1xuICAgICAgICAgICAgdmFyIGtleSA9IHBbaV0uc2xpY2UoMCwgc3BsaXQpO1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlZFBhcmFtcy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm9hdXRoUGFyYW1zW2tleV0gPSBwW2ldLnNsaWNlKHNwbGl0ICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucGFyYW1zU3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucGFyYW1zU3RyaW5nICs9ICcmJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcmFtc1N0cmluZyArPSBwW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvbWlzZSgpIHtcbiAgICAgICAgLy8gTmVlZCB0byBjcmVhdGUgYSBuYXRpdmUgUHJvbWlzZSB3aGljaCBhbHNvIHByZXNlcnZlcyB0aGVcbiAgICAgICAgLy8gaW50ZXJmYWNlIG9mIHRoZSBjdXN0b20gcHJvbWlzZSB0eXBlIHByZXZpb3VzbHkgdXNlZCBieSB0aGUgQVBJXG4gICAgICAgIHZhciBwID0ge1xuICAgICAgICAgICAgc2V0U3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcC5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXRFcnJvcjogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcC5yZWplY3QocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcC5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBwLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgcC5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHAucHJvbWlzZS5zdWNjZXNzID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGxvZ1Byb21pc2VEZXByZWNhdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLnRoZW4oZnVuY3Rpb24gaGFuZGxlU3VjY2Vzcyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICBwLnByb21pc2UuZXJyb3IgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgbG9nUHJvbWlzZURlcHJlY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2F0Y2goZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gZXh0ZW5kIGV4aXN0aW5nIG5hdGl2ZSBQcm9taXNlIHdpdGggdGltZW91dFxuICAgIGZ1bmN0aW9uIGFwcGx5VGltZW91dFRvUHJvbWlzZShwcm9taXNlLCB0aW1lb3V0LCBlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIHRpbWVvdXRIYW5kbGUgPSBudWxsO1xuICAgICAgICB2YXIgdGltZW91dFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHsgXCJlcnJvclwiOiBlcnJvck1lc3NhZ2UgfHwgXCJQcm9taXNlIGlzIG5vdCBzZXR0bGVkIHdpdGhpbiB0aW1lb3V0IG9mIFwiICsgdGltZW91dCArIFwibXNcIiB9KTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtwcm9taXNlLCB0aW1lb3V0UHJvbWlzZV0pLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cENoZWNrTG9naW5JZnJhbWUoKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgIGlmICghbG9naW5JZnJhbWUuZW5hYmxlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9naW5JZnJhbWUuaWZyYW1lKSB7XG4gICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGxvZ2luSWZyYW1lLmlmcmFtZSA9IGlmcmFtZTtcblxuICAgICAgICBpZnJhbWUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYXV0aFVybCA9IGtjLmVuZHBvaW50cy5hdXRob3JpemUoKTtcbiAgICAgICAgICAgIGlmIChhdXRoVXJsLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgbG9naW5JZnJhbWUuaWZyYW1lT3JpZ2luID0gZ2V0T3JpZ2luKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2luSWZyYW1lLmlmcmFtZU9yaWdpbiA9IGF1dGhVcmwuc3Vic3RyaW5nKDAsIGF1dGhVcmwuaW5kZXhPZignLycsIDgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzcmMgPSBrYy5lbmRwb2ludHMuY2hlY2tTZXNzaW9uSWZyYW1lKCk7XG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyApO1xuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCd0aXRsZScsICdrZXljbG9hay1zZXNzaW9uLWlmcmFtZScgKTtcbiAgICAgICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblxuICAgICAgICB2YXIgbWVzc2FnZUNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgoZXZlbnQub3JpZ2luICE9PSBsb2dpbklmcmFtZS5pZnJhbWVPcmlnaW4pIHx8IChsb2dpbklmcmFtZS5pZnJhbWUuY29udGVudFdpbmRvdyAhPT0gZXZlbnQuc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEoZXZlbnQuZGF0YSA9PSAndW5jaGFuZ2VkJyB8fCBldmVudC5kYXRhID09ICdjaGFuZ2VkJyB8fCBldmVudC5kYXRhID09ICdlcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhICE9ICd1bmNoYW5nZWQnKSB7XG4gICAgICAgICAgICAgICAga2MuY2xlYXJUb2tlbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gbG9naW5JZnJhbWUuY2FsbGJhY2tMaXN0LnNwbGljZSgwLCBsb2dpbklmcmFtZS5jYWxsYmFja0xpc3QubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNhbGxiYWNrcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcyhldmVudC5kYXRhID09ICd1bmNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlQ2FsbGJhY2ssIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlQ2hlY2tJZnJhbWUoKSB7XG4gICAgICAgIGlmIChsb2dpbklmcmFtZS5lbmFibGUpIHtcbiAgICAgICAgICAgIGlmIChrYy50b2tlbikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTG9naW5JZnJhbWUoKS50aGVuKGZ1bmN0aW9uKHVuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlQ2hlY2tJZnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgbG9naW5JZnJhbWUuaW50ZXJ2YWwgKiAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrTG9naW5JZnJhbWUoKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgIGlmIChsb2dpbklmcmFtZS5pZnJhbWUgJiYgbG9naW5JZnJhbWUuaWZyYW1lT3JpZ2luICkge1xuICAgICAgICAgICAgdmFyIG1zZyA9IGtjLmNsaWVudElkICsgJyAnICsgKGtjLnNlc3Npb25JZCA/IGtjLnNlc3Npb25JZCA6ICcnKTtcbiAgICAgICAgICAgIGxvZ2luSWZyYW1lLmNhbGxiYWNrTGlzdC5wdXNoKHByb21pc2UpO1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGxvZ2luSWZyYW1lLmlmcmFtZU9yaWdpbjtcbiAgICAgICAgICAgIGlmIChsb2dpbklmcmFtZS5jYWxsYmFja0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICBsb2dpbklmcmFtZS5pZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtc2csIG9yaWdpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2szcENvb2tpZXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgIGlmIChsb2dpbklmcmFtZS5lbmFibGUgfHwga2Muc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaSkge1xuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywga2MuZW5kcG9pbnRzLnRoaXJkUGFydHlDb29raWVzSWZyYW1lKCkpO1xuICAgICAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAna2V5Y2xvYWstM3AtY2hlY2staWZyYW1lJyApO1xuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBtZXNzYWdlQ2FsbGJhY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdyAhPT0gZXZlbnQuc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSAhPT0gXCJzdXBwb3J0ZWRcIiAmJiBldmVudC5kYXRhICE9PSBcInVuc3VwcG9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YSA9PT0gXCJ1bnN1cHBvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luSWZyYW1lLmVuYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2Muc2lsZW50Q2hlY2tTc29GYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAga2Muc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvZ1dhcm4oXCJbS0VZQ0xPQUtdIDNyZCBwYXJ0eSBjb29raWVzIGFyZW4ndCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLiBjaGVja0xvZ2luSWZyYW1lIGFuZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpbGVudCBjaGVjay1zc28gYXJlIG5vdCBhdmFpbGFibGUuXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgbWVzc2FnZUNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbWVzc2FnZUNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcHBseVRpbWVvdXRUb1Byb21pc2UocHJvbWlzZS5wcm9taXNlLCBrYy5tZXNzYWdlUmVjZWl2ZVRpbWVvdXQsIFwiVGltZW91dCB3aGVuIHdhaXRpbmcgZm9yIDNyZCBwYXJ0eSBjaGVjayBpZnJhbWUgbWVzc2FnZS5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZEFkYXB0ZXIodHlwZSkge1xuICAgICAgICBpZiAoIXR5cGUgfHwgdHlwZSA9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9naW46IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoa2MuY3JlYXRlTG9naW5Vcmwob3B0aW9ucykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUHJvbWlzZSgpLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGxvZ291dDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShrYy5jcmVhdGVMb2dvdXRVcmwob3B0aW9ucykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUHJvbWlzZSgpLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGtjLmNyZWF0ZVJlZ2lzdGVyVXJsKG9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb21pc2UoKS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBhY2NvdW50TWFuYWdlbWVudCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWNjb3VudFVybCA9IGtjLmNyZWF0ZUFjY291bnRVcmwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhY2NvdW50VXJsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhY2NvdW50VXJsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb3Qgc3VwcG9ydGVkIGJ5IHRoZSBPSURDIHNlcnZlclwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9taXNlKCkucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmk6IGZ1bmN0aW9uKG9wdGlvbnMsIGVuY29kZUhhc2gpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5yZWRpcmVjdFVyaTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrYy5yZWRpcmVjdFVyaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtjLnJlZGlyZWN0VXJpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2NvcmRvdmEnKSB7XG4gICAgICAgICAgICBsb2dpbklmcmFtZS5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBjb3Jkb3ZhT3BlbldpbmRvd1dyYXBwZXIgPSBmdW5jdGlvbihsb2dpblVybCwgdGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLkluQXBwQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgaW5hcHBicm93c2VyIGZvciBJT1MgYW5kIEFuZHJvaWQgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbihsb2dpblVybCwgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93Lm9wZW4obG9naW5VcmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHNoYWxsb3dDbG9uZUNvcmRvdmFPcHRpb25zID0gZnVuY3Rpb24gKHVzZXJPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJPcHRpb25zICYmIHVzZXJPcHRpb25zLmNvcmRvdmFPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh1c2VyT3B0aW9ucy5jb3Jkb3ZhT3B0aW9ucykucmVkdWNlKGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW29wdGlvbk5hbWVdID0gdXNlck9wdGlvbnMuY29yZG92YU9wdGlvbnNbb3B0aW9uTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgZm9ybWF0Q29yZG92YU9wdGlvbnMgPSBmdW5jdGlvbiAoY29yZG92YU9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoY29yZG92YU9wdGlvbnMpLnJlZHVjZShmdW5jdGlvbiAob3B0aW9ucywgb3B0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uTmFtZStcIj1cIitjb3Jkb3ZhT3B0aW9uc1tvcHRpb25OYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKFwiLFwiKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjcmVhdGVDb3Jkb3ZhT3B0aW9ucyA9IGZ1bmN0aW9uICh1c2VyT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBjb3Jkb3ZhT3B0aW9ucyA9IHNoYWxsb3dDbG9uZUNvcmRvdmFPcHRpb25zKHVzZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICBjb3Jkb3ZhT3B0aW9ucy5sb2NhdGlvbiA9ICdubyc7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJPcHRpb25zICYmIHVzZXJPcHRpb25zLnByb21wdCA9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29yZG92YU9wdGlvbnMuaGlkZGVuID0gJ3llcyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXRDb3Jkb3ZhT3B0aW9ucyhjb3Jkb3ZhT3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvZ2luOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3Jkb3ZhT3B0aW9ucyA9IGNyZWF0ZUNvcmRvdmFPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9naW5VcmwgPSBrYy5jcmVhdGVMb2dpblVybChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZiA9IGNvcmRvdmFPcGVuV2luZG93V3JhcHBlcihsb2dpblVybCwgJ19ibGFuaycsIGNvcmRvdmFPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlQnJvd3NlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKCdodHRwOi8vbG9jYWxob3N0JykgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHBhcnNlQ2FsbGJhY2soZXZlbnQudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ2FsbGJhY2soY2FsbGJhY2ssIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnJvd3NlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2FkZXJyb3InLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YoJ2h0dHA6Ly9sb2NhbGhvc3QnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHBhcnNlQ2FsbGJhY2soZXZlbnQudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VCcm93c2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJyb3dzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdleGl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbjogXCJjbG9zZWRfYnlfdXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGxvZ291dDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9nb3V0VXJsID0ga2MuY3JlYXRlTG9nb3V0VXJsKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gY29yZG92YU9wZW5XaW5kb3dXcmFwcGVyKGxvZ291dFVybCwgJ19ibGFuaycsICdsb2NhdGlvbj1ubyxoaWRkZW49eWVzLGNsZWFyY2FjaGU9eWVzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKCdodHRwOi8vbG9jYWxob3N0JykgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVycm9yJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignaHR0cDovL2xvY2FsaG9zdCcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZXhpdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLmNsZWFyVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXIgOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVnaXN0ZXJVcmwgPSBrYy5jcmVhdGVSZWdpc3RlclVybCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29yZG92YU9wdGlvbnMgPSBjcmVhdGVDb3Jkb3ZhT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZiA9IGNvcmRvdmFPcGVuV2luZG93V3JhcHBlcihyZWdpc3RlclVybCwgJ19ibGFuaycsIGNvcmRvdmFPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YoJ2h0dHA6Ly9sb2NhbGhvc3QnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9hdXRoID0gcGFyc2VDYWxsYmFjayhldmVudC51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NDYWxsYmFjayhvYXV0aCwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBhY2NvdW50TWFuYWdlbWVudCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWNjb3VudFVybCA9IGtjLmNyZWF0ZUFjY291bnRVcmwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhY2NvdW50VXJsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZiA9IGNvcmRvdmFPcGVuV2luZG93V3JhcHBlcihhY2NvdW50VXJsLCAnX2JsYW5rJywgJ2xvY2F0aW9uPW5vJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YoJ2h0dHA6Ly9sb2NhbGhvc3QnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb3Qgc3VwcG9ydGVkIGJ5IHRoZSBPSURDIHNlcnZlclwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJpOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaHR0cDovL2xvY2FsaG9zdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2NvcmRvdmEtbmF0aXZlJykge1xuICAgICAgICAgICAgbG9naW5JZnJhbWUuZW5hYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9naW46IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpblVybCA9IGtjLmNyZWF0ZUxvZ2luVXJsKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbExpbmtzLnN1YnNjcmliZSgna2V5Y2xvYWsnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsTGlua3MudW5zdWJzY3JpYmUoJ2tleWNsb2FrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYXV0aCA9IHBhcnNlQ2FsbGJhY2soZXZlbnQudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NDYWxsYmFjayhvYXV0aCwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5vcGVuVXJsKGxvZ2luVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9nb3V0VXJsID0ga2MuY3JlYXRlTG9nb3V0VXJsKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbExpbmtzLnN1YnNjcmliZSgna2V5Y2xvYWsnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsTGlua3MudW5zdWJzY3JpYmUoJ2tleWNsb2FrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLmNsZWFyVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIub3BlblVybChsb2dvdXRVcmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZWdpc3RlciA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWdpc3RlclVybCA9IGtjLmNyZWF0ZVJlZ2lzdGVyVXJsKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxMaW5rcy5zdWJzY3JpYmUoJ2tleWNsb2FrJyAsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxMaW5rcy51bnN1YnNjcmliZSgna2V5Y2xvYWsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9hdXRoID0gcGFyc2VDYWxsYmFjayhldmVudC51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKG9hdXRoLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5vcGVuVXJsKHJlZ2lzdGVyVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcblxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBhY2NvdW50TWFuYWdlbWVudCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWNjb3VudFVybCA9IGtjLmNyZWF0ZUFjY291bnRVcmwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhY2NvdW50VXJsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLm9wZW5VcmwoYWNjb3VudFVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBzdXBwb3J0ZWQgYnkgdGhlIE9JREMgc2VydmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZWRpcmVjdFVyaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMucmVkaXJlY3RVcmk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2MucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrYy5yZWRpcmVjdFVyaTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHA6Ly9sb2NhbGhvc3RcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93ICdpbnZhbGlkIGFkYXB0ZXIgdHlwZTogJyArIHR5cGU7XG4gICAgfVxuXG4gICAgdmFyIExvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTG9jYWxTdG9yYWdlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrYy10ZXN0JywgJ3Rlc3QnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2tjLXRlc3QnKTtcblxuICAgICAgICB2YXIgY3MgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyRXhwaXJlZCgpIHtcbiAgICAgICAgICAgIHZhciB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykgIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICYmIGtleS5pbmRleE9mKCdrYy1jYWxsYmFjay0nKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwaXJlcyA9IEpTT04ucGFyc2UodmFsdWUpLmV4cGlyZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFleHBpcmVzIHx8IGV4cGlyZXMgPCB0aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNzLmdldCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2V5ID0gJ2tjLWNhbGxiYWNrLScgKyBzdGF0ZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFyRXhwaXJlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNzLmFkZCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgICBjbGVhckV4cGlyZWQoKTtcblxuICAgICAgICAgICAgdmFyIGtleSA9ICdrYy1jYWxsYmFjay0nICsgc3RhdGUuc3RhdGU7XG4gICAgICAgICAgICBzdGF0ZS5leHBpcmVzID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgQ29va2llU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29va2llU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29va2llU3RvcmFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNzID0gdGhpcztcblxuICAgICAgICBjcy5nZXQgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0Q29va2llKCdrYy1jYWxsYmFjay0nICsgc3RhdGUpO1xuICAgICAgICAgICAgc2V0Q29va2llKCdrYy1jYWxsYmFjay0nICsgc3RhdGUsICcnLCBjb29raWVFeHBpcmF0aW9uKC0xMDApKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjcy5hZGQgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgICAgc2V0Q29va2llKCdrYy1jYWxsYmFjay0nICsgc3RhdGUuc3RhdGUsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSwgY29va2llRXhwaXJhdGlvbig2MCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNzLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHNldENvb2tpZShrZXksICcnLCBjb29raWVFeHBpcmF0aW9uKC0xMDApKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY29va2llRXhwaXJhdGlvbiA9IGZ1bmN0aW9uIChtaW51dGVzKSB7XG4gICAgICAgICAgICB2YXIgZXhwID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGV4cC5zZXRUaW1lKGV4cC5nZXRUaW1lKCkgKyAobWludXRlcyo2MCoxMDAwKSk7XG4gICAgICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBnZXRDb29raWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGtleSArICc9JztcbiAgICAgICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjID0gY2FbaV07XG4gICAgICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNldENvb2tpZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBleHBpcmF0aW9uRGF0ZSkge1xuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlICsgJzsgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGlyZXM9JyArIGV4cGlyYXRpb25EYXRlLnRvVVRDU3RyaW5nKCkgKyAnOyAnO1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDYWxsYmFja1N0b3JhZ2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgQ29va2llU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoa2MuZW5hYmxlTG9nZ2luZykge1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KGNvbnNvbGUsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgS2V5Y2xvYWsgYXMgZGVmYXVsdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvZ1RleHQgfSBmcm9tICcuL3NyYy91dGlscyc7XHJcbi8vIGltcG9ydCB7IFZlaGljbGVNb3ZlbWVudCB9IGZyb20gJy4vc3JjL21vdmVtZW50LmpzJztcclxuaW1wb3J0IHsgU2VydmVyUHVzaCB9IGZyb20gJy4vc3JjL1NlcnZlclB1c2gnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZVNjZW5lIH0gZnJvbSAnLi9zcmMvQWN0aXZhdGVTY2VuZSc7XHJcbmltcG9ydCB7IE9wZW5TY2VuZU5vdGVzIH0gZnJvbSAnLi9zcmMvT3BlblNjZW5lTm90ZXMnO1xyXG5pbXBvcnQgeyBnbG9iYWxTZXR0aW5ncyB9IGZyb20gJy4vc3JjL09nU2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBKb3VybmFsTW9kdWxlIH0gZnJvbSAnLi9zcmMvSm91cm5hbCc7XHJcbmltcG9ydCB7IFNvY2lhbEVuY291bnRlclRyYWNrZXIgfSBmcm9tICcuL3NyYy9Tb2NpYWxFbmNvdW50ZXJUcmFja2VyJztcclxuY29uc3QgbW9kdWxlcyA9IFtcclxuICAgIG5ldyBKb3VybmFsTW9kdWxlKCksXHJcbiAgICBuZXcgQWN0aXZhdGVTY2VuZSgpLFxyXG4gICAgbmV3IE9wZW5TY2VuZU5vdGVzKCksXHJcbiAgICBuZXcgU2VydmVyUHVzaCgpLFxyXG4gICAgbmV3IFNvY2lhbEVuY291bnRlclRyYWNrZXIoKSxcclxuICAgIGdsb2JhbFNldHRpbmdzLFxyXG4gICAgLy9uZXcgVmVoaWNsZU1vdmVtZW50KClcclxuXTtcclxuSG9va3Mub25jZSgnaW5pdCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGxvZ1RleHQoJ2luaXRpYXRpbmcnKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtb2R1bGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZXNbaW5kZXhdO1xyXG4gICAgICAgIGlmIChtb2R1bGUuaW5pdCkge1xyXG4gICAgICAgICAgICBtb2R1bGUuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvZ1RleHQoJ2luaXRpYXRlZCcpO1xyXG59KTtcclxuSG9va3Mub25jZSgncmVhZHknLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBsb2dUZXh0KCdyZWFkeWluZycpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1vZHVsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlc1tpbmRleF07XHJcbiAgICAgICAgaWYgKG1vZHVsZS5yZWFkeSkge1xyXG4gICAgICAgICAgICBtb2R1bGUucmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2dUZXh0KCdyZWFkeScpO1xyXG59KTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbiAgICAgICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdhcHBseScpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBpbiBfdGVtcGxhdGVDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfdGVtcGxhdGVDYWNoZSwgdGVtcGxhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90ZW1wbGF0ZUNhY2hlW3RlbXBsYXRlXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=