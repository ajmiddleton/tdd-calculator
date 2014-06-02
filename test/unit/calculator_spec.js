/* global describe, it */

'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function(){
  describe('.add', function(){
    it('should add two numbers',function(){
      var sum = Calculator.add(2, 3);
      expect(sum).to.equal(5);
    });
  });
  describe('.subtract', function(){
    it('should find difference between two numbers',function(){
      var diff1 = Calculator.subtract(3, 2);
      expect(diff1).to.equal(1);

      var diff2 = Calculator.subtract(-4, -2);
      expect(diff2).to.equal(-2);
    });
  });
  describe('.power', function(){
    it('should exponentiate x to the power of y',function(){
      var exp1 = Calculator.power(2, 3);
      expect(exp1).to.equal(8);

      var exp2 = Calculator.power(2, 0);
      expect(exp2).to.equal(1);

      var exp3 = Calculator.power(3, -3);
      expect(exp3).to.be.closeTo(0.037, 0.005);
    });
  });
  describe('.sum', function(){
    it('should add up a list of numbers', function(){
      var sum = Calculator.sum([3,4,5]);
      expect(sum).to.equal(12);
    });
  });
  describe('.addFractions', function(){
    it('should add up an array of fractions', function(){
      var testInput = [{'num':3,'den':5},{'num':4,'den':6}];
      var sum = Calculator.addFractions(testInput);
      expect(sum.num).to.equal(19);
      expect(sum.den).to.equal(15);
    });
  });
});
