const assert = require('chai').assert
const numberOperations = require('./03. Number Operations.js')

describe('test numberOperations', function () {
    describe('powNumber', function () {
        it('should correct with number', function () {
            assert.equal(numberOperations.powNumber(5),25)
        });
        it('should correct with valid string', function () {
            assert.equal(numberOperations.powNumber('5'),25)
        });
        it('should correct with valid array', function () {
            assert.equal(numberOperations.powNumber([5]),25)
        });
        it('should correct with invalid string', function () {
            assert.isNaN(numberOperations.powNumber('string'))
        });
    });

    describe('numberChecker', function () {
        it('should correct output with 99', function () {
            const expected = 'The number is lower than 100!'
            assert.equal(numberOperations.numberChecker(99), expected)
        });
        it('should correct output with string 100', function () {
            const expected = 'The number is greater or equal to 100!'
            assert.equal(numberOperations.numberChecker('100'), expected)
        });
        it('should error output with invalid string', function () {
            assert.throw(()=> numberOperations.numberChecker('das'), 'The input is not a number!');
        });
    });

    describe('sumArrays', function () {
        it('should correct with valid input', function () {
            const firstArray = [1,2,3,4,5]
            const secondArray = [1,2,3]
            const expectedArray = [2,4,6,4,5]
            assert.deepEqual(numberOperations.sumArrays(firstArray, secondArray), expectedArray)
        });
        it('should correct with valid input', function () {
            const firstArray = [1,2,3,4,5]
            const secondArray = [1,2,3]
            const expectedArray = [2,4,6,4,5]
            assert.deepEqual(numberOperations.sumArrays(secondArray, firstArray), expectedArray)
        });
        it('should correct with empty array', function () {
            const firstArray = [1,2,3,4,5]
            const secondArray = []
            const expectedArray = [1,2,3,4,5]
            assert.deepEqual(numberOperations.sumArrays(firstArray, secondArray), expectedArray)
        });
        it('should correct with empty array', function () {
            const firstArray = [1,2,3,4,5]
            const secondArray = []
            const expectedArray = [1,2,3,4,5]
            assert.deepEqual(numberOperations.sumArrays(secondArray, firstArray), expectedArray)
        });
        it('should correct with even arrays', function () {
            const firstArray = [1,2,3,4,5]
            const secondArray = [1,2,3,4,5]
            const expectedArray = [2,4,6,8,10]
            assert.deepEqual(numberOperations.sumArrays(secondArray, firstArray), expectedArray)
        });
    });

});