const assert = require('chai').assert
const flowerShop = require('./flowerShop.js')

describe('flowerShop', function () {
    const validFlower = 'Rose'
    const gardenArray = ['Rose', 'Tulip', 'Gladiolus']

    describe('calcPriceOfFlowers', function () {
        const validPrice = 8
        const validQuantity = 3
        it('should expect correct with valid input', function () {
            assert.equal(flowerShop.calcPriceOfFlowers(validFlower,validPrice,validQuantity),
                `You need $${(validPrice*validQuantity).toFixed(2)} to buy ${validFlower}!`)
        });
        it('should throw Error with invalid type of flower', function () {
            assert.throw(()=>flowerShop.calcPriceOfFlowers(123, validPrice, validQuantity), 'Invalid input!')
            assert.throw(()=>flowerShop.calcPriceOfFlowers(undefined, validPrice, validQuantity), 'Invalid input!')
            assert.throw(()=>flowerShop.calcPriceOfFlowers(null, validPrice, validQuantity), 'Invalid input!')
            assert.throw(()=>flowerShop.calcPriceOfFlowers(NaN, validPrice, validQuantity), 'Invalid input!')
        });
        it('should throw Error with invalid type of price', function () {
            assert.throw(()=>flowerShop.calcPriceOfFlowers(validFlower, '4', validQuantity), 'Invalid input!')
            assert.throw(()=>flowerShop.calcPriceOfFlowers(validFlower, 3.5, validQuantity), 'Invalid input!')
            assert.throw(()=>flowerShop.calcPriceOfFlowers(validFlower, undefined, validQuantity), 'Invalid input!')
            assert.throw(()=>flowerShop.calcPriceOfFlowers(validFlower, NaN, validQuantity), 'Invalid input!')
        });
        it('should throw Error with invalid type of quantity', function () {
            assert.throw(()=>flowerShop.calcPriceOfFlowers(validFlower,validPrice, '4'), 'Invalid input!')
            assert.throw(()=>flowerShop.calcPriceOfFlowers(validFlower,validPrice, 3.5), 'Invalid input!')
            assert.throw(()=>flowerShop.calcPriceOfFlowers(validFlower,validPrice, undefined), 'Invalid input!')
            assert.throw(()=>flowerShop.calcPriceOfFlowers(validFlower,validPrice, NaN), 'Invalid input!')
        });
    });

    describe('', function () {
        it('should return available when find flower', function () {
assert.equal(flowerShop.checkFlowersAvailable('Tulip', gardenArray), `The Tulip are available!`)
        });
        it('should return available when find flower on index 0', function () {
            assert.equal(flowerShop.checkFlowersAvailable(validFlower, gardenArray), `The ${validFlower} are available!`)
        });
        it('should return sold when do not find flower', function () {
            assert.equal(flowerShop.checkFlowersAvailable('invalid', gardenArray),
                `The invalid are sold! You need to purchase more!`)
        });
    });

    describe('sellFlowers', function () {
        it('should correct with valid inputs', function () {
            assert.equal(flowerShop.sellFlowers(gardenArray, 1), 'Rose / Gladiolus')
        });
        it('should correct with valid inputs and space = 0', function () {
            assert.equal(flowerShop.sellFlowers(gardenArray, 0), 'Tulip / Gladiolus')
        });
        it('should correct with valid inputs and space = 2', function () {
            assert.equal(flowerShop.sellFlowers(gardenArray, 2), 'Rose / Tulip')
        });
        it('should throw Error with invalid garden', function () {
            assert.throw(()=> flowerShop.sellFlowers({},1),'Invalid input!')
            assert.throw(()=> flowerShop.sellFlowers(null,1),'Invalid input!')
            assert.throw(()=> flowerShop.sellFlowers(undefined,1),'Invalid input!')
            assert.throw(()=> flowerShop.sellFlowers(NaN,1),'Invalid input!')
        });
        it('should throw Error with not a integer space', function () {
            assert.throw(()=> flowerShop.sellFlowers(gardenArray,'1'),'Invalid input!')
            assert.throw(()=> flowerShop.sellFlowers(gardenArray,1.5),'Invalid input!')
            assert.throw(()=> flowerShop.sellFlowers(gardenArray,null),'Invalid input!')
            assert.throw(()=> flowerShop.sellFlowers(gardenArray,undefined),'Invalid input!')
            assert.throw(()=> flowerShop.sellFlowers(gardenArray,NaN),'Invalid input!')

        });
        it('should throw Error with space = -1', function () {
            assert.throw(()=> flowerShop.sellFlowers(gardenArray,-1),'Invalid input!')
        });
        it('should throw Error with space = 3', function () {
            assert.throw(()=> flowerShop.sellFlowers(gardenArray,3),'Invalid input!')
        });
    });
});
