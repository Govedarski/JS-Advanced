const assert = require('chai').assert
const sum = require('./04. Sum of Numbers')
describe('Testing sum()', function () {
    it('with valid array expect valid sum', function () {
        const INPUT = [1,2,3];
        assert.equal(sum(INPUT), 6)
    });

    it('with invalid array expect valid sum', function () {
        const INPUT = [1,'s',3];
        assert.isNaN(sum(INPUT))
    });

    it('with empty array expect valid sum', function () {
        const INPUT = [];
        assert.equal(sum(INPUT), 0)
    });
});