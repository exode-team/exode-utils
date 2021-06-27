export class Component {
    /**
     * Getting all child components by their static property "cname"
     * grouped by their name (if there are several, then the latter overrides)
     * @param {React.ReactNode} children
     * @returns {{[p: string]: any}}
     */
    static getNamedChildren(children: React.ReactNode): {
        [p: string]: any;
    };
}
import React from "react";
