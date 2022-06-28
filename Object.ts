/**
 * ObjectUtil
 *
 * @author: exode <hello@exode.ru>
 */

import * as _ from 'lodash';


class ObjectUtil {

    /**
     * Create map collection
     * @param {Record<any, any>[]} object
     * @param {string} keyField
     * @param valueField
     * @returns {Map<any, any>}
     */
    static makeDict(object: Record<any, any>[], keyField: string = 'id', valueField: string = '') {
        const map = new Map();

        for (const item of object) {
            map.set(_.get(item, keyField), valueField ? _.get(item, item) : item);
        }

        return map;
    }

    /**
     * Collecting property values by object key
     * @param {object} object
     * @param {string | number} key
     * @param {any[]} array
     * @returns {any[]}
     */
    static collectPropValues(object: Record<any, any>, key: string | number, array: any[] = []) {
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
    static isEqual(first: any, second: any) {
        return JSON.stringify(first || {}) === JSON.stringify(second || {});
    }

    /**
     * Значения свойств меняются на названия их ключей
     * @param {{}} object
     * @param prefix
     */
    static makeValueAsName(object = {}, prefix = '') {
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
