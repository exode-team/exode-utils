"use strict";
/**
 * Number
 *
 * @author: exode <info@exode.ru>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtil = void 0;
var NumberUtil = /** @class */ (function () {
    function NumberUtil() {
    }
    /**
     * Division of a number by digits
     * @param {number} x
     * @param delimiter
     * @returns {string}
     */
    NumberUtil.splitByDecimal = function (x, delimiter) {
        if (x === void 0) { x = 0; }
        if (delimiter === void 0) { delimiter = ','; }
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
    };
    return NumberUtil;
}());
exports.NumberUtil = NumberUtil;
