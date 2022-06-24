const assert = require('chai').assert;
const rentCar = require('./rentCar.js');


describe('rentCar', function () {
    const validShop = ['test', 'testov', 'test', 'testov', 'test'];
    describe('searchCar', function () {
        it('should correct with valid model and shop', function () {
            assert.equal(rentCar.searchCar(validShop, 'testov'), `There is 2 car of model testov in the catalog!`);
        });
        it('should throw correct error with empty array', function () {
            assert.throw(() => rentCar.searchCar([], 'testov'), 'There are no such models in the catalog!');
        });
        it('should throw correct error with not existing model', function () {
            assert.throw(() => rentCar.searchCar(validShop, 'testovia'), 'There are no such models in the catalog!');
        });
        it('should throw correct error with not an array shop', function () {
            assert.throw(() => rentCar.searchCar({}, 'testov'), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(undefined, 'testov'), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(null, 'testov'), 'Invalid input!');
            assert.throw(() => rentCar.searchCar('shop', 'testov'), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(2, 'testov'), 'Invalid input!');
        });
        it('should throw correct error with not an not a string model', function () {
            assert.throw(() => rentCar.searchCar(validShop, undefined), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(validShop, NaN), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(validShop, null), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(validShop, 1), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(validShop, []), 'Invalid input!');
        });
    });

    describe('calculatePriceOfCar', function () {

        it('should correct with valid model and valid days', function () {
            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 10), 'You choose Volkswagen and it will cost $200!');
            assert.equal(rentCar.calculatePriceOfCar('Audi', 10), 'You choose Audi and it will cost $360!');
            assert.equal(rentCar.calculatePriceOfCar('Toyota', 10), 'You choose Toyota and it will cost $400!');
            assert.equal(rentCar.calculatePriceOfCar('BMW', 10), 'You choose BMW and it will cost $450!');
            assert.equal(rentCar.calculatePriceOfCar('Mercedes', 10), 'You choose Mercedes and it will cost $500!');
        });

        it('should throw correct error with not existing model', function () {
            assert.throw(() => rentCar.calculatePriceOfCar('trabant', 10), 'No such model in the catalog!');
        });
        it('should throw invalid input error with not a string model', function () {
            assert.throw(() => rentCar.calculatePriceOfCar(undefined, 10), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar(null, 10), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar(10, 10), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar(NaN, 10), 'Invalid input!');
        });
        it('should throw invalid input error with not a integer days', function () {
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', 10.5), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', '10'), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', undefined), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', NaN), 'Invalid input!');
        });
    });

    describe('checkBudget', function () {
        it('should rent a car with enough budget', function () {
            assert.equal(rentCar.checkBudget(20, 10, 200), `You rent a car!`);
        });
        it('should need bigger budget with not enough budget', function () {
            assert.equal(rentCar.checkBudget(21, 10, 200), 'You need a bigger budget!');
        });
        it('should throw error with not a integer cost', function () {
            assert.throw(() => rentCar.checkBudget('20', 10, 200), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(20.5, 10, 200), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(undefined, 10, 200), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(null, 10, 200), 'Invalid input!');

        });
        it('should throw error with not a integer days', function () {
            assert.throw(() => rentCar.checkBudget(20, '10', 200), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(20, 10.5, 200), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(20, undefined, 200), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(20, null, 200), 'Invalid input!');
        });
        it('should throw error with not a integer budget', function () {
            assert.throw(() => rentCar.checkBudget(20, 10, '200'), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(20, 10, 200.5), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(20, 10, undefined), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(20, 10, null), 'Invalid input!');
        });
    });
});