/**
 * Url util
 *
 * @author: exode <info@exode.ru>
 */
import { SimpleObject } from '../../types';
declare class Url {
    /**
     * Transform object to encoded http query string
     * @param object
     * @param glue
     * @returns {string}
     */
    static objectToQuery(object: {}, glue?: string): string;
    /**
     * Parse query string to object
     * @param queryString
     * @param glue
     * @param delimiter
     * @returns {{}}
     */
    static parseQuery(queryString: string, delimiter?: string, glue?: string): SimpleObject;
    /**
     * Generate link for native app or post message page in browser window
     * @param {object} params
     * @param post
     * @returns {string}
     */
    static openApp(params: object, post?: boolean): string;
}
export { Url };
