const chai = require('chai');
const bookSelection = require('./bookSelection');
const expect = chai.expect;

describe('bookSelection', function() {
    describe('isGenreSuitable', function() {
        it('should be wrong genre if genre is Thriller and age is less or equal to 12', function() {
            const genre = 'Thriller';
            const age = 12;
            const result = bookSelection.isGenreSuitable(genre, age);
            expect(result).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        })

        it('should be wrong genre if genre is Horror and age is less or equal to 12', function() {
            const genre = 'Horror';
            const age = 10;
            const result = bookSelection.isGenreSuitable(genre, age);
            expect(result).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        })

        it('should be okay in any other case', function() {
            const genre = 'Fantasy';
            const age = 8;
            const result = bookSelection.isGenreSuitable(genre, age);
            expect(result).to.equal(`Those books are suitable`);
        })
    })

    describe('isItAffordable', function() {
        it('should give error if price is not a number', function() {
            const price = "10";
            const budget = 5;
            const result = bookSelection.isItAffordable(price, budget);
            expect(result).to.throw('Error', "Invalid input");
        })

        it('should give error if budget is not a number', function() {
            const price = 10;
            const budget = '5';
            const result = bookSelection.isItAffordable(price, budget);
            expect(result).to.throw('Error', "Invalid input");
        })

        it('should be wrong if we dont have the money needed', function() {
            const price = 10;
            const budget = 5;
            const result = bookSelection.isItAffordable(price, budget);
            expect(result).to.equal("You don't have enough money");
        })

        it('should be okay in any other case', function() {
            const price = 10;
            const budget = 20;
            const result = bookSelection.isItAffordable(price, budget);
            expect(result).to.equal(`Book bought. You have 10$ left`);
        })
    })

    describe('suitableTitles', function() {
        it('should throw error if first input is not an array', function() {
            const arr = {};
            const wantedGenre = 'neshto';
            const result = bookSelection.suitableTitles(arr, wantedGenre);
            expect(result).to.throw('Error', "Invalid input");
        })

        it('should throw error if wanted genre is not a string', function() {
            const arr = [{hi: 'hi'}, {pesho: 'pesho'}];
            const wantedGenre = 2;
            const result = bookSelection.suitableTitles(arr, wantedGenre);
            expect(result).to.throw('Error', "Invalid input");
        })

        it('should return the proper output', function() {
            const arr = [{title: 'Lord of the rings', genre: 'Fantasy'}, {title: 'Harry Potter', genre: 'Fantasy'}];
            const genre = 'Fantasy';
            const result = bookSelection.suitableTitles(arr, genre);
            expect(result).to.deep.equal(['Lord of the rings', 'Harry Potter']);
        })

        it('should skip if genre is not the same as wanted genre', function() {
            const arr = [{title: 'Lord of the rings', genre: 'Fantasy'}, {title: 'Harry Potter', genre: 'Horror'}];
            const genre = 'Fantasy';
            const result = bookSelection.suitableTitles(arr, genre);
            expect(result).to.deep.equal(['Lord of the rings']);
        })
    })
})