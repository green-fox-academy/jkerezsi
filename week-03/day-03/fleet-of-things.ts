'use strict';

import { Thing } from './Thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */


const toDo1: Thing = new Thing('Get Milk');
const toDo2: Thing = new Thing('Remove the obstacles');
const toDo3: Thing = new Thing('Stand up');
const toDo4: Thing = new Thing('Eat lunch');

fleet.add(toDo1);
fleet.add(toDo2);

fleet.add(toDo3);
toDo3.getCompleted();
toDo3.complete();

fleet.add(toDo4);
toDo4.getCompleted();
toDo4.complete();

fleet.getThings();

function giveMeInfo() {
    for( let i: number = 0; i < fleet.getThings().length; i++){
    if (fleet.getThings() [i].getCompleted()){
    console.log(`[x] ${fleet.getThings() [i].getName()}`);
}   else {
    console.log(`[] ${fleet.getThings() [i].getName()}`);
}
}
}

giveMeInfo();

