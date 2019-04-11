'use strict';

function GDivisor(x :number, y :number) :number {

        if (y <= 0) {
            return x;
    }  
        else if (x <= 0) {
            return y;
        }
         else if(x > y) {
        return GDivisor(y , x % y);
    } else; 
        return GDivisor(y % x, x);
}  

console.log(GDivisor(16,20));


