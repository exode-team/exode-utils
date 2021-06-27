/**
 * Request util
 *
 * @author: exode <info@exode.ru>
 */
import { AxiosRequestConfig } from 'axios';
declare class Request {
    /**
     * Send post request
     * @param url
     * @param data
     * @param config
     * @returns {Promise<any>}
     */
    static post(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<any>;
    /**
     * Send get request
     * @param url
     * @param data
     * @returns {Promise<any>}
     */
    static get(url: string, data?: AxiosRequestConfig): Promise<any>;
}
export { Request };
