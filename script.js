function init() {
    draw();
}

window.onload = init();

function draw() {
    const canvas = document.getElementById("my-house");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawSun(50, 50, ctx);

    drawHouse(ctx);

    drawAppleTree(100, 320, ctx);
    drawAppleTree(480, 320, ctx);
    drawAppleTree(620, 320, ctx);
}

function drawSun(x, y, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#FFFF00';
    ctx.stroke();
}

function drawHouse(ctx) {
    ctx.fillStyle = 'brown';
    ctx.fillRect(200, 200, 200, 200);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(300, 100);
    ctx.lineTo(400, 200);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#8B4513'; 
    ctx.fillRect(275, 300, 50, 100);
    drawWindow(225, 250, ctx);
    drawWindow(325, 250, ctx);
}

function drawWindow(x, y, ctx) {
    ctx.fillStyle = 'rgba(173, 216, 230, 0.7)'; 
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = 'black';
    ctx.fillRect(x + 20, y, 2, 50);
    ctx.fillRect(x, y + 20, 50, 2);
}

function drawAppleTree(x, y, ctx) {
    ctx.fillStyle = 'brown';
    ctx.fillRect(x + 5, y, 20, 80);
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(x + 25, y - 30, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x - 5, y - 30, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 25, y - 60, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x - 5, y - 60, 40, 0, 2 * Math.PI);
    ctx.fill();
}

