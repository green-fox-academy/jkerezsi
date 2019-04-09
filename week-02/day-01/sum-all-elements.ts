// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

'use strict';

let ai;
ai = [3, 4, 5, 6, 7];
let newAi = 0;

function nameit(ai) {
    for(let i = 0; i < ai.length; i++) {
        newAi = newAi + ai[i];
        return newAi;
    }
}

console.log(nameit(ai));
  
