var currentNumber =1;
var endNumber=100;

// while (currentNumber <= endNumber) {
//   if (currentNumber %2 !==0) {
//     console.log(`The ${currentNumber} is odd!`);
//       }
//       else {
//         console.log(`The ${currentNumber} is even!`);
//       }
//       currentNumber++;
// }

while (currentNumber <= endNumber) {

currentNumber % 2 ===0 ? console.log(`The ${currentNumber} is odd!`) : console.log(`The ${currentNumber} is even!`);
currentNumber++;
}
