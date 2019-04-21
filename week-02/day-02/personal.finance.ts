'use strict';

let listFinance = [500, 1000, 1250, 175, 800, 125];

console.log(listFinance.reduce(function (a: number, b: number): any {
    let total = a + b;
    return total;
}));


// let max2 = listFinance.map(x => x)
//    for (let i: number = 0; i < listFinance.length-1; i++){
//     if (max2[0] > max2[1]) {
//         max2.splice(1,1);
//     } else {
//         max2.splice(0,1);
//     }
//    };
// console.log(max2);

// let min2 = listFinance.map(x => x)
//    for (let i: number = 0; i < listFinance.length-1; i++){
//     if (min2[0] < min2[1]) {
//         min2.splice(1,1);
//     } else {
//         min2.splice(0,1);
//     }
//    };
// console.log(min2);

let average = listFinance.reduce(function (a: number, b: number): any {
    let total = a + b;
    return total;
});

console.log(average / listFinance.length);