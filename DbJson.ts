/**
 * DbJson util
 *
 * @author: exode <hello@exode.ru>
 */


class DbJson {

    /**
     * Key for not jsonable values
     * @type {string}
     * @private
     */
    protected static saveKey = '__not-jsonable-value';

    /**
     * Parse persisted value
     * @param {string | undefined} value
     * @returns {any}
     * @private
     */
    static parse(value: string | undefined) {
        const dbValue = JSON.parse(String(value || '{}'));

        return dbValue[this.saveKey] !== undefined ? dbValue[this.saveKey] : dbValue;
    }

    /**
     * Prepare value before persist
     * @param value
     * @returns {string}
     * @private
     */
    static prepare(value: any) {
        const isJsonable = [ 'array', 'object' ].includes(typeof value);

        return JSON.stringify(isJsonable ? value : { [this.saveKey]: value });
    }

    /**
     * Generate a part of json contain mysql query
     * @param {string} field
     * @param {string} path
     * @param value
     * @returns {(string | any)[]}
     */
    static contain(field: string, path: string, value: any): [ string, string[] ] {
        return [
            `JSON_CONTAINS(${field}, ?, '$.${path}')`,
            [ JSON.stringify(value) ],
        ];
    }

}


export { DbJson };