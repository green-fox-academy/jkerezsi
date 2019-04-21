'use strict';

class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number, inkAmount: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }
    use() {
        this.inkAmount -= 20;
        console.log('I used the sharpie thus ink has decreased');
    }
}

let myNewSharpie = new Sharpie('red', 20, 100);
let myNewSharpie1 = new Sharpie('blue', 20, 30);
let myNewSharpie2 = new Sharpie('yellow', 20, 100);


myNewSharpie.use();
myNewSharpie.use();
myNewSharpie1.use();
myNewSharpie1.use();
myNewSharpie2.use();
// console.log(myNewSharpie);
// console.log(myNewSharpie1);
// console.log(myNewSharpie2);



class SharpieSet {
    sharpies: Sharpie[];

    constructor() {
        this.sharpies = [];
    }

    add(ink: Sharpie) {
        this.sharpies.push(ink);
    }


    countUsable(ink: Sharpie) {
        if (ink.inkAmount > 0) {
            console.log('Sharpie has ink');
        } else {
            console.log('Sharpie is empty');
        }
    }

    removeTrash():any {
        this.sharpies.forEach(function(element, index, object) {
            if (element.inkAmount < 1){
             object.splice(index,1);
            }
            })
        }
}

const mySharpieSet = new SharpieSet();
mySharpieSet.add(myNewSharpie);
mySharpieSet.add(myNewSharpie1);
mySharpieSet.add(myNewSharpie2);

console.log(mySharpieSet);

mySharpieSet.countUsable(myNewSharpie);
mySharpieSet.countUsable(myNewSharpie1);
mySharpieSet.countUsable(myNewSharpie);

mySharpieSet.removeTrash();
console.log(mySharpieSet);
