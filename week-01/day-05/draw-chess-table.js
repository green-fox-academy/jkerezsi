'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let tablesize = 4;
let space = ' ';
const four = 4;
const percent = ' %';

console.log(' ');
for(let i = 0; i < tablesize; i++) {
    let chess = percent.repeat(four);
    console.log(chess);
    let chess2 = space + percent.repeat(four);
    console.log(chess2);
}