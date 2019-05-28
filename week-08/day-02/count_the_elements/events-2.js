
// On the click of the button,
// Count the items in the list
// And display the result in the result element.

let p = document.querySelector('p')
let li = document.querySelectorAll('li')

const count = () => {
  let counter = li.length
  p.innerText = counter;
  };


  let button = document.querySelector('button')
  button.addEventListener('click', count);