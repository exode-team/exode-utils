/**
 * Http util
 *
 * @author: exode <hello@exode.ru>
 */

import axios, { AxiosRequestConfig } from 'axios';


class Http {

    /**
     * Send post request
     * @param url
     * @param data
     * @param config
     * @returns {Promise<any>}
     */
    static async post<R>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
        try {
            return axios.post<R>(url, data, config);
        } catch (e) {
            return { data: false } as { data: false };
        }
    }

    /**
     * Send get request
     * @param url
     * @param data
     * @returns {Promise<any>}
     */
    static async get(url: string, data?: AxiosRequestConfig) {
        try {
            return axios.get(url, data);
        } catch (e) {
            return { data: false };
        }
    }

}


export { Http };
