'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "black";
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


let x = 4;
let y = 6;

for (let i: number = 300; i < 600; i++){
    ctx.fillStyle = "lightgrey";
    ctx.beginPath();
ctx.fillRect(Math.floor(Math.random() * i), Math.floor(Math.random() * i), 2, 2);
}
