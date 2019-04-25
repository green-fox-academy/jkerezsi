'use strict';

function countLetters(word: string) {
    let dictionary = {};
    let x: string[] = word.split('')
    x.forEach(y => {
        if (Object.keys(dictionary).includes(y)) {
            dictionary[y] += 1;
        } else {
            dictionary[y] = 1;
        }
    }
    )
    return dictionary;
}


import { test } from 'tape';

test('count letters', t => {
    const actual = countLetters('mappa');
    const expected = {m: 1, a: 2, p:2};

    t.deepEqual(actual, expected);
    t.end();
});

