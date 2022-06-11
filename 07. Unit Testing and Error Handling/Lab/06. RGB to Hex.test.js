const assert = require('chai').assert;
const rgbToHexColor = require('./06. RGB to Hex');

describe('Test rgbToHexColor()', function () {
    const VALID_RED = 1;
    const VALID_BLUE = 103;
    const VALID_GREEN = 255;
    const INVALID_NUMBER_LOW_EDGE_RED = -1;
    const INVALID_NUMBER_HIGH_EDGE_RED = 256;
    const INVALID_TYPE_RED = NaN;
    const INVALID_NUMBER_LOW_EDGE_BLUE = -1;
    const INVALID_NUMBER_HIGH_EDGE_BLUE = 256;
    const INVALID_TYPE_BLUE = 'string';
    const INVALID_NUMBER_LOW_EDGE_GREEN = -1;
    const INVALID_NUMBER_HIGH_EDGE_GREEN = 256;
    const INVALID_TYPE_GREEN = {};
    const VALID_OUTPUT = '#0167FF';


    it('should return valid color when input valid 0 < number < 255', function () {
        const actualOutput = rgbToHexColor(VALID_RED, VALID_BLUE, VALID_GREEN);
        assert.equal(actualOutput, VALID_OUTPUT);
    });

    it('should return valid color when input valid edge cas', function () {
        const actualOutputLowEdge = rgbToHexColor(0, 0, 0);
        const EXPECTED_OUTPUT_LOW_EDGE = '#000000'
        const actualOutputHighEdge = rgbToHexColor(255, 255, 255);
        const EXPECTED_OUTPUT_HIGH_EDGE = '#FFFFFF'
        assert.equal(actualOutputLowEdge, EXPECTED_OUTPUT_LOW_EDGE);
        assert.equal(actualOutputHighEdge, EXPECTED_OUTPUT_HIGH_EDGE);
    });

    it('should return undefined when red is invalid number', function () {
        assert.isUndefined(rgbToHexColor(INVALID_NUMBER_LOW_EDGE_RED, VALID_BLUE, VALID_GREEN));
        assert.isUndefined(rgbToHexColor(INVALID_NUMBER_HIGH_EDGE_RED, VALID_BLUE, VALID_GREEN));
    });

    it('should return undefined when blue is invalid number', function () {
        assert.isUndefined(rgbToHexColor(VALID_RED, INVALID_NUMBER_LOW_EDGE_BLUE, VALID_GREEN));
        assert.isUndefined(rgbToHexColor(VALID_RED, INVALID_NUMBER_HIGH_EDGE_BLUE, VALID_GREEN));
    });

    it('should return undefined when green is invalid number', function () {
        assert.isUndefined(rgbToHexColor(VALID_RED, VALID_BLUE, INVALID_NUMBER_LOW_EDGE_GREEN));
        assert.isUndefined(rgbToHexColor(VALID_RED, VALID_BLUE, INVALID_NUMBER_HIGH_EDGE_GREEN));
    });

    it('should return undefined when color is invalid type', function () {
        assert.isUndefined(rgbToHexColor(INVALID_TYPE_RED, VALID_BLUE, VALID_GREEN));
        assert.isUndefined(rgbToHexColor(VALID_RED, INVALID_TYPE_BLUE, VALID_GREEN));
        assert.isUndefined(rgbToHexColor(VALID_RED, VALID_BLUE, INVALID_TYPE_GREEN));
    });
});