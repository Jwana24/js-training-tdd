'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
function yell(string)
{
    return string.toUpperCase();
}



//* Begin of tests
const assert = require('assert');

// assert.fail('You must write your own tests');
assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell("je m'apelle johanna"), "JE M'APELLE JOHANNA");
// End of tests */
