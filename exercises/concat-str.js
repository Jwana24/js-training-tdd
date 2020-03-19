'use strict';

/*
 * Create a `concatStr` function that takes 2 arguments and concatenate them
 *
 * @notions Functions, Operators
 */

// Your code:
function concatStr(parameter1, parameter2)
{
    const concatParam = parameter1.concat(parameter2);
    return concatParam;
}



//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof concatStr, 'function', 'Should be a function');
assert.strictEqual(concatStr.length, 2, 'Should takes 2 arguments');
assert.strictEqual(concatStr('a', 'b'), 'ab');
assert.strictEqual(concatStr('yolo', 'swag'), 'yoloswag');
// End of tests */
