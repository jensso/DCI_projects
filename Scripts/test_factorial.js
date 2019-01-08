import {factorial} from '../Scripts/factorial.js';
let test_factorial = (()=> {
  const expected = 120;
  const actual = factorial(5);

  if (expected === actual) {
    console.log(`it works`);
  }
  else {
    console.warn(`ERROR`);
  }
})();
// not a number , is a negative, is 0, is positive

let test_factorialNaN = (()=> {
  const expected = `not a number!`
  const actual = factorial(`y`);

  if (expected === actual) {
    console.log(`it works`);
  }
  else {
    console.warn(`ERROR`);
  }

})();

let test_factorialNeg = (()=> {
  const expected = `negative number!`
  const actual = factorial(-8);

  if (expected === actual) {
    console.log(`it works`);
  }
  else {
    console.warn(`ERROR`);
  }
})();

let test_factorialZero = (()=> {
  const expected = `number is zero!`
  const actual = factorial(0);

  if (expected === actual) {
    console.log(`it works`);
  }
  else {
    console.warn(`ERROR`);
  }
})();
