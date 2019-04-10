'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

let x: number = 50;
let y: number = 50;

function drawtocenter(x,y) {
    ctx.moveTo(x, y);
    ctx.lineTo(300,200);
    ctx.stroke();
}
 for( let i = 120; i < 480; i += 120) {
        drawtocenter(x + i, y + i);
 }
