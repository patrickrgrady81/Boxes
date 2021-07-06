import Canvas from './Canvas.js'
import Box from './Box.js'

const getCoordinates = () => {
    return [window.innerWidth, window.innerHeight];
}

let [ctx, display] = new Canvas().create();
let box = new Box(ctx, 30, 40, 40, 50).drawOutline();


window.onresize = () => {
    console.log(getCoordinates());
}

// get how many boxes I will need
let rows = 5;
let cols = 5;
let carryover = 1;

// create grid of boxes based on input