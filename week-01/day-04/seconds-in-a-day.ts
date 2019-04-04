'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let TotalSecondsInADay: number = (24 * (60**2));
let PastSeconds: number = (currentHours * (60**2) + currentMinutes * 60 + 42);

console.log(TotalSecondsInADay - PastSeconds);