'use strict';

let list = ["Balu", "Lehel", "Dalma", "Enci"];

console.log(list.length);

let newlist = list.concat("William");

// if (list.length = 0) {
//     console.log("list is empty");
// } else {
//     console.log("list is not empty");
// }

let newlist1 = newlist.concat("John", "Amanda");

console.log(newlist1.length);
console.log(newlist1[2]);

let newlist2 = newlist1.slice(4,7);
console.log(newlist2);


for (let i = 0; i < newlist2.length; i++) {
    console.log(newlist2[i]);
}

for (let i = 0; i < newlist2.length; i++) {
    console.log( (i+1) + ". " + newlist2[i]);
}

newlist2.splice(1,1);

console.log(newlist2.reverse());

newlist2 = [];