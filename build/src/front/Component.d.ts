/**
 * Component
 *
 * @author: exode <info@exode.ru>
 */
import React from 'react';
import { SimpleObject } from '../../types';
declare class Component {
    /**
     * Getting all child components by their static property "cname"
     * grouped by their name (if there are several, then the latter overrides)
     * @param {React.ReactNode} children
     * @returns {{[p: string]: any}}
     */
    static getNamedChildren(children: React.ReactNode): SimpleObject;
}
export { Component };
