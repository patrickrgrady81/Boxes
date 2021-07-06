import Canvas from './Canvas.js'
import Box from './Box.js'

let [ctx, display] = new Canvas().create();

// get how many boxes I will need
let width = display.width;
let height = display.height;
let margin = 10;
let rows = 3;
let cols = 5;
let rowBoxWidth = Math.floor((width / cols) - (margin * 2));
let colBoxHeight = Math.floor((height / rows) - (margin * 2));
let carryover = 1;
let startX = margin;
let startY = margin;
let box;


// create grid of boxes based on input
let grid = new Array(rows).fill(0).map(()=> new Array(cols).fill(0));

for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
        box = new Box(ctx, startX, startY, rowBoxWidth, colBoxHeight).drawBox();
        startX += rowBoxWidth;
    }
    startX = margin;
    startY += colBoxHeight;
}