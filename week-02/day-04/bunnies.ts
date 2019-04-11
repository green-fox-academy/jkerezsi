'use strict';

function bunny(x) {

    if (x < 1) {
        return 0;
    }
        if (x % 2 === 0) {
        return 3 + bunny(x - 1);
    }  if ( x % 2 !== 0) {
        return 2 + bunny(x - 1);
    }
}

console.log(bunny(5));