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
    static getRanges(array: number[]) {
        const ranges = [];
        let start, last, length;

        for (let i = 0; i < array.length; i++) {
            length = 0;
            start = array[i];
            last = start;

            while (array[i + 1] - array[i] == 1) {
                last = array[i + 1];
                length++;
                i++;
            }

            const alone = start === last;

            if (alone || length <= 1) {
                alone ? ranges.push(start) : ranges.push(start, last);
                continue;
            }

            ranges.push(start + '-' + last);
        }

        return ranges;
    }

}


export { NumberUtil };
