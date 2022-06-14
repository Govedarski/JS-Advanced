const assert = require('chai').assert;
const ChristmasMovies = require('./02. Christmas Movies_Resources');

describe('test ChristmasMovies', function () {


    describe('test init', function () {
        const testInstance = new ChristmasMovies();
        const movieName = 'Test Movie';
        const movieActors = ['Test', 'Testcho', 'Testev'];
        it('should valid with no params', function () {
            assert.isEmpty(testInstance.movieCollection);
            assert.isEmpty(testInstance.watched);
            assert.isEmpty(testInstance.actors);
        });
        it('should valid with params', function () {
            const testInstance = new ChristmasMovies('das', 'dasdas', 'dasdasd');
            assert.isEmpty(testInstance.movieCollection);
            assert.isEmpty(testInstance.watched);
            assert.isEmpty(testInstance.actors);
        });
    });

    describe('test buyMovie()', function () {

        it('should correct string with valid input only unique actors', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            const movieActors = ['Test', 'Testcho', 'Testev'];
            const expectedOutput = `You just got ${movieName} to your collection in which ${movieActors.join(', ')} are taking part!`
            assert.equal(testInstance.buyMovie(movieName, movieActors), expectedOutput);
            testInstance.buyMovie('test', ['test'])
            assert.deepEqual(testInstance.movieCollection, [
                {name:movieName, actors:movieActors},
                {name:'test', actors:['test']}]);
        });
        it('should correct string with valid input not unique actors', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            const movieActors = ['Test', 'Testcho', 'Testev'];
            const notUniqueMovieActors = ['Test', 'Testcho', 'Testcho', 'Testev'];
            const expectedOutput = `You just got ${movieName} to your collection in which ${movieActors.join(', ')} are taking part!`
            assert.equal(testInstance.buyMovie(movieName, notUniqueMovieActors), expectedOutput);
        });

        it('should raise error with duplicate movie', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            const movieActors = ['Test', 'Testcho', 'Testev'];
            const expectedOutput = `You just got ${movieName} to your collection in which ${movieActors.join(', ')} are taking part!`
            assert.equal(testInstance.buyMovie(movieName, movieActors), expectedOutput);
            assert.throw(()=>testInstance.buyMovie(movieName, movieActors),`You already own ${movieName} in your collection!`)
        });
    });

    describe('test discardMovie()', function () {

        it('should test with movie in the collects', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            const movieActors = ['Test', 'Testcho', 'Testev'];
            testInstance.buyMovie(movieName, movieActors)
            testInstance.watched[movieName] = 2
            assert.equal(testInstance.discardMovie(movieName), `You just threw away ${movieName}!`)
            assert.isFalse(testInstance.movieCollection.some(x => x.name === movieName))
            assert.isFalse(movieName in testInstance.watched)
        });

        it('should test with movie out of the collects', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            assert.throw(() => testInstance.discardMovie(movieName), `${movieName} is not at your collection!`)
        });

        it('should test with movie out of the watched  movies', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            const movieActors = ['Test', 'Testcho', 'Testev'];
            testInstance.buyMovie(movieName, movieActors)
            assert.throw(() => testInstance.discardMovie(movieName), `${movieName} is not watched!`)
        });
    });

    describe('watchMovie()', function () {
        it('should add watch with valid movie', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            const movieActors = ['Test', 'Testcho', 'Testev'];
            testInstance.buyMovie(movieName, movieActors)
            testInstance.watchMovie(movieName)
            assert.equal(testInstance.watched[movieName], 1)
            testInstance.watchMovie(movieName)
            assert.equal(testInstance.watched[movieName], 2)
        });
        it('should throw Error with not existing movie', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            assert.throw(()=>testInstance.watchMovie(movieName),'No such movie in your collection!')
        });
    });

    describe('favouriteMovie()', function () {
        it('should return the movie watched most', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            const movieActors = ['Test', 'Testcho', 'Testev'];
            const secondMovieName = 'Test Movie 2';
            const secondMovieActors = ['Test2', 'Testcho2', 'Testev2'];
            const thirdMovieName = 'Test Movie 3';
            const thirdMovieActors = ['Test3', 'Testcho3', 'Testev3'];

            testInstance.buyMovie(movieName, movieActors)
            testInstance.buyMovie(secondMovieName, secondMovieActors)
            testInstance.buyMovie(thirdMovieName, thirdMovieActors)
            testInstance.watchMovie(movieName)
            testInstance.watchMovie(movieName)
            testInstance.watchMovie(secondMovieName)
            testInstance.watchMovie(secondMovieName)
            testInstance.watchMovie(secondMovieName)
            testInstance.watchMovie(secondMovieName)
            testInstance.watchMovie(thirdMovieName)
            testInstance.watchMovie(thirdMovieName)

            assert.equal(testInstance.favouriteMovie(), `Your favourite movie is ${secondMovieName} and you have watched it 4 times!`)

        });
        it('should throw error when no movie ', function () {
            const testInstance = new ChristmasMovies();
            assert.throw(() => testInstance.favouriteMovie(), 'You have not watched a movie yet this year!')
        });
    });

    describe('mostStarredActors()', function () {
        it('should ', function () {
            const testInstance = new ChristmasMovies();
            const movieName = 'Test Movie';
            const movieActors = ['Test', 'Testcho', 'Testev'];
            const secondMovieName = 'Test Movie 2';
            const secondMovieActors = ['Test2', 'Testcho', 'Testev2'];
            const thirdMovieName = 'Test Movie 3';
            const thirdMovieActors = ['Test3', 'Testcho', 'Testev2'];

            testInstance.buyMovie(movieName, movieActors)
            testInstance.buyMovie(secondMovieName, secondMovieActors)
            testInstance.buyMovie(thirdMovieName, thirdMovieActors)
            assert.equal(testInstance.mostStarredActor(),`The most starred actor is Testcho and starred in 3 movies!`);
        });
        it('should return error if no movie', function () {
            const testInstance = new ChristmasMovies();
            assert.throw(() => testInstance.mostStarredActor(), 'You have not watched a movie yet this year!')

        });
    });
});
