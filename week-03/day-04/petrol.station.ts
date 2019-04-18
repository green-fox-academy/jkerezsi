'use strict';
class Car {
    gasAmountCar: number;
    capacity: number;

    constructor(gasAmountCar: number = 0, capacity: number = 100) {
        this.gasAmountCar = gasAmountCar;
        this.capacity = capacity;
    }
}

let newCar = new Car();

class Station {
    gasAmount: number;

    constructor(gasAmount: number = 20) {
        this.gasAmount = gasAmount;
    }

    refill(cap: Car) {
        cap.capacity -= this.gasAmount;
        cap.gasAmountCar += this.gasAmount;
    }
}
let newStation = new Station();

newStation.refill(newCar);
console.log(newCar);
