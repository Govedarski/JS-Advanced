const assert = require('chai').assert
const lookupChar = require('./03. Char Lookup')

describe('test lookupChar()', function () {
    const STRING = 'string'
    const INDEX_OUT_OF_RANGE_MESSAGE = 'Incorrect index'

    it('should return correct char at given index with input valid', function () {
        assert.equal(lookupChar(STRING, 0), 's')
        assert.equal(lookupChar(STRING, 1), 't')
        assert.equal(lookupChar(STRING, 2), 'r')
        assert.equal(lookupChar(STRING, 3), 'i')
        assert.equal(lookupChar(STRING, 4), 'n')
        assert.equal(lookupChar(STRING, 5), 'g')
    });

    it('should return correct string with index out of range', function () {
        assert.equal(lookupChar(STRING, -1), INDEX_OUT_OF_RANGE_MESSAGE);
        assert.equal(lookupChar(STRING, 6), INDEX_OUT_OF_RANGE_MESSAGE);
    });

    it('should return undefined with invalid type of sting argument', function () {
        assert.isUndefined(lookupChar(1,0))
        assert.isUndefined(lookupChar([],0))
        assert.isUndefined(lookupChar({},0))
        assert.isUndefined(lookupChar(0))
        assert.isUndefined(lookupChar())
        assert.isUndefined(lookupChar(null,0))
        assert.isUndefined(lookupChar(undefined,0))
        assert.isUndefined(lookupChar(false,0))
        assert.isUndefined(lookupChar(NaN,0))
    });
    it('should return undefined with invalid type of index argument', function () {
        assert.isUndefined(lookupChar(STRING,'string'))
        assert.isUndefined(lookupChar(STRING,1.2))
        assert.isUndefined(lookupChar(STRING,'2'))
        assert.isUndefined(lookupChar(STRING,[]))
        assert.isUndefined(lookupChar(STRING, {}))
        assert.isUndefined(lookupChar(STRING, ))
        assert.isUndefined(lookupChar())
        assert.isUndefined(lookupChar(STRING, null))
        assert.isUndefined(lookupChar(STRING, undefined))
        assert.isUndefined(lookupChar(STRING, false))
        assert.isUndefined(lookupChar(STRING, NaN))
    });
});