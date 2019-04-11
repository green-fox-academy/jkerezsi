'use strict';

function addCursion(ezaz : number) :number {
    if(ezaz < 1) {
        return 0;
    }
    
    return ezaz + addCursion(ezaz - 1);
}

console.log(addCursion(5));