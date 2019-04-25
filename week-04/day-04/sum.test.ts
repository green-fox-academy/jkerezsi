'use strict';

import { test } from 'tape';
import { Numbers } from "./sum";


let elements = [3,4,5];
let myNumbers: Numbers = new Numbers(elements);

test('add nums', t => {
  const actual = myNumbers.sum(elements);
  const expected = 12;

  t.equal(actual, expected);
  t.end();
});