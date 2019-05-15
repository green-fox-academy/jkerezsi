'use strict';

    //   Write the image's url to the console.
    //   Replace the image with a picture of your favorite animal.
    //   Make the link point to the Green Fox Academy website.
    //   Disable the second button.
    //   Replace its text with 'Don't click me!'.
    

    let myImage = document.getElementsByTagName('img')
    console.log(myImage[0])

    let myFaveImage ="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    myImage[0].setAttribute('src',myFaveImage) 
    console.log(myFaveImage[0])

    const bestWeb = document.querySelector('a')
    console.log(bestWeb)
    bestWeb.setAttribute('href',"https://www.greenfoxacademy.com")
    console.log(bestWeb)

    const toDisable = document.querySelector('.this-one')
    toDisable.disabled = true;
    toDisable.innerHTML = "Don't click me!"
    
 

