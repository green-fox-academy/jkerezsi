'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

const star = '*';
const space = ' ';
let lineCount = 4;

let spacenumber = lineCount - 1;
let starnumber = 1;

console.log(' ');
for (let i = 0; i < lineCount; i++) {
    let Pyramidline = space.repeat(spacenumber) + star.repeat(starnumber);
    console.log(Pyramidline);
    spacenumber--;
    starnumber += 2;
}
