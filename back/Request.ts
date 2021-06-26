/**
 * Request util
 *
 * @author: exode <info@exode.ru>
 */

import axios, { AxiosRequestConfig } from 'axios';


class Request {

    /**
     * Send post request
     * @param url
     * @param data
     * @param config
     * @returns {Promise<any>}
     */
    public static async post(url, data?, config?: AxiosRequestConfig | undefined) {
        try {
            const content = await axios.post(url, data, config);

            return content.data;
        } catch (e) {
            return false;
        }
    }

    /**
     * Send get request
     * @param url
     * @param data
     * @returns {Promise<any>}
     */
    public static async get(url, data?) {
        try {
            const content = await axios.get(url, data);

            return content.data;
        } catch (e) {
            return false;
        }
    }

}


export { Request };