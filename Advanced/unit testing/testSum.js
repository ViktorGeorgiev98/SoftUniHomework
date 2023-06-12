const chai = require('chai');
const sum = require('./sum');
const expect = chai.expect;

describe ('sum', function() {
    it('should return the sum of all numbers in the array', function() {
        const arr = [1, 2, 3, 4, 5];
        const result = sum(arr);
        expect(result).to.equal(15);
    }); 
});
