const assert = require('chai').assert;
const dealership = require('./03. Dealership.js');

describe('test dealership', function () {
    describe('test newCarCost', function () {
        const newCarPrice = 50000;
        it('should with Audi  A4  B8 expect 15000 discount', function () {
            assert.equal(dealership.newCarCost('Audi  A4  B8', newCarPrice),35000);
        });
        it('should with Audi  A6  4K expect 20000 discount', function () {
            assert.equal(dealership.newCarCost('Audi  A6  4K', newCarPrice),30000);
        });
        it('should with Audi  A8  D5 expect 25000 discount', function () {
            assert.equal(dealership.newCarCost('Audi  A8  D5', newCarPrice),25000);

        });
        it('should with Audi  TT  8J expect 14000 discount', function () {
            assert.equal(dealership.newCarCost('Audi  TT  8J', newCarPrice),36000);

        });
        it('should with different car expect no discount', function () {
            assert.equal(dealership.newCarCost('Lada Niva', newCarPrice),50000);
        });
    });

    describe('carEquipment', function () {
        const extras = ['radio','ac', 'abs', '4x4']
        it('should with some extras', function () {
            assert.deepEqual(dealership.carEquipment(extras, [0,3]),['radio', '4x4']);
        });
        it('should with some extras', function () {
            assert.deepEqual(dealership.carEquipment(extras, [0,2]),['radio', 'abs']);
        });
        it('should with some extras', function () {
            assert.deepEqual(dealership.carEquipment(extras, [0,2,3]),['radio', 'abs', '4x4']);
        });
        it('should with all extras', function () {
            assert.deepEqual(dealership.carEquipment(extras, [0,1,2,3]),extras);
        });
        it('should with no extras', function () {
            assert.deepEqual(dealership.carEquipment(extras, []),[]);
        });
    });

    describe('test euroCategory', function () {
        it('should with category 3 expect no discount', function () {
            const expectedOutput = 'Your euro category is low, so there is no discount from the final price!'
            assert.equal(dealership.euroCategory(3), expectedOutput)
        });
        it('should with category 4 expect discount', function () {
            const expectedOutput = 'We have added 5% discount to the final price: 14250.'
            assert.equal(dealership.euroCategory(4), expectedOutput)
        });
        it('should with category 5 expect discount', function () {
            const expectedOutput = 'We have added 5% discount to the final price: 14250.'
            assert.equal(dealership.euroCategory(5), expectedOutput)
        });
    });
});