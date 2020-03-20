'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(string)
{
    return string.substring(0, 2);
}

function keepLast(string)
{
    return string.substring(string.length - 2, string.length); // on garde l'avant dernière, donc toute la longueur de la chaine - les 2 derniers caractères et on garde le tout dernier élément de la chaine
}

function keepFirstLast(string)
{
    return string.substring(2, 4);
}



//* Begin of tests
const assert = require('assert');

// assert.fail('You must write your own tests');

// Tests on the keepFirst function
assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst("salopette"), "sa");

// Tests on the keepLast function
assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepLast("tabouret"), "et");

// Tests on the keepFirstLast function
assert.strictEqual(typeof keepFirstLast, "function");
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirstLast("journal"), "ur");


// End of tests */
