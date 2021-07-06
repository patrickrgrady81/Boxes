import Box from './Box.js';

export default class Grid {
    constructor(ctx, display, rows, cols) {
        this.display = display;
        this.ctx = ctx;
        this.rows = rows;
        this.cols = cols;
    }

    // get how many boxes I will need
    create = () => {
        console.log('creating new grid...');
        this.ctx.clearRect(0, 0, this.display.width, this.display.height);
        let width = this.display.width;
        let height = this.display.height;
        let margin = 10;
        // console.log(this.rows, this.cols);
        let rowBoxWidth = Math.floor(width / this.cols) - this.cols - 10;
        let colBoxHeight = Math.floor(height / this.rows) - this.rows - 10;
        let carryover = 1;
        let startX = margin;
        let startY = margin;
        let box;
        let index = 0;


        // create grid of boxes based on input
        let grid = new Array(this.rows).fill(0).map(()=> new Array(this.cols).fill(0));

        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                box = new Box(this.ctx, index, startX, startY, rowBoxWidth, colBoxHeight).drawBox();
                if (box){
                    box.addEventListener('click', (e) => {
                        console.log(e.target + 'clicked...');
                    });
                }
                index++;
                startX += rowBoxWidth;
            }
            startX = margin;
            startY += colBoxHeight;
        }
        return this;
    }

    addBox = () => {
        console.log('adding a box...');
    }

    removeBox = () => {
        console.log('removing box...');
    }
}