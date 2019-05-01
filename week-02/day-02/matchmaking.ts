'use strict';

import { Z_ASCII } from "zlib";

// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];


function makingMatches(x: string[], y: string[]) {
    let matches = [];
    for (let i: number = 0; i < y.length; i++) {
        i !== undefined ? matches.push(x[i], y[i]) : matches.push("nobody");
        } 
        return matches;
    }

console.log(makingMatches(girls, boys));