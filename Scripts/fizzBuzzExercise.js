var currentNum = 1;
var endNum = 100;

while (currentNum <= endNum) {

if (currentNum % 5 === 0 && currentNum % 3 === 0) {
  console.log(`FizzBuzz`);
}
else if (currentNum % 3 === 0) {
  console.log(`Fizz`);
}
else if (currentNum % 5 === 0) {
  console.log('Buzz');
}
else {
  console.log(`${currentNum}`);
  }
    currentNum++;
}
