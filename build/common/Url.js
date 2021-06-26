"use strict";
/**
 * Url util
 *
 * @author: exode <info@exode.ru>
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
var lodash_1 = __importDefault(require("lodash"));
var Url = /** @class */ (function () {
    function Url() {
    }
    /**
     * Transform object to encoded http query string
     * @param object
     * @param glue
     * @returns {string}
     */
    Url.objectToQuery = function (object, glue) {
        if (glue === void 0) { glue = '&'; }
        return lodash_1.default.map(object, function (value, key) {
            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }).join(glue);
    };
    /**
     * Parse query string to object
     * @param queryString
     * @param glue
     * @param delimiter
     * @returns {{}}
     */
    Url.parseQuery = function (queryString, delimiter, glue) {
        if (delimiter === void 0) { delimiter = '='; }
        if (glue === void 0) { glue = '&'; }
        var query = {};
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split(glue);
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split(delimiter);
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    };
    /**
     * Generate link for native app or post message page in browser window
     * @param {object} params
     * @param post
     * @returns {string}
     */
    Url.openApp = function (params, post) {
        if (post === void 0) { post = false; }
        var query = Url.objectToQuery(params);
        var file = post ? 'post-message' : 'openapp';
        return '/static/utils/' + file + '.html?' + query;
    };
    return Url;
}());
exports.Url = Url;
