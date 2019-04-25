'use strict';

import { test } from 'tape';
import { Apple } from './apple';

let myApple: Apple = new Apple();

test('show apple', t => {
  const actual = myApple.getApple();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();
});