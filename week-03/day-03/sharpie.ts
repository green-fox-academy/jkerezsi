'use strict';

class Sharpie {
    color: string;
    width: number;
    inkAmount: number;
   

   
    constructor (color: string, width: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }
        use () {
            this.inkAmount --;
            console.log ('I used the sharpie thus ink has decreased');
        }
}
const myNewSharpie: Sharpie = new Sharpie('red',20);

myNewSharpie.use();
console.log(myNewSharpie);

