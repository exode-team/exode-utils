/**
 * ObjectUtil
 *
 * @author: exode <info@exode.ru>
 */

import * as _ from 'lodash';


class ObjectUtil {

    /**
     * Collecting property values by object key
     * @param {object} object
     * @param {string | number} key
     * @param {any[]} array
     * @returns {any[]}
     */
    public static collectPropValues(object: object, key: string | number, array: any[] = []) {
        _.forOwn(object, (value: any) => value[key]
            ? array.push(value[key])
            : _.isObject(value) ? this.collectPropValues(value, key, array) : '',
        );

        return array;
    }

    /**
     * Сравнение JSON stringify двух объектов
     * @param first
     * @param second
     * @returns {boolean}
     */
    public static isEqual(first: any, second: any) {
        return JSON.stringify(first || {}) === JSON.stringify(second || {});
    }

    /**
     * Значения свойств меняются на названия их ключей
     * @param {{}} object
     * @param prefix
     */
    public static makeValueAsName(object = {}, prefix = '') {
        const result: any = {};

        _.map(object, (_value, key) => {
            result[key] = _.isObject(_value) && !Array.isArray(_value)
                ? this.makeValueAsName(_value, `${key}.`)
                : (prefix + key);
        });

        return result;
    }

}


export { ObjectUtil };