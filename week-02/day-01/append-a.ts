// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict';

let animals;
animals = ["koal", "pand", "zebr"];

let object = animals.map(newanimals => {
    return newanimals + "a";
})

console.log(object);