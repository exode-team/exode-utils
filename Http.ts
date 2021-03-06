/**
 * Http util
 *
 * @author: exode <hello@exode.ru>
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


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
            const result = await axios.post<R>(url, data, config);

            return result as AxiosResponse<R>;
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
    static async get<R>(url: string, data?: AxiosRequestConfig) {
        try {
            const result = await axios.get(url, data);

            return result as AxiosResponse<R>;
        } catch (e) {
            return { data: false } as { data: false };
        }
    }

}


export { Http };
