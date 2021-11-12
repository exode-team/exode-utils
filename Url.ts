/**
 * Url util
 *
 * @author: exode <hello@exode.ru>
 */

import * as _ from 'lodash';

import { SimpleObject } from './types';


class Url {

    /**
     * Transform object to encoded http query string
     * @param object
     * @param glue
     * @param addQuery - add "?" if not empty return string
     * @returns {string}
     */
    static objectToQuery(object: {}, glue: string = '&', addQuery = false) {
        const query = _.map(object, (value: any, key: string) => {
            value = _.isString(value) ? value : JSON.stringify(value);

            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }).join(glue);

        return (addQuery && query ? '?' : '') + query;
    }

    /**
     * Parse query string to object
     * @param queryString
     * @param glue
     * @param delimiter
     * @returns {{}}
     */
    static parseQuery(queryString: string, delimiter = '=', glue = '&'): SimpleObject {
        const query: SimpleObject = {};

        const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split(glue);

        if (!queryString?.trim()) {
            return query;
        }

        for (let i = 0; i < pairs.length; i++) {
            const pair = pairs[i].split(delimiter);
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }

        return query;
    }

    /**
     * Generate link for native app or post message page in browser window
     * @param {object} params
     * @param post
     * @returns {string}
     */
    static openApp(params: object, post = false) {
        const query = Url.objectToQuery(params);
        const file = post ? 'post-message' : 'openapp';

        return '/static/utils/' + file + '.html?' + query;
    }

}


export { Url };