// Add an item that says 'The Green Fox' to the asteroid list.
//       Add an item that says 'The Lamplighter' to the asteroid list.
//       Add a heading saying 'I can add elements to the DOM!' to the .container.
//       Add an image, any image, to the container.


let ul = document.querySelector('.asteroids')
let newLi = document.createElement('li')
newLi.innerText = "The Green Fox"
ul.appendChild(newLi)

let lampL = document.createElement("li")
lampL.innerText = "The Lamplighter"
ul.appendChild(lampL)

let container = document.querySelector('.container')
let newH1 = document.createElement('h1')
newH1.innerText = "I can add elements to the DOM!"
container.appendChild(newH1)

let newImg = document.createElement('img')
newImg.setAttribute("src","./asset/4.jpg")
container.appendChild(newImg)