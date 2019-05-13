'use strict'

const decimals: {} = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
    13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
};
const round: string[] = ['zero','teen','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one-hundred'];

function converter(num: number):void {
    if (num < 20) {
        let result = Object.values(decimals)[num];
        console.log(result)
    }
    if (num > 19 && num.toString().length < 3) {
        let numArr: number [];
        let each = num.toString().split('')
        each.forEach( x => parseInt(x));
        console.log(`${round[each[0]]}-${decimals[each[1]]}`)
    }
    if(num.toString().length === 3){
        let each = num.toString().split('')
        each.forEach( x => parseInt(x));
        console.log(`${decimals[each[0]]}-hundred and ${round[each[1]]}-${decimals[each[2]]}`)
    }
    
};
console.log(converter(379));