/**
 * Parse util
 *
 * @author: exode <info@exode.ru>
 */
import { SimpleObject } from '../../types';
declare class Parse {
    /**
     * Parse method params
     * @param method
     * @returns {{}}
     */
    static methodParams(method: string): SimpleObject;
}
export { Parse };
