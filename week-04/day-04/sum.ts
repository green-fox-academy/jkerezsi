'use strict';

export class Numbers {

    elements: [] = [];

    constructor(elements){
        this.elements = elements;
    }

    sum(elements) {
        return elements.reduce(function(a, b) { return a + b; }, 0);
        }
    }
    