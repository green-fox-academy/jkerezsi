'use strict';

let x: number = 0;

function divide(x) {
    let result = 10 / x;
    if ( result = 0) {
        return 'You cannot divide with 0 in TS';
    }
        return result;
    }
    
    try {
        if ( x === 0){
            throw new Error('fail');
        }
    } catch(e) {
        console.log(e.message);
    }
    