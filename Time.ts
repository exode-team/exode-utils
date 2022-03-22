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
     * Parse date relatively
     * @param {Date | string} date
     * @param dateFormat
     * @returns {string}
     */
    static parseRelative(date: Date | string, dateFormat = 'DD MMMM в HH:mm') {
        const dates = {
            lastWeek: dateFormat,
            lastDay: '[Вчера, в] HH:mm',
            sameDay: '[Сегодня, в] HH:mm',
            nextDay: '[Завтра, в] HH:mm',
            nextWeek: dateFormat,
            sameElse: dateFormat,
        };

        return moment(date, moment.ISO_8601)
            .calendar(null, dates);
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

    /**
     * Parse date to VKUI datepicker
     * @param {Date | string} date
     * @returns {{month: number, year: number, day: number}}
     */
    static parseToDatePicker(date: Date | string) {
        const parsed = moment(date).toObject();

        return {
            day: parsed.date,
            month: parsed.months + 1,
            year: parsed.years,
        };
    }

    /**
     * Parse fate from VKUI datepicker
     * @param {Record<string, number>} date
     * @returns {string}
     */
    static parseFromDatePicker(date: Record<string, number>) {
        const { day, month, year } = date;

        return moment({ day, month: month - 1, year })
            .utc()
            .format();
    }

}


export { Time };
