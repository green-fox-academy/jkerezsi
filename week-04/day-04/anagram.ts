'use strict';

function Anagram (wordA:string, wordB:string):boolean{
    return wordA.split('').sort().join('') === wordB.split('').sort().join('')
}


// console.log(x.split('').sort().join(''));

import { test } from 'tape';

test('anagram', t => {
    const actual = Anagram('mannna','annnam');
    const expected = true;

  t.equal(actual, expected);
  t.end();
});
