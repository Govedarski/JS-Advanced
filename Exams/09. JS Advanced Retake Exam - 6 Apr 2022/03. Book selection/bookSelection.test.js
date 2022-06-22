const bookSelection = require('./bookSelection.js')
const assert = require('chai').assert

describe('bookSelection', function () {
    describe('isGenreSuitable', function () {
        it('should correct with genre novel and 20 years', function () {
            assert.equal(bookSelection.isGenreSuitable('novel', 20), `Those books are suitable`)
        });
        it('should correct with genre novel and 12 years', function () {
            assert.equal(bookSelection.isGenreSuitable('novel', 12), `Those books are suitable`)

        });
        it('should correct with genre Horror and 20 years', function () {
            assert.equal(bookSelection.isGenreSuitable('Horror', 20), `Those books are suitable`)
        });
        it('should correct with genre Horror and 12 years', function () {
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`)
        });
        it('should correct with genre Thriller and 20 years', function () {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 20), `Those books are suitable`)
        });
        it('should correct with genre Thriller and 12 years', function () {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`)
        });
    });
    describe('isItAffordable', function () {
        it('should buy book with budget > price', function () {
            assert.equal(bookSelection.isItAffordable(10.5, 20), `Book bought. You have 9.5$ left`)
        });
        it('should buy book with budget = price', function () {
            assert.equal(bookSelection.isItAffordable(10.5, 10.5), `Book bought. You have 0$ left`)
        });
        it('should not enough money with budget < price', function () {
            assert.equal(bookSelection.isItAffordable(20, 10.5), "You don't have enough money")
        });
        it('should throw Error with budget not a number', function () {
            assert.throw(() => bookSelection.isItAffordable(20, '10'), "Invalid input")
        });
        it('should throw Error with price not a number', function () {
            assert.throw(() => bookSelection.isItAffordable('20', 10), "Invalid input")
        });
    });

    describe('suitableTitles', function () {
        const booksArray = [
            {title:'test', genre:'test'},
            {title:'test1', genre:'testov'},
            {title:'test2', genre:'test'},
            {title:'test3', genre:'testov'},
            {title:'test4', genre:'test'},
        ]
        it('should correct array with booksArray and matching genre ', function () {
            const expected = ['test1','test3']
            assert.deepEqual(bookSelection.suitableTitles(booksArray, 'testov'), expected)
        });
        it('should empty array with booksArray and not matching genre ', function () {
            const expected = ['test1','test3']
            assert.deepEqual(bookSelection.suitableTitles(booksArray, 'testove'), [])
        });

        it('should throw Error with wrong type bookArray', function () {
            assert.throw(()=>bookSelection.suitableTitles({}, 'novel'),"Invalid input");
        });
        it('should throw Error with wrong type genre', function () {
            assert.throw(()=>bookSelection.suitableTitles(booksArray, 2),"Invalid input");
        });
    });
});