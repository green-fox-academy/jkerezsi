'use strict';

// 1. store the element that says 'The King' in the 'king' variable.
//   console.log it.
const king = document.getElementById('b325');
console.log(king.innerText);

//   2. store 'The Businessman' and 'The Lamplighter'
//   in the 'businessLamp' variable.
//   console.log each of them.

const businessLamp = document.querySelectorAll('.big')
console.log(businessLamp[0].innerText)
console.log(businessLamp[1].innerText)


//   3. store 'The King' and 'The Conceited Man'
//   in the 'conceitedKing' variable.
//   alert them one by one.

const conceitedKing = document.querySelectorAll('.container div')
console.log(conceitedKing)
window.alert(conceitedKing[0].innerText)

window.alert(conceitedKing[1].innerText)


//   4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//   in the 'noBusiness' variable.
//   console.log each of them.

const noBusiness = document.querySelectorAll('body div')
for (let i = 0; i<3; i++){
    console.log(noBusiness[i].innerText)
}
