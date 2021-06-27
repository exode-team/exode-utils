/**
 * Scroll
 *
 * @author: exode <info@exode.ru>
 */
declare class Scroll {
    /**
     * Current scroll position of the window
     * @returns {number}
     */
    static get scrollTop(): number;
    /**
     * Scroll window to the specified height
     * @param {number} top
     * @param {boolean} smooth
     */
    static to(top?: number, smooth?: boolean): void;
}
export { Scroll };
