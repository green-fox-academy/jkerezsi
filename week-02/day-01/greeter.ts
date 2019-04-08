// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`

'use strict';

let nameToGreet: string = 'Greenfox';

function greet(nameToGreet) {
    let newgreet = "Greetings, dear " + nameToGreet;
    return newgreet;
}

console.log(greet(nameToGreet));