/*==================================================
    EEE Tutor Animation Engine
    meter.js
==================================================*/

class MeterModule {

    constructor(options = {}) {

        this.parent = null;

        this.group = null;

        this.needle = null;

        this.valueText = null;

        this.unitText = null;

        this.titleText = null;

        this.value = options.value ?? 0;

        this.min = options.min ?? 0;

        this.max = options.max ?? 10;

        this.unit = options.unit ?? "A";

        this.title = options.title ?? "Meter";

        this.position = options.position || {

            x:320,

            y:120

        };

        this.radius = options.radius ?? 55;

    }

    /*==========================================
      INIT
    ==========================================*/

    init(engine){

        this.parent = engine;

        this.group = document.getElementById("ammeterGroup");

        this.create();

        this.setValue(this.value);

    }

    /*==========================================
      CREATE SVG
    ==========================================*/

    create(){

        if(!this.group) return;

        const x=this.position.x;

        const y=this.position.y;

        const r=this.radius;

        this.group.innerHTML=`

<g class="meter">

<circle
cx="${x}"
cy="${y}"
r="${r}"
class="ammeter svg-shadow"
/>

<circle
cx="${x}"
cy="${y}"
r="${r-8}"
fill="#FFFFFF"
/>

<path

d="
M ${x-r+10} ${y}
A ${r-10} ${r-10} 0 0 1 ${x+r-10} ${y}
"

class="meter-scale"

/>

<line

id="meterNeedle"

x1="${x}"

y1="${y}"

x2="${x}"

y2="${y-r+18}"

stroke="#EF4444"

stroke-width="4"

stroke-linecap="round"

class="meter-needle"

/>

<circle

cx="${x}"

cy="${y}"

r="6"

fill="#334155"

/>

<text

x="${x}"

y="${y-r-18}"

text-anchor="middle"

class="svg-title"

id="meterTitle">

${this.title}

</text>

<text

x="${x}"

y="${y+r+26}"

text-anchor="middle"

class="svg-value"

id="meterValue">

0 ${this.unit}

</text>

</g>

`;

        this.needle=document.getElementById("meterNeedle");

        this.valueText=document.getElementById("meterValue");

        this.titleText=document.getElementById("meterTitle");

    }
        /*==========================================
      PUBLIC API
    ==========================================*/

    setValue(value) {

        this.value = Math.max(
            this.min,
            Math.min(value, this.max)
        );

        this.updateMeter();

    }


    getValue() {

        return this.value;

    }


    setTitle(title) {

        this.title = title;

        if (this.titleText) {

            this.titleText.textContent = title;

        }

    }


    setUnit(unit) {

        this.unit = unit;

        this.updateMeter();

    }


    /*==========================================
      UPDATE
    ==========================================*/

    updateMeter() {

        if (!this.needle || !this.valueText) return;

        const percent =
            (this.value - this.min) /
            (this.max - this.min);

        // Sweep from -90° (left) to +90° (right)
        const angle = -90 + (percent * 180);

        this.needle.setAttribute(
            "transform",
            `rotate(${angle} ${this.position.x} ${this.position.y})`
        );

        const decimals =
            this.max <= 10 ? 2 : 1;

        this.valueText.textContent =
            `${this.value.toFixed(decimals)} ${this.unit}`;
    }


    /*==========================================
      ENGINE CALLBACKS
    ==========================================*/

    update(engine) {

        // Reserved for future enhancements
        // e.g. damping, inertia, oscillation

    }


    render(engine) {

        // Reserved for future rendering logic

    }


    /*==========================================
      CLEANUP
    ==========================================*/

    destroy() {

        if (this.group) {

            this.group.innerHTML = "";

        }

        this.needle = null;
        this.valueText = null;
        this.titleText = null;

    }

}


/*==================================================
  FACTORY
==================================================*/

window.createMeter = function (options = {}) {

    return new MeterModule(options);

};