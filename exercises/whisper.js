'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper(string)
{
    return string.toLowerCase();
}



//* Begin of tests
const assert = require('assert');

// assert.fail('You must write your own tests');
assert.strictEqual(typeof whisper, "function");
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper("JE M'APPELLE JOHANNA"), "je m'appelle johanna");
// End of tests */
