/**
 * Component
 *
 * @author: exode <info@exode.ru>
 */
import React from 'react';
class Component {
    /**
     * Getting all child components by their static property "cname"
     * grouped by their name (if there are several, then the latter overrides)
     * @param {React.ReactNode} children
     * @returns {{[p: string]: any}}
     */
    static getNamedChildren(children) {
        const result = {};
        React.Children.forEach(children, (child) => {
            const element = child;
            const type = element.type;
            const name = type?.cname;
            if (!name)
                return;
            result[name] = element;
        });
        return result;
    }
}
export { Component };
