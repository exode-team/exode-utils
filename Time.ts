/**
 * Time
 *
 * @author: exode <hello@exode.ru>
 */

import moment from 'moment';


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

    /**
     * Parse date by format
     * @param {Date | string} date
     * @param {string} format
     * @returns {string}
     */
    static parseDate(date: Date | string, format: string = 'D MMM YYYY HH:mm'): string {
        return moment(date, moment.ISO_8601).format(format);
    }

    /**
     * Get left dates with dates
     * @param {Date | string} to
     * @param {Date | string} from
     * @returns {number}
     */
    static getDaysLeft(to: Date | string, from?: Date | string): number {
        const source = moment(from || new Date());

        const target = moment(to);

        return target.diff(source, 'days');
    }

}


export { Time };
