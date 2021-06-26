"use strict";
/**
 * String util
 *
 * @author: exode <info@exode.ru>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtil = void 0;
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    /**
     * Declination of the word (one, two, five ...)
     * @param {number} number
     * @param {string[]} titles
     * @param {boolean} withNum
     * @returns {string}
     */
    StringUtil.declOfNum = function (number, titles, withNum) {
        if (withNum === void 0) { withNum = true; }
        var cases = [2, 0, 1, 1, 1, 2];
        var index = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)];
        return withNum ? number + ' ' : '' + titles[index];
    };
    return StringUtil;
}());
exports.StringUtil = StringUtil;
