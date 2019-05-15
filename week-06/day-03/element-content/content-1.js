'use strict';

    // 1)  Fill every paragraph with the last one's content.

// const myTable = document.querySelectorAll('p')
// console.log(myTable)
// for(let i = 1; i<myTable.length; i++){
//     myTable[i].innerText = myTable[i].innerText + " " + (myTable[i-1].innerText)

// }
// console.log(myTable[2].innerText)

    // 2)  Do the same again, but you should keep the cat strong.
    
    const myTable = document.querySelectorAll('p')
console.log(myTable)
for(let i = 1; i<myTable.length; i++){
    myTable[i].innerHTML = myTable[i].innerHTML + " " + (myTable[i-1].innerHTML)

}
console.log(myTable[3].innerHTML)