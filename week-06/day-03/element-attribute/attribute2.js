'use strict';


//   1) replace the list items' content with items from this list:
const fruits =  ['apple', 'banana', 'cat', 'dog']
    
    const items = document.getElementsByTagName('li')
    console.log(items)
    
    for(let i = 0; i<items.length; i++){
        items[i].innerHTML = fruits[i]
    }
    console.log(items[2].innerHTML)


    //   2) change the <ul> element's background color to 'limegreen'
    //     - use css class to change the color instead of the style property

    const background = document.querySelectorAll('li')
    console.log(background)
    background.forEach( e => e.setAttribute('style', 'background-color:purple'))

    console.log(background)