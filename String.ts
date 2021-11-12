/**
 * String util
 *
 * @author: exode <hello@exode.ru>
 */

class StringUtil {

    /**
     * Declination of the word (one, two, five ...)
     * @param {number} number
     * @param {string[]} titles
     * @param {boolean} withNum
     * @returns {string}
     */
    static declOfNum(number: number, titles: string[], withNum = true) {
        const cases = [ 2, 0, 1, 1, 1, 2 ];
        const remainder = number % 100 > 4 && number % 100 < 20;
        const index = remainder ? 2 : cases[Math.min(number % 10, 5)];

        return withNum ? number + ' ' : '' + titles[index];
    }

}


export { StringUtil };