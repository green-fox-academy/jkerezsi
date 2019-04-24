'use strict';

export abstract class Animal {

    name: string;
    age: number;

    constructor(name) {
        this.name = name;
        
    }

    getName() {
        return this.name;
    }
    breed() {
    }

}

class Mammal extends Animal {

    constructor(name) {
        super(name);
    }

    breed(): string {
        return "pushing small versions out"
    }
}

class Reptile extends Animal {

    constructor(name) {
        super(name);
    }

    breed(): string{
        return "by laying eggs"
    }
}
class Bird extends Animal {
    constructor(name) {
        super(name);
    }

    breed():string {
        return "by laying eggs"

    }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());