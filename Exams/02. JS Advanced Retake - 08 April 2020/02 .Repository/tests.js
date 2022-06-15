let {Repository} = require('./solution.js');
const expect = require('chai').expect;
const assert = require('chai').assert;


describe('Tests Repository', function () {
    describe('test init', function () {
        it('expect to have props and data as properties', function () {
            const testData = {'test': 'test'};
            const testInstance = new Repository(testData);
            assert.deepEqual(testInstance.data, new Map());
            assert.equal(testInstance.props, testData);
        });
    });

    describe('test count()', function () {
        it('test with no data expect 0', function () {
            const testData = {'test': 'test'};
            const testInstance = new Repository(testData);
            assert.equal(testInstance.count, 0);
        });
        it('test with data expect correct number', function () {
            const testData = {'test': 'test'};
            const testInstance = new Repository(testData);
            testInstance.data.set('test', 'test');
            assert.equal(testInstance.count, 1);
            testInstance.data.set('test2', 'test2');
            assert.equal(testInstance.count, 2);
        });
    });

    describe('test add()', function () {
        it('should all valid ', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const validEntity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const secondValidEntity = {
                name: 'Ivan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const testInstance = new Repository(validTestData);
            const expectedMap = new Map();
            expectedMap.set(0, validEntity);
            assert.equal(testInstance.add(validEntity), 0);
            assert.deepEqual(testInstance.data, expectedMap);
            expectedMap.set(1, secondValidEntity);
            assert.equal(testInstance.add(secondValidEntity), 1);
            assert.deepEqual(testInstance.data, expectedMap);
        });

        it('should throw error property missing', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const invalidEntity = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            const testInstance = new Repository(validTestData);
            try {
                testInstance.add(invalidEntity);
            } catch (error) {
                assert.equal(error.name, 'Error')
                assert.equal(error.message, `Property name is missing from the entity!`)
            }
            const expectedMap = new Map();
            assert.deepEqual(testInstance.data, expectedMap);
        });

        it('should throw error with invalid type of age', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const invalidEntity = {
                name: 'Pesho',
                age: '22',
                birthday: new Date(1998, 0, 7)
            };

            const testInstance = new Repository(validTestData);

            try {
                testInstance.add(invalidEntity);
            } catch (error) {
                assert.equal(error.name, 'TypeError')
                assert.equal(error.message, 'Property age is not of correct type!')
            }


            const expectedMap = new Map();
            assert.deepEqual(testInstance.data, expectedMap);
        });
        it('should throw error with invalid type of name', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const invalidEntity = {
                name: undefined,
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            const testInstance = new Repository(validTestData);
            assert.throw(() => testInstance.add(invalidEntity), `Property name is not of correct type!`);
            const expectedMap = new Map();
            assert.deepEqual(testInstance.data, expectedMap);
        });
        it('should throw error with invalid type of birthday', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const invalidEntity = {
                name: 'Pesho',
                age: 22,
                birthday: '1988-10-28'
            };

            const testInstance = new Repository(validTestData);
            assert.throw(() => testInstance.add(invalidEntity), `Property birthday is not of correct type!`);
            const expectedMap = new Map();
            assert.deepEqual(testInstance.data, expectedMap);
        });
    });


    describe('test getId()', function () {
        it('expect valid', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const validEntity = {
                name: 'pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const testInstance = new Repository(validTestData)
            testInstance.add(validEntity)
            assert.deepEqual(testInstance.getId(0), validEntity)
        });
        it('expect throw Error', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const validEntity = {
                name: 'pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const testInstance = new Repository(validTestData)
            testInstance.add(validEntity)
            assert.throw(()=>testInstance.getId(1), 'Entity with id: 1 does not exist!')
            assert.throw(()=>testInstance.getId(-5), 'Entity with id: -5 does not exist!')
            assert.throw(()=>testInstance.getId("0"), 'Entity with id: 0 does not exist!')
        });
    });

    describe('update()', function () {
        it('should with valid expect replace the old with the new one', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const validEntity = {
                name: 'pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity2 = {
                name: 'ivan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity3 = {
                name: 'dragan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const testInstance = new Repository(validTestData);
            testInstance.add(validEntity);
            testInstance.add(validEntity2);
            testInstance.update(1, validEntity3);
            const expectedMap = new Map();
            expectedMap.set(0, validEntity);
            expectedMap.set(1, validEntity3);
            assert.deepEqual(testInstance.data, expectedMap);
        });
        it('should with valid expect replace the old with the new one', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const validEntity = {
                name: 'pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity2 = {
                name: 'ivan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity3 = {
                name: 'dragan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const testInstance = new Repository(validTestData);
            testInstance.add(validEntity);
            testInstance.add(validEntity2);
            assert.throw(() => testInstance.update(2, validEntity3), 'Entity with id: 2 does not exist!');
        });
        it('should missing', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const validEntity = {
                name: 'pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity2 = {
                name: 'ivan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const invalidEntity = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const testInstance = new Repository(validTestData);
            testInstance.add(validEntity);
            testInstance.add(validEntity2);
            assert.throw(() => testInstance.update(1, invalidEntity), 'Property name is missing from the entity!');
        });
        it('should invalid', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const validEntity = {
                name: 'pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity2 = {
                name: 'gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const invalidEntity = {
                name: 'ivan',
                age: '22',
                birthday: new Date(1998, 0, 7)
            };
            const testInstance = new Repository(validTestData);
            testInstance.add(validEntity);
            testInstance.add(validEntity2);
            assert.throw(() => testInstance.update(1, invalidEntity), 'Property age is not of correct type!');
        });
    });

    describe('del()', function () {
        it('should happy case', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const validEntity = {
                name: 'pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity2 = {
                name: 'ivan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity3 = {
                name: 'dragan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const testInstance = new Repository(validTestData);
            testInstance.add(validEntity);
            testInstance.add(validEntity2);
            testInstance.add(validEntity3);
            testInstance.del(1);
            const expectedMap = new Map();
            expectedMap.set(0, validEntity);
            expectedMap.set(2, validEntity3);
            assert.deepEqual(testInstance.data, expectedMap);

        });
        it('should throw error', function () {
            const validTestData = {
                name: 'string',
                age: 'number',
                birthday: 'object'
            };
            const validEntity = {
                name: 'pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity2 = {
                name: 'ivan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const validEntity3 = {
                name: 'dragan',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const testInstance = new Repository(validTestData);
            testInstance.add(validEntity);
            testInstance.add(validEntity2);
            testInstance.add(validEntity3);
            assert.throw(() => testInstance.del(3), `Entity with id: 3 does not exist!`);
            assert.throw(() => testInstance.del(-1), `Entity with id: -1 does not exist!`);
            assert.throw(() => testInstance.del('1'), `Entity with id: 1 does not exist!`);
        });
    });
});
