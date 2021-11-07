/**
 * Time
 *
 * @author: exode <info@exode.ru>
 */

class Time {

    /**
     * Using setTimeout in async functions
     * @param {number} ms
     * @returns {Promise<boolean>}
     */
    static async timer(ms: number) {
        return new Promise<boolean>(resolve => {
            setTimeout(() => resolve(true), ms);
        });
    }

}


export { Time };