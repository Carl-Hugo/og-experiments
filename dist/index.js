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
exports.activateScene = exports.ActivateScene = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var ActivateScene = /** @class */ (function () {
    function ActivateScene() {
    }
    ActivateScene.prototype.init = function () {
        var _this = this;
        (0, utils_1.logText)('ActivateScene initiating');
        (0, utils_1.addGameExtensions)('flow', {
            activateScene: activateScene,
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
                        return [4 /*yield*/, activateScene(target.dataset.id)];
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
    return ActivateScene;
}());
exports.ActivateScene = ActivateScene;
function activateScene(targetSceneId) {
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
}
exports.activateScene = activateScene;


/***/ }),

/***/ "./src/OgSettings.ts":
/*!***************************!*\
  !*** ./src/OgSettings.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OgSetting = exports.namespace = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
exports.namespace = 'og-experiments';
var OgSetting = /** @class */ (function () {
    function OgSetting(key, defaultValue, settings) {
        this.key = key;
        this.defaultValue = defaultValue;
        this.settings = settings;
        this._value = defaultValue;
    }
    OgSetting.prototype.init = function () {
        var _this = this;
        (0, utils_1.logText)('OgSetting initializing', this.key, this.defaultValue);
        game.settings.register(exports.namespace, this.key, __assign({
            scope: 'client',
            config: true,
            default: this.defaultValue,
            onChange: function (value) { return (_this._value = value); },
        }, this.settings));
        this.value = game.settings.get(exports.namespace, this.key);
    };
    Object.defineProperty(OgSetting.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            game.settings.set(exports.namespace, this.key, value);
        },
        enumerable: false,
        configurable: true
    });
    return OgSetting;
}());
exports.OgSetting = OgSetting;


/***/ }),

/***/ "./src/OpenSceneNotes.ts":
/*!*******************************!*\
  !*** ./src/OpenSceneNotes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.openSceneNotes = exports.OpenSceneNotes = void 0;
var OgSettings_1 = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var OpenSceneNotes = /** @class */ (function () {
    function OpenSceneNotes() {
        this.openSceneNotesOnReady = new OgSettings_1.OgSetting('openSceneNotesOnReady', true, {
            name: 'Auto-open scene notes?',
            hint: 'If enabled, the scene notes of the current scene will open when the server first load.',
            type: Boolean,
        });
    }
    OpenSceneNotes.prototype.init = function () {
        (0, utils_1.logText)('OpenSceneNotes initiating');
        this.openSceneNotesOnReady.init();
        (0, utils_1.addGameExtensions)('flow', {
            openSceneNotes: openSceneNotes,
        });
        (0, utils_1.logText)('OpenSceneNotes initiated');
    };
    OpenSceneNotes.prototype.ready = function () {
        (0, utils_1.logText)('OpenSceneNotes is getting ready');
        if (this.openSceneNotesOnReady.value) {
            openSceneNotes();
        }
        (0, utils_1.logText)('OpenSceneNotes is ready');
    };
    return OpenSceneNotes;
}());
exports.OpenSceneNotes = OpenSceneNotes;
function openSceneNotes() {
    var currentSceneJournal = game.scenes.active.journal;
    if (currentSceneJournal && currentSceneJournal.sheet) {
        if (!currentSceneJournal.testUserPermission(game.user, 'LIMITED')) {
            return ui.notifications.warn("You do not have permission to view this ".concat(currentSceneJournal.documentName, " sheet."));
        }
        currentSceneJournal.sheet.render(true);
    }
}
exports.openSceneNotes = openSceneNotes;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FB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QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyw0QkFBNEIsZUFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRCxpRUFBaUU7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStCOzs7Ozs7O1VDenNEL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vQWJvcnRDb250cm9sbGVyLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9EZWZhdWx0SHR0cENsaWVudC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vRGVmYXVsdFJlY29ubmVjdFBvbGljeS5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vRXJyb3JzLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9GZXRjaEh0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0hhbmRzaGFrZVByb3RvY29sLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9IZWFkZXJOYW1lcy5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSHR0cENsaWVudC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSHR0cENvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0h1YkNvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0h1YkNvbm5lY3Rpb25CdWlsZGVyLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9JSHViUHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0lMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0lUcmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0pzb25IdWJQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vTG9nZ2Vycy5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vTG9uZ1BvbGxpbmdUcmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL1NlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL1N1YmplY3QuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL1RleHRNZXNzYWdlRm9ybWF0LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9VdGlscy5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vV2ViU29ja2V0VHJhbnNwb3J0LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9YaHJIdHRwQ2xpZW50LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvanMtc2hhMjU2L3NyYy9zaGEyNTYuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9BY3RpdmF0ZVNjZW5lLnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL09nU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvT3BlblNjZW5lTm90ZXMudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvc2VydmVyLXB1c2gudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMva2V5Y2xvYWstanMvZGlzdC9rZXljbG9hay5tanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBSb3VnaCBwb2x5ZmlsbCBvZiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQWJvcnRDb250cm9sbGVyXHJcbi8vIFdlIGRvbid0IGFjdHVhbGx5IGV2ZXIgdXNlIHRoZSBBUEkgYmVpbmcgcG9seWZpbGxlZCwgd2UgYWx3YXlzIHVzZSB0aGUgcG9seWZpbGwgYmVjYXVzZVxyXG4vLyBpdCdzIGEgdmVyeSBuZXcgQVBJIHJpZ2h0IG5vdy5cclxuLy8gTm90IGV4cG9ydGVkIGZyb20gaW5kZXguXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgQWJvcnRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2lzQWJvcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25hYm9ydCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBhYm9ydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQWJvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0Fib3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vbmFib3J0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWJvcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBzaWduYWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXQgYWJvcnRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNBYm9ydGVkO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFib3J0Q29udHJvbGxlci5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEFib3J0RXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHsgRmV0Y2hIdHRwQ2xpZW50IH0gZnJvbSBcIi4vRmV0Y2hIdHRwQ2xpZW50XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiLi9IdHRwQ2xpZW50XCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgWGhySHR0cENsaWVudCB9IGZyb20gXCIuL1hockh0dHBDbGllbnRcIjtcclxuLyoqIERlZmF1bHQgaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdHRwQ2xpZW50fS4gKi9cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRIdHRwQ2xpZW50IGV4dGVuZHMgSHR0cENsaWVudCB7XHJcbiAgICAvKiogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5EZWZhdWx0SHR0cENsaWVudH0sIHVzaW5nIHRoZSBwcm92aWRlZCB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLklMb2dnZXJ9IHRvIGxvZyBtZXNzYWdlcy4gKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmZXRjaCAhPT0gXCJ1bmRlZmluZWRcIiB8fCBQbGF0Zm9ybS5pc05vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IG5ldyBGZXRjaEh0dHBDbGllbnQobG9nZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2h0dHBDbGllbnQgPSBuZXcgWGhySHR0cENsaWVudChsb2dnZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdXNhYmxlIEh0dHBDbGllbnQgZm91bmQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgc2VuZChyZXF1ZXN0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBhYm9ydCB3YXMgbm90IHNpZ25hbGVkIGJlZm9yZSBjYWxsaW5nIHNlbmRcclxuICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCAmJiByZXF1ZXN0LmFib3J0U2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBYm9ydEVycm9yKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBtZXRob2QgZGVmaW5lZC5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcXVlc3QudXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyB1cmwgZGVmaW5lZC5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cENsaWVudC5zZW5kKHJlcXVlc3QpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29va2llU3RyaW5nKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LmdldENvb2tpZVN0cmluZyh1cmwpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURlZmF1bHRIdHRwQ2xpZW50LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gMCwgMiwgMTAsIDMwIHNlY29uZCBkZWxheXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0cy5cclxuY29uc3QgREVGQVVMVF9SRVRSWV9ERUxBWVNfSU5fTUlMTElTRUNPTkRTID0gWzAsIDIwMDAsIDEwMDAwLCAzMDAwMCwgbnVsbF07XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgRGVmYXVsdFJlY29ubmVjdFBvbGljeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZXRyeURlbGF5cykge1xyXG4gICAgICAgIHRoaXMuX3JldHJ5RGVsYXlzID0gcmV0cnlEZWxheXMgIT09IHVuZGVmaW5lZCA/IFsuLi5yZXRyeURlbGF5cywgbnVsbF0gOiBERUZBVUxUX1JFVFJZX0RFTEFZU19JTl9NSUxMSVNFQ09ORFM7XHJcbiAgICB9XHJcbiAgICBuZXh0UmV0cnlEZWxheUluTWlsbGlzZWNvbmRzKHJldHJ5Q29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXRyeURlbGF5c1tyZXRyeUNvbnRleHQucHJldmlvdXNSZXRyeUNvdW50XTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWZhdWx0UmVjb25uZWN0UG9saWN5LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLyoqIEVycm9yIHRocm93biB3aGVuIGFuIEhUVFAgcmVxdWVzdCBmYWlscy4gKi9cclxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHR0cEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JNZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0dXNDb2RlIFRoZSBIVFRQIHN0YXR1cyBjb2RlIHJlcHJlc2VudGVkIGJ5IHRoaXMgZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yTWVzc2FnZSwgc3RhdHVzQ29kZSkge1xyXG4gICAgICAgIGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIHN1cGVyKGAke2Vycm9yTWVzc2FnZX06IFN0YXR1cyBjb2RlICcke3N0YXR1c0NvZGV9J2ApO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLyoqIEVycm9yIHRocm93biB3aGVuIGEgdGltZW91dCBlbGFwc2VzLiAqL1xyXG5leHBvcnQgY2xhc3MgVGltZW91dEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5UaW1lb3V0RXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2UgPSBcIkEgdGltZW91dCBvY2N1cnJlZC5cIikge1xyXG4gICAgICAgIGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIHN1cGVyKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLyoqIEVycm9yIHRocm93biB3aGVuIGFuIGFjdGlvbiBpcyBhYm9ydGVkLiAqL1xyXG5leHBvcnQgY2xhc3MgQWJvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBBYm9ydEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JNZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZXJyb3JNZXNzYWdlID0gXCJBbiBhYm9ydCBvY2N1cnJlZC5cIikge1xyXG4gICAgICAgIGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIHN1cGVyKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLyoqIEVycm9yIHRocm93biB3aGVuIHRoZSBzZWxlY3RlZCB0cmFuc3BvcnQgaXMgdW5zdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIuICovXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgVW5zdXBwb3J0ZWRUcmFuc3BvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuVW5zdXBwb3J0ZWRUcmFuc3BvcnRFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIHtIdHRwVHJhbnNwb3J0VHlwZX0gdHJhbnNwb3J0IFRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh0dHBUcmFuc3BvcnRUeXBlfSB0aGlzIGVycm9yIG9jY3VyZWQgb24uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHRyYW5zcG9ydCkge1xyXG4gICAgICAgIGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gJ1Vuc3VwcG9ydGVkVHJhbnNwb3J0RXJyb3InO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiB0aGUgc2VsZWN0ZWQgdHJhbnNwb3J0IGlzIGRpc2FibGVkIGJ5IHRoZSBicm93c2VyLiAqL1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIERpc2FibGVkVHJhbnNwb3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkRpc2FibGVkVHJhbnNwb3J0RXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqIEBwYXJhbSB7SHR0cFRyYW5zcG9ydFR5cGV9IHRyYW5zcG9ydCBUaGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdHRwVHJhbnNwb3J0VHlwZX0gdGhpcyBlcnJvciBvY2N1cmVkIG9uLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCB0cmFuc3BvcnQpIHtcclxuICAgICAgICBjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9ICdEaXNhYmxlZFRyYW5zcG9ydEVycm9yJztcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gdGhlIHNlbGVjdGVkIHRyYW5zcG9ydCBjYW5ub3QgYmUgc3RhcnRlZC4gKi9cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBGYWlsZWRUb1N0YXJ0VHJhbnNwb3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkZhaWxlZFRvU3RhcnRUcmFuc3BvcnRFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIHtIdHRwVHJhbnNwb3J0VHlwZX0gdHJhbnNwb3J0IFRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh0dHBUcmFuc3BvcnRUeXBlfSB0aGlzIGVycm9yIG9jY3VyZWQgb24uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHRyYW5zcG9ydCkge1xyXG4gICAgICAgIGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gJ0ZhaWxlZFRvU3RhcnRUcmFuc3BvcnRFcnJvcic7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLyoqIEVycm9yIHRocm93biB3aGVuIHRoZSBuZWdvdGlhdGlvbiB3aXRoIHRoZSBzZXJ2ZXIgZmFpbGVkIHRvIGNvbXBsZXRlLiAqL1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIEZhaWxlZFRvTmVnb3RpYXRlV2l0aFNlcnZlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5GYWlsZWRUb05lZ290aWF0ZVdpdGhTZXJ2ZXJFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSAnRmFpbGVkVG9OZWdvdGlhdGVXaXRoU2VydmVyRXJyb3InO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiBtdWx0aXBsZSBlcnJvcnMgaGF2ZSBvY2N1cmVkLiAqL1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZUVycm9ycyBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuQWdncmVnYXRlRXJyb3JzfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0ge0Vycm9yW119IGlubmVyRXJyb3JzIFRoZSBjb2xsZWN0aW9uIG9mIGVycm9ycyB0aGlzIGVycm9yIGlzIGFnZ3JlZ2F0aW5nLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBpbm5lckVycm9ycykge1xyXG4gICAgICAgIGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJFcnJvcnMgPSBpbm5lckVycm9ycztcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FcnJvcnMuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBBYm9ydEVycm9yLCBIdHRwRXJyb3IsIFRpbWVvdXRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiLi9IdHRwQ2xpZW50XCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSwgZ2V0R2xvYmFsVGhpcyB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmV4cG9ydCBjbGFzcyBGZXRjaEh0dHBDbGllbnQgZXh0ZW5kcyBIdHRwQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgLy8gSW4gb3JkZXIgdG8gaWdub3JlIHRoZSBkeW5hbWljIHJlcXVpcmUgaW4gd2VicGFjayBidWlsZHMgd2UgbmVlZCB0byBkbyB0aGlzIG1hZ2ljXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IFRTIGRvZXNuJ3Qga25vdyBhYm91dCB0aGVzZSBuYW1lc1xyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlRnVuYyA9IHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fID09PSBcImZ1bmN0aW9uXCIgPyBfX25vbl93ZWJwYWNrX3JlcXVpcmVfXyA6IHJlcXVpcmU7XHJcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlbid0IGF1dG9tYXRpY2FsbHkgaGFuZGxlZCBpbiBOb2RlIHNvIHdlIG5lZWQgdG8gYWRkIGEgQ29va2llSmFyIHRvIHByZXNlcnZlIGNvb2tpZXMgYWNyb3NzIHJlcXVlc3RzXHJcbiAgICAgICAgICAgIHRoaXMuX2phciA9IG5ldyAocmVxdWlyZUZ1bmMoXCJ0b3VnaC1jb29raWVcIikpLkNvb2tpZUphcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9mZXRjaFR5cGUgPSByZXF1aXJlRnVuYyhcIm5vZGUtZmV0Y2hcIik7XHJcbiAgICAgICAgICAgIC8vIG5vZGUtZmV0Y2ggZG9lc24ndCBoYXZlIGEgbmljZSBBUEkgZm9yIGdldHRpbmcgYW5kIHNldHRpbmcgY29va2llc1xyXG4gICAgICAgICAgICAvLyBmZXRjaC1jb29raWUgd2lsbCB3cmFwIGEgZmV0Y2ggaW1wbGVtZW50YXRpb24gd2l0aCBhIGRlZmF1bHQgQ29va2llSmFyIG9yIGEgcHJvdmlkZWQgb25lXHJcbiAgICAgICAgICAgIHRoaXMuX2ZldGNoVHlwZSA9IHJlcXVpcmVGdW5jKFwiZmV0Y2gtY29va2llXCIpKHRoaXMuX2ZldGNoVHlwZSwgdGhpcy5famFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZldGNoVHlwZSA9IGZldGNoLmJpbmQoZ2V0R2xvYmFsVGhpcygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgLy8gSW4gb3JkZXIgdG8gaWdub3JlIHRoZSBkeW5hbWljIHJlcXVpcmUgaW4gd2VicGFjayBidWlsZHMgd2UgbmVlZCB0byBkbyB0aGlzIG1hZ2ljXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IFRTIGRvZXNuJ3Qga25vdyBhYm91dCB0aGVzZSBuYW1lc1xyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlRnVuYyA9IHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fID09PSBcImZ1bmN0aW9uXCIgPyBfX25vbl93ZWJwYWNrX3JlcXVpcmVfXyA6IHJlcXVpcmU7XHJcbiAgICAgICAgICAgIC8vIE5vZGUgbmVlZHMgRXZlbnRMaXN0ZW5lciBtZXRob2RzIG9uIEFib3J0Q29udHJvbGxlciB3aGljaCBvdXIgY3VzdG9tIHBvbHlmaWxsIGRvZXNuJ3QgcHJvdmlkZVxyXG4gICAgICAgICAgICB0aGlzLl9hYm9ydENvbnRyb2xsZXJUeXBlID0gcmVxdWlyZUZ1bmMoXCJhYm9ydC1jb250cm9sbGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYWJvcnRDb250cm9sbGVyVHlwZSA9IEFib3J0Q29udHJvbGxlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIGFzeW5jIHNlbmQocmVxdWVzdCkge1xyXG4gICAgICAgIC8vIENoZWNrIHRoYXQgYWJvcnQgd2FzIG5vdCBzaWduYWxlZCBiZWZvcmUgY2FsbGluZyBzZW5kXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwgJiYgcmVxdWVzdC5hYm9ydFNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBBYm9ydEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC5tZXRob2QpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWV0aG9kIGRlZmluZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcXVlc3QudXJsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVybCBkZWZpbmVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IHRoaXMuX2Fib3J0Q29udHJvbGxlclR5cGUoKTtcclxuICAgICAgICBsZXQgZXJyb3I7XHJcbiAgICAgICAgLy8gSG9vayBvdXIgYWJvcnRTaWduYWwgaW50byB0aGUgYWJvcnQgY29udHJvbGxlclxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuYWJvcnRTaWduYWwub25hYm9ydCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgQWJvcnRFcnJvcigpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhIHRpbWVvdXQgaGFzIGJlZW4gcGFzc2VkIGluLCBzZXR1cCBhIHRpbWVvdXQgdG8gY2FsbCBhYm9ydFxyXG4gICAgICAgIC8vIFR5cGUgbmVlZHMgdG8gYmUgYW55IHRvIGZpdCB3aW5kb3cuc2V0VGltZW91dCBhbmQgTm9kZUpTLnNldFRpbWVvdXRcclxuICAgICAgICBsZXQgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICBpZiAocmVxdWVzdC50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zVGltZW91dCA9IHJlcXVlc3QudGltZW91dDtcclxuICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgYFRpbWVvdXQgZnJvbSBIVFRQIHJlcXVlc3QuYCk7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBUaW1lb3V0RXJyb3IoKTtcclxuICAgICAgICAgICAgfSwgbXNUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZmV0Y2hUeXBlKHJlcXVlc3QudXJsLCB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiByZXF1ZXN0LmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID09PSB0cnVlID8gXCJpbmNsdWRlXCIgOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnJlcXVlc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdDogXCJmb2xsb3dcIixcclxuICAgICAgICAgICAgICAgIHNpZ25hbDogYWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgRXJyb3IgZnJvbSBIVFRQIHJlcXVlc3QuICR7ZX0uYCk7XHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBpZiAodGltZW91dElkKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5hYm9ydFNpZ25hbC5vbmFib3J0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGF3YWl0IGRlc2VyaWFsaXplQ29udGVudChyZXNwb25zZSwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgSHR0cEVycm9yKGVycm9yTWVzc2FnZSB8fCByZXNwb25zZS5zdGF0dXNUZXh0LCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZGVzZXJpYWxpemVDb250ZW50KHJlc3BvbnNlLCByZXF1ZXN0LnJlc3BvbnNlVHlwZSk7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGNvbnRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0LCBwYXlsb2FkKTtcclxuICAgIH1cclxuICAgIGdldENvb2tpZVN0cmluZyh1cmwpIHtcclxuICAgICAgICBsZXQgY29va2llcyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKFBsYXRmb3JtLmlzTm9kZSAmJiB0aGlzLl9qYXIpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogdW51c2VkIHZhcmlhYmxlXHJcbiAgICAgICAgICAgIHRoaXMuX2phci5nZXRDb29raWVzKHVybCwgKGUsIGMpID0+IGNvb2tpZXMgPSBjLmpvaW4oXCI7IFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb29raWVzO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplQ29udGVudChyZXNwb25zZSwgcmVzcG9uc2VUeXBlKSB7XHJcbiAgICBsZXQgY29udGVudDtcclxuICAgIHN3aXRjaCAocmVzcG9uc2VUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImFycmF5YnVmZmVyXCI6XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgICAgICBjb250ZW50ID0gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYmxvYlwiOlxyXG4gICAgICAgIGNhc2UgXCJkb2N1bWVudFwiOlxyXG4gICAgICAgIGNhc2UgXCJqc29uXCI6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZVR5cGV9IGlzIG5vdCBzdXBwb3J0ZWQuYCk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29udGVudCA9IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GZXRjaEh0dHBDbGllbnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBUZXh0TWVzc2FnZUZvcm1hdCB9IGZyb20gXCIuL1RleHRNZXNzYWdlRm9ybWF0XCI7XHJcbmltcG9ydCB7IGlzQXJyYXlCdWZmZXIgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIEhhbmRzaGFrZVByb3RvY29sIHtcclxuICAgIC8vIEhhbmRzaGFrZSByZXF1ZXN0IGlzIGFsd2F5cyBKU09OXHJcbiAgICB3cml0ZUhhbmRzaGFrZVJlcXVlc3QoaGFuZHNoYWtlUmVxdWVzdCkge1xyXG4gICAgICAgIHJldHVybiBUZXh0TWVzc2FnZUZvcm1hdC53cml0ZShKU09OLnN0cmluZ2lmeShoYW5kc2hha2VSZXF1ZXN0KSk7XHJcbiAgICB9XHJcbiAgICBwYXJzZUhhbmRzaGFrZVJlc3BvbnNlKGRhdGEpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGE7XHJcbiAgICAgICAgbGV0IHJlbWFpbmluZ0RhdGE7XHJcbiAgICAgICAgaWYgKGlzQXJyYXlCdWZmZXIoZGF0YSkpIHtcclxuICAgICAgICAgICAgLy8gRm9ybWF0IGlzIGJpbmFyeSBidXQgc3RpbGwgbmVlZCB0byByZWFkIEpTT04gdGV4dCBmcm9tIGhhbmRzaGFrZSByZXNwb25zZVxyXG4gICAgICAgICAgICBjb25zdCBiaW5hcnlEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvckluZGV4ID0gYmluYXJ5RGF0YS5pbmRleE9mKFRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvckNvZGUpO1xyXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXNzYWdlIGlzIGluY29tcGxldGUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnRlbnQgYmVmb3JlIHNlcGFyYXRvciBpcyBoYW5kc2hha2UgcmVzcG9uc2VcclxuICAgICAgICAgICAgLy8gb3B0aW9uYWwgY29udGVudCBhZnRlciBpcyBhZGRpdGlvbmFsIG1lc3NhZ2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlTGVuZ3RoID0gc2VwYXJhdG9ySW5kZXggKyAxO1xyXG4gICAgICAgICAgICBtZXNzYWdlRGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYmluYXJ5RGF0YS5zbGljZSgwLCByZXNwb25zZUxlbmd0aCkpKTtcclxuICAgICAgICAgICAgcmVtYWluaW5nRGF0YSA9IChiaW5hcnlEYXRhLmJ5dGVMZW5ndGggPiByZXNwb25zZUxlbmd0aCkgPyBiaW5hcnlEYXRhLnNsaWNlKHJlc3BvbnNlTGVuZ3RoKS5idWZmZXIgOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dERhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBzZXBhcmF0b3JJbmRleCA9IHRleHREYXRhLmluZGV4T2YoVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgaWYgKHNlcGFyYXRvckluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWVzc2FnZSBpcyBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb250ZW50IGJlZm9yZSBzZXBhcmF0b3IgaXMgaGFuZHNoYWtlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIGNvbnRlbnQgYWZ0ZXIgaXMgYWRkaXRpb25hbCBtZXNzYWdlc1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUxlbmd0aCA9IHNlcGFyYXRvckluZGV4ICsgMTtcclxuICAgICAgICAgICAgbWVzc2FnZURhdGEgPSB0ZXh0RGF0YS5zdWJzdHJpbmcoMCwgcmVzcG9uc2VMZW5ndGgpO1xyXG4gICAgICAgICAgICByZW1haW5pbmdEYXRhID0gKHRleHREYXRhLmxlbmd0aCA+IHJlc3BvbnNlTGVuZ3RoKSA/IHRleHREYXRhLnN1YnN0cmluZyhyZXNwb25zZUxlbmd0aCkgOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBdCB0aGlzIHBvaW50IHdlIHNob3VsZCBoYXZlIGp1c3QgdGhlIHNpbmdsZSBoYW5kc2hha2UgbWVzc2FnZVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gVGV4dE1lc3NhZ2VGb3JtYXQucGFyc2UobWVzc2FnZURhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShtZXNzYWdlc1swXSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgYSBoYW5kc2hha2UgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VNZXNzYWdlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgLy8gbXVsdGlwbGUgbWVzc2FnZXMgY291bGQgaGF2ZSBhcnJpdmVkIHdpdGggaGFuZHNoYWtlXHJcbiAgICAgICAgLy8gcmV0dXJuIGFkZGl0aW9uYWwgZGF0YSB0byBiZSBwYXJzZWQgYXMgdXN1YWwsIG9yIG51bGwgaWYgYWxsIHBhcnNlZFxyXG4gICAgICAgIHJldHVybiBbcmVtYWluaW5nRGF0YSwgcmVzcG9uc2VNZXNzYWdlXTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IYW5kc2hha2VQcm90b2NvbC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJOYW1lcyB7XHJcbn1cclxuSGVhZGVyTmFtZXMuQXV0aG9yaXphdGlvbiA9IFwiQXV0aG9yaXphdGlvblwiO1xyXG5IZWFkZXJOYW1lcy5Db29raWUgPSBcIkNvb2tpZVwiO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IZWFkZXJOYW1lcy5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8qKiBSZXByZXNlbnRzIGFuIEhUVFAgcmVzcG9uc2UuICovXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVzcG9uc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdHVzQ29kZSwgc3RhdHVzVGV4dCwgY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbi8qKiBBYnN0cmFjdGlvbiBvdmVyIGFuIEhUVFAgY2xpZW50LlxyXG4gKlxyXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGFuIGFic3RyYWN0aW9uIG92ZXIgYW4gSFRUUCBjbGllbnQgc28gdGhhdCBhIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgcHJvdmlkZWQgb24gZGlmZmVyZW50IHBsYXRmb3Jtcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50IHtcclxuICAgIGdldCh1cmwsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKHtcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwb3N0KHVybCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoe1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUodXJsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZCh7XHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqIEdldHMgYWxsIGNvb2tpZXMgdGhhdCBhcHBseSB0byB0aGUgc3BlY2lmaWVkIFVSTC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBVUkwgdGhhdCB0aGUgY29va2llcyBhcmUgdmFsaWQgZm9yLlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmcgY29udGFpbmluZyBhbGwgdGhlIGtleS12YWx1ZSBjb29raWUgcGFpcnMgZm9yIHRoZSBzcGVjaWZpZWQgVVJMLlxyXG4gICAgICovXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBnZXRDb29raWVTdHJpbmcodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHR0cENsaWVudC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IERlZmF1bHRIdHRwQ2xpZW50IH0gZnJvbSBcIi4vRGVmYXVsdEh0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgQWdncmVnYXRlRXJyb3JzLCBEaXNhYmxlZFRyYW5zcG9ydEVycm9yLCBGYWlsZWRUb05lZ290aWF0ZVdpdGhTZXJ2ZXJFcnJvciwgRmFpbGVkVG9TdGFydFRyYW5zcG9ydEVycm9yLCBIdHRwRXJyb3IsIFVuc3VwcG9ydGVkVHJhbnNwb3J0RXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHsgSGVhZGVyTmFtZXMgfSBmcm9tIFwiLi9IZWFkZXJOYW1lc1wiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgSHR0cFRyYW5zcG9ydFR5cGUsIFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBMb25nUG9sbGluZ1RyYW5zcG9ydCB9IGZyb20gXCIuL0xvbmdQb2xsaW5nVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQgfSBmcm9tIFwiLi9TZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IEFyZywgY3JlYXRlTG9nZ2VyLCBnZXRVc2VyQWdlbnRIZWFkZXIsIFBsYXRmb3JtIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgV2ViU29ja2V0VHJhbnNwb3J0IH0gZnJvbSBcIi4vV2ViU29ja2V0VHJhbnNwb3J0XCI7XHJcbmNvbnN0IE1BWF9SRURJUkVDVFMgPSAxMDA7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgSHR0cENvbm5lY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IodXJsLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLl9zdG9wUHJvbWlzZVJlc29sdmVyID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9uZWdvdGlhdGVWZXJzaW9uID0gMTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGNyZWF0ZUxvZ2dlcihvcHRpb25zLmxvZ2dlcik7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gdGhpcy5fcmVzb2x2ZVVybCh1cmwpO1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIG9wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQgPSBvcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG9wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9PT0gXCJib29sZWFuXCIgfHwgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3aXRoQ3JlZGVudGlhbHMgb3B0aW9uIHdhcyBub3QgYSAnYm9vbGVhbicgb3IgJ3VuZGVmaW5lZCcgdmFsdWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbnMudGltZW91dCA9IG9wdGlvbnMudGltZW91dCA9PT0gdW5kZWZpbmVkID8gMTAwICogMTAwMCA6IG9wdGlvbnMudGltZW91dDtcclxuICAgICAgICBsZXQgd2ViU29ja2V0TW9kdWxlID0gbnVsbDtcclxuICAgICAgICBsZXQgZXZlbnRTb3VyY2VNb2R1bGUgPSBudWxsO1xyXG4gICAgICAgIGlmIChQbGF0Zm9ybS5pc05vZGUgJiYgdHlwZW9mIHJlcXVpcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgLy8gSW4gb3JkZXIgdG8gaWdub3JlIHRoZSBkeW5hbWljIHJlcXVpcmUgaW4gd2VicGFjayBidWlsZHMgd2UgbmVlZCB0byBkbyB0aGlzIG1hZ2ljXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IFRTIGRvZXNuJ3Qga25vdyBhYm91dCB0aGVzZSBuYW1lc1xyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlRnVuYyA9IHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fID09PSBcImZ1bmN0aW9uXCIgPyBfX25vbl93ZWJwYWNrX3JlcXVpcmVfXyA6IHJlcXVpcmU7XHJcbiAgICAgICAgICAgIHdlYlNvY2tldE1vZHVsZSA9IHJlcXVpcmVGdW5jKFwid3NcIik7XHJcbiAgICAgICAgICAgIGV2ZW50U291cmNlTW9kdWxlID0gcmVxdWlyZUZ1bmMoXCJldmVudHNvdXJjZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFQbGF0Zm9ybS5pc05vZGUgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhb3B0aW9ucy5XZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5XZWJTb2NrZXQgPSBXZWJTb2NrZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKFBsYXRmb3JtLmlzTm9kZSAmJiAhb3B0aW9ucy5XZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgaWYgKHdlYlNvY2tldE1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5XZWJTb2NrZXQgPSB3ZWJTb2NrZXRNb2R1bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFQbGF0Zm9ybS5pc05vZGUgJiYgdHlwZW9mIEV2ZW50U291cmNlICE9PSBcInVuZGVmaW5lZFwiICYmICFvcHRpb25zLkV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuRXZlbnRTb3VyY2UgPSBFdmVudFNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoUGxhdGZvcm0uaXNOb2RlICYmICFvcHRpb25zLkV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnRTb3VyY2VNb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuRXZlbnRTb3VyY2UgPSBldmVudFNvdXJjZU1vZHVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9odHRwQ2xpZW50ID0gb3B0aW9ucy5odHRwQ2xpZW50IHx8IG5ldyBEZWZhdWx0SHR0cENsaWVudCh0aGlzLl9sb2dnZXIpO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5vbnJlY2VpdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdGFydCh0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIHRyYW5zZmVyRm9ybWF0ID0gdHJhbnNmZXJGb3JtYXQgfHwgVHJhbnNmZXJGb3JtYXQuQmluYXJ5O1xyXG4gICAgICAgIEFyZy5pc0luKHRyYW5zZmVyRm9ybWF0LCBUcmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgU3RhcnRpbmcgY29ubmVjdGlvbiB3aXRoIHRyYW5zZmVyIGZvcm1hdCAnJHtUcmFuc2ZlckZvcm1hdFt0cmFuc2ZlckZvcm1hdF19Jy5gKTtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHN0YXJ0IGFuIEh0dHBDb25uZWN0aW9uIHRoYXQgaXMgbm90IGluIHRoZSAnRGlzY29ubmVjdGVkJyBzdGF0ZS5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBcIkNvbm5lY3RpbmdcIiAvKiBDb25uZWN0aW5nICovO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0SW50ZXJuYWxQcm9taXNlID0gdGhpcy5fc3RhcnRJbnRlcm5hbCh0cmFuc2ZlckZvcm1hdCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRJbnRlcm5hbFByb21pc2U7XHJcbiAgICAgICAgLy8gVGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdGhpbmtzIHRoYXQgY29ubmVjdGlvblN0YXRlIG11c3QgYmUgQ29ubmVjdGluZyBoZXJlLiBUaGUgVHlwZVNjcmlwdCBjb21waWxlciBpcyB3cm9uZy5cclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovKSB7XHJcbiAgICAgICAgICAgIC8vIHN0b3AoKSB3YXMgY2FsbGVkIGFuZCB0cmFuc2l0aW9uZWQgdGhlIGNsaWVudCBpbnRvIHRoZSBEaXNjb25uZWN0aW5nIHN0YXRlLlxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJGYWlsZWQgdG8gc3RhcnQgdGhlIEh0dHBDb25uZWN0aW9uIGJlZm9yZSBzdG9wKCkgd2FzIGNhbGxlZC5cIjtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIFdlIGNhbm5vdCBhd2FpdCBzdG9wUHJvbWlzZSBpbnNpZGUgc3RhcnRJbnRlcm5hbCBzaW5jZSBzdG9wSW50ZXJuYWwgYXdhaXRzIHRoZSBzdGFydEludGVybmFsUHJvbWlzZS5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RvcFByb21pc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgIC8vIHN0b3AoKSB3YXMgY2FsbGVkIGFuZCB0cmFuc2l0aW9uZWQgdGhlIGNsaWVudCBpbnRvIHRoZSBEaXNjb25uZWN0aW5nIHN0YXRlLlxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJIdHRwQ29ubmVjdGlvbi5zdGFydEludGVybmFsIGNvbXBsZXRlZCBncmFjZWZ1bGx5IGJ1dCBkaWRuJ3QgZW50ZXIgdGhlIGNvbm5lY3Rpb24gaW50byB0aGUgY29ubmVjdGVkIHN0YXRlIVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc2VuZCBkYXRhIGlmIHRoZSBjb25uZWN0aW9uIGlzIG5vdCBpbiB0aGUgJ0Nvbm5lY3RlZCcgU3RhdGUuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZW5kUXVldWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFF1ZXVlID0gbmV3IFRyYW5zcG9ydFNlbmRRdWV1ZSh0aGlzLnRyYW5zcG9ydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRyYW5zcG9ydCB3aWxsIG5vdCBiZSBudWxsIGlmIHN0YXRlIGlzIGNvbm5lY3RlZFxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZW5kUXVldWUuc2VuZChkYXRhKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHN0b3AoZXJyb3IpIHtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wKCR7ZXJyb3J9KSBpZ25vcmVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGVkIHN0YXRlLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGluZ1wiIC8qIERpc2Nvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYENhbGwgdG8gSHR0cENvbm5lY3Rpb24uc3RvcCgke2Vycm9yfSkgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3Rpbmcgc3RhdGUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdG9wUHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLztcclxuICAgICAgICB0aGlzLl9zdG9wUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IGNvbXBsZXRlIHN0b3AoKSB1bnRpbCBzdG9wQ29ubmVjdGlvbigpIGNvbXBsZXRlcy5cclxuICAgICAgICAgICAgdGhpcy5fc3RvcFByb21pc2VSZXNvbHZlciA9IHJlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gc3RvcEludGVybmFsIHNob3VsZCBuZXZlciB0aHJvdyBzbyBqdXN0IG9ic2VydmUgaXQuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc3RvcEludGVybmFsKGVycm9yKTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9zdG9wUHJvbWlzZTtcclxuICAgIH1cclxuICAgIGFzeW5jIF9zdG9wSW50ZXJuYWwoZXJyb3IpIHtcclxuICAgICAgICAvLyBTZXQgZXJyb3IgYXMgc29vbiBhcyBwb3NzaWJsZSBvdGhlcndpc2UgdGhlcmUgaXMgYSByYWNlIGJldHdlZW5cclxuICAgICAgICAvLyB0aGUgdHJhbnNwb3J0IGNsb3NpbmcgYW5kIHByb3ZpZGluZyBhbiBlcnJvciBhbmQgdGhlIGVycm9yIGZyb20gYSBjbG9zZSBtZXNzYWdlXHJcbiAgICAgICAgLy8gV2Ugd291bGQgcHJlZmVyIHRoZSBjbG9zZSBtZXNzYWdlIGVycm9yLlxyXG4gICAgICAgIHRoaXMuX3N0b3BFcnJvciA9IGVycm9yO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0SW50ZXJuYWxQcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGV4Y2VwdGlvbiBpcyByZXR1cm5lZCB0byB0aGUgdXNlciBhcyBhIHJlamVjdGVkIFByb21pc2UgZnJvbSB0aGUgc3RhcnQgbWV0aG9kLlxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUaGUgdHJhbnNwb3J0J3Mgb25jbG9zZSB3aWxsIHRyaWdnZXIgc3RvcENvbm5lY3Rpb24gd2hpY2ggd2lsbCBydW4gb3VyIG9uY2xvc2UgZXZlbnQuXHJcbiAgICAgICAgLy8gVGhlIHRyYW5zcG9ydCBzaG91bGQgYWx3YXlzIGJlIHNldCBpZiBjdXJyZW50bHkgY29ubmVjdGVkLiBJZiBpdCB3YXNuJ3Qgc2V0LCBpdCdzIGxpa2VseSBiZWNhdXNlXHJcbiAgICAgICAgLy8gc3RvcCB3YXMgY2FsbGVkIGR1cmluZyBzdGFydCgpIGFuZCBzdGFydCgpIGZhaWxlZC5cclxuICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudHJhbnNwb3J0LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEh0dHBDb25uZWN0aW9uLnRyYW5zcG9ydC5zdG9wKCkgdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcENvbm5lY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiSHR0cENvbm5lY3Rpb24udHJhbnNwb3J0IGlzIHVuZGVmaW5lZCBpbiBIdHRwQ29ubmVjdGlvbi5zdG9wKCkgYmVjYXVzZSBzdGFydCgpIGZhaWxlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgX3N0YXJ0SW50ZXJuYWwodHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICAvLyBTdG9yZSB0aGUgb3JpZ2luYWwgYmFzZSB1cmwgYW5kIHRoZSBhY2Nlc3MgdG9rZW4gZmFjdG9yeSBzaW5jZSB0aGV5IG1heSBjaGFuZ2VcclxuICAgICAgICAvLyBhcyBwYXJ0IG9mIG5lZ290aWF0aW5nXHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkgPSB0aGlzLl9vcHRpb25zLmFjY2Vzc1Rva2VuRmFjdG9yeTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5za2lwTmVnb3RpYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnRyYW5zcG9ydCA9PT0gSHR0cFRyYW5zcG9ydFR5cGUuV2ViU29ja2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gYWRkIGEgY29ubmVjdGlvbiBJRCBpbiB0aGlzIGNhc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRoaXMuX2NvbnN0cnVjdFRyYW5zcG9ydChIdHRwVHJhbnNwb3J0VHlwZS5XZWJTb2NrZXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQganVzdCBjYWxsIGNvbm5lY3QgZGlyZWN0bHkgaW4gdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGZhbGxiYWNrIG9yIG5lZ290aWF0ZSBpbiB0aGlzIGNhc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRUcmFuc3BvcnQodXJsLCB0cmFuc2ZlckZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZWdvdGlhdGlvbiBjYW4gb25seSBiZSBza2lwcGVkIHdoZW4gdXNpbmcgdGhlIFdlYlNvY2tldCB0cmFuc3BvcnQgZGlyZWN0bHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5lZ290aWF0ZVJlc3BvbnNlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCByZWRpcmVjdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5lZ290aWF0ZVJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0TmVnb3RpYXRpb25SZXNwb25zZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2VyIHRyaWVzIHRvIHN0b3AgdGhlIGNvbm5lY3Rpb24gd2hlbiBpdCBpcyBiZWluZyBzdGFydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLyB8fCB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjb25uZWN0aW9uIHdhcyBzdG9wcGVkIGR1cmluZyBuZWdvdGlhdGlvbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmVnb3RpYXRlUmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmVnb3RpYXRlUmVzcG9uc2UuUHJvdG9jb2xWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRldGVjdGVkIGEgY29ubmVjdGlvbiBhdHRlbXB0IHRvIGFuIEFTUC5ORVQgU2lnbmFsUiBTZXJ2ZXIuIFRoaXMgY2xpZW50IG9ubHkgc3VwcG9ydHMgY29ubmVjdGluZyB0byBhbiBBU1AuTkVUIENvcmUgU2lnbmFsUiBTZXJ2ZXIuIFNlZSBodHRwczovL2FrYS5tcy9zaWduYWxyLWNvcmUtZGlmZmVyZW5jZXMgZm9yIGRldGFpbHMuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmVnb3RpYXRlUmVzcG9uc2UudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IG5lZ290aWF0ZVJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ290aWF0ZVJlc3BvbnNlLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgYWNjZXNzIHRva2VuIGZhY3Rvcnkgd2l0aCBvbmUgdGhhdCB1c2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSByZXR1cm5lZCBhY2Nlc3MgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBuZWdvdGlhdGVSZXNwb25zZS5hY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5ID0gKCkgPT4gYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0cysrO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAobmVnb3RpYXRlUmVzcG9uc2UudXJsICYmIHJlZGlyZWN0cyA8IE1BWF9SRURJUkVDVFMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0cyA9PT0gTUFYX1JFRElSRUNUUyAmJiBuZWdvdGlhdGVSZXNwb25zZS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZWdvdGlhdGUgcmVkaXJlY3Rpb24gbGltaXQgZXhjZWVkZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fY3JlYXRlVHJhbnNwb3J0KHVybCwgdGhpcy5fb3B0aW9ucy50cmFuc3BvcnQsIG5lZ290aWF0ZVJlc3BvbnNlLCB0cmFuc2ZlckZvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0IGluc3RhbmNlb2YgTG9uZ1BvbGxpbmdUcmFuc3BvcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMuaW5oZXJlbnRLZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiQ29ubmVjdGluZ1wiIC8qIENvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgY29ubmVjdGlvbiB0cmFuc2l0aW9ucyB0byB0aGUgY29ubmVjdGVkIHN0YXRlIHByaW9yIHRvIGNvbXBsZXRpbmcgdGhpcy5zdGFydEludGVybmFsUHJvbWlzZS5cclxuICAgICAgICAgICAgICAgIC8vIHN0YXJ0KCkgd2lsbCBoYW5kbGUgdGhlIGNhc2Ugd2hlbiBzdG9wIHdhcyBjYWxsZWQgYW5kIHN0YXJ0SW50ZXJuYWwgZXhpdHMgc3RpbGwgaW4gdGhlIGRpc2Nvbm5lY3Rpbmcgc3RhdGUuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlRoZSBIdHRwQ29ubmVjdGlvbiBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHN0b3AoKSBpcyB3YWl0aW5nIG9uIHVzIHZpYSB0aGlzLnN0YXJ0SW50ZXJuYWxQcm9taXNlIHNvIGtlZXAgdGhpcy50cmFuc3BvcnQgYXJvdW5kIHNvIGl0IGNhbiBjbGVhbiB1cC5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSBjYXNlIHN0YXJ0SW50ZXJuYWwgY2FuIGV4aXQgaW4gbmVpdGhlciB0aGUgY29ubmVjdGVkIG5vciBkaXNjb25uZWN0ZWQgc3RhdGUgYmVjYXVzZSBzdG9wQ29ubmVjdGlvbigpXHJcbiAgICAgICAgICAgIC8vIHdpbGwgdHJhbnNpdGlvbiB0byB0aGUgZGlzY29ubmVjdGVkIHN0YXRlLiBzdGFydCgpIHdpbGwgd2FpdCBmb3IgdGhlIHRyYW5zaXRpb24gdXNpbmcgdGhlIHN0b3BQcm9taXNlLlxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBcIkZhaWxlZCB0byBzdGFydCB0aGUgY29ubmVjdGlvbjogXCIgKyBlKTtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi87XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAvLyBpZiBzdGFydCBmYWlscywgYW55IGFjdGl2ZSBjYWxscyB0byBzdG9wIGFzc3VtZSB0aGF0IHN0YXJ0IHdpbGwgY29tcGxldGUgdGhlIHN0b3AgcHJvbWlzZVxyXG4gICAgICAgICAgICB0aGlzLl9zdG9wUHJvbWlzZVJlc29sdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBfZ2V0TmVnb3RpYXRpb25SZXNwb25zZSh1cmwpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnNbSGVhZGVyTmFtZXMuQXV0aG9yaXphdGlvbl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZ2V0VXNlckFnZW50SGVhZGVyKCk7XHJcbiAgICAgICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5lZ290aWF0ZVVybCA9IHRoaXMuX3Jlc29sdmVOZWdvdGlhdGVVcmwodXJsKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgU2VuZGluZyBuZWdvdGlhdGlvbiByZXF1ZXN0OiAke25lZ290aWF0ZVVybH0uYCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9odHRwQ2xpZW50LnBvc3QobmVnb3RpYXRlVXJsLCB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAuLi5oZWFkZXJzLCAuLi50aGlzLl9vcHRpb25zLmhlYWRlcnMgfSxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuX29wdGlvbnMudGltZW91dCxcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5fb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBVbmV4cGVjdGVkIHN0YXR1cyBjb2RlIHJldHVybmVkIGZyb20gbmVnb3RpYXRlICcke3Jlc3BvbnNlLnN0YXR1c0NvZGV9J2ApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuZWdvdGlhdGVSZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UuY29udGVudCk7XHJcbiAgICAgICAgICAgIGlmICghbmVnb3RpYXRlUmVzcG9uc2UubmVnb3RpYXRlVmVyc2lvbiB8fCBuZWdvdGlhdGVSZXNwb25zZS5uZWdvdGlhdGVWZXJzaW9uIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTmVnb3RpYXRlIHZlcnNpb24gMCBkb2Vzbid0IHVzZSBjb25uZWN0aW9uVG9rZW5cclxuICAgICAgICAgICAgICAgIC8vIFNvIHdlIHNldCBpdCBlcXVhbCB0byBjb25uZWN0aW9uSWQgc28gYWxsIG91ciBsb2dpYyBjYW4gdXNlIGNvbm5lY3Rpb25Ub2tlbiB3aXRob3V0IGJlaW5nIGF3YXJlIG9mIHRoZSBuZWdvdGlhdGUgdmVyc2lvblxyXG4gICAgICAgICAgICAgICAgbmVnb3RpYXRlUmVzcG9uc2UuY29ubmVjdGlvblRva2VuID0gbmVnb3RpYXRlUmVzcG9uc2UuY29ubmVjdGlvbklkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZWdvdGlhdGVSZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiRmFpbGVkIHRvIGNvbXBsZXRlIG5lZ290aWF0aW9uIHdpdGggdGhlIHNlcnZlcjogXCIgKyBlO1xyXG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEh0dHBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlICsgXCIgRWl0aGVyIHRoaXMgaXMgbm90IGEgU2lnbmFsUiBlbmRwb2ludCBvciB0aGVyZSBpcyBhIHByb3h5IGJsb2NraW5nIHRoZSBjb25uZWN0aW9uLlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRmFpbGVkVG9OZWdvdGlhdGVXaXRoU2VydmVyRXJyb3IoZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUNvbm5lY3RVcmwodXJsLCBjb25uZWN0aW9uVG9rZW4pIHtcclxuICAgICAgICBpZiAoIWNvbm5lY3Rpb25Ub2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsICsgKHVybC5pbmRleE9mKFwiP1wiKSA9PT0gLTEgPyBcIj9cIiA6IFwiJlwiKSArIGBpZD0ke2Nvbm5lY3Rpb25Ub2tlbn1gO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgX2NyZWF0ZVRyYW5zcG9ydCh1cmwsIHJlcXVlc3RlZFRyYW5zcG9ydCwgbmVnb3RpYXRlUmVzcG9uc2UsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgbGV0IGNvbm5lY3RVcmwgPSB0aGlzLl9jcmVhdGVDb25uZWN0VXJsKHVybCwgbmVnb3RpYXRlUmVzcG9uc2UuY29ubmVjdGlvblRva2VuKTtcclxuICAgICAgICBpZiAodGhpcy5faXNJVHJhbnNwb3J0KHJlcXVlc3RlZFRyYW5zcG9ydCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIHdhcyBwcm92aWRlZCBhbiBpbnN0YW5jZSBvZiBJVHJhbnNwb3J0LCB1c2luZyB0aGF0IGRpcmVjdGx5LlwiKTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSByZXF1ZXN0ZWRUcmFuc3BvcnQ7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0VHJhbnNwb3J0KGNvbm5lY3RVcmwsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uSWQgPSBuZWdvdGlhdGVSZXNwb25zZS5jb25uZWN0aW9uSWQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0RXhjZXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zcG9ydHMgPSBuZWdvdGlhdGVSZXNwb25zZS5hdmFpbGFibGVUcmFuc3BvcnRzIHx8IFtdO1xyXG4gICAgICAgIGxldCBuZWdvdGlhdGUgPSBuZWdvdGlhdGVSZXNwb25zZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGVuZHBvaW50IG9mIHRyYW5zcG9ydHMpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNwb3J0T3JFcnJvciA9IHRoaXMuX3Jlc29sdmVUcmFuc3BvcnRPckVycm9yKGVuZHBvaW50LCByZXF1ZXN0ZWRUcmFuc3BvcnQsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zcG9ydE9yRXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGVycm9yIGFuZCBjb250aW51ZSwgd2UgZG9uJ3Qgd2FudCB0byBjYXVzZSBhIHJlLW5lZ290aWF0ZSBpbiB0aGVzZSBjYXNlc1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0RXhjZXB0aW9ucy5wdXNoKGAke2VuZHBvaW50LnRyYW5zcG9ydH0gZmFpbGVkOmApO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0RXhjZXB0aW9ucy5wdXNoKHRyYW5zcG9ydE9yRXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2lzSVRyYW5zcG9ydCh0cmFuc3BvcnRPckVycm9yKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnRPckVycm9yO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFuZWdvdGlhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdvdGlhdGUgPSBhd2FpdCB0aGlzLl9nZXROZWdvdGlhdGlvblJlc3BvbnNlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0VXJsID0gdGhpcy5fY3JlYXRlQ29ubmVjdFVybCh1cmwsIG5lZ290aWF0ZS5jb25uZWN0aW9uVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zdGFydFRyYW5zcG9ydChjb25uZWN0VXJsLCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uSWQgPSBuZWdvdGlhdGUuY29ubmVjdGlvbklkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBGYWlsZWQgdG8gc3RhcnQgdGhlIHRyYW5zcG9ydCAnJHtlbmRwb2ludC50cmFuc3BvcnR9JzogJHtleH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWdvdGlhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0RXhjZXB0aW9ucy5wdXNoKG5ldyBGYWlsZWRUb1N0YXJ0VHJhbnNwb3J0RXJyb3IoYCR7ZW5kcG9pbnQudHJhbnNwb3J0fSBmYWlsZWQ6ICR7ZXh9YCwgSHR0cFRyYW5zcG9ydFR5cGVbZW5kcG9pbnQudHJhbnNwb3J0XSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IFwiQ29ubmVjdGluZ1wiIC8qIENvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiRmFpbGVkIHRvIHNlbGVjdCB0cmFuc3BvcnQgYmVmb3JlIHN0b3AoKSB3YXMgY2FsbGVkLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc3BvcnRFeGNlcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcnMoYFVuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBzZXJ2ZXIgd2l0aCBhbnkgb2YgdGhlIGF2YWlsYWJsZSB0cmFuc3BvcnRzLiAke3RyYW5zcG9ydEV4Y2VwdGlvbnMuam9pbihcIiBcIil9YCwgdHJhbnNwb3J0RXhjZXB0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm9uZSBvZiB0aGUgdHJhbnNwb3J0cyBzdXBwb3J0ZWQgYnkgdGhlIGNsaWVudCBhcmUgc3VwcG9ydGVkIGJ5IHRoZSBzZXJ2ZXIuXCIpKTtcclxuICAgIH1cclxuICAgIF9jb25zdHJ1Y3RUcmFuc3BvcnQodHJhbnNwb3J0KSB7XHJcbiAgICAgICAgc3dpdGNoICh0cmFuc3BvcnQpIHtcclxuICAgICAgICAgICAgY2FzZSBIdHRwVHJhbnNwb3J0VHlwZS5XZWJTb2NrZXRzOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLldlYlNvY2tldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidXZWJTb2NrZXQnIGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBlbnZpcm9ubWVudC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYlNvY2tldFRyYW5zcG9ydCh0aGlzLl9odHRwQ2xpZW50LCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnksIHRoaXMuX2xvZ2dlciwgdGhpcy5fb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCwgdGhpcy5fb3B0aW9ucy5XZWJTb2NrZXQsIHRoaXMuX29wdGlvbnMuaGVhZGVycyB8fCB7fSk7XHJcbiAgICAgICAgICAgIGNhc2UgSHR0cFRyYW5zcG9ydFR5cGUuU2VydmVyU2VudEV2ZW50czpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fb3B0aW9ucy5FdmVudFNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidFdmVudFNvdXJjZScgaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIGVudmlyb25tZW50LlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydCh0aGlzLl9odHRwQ2xpZW50LCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnksIHRoaXMuX2xvZ2dlciwgdGhpcy5fb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGNhc2UgSHR0cFRyYW5zcG9ydFR5cGUuTG9uZ1BvbGxpbmc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExvbmdQb2xsaW5nVHJhbnNwb3J0KHRoaXMuX2h0dHBDbGllbnQsIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSwgdGhpcy5fbG9nZ2VyLCB0aGlzLl9vcHRpb25zKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0cmFuc3BvcnQ6ICR7dHJhbnNwb3J0fS5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfc3RhcnRUcmFuc3BvcnQodXJsLCB0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNwb3J0Lm9ucmVjZWl2ZSA9IHRoaXMub25yZWNlaXZlO1xyXG4gICAgICAgIHRoaXMudHJhbnNwb3J0Lm9uY2xvc2UgPSAoZSkgPT4gdGhpcy5fc3RvcENvbm5lY3Rpb24oZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LmNvbm5lY3QodXJsLCB0cmFuc2ZlckZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICBfcmVzb2x2ZVRyYW5zcG9ydE9yRXJyb3IoZW5kcG9pbnQsIHJlcXVlc3RlZFRyYW5zcG9ydCwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICBjb25zdCB0cmFuc3BvcnQgPSBIdHRwVHJhbnNwb3J0VHlwZVtlbmRwb2ludC50cmFuc3BvcnRdO1xyXG4gICAgICAgIGlmICh0cmFuc3BvcnQgPT09IG51bGwgfHwgdHJhbnNwb3J0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYFNraXBwaW5nIHRyYW5zcG9ydCAnJHtlbmRwb2ludC50cmFuc3BvcnR9JyBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBjbGllbnQuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYFNraXBwaW5nIHRyYW5zcG9ydCAnJHtlbmRwb2ludC50cmFuc3BvcnR9JyBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBjbGllbnQuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHJhbnNwb3J0TWF0Y2hlcyhyZXF1ZXN0ZWRUcmFuc3BvcnQsIHRyYW5zcG9ydCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZmVyRm9ybWF0cyA9IGVuZHBvaW50LnRyYW5zZmVyRm9ybWF0cy5tYXAoKHMpID0+IFRyYW5zZmVyRm9ybWF0W3NdKTtcclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdHMuaW5kZXhPZihyZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgodHJhbnNwb3J0ID09PSBIdHRwVHJhbnNwb3J0VHlwZS5XZWJTb2NrZXRzICYmICF0aGlzLl9vcHRpb25zLldlYlNvY2tldCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRyYW5zcG9ydCA9PT0gSHR0cFRyYW5zcG9ydFR5cGUuU2VydmVyU2VudEV2ZW50cyAmJiAhdGhpcy5fb3B0aW9ucy5FdmVudFNvdXJjZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYFNraXBwaW5nIHRyYW5zcG9ydCAnJHtIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdfScgYmVjYXVzZSBpdCBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuJ2ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVuc3VwcG9ydGVkVHJhbnNwb3J0RXJyb3IoYCcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19JyBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuYCwgdHJhbnNwb3J0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTZWxlY3RpbmcgdHJhbnNwb3J0ICcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19Jy5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25zdHJ1Y3RUcmFuc3BvcnQodHJhbnNwb3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTa2lwcGluZyB0cmFuc3BvcnQgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nIGJlY2F1c2UgaXQgZG9lcyBub3Qgc3VwcG9ydCB0aGUgcmVxdWVzdGVkIHRyYW5zZmVyIGZvcm1hdCAnJHtUcmFuc2ZlckZvcm1hdFtyZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdF19Jy5gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGAnJHtIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdfScgZG9lcyBub3Qgc3VwcG9ydCAke1RyYW5zZmVyRm9ybWF0W3JlcXVlc3RlZFRyYW5zZmVyRm9ybWF0XX0uYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgU2tpcHBpbmcgdHJhbnNwb3J0ICcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19JyBiZWNhdXNlIGl0IHdhcyBkaXNhYmxlZCBieSB0aGUgY2xpZW50LmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEaXNhYmxlZFRyYW5zcG9ydEVycm9yKGAnJHtIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdfScgaXMgZGlzYWJsZWQgYnkgdGhlIGNsaWVudC5gLCB0cmFuc3BvcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2lzSVRyYW5zcG9ydCh0cmFuc3BvcnQpIHtcclxuICAgICAgICByZXR1cm4gdHJhbnNwb3J0ICYmIHR5cGVvZiAodHJhbnNwb3J0KSA9PT0gXCJvYmplY3RcIiAmJiBcImNvbm5lY3RcIiBpbiB0cmFuc3BvcnQ7XHJcbiAgICB9XHJcbiAgICBfc3RvcENvbm5lY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgSHR0cENvbm5lY3Rpb24uc3RvcENvbm5lY3Rpb24oJHtlcnJvcn0pIGNhbGxlZCB3aGlsZSBpbiBzdGF0ZSAke3RoaXMuX2Nvbm5lY3Rpb25TdGF0ZX0uYCk7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHN0b3BFcnJvciwgaXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSBlcnJvciBmcm9tIHRoZSB0cmFuc3BvcnRcclxuICAgICAgICBlcnJvciA9IHRoaXMuX3N0b3BFcnJvciB8fCBlcnJvcjtcclxuICAgICAgICB0aGlzLl9zdG9wRXJyb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYENhbGwgdG8gSHR0cENvbm5lY3Rpb24uc3RvcENvbm5lY3Rpb24oJHtlcnJvcn0pIHdhcyBpZ25vcmVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGVkIHN0YXRlLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiQ29ubmVjdGluZ1wiIC8qIENvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wQ29ubmVjdGlvbigke2Vycm9yfSkgd2FzIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBzdGlsbCBpbiB0aGUgY29ubmVjdGluZyBzdGF0ZS5gKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIdHRwQ29ubmVjdGlvbi5zdG9wQ29ubmVjdGlvbigke2Vycm9yfSkgd2FzIGNhbGxlZCB3aGlsZSB0aGUgY29ubmVjdGlvbiBpcyBzdGlsbCBpbiB0aGUgY29ubmVjdGluZyBzdGF0ZS5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICAvLyBBIGNhbGwgdG8gc3RvcCgpIGluZHVjZWQgdGhpcyBjYWxsIHRvIHN0b3BDb25uZWN0aW9uIGFuZCBuZWVkcyB0byBiZSBjb21wbGV0ZWQuXHJcbiAgICAgICAgICAgIC8vIEFueSBzdG9wKCkgYXdhaXRlcnMgd2lsbCBiZSBzY2hlZHVsZWQgdG8gY29udGludWUgYWZ0ZXIgdGhlIG9uY2xvc2UgY2FsbGJhY2sgZmlyZXMuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3BQcm9taXNlUmVzb2x2ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBDb25uZWN0aW9uIGRpc2Nvbm5lY3RlZCB3aXRoIGVycm9yICcke2Vycm9yfScuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIkNvbm5lY3Rpb24gZGlzY29ubmVjdGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbmRRdWV1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUXVldWUuc3RvcCgpLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgVHJhbnNwb3J0U2VuZFF1ZXVlLnN0b3AoKSB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUXVldWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbklkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25jbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25jbG9zZShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBIdHRwQ29ubmVjdGlvbi5vbmNsb3NlKCR7ZXJyb3J9KSB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVzb2x2ZVVybCh1cmwpIHtcclxuICAgICAgICAvLyBzdGFydHNXaXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gSUVcclxuICAgICAgICBpZiAodXJsLmxhc3RJbmRleE9mKFwiaHR0cHM6Ly9cIiwgMCkgPT09IDAgfHwgdXJsLmxhc3RJbmRleE9mKFwiaHR0cDovL1wiLCAwKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCByZXNvbHZlICcke3VybH0nLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZXR0aW5nIHRoZSB1cmwgdG8gdGhlIGhyZWYgcHJvcGVyeSBvZiBhbiBhbmNob3IgdGFnIGhhbmRsZXMgbm9ybWFsaXphdGlvblxyXG4gICAgICAgIC8vIGZvciB1cy4gVGhlcmUgYXJlIDMgbWFpbiBjYXNlcy5cclxuICAgICAgICAvLyAxLiBSZWxhdGl2ZSBwYXRoIG5vcm1hbGl6YXRpb24gZS5nIFwiYlwiIC0+IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2EvYlwiXHJcbiAgICAgICAgLy8gMi4gQWJzb2x1dGUgcGF0aCBub3JtYWxpemF0aW9uIGUuZyBcIi9hL2JcIiAtPiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hL2JcIlxyXG4gICAgICAgIC8vIDMuIE5ldHdvcmtwYXRoIHJlZmVyZW5jZSBub3JtYWxpemF0aW9uIGUuZyBcIi8vbG9jYWxob3N0OjUwMDAvYS9iXCIgLT4gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYS9iXCJcclxuICAgICAgICBjb25zdCBhVGFnID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGFUYWcuaHJlZiA9IHVybDtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgTm9ybWFsaXppbmcgJyR7dXJsfScgdG8gJyR7YVRhZy5ocmVmfScuYCk7XHJcbiAgICAgICAgcmV0dXJuIGFUYWcuaHJlZjtcclxuICAgIH1cclxuICAgIF9yZXNvbHZlTmVnb3RpYXRlVXJsKHVybCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdXJsLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgIGxldCBuZWdvdGlhdGVVcmwgPSB1cmwuc3Vic3RyaW5nKDAsIGluZGV4ID09PSAtMSA/IHVybC5sZW5ndGggOiBpbmRleCk7XHJcbiAgICAgICAgaWYgKG5lZ290aWF0ZVVybFtuZWdvdGlhdGVVcmwubGVuZ3RoIC0gMV0gIT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgIG5lZ290aWF0ZVVybCArPSBcIi9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmVnb3RpYXRlVXJsICs9IFwibmVnb3RpYXRlXCI7XHJcbiAgICAgICAgbmVnb3RpYXRlVXJsICs9IGluZGV4ID09PSAtMSA/IFwiXCIgOiB1cmwuc3Vic3RyaW5nKGluZGV4KTtcclxuICAgICAgICBpZiAobmVnb3RpYXRlVXJsLmluZGV4T2YoXCJuZWdvdGlhdGVWZXJzaW9uXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICBuZWdvdGlhdGVVcmwgKz0gaW5kZXggPT09IC0xID8gXCI/XCIgOiBcIiZcIjtcclxuICAgICAgICAgICAgbmVnb3RpYXRlVXJsICs9IFwibmVnb3RpYXRlVmVyc2lvbj1cIiArIHRoaXMuX25lZ290aWF0ZVZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZWdvdGlhdGVVcmw7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNwb3J0TWF0Y2hlcyhyZXF1ZXN0ZWRUcmFuc3BvcnQsIGFjdHVhbFRyYW5zcG9ydCkge1xyXG4gICAgcmV0dXJuICFyZXF1ZXN0ZWRUcmFuc3BvcnQgfHwgKChhY3R1YWxUcmFuc3BvcnQgJiByZXF1ZXN0ZWRUcmFuc3BvcnQpICE9PSAwKTtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFRyYW5zcG9ydFNlbmRRdWV1ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihfdHJhbnNwb3J0KSB7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0ID0gX3RyYW5zcG9ydDtcclxuICAgICAgICB0aGlzLl9idWZmZXIgPSBbXTtcclxuICAgICAgICB0aGlzLl9leGVjdXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3NlbmRCdWZmZXJlZERhdGEgPSBuZXcgUHJvbWlzZVNvdXJjZSgpO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydFJlc3VsdCA9IG5ldyBQcm9taXNlU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5fc2VuZExvb3BQcm9taXNlID0gdGhpcy5fc2VuZExvb3AoKTtcclxuICAgIH1cclxuICAgIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlckRhdGEoZGF0YSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc3BvcnRSZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNwb3J0UmVzdWx0ID0gbmV3IFByb21pc2VTb3VyY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zcG9ydFJlc3VsdC5wcm9taXNlO1xyXG4gICAgfVxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLl9leGVjdXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zZW5kQnVmZmVyZWREYXRhLnJlc29sdmUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VuZExvb3BQcm9taXNlO1xyXG4gICAgfVxyXG4gICAgX2J1ZmZlckRhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9idWZmZXIubGVuZ3RoICYmIHR5cGVvZiAodGhpcy5fYnVmZmVyWzBdKSAhPT0gdHlwZW9mIChkYXRhKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGRhdGEgdG8gYmUgb2YgdHlwZSAke3R5cGVvZiAodGhpcy5fYnVmZmVyKX0gYnV0IHdhcyBvZiB0eXBlICR7dHlwZW9mIChkYXRhKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyLnB1c2goZGF0YSk7XHJcbiAgICAgICAgdGhpcy5fc2VuZEJ1ZmZlcmVkRGF0YS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBfc2VuZExvb3AoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc2VuZEJ1ZmZlcmVkRGF0YS5wcm9taXNlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2V4ZWN1dGluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RyYW5zcG9ydFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zcG9ydFJlc3VsdC5yZWplY3QoXCJDb25uZWN0aW9uIHN0b3BwZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc2VuZEJ1ZmZlcmVkRGF0YSA9IG5ldyBQcm9taXNlU291cmNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zcG9ydFJlc3VsdCA9IHRoaXMuX3RyYW5zcG9ydFJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNwb3J0UmVzdWx0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdHlwZW9mICh0aGlzLl9idWZmZXJbMF0pID09PSBcInN0cmluZ1wiID9cclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlci5qb2luKFwiXCIpIDpcclxuICAgICAgICAgICAgICAgIFRyYW5zcG9ydFNlbmRRdWV1ZS5fY29uY2F0QnVmZmVycyh0aGlzLl9idWZmZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXIubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3RyYW5zcG9ydC5zZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0UmVzdWx0LnJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydFJlc3VsdC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIF9jb25jYXRCdWZmZXJzKGFycmF5QnVmZmVycykge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsTGVuZ3RoID0gYXJyYXlCdWZmZXJzLm1hcCgoYikgPT4gYi5ieXRlTGVuZ3RoKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycmF5QnVmZmVycykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0KG5ldyBVaW50OEFycmF5KGl0ZW0pLCBvZmZzZXQpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gaXRlbS5ieXRlTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0LmJ1ZmZlcjtcclxuICAgIH1cclxufVxyXG5jbGFzcyBQcm9taXNlU291cmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IFt0aGlzLl9yZXNvbHZlciwgdGhpcy5fcmVqZWN0ZXJdID0gW3Jlc29sdmUsIHJlamVjdF0pO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZSgpIHtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlcigpO1xyXG4gICAgfVxyXG4gICAgcmVqZWN0KHJlYXNvbikge1xyXG4gICAgICAgIHRoaXMuX3JlamVjdGVyKHJlYXNvbik7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHR0cENvbm5lY3Rpb24uanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBIYW5kc2hha2VQcm90b2NvbCB9IGZyb20gXCIuL0hhbmRzaGFrZVByb3RvY29sXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4vSUh1YlByb3RvY29sXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcIi4vU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBBcmcsIGdldEVycm9yU3RyaW5nLCBQbGF0Zm9ybSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmNvbnN0IERFRkFVTFRfVElNRU9VVF9JTl9NUyA9IDMwICogMTAwMDtcclxuY29uc3QgREVGQVVMVF9QSU5HX0lOVEVSVkFMX0lOX01TID0gMTUgKiAxMDAwO1xyXG4vKiogRGVzY3JpYmVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSB7QGxpbmsgSHViQ29ubmVjdGlvbn0gdG8gdGhlIHNlcnZlci4gKi9cclxuZXhwb3J0IHZhciBIdWJDb25uZWN0aW9uU3RhdGU7XHJcbihmdW5jdGlvbiAoSHViQ29ubmVjdGlvblN0YXRlKSB7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIGRpc2Nvbm5lY3RlZC4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkRpc2Nvbm5lY3RlZFwiXSA9IFwiRGlzY29ubmVjdGVkXCI7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIGNvbm5lY3RpbmcuICovXHJcbiAgICBIdWJDb25uZWN0aW9uU3RhdGVbXCJDb25uZWN0aW5nXCJdID0gXCJDb25uZWN0aW5nXCI7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIGNvbm5lY3RlZC4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIkNvbm5lY3RlZFwiXSA9IFwiQ29ubmVjdGVkXCI7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIGRpc2Nvbm5lY3RpbmcuICovXHJcbiAgICBIdWJDb25uZWN0aW9uU3RhdGVbXCJEaXNjb25uZWN0aW5nXCJdID0gXCJEaXNjb25uZWN0aW5nXCI7XHJcbiAgICAvKiogVGhlIGh1YiBjb25uZWN0aW9uIGlzIHJlY29ubmVjdGluZy4gKi9cclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVtcIlJlY29ubmVjdGluZ1wiXSA9IFwiUmVjb25uZWN0aW5nXCI7XHJcbn0pKEh1YkNvbm5lY3Rpb25TdGF0ZSB8fCAoSHViQ29ubmVjdGlvblN0YXRlID0ge30pKTtcclxuLyoqIFJlcHJlc2VudHMgYSBjb25uZWN0aW9uIHRvIGEgU2lnbmFsUiBIdWIuICovXHJcbmV4cG9ydCBjbGFzcyBIdWJDb25uZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb24sIGxvZ2dlciwgcHJvdG9jb2wsIHJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgIHRoaXMuX25leHRLZWVwQWxpdmUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2ZyZWV6ZUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgXCJUaGUgcGFnZSBpcyBiZWluZyBmcm96ZW4sIHRoaXMgd2lsbCBsaWtlbHkgbGVhZCB0byB0aGUgY29ubmVjdGlvbiBiZWluZyBjbG9zZWQgYW5kIG1lc3NhZ2VzIGJlaW5nIGxvc3QuIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgZG9jcyBhdCBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9hc3BuZXQvY29yZS9zaWduYWxyL2phdmFzY3JpcHQtY2xpZW50I2JzbGVlcFwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKGNvbm5lY3Rpb24sIFwiY29ubmVjdGlvblwiKTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZChsb2dnZXIsIFwibG9nZ2VyXCIpO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHByb3RvY29sLCBcInByb3RvY29sXCIpO1xyXG4gICAgICAgIHRoaXMuc2VydmVyVGltZW91dEluTWlsbGlzZWNvbmRzID0gREVGQVVMVF9USU1FT1VUX0lOX01TO1xyXG4gICAgICAgIHRoaXMua2VlcEFsaXZlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyA9IERFRkFVTFRfUElOR19JTlRFUlZBTF9JTl9NUztcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgdGhpcy5fcHJvdG9jb2wgPSBwcm90b2NvbDtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX3JlY29ubmVjdFBvbGljeSA9IHJlY29ubmVjdFBvbGljeTtcclxuICAgICAgICB0aGlzLl9oYW5kc2hha2VQcm90b2NvbCA9IG5ldyBIYW5kc2hha2VQcm90b2NvbCgpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbnJlY2VpdmUgPSAoZGF0YSkgPT4gdGhpcy5fcHJvY2Vzc0luY29taW5nRGF0YShkYXRhKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25jbG9zZSA9IChlcnJvcikgPT4gdGhpcy5fY29ubmVjdGlvbkNsb3NlZChlcnJvcik7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICAgICAgdGhpcy5fbWV0aG9kcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2Nsb3NlZENhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZ0NhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGVkQ2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5faW52b2NhdGlvbklkID0gMDtcclxuICAgICAgICB0aGlzLl9yZWNlaXZlZEhhbmRzaGFrZVJlc3BvbnNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZDtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2NhY2hlZFBpbmdNZXNzYWdlID0gdGhpcy5fcHJvdG9jb2wud3JpdGVNZXNzYWdlKHsgdHlwZTogTWVzc2FnZVR5cGUuUGluZyB9KTtcclxuICAgIH1cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIC8vIFVzaW5nIGEgcHVibGljIHN0YXRpYyBmYWN0b3J5IG1ldGhvZCBtZWFucyB3ZSBjYW4gaGF2ZSBhIHByaXZhdGUgY29uc3RydWN0b3IgYW5kIGFuIF9pbnRlcm5hbF9cclxuICAgIC8vIGNyZWF0ZSBtZXRob2QgdGhhdCBjYW4gYmUgdXNlZCBieSBIdWJDb25uZWN0aW9uQnVpbGRlci4gQW4gXCJpbnRlcm5hbFwiIGNvbnN0cnVjdG9yIHdvdWxkIGp1c3RcclxuICAgIC8vIGJlIHN0cmlwcGVkIGF3YXkgYW5kIHRoZSAnLmQudHMnIGZpbGUgd291bGQgaGF2ZSBubyBjb25zdHJ1Y3Rvciwgd2hpY2ggaXMgaW50ZXJwcmV0ZWQgYXMgYVxyXG4gICAgLy8gcHVibGljIHBhcmFtZXRlci1sZXNzIGNvbnN0cnVjdG9yLlxyXG4gICAgc3RhdGljIGNyZWF0ZShjb25uZWN0aW9uLCBsb2dnZXIsIHByb3RvY29sLCByZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEh1YkNvbm5lY3Rpb24oY29ubmVjdGlvbiwgbG9nZ2VyLCBwcm90b2NvbCwgcmVjb25uZWN0UG9saWN5KTtcclxuICAgIH1cclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIHN0YXRlIG9mIHRoZSB7QGxpbmsgSHViQ29ubmVjdGlvbn0gdG8gdGhlIHNlcnZlci4gKi9cclxuICAgIGdldCBzdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblN0YXRlO1xyXG4gICAgfVxyXG4gICAgLyoqIFJlcHJlc2VudHMgdGhlIGNvbm5lY3Rpb24gaWQgb2YgdGhlIHtAbGluayBIdWJDb25uZWN0aW9ufSBvbiB0aGUgc2VydmVyLiBUaGUgY29ubmVjdGlvbiBpZCB3aWxsIGJlIG51bGwgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBlaXRoZXJcclxuICAgICAqICBpbiB0aGUgZGlzY29ubmVjdGVkIHN0YXRlIG9yIGlmIHRoZSBuZWdvdGlhdGlvbiBzdGVwIHdhcyBza2lwcGVkLlxyXG4gICAgICovXHJcbiAgICBnZXQgY29ubmVjdGlvbklkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24gPyAodGhpcy5jb25uZWN0aW9uLmNvbm5lY3Rpb25JZCB8fCBudWxsKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSB1cmwgb2YgdGhlIHtAbGluayBIdWJDb25uZWN0aW9ufSB0byB0aGUgc2VydmVyLiAqL1xyXG4gICAgZ2V0IGJhc2VVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5iYXNlVXJsIHx8IFwiXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgYSBuZXcgdXJsIGZvciB0aGUgSHViQ29ubmVjdGlvbi4gTm90ZSB0aGF0IHRoZSB1cmwgY2FuIG9ubHkgYmUgY2hhbmdlZCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGluIGVpdGhlciB0aGUgRGlzY29ubmVjdGVkIG9yXHJcbiAgICAgKiBSZWNvbm5lY3Rpbmcgc3RhdGVzLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIGNvbm5lY3QgdG8uXHJcbiAgICAgKi9cclxuICAgIHNldCBiYXNlVXJsKHVybCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQgJiYgdGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBIdWJDb25uZWN0aW9uU3RhdGUuUmVjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBIdWJDb25uZWN0aW9uIG11c3QgYmUgaW4gdGhlIERpc2Nvbm5lY3RlZCBvciBSZWNvbm5lY3Rpbmcgc3RhdGUgdG8gY2hhbmdlIHRoZSB1cmwuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgSHViQ29ubmVjdGlvbiB1cmwgbXVzdCBiZSBhIHZhbGlkIHVybC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iYXNlVXJsID0gdXJsO1xyXG4gICAgfVxyXG4gICAgLyoqIFN0YXJ0cyB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgY29ubmVjdGlvbiBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgZXN0YWJsaXNoZWQsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgICAqL1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRQcm9taXNlID0gdGhpcy5fc3RhcnRXaXRoU3RhdGVUcmFuc2l0aW9ucygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydFByb21pc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBfc3RhcnRXaXRoU3RhdGVUcmFuc2l0aW9ucygpIHtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc3RhcnQgYSBIdWJDb25uZWN0aW9uIHRoYXQgaXMgbm90IGluIHRoZSAnRGlzY29ubmVjdGVkJyBzdGF0ZS5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGluZztcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlN0YXJ0aW5nIEh1YkNvbm5lY3Rpb24uXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0SW50ZXJuYWwoKTtcclxuICAgICAgICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gTG9nIHdoZW4gdGhlIGJyb3dzZXIgZnJlZXplcyB0aGUgdGFiIHNvIHVzZXJzIGtub3cgd2h5IHRoZWlyIGNvbm5lY3Rpb24gdW5leHBlY3RlZGx5IHN0b3BwZWQgd29ya2luZ1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmcmVlemVcIiwgdGhpcy5fZnJlZXplRXZlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3RlZDtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkh1YkNvbm5lY3Rpb24gY29ubmVjdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBIdWJDb25uZWN0aW9uIGZhaWxlZCB0byBzdGFydCBzdWNjZXNzZnVsbHkgYmVjYXVzZSBvZiBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBfc3RhcnRJbnRlcm5hbCgpIHtcclxuICAgICAgICB0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9yZWNlaXZlZEhhbmRzaGFrZVJlc3BvbnNlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gU2V0IHVwIHRoZSBwcm9taXNlIGJlZm9yZSBhbnkgY29ubmVjdGlvbiBpcyAocmUpc3RhcnRlZCBvdGhlcndpc2UgaXQgY291bGQgcmFjZSB3aXRoIHJlY2VpdmVkIG1lc3NhZ2VzXHJcbiAgICAgICAgY29uc3QgaGFuZHNoYWtlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGFuZHNoYWtlUmVzb2x2ZXIgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kc2hha2VSZWplY3RlciA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3Rpb24uc3RhcnQodGhpcy5fcHJvdG9jb2wudHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRzaGFrZVJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm90b2NvbDogdGhpcy5fcHJvdG9jb2wubmFtZSxcclxuICAgICAgICAgICAgICAgIHZlcnNpb246IHRoaXMuX3Byb3RvY29sLnZlcnNpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiU2VuZGluZyBoYW5kc2hha2UgcmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKHRoaXMuX2hhbmRzaGFrZVByb3RvY29sLndyaXRlSGFuZHNoYWtlUmVxdWVzdChoYW5kc2hha2VSZXF1ZXN0KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBVc2luZyBIdWJQcm90b2NvbCAnJHt0aGlzLl9wcm90b2NvbC5uYW1lfScuYCk7XHJcbiAgICAgICAgICAgIC8vIGRlZmVuc2l2ZWx5IGNsZWFudXAgdGltZW91dCBpbiBjYXNlIHdlIHJlY2VpdmUgYSBtZXNzYWdlIGZyb20gdGhlIHNlcnZlciBiZWZvcmUgd2UgZmluaXNoIHN0YXJ0XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFudXBUaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0VGltZW91dFBlcmlvZCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldEtlZXBBbGl2ZUludGVydmFsKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGhhbmRzaGFrZVByb21pc2U7XHJcbiAgICAgICAgICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGNoZWNrIHRoZSBzdG9wRHVyaW5nU3RhcnRFcnJvciBpbnN0ZWFkIG9mIGp1c3QgcmVseWluZyBvbiB0aGUgaGFuZHNoYWtlUHJvbWlzZVxyXG4gICAgICAgICAgICAvLyBiZWluZyByZWplY3RlZCBvbiBjbG9zZSwgYmVjYXVzZSB0aGlzIGNvbnRpbnVhdGlvbiBjYW4gcnVuIGFmdGVyIGJvdGggdGhlIGhhbmRzaGFrZSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgY29ubmVjdGlvbiB3YXMgY2xvc2VkLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RvcER1cmluZ1N0YXJ0RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIHRocm93IGluc3RlYWQgb2YgcmV0dXJuaW5nIGEgcmVqZWN0ZWQgcHJvbWlzZSwgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIGFsbG93IGFueSBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbnMgdG8gb2NjdXIgYmV0d2VlbiBub3cgYW5kIHRoZSBjYWxsaW5nIGNvZGUgb2JzZXJ2aW5nIHRoZSBleGNlcHRpb25zLiBSZXR1cm5pbmcgYSByZWplY3RlZCBwcm9taXNlXHJcbiAgICAgICAgICAgICAgICAvLyB3aWxsIGNhdXNlIHRoZSBjYWxsaW5nIGNvbnRpbnVhdGlvbiB0byBnZXQgc2NoZWR1bGVkIHRvIHJ1biBsYXRlci5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5fc3RvcER1cmluZ1N0YXJ0RXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYEh1YiBoYW5kc2hha2UgZmFpbGVkIHdpdGggZXJyb3IgJyR7ZX0nIGR1cmluZyBzdGFydCgpLiBTdG9wcGluZyBIdWJDb25uZWN0aW9uLmApO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICAgICAgICAgIC8vIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBzaG91bGQgbm90IGNvbXBsZXRlIHVudGlsIGFmdGVyIHRoZSBvbmNsb3NlIGNhbGxiYWNrIGlzIGludm9rZWQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCB0cmFuc2l0aW9uIHRoZSBIdWJDb25uZWN0aW9uIHRvIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUgYmVmb3JlIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBjb21wbGV0ZXMuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdGlvbi5zdG9wKGUpO1xyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBTdG9wcyB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgY29ubmVjdGlvbiBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdGVybWluYXRlZCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBzdG9wKCkge1xyXG4gICAgICAgIC8vIENhcHR1cmUgdGhlIHN0YXJ0IHByb21pc2UgYmVmb3JlIHRoZSBjb25uZWN0aW9uIG1pZ2h0IGJlIHJlc3RhcnRlZCBpbiBhbiBvbmNsb3NlIGNhbGxiYWNrLlxyXG4gICAgICAgIGNvbnN0IHN0YXJ0UHJvbWlzZSA9IHRoaXMuX3N0YXJ0UHJvbWlzZTtcclxuICAgICAgICB0aGlzLl9zdG9wUHJvbWlzZSA9IHRoaXMuX3N0b3BJbnRlcm5hbCgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX3N0b3BQcm9taXNlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIEF3YWl0aW5nIHVuZGVmaW5lZCBjb250aW51ZXMgaW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgYXdhaXQgc3RhcnRQcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGV4Y2VwdGlvbiBpcyByZXR1cm5lZCB0byB0aGUgdXNlciBhcyBhIHJlamVjdGVkIFByb21pc2UgZnJvbSB0aGUgc3RhcnQgbWV0aG9kLlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9zdG9wSW50ZXJuYWwoZXJyb3IpIHtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBDYWxsIHRvIEh1YkNvbm5lY3Rpb24uc3RvcCgke2Vycm9yfSkgaWdub3JlZCBiZWNhdXNlIGl0IGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgQ2FsbCB0byBIdHRwQ29ubmVjdGlvbi5zdG9wKCR7ZXJyb3J9KSBpZ25vcmVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeSBpbiB0aGUgZGlzY29ubmVjdGluZyBzdGF0ZS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3BQcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGluZztcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlN0b3BwaW5nIEh1YkNvbm5lY3Rpb24uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3REZWxheUhhbmRsZSkge1xyXG4gICAgICAgICAgICAvLyBXZSdyZSBpbiBhIHJlY29ubmVjdCBkZWxheSB3aGljaCBtZWFucyB0aGUgdW5kZXJseWluZyBjb25uZWN0aW9uIGlzIGN1cnJlbnRseSBhbHJlYWR5IHN0b3BwZWQuXHJcbiAgICAgICAgICAgIC8vIEp1c3QgY2xlYXIgdGhlIGhhbmRsZSB0byBzdG9wIHRoZSByZWNvbm5lY3QgbG9vcCAod2hpY2ggbm8gb25lIGlzIHdhaXRpbmcgb24gdGhhbmtmdWxseSkgYW5kXHJcbiAgICAgICAgICAgIC8vIGZpcmUgdGhlIG9uY2xvc2UgY2FsbGJhY2tzLlxyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gc3RvcHBlZCBkdXJpbmcgcmVjb25uZWN0IGRlbGF5LiBEb25lIHJlY29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZWNvbm5lY3REZWxheUhhbmRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdERlbGF5SGFuZGxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZUNsb3NlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cFRpbWVvdXQoKTtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcER1cmluZ1N0YXJ0RXJyb3IgPSBlcnJvciB8fCBuZXcgRXJyb3IoXCJUaGUgY29ubmVjdGlvbiB3YXMgc3RvcHBlZCBiZWZvcmUgdGhlIGh1YiBoYW5kc2hha2UgY291bGQgY29tcGxldGUuXCIpO1xyXG4gICAgICAgIC8vIEh0dHBDb25uZWN0aW9uLnN0b3AoKSBzaG91bGQgbm90IGNvbXBsZXRlIHVudGlsIGFmdGVyIGVpdGhlciBIdHRwQ29ubmVjdGlvbi5zdGFydCgpIGZhaWxzXHJcbiAgICAgICAgLy8gb3IgdGhlIG9uY2xvc2UgY2FsbGJhY2sgaXMgaW52b2tlZC4gVGhlIG9uY2xvc2UgY2FsbGJhY2sgd2lsbCB0cmFuc2l0aW9uIHRoZSBIdWJDb25uZWN0aW9uXHJcbiAgICAgICAgLy8gdG8gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZSBpZiBuZWVkIGJlIGJlZm9yZSBIdHRwQ29ubmVjdGlvbi5zdG9wKCkgY29tcGxldGVzLlxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc3RvcChlcnJvcik7XHJcbiAgICB9XHJcbiAgICAvKiogSW52b2tlcyBhIHN0cmVhbWluZyBodWIgbWV0aG9kIG9uIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBhcmd1bWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGVwYXJhbSBUIFRoZSB0eXBlIG9mIHRoZSBpdGVtcyByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlcnZlciBtZXRob2QgdG8gaW52b2tlLlxyXG4gICAgICogQHBhcmFtIHthbnlbXX0gYXJncyBUaGUgYXJndW1lbnRzIHVzZWQgdG8gaW52b2tlIHRoZSBzZXJ2ZXIgbWV0aG9kLlxyXG4gICAgICogQHJldHVybnMge0lTdHJlYW1SZXN1bHQ8VD59IEFuIG9iamVjdCB0aGF0IHlpZWxkcyByZXN1bHRzIGZyb20gdGhlIHNlcnZlciBhcyB0aGV5IGFyZSByZWNlaXZlZC5cclxuICAgICAqL1xyXG4gICAgc3RyZWFtKG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBbc3RyZWFtcywgc3RyZWFtSWRzXSA9IHRoaXMuX3JlcGxhY2VTdHJlYW1pbmdQYXJhbXMoYXJncyk7XHJcbiAgICAgICAgY29uc3QgaW52b2NhdGlvbkRlc2NyaXB0b3IgPSB0aGlzLl9jcmVhdGVTdHJlYW1JbnZvY2F0aW9uKG1ldGhvZE5hbWUsIGFyZ3MsIHN0cmVhbUlkcyk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxyXG4gICAgICAgIGxldCBwcm9taXNlUXVldWU7XHJcbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgICAgc3ViamVjdC5jYW5jZWxDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FuY2VsSW52b2NhdGlvbiA9IHRoaXMuX2NyZWF0ZUNhbmNlbEludm9jYXRpb24oaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVF1ZXVlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRXaXRoUHJvdG9jb2woY2FuY2VsSW52b2NhdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF0gPSAoaW52b2NhdGlvbkV2ZW50LCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGludm9jYXRpb25FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaW52b2NhdGlvbkV2ZW50IHdpbGwgbm90IGJlIG51bGwgd2hlbiBhbiBlcnJvciBpcyBub3QgcGFzc2VkIHRvIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgaWYgKGludm9jYXRpb25FdmVudC50eXBlID09PSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludm9jYXRpb25FdmVudC5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmVycm9yKG5ldyBFcnJvcihpbnZvY2F0aW9uRXZlbnQuZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Lm5leHQoKGludm9jYXRpb25FdmVudC5pdGVtKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHByb21pc2VRdWV1ZSA9IHRoaXMuX3NlbmRXaXRoUHJvdG9jb2woaW52b2NhdGlvbkRlc2NyaXB0b3IpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBzdWJqZWN0LmVycm9yKGUpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fbGF1bmNoU3RyZWFtcyhzdHJlYW1zLCBwcm9taXNlUXVldWUpO1xyXG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xyXG4gICAgfVxyXG4gICAgX3NlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9yZXNldEtlZXBBbGl2ZUludGVydmFsKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhIGpzIG9iamVjdCB0byB0aGUgc2VydmVyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGpzIG9iamVjdCB0byBzZXJpYWxpemUgYW5kIHNlbmQuXHJcbiAgICAgKi9cclxuICAgIF9zZW5kV2l0aFByb3RvY29sKG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VuZE1lc3NhZ2UodGhpcy5fcHJvdG9jb2wud3JpdGVNZXNzYWdlKG1lc3NhZ2UpKTtcclxuICAgIH1cclxuICAgIC8qKiBJbnZva2VzIGEgaHViIG1ldGhvZCBvbiB0aGUgc2VydmVyIHVzaW5nIHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgYXJndW1lbnRzLiBEb2VzIG5vdCB3YWl0IGZvciBhIHJlc3BvbnNlIGZyb20gdGhlIHJlY2VpdmVyLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBQcm9taXNlIHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kIHJlc29sdmVzIHdoZW4gdGhlIGNsaWVudCBoYXMgc2VudCB0aGUgaW52b2NhdGlvbiB0byB0aGUgc2VydmVyLiBUaGUgc2VydmVyIG1heSBzdGlsbFxyXG4gICAgICogYmUgcHJvY2Vzc2luZyB0aGUgaW52b2NhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmVyIG1ldGhvZCB0byBpbnZva2UuXHJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBhcmdzIFRoZSBhcmd1bWVudHMgdXNlZCB0byBpbnZva2UgdGhlIHNlcnZlciBtZXRob2QuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaW52b2NhdGlvbiBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc2VudCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBzZW5kKG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBbc3RyZWFtcywgc3RyZWFtSWRzXSA9IHRoaXMuX3JlcGxhY2VTdHJlYW1pbmdQYXJhbXMoYXJncyk7XHJcbiAgICAgICAgY29uc3Qgc2VuZFByb21pc2UgPSB0aGlzLl9zZW5kV2l0aFByb3RvY29sKHRoaXMuX2NyZWF0ZUludm9jYXRpb24obWV0aG9kTmFtZSwgYXJncywgdHJ1ZSwgc3RyZWFtSWRzKSk7XHJcbiAgICAgICAgdGhpcy5fbGF1bmNoU3RyZWFtcyhzdHJlYW1zLCBzZW5kUHJvbWlzZSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbmRQcm9taXNlO1xyXG4gICAgfVxyXG4gICAgLyoqIEludm9rZXMgYSBodWIgbWV0aG9kIG9uIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBhcmd1bWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIFByb21pc2UgcmV0dXJuZWQgYnkgdGhpcyBtZXRob2QgcmVzb2x2ZXMgd2hlbiB0aGUgc2VydmVyIGluZGljYXRlcyBpdCBoYXMgZmluaXNoZWQgaW52b2tpbmcgdGhlIG1ldGhvZC4gV2hlbiB0aGUgcHJvbWlzZVxyXG4gICAgICogcmVzb2x2ZXMsIHRoZSBzZXJ2ZXIgaGFzIGZpbmlzaGVkIGludm9raW5nIHRoZSBtZXRob2QuIElmIHRoZSBzZXJ2ZXIgbWV0aG9kIHJldHVybnMgYSByZXN1bHQsIGl0IGlzIHByb2R1Y2VkIGFzIHRoZSByZXN1bHQgb2ZcclxuICAgICAqIHJlc29sdmluZyB0aGUgUHJvbWlzZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZXBhcmFtIFQgVGhlIGV4cGVjdGVkIHJldHVybiB0eXBlLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlcnZlciBtZXRob2QgdG8gaW52b2tlLlxyXG4gICAgICogQHBhcmFtIHthbnlbXX0gYXJncyBUaGUgYXJndW1lbnRzIHVzZWQgdG8gaW52b2tlIHRoZSBzZXJ2ZXIgbWV0aG9kLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VD59IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgc2VydmVyIG1ldGhvZCAoaWYgYW55KSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBpbnZva2UobWV0aG9kTmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IFtzdHJlYW1zLCBzdHJlYW1JZHNdID0gdGhpcy5fcmVwbGFjZVN0cmVhbWluZ1BhcmFtcyhhcmdzKTtcclxuICAgICAgICBjb25zdCBpbnZvY2F0aW9uRGVzY3JpcHRvciA9IHRoaXMuX2NyZWF0ZUludm9jYXRpb24obWV0aG9kTmFtZSwgYXJncywgZmFsc2UsIHN0cmVhbUlkcyk7XHJcbiAgICAgICAgY29uc3QgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gaW52b2NhdGlvbklkIHdpbGwgYWx3YXlzIGhhdmUgYSB2YWx1ZSBmb3IgYSBub24tYmxvY2tpbmcgaW52b2NhdGlvblxyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXSA9IChpbnZvY2F0aW9uRXZlbnQsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGludm9jYXRpb25FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludm9jYXRpb25FdmVudCB3aWxsIG5vdCBiZSBudWxsIHdoZW4gYW4gZXJyb3IgaXMgbm90IHBhc3NlZCB0byB0aGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkV2ZW50LnR5cGUgPT09IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludm9jYXRpb25FdmVudC5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihpbnZvY2F0aW9uRXZlbnQuZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW52b2NhdGlvbkV2ZW50LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgbWVzc2FnZSB0eXBlOiAke2ludm9jYXRpb25FdmVudC50eXBlfWApKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VRdWV1ZSA9IHRoaXMuX3NlbmRXaXRoUHJvdG9jb2woaW52b2NhdGlvbkRlc2NyaXB0b3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIC8vIGludm9jYXRpb25JZCB3aWxsIGFsd2F5cyBoYXZlIGEgdmFsdWUgZm9yIGEgbm9uLWJsb2NraW5nIGludm9jYXRpb25cclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhdW5jaFN0cmVhbXMoc3RyZWFtcywgcHJvbWlzZVF1ZXVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIC8qKiBSZWdpc3RlcnMgYSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGh1YiBtZXRob2Qgd2l0aCB0aGUgc3BlY2lmaWVkIG1ldGhvZCBuYW1lIGlzIGludm9rZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGh1YiBtZXRob2QgdG8gZGVmaW5lLlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV3TWV0aG9kIFRoZSBoYW5kbGVyIHRoYXQgd2lsbCBiZSByYWlzZWQgd2hlbiB0aGUgaHViIG1ldGhvZCBpcyBpbnZva2VkLlxyXG4gICAgICovXHJcbiAgICBvbihtZXRob2ROYW1lLCBuZXdNZXRob2QpIHtcclxuICAgICAgICBpZiAoIW1ldGhvZE5hbWUgfHwgIW5ld01ldGhvZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZE5hbWUgPSBtZXRob2ROYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9tZXRob2RzW21ldGhvZE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21ldGhvZHNbbWV0aG9kTmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUHJldmVudGluZyBhZGRpbmcgdGhlIHNhbWUgaGFuZGxlciBtdWx0aXBsZSB0aW1lcy5cclxuICAgICAgICBpZiAodGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXS5pbmRleE9mKG5ld01ldGhvZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXS5wdXNoKG5ld01ldGhvZCk7XHJcbiAgICB9XHJcbiAgICBvZmYobWV0aG9kTmFtZSwgbWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKCFtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZE5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX21ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgaWYgKCFoYW5kbGVycykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlSWR4ID0gaGFuZGxlcnMuaW5kZXhPZihtZXRob2QpO1xyXG4gICAgICAgICAgICBpZiAocmVtb3ZlSWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKHJlbW92ZUlkeCwgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tZXRob2RzW21ldGhvZE5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBSZWdpc3RlcnMgYSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkLiBPcHRpb25hbGx5IHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50IGNvbnRhaW5pbmcgdGhlIGVycm9yIHRoYXQgY2F1c2VkIHRoZSBjb25uZWN0aW9uIHRvIGNsb3NlIChpZiBhbnkpLlxyXG4gICAgICovXHJcbiAgICBvbmNsb3NlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogUmVnaXN0ZXJzIGEgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIHN0YXJ0cyByZWNvbm5lY3RpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBzdGFydHMgcmVjb25uZWN0aW5nLiBPcHRpb25hbGx5IHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50IGNvbnRhaW5pbmcgdGhlIGVycm9yIHRoYXQgY2F1c2VkIHRoZSBjb25uZWN0aW9uIHRvIHN0YXJ0IHJlY29ubmVjdGluZyAoaWYgYW55KS5cclxuICAgICAqL1xyXG4gICAgb25yZWNvbm5lY3RpbmcoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBSZWdpc3RlcnMgYSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5IHJlY29ubmVjdHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBzdWNjZXNzZnVsbHkgcmVjb25uZWN0cy5cclxuICAgICAqL1xyXG4gICAgb25yZWNvbm5lY3RlZChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcHJvY2Vzc0luY29taW5nRGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cFRpbWVvdXQoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3JlY2VpdmVkSGFuZHNoYWtlUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX3Byb2Nlc3NIYW5kc2hha2VSZXNwb25zZShkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVjZWl2ZWRIYW5kc2hha2VSZXNwb25zZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERhdGEgbWF5IGhhdmUgYWxsIGJlZW4gcmVhZCB3aGVuIHByb2Nlc3NpbmcgaGFuZHNoYWtlIHJlc3BvbnNlXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIG1lc3NhZ2VzXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5fcHJvdG9jb2wucGFyc2VNZXNzYWdlcyhkYXRhLCB0aGlzLl9sb2dnZXIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VDbGllbnRNZXRob2QobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU3RyZWFtSXRlbTpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbXBsZXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFja3NbbWVzc2FnZS5pbnZvY2F0aW9uSWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW21lc3NhZ2UuaW52b2NhdGlvbklkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBTdHJlYW0gY2FsbGJhY2sgdGhyZXcgZXJyb3I6ICR7Z2V0RXJyb3JTdHJpbmcoZSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuUGluZzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgY2FyZSBhYm91dCBwaW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNsb3NlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiQ2xvc2UgbWVzc2FnZSByZWNlaXZlZCBmcm9tIHNlcnZlci5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbWVzc2FnZS5lcnJvciA/IG5ldyBFcnJvcihcIlNlcnZlciByZXR1cm5lZCBhbiBlcnJvciBvbiBjbG9zZTogXCIgKyBtZXNzYWdlLmVycm9yKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYWxsb3dSZWNvbm5lY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0IGZlZWxzIHdyb25nIG5vdCB0byBhd2FpdCBjb25uZWN0aW9uLnN0b3AoKSBoZXJlLCBidXQgcHJvY2Vzc0luY29taW5nRGF0YSBpcyBjYWxsZWQgYXMgcGFydCBvZiBhbiBvbnJlY2VpdmUgY2FsbGJhY2sgd2hpY2ggaXMgbm90IGFzeW5jLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhbHJlYWR5IHRoZSBiZWhhdmlvciBmb3Igc2VydmVyVGltZW91dCgpLCBhbmQgSHR0cENvbm5lY3Rpb24uU3RvcCgpIHNob3VsZCBjYXRjaCBhbmQgbG9nIGFsbCBwb3NzaWJsZSBleGNlcHRpb25zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnN0b3AoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2Fubm90IGF3YWl0IHN0b3BJbnRlcm5hbCgpIGhlcmUsIGJ1dCBzdWJzZXF1ZW50IGNhbGxzIHRvIHN0b3AoKSB3aWxsIGF3YWl0IHRoaXMgaWYgc3RvcEludGVybmFsKCkgaXMgc3RpbGwgb25nb2luZy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BQcm9taXNlID0gdGhpcy5fc3RvcEludGVybmFsKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgSW52YWxpZCBtZXNzYWdlIHR5cGU6ICR7bWVzc2FnZS50eXBlfS5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVzZXRUaW1lb3V0UGVyaW9kKCk7XHJcbiAgICB9XHJcbiAgICBfcHJvY2Vzc0hhbmRzaGFrZVJlc3BvbnNlKGRhdGEpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2VNZXNzYWdlO1xyXG4gICAgICAgIGxldCByZW1haW5pbmdEYXRhO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFtyZW1haW5pbmdEYXRhLCByZXNwb25zZU1lc3NhZ2VdID0gdGhpcy5faGFuZHNoYWtlUHJvdG9jb2wucGFyc2VIYW5kc2hha2VSZXNwb25zZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiRXJyb3IgcGFyc2luZyBoYW5kc2hha2UgcmVzcG9uc2U6IFwiICsgZTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kc2hha2VSZWplY3RlcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzcG9uc2VNZXNzYWdlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlNlcnZlciByZXR1cm5lZCBoYW5kc2hha2UgZXJyb3I6IFwiICsgcmVzcG9uc2VNZXNzYWdlLmVycm9yO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlamVjdGVyKGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlNlcnZlciBoYW5kc2hha2UgY29tcGxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oYW5kc2hha2VSZXNvbHZlcigpO1xyXG4gICAgICAgIHJldHVybiByZW1haW5pbmdEYXRhO1xyXG4gICAgfVxyXG4gICAgX3Jlc2V0S2VlcEFsaXZlSW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbi5mZWF0dXJlcy5pbmhlcmVudEtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNldCB0aGUgdGltZSB3ZSB3YW50IHRoZSBuZXh0IGtlZXAgYWxpdmUgdG8gYmUgc2VudFxyXG4gICAgICAgIC8vIFRpbWVyIHdpbGwgYmUgc2V0dXAgb24gbmV4dCBtZXNzYWdlIHJlY2VpdmVcclxuICAgICAgICB0aGlzLl9uZXh0S2VlcEFsaXZlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLmtlZXBBbGl2ZUludGVydmFsSW5NaWxsaXNlY29uZHM7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgfVxyXG4gICAgX3Jlc2V0VGltZW91dFBlcmlvZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGlvbi5mZWF0dXJlcyB8fCAhdGhpcy5jb25uZWN0aW9uLmZlYXR1cmVzLmluaGVyZW50S2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgdGltZW91dCB0aW1lclxyXG4gICAgICAgICAgICB0aGlzLl90aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlcnZlclRpbWVvdXQoKSwgdGhpcy5zZXJ2ZXJUaW1lb3V0SW5NaWxsaXNlY29uZHMpO1xyXG4gICAgICAgICAgICAvLyBTZXQga2VlcEFsaXZlIHRpbWVyIGlmIHRoZXJlIGlzbid0IG9uZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGluZ1NlcnZlckhhbmRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFBpbmcgPSB0aGlzLl9uZXh0S2VlcEFsaXZlIC0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dFBpbmcgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHRpbWVyIG5lZWRzIHRvIGJlIHNldCBmcm9tIGEgbmV0d29ya2luZyBjYWxsYmFjayB0byBhdm9pZCBDaHJvbWUgdGltZXIgdGhyb3R0bGluZyBmcm9tIGNhdXNpbmcgdGltZXJzIHRvIHJ1biBvbmNlIGEgbWludXRlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9waW5nU2VydmVySGFuZGxlID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UodGhpcy5fY2FjaGVkUGluZ01lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGNhcmUgYWJvdXQgdGhlIGVycm9yLiBJdCBzaG91bGQgYmUgc2VlbiBlbHNld2hlcmUgaW4gdGhlIGNsaWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjb25uZWN0aW9uIGlzIHByb2JhYmx5IGluIGEgYmFkIG9yIGNsb3NlZCBzdGF0ZSBub3csIGNsZWFudXAgdGhlIHRpbWVyIHNvIGl0IHN0b3BzIHRyaWdnZXJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFudXBQaW5nVGltZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIG5leHRQaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIHNlcnZlclRpbWVvdXQoKSB7XHJcbiAgICAgICAgLy8gVGhlIHNlcnZlciBoYXNuJ3QgdGFsa2VkIHRvIHVzIGluIGEgd2hpbGUuIEl0IGRvZXNuJ3QgbGlrZSB1cyBhbnltb3JlIC4uLiA6KFxyXG4gICAgICAgIC8vIFRlcm1pbmF0ZSB0aGUgY29ubmVjdGlvbiwgYnV0IHdlIGRvbid0IG5lZWQgdG8gd2FpdCBvbiB0aGUgcHJvbWlzZS4gVGhpcyBjb3VsZCB0cmlnZ2VyIHJlY29ubmVjdGluZy5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLnN0b3AobmV3IEVycm9yKFwiU2VydmVyIHRpbWVvdXQgZWxhcHNlZCB3aXRob3V0IHJlY2VpdmluZyBhIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyLlwiKSk7XHJcbiAgICB9XHJcbiAgICBfaW52b2tlQ2xpZW50TWV0aG9kKGludm9jYXRpb25NZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kcyA9IHRoaXMuX21ldGhvZHNbaW52b2NhdGlvbk1lc3NhZ2UudGFyZ2V0LnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgIGlmIChtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2RzLmZvckVhY2goKG0pID0+IG0uYXBwbHkodGhpcywgaW52b2NhdGlvbk1lc3NhZ2UuYXJndW1lbnRzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBBIGNhbGxiYWNrIGZvciB0aGUgbWV0aG9kICR7aW52b2NhdGlvbk1lc3NhZ2UudGFyZ2V0LnRvTG93ZXJDYXNlKCl9IHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW52b2NhdGlvbk1lc3NhZ2UuaW52b2NhdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdjEuIFNvIHdlIHJldHVybiBhbiBlcnJvciB0byBhdm9pZCBibG9ja2luZyB0aGUgc2VydmVyIHdhaXRpbmcgZm9yIHRoZSByZXNwb25zZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlNlcnZlciByZXF1ZXN0ZWQgYSByZXNwb25zZSwgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIHZlcnNpb24gb2YgdGhlIGNsaWVudC5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB3YWl0IG9uIHRoZSBzdG9wIGl0c2VsZi5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BQcm9taXNlID0gdGhpcy5fc3RvcEludGVybmFsKG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgYE5vIGNsaWVudCBtZXRob2Qgd2l0aCB0aGUgbmFtZSAnJHtpbnZvY2F0aW9uTWVzc2FnZS50YXJnZXR9JyBmb3VuZC5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfY29ubmVjdGlvbkNsb3NlZChlcnJvcikge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBIdWJDb25uZWN0aW9uLmNvbm5lY3Rpb25DbG9zZWQoJHtlcnJvcn0pIGNhbGxlZCB3aGlsZSBpbiBzdGF0ZSAke3RoaXMuX2Nvbm5lY3Rpb25TdGF0ZX0uYCk7XHJcbiAgICAgICAgLy8gVHJpZ2dlcmluZyB0aGlzLmhhbmRzaGFrZVJlamVjdGVyIGlzIGluc3VmZmljaWVudCBiZWNhdXNlIGl0IGNvdWxkIGFscmVhZHkgYmUgcmVzb2x2ZWQgd2l0aG91dCB0aGUgY29udGludWF0aW9uIGhhdmluZyBydW4geWV0LlxyXG4gICAgICAgIHRoaXMuX3N0b3BEdXJpbmdTdGFydEVycm9yID0gdGhpcy5fc3RvcER1cmluZ1N0YXJ0RXJyb3IgfHwgZXJyb3IgfHwgbmV3IEVycm9yKFwiVGhlIHVuZGVybHlpbmcgY29ubmVjdGlvbiB3YXMgY2xvc2VkIGJlZm9yZSB0aGUgaHViIGhhbmRzaGFrZSBjb3VsZCBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgLy8gSWYgdGhlIGhhbmRzaGFrZSBpcyBpbiBwcm9ncmVzcywgc3RhcnQgd2lsbCBiZSB3YWl0aW5nIGZvciB0aGUgaGFuZHNoYWtlIHByb21pc2UsIHNvIHdlIGNvbXBsZXRlIGl0LlxyXG4gICAgICAgIC8vIElmIGl0IGhhcyBhbHJlYWR5IGNvbXBsZXRlZCwgdGhpcyBzaG91bGQganVzdCBub29wLlxyXG4gICAgICAgIGlmICh0aGlzLl9oYW5kc2hha2VSZXNvbHZlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kc2hha2VSZXNvbHZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYW5jZWxDYWxsYmFja3NXaXRoRXJyb3IoZXJyb3IgfHwgbmV3IEVycm9yKFwiSW52b2NhdGlvbiBjYW5jZWxlZCBkdWUgdG8gdGhlIHVuZGVybHlpbmcgY29ubmVjdGlvbiBiZWluZyBjbG9zZWQuXCIpKTtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXBQaW5nVGltZXIoKTtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZUNsb3NlKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuQ29ubmVjdGVkICYmIHRoaXMuX3JlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZUNsb3NlKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgbm9uZSBvZiB0aGUgYWJvdmUgaWYgY29uZGl0aW9ucyB3ZXJlIHRydWUgd2VyZSBjYWxsZWQgdGhlIEh1YkNvbm5lY3Rpb24gbXVzdCBiZSBpbiBlaXRoZXI6XHJcbiAgICAgICAgLy8gMS4gVGhlIENvbm5lY3Rpbmcgc3RhdGUgaW4gd2hpY2ggY2FzZSB0aGUgaGFuZHNoYWtlUmVzb2x2ZXIgd2lsbCBjb21wbGV0ZSBpdCBhbmQgc3RvcER1cmluZ1N0YXJ0RXJyb3Igd2lsbCBmYWlsIGl0LlxyXG4gICAgICAgIC8vIDIuIFRoZSBSZWNvbm5lY3Rpbmcgc3RhdGUgaW4gd2hpY2ggY2FzZSB0aGUgaGFuZHNoYWtlUmVzb2x2ZXIgd2lsbCBjb21wbGV0ZSBpdCBhbmQgc3RvcER1cmluZ1N0YXJ0RXJyb3Igd2lsbCBmYWlsIHRoZSBjdXJyZW50IHJlY29ubmVjdCBhdHRlbXB0XHJcbiAgICAgICAgLy8gICAgYW5kIHBvdGVudGlhbGx5IGNvbnRpbnVlIHRoZSByZWNvbm5lY3QoKSBsb29wLlxyXG4gICAgICAgIC8vIDMuIFRoZSBEaXNjb25uZWN0ZWQgc3RhdGUgaW4gd2hpY2ggY2FzZSB3ZSdyZSBhbHJlYWR5IGRvbmUuXHJcbiAgICB9XHJcbiAgICBfY29tcGxldGVDbG9zZShlcnJvcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZyZWV6ZVwiLCB0aGlzLl9mcmVlemVFdmVudExpc3RlbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xvc2VkQ2FsbGJhY2tzLmZvckVhY2goKGMpID0+IGMuYXBwbHkodGhpcywgW2Vycm9yXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgQW4gb25jbG9zZSBjYWxsYmFjayBjYWxsZWQgd2l0aCBlcnJvciAnJHtlcnJvcn0nIHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIF9yZWNvbm5lY3QoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCByZWNvbm5lY3RTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzID0gMDtcclxuICAgICAgICBsZXQgcmV0cnlFcnJvciA9IGVycm9yICE9PSB1bmRlZmluZWQgPyBlcnJvciA6IG5ldyBFcnJvcihcIkF0dGVtcHRpbmcgdG8gcmVjb25uZWN0IGR1ZSB0byBhIHVua25vd24gZXJyb3IuXCIpO1xyXG4gICAgICAgIGxldCBuZXh0UmV0cnlEZWxheSA9IHRoaXMuX2dldE5leHRSZXRyeURlbGF5KHByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHMrKywgMCwgcmV0cnlFcnJvcik7XHJcbiAgICAgICAgaWYgKG5leHRSZXRyeURlbGF5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiBub3QgcmVjb25uZWN0aW5nIGJlY2F1c2UgdGhlIElSZXRyeVBvbGljeSByZXR1cm5lZCBudWxsIG9uIHRoZSBmaXJzdCByZWNvbm5lY3QgYXR0ZW1wdC5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlQ2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3Rpbmc7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBDb25uZWN0aW9uIHJlY29ubmVjdGluZyBiZWNhdXNlIG9mIGVycm9yICcke2Vycm9yfScuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIkNvbm5lY3Rpb24gcmVjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGluZ0NhbGxiYWNrcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZ0NhbGxiYWNrcy5mb3JFYWNoKChjKSA9PiBjLmFwcGx5KHRoaXMsIFtlcnJvcl0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEFuIG9ucmVjb25uZWN0aW5nIGNhbGxiYWNrIGNhbGxlZCB3aXRoIGVycm9yICcke2Vycm9yfScgdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEV4aXQgZWFybHkgaWYgYW4gb25yZWNvbm5lY3RpbmcgY2FsbGJhY2sgY2FsbGVkIGNvbm5lY3Rpb24uc3RvcCgpLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBIdWJDb25uZWN0aW9uU3RhdGUuUmVjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gbGVmdCB0aGUgcmVjb25uZWN0aW5nIHN0YXRlIGluIG9ucmVjb25uZWN0aW5nIGNhbGxiYWNrLiBEb25lIHJlY29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKG5leHRSZXRyeURlbGF5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBSZWNvbm5lY3QgYXR0ZW1wdCBudW1iZXIgJHtwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzfSB3aWxsIHN0YXJ0IGluICR7bmV4dFJldHJ5RGVsYXl9IG1zLmApO1xyXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0RGVsYXlIYW5kbGUgPSBzZXRUaW1lb3V0KHJlc29sdmUsIG5leHRSZXRyeURlbGF5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdERlbGF5SGFuZGxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBIdWJDb25uZWN0aW9uU3RhdGUuUmVjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gbGVmdCB0aGUgcmVjb25uZWN0aW5nIHN0YXRlIGR1cmluZyByZWNvbm5lY3QgZGVsYXkuIERvbmUgcmVjb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRJbnRlcm5hbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3RlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiSHViQ29ubmVjdGlvbiByZWNvbm5lY3RlZCBzdWNjZXNzZnVsbHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGVkQ2FsbGJhY2tzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGVkQ2FsbGJhY2tzLmZvckVhY2goKGMpID0+IGMuYXBwbHkodGhpcywgW3RoaXMuY29ubmVjdGlvbi5jb25uZWN0aW9uSWRdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBBbiBvbnJlY29ubmVjdGVkIGNhbGxiYWNrIGNhbGxlZCB3aXRoIGNvbm5lY3Rpb25JZCAnJHt0aGlzLmNvbm5lY3Rpb24uY29ubmVjdGlvbklkfTsgdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYFJlY29ubmVjdCBhdHRlbXB0IGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgIT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5SZWNvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgQ29ubmVjdGlvbiBtb3ZlZCB0byB0aGUgJyR7dGhpcy5fY29ubmVjdGlvblN0YXRlfScgZnJvbSB0aGUgcmVjb25uZWN0aW5nIHN0YXRlIGR1cmluZyByZWNvbm5lY3QgYXR0ZW1wdC4gRG9uZSByZWNvbm5lY3RpbmcuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdGhpbmtzIHRoYXQgY29ubmVjdGlvblN0YXRlIG11c3QgYmUgQ29ubmVjdGVkIGhlcmUuIFRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIGlzIHdyb25nLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0cnlFcnJvciA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUgOiBuZXcgRXJyb3IoZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIG5leHRSZXRyeURlbGF5ID0gdGhpcy5fZ2V0TmV4dFJldHJ5RGVsYXkocHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0cysrLCBEYXRlLm5vdygpIC0gcmVjb25uZWN0U3RhcnRUaW1lLCByZXRyeUVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgUmVjb25uZWN0IHJldHJpZXMgaGF2ZSBiZWVuIGV4aGF1c3RlZCBhZnRlciAke0RhdGUubm93KCkgLSByZWNvbm5lY3RTdGFydFRpbWV9IG1zIGFuZCAke3ByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHN9IGZhaWxlZCBhdHRlbXB0cy4gQ29ubmVjdGlvbiBkaXNjb25uZWN0aW5nLmApO1xyXG4gICAgICAgIHRoaXMuX2NvbXBsZXRlQ2xvc2UoKTtcclxuICAgIH1cclxuICAgIF9nZXROZXh0UmV0cnlEZWxheShwcmV2aW91c1JldHJ5Q291bnQsIGVsYXBzZWRNaWxsaXNlY29uZHMsIHJldHJ5UmVhc29uKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdFBvbGljeS5uZXh0UmV0cnlEZWxheUluTWlsbGlzZWNvbmRzKHtcclxuICAgICAgICAgICAgICAgIGVsYXBzZWRNaWxsaXNlY29uZHMsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1JldHJ5Q291bnQsXHJcbiAgICAgICAgICAgICAgICByZXRyeVJlYXNvbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBJUmV0cnlQb2xpY3kubmV4dFJldHJ5RGVsYXlJbk1pbGxpc2Vjb25kcygke3ByZXZpb3VzUmV0cnlDb3VudH0sICR7ZWxhcHNlZE1pbGxpc2Vjb25kc30pIHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2NhbmNlbENhbGxiYWNrc1dpdGhFcnJvcihlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcztcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjYWxsYmFja3MpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja3Nba2V5XTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYFN0cmVhbSAnZXJyb3InIGNhbGxiYWNrIGNhbGxlZCB3aXRoICcke2Vycm9yfScgdGhyZXcgZXJyb3I6ICR7Z2V0RXJyb3JTdHJpbmcoZSl9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9jbGVhbnVwUGluZ1RpbWVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9waW5nU2VydmVySGFuZGxlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9waW5nU2VydmVySGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5fcGluZ1NlcnZlckhhbmRsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfY2xlYW51cFRpbWVvdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVvdXRIYW5kbGUpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXRIYW5kbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9jcmVhdGVJbnZvY2F0aW9uKG1ldGhvZE5hbWUsIGFyZ3MsIG5vbmJsb2NraW5nLCBzdHJlYW1JZHMpIHtcclxuICAgICAgICBpZiAobm9uYmxvY2tpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHN0cmVhbUlkcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbUlkcyxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuSW52b2NhdGlvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuSW52b2NhdGlvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGludm9jYXRpb25JZCA9IHRoaXMuX2ludm9jYXRpb25JZDtcclxuICAgICAgICAgICAgdGhpcy5faW52b2NhdGlvbklkKys7XHJcbiAgICAgICAgICAgIGlmIChzdHJlYW1JZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGludm9jYXRpb25JZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbUlkcyxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuSW52b2NhdGlvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGludm9jYXRpb25JZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9sYXVuY2hTdHJlYW1zKHN0cmVhbXMsIHByb21pc2VRdWV1ZSkge1xyXG4gICAgICAgIGlmIChzdHJlYW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN5bmNocm9uaXplIHN0cmVhbSBkYXRhIHNvIHRoZXkgYXJyaXZlIGluLW9yZGVyIG9uIHRoZSBzZXJ2ZXJcclxuICAgICAgICBpZiAoIXByb21pc2VRdWV1ZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlUXVldWUgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2Ugd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGtleXMsIHNpbmNlIHRoZSBrZXlzIGFyZSB0aGUgc3RyZWFtIGlkc1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cclxuICAgICAgICBmb3IgKGNvbnN0IHN0cmVhbUlkIGluIHN0cmVhbXMpIHtcclxuICAgICAgICAgICAgc3RyZWFtc1tzdHJlYW1JZF0uc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVF1ZXVlID0gcHJvbWlzZVF1ZXVlLnRoZW4oKCkgPT4gdGhpcy5fc2VuZFdpdGhQcm90b2NvbCh0aGlzLl9jcmVhdGVDb21wbGV0aW9uTWVzc2FnZShzdHJlYW1JZCkpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVyciAmJiBlcnIudG9TdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVyci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVW5rbm93biBlcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlUXVldWUgPSBwcm9taXNlUXVldWUudGhlbigoKSA9PiB0aGlzLl9zZW5kV2l0aFByb3RvY29sKHRoaXMuX2NyZWF0ZUNvbXBsZXRpb25NZXNzYWdlKHN0cmVhbUlkLCBtZXNzYWdlKSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5leHQ6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVF1ZXVlID0gcHJvbWlzZVF1ZXVlLnRoZW4oKCkgPT4gdGhpcy5fc2VuZFdpdGhQcm90b2NvbCh0aGlzLl9jcmVhdGVTdHJlYW1JdGVtTWVzc2FnZShzdHJlYW1JZCwgaXRlbSkpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZXBsYWNlU3RyZWFtaW5nUGFyYW1zKGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBzdHJlYW1zID0gW107XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtSWRzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZ3VtZW50ID0gYXJnc1tpXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzT2JzZXJ2YWJsZShhcmd1bWVudCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVhbUlkID0gdGhpcy5faW52b2NhdGlvbklkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2NhdGlvbklkKys7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc3RyZWFtIGZvciBsYXRlciB1c2VcclxuICAgICAgICAgICAgICAgIHN0cmVhbXNbc3RyZWFtSWRdID0gYXJndW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW1JZHMucHVzaChzdHJlYW1JZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBzdHJlYW0gZnJvbSBhcmdzXHJcbiAgICAgICAgICAgICAgICBhcmdzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3N0cmVhbXMsIHN0cmVhbUlkc107XHJcbiAgICB9XHJcbiAgICBfaXNPYnNlcnZhYmxlKGFyZykge1xyXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIG90aGVyIHN0cmVhbSBpbXBsZW1lbnRhdGlvbnMgdG8ganVzdCB3b3JrIChsaWtlIHJ4anMpXHJcbiAgICAgICAgcmV0dXJuIGFyZyAmJiBhcmcuc3Vic2NyaWJlICYmIHR5cGVvZiBhcmcuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlU3RyZWFtSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCBzdHJlYW1JZHMpIHtcclxuICAgICAgICBjb25zdCBpbnZvY2F0aW9uSWQgPSB0aGlzLl9pbnZvY2F0aW9uSWQ7XHJcbiAgICAgICAgdGhpcy5faW52b2NhdGlvbklkKys7XHJcbiAgICAgICAgaWYgKHN0cmVhbUlkcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50czogYXJncyxcclxuICAgICAgICAgICAgICAgIGludm9jYXRpb25JZDogaW52b2NhdGlvbklkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBzdHJlYW1JZHMsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5TdHJlYW1JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50czogYXJncyxcclxuICAgICAgICAgICAgICAgIGludm9jYXRpb25JZDogaW52b2NhdGlvbklkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5TdHJlYW1JbnZvY2F0aW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9jcmVhdGVDYW5jZWxJbnZvY2F0aW9uKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuQ2FuY2VsSW52b2NhdGlvbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZVN0cmVhbUl0ZW1NZXNzYWdlKGlkLCBpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpZCxcclxuICAgICAgICAgICAgaXRlbSxcclxuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuU3RyZWFtSXRlbSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUNvbXBsZXRpb25NZXNzYWdlKGlkLCBlcnJvciwgcmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgIGludm9jYXRpb25JZDogaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5Db21wbGV0aW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGlkLFxyXG4gICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNvbXBsZXRpb24sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdWJDb25uZWN0aW9uLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgRGVmYXVsdFJlY29ubmVjdFBvbGljeSB9IGZyb20gXCIuL0RlZmF1bHRSZWNvbm5lY3RQb2xpY3lcIjtcclxuaW1wb3J0IHsgSHR0cENvbm5lY3Rpb24gfSBmcm9tIFwiLi9IdHRwQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBIdWJDb25uZWN0aW9uIH0gZnJvbSBcIi4vSHViQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgSnNvbkh1YlByb3RvY29sIH0gZnJvbSBcIi4vSnNvbkh1YlByb3RvY29sXCI7XHJcbmltcG9ydCB7IE51bGxMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJzXCI7XHJcbmltcG9ydCB7IEFyZywgQ29uc29sZUxvZ2dlciB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmNvbnN0IExvZ0xldmVsTmFtZU1hcHBpbmcgPSB7XHJcbiAgICB0cmFjZTogTG9nTGV2ZWwuVHJhY2UsXHJcbiAgICBkZWJ1ZzogTG9nTGV2ZWwuRGVidWcsXHJcbiAgICBpbmZvOiBMb2dMZXZlbC5JbmZvcm1hdGlvbixcclxuICAgIGluZm9ybWF0aW9uOiBMb2dMZXZlbC5JbmZvcm1hdGlvbixcclxuICAgIHdhcm46IExvZ0xldmVsLldhcm5pbmcsXHJcbiAgICB3YXJuaW5nOiBMb2dMZXZlbC5XYXJuaW5nLFxyXG4gICAgZXJyb3I6IExvZ0xldmVsLkVycm9yLFxyXG4gICAgY3JpdGljYWw6IExvZ0xldmVsLkNyaXRpY2FsLFxyXG4gICAgbm9uZTogTG9nTGV2ZWwuTm9uZSxcclxufTtcclxuZnVuY3Rpb24gcGFyc2VMb2dMZXZlbChuYW1lKSB7XHJcbiAgICAvLyBDYXNlLWluc2Vuc2l0aXZlIG1hdGNoaW5nIHZpYSBsb3dlci1jYXNpbmdcclxuICAgIC8vIFllcywgSSBrbm93IGNhc2UtZm9sZGluZyBpcyBhIGNvbXBsaWNhdGVkIHByb2JsZW0gaW4gVW5pY29kZSwgYnV0IHdlIG9ubHkgc3VwcG9ydFxyXG4gICAgLy8gdGhlIEFTQ0lJIHN0cmluZ3MgZGVmaW5lZCBpbiBMb2dMZXZlbE5hbWVNYXBwaW5nIGFueXdheSwgc28gaXQncyBmaW5lIC1hbnVyc2UuXHJcbiAgICBjb25zdCBtYXBwaW5nID0gTG9nTGV2ZWxOYW1lTWFwcGluZ1tuYW1lLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgaWYgKHR5cGVvZiBtYXBwaW5nICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hcHBpbmc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbG9nIGxldmVsOiAke25hbWV9YCk7XHJcbiAgICB9XHJcbn1cclxuLyoqIEEgYnVpbGRlciBmb3IgY29uZmlndXJpbmcge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdWJDb25uZWN0aW9ufSBpbnN0YW5jZXMuICovXHJcbmV4cG9ydCBjbGFzcyBIdWJDb25uZWN0aW9uQnVpbGRlciB7XHJcbiAgICBjb25maWd1cmVMb2dnaW5nKGxvZ2dpbmcpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZChsb2dnaW5nLCBcImxvZ2dpbmdcIik7XHJcbiAgICAgICAgaWYgKGlzTG9nZ2VyKGxvZ2dpbmcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2luZztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGxvZ2dpbmcgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9nTGV2ZWwgPSBwYXJzZUxvZ0xldmVsKGxvZ2dpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKGxvZ0xldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IENvbnNvbGVMb2dnZXIobG9nZ2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgd2l0aFVybCh1cmwsIHRyYW5zcG9ydFR5cGVPck9wdGlvbnMpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgIEFyZy5pc05vdEVtcHR5KHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgICAgLy8gRmxvdy10eXBpbmcga25vd3Mgd2hlcmUgaXQncyBhdC4gU2luY2UgSHR0cFRyYW5zcG9ydFR5cGUgaXMgYSBudW1iZXIgYW5kIElIdHRwQ29ubmVjdGlvbk9wdGlvbnMgaXMgZ3VhcmFudGVlZFxyXG4gICAgICAgIC8vIHRvIGJlIGFuIG9iamVjdCwgd2Uga25vdyAoYXMgZG9lcyBUeXBlU2NyaXB0KSB0aGlzIGNvbXBhcmlzb24gaXMgYWxsIHdlIG5lZWQgdG8gZmlndXJlIG91dCB3aGljaCBvdmVybG9hZCB3YXMgY2FsbGVkLlxyXG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNwb3J0VHlwZU9yT3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucyA9IHsgLi4udGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMsIC4uLnRyYW5zcG9ydFR5cGVPck9wdGlvbnMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cENvbm5lY3Rpb25PcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnQ6IHRyYW5zcG9ydFR5cGVPck9wdGlvbnMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqIENvbmZpZ3VyZXMgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHViQ29ubmVjdGlvbn0gdG8gdXNlIHRoZSBzcGVjaWZpZWQgSHViIFByb3RvY29sLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SUh1YlByb3RvY29sfSBwcm90b2NvbCBUaGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5JSHViUHJvdG9jb2x9IGltcGxlbWVudGF0aW9uIHRvIHVzZS5cclxuICAgICAqL1xyXG4gICAgd2l0aEh1YlByb3RvY29sKHByb3RvY29sKSB7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQocHJvdG9jb2wsIFwicHJvdG9jb2xcIik7XHJcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgd2l0aEF1dG9tYXRpY1JlY29ubmVjdChyZXRyeURlbGF5c09yUmVjb25uZWN0UG9saWN5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVjb25uZWN0UG9saWN5KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgcmVjb25uZWN0UG9saWN5IGhhcyBhbHJlYWR5IGJlZW4gc2V0LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXRyeURlbGF5c09yUmVjb25uZWN0UG9saWN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0UG9saWN5ID0gbmV3IERlZmF1bHRSZWNvbm5lY3RQb2xpY3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXRyeURlbGF5c09yUmVjb25uZWN0UG9saWN5KSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdFBvbGljeSA9IG5ldyBEZWZhdWx0UmVjb25uZWN0UG9saWN5KHJldHJ5RGVsYXlzT3JSZWNvbm5lY3RQb2xpY3kpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RQb2xpY3kgPSByZXRyeURlbGF5c09yUmVjb25uZWN0UG9saWN5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBDcmVhdGVzIGEge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdWJDb25uZWN0aW9ufSBmcm9tIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgc3BlY2lmaWVkIGluIHRoaXMgYnVpbGRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7SHViQ29ubmVjdGlvbn0gVGhlIGNvbmZpZ3VyZWQge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdWJDb25uZWN0aW9ufS5cclxuICAgICAqL1xyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgLy8gSWYgaHR0cENvbm5lY3Rpb25PcHRpb25zIGhhcyBhIGxvZ2dlciwgdXNlIGl0LiBPdGhlcndpc2UsIG92ZXJyaWRlIGl0IHdpdGggdGhlIG9uZVxyXG4gICAgICAgIC8vIHByb3ZpZGVkIHRvIGNvbmZpZ3VyZUxvZ2dlclxyXG4gICAgICAgIGNvbnN0IGh0dHBDb25uZWN0aW9uT3B0aW9ucyA9IHRoaXMuaHR0cENvbm5lY3Rpb25PcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIC8vIElmIGl0J3MgJ251bGwnLCB0aGUgdXNlciAqKmV4cGxpY2l0bHkqKiBhc2tlZCBmb3IgbnVsbCwgZG9uJ3QgbWVzcyB3aXRoIGl0LlxyXG4gICAgICAgIGlmIChodHRwQ29ubmVjdGlvbk9wdGlvbnMubG9nZ2VyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gSWYgb3VyIGxvZ2dlciBpcyB1bmRlZmluZWQgb3IgbnVsbCwgdGhhdCdzIE9LLCB0aGUgSHR0cENvbm5lY3Rpb24gY29uc3RydWN0b3Igd2lsbCBoYW5kbGUgaXQuXHJcbiAgICAgICAgICAgIGh0dHBDb25uZWN0aW9uT3B0aW9ucy5sb2dnZXIgPSB0aGlzLmxvZ2dlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm93IGNyZWF0ZSB0aGUgY29ubmVjdGlvblxyXG4gICAgICAgIGlmICghdGhpcy51cmwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdIdWJDb25uZWN0aW9uQnVpbGRlci53aXRoVXJsJyBtZXRob2QgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGJ1aWxkaW5nIHRoZSBjb25uZWN0aW9uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBIdHRwQ29ubmVjdGlvbih0aGlzLnVybCwgaHR0cENvbm5lY3Rpb25PcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gSHViQ29ubmVjdGlvbi5jcmVhdGUoY29ubmVjdGlvbiwgdGhpcy5sb2dnZXIgfHwgTnVsbExvZ2dlci5pbnN0YW5jZSwgdGhpcy5wcm90b2NvbCB8fCBuZXcgSnNvbkh1YlByb3RvY29sKCksIHRoaXMucmVjb25uZWN0UG9saWN5KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc0xvZ2dlcihsb2dnZXIpIHtcclxuICAgIHJldHVybiBsb2dnZXIubG9nICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHViQ29ubmVjdGlvbkJ1aWxkZXIuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vKiogRGVmaW5lcyB0aGUgdHlwZSBvZiBhIEh1YiBNZXNzYWdlLiAqL1xyXG5leHBvcnQgdmFyIE1lc3NhZ2VUeXBlO1xyXG4oZnVuY3Rpb24gKE1lc3NhZ2VUeXBlKSB7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGFuIEludm9jYXRpb24gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5JbnZvY2F0aW9uTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJJbnZvY2F0aW9uXCJdID0gMV0gPSBcIkludm9jYXRpb25cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBTdHJlYW1JdGVtIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuU3RyZWFtSXRlbU1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiU3RyZWFtSXRlbVwiXSA9IDJdID0gXCJTdHJlYW1JdGVtXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgQ29tcGxldGlvbiBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkNvbXBsZXRpb25NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkNvbXBsZXRpb25cIl0gPSAzXSA9IFwiQ29tcGxldGlvblwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIFN0cmVhbSBJbnZvY2F0aW9uIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuU3RyZWFtSW52b2NhdGlvbk1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiU3RyZWFtSW52b2NhdGlvblwiXSA9IDRdID0gXCJTdHJlYW1JbnZvY2F0aW9uXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgQ2FuY2VsIEludm9jYXRpb24gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5DYW5jZWxJbnZvY2F0aW9uTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJDYW5jZWxJbnZvY2F0aW9uXCJdID0gNV0gPSBcIkNhbmNlbEludm9jYXRpb25cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBQaW5nIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuUGluZ01lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiUGluZ1wiXSA9IDZdID0gXCJQaW5nXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgQ2xvc2UgbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5DbG9zZU1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiQ2xvc2VcIl0gPSA3XSA9IFwiQ2xvc2VcIjtcclxufSkoTWVzc2FnZVR5cGUgfHwgKE1lc3NhZ2VUeXBlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SUh1YlByb3RvY29sLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gVGhlc2UgdmFsdWVzIGFyZSBkZXNpZ25lZCB0byBtYXRjaCB0aGUgQVNQLk5FVCBMb2cgTGV2ZWxzIHNpbmNlIHRoYXQncyB0aGUgcGF0dGVybiB3ZSdyZSBlbXVsYXRpbmcgaGVyZS5cclxuLyoqIEluZGljYXRlcyB0aGUgc2V2ZXJpdHkgb2YgYSBsb2cgbWVzc2FnZS5cclxuICpcclxuICogTG9nIExldmVscyBhcmUgb3JkZXJlZCBpbiBpbmNyZWFzaW5nIHNldmVyaXR5LiBTbyBgRGVidWdgIGlzIG1vcmUgc2V2ZXJlIHRoYW4gYFRyYWNlYCwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IHZhciBMb2dMZXZlbDtcclxuKGZ1bmN0aW9uIChMb2dMZXZlbCkge1xyXG4gICAgLyoqIExvZyBsZXZlbCBmb3IgdmVyeSBsb3cgc2V2ZXJpdHkgZGlhZ25vc3RpYyBtZXNzYWdlcy4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiVHJhY2VcIl0gPSAwXSA9IFwiVHJhY2VcIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGxvdyBzZXZlcml0eSBkaWFnbm9zdGljIG1lc3NhZ2VzLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJEZWJ1Z1wiXSA9IDFdID0gXCJEZWJ1Z1wiO1xyXG4gICAgLyoqIExvZyBsZXZlbCBmb3IgaW5mb3JtYXRpb25hbCBkaWFnbm9zdGljIG1lc3NhZ2VzLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJJbmZvcm1hdGlvblwiXSA9IDJdID0gXCJJbmZvcm1hdGlvblwiO1xyXG4gICAgLyoqIExvZyBsZXZlbCBmb3IgZGlhZ25vc3RpYyBtZXNzYWdlcyB0aGF0IGluZGljYXRlIGEgbm9uLWZhdGFsIHByb2JsZW0uICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIldhcm5pbmdcIl0gPSAzXSA9IFwiV2FybmluZ1wiO1xyXG4gICAgLyoqIExvZyBsZXZlbCBmb3IgZGlhZ25vc3RpYyBtZXNzYWdlcyB0aGF0IGluZGljYXRlIGEgZmFpbHVyZSBpbiB0aGUgY3VycmVudCBvcGVyYXRpb24uICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkVycm9yXCJdID0gNF0gPSBcIkVycm9yXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBkaWFnbm9zdGljIG1lc3NhZ2VzIHRoYXQgaW5kaWNhdGUgYSBmYWlsdXJlIHRoYXQgd2lsbCB0ZXJtaW5hdGUgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiQ3JpdGljYWxcIl0gPSA1XSA9IFwiQ3JpdGljYWxcIjtcclxuICAgIC8qKiBUaGUgaGlnaGVzdCBwb3NzaWJsZSBsb2cgbGV2ZWwuIFVzZWQgd2hlbiBjb25maWd1cmluZyBsb2dnaW5nIHRvIGluZGljYXRlIHRoYXQgbm8gbG9nIG1lc3NhZ2VzIHNob3VsZCBiZSBlbWl0dGVkLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJOb25lXCJdID0gNl0gPSBcIk5vbmVcIjtcclxufSkoTG9nTGV2ZWwgfHwgKExvZ0xldmVsID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SUxvZ2dlci5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIFRoaXMgd2lsbCBiZSB0cmVhdGVkIGFzIGEgYml0IGZsYWcgaW4gdGhlIGZ1dHVyZSwgc28gd2Uga2VlcCBpdCB1c2luZyBwb3dlci1vZi10d28gdmFsdWVzLlxyXG4vKiogU3BlY2lmaWVzIGEgc3BlY2lmaWMgSFRUUCB0cmFuc3BvcnQgdHlwZS4gKi9cclxuZXhwb3J0IHZhciBIdHRwVHJhbnNwb3J0VHlwZTtcclxuKGZ1bmN0aW9uIChIdHRwVHJhbnNwb3J0VHlwZSkge1xyXG4gICAgLyoqIFNwZWNpZmllcyBubyB0cmFuc3BvcnQgcHJlZmVyZW5jZS4gKi9cclxuICAgIEh0dHBUcmFuc3BvcnRUeXBlW0h0dHBUcmFuc3BvcnRUeXBlW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XHJcbiAgICAvKiogU3BlY2lmaWVzIHRoZSBXZWJTb2NrZXRzIHRyYW5zcG9ydC4gKi9cclxuICAgIEh0dHBUcmFuc3BvcnRUeXBlW0h0dHBUcmFuc3BvcnRUeXBlW1wiV2ViU29ja2V0c1wiXSA9IDFdID0gXCJXZWJTb2NrZXRzXCI7XHJcbiAgICAvKiogU3BlY2lmaWVzIHRoZSBTZXJ2ZXItU2VudCBFdmVudHMgdHJhbnNwb3J0LiAqL1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGVbSHR0cFRyYW5zcG9ydFR5cGVbXCJTZXJ2ZXJTZW50RXZlbnRzXCJdID0gMl0gPSBcIlNlcnZlclNlbnRFdmVudHNcIjtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhlIExvbmcgUG9sbGluZyB0cmFuc3BvcnQuICovXHJcbiAgICBIdHRwVHJhbnNwb3J0VHlwZVtIdHRwVHJhbnNwb3J0VHlwZVtcIkxvbmdQb2xsaW5nXCJdID0gNF0gPSBcIkxvbmdQb2xsaW5nXCI7XHJcbn0pKEh0dHBUcmFuc3BvcnRUeXBlIHx8IChIdHRwVHJhbnNwb3J0VHlwZSA9IHt9KSk7XHJcbi8qKiBTcGVjaWZpZXMgdGhlIHRyYW5zZmVyIGZvcm1hdCBmb3IgYSBjb25uZWN0aW9uLiAqL1xyXG5leHBvcnQgdmFyIFRyYW5zZmVyRm9ybWF0O1xyXG4oZnVuY3Rpb24gKFRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAvKiogU3BlY2lmaWVzIHRoYXQgb25seSB0ZXh0IGRhdGEgd2lsbCBiZSB0cmFuc21pdHRlZCBvdmVyIHRoZSBjb25uZWN0aW9uLiAqL1xyXG4gICAgVHJhbnNmZXJGb3JtYXRbVHJhbnNmZXJGb3JtYXRbXCJUZXh0XCJdID0gMV0gPSBcIlRleHRcIjtcclxuICAgIC8qKiBTcGVjaWZpZXMgdGhhdCBiaW5hcnkgZGF0YSB3aWxsIGJlIHRyYW5zbWl0dGVkIG92ZXIgdGhlIGNvbm5lY3Rpb24uICovXHJcbiAgICBUcmFuc2ZlckZvcm1hdFtUcmFuc2ZlckZvcm1hdFtcIkJpbmFyeVwiXSA9IDJdID0gXCJCaW5hcnlcIjtcclxufSkoVHJhbnNmZXJGb3JtYXQgfHwgKFRyYW5zZmVyRm9ybWF0ID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVRyYW5zcG9ydC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4vSUh1YlByb3RvY29sXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgTnVsbExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlcnNcIjtcclxuaW1wb3J0IHsgVGV4dE1lc3NhZ2VGb3JtYXQgfSBmcm9tIFwiLi9UZXh0TWVzc2FnZUZvcm1hdFwiO1xyXG5jb25zdCBKU09OX0hVQl9QUk9UT0NPTF9OQU1FID0gXCJqc29uXCI7XHJcbi8qKiBJbXBsZW1lbnRzIHRoZSBKU09OIEh1YiBQcm90b2NvbC4gKi9cclxuZXhwb3J0IGNsYXNzIEpzb25IdWJQcm90b2NvbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgICAgICB0aGlzLm5hbWUgPSBKU09OX0hVQl9QUk9UT0NPTF9OQU1FO1xyXG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IDE7XHJcbiAgICAgICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICAgICAgdGhpcy50cmFuc2ZlckZvcm1hdCA9IFRyYW5zZmVyRm9ybWF0LlRleHQ7XHJcbiAgICB9XHJcbiAgICAvKiogQ3JlYXRlcyBhbiBhcnJheSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh1Yk1lc3NhZ2V9IG9iamVjdHMgZnJvbSB0aGUgc3BlY2lmaWVkIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge0lMb2dnZXJ9IGxvZ2dlciBBIGxvZ2dlciB0aGF0IHdpbGwgYmUgdXNlZCB0byBsb2cgbWVzc2FnZXMgdGhhdCBvY2N1ciBkdXJpbmcgcGFyc2luZy5cclxuICAgICAqL1xyXG4gICAgcGFyc2VNZXNzYWdlcyhpbnB1dCwgbG9nZ2VyKSB7XHJcbiAgICAgICAgLy8gVGhlIGludGVyZmFjZSBkb2VzIGFsbG93IFwiQXJyYXlCdWZmZXJcIiB0byBiZSBwYXNzZWQgaW4sIGJ1dCB0aGlzIGltcGxlbWVudGF0aW9uIGRvZXMgbm90LiBTbyBsZXQncyB0aHJvdyBhIHVzZWZ1bCBlcnJvci5cclxuICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgZm9yIEpTT04gaHViIHByb3RvY29sLiBFeHBlY3RlZCBhIHN0cmluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9nZ2VyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlciA9IE51bGxMb2dnZXIuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFBhcnNlIHRoZSBtZXNzYWdlc1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gVGV4dE1lc3NhZ2VGb3JtYXQucGFyc2UoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IGh1Yk1lc3NhZ2VzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZE1lc3NhZ2UgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlZE1lc3NhZ2UudHlwZSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXlsb2FkLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzd2l0Y2ggKHBhcnNlZE1lc3NhZ2UudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5JbnZvY2F0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzSW52b2NhdGlvbk1lc3NhZ2UocGFyc2VkTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlN0cmVhbUl0ZW06XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNTdHJlYW1JdGVtTWVzc2FnZShwYXJzZWRNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ29tcGxldGlvbjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0NvbXBsZXRpb25NZXNzYWdlKHBhcnNlZE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5QaW5nOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmdsZSB2YWx1ZSwgbm8gbmVlZCB0byB2YWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5DbG9zZTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBBbGwgb3B0aW9uYWwgdmFsdWVzLCBubyBuZWVkIHRvIHZhbGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZ1dHVyZSBwcm90b2NvbCBjaGFuZ2VzIGNhbiBhZGQgbWVzc2FnZSB0eXBlcywgb2xkIGNsaWVudHMgY2FuIGlnbm9yZSB0aGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJVbmtub3duIG1lc3NhZ2UgdHlwZSAnXCIgKyBwYXJzZWRNZXNzYWdlLnR5cGUgKyBcIicgaWdub3JlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHViTWVzc2FnZXMucHVzaChwYXJzZWRNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGh1Yk1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gICAgLyoqIFdyaXRlcyB0aGUgc3BlY2lmaWVkIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHViTWVzc2FnZX0gdG8gYSBzdHJpbmcgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIdWJNZXNzYWdlfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHdyaXRlLlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmcgY29udGFpbmluZyB0aGUgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgd3JpdGVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gVGV4dE1lc3NhZ2VGb3JtYXQud3JpdGUoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgfVxyXG4gICAgX2lzSW52b2NhdGlvbk1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX2Fzc2VydE5vdEVtcHR5U3RyaW5nKG1lc3NhZ2UudGFyZ2V0LCBcIkludmFsaWQgcGF5bG9hZCBmb3IgSW52b2NhdGlvbiBtZXNzYWdlLlwiKTtcclxuICAgICAgICBpZiAobWVzc2FnZS5pbnZvY2F0aW9uSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLmludm9jYXRpb25JZCwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIEludm9jYXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2lzU3RyZWFtSXRlbU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX2Fzc2VydE5vdEVtcHR5U3RyaW5nKG1lc3NhZ2UuaW52b2NhdGlvbklkLCBcIkludmFsaWQgcGF5bG9hZCBmb3IgU3RyZWFtSXRlbSBtZXNzYWdlLlwiKTtcclxuICAgICAgICBpZiAobWVzc2FnZS5pdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXlsb2FkIGZvciBTdHJlYW1JdGVtIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pc0NvbXBsZXRpb25NZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAobWVzc2FnZS5yZXN1bHQgJiYgbWVzc2FnZS5lcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBheWxvYWQgZm9yIENvbXBsZXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWVzc2FnZS5yZXN1bHQgJiYgbWVzc2FnZS5lcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLmVycm9yLCBcIkludmFsaWQgcGF5bG9hZCBmb3IgQ29tcGxldGlvbiBtZXNzYWdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS5pbnZvY2F0aW9uSWQsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBDb21wbGV0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgfVxyXG4gICAgX2Fzc2VydE5vdEVtcHR5U3RyaW5nKHZhbHVlLCBlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8IHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Kc29uSHViUHJvdG9jb2wuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vKiogQSBsb2dnZXIgdGhhdCBkb2VzIG5vdGhpbmcgd2hlbiBsb2cgbWVzc2FnZXMgYXJlIHNlbnQgdG8gaXQuICovXHJcbmV4cG9ydCBjbGFzcyBOdWxsTG9nZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgbG9nKF9sb2dMZXZlbCwgX21lc3NhZ2UpIHtcclxuICAgIH1cclxufVxyXG4vKiogVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5OdWxsTG9nZ2VyfS4gKi9cclxuTnVsbExvZ2dlci5pbnN0YW5jZSA9IG5ldyBOdWxsTG9nZ2VyKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvZ2dlcnMuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBBYm9ydENvbnRyb2xsZXIgfSBmcm9tIFwiLi9BYm9ydENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgSHR0cEVycm9yLCBUaW1lb3V0RXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHsgSGVhZGVyTmFtZXMgfSBmcm9tIFwiLi9IZWFkZXJOYW1lc1wiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IEFyZywgZ2V0RGF0YURldGFpbCwgZ2V0VXNlckFnZW50SGVhZGVyLCBzZW5kTWVzc2FnZSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8vIE5vdCBleHBvcnRlZCBmcm9tICdpbmRleCcsIHRoaXMgdHlwZSBpcyBpbnRlcm5hbC5cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBMb25nUG9sbGluZ1RyYW5zcG9ydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50LCBhY2Nlc3NUb2tlbkZhY3RvcnksIGxvZ2dlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX2h0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSA9IGFjY2Vzc1Rva2VuRmFjdG9yeTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgdGhpcy5fcG9sbEFib3J0ID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9ucmVjZWl2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIFRoaXMgaXMgYW4gaW50ZXJuYWwgdHlwZSwgbm90IGV4cG9ydGVkIGZyb20gJ2luZGV4JyBzbyB0aGlzIGlzIHJlYWxseSBqdXN0IGludGVybmFsLlxyXG4gICAgZ2V0IHBvbGxBYm9ydGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb2xsQWJvcnQuYWJvcnRlZDtcclxuICAgIH1cclxuICAgIGFzeW5jIGNvbm5lY3QodXJsLCB0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgQXJnLmlzSW4odHJhbnNmZXJGb3JtYXQsIFRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIENvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgIC8vIEFsbG93IGJpbmFyeSBmb3JtYXQgb24gTm9kZSBhbmQgQnJvd3NlcnMgdGhhdCBzdXBwb3J0IGJpbmFyeSBjb250ZW50IChpbmRpY2F0ZWQgYnkgdGhlIHByZXNlbmNlIG9mIHJlc3BvbnNlVHlwZSBwcm9wZXJ0eSlcclxuICAgICAgICBpZiAodHJhbnNmZXJGb3JtYXQgPT09IFRyYW5zZmVyRm9ybWF0LkJpbmFyeSAmJlxyXG4gICAgICAgICAgICAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBuZXcgWE1MSHR0cFJlcXVlc3QoKS5yZXNwb25zZVR5cGUgIT09IFwic3RyaW5nXCIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJpbmFyeSBwcm90b2NvbHMgb3ZlciBYbWxIdHRwUmVxdWVzdCBub3QgaW1wbGVtZW50aW5nIGFkdmFuY2VkIGZlYXR1cmVzIGFyZSBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGdldFVzZXJBZ2VudEhlYWRlcigpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7IFtuYW1lXTogdmFsdWUsIC4uLnRoaXMuX29wdGlvbnMuaGVhZGVycyB9O1xyXG4gICAgICAgIGNvbnN0IHBvbGxPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhYm9ydFNpZ25hbDogdGhpcy5fcG9sbEFib3J0LnNpZ25hbCxcclxuICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgdGltZW91dDogMTAwMDAwLFxyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuX29wdGlvbnMud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0ID09PSBUcmFuc2ZlckZvcm1hdC5CaW5hcnkpIHtcclxuICAgICAgICAgICAgcG9sbE9wdGlvbnMucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2dldEFjY2Vzc1Rva2VuKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVhZGVyVG9rZW4ocG9sbE9wdGlvbnMsIHRva2VuKTtcclxuICAgICAgICAvLyBNYWtlIGluaXRpYWwgbG9uZyBwb2xsaW5nIHJlcXVlc3RcclxuICAgICAgICAvLyBTZXJ2ZXIgdXNlcyBmaXJzdCBsb25nIHBvbGxpbmcgcmVxdWVzdCB0byBmaW5pc2ggaW5pdGlhbGl6aW5nIGNvbm5lY3Rpb24gYW5kIGl0IHJldHVybnMgd2l0aG91dCBkYXRhXHJcbiAgICAgICAgY29uc3QgcG9sbFVybCA9IGAke3VybH0mXz0ke0RhdGUubm93KCl9YDtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgcG9sbGluZzogJHtwb2xsVXJsfS5gKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHBvbGxVcmwsIHBvbGxPcHRpb25zKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGAoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBVbmV4cGVjdGVkIHJlc3BvbnNlIGNvZGU6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0uYCk7XHJcbiAgICAgICAgICAgIC8vIE1hcmsgcnVubmluZyBhcyBmYWxzZSBzbyB0aGF0IHRoZSBwb2xsIGltbWVkaWF0ZWx5IGVuZHMgYW5kIHJ1bnMgdGhlIGNsb3NlIGxvZ2ljXHJcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlRXJyb3IgPSBuZXcgSHR0cEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQgfHwgXCJcIiwgcmVzcG9uc2Uuc3RhdHVzQ29kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZWNlaXZpbmcgPSB0aGlzLl9wb2xsKHRoaXMuX3VybCwgcG9sbE9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgX2dldEFjY2Vzc1Rva2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIF91cGRhdGVIZWFkZXJUb2tlbihyZXF1ZXN0LCB0b2tlbikge1xyXG4gICAgICAgIGlmICghcmVxdWVzdC5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzW0hlYWRlck5hbWVzLkF1dGhvcml6YXRpb25dID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcXVlc3QuaGVhZGVyc1tIZWFkZXJOYW1lcy5BdXRob3JpemF0aW9uXSkge1xyXG4gICAgICAgICAgICBkZWxldGUgcmVxdWVzdC5oZWFkZXJzW0hlYWRlck5hbWVzLkF1dGhvcml6YXRpb25dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIF9wb2xsKHVybCwgcG9sbE9wdGlvbnMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fcnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBnZXQgdGhlIGFjY2VzcyB0b2tlbiBvbiBlYWNoIHBvbGwsIGluIGNhc2UgaXQgY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLl9nZXRBY2Nlc3NUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlSGVhZGVyVG9rZW4ocG9sbE9wdGlvbnMsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9sbFVybCA9IGAke3VybH0mXz0ke0RhdGUubm93KCl9YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgcG9sbGluZzogJHtwb2xsVXJsfS5gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHBvbGxVcmwsIHBvbGxPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbCB0ZXJtaW5hdGVkIGJ5IHNlcnZlci5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGAoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBVbmV4cGVjdGVkIHJlc3BvbnNlIGNvZGU6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0uYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuZXhwZWN0ZWQgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2VFcnJvciA9IG5ldyBIdHRwRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCB8fCBcIlwiLCByZXNwb25zZS5zdGF0dXNDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBkYXRhIHJlY2VpdmVkLiAke2dldERhdGFEZXRhaWwocmVzcG9uc2UuY29udGVudCwgdGhpcy5fb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCl9LmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbnJlY2VpdmUocmVzcG9uc2UuY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFub3RoZXIgd2F5IHRpbWVvdXQgbWFuaWZlc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGwgdGltZWQgb3V0LCByZWlzc3VpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9nIGJ1dCBkaXNyZWdhcmQgZXJyb3JzIHRoYXQgb2NjdXIgYWZ0ZXIgc3RvcHBpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGwgZXJyb3JlZCBhZnRlciBzaHV0ZG93bjogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFRpbWVvdXRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIHRpbWVvdXRzIGFuZCByZWlzc3VlIHRoZSBwb2xsLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsIHRpbWVkIG91dCwgcmVpc3N1aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBjb25uZWN0aW9uIHdpdGggdGhlIGVycm9yIGFzIHRoZSByZXN1bHQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZUVycm9yID0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsaW5nIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICAgICAgLy8gV2Ugd2lsbCByZWFjaCBoZXJlIHdpdGggcG9sbEFib3J0ZWQ9PWZhbHNlIHdoZW4gdGhlIHNlcnZlciByZXR1cm5lZCBhIHJlc3BvbnNlIGNhdXNpbmcgdGhlIHRyYW5zcG9ydCB0byBzdG9wLlxyXG4gICAgICAgICAgICAvLyBJZiBwb2xsQWJvcnRlZD09dHJ1ZSB0aGVuIGNsaWVudCBpbml0aWF0ZWQgdGhlIHN0b3AgYW5kIHRoZSBzdG9wIG1ldGhvZCB3aWxsIHJhaXNlIHRoZSBjbG9zZSBldmVudCBhZnRlciBERUxFVEUgaXMgc2VudC5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvbGxBYm9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yYWlzZU9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fcnVubmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHNlbmQgdW50aWwgdGhlIHRyYW5zcG9ydCBpcyBjb25uZWN0ZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VuZE1lc3NhZ2UodGhpcy5fbG9nZ2VyLCBcIkxvbmdQb2xsaW5nXCIsIHRoaXMuX2h0dHBDbGllbnQsIHRoaXMuX3VybCwgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5LCBkYXRhLCB0aGlzLl9vcHRpb25zKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBTdG9wcGluZyBwb2xsaW5nLlwiKTtcclxuICAgICAgICAvLyBUZWxsIHJlY2VpdmluZyBsb29wIHRvIHN0b3AsIGFib3J0IGFueSBjdXJyZW50IHJlcXVlc3QsIGFuZCB0aGVuIHdhaXQgZm9yIGl0IHRvIGZpbmlzaFxyXG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9wb2xsQWJvcnQuYWJvcnQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9yZWNlaXZpbmc7XHJcbiAgICAgICAgICAgIC8vIFNlbmQgREVMRVRFIHRvIGNsZWFuIHVwIGxvbmcgcG9sbGluZyBvbiB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBzZW5kaW5nIERFTEVURSByZXF1ZXN0IHRvICR7dGhpcy5fdXJsfS5gKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZ2V0VXNlckFnZW50SGVhZGVyKCk7XHJcbiAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgLi4uaGVhZGVycywgLi4udGhpcy5fb3B0aW9ucy5oZWFkZXJzIH0sXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLl9vcHRpb25zLnRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuX29wdGlvbnMud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2dldEFjY2Vzc1Rva2VuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUhlYWRlclRva2VuKGRlbGV0ZU9wdGlvbnMsIHRva2VuKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5faHR0cENsaWVudC5kZWxldGUodGhpcy5fdXJsLCBkZWxldGVPcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBERUxFVEUgcmVxdWVzdCBzZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgU3RvcCBmaW5pc2hlZC5cIik7XHJcbiAgICAgICAgICAgIC8vIFJhaXNlIGNsb3NlIGV2ZW50IGhlcmUgaW5zdGVhZCBvZiBpbiBwb2xsaW5nXHJcbiAgICAgICAgICAgIC8vIEl0IG5lZWRzIHRvIGhhcHBlbiBhZnRlciB0aGUgREVMRVRFIHJlcXVlc3QgaXMgc2VudFxyXG4gICAgICAgICAgICB0aGlzLl9yYWlzZU9uQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmFpc2VPbkNsb3NlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgbGV0IGxvZ01lc3NhZ2UgPSBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIEZpcmluZyBvbmNsb3NlIGV2ZW50LlwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbG9nTWVzc2FnZSArPSBcIiBFcnJvcjogXCIgKyB0aGlzLl9jbG9zZUVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGxvZ01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLm9uY2xvc2UodGhpcy5fY2xvc2VFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvbmdQb2xsaW5nVHJhbnNwb3J0LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBBcmcsIGdldERhdGFEZXRhaWwsIGdldFVzZXJBZ2VudEhlYWRlciwgUGxhdGZvcm0sIHNlbmRNZXNzYWdlIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0IHtcclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgbG9nZ2VyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5ID0gYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLm9ucmVjZWl2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gbnVsbDtcclxuICAgIH1cclxuICAgIGFzeW5jIGNvbm5lY3QodXJsLCB0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgQXJnLmlzSW4odHJhbnNmZXJGb3JtYXQsIFRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKFNTRSB0cmFuc3BvcnQpIENvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgIC8vIHNldCB1cmwgYmVmb3JlIGFjY2Vzc1Rva2VuRmFjdG9yeSBiZWNhdXNlIHRoaXMudXJsIGlzIG9ubHkgZm9yIHNlbmQgYW5kIHdlIHNldCB0aGUgYXV0aCBoZWFkZXIgaW5zdGVhZCBvZiB0aGUgcXVlcnkgc3RyaW5nIGZvciBzZW5kXHJcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICAgIGlmICh0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkoKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKFwiP1wiKSA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIGBhY2Nlc3NfdG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQodG9rZW4pfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IG9wZW5lZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNmZXJGb3JtYXQgIT09IFRyYW5zZmVyRm9ybWF0LlRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaGUgU2VydmVyLVNlbnQgRXZlbnRzIHRyYW5zcG9ydCBvbmx5IHN1cHBvcnRzIHRoZSAnVGV4dCcgdHJhbnNmZXIgZm9ybWF0XCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZXZlbnRTb3VyY2U7XHJcbiAgICAgICAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgfHwgUGxhdGZvcm0uaXNXZWJXb3JrZXIpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50U291cmNlID0gbmV3IHRoaXMuX29wdGlvbnMuRXZlbnRTb3VyY2UodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdGhpcy5fb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb24tYnJvd3NlciBwYXNzZXMgY29va2llcyB2aWEgdGhlIGRpY3Rpb25hcnlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSB0aGlzLl9odHRwQ2xpZW50LmdldENvb2tpZVN0cmluZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5Db29raWUgPSBjb29raWVzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGdldFVzZXJBZ2VudEhlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRTb3VyY2UgPSBuZXcgdGhpcy5fb3B0aW9ucy5FdmVudFNvdXJjZSh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0aGlzLl9vcHRpb25zLndpdGhDcmVkZW50aWFscywgaGVhZGVyczogeyAuLi5oZWFkZXJzLCAuLi50aGlzLl9vcHRpb25zLmhlYWRlcnMgfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRTb3VyY2Uub25tZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vbnJlY2VpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoU1NFIHRyYW5zcG9ydCkgZGF0YSByZWNlaXZlZC4gJHtnZXREYXRhRGV0YWlsKGUuZGF0YSwgdGhpcy5fb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCl9LmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbnJlY2VpdmUoZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBub3QgdXNpbmcgZXZlbnQgb24gcHVycG9zZVxyXG4gICAgICAgICAgICAgICAgZXZlbnRTb3VyY2Uub25lcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnRTb3VyY2UgZG9lc24ndCBnaXZlIGFueSB1c2VmdWwgaW5mb3JtYXRpb24gYWJvdXQgc2VydmVyIHNpZGUgY2xvc2VzLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJFdmVudFNvdXJjZSBmYWlsZWQgdG8gY29ubmVjdC4gVGhlIGNvbm5lY3Rpb24gY291bGQgbm90IGJlIGZvdW5kIG9uIHRoZSBzZXJ2ZXIsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgZWl0aGVyIHRoZSBjb25uZWN0aW9uIElEIGlzIG5vdCBwcmVzZW50IG9uIHRoZSBzZXJ2ZXIsIG9yIGEgcHJveHkgaXMgcmVmdXNpbmcvYnVmZmVyaW5nIHRoZSBjb25uZWN0aW9uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIElmIHlvdSBoYXZlIG11bHRpcGxlIHNlcnZlcnMgY2hlY2sgdGhhdCBzdGlja3kgc2Vzc2lvbnMgYXJlIGVuYWJsZWQuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZXZlbnRTb3VyY2Uub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBTU0UgY29ubmVjdGVkIHRvICR7dGhpcy5fdXJsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50U291cmNlID0gZXZlbnRTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzZW5kIHVudGlsIHRoZSB0cmFuc3BvcnQgaXMgY29ubmVjdGVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbmRNZXNzYWdlKHRoaXMuX2xvZ2dlciwgXCJTU0VcIiwgdGhpcy5faHR0cENsaWVudCwgdGhpcy5fdXJsLCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnksIGRhdGEsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIF9jbG9zZShlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50U291cmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50U291cmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IFN1YmplY3RTdWJzY3JpcHRpb24gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vKiogU3RyZWFtIGltcGxlbWVudGF0aW9uIHRvIHN0cmVhbSBpdGVtcyB0byB0aGUgc2VydmVyLiAqL1xyXG5leHBvcnQgY2xhc3MgU3ViamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xyXG4gICAgfVxyXG4gICAgbmV4dChpdGVtKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVycykge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVycm9yKGVycikge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVycykge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpcHRpb24odGhpcywgb2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YmplY3QuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBOb3QgZXhwb3J0ZWQgZnJvbSBpbmRleFxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFRleHRNZXNzYWdlRm9ybWF0IHtcclxuICAgIHN0YXRpYyB3cml0ZShvdXRwdXQpIHtcclxuICAgICAgICByZXR1cm4gYCR7b3V0cHV0fSR7VGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yfWA7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcclxuICAgICAgICBpZiAoaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV0gIT09IFRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXNzYWdlIGlzIGluY29tcGxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGlucHV0LnNwbGl0KFRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvcik7XHJcbiAgICAgICAgbWVzc2FnZXMucG9wKCk7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xyXG4gICAgfVxyXG59XHJcblRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvckNvZGUgPSAweDFlO1xyXG5UZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3IgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvckNvZGUpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1UZXh0TWVzc2FnZUZvcm1hdC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBOdWxsTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2Vyc1wiO1xyXG4vLyBWZXJzaW9uIHRva2VuIHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgcHJlcGFjayBjb21tYW5kXHJcbi8qKiBUaGUgdmVyc2lvbiBvZiB0aGUgU2lnbmFsUiBjbGllbnQuICovXHJcbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gXCI2LjAuOFwiO1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIEFyZyB7XHJcbiAgICBzdGF0aWMgaXNSZXF1aXJlZCh2YWwsIG5hbWUpIHtcclxuICAgICAgICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke25hbWV9JyBhcmd1bWVudCBpcyByZXF1aXJlZC5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaXNOb3RFbXB0eSh2YWwsIG5hbWUpIHtcclxuICAgICAgICBpZiAoIXZhbCB8fCB2YWwubWF0Y2goL15cXHMqJC8pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke25hbWV9JyBhcmd1bWVudCBzaG91bGQgbm90IGJlIGVtcHR5LmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBpc0luKHZhbCwgdmFsdWVzLCBuYW1lKSB7XHJcbiAgICAgICAgLy8gVHlwZVNjcmlwdCBlbnVtcyBoYXZlIGtleXMgZm9yICoqYm90aCoqIHRoZSBuYW1lIGFuZCB0aGUgdmFsdWUgb2YgZWFjaCBlbnVtIG1lbWJlciBvbiB0aGUgdHlwZSBpdHNlbGYuXHJcbiAgICAgICAgaWYgKCEodmFsIGluIHZhbHVlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duICR7bmFtZX0gdmFsdWU6ICR7dmFsfS5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgICAvLyByZWFjdC1uYXRpdmUgaGFzIGEgd2luZG93IGJ1dCBubyBkb2N1bWVudCBzbyB3ZSBzaG91bGQgY2hlY2sgYm90aFxyXG4gICAgc3RhdGljIGdldCBpc0Jyb3dzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCA9PT0gXCJvYmplY3RcIjtcclxuICAgIH1cclxuICAgIC8vIFdlYldvcmtlcnMgZG9uJ3QgaGF2ZSBhIHdpbmRvdyBvYmplY3Qgc28gdGhlIGlzQnJvd3NlciBjaGVjayB3b3VsZCBmYWlsXHJcbiAgICBzdGF0aWMgZ2V0IGlzV2ViV29ya2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBcImltcG9ydFNjcmlwdHNcIiBpbiBzZWxmO1xyXG4gICAgfVxyXG4gICAgLy8gcmVhY3QtbmF0aXZlIGhhcyBhIHdpbmRvdyBidXQgbm8gZG9jdW1lbnRcclxuICAgIHN0YXRpYyBnZXQgaXNSZWFjdE5hdGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgfVxyXG4gICAgLy8gTm9kZSBhcHBzIHNob3VsZG4ndCBoYXZlIGEgd2luZG93IG9iamVjdCwgYnV0IFdlYldvcmtlcnMgZG9uJ3QgZWl0aGVyXHJcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGZvciBib3RoIFdlYldvcmtlciBhbmQgd2luZG93XHJcbiAgICBzdGF0aWMgZ2V0IGlzTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNCcm93c2VyICYmICF0aGlzLmlzV2ViV29ya2VyICYmICF0aGlzLmlzUmVhY3ROYXRpdmU7XHJcbiAgICB9XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhRGV0YWlsKGRhdGEsIGluY2x1ZGVDb250ZW50KSB7XHJcbiAgICBsZXQgZGV0YWlsID0gXCJcIjtcclxuICAgIGlmIChpc0FycmF5QnVmZmVyKGRhdGEpKSB7XHJcbiAgICAgICAgZGV0YWlsID0gYEJpbmFyeSBkYXRhIG9mIGxlbmd0aCAke2RhdGEuYnl0ZUxlbmd0aH1gO1xyXG4gICAgICAgIGlmIChpbmNsdWRlQ29udGVudCkge1xyXG4gICAgICAgICAgICBkZXRhaWwgKz0gYC4gQ29udGVudDogJyR7Zm9ybWF0QXJyYXlCdWZmZXIoZGF0YSl9J2A7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBkZXRhaWwgPSBgU3RyaW5nIGRhdGEgb2YgbGVuZ3RoICR7ZGF0YS5sZW5ndGh9YDtcclxuICAgICAgICBpZiAoaW5jbHVkZUNvbnRlbnQpIHtcclxuICAgICAgICAgICAgZGV0YWlsICs9IGAuIENvbnRlbnQ6ICcke2RhdGF9J2A7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRldGFpbDtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFycmF5QnVmZmVyKGRhdGEpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgIC8vIFVpbnQ4QXJyYXkubWFwIG9ubHkgc3VwcG9ydHMgcmV0dXJuaW5nIGFub3RoZXIgVWludDhBcnJheT9cclxuICAgIGxldCBzdHIgPSBcIlwiO1xyXG4gICAgdmlldy5mb3JFYWNoKChudW0pID0+IHtcclxuICAgICAgICBjb25zdCBwYWQgPSBudW0gPCAxNiA/IFwiMFwiIDogXCJcIjtcclxuICAgICAgICBzdHIgKz0gYDB4JHtwYWR9JHtudW0udG9TdHJpbmcoMTYpfSBgO1xyXG4gICAgfSk7XHJcbiAgICAvLyBUcmltIG9mIHRyYWlsaW5nIHNwYWNlLlxyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpO1xyXG59XHJcbi8vIEFsc28gaW4gc2lnbmFsci1wcm90b2NvbC1tc2dwYWNrL1V0aWxzLnRzXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgJiYgdHlwZW9mIEFycmF5QnVmZmVyICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgKHZhbCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8XHJcbiAgICAgICAgICAgIC8vIFNvbWV0aW1lcyB3ZSBnZXQgYW4gQXJyYXlCdWZmZXIgdGhhdCBkb2Vzbid0IHNhdGlzZnkgaW5zdGFuY2VvZlxyXG4gICAgICAgICAgICAodmFsLmNvbnN0cnVjdG9yICYmIHZhbC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5QnVmZmVyXCIpKTtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGxvZ2dlciwgdHJhbnNwb3J0TmFtZSwgaHR0cENsaWVudCwgdXJsLCBhY2Nlc3NUb2tlbkZhY3RvcnksIGNvbnRlbnQsIG9wdGlvbnMpIHtcclxuICAgIGxldCBoZWFkZXJzID0ge307XHJcbiAgICBpZiAoYWNjZXNzVG9rZW5GYWN0b3J5KSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBhY2Nlc3NUb2tlbkZhY3RvcnkoKTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgIFtcIkF1dGhvcml6YXRpb25cIl06IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBnZXRVc2VyQWdlbnRIZWFkZXIoKTtcclxuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoJHt0cmFuc3BvcnROYW1lfSB0cmFuc3BvcnQpIHNlbmRpbmcgZGF0YS4gJHtnZXREYXRhRGV0YWlsKGNvbnRlbnQsIG9wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQpfS5gKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IGlzQXJyYXlCdWZmZXIoY29udGVudCkgPyBcImFycmF5YnVmZmVyXCIgOiBcInRleHRcIjtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cENsaWVudC5wb3N0KHVybCwge1xyXG4gICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgaGVhZGVyczogeyAuLi5oZWFkZXJzLCAuLi5vcHRpb25zLmhlYWRlcnMgfSxcclxuICAgICAgICByZXNwb25zZVR5cGUsXHJcbiAgICAgICAgdGltZW91dDogb3B0aW9ucy50aW1lb3V0LFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICB9KTtcclxuICAgIGxvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoJHt0cmFuc3BvcnROYW1lfSB0cmFuc3BvcnQpIHJlcXVlc3QgY29tcGxldGUuIFJlc3BvbnNlIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXNDb2RlfS5gKTtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihsb2dnZXIpIHtcclxuICAgIGlmIChsb2dnZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29uc29sZUxvZ2dlcihMb2dMZXZlbC5JbmZvcm1hdGlvbik7XHJcbiAgICB9XHJcbiAgICBpZiAobG9nZ2VyID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bGxMb2dnZXIuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBpZiAobG9nZ2VyLmxvZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQ29uc29sZUxvZ2dlcihsb2dnZXIpO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgU3ViamVjdFN1YnNjcmlwdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdWJqZWN0LCBvYnNlcnZlcikge1xyXG4gICAgICAgIHRoaXMuX3N1YmplY3QgPSBzdWJqZWN0O1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gb2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc3ViamVjdC5vYnNlcnZlcnMuaW5kZXhPZih0aGlzLl9vYnNlcnZlcik7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ViamVjdC5vYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YmplY3Qub2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9zdWJqZWN0LmNhbmNlbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YmplY3QuY2FuY2VsQ2FsbGJhY2soKS5jYXRjaCgoXykgPT4geyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTG9nZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1pbmltdW1Mb2dMZXZlbCkge1xyXG4gICAgICAgIHRoaXMuX21pbkxldmVsID0gbWluaW11bUxvZ0xldmVsO1xyXG4gICAgICAgIHRoaXMub3V0ID0gY29uc29sZTtcclxuICAgIH1cclxuICAgIGxvZyhsb2dMZXZlbCwgbWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChsb2dMZXZlbCA+PSB0aGlzLl9taW5MZXZlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgWyR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfV0gJHtMb2dMZXZlbFtsb2dMZXZlbF19OiAke21lc3NhZ2V9YDtcclxuICAgICAgICAgICAgc3dpdGNoIChsb2dMZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5Dcml0aWNhbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuRXJyb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXQuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuV2FybmluZzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dC53YXJuKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExvZ0xldmVsLkluZm9ybWF0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0LmluZm8obXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyBvbmx5IGdvZXMgdG8gYXR0YWNoZWQgZGVidWdnZXJzIGluIE5vZGUsIHNvIHdlIHVzZSBjb25zb2xlLmxvZyBmb3IgVHJhY2UgYW5kIERlYnVnXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXQubG9nKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQWdlbnRIZWFkZXIoKSB7XHJcbiAgICBsZXQgdXNlckFnZW50SGVhZGVyTmFtZSA9IFwiWC1TaWduYWxSLVVzZXItQWdlbnRcIjtcclxuICAgIGlmIChQbGF0Zm9ybS5pc05vZGUpIHtcclxuICAgICAgICB1c2VyQWdlbnRIZWFkZXJOYW1lID0gXCJVc2VyLUFnZW50XCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3VzZXJBZ2VudEhlYWRlck5hbWUsIGNvbnN0cnVjdFVzZXJBZ2VudChWRVJTSU9OLCBnZXRPc05hbWUoKSwgZ2V0UnVudGltZSgpLCBnZXRSdW50aW1lVmVyc2lvbigpKV07XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RVc2VyQWdlbnQodmVyc2lvbiwgb3MsIHJ1bnRpbWUsIHJ1bnRpbWVWZXJzaW9uKSB7XHJcbiAgICAvLyBNaWNyb3NvZnQgU2lnbmFsUi9bVmVyc2lvbl0gKFtEZXRhaWxlZCBWZXJzaW9uXTsgW09wZXJhdGluZyBTeXN0ZW1dOyBbUnVudGltZV07IFtSdW50aW1lIFZlcnNpb25dKVxyXG4gICAgbGV0IHVzZXJBZ2VudCA9IFwiTWljcm9zb2Z0IFNpZ25hbFIvXCI7XHJcbiAgICBjb25zdCBtYWpvckFuZE1pbm9yID0gdmVyc2lvbi5zcGxpdChcIi5cIik7XHJcbiAgICB1c2VyQWdlbnQgKz0gYCR7bWFqb3JBbmRNaW5vclswXX0uJHttYWpvckFuZE1pbm9yWzFdfWA7XHJcbiAgICB1c2VyQWdlbnQgKz0gYCAoJHt2ZXJzaW9ufTsgYDtcclxuICAgIGlmIChvcyAmJiBvcyAhPT0gXCJcIikge1xyXG4gICAgICAgIHVzZXJBZ2VudCArPSBgJHtvc307IGA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB1c2VyQWdlbnQgKz0gXCJVbmtub3duIE9TOyBcIjtcclxuICAgIH1cclxuICAgIHVzZXJBZ2VudCArPSBgJHtydW50aW1lfWA7XHJcbiAgICBpZiAocnVudGltZVZlcnNpb24pIHtcclxuICAgICAgICB1c2VyQWdlbnQgKz0gYDsgJHtydW50aW1lVmVyc2lvbn1gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdXNlckFnZW50ICs9IFwiOyBVbmtub3duIFJ1bnRpbWUgVmVyc2lvblwiO1xyXG4gICAgfVxyXG4gICAgdXNlckFnZW50ICs9IFwiKVwiO1xyXG4gICAgcmV0dXJuIHVzZXJBZ2VudDtcclxufVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc3BhY2VkLWNvbW1lbnRcclxuLyojX19QVVJFX18qLyBmdW5jdGlvbiBnZXRPc05hbWUoKSB7XHJcbiAgICBpZiAoUGxhdGZvcm0uaXNOb2RlKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcm9jZXNzLnBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aW4zMlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2luZG93cyBOVFwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGFyd2luXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJtYWNPU1wiO1xyXG4gICAgICAgICAgICBjYXNlIFwibGludXhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbnV4XCI7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5wbGF0Zm9ybTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc3BhY2VkLWNvbW1lbnRcclxuLyojX19QVVJFX18qLyBmdW5jdGlvbiBnZXRSdW50aW1lVmVyc2lvbigpIHtcclxuICAgIGlmIChQbGF0Zm9ybS5pc05vZGUpIHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzcy52ZXJzaW9ucy5ub2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBnZXRSdW50aW1lKCkge1xyXG4gICAgaWYgKFBsYXRmb3JtLmlzTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBcIk5vZGVKU1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiQnJvd3NlclwiO1xyXG4gICAgfVxyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JTdHJpbmcoZSkge1xyXG4gICAgaWYgKGUuc3RhY2spIHtcclxuICAgICAgICByZXR1cm4gZS5zdGFjaztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUubWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBlLm1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYCR7ZX1gO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsVGhpcygpIHtcclxuICAgIC8vIGdsb2JhbFRoaXMgaXMgc2VtaS1uZXcgYW5kIG5vdCBhdmFpbGFibGUgaW4gTm9kZSB1bnRpbCB2MTJcclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWxUaGlzO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmluZCBnbG9iYWxcIik7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VXRpbHMuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBIZWFkZXJOYW1lcyB9IGZyb20gXCIuL0hlYWRlck5hbWVzXCI7XHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBnZXREYXRhRGV0YWlsLCBnZXRVc2VyQWdlbnRIZWFkZXIsIFBsYXRmb3JtIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRUcmFuc3BvcnQge1xyXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudCwgYWNjZXNzVG9rZW5GYWN0b3J5LCBsb2dnZXIsIGxvZ01lc3NhZ2VDb250ZW50LCB3ZWJTb2NrZXRDb25zdHJ1Y3RvciwgaGVhZGVycykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkgPSBhY2Nlc3NUb2tlbkZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy5fbG9nTWVzc2FnZUNvbnRlbnQgPSBsb2dNZXNzYWdlQ29udGVudDtcclxuICAgICAgICB0aGlzLl93ZWJTb2NrZXRDb25zdHJ1Y3RvciA9IHdlYlNvY2tldENvbnN0cnVjdG9yO1xyXG4gICAgICAgIHRoaXMuX2h0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xyXG4gICAgICAgIHRoaXMub25yZWNlaXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY29ubmVjdCh1cmwsIHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodXJsLCBcInVybFwiKTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh0cmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICBBcmcuaXNJbih0cmFuc2ZlckZvcm1hdCwgVHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoV2ViU29ja2V0cyB0cmFuc3BvcnQpIENvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkoKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKFwiP1wiKSA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIGBhY2Nlc3NfdG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQodG9rZW4pfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL15odHRwLywgXCJ3c1wiKTtcclxuICAgICAgICAgICAgbGV0IHdlYlNvY2tldDtcclxuICAgICAgICAgICAgY29uc3QgY29va2llcyA9IHRoaXMuX2h0dHBDbGllbnQuZ2V0Q29va2llU3RyaW5nKHVybCk7XHJcbiAgICAgICAgICAgIGxldCBvcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKFBsYXRmb3JtLmlzTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGdldFVzZXJBZ2VudEhlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvb2tpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW0hlYWRlck5hbWVzLkNvb2tpZV0gPSBgJHtjb29raWVzfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHBhc3MgaGVhZGVycyB3aGVuIGluIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xyXG4gICAgICAgICAgICAgICAgd2ViU29ja2V0ID0gbmV3IHRoaXMuX3dlYlNvY2tldENvbnN0cnVjdG9yKHVybCwgdW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAuLi5oZWFkZXJzLCAuLi50aGlzLl9oZWFkZXJzIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXdlYlNvY2tldCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hyb21lIGlzIG5vdCBoYXBweSB3aXRoIHBhc3NpbmcgJ3VuZGVmaW5lZCcgYXMgcHJvdG9jb2xcclxuICAgICAgICAgICAgICAgIHdlYlNvY2tldCA9IG5ldyB0aGlzLl93ZWJTb2NrZXRDb25zdHJ1Y3Rvcih1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdCA9PT0gVHJhbnNmZXJGb3JtYXQuQmluYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB3ZWJTb2NrZXQuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3ZWJTb2NrZXQub25vcGVuID0gKF9ldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYFdlYlNvY2tldCBjb25uZWN0ZWQgdG8gJHt1cmx9LmApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0ID0gd2ViU29ja2V0O1xyXG4gICAgICAgICAgICAgICAgb3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2ViU29ja2V0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvckV2ZW50IGlzIGEgYnJvd3NlciBvbmx5IHR5cGUgd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgdHlwZSBleGlzdHMgYmVmb3JlIHVzaW5nIGl0XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEVycm9yRXZlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZXZlbnQgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBldmVudC5lcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gXCJUaGVyZSB3YXMgYW4gZXJyb3Igd2l0aCB0aGUgdHJhbnNwb3J0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgKFdlYlNvY2tldHMgdHJhbnNwb3J0KSAke2Vycm9yfS5gKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2ViU29ja2V0Lm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKFdlYlNvY2tldHMgdHJhbnNwb3J0KSBkYXRhIHJlY2VpdmVkLiAke2dldERhdGFEZXRhaWwobWVzc2FnZS5kYXRhLCB0aGlzLl9sb2dNZXNzYWdlQ29udGVudCl9LmApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbnJlY2VpdmUobWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2ViU29ja2V0Lm9uY2xvc2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIERvbid0IGNhbGwgY2xvc2UgaGFuZGxlciBpZiBjb25uZWN0aW9uIHdhcyBuZXZlciBlc3RhYmxpc2hlZFxyXG4gICAgICAgICAgICAgICAgLy8gV2UnbGwgcmVqZWN0IHRoZSBjb25uZWN0IGNhbGwgaW5zdGVhZFxyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXJyb3JFdmVudCBpcyBhIGJyb3dzZXIgb25seSB0eXBlIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHR5cGUgZXhpc3RzIGJlZm9yZSB1c2luZyBpdFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgRXJyb3JFdmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldmVudCBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBldmVudC5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gXCJXZWJTb2NrZXQgZmFpbGVkIHRvIGNvbm5lY3QuIFRoZSBjb25uZWN0aW9uIGNvdWxkIG5vdCBiZSBmb3VuZCBvbiB0aGUgc2VydmVyLFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIGVpdGhlciB0aGUgZW5kcG9pbnQgbWF5IG5vdCBiZSBhIFNpZ25hbFIgZW5kcG9pbnQsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgdGhlIGNvbm5lY3Rpb24gSUQgaXMgbm90IHByZXNlbnQgb24gdGhlIHNlcnZlciwgb3IgdGhlcmUgaXMgYSBwcm94eSBibG9ja2luZyBXZWJTb2NrZXRzLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIElmIHlvdSBoYXZlIG11bHRpcGxlIHNlcnZlcnMgY2hlY2sgdGhhdCBzdGlja3kgc2Vzc2lvbnMgYXJlIGVuYWJsZWQuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLl93ZWJTb2NrZXQgJiYgdGhpcy5fd2ViU29ja2V0LnJlYWR5U3RhdGUgPT09IHRoaXMuX3dlYlNvY2tldENvbnN0cnVjdG9yLk9QRU4pIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChXZWJTb2NrZXRzIHRyYW5zcG9ydCkgc2VuZGluZyBkYXRhLiAke2dldERhdGFEZXRhaWwoZGF0YSwgdGhpcy5fbG9nTWVzc2FnZUNvbnRlbnQpfS5gKTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0LnNlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiV2ViU29ja2V0IGlzIG5vdCBpbiB0aGUgT1BFTiBzdGF0ZVwiKTtcclxuICAgIH1cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dlYlNvY2tldCkge1xyXG4gICAgICAgICAgICAvLyBNYW51YWxseSBpbnZva2Ugb25jbG9zZSBjYWxsYmFjayBpbmxpbmUgc28gd2Uga25vdyB0aGUgSHR0cENvbm5lY3Rpb24gd2FzIGNsb3NlZCBwcm9wZXJseSBiZWZvcmUgcmV0dXJuaW5nXHJcbiAgICAgICAgICAgIC8vIFRoaXMgYWxzbyBzb2x2ZXMgYW4gaXNzdWUgd2hlcmUgd2Vic29ja2V0Lm9uY2xvc2UgY291bGQgdGFrZSAxOCsgc2Vjb25kcyB0byB0cmlnZ2VyIGR1cmluZyBuZXR3b3JrIGRpc2Nvbm5lY3RzXHJcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIF9jbG9zZShldmVudCkge1xyXG4gICAgICAgIC8vIHdlYlNvY2tldCB3aWxsIGJlIG51bGwgaWYgdGhlIHRyYW5zcG9ydCBkaWQgbm90IHN0YXJ0IHN1Y2Nlc3NmdWxseVxyXG4gICAgICAgIGlmICh0aGlzLl93ZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgd2Vic29ja2V0IGhhbmRsZXJzIGJlY2F1c2Ugd2UgYXJlIGNvbnNpZGVyaW5nIHRoZSBzb2NrZXQgY2xvc2VkIG5vd1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQub25jbG9zZSA9ICgpID0+IHsgfTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0Lm9ubWVzc2FnZSA9ICgpID0+IHsgfTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0Lm9uZXJyb3IgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKFdlYlNvY2tldHMgdHJhbnNwb3J0KSBzb2NrZXQgY2xvc2VkLlwiKTtcclxuICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0Nsb3NlRXZlbnQoZXZlbnQpICYmIChldmVudC53YXNDbGVhbiA9PT0gZmFsc2UgfHwgZXZlbnQuY29kZSAhPT0gMTAwMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jbG9zZShuZXcgRXJyb3IoYFdlYlNvY2tldCBjbG9zZWQgd2l0aCBzdGF0dXMgY29kZTogJHtldmVudC5jb2RlfSAoJHtldmVudC5yZWFzb24gfHwgXCJubyByZWFzb24gZ2l2ZW5cIn0pLmApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaXNDbG9zZUV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50ICYmIHR5cGVvZiBldmVudC53YXNDbGVhbiA9PT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGV2ZW50LmNvZGUgPT09IFwibnVtYmVyXCI7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2ViU29ja2V0VHJhbnNwb3J0LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgQWJvcnRFcnJvciwgSHR0cEVycm9yLCBUaW1lb3V0RXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIi4vSHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuZXhwb3J0IGNsYXNzIFhockh0dHBDbGllbnQgZXh0ZW5kcyBIdHRwQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBzZW5kKHJlcXVlc3QpIHtcclxuICAgICAgICAvLyBDaGVjayB0aGF0IGFib3J0IHdhcyBub3Qgc2lnbmFsZWQgYmVmb3JlIGNhbGxpbmcgc2VuZFxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsICYmIHJlcXVlc3QuYWJvcnRTaWduYWwuYWJvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFib3J0RXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC5tZXRob2QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG1ldGhvZCBkZWZpbmVkLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVxdWVzdC51cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBkZWZpbmVkLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiByZXF1ZXN0LndpdGhDcmVkZW50aWFscztcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgIC8vIEV4cGxpY2l0bHkgc2V0dGluZyB0aGUgQ29udGVudC1UeXBlIGhlYWRlciBmb3IgUmVhY3QgTmF0aXZlIG9uIEFuZHJvaWQgcGxhdGZvcm0uXHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcmVxdWVzdC5oZWFkZXJzO1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaGVhZGVycylcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCBoZWFkZXJzW2hlYWRlcl0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVzcG9uc2VUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gcmVxdWVzdC5yZXNwb25zZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuYWJvcnRTaWduYWwub25hYm9ydCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB4aHIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEFib3J0RXJyb3IoKSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIHhoci50aW1lb3V0ID0gcmVxdWVzdC50aW1lb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuYWJvcnRTaWduYWwub25hYm9ydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEh0dHBSZXNwb25zZSh4aHIuc3RhdHVzLCB4aHIuc3RhdHVzVGV4dCwgeGhyLnJlc3BvbnNlIHx8IHhoci5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgSHR0cEVycm9yKHhoci5yZXNwb25zZSB8fCB4aHIucmVzcG9uc2VUZXh0IHx8IHhoci5zdGF0dXNUZXh0LCB4aHIuc3RhdHVzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBgRXJyb3IgZnJvbSBIVFRQIHJlcXVlc3QuICR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9LmApO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBIdHRwRXJyb3IoeGhyLnN0YXR1c1RleHQsIHhoci5zdGF0dXMpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgYFRpbWVvdXQgZnJvbSBIVFRQIHJlcXVlc3QuYCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IFRpbWVvdXRFcnJvcigpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLnNlbmQocmVxdWVzdC5jb250ZW50IHx8IFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVhockh0dHBDbGllbnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5leHBvcnQgeyBBYm9ydEVycm9yLCBIdHRwRXJyb3IsIFRpbWVvdXRFcnJvciB9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5leHBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiLi9IdHRwQ2xpZW50XCI7XHJcbmV4cG9ydCB7IERlZmF1bHRIdHRwQ2xpZW50IH0gZnJvbSBcIi4vRGVmYXVsdEh0dHBDbGllbnRcIjtcclxuZXhwb3J0IHsgSHViQ29ubmVjdGlvbiwgSHViQ29ubmVjdGlvblN0YXRlIH0gZnJvbSBcIi4vSHViQ29ubmVjdGlvblwiO1xyXG5leHBvcnQgeyBIdWJDb25uZWN0aW9uQnVpbGRlciB9IGZyb20gXCIuL0h1YkNvbm5lY3Rpb25CdWlsZGVyXCI7XHJcbmV4cG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4vSUh1YlByb3RvY29sXCI7XHJcbmV4cG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5leHBvcnQgeyBIdHRwVHJhbnNwb3J0VHlwZSwgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmV4cG9ydCB7IE51bGxMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJzXCI7XHJcbmV4cG9ydCB7IEpzb25IdWJQcm90b2NvbCB9IGZyb20gXCIuL0pzb25IdWJQcm90b2NvbFwiO1xyXG5leHBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcIi4vU3ViamVjdFwiO1xyXG5leHBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKipcbiAqIFtqcy1zaGEyNTZde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9lbW4xNzgvanMtc2hhMjU2fVxuICpcbiAqIEB2ZXJzaW9uIDAuOS4wXG4gKiBAYXV0aG9yIENoZW4sIFlpLUN5dWFuIFtlbW4xNzhAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCBDaGVuLCBZaS1DeXVhbiAyMDE0LTIwMTdcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4vKmpzbGludCBiaXR3aXNlOiB0cnVlICovXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIEVSUk9SID0gJ2lucHV0IGlzIGludmFsaWQgdHlwZSc7XG4gIHZhciBXSU5ET1cgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JztcbiAgdmFyIHJvb3QgPSBXSU5ET1cgPyB3aW5kb3cgOiB7fTtcbiAgaWYgKHJvb3QuSlNfU0hBMjU2X05PX1dJTkRPVykge1xuICAgIFdJTkRPVyA9IGZhbHNlO1xuICB9XG4gIHZhciBXRUJfV09SS0VSID0gIVdJTkRPVyAmJiB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCc7XG4gIHZhciBOT0RFX0pTID0gIXJvb3QuSlNfU0hBMjU2X05PX05PREVfSlMgJiYgdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3MudmVyc2lvbnMgJiYgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlO1xuICBpZiAoTk9ERV9KUykge1xuICAgIHJvb3QgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoV0VCX1dPUktFUikge1xuICAgIHJvb3QgPSBzZWxmO1xuICB9XG4gIHZhciBDT01NT05fSlMgPSAhcm9vdC5KU19TSEEyNTZfTk9fQ09NTU9OX0pTICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzO1xuICB2YXIgQU1EID0gdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kO1xuICB2YXIgQVJSQVlfQlVGRkVSID0gIXJvb3QuSlNfU0hBMjU2X05PX0FSUkFZX0JVRkZFUiAmJiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnO1xuICB2YXIgSEVYX0NIQVJTID0gJzAxMjM0NTY3ODlhYmNkZWYnLnNwbGl0KCcnKTtcbiAgdmFyIEVYVFJBID0gWy0yMTQ3NDgzNjQ4LCA4Mzg4NjA4LCAzMjc2OCwgMTI4XTtcbiAgdmFyIFNISUZUID0gWzI0LCAxNiwgOCwgMF07XG4gIHZhciBLID0gW1xuICAgIDB4NDI4YTJmOTgsIDB4NzEzNzQ0OTEsIDB4YjVjMGZiY2YsIDB4ZTliNWRiYTUsIDB4Mzk1NmMyNWIsIDB4NTlmMTExZjEsIDB4OTIzZjgyYTQsIDB4YWIxYzVlZDUsXG4gICAgMHhkODA3YWE5OCwgMHgxMjgzNWIwMSwgMHgyNDMxODViZSwgMHg1NTBjN2RjMywgMHg3MmJlNWQ3NCwgMHg4MGRlYjFmZSwgMHg5YmRjMDZhNywgMHhjMTliZjE3NCxcbiAgICAweGU0OWI2OWMxLCAweGVmYmU0Nzg2LCAweDBmYzE5ZGM2LCAweDI0MGNhMWNjLCAweDJkZTkyYzZmLCAweDRhNzQ4NGFhLCAweDVjYjBhOWRjLCAweDc2Zjk4OGRhLFxuICAgIDB4OTgzZTUxNTIsIDB4YTgzMWM2NmQsIDB4YjAwMzI3YzgsIDB4YmY1OTdmYzcsIDB4YzZlMDBiZjMsIDB4ZDVhNzkxNDcsIDB4MDZjYTYzNTEsIDB4MTQyOTI5NjcsXG4gICAgMHgyN2I3MGE4NSwgMHgyZTFiMjEzOCwgMHg0ZDJjNmRmYywgMHg1MzM4MGQxMywgMHg2NTBhNzM1NCwgMHg3NjZhMGFiYiwgMHg4MWMyYzkyZSwgMHg5MjcyMmM4NSxcbiAgICAweGEyYmZlOGExLCAweGE4MWE2NjRiLCAweGMyNGI4YjcwLCAweGM3NmM1MWEzLCAweGQxOTJlODE5LCAweGQ2OTkwNjI0LCAweGY0MGUzNTg1LCAweDEwNmFhMDcwLFxuICAgIDB4MTlhNGMxMTYsIDB4MWUzNzZjMDgsIDB4Mjc0ODc3NGMsIDB4MzRiMGJjYjUsIDB4MzkxYzBjYjMsIDB4NGVkOGFhNGEsIDB4NWI5Y2NhNGYsIDB4NjgyZTZmZjMsXG4gICAgMHg3NDhmODJlZSwgMHg3OGE1NjM2ZiwgMHg4NGM4NzgxNCwgMHg4Y2M3MDIwOCwgMHg5MGJlZmZmYSwgMHhhNDUwNmNlYiwgMHhiZWY5YTNmNywgMHhjNjcxNzhmMlxuICBdO1xuICB2YXIgT1VUUFVUX1RZUEVTID0gWydoZXgnLCAnYXJyYXknLCAnZGlnZXN0JywgJ2FycmF5QnVmZmVyJ107XG5cbiAgdmFyIGJsb2NrcyA9IFtdO1xuXG4gIGlmIChyb290LkpTX1NIQTI1Nl9OT19OT0RFX0pTIHx8ICFBcnJheS5pc0FycmF5KSB7XG4gICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xuICB9XG5cbiAgaWYgKEFSUkFZX0JVRkZFUiAmJiAocm9vdC5KU19TSEEyNTZfTk9fQVJSQVlfQlVGRkVSX0lTX1ZJRVcgfHwgIUFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICBBcnJheUJ1ZmZlci5pc1ZpZXcgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmJ1ZmZlciAmJiBvYmouYnVmZmVyLmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcjtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNyZWF0ZU91dHB1dE1ldGhvZCA9IGZ1bmN0aW9uIChvdXRwdXRUeXBlLCBpczIyNCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG5ldyBTaGEyNTYoaXMyMjQsIHRydWUpLnVwZGF0ZShtZXNzYWdlKVtvdXRwdXRUeXBlXSgpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChpczIyNCkge1xuICAgIHZhciBtZXRob2QgPSBjcmVhdGVPdXRwdXRNZXRob2QoJ2hleCcsIGlzMjI0KTtcbiAgICBpZiAoTk9ERV9KUykge1xuICAgICAgbWV0aG9kID0gbm9kZVdyYXAobWV0aG9kLCBpczIyNCk7XG4gICAgfVxuICAgIG1ldGhvZC5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFNoYTI1NihpczIyNCk7XG4gICAgfTtcbiAgICBtZXRob2QudXBkYXRlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBtZXRob2QuY3JlYXRlKCkudXBkYXRlKG1lc3NhZ2UpO1xuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBPVVRQVVRfVFlQRVMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciB0eXBlID0gT1VUUFVUX1RZUEVTW2ldO1xuICAgICAgbWV0aG9kW3R5cGVdID0gY3JlYXRlT3V0cHV0TWV0aG9kKHR5cGUsIGlzMjI0KTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZDtcbiAgfTtcblxuICB2YXIgbm9kZVdyYXAgPSBmdW5jdGlvbiAobWV0aG9kLCBpczIyNCkge1xuICAgIHZhciBjcnlwdG8gPSBldmFsKFwicmVxdWlyZSgnY3J5cHRvJylcIik7XG4gICAgdmFyIEJ1ZmZlciA9IGV2YWwoXCJyZXF1aXJlKCdidWZmZXInKS5CdWZmZXJcIik7XG4gICAgdmFyIGFsZ29yaXRobSA9IGlzMjI0ID8gJ3NoYTIyNCcgOiAnc2hhMjU2JztcbiAgICB2YXIgbm9kZU1ldGhvZCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaChhbGdvcml0aG0pLnVwZGF0ZShtZXNzYWdlLCAndXRmOCcpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCB8fCBtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlKSB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcobWVzc2FnZSkgfHxcbiAgICAgICAgbWVzc2FnZS5jb25zdHJ1Y3RvciA9PT0gQnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaChhbGdvcml0aG0pLnVwZGF0ZShuZXcgQnVmZmVyKG1lc3NhZ2UpKS5kaWdlc3QoJ2hleCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBub2RlTWV0aG9kO1xuICB9O1xuXG4gIHZhciBjcmVhdGVIbWFjT3V0cHV0TWV0aG9kID0gZnVuY3Rpb24gKG91dHB1dFR5cGUsIGlzMjI0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBuZXcgSG1hY1NoYTI1NihrZXksIGlzMjI0LCB0cnVlKS51cGRhdGUobWVzc2FnZSlbb3V0cHV0VHlwZV0oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVIbWFjTWV0aG9kID0gZnVuY3Rpb24gKGlzMjI0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGNyZWF0ZUhtYWNPdXRwdXRNZXRob2QoJ2hleCcsIGlzMjI0KTtcbiAgICBtZXRob2QuY3JlYXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG5ldyBIbWFjU2hhMjU2KGtleSwgaXMyMjQpO1xuICAgIH07XG4gICAgbWV0aG9kLnVwZGF0ZSA9IGZ1bmN0aW9uIChrZXksIG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBtZXRob2QuY3JlYXRlKGtleSkudXBkYXRlKG1lc3NhZ2UpO1xuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBPVVRQVVRfVFlQRVMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciB0eXBlID0gT1VUUFVUX1RZUEVTW2ldO1xuICAgICAgbWV0aG9kW3R5cGVdID0gY3JlYXRlSG1hY091dHB1dE1ldGhvZCh0eXBlLCBpczIyNCk7XG4gICAgfVxuICAgIHJldHVybiBtZXRob2Q7XG4gIH07XG5cbiAgZnVuY3Rpb24gU2hhMjU2KGlzMjI0LCBzaGFyZWRNZW1vcnkpIHtcbiAgICBpZiAoc2hhcmVkTWVtb3J5KSB7XG4gICAgICBibG9ja3NbMF0gPSBibG9ja3NbMTZdID0gYmxvY2tzWzFdID0gYmxvY2tzWzJdID0gYmxvY2tzWzNdID1cbiAgICAgICAgYmxvY2tzWzRdID0gYmxvY2tzWzVdID0gYmxvY2tzWzZdID0gYmxvY2tzWzddID1cbiAgICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxuICAgICAgICBibG9ja3NbMTJdID0gYmxvY2tzWzEzXSA9IGJsb2Nrc1sxNF0gPSBibG9ja3NbMTVdID0gMDtcbiAgICAgIHRoaXMuYmxvY2tzID0gYmxvY2tzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsb2NrcyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB9XG5cbiAgICBpZiAoaXMyMjQpIHtcbiAgICAgIHRoaXMuaDAgPSAweGMxMDU5ZWQ4O1xuICAgICAgdGhpcy5oMSA9IDB4MzY3Y2Q1MDc7XG4gICAgICB0aGlzLmgyID0gMHgzMDcwZGQxNztcbiAgICAgIHRoaXMuaDMgPSAweGY3MGU1OTM5O1xuICAgICAgdGhpcy5oNCA9IDB4ZmZjMDBiMzE7XG4gICAgICB0aGlzLmg1ID0gMHg2ODU4MTUxMTtcbiAgICAgIHRoaXMuaDYgPSAweDY0Zjk4ZmE3O1xuICAgICAgdGhpcy5oNyA9IDB4YmVmYTRmYTQ7XG4gICAgfSBlbHNlIHsgLy8gMjU2XG4gICAgICB0aGlzLmgwID0gMHg2YTA5ZTY2NztcbiAgICAgIHRoaXMuaDEgPSAweGJiNjdhZTg1O1xuICAgICAgdGhpcy5oMiA9IDB4M2M2ZWYzNzI7XG4gICAgICB0aGlzLmgzID0gMHhhNTRmZjUzYTtcbiAgICAgIHRoaXMuaDQgPSAweDUxMGU1MjdmO1xuICAgICAgdGhpcy5oNSA9IDB4OWIwNTY4OGM7XG4gICAgICB0aGlzLmg2ID0gMHgxZjgzZDlhYjtcbiAgICAgIHRoaXMuaDcgPSAweDViZTBjZDE5O1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2sgPSB0aGlzLnN0YXJ0ID0gdGhpcy5ieXRlcyA9IHRoaXMuaEJ5dGVzID0gMDtcbiAgICB0aGlzLmZpbmFsaXplZCA9IHRoaXMuaGFzaGVkID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdCA9IHRydWU7XG4gICAgdGhpcy5pczIyNCA9IGlzMjI0O1xuICB9XG5cbiAgU2hhMjU2LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbm90U3RyaW5nLCB0eXBlID0gdHlwZW9mIG1lc3NhZ2U7XG4gICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IpO1xuICAgICAgICB9IGVsc2UgaWYgKEFSUkFZX0JVRkZFUiAmJiBtZXNzYWdlLmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBuZXcgVWludDhBcnJheShtZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlKSkge1xuICAgICAgICAgIGlmICghQVJSQVlfQlVGRkVSIHx8ICFBcnJheUJ1ZmZlci5pc1ZpZXcobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IpO1xuICAgICAgfVxuICAgICAgbm90U3RyaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGNvZGUsIGluZGV4ID0gMCwgaSwgbGVuZ3RoID0gbWVzc2FnZS5sZW5ndGgsIGJsb2NrcyA9IHRoaXMuYmxvY2tzO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5oYXNoZWQpIHtcbiAgICAgICAgdGhpcy5oYXNoZWQgPSBmYWxzZTtcbiAgICAgICAgYmxvY2tzWzBdID0gdGhpcy5ibG9jaztcbiAgICAgICAgYmxvY2tzWzE2XSA9IGJsb2Nrc1sxXSA9IGJsb2Nrc1syXSA9IGJsb2Nrc1szXSA9XG4gICAgICAgICAgYmxvY2tzWzRdID0gYmxvY2tzWzVdID0gYmxvY2tzWzZdID0gYmxvY2tzWzddID1cbiAgICAgICAgICBibG9ja3NbOF0gPSBibG9ja3NbOV0gPSBibG9ja3NbMTBdID0gYmxvY2tzWzExXSA9XG4gICAgICAgICAgYmxvY2tzWzEyXSA9IGJsb2Nrc1sxM10gPSBibG9ja3NbMTRdID0gYmxvY2tzWzE1XSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChub3RTdHJpbmcpIHtcbiAgICAgICAgZm9yIChpID0gdGhpcy5zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IDY0OyArK2luZGV4KSB7XG4gICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gbWVzc2FnZVtpbmRleF0gPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IHRoaXMuc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCA2NDsgKytpbmRleCkge1xuICAgICAgICAgIGNvZGUgPSBtZXNzYWdlLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAgIGlmIChjb2RlIDwgMHg4MCkge1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gY29kZSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweDgwMCkge1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4YzAgfCAoY29kZSA+PiA2KSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8IChjb2RlICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ZDgwMCB8fCBjb2RlID49IDB4ZTAwMCkge1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ZTAgfCAoY29kZSA+PiAxMikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoKGNvZGUgPj4gNikgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8IChjb2RlICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2RlID0gMHgxMDAwMCArICgoKGNvZGUgJiAweDNmZikgPDwgMTApIHwgKG1lc3NhZ2UuY2hhckNvZGVBdCgrK2luZGV4KSAmIDB4M2ZmKSk7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhmMCB8IChjb2RlID4+IDE4KSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8ICgoY29kZSA+PiAxMikgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKGNvZGUgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGFzdEJ5dGVJbmRleCA9IGk7XG4gICAgICB0aGlzLmJ5dGVzICs9IGkgLSB0aGlzLnN0YXJ0O1xuICAgICAgaWYgKGkgPj0gNjQpIHtcbiAgICAgICAgdGhpcy5ibG9jayA9IGJsb2Nrc1sxNl07XG4gICAgICAgIHRoaXMuc3RhcnQgPSBpIC0gNjQ7XG4gICAgICAgIHRoaXMuaGFzaCgpO1xuICAgICAgICB0aGlzLmhhc2hlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuYnl0ZXMgPiA0Mjk0OTY3Mjk1KSB7XG4gICAgICB0aGlzLmhCeXRlcyArPSB0aGlzLmJ5dGVzIC8gNDI5NDk2NzI5NiA8PCAwO1xuICAgICAgdGhpcy5ieXRlcyA9IHRoaXMuYnl0ZXMgJSA0Mjk0OTY3Mjk2O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBTaGEyNTYucHJvdG90eXBlLmZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XG4gICAgdmFyIGJsb2NrcyA9IHRoaXMuYmxvY2tzLCBpID0gdGhpcy5sYXN0Qnl0ZUluZGV4O1xuICAgIGJsb2Nrc1sxNl0gPSB0aGlzLmJsb2NrO1xuICAgIGJsb2Nrc1tpID4+IDJdIHw9IEVYVFJBW2kgJiAzXTtcbiAgICB0aGlzLmJsb2NrID0gYmxvY2tzWzE2XTtcbiAgICBpZiAoaSA+PSA1Nikge1xuICAgICAgaWYgKCF0aGlzLmhhc2hlZCkge1xuICAgICAgICB0aGlzLmhhc2goKTtcbiAgICAgIH1cbiAgICAgIGJsb2Nrc1swXSA9IHRoaXMuYmxvY2s7XG4gICAgICBibG9ja3NbMTZdID0gYmxvY2tzWzFdID0gYmxvY2tzWzJdID0gYmxvY2tzWzNdID1cbiAgICAgICAgYmxvY2tzWzRdID0gYmxvY2tzWzVdID0gYmxvY2tzWzZdID0gYmxvY2tzWzddID1cbiAgICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxuICAgICAgICBibG9ja3NbMTJdID0gYmxvY2tzWzEzXSA9IGJsb2Nrc1sxNF0gPSBibG9ja3NbMTVdID0gMDtcbiAgICB9XG4gICAgYmxvY2tzWzE0XSA9IHRoaXMuaEJ5dGVzIDw8IDMgfCB0aGlzLmJ5dGVzID4+PiAyOTtcbiAgICBibG9ja3NbMTVdID0gdGhpcy5ieXRlcyA8PCAzO1xuICAgIHRoaXMuaGFzaCgpO1xuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuaGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYSA9IHRoaXMuaDAsIGIgPSB0aGlzLmgxLCBjID0gdGhpcy5oMiwgZCA9IHRoaXMuaDMsIGUgPSB0aGlzLmg0LCBmID0gdGhpcy5oNSwgZyA9IHRoaXMuaDYsXG4gICAgICBoID0gdGhpcy5oNywgYmxvY2tzID0gdGhpcy5ibG9ja3MsIGosIHMwLCBzMSwgbWFqLCB0MSwgdDIsIGNoLCBhYiwgZGEsIGNkLCBiYztcblxuICAgIGZvciAoaiA9IDE2OyBqIDwgNjQ7ICsraikge1xuICAgICAgLy8gcmlnaHRyb3RhdGVcbiAgICAgIHQxID0gYmxvY2tzW2ogLSAxNV07XG4gICAgICBzMCA9ICgodDEgPj4+IDcpIHwgKHQxIDw8IDI1KSkgXiAoKHQxID4+PiAxOCkgfCAodDEgPDwgMTQpKSBeICh0MSA+Pj4gMyk7XG4gICAgICB0MSA9IGJsb2Nrc1tqIC0gMl07XG4gICAgICBzMSA9ICgodDEgPj4+IDE3KSB8ICh0MSA8PCAxNSkpIF4gKCh0MSA+Pj4gMTkpIHwgKHQxIDw8IDEzKSkgXiAodDEgPj4+IDEwKTtcbiAgICAgIGJsb2Nrc1tqXSA9IGJsb2Nrc1tqIC0gMTZdICsgczAgKyBibG9ja3NbaiAtIDddICsgczEgPDwgMDtcbiAgICB9XG5cbiAgICBiYyA9IGIgJiBjO1xuICAgIGZvciAoaiA9IDA7IGogPCA2NDsgaiArPSA0KSB7XG4gICAgICBpZiAodGhpcy5maXJzdCkge1xuICAgICAgICBpZiAodGhpcy5pczIyNCkge1xuICAgICAgICAgIGFiID0gMzAwMDMyO1xuICAgICAgICAgIHQxID0gYmxvY2tzWzBdIC0gMTQxMzI1NzgxOTtcbiAgICAgICAgICBoID0gdDEgLSAxNTAwNTQ1OTkgPDwgMDtcbiAgICAgICAgICBkID0gdDEgKyAyNDE3NzA3NyA8PCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFiID0gNzA0NzUxMTA5O1xuICAgICAgICAgIHQxID0gYmxvY2tzWzBdIC0gMjEwMjQ0MjQ4O1xuICAgICAgICAgIGggPSB0MSAtIDE1MjE0ODY1MzQgPDwgMDtcbiAgICAgICAgICBkID0gdDEgKyAxNDM2OTQ1NjUgPDwgMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcnN0ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMCA9ICgoYSA+Pj4gMikgfCAoYSA8PCAzMCkpIF4gKChhID4+PiAxMykgfCAoYSA8PCAxOSkpIF4gKChhID4+PiAyMikgfCAoYSA8PCAxMCkpO1xuICAgICAgICBzMSA9ICgoZSA+Pj4gNikgfCAoZSA8PCAyNikpIF4gKChlID4+PiAxMSkgfCAoZSA8PCAyMSkpIF4gKChlID4+PiAyNSkgfCAoZSA8PCA3KSk7XG4gICAgICAgIGFiID0gYSAmIGI7XG4gICAgICAgIG1haiA9IGFiIF4gKGEgJiBjKSBeIGJjO1xuICAgICAgICBjaCA9IChlICYgZikgXiAofmUgJiBnKTtcbiAgICAgICAgdDEgPSBoICsgczEgKyBjaCArIEtbal0gKyBibG9ja3Nbal07XG4gICAgICAgIHQyID0gczAgKyBtYWo7XG4gICAgICAgIGggPSBkICsgdDEgPDwgMDtcbiAgICAgICAgZCA9IHQxICsgdDIgPDwgMDtcbiAgICAgIH1cbiAgICAgIHMwID0gKChkID4+PiAyKSB8IChkIDw8IDMwKSkgXiAoKGQgPj4+IDEzKSB8IChkIDw8IDE5KSkgXiAoKGQgPj4+IDIyKSB8IChkIDw8IDEwKSk7XG4gICAgICBzMSA9ICgoaCA+Pj4gNikgfCAoaCA8PCAyNikpIF4gKChoID4+PiAxMSkgfCAoaCA8PCAyMSkpIF4gKChoID4+PiAyNSkgfCAoaCA8PCA3KSk7XG4gICAgICBkYSA9IGQgJiBhO1xuICAgICAgbWFqID0gZGEgXiAoZCAmIGIpIF4gYWI7XG4gICAgICBjaCA9IChoICYgZSkgXiAofmggJiBmKTtcbiAgICAgIHQxID0gZyArIHMxICsgY2ggKyBLW2ogKyAxXSArIGJsb2Nrc1tqICsgMV07XG4gICAgICB0MiA9IHMwICsgbWFqO1xuICAgICAgZyA9IGMgKyB0MSA8PCAwO1xuICAgICAgYyA9IHQxICsgdDIgPDwgMDtcbiAgICAgIHMwID0gKChjID4+PiAyKSB8IChjIDw8IDMwKSkgXiAoKGMgPj4+IDEzKSB8IChjIDw8IDE5KSkgXiAoKGMgPj4+IDIyKSB8IChjIDw8IDEwKSk7XG4gICAgICBzMSA9ICgoZyA+Pj4gNikgfCAoZyA8PCAyNikpIF4gKChnID4+PiAxMSkgfCAoZyA8PCAyMSkpIF4gKChnID4+PiAyNSkgfCAoZyA8PCA3KSk7XG4gICAgICBjZCA9IGMgJiBkO1xuICAgICAgbWFqID0gY2QgXiAoYyAmIGEpIF4gZGE7XG4gICAgICBjaCA9IChnICYgaCkgXiAofmcgJiBlKTtcbiAgICAgIHQxID0gZiArIHMxICsgY2ggKyBLW2ogKyAyXSArIGJsb2Nrc1tqICsgMl07XG4gICAgICB0MiA9IHMwICsgbWFqO1xuICAgICAgZiA9IGIgKyB0MSA8PCAwO1xuICAgICAgYiA9IHQxICsgdDIgPDwgMDtcbiAgICAgIHMwID0gKChiID4+PiAyKSB8IChiIDw8IDMwKSkgXiAoKGIgPj4+IDEzKSB8IChiIDw8IDE5KSkgXiAoKGIgPj4+IDIyKSB8IChiIDw8IDEwKSk7XG4gICAgICBzMSA9ICgoZiA+Pj4gNikgfCAoZiA8PCAyNikpIF4gKChmID4+PiAxMSkgfCAoZiA8PCAyMSkpIF4gKChmID4+PiAyNSkgfCAoZiA8PCA3KSk7XG4gICAgICBiYyA9IGIgJiBjO1xuICAgICAgbWFqID0gYmMgXiAoYiAmIGQpIF4gY2Q7XG4gICAgICBjaCA9IChmICYgZykgXiAofmYgJiBoKTtcbiAgICAgIHQxID0gZSArIHMxICsgY2ggKyBLW2ogKyAzXSArIGJsb2Nrc1tqICsgM107XG4gICAgICB0MiA9IHMwICsgbWFqO1xuICAgICAgZSA9IGEgKyB0MSA8PCAwO1xuICAgICAgYSA9IHQxICsgdDIgPDwgMDtcbiAgICB9XG5cbiAgICB0aGlzLmgwID0gdGhpcy5oMCArIGEgPDwgMDtcbiAgICB0aGlzLmgxID0gdGhpcy5oMSArIGIgPDwgMDtcbiAgICB0aGlzLmgyID0gdGhpcy5oMiArIGMgPDwgMDtcbiAgICB0aGlzLmgzID0gdGhpcy5oMyArIGQgPDwgMDtcbiAgICB0aGlzLmg0ID0gdGhpcy5oNCArIGUgPDwgMDtcbiAgICB0aGlzLmg1ID0gdGhpcy5oNSArIGYgPDwgMDtcbiAgICB0aGlzLmg2ID0gdGhpcy5oNiArIGcgPDwgMDtcbiAgICB0aGlzLmg3ID0gdGhpcy5oNyArIGggPDwgMDtcbiAgfTtcblxuICBTaGEyNTYucHJvdG90eXBlLmhleCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZpbmFsaXplKCk7XG5cbiAgICB2YXIgaDAgPSB0aGlzLmgwLCBoMSA9IHRoaXMuaDEsIGgyID0gdGhpcy5oMiwgaDMgPSB0aGlzLmgzLCBoNCA9IHRoaXMuaDQsIGg1ID0gdGhpcy5oNSxcbiAgICAgIGg2ID0gdGhpcy5oNiwgaDcgPSB0aGlzLmg3O1xuXG4gICAgdmFyIGhleCA9IEhFWF9DSEFSU1soaDAgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgwID4+IDI0KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDAgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgwID4+IDE2KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDAgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgwID4+IDgpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMCA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2gwICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMSA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDEgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMSA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDEgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMSA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDEgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDEgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgyID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMiA+PiAyNCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgyID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMiA+PiAxNikgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgyID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMiA+PiA4KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDIgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMiAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDMgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgzID4+IDI0KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDMgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgzID4+IDE2KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDMgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgzID4+IDgpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMyA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2gzICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNCA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDQgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNCA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDQgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNCA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDQgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg0ID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDQgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg1ID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNSA+PiAyNCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg1ID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNSA+PiAxNikgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg1ID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNSA+PiA4KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDUgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toNSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDYgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg2ID4+IDI0KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDYgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg2ID4+IDE2KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDYgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg2ID4+IDgpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNiA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2g2ICYgMHgwRl07XG4gICAgaWYgKCF0aGlzLmlzMjI0KSB7XG4gICAgICBoZXggKz0gSEVYX0NIQVJTWyhoNyA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDcgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgICBIRVhfQ0hBUlNbKGg3ID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNyA+PiAxNikgJiAweDBGXSArXG4gICAgICAgIEhFWF9DSEFSU1soaDcgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg3ID4+IDgpICYgMHgwRl0gK1xuICAgICAgICBIRVhfQ0hBUlNbKGg3ID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDcgJiAweDBGXTtcbiAgICB9XG4gICAgcmV0dXJuIGhleDtcbiAgfTtcblxuICBTaGEyNTYucHJvdG90eXBlLnRvU3RyaW5nID0gU2hhMjU2LnByb3RvdHlwZS5oZXg7XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5maW5hbGl6ZSgpO1xuXG4gICAgdmFyIGgwID0gdGhpcy5oMCwgaDEgPSB0aGlzLmgxLCBoMiA9IHRoaXMuaDIsIGgzID0gdGhpcy5oMywgaDQgPSB0aGlzLmg0LCBoNSA9IHRoaXMuaDUsXG4gICAgICBoNiA9IHRoaXMuaDYsIGg3ID0gdGhpcy5oNztcblxuICAgIHZhciBhcnIgPSBbXG4gICAgICAoaDAgPj4gMjQpICYgMHhGRiwgKGgwID4+IDE2KSAmIDB4RkYsIChoMCA+PiA4KSAmIDB4RkYsIGgwICYgMHhGRixcbiAgICAgIChoMSA+PiAyNCkgJiAweEZGLCAoaDEgPj4gMTYpICYgMHhGRiwgKGgxID4+IDgpICYgMHhGRiwgaDEgJiAweEZGLFxuICAgICAgKGgyID4+IDI0KSAmIDB4RkYsIChoMiA+PiAxNikgJiAweEZGLCAoaDIgPj4gOCkgJiAweEZGLCBoMiAmIDB4RkYsXG4gICAgICAoaDMgPj4gMjQpICYgMHhGRiwgKGgzID4+IDE2KSAmIDB4RkYsIChoMyA+PiA4KSAmIDB4RkYsIGgzICYgMHhGRixcbiAgICAgIChoNCA+PiAyNCkgJiAweEZGLCAoaDQgPj4gMTYpICYgMHhGRiwgKGg0ID4+IDgpICYgMHhGRiwgaDQgJiAweEZGLFxuICAgICAgKGg1ID4+IDI0KSAmIDB4RkYsIChoNSA+PiAxNikgJiAweEZGLCAoaDUgPj4gOCkgJiAweEZGLCBoNSAmIDB4RkYsXG4gICAgICAoaDYgPj4gMjQpICYgMHhGRiwgKGg2ID4+IDE2KSAmIDB4RkYsIChoNiA+PiA4KSAmIDB4RkYsIGg2ICYgMHhGRlxuICAgIF07XG4gICAgaWYgKCF0aGlzLmlzMjI0KSB7XG4gICAgICBhcnIucHVzaCgoaDcgPj4gMjQpICYgMHhGRiwgKGg3ID4+IDE2KSAmIDB4RkYsIChoNyA+PiA4KSAmIDB4RkYsIGg3ICYgMHhGRik7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5hcnJheSA9IFNoYTI1Ni5wcm90b3R5cGUuZGlnZXN0O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5maW5hbGl6ZSgpO1xuXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLmlzMjI0ID8gMjggOiAzMik7XG4gICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgZGF0YVZpZXcuc2V0VWludDMyKDAsIHRoaXMuaDApO1xuICAgIGRhdGFWaWV3LnNldFVpbnQzMig0LCB0aGlzLmgxKTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoOCwgdGhpcy5oMik7XG4gICAgZGF0YVZpZXcuc2V0VWludDMyKDEyLCB0aGlzLmgzKTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoMTYsIHRoaXMuaDQpO1xuICAgIGRhdGFWaWV3LnNldFVpbnQzMigyMCwgdGhpcy5oNSk7XG4gICAgZGF0YVZpZXcuc2V0VWludDMyKDI0LCB0aGlzLmg2KTtcbiAgICBpZiAoIXRoaXMuaXMyMjQpIHtcbiAgICAgIGRhdGFWaWV3LnNldFVpbnQzMigyOCwgdGhpcy5oNyk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG4gIH07XG5cbiAgZnVuY3Rpb24gSG1hY1NoYTI1NihrZXksIGlzMjI0LCBzaGFyZWRNZW1vcnkpIHtcbiAgICB2YXIgaSwgdHlwZSA9IHR5cGVvZiBrZXk7XG4gICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgYnl0ZXMgPSBbXSwgbGVuZ3RoID0ga2V5Lmxlbmd0aCwgaW5kZXggPSAwLCBjb2RlO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvZGUgPSBrZXkuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNvZGUgPCAweDgwKSB7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSBjb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweDgwMCkge1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4YzAgfCAoY29kZSA+PiA2KSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHg4MCB8IChjb2RlICYgMHgzZikpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweGQ4MDAgfHwgY29kZSA+PSAweGUwMDApIHtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweGUwIHwgKGNvZGUgPj4gMTIpKTtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweDgwIHwgKChjb2RlID4+IDYpICYgMHgzZikpO1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2RlID0gMHgxMDAwMCArICgoKGNvZGUgJiAweDNmZikgPDwgMTApIHwgKGtleS5jaGFyQ29kZUF0KCsraSkgJiAweDNmZikpO1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ZjAgfCAoY29kZSA+PiAxOCkpO1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ODAgfCAoKGNvZGUgPj4gMTIpICYgMHgzZikpO1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ODAgfCAoKGNvZGUgPj4gNikgJiAweDNmKSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHg4MCB8IChjb2RlICYgMHgzZikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBrZXkgPSBieXRlcztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChrZXkgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IpO1xuICAgICAgICB9IGVsc2UgaWYgKEFSUkFZX0JVRkZFUiAmJiBrZXkuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAga2V5ID0gbmV3IFVpbnQ4QXJyYXkoa2V5KTtcbiAgICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgaWYgKCFBUlJBWV9CVUZGRVIgfHwgIUFycmF5QnVmZmVyLmlzVmlldyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5Lmxlbmd0aCA+IDY0KSB7XG4gICAgICBrZXkgPSAobmV3IFNoYTI1NihpczIyNCwgdHJ1ZSkpLnVwZGF0ZShrZXkpLmFycmF5KCk7XG4gICAgfVxuXG4gICAgdmFyIG9LZXlQYWQgPSBbXSwgaUtleVBhZCA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCA2NDsgKytpKSB7XG4gICAgICB2YXIgYiA9IGtleVtpXSB8fCAwO1xuICAgICAgb0tleVBhZFtpXSA9IDB4NWMgXiBiO1xuICAgICAgaUtleVBhZFtpXSA9IDB4MzYgXiBiO1xuICAgIH1cblxuICAgIFNoYTI1Ni5jYWxsKHRoaXMsIGlzMjI0LCBzaGFyZWRNZW1vcnkpO1xuXG4gICAgdGhpcy51cGRhdGUoaUtleVBhZCk7XG4gICAgdGhpcy5vS2V5UGFkID0gb0tleVBhZDtcbiAgICB0aGlzLmlubmVyID0gdHJ1ZTtcbiAgICB0aGlzLnNoYXJlZE1lbW9yeSA9IHNoYXJlZE1lbW9yeTtcbiAgfVxuICBIbWFjU2hhMjU2LnByb3RvdHlwZSA9IG5ldyBTaGEyNTYoKTtcblxuICBIbWFjU2hhMjU2LnByb3RvdHlwZS5maW5hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBTaGEyNTYucHJvdG90eXBlLmZpbmFsaXplLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuaW5uZXIpIHtcbiAgICAgIHRoaXMuaW5uZXIgPSBmYWxzZTtcbiAgICAgIHZhciBpbm5lckhhc2ggPSB0aGlzLmFycmF5KCk7XG4gICAgICBTaGEyNTYuY2FsbCh0aGlzLCB0aGlzLmlzMjI0LCB0aGlzLnNoYXJlZE1lbW9yeSk7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLm9LZXlQYWQpO1xuICAgICAgdGhpcy51cGRhdGUoaW5uZXJIYXNoKTtcbiAgICAgIFNoYTI1Ni5wcm90b3R5cGUuZmluYWxpemUuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGV4cG9ydHMgPSBjcmVhdGVNZXRob2QoKTtcbiAgZXhwb3J0cy5zaGEyNTYgPSBleHBvcnRzO1xuICBleHBvcnRzLnNoYTIyNCA9IGNyZWF0ZU1ldGhvZCh0cnVlKTtcbiAgZXhwb3J0cy5zaGEyNTYuaG1hYyA9IGNyZWF0ZUhtYWNNZXRob2QoKTtcbiAgZXhwb3J0cy5zaGEyMjQuaG1hYyA9IGNyZWF0ZUhtYWNNZXRob2QodHJ1ZSk7XG5cbiAgaWYgKENPTU1PTl9KUykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICByb290LnNoYTI1NiA9IGV4cG9ydHMuc2hhMjU2O1xuICAgIHJvb3Quc2hhMjI0ID0gZXhwb3J0cy5zaGEyMjQ7XG4gICAgaWYgKEFNRCkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi9zcmMvdXRpbHNcIik7XHJcbi8vIGltcG9ydCB7IFZlaGljbGVNb3ZlbWVudCB9IGZyb20gJy4vc3JjL21vdmVtZW50LmpzJztcclxudmFyIHNlcnZlcl9wdXNoXzEgPSByZXF1aXJlKFwiLi9zcmMvc2VydmVyLXB1c2hcIik7XHJcbnZhciBBY3RpdmF0ZVNjZW5lXzEgPSByZXF1aXJlKFwiLi9zcmMvQWN0aXZhdGVTY2VuZVwiKTtcclxuLy8gaW1wb3J0IHsgT2dTZXR0aW5ncyB9IGZyb20gJy4vc3JjL09nU2V0dGluZ3MnO1xyXG52YXIgT3BlblNjZW5lTm90ZXNfMSA9IHJlcXVpcmUoXCIuL3NyYy9PcGVuU2NlbmVOb3Rlc1wiKTtcclxudmFyIG1vZHVsZXMgPSBbXHJcbiAgICAvLyBleHRlbnNpb25zLnNldHRpbmdzLFxyXG4gICAgbmV3IEFjdGl2YXRlU2NlbmVfMS5BY3RpdmF0ZVNjZW5lKCksXHJcbiAgICBuZXcgT3BlblNjZW5lTm90ZXNfMS5PcGVuU2NlbmVOb3RlcygpLFxyXG4gICAgbmV3IHNlcnZlcl9wdXNoXzEuU2VydmVyUHVzaCgpLFxyXG4gICAgLy9uZXcgVmVoaWNsZU1vdmVtZW50KClcclxuXTtcclxuSG9va3Mub25jZSgnaW5pdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5kZXgsIG1vZHVsZV8xO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ2luaXRpYXRpbmcnKTtcclxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbW9kdWxlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZV8xID0gbW9kdWxlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kdWxlXzEuaW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZV8xLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnaW5pdGlhdGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuSG9va3Mub25jZSgncmVhZHknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4LCBtb2R1bGVfMjtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdyZWFkeWluZycpO1xyXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBtb2R1bGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlXzIgPSBtb2R1bGVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChtb2R1bGVfMi5yZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZV8yLnJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ3JlYWR5Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbiAgICAgICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdhcHBseScpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgdGVtcGxhdGUgaW4gX3RlbXBsYXRlQ2FjaGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX3RlbXBsYXRlQ2FjaGUsIHRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGVtcGxhdGVDYWNoZVt0ZW1wbGF0ZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuYWN0aXZhdGVTY2VuZSA9IGV4cG9ydHMuQWN0aXZhdGVTY2VuZSA9IHZvaWQgMDtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxudmFyIEFjdGl2YXRlU2NlbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBY3RpdmF0ZVNjZW5lKCkge1xyXG4gICAgfVxyXG4gICAgQWN0aXZhdGVTY2VuZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdBY3RpdmF0ZVNjZW5lIGluaXRpYXRpbmcnKTtcclxuICAgICAgICAoMCwgdXRpbHNfMS5hZGRHYW1lRXh0ZW5zaW9ucykoJ2Zsb3cnLCB7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlU2NlbmU6IGFjdGl2YXRlU2NlbmUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ09ORklHLlRleHRFZGl0b3IuZW5yaWNoZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXR0ZXJuOiAvQEFjdGl2YXRlU2NlbmVcXFsoW15cXF1dKylcXF0oPzp7KFtefV0rKX0pPy9nbSxcclxuICAgICAgICAgICAgZW5yaWNoZXI6IGZ1bmN0aW9uIChtYXRjaCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9iID0gbWF0Y2guc2xpY2UoMSwgMyksIHRhcmdldCA9IF9iWzBdLCBuYW1lID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NlbmUgPSBnYW1lLnNjZW5lcy5nZXQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIHZhciBicm9rZW4gPSBzY2VuZSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1jb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2NvbnRlbnQtbGluayddLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDogXCJBY3RpdmF0ZVNjZW5lLlwiLmNvbmNhdCh0YXJnZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQWN0aXZhdGVTY2VuZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdTY2VuZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlbjogYnJva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGJyb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaWNvbiA9ICdmYXMgZmEtdW5saW5rJztcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNsYXNzZXMucHVzaCgnYnJva2VuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5uYW1lID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICAoX2EgPSBhLmNsYXNzTGlzdCkuYWRkLmFwcGx5KF9hLCBkYXRhLmNsYXNzZXMpO1xyXG4gICAgICAgICAgICAgICAgYS5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYyA9IE9iamVjdC5lbnRyaWVzKGRhdGEuZGF0YXNldCk7IF9pIDwgX2MubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9kID0gX2NbX2ldLCBrID0gX2RbMF0sIHYgPSBfZFsxXTtcclxuICAgICAgICAgICAgICAgICAgICBhLmRhdGFzZXRba10gPSB2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPVxcXCJcIi5jb25jYXQoZGF0YS5pY29uLCBcIlxcXCI+PC9pPjxpIGNsYXNzPVxcXCJmYXMgZmEtbWFwXFxcIj48L2k+IFwiKS5jb25jYXQoZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldCAmJiB0YXJnZXQuZGF0YXNldC50eXBlID09PSAnQWN0aXZhdGVTY2VuZScgJiYgdGFyZ2V0LmRhdGFzZXQuYnJva2VuID09PSAnZmFsc2UnKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYWN0aXZhdGVTY2VuZSh0YXJnZXQuZGF0YXNldC5pZCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnQWN0aXZhdGVTY2VuZSBpbml0aWF0ZWQnKTtcclxuICAgIH07XHJcbiAgICBBY3RpdmF0ZVNjZW5lLnByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIHJldHVybiBBY3RpdmF0ZVNjZW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLkFjdGl2YXRlU2NlbmUgPSBBY3RpdmF0ZVNjZW5lO1xyXG5mdW5jdGlvbiBhY3RpdmF0ZVNjZW5lKHRhcmdldFNjZW5lSWQpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VycmVudFNjZW5lSm91cm5hbCwgdGFyZ2V0U2NlbmUsIGpvdXJuYWw7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoXCJBY3RpdmF0ZVNjZW5lIGFjdGl2YXRpbmc6IFwiLmNvbmNhdCh0YXJnZXRTY2VuZUlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNjZW5lSm91cm5hbCA9IGdhbWUuc2NlbmVzLmFjdGl2ZS5qb3VybmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2NlbmVKb3VybmFsICYmIGN1cnJlbnRTY2VuZUpvdXJuYWwuc2hlZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNjZW5lSm91cm5hbC5zaGVldC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTY2VuZSA9IGdhbWUuc2NlbmVzLmdldCh0YXJnZXRTY2VuZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFNjZW5lKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0YXJnZXRTY2VuZS5hY3RpdmF0ZSgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNjZW5lLmpvdXJuYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgam91cm5hbCA9IHRhcmdldFNjZW5lLmpvdXJuYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb3VybmFsLnNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWpvdXJuYWwudGVzdFVzZXJQZXJtaXNzaW9uKGdhbWUudXNlciwgJ0xJTUlURUQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB1aS5ub3RpZmljYXRpb25zLndhcm4oXCJZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byB2aWV3IHRoaXMgXCIuY29uY2F0KGpvdXJuYWwuZG9jdW1lbnROYW1lLCBcIiBzaGVldC5cIikpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvdXJuYWwuc2hlZXQucmVuZGVyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmFjdGl2YXRlU2NlbmUgPSBhY3RpdmF0ZVNjZW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuT2dTZXR0aW5nID0gZXhwb3J0cy5uYW1lc3BhY2UgPSB2b2lkIDA7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbmV4cG9ydHMubmFtZXNwYWNlID0gJ29nLWV4cGVyaW1lbnRzJztcclxudmFyIE9nU2V0dGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9nU2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSwgc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBPZ1NldHRpbmcucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnT2dTZXR0aW5nIGluaXRpYWxpemluZycsIHRoaXMua2V5LCB0aGlzLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgZ2FtZS5zZXR0aW5ncy5yZWdpc3RlcihleHBvcnRzLm5hbWVzcGFjZSwgdGhpcy5rZXksIF9fYXNzaWduKHtcclxuICAgICAgICAgICAgc2NvcGU6ICdjbGllbnQnLFxyXG4gICAgICAgICAgICBjb25maWc6IHRydWUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRoaXMuZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAoX3RoaXMuX3ZhbHVlID0gdmFsdWUpOyB9LFxyXG4gICAgICAgIH0sIHRoaXMuc2V0dGluZ3MpKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gZ2FtZS5zZXR0aW5ncy5nZXQoZXhwb3J0cy5uYW1lc3BhY2UsIHRoaXMua2V5KTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2dTZXR0aW5nLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGdhbWUuc2V0dGluZ3Muc2V0KGV4cG9ydHMubmFtZXNwYWNlLCB0aGlzLmtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBPZ1NldHRpbmc7XHJcbn0oKSk7XHJcbmV4cG9ydHMuT2dTZXR0aW5nID0gT2dTZXR0aW5nO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLm9wZW5TY2VuZU5vdGVzID0gZXhwb3J0cy5PcGVuU2NlbmVOb3RlcyA9IHZvaWQgMDtcclxudmFyIE9nU2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL09nU2V0dGluZ3NcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbnZhciBPcGVuU2NlbmVOb3RlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9wZW5TY2VuZU5vdGVzKCkge1xyXG4gICAgICAgIHRoaXMub3BlblNjZW5lTm90ZXNPblJlYWR5ID0gbmV3IE9nU2V0dGluZ3NfMS5PZ1NldHRpbmcoJ29wZW5TY2VuZU5vdGVzT25SZWFkeScsIHRydWUsIHtcclxuICAgICAgICAgICAgbmFtZTogJ0F1dG8tb3BlbiBzY2VuZSBub3Rlcz8nLFxyXG4gICAgICAgICAgICBoaW50OiAnSWYgZW5hYmxlZCwgdGhlIHNjZW5lIG5vdGVzIG9mIHRoZSBjdXJyZW50IHNjZW5lIHdpbGwgb3BlbiB3aGVuIHRoZSBzZXJ2ZXIgZmlyc3QgbG9hZC4nLFxyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgT3BlblNjZW5lTm90ZXMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ09wZW5TY2VuZU5vdGVzIGluaXRpYXRpbmcnKTtcclxuICAgICAgICB0aGlzLm9wZW5TY2VuZU5vdGVzT25SZWFkeS5pbml0KCk7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEuYWRkR2FtZUV4dGVuc2lvbnMpKCdmbG93Jywge1xyXG4gICAgICAgICAgICBvcGVuU2NlbmVOb3Rlczogb3BlblNjZW5lTm90ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ09wZW5TY2VuZU5vdGVzIGluaXRpYXRlZCcpO1xyXG4gICAgfTtcclxuICAgIE9wZW5TY2VuZU5vdGVzLnByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnT3BlblNjZW5lTm90ZXMgaXMgZ2V0dGluZyByZWFkeScpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW5TY2VuZU5vdGVzT25SZWFkeS52YWx1ZSkge1xyXG4gICAgICAgICAgICBvcGVuU2NlbmVOb3RlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnT3BlblNjZW5lTm90ZXMgaXMgcmVhZHknKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT3BlblNjZW5lTm90ZXM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuT3BlblNjZW5lTm90ZXMgPSBPcGVuU2NlbmVOb3RlcztcclxuZnVuY3Rpb24gb3BlblNjZW5lTm90ZXMoKSB7XHJcbiAgICB2YXIgY3VycmVudFNjZW5lSm91cm5hbCA9IGdhbWUuc2NlbmVzLmFjdGl2ZS5qb3VybmFsO1xyXG4gICAgaWYgKGN1cnJlbnRTY2VuZUpvdXJuYWwgJiYgY3VycmVudFNjZW5lSm91cm5hbC5zaGVldCkge1xyXG4gICAgICAgIGlmICghY3VycmVudFNjZW5lSm91cm5hbC50ZXN0VXNlclBlcm1pc3Npb24oZ2FtZS51c2VyLCAnTElNSVRFRCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1aS5ub3RpZmljYXRpb25zLndhcm4oXCJZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byB2aWV3IHRoaXMgXCIuY29uY2F0KGN1cnJlbnRTY2VuZUpvdXJuYWwuZG9jdW1lbnROYW1lLCBcIiBzaGVldC5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50U2NlbmVKb3VybmFsLnNoZWV0LnJlbmRlcih0cnVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLm9wZW5TY2VuZU5vdGVzID0gb3BlblNjZW5lTm90ZXM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNlcnZlclB1c2ggPSB2b2lkIDA7XHJcbi8vIGNvbnN0IHNpZ25hbFIgPSByZXF1aXJlKCdAbWljcm9zb2Z0L3NpZ25hbHInKTtcclxudmFyIHNpZ25hbHJfMSA9IHJlcXVpcmUoXCJAbWljcm9zb2Z0L3NpZ25hbHJcIik7XHJcbnZhciBrZXljbG9ha19qc18xID0gcmVxdWlyZShcImtleWNsb2FrLWpzXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG4vLyBmdW5jdGlvbiBsb2dUZXh0KHRleHQ6IHN0cmluZykge1xyXG4vLyAgICAgY29uc29sZS5kZWJ1Zygnb2ctZXhwZXJpbWVudHMgfCAnICsgdGV4dCk7XHJcbi8vIH1cclxuLy8gdmFyIG5vdGVCeUluZGV4ID0gZ2FtZS5qb3VybmFsLl9zb3VyY2VbMTZdXHJcbi8vIHZhciBqb3VybmFsRW50cnlJZCA9ICd6RXR0WWwyTGxpRGcxVzdPJzsgLy8gXCJVM0JtRGIyM0dVeG5NUDlNXCJcclxuLypcclxuY29uc3Qgam91cm5hbEVudHJ5SWQgPSAnekV0dFlsMkxsaURnMVc3Tyc7XHJcbmF3YWl0IGdhbWUuZXhwZXJpbWVudHMuc2hvd0pvdXJuYWxFbnRyeUJ5SWQoam91cm5hbEVudHJ5SWQpO1xyXG4qL1xyXG4vLyB2YXIgbm90ZUJ5SWQgPSBnYW1lLmpvdXJuYWwuZmluZCgoZW50cnkpID0+IGVudHJ5LmRhdGEuX2lkID09PSBqb3VybmFsRW50cnlJZCk7XHJcbi8vIG5vdGVCeUlkLnNob3coKTtcclxuLy9cclxuLy9uZXcgSm91cm5hbEVudHJ5KG5vdGUpLnNob3coKVxyXG52YXIgQXV0aFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBdXRoU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fa2V5Y2xvYWsgPSBuZXcga2V5Y2xvYWtfanNfMS5kZWZhdWx0KHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwLycsXHJcbiAgICAgICAgICAgIHJlYWxtOiAnT2dBdXRoJyxcclxuICAgICAgICAgICAgY2xpZW50SWQ6ICdvZy1zZXJ2ZXInLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhTZXJ2aWNlLnByb3RvdHlwZSwgXCJ0b2tlblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSB2O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRoU2VydmljZS5wcm90b3R5cGUsIFwiYXV0aGVudGljYXRlZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGVkID0gdjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aFNlcnZpY2UucHJvdG90eXBlLCBcInVzZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5Y2xvYWs7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fa2V5Y2xvYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkOiAnbG9naW4tcmVxdWlyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmk6ICdodHRwczovL2xvY2FsaG9zdDozMDAwMC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoYXV0aGVudGljYXRlZCA/ICdhdXRoZW50aWNhdGVkJyA6ICdub3QgYXV0aGVudGljYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmF1dGhlbnRpY2F0ZWQgPSBhdXRoZW50aWNhdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnRva2VuID0gbWUuX2tleWNsb2FrLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGluaXRpYWxpemUnLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXV0aFNlcnZpY2U7XHJcbn0oKSk7XHJcbnZhciBTZXJ2ZXJQdXNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2VydmVyUHVzaCgpIHtcclxuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aFNlcnZpY2UoKTtcclxuICAgIH1cclxuICAgIFNlcnZlclB1c2gucHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24sIHVzZXI7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoIGdldHRpbmcgcmVhZHknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hdXRoLmluaXQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgYXV0aGVudGljYXRlZCEgQ2FuJ3QgcHJvY2VlZCB3aXRoIFNlcnZlclB1c2gucmVhZHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBuZXcgc2lnbmFscl8xLkh1YkNvbm5lY3Rpb25CdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoVXJsKCdodHRwczovL2xvY2FsaG9zdDo3MjYzL2h1YnMvZGVmYXVsdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuRmFjdG9yeTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYXV0aC50b2tlbjsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyID0gdGhpcy5hdXRoLnVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmFkZEdhbWVFeHRlbnNpb25zKSgnc2VydmVyUHVzaCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb246IGNvbm5lY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29ubmVjdGlvbi5pbnZva2UoJ1BpbmcnKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ub24oJ3BvbmcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgncG9uZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5vbignY3JlYXRlU2hvd0FuZERlbGV0ZU5ld0pvdXJuYWxFbnRyeScsIHRoaXMuY3JlYXRlU2hvd0FuZERlbGV0ZU5ld0pvdXJuYWxFbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ub24oJ2NyZWF0ZUFuZFNob3dUZW1wb3JhcnlKb3VybmFsRW50cnknLCB0aGlzLmNyZWF0ZUFuZFNob3dUZW1wb3JhcnlKb3VybmFsRW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLm9uKCdleGVjdXRlJywgdGhpcy5leGVjdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5vbignZXhlY3V0ZUFzeW5jJywgdGhpcy5leGVjdXRlQXN5bmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoIGlzIHJlYWR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoIGluaXRpYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIC8vIEphdmFzY3JpcHRcclxuICAgICAgICAgICAgICAgIC8vIGdhbWUuZXhwZXJpbWVudHMuc2hvd0pvdXJuYWxFbnRyeUJ5SWQgPSBhc3luYyBmdW5jdGlvbiAoam91cm5hbEVudHJ5SWQpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB2YXIgbm90ZUJ5SWQgPSBnYW1lLmpvdXJuYWwuZmluZCgoZW50cnkpID0+IGVudHJ5LmRhdGEuX2lkID09PSBqb3VybmFsRW50cnlJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gYXdhaXQgbm90ZUJ5SWQuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGdhbWUuU3RvcnlUZWxsZXIuc2hvd1N0b3J5QnlJRFRvQWxsKGpvdXJuYWxFbnRyeUlkKTtcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICAvLyAvL3ZhciBqb3VybmFsRW50cnlJZD1cImE3TEJLd0VMcUR3d2NDenpcIlxyXG4gICAgICAgICAgICAgICAgLy8gZ2FtZS5leHBlcmltZW50cy5zaG93TmV3Sm91cm5hbEVudHJ5ID0gYXN5bmMgZnVuY3Rpb24gKG5hbWUsIGNvbnRlbnQsIGRlbGV0ZURlbGF5LCBpc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgSm91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nVGV4dChgSm91cm5hbCBlbnRyeSAnJHtuYW1lfScgY3JlYXRlZCB3aXRoIGlzUGVybWFuZW50ID0gJHtpc1Blcm1hbmVudH0uYCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYXdhaXQgZW50cnkuc2hvdygndGV4dCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChpc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGRlbGV0ZUVudHJ5SW5NUyA9IGRlbGV0ZURlbGF5IHx8IDYwMDAwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ1RleHQoYFNjaGVkdWxpbmcgam91cm5hbCBlbnRyeSBkZWxldGlvbiBpbiAke2RlbGV0ZUVudHJ5SW5NU30gbXMuYCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxvZ1RleHQoJ0RlbGV0aW5nIGpvdXJuYWwgZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGF3YWl0IGVudHJ5LmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsb2dUZXh0KCdKb3VybmFsIGVudHJ5IGRlbGV0ZWQnKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LCBkZWxldGVFbnRyeUluTVMpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIFYxMCBtdWx0aS1wYWdlIHN5bnRheFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIEpvdXJuYWxFbnRyeS5jcmVhdGUoe25hbWU6IFwiSm91cm5hbCBuYW1lXCIsIHBhZ2VzOlt7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiUXVlc3QgaG9va1wiLCB0ZXh0Ontjb250ZW50OiBgSFRNTCBjb250ZW50IGhlcmVgfX1dfSlcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnU2VydmVyUHVzaCBpbml0aWF0ZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUuY3JlYXRlQW5kU2hvd1RlbXBvcmFyeUpvdXJuYWxFbnRyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBKb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG9wdGlvbnMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcm1pc3Npb246IGZvdW5kcnkuQ09OU1QuRE9DVU1FTlRfUEVSTUlTU0lPTl9MRVZFTFMuT0JTRVJWRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogZm91bmRyeS5DT05TVC5ET0NVTUVOVF9QRVJNSVNTSU9OX0xFVkVMUy5PQlNFUlZFUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgeyB0ZW1wb3Jhcnk6IHRydWUsIHJlbmRlclNoZWV0OiB0cnVlIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gZW50cnkgd2FzIGNyZWF0ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoXCJKb3VybmFsIGVudHJ5ICdcIi5jb25jYXQob3B0aW9ucy5uYW1lLCBcIicgY3JlYXRlZC5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhd2FpdCBlbnRyeS5zaG93KCd0ZXh0JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sICgoX2EgPSBlbnRyeS5zaGVldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbmRlcih0cnVlKSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXdhaXQgZW50cnkuc2hvdygndGV4dCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUuY3JlYXRlU2hvd0FuZERlbGV0ZU5ld0pvdXJuYWxFbnRyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZW50cnksIGRlbGV0ZUVudHJ5SW5NUztcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgSm91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBvcHRpb25zLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gZW50cnkgd2FzIGNyZWF0ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoXCJKb3VybmFsIGVudHJ5ICdcIi5jb25jYXQob3B0aW9ucy5uYW1lLCBcIicgY3JlYXRlZCB3aXRoIGlzUGVybWFuZW50ID0gXCIpLmNvbmNhdChvcHRpb25zLmlzUGVybWFuZW50LCBcIi5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBlbnRyeS5zaG93KCd0ZXh0JywgdHJ1ZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5pc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUVudHJ5SW5NUyA9IG9wdGlvbnMuZGVsZXRlRGVsYXkgfHwgNjAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKFwiU2NoZWR1bGluZyBqb3VybmFsIGVudHJ5IGRlbGV0aW9uIGluIFwiLmNvbmNhdChkZWxldGVFbnRyeUluTVMsIFwiIG1zLlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnRGVsZXRpbmcgam91cm5hbCBlbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGVudHJ5LmRlbGV0ZSgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ0pvdXJuYWwgZW50cnkgZGVsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSwgZGVsZXRlRW50cnlJbk1TKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTZXJ2ZXJQdXNoLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKG9wdGlvbnMsIHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoLmV4ZWN1dGUnLCBvcHRpb25zLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgIGV2YWwob3B0aW9ucy5jb21tYW5kKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUuZXhlY3V0ZUFzeW5jID0gZnVuY3Rpb24gKG9wdGlvbnMsIHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoLmV4ZWN1dGVBc3luYycsIG9wdGlvbnMsIHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHJldHVybiBldmFsKG9wdGlvbnMuY29tbWFuZCk7IH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VydmVyUHVzaDtcclxufSgpKTtcclxuZXhwb3J0cy5TZXJ2ZXJQdXNoID0gU2VydmVyUHVzaDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmFkZEdhbWVFeHRlbnNpb25zID0gZXhwb3J0cy5sb2dUZXh0ID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBsb2dUZXh0KCkge1xyXG4gICAgdmFyIGRhdGEgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgZGF0YVtfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5KFsnb2ctZXhwZXJpbWVudHMgfCddLCBkYXRhLCBmYWxzZSkpO1xyXG59XHJcbmV4cG9ydHMubG9nVGV4dCA9IGxvZ1RleHQ7XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVPZ0V4dGVuc2lvbnMoKSB7XHJcbiAgICBnYW1lWydvZyddID0ge307XHJcbn1cclxuZnVuY3Rpb24gZW5mb3JjZU9nRXh0ZW5zaW9uc0luaXRpYWxpemVkKCkge1xyXG4gICAgaWYgKGdhbWVbJ29nJ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGluaXRpYWxpemVPZ0V4dGVuc2lvbnMoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRHYW1lRXh0ZW5zaW9ucyhrZXksIHNldHRpbmcpIHtcclxuICAgIGVuZm9yY2VPZ0V4dGVuc2lvbnNJbml0aWFsaXplZCgpO1xyXG4gICAgZ2FtZVsnb2cnXVtrZXldID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGdhbWVbJ29nJ11ba2V5XSksIHNldHRpbmcpO1xyXG59XHJcbmV4cG9ydHMuYWRkR2FtZUV4dGVuc2lvbnMgPSBhZGRHYW1lRXh0ZW5zaW9ucztcclxuIiwiaW1wb3J0IGJhc2U2NCBmcm9tICdiYXNlNjQtanMnO1xuaW1wb3J0IHNoYTI1NiBmcm9tICdqcy1zaGEyNTYnO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXNcbiAqIGFuZCBvdGhlciBjb250cmlidXRvcnMgYXMgaW5kaWNhdGVkIGJ5IHRoZSBAYXV0aG9yIHRhZ3MuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IEVycm9yKCdLZXljbG9hayByZXF1aXJlcyBhbiBlbnZpcm9ubWVudCB0aGF0IHN1cHBvcnRzIFByb21pc2VzLiBNYWtlIHN1cmUgdGhhdCB5b3UgaW5jbHVkZSB0aGUgYXBwcm9wcmlhdGUgcG9seWZpbGwuJyk7XG59XG5cbnZhciBsb2dnZWRQcm9taXNlRGVwcmVjYXRpb24gPSBmYWxzZTtcblxuZnVuY3Rpb24gbG9nUHJvbWlzZURlcHJlY2F0aW9uKCkge1xuICAgIGlmICghbG9nZ2VkUHJvbWlzZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGxvZ2dlZFByb21pc2VEZXByZWNhdGlvbiA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUud2FybignW0tFWUNMT0FLXSBVc2FnZSBvZiBsZWdhY3kgc3R5bGUgcHJvbWlzZSBtZXRob2RzIHN1Y2ggYXMgYC5lcnJvcigpYCBhbmQgYC5zdWNjZXNzKClgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHN1cHBvcnQgd2lsbCBiZSByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucy4gVXNlIHN0YW5kYXJkIHN0eWxlIHByb21pc2UgbWV0aG9kcyBzdWNoIGFzIGAudGhlbigpIGFuZCBgLmNhdGNoKClgIGluc3RlYWQuJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBLZXljbG9hayAoY29uZmlnKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEtleWNsb2FrKSkge1xuICAgICAgICByZXR1cm4gbmV3IEtleWNsb2FrKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgdmFyIGtjID0gdGhpcztcbiAgICB2YXIgYWRhcHRlcjtcbiAgICB2YXIgcmVmcmVzaFF1ZXVlID0gW107XG4gICAgdmFyIGNhbGxiYWNrU3RvcmFnZTtcblxuICAgIHZhciBsb2dpbklmcmFtZSA9IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBjYWxsYmFja0xpc3Q6IFtdLFxuICAgICAgICBpbnRlcnZhbDogNVxuICAgIH07XG5cbiAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKChzY3JpcHRzW2ldLnNyYy5pbmRleE9mKCdrZXljbG9hay5qcycpICE9PSAtMSB8fCBzY3JpcHRzW2ldLnNyYy5pbmRleE9mKCdrZXljbG9hay5taW4uanMnKSAhPT0gLTEpICYmIHNjcmlwdHNbaV0uc3JjLmluZGV4T2YoJ3ZlcnNpb249JykgIT09IC0xKSB7XG4gICAgICAgICAgICBrYy5pZnJhbWVWZXJzaW9uID0gc2NyaXB0c1tpXS5zcmMuc3Vic3RyaW5nKHNjcmlwdHNbaV0uc3JjLmluZGV4T2YoJ3ZlcnNpb249JykgKyA4KS5zcGxpdCgnJicpWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHVzZU5vbmNlID0gdHJ1ZTtcbiAgICB2YXIgbG9nSW5mbyA9IGNyZWF0ZUxvZ2dlcihjb25zb2xlLmluZm8pO1xuICAgIHZhciBsb2dXYXJuID0gY3JlYXRlTG9nZ2VyKGNvbnNvbGUud2Fybik7XG5cbiAgICBrYy5pbml0ID0gZnVuY3Rpb24gKGluaXRPcHRpb25zKSB7XG4gICAgICAgIGtjLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICAgICAgICBjYWxsYmFja1N0b3JhZ2UgPSBjcmVhdGVDYWxsYmFja1N0b3JhZ2UoKTtcbiAgICAgICAgdmFyIGFkYXB0ZXJzID0gWydkZWZhdWx0JywgJ2NvcmRvdmEnLCAnY29yZG92YS1uYXRpdmUnXTtcblxuICAgICAgICBpZiAoaW5pdE9wdGlvbnMgJiYgYWRhcHRlcnMuaW5kZXhPZihpbml0T3B0aW9ucy5hZGFwdGVyKSA+IC0xKSB7XG4gICAgICAgICAgICBhZGFwdGVyID0gbG9hZEFkYXB0ZXIoaW5pdE9wdGlvbnMuYWRhcHRlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdE9wdGlvbnMgJiYgdHlwZW9mIGluaXRPcHRpb25zLmFkYXB0ZXIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIgPSBpbml0T3B0aW9ucy5hZGFwdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5Db3Jkb3ZhIHx8IHdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IGxvYWRBZGFwdGVyKCdjb3Jkb3ZhJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBsb2FkQWRhcHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluaXRPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRPcHRpb25zLnVzZU5vbmNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHVzZU5vbmNlID0gaW5pdE9wdGlvbnMudXNlTm9uY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5pdE9wdGlvbnMuY2hlY2tMb2dpbklmcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBsb2dpbklmcmFtZS5lbmFibGUgPSBpbml0T3B0aW9ucy5jaGVja0xvZ2luSWZyYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMuY2hlY2tMb2dpbklmcmFtZUludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgbG9naW5JZnJhbWUuaW50ZXJ2YWwgPSBpbml0T3B0aW9ucy5jaGVja0xvZ2luSWZyYW1lSW50ZXJ2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5vbkxvYWQgPT09ICdsb2dpbi1yZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgICBrYy5sb2dpblJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnJlc3BvbnNlTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5yZXNwb25zZU1vZGUgPT09ICdxdWVyeScgfHwgaW5pdE9wdGlvbnMucmVzcG9uc2VNb2RlID09PSAnZnJhZ21lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGtjLnJlc3BvbnNlTW9kZSA9IGluaXRPcHRpb25zLnJlc3BvbnNlTW9kZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCB2YWx1ZSBmb3IgcmVzcG9uc2VNb2RlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5mbG93KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbml0T3B0aW9ucy5mbG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YW5kYXJkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnJlc3BvbnNlVHlwZSA9ICdjb2RlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbXBsaWNpdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5yZXNwb25zZVR5cGUgPSAnaWRfdG9rZW4gdG9rZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2h5YnJpZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5yZXNwb25zZVR5cGUgPSAnY29kZSBpZF90b2tlbiB0b2tlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIHZhbHVlIGZvciBmbG93JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2MuZmxvdyA9IGluaXRPcHRpb25zLmZsb3c7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy50aW1lU2tldyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAga2MudGltZVNrZXcgPSBpbml0T3B0aW9ucy50aW1lU2tldztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaW5pdE9wdGlvbnMucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICAgICAgICBrYy5yZWRpcmVjdFVyaSA9IGluaXRPcHRpb25zLnJlZGlyZWN0VXJpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMuc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaSkge1xuICAgICAgICAgICAgICAgIGtjLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmkgPSBpbml0T3B0aW9ucy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRPcHRpb25zLnNpbGVudENoZWNrU3NvRmFsbGJhY2sgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGtjLnNpbGVudENoZWNrU3NvRmFsbGJhY2sgPSBpbml0T3B0aW9ucy5zaWxlbnRDaGVja1Nzb0ZhbGxiYWNrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb0ZhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnBrY2VNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMucGtjZU1ldGhvZCAhPT0gXCJTMjU2XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgdmFsdWUgZm9yIHBrY2VNZXRob2QnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrYy5wa2NlTWV0aG9kID0gaW5pdE9wdGlvbnMucGtjZU1ldGhvZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0T3B0aW9ucy5lbmFibGVMb2dnaW5nID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICBrYy5lbmFibGVMb2dnaW5nID0gaW5pdE9wdGlvbnMuZW5hYmxlTG9nZ2luZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2MuZW5hYmxlTG9nZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRPcHRpb25zLnNjb3BlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGtjLnNjb3BlID0gaW5pdE9wdGlvbnMuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5pdE9wdGlvbnMubWVzc2FnZVJlY2VpdmVUaW1lb3V0ID09PSAnbnVtYmVyJyAmJiBpbml0T3B0aW9ucy5tZXNzYWdlUmVjZWl2ZVRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAga2MubWVzc2FnZVJlY2VpdmVUaW1lb3V0ID0gaW5pdE9wdGlvbnMubWVzc2FnZVJlY2VpdmVUaW1lb3V0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrYy5tZXNzYWdlUmVjZWl2ZVRpbWVvdXQgPSAxMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgha2MucmVzcG9uc2VNb2RlKSB7XG4gICAgICAgICAgICBrYy5yZXNwb25zZU1vZGUgPSAnZnJhZ21lbnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICgha2MucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgICAgICBrYy5yZXNwb25zZVR5cGUgPSAnY29kZSc7XG4gICAgICAgICAgICBrYy5mbG93ID0gJ3N0YW5kYXJkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgIHZhciBpbml0UHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcbiAgICAgICAgaW5pdFByb21pc2UucHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAga2Mub25SZWFkeSAmJiBrYy5vblJlYWR5KGtjLmF1dGhlbnRpY2F0ZWQpO1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKGtjLmF1dGhlbnRpY2F0ZWQpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjb25maWdQcm9taXNlID0gbG9hZENvbmZpZygpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHZhciBkb0xvZ2luID0gZnVuY3Rpb24ocHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9tcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9tcHQgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAga2MubG9naW4ob3B0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNoZWNrU3NvU2lsZW50bHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWZybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgICAgICAgICAgdmFyIHNyYyA9IGtjLmNyZWF0ZUxvZ2luVXJsKHtwcm9tcHQ6ICdub25lJywgcmVkaXJlY3RVcmk6IGtjLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcml9KTtcbiAgICAgICAgICAgICAgICBpZnJtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpO1xuICAgICAgICAgICAgICAgIGlmcm0uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJrZXljbG9hay1zaWxlbnQtY2hlY2stc3NvXCIpO1xuICAgICAgICAgICAgICAgIGlmcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZybSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZUNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiB8fCBpZnJtLmNvbnRlbnRXaW5kb3cgIT09IGV2ZW50LnNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9hdXRoID0gcGFyc2VDYWxsYmFjayhldmVudC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKG9hdXRoLCBpbml0UHJvbWlzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJtKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG1lc3NhZ2VDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBtZXNzYWdlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5pdE9wdGlvbnMub25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hlY2stc3NvJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXBDaGVja0xvZ2luSWZyYW1lKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xvZ2luSWZyYW1lKCkudGhlbihmdW5jdGlvbiAodW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpID8gY2hlY2tTc29TaWxlbnRseSgpIDogZG9Mb2dpbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpID8gY2hlY2tTc29TaWxlbnRseSgpIDogZG9Mb2dpbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbG9naW4tcmVxdWlyZWQnOlxuICAgICAgICAgICAgICAgICAgICBkb0xvZ2luKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCB2YWx1ZSBmb3Igb25Mb2FkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NJbml0KCkge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcGFyc2VDYWxsYmFjayh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh3aW5kb3cuaGlzdG9yeS5zdGF0ZSwgbnVsbCwgY2FsbGJhY2submV3VXJsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGNhbGxiYWNrLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldHVwQ2hlY2tMb2dpbklmcmFtZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgaW5pdFByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnRva2VuICYmIGluaXRPcHRpb25zLnJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbihpbml0T3B0aW9ucy50b2tlbiwgaW5pdE9wdGlvbnMucmVmcmVzaFRva2VuLCBpbml0T3B0aW9ucy5pZFRva2VuKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5JZnJhbWUuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR1cENoZWNrTG9naW5JZnJhbWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTG9naW5JZnJhbWUoKS50aGVuKGZ1bmN0aW9uICh1bmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2Mub25BdXRoU3VjY2VzcyAmJiBrYy5vbkF1dGhTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZUNoZWNrSWZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy51cGRhdGVUb2tlbigtMSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhTdWNjZXNzICYmIGtjLm9uQXV0aFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLm9uQXV0aEVycm9yICYmIGtjLm9uQXV0aEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLm9uTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRPcHRpb25zLm9uTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkb21SZWFkeSgpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICB2YXIgY2hlY2tSZWFkeVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGNoZWNrUmVhZHlTdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgY2hlY2tSZWFkeVN0YXRlKTtcblxuICAgICAgICAgICAgY2hlY2tSZWFkeVN0YXRlKCk7IC8vIGp1c3QgaW4gY2FzZSB0aGUgZXZlbnQgd2FzIGFscmVhZHkgZmlyZWQgYW5kIHdlIG1pc3NlZCBpdCAoaW4gY2FzZSB0aGUgaW5pdCBpcyBkb25lIGxhdGVyIHRoYW4gYXQgdGhlIGxvYWQgdGltZSwgaS5lLiBpdCdzIGRvbmUgZnJvbSBjb2RlKVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvbVJlYWR5KClcbiAgICAgICAgICAgICAgICAudGhlbihjaGVjazNwQ29va2llc1N1cHBvcnRlZClcbiAgICAgICAgICAgICAgICAudGhlbihwcm9jZXNzSW5pdClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnUHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH07XG5cbiAgICBrYy5sb2dpbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBhZGFwdGVyLmxvZ2luKG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbURhdGEobGVuKSB7XG4gICAgICAgIC8vIHVzZSB3ZWIgY3J5cHRvIEFQSXMgaWYgcG9zc2libGVcbiAgICAgICAgdmFyIGFycmF5ID0gbnVsbDtcbiAgICAgICAgdmFyIGNyeXB0byA9IHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvO1xuICAgICAgICBpZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgd2luZG93LlVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgICAgICAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gTWF0aCByYW5kb21cbiAgICAgICAgYXJyYXkgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgYXJyYXlbal0gPSBNYXRoLmZsb29yKDI1NiAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvZGVWZXJpZmllcihsZW4pIHtcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlUmFuZG9tU3RyaW5nKGxlbiwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TdHJpbmcobGVuLCBhbHBoYWJldCl7XG4gICAgICAgIHZhciByYW5kb21EYXRhID0gZ2VuZXJhdGVSYW5kb21EYXRhKGxlbik7XG4gICAgICAgIHZhciBjaGFycyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGFyc1tpXSA9IGFscGhhYmV0LmNoYXJDb2RlQXQocmFuZG9tRGF0YVtpXSAlIGFscGhhYmV0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY2hhcnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUGtjZUNoYWxsZW5nZShwa2NlTWV0aG9kLCBjb2RlVmVyaWZpZXIpIHtcbiAgICAgICAgc3dpdGNoIChwa2NlTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgdXNlIG9mIHRoZSBcInBsYWluXCIgbWV0aG9kIGlzIGNvbnNpZGVyZWQgaW5zZWN1cmUgYW5kIHRoZXJlZm9yZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgICAgY2FzZSBcIlMyNTZcIjpcbiAgICAgICAgICAgICAgICAvLyBoYXNoIGNvZGVWZXJpZmllciwgdGhlbiBlbmNvZGUgYXMgdXJsLXNhZmUgYmFzZTY0IHdpdGhvdXQgcGFkZGluZ1xuICAgICAgICAgICAgICAgIHZhciBoYXNoQnl0ZXMgPSBuZXcgVWludDhBcnJheShzaGEyNTYuYXJyYXlCdWZmZXIoY29kZVZlcmlmaWVyKSk7XG4gICAgICAgICAgICAgICAgdmFyIGVuY29kZWRIYXNoID0gYmFzZTY0LmZyb21CeXRlQXJyYXkoaGFzaEJ5dGVzKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXD0vZywgJycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVkSGFzaDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgdmFsdWUgZm9yIHBrY2VNZXRob2QnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRDbGFpbXNQYXJhbWV0ZXIocmVxdWVzdGVkQWNyKXtcbiAgICAgICAgdmFyIGNsYWltcyA9IHtcbiAgICAgICAgICAgIGlkX3Rva2VuOiB7XG4gICAgICAgICAgICAgICAgYWNyOiByZXF1ZXN0ZWRBY3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNsYWltcyk7XG4gICAgfVxuXG4gICAga2MuY3JlYXRlTG9naW5VcmwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGNyZWF0ZVVVSUQoKTtcbiAgICAgICAgdmFyIG5vbmNlID0gY3JlYXRlVVVJRCgpO1xuXG4gICAgICAgIHZhciByZWRpcmVjdFVyaSA9IGFkYXB0ZXIucmVkaXJlY3RVcmkob3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIGNhbGxiYWNrU3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBub25jZTogbm9uY2UsXG4gICAgICAgICAgICByZWRpcmVjdFVyaTogZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0VXJpKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJvbXB0KSB7XG4gICAgICAgICAgICBjYWxsYmFja1N0YXRlLnByb21wdCA9IG9wdGlvbnMucHJvbXB0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJhc2VVcmw7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWN0aW9uID09ICdyZWdpc3RlcicpIHtcbiAgICAgICAgICAgIGJhc2VVcmwgPSBrYy5lbmRwb2ludHMucmVnaXN0ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhc2VVcmwgPSBrYy5lbmRwb2ludHMuYXV0aG9yaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2NvcGUgPSBvcHRpb25zICYmIG9wdGlvbnMuc2NvcGUgfHwga2Muc2NvcGU7XG4gICAgICAgIGlmICghc2NvcGUpIHtcbiAgICAgICAgICAgIC8vIGlmIHNjb3BlIGlzIG5vdCBzZXQsIGRlZmF1bHQgdG8gXCJvcGVuaWRcIlxuICAgICAgICAgICAgc2NvcGUgPSBcIm9wZW5pZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlLmluZGV4T2YoXCJvcGVuaWRcIikgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBpZiBvcGVuaWQgc2NvcGUgaXMgbWlzc2luZywgcHJlZml4IHRoZSBnaXZlbiBzY29wZXMgd2l0aCBpdFxuICAgICAgICAgICAgc2NvcGUgPSBcIm9wZW5pZCBcIiArIHNjb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybCA9IGJhc2VVcmxcbiAgICAgICAgICAgICsgJz9jbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5jbGllbnRJZClcbiAgICAgICAgICAgICsgJyZyZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdFVyaSlcbiAgICAgICAgICAgICsgJyZzdGF0ZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0YXRlKVxuICAgICAgICAgICAgKyAnJnJlc3BvbnNlX21vZGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5yZXNwb25zZU1vZGUpXG4gICAgICAgICAgICArICcmcmVzcG9uc2VfdHlwZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLnJlc3BvbnNlVHlwZSlcbiAgICAgICAgICAgICsgJyZzY29wZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNjb3BlKTtcbiAgICAgICAgaWYgKHVzZU5vbmNlKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnJm5vbmNlPScgKyBlbmNvZGVVUklDb21wb25lbnQobm9uY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm9tcHQpIHtcbiAgICAgICAgICAgIHVybCArPSAnJnByb21wdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMucHJvbXB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubWF4QWdlKSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZtYXhfYWdlPScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5tYXhBZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sb2dpbkhpbnQpIHtcbiAgICAgICAgICAgIHVybCArPSAnJmxvZ2luX2hpbnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmxvZ2luSGludCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmlkcEhpbnQpIHtcbiAgICAgICAgICAgIHVybCArPSAnJmtjX2lkcF9oaW50PScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5pZHBIaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWN0aW9uICYmIG9wdGlvbnMuYWN0aW9uICE9ICdyZWdpc3RlcicpIHtcbiAgICAgICAgICAgIHVybCArPSAnJmtjX2FjdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubG9jYWxlKSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZ1aV9sb2NhbGVzPScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5sb2NhbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hY3IpIHtcbiAgICAgICAgICAgIHZhciBjbGFpbXNQYXJhbWV0ZXIgPSBidWlsZENsYWltc1BhcmFtZXRlcihvcHRpb25zLmFjcik7XG4gICAgICAgICAgICB1cmwgKz0gJyZjbGFpbXM9JyArIGVuY29kZVVSSUNvbXBvbmVudChjbGFpbXNQYXJhbWV0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtjLnBrY2VNZXRob2QpIHtcbiAgICAgICAgICAgIHZhciBjb2RlVmVyaWZpZXIgPSBnZW5lcmF0ZUNvZGVWZXJpZmllcig5Nik7XG4gICAgICAgICAgICBjYWxsYmFja1N0YXRlLnBrY2VDb2RlVmVyaWZpZXIgPSBjb2RlVmVyaWZpZXI7XG4gICAgICAgICAgICB2YXIgcGtjZUNoYWxsZW5nZSA9IGdlbmVyYXRlUGtjZUNoYWxsZW5nZShrYy5wa2NlTWV0aG9kLCBjb2RlVmVyaWZpZXIpO1xuICAgICAgICAgICAgdXJsICs9ICcmY29kZV9jaGFsbGVuZ2U9JyArIHBrY2VDaGFsbGVuZ2U7XG4gICAgICAgICAgICB1cmwgKz0gJyZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9JyArIGtjLnBrY2VNZXRob2Q7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFja1N0b3JhZ2UuYWRkKGNhbGxiYWNrU3RhdGUpO1xuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfTtcblxuICAgIGtjLmxvZ291dCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXIubG9nb3V0KG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBrYy5jcmVhdGVMb2dvdXRVcmwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciB1cmwgPSBrYy5lbmRwb2ludHMubG9nb3V0KClcbiAgICAgICAgICAgICsgJz9jbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5jbGllbnRJZClcbiAgICAgICAgICAgICsgJyZwb3N0X2xvZ291dF9yZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChhZGFwdGVyLnJlZGlyZWN0VXJpKG9wdGlvbnMsIGZhbHNlKSk7XG5cbiAgICAgICAgaWYgKGtjLmlkVG9rZW4pIHtcbiAgICAgICAgICAgIHVybCArPSAnJmlkX3Rva2VuX2hpbnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5pZFRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfTtcblxuICAgIGtjLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXIucmVnaXN0ZXIob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGtjLmNyZWF0ZVJlZ2lzdGVyVXJsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmFjdGlvbiA9ICdyZWdpc3Rlcic7XG4gICAgICAgIHJldHVybiBrYy5jcmVhdGVMb2dpblVybChvcHRpb25zKTtcbiAgICB9O1xuXG4gICAga2MuY3JlYXRlQWNjb3VudFVybCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlYWxtID0gZ2V0UmVhbG1VcmwoKTtcbiAgICAgICAgdmFyIHVybCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHR5cGVvZiByZWFsbSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHVybCA9IHJlYWxtXG4gICAgICAgICAgICArICcvYWNjb3VudCdcbiAgICAgICAgICAgICsgJz9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLmNsaWVudElkKVxuICAgICAgICAgICAgKyAnJnJlZmVycmVyX3VyaT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFkYXB0ZXIucmVkaXJlY3RVcmkob3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfTtcblxuICAgIGtjLmFjY291bnRNYW5hZ2VtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhZGFwdGVyLmFjY291bnRNYW5hZ2VtZW50KCk7XG4gICAgfTtcblxuICAgIGtjLmhhc1JlYWxtUm9sZSA9IGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgIHZhciBhY2Nlc3MgPSBrYy5yZWFsbUFjY2VzcztcbiAgICAgICAgcmV0dXJuICEhYWNjZXNzICYmIGFjY2Vzcy5yb2xlcy5pbmRleE9mKHJvbGUpID49IDA7XG4gICAgfTtcblxuICAgIGtjLmhhc1Jlc291cmNlUm9sZSA9IGZ1bmN0aW9uKHJvbGUsIHJlc291cmNlKSB7XG4gICAgICAgIGlmICgha2MucmVzb3VyY2VBY2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY2Nlc3MgPSBrYy5yZXNvdXJjZUFjY2Vzc1tyZXNvdXJjZSB8fCBrYy5jbGllbnRJZF07XG4gICAgICAgIHJldHVybiAhIWFjY2VzcyAmJiBhY2Nlc3Mucm9sZXMuaW5kZXhPZihyb2xlKSA+PSAwO1xuICAgIH07XG5cbiAgICBrYy5sb2FkVXNlclByb2ZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVybCA9IGdldFJlYWxtVXJsKCkgKyAnL2FjY291bnQnO1xuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnYmVhcmVyICcgKyBrYy50b2tlbik7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtjLnByb2ZpbGUgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3Moa2MucHJvZmlsZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXEuc2VuZCgpO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfTtcblxuICAgIGtjLmxvYWRVc2VySW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdXJsID0ga2MuZW5kcG9pbnRzLnVzZXJpbmZvKCk7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdiZWFyZXIgJyArIGtjLnRva2VuKTtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAga2MudXNlckluZm8gPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3Moa2MudXNlckluZm8pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxLnNlbmQoKTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH07XG5cbiAgICBrYy5pc1Rva2VuRXhwaXJlZCA9IGZ1bmN0aW9uKG1pblZhbGlkaXR5KSB7XG4gICAgICAgIGlmICgha2MudG9rZW5QYXJzZWQgfHwgKCFrYy5yZWZyZXNoVG9rZW4gJiYga2MuZmxvdyAhPSAnaW1wbGljaXQnICkpIHtcbiAgICAgICAgICAgIHRocm93ICdOb3QgYXV0aGVudGljYXRlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2MudGltZVNrZXcgPT0gbnVsbCkge1xuICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBVbmFibGUgdG8gZGV0ZXJtaW5lIGlmIHRva2VuIGlzIGV4cGlyZWQgYXMgdGltZXNrZXcgaXMgbm90IHNldCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwaXJlc0luID0ga2MudG9rZW5QYXJzZWRbJ2V4cCddIC0gTWF0aC5jZWlsKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgKyBrYy50aW1lU2tldztcbiAgICAgICAgaWYgKG1pblZhbGlkaXR5KSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4obWluVmFsaWRpdHkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgbWluVmFsaWRpdHknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhwaXJlc0luIC09IG1pblZhbGlkaXR5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHBpcmVzSW4gPCAwO1xuICAgIH07XG5cbiAgICBrYy51cGRhdGVUb2tlbiA9IGZ1bmN0aW9uKG1pblZhbGlkaXR5KSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgIGlmICgha2MucmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWluVmFsaWRpdHkgPSBtaW5WYWxpZGl0eSB8fCA1O1xuXG4gICAgICAgIHZhciBleGVjID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVmcmVzaFRva2VuID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAobWluVmFsaWRpdHkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxvZ0luZm8oJ1tLRVlDTE9BS10gUmVmcmVzaGluZyB0b2tlbjogZm9yY2VkIHJlZnJlc2gnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWtjLnRva2VuUGFyc2VkIHx8IGtjLmlzVG9rZW5FeHBpcmVkKG1pblZhbGlkaXR5KSkge1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBSZWZyZXNoaW5nIHRva2VuOiB0b2tlbiBleHBpcmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9ICdncmFudF90eXBlPXJlZnJlc2hfdG9rZW4mJyArICdyZWZyZXNoX3Rva2VuPScgKyBrYy5yZWZyZXNoVG9rZW47XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IGtjLmVuZHBvaW50cy50b2tlbigpO1xuXG4gICAgICAgICAgICAgICAgcmVmcmVzaFF1ZXVlLnB1c2gocHJvbWlzZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVmcmVzaFF1ZXVlLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXEud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgKz0gJyZjbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5jbGllbnRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVMb2NhbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKCdbS0VZQ0xPQUtdIFRva2VuIHJlZnJlc2hlZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMb2NhbCA9ICh0aW1lTG9jYWwgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlblJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbih0b2tlblJlc3BvbnNlWydhY2Nlc3NfdG9rZW4nXSwgdG9rZW5SZXNwb25zZVsncmVmcmVzaF90b2tlbiddLCB0b2tlblJlc3BvbnNlWydpZF90b2tlbiddLCB0aW1lTG9jYWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLm9uQXV0aFJlZnJlc2hTdWNjZXNzICYmIGtjLm9uQXV0aFJlZnJlc2hTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSByZWZyZXNoUXVldWUucG9wKCk7IHAgIT0gbnVsbDsgcCA9IHJlZnJlc2hRdWV1ZS5wb3AoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5zZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nV2FybignW0tFWUNMT0FLXSBGYWlsZWQgdG8gcmVmcmVzaCB0b2tlbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2MuY2xlYXJUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2Mub25BdXRoUmVmcmVzaEVycm9yICYmIGtjLm9uQXV0aFJlZnJlc2hFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gcmVmcmVzaFF1ZXVlLnBvcCgpOyBwICE9IG51bGw7IHAgPSByZWZyZXNoUXVldWUucG9wKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuc2V0RXJyb3IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLnNlbmQocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmVuYWJsZSkge1xuICAgICAgICAgICAgdmFyIGlmcmFtZVByb21pc2UgPSBjaGVja0xvZ2luSWZyYW1lKCk7XG4gICAgICAgICAgICBpZnJhbWVQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICB9O1xuXG4gICAga2MuY2xlYXJUb2tlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoa2MudG9rZW4pIHtcbiAgICAgICAgICAgIHNldFRva2VuKG51bGwsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAga2Mub25BdXRoTG9nb3V0ICYmIGtjLm9uQXV0aExvZ291dCgpO1xuICAgICAgICAgICAgaWYgKGtjLmxvZ2luUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBrYy5sb2dpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFJlYWxtVXJsKCkge1xuICAgICAgICBpZiAodHlwZW9mIGtjLmF1dGhTZXJ2ZXJVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoa2MuYXV0aFNlcnZlclVybC5jaGFyQXQoa2MuYXV0aFNlcnZlclVybC5sZW5ndGggLSAxKSA9PSAnLycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2MuYXV0aFNlcnZlclVybCArICdyZWFsbXMvJyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5yZWFsbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBrYy5hdXRoU2VydmVyVXJsICsgJy9yZWFsbXMvJyArIGVuY29kZVVSSUNvbXBvbmVudChrYy5yZWFsbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3JpZ2luKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQ2FsbGJhY2sob2F1dGgsIHByb21pc2UpIHtcbiAgICAgICAgdmFyIGNvZGUgPSBvYXV0aC5jb2RlO1xuICAgICAgICB2YXIgZXJyb3IgPSBvYXV0aC5lcnJvcjtcbiAgICAgICAgdmFyIHByb21wdCA9IG9hdXRoLnByb21wdDtcblxuICAgICAgICB2YXIgdGltZUxvY2FsID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKG9hdXRoWydrY19hY3Rpb25fc3RhdHVzJ10pIHtcbiAgICAgICAgICAgIGtjLm9uQWN0aW9uVXBkYXRlICYmIGtjLm9uQWN0aW9uVXBkYXRlKG9hdXRoWydrY19hY3Rpb25fc3RhdHVzJ10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAocHJvbXB0ICE9ICdub25lJykge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvckRhdGEgPSB7IGVycm9yOiBlcnJvciwgZXJyb3JfZGVzY3JpcHRpb246IG9hdXRoLmVycm9yX2Rlc2NyaXB0aW9uIH07XG4gICAgICAgICAgICAgICAga2Mub25BdXRoRXJyb3IgJiYga2Mub25BdXRoRXJyb3IoZXJyb3JEYXRhKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlICYmIHByb21pc2Uuc2V0RXJyb3IoZXJyb3JEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJiBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICgoa2MuZmxvdyAhPSAnc3RhbmRhcmQnKSAmJiAob2F1dGguYWNjZXNzX3Rva2VuIHx8IG9hdXRoLmlkX3Rva2VuKSkge1xuICAgICAgICAgICAgYXV0aFN1Y2Nlc3Mob2F1dGguYWNjZXNzX3Rva2VuLCBudWxsLCBvYXV0aC5pZF90b2tlbiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKGtjLmZsb3cgIT0gJ2ltcGxpY2l0JykgJiYgY29kZSkge1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9ICdjb2RlPScgKyBjb2RlICsgJyZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZSc7XG4gICAgICAgICAgICB2YXIgdXJsID0ga2MuZW5kcG9pbnRzLnRva2VuKCk7XG5cbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcS5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgICAgICAgICAgIHBhcmFtcyArPSAnJmNsaWVudF9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLmNsaWVudElkKTtcbiAgICAgICAgICAgIHBhcmFtcyArPSAnJnJlZGlyZWN0X3VyaT0nICsgb2F1dGgucmVkaXJlY3RVcmk7XG5cbiAgICAgICAgICAgIGlmIChvYXV0aC5wa2NlQ29kZVZlcmlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zICs9ICcmY29kZV92ZXJpZmllcj0nICsgb2F1dGgucGtjZUNvZGVWZXJpZmllcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFN1Y2Nlc3ModG9rZW5SZXNwb25zZVsnYWNjZXNzX3Rva2VuJ10sIHRva2VuUmVzcG9uc2VbJ3JlZnJlc2hfdG9rZW4nXSwgdG9rZW5SZXNwb25zZVsnaWRfdG9rZW4nXSwga2MuZmxvdyA9PT0gJ3N0YW5kYXJkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZUNoZWNrSWZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhFcnJvciAmJiBrYy5vbkF1dGhFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSAmJiBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXEuc2VuZChwYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYXV0aFN1Y2Nlc3MoYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgaWRUb2tlbiwgZnVsZmlsbFByb21pc2UpIHtcbiAgICAgICAgICAgIHRpbWVMb2NhbCA9ICh0aW1lTG9jYWwgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAyO1xuXG4gICAgICAgICAgICBzZXRUb2tlbihhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBpZFRva2VuLCB0aW1lTG9jYWwpO1xuXG4gICAgICAgICAgICBpZiAodXNlTm9uY2UgJiYgKChrYy50b2tlblBhcnNlZCAmJiBrYy50b2tlblBhcnNlZC5ub25jZSAhPSBvYXV0aC5zdG9yZWROb25jZSkgfHxcbiAgICAgICAgICAgICAgICAoa2MucmVmcmVzaFRva2VuUGFyc2VkICYmIGtjLnJlZnJlc2hUb2tlblBhcnNlZC5ub25jZSAhPSBvYXV0aC5zdG9yZWROb25jZSkgfHxcbiAgICAgICAgICAgICAgICAoa2MuaWRUb2tlblBhcnNlZCAmJiBrYy5pZFRva2VuUGFyc2VkLm5vbmNlICE9IG9hdXRoLnN0b3JlZE5vbmNlKSkpIHtcblxuICAgICAgICAgICAgICAgIGxvZ0luZm8oJ1tLRVlDTE9BS10gSW52YWxpZCBub25jZSwgY2xlYXJpbmcgdG9rZW4nKTtcbiAgICAgICAgICAgICAgICBrYy5jbGVhclRva2VuKCk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJiBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChmdWxmaWxsUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhTdWNjZXNzICYmIGtjLm9uQXV0aFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSAmJiBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRDb25maWcodXJsKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuICAgICAgICB2YXIgY29uZmlnVXJsO1xuXG4gICAgICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWdVcmwgPSAna2V5Y2xvYWsuanNvbic7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbmZpZ1VybCA9IGNvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwT2lkY0VuZG9pbnRzKG9pZGNDb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoISBvaWRjQ29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGtjLmVuZHBvaW50cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC9hdXRoJztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlYWxtVXJsKCkgKyAnL3Byb3RvY29sL29wZW5pZC1jb25uZWN0L3Rva2VuJztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC9sb2dvdXQnO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGVja1Nlc3Npb25JZnJhbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9IGdldFJlYWxtVXJsKCkgKyAnL3Byb3RvY29sL29wZW5pZC1jb25uZWN0L2xvZ2luLXN0YXR1cy1pZnJhbWUuaHRtbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2MuaWZyYW1lVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA9IHNyYyArICc/dmVyc2lvbj0nICsga2MuaWZyYW1lVmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXJkUGFydHlDb29raWVzSWZyYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmMgPSBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC8zcC1jb29raWVzL3N0ZXAxLmh0bWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtjLmlmcmFtZVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgPSBzcmMgKyAnP3ZlcnNpb249JyArIGtjLmlmcmFtZVZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVhbG1VcmwoKSArICcvcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvcmVnaXN0cmF0aW9ucyc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVzZXJpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC91c2VyaW5mbyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrYy5lbmRwb2ludHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2lkY0NvbmZpZ3VyYXRpb24uYXV0aG9yaXphdGlvbl9lbmRwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9pZGNDb25maWd1cmF0aW9uLnRva2VuX2VuZHBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsb2dvdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvaWRjQ29uZmlndXJhdGlvbi5lbmRfc2Vzc2lvbl9lbmRwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IHN1cHBvcnRlZCBieSB0aGUgT0lEQyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvaWRjQ29uZmlndXJhdGlvbi5lbmRfc2Vzc2lvbl9lbmRwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tTZXNzaW9uSWZyYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2lkY0NvbmZpZ3VyYXRpb24uY2hlY2tfc2Vzc2lvbl9pZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBzdXBwb3J0ZWQgYnkgdGhlIE9JREMgc2VydmVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2lkY0NvbmZpZ3VyYXRpb24uY2hlY2tfc2Vzc2lvbl9pZnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93ICdSZWRpcmVjdGlvbiB0byBcIlJlZ2lzdGVyIHVzZXJcIiBwYWdlIG5vdCBzdXBwb3J0ZWQgaW4gc3RhbmRhcmQgT0lEQyBtb2RlJztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcmluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvaWRjQ29uZmlndXJhdGlvbi51c2VyaW5mb19lbmRwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IHN1cHBvcnRlZCBieSB0aGUgT0lEQyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvaWRjQ29uZmlndXJhdGlvbi51c2VyaW5mb19lbmRwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnVXJsKSB7XG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXEub3BlbignR0VUJywgY29uZmlnVXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCB8fCBmaWxlTG9hZGVkKHJlcSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25maWcgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5hdXRoU2VydmVyVXJsID0gY29uZmlnWydhdXRoLXNlcnZlci11cmwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnJlYWxtID0gY29uZmlnWydyZWFsbSddO1xuICAgICAgICAgICAgICAgICAgICAgICAga2MuY2xpZW50SWQgPSBjb25maWdbJ3Jlc291cmNlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR1cE9pZGNFbmRvaW50cyhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVxLnNlbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghY29uZmlnLmNsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ2NsaWVudElkIG1pc3NpbmcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrYy5jbGllbnRJZCA9IGNvbmZpZy5jbGllbnRJZDtcblxuICAgICAgICAgICAgdmFyIG9pZGNQcm92aWRlciA9IGNvbmZpZ1snb2lkY1Byb3ZpZGVyJ107XG4gICAgICAgICAgICBpZiAoIW9pZGNQcm92aWRlcikge1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnWyd1cmwnXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyaXB0c1tpXS5zcmMubWF0Y2goLy4qa2V5Y2xvYWtcXC5qcy8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnVybCA9IHNjcmlwdHNbaV0uc3JjLnN1YnN0cigwLCBzY3JpcHRzW2ldLnNyYy5pbmRleE9mKCcvanMva2V5Y2xvYWsuanMnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWcucmVhbG0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ3JlYWxtIG1pc3NpbmcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGtjLmF1dGhTZXJ2ZXJVcmwgPSBjb25maWcudXJsO1xuICAgICAgICAgICAgICAgIGtjLnJlYWxtID0gY29uZmlnLnJlYWxtO1xuICAgICAgICAgICAgICAgIHNldHVwT2lkY0VuZG9pbnRzKG51bGwpO1xuICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9pZGNQcm92aWRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9pZGNQcm92aWRlckNvbmZpZ1VybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9pZGNQcm92aWRlci5jaGFyQXQob2lkY1Byb3ZpZGVyLmxlbmd0aCAtIDEpID09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2lkY1Byb3ZpZGVyQ29uZmlnVXJsID0gb2lkY1Byb3ZpZGVyICsgJy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9pZGNQcm92aWRlckNvbmZpZ1VybCA9IG9pZGNQcm92aWRlciArICcvLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIG9pZGNQcm92aWRlckNvbmZpZ1VybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCB8fCBmaWxlTG9hZGVkKHJlcSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9pZGNQcm92aWRlckNvbmZpZyA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwT2lkY0VuZG9pbnRzKG9pZGNQcm92aWRlckNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXR1cE9pZGNFbmRvaW50cyhvaWRjUHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbGVMb2FkZWQoeGhyKSB7XG4gICAgICAgIHJldHVybiB4aHIuc3RhdHVzID09IDAgJiYgeGhyLnJlc3BvbnNlVGV4dCAmJiB4aHIucmVzcG9uc2VVUkwuc3RhcnRzV2l0aCgnZmlsZTonKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUb2tlbih0b2tlbiwgcmVmcmVzaFRva2VuLCBpZFRva2VuLCB0aW1lTG9jYWwpIHtcbiAgICAgICAgaWYgKGtjLnRva2VuVGltZW91dEhhbmRsZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGtjLnRva2VuVGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICBrYy50b2tlblRpbWVvdXRIYW5kbGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAga2MucmVmcmVzaFRva2VuID0gcmVmcmVzaFRva2VuO1xuICAgICAgICAgICAga2MucmVmcmVzaFRva2VuUGFyc2VkID0gZGVjb2RlVG9rZW4ocmVmcmVzaFRva2VuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy5yZWZyZXNoVG9rZW47XG4gICAgICAgICAgICBkZWxldGUga2MucmVmcmVzaFRva2VuUGFyc2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlkVG9rZW4pIHtcbiAgICAgICAgICAgIGtjLmlkVG9rZW4gPSBpZFRva2VuO1xuICAgICAgICAgICAga2MuaWRUb2tlblBhcnNlZCA9IGRlY29kZVRva2VuKGlkVG9rZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIGtjLmlkVG9rZW47XG4gICAgICAgICAgICBkZWxldGUga2MuaWRUb2tlblBhcnNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAga2MudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIGtjLnRva2VuUGFyc2VkID0gZGVjb2RlVG9rZW4odG9rZW4pO1xuICAgICAgICAgICAga2Muc2Vzc2lvbklkID0ga2MudG9rZW5QYXJzZWQuc2Vzc2lvbl9zdGF0ZTtcbiAgICAgICAgICAgIGtjLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgICAga2Muc3ViamVjdCA9IGtjLnRva2VuUGFyc2VkLnN1YjtcbiAgICAgICAgICAgIGtjLnJlYWxtQWNjZXNzID0ga2MudG9rZW5QYXJzZWQucmVhbG1fYWNjZXNzO1xuICAgICAgICAgICAga2MucmVzb3VyY2VBY2Nlc3MgPSBrYy50b2tlblBhcnNlZC5yZXNvdXJjZV9hY2Nlc3M7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTG9jYWwpIHtcbiAgICAgICAgICAgICAgICBrYy50aW1lU2tldyA9IE1hdGguZmxvb3IodGltZUxvY2FsIC8gMTAwMCkgLSBrYy50b2tlblBhcnNlZC5pYXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrYy50aW1lU2tldyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBFc3RpbWF0ZWQgdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gYnJvd3NlciBhbmQgc2VydmVyIGlzICcgKyBrYy50aW1lU2tldyArICcgc2Vjb25kcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtjLm9uVG9rZW5FeHBpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHBpcmVzSW4gPSAoa2MudG9rZW5QYXJzZWRbJ2V4cCddIC0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgKyBrYy50aW1lU2tldykgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKCdbS0VZQ0xPQUtdIFRva2VuIGV4cGlyZXMgaW4gJyArIE1hdGgucm91bmQoZXhwaXJlc0luIC8gMTAwMCkgKyAnIHMnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZXNJbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5vblRva2VuRXhwaXJlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2MudG9rZW5UaW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChrYy5vblRva2VuRXhwaXJlZCwgZXhwaXJlc0luKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy50b2tlbjtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy50b2tlblBhcnNlZDtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy5zdWJqZWN0O1xuICAgICAgICAgICAgZGVsZXRlIGtjLnJlYWxtQWNjZXNzO1xuICAgICAgICAgICAgZGVsZXRlIGtjLnJlc291cmNlQWNjZXNzO1xuXG4gICAgICAgICAgICBrYy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNvZGVUb2tlbihzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyLnNwbGl0KCcuJylbMV07XG5cbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICAgICAgc3dpdGNoIChzdHIubGVuZ3RoICUgNCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHN0ciArPSAnPT0nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHN0ciArPSAnPSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIHRva2VuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoYXRvYihzdHIpKSk7XG5cbiAgICAgICAgc3RyID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVVSUQoKSB7XG4gICAgICAgIHZhciBoZXhEaWdpdHMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG4gICAgICAgIHZhciBzID0gZ2VuZXJhdGVSYW5kb21TdHJpbmcoMzYsIGhleERpZ2l0cykuc3BsaXQoXCJcIik7XG4gICAgICAgIHNbMTRdID0gJzQnO1xuICAgICAgICBzWzE5XSA9IGhleERpZ2l0cy5zdWJzdHIoKHNbMTldICYgMHgzKSB8IDB4OCwgMSk7XG4gICAgICAgIHNbOF0gPSBzWzEzXSA9IHNbMThdID0gc1syM10gPSAnLSc7XG4gICAgICAgIHZhciB1dWlkID0gcy5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VDYWxsYmFjayh1cmwpIHtcbiAgICAgICAgdmFyIG9hdXRoID0gcGFyc2VDYWxsYmFja1VybCh1cmwpO1xuICAgICAgICBpZiAoIW9hdXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2F1dGhTdGF0ZSA9IGNhbGxiYWNrU3RvcmFnZS5nZXQob2F1dGguc3RhdGUpO1xuXG4gICAgICAgIGlmIChvYXV0aFN0YXRlKSB7XG4gICAgICAgICAgICBvYXV0aC52YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBvYXV0aC5yZWRpcmVjdFVyaSA9IG9hdXRoU3RhdGUucmVkaXJlY3RVcmk7XG4gICAgICAgICAgICBvYXV0aC5zdG9yZWROb25jZSA9IG9hdXRoU3RhdGUubm9uY2U7XG4gICAgICAgICAgICBvYXV0aC5wcm9tcHQgPSBvYXV0aFN0YXRlLnByb21wdDtcbiAgICAgICAgICAgIG9hdXRoLnBrY2VDb2RlVmVyaWZpZXIgPSBvYXV0aFN0YXRlLnBrY2VDb2RlVmVyaWZpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2F1dGg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VDYWxsYmFja1VybCh1cmwpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRlZFBhcmFtcztcbiAgICAgICAgc3dpdGNoIChrYy5mbG93KSB7XG4gICAgICAgICAgICBjYXNlICdzdGFuZGFyZCc6XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkUGFyYW1zID0gWydjb2RlJywgJ3N0YXRlJywgJ3Nlc3Npb25fc3RhdGUnLCAna2NfYWN0aW9uX3N0YXR1cyddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW1wbGljaXQnOlxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZFBhcmFtcyA9IFsnYWNjZXNzX3Rva2VuJywgJ3Rva2VuX3R5cGUnLCAnaWRfdG9rZW4nLCAnc3RhdGUnLCAnc2Vzc2lvbl9zdGF0ZScsICdleHBpcmVzX2luJywgJ2tjX2FjdGlvbl9zdGF0dXMnXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2h5YnJpZCc6XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkUGFyYW1zID0gWydhY2Nlc3NfdG9rZW4nLCAndG9rZW5fdHlwZScsICdpZF90b2tlbicsICdjb2RlJywgJ3N0YXRlJywgJ3Nlc3Npb25fc3RhdGUnLCAnZXhwaXJlc19pbicsICdrY19hY3Rpb25fc3RhdHVzJ107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBwb3J0ZWRQYXJhbXMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgc3VwcG9ydGVkUGFyYW1zLnB1c2goJ2Vycm9yX2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHN1cHBvcnRlZFBhcmFtcy5wdXNoKCdlcnJvcl91cmknKTtcblxuICAgICAgICB2YXIgcXVlcnlJbmRleCA9IHVybC5pbmRleE9mKCc/Jyk7XG4gICAgICAgIHZhciBmcmFnbWVudEluZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcblxuICAgICAgICB2YXIgbmV3VXJsO1xuICAgICAgICB2YXIgcGFyc2VkO1xuXG4gICAgICAgIGlmIChrYy5yZXNwb25zZU1vZGUgPT09ICdxdWVyeScgJiYgcXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG5ld1VybCA9IHVybC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCk7XG4gICAgICAgICAgICBwYXJzZWQgPSBwYXJzZUNhbGxiYWNrUGFyYW1zKHVybC5zdWJzdHJpbmcocXVlcnlJbmRleCArIDEsIGZyYWdtZW50SW5kZXggIT09IC0xID8gZnJhZ21lbnRJbmRleCA6IHVybC5sZW5ndGgpLCBzdXBwb3J0ZWRQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXJhbXNTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbmV3VXJsICs9ICc/JyArIHBhcnNlZC5wYXJhbXNTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnJhZ21lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBuZXdVcmwgKz0gdXJsLnN1YnN0cmluZyhmcmFnbWVudEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrYy5yZXNwb25zZU1vZGUgPT09ICdmcmFnbWVudCcgJiYgZnJhZ21lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG5ld1VybCA9IHVybC5zdWJzdHJpbmcoMCwgZnJhZ21lbnRJbmRleCk7XG4gICAgICAgICAgICBwYXJzZWQgPSBwYXJzZUNhbGxiYWNrUGFyYW1zKHVybC5zdWJzdHJpbmcoZnJhZ21lbnRJbmRleCArIDEpLCBzdXBwb3J0ZWRQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXJhbXNTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbmV3VXJsICs9ICcjJyArIHBhcnNlZC5wYXJhbXNTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkICYmIHBhcnNlZC5vYXV0aFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKGtjLmZsb3cgPT09ICdzdGFuZGFyZCcgfHwga2MuZmxvdyA9PT0gJ2h5YnJpZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHBhcnNlZC5vYXV0aFBhcmFtcy5jb2RlIHx8IHBhcnNlZC5vYXV0aFBhcmFtcy5lcnJvcikgJiYgcGFyc2VkLm9hdXRoUGFyYW1zLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5vYXV0aFBhcmFtcy5uZXdVcmwgPSBuZXdVcmw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQub2F1dGhQYXJhbXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrYy5mbG93ID09PSAnaW1wbGljaXQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKChwYXJzZWQub2F1dGhQYXJhbXMuYWNjZXNzX3Rva2VuIHx8IHBhcnNlZC5vYXV0aFBhcmFtcy5lcnJvcikgJiYgcGFyc2VkLm9hdXRoUGFyYW1zLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5vYXV0aFBhcmFtcy5uZXdVcmwgPSBuZXdVcmw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQub2F1dGhQYXJhbXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VDYWxsYmFja1BhcmFtcyhwYXJhbXNTdHJpbmcsIHN1cHBvcnRlZFBhcmFtcykge1xuICAgICAgICB2YXIgcCA9IHBhcmFtc1N0cmluZy5zcGxpdCgnJicpO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgcGFyYW1zU3RyaW5nOiAnJyxcbiAgICAgICAgICAgIG9hdXRoUGFyYW1zOiB7fVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzcGxpdCA9IHBbaV0uaW5kZXhPZihcIj1cIik7XG4gICAgICAgICAgICB2YXIga2V5ID0gcFtpXS5zbGljZSgwLCBzcGxpdCk7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkUGFyYW1zLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQub2F1dGhQYXJhbXNba2V5XSA9IHBbaV0uc2xpY2Uoc3BsaXQgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5wYXJhbXNTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wYXJhbXNTdHJpbmcgKz0gJyYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucGFyYW1zU3RyaW5nICs9IHBbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9taXNlKCkge1xuICAgICAgICAvLyBOZWVkIHRvIGNyZWF0ZSBhIG5hdGl2ZSBQcm9taXNlIHdoaWNoIGFsc28gcHJlc2VydmVzIHRoZVxuICAgICAgICAvLyBpbnRlcmZhY2Ugb2YgdGhlIGN1c3RvbSBwcm9taXNlIHR5cGUgcHJldmlvdXNseSB1c2VkIGJ5IHRoZSBBUElcbiAgICAgICAgdmFyIHAgPSB7XG4gICAgICAgICAgICBzZXRTdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBwLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldEVycm9yOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBwLnJlamVjdChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHAucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBwLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcC5wcm9taXNlLnN1Y2Nlc3MgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgbG9nUHJvbWlzZURlcHJlY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMudGhlbihmdW5jdGlvbiBoYW5kbGVTdWNjZXNzKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHAucHJvbWlzZS5lcnJvciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBsb2dQcm9taXNlRGVwcmVjYXRpb24oKTtcblxuICAgICAgICAgICAgdGhpcy5jYXRjaChmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBleHRlbmQgZXhpc3RpbmcgbmF0aXZlIFByb21pc2Ugd2l0aCB0aW1lb3V0XG4gICAgZnVuY3Rpb24gYXBwbHlUaW1lb3V0VG9Qcm9taXNlKHByb21pc2UsIHRpbWVvdXQsIGVycm9yTWVzc2FnZSkge1xuICAgICAgICB2YXIgdGltZW91dEhhbmRsZSA9IG51bGw7XG4gICAgICAgIHZhciB0aW1lb3V0UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoeyBcImVycm9yXCI6IGVycm9yTWVzc2FnZSB8fCBcIlByb21pc2UgaXMgbm90IHNldHRsZWQgd2l0aGluIHRpbWVvdXQgb2YgXCIgKyB0aW1lb3V0ICsgXCJtc1wiIH0pO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJhY2UoW3Byb21pc2UsIHRpbWVvdXRQcm9taXNlXSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwQ2hlY2tMb2dpbklmcmFtZSgpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgaWYgKCFsb2dpbklmcmFtZS5lbmFibGUpIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2dpbklmcmFtZS5pZnJhbWUpIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgbG9naW5JZnJhbWUuaWZyYW1lID0gaWZyYW1lO1xuXG4gICAgICAgIGlmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhdXRoVXJsID0ga2MuZW5kcG9pbnRzLmF1dGhvcml6ZSgpO1xuICAgICAgICAgICAgaWYgKGF1dGhVcmwuY2hhckF0KDApID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICBsb2dpbklmcmFtZS5pZnJhbWVPcmlnaW4gPSBnZXRPcmlnaW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9naW5JZnJhbWUuaWZyYW1lT3JpZ2luID0gYXV0aFVybC5zdWJzdHJpbmcoMCwgYXV0aFVybC5pbmRleE9mKCcvJywgOCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNyYyA9IGtjLmVuZHBvaW50cy5jaGVja1Nlc3Npb25JZnJhbWUoKTtcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjICk7XG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ2tleWNsb2FrLXNlc3Npb24taWZyYW1lJyApO1xuICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgICAgIHZhciBtZXNzYWdlQ2FsbGJhY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKChldmVudC5vcmlnaW4gIT09IGxvZ2luSWZyYW1lLmlmcmFtZU9yaWdpbikgfHwgKGxvZ2luSWZyYW1lLmlmcmFtZS5jb250ZW50V2luZG93ICE9PSBldmVudC5zb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShldmVudC5kYXRhID09ICd1bmNoYW5nZWQnIHx8IGV2ZW50LmRhdGEgPT0gJ2NoYW5nZWQnIHx8IGV2ZW50LmRhdGEgPT0gJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgIT0gJ3VuY2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgICBrYy5jbGVhclRva2VuKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBsb2dpbklmcmFtZS5jYWxsYmFja0xpc3Quc3BsaWNlKDAsIGxvZ2luSWZyYW1lLmNhbGxiYWNrTGlzdC5sZW5ndGgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gY2FsbGJhY2tzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjYWxsYmFja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKGV2ZW50LmRhdGEgPT0gJ3VuY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lc3NhZ2VDYWxsYmFjaywgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NoZWR1bGVDaGVja0lmcmFtZSgpIHtcbiAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmVuYWJsZSkge1xuICAgICAgICAgICAgaWYgKGtjLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMb2dpbklmcmFtZSgpLnRoZW4oZnVuY3Rpb24odW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVDaGVja0lmcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBsb2dpbklmcmFtZS5pbnRlcnZhbCAqIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tMb2dpbklmcmFtZSgpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmlmcmFtZSAmJiBsb2dpbklmcmFtZS5pZnJhbWVPcmlnaW4gKSB7XG4gICAgICAgICAgICB2YXIgbXNnID0ga2MuY2xpZW50SWQgKyAnICcgKyAoa2Muc2Vzc2lvbklkID8ga2Muc2Vzc2lvbklkIDogJycpO1xuICAgICAgICAgICAgbG9naW5JZnJhbWUuY2FsbGJhY2tMaXN0LnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gbG9naW5JZnJhbWUuaWZyYW1lT3JpZ2luO1xuICAgICAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmNhbGxiYWNrTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIGxvZ2luSWZyYW1lLmlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG1zZywgb3JpZ2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVjazNwQ29va2llc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmVuYWJsZSB8fCBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBrYy5lbmRwb2ludHMudGhpcmRQYXJ0eUNvb2tpZXNJZnJhbWUoKSk7XG4gICAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCd0aXRsZScsICdrZXljbG9hay0zcC1jaGVjay1pZnJhbWUnICk7XG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblxuICAgICAgICAgICAgdmFyIG1lc3NhZ2VDYWxsYmFjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGlmcmFtZS5jb250ZW50V2luZG93ICE9PSBldmVudC5zb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhICE9PSBcInN1cHBvcnRlZFwiICYmIGV2ZW50LmRhdGEgIT09IFwidW5zdXBwb3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5kYXRhID09PSBcInVuc3VwcG9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9naW5JZnJhbWUuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrYy5zaWxlbnRDaGVja1Nzb0ZhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9nV2FybihcIltLRVlDTE9BS10gM3JkIHBhcnR5IGNvb2tpZXMgYXJlbid0IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuIGNoZWNrTG9naW5JZnJhbWUgYW5kIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2lsZW50IGNoZWNrLXNzbyBhcmUgbm90IGF2YWlsYWJsZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBtZXNzYWdlQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwcGx5VGltZW91dFRvUHJvbWlzZShwcm9taXNlLnByb21pc2UsIGtjLm1lc3NhZ2VSZWNlaXZlVGltZW91dCwgXCJUaW1lb3V0IHdoZW4gd2FpdGluZyBmb3IgM3JkIHBhcnR5IGNoZWNrIGlmcmFtZSBtZXNzYWdlLlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQWRhcHRlcih0eXBlKSB7XG4gICAgICAgIGlmICghdHlwZSB8fCB0eXBlID09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2dpbjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShrYy5jcmVhdGVMb2dpblVybChvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9taXNlKCkucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGtjLmNyZWF0ZUxvZ291dFVybChvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9taXNlKCkucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoa2MuY3JlYXRlUmVnaXN0ZXJVcmwob3B0aW9ucykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUHJvbWlzZSgpLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGFjY291bnRNYW5hZ2VtZW50IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2NvdW50VXJsID0ga2MuY3JlYXRlQWNjb3VudFVybCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjY291bnRVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjY291bnRVcmw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBzdXBwb3J0ZWQgYnkgdGhlIE9JREMgc2VydmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb21pc2UoKS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZWRpcmVjdFVyaTogZnVuY3Rpb24ob3B0aW9ucywgZW5jb2RlSGFzaCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnJlZGlyZWN0VXJpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtjLnJlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2MucmVkaXJlY3RVcmk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PSAnY29yZG92YScpIHtcbiAgICAgICAgICAgIGxvZ2luSWZyYW1lLmVuYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGNvcmRvdmFPcGVuV2luZG93V3JhcHBlciA9IGZ1bmN0aW9uKGxvZ2luVXJsLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEuSW5BcHBCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBpbmFwcGJyb3dzZXIgZm9yIElPUyBhbmQgQW5kcm9pZCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb3Jkb3ZhLkluQXBwQnJvd3Nlci5vcGVuKGxvZ2luVXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cub3Blbihsb2dpblVybCwgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgc2hhbGxvd0Nsb25lQ29yZG92YU9wdGlvbnMgPSBmdW5jdGlvbiAodXNlck9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMuY29yZG92YU9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHVzZXJPcHRpb25zLmNvcmRvdmFPcHRpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uTmFtZV0gPSB1c2VyT3B0aW9ucy5jb3Jkb3ZhT3B0aW9uc1tvcHRpb25OYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBmb3JtYXRDb3Jkb3ZhT3B0aW9ucyA9IGZ1bmN0aW9uIChjb3Jkb3ZhT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjb3Jkb3ZhT3B0aW9ucykucmVkdWNlKGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChvcHRpb25OYW1lK1wiPVwiK2NvcmRvdmFPcHRpb25zW29wdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oXCIsXCIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNyZWF0ZUNvcmRvdmFPcHRpb25zID0gZnVuY3Rpb24gKHVzZXJPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcmRvdmFPcHRpb25zID0gc2hhbGxvd0Nsb25lQ29yZG92YU9wdGlvbnModXNlck9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNvcmRvdmFPcHRpb25zLmxvY2F0aW9uID0gJ25vJztcbiAgICAgICAgICAgICAgICBpZiAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMucHJvbXB0ID09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBjb3Jkb3ZhT3B0aW9ucy5oaWRkZW4gPSAneWVzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdENvcmRvdmFPcHRpb25zKGNvcmRvdmFPcHRpb25zKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9naW46IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvcmRvdmFPcHRpb25zID0gY3JlYXRlQ29yZG92YU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpblVybCA9IGtjLmNyZWF0ZUxvZ2luVXJsKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gY29yZG92YU9wZW5XaW5kb3dXcmFwcGVyKGxvZ2luVXJsLCAnX2JsYW5rJywgY29yZG92YU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VCcm93c2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YoJ2h0dHA6Ly9sb2NhbGhvc3QnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcGFyc2VDYWxsYmFjayhldmVudC51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VCcm93c2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlcnJvcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignaHR0cDovL2xvY2FsaG9zdCcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcGFyc2VDYWxsYmFjayhldmVudC51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ2FsbGJhY2soY2FsbGJhY2ssIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJyb3dzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnJvd3NlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2V4aXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uOiBcImNsb3NlZF9ieV91c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dvdXRVcmwgPSBrYy5jcmVhdGVMb2dvdXRVcmwob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWYgPSBjb3Jkb3ZhT3BlbldpbmRvd1dyYXBwZXIobG9nb3V0VXJsLCAnX2JsYW5rJywgJ2xvY2F0aW9uPW5vLGhpZGRlbj15ZXMsY2xlYXJjYWNoZT15ZXMnKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3I7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YoJ2h0dHA6Ly9sb2NhbGhvc3QnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2FkZXJyb3InLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKCdodHRwOi8vbG9jYWxob3N0JykgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdleGl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2MuY2xlYXJUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZWdpc3RlciA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWdpc3RlclVybCA9IGtjLmNyZWF0ZVJlZ2lzdGVyVXJsKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3Jkb3ZhT3B0aW9ucyA9IGNyZWF0ZUNvcmRvdmFPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gY29yZG92YU9wZW5XaW5kb3dXcmFwcGVyKHJlZ2lzdGVyVXJsLCAnX2JsYW5rJywgY29yZG92YU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignaHR0cDovL2xvY2FsaG9zdCcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2F1dGggPSBwYXJzZUNhbGxiYWNrKGV2ZW50LnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKG9hdXRoLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGFjY291bnRNYW5hZ2VtZW50IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2NvdW50VXJsID0ga2MuY3JlYXRlQWNjb3VudFVybCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjY291bnRVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gY29yZG92YU9wZW5XaW5kb3dXcmFwcGVyKGFjY291bnRVcmwsICdfYmxhbmsnLCAnbG9jYXRpb249bm8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignaHR0cDovL2xvY2FsaG9zdCcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBzdXBwb3J0ZWQgYnkgdGhlIE9JREMgc2VydmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdodHRwOi8vbG9jYWxob3N0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PSAnY29yZG92YS1uYXRpdmUnKSB7XG4gICAgICAgICAgICBsb2dpbklmcmFtZS5lbmFibGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2dpbjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ2luVXJsID0ga2MuY3JlYXRlTG9naW5Vcmwob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsTGlua3Muc3Vic2NyaWJlKCdrZXljbG9haycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxMaW5rcy51bnN1YnNjcmliZSgna2V5Y2xvYWsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9hdXRoID0gcGFyc2VDYWxsYmFjayhldmVudC51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKG9hdXRoLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLm9wZW5VcmwobG9naW5VcmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBsb2dvdXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dvdXRVcmwgPSBrYy5jcmVhdGVMb2dvdXRVcmwob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsTGlua3Muc3Vic2NyaWJlKCdrZXljbG9haycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxMaW5rcy51bnN1YnNjcmliZSgna2V5Y2xvYWsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2MuY2xlYXJUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5vcGVuVXJsKGxvZ291dFVybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyIDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2lzdGVyVXJsID0ga2MuY3JlYXRlUmVnaXN0ZXJVcmwob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbExpbmtzLnN1YnNjcmliZSgna2V5Y2xvYWsnICwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbExpbmtzLnVuc3Vic2NyaWJlKCdrZXljbG9haycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2F1dGggPSBwYXJzZUNhbGxiYWNrKGV2ZW50LnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ2FsbGJhY2sob2F1dGgsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLm9wZW5VcmwocmVnaXN0ZXJVcmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGFjY291bnRNYW5hZ2VtZW50IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2NvdW50VXJsID0ga2MuY3JlYXRlQWNjb3VudFVybCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjY291bnRVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIub3BlblVybChhY2NvdW50VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IHN1cHBvcnRlZCBieSB0aGUgT0lEQyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZWRpcmVjdFVyaTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5yZWRpcmVjdFVyaTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrYy5yZWRpcmVjdFVyaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtjLnJlZGlyZWN0VXJpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaHR0cDovL2xvY2FsaG9zdFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgJ2ludmFsaWQgYWRhcHRlciB0eXBlOiAnICsgdHlwZTtcbiAgICB9XG5cbiAgICB2YXIgTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMb2NhbFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tjLXRlc3QnLCAndGVzdCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgna2MtdGVzdCcpO1xuXG4gICAgICAgIHZhciBjcyA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJFeHBpcmVkKCkge1xuICAgICAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSAge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkgJiYga2V5LmluZGV4T2YoJ2tjLWNhbGxiYWNrLScpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHBpcmVzID0gSlNPTi5wYXJzZSh2YWx1ZSkuZXhwaXJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cGlyZXMgfHwgZXhwaXJlcyA8IHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3MuZ2V0ID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSAna2MtY2FsbGJhY2stJyArIHN0YXRlO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYXJFeHBpcmVkKCk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgY3MuYWRkID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgIGNsZWFyRXhwaXJlZCgpO1xuXG4gICAgICAgICAgICB2YXIga2V5ID0gJ2tjLWNhbGxiYWNrLScgKyBzdGF0ZS5zdGF0ZTtcbiAgICAgICAgICAgIHN0YXRlLmV4cGlyZXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICg2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBDb29raWVTdG9yYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb29raWVTdG9yYWdlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb29raWVTdG9yYWdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3MgPSB0aGlzO1xuXG4gICAgICAgIGNzLmdldCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBnZXRDb29raWUoJ2tjLWNhbGxiYWNrLScgKyBzdGF0ZSk7XG4gICAgICAgICAgICBzZXRDb29raWUoJ2tjLWNhbGxiYWNrLScgKyBzdGF0ZSwgJycsIGNvb2tpZUV4cGlyYXRpb24oLTEwMCkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNzLmFkZCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgICBzZXRDb29raWUoJ2tjLWNhbGxiYWNrLScgKyBzdGF0ZS5zdGF0ZSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpLCBjb29raWVFeHBpcmF0aW9uKDYwKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY3MucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgc2V0Q29va2llKGtleSwgJycsIGNvb2tpZUV4cGlyYXRpb24oLTEwMCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjb29raWVFeHBpcmF0aW9uID0gZnVuY3Rpb24gKG1pbnV0ZXMpIHtcbiAgICAgICAgICAgIHZhciBleHAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZXhwLnNldFRpbWUoZXhwLmdldFRpbWUoKSArIChtaW51dGVzKjYwKjEwMDApKTtcbiAgICAgICAgICAgIHJldHVybiBleHA7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdldENvb2tpZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0ga2V5ICsgJz0nO1xuICAgICAgICAgICAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc2V0Q29va2llID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGV4cGlyYXRpb25EYXRlKSB7XG4gICAgICAgICAgICB2YXIgY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyAnOyAnXG4gICAgICAgICAgICAgICAgKyAnZXhwaXJlcz0nICsgZXhwaXJhdGlvbkRhdGUudG9VVENTdHJpbmcoKSArICc7ICc7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWU7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrU3RvcmFnZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDb29raWVTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrYy5lbmFibGVMb2dnaW5nKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgeyBLZXljbG9hayBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==