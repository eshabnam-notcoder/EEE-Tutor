/*==================================================
    EEE Tutor
    Ohm's Law Animation
==================================================*/

class OhmsLawAnimation {

    constructor() {

        this.engine = window.EEEEngine;

        /*=============================
          CONTROLS
        =============================*/

        this.voltageSlider =
            document.getElementById("voltageSlider");

        this.resistanceSlider =
            document.getElementById("resistanceSlider");

        


        /*=============================
          DISPLAY VALUES
        =============================*/

        this.voltageValue =
            document.getElementById("voltageValue");

        this.currentValue =
            document.getElementById("currentValue");

        this.resistanceValue =
            document.getElementById("resistanceValue");

        this.powerValue =
            document.getElementById("powerValue");

        this.observation =
            document.getElementById("observationText");


        /*=============================
          DEFAULT VALUES
        =============================*/

        this.voltage = 10;

        this.resistance = 50;

        this.current = 0.2;

        this.power = 2;


        /*=============================
          ENGINE MODULES
        =============================*/

        this.battery = createBattery({

            voltage: this.voltage,

            maxVoltage: 20,

            position: {

                x:120,

                y:260

            }

        });

        this.ammeter = createMeter({

            title:"Current",

            unit:"A",

            min:0,

            max:2,

            position:{

                x:450,

                y:390

            }

        });

        this.particles = createParticles({

            speed:0.25,

            count:24

        });

        this.graph = createGraph({

            xTitle:"Voltage (V)",

            yTitle:"Current (A)"

        });

    }


    /*==========================================
      INITIALIZE
    ==========================================*/

    init() {

        this.engine.register(this.battery,30);

        this.engine.register(this.ammeter,40);

        this.engine.register(this.graph,50);

        this.engine.register(this.particles,60);

        this.attachEvents();

        this.calculate();

        this.engine.start();

    }
        /*==========================================
      EVENTS
    ==========================================*/

    attachEvents() {

        this.voltageSlider?.addEventListener("input", () => {

            this.voltage = Number(this.voltageSlider.value);

            this.calculate();

        });

        this.resistanceSlider?.addEventListener("input", () => {

            this.resistance = Math.max(
                0.1,
                Number(this.resistanceSlider.value)
            );

            this.calculate();

        });

    }


    /*==========================================
      CALCULATIONS
    ==========================================*/

    calculate() {

        /* Ohm's Law */

        this.current = this.voltage / this.resistance;

        this.power = this.voltage * this.current;


        /*==============================
          UPDATE UI
        ==============================*/

        if (this.voltageValue)
            this.voltageValue.textContent =
                EEEUtils.formatVoltage(this.voltage);

        if (this.currentValue)
            this.currentValue.textContent =
                EEEUtils.formatCurrent(this.current);

        if (this.resistanceValue)
            this.resistanceValue.textContent =
                EEEUtils.formatResistance(this.resistance);

        if (this.powerValue)
            this.powerValue.textContent =
                EEEUtils.formatPower(this.power);


        /*==============================
          UPDATE MODULES
        ==============================*/

        this.battery.setVoltage(this.voltage);

        this.ammeter.setValue(this.current);

        /* Current controls particle speed */

        const speed =
            EEEUtils.map(
                this.current,
                0,
                2,
                0,
                0.60
            );

        this.particles.setSpeed(speed);


        /*==============================
          GRAPH
        ==============================*/

        this.graph.clear();

        for (let v = 0; v <= 20; v += 1) {

            this.graph.addPoint(
                v,
                v / this.resistance
            );

        }


        /*==============================
          OBSERVATION
        ==============================*/

        if (this.observation) {

            this.observation.innerHTML = `

<b>Voltage:</b> ${EEEUtils.formatVoltage(this.voltage)}<br><br>

<b>Resistance:</b> ${EEEUtils.formatResistance(this.resistance)}<br><br>

<b>Current:</b> ${EEEUtils.formatCurrent(this.current)}<br><br>

As voltage increases, current increases.<br>

As resistance increases, current decreases.

`;

        }

    }

}


/*==================================================
  START APPLICATION
==================================================*/

EEEUtils.ready(() => {

    const animation = new OhmsLawAnimation();

    animation.init();

});