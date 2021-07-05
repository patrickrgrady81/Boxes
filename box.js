class Box {
    constructor(ctx, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawFilled = () => {
        ctx.fillStyle = "#00ff00";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    drawOutline = () => {  
        ctx.strokeStyle = "#FF0000";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}