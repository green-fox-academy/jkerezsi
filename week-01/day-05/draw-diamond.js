'use strict';


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

const star = '*';
const space = ' ';
let lineCounttop = 4;
let starnumber = 1;
let spacenumber = lineCounttop - 1;

for(let i = 1; i < lineCounttop; i++) {
    let Pyramidline = space.repeat(spacenumber) + star.repeat(starnumber);
    spacenumber --;
    starnumber +=2;
}

