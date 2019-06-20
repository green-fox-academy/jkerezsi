'use strict';

const initState = {
    count: 0,
}

const acorns = (state = initState, action) => {
    switch(action.type){
        case 'buy':
        return {
            ...state, count: state.count + action.amount
        }
        case 'eat':
           return {
        ...state, count: state.count - action.amount
            }
        default:
        return state;
    }
}

export default acorns;