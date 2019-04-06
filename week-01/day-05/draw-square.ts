'use strict';

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 4;
const percent: string = '%%%%%%';
const middle: string = '%    %';

console.log(' ');
console.log(percent);
for(let i: number = 1; i < lineCount; i++) {
    console.log(middle);
}
console.log(percent);