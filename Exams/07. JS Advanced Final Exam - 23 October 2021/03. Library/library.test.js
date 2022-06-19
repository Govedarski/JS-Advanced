const assert = require('chai').assert;
const library = require('./library.js');

describe('library', function () {
    describe('calcPriceOfBook', function () {
        const validBook = 'Test book';
        it('should no discount all valid year 1981', function () {
            assert.equal(library.calcPriceOfBook(validBook, 1981), `Price of ${validBook} is 20.00`);
        });
        it('should discount all valid year 1980', function () {
            assert.equal(library.calcPriceOfBook(validBook, 1980), `Price of ${validBook} is 10.00`);

        });
        it('should throw error invalid nameOfBook', function () {
            assert.throw(() => library.calcPriceOfBook(4566, 1980), 'Invalid input');
        });
        it('should throw error invalid year', function () {
            assert.throw(() => library.calcPriceOfBook(validBook, '1980'), 'Invalid input');
            assert.throw(() => library.calcPriceOfBook(validBook, 19.8), 'Invalid input');
        });
    });

    describe('findBook', function () {
        const books = ['Book', 'Test', 'myBook'];
        it('should find book with book in array', function () {
            assert.equal(library.findBook(books, 'myBook'), 'We found the book you want.');
        });
        it('should not find book with book not in array', function () {
            assert.equal(library.findBook(books, 'my Book'), 'The book you are looking for is not here!');
        });
        it('should throw Error with empty array', function () {
            assert.throw(() => library.findBook([], 'myBook'), 'No books currently available');
        });
    });

    describe('arrangeTheBooks', function () {
        it('should store books with 40 books', function () {
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.")
        });
        it('should store books with 0 books', function () {
            assert.equal(library.arrangeTheBooks(0), "Great job, the books are arranged.")

        });
        it('should not store books with 41 books', function () {
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.")
        });
        it('should throw Error with -1 books', function () {
            assert.throw(() => library.arrangeTheBooks(-1), "Invalid input");
        });
        it('should throw Error with not a number count of books', function () {
            assert.throw(() => library.arrangeTheBooks('1'), "Invalid input");
        });
    });
});
