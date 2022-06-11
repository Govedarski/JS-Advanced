const assert = require('chai').assert
const createCalculator = require('./07. Add-Subtract')

describe('Test createCalculator()', function () {
    it('test add ', function () {
        const calculator = createCalculator()
        calculator.add('2')
        assert.equal(calculator.get(),2)
        calculator.add(-1)
        assert.equal(calculator.get(),1)
        calculator.add(2.4)
        assert.equal(calculator.get(), 3.4)
        calculator.add(1)
        assert.equal(calculator.get(), 4.4)
    });

    it('test subtract ', function () {
        const calculator = createCalculator()

        calculator.subtract('2')
        assert.equal(calculator.get(),-2)
        calculator.subtract(-1)
        assert.equal(calculator.get(),-1)
        calculator.subtract(2.4)
        assert.equal(calculator.get(), -3.4)
        calculator.subtract(1)
        assert.equal(calculator.get(), -4.4)
    });
});