// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strict';


let numList = [1, 2, 3, 8, 5, 6];

let numListone = numList.map(newNumList => {
        return newNumList / 2;
    })

console.log(numListone[3]);