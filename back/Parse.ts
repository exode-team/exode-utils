/**
 * Parse util
 *
 * @author: exode <info@exode.ru>
 */

class Parse {

    /**
     * Parse method params
     * @param method
     * @returns {{}}
     */
    public static methodParams(method) {
        const replaces = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

        const methodCode = method.toString();

        const start = methodCode.indexOf('(') + 1;
        const finish = methodCode.indexOf(')');

        const brackets = methodCode.slice(start, finish).replace(replaces, '');
        const parsed = brackets.match(/([^\s,]+)/g) || [];

        const parse = (value) => {
            const numTypes = [ 'number', 'string' ];
            const isNumeric = numTypes.includes(typeof value) && !isNaN(Number(value));

            value = isNumeric
                ? Number(value)
                : (String(value).includes(`'`) ? value.replace(/'/g, '') : value);

            return value;
        };

        const params = {};

        for (let i = 0; i < parsed.length; i++) {
            const param = parsed[i];
            const nextIsEqual = parsed[i + 1] === '=';

            params[param] = nextIsEqual ? parse(parsed[i + 2]) : undefined;
            i = nextIsEqual ? i + 2 : i;
        }

        return params;
    }

}


export { Parse };