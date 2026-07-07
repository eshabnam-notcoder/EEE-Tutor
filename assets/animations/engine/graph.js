/*==================================================
    EEE Tutor Animation Engine
    graph.js
==================================================*/

class GraphModule {

    constructor(options = {}) {

        this.parent = null;

        this.container = null;

        this.svg = null;

        this.path = null;

        this.point = null;

        this.xLabel = null;

        this.yLabel = null;

        this.points = [];

        this.maxPoints = options.maxPoints ?? 60;

        this.width = options.width ?? 320;

        this.height = options.height ?? 220;

        this.padding = 35;

        this.xTitle = options.xTitle ?? "X";

        this.yTitle = options.yTitle ?? "Y";

    }

    /*==========================================
      INIT
    ==========================================*/

    init(engine) {

        this.parent = engine;

        this.container =
            document.getElementById("graphContainer");

        if (!this.container) return;

        this.create();

    }

    /*==========================================
      CREATE GRAPH
    ==========================================*/

    create() {

        this.container.innerHTML = `

<svg
viewBox="0 0 ${this.width} ${this.height}"
width="100%"
height="100%"
>

<line
x1="${this.padding}"
y1="${this.height-this.padding}"
x2="${this.width-this.padding}"
y2="${this.height-this.padding}"
stroke="#CBD5E1"
stroke-width="2"
/>

<line
x1="${this.padding}"
y1="${this.padding}"
x2="${this.padding}"
y2="${this.height-this.padding}"
stroke="#CBD5E1"
stroke-width="2"
/>

<path
id="graphLine"
class="graph-line"
/>

<circle
id="graphPoint"
r="6"
class="graph-point"
fill="#2563EB"
/>

<text
id="graphXLabel"
x="${this.width/2}"
y="${this.height-8}"
text-anchor="middle"
class="svg-label">

${this.xTitle}

</text>

<text
id="graphYLabel"
x="18"
y="${this.height/2}"
transform="rotate(-90 18 ${this.height/2})"
text-anchor="middle"
class="svg-label">

${this.yTitle}

</text>

</svg>

`;

        this.svg =
            this.container.querySelector("svg");

        this.path =
            document.getElementById("graphLine");

        this.point =
            document.getElementById("graphPoint");

    }

    /*==========================================
      PUBLIC API
    ==========================================*/

    addPoint(x, y) {

        this.points.push({ x, y });

        if (this.points.length > this.maxPoints) {

            this.points.shift();

        }

    }

    clear() {

        this.points = [];

    }
        /*==========================================
      UPDATE GRAPH
    ==========================================*/

    updateGraph() {

        if (!this.path || this.points.length === 0) return;

        const maxX = Math.max(...this.points.map(p => p.x), 1);
        const maxY = Math.max(...this.points.map(p => p.y), 1);

        const graphWidth = this.width - (this.padding * 2);
        const graphHeight = this.height - (this.padding * 2);

        let d = "";

        this.points.forEach((p, index) => {

            const x =
                this.padding +
                (p.x / maxX) * graphWidth;

            const y =
                this.height -
                this.padding -
                (p.y / maxY) * graphHeight;

            if (index === 0) {

                d += `M ${x} ${y}`;

            } else {

                d += ` L ${x} ${y}`;

            }

        });

        this.path.setAttribute("d", d);

        // Move the highlighted point
        const last = this.points[this.points.length - 1];

        const px =
            this.padding +
            (last.x / maxX) * graphWidth;

        const py =
            this.height -
            this.padding -
            (last.y / maxY) * graphHeight;

        this.point.setAttribute("cx", px);
        this.point.setAttribute("cy", py);

    }


    /*==========================================
      ENGINE CALLBACKS
    ==========================================*/

    update(engine) {

        this.updateGraph();

    }


    render(engine) {

        // Reserved for future enhancements:
        // - Grid lines
        // - Area fill
        // - Animated drawing
        // - Tooltips
        // - Multiple graph series

    }


    /*==========================================
      CLEANUP
    ==========================================*/

    destroy() {

        if (this.container) {

            this.container.innerHTML = "";

        }

        this.points = [];

        this.path = null;

        this.point = null;

        this.svg = null;

    }

}


/*==================================================
  FACTORY
==================================================*/

window.createGraph = function (options = {}) {

    return new GraphModule(options);

};