const assert = require('chai').assert
const isOddOrEven = require('./02. Even Or Odd')

describe('Test isOddOrEven()', function () {
    const EXPECTED_ODD_OUTPUT = "odd"
    const EXPECTED_EVEN_OUTPUT = "even"

    it('with evan string expect even as output', function () {
        const string = 'string'
        assert.equal(isOddOrEven(string), EXPECTED_EVEN_OUTPUT)
    });

    it('with odd string expect odd as output', function () {
        const string = 'odd'
        assert.equal(isOddOrEven(string), EXPECTED_ODD_OUTPUT)
    });

    it('with not a strings expect undefined', function () {
        assert.isUndefined(isOddOrEven(1))
        assert.isUndefined(isOddOrEven({}))
        assert.isUndefined(isOddOrEven([]))
        assert.isUndefined(isOddOrEven(NaN))
        assert.isUndefined(isOddOrEven(undefined))
        assert.isUndefined(isOddOrEven(null))
    });
});