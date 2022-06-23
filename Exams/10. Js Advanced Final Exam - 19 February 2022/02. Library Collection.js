class LibraryCollection {
    books = [];

    constructor(capacity) {
        this.capacity = capacity;
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw Error('Not enough space in the collection.');
        }

        this.books.push({bookName, bookAuthor, payed: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const book = this._findBookOrThrowError(bookName);
        this._checkPaidOrThrowError(book, ' has already been paid.', false);
        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const book = this._findBookOrThrowError(bookName, "The book, you're looking for, is not found.");
        this._checkPaidOrThrowError(book, ' need to be paid before removing from the collection.');
        this.books.splice(this.books.indexOf(book), 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        const info = [`The book collection has ${this.capacity - this.books.length} empty spots left.`];
        let booksToShow = this.books;
        if (bookAuthor) {
            booksToShow = booksToShow.filter(book => book.bookAuthor === bookAuthor);
            info.pop()
            if (!booksToShow.length) {
                throw Error(`${bookAuthor} is not in the collection.`);
            }
        }
        info.push(booksToShow
                .sort((b1, b2) => b1.bookName.localeCompare(b2.bookName))
                .map(book => `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`)
                .join('\n'));
        return info.join('\n')
    }

    _findBookOrThrowError(bookName, message=null) {
        const book = this.books.find(book => book.bookName === bookName);
        if (!book) {
            throw Error(message ? message : `${bookName} is not in the collection.`);
        }
        return book;
    }

    _checkPaidOrThrowError(book, message, paid = true) {
        if (book.payed !== paid) {
            throw Error(book.bookName + message);
        }
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervan321tes'));