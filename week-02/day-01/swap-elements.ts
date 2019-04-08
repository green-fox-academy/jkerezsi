    
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

'use strict';

let abc;
abc = ["Arthur", "Boe", "Chloe"];

let swap = abc.splice(0,3,"Chloe","Boe","Arthur");


console.log(abc);