/**
 * Db util
 *
 * @author: exode <hello@exode.ru>
 *
 * @Docs: https://www.postgresql.org/docs/12/functions-json.html
 * @Notice: https://stackoverflow.com/a/69026488/10026241
 */

import * as _ from 'lodash';

import { customAlphabet } from 'nanoid';


type ValueType = 'array' | 'object' | 'string' | 'number'

type JsonPathMode = 'jsonb_path_query' | 'jsonb_path_query_array'

class Db {

    /**
     * Get typeorm unique param name
     * @param {string | symbol | number} field
     * @returns {string}
     */
    static paramName(field: string | symbol | number) {
        return customAlphabet(String(field).replace(/\W/g, ''), 5)();
    }

    /**
     * Jsonb select field
     * @param {keyof T} field
     * @param {string[]} keys - ['rootProp.childProp1', 'rootProp.childProp2', ...]
     * @param {JsonPathMode} mode
     * @returns {string}
     */
    static jsonSelect<T>(
        field: keyof T,
        keys: string[],
        mode: JsonPathMode = 'jsonb_path_query',
    ) {
        const select: string[] = [];

        keys?.forEach((item) => {
            const key = !item.includes('AS') ? item : item.split('AS')[0];
            const alias = !item.includes('AS') ? item : item.split('AS')[1];

            select.push(`${mode}("${field}", '$.${key.trim()}') AS "${alias.trim()}"`);
        });

        return select.join(', ');
    }

    /**
     * Condition by jsonb path
     * @param {keyof T} field
     * @param {string} key
     * @param value
     * @param {string} tree
     * @returns {[string, {}]}
     */
    static where<T>(field: keyof T, key: string, value: any, ...tree: string[]) {
        const path = tree.length
            ? [ '', ...tree.map((i) => `'${i}'`) ].join('->')
            : '::jsonb';

        return [
            `${field}${path} @> :${key}`,
            { [key]: tree.length ? JSON.stringify(value) : { [key]: value } },
        ] as [ string, {} ];
    }

    /**
     * Where jsonb condition by select
     * @param {keyof T} field
     * @param {string} pathAndCondition - e.g.: $.root.prop ? (@ == "1")
     * @param {JsonPathMode} mode
     * @param vars
     * @returns {string}
     */
    static whereBySelect<T>(
        field: keyof T,
        pathAndCondition: string,
        mode: JsonPathMode = 'jsonb_path_query',
        vars?: string
    ) {
        return `${mode}("${field}", '${pathAndCondition}'${vars ? `, '${vars}'` : ''})`;
    }

    /**
     * Where in (for array or object which will transform to array by _.get field)
     * @param {keyof T} field - "entityField->'prop'->'childProp'"
     * @param {string[] | Record<string, any>} data
     * @returns {[string, Record<string, string>]}
     */
    static whereIn<T>(field: keyof T, data: string[] | Record<string, any>) {
        const param = this.paramName(field);
        const array = Array.isArray(data) ? data : _.get(data, field);

        return [
            `${field} @> :${param}`,
            { [param]: JSON.stringify(array) },
        ] as [ string, Record<string, string> ];
    }

    /**
     * Where field equal value
     * @param {string} field
     * @param value
     * @returns {[string, Record<string, any>]}
     */
    static whereField(field: string, value: any) {
        return [
            `"${field}" = :${field}`,
            { key: value },
        ] as [ string, Record<string, any> ];
    }

    /**
     * Full text search
     * @param {string} field
     * @param value
     * @returns {[string, Record<string, any>]}
     */
    static fullTextSearch(field: string, value: any) {
        const param = this.paramName(field);

        return [
            `to_tsvector('russian', ${field}) @@ plainto_tsquery('russian', :${param})`,
            { [param]: value },
        ] as [ string, Record<string, any> ];
    }

    /**
     * Like text search
     * @param {string} field
     * @param value
     * @returns {[string, Record<string, any>]}
     */
    static likeTextSearch(field: string, value: any) {
        const param = this.paramName(field);

        return [
            `${field} ILIKE :${param}`,
            { [param]: `%${value}%` },
        ] as [ string, Record<string, any> ];
    }

    /**
     * Json full text search
     * (json like text search released by whereBySelect regex condition)
     * ($.root.prop ? (@ like_regex "value" flag "i"))
     * @param {string} field - '$.key...'
     * @param path
     * @param value - any string
     * @returns {[string, Record<string, any>]}
     */
    static jsonFullTextSearch(field: string, path: string, value: any) {
        const param = this.paramName(field);

        return [
            `jsonb_to_tsvector('russian', jsonb_path_query_array("${field}", '${path}'), '["string"]') 
             @@ plainto_tsquery('russian', :${param})`,
            { [param]: value },
        ] as [ string, Record<string, any> ];
    }

    /**
     * Order by field (custom order)
     * @param {string} field
     * @param {(string | number)[]} order
     * @returns {string}
     */
    static orderByField(field: string, order: (string | number)[]) {
        const cases = order.map((e, i) => `WHEN "${field}" = '${e}' THEN ${i}`);

        return `CASE ${cases.join(' ')} ELSE ${order.length} END`;
    }

    /**
     * Wrap object keys to brackets
     * @param {Record<string, any>} record
     * @returns {Record<string, any>}
     */
    static wrapKeyBrackets(record: Record<string, any>) {
        const result: Record<string, any> = {};

        for (const [ key, value ] of Object.entries(record)) {
            result[`"${key}"`] = value;
        }

        return result;
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
