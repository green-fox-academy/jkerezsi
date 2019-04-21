'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


let xline = 0;
let yline = 0;

function drawline(xline,yline) {
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(xline,yline);
ctx.lineTo(200,200);
ctx.stroke();
}

for(let i: number = 0; i < 400; i += 20) {
    drawline(i,0);
}

for(let i: number = 0; i < 400; i += 20) {
    drawline(400,i);
}

for(let i: number = 0; i < 400; i += 20) {
    drawline(0,i);
}


for(let i: number = 0; i <= 400; i += 20) {
    drawline(i,400);
}