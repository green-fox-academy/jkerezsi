'use strict';

import {Printable} from './printable'

class Domino implements Printable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
    printAllFields(){

    }
}

export {Domino};

