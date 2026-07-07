/*==================================================
    EEE Tutor Animation Engine
    battery.js
==================================================*/

class BatteryModule {

    constructor(options = {}) {

        this.parent = null;

        this.group = null;

        this.fill = null;

        this.label = null;

        this.voltage = options.voltage || 12;

        this.maxVoltage = options.maxVoltage || 24;

        this.position = options.position || {

            x:120,

            y:260

        };

    }

    /*==========================================
      INITIALIZE
    ==========================================*/

    init(engine){

        this.parent = engine;

        this.group = document.getElementById("batteryGroup");

        this.createBattery();

        this.updateVoltage(this.voltage);

    }

    /*==========================================
      CREATE SVG
    ==========================================*/

    createBattery(){

        if(!this.group) return;

        this.group.innerHTML = `

<defs>

<linearGradient
id="batteryGradient"
x1="0%"
y1="0%"
x2="100%"
y2="0%">

<stop offset="0%" stop-color="#06B6D4"/>

<stop offset="100%" stop-color="#2563EB"/>

</linearGradient>

</defs>

<g class="battery">

<rect
class="battery-body"
x="${this.position.x}"
y="${this.position.y-45}"
width="70"
height="90"
rx="12"
/>

<rect
id="batteryFill"
class="battery-fill"
x="${this.position.x+6}"
y="${this.position.y-39}"
width="58"
height="78"
rx="8"
/>

<rect
class="battery-positive"
x="${this.position.x+70}"
y="${this.position.y-14}"
width="10"
height="28"
/>

<text

id="batteryVoltage"

x="${this.position.x+35}"

y="${this.position.y+72}"

text-anchor="middle"

class="ammeter-text">

12 V

</text>

</g>

`;

        this.fill=document.getElementById("batteryFill");

        this.label=document.getElementById("batteryVoltage");

    }
        /*==========================================
      PUBLIC API
    ==========================================*/

    setVoltage(voltage) {

        this.voltage = Math.max(
            0,
            Math.min(voltage, this.maxVoltage)
        );

        this.updateVoltage(this.voltage);

    }


    getVoltage() {

        return this.voltage;

    }


    /*==========================================
      UPDATE BATTERY
    ==========================================*/

    updateVoltage(voltage) {

        if (!this.fill || !this.label) return;

        const percent = voltage / this.maxVoltage;

        const maxHeight = 78;

        const height = Math.max(2, maxHeight * percent);

        const y = (this.position.y - 39) + (maxHeight - height);

        this.fill.setAttribute("height", height);

        this.fill.setAttribute("y", y);

        this.label.textContent = `${voltage.toFixed(1)} V`;

        // Battery state styling
        this.fill.classList.remove(
            "battery-low",
            "battery-medium",
            "battery-high"
        );

        if (percent < 0.3) {

            this.fill.classList.add("battery-low");

        } else if (percent < 0.7) {

            this.fill.classList.add("battery-medium");

        } else {

            this.fill.classList.add("battery-high");

        }

    }


    /*==========================================
      ENGINE CALLBACKS
    ==========================================*/

    update(engine) {

        // Reserved for future animations
        // Example:
        // battery charging
        // ripple effects
        // voltage fluctuations

    }


    render(engine) {

        // Reserved for future rendering work

    }


    /*==========================================
      CLEANUP
    ==========================================*/

    destroy() {

        if (this.group) {

            this.group.innerHTML = "";

        }

        this.fill = null;

        this.label = null;

    }

}


/*==================================================
  FACTORY
==================================================*/

window.createBattery = function (options = {}) {

    return new BatteryModule(options);

};