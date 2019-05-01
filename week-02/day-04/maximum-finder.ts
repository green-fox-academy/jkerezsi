'use strict';

function maxFinder(list:number[]):number {
    if (list.length === 1) {
        return list[0];
    }
    else if (list[0] >= list[1]) {
        list.splice(1, 1);
        return maxFinder(list);
    } else{
        list.splice(0, 1)
        return maxFinder(list);
    }
}

let mylist = [2, 4, 6, 8, , 4, 5, 54, 54, 53, 3, 23, 42, 656765, 68, 786, 8678768];

console.log(maxFinder(mylist));
