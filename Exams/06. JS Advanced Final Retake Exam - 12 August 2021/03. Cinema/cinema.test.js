const assert = require('chai').assert
const cinema = require('./cinema.js')

describe('cinema', function () {
    describe('showMovies', function () {
        it('should  correct with many movies', function () {
            const movies = ['test', 'test2', 'test3']
            const expected = movies.join(', ')
            assert.equal(cinema.showMovies(movies), expected)
        });
        it('should  correct with 1 movie', function () {
            const movies = ['test']
            assert.equal(cinema.showMovies(movies), 'test')
        });
        it('should correct with no movie', function () {
            const movies = []
            assert.equal(cinema.showMovies(movies), 'There are currently no movies to show.')
        });
    });
    describe('test ticketPrice', function () {
        it('should return 12.00 with Premiere projectionType', function () {
            assert.equal(cinema.ticketPrice("Premiere"), 12)
        });
        it('should return 7.50 with Normal projectionType', function () {
            assert.equal(cinema.ticketPrice("Normal"), 7.5)
        });
        it('should return 5.50 with Discount projectionType', function () {
            assert.equal(cinema.ticketPrice("Discount"), 5.5)

        });
        it('should throw Error with different projectionType', function () {
            assert.throw(() => cinema.ticketPrice("premiere"),'Invalid projection type.')
            assert.throw(() => cinema.ticketPrice("normal"),'Invalid projection type.')
            assert.throw(() => cinema.ticketPrice("discount"),'Invalid projection type.')
            assert.throw(() => cinema.ticketPrice("test"),'Invalid projection type.')
        });
    });

    describe('test swapSeatsInHall', function () {
        const SUCCESSFUL_MESSAGE = "Successful change of seats in the hall."
        const UNSUCCESSFUL_MESSAGE = "Unsuccessful change of seats in the hall."
        it('should successful with valid different places', function () {
            assert.equal(cinema.swapSeatsInHall(1, 4), SUCCESSFUL_MESSAGE);
        });
        it('should Unsuccessful with first place = 0', function () {
            assert.equal(cinema.swapSeatsInHall(0, 4), UNSUCCESSFUL_MESSAGE);
        });
        it('should Unsuccessful with second place = 0', function () {
            assert.equal(cinema.swapSeatsInHall(3, 0), UNSUCCESSFUL_MESSAGE);
        });
        it('should Unsuccessful with first place not a number', function () {
            assert.equal(cinema.swapSeatsInHall('2', 4), UNSUCCESSFUL_MESSAGE);
        });
        it('should Unsuccessful with first place < 0', function () {
            assert.equal(cinema.swapSeatsInHall(-2, 4), UNSUCCESSFUL_MESSAGE);
        });
        it('should successful with first place = 20', function () {
            assert.equal(cinema.swapSeatsInHall(20, 4), SUCCESSFUL_MESSAGE);
        });
        it('should Unsuccessful with second place not a number', function () {
            assert.equal(cinema.swapSeatsInHall(2, '4'), UNSUCCESSFUL_MESSAGE);
        });
        it('should Unsuccessful with second place < 0', function () {
            assert.equal(cinema.swapSeatsInHall(2, -4), UNSUCCESSFUL_MESSAGE);
        });
        it('should successful with second place = 20', function () {
            assert.equal(cinema.swapSeatsInHall(2, 20), SUCCESSFUL_MESSAGE);
        });
        it('should Unsuccessful with first place = second place', function () {
            assert.equal(cinema.swapSeatsInHall(2, 2), UNSUCCESSFUL_MESSAGE);
        });
        it('should Unsuccessful with wrong type of first place', function () {
            assert.equal(cinema.swapSeatsInHall(5.2, 2), UNSUCCESSFUL_MESSAGE);
        });
        it('should Unsuccessful with wrong type of second place', function () {
            assert.equal(cinema.swapSeatsInHall(2, 5.2), UNSUCCESSFUL_MESSAGE);
        });
    });
});
