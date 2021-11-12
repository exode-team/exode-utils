/**
 * Scroll
 *
 * @author: exode <hello@exode.ru>
 */

class Scroll {

    /**
     * Current scroll position of the window
     * @returns {number}
     */
    static get scrollTop() {
        return window.scrollY;
    }

    /**
     * Scroll window to the specified height
     * @param {number} top
     * @param {boolean} smooth
     */
    static to(top: number = 0, smooth: boolean = false) {
        const behavior = smooth ? 'smooth' : 'auto';
        const options = { left: 0, behavior } as ScrollToOptions;

        return window.scrollTo({ top, ...options });
    }

}


export { Scroll };