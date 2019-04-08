// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict';

let number: number = 5;
let multiple: number = 1;

function factorio(number) {
    for(let i = 1; i <= number; i++) {
        multiple = multiple * i;
    }
    return multiple;
}

console.log(factorio(number));