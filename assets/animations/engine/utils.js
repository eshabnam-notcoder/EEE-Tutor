/*==================================================
    EEE Tutor Animation Engine
    utils.js
==================================================*/

const EEEUtils = {

    /*==========================================
      MATH
    ==========================================*/

    clamp(value, min, max) {

        return Math.min(
            Math.max(value, min),
            max
        );

    },


    lerp(start, end, amount) {

        return start + (end - start) * amount;

    },


    map(value, inMin, inMax, outMin, outMax) {

        return (

            (value - inMin) *

            (outMax - outMin)

            /

            (inMax - inMin)

        ) + outMin;

    },


    round(value, decimals = 2) {

        return Number(

            value.toFixed(decimals)

        );

    },


    degreesToRadians(degrees) {

        return degrees * Math.PI / 180;

    },


    radiansToDegrees(radians) {

        return radians * 180 / Math.PI;

    },


    random(min, max) {

        return Math.random() *

            (max - min) + min;

    },


    /*==========================================
      SVG
    ==========================================*/

    createSVGElement(type) {

        return document.createElementNS(

            "http://www.w3.org/2000/svg",

            type

        );

    },


    setAttributes(element, attributes) {

        Object.keys(attributes).forEach(key => {

            element.setAttribute(

                key,

                attributes[key]

            );

        });

        return element;

    },


    distance(x1, y1, x2, y2) {

        return Math.hypot(

            x2 - x1,

            y2 - y1

        );

    },


    /*==========================================
      FORMATTING
    ==========================================*/

    formatVoltage(value) {

        return `${value.toFixed(1)} V`;

    },


    formatCurrent(value) {

        return `${value.toFixed(2)} A`;

    },


    formatResistance(value) {

        return `${value.toFixed(1)} Ω`;

    },


    formatPower(value) {

        return `${value.toFixed(1)} W`;

    },
        /*==========================================
      DOM HELPERS
    ==========================================*/

    $(selector, parent = document) {

        return parent.querySelector(selector);

    },


    $$(selector, parent = document) {

        return [...parent.querySelectorAll(selector)];

    },


    /*==========================================
      SVG PATH
    ==========================================*/

    pointOnPath(path, distance) {

        if (!path) return null;

        return path.getPointAtLength(distance);

    },


    pathLength(path) {

        if (!path) return 0;

        return path.getTotalLength();

    },


    /*==========================================
      ANIMATION
    ==========================================*/

    ease(current, target, amount = 0.15) {

        return current + (target - current) * amount;

    },


    /*==========================================
      TIMING
    ==========================================*/

    debounce(callback, delay = 250) {

        let timer;

        return (...args) => {

            clearTimeout(timer);

            timer = setTimeout(() => {

                callback(...args);

            }, delay);

        };

    },


    throttle(callback, delay = 100) {

        let waiting = false;

        return (...args) => {

            if (waiting) return;

            waiting = true;

            callback(...args);

            setTimeout(() => {

                waiting = false;

            }, delay);

        };

    },


    /*==========================================
      ID GENERATOR
    ==========================================*/

    uuid(prefix = "eee") {

        return `${prefix}-${Math.random()
            .toString(36)
            .substring(2, 10)}`;

    },


    /*==========================================
      READY
    ==========================================*/

    ready(callback) {

        if (document.readyState === "loading") {

            document.addEventListener(
                "DOMContentLoaded",
                callback
            );

        } else {

            callback();

        }

    }

};


/*==================================================
  GLOBAL EXPORT
==================================================*/

window.EEEUtils = EEEUtils;