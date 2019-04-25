'use strict';

import { test } from 'tape';
import { Numbers } from "./sum";



test('add nums', t => {
    let elements = [4,5,6,7,8];
    let myNumbers: Numbers = new Numbers(elements);
    const actual = myNumbers.sum(elements);
    const expected = 30;

  t.equal(actual, expected);
  t.end();
});