/**
 * Url util
 *
 * @author: exode <info@exode.ru>
 */

import _ from 'lodash';

import { SimpleObject } from '../types';


class Url {

    /**
     * Transform object to encoded http query string
     * @param object
     * @param glue
     * @returns {string}
     */
    public static objectToQuery(object: {}, glue: string = '&') {
        return _.map(object, (value, key) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }).join(glue);
    }

    /**
     * Parse query string to object
     * @param queryString
     * @param glue
     * @param delimiter
     * @returns {{}}
     */
    public static parseQuery(queryString: string, delimiter = '=', glue = '&'): SimpleObject {
        const query = {};

        const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split(glue);

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
    public static openApp(params: object, post = false) {
        const query = Url.objectToQuery(params);
        const file = post ? 'post-message' : 'openapp';

        return '/static/utils/' + file + '.html?' + query;
    }

}


export { Url };