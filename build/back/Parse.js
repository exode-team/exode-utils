"use strict";
/**
 * Parse util
 *
 * @author: exode <info@exode.ru>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parse = void 0;
var Parse = /** @class */ (function () {
    function Parse() {
    }
    /**
     * Parse method params
     * @param method
     * @returns {{}}
     */
    Parse.methodParams = function (method) {
        var replaces = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
        var methodCode = method.toString();
        var start = methodCode.indexOf('(') + 1;
        var finish = methodCode.indexOf(')');
        var brackets = methodCode.slice(start, finish).replace(replaces, '');
        var parsed = brackets.match(/([^\s,]+)/g) || [];
        var parse = function (value) {
            var numTypes = ['number', 'string'];
            var isNumeric = numTypes.includes(typeof value) && !isNaN(Number(value));
            value = isNumeric
                ? Number(value)
                : (String(value).includes("'") ? value.replace(/'/g, '') : value);
            return value;
        };
        var params = {};
        for (var i = 0; i < parsed.length; i++) {
            var param = parsed[i];
            var nextIsEqual = parsed[i + 1] === '=';
            params[param] = nextIsEqual ? parse(parsed[i + 2]) : undefined;
            i = nextIsEqual ? i + 2 : i;
        }
        return params;
    };
    return Parse;
}());
exports.Parse = Parse;
