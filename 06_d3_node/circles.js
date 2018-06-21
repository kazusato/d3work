const D3Node = require('d3-node');
const d3n = new D3Node();

const WIDTH = 720;
const HEIGHT = 500;

d3n.createSVG(WIDTH, HEIGHT)
    .selectAll("circles")
    .data([32, 57, 112, 293])
    .enter().append("circle")
    .attr("cx", () => Math.random() * WIDTH)
    .attr("cy", () => Math.random() * HEIGHT)
    .attr("r", (d) => Math.sqrt(d));
const svgStr = d3n.svgString();
console.log(svgStr);
