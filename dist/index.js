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
var OpenSceneNotes_1 = __webpack_require__(/*! ./src/OpenSceneNotes */ "./src/OpenSceneNotes.ts");
var OgSettings_1 = __webpack_require__(/*! ./src/OgSettings */ "./src/OgSettings.ts");
var modules = [
    new ActivateScene_1.ActivateScene(),
    new OpenSceneNotes_1.OpenSceneNotes(),
    new server_push_1.ServerPush(),
    OgSettings_1.globalSettings,
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
var openJournalEntry_1 = __webpack_require__(/*! ./openJournalEntry */ "./src/openJournalEntry.ts");
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
        var currentSceneJournal, targetScene;
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
                    (0, openJournalEntry_1.openJournalEntry)(targetScene.journal);
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
exports.globalSettings = exports.GlobalSettings = exports.OgSetting = exports.namespace = void 0;
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
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
        this.accessDeniedSilentlyFails = new OgSetting('accessDeniedSilentlyFails', true, {
            name: 'Fail silently?',
            hint: "If enabled, warnings will be displayed in the UI when the user cannot open scene notes or other elements.\n        This is mainly used by the extensions. \n        The warnings will still be displayed in the console. \n        If you have no clue what this is, chances are you should not worry about it.",
            type: Boolean,
        });
    }
    GlobalSettings.prototype.init = function () {
        this.accessDeniedSilentlyFails.init();
    };
    GlobalSettings.prototype.ready = function () { };
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
exports.globalSettings = new GlobalSettings();


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
var openJournalEntry_1 = __webpack_require__(/*! ./openJournalEntry */ "./src/openJournalEntry.ts");
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
    (0, openJournalEntry_1.openJournalEntry)(currentSceneJournal);
}
exports.openSceneNotes = openSceneNotes;


/***/ }),

/***/ "./src/openJournalEntry.ts":
/*!*********************************!*\
  !*** ./src/openJournalEntry.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.openJournalEntry = void 0;
var OgSettings_1 = __webpack_require__(/*! ./OgSettings */ "./src/OgSettings.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
function openJournalEntry(journal) {
    if (journal && journal.sheet) {
        if (!journal.testUserPermission(game.user, 'LIMITED')) {
            var message = "You do not have permission to view this ".concat(journal.documentName, " journal entry.");
            (0, utils_1.logWarn)(message);
            if (OgSettings_1.globalSettings.accessDeniedSilentlyFails.value) {
                return;
            }
            return ui.notifications.warn(message);
        }
        journal.sheet.render(true);
    }
}
exports.openJournalEntry = openJournalEntry;


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
                        (0, utils_1.addGameExtensions)('flow', {
                            createAndShowTemporaryJournalEntry: this.createAndShowTemporaryJournalEntry,
                        });
                        connection.on('pong', function () {
                            (0, utils_1.logText)('pong');
                        });
                        // connection.on('createShowAndDeleteNewJournalEntry', this.createShowAndDeleteNewJournalEntry);
                        // connection.on('createAndShowTemporaryJournalEntry', this.createAndShowTemporaryJournalEntry);
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
                        }, { temporary: true, renderSheet: true })];
                    case 1:
                        entry = _b.sent();
                        if (!entry) {
                            (0, utils_1.logError)('No entry was created.');
                            return [2 /*return*/];
                        }
                        (0, utils_1.logText)("Journal entry '".concat(options.name, "' created."), entry);
                        return [4 /*yield*/, ((_a = entry.sheet) === null || _a === void 0 ? void 0 : _a.render(true))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // async createShowAndDeleteNewJournalEntry(options: ICreateShowAndDeleteNewJournalEntry): Promise<void> {
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
    //     // V10 multi-page syntax
    //     // JournalEntry.create({name: "Journal name", pages:[{type: "text", name: "Quest hook", text:{content: `HTML content here`}}]})
    // }
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
exports.addGameExtensions = exports.logError = exports.logWarn = exports.logText = void 0;
function logText() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.debug.apply(console, __spreadArray(['og-experiments |'], data, false));
}
exports.logText = logText;
function logWarn() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.warn.apply(console, __spreadArray(['og-experiments |'], data, false));
}
exports.logWarn = logWarn;
function logError() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.error.apply(console, __spreadArray(['og-experiments |'], data, false));
}
exports.logError = logError;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZ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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpRUFBaUUsV0FBVztBQUM1RTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRSxXQUFXO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVGQUF1RjtB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RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0I7Ozs7Ozs7VUN6c0QvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9BYm9ydENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0RlZmF1bHRIdHRwQ2xpZW50LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9EZWZhdWx0UmVjb25uZWN0UG9saWN5LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0ZldGNoSHR0cENsaWVudC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSGFuZHNoYWtlUHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0hlYWRlck5hbWVzLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9IdHRwQ2xpZW50LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9IdHRwQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSHViQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSHViQ29ubmVjdGlvbkJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL0lIdWJQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSVRyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vSnNvbkh1YlByb3RvY29sLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9Mb2dnZXJzLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9Mb25nUG9sbGluZ1RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vU3ViamVjdC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L3NpZ25hbHIvZGlzdC9lc20vVGV4dE1lc3NhZ2VGb3JtYXQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL1V0aWxzLmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvc2lnbmFsci9kaXN0L2VzbS9XZWJTb2NrZXRUcmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL1hockh0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9zaWduYWxyL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL25vZGVfbW9kdWxlcy9qcy1zaGEyNTYvc3JjL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL2luZGV4LnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL0FjdGl2YXRlU2NlbmUudHMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvLi9zcmMvT2dTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9PcGVuU2NlbmVOb3Rlcy50cyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy8uL3NyYy9vcGVuSm91cm5hbEVudHJ5LnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL3NlcnZlci1wdXNoLnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzLy4vbm9kZV9tb2R1bGVzL2tleWNsb2FrLWpzL2Rpc3Qva2V5Y2xvYWsubWpzIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29nLWV4cGVyaW1lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZy1leHBlcmltZW50cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2ctZXhwZXJpbWVudHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gUm91Z2ggcG9seWZpbGwgb2YgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Fib3J0Q29udHJvbGxlclxyXG4vLyBXZSBkb24ndCBhY3R1YWxseSBldmVyIHVzZSB0aGUgQVBJIGJlaW5nIHBvbHlmaWxsZWQsIHdlIGFsd2F5cyB1c2UgdGhlIHBvbHlmaWxsIGJlY2F1c2VcclxuLy8gaXQncyBhIHZlcnkgbmV3IEFQSSByaWdodCBub3cuXHJcbi8vIE5vdCBleHBvcnRlZCBmcm9tIGluZGV4LlxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIEFib3J0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9pc0Fib3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uYWJvcnQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgYWJvcnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Fib3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNBYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25hYm9ydCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmFib3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgc2lnbmFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFib3J0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWJvcnRlZDtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BYm9ydENvbnRyb2xsZXIuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBBYm9ydEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7IEZldGNoSHR0cENsaWVudCB9IGZyb20gXCIuL0ZldGNoSHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIi4vSHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7IFhockh0dHBDbGllbnQgfSBmcm9tIFwiLi9YaHJIdHRwQ2xpZW50XCI7XHJcbi8qKiBEZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHR0cENsaWVudH0uICovXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0SHR0cENsaWVudCBleHRlbmRzIEh0dHBDbGllbnQge1xyXG4gICAgLyoqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuRGVmYXVsdEh0dHBDbGllbnR9LCB1c2luZyB0aGUgcHJvdmlkZWQge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5JTG9nZ2VyfSB0byBsb2cgbWVzc2FnZXMuICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZmV0Y2ggIT09IFwidW5kZWZpbmVkXCIgfHwgUGxhdGZvcm0uaXNOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2h0dHBDbGllbnQgPSBuZXcgRmV0Y2hIdHRwQ2xpZW50KGxvZ2dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9odHRwQ2xpZW50ID0gbmV3IFhockh0dHBDbGllbnQobG9nZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVzYWJsZSBIdHRwQ2xpZW50IGZvdW5kLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIHNlbmQocmVxdWVzdCkge1xyXG4gICAgICAgIC8vIENoZWNrIHRoYXQgYWJvcnQgd2FzIG5vdCBzaWduYWxlZCBiZWZvcmUgY2FsbGluZyBzZW5kXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwgJiYgcmVxdWVzdC5hYm9ydFNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWJvcnRFcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gbWV0aG9kIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LnVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gdXJsIGRlZmluZWQuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQuc2VuZChyZXF1ZXN0KTtcclxuICAgIH1cclxuICAgIGdldENvb2tpZVN0cmluZyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cENsaWVudC5nZXRDb29raWVTdHJpbmcodXJsKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWZhdWx0SHR0cENsaWVudC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIDAsIDIsIDEwLCAzMCBzZWNvbmQgZGVsYXlzIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdHMuXHJcbmNvbnN0IERFRkFVTFRfUkVUUllfREVMQVlTX0lOX01JTExJU0VDT05EUyA9IFswLCAyMDAwLCAxMDAwMCwgMzAwMDAsIG51bGxdO1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRSZWNvbm5lY3RQb2xpY3kge1xyXG4gICAgY29uc3RydWN0b3IocmV0cnlEZWxheXMpIHtcclxuICAgICAgICB0aGlzLl9yZXRyeURlbGF5cyA9IHJldHJ5RGVsYXlzICE9PSB1bmRlZmluZWQgPyBbLi4ucmV0cnlEZWxheXMsIG51bGxdIDogREVGQVVMVF9SRVRSWV9ERUxBWVNfSU5fTUlMTElTRUNPTkRTO1xyXG4gICAgfVxyXG4gICAgbmV4dFJldHJ5RGVsYXlJbk1pbGxpc2Vjb25kcyhyZXRyeUNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmV0cnlEZWxheXNbcmV0cnlDb250ZXh0LnByZXZpb3VzUmV0cnlDb3VudF07XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVmYXVsdFJlY29ubmVjdFBvbGljeS5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiBhbiBIVFRQIHJlcXVlc3QgZmFpbHMuICovXHJcbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh0dHBFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yTWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzQ29kZSBUaGUgSFRUUCBzdGF0dXMgY29kZSByZXByZXNlbnRlZCBieSB0aGlzIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcclxuICAgICAgICBjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBzdXBlcihgJHtlcnJvck1lc3NhZ2V9OiBTdGF0dXMgY29kZSAnJHtzdGF0dXNDb2RlfSdgKTtcclxuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiBhIHRpbWVvdXQgZWxhcHNlcy4gKi9cclxuZXhwb3J0IGNsYXNzIFRpbWVvdXRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuVGltZW91dEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JNZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZXJyb3JNZXNzYWdlID0gXCJBIHRpbWVvdXQgb2NjdXJyZWQuXCIpIHtcclxuICAgICAgICBjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiBhbiBhY3Rpb24gaXMgYWJvcnRlZC4gKi9cclxuZXhwb3J0IGNsYXNzIEFib3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQWJvcnRFcnJvcn0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yTWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yTWVzc2FnZSA9IFwiQW4gYWJvcnQgb2NjdXJyZWQuXCIpIHtcclxuICAgICAgICBjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiB0aGUgc2VsZWN0ZWQgdHJhbnNwb3J0IGlzIHVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLiAqL1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFVuc3VwcG9ydGVkVHJhbnNwb3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLlVuc3VwcG9ydGVkVHJhbnNwb3J0RXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqIEBwYXJhbSB7SHR0cFRyYW5zcG9ydFR5cGV9IHRyYW5zcG9ydCBUaGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdHRwVHJhbnNwb3J0VHlwZX0gdGhpcyBlcnJvciBvY2N1cmVkIG9uLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCB0cmFuc3BvcnQpIHtcclxuICAgICAgICBjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9ICdVbnN1cHBvcnRlZFRyYW5zcG9ydEVycm9yJztcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gdGhlIHNlbGVjdGVkIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCBieSB0aGUgYnJvd3Nlci4gKi9cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlZFRyYW5zcG9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5EaXNhYmxlZFRyYW5zcG9ydEVycm9yfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBIGRlc2NyaXB0aXZlIGVycm9yIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0ge0h0dHBUcmFuc3BvcnRUeXBlfSB0cmFuc3BvcnQgVGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHR0cFRyYW5zcG9ydFR5cGV9IHRoaXMgZXJyb3Igb2NjdXJlZCBvbi5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgdHJhbnNwb3J0KSB7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByb3RvID0gbmV3LnRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XHJcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSAnRGlzYWJsZWRUcmFuc3BvcnRFcnJvcic7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLyoqIEVycm9yIHRocm93biB3aGVuIHRoZSBzZWxlY3RlZCB0cmFuc3BvcnQgY2Fubm90IGJlIHN0YXJ0ZWQuICovXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgRmFpbGVkVG9TdGFydFRyYW5zcG9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5GYWlsZWRUb1N0YXJ0VHJhbnNwb3J0RXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqIEBwYXJhbSB7SHR0cFRyYW5zcG9ydFR5cGV9IHRyYW5zcG9ydCBUaGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdHRwVHJhbnNwb3J0VHlwZX0gdGhpcyBlcnJvciBvY2N1cmVkIG9uLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCB0cmFuc3BvcnQpIHtcclxuICAgICAgICBjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9ICdGYWlsZWRUb1N0YXJ0VHJhbnNwb3J0RXJyb3InO1xyXG4gICAgICAgIC8vIFdvcmthcm91bmQgaXNzdWUgaW4gVHlwZXNjcmlwdCBjb21waWxlclxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjUjaXNzdWVjb21tZW50LTI3ODU3MDIwMFxyXG4gICAgICAgIHRoaXMuX19wcm90b19fID0gdHJ1ZVByb3RvO1xyXG4gICAgfVxyXG59XHJcbi8qKiBFcnJvciB0aHJvd24gd2hlbiB0aGUgbmVnb3RpYXRpb24gd2l0aCB0aGUgc2VydmVyIGZhaWxlZCB0byBjb21wbGV0ZS4gKi9cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBGYWlsZWRUb05lZ290aWF0ZVdpdGhTZXJ2ZXJFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuRmFpbGVkVG9OZWdvdGlhdGVXaXRoU2VydmVyRXJyb3J9LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIEEgZGVzY3JpcHRpdmUgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gJ0ZhaWxlZFRvTmVnb3RpYXRlV2l0aFNlcnZlckVycm9yJztcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIGlzc3VlIGluIFR5cGVzY3JpcHQgY29tcGlsZXJcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzOTY1I2lzc3VlY29tbWVudC0yNzg1NzAyMDBcclxuICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHRydWVQcm90bztcclxuICAgIH1cclxufVxyXG4vKiogRXJyb3IgdGhyb3duIHdoZW4gbXVsdGlwbGUgZXJyb3JzIGhhdmUgb2NjdXJlZC4gKi9cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVFcnJvcnMgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogQ29uc3RydWN0cyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkFnZ3JlZ2F0ZUVycm9yc30uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgQSBkZXNjcmlwdGl2ZSBlcnJvciBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIHtFcnJvcltdfSBpbm5lckVycm9ycyBUaGUgY29sbGVjdGlvbiBvZiBlcnJvcnMgdGhpcyBlcnJvciBpcyBhZ2dyZWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgaW5uZXJFcnJvcnMpIHtcclxuICAgICAgICBjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmlubmVyRXJyb3JzID0gaW5uZXJFcnJvcnM7XHJcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBpc3N1ZSBpbiBUeXBlc2NyaXB0IGNvbXBpbGVyXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NSNpc3N1ZWNvbW1lbnQtMjc4NTcwMjAwXHJcbiAgICAgICAgdGhpcy5fX3Byb3RvX18gPSB0cnVlUHJvdG87XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXJyb3JzLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgQWJvcnRFcnJvciwgSHR0cEVycm9yLCBUaW1lb3V0RXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIi4vSHR0cENsaWVudFwiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgUGxhdGZvcm0sIGdldEdsb2JhbFRoaXMgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5leHBvcnQgY2xhc3MgRmV0Y2hIdHRwQ2xpZW50IGV4dGVuZHMgSHR0cENsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICBpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIC8vIEluIG9yZGVyIHRvIGlnbm9yZSB0aGUgZHluYW1pYyByZXF1aXJlIGluIHdlYnBhY2sgYnVpbGRzIHdlIG5lZWQgdG8gZG8gdGhpcyBtYWdpY1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBUUyBkb2Vzbid0IGtub3cgYWJvdXQgdGhlc2UgbmFtZXNcclxuICAgICAgICAgICAgY29uc3QgcmVxdWlyZUZ1bmMgPSB0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyA9PT0gXCJmdW5jdGlvblwiID8gX19ub25fd2VicGFja19yZXF1aXJlX18gOiByZXF1aXJlO1xyXG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZW4ndCBhdXRvbWF0aWNhbGx5IGhhbmRsZWQgaW4gTm9kZSBzbyB3ZSBuZWVkIHRvIGFkZCBhIENvb2tpZUphciB0byBwcmVzZXJ2ZSBjb29raWVzIGFjcm9zcyByZXF1ZXN0c1xyXG4gICAgICAgICAgICB0aGlzLl9qYXIgPSBuZXcgKHJlcXVpcmVGdW5jKFwidG91Z2gtY29va2llXCIpKS5Db29raWVKYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fZmV0Y2hUeXBlID0gcmVxdWlyZUZ1bmMoXCJub2RlLWZldGNoXCIpO1xyXG4gICAgICAgICAgICAvLyBub2RlLWZldGNoIGRvZXNuJ3QgaGF2ZSBhIG5pY2UgQVBJIGZvciBnZXR0aW5nIGFuZCBzZXR0aW5nIGNvb2tpZXNcclxuICAgICAgICAgICAgLy8gZmV0Y2gtY29va2llIHdpbGwgd3JhcCBhIGZldGNoIGltcGxlbWVudGF0aW9uIHdpdGggYSBkZWZhdWx0IENvb2tpZUphciBvciBhIHByb3ZpZGVkIG9uZVxyXG4gICAgICAgICAgICB0aGlzLl9mZXRjaFR5cGUgPSByZXF1aXJlRnVuYyhcImZldGNoLWNvb2tpZVwiKSh0aGlzLl9mZXRjaFR5cGUsIHRoaXMuX2phcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9mZXRjaFR5cGUgPSBmZXRjaC5iaW5kKGdldEdsb2JhbFRoaXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgQWJvcnRDb250cm9sbGVyID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIC8vIEluIG9yZGVyIHRvIGlnbm9yZSB0aGUgZHluYW1pYyByZXF1aXJlIGluIHdlYnBhY2sgYnVpbGRzIHdlIG5lZWQgdG8gZG8gdGhpcyBtYWdpY1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBUUyBkb2Vzbid0IGtub3cgYWJvdXQgdGhlc2UgbmFtZXNcclxuICAgICAgICAgICAgY29uc3QgcmVxdWlyZUZ1bmMgPSB0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyA9PT0gXCJmdW5jdGlvblwiID8gX19ub25fd2VicGFja19yZXF1aXJlX18gOiByZXF1aXJlO1xyXG4gICAgICAgICAgICAvLyBOb2RlIG5lZWRzIEV2ZW50TGlzdGVuZXIgbWV0aG9kcyBvbiBBYm9ydENvbnRyb2xsZXIgd2hpY2ggb3VyIGN1c3RvbSBwb2x5ZmlsbCBkb2Vzbid0IHByb3ZpZGVcclxuICAgICAgICAgICAgdGhpcy5fYWJvcnRDb250cm9sbGVyVHlwZSA9IHJlcXVpcmVGdW5jKFwiYWJvcnQtY29udHJvbGxlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fib3J0Q29udHJvbGxlclR5cGUgPSBBYm9ydENvbnRyb2xsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBhc3luYyBzZW5kKHJlcXVlc3QpIHtcclxuICAgICAgICAvLyBDaGVjayB0aGF0IGFib3J0IHdhcyBub3Qgc2lnbmFsZWQgYmVmb3JlIGNhbGxpbmcgc2VuZFxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsICYmIHJlcXVlc3QuYWJvcnRTaWduYWwuYWJvcnRlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQWJvcnRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1ldGhvZCBkZWZpbmVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LnVybCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB1cmwgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyB0aGlzLl9hYm9ydENvbnRyb2xsZXJUeXBlKCk7XHJcbiAgICAgICAgbGV0IGVycm9yO1xyXG4gICAgICAgIC8vIEhvb2sgb3VyIGFib3J0U2lnbmFsIGludG8gdGhlIGFib3J0IGNvbnRyb2xsZXJcclxuICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0LmFib3J0U2lnbmFsLm9uYWJvcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IEFib3J0RXJyb3IoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYSB0aW1lb3V0IGhhcyBiZWVuIHBhc3NlZCBpbiwgc2V0dXAgYSB0aW1lb3V0IHRvIGNhbGwgYWJvcnRcclxuICAgICAgICAvLyBUeXBlIG5lZWRzIHRvIGJlIGFueSB0byBmaXQgd2luZG93LnNldFRpbWVvdXQgYW5kIE5vZGVKUy5zZXRUaW1lb3V0XHJcbiAgICAgICAgbGV0IHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QudGltZW91dCkge1xyXG4gICAgICAgICAgICBjb25zdCBtc1RpbWVvdXQgPSByZXF1ZXN0LnRpbWVvdXQ7XHJcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBUaW1lb3V0IGZyb20gSFRUUCByZXF1ZXN0LmApO1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgVGltZW91dEVycm9yKCk7XHJcbiAgICAgICAgICAgIH0sIG1zVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2ZldGNoVHlwZShyZXF1ZXN0LnVybCwge1xyXG4gICAgICAgICAgICAgICAgYm9keTogcmVxdWVzdC5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PT0gdHJ1ZSA/IFwiaW5jbHVkZVwiIDogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAuLi5yZXF1ZXN0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXHJcbiAgICAgICAgICAgICAgICBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgYEVycm9yIGZyb20gSFRUUCByZXF1ZXN0LiAke2V9LmApO1xyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuYWJvcnRTaWduYWwub25hYm9ydCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCBkZXNlcmlhbGl6ZUNvbnRlbnQocmVzcG9uc2UsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEh0dHBFcnJvcihlcnJvck1lc3NhZ2UgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRlc2VyaWFsaXplQ29udGVudChyZXNwb25zZSwgcmVxdWVzdC5yZXNwb25zZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBjb250ZW50O1xyXG4gICAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcGF5bG9hZCk7XHJcbiAgICB9XHJcbiAgICBnZXRDb29raWVTdHJpbmcodXJsKSB7XHJcbiAgICAgICAgbGV0IGNvb2tpZXMgPSBcIlwiO1xyXG4gICAgICAgIGlmIChQbGF0Zm9ybS5pc05vZGUgJiYgdGhpcy5famFyKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHVudXNlZCB2YXJpYWJsZVxyXG4gICAgICAgICAgICB0aGlzLl9qYXIuZ2V0Q29va2llcyh1cmwsIChlLCBjKSA9PiBjb29raWVzID0gYy5qb2luKFwiOyBcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29va2llcztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZUNvbnRlbnQocmVzcG9uc2UsIHJlc3BvbnNlVHlwZSkge1xyXG4gICAgbGV0IGNvbnRlbnQ7XHJcbiAgICBzd2l0Y2ggKHJlc3BvbnNlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJhcnJheWJ1ZmZlclwiOlxyXG4gICAgICAgICAgICBjb250ZW50ID0gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgICAgY29udGVudCA9IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJsb2JcIjpcclxuICAgICAgICBjYXNlIFwiZG9jdW1lbnRcIjpcclxuICAgICAgICBjYXNlIFwianNvblwiOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2VUeXBlfSBpcyBub3Qgc3VwcG9ydGVkLmApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmV0Y2hIdHRwQ2xpZW50LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgVGV4dE1lc3NhZ2VGb3JtYXQgfSBmcm9tIFwiLi9UZXh0TWVzc2FnZUZvcm1hdFwiO1xyXG5pbXBvcnQgeyBpc0FycmF5QnVmZmVyIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBIYW5kc2hha2VQcm90b2NvbCB7XHJcbiAgICAvLyBIYW5kc2hha2UgcmVxdWVzdCBpcyBhbHdheXMgSlNPTlxyXG4gICAgd3JpdGVIYW5kc2hha2VSZXF1ZXN0KGhhbmRzaGFrZVJlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm4gVGV4dE1lc3NhZ2VGb3JtYXQud3JpdGUoSlNPTi5zdHJpbmdpZnkoaGFuZHNoYWtlUmVxdWVzdCkpO1xyXG4gICAgfVxyXG4gICAgcGFyc2VIYW5kc2hha2VSZXNwb25zZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhO1xyXG4gICAgICAgIGxldCByZW1haW5pbmdEYXRhO1xyXG4gICAgICAgIGlmIChpc0FycmF5QnVmZmVyKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIC8vIEZvcm1hdCBpcyBiaW5hcnkgYnV0IHN0aWxsIG5lZWQgdG8gcmVhZCBKU09OIHRleHQgZnJvbSBoYW5kc2hha2UgcmVzcG9uc2VcclxuICAgICAgICAgICAgY29uc3QgYmluYXJ5RGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXBhcmF0b3JJbmRleCA9IGJpbmFyeURhdGEuaW5kZXhPZihUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3JDb2RlKTtcclxuICAgICAgICAgICAgaWYgKHNlcGFyYXRvckluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWVzc2FnZSBpcyBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb250ZW50IGJlZm9yZSBzZXBhcmF0b3IgaXMgaGFuZHNoYWtlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIGNvbnRlbnQgYWZ0ZXIgaXMgYWRkaXRpb25hbCBtZXNzYWdlc1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUxlbmd0aCA9IHNlcGFyYXRvckluZGV4ICsgMTtcclxuICAgICAgICAgICAgbWVzc2FnZURhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJpbmFyeURhdGEuc2xpY2UoMCwgcmVzcG9uc2VMZW5ndGgpKSk7XHJcbiAgICAgICAgICAgIHJlbWFpbmluZ0RhdGEgPSAoYmluYXJ5RGF0YS5ieXRlTGVuZ3RoID4gcmVzcG9uc2VMZW5ndGgpID8gYmluYXJ5RGF0YS5zbGljZShyZXNwb25zZUxlbmd0aCkuYnVmZmVyIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHREYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9ySW5kZXggPSB0ZXh0RGF0YS5pbmRleE9mKFRleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1lc3NhZ2UgaXMgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29udGVudCBiZWZvcmUgc2VwYXJhdG9yIGlzIGhhbmRzaGFrZSByZXNwb25zZVxyXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBjb250ZW50IGFmdGVyIGlzIGFkZGl0aW9uYWwgbWVzc2FnZXNcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VMZW5ndGggPSBzZXBhcmF0b3JJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhID0gdGV4dERhdGEuc3Vic3RyaW5nKDAsIHJlc3BvbnNlTGVuZ3RoKTtcclxuICAgICAgICAgICAgcmVtYWluaW5nRGF0YSA9ICh0ZXh0RGF0YS5sZW5ndGggPiByZXNwb25zZUxlbmd0aCkgPyB0ZXh0RGF0YS5zdWJzdHJpbmcocmVzcG9uc2VMZW5ndGgpIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXQgdGhpcyBwb2ludCB3ZSBzaG91bGQgaGF2ZSBqdXN0IHRoZSBzaW5nbGUgaGFuZHNoYWtlIG1lc3NhZ2VcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFRleHRNZXNzYWdlRm9ybWF0LnBhcnNlKG1lc3NhZ2VEYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UobWVzc2FnZXNbMF0pO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS50eXBlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGEgaGFuZHNoYWtlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTWVzc2FnZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgIC8vIG11bHRpcGxlIG1lc3NhZ2VzIGNvdWxkIGhhdmUgYXJyaXZlZCB3aXRoIGhhbmRzaGFrZVxyXG4gICAgICAgIC8vIHJldHVybiBhZGRpdGlvbmFsIGRhdGEgdG8gYmUgcGFyc2VkIGFzIHVzdWFsLCBvciBudWxsIGlmIGFsbCBwYXJzZWRcclxuICAgICAgICByZXR1cm4gW3JlbWFpbmluZ0RhdGEsIHJlc3BvbnNlTWVzc2FnZV07XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SGFuZHNoYWtlUHJvdG9jb2wuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5leHBvcnQgY2xhc3MgSGVhZGVyTmFtZXMge1xyXG59XHJcbkhlYWRlck5hbWVzLkF1dGhvcml6YXRpb24gPSBcIkF1dGhvcml6YXRpb25cIjtcclxuSGVhZGVyTmFtZXMuQ29va2llID0gXCJDb29raWVcIjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SGVhZGVyTmFtZXMuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vKiogUmVwcmVzZW50cyBhbiBIVFRQIHJlc3BvbnNlLiAqL1xyXG5leHBvcnQgY2xhc3MgSHR0cFJlc3BvbnNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGUsIHN0YXR1c1RleHQsIGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIH1cclxufVxyXG4vKiogQWJzdHJhY3Rpb24gb3ZlciBhbiBIVFRQIGNsaWVudC5cclxuICpcclxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhbiBhYnN0cmFjdGlvbiBvdmVyIGFuIEhUVFAgY2xpZW50IHNvIHRoYXQgYSBkaWZmZXJlbnQgaW1wbGVtZW50YXRpb24gY2FuIGJlIHByb3ZpZGVkIG9uIGRpZmZlcmVudCBwbGF0Zm9ybXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudCB7XHJcbiAgICBnZXQodXJsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZCh7XHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcG9zdCh1cmwsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKHtcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlKHVybCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoe1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKiBHZXRzIGFsbCBjb29raWVzIHRoYXQgYXBwbHkgdG8gdGhlIHNwZWNpZmllZCBVUkwuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgVVJMIHRoYXQgdGhlIGNvb2tpZXMgYXJlIHZhbGlkIGZvci5cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIHRoZSBrZXktdmFsdWUgY29va2llIHBhaXJzIGZvciB0aGUgc3BlY2lmaWVkIFVSTC5cclxuICAgICAqL1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgZ2V0Q29va2llU3RyaW5nKHVybCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh0dHBDbGllbnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBEZWZhdWx0SHR0cENsaWVudCB9IGZyb20gXCIuL0RlZmF1bHRIdHRwQ2xpZW50XCI7XHJcbmltcG9ydCB7IEFnZ3JlZ2F0ZUVycm9ycywgRGlzYWJsZWRUcmFuc3BvcnRFcnJvciwgRmFpbGVkVG9OZWdvdGlhdGVXaXRoU2VydmVyRXJyb3IsIEZhaWxlZFRvU3RhcnRUcmFuc3BvcnRFcnJvciwgSHR0cEVycm9yLCBVbnN1cHBvcnRlZFRyYW5zcG9ydEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7IEhlYWRlck5hbWVzIH0gZnJvbSBcIi4vSGVhZGVyTmFtZXNcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IEh0dHBUcmFuc3BvcnRUeXBlLCBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgTG9uZ1BvbGxpbmdUcmFuc3BvcnQgfSBmcm9tIFwiLi9Mb25nUG9sbGluZ1RyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJTZW50RXZlbnRzVHJhbnNwb3J0IH0gZnJvbSBcIi4vU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBBcmcsIGNyZWF0ZUxvZ2dlciwgZ2V0VXNlckFnZW50SGVhZGVyLCBQbGF0Zm9ybSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7IFdlYlNvY2tldFRyYW5zcG9ydCB9IGZyb20gXCIuL1dlYlNvY2tldFRyYW5zcG9ydFwiO1xyXG5jb25zdCBNQVhfUkVESVJFQ1RTID0gMTAwO1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIEh0dHBDb25uZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHVybCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5fc3RvcFByb21pc2VSZXNvbHZlciA9ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzID0ge307XHJcbiAgICAgICAgdGhpcy5fbmVnb3RpYXRlVmVyc2lvbiA9IDE7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodXJsLCBcInVybFwiKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBjcmVhdGVMb2dnZXIob3B0aW9ucy5sb2dnZXIpO1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuX3Jlc29sdmVVcmwodXJsKTtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBvcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50ID0gb3B0aW9ucy5sb2dNZXNzYWdlQ29udGVudCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBvcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPT09IFwiYm9vbGVhblwiIHx8IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2l0aENyZWRlbnRpYWxzIG9wdGlvbiB3YXMgbm90IGEgJ2Jvb2xlYW4nIG9yICd1bmRlZmluZWQnIHZhbHVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgPT09IHVuZGVmaW5lZCA/IDEwMCAqIDEwMDAgOiBvcHRpb25zLnRpbWVvdXQ7XHJcbiAgICAgICAgbGV0IHdlYlNvY2tldE1vZHVsZSA9IG51bGw7XHJcbiAgICAgICAgbGV0IGV2ZW50U291cmNlTW9kdWxlID0gbnVsbDtcclxuICAgICAgICBpZiAoUGxhdGZvcm0uaXNOb2RlICYmIHR5cGVvZiByZXF1aXJlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIC8vIEluIG9yZGVyIHRvIGlnbm9yZSB0aGUgZHluYW1pYyByZXF1aXJlIGluIHdlYnBhY2sgYnVpbGRzIHdlIG5lZWQgdG8gZG8gdGhpcyBtYWdpY1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBUUyBkb2Vzbid0IGtub3cgYWJvdXQgdGhlc2UgbmFtZXNcclxuICAgICAgICAgICAgY29uc3QgcmVxdWlyZUZ1bmMgPSB0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyA9PT0gXCJmdW5jdGlvblwiID8gX19ub25fd2VicGFja19yZXF1aXJlX18gOiByZXF1aXJlO1xyXG4gICAgICAgICAgICB3ZWJTb2NrZXRNb2R1bGUgPSByZXF1aXJlRnVuYyhcIndzXCIpO1xyXG4gICAgICAgICAgICBldmVudFNvdXJjZU1vZHVsZSA9IHJlcXVpcmVGdW5jKFwiZXZlbnRzb3VyY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUGxhdGZvcm0uaXNOb2RlICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09IFwidW5kZWZpbmVkXCIgJiYgIW9wdGlvbnMuV2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuV2ViU29ja2V0ID0gV2ViU29ja2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChQbGF0Zm9ybS5pc05vZGUgJiYgIW9wdGlvbnMuV2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh3ZWJTb2NrZXRNb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuV2ViU29ja2V0ID0gd2ViU29ja2V0TW9kdWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUGxhdGZvcm0uaXNOb2RlICYmIHR5cGVvZiBFdmVudFNvdXJjZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhb3B0aW9ucy5FdmVudFNvdXJjZSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLkV2ZW50U291cmNlID0gRXZlbnRTb3VyY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKFBsYXRmb3JtLmlzTm9kZSAmJiAhb3B0aW9ucy5FdmVudFNvdXJjZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50U291cmNlTW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLkV2ZW50U291cmNlID0gZXZlbnRTb3VyY2VNb2R1bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IG9wdGlvbnMuaHR0cENsaWVudCB8fCBuZXcgRGVmYXVsdEh0dHBDbGllbnQodGhpcy5fbG9nZ2VyKTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLztcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMub25yZWNlaXZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RhcnQodHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICB0cmFuc2ZlckZvcm1hdCA9IHRyYW5zZmVyRm9ybWF0IHx8IFRyYW5zZmVyRm9ybWF0LkJpbmFyeTtcclxuICAgICAgICBBcmcuaXNJbih0cmFuc2ZlckZvcm1hdCwgVHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYFN0YXJ0aW5nIGNvbm5lY3Rpb24gd2l0aCB0cmFuc2ZlciBmb3JtYXQgJyR7VHJhbnNmZXJGb3JtYXRbdHJhbnNmZXJGb3JtYXRdfScuYCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzdGFydCBhbiBIdHRwQ29ubmVjdGlvbiB0aGF0IGlzIG5vdCBpbiB0aGUgJ0Rpc2Nvbm5lY3RlZCcgc3RhdGUuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gXCJDb25uZWN0aW5nXCIgLyogQ29ubmVjdGluZyAqLztcclxuICAgICAgICB0aGlzLl9zdGFydEludGVybmFsUHJvbWlzZSA9IHRoaXMuX3N0YXJ0SW50ZXJuYWwodHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0SW50ZXJuYWxQcm9taXNlO1xyXG4gICAgICAgIC8vIFRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRoaW5rcyB0aGF0IGNvbm5lY3Rpb25TdGF0ZSBtdXN0IGJlIENvbm5lY3RpbmcgaGVyZS4gVGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgaXMgd3JvbmcuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0aW5nXCIgLyogRGlzY29ubmVjdGluZyAqLykge1xyXG4gICAgICAgICAgICAvLyBzdG9wKCkgd2FzIGNhbGxlZCBhbmQgdHJhbnNpdGlvbmVkIHRoZSBjbGllbnQgaW50byB0aGUgRGlzY29ubmVjdGluZyBzdGF0ZS5cclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiRmFpbGVkIHRvIHN0YXJ0IHRoZSBIdHRwQ29ubmVjdGlvbiBiZWZvcmUgc3RvcCgpIHdhcyBjYWxsZWQuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvLyBXZSBjYW5ub3QgYXdhaXQgc3RvcFByb21pc2UgaW5zaWRlIHN0YXJ0SW50ZXJuYWwgc2luY2Ugc3RvcEludGVybmFsIGF3YWl0cyB0aGUgc3RhcnRJbnRlcm5hbFByb21pc2UuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0b3BQcm9taXNlO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICAvLyBzdG9wKCkgd2FzIGNhbGxlZCBhbmQgdHJhbnNpdGlvbmVkIHRoZSBjbGllbnQgaW50byB0aGUgRGlzY29ubmVjdGluZyBzdGF0ZS5cclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiSHR0cENvbm5lY3Rpb24uc3RhcnRJbnRlcm5hbCBjb21wbGV0ZWQgZ3JhY2VmdWxseSBidXQgZGlkbid0IGVudGVyIHRoZSBjb25uZWN0aW9uIGludG8gdGhlIGNvbm5lY3RlZCBzdGF0ZSFcIjtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhcnRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZW5kKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHNlbmQgZGF0YSBpZiB0aGUgY29ubmVjdGlvbiBpcyBub3QgaW4gdGhlICdDb25uZWN0ZWQnIFN0YXRlLlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5fc2VuZFF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRRdWV1ZSA9IG5ldyBUcmFuc3BvcnRTZW5kUXVldWUodGhpcy50cmFuc3BvcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUcmFuc3BvcnQgd2lsbCBub3QgYmUgbnVsbCBpZiBzdGF0ZSBpcyBjb25uZWN0ZWRcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VuZFF1ZXVlLnNlbmQoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdG9wKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYENhbGwgdG8gSHR0cENvbm5lY3Rpb24uc3RvcCgke2Vycm9yfSkgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RpbmdcIiAvKiBEaXNjb25uZWN0aW5nICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3AoJHtlcnJvcn0pIGlnbm9yZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0aW5nIHN0YXRlLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RvcFByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IFwiRGlzY29ubmVjdGluZ1wiIC8qIERpc2Nvbm5lY3RpbmcgKi87XHJcbiAgICAgICAgdGhpcy5fc3RvcFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBEb24ndCBjb21wbGV0ZSBzdG9wKCkgdW50aWwgc3RvcENvbm5lY3Rpb24oKSBjb21wbGV0ZXMuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3BQcm9taXNlUmVzb2x2ZXIgPSByZXNvbHZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHN0b3BJbnRlcm5hbCBzaG91bGQgbmV2ZXIgdGhyb3cgc28ganVzdCBvYnNlcnZlIGl0LlxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3N0b3BJbnRlcm5hbChlcnJvcik7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc3RvcFByb21pc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBfc3RvcEludGVybmFsKGVycm9yKSB7XHJcbiAgICAgICAgLy8gU2V0IGVycm9yIGFzIHNvb24gYXMgcG9zc2libGUgb3RoZXJ3aXNlIHRoZXJlIGlzIGEgcmFjZSBiZXR3ZWVuXHJcbiAgICAgICAgLy8gdGhlIHRyYW5zcG9ydCBjbG9zaW5nIGFuZCBwcm92aWRpbmcgYW4gZXJyb3IgYW5kIHRoZSBlcnJvciBmcm9tIGEgY2xvc2UgbWVzc2FnZVxyXG4gICAgICAgIC8vIFdlIHdvdWxkIHByZWZlciB0aGUgY2xvc2UgbWVzc2FnZSBlcnJvci5cclxuICAgICAgICB0aGlzLl9zdG9wRXJyb3IgPSBlcnJvcjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zdGFydEludGVybmFsUHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBleGNlcHRpb24gaXMgcmV0dXJuZWQgdG8gdGhlIHVzZXIgYXMgYSByZWplY3RlZCBQcm9taXNlIGZyb20gdGhlIHN0YXJ0IG1ldGhvZC5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVGhlIHRyYW5zcG9ydCdzIG9uY2xvc2Ugd2lsbCB0cmlnZ2VyIHN0b3BDb25uZWN0aW9uIHdoaWNoIHdpbGwgcnVuIG91ciBvbmNsb3NlIGV2ZW50LlxyXG4gICAgICAgIC8vIFRoZSB0cmFuc3BvcnQgc2hvdWxkIGFsd2F5cyBiZSBzZXQgaWYgY3VycmVudGx5IGNvbm5lY3RlZC4gSWYgaXQgd2Fzbid0IHNldCwgaXQncyBsaWtlbHkgYmVjYXVzZVxyXG4gICAgICAgIC8vIHN0b3Agd2FzIGNhbGxlZCBkdXJpbmcgc3RhcnQoKSBhbmQgc3RhcnQoKSBmYWlsZWQuXHJcbiAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnRyYW5zcG9ydC5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBIdHRwQ29ubmVjdGlvbi50cmFuc3BvcnQuc3RvcCgpIHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BDb25uZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkh0dHBDb25uZWN0aW9uLnRyYW5zcG9ydCBpcyB1bmRlZmluZWQgaW4gSHR0cENvbm5lY3Rpb24uc3RvcCgpIGJlY2F1c2Ugc3RhcnQoKSBmYWlsZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIF9zdGFydEludGVybmFsKHRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIGJhc2UgdXJsIGFuZCB0aGUgYWNjZXNzIHRva2VuIGZhY3Rvcnkgc2luY2UgdGhleSBtYXkgY2hhbmdlXHJcbiAgICAgICAgLy8gYXMgcGFydCBvZiBuZWdvdGlhdGluZ1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmJhc2VVcmw7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5ID0gdGhpcy5fb3B0aW9ucy5hY2Nlc3NUb2tlbkZhY3Rvcnk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2tpcE5lZ290aWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy50cmFuc3BvcnQgPT09IEh0dHBUcmFuc3BvcnRUeXBlLldlYlNvY2tldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBhIGNvbm5lY3Rpb24gSUQgaW4gdGhpcyBjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0aGlzLl9jb25zdHJ1Y3RUcmFuc3BvcnQoSHR0cFRyYW5zcG9ydFR5cGUuV2ViU29ja2V0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGp1c3QgY2FsbCBjb25uZWN0IGRpcmVjdGx5IGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgICAgICAvLyBObyBmYWxsYmFjayBvciBuZWdvdGlhdGUgaW4gdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0VHJhbnNwb3J0KHVybCwgdHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmVnb3RpYXRpb24gY2FuIG9ubHkgYmUgc2tpcHBlZCB3aGVuIHVzaW5nIHRoZSBXZWJTb2NrZXQgdHJhbnNwb3J0IGRpcmVjdGx5LlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZWdvdGlhdGVSZXNwb25zZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVkaXJlY3RzID0gMDtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWdvdGlhdGVSZXNwb25zZSA9IGF3YWl0IHRoaXMuX2dldE5lZ290aWF0aW9uUmVzcG9uc2UodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdXNlciB0cmllcyB0byBzdG9wIHRoZSBjb25uZWN0aW9uIHdoZW4gaXQgaXMgYmVpbmcgc3RhcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGluZ1wiIC8qIERpc2Nvbm5lY3RpbmcgKi8gfHwgdGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29ubmVjdGlvbiB3YXMgc3RvcHBlZCBkdXJpbmcgbmVnb3RpYXRpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmVnb3RpYXRlUmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5lZ290aWF0ZVJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ290aWF0ZVJlc3BvbnNlLlByb3RvY29sVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEZXRlY3RlZCBhIGNvbm5lY3Rpb24gYXR0ZW1wdCB0byBhbiBBU1AuTkVUIFNpZ25hbFIgU2VydmVyLiBUaGlzIGNsaWVudCBvbmx5IHN1cHBvcnRzIGNvbm5lY3RpbmcgdG8gYW4gQVNQLk5FVCBDb3JlIFNpZ25hbFIgU2VydmVyLiBTZWUgaHR0cHM6Ly9ha2EubXMvc2lnbmFsci1jb3JlLWRpZmZlcmVuY2VzIGZvciBkZXRhaWxzLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ290aWF0ZVJlc3BvbnNlLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBuZWdvdGlhdGVSZXNwb25zZS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWdvdGlhdGVSZXNwb25zZS5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGFjY2VzcyB0b2tlbiBmYWN0b3J5IHdpdGggb25lIHRoYXQgdXNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcmV0dXJuZWQgYWNjZXNzIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbmVnb3RpYXRlUmVzcG9uc2UuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSA9ICgpID0+IGFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdHMrKztcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKG5lZ290aWF0ZVJlc3BvbnNlLnVybCAmJiByZWRpcmVjdHMgPCBNQVhfUkVESVJFQ1RTKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdHMgPT09IE1BWF9SRURJUkVDVFMgJiYgbmVnb3RpYXRlUmVzcG9uc2UudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmVnb3RpYXRlIHJlZGlyZWN0aW9uIGxpbWl0IGV4Y2VlZGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2NyZWF0ZVRyYW5zcG9ydCh1cmwsIHRoaXMuX29wdGlvbnMudHJhbnNwb3J0LCBuZWdvdGlhdGVSZXNwb25zZSwgdHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCBpbnN0YW5jZW9mIExvbmdQb2xsaW5nVHJhbnNwb3J0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzLmluaGVyZW50S2VlcEFsaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkNvbm5lY3RpbmdcIiAvKiBDb25uZWN0aW5nICovKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIGNvbm5lY3Rpb24gdHJhbnNpdGlvbnMgdG8gdGhlIGNvbm5lY3RlZCBzdGF0ZSBwcmlvciB0byBjb21wbGV0aW5nIHRoaXMuc3RhcnRJbnRlcm5hbFByb21pc2UuXHJcbiAgICAgICAgICAgICAgICAvLyBzdGFydCgpIHdpbGwgaGFuZGxlIHRoZSBjYXNlIHdoZW4gc3RvcCB3YXMgY2FsbGVkIGFuZCBzdGFydEludGVybmFsIGV4aXRzIHN0aWxsIGluIHRoZSBkaXNjb25uZWN0aW5nIHN0YXRlLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJUaGUgSHR0cENvbm5lY3Rpb24gY29ubmVjdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzdG9wKCkgaXMgd2FpdGluZyBvbiB1cyB2aWEgdGhpcy5zdGFydEludGVybmFsUHJvbWlzZSBzbyBrZWVwIHRoaXMudHJhbnNwb3J0IGFyb3VuZCBzbyBpdCBjYW4gY2xlYW4gdXAuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgY2FzZSBzdGFydEludGVybmFsIGNhbiBleGl0IGluIG5laXRoZXIgdGhlIGNvbm5lY3RlZCBub3IgZGlzY29ubmVjdGVkIHN0YXRlIGJlY2F1c2Ugc3RvcENvbm5lY3Rpb24oKVxyXG4gICAgICAgICAgICAvLyB3aWxsIHRyYW5zaXRpb24gdG8gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZS4gc3RhcnQoKSB3aWxsIHdhaXQgZm9yIHRoZSB0cmFuc2l0aW9uIHVzaW5nIHRoZSBzdG9wUHJvbWlzZS5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgXCJGYWlsZWQgdG8gc3RhcnQgdGhlIGNvbm5lY3Rpb246IFwiICsgZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy8gaWYgc3RhcnQgZmFpbHMsIGFueSBhY3RpdmUgY2FsbHMgdG8gc3RvcCBhc3N1bWUgdGhhdCBzdGFydCB3aWxsIGNvbXBsZXRlIHRoZSBzdG9wIHByb21pc2VcclxuICAgICAgICAgICAgdGhpcy5fc3RvcFByb21pc2VSZXNvbHZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgX2dldE5lZ290aWF0aW9uUmVzcG9uc2UodXJsKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkoKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzW0hlYWRlck5hbWVzLkF1dGhvcml6YXRpb25dID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGdldFVzZXJBZ2VudEhlYWRlcigpO1xyXG4gICAgICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICBjb25zdCBuZWdvdGlhdGVVcmwgPSB0aGlzLl9yZXNvbHZlTmVnb3RpYXRlVXJsKHVybCk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYFNlbmRpbmcgbmVnb3RpYXRpb24gcmVxdWVzdDogJHtuZWdvdGlhdGVVcmx9LmApO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5faHR0cENsaWVudC5wb3N0KG5lZ290aWF0ZVVybCwge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgLi4uaGVhZGVycywgLi4udGhpcy5fb3B0aW9ucy5oZWFkZXJzIH0sXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLl9vcHRpb25zLnRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuX29wdGlvbnMud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgVW5leHBlY3RlZCBzdGF0dXMgY29kZSByZXR1cm5lZCBmcm9tIG5lZ290aWF0ZSAnJHtyZXNwb25zZS5zdGF0dXNDb2RlfSdgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmVnb3RpYXRlUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICBpZiAoIW5lZ290aWF0ZVJlc3BvbnNlLm5lZ290aWF0ZVZlcnNpb24gfHwgbmVnb3RpYXRlUmVzcG9uc2UubmVnb3RpYXRlVmVyc2lvbiA8IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5lZ290aWF0ZSB2ZXJzaW9uIDAgZG9lc24ndCB1c2UgY29ubmVjdGlvblRva2VuXHJcbiAgICAgICAgICAgICAgICAvLyBTbyB3ZSBzZXQgaXQgZXF1YWwgdG8gY29ubmVjdGlvbklkIHNvIGFsbCBvdXIgbG9naWMgY2FuIHVzZSBjb25uZWN0aW9uVG9rZW4gd2l0aG91dCBiZWluZyBhd2FyZSBvZiB0aGUgbmVnb3RpYXRlIHZlcnNpb25cclxuICAgICAgICAgICAgICAgIG5lZ290aWF0ZVJlc3BvbnNlLmNvbm5lY3Rpb25Ub2tlbiA9IG5lZ290aWF0ZVJlc3BvbnNlLmNvbm5lY3Rpb25JZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmVnb3RpYXRlUmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIkZhaWxlZCB0byBjb21wbGV0ZSBuZWdvdGlhdGlvbiB3aXRoIHRoZSBzZXJ2ZXI6IFwiICsgZTtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBIdHRwRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnN0YXR1c0NvZGUgPT09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZSArIFwiIEVpdGhlciB0aGlzIGlzIG5vdCBhIFNpZ25hbFIgZW5kcG9pbnQgb3IgdGhlcmUgaXMgYSBwcm94eSBibG9ja2luZyB0aGUgY29ubmVjdGlvbi5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEZhaWxlZFRvTmVnb3RpYXRlV2l0aFNlcnZlckVycm9yKGVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9jcmVhdGVDb25uZWN0VXJsKHVybCwgY29ubmVjdGlvblRva2VuKSB7XHJcbiAgICAgICAgaWYgKCFjb25uZWN0aW9uVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybCArICh1cmwuaW5kZXhPZihcIj9cIikgPT09IC0xID8gXCI/XCIgOiBcIiZcIikgKyBgaWQ9JHtjb25uZWN0aW9uVG9rZW59YDtcclxuICAgIH1cclxuICAgIGFzeW5jIF9jcmVhdGVUcmFuc3BvcnQodXJsLCByZXF1ZXN0ZWRUcmFuc3BvcnQsIG5lZ290aWF0ZVJlc3BvbnNlLCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIGxldCBjb25uZWN0VXJsID0gdGhpcy5fY3JlYXRlQ29ubmVjdFVybCh1cmwsIG5lZ290aWF0ZVJlc3BvbnNlLmNvbm5lY3Rpb25Ub2tlbik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzSVRyYW5zcG9ydChyZXF1ZXN0ZWRUcmFuc3BvcnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIFwiQ29ubmVjdGlvbiB3YXMgcHJvdmlkZWQgYW4gaW5zdGFuY2Ugb2YgSVRyYW5zcG9ydCwgdXNpbmcgdGhhdCBkaXJlY3RseS5cIik7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gcmVxdWVzdGVkVHJhbnNwb3J0O1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zdGFydFRyYW5zcG9ydChjb25uZWN0VXJsLCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbklkID0gbmVnb3RpYXRlUmVzcG9uc2UuY29ubmVjdGlvbklkO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyYW5zcG9ydEV4Y2VwdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCB0cmFuc3BvcnRzID0gbmVnb3RpYXRlUmVzcG9uc2UuYXZhaWxhYmxlVHJhbnNwb3J0cyB8fCBbXTtcclxuICAgICAgICBsZXQgbmVnb3RpYXRlID0gbmVnb3RpYXRlUmVzcG9uc2U7XHJcbiAgICAgICAgZm9yIChjb25zdCBlbmRwb2ludCBvZiB0cmFuc3BvcnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zcG9ydE9yRXJyb3IgPSB0aGlzLl9yZXNvbHZlVHJhbnNwb3J0T3JFcnJvcihlbmRwb2ludCwgcmVxdWVzdGVkVHJhbnNwb3J0LCByZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdCk7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc3BvcnRPckVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBlcnJvciBhbmQgY29udGludWUsIHdlIGRvbid0IHdhbnQgdG8gY2F1c2UgYSByZS1uZWdvdGlhdGUgaW4gdGhlc2UgY2FzZXNcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydEV4Y2VwdGlvbnMucHVzaChgJHtlbmRwb2ludC50cmFuc3BvcnR9IGZhaWxlZDpgKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydEV4Y2VwdGlvbnMucHVzaCh0cmFuc3BvcnRPckVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9pc0lUcmFuc3BvcnQodHJhbnNwb3J0T3JFcnJvcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0T3JFcnJvcjtcclxuICAgICAgICAgICAgICAgIGlmICghbmVnb3RpYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnb3RpYXRlID0gYXdhaXQgdGhpcy5fZ2V0TmVnb3RpYXRpb25SZXNwb25zZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdFVybCA9IHRoaXMuX2NyZWF0ZUNvbm5lY3RVcmwodXJsLCBuZWdvdGlhdGUuY29ubmVjdGlvblRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRUcmFuc3BvcnQoY29ubmVjdFVybCwgcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbklkID0gbmVnb3RpYXRlLmNvbm5lY3Rpb25JZDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgRmFpbGVkIHRvIHN0YXJ0IHRoZSB0cmFuc3BvcnQgJyR7ZW5kcG9pbnQudHJhbnNwb3J0fSc6ICR7ZXh9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVnb3RpYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydEV4Y2VwdGlvbnMucHVzaChuZXcgRmFpbGVkVG9TdGFydFRyYW5zcG9ydEVycm9yKGAke2VuZHBvaW50LnRyYW5zcG9ydH0gZmFpbGVkOiAke2V4fWAsIEh0dHBUcmFuc3BvcnRUeXBlW2VuZHBvaW50LnRyYW5zcG9ydF0pKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBcIkNvbm5lY3RpbmdcIiAvKiBDb25uZWN0aW5nICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkZhaWxlZCB0byBzZWxlY3QgdHJhbnNwb3J0IGJlZm9yZSBzdG9wKCkgd2FzIGNhbGxlZC5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNwb3J0RXhjZXB0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWdncmVnYXRlRXJyb3JzKGBVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgc2VydmVyIHdpdGggYW55IG9mIHRoZSBhdmFpbGFibGUgdHJhbnNwb3J0cy4gJHt0cmFuc3BvcnRFeGNlcHRpb25zLmpvaW4oXCIgXCIpfWAsIHRyYW5zcG9ydEV4Y2VwdGlvbnMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vbmUgb2YgdGhlIHRyYW5zcG9ydHMgc3VwcG9ydGVkIGJ5IHRoZSBjbGllbnQgYXJlIHN1cHBvcnRlZCBieSB0aGUgc2VydmVyLlwiKSk7XHJcbiAgICB9XHJcbiAgICBfY29uc3RydWN0VHJhbnNwb3J0KHRyYW5zcG9ydCkge1xyXG4gICAgICAgIHN3aXRjaCAodHJhbnNwb3J0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgSHR0cFRyYW5zcG9ydFR5cGUuV2ViU29ja2V0czpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fb3B0aW9ucy5XZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInV2ViU29ja2V0JyBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJTb2NrZXRUcmFuc3BvcnQodGhpcy5faHR0cENsaWVudCwgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5LCB0aGlzLl9sb2dnZXIsIHRoaXMuX29wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQsIHRoaXMuX29wdGlvbnMuV2ViU29ja2V0LCB0aGlzLl9vcHRpb25zLmhlYWRlcnMgfHwge30pO1xyXG4gICAgICAgICAgICBjYXNlIEh0dHBUcmFuc3BvcnRUeXBlLlNlcnZlclNlbnRFdmVudHM6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMuRXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInRXZlbnRTb3VyY2UnIGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBlbnZpcm9ubWVudC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQodGhpcy5faHR0cENsaWVudCwgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5LCB0aGlzLl9sb2dnZXIsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgICAgICAgICBjYXNlIEh0dHBUcmFuc3BvcnRUeXBlLkxvbmdQb2xsaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMb25nUG9sbGluZ1RyYW5zcG9ydCh0aGlzLl9odHRwQ2xpZW50LCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnksIHRoaXMuX2xvZ2dlciwgdGhpcy5fb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHJhbnNwb3J0OiAke3RyYW5zcG9ydH0uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3N0YXJ0VHJhbnNwb3J0KHVybCwgdHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICB0aGlzLnRyYW5zcG9ydC5vbnJlY2VpdmUgPSB0aGlzLm9ucmVjZWl2ZTtcclxuICAgICAgICB0aGlzLnRyYW5zcG9ydC5vbmNsb3NlID0gKGUpID0+IHRoaXMuX3N0b3BDb25uZWN0aW9uKGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5jb25uZWN0KHVybCwgdHJhbnNmZXJGb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgX3Jlc29sdmVUcmFuc3BvcnRPckVycm9yKGVuZHBvaW50LCByZXF1ZXN0ZWRUcmFuc3BvcnQsIHJlcXVlc3RlZFRyYW5zZmVyRm9ybWF0KSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0ID0gSHR0cFRyYW5zcG9ydFR5cGVbZW5kcG9pbnQudHJhbnNwb3J0XTtcclxuICAgICAgICBpZiAodHJhbnNwb3J0ID09PSBudWxsIHx8IHRyYW5zcG9ydCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTa2lwcGluZyB0cmFuc3BvcnQgJyR7ZW5kcG9pbnQudHJhbnNwb3J0fScgYmVjYXVzZSBpdCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgY2xpZW50LmApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBTa2lwcGluZyB0cmFuc3BvcnQgJyR7ZW5kcG9pbnQudHJhbnNwb3J0fScgYmVjYXVzZSBpdCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgY2xpZW50LmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRyYW5zcG9ydE1hdGNoZXMocmVxdWVzdGVkVHJhbnNwb3J0LCB0cmFuc3BvcnQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2ZlckZvcm1hdHMgPSBlbmRwb2ludC50cmFuc2ZlckZvcm1hdHMubWFwKChzKSA9PiBUcmFuc2ZlckZvcm1hdFtzXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmZXJGb3JtYXRzLmluZGV4T2YocmVxdWVzdGVkVHJhbnNmZXJGb3JtYXQpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHRyYW5zcG9ydCA9PT0gSHR0cFRyYW5zcG9ydFR5cGUuV2ViU29ja2V0cyAmJiAhdGhpcy5fb3B0aW9ucy5XZWJTb2NrZXQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0cmFuc3BvcnQgPT09IEh0dHBUcmFuc3BvcnRUeXBlLlNlcnZlclNlbnRFdmVudHMgJiYgIXRoaXMuX29wdGlvbnMuRXZlbnRTb3VyY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBTa2lwcGluZyB0cmFuc3BvcnQgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nIGJlY2F1c2UgaXQgaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIGVudmlyb25tZW50LidgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVbnN1cHBvcnRlZFRyYW5zcG9ydEVycm9yKGAnJHtIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdfScgaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIGVudmlyb25tZW50LmAsIHRyYW5zcG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgU2VsZWN0aW5nIHRyYW5zcG9ydCAnJHtIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdfScuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uc3RydWN0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgU2tpcHBpbmcgdHJhbnNwb3J0ICcke0h0dHBUcmFuc3BvcnRUeXBlW3RyYW5zcG9ydF19JyBiZWNhdXNlIGl0IGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVlc3RlZCB0cmFuc2ZlciBmb3JtYXQgJyR7VHJhbnNmZXJGb3JtYXRbcmVxdWVzdGVkVHJhbnNmZXJGb3JtYXRdfScuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nIGRvZXMgbm90IHN1cHBvcnQgJHtUcmFuc2ZlckZvcm1hdFtyZXF1ZXN0ZWRUcmFuc2ZlckZvcm1hdF19LmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYFNraXBwaW5nIHRyYW5zcG9ydCAnJHtIdHRwVHJhbnNwb3J0VHlwZVt0cmFuc3BvcnRdfScgYmVjYXVzZSBpdCB3YXMgZGlzYWJsZWQgYnkgdGhlIGNsaWVudC5gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGlzYWJsZWRUcmFuc3BvcnRFcnJvcihgJyR7SHR0cFRyYW5zcG9ydFR5cGVbdHJhbnNwb3J0XX0nIGlzIGRpc2FibGVkIGJ5IHRoZSBjbGllbnQuYCwgdHJhbnNwb3J0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pc0lUcmFuc3BvcnQodHJhbnNwb3J0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zcG9ydCAmJiB0eXBlb2YgKHRyYW5zcG9ydCkgPT09IFwib2JqZWN0XCIgJiYgXCJjb25uZWN0XCIgaW4gdHJhbnNwb3J0O1xyXG4gICAgfVxyXG4gICAgX3N0b3BDb25uZWN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYEh0dHBDb25uZWN0aW9uLnN0b3BDb25uZWN0aW9uKCR7ZXJyb3J9KSBjYWxsZWQgd2hpbGUgaW4gc3RhdGUgJHt0aGlzLl9jb25uZWN0aW9uU3RhdGV9LmApO1xyXG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSBzdG9wRXJyb3IsIGl0IHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgZXJyb3IgZnJvbSB0aGUgdHJhbnNwb3J0XHJcbiAgICAgICAgZXJyb3IgPSB0aGlzLl9zdG9wRXJyb3IgfHwgZXJyb3I7XHJcbiAgICAgICAgdGhpcy5fc3RvcEVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBDYWxsIHRvIEh0dHBDb25uZWN0aW9uLnN0b3BDb25uZWN0aW9uKCR7ZXJyb3J9KSB3YXMgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBcIkNvbm5lY3RpbmdcIiAvKiBDb25uZWN0aW5nICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgYENhbGwgdG8gSHR0cENvbm5lY3Rpb24uc3RvcENvbm5lY3Rpb24oJHtlcnJvcn0pIHdhcyBpZ25vcmVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gaXMgc3RpbGwgaW4gdGhlIGNvbm5lY3Rpbmcgc3RhdGUuYCk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSHR0cENvbm5lY3Rpb24uc3RvcENvbm5lY3Rpb24oJHtlcnJvcn0pIHdhcyBjYWxsZWQgd2hpbGUgdGhlIGNvbm5lY3Rpb24gaXMgc3RpbGwgaW4gdGhlIGNvbm5lY3Rpbmcgc3RhdGUuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IFwiRGlzY29ubmVjdGluZ1wiIC8qIERpc2Nvbm5lY3RpbmcgKi8pIHtcclxuICAgICAgICAgICAgLy8gQSBjYWxsIHRvIHN0b3AoKSBpbmR1Y2VkIHRoaXMgY2FsbCB0byBzdG9wQ29ubmVjdGlvbiBhbmQgbmVlZHMgdG8gYmUgY29tcGxldGVkLlxyXG4gICAgICAgICAgICAvLyBBbnkgc3RvcCgpIGF3YWl0ZXJzIHdpbGwgYmUgc2NoZWR1bGVkIHRvIGNvbnRpbnVlIGFmdGVyIHRoZSBvbmNsb3NlIGNhbGxiYWNrIGZpcmVzLlxyXG4gICAgICAgICAgICB0aGlzLl9zdG9wUHJvbWlzZVJlc29sdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgQ29ubmVjdGlvbiBkaXNjb25uZWN0ZWQgd2l0aCBlcnJvciAnJHtlcnJvcn0nLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJDb25uZWN0aW9uIGRpc2Nvbm5lY3RlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9zZW5kUXVldWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFF1ZXVlLnN0b3AoKS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYFRyYW5zcG9ydFNlbmRRdWV1ZS5zdG9wKCkgdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFF1ZXVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25JZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLztcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgSHR0cENvbm5lY3Rpb24ub25jbG9zZSgke2Vycm9yfSkgdGhyZXcgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3Jlc29sdmVVcmwodXJsKSB7XHJcbiAgICAgICAgLy8gc3RhcnRzV2l0aCBpcyBub3Qgc3VwcG9ydGVkIGluIElFXHJcbiAgICAgICAgaWYgKHVybC5sYXN0SW5kZXhPZihcImh0dHBzOi8vXCIsIDApID09PSAwIHx8IHVybC5sYXN0SW5kZXhPZihcImh0dHA6Ly9cIiwgMCkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVzb2x2ZSAnJHt1cmx9Jy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgdXJsIHRvIHRoZSBocmVmIHByb3Blcnkgb2YgYW4gYW5jaG9yIHRhZyBoYW5kbGVzIG5vcm1hbGl6YXRpb25cclxuICAgICAgICAvLyBmb3IgdXMuIFRoZXJlIGFyZSAzIG1haW4gY2FzZXMuXHJcbiAgICAgICAgLy8gMS4gUmVsYXRpdmUgcGF0aCBub3JtYWxpemF0aW9uIGUuZyBcImJcIiAtPiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hL2JcIlxyXG4gICAgICAgIC8vIDIuIEFic29sdXRlIHBhdGggbm9ybWFsaXphdGlvbiBlLmcgXCIvYS9iXCIgLT4gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYS9iXCJcclxuICAgICAgICAvLyAzLiBOZXR3b3JrcGF0aCByZWZlcmVuY2Ugbm9ybWFsaXphdGlvbiBlLmcgXCIvL2xvY2FsaG9zdDo1MDAwL2EvYlwiIC0+IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2EvYlwiXHJcbiAgICAgICAgY29uc3QgYVRhZyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhVGFnLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYE5vcm1hbGl6aW5nICcke3VybH0nIHRvICcke2FUYWcuaHJlZn0nLmApO1xyXG4gICAgICAgIHJldHVybiBhVGFnLmhyZWY7XHJcbiAgICB9XHJcbiAgICBfcmVzb2x2ZU5lZ290aWF0ZVVybCh1cmwpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHVybC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICBsZXQgbmVnb3RpYXRlVXJsID0gdXJsLnN1YnN0cmluZygwLCBpbmRleCA9PT0gLTEgPyB1cmwubGVuZ3RoIDogaW5kZXgpO1xyXG4gICAgICAgIGlmIChuZWdvdGlhdGVVcmxbbmVnb3RpYXRlVXJsLmxlbmd0aCAtIDFdICE9PSBcIi9cIikge1xyXG4gICAgICAgICAgICBuZWdvdGlhdGVVcmwgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5lZ290aWF0ZVVybCArPSBcIm5lZ290aWF0ZVwiO1xyXG4gICAgICAgIG5lZ290aWF0ZVVybCArPSBpbmRleCA9PT0gLTEgPyBcIlwiIDogdXJsLnN1YnN0cmluZyhpbmRleCk7XHJcbiAgICAgICAgaWYgKG5lZ290aWF0ZVVybC5pbmRleE9mKFwibmVnb3RpYXRlVmVyc2lvblwiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgbmVnb3RpYXRlVXJsICs9IGluZGV4ID09PSAtMSA/IFwiP1wiIDogXCImXCI7XHJcbiAgICAgICAgICAgIG5lZ290aWF0ZVVybCArPSBcIm5lZ290aWF0ZVZlcnNpb249XCIgKyB0aGlzLl9uZWdvdGlhdGVWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmVnb3RpYXRlVXJsO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zcG9ydE1hdGNoZXMocmVxdWVzdGVkVHJhbnNwb3J0LCBhY3R1YWxUcmFuc3BvcnQpIHtcclxuICAgIHJldHVybiAhcmVxdWVzdGVkVHJhbnNwb3J0IHx8ICgoYWN0dWFsVHJhbnNwb3J0ICYgcmVxdWVzdGVkVHJhbnNwb3J0KSAhPT0gMCk7XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBUcmFuc3BvcnRTZW5kUXVldWUge1xyXG4gICAgY29uc3RydWN0b3IoX3RyYW5zcG9ydCkge1xyXG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydCA9IF90cmFuc3BvcnQ7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyID0gW107XHJcbiAgICAgICAgdGhpcy5fZXhlY3V0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zZW5kQnVmZmVyZWREYXRhID0gbmV3IFByb21pc2VTb3VyY2UoKTtcclxuICAgICAgICB0aGlzLl90cmFuc3BvcnRSZXN1bHQgPSBuZXcgUHJvbWlzZVNvdXJjZSgpO1xyXG4gICAgICAgIHRoaXMuX3NlbmRMb29wUHJvbWlzZSA9IHRoaXMuX3NlbmRMb29wKCk7XHJcbiAgICB9XHJcbiAgICBzZW5kKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9idWZmZXJEYXRhKGRhdGEpO1xyXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNwb3J0UmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zcG9ydFJlc3VsdCA9IG5ldyBQcm9taXNlU291cmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc3BvcnRSZXN1bHQucHJvbWlzZTtcclxuICAgIH1cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5fZXhlY3V0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc2VuZEJ1ZmZlcmVkRGF0YS5yZXNvbHZlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRMb29wUHJvbWlzZTtcclxuICAgIH1cclxuICAgIF9idWZmZXJEYXRhKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5fYnVmZmVyLmxlbmd0aCAmJiB0eXBlb2YgKHRoaXMuX2J1ZmZlclswXSkgIT09IHR5cGVvZiAoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBkYXRhIHRvIGJlIG9mIHR5cGUgJHt0eXBlb2YgKHRoaXMuX2J1ZmZlcil9IGJ1dCB3YXMgb2YgdHlwZSAke3R5cGVvZiAoZGF0YSl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlci5wdXNoKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuX3NlbmRCdWZmZXJlZERhdGEucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgX3NlbmRMb29wKCkge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3NlbmRCdWZmZXJlZERhdGEucHJvbWlzZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9leGVjdXRpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90cmFuc3BvcnRSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc3BvcnRSZXN1bHQucmVqZWN0KFwiQ29ubmVjdGlvbiBzdG9wcGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRCdWZmZXJlZERhdGEgPSBuZXcgUHJvbWlzZVNvdXJjZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc3BvcnRSZXN1bHQgPSB0aGlzLl90cmFuc3BvcnRSZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zcG9ydFJlc3VsdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiAodGhpcy5fYnVmZmVyWzBdKSA9PT0gXCJzdHJpbmdcIiA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXIuam9pbihcIlwiKSA6XHJcbiAgICAgICAgICAgICAgICBUcmFuc3BvcnRTZW5kUXVldWUuX2NvbmNhdEJ1ZmZlcnModGhpcy5fYnVmZmVyKTtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl90cmFuc3BvcnQuc2VuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydFJlc3VsdC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRSZXN1bHQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBfY29uY2F0QnVmZmVycyhhcnJheUJ1ZmZlcnMpIHtcclxuICAgICAgICBjb25zdCB0b3RhbExlbmd0aCA9IGFycmF5QnVmZmVycy5tYXAoKGIpID0+IGIuYnl0ZUxlbmd0aCkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnJheUJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldChuZXcgVWludDhBcnJheShpdGVtKSwgb2Zmc2V0KTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGl0ZW0uYnl0ZUxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5idWZmZXI7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUHJvbWlzZVNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBbdGhpcy5fcmVzb2x2ZXIsIHRoaXMuX3JlamVjdGVyXSA9IFtyZXNvbHZlLCByZWplY3RdKTtcclxuICAgIH1cclxuICAgIHJlc29sdmUoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZXIoKTtcclxuICAgIH1cclxuICAgIHJlamVjdChyZWFzb24pIHtcclxuICAgICAgICB0aGlzLl9yZWplY3RlcihyZWFzb24pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh0dHBDb25uZWN0aW9uLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgSGFuZHNoYWtlUHJvdG9jb2wgfSBmcm9tIFwiLi9IYW5kc2hha2VQcm90b2NvbFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gXCIuL0lIdWJQcm90b2NvbFwiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCIuL1N1YmplY3RcIjtcclxuaW1wb3J0IHsgQXJnLCBnZXRFcnJvclN0cmluZywgUGxhdGZvcm0gfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5jb25zdCBERUZBVUxUX1RJTUVPVVRfSU5fTVMgPSAzMCAqIDEwMDA7XHJcbmNvbnN0IERFRkFVTFRfUElOR19JTlRFUlZBTF9JTl9NUyA9IDE1ICogMTAwMDtcclxuLyoqIERlc2NyaWJlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUge0BsaW5rIEh1YkNvbm5lY3Rpb259IHRvIHRoZSBzZXJ2ZXIuICovXHJcbmV4cG9ydCB2YXIgSHViQ29ubmVjdGlvblN0YXRlO1xyXG4oZnVuY3Rpb24gKEh1YkNvbm5lY3Rpb25TdGF0ZSkge1xyXG4gICAgLyoqIFRoZSBodWIgY29ubmVjdGlvbiBpcyBkaXNjb25uZWN0ZWQuICovXHJcbiAgICBIdWJDb25uZWN0aW9uU3RhdGVbXCJEaXNjb25uZWN0ZWRcIl0gPSBcIkRpc2Nvbm5lY3RlZFwiO1xyXG4gICAgLyoqIFRoZSBodWIgY29ubmVjdGlvbiBpcyBjb25uZWN0aW5nLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiQ29ubmVjdGluZ1wiXSA9IFwiQ29ubmVjdGluZ1wiO1xyXG4gICAgLyoqIFRoZSBodWIgY29ubmVjdGlvbiBpcyBjb25uZWN0ZWQuICovXHJcbiAgICBIdWJDb25uZWN0aW9uU3RhdGVbXCJDb25uZWN0ZWRcIl0gPSBcIkNvbm5lY3RlZFwiO1xyXG4gICAgLyoqIFRoZSBodWIgY29ubmVjdGlvbiBpcyBkaXNjb25uZWN0aW5nLiAqL1xyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlW1wiRGlzY29ubmVjdGluZ1wiXSA9IFwiRGlzY29ubmVjdGluZ1wiO1xyXG4gICAgLyoqIFRoZSBodWIgY29ubmVjdGlvbiBpcyByZWNvbm5lY3RpbmcuICovXHJcbiAgICBIdWJDb25uZWN0aW9uU3RhdGVbXCJSZWNvbm5lY3RpbmdcIl0gPSBcIlJlY29ubmVjdGluZ1wiO1xyXG59KShIdWJDb25uZWN0aW9uU3RhdGUgfHwgKEh1YkNvbm5lY3Rpb25TdGF0ZSA9IHt9KSk7XHJcbi8qKiBSZXByZXNlbnRzIGEgY29ubmVjdGlvbiB0byBhIFNpZ25hbFIgSHViLiAqL1xyXG5leHBvcnQgY2xhc3MgSHViQ29ubmVjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25uZWN0aW9uLCBsb2dnZXIsIHByb3RvY29sLCByZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICB0aGlzLl9uZXh0S2VlcEFsaXZlID0gMDtcclxuICAgICAgICB0aGlzLl9mcmVlemVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIFwiVGhlIHBhZ2UgaXMgYmVpbmcgZnJvemVuLCB0aGlzIHdpbGwgbGlrZWx5IGxlYWQgdG8gdGhlIGNvbm5lY3Rpb24gYmVpbmcgY2xvc2VkIGFuZCBtZXNzYWdlcyBiZWluZyBsb3N0LiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIGRvY3MgYXQgaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vYXNwbmV0L2NvcmUvc2lnbmFsci9qYXZhc2NyaXB0LWNsaWVudCNic2xlZXBcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZChjb25uZWN0aW9uLCBcImNvbm5lY3Rpb25cIik7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQobG9nZ2VyLCBcImxvZ2dlclwiKTtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZChwcm90b2NvbCwgXCJwcm90b2NvbFwiKTtcclxuICAgICAgICB0aGlzLnNlcnZlclRpbWVvdXRJbk1pbGxpc2Vjb25kcyA9IERFRkFVTFRfVElNRU9VVF9JTl9NUztcclxuICAgICAgICB0aGlzLmtlZXBBbGl2ZUludGVydmFsSW5NaWxsaXNlY29uZHMgPSBERUZBVUxUX1BJTkdfSU5URVJWQUxfSU5fTVM7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuX3Byb3RvY29sID0gcHJvdG9jb2w7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcclxuICAgICAgICB0aGlzLl9yZWNvbm5lY3RQb2xpY3kgPSByZWNvbm5lY3RQb2xpY3k7XHJcbiAgICAgICAgdGhpcy5faGFuZHNoYWtlUHJvdG9jb2wgPSBuZXcgSGFuZHNoYWtlUHJvdG9jb2woKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25yZWNlaXZlID0gKGRhdGEpID0+IHRoaXMuX3Byb2Nlc3NJbmNvbWluZ0RhdGEoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9uY2xvc2UgPSAoZXJyb3IpID0+IHRoaXMuX2Nvbm5lY3Rpb25DbG9zZWQoZXJyb3IpO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX21ldGhvZHMgPSB7fTtcclxuICAgICAgICB0aGlzLl9jbG9zZWRDYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmdDYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLl9yZWNvbm5lY3RlZENhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ludm9jYXRpb25JZCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcmVjZWl2ZWRIYW5kc2hha2VSZXNwb25zZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jYWNoZWRQaW5nTWVzc2FnZSA9IHRoaXMuX3Byb3RvY29sLndyaXRlTWVzc2FnZSh7IHR5cGU6IE1lc3NhZ2VUeXBlLlBpbmcgfSk7XHJcbiAgICB9XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICAvLyBVc2luZyBhIHB1YmxpYyBzdGF0aWMgZmFjdG9yeSBtZXRob2QgbWVhbnMgd2UgY2FuIGhhdmUgYSBwcml2YXRlIGNvbnN0cnVjdG9yIGFuZCBhbiBfaW50ZXJuYWxfXHJcbiAgICAvLyBjcmVhdGUgbWV0aG9kIHRoYXQgY2FuIGJlIHVzZWQgYnkgSHViQ29ubmVjdGlvbkJ1aWxkZXIuIEFuIFwiaW50ZXJuYWxcIiBjb25zdHJ1Y3RvciB3b3VsZCBqdXN0XHJcbiAgICAvLyBiZSBzdHJpcHBlZCBhd2F5IGFuZCB0aGUgJy5kLnRzJyBmaWxlIHdvdWxkIGhhdmUgbm8gY29uc3RydWN0b3IsIHdoaWNoIGlzIGludGVycHJldGVkIGFzIGFcclxuICAgIC8vIHB1YmxpYyBwYXJhbWV0ZXItbGVzcyBjb25zdHJ1Y3Rvci5cclxuICAgIHN0YXRpYyBjcmVhdGUoY29ubmVjdGlvbiwgbG9nZ2VyLCBwcm90b2NvbCwgcmVjb25uZWN0UG9saWN5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIdWJDb25uZWN0aW9uKGNvbm5lY3Rpb24sIGxvZ2dlciwgcHJvdG9jb2wsIHJlY29ubmVjdFBvbGljeSk7XHJcbiAgICB9XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBzdGF0ZSBvZiB0aGUge0BsaW5rIEh1YkNvbm5lY3Rpb259IHRvIHRoZSBzZXJ2ZXIuICovXHJcbiAgICBnZXQgc3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZTtcclxuICAgIH1cclxuICAgIC8qKiBSZXByZXNlbnRzIHRoZSBjb25uZWN0aW9uIGlkIG9mIHRoZSB7QGxpbmsgSHViQ29ubmVjdGlvbn0gb24gdGhlIHNlcnZlci4gVGhlIGNvbm5lY3Rpb24gaWQgd2lsbCBiZSBudWxsIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgZWl0aGVyXHJcbiAgICAgKiAgaW4gdGhlIGRpc2Nvbm5lY3RlZCBzdGF0ZSBvciBpZiB0aGUgbmVnb3RpYXRpb24gc3RlcCB3YXMgc2tpcHBlZC5cclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbm5lY3Rpb25JZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uID8gKHRoaXMuY29ubmVjdGlvbi5jb25uZWN0aW9uSWQgfHwgbnVsbCkgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgdXJsIG9mIHRoZSB7QGxpbmsgSHViQ29ubmVjdGlvbn0gdG8gdGhlIHNlcnZlci4gKi9cclxuICAgIGdldCBiYXNlVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uYmFzZVVybCB8fCBcIlwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGEgbmV3IHVybCBmb3IgdGhlIEh1YkNvbm5lY3Rpb24uIE5vdGUgdGhhdCB0aGUgdXJsIGNhbiBvbmx5IGJlIGNoYW5nZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBpbiBlaXRoZXIgdGhlIERpc2Nvbm5lY3RlZCBvclxyXG4gICAgICogUmVjb25uZWN0aW5nIHN0YXRlcy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBjb25uZWN0IHRvLlxyXG4gICAgICovXHJcbiAgICBzZXQgYmFzZVVybCh1cmwpIHtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkICYmIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgSHViQ29ubmVjdGlvbiBtdXN0IGJlIGluIHRoZSBEaXNjb25uZWN0ZWQgb3IgUmVjb25uZWN0aW5nIHN0YXRlIHRvIGNoYW5nZSB0aGUgdXJsLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIEh1YkNvbm5lY3Rpb24gdXJsIG11c3QgYmUgYSB2YWxpZCB1cmwuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmFzZVVybCA9IHVybDtcclxuICAgIH1cclxuICAgIC8qKiBTdGFydHMgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGNvbm5lY3Rpb24gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGVzdGFibGlzaGVkLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UHJvbWlzZSA9IHRoaXMuX3N0YXJ0V2l0aFN0YXRlVHJhbnNpdGlvbnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhcnRQcm9taXNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgX3N0YXJ0V2l0aFN0YXRlVHJhbnNpdGlvbnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHN0YXJ0IGEgSHViQ29ubmVjdGlvbiB0aGF0IGlzIG5vdCBpbiB0aGUgJ0Rpc2Nvbm5lY3RlZCcgc3RhdGUuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3Rpbmc7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTdGFydGluZyBIdWJDb25uZWN0aW9uLlwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zdGFydEludGVybmFsKCk7XHJcbiAgICAgICAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIExvZyB3aGVuIHRoZSBicm93c2VyIGZyZWV6ZXMgdGhlIHRhYiBzbyB1c2VycyBrbm93IHdoeSB0aGVpciBjb25uZWN0aW9uIHVuZXhwZWN0ZWRseSBzdG9wcGVkIHdvcmtpbmdcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZnJlZXplXCIsIHRoaXMuX2ZyZWV6ZUV2ZW50TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJIdWJDb25uZWN0aW9uIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgSHViQ29ubmVjdGlvbiBmYWlsZWQgdG8gc3RhcnQgc3VjY2Vzc2Z1bGx5IGJlY2F1c2Ugb2YgZXJyb3IgJyR7ZX0nLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgX3N0YXJ0SW50ZXJuYWwoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RvcER1cmluZ1N0YXJ0RXJyb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fcmVjZWl2ZWRIYW5kc2hha2VSZXNwb25zZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFNldCB1cCB0aGUgcHJvbWlzZSBiZWZvcmUgYW55IGNvbm5lY3Rpb24gaXMgKHJlKXN0YXJ0ZWQgb3RoZXJ3aXNlIGl0IGNvdWxkIHJhY2Ugd2l0aCByZWNlaXZlZCBtZXNzYWdlc1xyXG4gICAgICAgIGNvbnN0IGhhbmRzaGFrZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRzaGFrZVJlc29sdmVyID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZHNoYWtlUmVqZWN0ZXIgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0aW9uLnN0YXJ0KHRoaXMuX3Byb3RvY29sLnRyYW5zZmVyRm9ybWF0KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kc2hha2VSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvdG9jb2w6IHRoaXMuX3Byb3RvY29sLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLl9wcm90b2NvbC52ZXJzaW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIlNlbmRpbmcgaGFuZHNoYWtlIHJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZSh0aGlzLl9oYW5kc2hha2VQcm90b2NvbC53cml0ZUhhbmRzaGFrZVJlcXVlc3QoaGFuZHNoYWtlUmVxdWVzdCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgVXNpbmcgSHViUHJvdG9jb2wgJyR7dGhpcy5fcHJvdG9jb2wubmFtZX0nLmApO1xyXG4gICAgICAgICAgICAvLyBkZWZlbnNpdmVseSBjbGVhbnVwIHRpbWVvdXQgaW4gY2FzZSB3ZSByZWNlaXZlIGEgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIgYmVmb3JlIHdlIGZpbmlzaCBzdGFydFxyXG4gICAgICAgICAgICB0aGlzLl9jbGVhbnVwVGltZW91dCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldFRpbWVvdXRQZXJpb2QoKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRLZWVwQWxpdmVJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICBhd2FpdCBoYW5kc2hha2VQcm9taXNlO1xyXG4gICAgICAgICAgICAvLyBJdCdzIGltcG9ydGFudCB0byBjaGVjayB0aGUgc3RvcER1cmluZ1N0YXJ0RXJyb3IgaW5zdGVhZCBvZiBqdXN0IHJlbHlpbmcgb24gdGhlIGhhbmRzaGFrZVByb21pc2VcclxuICAgICAgICAgICAgLy8gYmVpbmcgcmVqZWN0ZWQgb24gY2xvc2UsIGJlY2F1c2UgdGhpcyBjb250aW51YXRpb24gY2FuIHJ1biBhZnRlciBib3RoIHRoZSBoYW5kc2hha2UgY29tcGxldGVkIHN1Y2Nlc3NmdWxseVxyXG4gICAgICAgICAgICAvLyBhbmQgdGhlIGNvbm5lY3Rpb24gd2FzIGNsb3NlZC5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0b3BEdXJpbmdTdGFydEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJdCdzIGltcG9ydGFudCB0byB0aHJvdyBpbnN0ZWFkIG9mIHJldHVybmluZyBhIHJlamVjdGVkIHByb21pc2UsIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBhbGxvdyBhbnkgc3RhdGVcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb25zIHRvIG9jY3VyIGJldHdlZW4gbm93IGFuZCB0aGUgY2FsbGluZyBjb2RlIG9ic2VydmluZyB0aGUgZXhjZXB0aW9ucy4gUmV0dXJuaW5nIGEgcmVqZWN0ZWQgcHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBjYXVzZSB0aGUgY2FsbGluZyBjb250aW51YXRpb24gdG8gZ2V0IHNjaGVkdWxlZCB0byBydW4gbGF0ZXIuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRocm93LWxpdGVyYWxcclxuICAgICAgICAgICAgICAgIHRocm93IHRoaXMuX3N0b3BEdXJpbmdTdGFydEVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRGVidWcsIGBIdWIgaGFuZHNoYWtlIGZhaWxlZCB3aXRoIGVycm9yICcke2V9JyBkdXJpbmcgc3RhcnQoKS4gU3RvcHBpbmcgSHViQ29ubmVjdGlvbi5gKTtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYW51cFRpbWVvdXQoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgICAgICAvLyBIdHRwQ29ubmVjdGlvbi5zdG9wKCkgc2hvdWxkIG5vdCBjb21wbGV0ZSB1bnRpbCBhZnRlciB0aGUgb25jbG9zZSBjYWxsYmFjayBpcyBpbnZva2VkLlxyXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgdHJhbnNpdGlvbiB0aGUgSHViQ29ubmVjdGlvbiB0byB0aGUgZGlzY29ubmVjdGVkIHN0YXRlIGJlZm9yZSBIdHRwQ29ubmVjdGlvbi5zdG9wKCkgY29tcGxldGVzLlxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3Rpb24uc3RvcChlKTtcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogU3RvcHMgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGNvbm5lY3Rpb24gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHRlcm1pbmF0ZWQsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgc3RvcCgpIHtcclxuICAgICAgICAvLyBDYXB0dXJlIHRoZSBzdGFydCBwcm9taXNlIGJlZm9yZSB0aGUgY29ubmVjdGlvbiBtaWdodCBiZSByZXN0YXJ0ZWQgaW4gYW4gb25jbG9zZSBjYWxsYmFjay5cclxuICAgICAgICBjb25zdCBzdGFydFByb21pc2UgPSB0aGlzLl9zdGFydFByb21pc2U7XHJcbiAgICAgICAgdGhpcy5fc3RvcFByb21pc2UgPSB0aGlzLl9zdG9wSW50ZXJuYWwoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9zdG9wUHJvbWlzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBBd2FpdGluZyB1bmRlZmluZWQgY29udGludWVzIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIGF3YWl0IHN0YXJ0UHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBleGNlcHRpb24gaXMgcmV0dXJuZWQgdG8gdGhlIHVzZXIgYXMgYSByZWplY3RlZCBQcm9taXNlIGZyb20gdGhlIHN0YXJ0IG1ldGhvZC5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfc3RvcEludGVybmFsKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgQ2FsbCB0byBIdWJDb25uZWN0aW9uLnN0b3AoJHtlcnJvcn0pIGlnbm9yZWQgYmVjYXVzZSBpdCBpcyBhbHJlYWR5IGluIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYENhbGwgdG8gSHR0cENvbm5lY3Rpb24uc3RvcCgke2Vycm9yfSkgaWdub3JlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHkgaW4gdGhlIGRpc2Nvbm5lY3Rpbmcgc3RhdGUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdG9wUHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3Rpbmc7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTdG9wcGluZyBIdWJDb25uZWN0aW9uLlwiKTtcclxuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0RGVsYXlIYW5kbGUpIHtcclxuICAgICAgICAgICAgLy8gV2UncmUgaW4gYSByZWNvbm5lY3QgZGVsYXkgd2hpY2ggbWVhbnMgdGhlIHVuZGVybHlpbmcgY29ubmVjdGlvbiBpcyBjdXJyZW50bHkgYWxyZWFkeSBzdG9wcGVkLlxyXG4gICAgICAgICAgICAvLyBKdXN0IGNsZWFyIHRoZSBoYW5kbGUgdG8gc3RvcCB0aGUgcmVjb25uZWN0IGxvb3AgKHdoaWNoIG5vIG9uZSBpcyB3YWl0aW5nIG9uIHRoYW5rZnVsbHkpIGFuZFxyXG4gICAgICAgICAgICAvLyBmaXJlIHRoZSBvbmNsb3NlIGNhbGxiYWNrcy5cclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIHN0b3BwZWQgZHVyaW5nIHJlY29ubmVjdCBkZWxheS4gRG9uZSByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVjb25uZWN0RGVsYXlIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3REZWxheUhhbmRsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGVDbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NsZWFudXBUaW1lb3V0KCk7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cFBpbmdUaW1lcigpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BEdXJpbmdTdGFydEVycm9yID0gZXJyb3IgfHwgbmV3IEVycm9yKFwiVGhlIGNvbm5lY3Rpb24gd2FzIHN0b3BwZWQgYmVmb3JlIHRoZSBodWIgaGFuZHNoYWtlIGNvdWxkIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICAvLyBIdHRwQ29ubmVjdGlvbi5zdG9wKCkgc2hvdWxkIG5vdCBjb21wbGV0ZSB1bnRpbCBhZnRlciBlaXRoZXIgSHR0cENvbm5lY3Rpb24uc3RhcnQoKSBmYWlsc1xyXG4gICAgICAgIC8vIG9yIHRoZSBvbmNsb3NlIGNhbGxiYWNrIGlzIGludm9rZWQuIFRoZSBvbmNsb3NlIGNhbGxiYWNrIHdpbGwgdHJhbnNpdGlvbiB0aGUgSHViQ29ubmVjdGlvblxyXG4gICAgICAgIC8vIHRvIHRoZSBkaXNjb25uZWN0ZWQgc3RhdGUgaWYgbmVlZCBiZSBiZWZvcmUgSHR0cENvbm5lY3Rpb24uc3RvcCgpIGNvbXBsZXRlcy5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnN0b3AoZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgLyoqIEludm9rZXMgYSBzdHJlYW1pbmcgaHViIG1ldGhvZCBvbiB0aGUgc2VydmVyIHVzaW5nIHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgYXJndW1lbnRzLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlcGFyYW0gVCBUaGUgdHlwZSBvZiB0aGUgaXRlbXMgcmV0dXJuZWQgYnkgdGhlIHNlcnZlci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIgbWV0aG9kIHRvIGludm9rZS5cclxuICAgICAqIEBwYXJhbSB7YW55W119IGFyZ3MgVGhlIGFyZ3VtZW50cyB1c2VkIHRvIGludm9rZSB0aGUgc2VydmVyIG1ldGhvZC5cclxuICAgICAqIEByZXR1cm5zIHtJU3RyZWFtUmVzdWx0PFQ+fSBBbiBvYmplY3QgdGhhdCB5aWVsZHMgcmVzdWx0cyBmcm9tIHRoZSBzZXJ2ZXIgYXMgdGhleSBhcmUgcmVjZWl2ZWQuXHJcbiAgICAgKi9cclxuICAgIHN0cmVhbShtZXRob2ROYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgW3N0cmVhbXMsIHN0cmVhbUlkc10gPSB0aGlzLl9yZXBsYWNlU3RyZWFtaW5nUGFyYW1zKGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IGludm9jYXRpb25EZXNjcmlwdG9yID0gdGhpcy5fY3JlYXRlU3RyZWFtSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCBzdHJlYW1JZHMpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcclxuICAgICAgICBsZXQgcHJvbWlzZVF1ZXVlO1xyXG4gICAgICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICAgIHN1YmplY3QuY2FuY2VsQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEludm9jYXRpb24gPSB0aGlzLl9jcmVhdGVDYW5jZWxJbnZvY2F0aW9uKGludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbaW52b2NhdGlvbkRlc2NyaXB0b3IuaW52b2NhdGlvbklkXTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VRdWV1ZS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZW5kV2l0aFByb3RvY29sKGNhbmNlbEludm9jYXRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdID0gKGludm9jYXRpb25FdmVudCwgZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpbnZvY2F0aW9uRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGludm9jYXRpb25FdmVudCB3aWxsIG5vdCBiZSBudWxsIHdoZW4gYW4gZXJyb3IgaXMgbm90IHBhc3NlZCB0byB0aGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uRXZlbnQudHlwZSA9PT0gTWVzc2FnZVR5cGUuQ29tcGxldGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uRXZlbnQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihuZXcgRXJyb3IoaW52b2NhdGlvbkV2ZW50LmVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5uZXh0KChpbnZvY2F0aW9uRXZlbnQuaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwcm9taXNlUXVldWUgPSB0aGlzLl9zZW5kV2l0aFByb3RvY29sKGludm9jYXRpb25EZXNjcmlwdG9yKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tpbnZvY2F0aW9uRGVzY3JpcHRvci5pbnZvY2F0aW9uSWRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2xhdW5jaFN0cmVhbXMoc3RyZWFtcywgcHJvbWlzZVF1ZXVlKTtcclxuICAgICAgICByZXR1cm4gc3ViamVjdDtcclxuICAgIH1cclxuICAgIF9zZW5kTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzZXRLZWVwQWxpdmVJbnRlcnZhbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZChtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYSBqcyBvYmplY3QgdG8gdGhlIHNlcnZlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBqcyBvYmplY3QgdG8gc2VyaWFsaXplIGFuZCBzZW5kLlxyXG4gICAgICovXHJcbiAgICBfc2VuZFdpdGhQcm90b2NvbChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRNZXNzYWdlKHRoaXMuX3Byb3RvY29sLndyaXRlTWVzc2FnZShtZXNzYWdlKSk7XHJcbiAgICB9XHJcbiAgICAvKiogSW52b2tlcyBhIGh1YiBtZXRob2Qgb24gdGhlIHNlcnZlciB1c2luZyB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIGFyZ3VtZW50cy4gRG9lcyBub3Qgd2FpdCBmb3IgYSByZXNwb25zZSBmcm9tIHRoZSByZWNlaXZlci5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgUHJvbWlzZSByZXR1cm5lZCBieSB0aGlzIG1ldGhvZCByZXNvbHZlcyB3aGVuIHRoZSBjbGllbnQgaGFzIHNlbnQgdGhlIGludm9jYXRpb24gdG8gdGhlIHNlcnZlci4gVGhlIHNlcnZlciBtYXkgc3RpbGxcclxuICAgICAqIGJlIHByb2Nlc3NpbmcgdGhlIGludm9jYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlcnZlciBtZXRob2QgdG8gaW52b2tlLlxyXG4gICAgICogQHBhcmFtIHthbnlbXX0gYXJncyBUaGUgYXJndW1lbnRzIHVzZWQgdG8gaW52b2tlIHRoZSBzZXJ2ZXIgbWV0aG9kLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGludm9jYXRpb24gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHNlbnQsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgICAqL1xyXG4gICAgc2VuZChtZXRob2ROYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgW3N0cmVhbXMsIHN0cmVhbUlkc10gPSB0aGlzLl9yZXBsYWNlU3RyZWFtaW5nUGFyYW1zKGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IHNlbmRQcm9taXNlID0gdGhpcy5fc2VuZFdpdGhQcm90b2NvbCh0aGlzLl9jcmVhdGVJbnZvY2F0aW9uKG1ldGhvZE5hbWUsIGFyZ3MsIHRydWUsIHN0cmVhbUlkcykpO1xyXG4gICAgICAgIHRoaXMuX2xhdW5jaFN0cmVhbXMoc3RyZWFtcywgc2VuZFByb21pc2UpO1xyXG4gICAgICAgIHJldHVybiBzZW5kUHJvbWlzZTtcclxuICAgIH1cclxuICAgIC8qKiBJbnZva2VzIGEgaHViIG1ldGhvZCBvbiB0aGUgc2VydmVyIHVzaW5nIHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgYXJndW1lbnRzLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBQcm9taXNlIHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kIHJlc29sdmVzIHdoZW4gdGhlIHNlcnZlciBpbmRpY2F0ZXMgaXQgaGFzIGZpbmlzaGVkIGludm9raW5nIHRoZSBtZXRob2QuIFdoZW4gdGhlIHByb21pc2VcclxuICAgICAqIHJlc29sdmVzLCB0aGUgc2VydmVyIGhhcyBmaW5pc2hlZCBpbnZva2luZyB0aGUgbWV0aG9kLiBJZiB0aGUgc2VydmVyIG1ldGhvZCByZXR1cm5zIGEgcmVzdWx0LCBpdCBpcyBwcm9kdWNlZCBhcyB0aGUgcmVzdWx0IG9mXHJcbiAgICAgKiByZXNvbHZpbmcgdGhlIFByb21pc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGVwYXJhbSBUIFRoZSBleHBlY3RlZCByZXR1cm4gdHlwZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIgbWV0aG9kIHRvIGludm9rZS5cclxuICAgICAqIEBwYXJhbSB7YW55W119IGFyZ3MgVGhlIGFyZ3VtZW50cyB1c2VkIHRvIGludm9rZSB0aGUgc2VydmVyIG1ldGhvZC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIHNlcnZlciBtZXRob2QgKGlmIGFueSksIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgICAqL1xyXG4gICAgaW52b2tlKG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBbc3RyZWFtcywgc3RyZWFtSWRzXSA9IHRoaXMuX3JlcGxhY2VTdHJlYW1pbmdQYXJhbXMoYXJncyk7XHJcbiAgICAgICAgY29uc3QgaW52b2NhdGlvbkRlc2NyaXB0b3IgPSB0aGlzLl9jcmVhdGVJbnZvY2F0aW9uKG1ldGhvZE5hbWUsIGFyZ3MsIGZhbHNlLCBzdHJlYW1JZHMpO1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGludm9jYXRpb25JZCB3aWxsIGFsd2F5cyBoYXZlIGEgdmFsdWUgZm9yIGEgbm9uLWJsb2NraW5nIGludm9jYXRpb25cclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF0gPSAoaW52b2NhdGlvbkV2ZW50LCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnZvY2F0aW9uRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnZvY2F0aW9uRXZlbnQgd2lsbCBub3QgYmUgbnVsbCB3aGVuIGFuIGVycm9yIGlzIG5vdCBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludm9jYXRpb25FdmVudC50eXBlID09PSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uRXZlbnQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoaW52b2NhdGlvbkV2ZW50LmVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGludm9jYXRpb25FdmVudC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmV4cGVjdGVkIG1lc3NhZ2UgdHlwZTogJHtpbnZvY2F0aW9uRXZlbnQudHlwZX1gKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlUXVldWUgPSB0aGlzLl9zZW5kV2l0aFByb3RvY29sKGludm9jYXRpb25EZXNjcmlwdG9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnZvY2F0aW9uSWQgd2lsbCBhbHdheXMgaGF2ZSBhIHZhbHVlIGZvciBhIG5vbi1ibG9ja2luZyBpbnZvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2ludm9jYXRpb25EZXNjcmlwdG9yLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9sYXVuY2hTdHJlYW1zKHN0cmVhbXMsIHByb21pc2VRdWV1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICAvKiogUmVnaXN0ZXJzIGEgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBodWIgbWV0aG9kIHdpdGggdGhlIHNwZWNpZmllZCBtZXRob2QgbmFtZSBpcyBpbnZva2VkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBodWIgbWV0aG9kIHRvIGRlZmluZS5cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG5ld01ldGhvZCBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgcmFpc2VkIHdoZW4gdGhlIGh1YiBtZXRob2QgaXMgaW52b2tlZC5cclxuICAgICAqL1xyXG4gICAgb24obWV0aG9kTmFtZSwgbmV3TWV0aG9kKSB7XHJcbiAgICAgICAgaWYgKCFtZXRob2ROYW1lIHx8ICFuZXdNZXRob2QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2ROYW1lID0gbWV0aG9kTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICghdGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tZXRob2RzW21ldGhvZE5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFByZXZlbnRpbmcgYWRkaW5nIHRoZSBzYW1lIGhhbmRsZXIgbXVsdGlwbGUgdGltZXMuXHJcbiAgICAgICAgaWYgKHRoaXMuX21ldGhvZHNbbWV0aG9kTmFtZV0uaW5kZXhPZihuZXdNZXRob2QpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX21ldGhvZHNbbWV0aG9kTmFtZV0ucHVzaChuZXdNZXRob2QpO1xyXG4gICAgfVxyXG4gICAgb2ZmKG1ldGhvZE5hbWUsIG1ldGhvZCkge1xyXG4gICAgICAgIGlmICghbWV0aG9kTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZE5hbWUgPSBtZXRob2ROYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9tZXRob2RzW21ldGhvZE5hbWVdO1xyXG4gICAgICAgIGlmICghaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUlkeCA9IGhhbmRsZXJzLmluZGV4T2YobWV0aG9kKTtcclxuICAgICAgICAgICAgaWYgKHJlbW92ZUlkeCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShyZW1vdmVJZHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tZXRob2RzW21ldGhvZE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogUmVnaXN0ZXJzIGEgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZC4gT3B0aW9uYWxseSByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCBjb250YWluaW5nIHRoZSBlcnJvciB0aGF0IGNhdXNlZCB0aGUgY29ubmVjdGlvbiB0byBjbG9zZSAoaWYgYW55KS5cclxuICAgICAqL1xyXG4gICAgb25jbG9zZShjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9jbG9zZWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgY29ubmVjdGlvbiBzdGFydHMgcmVjb25uZWN0aW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gc3RhcnRzIHJlY29ubmVjdGluZy4gT3B0aW9uYWxseSByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCBjb250YWluaW5nIHRoZSBlcnJvciB0aGF0IGNhdXNlZCB0aGUgY29ubmVjdGlvbiB0byBzdGFydCByZWNvbm5lY3RpbmcgKGlmIGFueSkuXHJcbiAgICAgKi9cclxuICAgIG9ucmVjb25uZWN0aW5nKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZ0NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogUmVnaXN0ZXJzIGEgaGFuZGxlciB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSByZWNvbm5lY3RzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5IHJlY29ubmVjdHMuXHJcbiAgICAgKi9cclxuICAgIG9ucmVjb25uZWN0ZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0ZWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3Byb2Nlc3NJbmNvbWluZ0RhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXBUaW1lb3V0KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9yZWNlaXZlZEhhbmRzaGFrZVJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLl9wcm9jZXNzSGFuZHNoYWtlUmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY2VpdmVkSGFuZHNoYWtlUmVzcG9uc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEYXRhIG1heSBoYXZlIGFsbCBiZWVuIHJlYWQgd2hlbiBwcm9jZXNzaW5nIGhhbmRzaGFrZSByZXNwb25zZVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBtZXNzYWdlc1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuX3Byb3RvY29sLnBhcnNlTWVzc2FnZXMoZGF0YSwgdGhpcy5fbG9nZ2VyKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSW52b2NhdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlQ2xpZW50TWV0aG9kKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlN0cmVhbUl0ZW06XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2tzW21lc3NhZ2UuaW52b2NhdGlvbklkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSBNZXNzYWdlVHlwZS5Db21wbGV0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1ttZXNzYWdlLmludm9jYXRpb25JZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgU3RyZWFtIGNhbGxiYWNrIHRocmV3IGVycm9yOiAke2dldEVycm9yU3RyaW5nKGUpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlBpbmc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGNhcmUgYWJvdXQgcGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5DbG9zZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIkNsb3NlIG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBzZXJ2ZXIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG1lc3NhZ2UuZXJyb3IgPyBuZXcgRXJyb3IoXCJTZXJ2ZXIgcmV0dXJuZWQgYW4gZXJyb3Igb24gY2xvc2U6IFwiICsgbWVzc2FnZS5lcnJvcikgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmFsbG93UmVjb25uZWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCBmZWVscyB3cm9uZyBub3QgdG8gYXdhaXQgY29ubmVjdGlvbi5zdG9wKCkgaGVyZSwgYnV0IHByb2Nlc3NJbmNvbWluZ0RhdGEgaXMgY2FsbGVkIGFzIHBhcnQgb2YgYW4gb25yZWNlaXZlIGNhbGxiYWNrIHdoaWNoIGlzIG5vdCBhc3luYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYWxyZWFkeSB0aGUgYmVoYXZpb3IgZm9yIHNlcnZlclRpbWVvdXQoKSwgYW5kIEh0dHBDb25uZWN0aW9uLlN0b3AoKSBzaG91bGQgY2F0Y2ggYW5kIGxvZyBhbGwgcG9zc2libGUgZXhjZXB0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5zdG9wKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbm5vdCBhd2FpdCBzdG9wSW50ZXJuYWwoKSBoZXJlLCBidXQgc3Vic2VxdWVudCBjYWxscyB0byBzdG9wKCkgd2lsbCBhd2FpdCB0aGlzIGlmIHN0b3BJbnRlcm5hbCgpIGlzIHN0aWxsIG9uZ29pbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9wUHJvbWlzZSA9IHRoaXMuX3N0b3BJbnRlcm5hbChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgYEludmFsaWQgbWVzc2FnZSB0eXBlOiAke21lc3NhZ2UudHlwZX0uYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jlc2V0VGltZW91dFBlcmlvZCgpO1xyXG4gICAgfVxyXG4gICAgX3Byb2Nlc3NIYW5kc2hha2VSZXNwb25zZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlTWVzc2FnZTtcclxuICAgICAgICBsZXQgcmVtYWluaW5nRGF0YTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBbcmVtYWluaW5nRGF0YSwgcmVzcG9uc2VNZXNzYWdlXSA9IHRoaXMuX2hhbmRzaGFrZVByb3RvY29sLnBhcnNlSGFuZHNoYWtlUmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkVycm9yIHBhcnNpbmcgaGFuZHNoYWtlIHJlc3BvbnNlOiBcIiArIGU7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZHNoYWtlUmVqZWN0ZXIoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlTWVzc2FnZS5lcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJTZXJ2ZXIgcmV0dXJuZWQgaGFuZHNoYWtlIGVycm9yOiBcIiArIHJlc3BvbnNlTWVzc2FnZS5lcnJvcjtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kc2hha2VSZWplY3RlcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJTZXJ2ZXIgaGFuZHNoYWtlIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGFuZHNoYWtlUmVzb2x2ZXIoKTtcclxuICAgICAgICByZXR1cm4gcmVtYWluaW5nRGF0YTtcclxuICAgIH1cclxuICAgIF9yZXNldEtlZXBBbGl2ZUludGVydmFsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24uZmVhdHVyZXMuaW5oZXJlbnRLZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZXQgdGhlIHRpbWUgd2Ugd2FudCB0aGUgbmV4dCBrZWVwIGFsaXZlIHRvIGJlIHNlbnRcclxuICAgICAgICAvLyBUaW1lciB3aWxsIGJlIHNldHVwIG9uIG5leHQgbWVzc2FnZSByZWNlaXZlXHJcbiAgICAgICAgdGhpcy5fbmV4dEtlZXBBbGl2ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5rZWVwQWxpdmVJbnRlcnZhbEluTWlsbGlzZWNvbmRzO1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXBQaW5nVGltZXIoKTtcclxuICAgIH1cclxuICAgIF9yZXNldFRpbWVvdXRQZXJpb2QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3Rpb24uZmVhdHVyZXMgfHwgIXRoaXMuY29ubmVjdGlvbi5mZWF0dXJlcy5pbmhlcmVudEtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHRpbWVvdXQgdGltZXJcclxuICAgICAgICAgICAgdGhpcy5fdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXJ2ZXJUaW1lb3V0KCksIHRoaXMuc2VydmVyVGltZW91dEluTWlsbGlzZWNvbmRzKTtcclxuICAgICAgICAgICAgLy8gU2V0IGtlZXBBbGl2ZSB0aW1lciBpZiB0aGVyZSBpc24ndCBvbmVcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BpbmdTZXJ2ZXJIYW5kbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRQaW5nID0gdGhpcy5fbmV4dEtlZXBBbGl2ZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRQaW5nIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaW5nID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFRoZSB0aW1lciBuZWVkcyB0byBiZSBzZXQgZnJvbSBhIG5ldHdvcmtpbmcgY2FsbGJhY2sgdG8gYXZvaWQgQ2hyb21lIHRpbWVyIHRocm90dGxpbmcgZnJvbSBjYXVzaW5nIHRpbWVycyB0byBydW4gb25jZSBhIG1pbnV0ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGluZ1NlcnZlckhhbmRsZSA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKHRoaXMuX2NhY2hlZFBpbmdNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBjYXJlIGFib3V0IHRoZSBlcnJvci4gSXQgc2hvdWxkIGJlIHNlZW4gZWxzZXdoZXJlIGluIHRoZSBjbGllbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgY29ubmVjdGlvbiBpcyBwcm9iYWJseSBpbiBhIGJhZCBvciBjbG9zZWQgc3RhdGUgbm93LCBjbGVhbnVwIHRoZSB0aW1lciBzbyBpdCBzdG9wcyB0cmlnZ2VyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBuZXh0UGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBzZXJ2ZXJUaW1lb3V0KCkge1xyXG4gICAgICAgIC8vIFRoZSBzZXJ2ZXIgaGFzbid0IHRhbGtlZCB0byB1cyBpbiBhIHdoaWxlLiBJdCBkb2Vzbid0IGxpa2UgdXMgYW55bW9yZSAuLi4gOihcclxuICAgICAgICAvLyBUZXJtaW5hdGUgdGhlIGNvbm5lY3Rpb24sIGJ1dCB3ZSBkb24ndCBuZWVkIHRvIHdhaXQgb24gdGhlIHByb21pc2UuIFRoaXMgY291bGQgdHJpZ2dlciByZWNvbm5lY3RpbmcuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5zdG9wKG5ldyBFcnJvcihcIlNlcnZlciB0aW1lb3V0IGVsYXBzZWQgd2l0aG91dCByZWNlaXZpbmcgYSBtZXNzYWdlIGZyb20gdGhlIHNlcnZlci5cIikpO1xyXG4gICAgfVxyXG4gICAgX2ludm9rZUNsaWVudE1ldGhvZChpbnZvY2F0aW9uTWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZHMgPSB0aGlzLl9tZXRob2RzW2ludm9jYXRpb25NZXNzYWdlLnRhcmdldC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICBpZiAobWV0aG9kcykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKChtKSA9PiBtLmFwcGx5KHRoaXMsIGludm9jYXRpb25NZXNzYWdlLmFyZ3VtZW50cykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgQSBjYWxsYmFjayBmb3IgdGhlIG1ldGhvZCAke2ludm9jYXRpb25NZXNzYWdlLnRhcmdldC50b0xvd2VyQ2FzZSgpfSB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGludm9jYXRpb25NZXNzYWdlLmludm9jYXRpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIHYxLiBTbyB3ZSByZXR1cm4gYW4gZXJyb3IgdG8gYXZvaWQgYmxvY2tpbmcgdGhlIHNlcnZlciB3YWl0aW5nIGZvciB0aGUgcmVzcG9uc2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJTZXJ2ZXIgcmVxdWVzdGVkIGEgcmVzcG9uc2UsIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyB2ZXJzaW9uIG9mIHRoZSBjbGllbnQuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gd2FpdCBvbiB0aGUgc3RvcCBpdHNlbGYuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9wUHJvbWlzZSA9IHRoaXMuX3N0b3BJbnRlcm5hbChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBObyBjbGllbnQgbWV0aG9kIHdpdGggdGhlIG5hbWUgJyR7aW52b2NhdGlvbk1lc3NhZ2UudGFyZ2V0fScgZm91bmQuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2Nvbm5lY3Rpb25DbG9zZWQoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBgSHViQ29ubmVjdGlvbi5jb25uZWN0aW9uQ2xvc2VkKCR7ZXJyb3J9KSBjYWxsZWQgd2hpbGUgaW4gc3RhdGUgJHt0aGlzLl9jb25uZWN0aW9uU3RhdGV9LmApO1xyXG4gICAgICAgIC8vIFRyaWdnZXJpbmcgdGhpcy5oYW5kc2hha2VSZWplY3RlciBpcyBpbnN1ZmZpY2llbnQgYmVjYXVzZSBpdCBjb3VsZCBhbHJlYWR5IGJlIHJlc29sdmVkIHdpdGhvdXQgdGhlIGNvbnRpbnVhdGlvbiBoYXZpbmcgcnVuIHlldC5cclxuICAgICAgICB0aGlzLl9zdG9wRHVyaW5nU3RhcnRFcnJvciA9IHRoaXMuX3N0b3BEdXJpbmdTdGFydEVycm9yIHx8IGVycm9yIHx8IG5ldyBFcnJvcihcIlRoZSB1bmRlcmx5aW5nIGNvbm5lY3Rpb24gd2FzIGNsb3NlZCBiZWZvcmUgdGhlIGh1YiBoYW5kc2hha2UgY291bGQgY29tcGxldGUuXCIpO1xyXG4gICAgICAgIC8vIElmIHRoZSBoYW5kc2hha2UgaXMgaW4gcHJvZ3Jlc3MsIHN0YXJ0IHdpbGwgYmUgd2FpdGluZyBmb3IgdGhlIGhhbmRzaGFrZSBwcm9taXNlLCBzbyB3ZSBjb21wbGV0ZSBpdC5cclxuICAgICAgICAvLyBJZiBpdCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQsIHRoaXMgc2hvdWxkIGp1c3Qgbm9vcC5cclxuICAgICAgICBpZiAodGhpcy5faGFuZHNoYWtlUmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5faGFuZHNoYWtlUmVzb2x2ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FuY2VsQ2FsbGJhY2tzV2l0aEVycm9yKGVycm9yIHx8IG5ldyBFcnJvcihcIkludm9jYXRpb24gY2FuY2VsZWQgZHVlIHRvIHRoZSB1bmRlcmx5aW5nIGNvbm5lY3Rpb24gYmVpbmcgY2xvc2VkLlwiKSk7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cFRpbWVvdXQoKTtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwUGluZ1RpbWVyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGVDbG9zZShlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkNvbm5lY3RlZCAmJiB0aGlzLl9yZWNvbm5lY3RQb2xpY3kpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGVDbG9zZShlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIG5vbmUgb2YgdGhlIGFib3ZlIGlmIGNvbmRpdGlvbnMgd2VyZSB0cnVlIHdlcmUgY2FsbGVkIHRoZSBIdWJDb25uZWN0aW9uIG11c3QgYmUgaW4gZWl0aGVyOlxyXG4gICAgICAgIC8vIDEuIFRoZSBDb25uZWN0aW5nIHN0YXRlIGluIHdoaWNoIGNhc2UgdGhlIGhhbmRzaGFrZVJlc29sdmVyIHdpbGwgY29tcGxldGUgaXQgYW5kIHN0b3BEdXJpbmdTdGFydEVycm9yIHdpbGwgZmFpbCBpdC5cclxuICAgICAgICAvLyAyLiBUaGUgUmVjb25uZWN0aW5nIHN0YXRlIGluIHdoaWNoIGNhc2UgdGhlIGhhbmRzaGFrZVJlc29sdmVyIHdpbGwgY29tcGxldGUgaXQgYW5kIHN0b3BEdXJpbmdTdGFydEVycm9yIHdpbGwgZmFpbCB0aGUgY3VycmVudCByZWNvbm5lY3QgYXR0ZW1wdFxyXG4gICAgICAgIC8vICAgIGFuZCBwb3RlbnRpYWxseSBjb250aW51ZSB0aGUgcmVjb25uZWN0KCkgbG9vcC5cclxuICAgICAgICAvLyAzLiBUaGUgRGlzY29ubmVjdGVkIHN0YXRlIGluIHdoaWNoIGNhc2Ugd2UncmUgYWxyZWFkeSBkb25lLlxyXG4gICAgfVxyXG4gICAgX2NvbXBsZXRlQ2xvc2UoZXJyb3IpIHtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZDtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmcmVlemVcIiwgdGhpcy5fZnJlZXplRXZlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlZENhbGxiYWNrcy5mb3JFYWNoKChjKSA9PiBjLmFwcGx5KHRoaXMsIFtlcnJvcl0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5FcnJvciwgYEFuIG9uY2xvc2UgY2FsbGJhY2sgY2FsbGVkIHdpdGggZXJyb3IgJyR7ZXJyb3J9JyB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBfcmVjb25uZWN0KGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgcmVjb25uZWN0U3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBsZXQgcHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgbGV0IHJldHJ5RXJyb3IgPSBlcnJvciAhPT0gdW5kZWZpbmVkID8gZXJyb3IgOiBuZXcgRXJyb3IoXCJBdHRlbXB0aW5nIHRvIHJlY29ubmVjdCBkdWUgdG8gYSB1bmtub3duIGVycm9yLlwiKTtcclxuICAgICAgICBsZXQgbmV4dFJldHJ5RGVsYXkgPSB0aGlzLl9nZXROZXh0UmV0cnlEZWxheShwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzKyssIDAsIHJldHJ5RXJyb3IpO1xyXG4gICAgICAgIGlmIChuZXh0UmV0cnlEZWxheSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkRlYnVnLCBcIkNvbm5lY3Rpb24gbm90IHJlY29ubmVjdGluZyBiZWNhdXNlIHRoZSBJUmV0cnlQb2xpY3kgcmV0dXJuZWQgbnVsbCBvbiB0aGUgZmlyc3QgcmVjb25uZWN0IGF0dGVtcHQuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZUNsb3NlKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uU3RhdGUgPSBIdWJDb25uZWN0aW9uU3RhdGUuUmVjb25uZWN0aW5nO1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgQ29ubmVjdGlvbiByZWNvbm5lY3RpbmcgYmVjYXVzZSBvZiBlcnJvciAnJHtlcnJvcn0nLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgXCJDb25uZWN0aW9uIHJlY29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RpbmdDYWxsYmFja3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmdDYWxsYmFja3MuZm9yRWFjaCgoYykgPT4gYy5hcHBseSh0aGlzLCBbZXJyb3JdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBBbiBvbnJlY29ubmVjdGluZyBjYWxsYmFjayBjYWxsZWQgd2l0aCBlcnJvciAnJHtlcnJvcn0nIHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFeGl0IGVhcmx5IGlmIGFuIG9ucmVjb25uZWN0aW5nIGNhbGxiYWNrIGNhbGxlZCBjb25uZWN0aW9uLnN0b3AoKS5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIGxlZnQgdGhlIHJlY29ubmVjdGluZyBzdGF0ZSBpbiBvbnJlY29ubmVjdGluZyBjYWxsYmFjay4gRG9uZSByZWNvbm5lY3RpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChuZXh0UmV0cnlEZWxheSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgUmVjb25uZWN0IGF0dGVtcHQgbnVtYmVyICR7cHJldmlvdXNSZWNvbm5lY3RBdHRlbXB0c30gd2lsbCBzdGFydCBpbiAke25leHRSZXRyeURlbGF5fSBtcy5gKTtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdERlbGF5SGFuZGxlID0gc2V0VGltZW91dChyZXNvbHZlLCBuZXh0UmV0cnlEZWxheSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3REZWxheUhhbmRsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gSHViQ29ubmVjdGlvblN0YXRlLlJlY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgXCJDb25uZWN0aW9uIGxlZnQgdGhlIHJlY29ubmVjdGluZyBzdGF0ZSBkdXJpbmcgcmVjb25uZWN0IGRlbGF5LiBEb25lIHJlY29ubmVjdGluZy5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0SW50ZXJuYWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9IEh1YkNvbm5lY3Rpb25TdGF0ZS5Db25uZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIkh1YkNvbm5lY3Rpb24gcmVjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RlZENhbGxiYWNrcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RlZENhbGxiYWNrcy5mb3JFYWNoKChjKSA9PiBjLmFwcGx5KHRoaXMsIFt0aGlzLmNvbm5lY3Rpb24uY29ubmVjdGlvbklkXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgQW4gb25yZWNvbm5lY3RlZCBjYWxsYmFjayBjYWxsZWQgd2l0aCBjb25uZWN0aW9uSWQgJyR7dGhpcy5jb25uZWN0aW9uLmNvbm5lY3Rpb25JZH07IHRocmV3IGVycm9yICcke2V9Jy5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBSZWNvbm5lY3QgYXR0ZW1wdCBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSBIdWJDb25uZWN0aW9uU3RhdGUuUmVjb25uZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5EZWJ1ZywgYENvbm5lY3Rpb24gbW92ZWQgdG8gdGhlICcke3RoaXMuX2Nvbm5lY3Rpb25TdGF0ZX0nIGZyb20gdGhlIHJlY29ubmVjdGluZyBzdGF0ZSBkdXJpbmcgcmVjb25uZWN0IGF0dGVtcHQuIERvbmUgcmVjb25uZWN0aW5nLmApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRoaW5rcyB0aGF0IGNvbm5lY3Rpb25TdGF0ZSBtdXN0IGJlIENvbm5lY3RlZCBoZXJlLiBUaGUgVHlwZVNjcmlwdCBjb21waWxlciBpcyB3cm9uZy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb21wbGV0ZUNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHJ5RXJyb3IgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlIDogbmV3IEVycm9yKGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBuZXh0UmV0cnlEZWxheSA9IHRoaXMuX2dldE5leHRSZXRyeURlbGF5KHByZXZpb3VzUmVjb25uZWN0QXR0ZW1wdHMrKywgRGF0ZS5ub3coKSAtIHJlY29ubmVjdFN0YXJ0VGltZSwgcmV0cnlFcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYFJlY29ubmVjdCByZXRyaWVzIGhhdmUgYmVlbiBleGhhdXN0ZWQgYWZ0ZXIgJHtEYXRlLm5vdygpIC0gcmVjb25uZWN0U3RhcnRUaW1lfSBtcyBhbmQgJHtwcmV2aW91c1JlY29ubmVjdEF0dGVtcHRzfSBmYWlsZWQgYXR0ZW1wdHMuIENvbm5lY3Rpb24gZGlzY29ubmVjdGluZy5gKTtcclxuICAgICAgICB0aGlzLl9jb21wbGV0ZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBfZ2V0TmV4dFJldHJ5RGVsYXkocHJldmlvdXNSZXRyeUNvdW50LCBlbGFwc2VkTWlsbGlzZWNvbmRzLCByZXRyeVJlYXNvbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3RQb2xpY3kubmV4dFJldHJ5RGVsYXlJbk1pbGxpc2Vjb25kcyh7XHJcbiAgICAgICAgICAgICAgICBlbGFwc2VkTWlsbGlzZWNvbmRzLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNSZXRyeUNvdW50LFxyXG4gICAgICAgICAgICAgICAgcmV0cnlSZWFzb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgSVJldHJ5UG9saWN5Lm5leHRSZXRyeURlbGF5SW5NaWxsaXNlY29uZHMoJHtwcmV2aW91c1JldHJ5Q291bnR9LCAke2VsYXBzZWRNaWxsaXNlY29uZHN9KSB0aHJldyBlcnJvciAnJHtlfScuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9jYW5jZWxDYWxsYmFja3NXaXRoRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3M7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMoY2FsbGJhY2tzKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gY2FsbGJhY2tzW2tleV07XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuRXJyb3IsIGBTdHJlYW0gJ2Vycm9yJyBjYWxsYmFjayBjYWxsZWQgd2l0aCAnJHtlcnJvcn0nIHRocmV3IGVycm9yOiAke2dldEVycm9yU3RyaW5nKGUpfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfY2xlYW51cFBpbmdUaW1lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGluZ1NlcnZlckhhbmRsZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fcGluZ1NlcnZlckhhbmRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BpbmdTZXJ2ZXJIYW5kbGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2NsZWFudXBUaW1lb3V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90aW1lb3V0SGFuZGxlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0SGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlSW52b2NhdGlvbihtZXRob2ROYW1lLCBhcmdzLCBub25ibG9ja2luZywgc3RyZWFtSWRzKSB7XHJcbiAgICAgICAgaWYgKG5vbmJsb2NraW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHJlYW1JZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYW1JZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkludm9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkludm9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBpbnZvY2F0aW9uSWQgPSB0aGlzLl9pbnZvY2F0aW9uSWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludm9jYXRpb25JZCsrO1xyXG4gICAgICAgICAgICBpZiAoc3RyZWFtSWRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpbnZvY2F0aW9uSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYW1JZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkludm9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpbnZvY2F0aW9uSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG1ldGhvZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuSW52b2NhdGlvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfbGF1bmNoU3RyZWFtcyhzdHJlYW1zLCBwcm9taXNlUXVldWUpIHtcclxuICAgICAgICBpZiAoc3RyZWFtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTeW5jaHJvbml6ZSBzdHJlYW0gZGF0YSBzbyB0aGV5IGFycml2ZSBpbi1vcmRlciBvbiB0aGUgc2VydmVyXHJcbiAgICAgICAgaWYgKCFwcm9taXNlUXVldWUpIHtcclxuICAgICAgICAgICAgcHJvbWlzZVF1ZXVlID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdlIHdhbnQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBrZXlzLCBzaW5jZSB0aGUga2V5cyBhcmUgdGhlIHN0cmVhbSBpZHNcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXHJcbiAgICAgICAgZm9yIChjb25zdCBzdHJlYW1JZCBpbiBzdHJlYW1zKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbXNbc3RyZWFtSWRdLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IHByb21pc2VRdWV1ZS50aGVuKCgpID0+IHRoaXMuX3NlbmRXaXRoUHJvdG9jb2wodGhpcy5fY3JlYXRlQ29tcGxldGlvbk1lc3NhZ2Uoc3RyZWFtSWQpKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnIgJiYgZXJyLnRvU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlVua25vd24gZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVF1ZXVlID0gcHJvbWlzZVF1ZXVlLnRoZW4oKCkgPT4gdGhpcy5fc2VuZFdpdGhQcm90b2NvbCh0aGlzLl9jcmVhdGVDb21wbGV0aW9uTWVzc2FnZShzdHJlYW1JZCwgbWVzc2FnZSkpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXh0OiAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IHByb21pc2VRdWV1ZS50aGVuKCgpID0+IHRoaXMuX3NlbmRXaXRoUHJvdG9jb2wodGhpcy5fY3JlYXRlU3RyZWFtSXRlbU1lc3NhZ2Uoc3RyZWFtSWQsIGl0ZW0pKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVwbGFjZVN0cmVhbWluZ1BhcmFtcyhhcmdzKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbUlkcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhcmd1bWVudCA9IGFyZ3NbaV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc09ic2VydmFibGUoYXJndW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYW1JZCA9IHRoaXMuX2ludm9jYXRpb25JZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9jYXRpb25JZCsrO1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHN0cmVhbSBmb3IgbGF0ZXIgdXNlXHJcbiAgICAgICAgICAgICAgICBzdHJlYW1zW3N0cmVhbUlkXSA9IGFyZ3VtZW50O1xyXG4gICAgICAgICAgICAgICAgc3RyZWFtSWRzLnB1c2goc3RyZWFtSWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgc3RyZWFtIGZyb20gYXJnc1xyXG4gICAgICAgICAgICAgICAgYXJncy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtzdHJlYW1zLCBzdHJlYW1JZHNdO1xyXG4gICAgfVxyXG4gICAgX2lzT2JzZXJ2YWJsZShhcmcpIHtcclxuICAgICAgICAvLyBUaGlzIGFsbG93cyBvdGhlciBzdHJlYW0gaW1wbGVtZW50YXRpb25zIHRvIGp1c3Qgd29yayAobGlrZSByeGpzKVxyXG4gICAgICAgIHJldHVybiBhcmcgJiYgYXJnLnN1YnNjcmliZSAmJiB0eXBlb2YgYXJnLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZVN0cmVhbUludm9jYXRpb24obWV0aG9kTmFtZSwgYXJncywgc3RyZWFtSWRzKSB7XHJcbiAgICAgICAgY29uc3QgaW52b2NhdGlvbklkID0gdGhpcy5faW52b2NhdGlvbklkO1xyXG4gICAgICAgIHRoaXMuX2ludm9jYXRpb25JZCsrO1xyXG4gICAgICAgIGlmIChzdHJlYW1JZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGludm9jYXRpb25JZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgc3RyZWFtSWRzLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuU3RyZWFtSW52b2NhdGlvbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGludm9jYXRpb25JZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBtZXRob2ROYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuU3RyZWFtSW52b2NhdGlvbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlQ2FuY2VsSW52b2NhdGlvbihpZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25JZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNhbmNlbEludm9jYXRpb24sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVTdHJlYW1JdGVtTWVzc2FnZShpZCwgaXRlbSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25JZDogaWQsXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlN0cmVhbUl0ZW0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVDb21wbGV0aW9uTWVzc2FnZShpZCwgZXJyb3IsIHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBpbnZvY2F0aW9uSWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuQ29tcGxldGlvbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW52b2NhdGlvbklkOiBpZCxcclxuICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5Db21wbGV0aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHViQ29ubmVjdGlvbi5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IERlZmF1bHRSZWNvbm5lY3RQb2xpY3kgfSBmcm9tIFwiLi9EZWZhdWx0UmVjb25uZWN0UG9saWN5XCI7XHJcbmltcG9ydCB7IEh0dHBDb25uZWN0aW9uIH0gZnJvbSBcIi4vSHR0cENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgSHViQ29ubmVjdGlvbiB9IGZyb20gXCIuL0h1YkNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IEpzb25IdWJQcm90b2NvbCB9IGZyb20gXCIuL0pzb25IdWJQcm90b2NvbFwiO1xyXG5pbXBvcnQgeyBOdWxsTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2Vyc1wiO1xyXG5pbXBvcnQgeyBBcmcsIENvbnNvbGVMb2dnZXIgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5jb25zdCBMb2dMZXZlbE5hbWVNYXBwaW5nID0ge1xyXG4gICAgdHJhY2U6IExvZ0xldmVsLlRyYWNlLFxyXG4gICAgZGVidWc6IExvZ0xldmVsLkRlYnVnLFxyXG4gICAgaW5mbzogTG9nTGV2ZWwuSW5mb3JtYXRpb24sXHJcbiAgICBpbmZvcm1hdGlvbjogTG9nTGV2ZWwuSW5mb3JtYXRpb24sXHJcbiAgICB3YXJuOiBMb2dMZXZlbC5XYXJuaW5nLFxyXG4gICAgd2FybmluZzogTG9nTGV2ZWwuV2FybmluZyxcclxuICAgIGVycm9yOiBMb2dMZXZlbC5FcnJvcixcclxuICAgIGNyaXRpY2FsOiBMb2dMZXZlbC5Dcml0aWNhbCxcclxuICAgIG5vbmU6IExvZ0xldmVsLk5vbmUsXHJcbn07XHJcbmZ1bmN0aW9uIHBhcnNlTG9nTGV2ZWwobmFtZSkge1xyXG4gICAgLy8gQ2FzZS1pbnNlbnNpdGl2ZSBtYXRjaGluZyB2aWEgbG93ZXItY2FzaW5nXHJcbiAgICAvLyBZZXMsIEkga25vdyBjYXNlLWZvbGRpbmcgaXMgYSBjb21wbGljYXRlZCBwcm9ibGVtIGluIFVuaWNvZGUsIGJ1dCB3ZSBvbmx5IHN1cHBvcnRcclxuICAgIC8vIHRoZSBBU0NJSSBzdHJpbmdzIGRlZmluZWQgaW4gTG9nTGV2ZWxOYW1lTWFwcGluZyBhbnl3YXksIHNvIGl0J3MgZmluZSAtYW51cnNlLlxyXG4gICAgY29uc3QgbWFwcGluZyA9IExvZ0xldmVsTmFtZU1hcHBpbmdbbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIGlmICh0eXBlb2YgbWFwcGluZyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBtYXBwaW5nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGxvZyBsZXZlbDogJHtuYW1lfWApO1xyXG4gICAgfVxyXG59XHJcbi8qKiBBIGJ1aWxkZXIgZm9yIGNvbmZpZ3VyaW5nIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHViQ29ubmVjdGlvbn0gaW5zdGFuY2VzLiAqL1xyXG5leHBvcnQgY2xhc3MgSHViQ29ubmVjdGlvbkJ1aWxkZXIge1xyXG4gICAgY29uZmlndXJlTG9nZ2luZyhsb2dnaW5nKSB7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQobG9nZ2luZywgXCJsb2dnaW5nXCIpO1xyXG4gICAgICAgIGlmIChpc0xvZ2dlcihsb2dnaW5nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBsb2dnaW5nID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ0xldmVsID0gcGFyc2VMb2dMZXZlbChsb2dnaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgQ29uc29sZUxvZ2dlcihsb2dMZXZlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKGxvZ2dpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHdpdGhVcmwodXJsLCB0cmFuc3BvcnRUeXBlT3JPcHRpb25zKSB7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodXJsLCBcInVybFwiKTtcclxuICAgICAgICBBcmcuaXNOb3RFbXB0eSh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIC8vIEZsb3ctdHlwaW5nIGtub3dzIHdoZXJlIGl0J3MgYXQuIFNpbmNlIEh0dHBUcmFuc3BvcnRUeXBlIGlzIGEgbnVtYmVyIGFuZCBJSHR0cENvbm5lY3Rpb25PcHRpb25zIGlzIGd1YXJhbnRlZWRcclxuICAgICAgICAvLyB0byBiZSBhbiBvYmplY3QsIHdlIGtub3cgKGFzIGRvZXMgVHlwZVNjcmlwdCkgdGhpcyBjb21wYXJpc29uIGlzIGFsbCB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggb3ZlcmxvYWQgd2FzIGNhbGxlZC5cclxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zcG9ydFR5cGVPck9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwQ29ubmVjdGlvbk9wdGlvbnMgPSB7IC4uLnRoaXMuaHR0cENvbm5lY3Rpb25PcHRpb25zLCAuLi50cmFuc3BvcnRUeXBlT3JPcHRpb25zIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuaHR0cENvbm5lY3Rpb25PcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0OiB0cmFuc3BvcnRUeXBlT3JPcHRpb25zLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKiBDb25maWd1cmVzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh1YkNvbm5lY3Rpb259IHRvIHVzZSB0aGUgc3BlY2lmaWVkIEh1YiBQcm90b2NvbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0lIdWJQcm90b2NvbH0gcHJvdG9jb2wgVGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSUh1YlByb3RvY29sfSBpbXBsZW1lbnRhdGlvbiB0byB1c2UuXHJcbiAgICAgKi9cclxuICAgIHdpdGhIdWJQcm90b2NvbChwcm90b2NvbCkge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHByb3RvY29sLCBcInByb3RvY29sXCIpO1xyXG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHdpdGhBdXRvbWF0aWNSZWNvbm5lY3QocmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIHJlY29ubmVjdFBvbGljeSBoYXMgYWxyZWFkeSBiZWVuIHNldC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdFBvbGljeSA9IG5ldyBEZWZhdWx0UmVjb25uZWN0UG9saWN5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RQb2xpY3kgPSBuZXcgRGVmYXVsdFJlY29ubmVjdFBvbGljeShyZXRyeURlbGF5c09yUmVjb25uZWN0UG9saWN5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0UG9saWN5ID0gcmV0cnlEZWxheXNPclJlY29ubmVjdFBvbGljeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKiogQ3JlYXRlcyBhIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHViQ29ubmVjdGlvbn0gZnJvbSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHNwZWNpZmllZCBpbiB0aGlzIGJ1aWxkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0h1YkNvbm5lY3Rpb259IFRoZSBjb25maWd1cmVkIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSHViQ29ubmVjdGlvbn0uXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIC8vIElmIGh0dHBDb25uZWN0aW9uT3B0aW9ucyBoYXMgYSBsb2dnZXIsIHVzZSBpdC4gT3RoZXJ3aXNlLCBvdmVycmlkZSBpdCB3aXRoIHRoZSBvbmVcclxuICAgICAgICAvLyBwcm92aWRlZCB0byBjb25maWd1cmVMb2dnZXJcclxuICAgICAgICBjb25zdCBodHRwQ29ubmVjdGlvbk9wdGlvbnMgPSB0aGlzLmh0dHBDb25uZWN0aW9uT3B0aW9ucyB8fCB7fTtcclxuICAgICAgICAvLyBJZiBpdCdzICdudWxsJywgdGhlIHVzZXIgKipleHBsaWNpdGx5KiogYXNrZWQgZm9yIG51bGwsIGRvbid0IG1lc3Mgd2l0aCBpdC5cclxuICAgICAgICBpZiAoaHR0cENvbm5lY3Rpb25PcHRpb25zLmxvZ2dlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIElmIG91ciBsb2dnZXIgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoYXQncyBPSywgdGhlIEh0dHBDb25uZWN0aW9uIGNvbnN0cnVjdG9yIHdpbGwgaGFuZGxlIGl0LlxyXG4gICAgICAgICAgICBodHRwQ29ubmVjdGlvbk9wdGlvbnMubG9nZ2VyID0gdGhpcy5sb2dnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5vdyBjcmVhdGUgdGhlIGNvbm5lY3Rpb25cclxuICAgICAgICBpZiAoIXRoaXMudXJsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnSHViQ29ubmVjdGlvbkJ1aWxkZXIud2l0aFVybCcgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBidWlsZGluZyB0aGUgY29ubmVjdGlvbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgSHR0cENvbm5lY3Rpb24odGhpcy51cmwsIGh0dHBDb25uZWN0aW9uT3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIEh1YkNvbm5lY3Rpb24uY3JlYXRlKGNvbm5lY3Rpb24sIHRoaXMubG9nZ2VyIHx8IE51bGxMb2dnZXIuaW5zdGFuY2UsIHRoaXMucHJvdG9jb2wgfHwgbmV3IEpzb25IdWJQcm90b2NvbCgpLCB0aGlzLnJlY29ubmVjdFBvbGljeSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNMb2dnZXIobG9nZ2VyKSB7XHJcbiAgICByZXR1cm4gbG9nZ2VyLmxvZyAhPT0gdW5kZWZpbmVkO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh1YkNvbm5lY3Rpb25CdWlsZGVyLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLyoqIERlZmluZXMgdGhlIHR5cGUgb2YgYSBIdWIgTWVzc2FnZS4gKi9cclxuZXhwb3J0IHZhciBNZXNzYWdlVHlwZTtcclxuKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhbiBJbnZvY2F0aW9uIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuSW52b2NhdGlvbk1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiSW52b2NhdGlvblwiXSA9IDFdID0gXCJJbnZvY2F0aW9uXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgU3RyZWFtSXRlbSBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLlN0cmVhbUl0ZW1NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIlN0cmVhbUl0ZW1cIl0gPSAyXSA9IFwiU3RyZWFtSXRlbVwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIENvbXBsZXRpb24gbWVzc2FnZSBhbmQgaW1wbGVtZW50cyB0aGUge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5Db21wbGV0aW9uTWVzc2FnZX0gaW50ZXJmYWNlLiAqL1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJDb21wbGV0aW9uXCJdID0gM10gPSBcIkNvbXBsZXRpb25cIjtcclxuICAgIC8qKiBJbmRpY2F0ZXMgdGhlIG1lc3NhZ2UgaXMgYSBTdHJlYW0gSW52b2NhdGlvbiBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLlN0cmVhbUludm9jYXRpb25NZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIlN0cmVhbUludm9jYXRpb25cIl0gPSA0XSA9IFwiU3RyZWFtSW52b2NhdGlvblwiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIENhbmNlbCBJbnZvY2F0aW9uIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuQ2FuY2VsSW52b2NhdGlvbk1lc3NhZ2V9IGludGVyZmFjZS4gKi9cclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiQ2FuY2VsSW52b2NhdGlvblwiXSA9IDVdID0gXCJDYW5jZWxJbnZvY2F0aW9uXCI7XHJcbiAgICAvKiogSW5kaWNhdGVzIHRoZSBtZXNzYWdlIGlzIGEgUGluZyBtZXNzYWdlIGFuZCBpbXBsZW1lbnRzIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLlBpbmdNZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIlBpbmdcIl0gPSA2XSA9IFwiUGluZ1wiO1xyXG4gICAgLyoqIEluZGljYXRlcyB0aGUgbWVzc2FnZSBpcyBhIENsb3NlIG1lc3NhZ2UgYW5kIGltcGxlbWVudHMgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuQ2xvc2VNZXNzYWdlfSBpbnRlcmZhY2UuICovXHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkNsb3NlXCJdID0gN10gPSBcIkNsb3NlXCI7XHJcbn0pKE1lc3NhZ2VUeXBlIHx8IChNZXNzYWdlVHlwZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlIdWJQcm90b2NvbC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIFRoZXNlIHZhbHVlcyBhcmUgZGVzaWduZWQgdG8gbWF0Y2ggdGhlIEFTUC5ORVQgTG9nIExldmVscyBzaW5jZSB0aGF0J3MgdGhlIHBhdHRlcm4gd2UncmUgZW11bGF0aW5nIGhlcmUuXHJcbi8qKiBJbmRpY2F0ZXMgdGhlIHNldmVyaXR5IG9mIGEgbG9nIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIExvZyBMZXZlbHMgYXJlIG9yZGVyZWQgaW4gaW5jcmVhc2luZyBzZXZlcml0eS4gU28gYERlYnVnYCBpcyBtb3JlIHNldmVyZSB0aGFuIGBUcmFjZWAsIGV0Yy5cclxuICovXHJcbmV4cG9ydCB2YXIgTG9nTGV2ZWw7XHJcbihmdW5jdGlvbiAoTG9nTGV2ZWwpIHtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIHZlcnkgbG93IHNldmVyaXR5IGRpYWdub3N0aWMgbWVzc2FnZXMuICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlRyYWNlXCJdID0gMF0gPSBcIlRyYWNlXCI7XHJcbiAgICAvKiogTG9nIGxldmVsIGZvciBsb3cgc2V2ZXJpdHkgZGlhZ25vc3RpYyBtZXNzYWdlcy4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRGVidWdcIl0gPSAxXSA9IFwiRGVidWdcIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGluZm9ybWF0aW9uYWwgZGlhZ25vc3RpYyBtZXNzYWdlcy4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiSW5mb3JtYXRpb25cIl0gPSAyXSA9IFwiSW5mb3JtYXRpb25cIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGRpYWdub3N0aWMgbWVzc2FnZXMgdGhhdCBpbmRpY2F0ZSBhIG5vbi1mYXRhbCBwcm9ibGVtLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJXYXJuaW5nXCJdID0gM10gPSBcIldhcm5pbmdcIjtcclxuICAgIC8qKiBMb2cgbGV2ZWwgZm9yIGRpYWdub3N0aWMgbWVzc2FnZXMgdGhhdCBpbmRpY2F0ZSBhIGZhaWx1cmUgaW4gdGhlIGN1cnJlbnQgb3BlcmF0aW9uLiAqL1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJFcnJvclwiXSA9IDRdID0gXCJFcnJvclwiO1xyXG4gICAgLyoqIExvZyBsZXZlbCBmb3IgZGlhZ25vc3RpYyBtZXNzYWdlcyB0aGF0IGluZGljYXRlIGEgZmFpbHVyZSB0aGF0IHdpbGwgdGVybWluYXRlIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uICovXHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkNyaXRpY2FsXCJdID0gNV0gPSBcIkNyaXRpY2FsXCI7XHJcbiAgICAvKiogVGhlIGhpZ2hlc3QgcG9zc2libGUgbG9nIGxldmVsLiBVc2VkIHdoZW4gY29uZmlndXJpbmcgbG9nZ2luZyB0byBpbmRpY2F0ZSB0aGF0IG5vIGxvZyBtZXNzYWdlcyBzaG91bGQgYmUgZW1pdHRlZC4gKi9cclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiTm9uZVwiXSA9IDZdID0gXCJOb25lXCI7XHJcbn0pKExvZ0xldmVsIHx8IChMb2dMZXZlbCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlMb2dnZXIuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBUaGlzIHdpbGwgYmUgdHJlYXRlZCBhcyBhIGJpdCBmbGFnIGluIHRoZSBmdXR1cmUsIHNvIHdlIGtlZXAgaXQgdXNpbmcgcG93ZXItb2YtdHdvIHZhbHVlcy5cclxuLyoqIFNwZWNpZmllcyBhIHNwZWNpZmljIEhUVFAgdHJhbnNwb3J0IHR5cGUuICovXHJcbmV4cG9ydCB2YXIgSHR0cFRyYW5zcG9ydFR5cGU7XHJcbihmdW5jdGlvbiAoSHR0cFRyYW5zcG9ydFR5cGUpIHtcclxuICAgIC8qKiBTcGVjaWZpZXMgbm8gdHJhbnNwb3J0IHByZWZlcmVuY2UuICovXHJcbiAgICBIdHRwVHJhbnNwb3J0VHlwZVtIdHRwVHJhbnNwb3J0VHlwZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGUgV2ViU29ja2V0cyB0cmFuc3BvcnQuICovXHJcbiAgICBIdHRwVHJhbnNwb3J0VHlwZVtIdHRwVHJhbnNwb3J0VHlwZVtcIldlYlNvY2tldHNcIl0gPSAxXSA9IFwiV2ViU29ja2V0c1wiO1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGUgU2VydmVyLVNlbnQgRXZlbnRzIHRyYW5zcG9ydC4gKi9cclxuICAgIEh0dHBUcmFuc3BvcnRUeXBlW0h0dHBUcmFuc3BvcnRUeXBlW1wiU2VydmVyU2VudEV2ZW50c1wiXSA9IDJdID0gXCJTZXJ2ZXJTZW50RXZlbnRzXCI7XHJcbiAgICAvKiogU3BlY2lmaWVzIHRoZSBMb25nIFBvbGxpbmcgdHJhbnNwb3J0LiAqL1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGVbSHR0cFRyYW5zcG9ydFR5cGVbXCJMb25nUG9sbGluZ1wiXSA9IDRdID0gXCJMb25nUG9sbGluZ1wiO1xyXG59KShIdHRwVHJhbnNwb3J0VHlwZSB8fCAoSHR0cFRyYW5zcG9ydFR5cGUgPSB7fSkpO1xyXG4vKiogU3BlY2lmaWVzIHRoZSB0cmFuc2ZlciBmb3JtYXQgZm9yIGEgY29ubmVjdGlvbi4gKi9cclxuZXhwb3J0IHZhciBUcmFuc2ZlckZvcm1hdDtcclxuKGZ1bmN0aW9uIChUcmFuc2ZlckZvcm1hdCkge1xyXG4gICAgLyoqIFNwZWNpZmllcyB0aGF0IG9ubHkgdGV4dCBkYXRhIHdpbGwgYmUgdHJhbnNtaXR0ZWQgb3ZlciB0aGUgY29ubmVjdGlvbi4gKi9cclxuICAgIFRyYW5zZmVyRm9ybWF0W1RyYW5zZmVyRm9ybWF0W1wiVGV4dFwiXSA9IDFdID0gXCJUZXh0XCI7XHJcbiAgICAvKiogU3BlY2lmaWVzIHRoYXQgYmluYXJ5IGRhdGEgd2lsbCBiZSB0cmFuc21pdHRlZCBvdmVyIHRoZSBjb25uZWN0aW9uLiAqL1xyXG4gICAgVHJhbnNmZXJGb3JtYXRbVHJhbnNmZXJGb3JtYXRbXCJCaW5hcnlcIl0gPSAyXSA9IFwiQmluYXJ5XCI7XHJcbn0pKFRyYW5zZmVyRm9ybWF0IHx8IChUcmFuc2ZlckZvcm1hdCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlUcmFuc3BvcnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gXCIuL0lIdWJQcm90b2NvbFwiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IE51bGxMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJzXCI7XHJcbmltcG9ydCB7IFRleHRNZXNzYWdlRm9ybWF0IH0gZnJvbSBcIi4vVGV4dE1lc3NhZ2VGb3JtYXRcIjtcclxuY29uc3QgSlNPTl9IVUJfUFJPVE9DT0xfTkFNRSA9IFwianNvblwiO1xyXG4vKiogSW1wbGVtZW50cyB0aGUgSlNPTiBIdWIgUHJvdG9jb2wuICovXHJcbmV4cG9ydCBjbGFzcyBKc29uSHViUHJvdG9jb2wge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICAgICAgdGhpcy5uYW1lID0gSlNPTl9IVUJfUFJPVE9DT0xfTkFNRTtcclxuICAgICAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgICAgICB0aGlzLnZlcnNpb24gPSAxO1xyXG4gICAgICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgICAgIHRoaXMudHJhbnNmZXJGb3JtYXQgPSBUcmFuc2ZlckZvcm1hdC5UZXh0O1xyXG4gICAgfVxyXG4gICAgLyoqIENyZWF0ZXMgYW4gYXJyYXkgb2Yge0BsaW5rIEBtaWNyb3NvZnQvc2lnbmFsci5IdWJNZXNzYWdlfSBvYmplY3RzIGZyb20gdGhlIHNwZWNpZmllZCBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBBIHN0cmluZyBjb250YWluaW5nIHRoZSBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICogQHBhcmFtIHtJTG9nZ2VyfSBsb2dnZXIgQSBsb2dnZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gbG9nIG1lc3NhZ2VzIHRoYXQgb2NjdXIgZHVyaW5nIHBhcnNpbmcuXHJcbiAgICAgKi9cclxuICAgIHBhcnNlTWVzc2FnZXMoaW5wdXQsIGxvZ2dlcikge1xyXG4gICAgICAgIC8vIFRoZSBpbnRlcmZhY2UgZG9lcyBhbGxvdyBcIkFycmF5QnVmZmVyXCIgdG8gYmUgcGFzc2VkIGluLCBidXQgdGhpcyBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdC4gU28gbGV0J3MgdGhyb3cgYSB1c2VmdWwgZXJyb3IuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IGZvciBKU09OIGh1YiBwcm90b2NvbC4gRXhwZWN0ZWQgYSBzdHJpbmcuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2dlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsb2dnZXIgPSBOdWxsTG9nZ2VyLmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQYXJzZSB0aGUgbWVzc2FnZXNcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFRleHRNZXNzYWdlRm9ybWF0LnBhcnNlKGlucHV0KTtcclxuICAgICAgICBjb25zdCBodWJNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRNZXNzYWdlID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRNZXNzYWdlLnR5cGUgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGF5bG9hZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoIChwYXJzZWRNZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSW52b2NhdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0ludm9jYXRpb25NZXNzYWdlKHBhcnNlZE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5TdHJlYW1JdGVtOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzU3RyZWFtSXRlbU1lc3NhZ2UocGFyc2VkTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbXBsZXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNDb21wbGV0aW9uTWVzc2FnZShwYXJzZWRNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuUGluZzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW5nbGUgdmFsdWUsIG5vIG5lZWQgdG8gdmFsaWRhdGVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ2xvc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxsIG9wdGlvbmFsIHZhbHVlcywgbm8gbmVlZCB0byB2YWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvLyBGdXR1cmUgcHJvdG9jb2wgY2hhbmdlcyBjYW4gYWRkIG1lc3NhZ2UgdHlwZXMsIG9sZCBjbGllbnRzIGNhbiBpZ25vcmUgdGhlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIFwiVW5rbm93biBtZXNzYWdlIHR5cGUgJ1wiICsgcGFyc2VkTWVzc2FnZS50eXBlICsgXCInIGlnbm9yZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGh1Yk1lc3NhZ2VzLnB1c2gocGFyc2VkTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBodWJNZXNzYWdlcztcclxuICAgIH1cclxuICAgIC8qKiBXcml0ZXMgdGhlIHNwZWNpZmllZCB7QGxpbmsgQG1pY3Jvc29mdC9zaWduYWxyLkh1Yk1lc3NhZ2V9IHRvIGEgc3RyaW5nIGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SHViTWVzc2FnZX0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byB3cml0ZS5cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIHdyaXRlTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIFRleHRNZXNzYWdlRm9ybWF0LndyaXRlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgIH1cclxuICAgIF9pc0ludm9jYXRpb25NZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLnRhcmdldCwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIEludm9jYXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuaW52b2NhdGlvbklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS5pbnZvY2F0aW9uSWQsIFwiSW52YWxpZCBwYXlsb2FkIGZvciBJbnZvY2F0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pc1N0cmVhbUl0ZW1NZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9hc3NlcnROb3RFbXB0eVN0cmluZyhtZXNzYWdlLmludm9jYXRpb25JZCwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIFN0cmVhbUl0ZW0gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuaXRlbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGF5bG9hZCBmb3IgU3RyZWFtSXRlbSBtZXNzYWdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaXNDb21wbGV0aW9uTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UucmVzdWx0ICYmIG1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXlsb2FkIGZvciBDb21wbGV0aW9uIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1lc3NhZ2UucmVzdWx0ICYmIG1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXNzZXJ0Tm90RW1wdHlTdHJpbmcobWVzc2FnZS5lcnJvciwgXCJJbnZhbGlkIHBheWxvYWQgZm9yIENvbXBsZXRpb24gbWVzc2FnZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Fzc2VydE5vdEVtcHR5U3RyaW5nKG1lc3NhZ2UuaW52b2NhdGlvbklkLCBcIkludmFsaWQgcGF5bG9hZCBmb3IgQ29tcGxldGlvbiBtZXNzYWdlLlwiKTtcclxuICAgIH1cclxuICAgIF9hc3NlcnROb3RFbXB0eVN0cmluZyh2YWx1ZSwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCB2YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SnNvbkh1YlByb3RvY29sLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLyoqIEEgbG9nZ2VyIHRoYXQgZG9lcyBub3RoaW5nIHdoZW4gbG9nIG1lc3NhZ2VzIGFyZSBzZW50IHRvIGl0LiAqL1xyXG5leHBvcnQgY2xhc3MgTnVsbExvZ2dlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGxvZyhfbG9nTGV2ZWwsIF9tZXNzYWdlKSB7XHJcbiAgICB9XHJcbn1cclxuLyoqIFRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBAbWljcm9zb2Z0L3NpZ25hbHIuTnVsbExvZ2dlcn0uICovXHJcbk51bGxMb2dnZXIuaW5zdGFuY2UgPSBuZXcgTnVsbExvZ2dlcigpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2dnZXJzLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgQWJvcnRDb250cm9sbGVyIH0gZnJvbSBcIi4vQWJvcnRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IEh0dHBFcnJvciwgVGltZW91dEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7IEhlYWRlck5hbWVzIH0gZnJvbSBcIi4vSGVhZGVyTmFtZXNcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5pbXBvcnQgeyBBcmcsIGdldERhdGFEZXRhaWwsIGdldFVzZXJBZ2VudEhlYWRlciwgc2VuZE1lc3NhZ2UgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG4vLyBOb3QgZXhwb3J0ZWQgZnJvbSAnaW5kZXgnLCB0aGlzIHR5cGUgaXMgaW50ZXJuYWwuXHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgTG9uZ1BvbGxpbmdUcmFuc3BvcnQge1xyXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudCwgYWNjZXNzVG9rZW5GYWN0b3J5LCBsb2dnZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkgPSBhY2Nlc3NUb2tlbkZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuX3BvbGxBYm9ydCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbnJlY2VpdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyBUaGlzIGlzIGFuIGludGVybmFsIHR5cGUsIG5vdCBleHBvcnRlZCBmcm9tICdpbmRleCcgc28gdGhpcyBpcyByZWFsbHkganVzdCBpbnRlcm5hbC5cclxuICAgIGdldCBwb2xsQWJvcnRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9sbEFib3J0LmFib3J0ZWQ7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjb25uZWN0KHVybCwgdHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgIEFyZy5pc0luKHRyYW5zZmVyRm9ybWF0LCBUcmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBDb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAvLyBBbGxvdyBiaW5hcnkgZm9ybWF0IG9uIE5vZGUgYW5kIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBiaW5hcnkgY29udGVudCAoaW5kaWNhdGVkIGJ5IHRoZSBwcmVzZW5jZSBvZiByZXNwb25zZVR5cGUgcHJvcGVydHkpXHJcbiAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0ID09PSBUcmFuc2ZlckZvcm1hdC5CaW5hcnkgJiZcclxuICAgICAgICAgICAgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbmV3IFhNTEh0dHBSZXF1ZXN0KCkucmVzcG9uc2VUeXBlICE9PSBcInN0cmluZ1wiKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCaW5hcnkgcHJvdG9jb2xzIG92ZXIgWG1sSHR0cFJlcXVlc3Qgbm90IGltcGxlbWVudGluZyBhZHZhbmNlZCBmZWF0dXJlcyBhcmUgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBnZXRVc2VyQWdlbnRIZWFkZXIoKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0geyBbbmFtZV06IHZhbHVlLCAuLi50aGlzLl9vcHRpb25zLmhlYWRlcnMgfTtcclxuICAgICAgICBjb25zdCBwb2xsT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYWJvcnRTaWduYWw6IHRoaXMuX3BvbGxBYm9ydC5zaWduYWwsXHJcbiAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwMCxcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLl9vcHRpb25zLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0cmFuc2ZlckZvcm1hdCA9PT0gVHJhbnNmZXJGb3JtYXQuQmluYXJ5KSB7XHJcbiAgICAgICAgICAgIHBvbGxPcHRpb25zLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLl9nZXRBY2Nlc3NUb2tlbigpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlYWRlclRva2VuKHBvbGxPcHRpb25zLCB0b2tlbik7XHJcbiAgICAgICAgLy8gTWFrZSBpbml0aWFsIGxvbmcgcG9sbGluZyByZXF1ZXN0XHJcbiAgICAgICAgLy8gU2VydmVyIHVzZXMgZmlyc3QgbG9uZyBwb2xsaW5nIHJlcXVlc3QgdG8gZmluaXNoIGluaXRpYWxpemluZyBjb25uZWN0aW9uIGFuZCBpdCByZXR1cm5zIHdpdGhvdXQgZGF0YVxyXG4gICAgICAgIGNvbnN0IHBvbGxVcmwgPSBgJHt1cmx9Jl89JHtEYXRlLm5vdygpfWA7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIHBvbGxpbmc6ICR7cG9sbFVybH0uYCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9odHRwQ2xpZW50LmdldChwb2xsVXJsLCBwb2xsT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgVW5leHBlY3RlZCByZXNwb25zZSBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LmApO1xyXG4gICAgICAgICAgICAvLyBNYXJrIHJ1bm5pbmcgYXMgZmFsc2Ugc28gdGhhdCB0aGUgcG9sbCBpbW1lZGlhdGVseSBlbmRzIGFuZCBydW5zIHRoZSBjbG9zZSBsb2dpY1xyXG4gICAgICAgICAgICB0aGlzLl9jbG9zZUVycm9yID0gbmV3IEh0dHBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0IHx8IFwiXCIsIHJlc3BvbnNlLnN0YXR1c0NvZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVjZWl2aW5nID0gdGhpcy5fcG9sbCh0aGlzLl91cmwsIHBvbGxPcHRpb25zKTtcclxuICAgIH1cclxuICAgIGFzeW5jIF9nZXRBY2Nlc3NUb2tlbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9hY2Nlc3NUb2tlbkZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBfdXBkYXRlSGVhZGVyVG9rZW4ocmVxdWVzdCwgdG9rZW4pIHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QuaGVhZGVycykge1xyXG4gICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVyc1tIZWFkZXJOYW1lcy5BdXRob3JpemF0aW9uXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmhlYWRlcnNbSGVhZGVyTmFtZXMuQXV0aG9yaXphdGlvbl0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIHJlcXVlc3QuaGVhZGVyc1tIZWFkZXJOYW1lcy5BdXRob3JpemF0aW9uXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBfcG9sbCh1cmwsIHBvbGxPcHRpb25zKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gZ2V0IHRoZSBhY2Nlc3MgdG9rZW4gb24gZWFjaCBwb2xsLCBpbiBjYXNlIGl0IGNoYW5nZXNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUhlYWRlclRva2VuKHBvbGxPcHRpb25zLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbGxVcmwgPSBgJHt1cmx9Jl89JHtEYXRlLm5vdygpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChMb25nUG9sbGluZyB0cmFuc3BvcnQpIHBvbGxpbmc6ICR7cG9sbFVybH0uYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9odHRwQ2xpZW50LmdldChwb2xsVXJsLCBwb2xsT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFBvbGwgdGVybWluYXRlZCBieSBzZXJ2ZXIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkVycm9yLCBgKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgVW5leHBlY3RlZCByZXNwb25zZSBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9LmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmV4cGVjdGVkIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlRXJyb3IgPSBuZXcgSHR0cEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQgfHwgXCJcIiwgcmVzcG9uc2Uuc3RhdHVzQ29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgZGF0YSByZWNlaXZlZC4gJHtnZXREYXRhRGV0YWlsKHJlc3BvbnNlLmNvbnRlbnQsIHRoaXMuX29wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQpfS5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ucmVjZWl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25yZWNlaXZlKHJlc3BvbnNlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbm90aGVyIHdheSB0aW1lb3V0IG1hbmlmZXN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsIHRpbWVkIG91dCwgcmVpc3N1aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvZyBidXQgZGlzcmVnYXJkIGVycm9ycyB0aGF0IG9jY3VyIGFmdGVyIHN0b3BwaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBQb2xsIGVycm9yZWQgYWZ0ZXIgc2h1dGRvd246ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBUaW1lb3V0RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0aW1lb3V0cyBhbmQgcmVpc3N1ZSB0aGUgcG9sbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbCB0aW1lZCBvdXQsIHJlaXNzdWluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSB0aGUgY29ubmVjdGlvbiB3aXRoIHRoZSBlcnJvciBhcyB0aGUgcmVzdWx0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2VFcnJvciA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgUG9sbGluZyBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgICAgIC8vIFdlIHdpbGwgcmVhY2ggaGVyZSB3aXRoIHBvbGxBYm9ydGVkPT1mYWxzZSB3aGVuIHRoZSBzZXJ2ZXIgcmV0dXJuZWQgYSByZXNwb25zZSBjYXVzaW5nIHRoZSB0cmFuc3BvcnQgdG8gc3RvcC5cclxuICAgICAgICAgICAgLy8gSWYgcG9sbEFib3J0ZWQ9PXRydWUgdGhlbiBjbGllbnQgaW5pdGlhdGVkIHRoZSBzdG9wIGFuZCB0aGUgc3RvcCBtZXRob2Qgd2lsbCByYWlzZSB0aGUgY2xvc2UgZXZlbnQgYWZ0ZXIgREVMRVRFIGlzIHNlbnQuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wb2xsQWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmFpc2VPbkNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBzZW5kKGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3J1bm5pbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBzZW5kIHVudGlsIHRoZSB0cmFuc3BvcnQgaXMgY29ubmVjdGVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbmRNZXNzYWdlKHRoaXMuX2xvZ2dlciwgXCJMb25nUG9sbGluZ1wiLCB0aGlzLl9odHRwQ2xpZW50LCB0aGlzLl91cmwsIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSwgZGF0YSwgdGhpcy5fb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgU3RvcHBpbmcgcG9sbGluZy5cIik7XHJcbiAgICAgICAgLy8gVGVsbCByZWNlaXZpbmcgbG9vcCB0byBzdG9wLCBhYm9ydCBhbnkgY3VycmVudCByZXF1ZXN0LCBhbmQgdGhlbiB3YWl0IGZvciBpdCB0byBmaW5pc2hcclxuICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcG9sbEFib3J0LmFib3J0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fcmVjZWl2aW5nO1xyXG4gICAgICAgICAgICAvLyBTZW5kIERFTEVURSB0byBjbGVhbiB1cCBsb25nIHBvbGxpbmcgb24gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgc2VuZGluZyBERUxFVEUgcmVxdWVzdCB0byAke3RoaXMuX3VybH0uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGdldFVzZXJBZ2VudEhlYWRlcigpO1xyXG4gICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMsIC4uLnRoaXMuX29wdGlvbnMuaGVhZGVycyB9LFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy5fb3B0aW9ucy50aW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLl9vcHRpb25zLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLl9nZXRBY2Nlc3NUb2tlbigpO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVIZWFkZXJUb2tlbihkZWxldGVPcHRpb25zLCB0b2tlbik7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZGVsZXRlKHRoaXMuX3VybCwgZGVsZXRlT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKExvbmdQb2xsaW5nIHRyYW5zcG9ydCkgREVMRVRFIHJlcXVlc3Qgc2VudC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihMb25nUG9sbGluZyB0cmFuc3BvcnQpIFN0b3AgZmluaXNoZWQuXCIpO1xyXG4gICAgICAgICAgICAvLyBSYWlzZSBjbG9zZSBldmVudCBoZXJlIGluc3RlYWQgb2YgaW4gcG9sbGluZ1xyXG4gICAgICAgICAgICAvLyBJdCBuZWVkcyB0byBoYXBwZW4gYWZ0ZXIgdGhlIERFTEVURSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICAgICAgICAgdGhpcy5fcmFpc2VPbkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JhaXNlT25DbG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgIGxldCBsb2dNZXNzYWdlID0gXCIoTG9uZ1BvbGxpbmcgdHJhbnNwb3J0KSBGaXJpbmcgb25jbG9zZSBldmVudC5cIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxvZ01lc3NhZ2UgKz0gXCIgRXJyb3I6IFwiICsgdGhpcy5fY2xvc2VFcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBsb2dNZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5vbmNsb3NlKHRoaXMuX2Nsb3NlRXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb25nUG9sbGluZ1RyYW5zcG9ydC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlckZvcm1hdCB9IGZyb20gXCIuL0lUcmFuc3BvcnRcIjtcclxuaW1wb3J0IHsgQXJnLCBnZXREYXRhRGV0YWlsLCBnZXRVc2VyQWdlbnRIZWFkZXIsIFBsYXRmb3JtLCBzZW5kTWVzc2FnZSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgU2VydmVyU2VudEV2ZW50c1RyYW5zcG9ydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50LCBhY2Nlc3NUb2tlbkZhY3RvcnksIGxvZ2dlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX2h0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRmFjdG9yeSA9IGFjY2Vzc1Rva2VuRmFjdG9yeTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5vbnJlY2VpdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjb25uZWN0KHVybCwgdHJhbnNmZXJGb3JtYXQpIHtcclxuICAgICAgICBBcmcuaXNSZXF1aXJlZCh1cmwsIFwidXJsXCIpO1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgIEFyZy5pc0luKHRyYW5zZmVyRm9ybWF0LCBUcmFuc2ZlckZvcm1hdCwgXCJ0cmFuc2ZlckZvcm1hdFwiKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihTU0UgdHJhbnNwb3J0KSBDb25uZWN0aW5nLlwiKTtcclxuICAgICAgICAvLyBzZXQgdXJsIGJlZm9yZSBhY2Nlc3NUb2tlbkZhY3RvcnkgYmVjYXVzZSB0aGlzLnVybCBpcyBvbmx5IGZvciBzZW5kIGFuZCB3ZSBzZXQgdGhlIGF1dGggaGVhZGVyIGluc3RlYWQgb2YgdGhlIHF1ZXJ5IHN0cmluZyBmb3Igc2VuZFxyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICBpZiAodGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIikgKyBgYWNjZXNzX3Rva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zZmVyRm9ybWF0ICE9PSBUcmFuc2ZlckZvcm1hdC5UZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIFNlcnZlci1TZW50IEV2ZW50cyB0cmFuc3BvcnQgb25seSBzdXBwb3J0cyB0aGUgJ1RleHQnIHRyYW5zZmVyIGZvcm1hdFwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGV2ZW50U291cmNlO1xyXG4gICAgICAgICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyIHx8IFBsYXRmb3JtLmlzV2ViV29ya2VyKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZSA9IG5ldyB0aGlzLl9vcHRpb25zLkV2ZW50U291cmNlKHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuX29wdGlvbnMud2l0aENyZWRlbnRpYWxzIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTm9uLWJyb3dzZXIgcGFzc2VzIGNvb2tpZXMgdmlhIHRoZSBkaWN0aW9uYXJ5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb29raWVzID0gdGhpcy5faHR0cENsaWVudC5nZXRDb29raWVTdHJpbmcodXJsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMuQ29va2llID0gY29va2llcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBnZXRVc2VyQWdlbnRIZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGV2ZW50U291cmNlID0gbmV3IHRoaXMuX29wdGlvbnMuRXZlbnRTb3VyY2UodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdGhpcy5fb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnM6IHsgLi4uaGVhZGVycywgLi4udGhpcy5fb3B0aW9ucy5oZWFkZXJzIH0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50U291cmNlLm9ubWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKFNTRSB0cmFuc3BvcnQpIGRhdGEgcmVjZWl2ZWQuICR7Z2V0RGF0YURldGFpbChlLmRhdGEsIHRoaXMuX29wdGlvbnMubG9nTWVzc2FnZUNvbnRlbnQpfS5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25yZWNlaXZlKGUuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogbm90IHVzaW5nIGV2ZW50IG9uIHB1cnBvc2VcclxuICAgICAgICAgICAgICAgIGV2ZW50U291cmNlLm9uZXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50U291cmNlIGRvZXNuJ3QgZ2l2ZSBhbnkgdXNlZnVsIGluZm9ybWF0aW9uIGFib3V0IHNlcnZlciBzaWRlIGNsb3Nlcy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiRXZlbnRTb3VyY2UgZmFpbGVkIHRvIGNvbm5lY3QuIFRoZSBjb25uZWN0aW9uIGNvdWxkIG5vdCBiZSBmb3VuZCBvbiB0aGUgc2VydmVyLFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIGVpdGhlciB0aGUgY29ubmVjdGlvbiBJRCBpcyBub3QgcHJlc2VudCBvbiB0aGUgc2VydmVyLCBvciBhIHByb3h5IGlzIHJlZnVzaW5nL2J1ZmZlcmluZyB0aGUgY29ubmVjdGlvbi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBJZiB5b3UgaGF2ZSBtdWx0aXBsZSBzZXJ2ZXJzIGNoZWNrIHRoYXQgc3RpY2t5IHNlc3Npb25zIGFyZSBlbmFibGVkLlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGV2ZW50U291cmNlLm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLkluZm9ybWF0aW9uLCBgU1NFIGNvbm5lY3RlZCB0byAke3RoaXMuX3VybH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudFNvdXJjZSA9IGV2ZW50U291cmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzZW5kKGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3Qgc2VuZCB1bnRpbCB0aGUgdHJhbnNwb3J0IGlzIGNvbm5lY3RlZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZW5kTWVzc2FnZSh0aGlzLl9sb2dnZXIsIFwiU1NFXCIsIHRoaXMuX2h0dHBDbGllbnQsIHRoaXMuX3VybCwgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5LCBkYXRhLCB0aGlzLl9vcHRpb25zKTtcclxuICAgIH1cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBfY2xvc2UoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudFNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudFNvdXJjZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudFNvdXJjZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25jbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsb3NlKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlcnZlclNlbnRFdmVudHNUcmFuc3BvcnQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBTdWJqZWN0U3Vic2NyaXB0aW9uIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuLyoqIFN0cmVhbSBpbXBsZW1lbnRhdGlvbiB0byBzdHJlYW0gaXRlbXMgdG8gdGhlIHNlcnZlci4gKi9cclxuZXhwb3J0IGNsYXNzIFN1YmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIG5leHQoaXRlbSkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlcnJvcihlcnIpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZlci5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJqZWN0U3Vic2NyaXB0aW9uKHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gTm90IGV4cG9ydGVkIGZyb20gaW5kZXhcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0TWVzc2FnZUZvcm1hdCB7XHJcbiAgICBzdGF0aWMgd3JpdGUob3V0cHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGAke291dHB1dH0ke1RleHRNZXNzYWdlRm9ybWF0LlJlY29yZFNlcGFyYXRvcn1gO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHBhcnNlKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdICE9PSBUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWVzc2FnZSBpcyBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBpbnB1dC5zcGxpdChUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3IpO1xyXG4gICAgICAgIG1lc3NhZ2VzLnBvcCgpO1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlcztcclxuICAgIH1cclxufVxyXG5UZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3JDb2RlID0gMHgxZTtcclxuVGV4dE1lc3NhZ2VGb3JtYXQuUmVjb3JkU2VwYXJhdG9yID0gU3RyaW5nLmZyb21DaGFyQ29kZShUZXh0TWVzc2FnZUZvcm1hdC5SZWNvcmRTZXBhcmF0b3JDb2RlKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGV4dE1lc3NhZ2VGb3JtYXQuanMubWFwIiwiLy8gTGljZW5zZWQgdG8gdGhlIC5ORVQgRm91bmRhdGlvbiB1bmRlciBvbmUgb3IgbW9yZSBhZ3JlZW1lbnRzLlxyXG4vLyBUaGUgLk5FVCBGb3VuZGF0aW9uIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgTnVsbExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlcnNcIjtcclxuLy8gVmVyc2lvbiB0b2tlbiB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIHByZXBhY2sgY29tbWFuZFxyXG4vKiogVGhlIHZlcnNpb24gb2YgdGhlIFNpZ25hbFIgY2xpZW50LiAqL1xyXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiNi4wLjhcIjtcclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBjbGFzcyBBcmcge1xyXG4gICAgc3RhdGljIGlzUmVxdWlyZWQodmFsLCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtuYW1lfScgYXJndW1lbnQgaXMgcmVxdWlyZWQuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGlzTm90RW1wdHkodmFsLCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKCF2YWwgfHwgdmFsLm1hdGNoKC9eXFxzKiQvKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtuYW1lfScgYXJndW1lbnQgc2hvdWxkIG5vdCBiZSBlbXB0eS5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaXNJbih2YWwsIHZhbHVlcywgbmFtZSkge1xyXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgZW51bXMgaGF2ZSBrZXlzIGZvciAqKmJvdGgqKiB0aGUgbmFtZSBhbmQgdGhlIHZhbHVlIG9mIGVhY2ggZW51bSBtZW1iZXIgb24gdGhlIHR5cGUgaXRzZWxmLlxyXG4gICAgICAgIGlmICghKHZhbCBpbiB2YWx1ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biAke25hbWV9IHZhbHVlOiAke3ZhbH0uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0ge1xyXG4gICAgLy8gcmVhY3QtbmF0aXZlIGhhcyBhIHdpbmRvdyBidXQgbm8gZG9jdW1lbnQgc28gd2Ugc2hvdWxkIGNoZWNrIGJvdGhcclxuICAgIHN0YXRpYyBnZXQgaXNCcm93c2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgPT09IFwib2JqZWN0XCI7XHJcbiAgICB9XHJcbiAgICAvLyBXZWJXb3JrZXJzIGRvbid0IGhhdmUgYSB3aW5kb3cgb2JqZWN0IHNvIHRoZSBpc0Jyb3dzZXIgY2hlY2sgd291bGQgZmFpbFxyXG4gICAgc3RhdGljIGdldCBpc1dlYldvcmtlcigpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgXCJpbXBvcnRTY3JpcHRzXCIgaW4gc2VsZjtcclxuICAgIH1cclxuICAgIC8vIHJlYWN0LW5hdGl2ZSBoYXMgYSB3aW5kb3cgYnV0IG5vIGRvY3VtZW50XHJcbiAgICBzdGF0aWMgZ2V0IGlzUmVhY3ROYXRpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH1cclxuICAgIC8vIE5vZGUgYXBwcyBzaG91bGRuJ3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGJ1dCBXZWJXb3JrZXJzIGRvbid0IGVpdGhlclxyXG4gICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBmb3IgYm90aCBXZWJXb3JrZXIgYW5kIHdpbmRvd1xyXG4gICAgc3RhdGljIGdldCBpc05vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQnJvd3NlciAmJiAhdGhpcy5pc1dlYldvcmtlciAmJiAhdGhpcy5pc1JlYWN0TmF0aXZlO1xyXG4gICAgfVxyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YURldGFpbChkYXRhLCBpbmNsdWRlQ29udGVudCkge1xyXG4gICAgbGV0IGRldGFpbCA9IFwiXCI7XHJcbiAgICBpZiAoaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xyXG4gICAgICAgIGRldGFpbCA9IGBCaW5hcnkgZGF0YSBvZiBsZW5ndGggJHtkYXRhLmJ5dGVMZW5ndGh9YDtcclxuICAgICAgICBpZiAoaW5jbHVkZUNvbnRlbnQpIHtcclxuICAgICAgICAgICAgZGV0YWlsICs9IGAuIENvbnRlbnQ6ICcke2Zvcm1hdEFycmF5QnVmZmVyKGRhdGEpfSdgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZGV0YWlsID0gYFN0cmluZyBkYXRhIG9mIGxlbmd0aCAke2RhdGEubGVuZ3RofWA7XHJcbiAgICAgICAgaWYgKGluY2x1ZGVDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGRldGFpbCArPSBgLiBDb250ZW50OiAnJHtkYXRhfSdgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkZXRhaWw7XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBcnJheUJ1ZmZlcihkYXRhKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAvLyBVaW50OEFycmF5Lm1hcCBvbmx5IHN1cHBvcnRzIHJldHVybmluZyBhbm90aGVyIFVpbnQ4QXJyYXk/XHJcbiAgICBsZXQgc3RyID0gXCJcIjtcclxuICAgIHZpZXcuZm9yRWFjaCgobnVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFkID0gbnVtIDwgMTYgPyBcIjBcIiA6IFwiXCI7XHJcbiAgICAgICAgc3RyICs9IGAweCR7cGFkfSR7bnVtLnRvU3RyaW5nKDE2KX0gYDtcclxuICAgIH0pO1xyXG4gICAgLy8gVHJpbSBvZiB0cmFpbGluZyBzcGFjZS5cclxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKTtcclxufVxyXG4vLyBBbHNvIGluIHNpZ25hbHItcHJvdG9jb2wtbXNncGFjay9VdGlscy50c1xyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XHJcbiAgICByZXR1cm4gdmFsICYmIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgICh2YWwgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fFxyXG4gICAgICAgICAgICAvLyBTb21ldGltZXMgd2UgZ2V0IGFuIEFycmF5QnVmZmVyIHRoYXQgZG9lc24ndCBzYXRpc2Z5IGluc3RhbmNlb2ZcclxuICAgICAgICAgICAgKHZhbC5jb25zdHJ1Y3RvciAmJiB2YWwuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheUJ1ZmZlclwiKSk7XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZShsb2dnZXIsIHRyYW5zcG9ydE5hbWUsIGh0dHBDbGllbnQsIHVybCwgYWNjZXNzVG9rZW5GYWN0b3J5LCBjb250ZW50LCBvcHRpb25zKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgaWYgKGFjY2Vzc1Rva2VuRmFjdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgYWNjZXNzVG9rZW5GYWN0b3J5KCk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBbXCJBdXRob3JpemF0aW9uXCJdOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZ2V0VXNlckFnZW50SGVhZGVyKCk7XHJcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XHJcbiAgICBsb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKCR7dHJhbnNwb3J0TmFtZX0gdHJhbnNwb3J0KSBzZW5kaW5nIGRhdGEuICR7Z2V0RGF0YURldGFpbChjb250ZW50LCBvcHRpb25zLmxvZ01lc3NhZ2VDb250ZW50KX0uYCk7XHJcbiAgICBjb25zdCByZXNwb25zZVR5cGUgPSBpc0FycmF5QnVmZmVyKGNvbnRlbnQpID8gXCJhcnJheWJ1ZmZlclwiIDogXCJ0ZXh0XCI7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBDbGllbnQucG9zdCh1cmwsIHtcclxuICAgICAgICBjb250ZW50LFxyXG4gICAgICAgIGhlYWRlcnM6IHsgLi4uaGVhZGVycywgLi4ub3B0aW9ucy5oZWFkZXJzIH0sXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgICAgIHRpbWVvdXQ6IG9wdGlvbnMudGltZW91dCxcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgfSk7XHJcbiAgICBsb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBgKCR7dHJhbnNwb3J0TmFtZX0gdHJhbnNwb3J0KSByZXF1ZXN0IGNvbXBsZXRlLiBSZXNwb25zZSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0uYCk7XHJcbn1cclxuLyoqIEBwcml2YXRlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2dnZXIobG9nZ2VyKSB7XHJcbiAgICBpZiAobG9nZ2VyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbnNvbGVMb2dnZXIoTG9nTGV2ZWwuSW5mb3JtYXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvZ2dlciA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBOdWxsTG9nZ2VyLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvZ2dlci5sb2cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBsb2dnZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IENvbnNvbGVMb2dnZXIobG9nZ2VyKTtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIFN1YmplY3RTdWJzY3JpcHRpb24ge1xyXG4gICAgY29uc3RydWN0b3Ioc3ViamVjdCwgb2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLl9zdWJqZWN0ID0gc3ViamVjdDtcclxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyO1xyXG4gICAgfVxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3N1YmplY3Qub2JzZXJ2ZXJzLmluZGV4T2YodGhpcy5fb2JzZXJ2ZXIpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YmplY3Qub2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9zdWJqZWN0Lm9ic2VydmVycy5sZW5ndGggPT09IDAgJiYgdGhpcy5fc3ViamVjdC5jYW5jZWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJqZWN0LmNhbmNlbENhbGxiYWNrKCkuY2F0Y2goKF8pID0+IHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZ2dlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtaW5pbXVtTG9nTGV2ZWwpIHtcclxuICAgICAgICB0aGlzLl9taW5MZXZlbCA9IG1pbmltdW1Mb2dMZXZlbDtcclxuICAgICAgICB0aGlzLm91dCA9IGNvbnNvbGU7XHJcbiAgICB9XHJcbiAgICBsb2cobG9nTGV2ZWwsIG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAobG9nTGV2ZWwgPj0gdGhpcy5fbWluTGV2ZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gYFske25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX1dICR7TG9nTGV2ZWxbbG9nTGV2ZWxdfTogJHttZXNzYWdlfWA7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobG9nTGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuQ3JpdGljYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0LmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExvZ0xldmVsLldhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXQud2Fybihtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5JbmZvcm1hdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dC5pbmZvKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcgb25seSBnb2VzIHRvIGF0dGFjaGVkIGRlYnVnZ2VycyBpbiBOb2RlLCBzbyB3ZSB1c2UgY29uc29sZS5sb2cgZm9yIFRyYWNlIGFuZCBEZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0LmxvZyhtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckFnZW50SGVhZGVyKCkge1xyXG4gICAgbGV0IHVzZXJBZ2VudEhlYWRlck5hbWUgPSBcIlgtU2lnbmFsUi1Vc2VyLUFnZW50XCI7XHJcbiAgICBpZiAoUGxhdGZvcm0uaXNOb2RlKSB7XHJcbiAgICAgICAgdXNlckFnZW50SGVhZGVyTmFtZSA9IFwiVXNlci1BZ2VudFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt1c2VyQWdlbnRIZWFkZXJOYW1lLCBjb25zdHJ1Y3RVc2VyQWdlbnQoVkVSU0lPTiwgZ2V0T3NOYW1lKCksIGdldFJ1bnRpbWUoKSwgZ2V0UnVudGltZVZlcnNpb24oKSldO1xyXG59XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0VXNlckFnZW50KHZlcnNpb24sIG9zLCBydW50aW1lLCBydW50aW1lVmVyc2lvbikge1xyXG4gICAgLy8gTWljcm9zb2Z0IFNpZ25hbFIvW1ZlcnNpb25dIChbRGV0YWlsZWQgVmVyc2lvbl07IFtPcGVyYXRpbmcgU3lzdGVtXTsgW1J1bnRpbWVdOyBbUnVudGltZSBWZXJzaW9uXSlcclxuICAgIGxldCB1c2VyQWdlbnQgPSBcIk1pY3Jvc29mdCBTaWduYWxSL1wiO1xyXG4gICAgY29uc3QgbWFqb3JBbmRNaW5vciA9IHZlcnNpb24uc3BsaXQoXCIuXCIpO1xyXG4gICAgdXNlckFnZW50ICs9IGAke21ham9yQW5kTWlub3JbMF19LiR7bWFqb3JBbmRNaW5vclsxXX1gO1xyXG4gICAgdXNlckFnZW50ICs9IGAgKCR7dmVyc2lvbn07IGA7XHJcbiAgICBpZiAob3MgJiYgb3MgIT09IFwiXCIpIHtcclxuICAgICAgICB1c2VyQWdlbnQgKz0gYCR7b3N9OyBgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdXNlckFnZW50ICs9IFwiVW5rbm93biBPUzsgXCI7XHJcbiAgICB9XHJcbiAgICB1c2VyQWdlbnQgKz0gYCR7cnVudGltZX1gO1xyXG4gICAgaWYgKHJ1bnRpbWVWZXJzaW9uKSB7XHJcbiAgICAgICAgdXNlckFnZW50ICs9IGA7ICR7cnVudGltZVZlcnNpb259YDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHVzZXJBZ2VudCArPSBcIjsgVW5rbm93biBSdW50aW1lIFZlcnNpb25cIjtcclxuICAgIH1cclxuICAgIHVzZXJBZ2VudCArPSBcIilcIjtcclxuICAgIHJldHVybiB1c2VyQWdlbnQ7XHJcbn1cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNwYWNlZC1jb21tZW50XHJcbi8qI19fUFVSRV9fKi8gZnVuY3Rpb24gZ2V0T3NOYW1lKCkge1xyXG4gICAgaWYgKFBsYXRmb3JtLmlzTm9kZSkge1xyXG4gICAgICAgIHN3aXRjaCAocHJvY2Vzcy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBjYXNlIFwid2luMzJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIldpbmRvd3MgTlRcIjtcclxuICAgICAgICAgICAgY2FzZSBcImRhcndpblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibWFjT1NcIjtcclxuICAgICAgICAgICAgY2FzZSBcImxpbnV4XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaW51eFwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MucGxhdGZvcm07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNwYWNlZC1jb21tZW50XHJcbi8qI19fUFVSRV9fKi8gZnVuY3Rpb24gZ2V0UnVudGltZVZlcnNpb24oKSB7XHJcbiAgICBpZiAoUGxhdGZvcm0uaXNOb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MudmVyc2lvbnMubm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0UnVudGltZSgpIHtcclxuICAgIGlmIChQbGF0Zm9ybS5pc05vZGUpIHtcclxuICAgICAgICByZXR1cm4gXCJOb2RlSlNcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIkJyb3dzZXJcIjtcclxuICAgIH1cclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yU3RyaW5nKGUpIHtcclxuICAgIGlmIChlLnN0YWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIGUuc3RhY2s7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLm1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gZS5tZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke2V9YDtcclxufVxyXG4vKiogQHByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbFRoaXMoKSB7XHJcbiAgICAvLyBnbG9iYWxUaGlzIGlzIHNlbWktbmV3IGFuZCBub3QgYXZhaWxhYmxlIGluIE5vZGUgdW50aWwgdjEyXHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsVGhpcztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZpbmQgZ2xvYmFsXCIpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVV0aWxzLmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaW1wb3J0IHsgSGVhZGVyTmFtZXMgfSBmcm9tIFwiLi9IZWFkZXJOYW1lc1wiO1xyXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgVHJhbnNmZXJGb3JtYXQgfSBmcm9tIFwiLi9JVHJhbnNwb3J0XCI7XHJcbmltcG9ydCB7IEFyZywgZ2V0RGF0YURldGFpbCwgZ2V0VXNlckFnZW50SGVhZGVyLCBQbGF0Zm9ybSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8qKiBAcHJpdmF0ZSAqL1xyXG5leHBvcnQgY2xhc3MgV2ViU29ja2V0VHJhbnNwb3J0IHtcclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQsIGFjY2Vzc1Rva2VuRmFjdG9yeSwgbG9nZ2VyLCBsb2dNZXNzYWdlQ29udGVudCwgd2ViU29ja2V0Q29uc3RydWN0b3IsIGhlYWRlcnMpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5ID0gYWNjZXNzVG9rZW5GYWN0b3J5O1xyXG4gICAgICAgIHRoaXMuX2xvZ01lc3NhZ2VDb250ZW50ID0gbG9nTWVzc2FnZUNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5fd2ViU29ja2V0Q29uc3RydWN0b3IgPSB3ZWJTb2NrZXRDb25zdHJ1Y3RvcjtcclxuICAgICAgICB0aGlzLl9odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcclxuICAgICAgICB0aGlzLm9ucmVjZWl2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcclxuICAgIH1cclxuICAgIGFzeW5jIGNvbm5lY3QodXJsLCB0cmFuc2ZlckZvcm1hdCkge1xyXG4gICAgICAgIEFyZy5pc1JlcXVpcmVkKHVybCwgXCJ1cmxcIik7XHJcbiAgICAgICAgQXJnLmlzUmVxdWlyZWQodHJhbnNmZXJGb3JtYXQsIFwidHJhbnNmZXJGb3JtYXRcIik7XHJcbiAgICAgICAgQXJnLmlzSW4odHJhbnNmZXJGb3JtYXQsIFRyYW5zZmVyRm9ybWF0LCBcInRyYW5zZmVyRm9ybWF0XCIpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIFwiKFdlYlNvY2tldHMgdHJhbnNwb3J0KSBDb25uZWN0aW5nLlwiKTtcclxuICAgICAgICBpZiAodGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fYWNjZXNzVG9rZW5GYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIikgKyBgYWNjZXNzX3Rva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9eaHR0cC8sIFwid3NcIik7XHJcbiAgICAgICAgICAgIGxldCB3ZWJTb2NrZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSB0aGlzLl9odHRwQ2xpZW50LmdldENvb2tpZVN0cmluZyh1cmwpO1xyXG4gICAgICAgICAgICBsZXQgb3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChQbGF0Zm9ybS5pc05vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBnZXRVc2VyQWdlbnRIZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjb29raWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tIZWFkZXJOYW1lcy5Db29raWVdID0gYCR7Y29va2llc31gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gT25seSBwYXNzIGhlYWRlcnMgd2hlbiBpbiBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcclxuICAgICAgICAgICAgICAgIHdlYlNvY2tldCA9IG5ldyB0aGlzLl93ZWJTb2NrZXRDb25zdHJ1Y3Rvcih1cmwsIHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgLi4uaGVhZGVycywgLi4udGhpcy5faGVhZGVycyB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF3ZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIENocm9tZSBpcyBub3QgaGFwcHkgd2l0aCBwYXNzaW5nICd1bmRlZmluZWQnIGFzIHByb3RvY29sXHJcbiAgICAgICAgICAgICAgICB3ZWJTb2NrZXQgPSBuZXcgdGhpcy5fd2ViU29ja2V0Q29uc3RydWN0b3IodXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHJhbnNmZXJGb3JtYXQgPT09IFRyYW5zZmVyRm9ybWF0LkJpbmFyeSkge1xyXG4gICAgICAgICAgICAgICAgd2ViU29ja2V0LmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2ViU29ja2V0Lm9ub3BlbiA9IChfZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuSW5mb3JtYXRpb24sIGBXZWJTb2NrZXQgY29ubmVjdGVkIHRvICR7dXJsfS5gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldCA9IHdlYlNvY2tldDtcclxuICAgICAgICAgICAgICAgIG9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHdlYlNvY2tldC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3JFdmVudCBpcyBhIGJyb3dzZXIgb25seSB0eXBlIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHR5cGUgZXhpc3RzIGJlZm9yZSB1c2luZyBpdFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBFcnJvckV2ZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGV2ZW50IGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXZlbnQuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IFwiVGhlcmUgd2FzIGFuIGVycm9yIHdpdGggdGhlIHRyYW5zcG9ydFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5JbmZvcm1hdGlvbiwgYChXZWJTb2NrZXRzIHRyYW5zcG9ydCkgJHtlcnJvcn0uYCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHdlYlNvY2tldC5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhMb2dMZXZlbC5UcmFjZSwgYChXZWJTb2NrZXRzIHRyYW5zcG9ydCkgZGF0YSByZWNlaXZlZC4gJHtnZXREYXRhRGV0YWlsKG1lc3NhZ2UuZGF0YSwgdGhpcy5fbG9nTWVzc2FnZUNvbnRlbnQpfS5gKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ucmVjZWl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25yZWNlaXZlKG1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHdlYlNvY2tldC5vbmNsb3NlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBjYWxsIGNsb3NlIGhhbmRsZXIgaWYgY29ubmVjdGlvbiB3YXMgbmV2ZXIgZXN0YWJsaXNoZWRcclxuICAgICAgICAgICAgICAgIC8vIFdlJ2xsIHJlamVjdCB0aGUgY29ubmVjdCBjYWxsIGluc3RlYWRcclxuICAgICAgICAgICAgICAgIGlmIChvcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZShldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVycm9yRXZlbnQgaXMgYSBicm93c2VyIG9ubHkgdHlwZSB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSB0eXBlIGV4aXN0cyBiZWZvcmUgdXNpbmcgaXRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEVycm9yRXZlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZXZlbnQgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXZlbnQuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IFwiV2ViU29ja2V0IGZhaWxlZCB0byBjb25uZWN0LiBUaGUgY29ubmVjdGlvbiBjb3VsZCBub3QgYmUgZm91bmQgb24gdGhlIHNlcnZlcixcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBlaXRoZXIgdGhlIGVuZHBvaW50IG1heSBub3QgYmUgYSBTaWduYWxSIGVuZHBvaW50LFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIHRoZSBjb25uZWN0aW9uIElEIGlzIG5vdCBwcmVzZW50IG9uIHRoZSBzZXJ2ZXIsIG9yIHRoZXJlIGlzIGEgcHJveHkgYmxvY2tpbmcgV2ViU29ja2V0cy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBJZiB5b3UgaGF2ZSBtdWx0aXBsZSBzZXJ2ZXJzIGNoZWNrIHRoYXQgc3RpY2t5IHNlc3Npb25zIGFyZSBlbmFibGVkLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZW5kKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5fd2ViU29ja2V0ICYmIHRoaXMuX3dlYlNvY2tldC5yZWFkeVN0YXRlID09PSB0aGlzLl93ZWJTb2NrZXRDb25zdHJ1Y3Rvci5PUEVOKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuVHJhY2UsIGAoV2ViU29ja2V0cyB0cmFuc3BvcnQpIHNlbmRpbmcgZGF0YS4gJHtnZXREYXRhRGV0YWlsKGRhdGEsIHRoaXMuX2xvZ01lc3NhZ2VDb250ZW50KX0uYCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldC5zZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIldlYlNvY2tldCBpcyBub3QgaW4gdGhlIE9QRU4gc3RhdGVcIik7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl93ZWJTb2NrZXQpIHtcclxuICAgICAgICAgICAgLy8gTWFudWFsbHkgaW52b2tlIG9uY2xvc2UgY2FsbGJhY2sgaW5saW5lIHNvIHdlIGtub3cgdGhlIEh0dHBDb25uZWN0aW9uIHdhcyBjbG9zZWQgcHJvcGVybHkgYmVmb3JlIHJldHVybmluZ1xyXG4gICAgICAgICAgICAvLyBUaGlzIGFsc28gc29sdmVzIGFuIGlzc3VlIHdoZXJlIHdlYnNvY2tldC5vbmNsb3NlIGNvdWxkIHRha2UgMTgrIHNlY29uZHMgdG8gdHJpZ2dlciBkdXJpbmcgbmV0d29yayBkaXNjb25uZWN0c1xyXG4gICAgICAgICAgICB0aGlzLl9jbG9zZSh1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBfY2xvc2UoZXZlbnQpIHtcclxuICAgICAgICAvLyB3ZWJTb2NrZXQgd2lsbCBiZSBudWxsIGlmIHRoZSB0cmFuc3BvcnQgZGlkIG5vdCBzdGFydCBzdWNjZXNzZnVsbHlcclxuICAgICAgICBpZiAodGhpcy5fd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIHdlYnNvY2tldCBoYW5kbGVycyBiZWNhdXNlIHdlIGFyZSBjb25zaWRlcmluZyB0aGUgc29ja2V0IGNsb3NlZCBub3dcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldC5vbm1lc3NhZ2UgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldC5vbmVycm9yID0gKCkgPT4geyB9O1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLlRyYWNlLCBcIihXZWJTb2NrZXRzIHRyYW5zcG9ydCkgc29ja2V0IGNsb3NlZC5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMub25jbG9zZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNDbG9zZUV2ZW50KGV2ZW50KSAmJiAoZXZlbnQud2FzQ2xlYW4gPT09IGZhbHNlIHx8IGV2ZW50LmNvZGUgIT09IDEwMDApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xvc2UobmV3IEVycm9yKGBXZWJTb2NrZXQgY2xvc2VkIHdpdGggc3RhdHVzIGNvZGU6ICR7ZXZlbnQuY29kZX0gKCR7ZXZlbnQucmVhc29uIHx8IFwibm8gcmVhc29uIGdpdmVuXCJ9KS5gKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsb3NlKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2lzQ2xvc2VFdmVudChldmVudCkge1xyXG4gICAgICAgIHJldHVybiBldmVudCAmJiB0eXBlb2YgZXZlbnQud2FzQ2xlYW4gPT09IFwiYm9vbGVhblwiICYmIHR5cGVvZiBldmVudC5jb2RlID09PSBcIm51bWJlclwiO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdlYlNvY2tldFRyYW5zcG9ydC5qcy5tYXAiLCIvLyBMaWNlbnNlZCB0byB0aGUgLk5FVCBGb3VuZGF0aW9uIHVuZGVyIG9uZSBvciBtb3JlIGFncmVlbWVudHMuXHJcbi8vIFRoZSAuTkVUIEZvdW5kYXRpb24gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmltcG9ydCB7IEFib3J0RXJyb3IsIEh0dHBFcnJvciwgVGltZW91dEVycm9yIH0gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gXCIuL0h0dHBDbGllbnRcIjtcclxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9JTG9nZ2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBYaHJIdHRwQ2xpZW50IGV4dGVuZHMgSHR0cENsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgc2VuZChyZXF1ZXN0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBhYm9ydCB3YXMgbm90IHNpZ25hbGVkIGJlZm9yZSBjYWxsaW5nIHNlbmRcclxuICAgICAgICBpZiAocmVxdWVzdC5hYm9ydFNpZ25hbCAmJiByZXF1ZXN0LmFib3J0U2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBYm9ydEVycm9yKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBtZXRob2QgZGVmaW5lZC5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcXVlc3QudXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyB1cmwgZGVmaW5lZC5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID09PSB1bmRlZmluZWQgPyB0cnVlIDogcmVxdWVzdC53aXRoQ3JlZGVudGlhbHM7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IHNldHRpbmcgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXIgZm9yIFJlYWN0IE5hdGl2ZSBvbiBBbmRyb2lkIHBsYXRmb3JtLlxyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHJlcXVlc3QuaGVhZGVycztcclxuICAgICAgICAgICAgaWYgKGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGhlYWRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgaGVhZGVyc1toZWFkZXJdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlc3BvbnNlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHJlcXVlc3QucmVzcG9uc2VUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFib3J0U2lnbmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmFib3J0U2lnbmFsLm9uYWJvcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBBYm9ydEVycm9yKCkpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICB4aHIudGltZW91dCA9IHJlcXVlc3QudGltZW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuYWJvcnRTaWduYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmFib3J0U2lnbmFsLm9uYWJvcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBIdHRwUmVzcG9uc2UoeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQsIHhoci5yZXNwb25zZSB8fCB4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEh0dHBFcnJvcih4aHIucmVzcG9uc2UgfHwgeGhyLnJlc3BvbnNlVGV4dCB8fCB4aHIuc3RhdHVzVGV4dCwgeGhyLnN0YXR1cykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coTG9nTGV2ZWwuV2FybmluZywgYEVycm9yIGZyb20gSFRUUCByZXF1ZXN0LiAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fS5gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgSHR0cEVycm9yKHhoci5zdGF0dXNUZXh0LCB4aHIuc3RhdHVzKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKExvZ0xldmVsLldhcm5pbmcsIGBUaW1lb3V0IGZyb20gSFRUUCByZXF1ZXN0LmApO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBUaW1lb3V0RXJyb3IoKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5zZW5kKHJlcXVlc3QuY29udGVudCB8fCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1YaHJIdHRwQ2xpZW50LmpzLm1hcCIsIi8vIExpY2Vuc2VkIHRvIHRoZSAuTkVUIEZvdW5kYXRpb24gdW5kZXIgb25lIG9yIG1vcmUgYWdyZWVtZW50cy5cclxuLy8gVGhlIC5ORVQgRm91bmRhdGlvbiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuZXhwb3J0IHsgQWJvcnRFcnJvciwgSHR0cEVycm9yLCBUaW1lb3V0RXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuZXhwb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIi4vSHR0cENsaWVudFwiO1xyXG5leHBvcnQgeyBEZWZhdWx0SHR0cENsaWVudCB9IGZyb20gXCIuL0RlZmF1bHRIdHRwQ2xpZW50XCI7XHJcbmV4cG9ydCB7IEh1YkNvbm5lY3Rpb24sIEh1YkNvbm5lY3Rpb25TdGF0ZSB9IGZyb20gXCIuL0h1YkNvbm5lY3Rpb25cIjtcclxuZXhwb3J0IHsgSHViQ29ubmVjdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi9IdWJDb25uZWN0aW9uQnVpbGRlclwiO1xyXG5leHBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gXCIuL0lIdWJQcm90b2NvbFwiO1xyXG5leHBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0lMb2dnZXJcIjtcclxuZXhwb3J0IHsgSHR0cFRyYW5zcG9ydFR5cGUsIFRyYW5zZmVyRm9ybWF0IH0gZnJvbSBcIi4vSVRyYW5zcG9ydFwiO1xyXG5leHBvcnQgeyBOdWxsTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2Vyc1wiO1xyXG5leHBvcnQgeyBKc29uSHViUHJvdG9jb2wgfSBmcm9tIFwiLi9Kc29uSHViUHJvdG9jb2xcIjtcclxuZXhwb3J0IHsgU3ViamVjdCB9IGZyb20gXCIuL1N1YmplY3RcIjtcclxuZXhwb3J0IHsgVkVSU0lPTiB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyoqXG4gKiBbanMtc2hhMjU2XXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZW1uMTc4L2pzLXNoYTI1Nn1cbiAqXG4gKiBAdmVyc2lvbiAwLjkuMFxuICogQGF1dGhvciBDaGVuLCBZaS1DeXVhbiBbZW1uMTc4QGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgQ2hlbiwgWWktQ3l1YW4gMjAxNC0yMDE3XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBFUlJPUiA9ICdpbnB1dCBpcyBpbnZhbGlkIHR5cGUnO1xuICB2YXIgV0lORE9XID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCc7XG4gIHZhciByb290ID0gV0lORE9XID8gd2luZG93IDoge307XG4gIGlmIChyb290LkpTX1NIQTI1Nl9OT19XSU5ET1cpIHtcbiAgICBXSU5ET1cgPSBmYWxzZTtcbiAgfVxuICB2YXIgV0VCX1dPUktFUiA9ICFXSU5ET1cgJiYgdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnO1xuICB2YXIgTk9ERV9KUyA9ICFyb290LkpTX1NIQTI1Nl9OT19OT0RFX0pTICYmIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJiBwcm9jZXNzLnZlcnNpb25zICYmIHByb2Nlc3MudmVyc2lvbnMubm9kZTtcbiAgaWYgKE5PREVfSlMpIHtcbiAgICByb290ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFdFQl9XT1JLRVIpIHtcbiAgICByb290ID0gc2VsZjtcbiAgfVxuICB2YXIgQ09NTU9OX0pTID0gIXJvb3QuSlNfU0hBMjU2X05PX0NPTU1PTl9KUyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIEFNRCA9IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZDtcbiAgdmFyIEFSUkFZX0JVRkZFUiA9ICFyb290LkpTX1NIQTI1Nl9OT19BUlJBWV9CVUZGRVIgJiYgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIEhFWF9DSEFSUyA9ICcwMTIzNDU2Nzg5YWJjZGVmJy5zcGxpdCgnJyk7XG4gIHZhciBFWFRSQSA9IFstMjE0NzQ4MzY0OCwgODM4ODYwOCwgMzI3NjgsIDEyOF07XG4gIHZhciBTSElGVCA9IFsyNCwgMTYsIDgsIDBdO1xuICB2YXIgSyA9IFtcbiAgICAweDQyOGEyZjk4LCAweDcxMzc0NDkxLCAweGI1YzBmYmNmLCAweGU5YjVkYmE1LCAweDM5NTZjMjViLCAweDU5ZjExMWYxLCAweDkyM2Y4MmE0LCAweGFiMWM1ZWQ1LFxuICAgIDB4ZDgwN2FhOTgsIDB4MTI4MzViMDEsIDB4MjQzMTg1YmUsIDB4NTUwYzdkYzMsIDB4NzJiZTVkNzQsIDB4ODBkZWIxZmUsIDB4OWJkYzA2YTcsIDB4YzE5YmYxNzQsXG4gICAgMHhlNDliNjljMSwgMHhlZmJlNDc4NiwgMHgwZmMxOWRjNiwgMHgyNDBjYTFjYywgMHgyZGU5MmM2ZiwgMHg0YTc0ODRhYSwgMHg1Y2IwYTlkYywgMHg3NmY5ODhkYSxcbiAgICAweDk4M2U1MTUyLCAweGE4MzFjNjZkLCAweGIwMDMyN2M4LCAweGJmNTk3ZmM3LCAweGM2ZTAwYmYzLCAweGQ1YTc5MTQ3LCAweDA2Y2E2MzUxLCAweDE0MjkyOTY3LFxuICAgIDB4MjdiNzBhODUsIDB4MmUxYjIxMzgsIDB4NGQyYzZkZmMsIDB4NTMzODBkMTMsIDB4NjUwYTczNTQsIDB4NzY2YTBhYmIsIDB4ODFjMmM5MmUsIDB4OTI3MjJjODUsXG4gICAgMHhhMmJmZThhMSwgMHhhODFhNjY0YiwgMHhjMjRiOGI3MCwgMHhjNzZjNTFhMywgMHhkMTkyZTgxOSwgMHhkNjk5MDYyNCwgMHhmNDBlMzU4NSwgMHgxMDZhYTA3MCxcbiAgICAweDE5YTRjMTE2LCAweDFlMzc2YzA4LCAweDI3NDg3NzRjLCAweDM0YjBiY2I1LCAweDM5MWMwY2IzLCAweDRlZDhhYTRhLCAweDViOWNjYTRmLCAweDY4MmU2ZmYzLFxuICAgIDB4NzQ4ZjgyZWUsIDB4NzhhNTYzNmYsIDB4ODRjODc4MTQsIDB4OGNjNzAyMDgsIDB4OTBiZWZmZmEsIDB4YTQ1MDZjZWIsIDB4YmVmOWEzZjcsIDB4YzY3MTc4ZjJcbiAgXTtcbiAgdmFyIE9VVFBVVF9UWVBFUyA9IFsnaGV4JywgJ2FycmF5JywgJ2RpZ2VzdCcsICdhcnJheUJ1ZmZlciddO1xuXG4gIHZhciBibG9ja3MgPSBbXTtcblxuICBpZiAocm9vdC5KU19TSEEyNTZfTk9fTk9ERV9KUyB8fCAhQXJyYXkuaXNBcnJheSkge1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChBUlJBWV9CVUZGRVIgJiYgKHJvb3QuSlNfU0hBMjU2X05PX0FSUkFZX0JVRkZFUl9JU19WSUVXIHx8ICFBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgQXJyYXlCdWZmZXIuaXNWaWV3ID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5idWZmZXIgJiYgb2JqLmJ1ZmZlci5jb25zdHJ1Y3RvciA9PT0gQXJyYXlCdWZmZXI7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBjcmVhdGVPdXRwdXRNZXRob2QgPSBmdW5jdGlvbiAob3V0cHV0VHlwZSwgaXMyMjQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBuZXcgU2hhMjU2KGlzMjI0LCB0cnVlKS51cGRhdGUobWVzc2FnZSlbb3V0cHV0VHlwZV0oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoaXMyMjQpIHtcbiAgICB2YXIgbWV0aG9kID0gY3JlYXRlT3V0cHV0TWV0aG9kKCdoZXgnLCBpczIyNCk7XG4gICAgaWYgKE5PREVfSlMpIHtcbiAgICAgIG1ldGhvZCA9IG5vZGVXcmFwKG1ldGhvZCwgaXMyMjQpO1xuICAgIH1cbiAgICBtZXRob2QuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBTaGEyNTYoaXMyMjQpO1xuICAgIH07XG4gICAgbWV0aG9kLnVwZGF0ZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbWV0aG9kLmNyZWF0ZSgpLnVwZGF0ZShtZXNzYWdlKTtcbiAgICB9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgT1VUUFVUX1RZUEVTLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgdHlwZSA9IE9VVFBVVF9UWVBFU1tpXTtcbiAgICAgIG1ldGhvZFt0eXBlXSA9IGNyZWF0ZU91dHB1dE1ldGhvZCh0eXBlLCBpczIyNCk7XG4gICAgfVxuICAgIHJldHVybiBtZXRob2Q7XG4gIH07XG5cbiAgdmFyIG5vZGVXcmFwID0gZnVuY3Rpb24gKG1ldGhvZCwgaXMyMjQpIHtcbiAgICB2YXIgY3J5cHRvID0gZXZhbChcInJlcXVpcmUoJ2NyeXB0bycpXCIpO1xuICAgIHZhciBCdWZmZXIgPSBldmFsKFwicmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyXCIpO1xuICAgIHZhciBhbGdvcml0aG0gPSBpczIyNCA/ICdzaGEyMjQnIDogJ3NoYTI1Nic7XG4gICAgdmFyIG5vZGVNZXRob2QgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2goYWxnb3JpdGhtKS51cGRhdGUobWVzc2FnZSwgJ3V0ZjgnKS5kaWdlc3QoJ2hleCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBuZXcgVWludDhBcnJheShtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVzc2FnZSkgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KG1lc3NhZ2UpIHx8XG4gICAgICAgIG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2goYWxnb3JpdGhtKS51cGRhdGUobmV3IEJ1ZmZlcihtZXNzYWdlKSkuZGlnZXN0KCdoZXgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXRob2QobWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbm9kZU1ldGhvZDtcbiAgfTtcblxuICB2YXIgY3JlYXRlSG1hY091dHB1dE1ldGhvZCA9IGZ1bmN0aW9uIChvdXRwdXRUeXBlLCBpczIyNCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoa2V5LCBtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbmV3IEhtYWNTaGEyNTYoa2V5LCBpczIyNCwgdHJ1ZSkudXBkYXRlKG1lc3NhZ2UpW291dHB1dFR5cGVdKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlSG1hY01ldGhvZCA9IGZ1bmN0aW9uIChpczIyNCkge1xuICAgIHZhciBtZXRob2QgPSBjcmVhdGVIbWFjT3V0cHV0TWV0aG9kKCdoZXgnLCBpczIyNCk7XG4gICAgbWV0aG9kLmNyZWF0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBuZXcgSG1hY1NoYTI1NihrZXksIGlzMjI0KTtcbiAgICB9O1xuICAgIG1ldGhvZC51cGRhdGUgPSBmdW5jdGlvbiAoa2V5LCBtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbWV0aG9kLmNyZWF0ZShrZXkpLnVwZGF0ZShtZXNzYWdlKTtcbiAgICB9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgT1VUUFVUX1RZUEVTLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgdHlwZSA9IE9VVFBVVF9UWVBFU1tpXTtcbiAgICAgIG1ldGhvZFt0eXBlXSA9IGNyZWF0ZUhtYWNPdXRwdXRNZXRob2QodHlwZSwgaXMyMjQpO1xuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFNoYTI1NihpczIyNCwgc2hhcmVkTWVtb3J5KSB7XG4gICAgaWYgKHNoYXJlZE1lbW9yeSkge1xuICAgICAgYmxvY2tzWzBdID0gYmxvY2tzWzE2XSA9IGJsb2Nrc1sxXSA9IGJsb2Nrc1syXSA9IGJsb2Nrc1szXSA9XG4gICAgICAgIGJsb2Nrc1s0XSA9IGJsb2Nrc1s1XSA9IGJsb2Nrc1s2XSA9IGJsb2Nrc1s3XSA9XG4gICAgICAgIGJsb2Nrc1s4XSA9IGJsb2Nrc1s5XSA9IGJsb2Nrc1sxMF0gPSBibG9ja3NbMTFdID1cbiAgICAgICAgYmxvY2tzWzEyXSA9IGJsb2Nrc1sxM10gPSBibG9ja3NbMTRdID0gYmxvY2tzWzE1XSA9IDA7XG4gICAgICB0aGlzLmJsb2NrcyA9IGJsb2NrcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibG9ja3MgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgfVxuXG4gICAgaWYgKGlzMjI0KSB7XG4gICAgICB0aGlzLmgwID0gMHhjMTA1OWVkODtcbiAgICAgIHRoaXMuaDEgPSAweDM2N2NkNTA3O1xuICAgICAgdGhpcy5oMiA9IDB4MzA3MGRkMTc7XG4gICAgICB0aGlzLmgzID0gMHhmNzBlNTkzOTtcbiAgICAgIHRoaXMuaDQgPSAweGZmYzAwYjMxO1xuICAgICAgdGhpcy5oNSA9IDB4Njg1ODE1MTE7XG4gICAgICB0aGlzLmg2ID0gMHg2NGY5OGZhNztcbiAgICAgIHRoaXMuaDcgPSAweGJlZmE0ZmE0O1xuICAgIH0gZWxzZSB7IC8vIDI1NlxuICAgICAgdGhpcy5oMCA9IDB4NmEwOWU2Njc7XG4gICAgICB0aGlzLmgxID0gMHhiYjY3YWU4NTtcbiAgICAgIHRoaXMuaDIgPSAweDNjNmVmMzcyO1xuICAgICAgdGhpcy5oMyA9IDB4YTU0ZmY1M2E7XG4gICAgICB0aGlzLmg0ID0gMHg1MTBlNTI3ZjtcbiAgICAgIHRoaXMuaDUgPSAweDliMDU2ODhjO1xuICAgICAgdGhpcy5oNiA9IDB4MWY4M2Q5YWI7XG4gICAgICB0aGlzLmg3ID0gMHg1YmUwY2QxOTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrID0gdGhpcy5zdGFydCA9IHRoaXMuYnl0ZXMgPSB0aGlzLmhCeXRlcyA9IDA7XG4gICAgdGhpcy5maW5hbGl6ZWQgPSB0aGlzLmhhc2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlyc3QgPSB0cnVlO1xuICAgIHRoaXMuaXMyMjQgPSBpczIyNDtcbiAgfVxuXG4gIFNoYTI1Ni5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5vdFN0cmluZywgdHlwZSA9IHR5cGVvZiBtZXNzYWdlO1xuICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SKTtcbiAgICAgICAgfSBlbHNlIGlmIChBUlJBWV9CVUZGRVIgJiYgbWVzc2FnZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICBtZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkobWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpIHtcbiAgICAgICAgICBpZiAoIUFSUkFZX0JVRkZFUiB8fCAhQXJyYXlCdWZmZXIuaXNWaWV3KG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SKTtcbiAgICAgIH1cbiAgICAgIG5vdFN0cmluZyA9IHRydWU7XG4gICAgfVxuICAgIHZhciBjb2RlLCBpbmRleCA9IDAsIGksIGxlbmd0aCA9IG1lc3NhZ2UubGVuZ3RoLCBibG9ja3MgPSB0aGlzLmJsb2NrcztcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuaGFzaGVkKSB7XG4gICAgICAgIHRoaXMuaGFzaGVkID0gZmFsc2U7XG4gICAgICAgIGJsb2Nrc1swXSA9IHRoaXMuYmxvY2s7XG4gICAgICAgIGJsb2Nrc1sxNl0gPSBibG9ja3NbMV0gPSBibG9ja3NbMl0gPSBibG9ja3NbM10gPVxuICAgICAgICAgIGJsb2Nrc1s0XSA9IGJsb2Nrc1s1XSA9IGJsb2Nrc1s2XSA9IGJsb2Nrc1s3XSA9XG4gICAgICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxuICAgICAgICAgIGJsb2Nrc1sxMl0gPSBibG9ja3NbMTNdID0gYmxvY2tzWzE0XSA9IGJsb2Nrc1sxNV0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAobm90U3RyaW5nKSB7XG4gICAgICAgIGZvciAoaSA9IHRoaXMuc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCA2NDsgKytpbmRleCkge1xuICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9IG1lc3NhZ2VbaW5kZXhdIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSB0aGlzLnN0YXJ0OyBpbmRleCA8IGxlbmd0aCAmJiBpIDwgNjQ7ICsraW5kZXgpIHtcbiAgICAgICAgICBjb2RlID0gbWVzc2FnZS5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgICBpZiAoY29kZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9IGNvZGUgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweGMwIHwgKGNvZGUgPj4gNikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweGQ4MDAgfHwgY29kZSA+PSAweGUwMDApIHtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweGUwIHwgKGNvZGUgPj4gMTIpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDYpICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZSA9IDB4MTAwMDAgKyAoKChjb2RlICYgMHgzZmYpIDw8IDEwKSB8IChtZXNzYWdlLmNoYXJDb2RlQXQoKytpbmRleCkgJiAweDNmZikpO1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ZjAgfCAoY29kZSA+PiAxOCkpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoKGNvZGUgPj4gMTIpICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoKGNvZGUgPj4gNikgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8IChjb2RlICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmxhc3RCeXRlSW5kZXggPSBpO1xuICAgICAgdGhpcy5ieXRlcyArPSBpIC0gdGhpcy5zdGFydDtcbiAgICAgIGlmIChpID49IDY0KSB7XG4gICAgICAgIHRoaXMuYmxvY2sgPSBibG9ja3NbMTZdO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gaSAtIDY0O1xuICAgICAgICB0aGlzLmhhc2goKTtcbiAgICAgICAgdGhpcy5oYXNoZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmJ5dGVzID4gNDI5NDk2NzI5NSkge1xuICAgICAgdGhpcy5oQnl0ZXMgKz0gdGhpcy5ieXRlcyAvIDQyOTQ5NjcyOTYgPDwgMDtcbiAgICAgIHRoaXMuYnl0ZXMgPSB0aGlzLmJ5dGVzICUgNDI5NDk2NzI5NjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5maW5hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maW5hbGl6ZWQgPSB0cnVlO1xuICAgIHZhciBibG9ja3MgPSB0aGlzLmJsb2NrcywgaSA9IHRoaXMubGFzdEJ5dGVJbmRleDtcbiAgICBibG9ja3NbMTZdID0gdGhpcy5ibG9jaztcbiAgICBibG9ja3NbaSA+PiAyXSB8PSBFWFRSQVtpICYgM107XG4gICAgdGhpcy5ibG9jayA9IGJsb2Nrc1sxNl07XG4gICAgaWYgKGkgPj0gNTYpIHtcbiAgICAgIGlmICghdGhpcy5oYXNoZWQpIHtcbiAgICAgICAgdGhpcy5oYXNoKCk7XG4gICAgICB9XG4gICAgICBibG9ja3NbMF0gPSB0aGlzLmJsb2NrO1xuICAgICAgYmxvY2tzWzE2XSA9IGJsb2Nrc1sxXSA9IGJsb2Nrc1syXSA9IGJsb2Nrc1szXSA9XG4gICAgICAgIGJsb2Nrc1s0XSA9IGJsb2Nrc1s1XSA9IGJsb2Nrc1s2XSA9IGJsb2Nrc1s3XSA9XG4gICAgICAgIGJsb2Nrc1s4XSA9IGJsb2Nrc1s5XSA9IGJsb2Nrc1sxMF0gPSBibG9ja3NbMTFdID1cbiAgICAgICAgYmxvY2tzWzEyXSA9IGJsb2Nrc1sxM10gPSBibG9ja3NbMTRdID0gYmxvY2tzWzE1XSA9IDA7XG4gICAgfVxuICAgIGJsb2Nrc1sxNF0gPSB0aGlzLmhCeXRlcyA8PCAzIHwgdGhpcy5ieXRlcyA+Pj4gMjk7XG4gICAgYmxvY2tzWzE1XSA9IHRoaXMuYnl0ZXMgPDwgMztcbiAgICB0aGlzLmhhc2goKTtcbiAgfTtcblxuICBTaGEyNTYucHJvdG90eXBlLmhhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGEgPSB0aGlzLmgwLCBiID0gdGhpcy5oMSwgYyA9IHRoaXMuaDIsIGQgPSB0aGlzLmgzLCBlID0gdGhpcy5oNCwgZiA9IHRoaXMuaDUsIGcgPSB0aGlzLmg2LFxuICAgICAgaCA9IHRoaXMuaDcsIGJsb2NrcyA9IHRoaXMuYmxvY2tzLCBqLCBzMCwgczEsIG1haiwgdDEsIHQyLCBjaCwgYWIsIGRhLCBjZCwgYmM7XG5cbiAgICBmb3IgKGogPSAxNjsgaiA8IDY0OyArK2opIHtcbiAgICAgIC8vIHJpZ2h0cm90YXRlXG4gICAgICB0MSA9IGJsb2Nrc1tqIC0gMTVdO1xuICAgICAgczAgPSAoKHQxID4+PiA3KSB8ICh0MSA8PCAyNSkpIF4gKCh0MSA+Pj4gMTgpIHwgKHQxIDw8IDE0KSkgXiAodDEgPj4+IDMpO1xuICAgICAgdDEgPSBibG9ja3NbaiAtIDJdO1xuICAgICAgczEgPSAoKHQxID4+PiAxNykgfCAodDEgPDwgMTUpKSBeICgodDEgPj4+IDE5KSB8ICh0MSA8PCAxMykpIF4gKHQxID4+PiAxMCk7XG4gICAgICBibG9ja3Nbal0gPSBibG9ja3NbaiAtIDE2XSArIHMwICsgYmxvY2tzW2ogLSA3XSArIHMxIDw8IDA7XG4gICAgfVxuXG4gICAgYmMgPSBiICYgYztcbiAgICBmb3IgKGogPSAwOyBqIDwgNjQ7IGogKz0gNCkge1xuICAgICAgaWYgKHRoaXMuZmlyc3QpIHtcbiAgICAgICAgaWYgKHRoaXMuaXMyMjQpIHtcbiAgICAgICAgICBhYiA9IDMwMDAzMjtcbiAgICAgICAgICB0MSA9IGJsb2Nrc1swXSAtIDE0MTMyNTc4MTk7XG4gICAgICAgICAgaCA9IHQxIC0gMTUwMDU0NTk5IDw8IDA7XG4gICAgICAgICAgZCA9IHQxICsgMjQxNzcwNzcgPDwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhYiA9IDcwNDc1MTEwOTtcbiAgICAgICAgICB0MSA9IGJsb2Nrc1swXSAtIDIxMDI0NDI0ODtcbiAgICAgICAgICBoID0gdDEgLSAxNTIxNDg2NTM0IDw8IDA7XG4gICAgICAgICAgZCA9IHQxICsgMTQzNjk0NTY1IDw8IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXJzdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczAgPSAoKGEgPj4+IDIpIHwgKGEgPDwgMzApKSBeICgoYSA+Pj4gMTMpIHwgKGEgPDwgMTkpKSBeICgoYSA+Pj4gMjIpIHwgKGEgPDwgMTApKTtcbiAgICAgICAgczEgPSAoKGUgPj4+IDYpIHwgKGUgPDwgMjYpKSBeICgoZSA+Pj4gMTEpIHwgKGUgPDwgMjEpKSBeICgoZSA+Pj4gMjUpIHwgKGUgPDwgNykpO1xuICAgICAgICBhYiA9IGEgJiBiO1xuICAgICAgICBtYWogPSBhYiBeIChhICYgYykgXiBiYztcbiAgICAgICAgY2ggPSAoZSAmIGYpIF4gKH5lICYgZyk7XG4gICAgICAgIHQxID0gaCArIHMxICsgY2ggKyBLW2pdICsgYmxvY2tzW2pdO1xuICAgICAgICB0MiA9IHMwICsgbWFqO1xuICAgICAgICBoID0gZCArIHQxIDw8IDA7XG4gICAgICAgIGQgPSB0MSArIHQyIDw8IDA7XG4gICAgICB9XG4gICAgICBzMCA9ICgoZCA+Pj4gMikgfCAoZCA8PCAzMCkpIF4gKChkID4+PiAxMykgfCAoZCA8PCAxOSkpIF4gKChkID4+PiAyMikgfCAoZCA8PCAxMCkpO1xuICAgICAgczEgPSAoKGggPj4+IDYpIHwgKGggPDwgMjYpKSBeICgoaCA+Pj4gMTEpIHwgKGggPDwgMjEpKSBeICgoaCA+Pj4gMjUpIHwgKGggPDwgNykpO1xuICAgICAgZGEgPSBkICYgYTtcbiAgICAgIG1haiA9IGRhIF4gKGQgJiBiKSBeIGFiO1xuICAgICAgY2ggPSAoaCAmIGUpIF4gKH5oICYgZik7XG4gICAgICB0MSA9IGcgKyBzMSArIGNoICsgS1tqICsgMV0gKyBibG9ja3NbaiArIDFdO1xuICAgICAgdDIgPSBzMCArIG1hajtcbiAgICAgIGcgPSBjICsgdDEgPDwgMDtcbiAgICAgIGMgPSB0MSArIHQyIDw8IDA7XG4gICAgICBzMCA9ICgoYyA+Pj4gMikgfCAoYyA8PCAzMCkpIF4gKChjID4+PiAxMykgfCAoYyA8PCAxOSkpIF4gKChjID4+PiAyMikgfCAoYyA8PCAxMCkpO1xuICAgICAgczEgPSAoKGcgPj4+IDYpIHwgKGcgPDwgMjYpKSBeICgoZyA+Pj4gMTEpIHwgKGcgPDwgMjEpKSBeICgoZyA+Pj4gMjUpIHwgKGcgPDwgNykpO1xuICAgICAgY2QgPSBjICYgZDtcbiAgICAgIG1haiA9IGNkIF4gKGMgJiBhKSBeIGRhO1xuICAgICAgY2ggPSAoZyAmIGgpIF4gKH5nICYgZSk7XG4gICAgICB0MSA9IGYgKyBzMSArIGNoICsgS1tqICsgMl0gKyBibG9ja3NbaiArIDJdO1xuICAgICAgdDIgPSBzMCArIG1hajtcbiAgICAgIGYgPSBiICsgdDEgPDwgMDtcbiAgICAgIGIgPSB0MSArIHQyIDw8IDA7XG4gICAgICBzMCA9ICgoYiA+Pj4gMikgfCAoYiA8PCAzMCkpIF4gKChiID4+PiAxMykgfCAoYiA8PCAxOSkpIF4gKChiID4+PiAyMikgfCAoYiA8PCAxMCkpO1xuICAgICAgczEgPSAoKGYgPj4+IDYpIHwgKGYgPDwgMjYpKSBeICgoZiA+Pj4gMTEpIHwgKGYgPDwgMjEpKSBeICgoZiA+Pj4gMjUpIHwgKGYgPDwgNykpO1xuICAgICAgYmMgPSBiICYgYztcbiAgICAgIG1haiA9IGJjIF4gKGIgJiBkKSBeIGNkO1xuICAgICAgY2ggPSAoZiAmIGcpIF4gKH5mICYgaCk7XG4gICAgICB0MSA9IGUgKyBzMSArIGNoICsgS1tqICsgM10gKyBibG9ja3NbaiArIDNdO1xuICAgICAgdDIgPSBzMCArIG1hajtcbiAgICAgIGUgPSBhICsgdDEgPDwgMDtcbiAgICAgIGEgPSB0MSArIHQyIDw8IDA7XG4gICAgfVxuXG4gICAgdGhpcy5oMCA9IHRoaXMuaDAgKyBhIDw8IDA7XG4gICAgdGhpcy5oMSA9IHRoaXMuaDEgKyBiIDw8IDA7XG4gICAgdGhpcy5oMiA9IHRoaXMuaDIgKyBjIDw8IDA7XG4gICAgdGhpcy5oMyA9IHRoaXMuaDMgKyBkIDw8IDA7XG4gICAgdGhpcy5oNCA9IHRoaXMuaDQgKyBlIDw8IDA7XG4gICAgdGhpcy5oNSA9IHRoaXMuaDUgKyBmIDw8IDA7XG4gICAgdGhpcy5oNiA9IHRoaXMuaDYgKyBnIDw8IDA7XG4gICAgdGhpcy5oNyA9IHRoaXMuaDcgKyBoIDw8IDA7XG4gIH07XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5oZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5maW5hbGl6ZSgpO1xuXG4gICAgdmFyIGgwID0gdGhpcy5oMCwgaDEgPSB0aGlzLmgxLCBoMiA9IHRoaXMuaDIsIGgzID0gdGhpcy5oMywgaDQgPSB0aGlzLmg0LCBoNSA9IHRoaXMuaDUsXG4gICAgICBoNiA9IHRoaXMuaDYsIGg3ID0gdGhpcy5oNztcblxuICAgIHZhciBoZXggPSBIRVhfQ0hBUlNbKGgwID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMCA+PiAyNCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgwID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMCA+PiAxNikgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgwID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMCA+PiA4KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDAgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMCAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDEgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgxID4+IDI0KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDEgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgxID4+IDE2KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDEgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgxID4+IDgpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMSA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2gxICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMiA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDIgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMiA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDIgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoMiA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDIgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgyID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDIgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgzID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMyA+PiAyNCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgzID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMyA+PiAxNikgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGgzID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMyA+PiA4KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDMgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMyAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDQgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg0ID4+IDI0KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDQgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg0ID4+IDE2KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDQgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg0ID4+IDgpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNCA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2g0ICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNSA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDUgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNSA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDUgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgSEVYX0NIQVJTWyhoNSA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDUgPj4gOCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg1ID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDUgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg2ID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNiA+PiAyNCkgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg2ID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNiA+PiAxNikgJiAweDBGXSArXG4gICAgICBIRVhfQ0hBUlNbKGg2ID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNiA+PiA4KSAmIDB4MEZdICtcbiAgICAgIEhFWF9DSEFSU1soaDYgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toNiAmIDB4MEZdO1xuICAgIGlmICghdGhpcy5pczIyNCkge1xuICAgICAgaGV4ICs9IEhFWF9DSEFSU1soaDcgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGg3ID4+IDI0KSAmIDB4MEZdICtcbiAgICAgICAgSEVYX0NIQVJTWyhoNyA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDcgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgICBIRVhfQ0hBUlNbKGg3ID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoNyA+PiA4KSAmIDB4MEZdICtcbiAgICAgICAgSEVYX0NIQVJTWyhoNyA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2g3ICYgMHgwRl07XG4gICAgfVxuICAgIHJldHVybiBoZXg7XG4gIH07XG5cbiAgU2hhMjU2LnByb3RvdHlwZS50b1N0cmluZyA9IFNoYTI1Ni5wcm90b3R5cGUuaGV4O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZmluYWxpemUoKTtcblxuICAgIHZhciBoMCA9IHRoaXMuaDAsIGgxID0gdGhpcy5oMSwgaDIgPSB0aGlzLmgyLCBoMyA9IHRoaXMuaDMsIGg0ID0gdGhpcy5oNCwgaDUgPSB0aGlzLmg1LFxuICAgICAgaDYgPSB0aGlzLmg2LCBoNyA9IHRoaXMuaDc7XG5cbiAgICB2YXIgYXJyID0gW1xuICAgICAgKGgwID4+IDI0KSAmIDB4RkYsIChoMCA+PiAxNikgJiAweEZGLCAoaDAgPj4gOCkgJiAweEZGLCBoMCAmIDB4RkYsXG4gICAgICAoaDEgPj4gMjQpICYgMHhGRiwgKGgxID4+IDE2KSAmIDB4RkYsIChoMSA+PiA4KSAmIDB4RkYsIGgxICYgMHhGRixcbiAgICAgIChoMiA+PiAyNCkgJiAweEZGLCAoaDIgPj4gMTYpICYgMHhGRiwgKGgyID4+IDgpICYgMHhGRiwgaDIgJiAweEZGLFxuICAgICAgKGgzID4+IDI0KSAmIDB4RkYsIChoMyA+PiAxNikgJiAweEZGLCAoaDMgPj4gOCkgJiAweEZGLCBoMyAmIDB4RkYsXG4gICAgICAoaDQgPj4gMjQpICYgMHhGRiwgKGg0ID4+IDE2KSAmIDB4RkYsIChoNCA+PiA4KSAmIDB4RkYsIGg0ICYgMHhGRixcbiAgICAgIChoNSA+PiAyNCkgJiAweEZGLCAoaDUgPj4gMTYpICYgMHhGRiwgKGg1ID4+IDgpICYgMHhGRiwgaDUgJiAweEZGLFxuICAgICAgKGg2ID4+IDI0KSAmIDB4RkYsIChoNiA+PiAxNikgJiAweEZGLCAoaDYgPj4gOCkgJiAweEZGLCBoNiAmIDB4RkZcbiAgICBdO1xuICAgIGlmICghdGhpcy5pczIyNCkge1xuICAgICAgYXJyLnB1c2goKGg3ID4+IDI0KSAmIDB4RkYsIChoNyA+PiAxNikgJiAweEZGLCAoaDcgPj4gOCkgJiAweEZGLCBoNyAmIDB4RkYpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuYXJyYXkgPSBTaGEyNTYucHJvdG90eXBlLmRpZ2VzdDtcblxuICBTaGEyNTYucHJvdG90eXBlLmFycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZmluYWxpemUoKTtcblxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5pczIyNCA/IDI4IDogMzIpO1xuICAgIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgIGRhdGFWaWV3LnNldFVpbnQzMigwLCB0aGlzLmgwKTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoNCwgdGhpcy5oMSk7XG4gICAgZGF0YVZpZXcuc2V0VWludDMyKDgsIHRoaXMuaDIpO1xuICAgIGRhdGFWaWV3LnNldFVpbnQzMigxMiwgdGhpcy5oMyk7XG4gICAgZGF0YVZpZXcuc2V0VWludDMyKDE2LCB0aGlzLmg0KTtcbiAgICBkYXRhVmlldy5zZXRVaW50MzIoMjAsIHRoaXMuaDUpO1xuICAgIGRhdGFWaWV3LnNldFVpbnQzMigyNCwgdGhpcy5oNik7XG4gICAgaWYgKCF0aGlzLmlzMjI0KSB7XG4gICAgICBkYXRhVmlldy5zZXRVaW50MzIoMjgsIHRoaXMuaDcpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEhtYWNTaGEyNTYoa2V5LCBpczIyNCwgc2hhcmVkTWVtb3J5KSB7XG4gICAgdmFyIGksIHR5cGUgPSB0eXBlb2Yga2V5O1xuICAgIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGJ5dGVzID0gW10sIGxlbmd0aCA9IGtleS5sZW5ndGgsIGluZGV4ID0gMCwgY29kZTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICBjb2RlID0ga2V5LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjb2RlIDwgMHg4MCkge1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gY29kZTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweGMwIHwgKGNvZGUgPj4gNikpO1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhkODAwIHx8IGNvZGUgPj0gMHhlMDAwKSB7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHhlMCB8IChjb2RlID4+IDEyKSk7XG4gICAgICAgICAgYnl0ZXNbaW5kZXgrK10gPSAoMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpKTtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweDgwIHwgKGNvZGUgJiAweDNmKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29kZSA9IDB4MTAwMDAgKyAoKChjb2RlICYgMHgzZmYpIDw8IDEwKSB8IChrZXkuY2hhckNvZGVBdCgrK2kpICYgMHgzZmYpKTtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweGYwIHwgKGNvZGUgPj4gMTgpKTtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweDgwIHwgKChjb2RlID4+IDEyKSAmIDB4M2YpKTtcbiAgICAgICAgICBieXRlc1tpbmRleCsrXSA9ICgweDgwIHwgKChjb2RlID4+IDYpICYgMHgzZikpO1xuICAgICAgICAgIGJ5dGVzW2luZGV4KytdID0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAga2V5ID0gYnl0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoa2V5ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SKTtcbiAgICAgICAgfSBlbHNlIGlmIChBUlJBWV9CVUZGRVIgJiYga2V5LmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIGtleSA9IG5ldyBVaW50OEFycmF5KGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgIGlmICghQVJSQVlfQlVGRkVSIHx8ICFBcnJheUJ1ZmZlci5pc1ZpZXcoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleS5sZW5ndGggPiA2NCkge1xuICAgICAga2V5ID0gKG5ldyBTaGEyNTYoaXMyMjQsIHRydWUpKS51cGRhdGUoa2V5KS5hcnJheSgpO1xuICAgIH1cblxuICAgIHZhciBvS2V5UGFkID0gW10sIGlLZXlQYWQgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjQ7ICsraSkge1xuICAgICAgdmFyIGIgPSBrZXlbaV0gfHwgMDtcbiAgICAgIG9LZXlQYWRbaV0gPSAweDVjIF4gYjtcbiAgICAgIGlLZXlQYWRbaV0gPSAweDM2IF4gYjtcbiAgICB9XG5cbiAgICBTaGEyNTYuY2FsbCh0aGlzLCBpczIyNCwgc2hhcmVkTWVtb3J5KTtcblxuICAgIHRoaXMudXBkYXRlKGlLZXlQYWQpO1xuICAgIHRoaXMub0tleVBhZCA9IG9LZXlQYWQ7XG4gICAgdGhpcy5pbm5lciA9IHRydWU7XG4gICAgdGhpcy5zaGFyZWRNZW1vcnkgPSBzaGFyZWRNZW1vcnk7XG4gIH1cbiAgSG1hY1NoYTI1Ni5wcm90b3R5cGUgPSBuZXcgU2hhMjU2KCk7XG5cbiAgSG1hY1NoYTI1Ni5wcm90b3R5cGUuZmluYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgU2hhMjU2LnByb3RvdHlwZS5maW5hbGl6ZS5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmlubmVyKSB7XG4gICAgICB0aGlzLmlubmVyID0gZmFsc2U7XG4gICAgICB2YXIgaW5uZXJIYXNoID0gdGhpcy5hcnJheSgpO1xuICAgICAgU2hhMjU2LmNhbGwodGhpcywgdGhpcy5pczIyNCwgdGhpcy5zaGFyZWRNZW1vcnkpO1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5vS2V5UGFkKTtcbiAgICAgIHRoaXMudXBkYXRlKGlubmVySGFzaCk7XG4gICAgICBTaGEyNTYucHJvdG90eXBlLmZpbmFsaXplLmNhbGwodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBleHBvcnRzID0gY3JlYXRlTWV0aG9kKCk7XG4gIGV4cG9ydHMuc2hhMjU2ID0gZXhwb3J0cztcbiAgZXhwb3J0cy5zaGEyMjQgPSBjcmVhdGVNZXRob2QodHJ1ZSk7XG4gIGV4cG9ydHMuc2hhMjU2LmhtYWMgPSBjcmVhdGVIbWFjTWV0aG9kKCk7XG4gIGV4cG9ydHMuc2hhMjI0LmhtYWMgPSBjcmVhdGVIbWFjTWV0aG9kKHRydWUpO1xuXG4gIGlmIChDT01NT05fSlMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5zaGEyNTYgPSBleHBvcnRzLnNoYTI1NjtcbiAgICByb290LnNoYTIyNCA9IGV4cG9ydHMuc2hhMjI0O1xuICAgIGlmIChBTUQpIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vc3JjL3V0aWxzXCIpO1xyXG4vLyBpbXBvcnQgeyBWZWhpY2xlTW92ZW1lbnQgfSBmcm9tICcuL3NyYy9tb3ZlbWVudC5qcyc7XHJcbnZhciBzZXJ2ZXJfcHVzaF8xID0gcmVxdWlyZShcIi4vc3JjL3NlcnZlci1wdXNoXCIpO1xyXG52YXIgQWN0aXZhdGVTY2VuZV8xID0gcmVxdWlyZShcIi4vc3JjL0FjdGl2YXRlU2NlbmVcIik7XHJcbnZhciBPcGVuU2NlbmVOb3Rlc18xID0gcmVxdWlyZShcIi4vc3JjL09wZW5TY2VuZU5vdGVzXCIpO1xyXG52YXIgT2dTZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc3JjL09nU2V0dGluZ3NcIik7XHJcbnZhciBtb2R1bGVzID0gW1xyXG4gICAgbmV3IEFjdGl2YXRlU2NlbmVfMS5BY3RpdmF0ZVNjZW5lKCksXHJcbiAgICBuZXcgT3BlblNjZW5lTm90ZXNfMS5PcGVuU2NlbmVOb3RlcygpLFxyXG4gICAgbmV3IHNlcnZlcl9wdXNoXzEuU2VydmVyUHVzaCgpLFxyXG4gICAgT2dTZXR0aW5nc18xLmdsb2JhbFNldHRpbmdzLFxyXG4gICAgLy9uZXcgVmVoaWNsZU1vdmVtZW50KClcclxuXTtcclxuSG9va3Mub25jZSgnaW5pdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5kZXgsIG1vZHVsZV8xO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ2luaXRpYXRpbmcnKTtcclxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbW9kdWxlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZV8xID0gbW9kdWxlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kdWxlXzEuaW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZV8xLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnaW5pdGlhdGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuSG9va3Mub25jZSgncmVhZHknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4LCBtb2R1bGVfMjtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdyZWFkeWluZycpO1xyXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBtb2R1bGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlXzIgPSBtb2R1bGVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChtb2R1bGVfMi5yZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZV8yLnJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ3JlYWR5Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbiAgICAgICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdhcHBseScpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgdGVtcGxhdGUgaW4gX3RlbXBsYXRlQ2FjaGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX3RlbXBsYXRlQ2FjaGUsIHRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGVtcGxhdGVDYWNoZVt0ZW1wbGF0ZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuYWN0aXZhdGVTY2VuZSA9IGV4cG9ydHMuQWN0aXZhdGVTY2VuZSA9IHZvaWQgMDtcclxudmFyIG9wZW5Kb3VybmFsRW50cnlfMSA9IHJlcXVpcmUoXCIuL29wZW5Kb3VybmFsRW50cnlcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbnZhciBBY3RpdmF0ZVNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWN0aXZhdGVTY2VuZSgpIHtcclxuICAgIH1cclxuICAgIEFjdGl2YXRlU2NlbmUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnQWN0aXZhdGVTY2VuZSBpbml0aWF0aW5nJyk7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEuYWRkR2FtZUV4dGVuc2lvbnMpKCdmbG93Jywge1xyXG4gICAgICAgICAgICBhY3RpdmF0ZVNjZW5lOiBhY3RpdmF0ZVNjZW5lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIENPTkZJRy5UZXh0RWRpdG9yLmVucmljaGVycy5wdXNoKHtcclxuICAgICAgICAgICAgcGF0dGVybjogL0BBY3RpdmF0ZVNjZW5lXFxbKFteXFxdXSspXFxdKD86eyhbXn1dKyl9KT8vZ20sXHJcbiAgICAgICAgICAgIGVucmljaGVyOiBmdW5jdGlvbiAobWF0Y2gsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgIHZhciBfYiA9IG1hdGNoLnNsaWNlKDEsIDMpLCB0YXJnZXQgPSBfYlswXSwgbmFtZSA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjZW5lID0gZ2FtZS5zY2VuZXMuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnJva2VuID0gc2NlbmUgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYXMgZmEtY29kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogWydjb250ZW50LWxpbmsnXSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ6IFwiQWN0aXZhdGVTY2VuZS5cIi5jb25jYXQodGFyZ2V0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FjdGl2YXRlU2NlbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAnU2NlbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW46IGJyb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChicm9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmljb24gPSAnZmFzIGZhLXVubGluayc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jbGFzc2VzLnB1c2goJ2Jyb2tlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubmFtZSA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICAgICAgKF9hID0gYS5jbGFzc0xpc3QpLmFkZC5hcHBseShfYSwgZGF0YS5jbGFzc2VzKTtcclxuICAgICAgICAgICAgICAgIGEuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2MgPSBPYmplY3QuZW50cmllcyhkYXRhLmRhdGFzZXQpOyBfaSA8IF9jLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfZCA9IF9jW19pXSwgayA9IF9kWzBdLCB2ID0gX2RbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgYS5kYXRhc2V0W2tdID0gdjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz1cXFwiXCIuY29uY2F0KGRhdGEuaWNvbiwgXCJcXFwiPjwvaT48aSBjbGFzcz1cXFwiZmFzIGZhLW1hcFxcXCI+PC9pPiBcIikuY29uY2F0KGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQ7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0YXJnZXQgJiYgdGFyZ2V0LmRhdGFzZXQgJiYgdGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gJ0FjdGl2YXRlU2NlbmUnICYmIHRhcmdldC5kYXRhc2V0LmJyb2tlbiA9PT0gJ2ZhbHNlJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGFjdGl2YXRlU2NlbmUodGFyZ2V0LmRhdGFzZXQuaWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ0FjdGl2YXRlU2NlbmUgaW5pdGlhdGVkJyk7XHJcbiAgICB9O1xyXG4gICAgQWN0aXZhdGVTY2VuZS5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICByZXR1cm4gQWN0aXZhdGVTY2VuZTtcclxufSgpKTtcclxuZXhwb3J0cy5BY3RpdmF0ZVNjZW5lID0gQWN0aXZhdGVTY2VuZTtcclxuZnVuY3Rpb24gYWN0aXZhdGVTY2VuZSh0YXJnZXRTY2VuZUlkKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTY2VuZUpvdXJuYWwsIHRhcmdldFNjZW5lO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKFwiQWN0aXZhdGVTY2VuZSBhY3RpdmF0aW5nOiBcIi5jb25jYXQodGFyZ2V0U2NlbmVJZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTY2VuZUpvdXJuYWwgPSBnYW1lLnNjZW5lcy5hY3RpdmUuam91cm5hbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjZW5lSm91cm5hbCAmJiBjdXJyZW50U2NlbmVKb3VybmFsLnNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTY2VuZUpvdXJuYWwuc2hlZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2NlbmUgPSBnYW1lLnNjZW5lcy5nZXQodGFyZ2V0U2NlbmVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRTY2VuZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGFyZ2V0U2NlbmUuYWN0aXZhdGUoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICgwLCBvcGVuSm91cm5hbEVudHJ5XzEub3BlbkpvdXJuYWxFbnRyeSkodGFyZ2V0U2NlbmUuam91cm5hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYWN0aXZhdGVTY2VuZSA9IGFjdGl2YXRlU2NlbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nbG9iYWxTZXR0aW5ncyA9IGV4cG9ydHMuR2xvYmFsU2V0dGluZ3MgPSBleHBvcnRzLk9nU2V0dGluZyA9IGV4cG9ydHMubmFtZXNwYWNlID0gdm9pZCAwO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5leHBvcnRzLm5hbWVzcGFjZSA9ICdvZy1leHBlcmltZW50cyc7XHJcbnZhciBPZ1NldHRpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPZ1NldHRpbmcoa2V5LCBkZWZhdWx0VmFsdWUsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgT2dTZXR0aW5nLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ09nU2V0dGluZyBpbml0aWFsaXppbmcnLCB0aGlzLmtleSwgdGhpcy5kZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIGdhbWUuc2V0dGluZ3MucmVnaXN0ZXIoZXhwb3J0cy5uYW1lc3BhY2UsIHRoaXMua2V5LCBfX2Fzc2lnbih7XHJcbiAgICAgICAgICAgIHNjb3BlOiAnY2xpZW50JyxcclxuICAgICAgICAgICAgY29uZmlnOiB0cnVlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB0aGlzLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKF90aGlzLl92YWx1ZSA9IHZhbHVlKTsgfSxcclxuICAgICAgICB9LCB0aGlzLnNldHRpbmdzKSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGdhbWUuc2V0dGluZ3MuZ2V0KGV4cG9ydHMubmFtZXNwYWNlLCB0aGlzLmtleSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9nU2V0dGluZy5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBnYW1lLnNldHRpbmdzLnNldChleHBvcnRzLm5hbWVzcGFjZSwgdGhpcy5rZXksIHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gT2dTZXR0aW5nO1xyXG59KCkpO1xyXG5leHBvcnRzLk9nU2V0dGluZyA9IE9nU2V0dGluZztcclxudmFyIEdsb2JhbFNldHRpbmdzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2xvYmFsU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NEZW5pZWRTaWxlbnRseUZhaWxzID0gbmV3IE9nU2V0dGluZygnYWNjZXNzRGVuaWVkU2lsZW50bHlGYWlscycsIHRydWUsIHtcclxuICAgICAgICAgICAgbmFtZTogJ0ZhaWwgc2lsZW50bHk/JyxcclxuICAgICAgICAgICAgaGludDogXCJJZiBlbmFibGVkLCB3YXJuaW5ncyB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgVUkgd2hlbiB0aGUgdXNlciBjYW5ub3Qgb3BlbiBzY2VuZSBub3RlcyBvciBvdGhlciBlbGVtZW50cy5cXG4gICAgICAgIFRoaXMgaXMgbWFpbmx5IHVzZWQgYnkgdGhlIGV4dGVuc2lvbnMuIFxcbiAgICAgICAgVGhlIHdhcm5pbmdzIHdpbGwgc3RpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBjb25zb2xlLiBcXG4gICAgICAgIElmIHlvdSBoYXZlIG5vIGNsdWUgd2hhdCB0aGlzIGlzLCBjaGFuY2VzIGFyZSB5b3Ugc2hvdWxkIG5vdCB3b3JyeSBhYm91dCBpdC5cIixcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEdsb2JhbFNldHRpbmdzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRGVuaWVkU2lsZW50bHlGYWlscy5pbml0KCk7XHJcbiAgICB9O1xyXG4gICAgR2xvYmFsU2V0dGluZ3MucHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgcmV0dXJuIEdsb2JhbFNldHRpbmdzO1xyXG59KCkpO1xyXG5leHBvcnRzLkdsb2JhbFNldHRpbmdzID0gR2xvYmFsU2V0dGluZ3M7XHJcbmV4cG9ydHMuZ2xvYmFsU2V0dGluZ3MgPSBuZXcgR2xvYmFsU2V0dGluZ3MoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5vcGVuU2NlbmVOb3RlcyA9IGV4cG9ydHMuT3BlblNjZW5lTm90ZXMgPSB2b2lkIDA7XHJcbnZhciBPZ1NldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9PZ1NldHRpbmdzXCIpO1xyXG52YXIgb3BlbkpvdXJuYWxFbnRyeV8xID0gcmVxdWlyZShcIi4vb3BlbkpvdXJuYWxFbnRyeVwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxudmFyIE9wZW5TY2VuZU5vdGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT3BlblNjZW5lTm90ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuU2NlbmVOb3Rlc09uUmVhZHkgPSBuZXcgT2dTZXR0aW5nc18xLk9nU2V0dGluZygnb3BlblNjZW5lTm90ZXNPblJlYWR5JywgdHJ1ZSwge1xyXG4gICAgICAgICAgICBuYW1lOiAnQXV0by1vcGVuIHNjZW5lIG5vdGVzPycsXHJcbiAgICAgICAgICAgIGhpbnQ6ICdJZiBlbmFibGVkLCB0aGUgc2NlbmUgbm90ZXMgb2YgdGhlIGN1cnJlbnQgc2NlbmUgd2lsbCBvcGVuIHdoZW4gdGhlIHNlcnZlciBmaXJzdCBsb2FkLicsXHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPcGVuU2NlbmVOb3Rlcy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnT3BlblNjZW5lTm90ZXMgaW5pdGlhdGluZycpO1xyXG4gICAgICAgIHRoaXMub3BlblNjZW5lTm90ZXNPblJlYWR5LmluaXQoKTtcclxuICAgICAgICAoMCwgdXRpbHNfMS5hZGRHYW1lRXh0ZW5zaW9ucykoJ2Zsb3cnLCB7XHJcbiAgICAgICAgICAgIG9wZW5TY2VuZU5vdGVzOiBvcGVuU2NlbmVOb3RlcyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnT3BlblNjZW5lTm90ZXMgaW5pdGlhdGVkJyk7XHJcbiAgICB9O1xyXG4gICAgT3BlblNjZW5lTm90ZXMucHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdPcGVuU2NlbmVOb3RlcyBpcyBnZXR0aW5nIHJlYWR5Jyk7XHJcbiAgICAgICAgaWYgKHRoaXMub3BlblNjZW5lTm90ZXNPblJlYWR5LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIG9wZW5TY2VuZU5vdGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdPcGVuU2NlbmVOb3RlcyBpcyByZWFkeScpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPcGVuU2NlbmVOb3RlcztcclxufSgpKTtcclxuZXhwb3J0cy5PcGVuU2NlbmVOb3RlcyA9IE9wZW5TY2VuZU5vdGVzO1xyXG5mdW5jdGlvbiBvcGVuU2NlbmVOb3RlcygpIHtcclxuICAgIHZhciBjdXJyZW50U2NlbmVKb3VybmFsID0gZ2FtZS5zY2VuZXMuYWN0aXZlLmpvdXJuYWw7XHJcbiAgICAoMCwgb3BlbkpvdXJuYWxFbnRyeV8xLm9wZW5Kb3VybmFsRW50cnkpKGN1cnJlbnRTY2VuZUpvdXJuYWwpO1xyXG59XHJcbmV4cG9ydHMub3BlblNjZW5lTm90ZXMgPSBvcGVuU2NlbmVOb3RlcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5vcGVuSm91cm5hbEVudHJ5ID0gdm9pZCAwO1xyXG52YXIgT2dTZXR0aW5nc18xID0gcmVxdWlyZShcIi4vT2dTZXR0aW5nc1wiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gb3BlbkpvdXJuYWxFbnRyeShqb3VybmFsKSB7XHJcbiAgICBpZiAoam91cm5hbCAmJiBqb3VybmFsLnNoZWV0KSB7XHJcbiAgICAgICAgaWYgKCFqb3VybmFsLnRlc3RVc2VyUGVybWlzc2lvbihnYW1lLnVzZXIsICdMSU1JVEVEJykpIHtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIllvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIHZpZXcgdGhpcyBcIi5jb25jYXQoam91cm5hbC5kb2N1bWVudE5hbWUsIFwiIGpvdXJuYWwgZW50cnkuXCIpO1xyXG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dXYXJuKShtZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKE9nU2V0dGluZ3NfMS5nbG9iYWxTZXR0aW5ncy5hY2Nlc3NEZW5pZWRTaWxlbnRseUZhaWxzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVpLm5vdGlmaWNhdGlvbnMud2FybihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgam91cm5hbC5zaGVldC5yZW5kZXIodHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5vcGVuSm91cm5hbEVudHJ5ID0gb3BlbkpvdXJuYWxFbnRyeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU2VydmVyUHVzaCA9IHZvaWQgMDtcclxuLy8gY29uc3Qgc2lnbmFsUiA9IHJlcXVpcmUoJ0BtaWNyb3NvZnQvc2lnbmFscicpO1xyXG52YXIgc2lnbmFscl8xID0gcmVxdWlyZShcIkBtaWNyb3NvZnQvc2lnbmFsclwiKTtcclxudmFyIGtleWNsb2FrX2pzXzEgPSByZXF1aXJlKFwia2V5Y2xvYWstanNcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbi8vIGZ1bmN0aW9uIGxvZ1RleHQodGV4dDogc3RyaW5nKSB7XHJcbi8vICAgICBjb25zb2xlLmRlYnVnKCdvZy1leHBlcmltZW50cyB8ICcgKyB0ZXh0KTtcclxuLy8gfVxyXG4vLyB2YXIgbm90ZUJ5SW5kZXggPSBnYW1lLmpvdXJuYWwuX3NvdXJjZVsxNl1cclxuLy8gdmFyIGpvdXJuYWxFbnRyeUlkID0gJ3pFdHRZbDJMbGlEZzFXN08nOyAvLyBcIlUzQm1EYjIzR1V4bk1QOU1cIlxyXG4vKlxyXG5jb25zdCBqb3VybmFsRW50cnlJZCA9ICd6RXR0WWwyTGxpRGcxVzdPJztcclxuYXdhaXQgZ2FtZS5leHBlcmltZW50cy5zaG93Sm91cm5hbEVudHJ5QnlJZChqb3VybmFsRW50cnlJZCk7XHJcbiovXHJcbi8vIHZhciBub3RlQnlJZCA9IGdhbWUuam91cm5hbC5maW5kKChlbnRyeSkgPT4gZW50cnkuZGF0YS5faWQgPT09IGpvdXJuYWxFbnRyeUlkKTtcclxuLy8gbm90ZUJ5SWQuc2hvdygpO1xyXG4vL1xyXG4vL25ldyBKb3VybmFsRW50cnkobm90ZSkuc2hvdygpXHJcbnZhciBBdXRoU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9rZXljbG9hayA9IG5ldyBrZXljbG9ha19qc18xLmRlZmF1bHQoe1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvJyxcclxuICAgICAgICAgICAgcmVhbG06ICdPZ0F1dGgnLFxyXG4gICAgICAgICAgICBjbGllbnRJZDogJ29nLXNlcnZlcicsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aFNlcnZpY2UucHJvdG90eXBlLCBcInRva2VuXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IHY7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhTZXJ2aWNlLnByb3RvdHlwZSwgXCJhdXRoZW50aWNhdGVkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhlbnRpY2F0ZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0ZWQgPSB2O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRoU2VydmljZS5wcm90b3R5cGUsIFwidXNlclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXljbG9haztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9rZXljbG9ha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbml0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQ6ICdsb2dpbi1yZXF1aXJlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaTogJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTG9nZ2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KShhdXRoZW50aWNhdGVkID8gJ2F1dGhlbnRpY2F0ZWQnIDogJ25vdCBhdXRoZW50aWNhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuYXV0aGVudGljYXRlZCA9IGF1dGhlbnRpY2F0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUudG9rZW4gPSBtZS5fa2V5Y2xvYWsudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdmYWlsZWQgdG8gaW5pdGlhbGl6ZScsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBdXRoU2VydmljZTtcclxufSgpKTtcclxudmFyIFNlcnZlclB1c2ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZXJ2ZXJQdXNoKCkge1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyBBdXRoU2VydmljZSgpO1xyXG4gICAgfVxyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiwgdXNlcjtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ1NlcnZlclB1c2ggZ2V0dGluZyByZWFkeScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmF1dGguaW5pdCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF1dGguYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhdXRoZW50aWNhdGVkISBDYW4ndCBwcm9jZWVkIHdpdGggU2VydmVyUHVzaC5yZWFkeS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IG5ldyBzaWduYWxyXzEuSHViQ29ubmVjdGlvbkJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhVcmwoJ2h0dHBzOi8vbG9jYWxob3N0OjcyNjMvaHVicy9kZWZhdWx0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW5GYWN0b3J5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hdXRoLnRva2VuOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSB0aGlzLmF1dGgudXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEuYWRkR2FtZUV4dGVuc2lvbnMpKCdzZXJ2ZXJQdXNoJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbjogY29ubmVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25uZWN0aW9uLmludm9rZSgnUGluZycpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEuYWRkR2FtZUV4dGVuc2lvbnMpKCdmbG93Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5kU2hvd1RlbXBvcmFyeUpvdXJuYWxFbnRyeTogdGhpcy5jcmVhdGVBbmRTaG93VGVtcG9yYXJ5Sm91cm5hbEVudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5vbigncG9uZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdwb25nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25uZWN0aW9uLm9uKCdjcmVhdGVTaG93QW5kRGVsZXRlTmV3Sm91cm5hbEVudHJ5JywgdGhpcy5jcmVhdGVTaG93QW5kRGVsZXRlTmV3Sm91cm5hbEVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29ubmVjdGlvbi5vbignY3JlYXRlQW5kU2hvd1RlbXBvcmFyeUpvdXJuYWxFbnRyeScsIHRoaXMuY3JlYXRlQW5kU2hvd1RlbXBvcmFyeUpvdXJuYWxFbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ub24oJ2V4ZWN1dGUnLCB0aGlzLmV4ZWN1dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLm9uKCdleGVjdXRlQXN5bmMnLCB0aGlzLmV4ZWN1dGVBc3luYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ1NlcnZlclB1c2ggaXMgcmVhZHknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTZXJ2ZXJQdXNoLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nVGV4dCkoJ1NlcnZlclB1c2ggaW5pdGlhdGluZycpO1xyXG4gICAgICAgICAgICAgICAgLy8gSmF2YXNjcmlwdFxyXG4gICAgICAgICAgICAgICAgLy8gZ2FtZS5leHBlcmltZW50cy5zaG93Sm91cm5hbEVudHJ5QnlJZCA9IGFzeW5jIGZ1bmN0aW9uIChqb3VybmFsRW50cnlJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHZhciBub3RlQnlJZCA9IGdhbWUuam91cm5hbC5maW5kKChlbnRyeSkgPT4gZW50cnkuZGF0YS5faWQgPT09IGpvdXJuYWxFbnRyeUlkKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBhd2FpdCBub3RlQnlJZC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZ2FtZS5TdG9yeVRlbGxlci5zaG93U3RvcnlCeUlEVG9BbGwoam91cm5hbEVudHJ5SWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgIC8vIC8vdmFyIGpvdXJuYWxFbnRyeUlkPVwiYTdMQkt3RUxxRHd3Y0N6elwiXHJcbiAgICAgICAgICAgICAgICAvLyBnYW1lLmV4cGVyaW1lbnRzLnNob3dOZXdKb3VybmFsRW50cnkgPSBhc3luYyBmdW5jdGlvbiAobmFtZSwgY29udGVudCwgZGVsZXRlRGVsYXksIGlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgZW50cnkgPSBhd2FpdCBKb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsb2dUZXh0KGBKb3VybmFsIGVudHJ5ICcke25hbWV9JyBjcmVhdGVkIHdpdGggaXNQZXJtYW5lbnQgPSAke2lzUGVybWFuZW50fS5gKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBhd2FpdCBlbnRyeS5zaG93KCd0ZXh0JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgZGVsZXRlRW50cnlJbk1TID0gZGVsZXRlRGVsYXkgfHwgNjAwMDA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nVGV4dChgU2NoZWR1bGluZyBqb3VybmFsIGVudHJ5IGRlbGV0aW9uIGluICR7ZGVsZXRlRW50cnlJbk1TfSBtcy5gKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbG9nVGV4dCgnRGVsZXRpbmcgam91cm5hbCBlbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXdhaXQgZW50cnkuZGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxvZ1RleHQoJ0pvdXJuYWwgZW50cnkgZGVsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sIGRlbGV0ZUVudHJ5SW5NUyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gVjEwIG11bHRpLXBhZ2Ugc3ludGF4XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gSm91cm5hbEVudHJ5LmNyZWF0ZSh7bmFtZTogXCJKb3VybmFsIG5hbWVcIiwgcGFnZXM6W3t0eXBlOiBcInRleHRcIiwgbmFtZTogXCJRdWVzdCBob29rXCIsIHRleHQ6e2NvbnRlbnQ6IGBIVE1MIGNvbnRlbnQgaGVyZWB9fV19KVxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmxvZ1RleHQpKCdTZXJ2ZXJQdXNoIGluaXRpYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTZXJ2ZXJQdXNoLnByb3RvdHlwZS5jcmVhdGVBbmRTaG93VGVtcG9yYXJ5Sm91cm5hbEVudHJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZW50cnk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIEpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBvcHRpb25zLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJzaGlwOiB7IGRlZmF1bHQ6IENPTlNULkRPQ1VNRU5UX09XTkVSU0hJUF9MRVZFTFMuT0JTRVJWRVIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyc2hpcDogeyBkZWZhdWx0OiBDT05TVC5ET0NVTUVOVF9PV05FUlNISVBfTEVWRUxTLk9CU0VSVkVSIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsgdGVtcG9yYXJ5OiB0cnVlLCByZW5kZXJTaGVldDogdHJ1ZSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubG9nRXJyb3IpKCdObyBlbnRyeSB3YXMgY3JlYXRlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KShcIkpvdXJuYWwgZW50cnkgJ1wiLmNvbmNhdChvcHRpb25zLm5hbWUsIFwiJyBjcmVhdGVkLlwiKSwgZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCAoKF9hID0gZW50cnkuc2hlZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW5kZXIodHJ1ZSkpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyBhc3luYyBjcmVhdGVTaG93QW5kRGVsZXRlTmV3Sm91cm5hbEVudHJ5KG9wdGlvbnM6IElDcmVhdGVTaG93QW5kRGVsZXRlTmV3Sm91cm5hbEVudHJ5KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAvLyAgICAgY29uc3QgZW50cnkgPSBhd2FpdCBKb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgIC8vICAgICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxyXG4gICAgLy8gICAgICAgICBjb250ZW50OiBvcHRpb25zLmNvbnRlbnQsXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgaWYgKGVudHJ5ID09PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignTm8gZW50cnkgd2FzIGNyZWF0ZWQuJyk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbG9nVGV4dChgSm91cm5hbCBlbnRyeSAnJHtvcHRpb25zLm5hbWV9JyBjcmVhdGVkIHdpdGggaXNQZXJtYW5lbnQgPSAke29wdGlvbnMuaXNQZXJtYW5lbnR9LmApO1xyXG4gICAgLy8gICAgIGF3YWl0IGVudHJ5LnNob3coJ3RleHQnLCB0cnVlKTtcclxuICAgIC8vICAgICBpZiAob3B0aW9ucy5pc1Blcm1hbmVudCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnN0IGRlbGV0ZUVudHJ5SW5NUyA9IG9wdGlvbnMuZGVsZXRlRGVsYXkgfHwgNjAwMDA7XHJcbiAgICAvLyAgICAgbG9nVGV4dChgU2NoZWR1bGluZyBqb3VybmFsIGVudHJ5IGRlbGV0aW9uIGluICR7ZGVsZXRlRW50cnlJbk1TfSBtcy5gKTtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5kZWJ1ZygnRGVsZXRpbmcgam91cm5hbCBlbnRyeScsIGVudHJ5KTtcclxuICAgIC8vICAgICAgICAgYXdhaXQgZW50cnkuZGVsZXRlKCk7XHJcbiAgICAvLyAgICAgICAgIGxvZ1RleHQoJ0pvdXJuYWwgZW50cnkgZGVsZXRlZCcpO1xyXG4gICAgLy8gICAgIH0sIGRlbGV0ZUVudHJ5SW5NUyk7XHJcbiAgICAvLyAgICAgLy8gVjEwIG11bHRpLXBhZ2Ugc3ludGF4XHJcbiAgICAvLyAgICAgLy8gSm91cm5hbEVudHJ5LmNyZWF0ZSh7bmFtZTogXCJKb3VybmFsIG5hbWVcIiwgcGFnZXM6W3t0eXBlOiBcInRleHRcIiwgbmFtZTogXCJRdWVzdCBob29rXCIsIHRleHQ6e2NvbnRlbnQ6IGBIVE1MIGNvbnRlbnQgaGVyZWB9fV19KVxyXG4gICAgLy8gfVxyXG4gICAgU2VydmVyUHVzaC5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnU2VydmVyUHVzaC5leGVjdXRlJywgb3B0aW9ucywgdXNlcik7XHJcbiAgICAgICAgICAgICAgICBldmFsKG9wdGlvbnMuY29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNlcnZlclB1c2gucHJvdG90eXBlLmV4ZWN1dGVBc3luYyA9IGZ1bmN0aW9uIChvcHRpb25zLCB1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5sb2dUZXh0KSgnU2VydmVyUHVzaC5leGVjdXRlQXN5bmMnLCBvcHRpb25zLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyByZXR1cm4gZXZhbChvcHRpb25zLmNvbW1hbmQpOyB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlcnZlclB1c2g7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2VydmVyUHVzaCA9IFNlcnZlclB1c2g7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5hZGRHYW1lRXh0ZW5zaW9ucyA9IGV4cG9ydHMubG9nRXJyb3IgPSBleHBvcnRzLmxvZ1dhcm4gPSBleHBvcnRzLmxvZ1RleHQgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIGxvZ1RleHQoKSB7XHJcbiAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBkYXRhW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmRlYnVnLmFwcGx5KGNvbnNvbGUsIF9fc3ByZWFkQXJyYXkoWydvZy1leHBlcmltZW50cyB8J10sIGRhdGEsIGZhbHNlKSk7XHJcbn1cclxuZXhwb3J0cy5sb2dUZXh0ID0gbG9nVGV4dDtcclxuZnVuY3Rpb24gbG9nV2FybigpIHtcclxuICAgIHZhciBkYXRhID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGRhdGFbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5KFsnb2ctZXhwZXJpbWVudHMgfCddLCBkYXRhLCBmYWxzZSkpO1xyXG59XHJcbmV4cG9ydHMubG9nV2FybiA9IGxvZ1dhcm47XHJcbmZ1bmN0aW9uIGxvZ0Vycm9yKCkge1xyXG4gICAgdmFyIGRhdGEgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgZGF0YVtfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5KFsnb2ctZXhwZXJpbWVudHMgfCddLCBkYXRhLCBmYWxzZSkpO1xyXG59XHJcbmV4cG9ydHMubG9nRXJyb3IgPSBsb2dFcnJvcjtcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZU9nRXh0ZW5zaW9ucygpIHtcclxuICAgIGdhbWVbJ29nJ10gPSB7fTtcclxufVxyXG5mdW5jdGlvbiBlbmZvcmNlT2dFeHRlbnNpb25zSW5pdGlhbGl6ZWQoKSB7XHJcbiAgICBpZiAoZ2FtZVsnb2cnXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaW5pdGlhbGl6ZU9nRXh0ZW5zaW9ucygpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEdhbWVFeHRlbnNpb25zKGtleSwgc2V0dGluZykge1xyXG4gICAgZW5mb3JjZU9nRXh0ZW5zaW9uc0luaXRpYWxpemVkKCk7XHJcbiAgICBnYW1lWydvZyddW2tleV0gPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZ2FtZVsnb2cnXVtrZXldKSwgc2V0dGluZyk7XHJcbn1cclxuZXhwb3J0cy5hZGRHYW1lRXh0ZW5zaW9ucyA9IGFkZEdhbWVFeHRlbnNpb25zO1xyXG4iLCJpbXBvcnQgYmFzZTY0IGZyb20gJ2Jhc2U2NC1qcyc7XG5pbXBvcnQgc2hhMjU2IGZyb20gJ2pzLXNoYTI1Nic7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlc1xuICogYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyBhcyBpbmRpY2F0ZWQgYnkgdGhlIEBhdXRob3IgdGFncy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgRXJyb3IoJ0tleWNsb2FrIHJlcXVpcmVzIGFuIGVudmlyb25tZW50IHRoYXQgc3VwcG9ydHMgUHJvbWlzZXMuIE1ha2Ugc3VyZSB0aGF0IHlvdSBpbmNsdWRlIHRoZSBhcHByb3ByaWF0ZSBwb2x5ZmlsbC4nKTtcbn1cblxudmFyIGxvZ2dlZFByb21pc2VEZXByZWNhdGlvbiA9IGZhbHNlO1xuXG5mdW5jdGlvbiBsb2dQcm9taXNlRGVwcmVjYXRpb24oKSB7XG4gICAgaWYgKCFsb2dnZWRQcm9taXNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgbG9nZ2VkUHJvbWlzZURlcHJlY2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS53YXJuKCdbS0VZQ0xPQUtdIFVzYWdlIG9mIGxlZ2FjeSBzdHlsZSBwcm9taXNlIG1ldGhvZHMgc3VjaCBhcyBgLmVycm9yKClgIGFuZCBgLnN1Y2Nlc3MoKWAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc3VwcG9ydCB3aWxsIGJlIHJlbW92ZWQgaW4gZnV0dXJlIHZlcnNpb25zLiBVc2Ugc3RhbmRhcmQgc3R5bGUgcHJvbWlzZSBtZXRob2RzIHN1Y2ggYXMgYC50aGVuKCkgYW5kIGAuY2F0Y2goKWAgaW5zdGVhZC4nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEtleWNsb2FrIChjb25maWcpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgS2V5Y2xvYWspKSB7XG4gICAgICAgIHJldHVybiBuZXcgS2V5Y2xvYWsoY29uZmlnKTtcbiAgICB9XG5cbiAgICB2YXIga2MgPSB0aGlzO1xuICAgIHZhciBhZGFwdGVyO1xuICAgIHZhciByZWZyZXNoUXVldWUgPSBbXTtcbiAgICB2YXIgY2FsbGJhY2tTdG9yYWdlO1xuXG4gICAgdmFyIGxvZ2luSWZyYW1lID0ge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIGNhbGxiYWNrTGlzdDogW10sXG4gICAgICAgIGludGVydmFsOiA1XG4gICAgfTtcblxuICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoKHNjcmlwdHNbaV0uc3JjLmluZGV4T2YoJ2tleWNsb2FrLmpzJykgIT09IC0xIHx8IHNjcmlwdHNbaV0uc3JjLmluZGV4T2YoJ2tleWNsb2FrLm1pbi5qcycpICE9PSAtMSkgJiYgc2NyaXB0c1tpXS5zcmMuaW5kZXhPZigndmVyc2lvbj0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGtjLmlmcmFtZVZlcnNpb24gPSBzY3JpcHRzW2ldLnNyYy5zdWJzdHJpbmcoc2NyaXB0c1tpXS5zcmMuaW5kZXhPZigndmVyc2lvbj0nKSArIDgpLnNwbGl0KCcmJylbMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdXNlTm9uY2UgPSB0cnVlO1xuICAgIHZhciBsb2dJbmZvID0gY3JlYXRlTG9nZ2VyKGNvbnNvbGUuaW5mbyk7XG4gICAgdmFyIGxvZ1dhcm4gPSBjcmVhdGVMb2dnZXIoY29uc29sZS53YXJuKTtcblxuICAgIGtjLmluaXQgPSBmdW5jdGlvbiAoaW5pdE9wdGlvbnMpIHtcbiAgICAgICAga2MuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGNhbGxiYWNrU3RvcmFnZSA9IGNyZWF0ZUNhbGxiYWNrU3RvcmFnZSgpO1xuICAgICAgICB2YXIgYWRhcHRlcnMgPSBbJ2RlZmF1bHQnLCAnY29yZG92YScsICdjb3Jkb3ZhLW5hdGl2ZSddO1xuXG4gICAgICAgIGlmIChpbml0T3B0aW9ucyAmJiBhZGFwdGVycy5pbmRleE9mKGluaXRPcHRpb25zLmFkYXB0ZXIpID4gLTEpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIgPSBsb2FkQWRhcHRlcihpbml0T3B0aW9ucy5hZGFwdGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbml0T3B0aW9ucyAmJiB0eXBlb2YgaW5pdE9wdGlvbnMuYWRhcHRlciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgYWRhcHRlciA9IGluaXRPcHRpb25zLmFkYXB0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAod2luZG93LkNvcmRvdmEgfHwgd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgICAgICAgICBhZGFwdGVyID0gbG9hZEFkYXB0ZXIoJ2NvcmRvdmEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IGxvYWRBZGFwdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5pdE9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5pdE9wdGlvbnMudXNlTm9uY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdXNlTm9uY2UgPSBpbml0T3B0aW9ucy51c2VOb25jZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0T3B0aW9ucy5jaGVja0xvZ2luSWZyYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGxvZ2luSWZyYW1lLmVuYWJsZSA9IGluaXRPcHRpb25zLmNoZWNrTG9naW5JZnJhbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5jaGVja0xvZ2luSWZyYW1lSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBsb2dpbklmcmFtZS5pbnRlcnZhbCA9IGluaXRPcHRpb25zLmNoZWNrTG9naW5JZnJhbWVJbnRlcnZhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLm9uTG9hZCA9PT0gJ2xvZ2luLXJlcXVpcmVkJykge1xuICAgICAgICAgICAgICAgIGtjLmxvZ2luUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMucmVzcG9uc2VNb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnJlc3BvbnNlTW9kZSA9PT0gJ3F1ZXJ5JyB8fCBpbml0T3B0aW9ucy5yZXNwb25zZU1vZGUgPT09ICdmcmFnbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAga2MucmVzcG9uc2VNb2RlID0gaW5pdE9wdGlvbnMucmVzcG9uc2VNb2RlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIHZhbHVlIGZvciByZXNwb25zZU1vZGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLmZsb3cpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluaXRPcHRpb25zLmZsb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RhbmRhcmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAga2MucmVzcG9uc2VUeXBlID0gJ2NvZGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ltcGxpY2l0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnJlc3BvbnNlVHlwZSA9ICdpZF90b2tlbiB0b2tlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaHlicmlkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnJlc3BvbnNlVHlwZSA9ICdjb2RlIGlkX3Rva2VuIHRva2VuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgdmFsdWUgZm9yIGZsb3cnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrYy5mbG93ID0gaW5pdE9wdGlvbnMuZmxvdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluaXRPcHRpb25zLnRpbWVTa2V3ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBrYy50aW1lU2tldyA9IGluaXRPcHRpb25zLnRpbWVTa2V3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihpbml0T3B0aW9ucy5yZWRpcmVjdFVyaSkge1xuICAgICAgICAgICAgICAgIGtjLnJlZGlyZWN0VXJpID0gaW5pdE9wdGlvbnMucmVkaXJlY3RVcmk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5zaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICAgICAga2Muc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaSA9IGluaXRPcHRpb25zLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5pdE9wdGlvbnMuc2lsZW50Q2hlY2tTc29GYWxsYmFjayA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAga2Muc2lsZW50Q2hlY2tTc29GYWxsYmFjayA9IGluaXRPcHRpb25zLnNpbGVudENoZWNrU3NvRmFsbGJhY2s7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtjLnNpbGVudENoZWNrU3NvRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMucGtjZU1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGlmIChpbml0T3B0aW9ucy5wa2NlTWV0aG9kICE9PSBcIlMyNTZcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCB2YWx1ZSBmb3IgcGtjZU1ldGhvZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGtjLnBrY2VNZXRob2QgPSBpbml0T3B0aW9ucy5wa2NlTWV0aG9kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRPcHRpb25zLmVuYWJsZUxvZ2dpbmcgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGtjLmVuYWJsZUxvZ2dpbmcgPSBpbml0T3B0aW9ucy5lbmFibGVMb2dnaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrYy5lbmFibGVMb2dnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5pdE9wdGlvbnMuc2NvcGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAga2Muc2NvcGUgPSBpbml0T3B0aW9ucy5zY29wZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0T3B0aW9ucy5tZXNzYWdlUmVjZWl2ZVRpbWVvdXQgPT09ICdudW1iZXInICYmIGluaXRPcHRpb25zLm1lc3NhZ2VSZWNlaXZlVGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICBrYy5tZXNzYWdlUmVjZWl2ZVRpbWVvdXQgPSBpbml0T3B0aW9ucy5tZXNzYWdlUmVjZWl2ZVRpbWVvdXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtjLm1lc3NhZ2VSZWNlaXZlVGltZW91dCA9IDEwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFrYy5yZXNwb25zZU1vZGUpIHtcbiAgICAgICAgICAgIGtjLnJlc3BvbnNlTW9kZSA9ICdmcmFnbWVudCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFrYy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgICAgIGtjLnJlc3BvbnNlVHlwZSA9ICdjb2RlJztcbiAgICAgICAgICAgIGtjLmZsb3cgPSAnc3RhbmRhcmQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgdmFyIGluaXRQcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuICAgICAgICBpbml0UHJvbWlzZS5wcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBrYy5vblJlYWR5ICYmIGtjLm9uUmVhZHkoa2MuYXV0aGVudGljYXRlZCk7XG4gICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3Moa2MuYXV0aGVudGljYXRlZCk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNvbmZpZ1Byb21pc2UgPSBsb2FkQ29uZmlnKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAgICAgdmFyIGRvTG9naW4gPSBmdW5jdGlvbihwcm9tcHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXByb21wdCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb21wdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrYy5sb2dpbihvcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgY2hlY2tTc29TaWxlbnRseSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBpZnJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0ga2MuY3JlYXRlTG9naW5Vcmwoe3Byb21wdDogJ25vbmUnLCByZWRpcmVjdFVyaToga2Muc2lsZW50Q2hlY2tTc29SZWRpcmVjdFVyaX0pO1xuICAgICAgICAgICAgICAgIGlmcm0uc2V0QXR0cmlidXRlKFwic3JjXCIsIHNyYyk7XG4gICAgICAgICAgICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcImtleWNsb2FrLXNpbGVudC1jaGVjay1zc29cIik7XG4gICAgICAgICAgICAgICAgaWZybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJtKTtcblxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlQ2FsbGJhY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luIHx8IGlmcm0uY29udGVudFdpbmRvdyAhPT0gZXZlbnQuc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgb2F1dGggPSBwYXJzZUNhbGxiYWNrKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ2FsbGJhY2sob2F1dGgsIGluaXRQcm9taXNlKTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcm0pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgbWVzc2FnZUNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG1lc3NhZ2VDYWxsYmFjayk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgc3dpdGNoIChpbml0T3B0aW9ucy5vbkxvYWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjaGVjay1zc28nOlxuICAgICAgICAgICAgICAgICAgICBpZiAobG9naW5JZnJhbWUuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR1cENoZWNrTG9naW5JZnJhbWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTG9naW5JZnJhbWUoKS50aGVuKGZ1bmN0aW9uICh1bmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1bmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmkgPyBjaGVja1Nzb1NpbGVudGx5KCkgOiBkb0xvZ2luKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmkgPyBjaGVja1Nzb1NpbGVudGx5KCkgOiBkb0xvZ2luKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsb2dpbi1yZXF1aXJlZCc6XG4gICAgICAgICAgICAgICAgICAgIGRvTG9naW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIHZhbHVlIGZvciBvbkxvYWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc0luaXQoKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBwYXJzZUNhbGxiYWNrKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHdpbmRvdy5oaXN0b3J5LnN0YXRlLCBudWxsLCBjYWxsYmFjay5uZXdVcmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgY2FsbGJhY2sudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0dXBDaGVja0xvZ2luSWZyYW1lKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBpbml0UHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMudG9rZW4gJiYgaW5pdE9wdGlvbnMucmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRva2VuKGluaXRPcHRpb25zLnRva2VuLCBpbml0T3B0aW9ucy5yZWZyZXNoVG9rZW4sIGluaXRPcHRpb25zLmlkVG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dpbklmcmFtZS5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwQ2hlY2tMb2dpbklmcmFtZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tMb2dpbklmcmFtZSgpLnRoZW4oZnVuY3Rpb24gKHVuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhTdWNjZXNzICYmIGtjLm9uQXV0aFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlQ2hlY2tJZnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnVwZGF0ZVRva2VuKC0xKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjLm9uQXV0aFN1Y2Nlc3MgJiYga2Mub25BdXRoU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2Mub25BdXRoRXJyb3IgJiYga2Mub25BdXRoRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdE9wdGlvbnMub25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdE9wdGlvbnMub25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRvbVJlYWR5KCkge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgICAgIHZhciBjaGVja1JlYWR5U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgY2hlY2tSZWFkeVN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBjaGVja1JlYWR5U3RhdGUpO1xuXG4gICAgICAgICAgICBjaGVja1JlYWR5U3RhdGUoKTsgLy8ganVzdCBpbiBjYXNlIHRoZSBldmVudCB3YXMgYWxyZWFkeSBmaXJlZCBhbmQgd2UgbWlzc2VkIGl0IChpbiBjYXNlIHRoZSBpbml0IGlzIGRvbmUgbGF0ZXIgdGhhbiBhdCB0aGUgbG9hZCB0aW1lLCBpLmUuIGl0J3MgZG9uZSBmcm9tIGNvZGUpXG5cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9tUmVhZHkoKVxuICAgICAgICAgICAgICAgIC50aGVuKGNoZWNrM3BDb29raWVzU3VwcG9ydGVkKVxuICAgICAgICAgICAgICAgIC50aGVuKHByb2Nlc3NJbml0KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWdQcm9taXNlLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfTtcblxuICAgIGtjLmxvZ2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXIubG9naW4ob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tRGF0YShsZW4pIHtcbiAgICAgICAgLy8gdXNlIHdlYiBjcnlwdG8gQVBJcyBpZiBwb3NzaWJsZVxuICAgICAgICB2YXIgYXJyYXkgPSBudWxsO1xuICAgICAgICB2YXIgY3J5cHRvID0gd2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG87XG4gICAgICAgIGlmIChjcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiB3aW5kb3cuVWludDhBcnJheSkge1xuICAgICAgICAgICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgICAgICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnJheSk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmYWxsYmFjayB0byBNYXRoIHJhbmRvbVxuICAgICAgICBhcnJheSA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBhcnJheVtqXSA9IE1hdGguZmxvb3IoMjU2ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29kZVZlcmlmaWVyKGxlbikge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGVSYW5kb21TdHJpbmcobGVuLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVN0cmluZyhsZW4sIGFscGhhYmV0KXtcbiAgICAgICAgdmFyIHJhbmRvbURhdGEgPSBnZW5lcmF0ZVJhbmRvbURhdGEobGVuKTtcbiAgICAgICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoYXJzW2ldID0gYWxwaGFiZXQuY2hhckNvZGVBdChyYW5kb21EYXRhW2ldICUgYWxwaGFiZXQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBjaGFycyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVQa2NlQ2hhbGxlbmdlKHBrY2VNZXRob2QsIGNvZGVWZXJpZmllcikge1xuICAgICAgICBzd2l0Y2ggKHBrY2VNZXRob2QpIHtcbiAgICAgICAgICAgIC8vIFRoZSB1c2Ugb2YgdGhlIFwicGxhaW5cIiBtZXRob2QgaXMgY29uc2lkZXJlZCBpbnNlY3VyZSBhbmQgdGhlcmVmb3JlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgICAgICBjYXNlIFwiUzI1NlwiOlxuICAgICAgICAgICAgICAgIC8vIGhhc2ggY29kZVZlcmlmaWVyLCB0aGVuIGVuY29kZSBhcyB1cmwtc2FmZSBiYXNlNjQgd2l0aG91dCBwYWRkaW5nXG4gICAgICAgICAgICAgICAgdmFyIGhhc2hCeXRlcyA9IG5ldyBVaW50OEFycmF5KHNoYTI1Ni5hcnJheUJ1ZmZlcihjb2RlVmVyaWZpZXIpKTtcbiAgICAgICAgICAgICAgICB2YXIgZW5jb2RlZEhhc2ggPSBiYXNlNjQuZnJvbUJ5dGVBcnJheShoYXNoQnl0ZXMpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcPS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZWRIYXNoO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCB2YWx1ZSBmb3IgcGtjZU1ldGhvZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZENsYWltc1BhcmFtZXRlcihyZXF1ZXN0ZWRBY3Ipe1xuICAgICAgICB2YXIgY2xhaW1zID0ge1xuICAgICAgICAgICAgaWRfdG9rZW46IHtcbiAgICAgICAgICAgICAgICBhY3I6IHJlcXVlc3RlZEFjclxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY2xhaW1zKTtcbiAgICB9XG5cbiAgICBrYy5jcmVhdGVMb2dpblVybCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gY3JlYXRlVVVJRCgpO1xuICAgICAgICB2YXIgbm9uY2UgPSBjcmVhdGVVVUlEKCk7XG5cbiAgICAgICAgdmFyIHJlZGlyZWN0VXJpID0gYWRhcHRlci5yZWRpcmVjdFVyaShvcHRpb25zKTtcblxuICAgICAgICB2YXIgY2FsbGJhY2tTdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5vbmNlOiBub25jZSxcbiAgICAgICAgICAgIHJlZGlyZWN0VXJpOiBlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RVcmkpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm9tcHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrU3RhdGUucHJvbXB0ID0gb3B0aW9ucy5wcm9tcHQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYmFzZVVybDtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hY3Rpb24gPT0gJ3JlZ2lzdGVyJykge1xuICAgICAgICAgICAgYmFzZVVybCA9IGtjLmVuZHBvaW50cy5yZWdpc3RlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFzZVVybCA9IGtjLmVuZHBvaW50cy5hdXRob3JpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzY29wZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zY29wZSB8fCBrYy5zY29wZTtcbiAgICAgICAgaWYgKCFzY29wZSkge1xuICAgICAgICAgICAgLy8gaWYgc2NvcGUgaXMgbm90IHNldCwgZGVmYXVsdCB0byBcIm9wZW5pZFwiXG4gICAgICAgICAgICBzY29wZSA9IFwib3BlbmlkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGUuaW5kZXhPZihcIm9wZW5pZFwiKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGlmIG9wZW5pZCBzY29wZSBpcyBtaXNzaW5nLCBwcmVmaXggdGhlIGdpdmVuIHNjb3BlcyB3aXRoIGl0XG4gICAgICAgICAgICBzY29wZSA9IFwib3BlbmlkIFwiICsgc2NvcGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXJsID0gYmFzZVVybFxuICAgICAgICAgICAgKyAnP2NsaWVudF9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLmNsaWVudElkKVxuICAgICAgICAgICAgKyAnJnJlZGlyZWN0X3VyaT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0VXJpKVxuICAgICAgICAgICAgKyAnJnN0YXRlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc3RhdGUpXG4gICAgICAgICAgICArICcmcmVzcG9uc2VfbW9kZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLnJlc3BvbnNlTW9kZSlcbiAgICAgICAgICAgICsgJyZyZXNwb25zZV90eXBlPScgKyBlbmNvZGVVUklDb21wb25lbnQoa2MucmVzcG9uc2VUeXBlKVxuICAgICAgICAgICAgKyAnJnNjb3BlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc2NvcGUpO1xuICAgICAgICBpZiAodXNlTm9uY2UpIHtcbiAgICAgICAgICAgIHVybCA9IHVybCArICcmbm9uY2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChub25jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnByb21wdCkge1xuICAgICAgICAgICAgdXJsICs9ICcmcHJvbXB0PScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5wcm9tcHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5tYXhBZ2UpIHtcbiAgICAgICAgICAgIHVybCArPSAnJm1heF9hZ2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLm1heEFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxvZ2luSGludCkge1xuICAgICAgICAgICAgdXJsICs9ICcmbG9naW5faGludD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMubG9naW5IaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaWRwSGludCkge1xuICAgICAgICAgICAgdXJsICs9ICcma2NfaWRwX2hpbnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmlkcEhpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hY3Rpb24gJiYgb3B0aW9ucy5hY3Rpb24gIT0gJ3JlZ2lzdGVyJykge1xuICAgICAgICAgICAgdXJsICs9ICcma2NfYWN0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5hY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sb2NhbGUpIHtcbiAgICAgICAgICAgIHVybCArPSAnJnVpX2xvY2FsZXM9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmxvY2FsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmFjcikge1xuICAgICAgICAgICAgdmFyIGNsYWltc1BhcmFtZXRlciA9IGJ1aWxkQ2xhaW1zUGFyYW1ldGVyKG9wdGlvbnMuYWNyKTtcbiAgICAgICAgICAgIHVybCArPSAnJmNsYWltcz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGNsYWltc1BhcmFtZXRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2MucGtjZU1ldGhvZCkge1xuICAgICAgICAgICAgdmFyIGNvZGVWZXJpZmllciA9IGdlbmVyYXRlQ29kZVZlcmlmaWVyKDk2KTtcbiAgICAgICAgICAgIGNhbGxiYWNrU3RhdGUucGtjZUNvZGVWZXJpZmllciA9IGNvZGVWZXJpZmllcjtcbiAgICAgICAgICAgIHZhciBwa2NlQ2hhbGxlbmdlID0gZ2VuZXJhdGVQa2NlQ2hhbGxlbmdlKGtjLnBrY2VNZXRob2QsIGNvZGVWZXJpZmllcik7XG4gICAgICAgICAgICB1cmwgKz0gJyZjb2RlX2NoYWxsZW5nZT0nICsgcGtjZUNoYWxsZW5nZTtcbiAgICAgICAgICAgIHVybCArPSAnJmNvZGVfY2hhbGxlbmdlX21ldGhvZD0nICsga2MucGtjZU1ldGhvZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrU3RvcmFnZS5hZGQoY2FsbGJhY2tTdGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9O1xuXG4gICAga2MubG9nb3V0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gYWRhcHRlci5sb2dvdXQob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGtjLmNyZWF0ZUxvZ291dFVybCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHVybCA9IGtjLmVuZHBvaW50cy5sb2dvdXQoKVxuICAgICAgICAgICAgKyAnP2NsaWVudF9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLmNsaWVudElkKVxuICAgICAgICAgICAgKyAnJnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFkYXB0ZXIucmVkaXJlY3RVcmkob3B0aW9ucywgZmFsc2UpKTtcblxuICAgICAgICBpZiAoa2MuaWRUb2tlbikge1xuICAgICAgICAgICAgdXJsICs9ICcmaWRfdG9rZW5faGludD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLmlkVG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9O1xuXG4gICAga2MucmVnaXN0ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gYWRhcHRlci5yZWdpc3RlcihvcHRpb25zKTtcbiAgICB9O1xuXG4gICAga2MuY3JlYXRlUmVnaXN0ZXJVcmwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuYWN0aW9uID0gJ3JlZ2lzdGVyJztcbiAgICAgICAgcmV0dXJuIGtjLmNyZWF0ZUxvZ2luVXJsKG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBrYy5jcmVhdGVBY2NvdW50VXJsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgcmVhbG0gPSBnZXRSZWFsbVVybCgpO1xuICAgICAgICB2YXIgdXJsID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodHlwZW9mIHJlYWxtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdXJsID0gcmVhbG1cbiAgICAgICAgICAgICsgJy9hY2NvdW50J1xuICAgICAgICAgICAgKyAnP3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoa2MuY2xpZW50SWQpXG4gICAgICAgICAgICArICcmcmVmZXJyZXJfdXJpPScgKyBlbmNvZGVVUklDb21wb25lbnQoYWRhcHRlci5yZWRpcmVjdFVyaShvcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9O1xuXG4gICAga2MuYWNjb3VudE1hbmFnZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXIuYWNjb3VudE1hbmFnZW1lbnQoKTtcbiAgICB9O1xuXG4gICAga2MuaGFzUmVhbG1Sb2xlID0gZnVuY3Rpb24gKHJvbGUpIHtcbiAgICAgICAgdmFyIGFjY2VzcyA9IGtjLnJlYWxtQWNjZXNzO1xuICAgICAgICByZXR1cm4gISFhY2Nlc3MgJiYgYWNjZXNzLnJvbGVzLmluZGV4T2Yocm9sZSkgPj0gMDtcbiAgICB9O1xuXG4gICAga2MuaGFzUmVzb3VyY2VSb2xlID0gZnVuY3Rpb24ocm9sZSwgcmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFrYy5yZXNvdXJjZUFjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFjY2VzcyA9IGtjLnJlc291cmNlQWNjZXNzW3Jlc291cmNlIHx8IGtjLmNsaWVudElkXTtcbiAgICAgICAgcmV0dXJuICEhYWNjZXNzICYmIGFjY2Vzcy5yb2xlcy5pbmRleE9mKHJvbGUpID49IDA7XG4gICAgfTtcblxuICAgIGtjLmxvYWRVc2VyUHJvZmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdXJsID0gZ2V0UmVhbG1VcmwoKSArICcvYWNjb3VudCc7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdiZWFyZXIgJyArIGtjLnRva2VuKTtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAga2MucHJvZmlsZSA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcyhrYy5wcm9maWxlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlcS5zZW5kKCk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICB9O1xuXG4gICAga2MubG9hZFVzZXJJbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cmwgPSBrYy5lbmRwb2ludHMudXNlcmluZm8oKTtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ2JlYXJlciAnICsga2MudG9rZW4pO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuXG4gICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBrYy51c2VySW5mbyA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcyhrYy51c2VySW5mbyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXEuc2VuZCgpO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfTtcblxuICAgIGtjLmlzVG9rZW5FeHBpcmVkID0gZnVuY3Rpb24obWluVmFsaWRpdHkpIHtcbiAgICAgICAgaWYgKCFrYy50b2tlblBhcnNlZCB8fCAoIWtjLnJlZnJlc2hUb2tlbiAmJiBrYy5mbG93ICE9ICdpbXBsaWNpdCcgKSkge1xuICAgICAgICAgICAgdGhyb3cgJ05vdCBhdXRoZW50aWNhdGVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrYy50aW1lU2tldyA9PSBudWxsKSB7XG4gICAgICAgICAgICBsb2dJbmZvKCdbS0VZQ0xPQUtdIFVuYWJsZSB0byBkZXRlcm1pbmUgaWYgdG9rZW4gaXMgZXhwaXJlZCBhcyB0aW1lc2tldyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHBpcmVzSW4gPSBrYy50b2tlblBhcnNlZFsnZXhwJ10gLSBNYXRoLmNlaWwobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKSArIGtjLnRpbWVTa2V3O1xuICAgICAgICBpZiAobWluVmFsaWRpdHkpIHtcbiAgICAgICAgICAgIGlmIChpc05hTihtaW5WYWxpZGl0eSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCBtaW5WYWxpZGl0eSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBpcmVzSW4gLT0gbWluVmFsaWRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cGlyZXNJbiA8IDA7XG4gICAgfTtcblxuICAgIGtjLnVwZGF0ZVRva2VuID0gZnVuY3Rpb24obWluVmFsaWRpdHkpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgaWYgKCFrYy5yZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtaW5WYWxpZGl0eSA9IG1pblZhbGlkaXR5IHx8IDU7XG5cbiAgICAgICAgdmFyIGV4ZWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZWZyZXNoVG9rZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChtaW5WYWxpZGl0eSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBSZWZyZXNoaW5nIHRva2VuOiBmb3JjZWQgcmVmcmVzaCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgha2MudG9rZW5QYXJzZWQgfHwga2MuaXNUb2tlbkV4cGlyZWQobWluVmFsaWRpdHkpKSB7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsb2dJbmZvKCdbS0VZQ0xPQUtdIFJlZnJlc2hpbmcgdG9rZW46IHRva2VuIGV4cGlyZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFyZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gJ2dyYW50X3R5cGU9cmVmcmVzaF90b2tlbiYnICsgJ3JlZnJlc2hfdG9rZW49JyArIGtjLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0ga2MuZW5kcG9pbnRzLnRva2VuKCk7XG5cbiAgICAgICAgICAgICAgICByZWZyZXNoUXVldWUucHVzaChwcm9taXNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZWZyZXNoUXVldWUubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXEub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyArPSAnJmNsaWVudF9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLmNsaWVudElkKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZUxvY2FsID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oJ1tLRVlDTE9BS10gVG9rZW4gcmVmcmVzaGVkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUxvY2FsID0gKHRpbWVMb2NhbCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRva2VuKHRva2VuUmVzcG9uc2VbJ2FjY2Vzc190b2tlbiddLCB0b2tlblJlc3BvbnNlWydyZWZyZXNoX3Rva2VuJ10sIHRva2VuUmVzcG9uc2VbJ2lkX3Rva2VuJ10sIHRpbWVMb2NhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2Mub25BdXRoUmVmcmVzaFN1Y2Nlc3MgJiYga2Mub25BdXRoUmVmcmVzaFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IHJlZnJlc2hRdWV1ZS5wb3AoKTsgcCAhPSBudWxsOyBwID0gcmVmcmVzaFF1ZXVlLnBvcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKCdbS0VZQ0xPQUtdIEZhaWxlZCB0byByZWZyZXNoIHRva2VuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT0gNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5jbGVhclRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5vbkF1dGhSZWZyZXNoRXJyb3IgJiYga2Mub25BdXRoUmVmcmVzaEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSByZWZyZXNoUXVldWUucG9wKCk7IHAgIT0gbnVsbDsgcCA9IHJlZnJlc2hRdWV1ZS5wb3AoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5zZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEuc2VuZChwYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobG9naW5JZnJhbWUuZW5hYmxlKSB7XG4gICAgICAgICAgICB2YXIgaWZyYW1lUHJvbWlzZSA9IGNoZWNrTG9naW5JZnJhbWUoKTtcbiAgICAgICAgICAgIGlmcmFtZVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH07XG5cbiAgICBrYy5jbGVhclRva2VuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChrYy50b2tlbikge1xuICAgICAgICAgICAgc2V0VG9rZW4obnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICBrYy5vbkF1dGhMb2dvdXQgJiYga2Mub25BdXRoTG9nb3V0KCk7XG4gICAgICAgICAgICBpZiAoa2MubG9naW5SZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGtjLmxvZ2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVhbG1VcmwoKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2MuYXV0aFNlcnZlclVybCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChrYy5hdXRoU2VydmVyVXJsLmNoYXJBdChrYy5hdXRoU2VydmVyVXJsLmxlbmd0aCAtIDEpID09ICcvJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBrYy5hdXRoU2VydmVyVXJsICsgJ3JlYWxtcy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLnJlYWxtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtjLmF1dGhTZXJ2ZXJVcmwgKyAnL3JlYWxtcy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KGtjLnJlYWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRPcmlnaW4oKSB7XG4gICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NDYWxsYmFjayhvYXV0aCwgcHJvbWlzZSkge1xuICAgICAgICB2YXIgY29kZSA9IG9hdXRoLmNvZGU7XG4gICAgICAgIHZhciBlcnJvciA9IG9hdXRoLmVycm9yO1xuICAgICAgICB2YXIgcHJvbXB0ID0gb2F1dGgucHJvbXB0O1xuXG4gICAgICAgIHZhciB0aW1lTG9jYWwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZiAob2F1dGhbJ2tjX2FjdGlvbl9zdGF0dXMnXSkge1xuICAgICAgICAgICAga2Mub25BY3Rpb25VcGRhdGUgJiYga2Mub25BY3Rpb25VcGRhdGUob2F1dGhbJ2tjX2FjdGlvbl9zdGF0dXMnXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChwcm9tcHQgIT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yRGF0YSA9IHsgZXJyb3I6IGVycm9yLCBlcnJvcl9kZXNjcmlwdGlvbjogb2F1dGguZXJyb3JfZGVzY3JpcHRpb24gfTtcbiAgICAgICAgICAgICAgICBrYy5vbkF1dGhFcnJvciAmJiBrYy5vbkF1dGhFcnJvcihlcnJvckRhdGEpO1xuICAgICAgICAgICAgICAgIHByb21pc2UgJiYgcHJvbWlzZS5zZXRFcnJvcihlcnJvckRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlICYmIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKChrYy5mbG93ICE9ICdzdGFuZGFyZCcpICYmIChvYXV0aC5hY2Nlc3NfdG9rZW4gfHwgb2F1dGguaWRfdG9rZW4pKSB7XG4gICAgICAgICAgICBhdXRoU3VjY2VzcyhvYXV0aC5hY2Nlc3NfdG9rZW4sIG51bGwsIG9hdXRoLmlkX3Rva2VuLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoa2MuZmxvdyAhPSAnaW1wbGljaXQnKSAmJiBjb2RlKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gJ2NvZGU9JyArIGNvZGUgKyAnJmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlJztcbiAgICAgICAgICAgIHZhciB1cmwgPSBrYy5lbmRwb2ludHMudG9rZW4oKTtcblxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblxuICAgICAgICAgICAgcGFyYW1zICs9ICcmY2xpZW50X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoa2MuY2xpZW50SWQpO1xuICAgICAgICAgICAgcGFyYW1zICs9ICcmcmVkaXJlY3RfdXJpPScgKyBvYXV0aC5yZWRpcmVjdFVyaTtcblxuICAgICAgICAgICAgaWYgKG9hdXRoLnBrY2VDb2RlVmVyaWZpZXIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMgKz0gJyZjb2RlX3ZlcmlmaWVyPScgKyBvYXV0aC5wa2NlQ29kZVZlcmlmaWVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXEud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW5SZXNwb25zZSA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoU3VjY2Vzcyh0b2tlblJlc3BvbnNlWydhY2Nlc3NfdG9rZW4nXSwgdG9rZW5SZXNwb25zZVsncmVmcmVzaF90b2tlbiddLCB0b2tlblJlc3BvbnNlWydpZF90b2tlbiddLCBrYy5mbG93ID09PSAnc3RhbmRhcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlQ2hlY2tJZnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLm9uQXV0aEVycm9yICYmIGtjLm9uQXV0aEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlICYmIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcS5zZW5kKHBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhdXRoU3VjY2VzcyhhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBpZFRva2VuLCBmdWxmaWxsUHJvbWlzZSkge1xuICAgICAgICAgICAgdGltZUxvY2FsID0gKHRpbWVMb2NhbCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDI7XG5cbiAgICAgICAgICAgIHNldFRva2VuKGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIGlkVG9rZW4sIHRpbWVMb2NhbCk7XG5cbiAgICAgICAgICAgIGlmICh1c2VOb25jZSAmJiAoKGtjLnRva2VuUGFyc2VkICYmIGtjLnRva2VuUGFyc2VkLm5vbmNlICE9IG9hdXRoLnN0b3JlZE5vbmNlKSB8fFxuICAgICAgICAgICAgICAgIChrYy5yZWZyZXNoVG9rZW5QYXJzZWQgJiYga2MucmVmcmVzaFRva2VuUGFyc2VkLm5vbmNlICE9IG9hdXRoLnN0b3JlZE5vbmNlKSB8fFxuICAgICAgICAgICAgICAgIChrYy5pZFRva2VuUGFyc2VkICYmIGtjLmlkVG9rZW5QYXJzZWQubm9uY2UgIT0gb2F1dGguc3RvcmVkTm9uY2UpKSkge1xuXG4gICAgICAgICAgICAgICAgbG9nSW5mbygnW0tFWUNMT0FLXSBJbnZhbGlkIG5vbmNlLCBjbGVhcmluZyB0b2tlbicpO1xuICAgICAgICAgICAgICAgIGtjLmNsZWFyVG9rZW4oKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlICYmIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGZ1bGZpbGxQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGtjLm9uQXV0aFN1Y2Nlc3MgJiYga2Mub25BdXRoU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlICYmIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZENvbmZpZyh1cmwpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG4gICAgICAgIHZhciBjb25maWdVcmw7XG5cbiAgICAgICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZ1VybCA9ICdrZXljbG9hay5qc29uJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uZmlnVXJsID0gY29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBPaWRjRW5kb2ludHMob2lkY0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgIGlmICghIG9pZGNDb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAga2MuZW5kcG9pbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlYWxtVXJsKCkgKyAnL3Byb3RvY29sL29wZW5pZC1jb25uZWN0L2F1dGgnO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVhbG1VcmwoKSArICcvcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvdG9rZW4nO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsb2dvdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlYWxtVXJsKCkgKyAnL3Byb3RvY29sL29wZW5pZC1jb25uZWN0L2xvZ291dCc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrU2Vzc2lvbklmcmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjID0gZ2V0UmVhbG1VcmwoKSArICcvcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvbG9naW4tc3RhdHVzLWlmcmFtZS5odG1sJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrYy5pZnJhbWVWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjID0gc3JjICsgJz92ZXJzaW9uPScgKyBrYy5pZnJhbWVWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcmRQYXJ0eUNvb2tpZXNJZnJhbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9IGdldFJlYWxtVXJsKCkgKyAnL3Byb3RvY29sL29wZW5pZC1jb25uZWN0LzNwLWNvb2tpZXMvc3RlcDEuaHRtbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2MuaWZyYW1lVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA9IHNyYyArICc/dmVyc2lvbj0nICsga2MuaWZyYW1lVmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZWFsbVVybCgpICsgJy9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC9yZWdpc3RyYXRpb25zJztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcmluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlYWxtVXJsKCkgKyAnL3Byb3RvY29sL29wZW5pZC1jb25uZWN0L3VzZXJpbmZvJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtjLmVuZHBvaW50cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvaWRjQ29uZmlndXJhdGlvbi5hdXRob3JpemF0aW9uX2VuZHBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2lkY0NvbmZpZ3VyYXRpb24udG9rZW5fZW5kcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxvZ291dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9pZGNDb25maWd1cmF0aW9uLmVuZF9zZXNzaW9uX2VuZHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb3Qgc3VwcG9ydGVkIGJ5IHRoZSBPSURDIHNlcnZlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9pZGNDb25maWd1cmF0aW9uLmVuZF9zZXNzaW9uX2VuZHBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGVja1Nlc3Npb25JZnJhbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvaWRjQ29uZmlndXJhdGlvbi5jaGVja19zZXNzaW9uX2lmcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IHN1cHBvcnRlZCBieSB0aGUgT0lEQyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvaWRjQ29uZmlndXJhdGlvbi5jaGVja19zZXNzaW9uX2lmcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ1JlZGlyZWN0aW9uIHRvIFwiUmVnaXN0ZXIgdXNlclwiIHBhZ2Ugbm90IHN1cHBvcnRlZCBpbiBzdGFuZGFyZCBPSURDIG1vZGUnO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1c2VyaW5mbzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9pZGNDb25maWd1cmF0aW9uLnVzZXJpbmZvX2VuZHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb3Qgc3VwcG9ydGVkIGJ5IHRoZSBPSURDIHNlcnZlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9pZGNDb25maWd1cmF0aW9uLnVzZXJpbmZvX2VuZHBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWdVcmwpIHtcbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcS5vcGVuKCdHRVQnLCBjb25maWdVcmwsIHRydWUpO1xuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT0gMjAwIHx8IGZpbGVMb2FkZWQocmVxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZyA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLmF1dGhTZXJ2ZXJVcmwgPSBjb25maWdbJ2F1dGgtc2VydmVyLXVybCddO1xuICAgICAgICAgICAgICAgICAgICAgICAga2MucmVhbG0gPSBjb25maWdbJ3JlYWxtJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5jbGllbnRJZCA9IGNvbmZpZ1sncmVzb3VyY2UnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwT2lkY0VuZG9pbnRzKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXEuc2VuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFjb25maWcuY2xpZW50SWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnY2xpZW50SWQgbWlzc2luZyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtjLmNsaWVudElkID0gY29uZmlnLmNsaWVudElkO1xuXG4gICAgICAgICAgICB2YXIgb2lkY1Byb3ZpZGVyID0gY29uZmlnWydvaWRjUHJvdmlkZXInXTtcbiAgICAgICAgICAgIGlmICghb2lkY1Byb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWdbJ3VybCddKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JpcHRzW2ldLnNyYy5tYXRjaCgvLiprZXljbG9ha1xcLmpzLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcudXJsID0gc2NyaXB0c1tpXS5zcmMuc3Vic3RyKDAsIHNjcmlwdHNbaV0uc3JjLmluZGV4T2YoJy9qcy9rZXljbG9hay5qcycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5yZWFsbSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAncmVhbG0gbWlzc2luZyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAga2MuYXV0aFNlcnZlclVybCA9IGNvbmZpZy51cmw7XG4gICAgICAgICAgICAgICAga2MucmVhbG0gPSBjb25maWcucmVhbG07XG4gICAgICAgICAgICAgICAgc2V0dXBPaWRjRW5kb2ludHMobnVsbCk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2lkY1Byb3ZpZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2lkY1Byb3ZpZGVyQ29uZmlnVXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2lkY1Byb3ZpZGVyLmNoYXJBdChvaWRjUHJvdmlkZXIubGVuZ3RoIC0gMSkgPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvaWRjUHJvdmlkZXJDb25maWdVcmwgPSBvaWRjUHJvdmlkZXIgKyAnLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2lkY1Byb3ZpZGVyQ29uZmlnVXJsID0gb2lkY1Byb3ZpZGVyICsgJy8ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXEub3BlbignR0VUJywgb2lkY1Byb3ZpZGVyQ29uZmlnVXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT0gMjAwIHx8IGZpbGVMb2FkZWQocmVxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2lkY1Byb3ZpZGVyQ29uZmlnID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXBPaWRjRW5kb2ludHMob2lkY1Byb3ZpZGVyQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEuc2VuZCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHVwT2lkY0VuZG9pbnRzKG9pZGNQcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0U3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsZUxvYWRlZCh4aHIpIHtcbiAgICAgICAgcmV0dXJuIHhoci5zdGF0dXMgPT0gMCAmJiB4aHIucmVzcG9uc2VUZXh0ICYmIHhoci5yZXNwb25zZVVSTC5zdGFydHNXaXRoKCdmaWxlOicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRva2VuKHRva2VuLCByZWZyZXNoVG9rZW4sIGlkVG9rZW4sIHRpbWVMb2NhbCkge1xuICAgICAgICBpZiAoa2MudG9rZW5UaW1lb3V0SGFuZGxlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoa2MudG9rZW5UaW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGtjLnRva2VuVGltZW91dEhhbmRsZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICBrYy5yZWZyZXNoVG9rZW4gPSByZWZyZXNoVG9rZW47XG4gICAgICAgICAgICBrYy5yZWZyZXNoVG9rZW5QYXJzZWQgPSBkZWNvZGVUb2tlbihyZWZyZXNoVG9rZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIGtjLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy5yZWZyZXNoVG9rZW5QYXJzZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWRUb2tlbikge1xuICAgICAgICAgICAga2MuaWRUb2tlbiA9IGlkVG9rZW47XG4gICAgICAgICAgICBrYy5pZFRva2VuUGFyc2VkID0gZGVjb2RlVG9rZW4oaWRUb2tlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUga2MuaWRUb2tlbjtcbiAgICAgICAgICAgIGRlbGV0ZSBrYy5pZFRva2VuUGFyc2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBrYy50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAga2MudG9rZW5QYXJzZWQgPSBkZWNvZGVUb2tlbih0b2tlbik7XG4gICAgICAgICAgICBrYy5zZXNzaW9uSWQgPSBrYy50b2tlblBhcnNlZC5zZXNzaW9uX3N0YXRlO1xuICAgICAgICAgICAga2MuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgICBrYy5zdWJqZWN0ID0ga2MudG9rZW5QYXJzZWQuc3ViO1xuICAgICAgICAgICAga2MucmVhbG1BY2Nlc3MgPSBrYy50b2tlblBhcnNlZC5yZWFsbV9hY2Nlc3M7XG4gICAgICAgICAgICBrYy5yZXNvdXJjZUFjY2VzcyA9IGtjLnRva2VuUGFyc2VkLnJlc291cmNlX2FjY2VzcztcblxuICAgICAgICAgICAgaWYgKHRpbWVMb2NhbCkge1xuICAgICAgICAgICAgICAgIGtjLnRpbWVTa2V3ID0gTWF0aC5mbG9vcih0aW1lTG9jYWwgLyAxMDAwKSAtIGtjLnRva2VuUGFyc2VkLmlhdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGtjLnRpbWVTa2V3ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2dJbmZvKCdbS0VZQ0xPQUtdIEVzdGltYXRlZCB0aW1lIGRpZmZlcmVuY2UgYmV0d2VlbiBicm93c2VyIGFuZCBzZXJ2ZXIgaXMgJyArIGtjLnRpbWVTa2V3ICsgJyBzZWNvbmRzJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2Mub25Ub2tlbkV4cGlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGlyZXNJbiA9IChrYy50b2tlblBhcnNlZFsnZXhwJ10gLSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKSArIGtjLnRpbWVTa2V3KSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oJ1tLRVlDTE9BS10gVG9rZW4gZXhwaXJlcyBpbiAnICsgTWF0aC5yb3VuZChleHBpcmVzSW4gLyAxMDAwKSArICcgcycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwaXJlc0luIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLm9uVG9rZW5FeHBpcmVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy50b2tlblRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGtjLm9uVG9rZW5FeHBpcmVkLCBleHBpcmVzSW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIGtjLnRva2VuO1xuICAgICAgICAgICAgZGVsZXRlIGtjLnRva2VuUGFyc2VkO1xuICAgICAgICAgICAgZGVsZXRlIGtjLnN1YmplY3Q7XG4gICAgICAgICAgICBkZWxldGUga2MucmVhbG1BY2Nlc3M7XG4gICAgICAgICAgICBkZWxldGUga2MucmVzb3VyY2VBY2Nlc3M7XG5cbiAgICAgICAgICAgIGtjLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29kZVRva2VuKHN0cikge1xuICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJy4nKVsxXTtcblxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLS9nLCAnKycpO1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgICAgICBzd2l0Y2ggKHN0ci5sZW5ndGggJSA0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgc3RyICs9ICc9PSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgc3RyICs9ICc9JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgdG9rZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShhdG9iKHN0cikpKTtcblxuICAgICAgICBzdHIgPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVVVJRCgpIHtcbiAgICAgICAgdmFyIGhleERpZ2l0cyA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcbiAgICAgICAgdmFyIHMgPSBnZW5lcmF0ZVJhbmRvbVN0cmluZygzNiwgaGV4RGlnaXRzKS5zcGxpdChcIlwiKTtcbiAgICAgICAgc1sxNF0gPSAnNCc7XG4gICAgICAgIHNbMTldID0gaGV4RGlnaXRzLnN1YnN0cigoc1sxOV0gJiAweDMpIHwgMHg4LCAxKTtcbiAgICAgICAgc1s4XSA9IHNbMTNdID0gc1sxOF0gPSBzWzIzXSA9ICctJztcbiAgICAgICAgdmFyIHV1aWQgPSBzLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUNhbGxiYWNrKHVybCkge1xuICAgICAgICB2YXIgb2F1dGggPSBwYXJzZUNhbGxiYWNrVXJsKHVybCk7XG4gICAgICAgIGlmICghb2F1dGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvYXV0aFN0YXRlID0gY2FsbGJhY2tTdG9yYWdlLmdldChvYXV0aC5zdGF0ZSk7XG5cbiAgICAgICAgaWYgKG9hdXRoU3RhdGUpIHtcbiAgICAgICAgICAgIG9hdXRoLnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIG9hdXRoLnJlZGlyZWN0VXJpID0gb2F1dGhTdGF0ZS5yZWRpcmVjdFVyaTtcbiAgICAgICAgICAgIG9hdXRoLnN0b3JlZE5vbmNlID0gb2F1dGhTdGF0ZS5ub25jZTtcbiAgICAgICAgICAgIG9hdXRoLnByb21wdCA9IG9hdXRoU3RhdGUucHJvbXB0O1xuICAgICAgICAgICAgb2F1dGgucGtjZUNvZGVWZXJpZmllciA9IG9hdXRoU3RhdGUucGtjZUNvZGVWZXJpZmllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYXV0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUNhbGxiYWNrVXJsKHVybCkge1xuICAgICAgICB2YXIgc3VwcG9ydGVkUGFyYW1zO1xuICAgICAgICBzd2l0Y2ggKGtjLmZsb3cpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YW5kYXJkJzpcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRQYXJhbXMgPSBbJ2NvZGUnLCAnc3RhdGUnLCAnc2Vzc2lvbl9zdGF0ZScsICdrY19hY3Rpb25fc3RhdHVzJ107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbXBsaWNpdCc6XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkUGFyYW1zID0gWydhY2Nlc3NfdG9rZW4nLCAndG9rZW5fdHlwZScsICdpZF90b2tlbicsICdzdGF0ZScsICdzZXNzaW9uX3N0YXRlJywgJ2V4cGlyZXNfaW4nLCAna2NfYWN0aW9uX3N0YXR1cyddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaHlicmlkJzpcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRQYXJhbXMgPSBbJ2FjY2Vzc190b2tlbicsICd0b2tlbl90eXBlJywgJ2lkX3Rva2VuJywgJ2NvZGUnLCAnc3RhdGUnLCAnc2Vzc2lvbl9zdGF0ZScsICdleHBpcmVzX2luJywgJ2tjX2FjdGlvbl9zdGF0dXMnXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cHBvcnRlZFBhcmFtcy5wdXNoKCdlcnJvcicpO1xuICAgICAgICBzdXBwb3J0ZWRQYXJhbXMucHVzaCgnZXJyb3JfZGVzY3JpcHRpb24nKTtcbiAgICAgICAgc3VwcG9ydGVkUGFyYW1zLnB1c2goJ2Vycm9yX3VyaScpO1xuXG4gICAgICAgIHZhciBxdWVyeUluZGV4ID0gdXJsLmluZGV4T2YoJz8nKTtcbiAgICAgICAgdmFyIGZyYWdtZW50SW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuXG4gICAgICAgIHZhciBuZXdVcmw7XG4gICAgICAgIHZhciBwYXJzZWQ7XG5cbiAgICAgICAgaWYgKGtjLnJlc3BvbnNlTW9kZSA9PT0gJ3F1ZXJ5JyAmJiBxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgbmV3VXJsID0gdXJsLnN1YnN0cmluZygwLCBxdWVyeUluZGV4KTtcbiAgICAgICAgICAgIHBhcnNlZCA9IHBhcnNlQ2FsbGJhY2tQYXJhbXModXJsLnN1YnN0cmluZyhxdWVyeUluZGV4ICsgMSwgZnJhZ21lbnRJbmRleCAhPT0gLTEgPyBmcmFnbWVudEluZGV4IDogdXJsLmxlbmd0aCksIHN1cHBvcnRlZFBhcmFtcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhcmFtc1N0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBuZXdVcmwgKz0gJz8nICsgcGFyc2VkLnBhcmFtc1N0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcmFnbWVudEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIG5ld1VybCArPSB1cmwuc3Vic3RyaW5nKGZyYWdtZW50SW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtjLnJlc3BvbnNlTW9kZSA9PT0gJ2ZyYWdtZW50JyAmJiBmcmFnbWVudEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgbmV3VXJsID0gdXJsLnN1YnN0cmluZygwLCBmcmFnbWVudEluZGV4KTtcbiAgICAgICAgICAgIHBhcnNlZCA9IHBhcnNlQ2FsbGJhY2tQYXJhbXModXJsLnN1YnN0cmluZyhmcmFnbWVudEluZGV4ICsgMSksIHN1cHBvcnRlZFBhcmFtcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhcmFtc1N0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBuZXdVcmwgKz0gJyMnICsgcGFyc2VkLnBhcmFtc1N0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQgJiYgcGFyc2VkLm9hdXRoUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoa2MuZmxvdyA9PT0gJ3N0YW5kYXJkJyB8fCBrYy5mbG93ID09PSAnaHlicmlkJykge1xuICAgICAgICAgICAgICAgIGlmICgocGFyc2VkLm9hdXRoUGFyYW1zLmNvZGUgfHwgcGFyc2VkLm9hdXRoUGFyYW1zLmVycm9yKSAmJiBwYXJzZWQub2F1dGhQYXJhbXMuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLm9hdXRoUGFyYW1zLm5ld1VybCA9IG5ld1VybDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5vYXV0aFBhcmFtcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtjLmZsb3cgPT09ICdpbXBsaWNpdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHBhcnNlZC5vYXV0aFBhcmFtcy5hY2Nlc3NfdG9rZW4gfHwgcGFyc2VkLm9hdXRoUGFyYW1zLmVycm9yKSAmJiBwYXJzZWQub2F1dGhQYXJhbXMuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLm9hdXRoUGFyYW1zLm5ld1VybCA9IG5ld1VybDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5vYXV0aFBhcmFtcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUNhbGxiYWNrUGFyYW1zKHBhcmFtc1N0cmluZywgc3VwcG9ydGVkUGFyYW1zKSB7XG4gICAgICAgIHZhciBwID0gcGFyYW1zU3RyaW5nLnNwbGl0KCcmJyk7XG4gICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgICBwYXJhbXNTdHJpbmc6ICcnLFxuICAgICAgICAgICAgb2F1dGhQYXJhbXM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNwbGl0ID0gcFtpXS5pbmRleE9mKFwiPVwiKTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBwW2ldLnNsaWNlKDAsIHNwbGl0KTtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZWRQYXJhbXMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5vYXV0aFBhcmFtc1trZXldID0gcFtpXS5zbGljZShzcGxpdCArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnBhcmFtc1N0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnBhcmFtc1N0cmluZyArPSAnJic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wYXJhbXNTdHJpbmcgKz0gcFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb21pc2UoKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gY3JlYXRlIGEgbmF0aXZlIFByb21pc2Ugd2hpY2ggYWxzbyBwcmVzZXJ2ZXMgdGhlXG4gICAgICAgIC8vIGludGVyZmFjZSBvZiB0aGUgY3VzdG9tIHByb21pc2UgdHlwZSBwcmV2aW91c2x5IHVzZWQgYnkgdGhlIEFQSVxuICAgICAgICB2YXIgcCA9IHtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHAucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0RXJyb3I6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHAucmVqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHAucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHAucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcblxuICAgICAgICBwLnByb21pc2Uuc3VjY2VzcyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBsb2dQcm9taXNlRGVwcmVjYXRpb24oKTtcblxuICAgICAgICAgICAgdGhpcy50aGVuKGZ1bmN0aW9uIGhhbmRsZVN1Y2Nlc3ModmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgcC5wcm9taXNlLmVycm9yID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGxvZ1Byb21pc2VEZXByZWNhdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLmNhdGNoKGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGV4dGVuZCBleGlzdGluZyBuYXRpdmUgUHJvbWlzZSB3aXRoIHRpbWVvdXRcbiAgICBmdW5jdGlvbiBhcHBseVRpbWVvdXRUb1Byb21pc2UocHJvbWlzZSwgdGltZW91dCwgZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHZhciB0aW1lb3V0SGFuZGxlID0gbnVsbDtcbiAgICAgICAgdmFyIHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlamVjdCh7IFwiZXJyb3JcIjogZXJyb3JNZXNzYWdlIHx8IFwiUHJvbWlzZSBpcyBub3Qgc2V0dGxlZCB3aXRoaW4gdGltZW91dCBvZiBcIiArIHRpbWVvdXQgKyBcIm1zXCIgfSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbcHJvbWlzZSwgdGltZW91dFByb21pc2VdKS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBDaGVja0xvZ2luSWZyYW1lKCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICBpZiAoIWxvZ2luSWZyYW1lLmVuYWJsZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxvZ2luSWZyYW1lLmlmcmFtZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBsb2dpbklmcmFtZS5pZnJhbWUgPSBpZnJhbWU7XG5cbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGF1dGhVcmwgPSBrYy5lbmRwb2ludHMuYXV0aG9yaXplKCk7XG4gICAgICAgICAgICBpZiAoYXV0aFVybC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgICAgICAgICAgICAgIGxvZ2luSWZyYW1lLmlmcmFtZU9yaWdpbiA9IGdldE9yaWdpbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dpbklmcmFtZS5pZnJhbWVPcmlnaW4gPSBhdXRoVXJsLnN1YnN0cmluZygwLCBhdXRoVXJsLmluZGV4T2YoJy8nLCA4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3JjID0ga2MuZW5kcG9pbnRzLmNoZWNrU2Vzc2lvbklmcmFtZSgpO1xuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMgKTtcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAna2V5Y2xvYWstc2Vzc2lvbi1pZnJhbWUnICk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgICAgICAgdmFyIG1lc3NhZ2VDYWxsYmFjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoKGV2ZW50Lm9yaWdpbiAhPT0gbG9naW5JZnJhbWUuaWZyYW1lT3JpZ2luKSB8fCAobG9naW5JZnJhbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cgIT09IGV2ZW50LnNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKGV2ZW50LmRhdGEgPT0gJ3VuY2hhbmdlZCcgfHwgZXZlbnQuZGF0YSA9PSAnY2hhbmdlZCcgfHwgZXZlbnQuZGF0YSA9PSAnZXJyb3InKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSAhPSAndW5jaGFuZ2VkJykge1xuICAgICAgICAgICAgICAgIGtjLmNsZWFyVG9rZW4oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IGxvZ2luSWZyYW1lLmNhbGxiYWNrTGlzdC5zcGxpY2UoMCwgbG9naW5JZnJhbWUuY2FsbGJhY2tMaXN0Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjYWxsYmFja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoZXZlbnQuZGF0YSA9PSAndW5jaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbWVzc2FnZUNhbGxiYWNrLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZUNoZWNrSWZyYW1lKCkge1xuICAgICAgICBpZiAobG9naW5JZnJhbWUuZW5hYmxlKSB7XG4gICAgICAgICAgICBpZiAoa2MudG9rZW4pIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0xvZ2luSWZyYW1lKCkudGhlbihmdW5jdGlvbih1bmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZUNoZWNrSWZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGxvZ2luSWZyYW1lLmludGVydmFsICogMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0xvZ2luSWZyYW1lKCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICBpZiAobG9naW5JZnJhbWUuaWZyYW1lICYmIGxvZ2luSWZyYW1lLmlmcmFtZU9yaWdpbiApIHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBrYy5jbGllbnRJZCArICcgJyArIChrYy5zZXNzaW9uSWQgPyBrYy5zZXNzaW9uSWQgOiAnJyk7XG4gICAgICAgICAgICBsb2dpbklmcmFtZS5jYWxsYmFja0xpc3QucHVzaChwcm9taXNlKTtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSBsb2dpbklmcmFtZS5pZnJhbWVPcmlnaW47XG4gICAgICAgICAgICBpZiAobG9naW5JZnJhbWUuY2FsbGJhY2tMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbG9naW5JZnJhbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UobXNnLCBvcmlnaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrM3BDb29raWVzU3VwcG9ydGVkKCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICBpZiAobG9naW5JZnJhbWUuZW5hYmxlIHx8IGtjLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGtjLmVuZHBvaW50cy50aGlyZFBhcnR5Q29va2llc0lmcmFtZSgpKTtcbiAgICAgICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ2tleWNsb2FrLTNwLWNoZWNrLWlmcmFtZScgKTtcbiAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgICAgICAgICB2YXIgbWVzc2FnZUNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cgIT09IGV2ZW50LnNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgIT09IFwic3VwcG9ydGVkXCIgJiYgZXZlbnQuZGF0YSAhPT0gXCJ1bnN1cHBvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEgPT09IFwidW5zdXBwb3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBsb2dpbklmcmFtZS5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtjLnNpbGVudENoZWNrU3NvRmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtjLnNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKFwiW0tFWUNMT0FLXSAzcmQgcGFydHkgY29va2llcyBhcmVuJ3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci4gY2hlY2tMb2dpbklmcmFtZSBhbmQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaWxlbnQgY2hlY2stc3NvIGFyZSBub3QgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG1lc3NhZ2VDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lc3NhZ2VDYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXBwbHlUaW1lb3V0VG9Qcm9taXNlKHByb21pc2UucHJvbWlzZSwga2MubWVzc2FnZVJlY2VpdmVUaW1lb3V0LCBcIlRpbWVvdXQgd2hlbiB3YWl0aW5nIGZvciAzcmQgcGFydHkgY2hlY2sgaWZyYW1lIG1lc3NhZ2UuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRBZGFwdGVyKHR5cGUpIHtcbiAgICAgICAgaWYgKCF0eXBlIHx8IHR5cGUgPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvZ2luOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGtjLmNyZWF0ZUxvZ2luVXJsKG9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb21pc2UoKS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBsb2dvdXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoa2MuY3JlYXRlTG9nb3V0VXJsKG9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb21pc2UoKS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShrYy5jcmVhdGVSZWdpc3RlclVybChvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9taXNlKCkucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgYWNjb3VudE1hbmFnZW1lbnQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjY291bnRVcmwgPSBrYy5jcmVhdGVBY2NvdW50VXJsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWNjb3VudFVybCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYWNjb3VudFVybDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IHN1cHBvcnRlZCBieSB0aGUgT0lEQyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUHJvbWlzZSgpLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJpOiBmdW5jdGlvbihvcHRpb25zLCBlbmNvZGVIYXNoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZWRpcmVjdFVyaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMucmVkaXJlY3RVcmk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2MucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrYy5yZWRpcmVjdFVyaTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09ICdjb3Jkb3ZhJykge1xuICAgICAgICAgICAgbG9naW5JZnJhbWUuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgY29yZG92YU9wZW5XaW5kb3dXcmFwcGVyID0gZnVuY3Rpb24obG9naW5VcmwsIHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5JbkFwcEJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIGluYXBwYnJvd3NlciBmb3IgSU9TIGFuZCBBbmRyb2lkIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4obG9naW5VcmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5vcGVuKGxvZ2luVXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBzaGFsbG93Q2xvbmVDb3Jkb3ZhT3B0aW9ucyA9IGZ1bmN0aW9uICh1c2VyT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyT3B0aW9ucyAmJiB1c2VyT3B0aW9ucy5jb3Jkb3ZhT3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModXNlck9wdGlvbnMuY29yZG92YU9wdGlvbnMpLnJlZHVjZShmdW5jdGlvbiAob3B0aW9ucywgb3B0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25OYW1lXSA9IHVzZXJPcHRpb25zLmNvcmRvdmFPcHRpb25zW29wdGlvbk5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGZvcm1hdENvcmRvdmFPcHRpb25zID0gZnVuY3Rpb24gKGNvcmRvdmFPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNvcmRvdmFPcHRpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbk5hbWUrXCI9XCIrY29yZG92YU9wdGlvbnNbb3B0aW9uTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbihcIixcIik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgY3JlYXRlQ29yZG92YU9wdGlvbnMgPSBmdW5jdGlvbiAodXNlck9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29yZG92YU9wdGlvbnMgPSBzaGFsbG93Q2xvbmVDb3Jkb3ZhT3B0aW9ucyh1c2VyT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY29yZG92YU9wdGlvbnMubG9jYXRpb24gPSAnbm8nO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyT3B0aW9ucyAmJiB1c2VyT3B0aW9ucy5wcm9tcHQgPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvcmRvdmFPcHRpb25zLmhpZGRlbiA9ICd5ZXMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0Q29yZG92YU9wdGlvbnMoY29yZG92YU9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2dpbjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY29yZG92YU9wdGlvbnMgPSBjcmVhdGVDb3Jkb3ZhT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ2luVXJsID0ga2MuY3JlYXRlTG9naW5Vcmwob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWYgPSBjb3Jkb3ZhT3BlbldpbmRvd1dyYXBwZXIobG9naW5VcmwsICdfYmxhbmsnLCBjb3Jkb3ZhT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9zZUJyb3dzZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignaHR0cDovL2xvY2FsaG9zdCcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBwYXJzZUNhbGxiYWNrKGV2ZW50LnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJyb3dzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVycm9yJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKCdodHRwOi8vbG9jYWxob3N0JykgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBwYXJzZUNhbGxiYWNrKGV2ZW50LnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnJvd3NlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VCcm93c2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZXhpdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Uuc2V0RXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb246IFwiY2xvc2VkX2J5X3VzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBsb2dvdXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ291dFVybCA9IGtjLmNyZWF0ZUxvZ291dFVybChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZiA9IGNvcmRvdmFPcGVuV2luZG93V3JhcHBlcihsb2dvdXRVcmwsICdfYmxhbmsnLCAnbG9jYXRpb249bm8saGlkZGVuPXllcyxjbGVhcmNhY2hlPXllcycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcjtcblxuICAgICAgICAgICAgICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignaHR0cDovL2xvY2FsaG9zdCcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlcnJvcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YoJ2h0dHA6Ly9sb2NhbGhvc3QnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2V4aXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYy5jbGVhclRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zZXRTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyIDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2lzdGVyVXJsID0ga2MuY3JlYXRlUmVnaXN0ZXJVcmwoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvcmRvdmFPcHRpb25zID0gY3JlYXRlQ29yZG92YU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWYgPSBjb3Jkb3ZhT3BlbldpbmRvd1dyYXBwZXIocmVnaXN0ZXJVcmwsICdfYmxhbmsnLCBjb3Jkb3ZhT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKCdodHRwOi8vbG9jYWxob3N0JykgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYXV0aCA9IHBhcnNlQ2FsbGJhY2soZXZlbnQudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ2FsbGJhY2sob2F1dGgsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgYWNjb3VudE1hbmFnZW1lbnQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjY291bnRVcmwgPSBrYy5jcmVhdGVBY2NvdW50VXJsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWNjb3VudFVybCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWYgPSBjb3Jkb3ZhT3BlbldpbmRvd1dyYXBwZXIoYWNjb3VudFVybCwgJ19ibGFuaycsICdsb2NhdGlvbj1ubycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKCdodHRwOi8vbG9jYWxob3N0JykgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IHN1cHBvcnRlZCBieSB0aGUgT0lEQyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZWRpcmVjdFVyaTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3QnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09ICdjb3Jkb3ZhLW5hdGl2ZScpIHtcbiAgICAgICAgICAgIGxvZ2luSWZyYW1lLmVuYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvZ2luOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9naW5VcmwgPSBrYy5jcmVhdGVMb2dpblVybChvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxMaW5rcy5zdWJzY3JpYmUoJ2tleWNsb2FrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbExpbmtzLnVuc3Vic2NyaWJlKCdrZXljbG9haycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2F1dGggPSBwYXJzZUNhbGxiYWNrKGV2ZW50LnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ2FsbGJhY2sob2F1dGgsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIub3BlblVybChsb2dpblVybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGxvZ291dDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ291dFVybCA9IGtjLmNyZWF0ZUxvZ291dFVybChvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxMaW5rcy5zdWJzY3JpYmUoJ2tleWNsb2FrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbExpbmtzLnVuc3Vic2NyaWJlKCdrZXljbG9haycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrYy5jbGVhclRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnNldFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLm9wZW5VcmwobG9nb3V0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXIgOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVnaXN0ZXJVcmwgPSBrYy5jcmVhdGVSZWdpc3RlclVybChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsTGlua3Muc3Vic2NyaWJlKCdrZXljbG9haycgLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsTGlua3MudW5zdWJzY3JpYmUoJ2tleWNsb2FrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYXV0aCA9IHBhcnNlQ2FsbGJhY2soZXZlbnQudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NDYWxsYmFjayhvYXV0aCwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIub3BlblVybChyZWdpc3RlclVybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG5cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgYWNjb3VudE1hbmFnZW1lbnQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjY291bnRVcmwgPSBrYy5jcmVhdGVBY2NvdW50VXJsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWNjb3VudFVybCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5vcGVuVXJsKGFjY291bnRVcmwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb3Qgc3VwcG9ydGVkIGJ5IHRoZSBPSURDIHNlcnZlclwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJpOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnJlZGlyZWN0VXJpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtjLnJlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2MucmVkaXJlY3RVcmk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJodHRwOi8vbG9jYWxob3N0XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyAnaW52YWxpZCBhZGFwdGVyIHR5cGU6ICcgKyB0eXBlO1xuICAgIH1cblxuICAgIHZhciBMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExvY2FsU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgna2MtdGVzdCcsICd0ZXN0Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdrYy10ZXN0Jyk7XG5cbiAgICAgICAgdmFyIGNzID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBjbGVhckV4cGlyZWQoKSB7XG4gICAgICAgICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspICB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAmJiBrZXkuaW5kZXhPZigna2MtY2FsbGJhY2stJykgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGlyZXMgPSBKU09OLnBhcnNlKHZhbHVlKS5leHBpcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXhwaXJlcyB8fCBleHBpcmVzIDwgdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjcy5nZXQgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9ICdrYy1jYWxsYmFjay0nICsgc3RhdGU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGVhckV4cGlyZWQoKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBjcy5hZGQgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgICAgY2xlYXJFeHBpcmVkKCk7XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSAna2MtY2FsbGJhY2stJyArIHN0YXRlLnN0YXRlO1xuICAgICAgICAgICAgc3RhdGUuZXhwaXJlcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIENvb2tpZVN0b3JhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvb2tpZVN0b3JhZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvb2tpZVN0b3JhZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjcyA9IHRoaXM7XG5cbiAgICAgICAgY3MuZ2V0ID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldENvb2tpZSgna2MtY2FsbGJhY2stJyArIHN0YXRlKTtcbiAgICAgICAgICAgIHNldENvb2tpZSgna2MtY2FsbGJhY2stJyArIHN0YXRlLCAnJywgY29va2llRXhwaXJhdGlvbigtMTAwKSk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY3MuYWRkID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgIHNldENvb2tpZSgna2MtY2FsbGJhY2stJyArIHN0YXRlLnN0YXRlLCBKU09OLnN0cmluZ2lmeShzdGF0ZSksIGNvb2tpZUV4cGlyYXRpb24oNjApKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjcy5yZW1vdmVJdGVtID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBzZXRDb29raWUoa2V5LCAnJywgY29va2llRXhwaXJhdGlvbigtMTAwKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNvb2tpZUV4cGlyYXRpb24gPSBmdW5jdGlvbiAobWludXRlcykge1xuICAgICAgICAgICAgdmFyIGV4cCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBleHAuc2V0VGltZShleHAuZ2V0VGltZSgpICsgKG1pbnV0ZXMqNjAqMTAwMCkpO1xuICAgICAgICAgICAgcmV0dXJuIGV4cDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZ2V0Q29va2llID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBrZXkgKyAnPSc7XG4gICAgICAgICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzZXRDb29raWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgZXhwaXJhdGlvbkRhdGUpIHtcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZSArICc7ICdcbiAgICAgICAgICAgICAgICArICdleHBpcmVzPScgKyBleHBpcmF0aW9uRGF0ZS50b1VUQ1N0cmluZygpICsgJzsgJztcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2tTdG9yYWdlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IENvb2tpZVN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMb2dnZXIoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGtjLmVuYWJsZUxvZ2dpbmcpIHtcbiAgICAgICAgICAgICAgICBmbi5hcHBseShjb25zb2xlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEtleWNsb2FrIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9