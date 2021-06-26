"use strict";
/**
 * ObjectUtil
 *
 * @author: exode <info@exode.ru>
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtil = void 0;
var lodash_1 = __importDefault(require("lodash"));
var ObjectUtil = /** @class */ (function () {
    function ObjectUtil() {
    }
    /**
     * Collecting property values by object key
     * @param {object} object
     * @param {string | number} key
     * @param {any[]} array
     * @returns {any[]}
     */
    ObjectUtil.collectPropValues = function (object, key, array) {
        var _this = this;
        if (array === void 0) { array = []; }
        lodash_1.default.forOwn(object, function (value) { return value[key]
            ? array.push(value[key])
            : lodash_1.default.isObject(value) ? _this.collectPropValues(value, key, array) : ''; });
        return array;
    };
    /**
     * Сравнение JSON stringify двух объектов
     * @param first
     * @param second
     * @returns {boolean}
     */
    ObjectUtil.isEqual = function (first, second) {
        return JSON.stringify(first || {}) === JSON.stringify(second || {});
    };
    /**
     * Значения свойств меняются на названия их ключей
     * @param {{}} object
     */
    ObjectUtil.makeValueAsName = function (object) {
        if (object === void 0) { object = {}; }
        var result = {};
        lodash_1.default.map(object, function (value, key) { return result[key] = key; });
        return result;
    };
    return ObjectUtil;
}());
exports.ObjectUtil = ObjectUtil;
