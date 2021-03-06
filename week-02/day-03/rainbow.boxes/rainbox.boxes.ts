'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let x = 85;
let color = ["red", "orange", "yellow", "green", "blue","indigo", "violet"];

function rainbow(x,color) {
    ctx.fillRect(300 - (x / 2), 300 - (x / 2),x,x);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

for(let i = 8; i > 0; i--) {
    rainbow(x * i, color[i -2]);
}