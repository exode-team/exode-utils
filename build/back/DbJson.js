"use strict";
/**
 * DbJson util
 *
 * @author: exode <info@exode.ru>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbJson = void 0;
var DbJson = /** @class */ (function () {
    function DbJson() {
    }
    /**
     * Parse persisted value
     * @param {string | undefined} value
     * @returns {any}
     * @private
     */
    DbJson.parse = function (value) {
        var dbValue = JSON.parse(String(value || '{}'));
        return dbValue[this.saveKey] !== undefined ? dbValue[this.saveKey] : dbValue;
    };
    /**
     * Prepare value before persist
     * @param value
     * @returns {string}
     * @private
     */
    DbJson.prepare = function (value) {
        var _a;
        var isJsonable = ['array', 'object'].includes(typeof value);
        return JSON.stringify(isJsonable ? value : (_a = {}, _a[this.saveKey] = value, _a));
    };
    /**
     * Generate a part of json contain mysql query
     * @param {string} field
     * @param {string} path
     * @param value
     * @returns {(string | any)[]}
     */
    DbJson.contain = function (field, path, value) {
        return [
            "JSON_CONTAINS(" + field + ", ?, '$." + path + "')",
            [JSON.stringify(value)],
        ];
    };
    /**
     * Key for not jsonable values
     * @type {string}
     * @private
     */
    DbJson.saveKey = '__not-jsonable-value';
    return DbJson;
}());
exports.DbJson = DbJson;
