'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

let x: number = 50;
let y: number = 50;

function drawing(x, y) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

for(let i = 50; i < 160;i += 50) {
    drawing(x + i, y + i)
}