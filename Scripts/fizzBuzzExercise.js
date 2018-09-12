
function fizzBuzz(currentNum, endNum, x, y) {


while (currentNum <= endNum) {

if (currentNum % x === 0 && currentNum % y === 0) {
  console.log(`FizzBuzz`);
}
else if (currentNum % y === 0) {
  console.log(`Fizz`);
}
else if (currentNum % x === 0) {
  console.log('Buzz');
}
else {
  console.log(`${currentNum}`);
  }
    currentNum++;
}

}

fizzBuzz(17, 77, 2, 5);
fizzBuzz(20, 200, 3, 8);
