/**
 * Component
 *
 * @author: exode <info@exode.ru>
 */

import React, { ReactElement } from 'react';

import { SimpleObject } from '../../types';


type NamedChildrenProps = { cname: string }


class Component {

    /**
     * Getting all child components by their static property "cname"
     * grouped by their name (if there are several, then the latter overrides)
     * @param {React.ReactNode} children
     * @returns {{[p: string]: any}}
     */
    public static getNamedChildren(children: React.ReactNode) {
        const result: SimpleObject = {};

        React.Children.forEach(children, (child: any) => {
            const element = child as ReactElement;
            const type = element.type as unknown as NamedChildrenProps;
            const name = type?.cname;

            if (!name) return;

            result[name] = element;
        });

        return result;
    }

}


export { Component };