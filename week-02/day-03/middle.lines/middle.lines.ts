'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

canvas.height = 300;
canvas.width = 300;

ctx.moveTo(0,150);
ctx.lineTo(300, 150);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150,0);
ctx.lineTo(150,300);
ctx.strokeStyle = 'green';
ctx.stroke();