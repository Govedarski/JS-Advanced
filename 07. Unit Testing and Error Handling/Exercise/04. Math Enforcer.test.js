const assert = require('chai').assert;
const mathEnforcer = require('./04. Math Enforcer');

describe('test mathEnforcer', function () {
    describe('test addFive()', function () {
        it('should return correct result with valid input', function () {
            assert.equal(mathEnforcer.addFive(2), 7);
            assert.equal(mathEnforcer.addFive(3), 8);
            assert.closeTo(mathEnforcer.addFive(2.5), 7.5, 0.01);
            assert.equal(mathEnforcer.addFive(-2), 3);
            assert.equal(mathEnforcer.addFive(-3), 2);
            assert.closeTo(mathEnforcer.addFive(-3.3), 1.7, 0.01);
        });

        it('should return undefined with invalid input', function () {
            assert.isUndefined(mathEnforcer.addFive('2'));
            assert.isUndefined(mathEnforcer.addFive('2.5'));
            assert.isUndefined(mathEnforcer.addFive('test'));
            assert.isUndefined(mathEnforcer.addFive([]));
            assert.isUndefined(mathEnforcer.addFive({}));
            assert.isUndefined(mathEnforcer.addFive(null));
            assert.isUndefined(mathEnforcer.addFive(undefined));
        });

        it('should return NaN with input NaN', function () {
            assert.isNaN(mathEnforcer.addFive(NaN));
        });
    });

    describe('test subtractTen()', function () {
        it('should return correct result with valid input', function () {
            assert.equal(mathEnforcer.subtractTen(12), 2);
            assert.equal(mathEnforcer.subtractTen(13), 3);
            assert.closeTo(mathEnforcer.subtractTen(12.5), 2.5, 0.01);
            assert.closeTo(mathEnforcer.subtractTen(-2), -12, 0.01);
            assert.closeTo(mathEnforcer.subtractTen(-3.333), -13.33, 0.01);
            assert.closeTo(mathEnforcer.subtractTen(-2.5), -12.5, 0.01);
        });

        it('should return undefined with invalid input', function () {
            assert.isUndefined(mathEnforcer.subtractTen('2'));
            assert.isUndefined(mathEnforcer.subtractTen('2.5'));
            assert.isUndefined(mathEnforcer.subtractTen('test'));
            assert.isUndefined(mathEnforcer.subtractTen([]));
            assert.isUndefined(mathEnforcer.subtractTen({}));
            assert.isUndefined(mathEnforcer.subtractTen(null));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        });

        it('should return NaN with input NaN', function () {
            assert.isNaN(mathEnforcer.subtractTen(NaN));
        });
    });

    describe('test sum()', function () {
        it('should return correct result with valid input', function () {
            assert.equal(mathEnforcer.sum(1, 1), 2);
            assert.equal(mathEnforcer.sum(1, 2), 3);
            assert.closeTo(mathEnforcer.sum(2, 0.5), 2.5, 0.1);
            assert.closeTo(mathEnforcer.sum(-2, 14), 12, 0.01);
            assert.closeTo(mathEnforcer.sum(-3, -10), -13, 0.01);
            assert.closeTo(mathEnforcer.sum(15, -2.5), 12.5, 0.01);
            assert.closeTo(mathEnforcer.sum(3.333, 2.333), 5.66, 0.01);
        });

        it('should return undefined with invalid input', function () {
            assert.isUndefined(mathEnforcer.sum('2', 1));
            assert.isUndefined(mathEnforcer.sum('2.5', 1));
            assert.isUndefined(mathEnforcer.sum('test', 1));
            assert.isUndefined(mathEnforcer.sum([], 1));
            assert.isUndefined(mathEnforcer.sum({}, 1));
            assert.isUndefined(mathEnforcer.sum(null, 1));
            assert.isUndefined(mathEnforcer.sum(undefined, 1));
            assert.isUndefined(mathEnforcer.sum(1, '2'));
            assert.isUndefined(mathEnforcer.sum(1, '2.5'));
            assert.isUndefined(mathEnforcer.sum(1, 'test'));
            assert.isUndefined(mathEnforcer.sum(1, []));
            assert.isUndefined(mathEnforcer.sum(1, {}));
            assert.isUndefined(mathEnforcer.sum(1, null));
            assert.isUndefined(mathEnforcer.sum(1, undefined));
            assert.isUndefined(mathEnforcer.sum());
            assert.isUndefined(mathEnforcer.sum(1));
        });

        it('should return NaN with input NaN', function () {
            assert.isNaN(mathEnforcer.sum(NaN, 1));
            assert.isNaN(mathEnforcer.sum(2, NaN));
        });
    });
});