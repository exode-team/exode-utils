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
    public static splitByDecimal(x: number = 0, delimiter: string = ',') {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
    }

}


export { NumberUtil };