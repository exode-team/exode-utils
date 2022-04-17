/**
 * Db util
 *
 * @author: exode <hello@exode.ru>
 */

import * as _ from 'lodash';

import { customAlphabet } from 'nanoid';


type ValueType = 'array' | 'object' | 'string' | 'number'


class Db {

    static select<T>(field: keyof T, ...keys: string[]) {
        const select: string[] = [];

        keys?.forEach((key) => {
            select.push(`(${field} -> '${key}') AS "${key}"`);
        });

        return select.join(', ');
    }

    static where<T>(field: keyof T, key: string, value: any, ...tree: string[]) {
        const path = tree.length
            ? [ '', ...tree.map((i) => `'${i}'`) ].join('->')
            : '::jsonb';

        return [
            `${field}${path} @> :${key}`,
            { [key]: tree.length ? JSON.stringify(value) : { [key]: value } },
        ] as [ string, {} ];
    }

    static whereIn<T>(field: keyof T, data: string[] | Record<string, any>) {
        const prefix = customAlphabet(String(field), 4)();
        const array = Array.isArray(data) ? data : _.get(data, field);

        return [
            `"${field}"::jsonb @> :${prefix + field}`,
            { [prefix + field]: JSON.stringify(array) },
        ] as [ string, Record<string, string> ];
    }

    static whereField(field: string, value: any) {
        return [
            `"${field}" = :${field}`,
            { key: value },
        ] as [ string, Record<string, any> ];
    }

    static whereId(value: any, field = 'id') {
        return this.whereField(field, value);
    }

    static whereKey(value: any, field = 'key') {
        return this.whereField(field, value);
    }

    static fullTextSearch(field: string, value: any) {
        const param = customAlphabet(String(field).replace(/"/g, ''), 4)();

        return [
            `to_tsvector(${field}) @@ to_tsquery(:${param})`,
            { [param]: value },
        ] as [ string, Record<string, any> ];
    }

}

/**
 * Parse value from packed JSON.stringify
 * @param {ValueType} type
 * @param value
 * @param byDefault
 * @returns {any}
 */
const parseValue = (type: ValueType, value: any, byDefault: any = null) => {
    switch (type) {
        case 'array':
            return JSON.parse(value || byDefault || '[]');
        case 'object':
            return JSON.parse(value || byDefault || '{}');
        case 'string':
            return String(JSON.parse(value || byDefault));
        case 'number':
            return Number(JSON.parse(value || byDefault));
    }
};

/**
 * Pack value before saving
 * @param value
 * @returns {string}
 */
const packValue = (value: any) => {
    return JSON.stringify(value || '');
};


export { Db, parseValue, packValue };
