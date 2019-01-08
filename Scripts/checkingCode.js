// let calculator = (a,b)=> {
//   if (typeof a !== `number` || typeof b !== `number`) {
//     return `Sorry. Not a number`;
//       }
//       else if (a<0) {
//     return Math.abs(a)*b;
//               }
//     return a + b;
// };

/* Testing Code through predicting the outcome with a testfunction */

// let additionPassed = (()=> {
//
//   const expectedResult = 25;
//   const actualResult = calculator(19,6);
//   if (expectedResult== actualResult) {
//     console.log(`Test PASSED`);
//       }
//     else {
//       console.error(`Test FAILED`);
//     }
// })();
//
// let additionFailed = (()=> {
//   const expectedResult = `Sorry. Not a number`;
//   const actualResult = calculator(false,`n`);
//
//   if (expectedResult== actualResult) {
//     console.log(`Test PASSED`);
//       }
//     else {
//       console.error(`Test FAILED`);
//     }
// })();
//
// let checkNegativeFail = (()=> {
//   const expectedResult = 90;
//   const actualResult = calculator(-9,10);
//
//   if (expectedResult== actualResult) {
//     console.log(`Test PASSED`);
//   }
//   else {
//     console.error(`Test FAILED`);
//     }
// })();

import {testFBnotNr,testFBneg,testFBFizzBuzz,testFBfizz,testFBbuzz,testFBelse} from './exported_checkingCode.js';
let fizzBuzz = (x)=> {

   if (typeof x !== `number`) {
     console.warn(`not a number`);
    return `not a number`;
    }
   else if (x <0) {
    console.warn(`negative input`);
    return `negative input`;
    }
    else if (x % 3 ==0 && x % 5 ==0) {
      console.warn(`FizzBuzz`);
      return `FizzBuzz`;
    }
    else if (x % 5 ==0) {
      console.warn(`fizz`);
      return `fizz`;
    }
    else if (x % 3 ==0) {
      console.warn(`buzz`);
      return `buzz`;
    }
    else {
      console.warn(x);
      return x;
  }
}
