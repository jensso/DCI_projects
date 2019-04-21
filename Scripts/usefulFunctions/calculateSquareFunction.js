// function square(num, x) {
//   squareIs = num**x;
//   console.log(`The ${x}. square of ${num} is ${squareIs}`);
//   }
//
// square(3, 3);

// function multiply(x) {
//
//   if (x >=1 && x <=10) {
//
//     for (let x = 1; x <= 10; x++) {
//
//       for (let y = 1; y <= 10; y++) {
//         console.log(x * y);
//       }
//     }
//   }
//
//   else {
//     console.log(`put a number between 1 and 10`);
//   }
// }
//
// multiply(5);

function factorial(n) {
  let result =1;
for ( let i =1; i <=n; i++) {
  result = result *i;
  }
    return result;
}

let calculateCombinations = function(x,y) {
  let totalCombinations = 0;
  for (let i = y; i <= x; i++) {
    totalCombinations += factorial(x) / (factorial(i) * factorial(x -i));
    // math formula= x! / y! *(x-y)!
  }
  return totalCombinations;
}
console.log(calculateCombinations(5,3));

let moneyPerBet = function(budget, x, y) {
  return budget / calculateCombinations(x, y);

}

console.log(moneyPerBet(20, 9, 7));
console.log(moneyPerBet(50, 6, 4));
console.log(moneyPerBet(20, 10, 2));
