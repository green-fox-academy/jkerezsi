'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 5;
let average: number = 0;
let sum: number = 0;

for (let i = 1; i <= input; i++) {
    sum = sum + i;
    console.log(`the current iterator is ${sum} and the sum is ${sum}`);
}

average = sum / input;
console.log('Average: ' + average);