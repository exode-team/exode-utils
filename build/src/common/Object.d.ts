/**
 * ObjectUtil
 *
 * @author: exode <info@exode.ru>
 */
declare class ObjectUtil {
    /**
     * Collecting property values by object key
     * @param {object} object
     * @param {string | number} key
     * @param {any[]} array
     * @returns {any[]}
     */
    static collectPropValues(object: object, key: string | number, array?: any[]): any[];
    /**
     * Сравнение JSON stringify двух объектов
     * @param first
     * @param second
     * @returns {boolean}
     */
    static isEqual(first: any, second: any): boolean;
    /**
     * Значения свойств меняются на названия их ключей
     * @param {{}} object
     */
    static makeValueAsName(object?: {}): any;
}
export { ObjectUtil };
