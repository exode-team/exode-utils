/**
 * DbJson util
 *
 * @author: exode <hello@exode.ru>
 */

class DbJson {

    static select<T>(field: keyof T, ...keys: string[]) {
        const select: string[] = [];

        keys?.forEach((key) => {
            select.push(`(${field} -> '${key}') AS "${key}"`);
        });

        return select.join(', ');
    }

    static where<T>(field: keyof T, key: string, value: any, ...tree: string[]) {
        const path = tree.length
            ? [ '', ...tree.map((i) => `'${i}'`) ].join('->')
            : '::jsonb';

        return [
            `${field}${path} @> :${key}`,
            { [key]: tree.length ? JSON.stringify(value) : { [key]: value } },
        ] as [ string, {} ];
    }

}


export { DbJson };
