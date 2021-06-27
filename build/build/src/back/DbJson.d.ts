/**
 * DbJson util
 *
 * @author: exode <info@exode.ru>
 */
export class DbJson {
    /**
     * Key for not jsonable values
     * @type {string}
     * @private
     */
    private static saveKey;
    /**
     * Parse persisted value
     * @param {string | undefined} value
     * @returns {any}
     * @private
     */
    private static parse;
    /**
     * Prepare value before persist
     * @param value
     * @returns {string}
     * @private
     */
    private static prepare;
    /**
     * Generate a part of json contain mysql query
     * @param {string} field
     * @param {string} path
     * @param value
     * @returns {(string | any)[]}
     */
    static contain(field: string, path: string, value: any): (string | any)[];
}
