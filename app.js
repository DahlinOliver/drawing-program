const clearBtn = document.querySelector('#clear');
const undoBtn = document.querySelector('#undo');
const eraseBtn = document.querySelector('#erase');
const brushBtn = document.querySelector('#brush');
const fillBtn = document.querySelector('fill');
const paletteBtn = document.querySelector('#palette');
const eyedropperBtn = document.querySelector('#eyedropper');

const canvas = document.querySelector('#canvas');
const canvasArea = document.querySelector('.canvas-area');
const ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

clearBtn.addEventListener('click', clearCanvas);

function start(e) {
    isDrawing = true;
    draw(e);
}

function draw({ clientX: x, clientY: y }) {
    var BB = canvas.getBoundingClientRect();
    var offsetX = BB.left;
    var offsetY = BB.top;
    var mouseX = parseInt(x - offsetX);
    var mouseY = parseInt(y - offsetY);
    if (!isDrawing) return;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#000';

    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);

    //console.log(x, y);
}

function stop() {
    isDrawing = false;
    ctx.beginPath();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    var positionInfo = canvasArea.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    canvas.width = width;
    canvas.height = height;
}
resizeCanvas();