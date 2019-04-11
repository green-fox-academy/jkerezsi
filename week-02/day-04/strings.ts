'use strict';


function strings(s :string) :string {
    if ( s.indexOf('x') > -1) {
            return strings(s.replace('x','y'));
    }
        else {
            return s;
        }
    }
console.log(strings("xerxes"));