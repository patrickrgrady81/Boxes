export default class Box {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawFilled = (color = "00ff00") => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    drawOutline = (color = "#FF0000") => {  
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}