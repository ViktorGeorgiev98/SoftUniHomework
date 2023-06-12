const chai = require('chai');
const charLookUp = require('./charLookUp');

const expect = chai.expect;

describe('charLookUp', function() {
    it('should be undefined if char is not a string', function() {
        const char = 5;
        const index = 2;
        const result = charLookUp(char, index);
        expect(result).to.equal(undefined);
    })

    it('should be undefined if index is not a number', function() {
        const char = '123';
        const index = '2';
        const result = charLookUp(char, index);
        expect(result).to.equal(undefined);
    })

    it('should be undefined if both are wrong', function() {
        const char = 123;
        const index = '2';
        const result = charLookUp(char, index);
        expect(result).to.equal(undefined);
    })

    it ('should be incorrect if index is negative', function() {
        const char = '123';
        const index = -1;
        const result = charLookUp(char, index);
        expect(result).to.equal('Incorrect index');
    })

    it ('should be incorrect if length is less than index', function() {
        const char = '123';
        const index = 5;
        const result = charLookUp(char, index);
        expect(result).to.equal('Incorrect index');
    })

    it ('should return the char at the specified index', function() {
        const char = '123';
        const index = 0;
        const result = charLookUp(char, index);
        expect(result).to.equal('1');
    })
})