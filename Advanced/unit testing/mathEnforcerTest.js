const chai = require('chai');
const mathEnforcer = require('./mathEnforcer');

const expect = chai.expect;
const closeTo = chai.closeTo;

describe('mathEnforcer', function() {
    describe('addFive', function() {
        it('should return undefined if input is not a number', function() {
            const input = '2';
            const result = mathEnforcer.addFive(input);
            expect(result).to.equal(undefined);
        })
        it('return result if input is a number', function() {
            const input = 2;
            const result = mathEnforcer.addFive(input);
            expect(result).to.equal(7);
        })

        it('should handle negative numbers correctly', function() {
            const result = mathEnforcer.addFive(-10);
            expect(result).to.equal(-5);
         });

         it('should handle floating-point numbers correctly', function() {
            const result = mathEnforcer.addFive(2.5);
            expect(result).to.be.closeTo(7.5, 0.0001);
          });
    })

    describe('subtractTen', function() {

        it('should handle negative numbers correctly', function() {
            const result = mathEnforcer.subtractTen(-5);
            expect(result).to.equal(-15);
          });

        it('if param is not a number, return undefined', function() {
            const input = 2;
            const result = mathEnforcer.substractTen(input);
            expect(result).to.equal(undefined);
        })

        it('should handle floating-point numbers correctly', function() {
            const result = mathEnforcer.subtractTen(7.5);
            expect(result).to.be.closeTo(-2.5, 0.0001);
          });

        it('return result if input is a number', function() {
            const input = 20;
            const result = mathEnforcer.substractTen(input);
            expect(result).to.equal(10);
        })

        
    })

    describe('sum', function() {
        it('return undefined in first number is not a number', function() {
            const num1 = '1';
            const num2 = 2;
            const result = mathEnforcer.sum(num1, num2);
            expect(result).to.equal(undefined);
        })
        
        it('should handle negative numbers correctly', function() {
            const result = mathEnforcer.sum(-5, -10);
            expect(result).to.equal(-15);
          });

        it('return undefined in second number is not a number', function() {
            const num1 = 1;
            const num2 = '2';
            const result = mathEnforcer.sum(num1, num2);
            expect(result).to.equal(undefined);
        })

        it('should return result if the numbers are correct', function() {
            const num1 = 2;
            const num2 = 5;
            const result = mathEnforcer.sum(num1, num2);
            expect(result).to.equal(10);
        })

        it('should handle floating point number correctly', function() {
            const num1 = 2.5;
            const num2 = 2.5;
            const result = mathEnforcer.sum(num1, num2);
            expect(result).to.be.closeTo(6.25, 0.0001);
        })
    })
})