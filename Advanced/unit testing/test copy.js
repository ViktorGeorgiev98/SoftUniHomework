const chai = require('chai');
const math = require('./math');

const expect = chai.expect;

describe('Math', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      const result = math.add(2, 3);
      expect(result).to.equal(5);
    });
  });
});
