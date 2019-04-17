'use strict';

class Counter {
    integer: number;

    constructor (integer: number = 0) {
        this.integer = integer;
    }
    add1(number: number) {
        this.integer += number;
        console.log('We added a whole number');
    }
    add2() {
        this.integer += 1;
        console.log('We added 1.')
    }
    get() {
        this.integer.toString();
        console.log('Printed as string');
    }
    reset() {
        this.integer = 0;
    }
}

const myNumber: Counter = new Counter(20);

myNumber.add1(10);
myNumber.add2();
myNumber.get();
// myNumber.reset();
console.log(myNumber);