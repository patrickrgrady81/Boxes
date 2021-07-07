export default class Box {
    constructor(ctx, index, x, y, width, height) {
        // debugger;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.index = index;
    }

    drawFilled = (color = "00ff00") => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    drawOutline = (color = "#FF0000") => {  
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    drawBox = () => {
        this.drawOutline();
        this.drawText();
        this.drawClose();
    }

    drawText = () => {
        // console.log("drawing text...");
    }

    drawClose = () => {
        // console.log("draw close...");
    }

    addBox = () => {
        console.log('adding a box...');
    }

    removeBox = () => {
        console.log('removing box...');
    }
}