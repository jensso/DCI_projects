// function square(num, x) {
//   squareIs = num**x;
//   console.log(`The ${x}. square of ${num} is ${squareIs}`);
//   }
//
// square(5, 7);
// square(11, 3);
// square(100, 4);
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
// multiply(1);

function factorial(n) {

  let result =1;
for ( let i =1; i <=n; i++) {
  result = result *i;
  }

    return console.log(result);

}

factorial(9);

// math formula= x! / y! *(x-y)!
