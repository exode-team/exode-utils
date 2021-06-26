"use strict";
/**
 * Component
 *
 * @author: exode <info@exode.ru>
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var Component = /** @class */ (function () {
    function Component() {
    }
    /**
     * Getting all child components by their static property "cname"
     * grouped by their name (if there are several, then the latter overrides)
     * @param {React.ReactNode} children
     * @returns {{[p: string]: any}}
     */
    Component.getNamedChildren = function (children) {
        var result = {};
        react_1.default.Children.forEach(children, function (child) {
            var element = child;
            var type = element.type;
            var name = type === null || type === void 0 ? void 0 : type.cname;
            if (!name)
                return;
            result[name] = element;
        });
        return result;
    };
    return Component;
}());
exports.Component = Component;
