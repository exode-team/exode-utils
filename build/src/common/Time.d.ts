/**
 * Time
 *
 * @author: exode <info@exode.ru>
 */
declare class Time {
    /**
     * Using setTimeout in async functions
     * @param {number} ms
     * @returns {Promise<boolean>}
     */
    static timer(ms: number): Promise<boolean>;
}
export { Time };
