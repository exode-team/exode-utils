/**
 * String util
 *
 * @author: exode <info@exode.ru>
 */
declare class StringUtil {
    /**
     * Declination of the word (one, two, five ...)
     * @param {number} number
     * @param {string[]} titles
     * @param {boolean} withNum
     * @returns {string}
     */
    static declOfNum(number: number, titles: string[], withNum?: boolean): string;
}
export { StringUtil };
