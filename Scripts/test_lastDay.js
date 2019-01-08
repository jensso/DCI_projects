const factorial = require('./lastDay.js')

let test_factorialNaN = (()=> {

const expected = `not a number!`
const actual = factorial(`ä`);

if (expected===actual) {
  console.log(`it works`);
  }
  else {
    console.log(`it failed`);
  }
})();

let test_factorialNeg = (()=> {

const expected = `negative number!`
const actual = factorial(-5);

if (expected===actual) {
  console.log(`it works`);
  }
  else {
    console.log(`it failed`);
  }
})();

let test_factorialZero = (()=> {

const expected = `number is zero!`
const actual = factorial(0);

if (expected===actual) {
  console.log(`it works`);
  }
  else {
    console.log(`it failed`);
  }
})();
console.log(5);
