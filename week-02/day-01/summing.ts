// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

'use strict';

let number1: number = 4;
let total: number = 0;

function sum(number1) {
    for(let i = 1; i <= number1; i++) {
        total = total + i;
    }
    return total;
}

console.log(sum(number1));