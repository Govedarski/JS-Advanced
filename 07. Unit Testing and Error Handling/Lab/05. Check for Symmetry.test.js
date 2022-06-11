const assert = require('chai').assert
const isSymmetric = require('./05. Check for Symmetry')


describe('Test isSymmetric()', function () {
    it('should return true when input symmetric array', function () {
        const array = [1,'b',{},{},'b',1]
        assert.isTrue(isSymmetric(array))
    });
    it('should return false when input not symmetric array', function () {
        const array = [1,'b','b',{},'b',1]
        assert.isFalse(isSymmetric(array))
    });
    it('should return false when input not array', function () {
        assert.isFalse(isSymmetric(1))
        assert.isFalse(isSymmetric('string'))
        assert.isFalse(isSymmetric({}))
        assert.isFalse(isSymmetric(NaN))
        assert.isFalse(isSymmetric())
        assert.isFalse(isSymmetric(undefined))
        assert.isFalse(isSymmetric(null))
        assert.isFalse(isSymmetric((x)=>x))
    });
});