'use strict';


export const acornBought = () => {
    return {
        type: 'buy',
        amount: 1
    }
}


export const acornEaten = () => {
    return {
        type: 'eat',
        amount: 1
    }
}
