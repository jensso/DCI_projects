

export let testFBnotNr = (()=> {
  const expectedResult = `not a number`;
  const actualResult =fizzBuzz(`v`);
  if (expectedResult== actualResult) {
    console.log(`Test PASSED`);
  }
  else {
    console.error(`Test FAILED`);
  }


})();

export let testFBneg = (()=> {
  const expectedResult = `negative input`;
  const actualResult =fizzBuzz(-5);
  if (expectedResult== actualResult) {
    console.log(`Test PASSED`);
  }
  else {
    console.error(`Test FAILED`);
  }
})();

export let testFBFizzBuzz = (()=> {
        const expectedResult = `FizzBuzz`;
        const actualResult =fizzBuzz(45)
        if (expectedResult== actualResult) {
          console.log(`Test PASSED`);
        }
        else {
          console.error(`Test FAILED`);
        }})();

export let testFBfizz = (()=> {
    const expectedResult = `fizz`;
    const actualResult =fizzBuzz(5)
    if (expectedResult== actualResult) {
      console.log(`Test PASSED`);
    }
    else {
      console.error(`Test FAILED`);
    }})();

export let testFBbuzz = (()=> {
      const expectedResult = `buzz`;
      const actualResult =fizzBuzz(3)
      if (expectedResult== actualResult) {
        console.log(`Test PASSED`);
      }
      else {
        console.error(`Test FAILED`);
      }})();

export let testFBelse = (()=> {
            const expectedResult = 37;
            const actualResult = fizzBuzz(37);
            if (expectedResult== actualResult) {
              console.log(`Test PASSED`);
            }
            else {
              console.error(`Test FAILED`);
            }})();
