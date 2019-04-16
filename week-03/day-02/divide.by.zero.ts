'use strict';

let x: number = 0;

function divide(x) {
    let result = 10 / x;
        return result;
    }

    console.log(divide(0));
    
    try {
        if ( x === 0){
            throw new Error('fail');
        }
    } catch(e) {
        console.log(e.message);
    }
    