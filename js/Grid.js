import Box from './Box.js';

export default class Grid {
    constructor(ctx, display, rows, cols, carryOver = 0) {
        this.display = display;
        this.ctx = ctx;
        this.rows = rows;
        this.cols = cols;
        this.carryOver = carryOver;
        this.grid = [];
        this.margin = 10;
        let width = this.display.width;
        let height = this.display.height;
        this.offset = 20;
        this.rowBoxWidth = Math.floor(this.width / this.cols) - this.cols - this.cols * this.offset;
        this.colBoxHeight = Math.floor(this.height / this.rows) - this.rows - this.rows * this.offset;
        this.startX = this.margin;
        this.startY = this.margin;
    }

    // get how many boxes I will need
    create = () => {
        this.ctx.clearRect(0, 0, this.display.width, this.display.height);
        let index = 0;
        let i;

        for(i = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for(let j = 0; j < this.cols; j++) {
                let box = new Box(this.ctx, index, this.startX, this.startY, this.rowBoxWidth, this.colBoxHeight);
                this.grid[i][j] = box;
                index++;
            }
            
            if (this.carryOver) {
                this.grid[i + 1] = [];
                for (let z = 0; z < this.cols; z++){
                    if (z < this.carryOver){
                        let box = new Box(this.ctx, index, this.startX, this.startY, this.rowBoxWidth, this.colBoxHeight);
                        this.grid[i + 1][z] = box;
                    } else {
                        this.grid[i + 1][z] = null;
                    }
                }
            }
            
        }
        this.draw();
        console.table(this.grid);
        return this;
    }

    draw = () => {
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                this.grid[i][j].drawBox();
                console.log(this.grid[i][j]);
                this.startX += this.rowBoxWidth;
            }
            this.startX = this.margin;
            this.startY += this.colBoxHeight;
        }
    }

    addBox = () => {
        this.carryOver++;
        if (this.carryOver > this.cols){
            this.carryOver %= this.cols;
            this.rows++;
        }
        this.create();
    }

    removeBox = () => {
        console.log('removing box...');
    }
}