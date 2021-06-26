"use strict";
/**
 * Scroll
 *
 * @author: exode <info@exode.ru>
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scroll = void 0;
var Scroll = /** @class */ (function () {
    function Scroll() {
    }
    Object.defineProperty(Scroll, "scrollTop", {
        /**
         * Current scroll position of the window
         * @returns {number}
         */
        get: function () {
            return window.scrollY;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Scroll window to the specified height
     * @param {number} top
     * @param {boolean} smooth
     */
    Scroll.to = function (top, smooth) {
        if (top === void 0) { top = 0; }
        if (smooth === void 0) { smooth = false; }
        var behavior = smooth ? 'smooth' : 'auto';
        var options = { left: 0, behavior: behavior };
        return window.scrollTo(__assign({ top: top }, options));
    };
    return Scroll;
}());
exports.Scroll = Scroll;
