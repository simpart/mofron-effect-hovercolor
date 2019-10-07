/**
 * @file mofron-effect-hovercolor/index.js
 * @brief hover color effect for mofron
 * @author simpart
 */
const mf = require('mofron');
const Hover = require('mofron-event-hover');

mf.effect.HoverColor = class extends mf.Effect {
    /**
     * effect initialize
     * 
     * @param (mixed) color: main color at the hover-in
     *                object: effect option
     * @param (color) main color at the hover-out
     * @type private
     */
    constructor (po,p2) {
        try {
            super();
            this.name('HoverColor');
            this.eid(-1);
	    this.prmMap("mainColor");
	    this.prmOpt((undefined !== p2) ? [po,p2] : po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * target component
     * 
     * @param (component) target component
     * @return (component) target component
     * @type private
     */
    component (prm) {
        try {
	    if (undefined !== prm) {
                let hov_evt = (hv1,hv2,hv3) => {
                    try {
		        hv3.hoverSts(hv2);
                        hv3.component().execEffect(hv3.eid());
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
                prm.event(new Hover([hov_evt,this]));
	    }
            return super.component(prm);
	} catch (e) {
	    console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * change color at the hover event
     * 
     * @param (component) effect target component
     * @type private
     */
    contents (cmp) {
        try {
	    if (null !== this.mainColor()) {
                cmp.mainColor(
		    (true === this.hoverSts()) ? this.mainColor()[0] : this.mainColor()[1]
		);
	    }
            
	    if (null !== this.baseColor()) {
                cmp.baseColor(
                    (true === this.hoverSts()) ? this.baseColor()[0] : this.baseColor()[1]
		);
	    }

	    if (null !== this.accentColor()) {
                cmp.accentColor(
		    (true === this.hoverSts()) ? this.accentColor()[0] : this.accentColor()[1]
	        );
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * changing the main color at the hover effect
     * 
     * @param (color) hover in color
     * @param (color) hover out color
     * @return (array) changing color [hover in color, hover out color]
     * @type parameter
     */
    mainColor (h_in,h_out) {
        try {
            return this.member(
	        'mainColor',
	        'object',
                (undefined === h_in) ? undefined : [h_in,h_out]
            );
	} catch (e) {
	    console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * changing the base color at the hover effect
     * 
     * @param (color) hover in color
     * @param (color) hover out color
     * @return (array) changing color [hover in color, hover out color]
     * @type parameter
     */
    baseColor (h_in,h_out) {
        try {
            return this.member(
	        'baseColor',
                'object',
		(undefined === h_in) ? undefined : [h_in,h_out]
            );
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * changing the accent color at the hover effect
     * 
     * @param (color) hover in color
     * @param (color) hover out color
     * @return (array) changing color [hover in color, hover out color]
     * @type parameter
     */
    accentColor (h_in,h_out) {
        try {
            return this.member(
	        'accentColor',
		'object',
		(undefined === h_in) ? undefined : [h_in,h_out]
            );
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }

    /**
     * hover status
     * 
     * @param (boolean) hover status
     * @return (boolean) true: hover in
     *                   false: hover out
     * @type private
     */
    hoverSts (prm) {
        try {
            return this.member("hoverSts", "boolean", prm);
	} catch (e) {
	    console.error(e.stack);
	    throw e;
	}
    }
}
module.exports = mf.effect.HoverColor;
/* end of file */
