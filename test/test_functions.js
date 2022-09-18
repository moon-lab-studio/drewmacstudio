const assert = require ('assert');
import {camelize} from '../js/functions.js';
// require('../js/functions.js')

console.log(camelize('Word'))

describe('camelize', () => {
    it('should return a string converted to camel case', () => {
        // setup
        const input = 'A String';
        const expected = 'aString';
        // exercise
        const actual = camelize(input);
        // verification
        assert.ok(expected, actual);

    });
});