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
     * @param {Date} date
     * @param {string} format
     * @returns {string}
     */
    static parseDate(date: Date, format: string = 'D MMM YYYY HH:mm'): string {
        return moment(date, moment.ISO_8601).format(format);
    }

    /**
     * Get left dates with dates
     * @param to
     * @param {Date} from
     * @returns {number}
     */
    static getDaysLeft(to: Date, from?: Date): number {
        const source = moment(from || new Date());

        const target = moment(to);

        return target.diff(source, 'days');
    }

}


export { Time };
