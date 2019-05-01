'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

let arr = [2, 3, 56, 56, 45, 5, 5, 7, 87, 9, 0, 3, 4, 5, 66, 7, 8, 6, 5, 4, 4, 3];

// function doIt() {
//     for (var i = 0, l = arr.length; i < l; i++)
//         if (arr.indexOf(this[i]) === -1)
//             arr.push(this[i]);
//     return arr;
// }


function sortNumber (a:number,b:number):number{
    return a-b;
}

let myArr:number [] = arr.sort(sortNumber);
console.log(myArr);

let final = new Set(myArr);
console.log(final);

