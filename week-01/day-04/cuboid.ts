'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number = 10;
let b: number = 10;
let c: number = 10;

let Surface: number = 2*(a * b + a * c + b * c);
console.log('Surface Area ' + Surface);

let Volume: number = a * b * c;
console.log('Volume ' + Volume);