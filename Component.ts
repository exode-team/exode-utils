/**
 * Component
 *
 * @author: exode <info@exode.ru>
 */

import React, { ReactElement } from 'react';


interface NamedChildrenProps {
    cname: string;
}


class Component {

    /**
     * Getting all child components by their static property "cname"
     * grouped by their name (if there are several, then the latter overrides)
     * @param {React.ReactNode} children
     * @returns {{[p: string]: any}}
     */
    static getNamedChildren(children: React.ReactNode) {
        const result: { [key: string]: ReactElement | JSX.Element } = {};

        React.Children.forEach(children, (child: any) => {
            const element = child as ReactElement;
            const type = element.type as unknown as NamedChildrenProps;
            const name = type?.cname;

            if (!name) {
                return;
            }

            result[name] = element;
        });

        return result;
    }

}


export { Component };