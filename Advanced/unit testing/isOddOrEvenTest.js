const chai = require('chai');
const isOddOrEven = require('./isOddOrEven');

const expect = chai.expect;

describe('issOddOrEven', function() {
    it ('should be a string', function() {
        const text = 2;
        const result = isOddOrEven(text);
        expect(result).to.equal(undefined);
    }) 

    it ('should be even', function() {
        const text = '1234';
        const result = isOddOrEven(text);
        expect(result).to.equal('even');
    })

    it('should be odd', function() {
        const text = '123';
        const result = isOddOrEven(text);
        expect(result).to.equal('odd');
    })
})