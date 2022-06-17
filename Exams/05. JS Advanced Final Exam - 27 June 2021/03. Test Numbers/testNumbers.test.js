const assert = require('chai').assert;
const testNumbers = require('./testNumbers.js');

describe('testNumbers', function () {
    describe('sumNumbers', function () {
        it('should correct with valid number', function () {
            assert.equal(testNumbers.sumNumbers(6, -4), 2);
        });
        it('should correct with floating point numbers', function () {
            assert.equal(testNumbers.sumNumbers(6.32289, -4), 2.32);
        });
        it('should undefined with not numbers input', function () {
            assert.isUndefined(testNumbers.sumNumbers('6', 4));
        });
    });

    describe('numberChecker', function () {
        it('should correct with even', function () {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
        });
        it('should correct with odd', function () {
            assert.equal(testNumbers.numberChecker(3), 'The number is odd!');

        });
        it('should correct with string number input', function () {
            assert.equal(testNumbers.numberChecker('2'), 'The number is even!');
        });
        it('should throw error with string number input', function () {
            assert.throw(() => testNumbers.numberChecker('string'), 'The input is not a number!');
        });
    });

    describe('averageSumArray()', function () {
        it('should correct with valid array', function () {
            const array = [1, 2, 3, 4]; //2.5
            assert.equal(testNumbers.averageSumArray(array), 2.5);
        });
        it('should correct with array with 1 number', function () {
            const array = [4];
            assert.equal(testNumbers.averageSumArray(array), 4);
        });
        it('should NaN with empty array', function () {
            const array = [];
            assert.isNaN(testNumbers.averageSumArray(array));
        });
    });
});