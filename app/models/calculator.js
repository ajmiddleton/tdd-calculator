'use strict';
var _ = require('lodash');

class Calculator{
  static add(x, y){
    return x + y;
  }

  static subtract(x, y){
    return x-y;
  }

  static power(x, y){
    return Math.pow(x, y);
  }

  static sum(arr){
    return _.reduce(arr, (sum, num)=>sum + num);
  }

  static addFractions(fractions){
    return _.reduce(fractions, sumFractions);
  }
}
function sumFractions(sum, fraction){
  sum.num *= fraction.den;
  fraction.num *= sum.den;
  var temp = {};
  temp.num = sum.num + fraction.num;
  temp.den = sum.den * fraction.den;
  return reduceFrac(temp);
}

function reduceFrac(frac){
  for(var i = frac.num; i > 0; i--){
    if(frac.num%i === 0 && frac.den%i === 0){
      return {num:(frac.num/i), den:(frac.den/i)};
    }
  }
}

module.exports = Calculator;
