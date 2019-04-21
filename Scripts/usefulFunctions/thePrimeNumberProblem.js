/*
Check all numbers from 1 to 100 and print to the console only the ones that are primes.
p.s. Primes are the numbers that are perfectly divisible ONLY by themselves and 1!
*/
// for (var num = 1; num<=100 && num %2 ===0 && num %3 ===0 && num %5 ===0 && num %7 ===0; num++) {
//   console.log(`I am ${num} and I am Prime!`);
// }

for (var num = 1; num <=100; num++) {
  var isPrime = true;

  for (var div =2; div <= num; div++) {
    if (num % div === 0) {
      isPrime = false;
      break;
        }
        if (isPrime) {
          console.log(`${num}`);
        }
      }
    }
