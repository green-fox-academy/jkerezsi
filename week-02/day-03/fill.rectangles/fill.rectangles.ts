'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// // DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

// let x: number = 50;
// let y: number = 80;
// let z: number = 80;
// let t: number = 80;

// let colors = ["red", "blue", "yellow", "green"];

// function recs(x,y,z,t) {
// ctx.beginPath();
// ctx.fillRect(x,y,z,t);
// ctx.fill();
// }


// for( let i = 0; i < 4; i+= 1) {
//     ctx.fillStyle = colors[i];
//     recs(x + i * 30, y + i * 30, z + i * 30, t + i * 30);
// }

//OR


function x(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let color = ["blue", "yellow", "green", "violet"];

for( let i = 0; i < 4; i+= 1) {
    ctx.fillStyle = color[i];
    ctx.beginPath();
    ctx.fillRect( x(600), x(400), x(240), x(200));
    ctx.fill();
}