/**
 * DbJson util
 *
 * @author: exode <info@exode.ru>
 */
declare class DbJson {
    /**
     * Key for not jsonable values
     * @type {string}
     * @private
     */
    protected static saveKey: string;
    /**
     * Parse persisted value
     * @param {string | undefined} value
     * @returns {any}
     * @private
     */
    static parse(value: string | undefined): any;
    /**
     * Prepare value before persist
     * @param value
     * @returns {string}
     * @private
     */
    static prepare(value: any): string;
    /**
     * Generate a part of json contain mysql query
     * @param {string} field
     * @param {string} path
     * @param value
     * @returns {(string | any)[]}
     */
    static contain(field: string, path: string, value: any): [string, string[]];
}
export { DbJson };
