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
     * Toggle scrollable property on the body element
     * @param {boolean} freeze
     */
    static freezeScroll(freeze: boolean) {
        if (freeze) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
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