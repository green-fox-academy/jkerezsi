'use strict';

class Animal {
    hunger: number;
    thirst: number;
   

   
    constructor (hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }
    
    AnimalEat(): void{
        this.hunger--;
        console.log('I just eat');
        }
    AnimalDrink(): void{
        this.thirst--;
        console.log('I just drunk');
    }
    AnimalPlay(): void{
            this.hunger ++;
            this.thirst ++;
            console.log('I just played');
    }
}

const Tiger: Animal = new Animal();

// Tiger.AnimalDrink();
// Tiger.AnimalEat();
Tiger.AnimalPlay();

console.log(Tiger);


