const factory = require('../proto.js');
const assert = require('assert');

describe(`testing the functions which calculate something`,()=>{
  describe(`test factorialNumber`,()=>{
    it(`should return the factorial of the Argument`, ()=>{
      const actualResult = factory.factorialNumber(5);
      const expectedResult = 120;

      assert.equal(actualResult,expectedResult);
    })

    it(`should return a message that a pos nr is necessary`,()=>{
      const actualResult = factory.factorialNumber(-5);
      const expectedResult = `value needs to be a positive number`;

      assert.equal(actualResult,expectedResult);


    })

  })
  describe(`test calculateNumbers`,()=>{
    it(`should return the sum of the arguments`, ()=>{
      const actualResult = factory.calcNumbers(10,15);
      const expectedResult = 25;

      assert.equal(actualResult,expectedResult);
    })
    it(`should return the product if Arg b is neg`,()=>{
      const actualResult = factory.calcNumbers(10,-5);
      const expectedResult = -50;

      assert.equal(actualResult,expectedResult);
    })
    it(`should return a message if a or b Arg b is NaN`,()=>{
      const actualResult = factory.calcNumbers(10,`7`);
      const expectedResult = `operation not possible. must be numbers`;

      assert.equal(actualResult,expectedResult);

    })


  })
  describe(`test the fizzBuzz function`, ()=> {
    it(`should return the msg if it is mutiple of 3 & 5`, ()=>{
      const actualResult = factory.fizzBuzz(15);
      const expectedResult = `FizzBuzz`;

      assert.equal(actualResult,expectedResult);
    })
    it(`should return the msg if it is mutiple of 3`, ()=>{
      const actualResult = factory.fizzBuzz(9);
      const expectedResult = `Fizz`;

      assert.equal(actualResult,expectedResult);
    })
    it(`should return the msg if it is mutiple of 5`, ()=>{
      const actualResult = factory.fizzBuzz(10);
      const expectedResult = `Buzz`;

      assert.equal(actualResult,expectedResult);
    })
    it(`should return the msg if the inout is NaN`, ()=>{
      const actualResult = factory.fizzBuzz(`7`);
      const expectedResult = `You get nothing here!`;

      assert.equal(actualResult,expectedResult);
    })
    it(`should return the num itself`, ()=>{
      const actualResult = factory.fizzBuzz(7);
      const expectedResult = 7;

      assert.equal(actualResult,expectedResult);
    })
  })

  describe(`test the Zodiac Function`, ()=> {
const datesToCheck = [
  new Date(2020,2,22),
  new Date(2020,3,22),
  new Date(2020,4,22),
  new Date(2020,5,22),
  new Date(2020,6,25),
  new Date(2020,7,25),
  new Date(2020,8,25),
  new Date(2020,9,25),
  new Date(2020,10,25),
  new Date(2020,11,25),
  new Date(2020,0,25),
  new Date(2020,1,25),
]
const allZodiacs = factory.allZodiacs;


  for (let i = 0; i < datesToCheck.length; i++) {
    // datesToCheck[i]
    it(`should return ${allZodiacs[i].sign}`, ()=>{
      const actualResult = factory.showZodiac(datesToCheck[i]);
      const expectedResult = `Your zodiac is ${allZodiacs[i].sign}`;

      assert.equal(actualResult,expectedResult);
    })

  }



  })
})
