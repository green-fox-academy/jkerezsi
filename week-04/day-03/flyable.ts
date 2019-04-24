'use strict';

import { Animal } from "../../week-03/day-03/animal";

interface Flyable {
    land (): string;
    fly (): string;
    takOff(): string;
}

abstract class Vehicle {

    color: string;
    size: string;
    gears: number;
}

class Helicopter extends Vehicle implements flyable {

    land (): ;
    fly (): string;
    takOff(): string;
}

class Bird extends Animal implements flyable {
    land (): string;
    fly (): string;
    takOff(): string;
}