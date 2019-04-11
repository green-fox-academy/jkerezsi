'use strict';

function stringsA(yes :string){

    if (yes.indexOf('x') > -1) {
        return stringsA(yes.replace('x','y')); 
     } else {
                return yes;
            }
}
console.log(stringsA("xerxxzes"));