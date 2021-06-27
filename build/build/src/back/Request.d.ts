export class Request {
    /**
     * Send post request
     * @param url
     * @param data
     * @param config
     * @returns {Promise<any>}
     */
    static post(url: any, data: any, config: any): Promise<any>;
    /**
     * Send get request
     * @param url
     * @param data
     * @returns {Promise<any>}
     */
    static get(url: any, data: any): Promise<any>;
}
