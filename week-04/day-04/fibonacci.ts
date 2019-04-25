'use strict';

function fibonacci(n: number){

    if (n === 2) {
        return 1;
    } else if (n <= 1) {
        return 0;
    } else {
        return fibonacci (n-2) + fibonacci (n-1);
    }
}


import { test } from 'tape';

test('fibonacci', t => {
    const actual = fibonacci(5);
    const expected = 3;

    t.deepEqual(actual, expected);
    t.end();
});

test('fibonacci', t => {
    const actual = fibonacci(5);
    const expected = 7;

    t.deepEqual(actual, expected);
    t.end();
});


