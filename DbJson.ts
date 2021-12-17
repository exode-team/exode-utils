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

        return select.join(' ');
    }

    static where(field: string, key: string, value: any) {
        return [
            `WHERE ${field}::jsonb @> '{"${key}": ":${key}"}'`,
            { [key]: value },
        ];
    }
}


export { DbJson };
