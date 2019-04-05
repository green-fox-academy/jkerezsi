'use strict';

let Coffee: number = 1
let Time: number = 15

if (Coffee < 2 && Time < 15) {
  console.log('Go for a coffee!');
} else if (Coffee > 1 || Time > 15) {
  console.log('Stop! You had enough!');
} else {
    console.log('Flip a coin!');
}