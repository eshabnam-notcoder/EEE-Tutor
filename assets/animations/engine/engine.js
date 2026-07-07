/*==================================================
    EEE Tutor Animation Engine
    engine.js
==================================================*/

class AnimationEngine {

    constructor(options = {}) {

        this.container = options.container || document;

        this.svg = options.svg || null;

        this.modules = [];

        this.running = false;

        this.lastTime = 0;

        this.deltaTime = 0;

        this.elapsedTime = 0;

        this.frame = 0;

        this.fps = 60;

        this.width = 0;

        this.height = 0;

        this.events = {};

        this._boundLoop = this.loop.bind(this);

        this.handleResize();

        window.addEventListener(
            "resize",
            () => this.handleResize()
        );

    }


    /*==========================================
      MODULE REGISTRATION
    ==========================================*/
register(module, priority = 100) {

    if (!module) return;

    module.priority = priority;

    if (typeof module.init === "function") {

        module.init(this);

    }

    this.modules.push(module);

    this.modules.sort((a, b) => a.priority - b.priority);

    return module;

}


    unregister(module) {

        this.modules = this.modules.filter(
            m => m !== module
        );

    }


    clearModules() {

        this.modules.length = 0;

    }


    /*==========================================
      EVENTS
    ==========================================*/

    on(event, callback) {

        if (!this.events[event]) {

            this.events[event] = [];

        }

        this.events[event].push(callback);

    }


    emit(event, data = {}) {

        if (!this.events[event]) return;

        this.events[event].forEach(fn => {

            fn(data);

        });

    }


    /*==========================================
      START / STOP
    ==========================================*/

    start() {

        if (this.running) return;

        this.running = true;

        this.lastTime = performance.now();

        this.emit("start");

        requestAnimationFrame(this._boundLoop);

    }


    stop() {

        this.running = false;

        this.emit("stop");

    }


    toggle() {

        this.running
            ? this.stop()
            : this.start();

    }


    reset() {

        this.elapsedTime = 0;

        this.frame = 0;

        this.lastTime = performance.now();

        this.emit("reset");

    }
        /*==========================================
      MAIN ANIMATION LOOP
    ==========================================*/

    loop(time) {

        if (!this.running) return;

        this.deltaTime = (time - this.lastTime) / 1000;

        this.lastTime = time;

        this.elapsedTime += this.deltaTime;

        this.frame++;

        // Prevent huge jumps after inactive tabs
        if (this.deltaTime > 0.1) {

            this.deltaTime = 0.016;

        }

        // Update every registered module
        this.modules.forEach(module => {

            if (typeof module.update === "function") {

                module.update(this);

            }

        });

        // Render every registered module
        this.modules.forEach(module => {

            if (typeof module.render === "function") {

                module.render(this);

            }

        });

        this.emit("frame", {

            deltaTime: this.deltaTime,

            elapsedTime: this.elapsedTime,

            frame: this.frame

        });

        requestAnimationFrame(this._boundLoop);

    }


    /*==========================================
      RESIZE
    ==========================================*/

    handleResize() {

        if (this.svg) {

            const rect = this.svg.getBoundingClientRect();

            this.width = rect.width;

            this.height = rect.height;

        } else {

            this.width = window.innerWidth;

            this.height = window.innerHeight;

        }

        this.emit("resize", {

            width: this.width,

            height: this.height

        });

    }


    /*==========================================
      DESTROY
    ==========================================*/

    destroy() {

        this.stop();

        this.modules.forEach(module => {

            if (typeof module.destroy === "function") {

                module.destroy(this);

            }

        });

        this.clearModules();

        this.events = {};

    }

}


/*==================================================
  ENGINE FACTORY
==================================================*/

window.createEEEEngine = function (options = {}) {

    return new AnimationEngine(options);

};


/*==================================================
  AUTO INITIALIZATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const svg = document.getElementById("circuitSVG");

    window.EEEEngine = createEEEEngine({

        container: document,

        svg: svg

    });

});