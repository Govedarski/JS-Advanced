const assert = require('chai').assert;
const companyAdministration = require('./companyAdministration.js');

describe('companyAdministration', function () {
    describe('hiringEmployee', function () {
        const name = 'Pesho';
        const validPosition = 'Programmer';
        const invalidPosition = 'programmer';
        it('should expect hired with programmer with 3 years experience', function () {
            assert.equal(companyAdministration.hiringEmployee(name, validPosition, 3),
                `${name} was successfully hired for the position ${validPosition}.`);
        });
        it('should expect not hired with programmer with 2 years experience', function () {
            assert.equal(companyAdministration.hiringEmployee(name, validPosition, 2),
                `${name} is not approved for this position.`);
        });
        it('should throw Error with no programmer', function () {
            assert.throw(() => companyAdministration.hiringEmployee(name, invalidPosition, 2),
                `We are not looking for workers for this position.`);
        });
    });

    describe('calculateSalary', function () {
        it('should correct with valid input under 160 hours with integer', function () {
            assert.equal(companyAdministration.calculateSalary(100), 1500);
        });
        it('should correct with valid input under 160 hours with floating-point number', function () {
            assert.equal(companyAdministration.calculateSalary(100.5), 1507.5);
        });
        it('should correct with bonus with valid input beyond 160 hours', function () {
            assert.equal(companyAdministration.calculateSalary(200), 4000);
        });
        it('should correct with bonus with valid input 0 hours', function () {
            assert.equal(companyAdministration.calculateSalary(0), 0);

        });
        it('should correct with bonus with valid input 160 hours', function () {
            assert.equal(companyAdministration.calculateSalary(160), 2400);
        });
        it('should throw error with input not a number', function () {
            assert.throw(() => companyAdministration.calculateSalary('160'), 'Invalid hours');
        });
        it('should throw error with input under 0 hours', function () {
            assert.throw(() => companyAdministration.calculateSalary(-1), 'Invalid hours');
        });
    });

    describe('firedEmployee', function () {
        const validArray = ['Pesho', 'Ivan', 'Dragan'];
        it('should correct with valid array of employees and valid index', function () {
            assert.equal(companyAdministration.firedEmployee(validArray, 1), 'Pesho, Dragan');
        });
        it('should empty string with array of one employee and valid index', function () {
            assert.equal(companyAdministration.firedEmployee(['Pesho'], 0), '');
        });
        it('should single name with array of two employee and valid index', function () {
            assert.equal(companyAdministration.firedEmployee(['Pesho', 'Dragan'], 1), 'Pesho');
        });
        it('should throw Error with invalid array of employee and valid index', function () {
            assert.throw(() => companyAdministration.firedEmployee('Pesho', 1), 'Invalid input');
        });
        it('should throw Error with valid array of employee and not a integer index', function () {
            assert.throw(() => companyAdministration.firedEmployee(validArray, 1.2), 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(validArray, '1'), 'Invalid input');
        });
        it('should throw Error with valid array of employee and not out of range index', function () {
            assert.throw(() => companyAdministration.firedEmployee(validArray, -1), 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(validArray, 3), 'Invalid input');
        });
    });
});