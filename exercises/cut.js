'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(string)
{
    return string.substring(1);
}

function cutLast(string)
{
    return string.substring(0, string.length - 1);
}

function cutFirstLast(string)
{
    return string.substring(1, string.length - 1);
}



//* Begin of tests
const assert = require('assert');

// assert.fail('You must write your own tests');

// Tests for the cutFirst function
assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst("enveloppe"), "nveloppe");

// Tests for the cutLast function
assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutLast("fauteuil"), "fauteui");

// Tests for the cutFirstLast function
assert.strictEqual(typeof cutFirstLast, "function");
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(cutFirstLast("livres"), "ivre");


// End of tests */
