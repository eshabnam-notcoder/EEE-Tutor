/*==================================================
    EEE Tutor Animation Engine
    particles.js
==================================================*/

class ParticleModule {

    constructor(options = {}) {

        this.parent = null;

        this.group = null;

        this.path = null;

        this.particles = [];

        this.speed = options.speed ?? 0.25;

        this.count = options.count ?? 24;

        this.radius = options.radius ?? 4;

        this.color = options.color ?? "#06B6D4";

        this.pathId = options.pathId ?? "electronPath";

    }

    /*==========================================
      INITIALIZE
    ==========================================*/

    init(engine) {

        this.parent = engine;

        this.group = document.getElementById("electronLayer");

        this.path = document.getElementById(this.pathId);

        if (!this.group || !this.path) return;

        this.createParticles();

    }

    /*==========================================
      CREATE PARTICLES
    ==========================================*/

    createParticles() {

        this.group.innerHTML = "";

        this.particles = [];

        const totalLength = this.path.getTotalLength();

        for (let i = 0; i < this.count; i++) {

            const circle = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
            );

            circle.setAttribute("r", this.radius);

            circle.setAttribute("class", "electron");

            circle.setAttribute("fill", this.color);

            this.group.appendChild(circle);

            this.particles.push({

                element: circle,

                offset: (i / this.count) * totalLength

            });

        }

    }

    /*==========================================
      PUBLIC API
    ==========================================*/

    setSpeed(speed) {

        this.speed = Math.max(0, speed);

    }

    getSpeed() {

        return this.speed;

    }

    setCount(count) {

        this.count = Math.max(1, count);

        this.createParticles();

    }

    getCount() {

        return this.count;

    }
        /*==========================================
      UPDATE
    ==========================================*/

    update(engine) {

        if (!this.path || this.particles.length === 0) return;

        const totalLength = this.path.getTotalLength();

        this.particles.forEach(particle => {

            // Advance particle
            particle.offset +=
                this.speed *
                totalLength *
                engine.deltaTime;

            // Loop around the path
            if (particle.offset > totalLength) {

                particle.offset -= totalLength;

            }

            const point =
                this.path.getPointAtLength(
                    particle.offset
                );

            particle.element.setAttribute(
                "cx",
                point.x
            );

            particle.element.setAttribute(
                "cy",
                point.y
            );

        });

    }


    /*==========================================
      RENDER
    ==========================================*/

    render(engine) {

        // Reserved for future visual effects
        // e.g. flicker, glow intensity, polarity indication

    }


    /*==========================================
      CLEANUP
    ==========================================*/

    destroy() {

        if (this.group) {

            this.group.innerHTML = "";

        }

        this.particles = [];

        this.path = null;

    }

}


/*==================================================
  FACTORY
==================================================*/

window.createParticles = function (options = {}) {

    return new ParticleModule(options);

};