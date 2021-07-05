const createBox = () => {
    ctx.beginPath();
    ctx.strokeRect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    // ctx.fill();
    ctx.closePath();
}



let canvas = document.getElementsByClassName("canvas")[0];
let ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let box = new Box(ctx, 20, 40, 50, 50);
box.drawFilled();