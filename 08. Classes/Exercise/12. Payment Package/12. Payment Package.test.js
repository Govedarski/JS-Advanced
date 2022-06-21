const assert = require('chai').assert;
const PaymentPackage = require('./12. Payment Package.js');

describe('PaymentPackage', function () {
    const validName = 'Pesho';
    const validValue = 5;
    const NAME_ERROR_MESSAGE = 'Name must be a non-empty string';
    const VALUE_ERROR_MESSAGE = 'Value must be a non-negative number';
    const VAT_ERROR_MESSAGE = 'VAT must be a non-negative number';
    const ACTIVE_ERROR_MESSAGE = 'Active status must be a boolean';

    describe('init', function () {
        it('should correct with valid input', function () {
            const testInstance = new PaymentPackage(validName, validValue);
            assert.equal(testInstance.name, validName);
            assert.equal(testInstance.value, validValue);
            assert.equal(testInstance.VAT, 20);
            assert.isTrue(testInstance.active);
        });

        it('should correct with valid input with value floating-point number', function () {
            const testInstance = new PaymentPackage(validName, 1.5);
            assert.equal(testInstance.name, validName);
            assert.equal(testInstance.value, 1.5);
            assert.equal(testInstance.VAT, 20);
            assert.isTrue(testInstance.active);
        });
        it('should correct with valid input with value 0', function () {
            const testInstance = new PaymentPackage(validName, 0);
            assert.equal(testInstance.name, validName);
            assert.equal(testInstance.value, 0);
            assert.equal(testInstance.VAT, 20);
            assert.isTrue(testInstance.active);
        });
        it('should throw error with not a string name', function () {
            assert.throw(() => new PaymentPackage(123, validValue), NAME_ERROR_MESSAGE);
        });
        it('should throw error with empty string name', function () {
            assert.throw(() => new PaymentPackage('', validValue), NAME_ERROR_MESSAGE);
        });
        it('should throw error with not a number value', function () {
            assert.throw(() => new PaymentPackage(validName, '5'), VALUE_ERROR_MESSAGE);
        });
        it('should throw error with negative number value', function () {
            assert.throw(() => new PaymentPackage(validName, -1), VALUE_ERROR_MESSAGE);
        });
    });
    describe('VAT', function () {
        it('should correct with valid VAT', function () {
            const testInstance = new PaymentPackage(validName, validValue);
            testInstance.VAT = 10;
            assert.equal(testInstance.name, validName);
            assert.equal(testInstance.value, validValue);
            assert.equal(testInstance.VAT, 10);
            assert.isTrue(testInstance.active);
        });
        it('should correct with floating point VAT', function () {
            const testInstance = new PaymentPackage(validName, validValue);
            testInstance.VAT = 1.5;
            assert.equal(testInstance.name, validName);
            assert.equal(testInstance.value, validValue);
            assert.equal(testInstance.VAT, 1.5);
            assert.isTrue(testInstance.active);
        });
        it('should correct with 0 VAT', function () {
            const testInstance = new PaymentPackage(validName, validValue);
            testInstance.VAT = 0;
            assert.equal(testInstance.name, validName);
            assert.equal(testInstance.value, validValue);
            assert.equal(testInstance.VAT, 0);
            assert.isTrue(testInstance.active);
        });
        it('should throw error with not a number VAT', function () {
            const testInstance = new PaymentPackage(validName, validValue);
            assert.throw(() => testInstance.VAT = '10', VAT_ERROR_MESSAGE);
        });
        it('should throw error with negative number VAT', function () {
            const testInstance = new PaymentPackage(validName, validValue);
            assert.throw(() => testInstance.VAT = -1, VAT_ERROR_MESSAGE);
        });
    });
    describe('active', function () {
        it('should correct with true', function () {
            const testInstance = new PaymentPackage(validName, validValue);
            testInstance.active = true;
            assert.equal(testInstance.name, validName);
            assert.equal(testInstance.value, validValue);
            assert.equal(testInstance.VAT, 20);
            assert.isTrue(testInstance.active);
        });
        it('should correct with false', function () {
            const testInstance = new PaymentPackage(validName, validValue);
            testInstance.active = false;
            assert.equal(testInstance.name, validName);
            assert.equal(testInstance.value, validValue);
            assert.equal(testInstance.VAT, 20);
            assert.isFalse(testInstance.active);
        });
        it('should throw error with not a boolen', function () {
            const testInstance = new PaymentPackage(validName, validValue);
            assert.throw(() => testInstance.active = 'false', ACTIVE_ERROR_MESSAGE);
            assert.throw(() => testInstance.active = 0, ACTIVE_ERROR_MESSAGE);
            assert.throw(() => testInstance.active = {}, ACTIVE_ERROR_MESSAGE);
            assert.throw(() => testInstance.active = [false], ACTIVE_ERROR_MESSAGE);
            assert.throw(() => testInstance.active = null, ACTIVE_ERROR_MESSAGE);
            assert.throw(() => testInstance.active = undefined, ACTIVE_ERROR_MESSAGE);
        });
    });
    describe('toString', function () {
        let testInstance ={}
        beforeEach(()=> {testInstance = new PaymentPackage(validName, validValue)})
        it('should correct with default active and VAT', function () {
            const expected =`Package: ${validName}\n- Value (excl. VAT): ${validValue}\n- Value (VAT 20%): 6`
            assert.equal(testInstance.toString(), expected)
        });
        it('should correct with active = false', function () {
            testInstance.active = false
            const expected =`Package: ${validName} (inactive)\n- Value (excl. VAT): ${validValue}\n- Value (VAT 20%): 6`
            assert.equal(testInstance.toString(), expected)

        });
        it('should correct with VAT 10', function () {
            testInstance.VAT = 10
            const expected =`Package: ${validName}\n- Value (excl. VAT): ${validValue}\n- Value (VAT 10%): 5.5`
            assert.equal(testInstance.toString(), expected)

        });
    });
});