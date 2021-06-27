/**
 * Number
 *
 * @author: exode <info@exode.ru>
 */
class NumberUtil {
    /**
     * Division of a number by digits
     * @param {number} x
     * @param delimiter
     * @returns {string}
     */
    static splitByDecimal(x = 0, delimiter = ',') {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
    }
}
export { NumberUtil };
