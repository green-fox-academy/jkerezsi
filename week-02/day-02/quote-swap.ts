'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

function quoteSwap(x:string[]){
x.splice(2,1,"cannot");
x.splice(5,1,"do");
return x.join(" ");
}

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
console.log(quoteSwap(words));

// function quoteSwap(list:string[]) {
//     for (let i =0; i<list.length; i++) {
//         if (list[i] === "do") {
//             list[i] = "cannot"
//         } else if (list[i] === "cannot") {
//             list[i] = "do"
//         }
//     }return list.join(" ")
// }
