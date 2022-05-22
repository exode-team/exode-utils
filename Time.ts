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
            lastDay: dateFormat.replace(/\D\D MMMM/g, 'Вчера'),
            sameDay: dateFormat.replace(/\D\D MMMM/g, 'Сегодня'),
            nextDay: dateFormat.replace(/\D\D MMMM/g, 'Завтра'),
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
     * Get age
     * @param {Date | string} to
     * @param {Date | string} from
     * @returns {number | string}
     */
    static getAge(from: Date | string, to?: Date | string): number | string {
        const source = moment(from);
        const target = moment(to || new Date());

        return target.diff(source, 'years')
            ? target.diff(source, 'years') + ' лет'
            : '';
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

    /**
     * Format to full date
     * @param {string | number} year
     * @param {string | number} month
     * @param {string | number} date
     * @returns {string}
     */
    static toFullDate(year: string | number, month: string | number, date: string | number) {
        return `${year}-${('0' + month).slice(-2)}-${('0' + date).slice(-2)}`;
    }

    /**
     * Get list options to calendar
     * @returns {}
     */
    static getCalendarOptions() {
        const monthNames: string[] = [
            'Января',
            'Февраля',
            'Марта',
            'Апреля',
            'Мая',
            'Июня',
            'Июля',
            'Августа',
            'Сентября',
            'Октября',
            'Ноября',
            'Декабря',
        ];

        const getMonthMaxDay = (month?: number, year?: number) => {
            return month ? new Date(year || 2016, month, 0).getDate() : 31;
        };

        const range = (start: number, end: number) => {
            const swap = start > end;
            const arr = [];
            for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
                arr.push(i);
            }
            return swap ? arr.reverse() : arr;
        };

        const dayOptions = (month?: number, year?: number) => range(1, getMonthMaxDay(month || 1, year || 2022)).map((value) => ({
            label: String(value),
            value: String(value),
        }));

        const monthOptions = (monthNames).map((name, index) => ({
            label: name,
            value: String(index + 1),
        }));

        const yearOptions = range(2015, 1900).map((value) => ({
            label: String(value),
            value: String(value),
        }));

        return { dayOptions, monthOptions, yearOptions };
    }

}


export { Time };
