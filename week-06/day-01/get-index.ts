'use strict';

let list: any[] = [1,"u",3,4,"p",6,7]

function getIndex(something:any [],value:any):number {
    return something.indexOf(value);
}

console.log(getIndex(list,11))