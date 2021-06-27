/**
 * String util
 *
 * @author: exode <info@exode.ru>
 */
class StringUtil {
    /**
     * Declination of the word (one, two, five ...)
     * @param {number} number
     * @param {string[]} titles
     * @param {boolean} withNum
     * @returns {string}
     */
    static declOfNum(number, titles, withNum = true) {
        const cases = [2, 0, 1, 1, 1, 2];
        const index = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)];
        return withNum ? number + ' ' : '' + titles[index];
    }
}
export { StringUtil };
