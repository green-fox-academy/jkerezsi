'use strict';

import { freemem } from "os";

class Animal {
    hunger: number;
    thirst: number;


    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }
    AnimalEat(): void {
        this.hunger--;
        console.log('I just eat');
    }
    AnimalDrink(): void {
        this.thirst--;
        console.log('I just drunk');
    }
    AnimalPlay(): void {
        this.hunger++;
        this.thirst++;
        console.log('I just played');
    }
}

const Tiger = new Animal();
const Monkey = new Animal();
const Zebra = new Animal();

class Farm {

    farmAnimals: Animal[];
    freeSlots: number;

    constructor(freeSlots: 10, farmAnimals: Animal[]) {
        this.freeSlots = freeSlots;
        this.farmAnimals = farmAnimals;
    }

    breed(newAnimal: any) {
        if (this.freeSlots > 0) {
            this.farmAnimals.push(newAnimal);
            this.freeSlots -= 1;
        } else {
            console.log("There is no place for new animal in farm");
        }
    }
    slaughter() {
        let hungerCount = []
        for (let i: number = 0; i < this.farmAnimals.length; i++) {
            hungerCount.push(this.farmAnimals[i].hunger);
        }
        let min = Math.min(...hungerCount);
        let leastHunger = hungerCount.indexOf(min);
        this.farmAnimals.splice(leastHunger, 1);
        return this.farmAnimals;
    }
}

let newFarm = new Farm(10, []);

newFarm.breed(Tiger)
newFarm.breed(Monkey);
newFarm.breed(Zebra);
Tiger.AnimalEat();
Monkey.AnimalEat();
Tiger.AnimalEat();

newFarm.slaughter();
console.log(newFarm);