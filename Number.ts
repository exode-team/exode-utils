/**
 * Number
 *
 * @author: exode <hello@exode.ru>
 */

class NumberUtil {

    /**
     * Division of a number by digits
     * @param {number} x
     * @param delimiter
     * @returns {string}
     */
    static splitByDecimal(x: number = 0, delimiter: string = ',') {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
    }

    /**
     * Collapse range with dash
     * @returns {Array<string>}
     * @param array
     */
    static getRanges(array: number[]): string[] {
        const ranges = [];
        let start, rend;

        for (let i = 0; i < array.length; i++) {
            start = array[i];
            rend = start;

            while (array[i + 1] - array[i] == 1) {
                rend = array[i + 1];
                i++;
            }

            ranges.push(start == rend ? start + '' : start + '-' + rend);
        }

        return ranges;
    }

}


export { NumberUtil };
