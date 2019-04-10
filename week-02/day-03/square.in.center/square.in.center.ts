'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

canvas.width = 600;
canvas.height = 400;

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.fillRect(295,195,10,10);
ctx.fill();