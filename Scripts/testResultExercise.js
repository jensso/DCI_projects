/*
Test Results problem
Imagine that you are a teacher and you have collected the results from a test of your 10 students in one place.
The test results are number from 1 to 100. The basis is 50.
Calculate what percentage of the class has not passed the basis.
The results are the followed: 78, 82, 45, 69, 23, 91, 55, 39, 66, 60.
*/

let testResults = [78,82,45,69,23,91,55,39,66,60];

let testPassed = function( basis, testErgebnisse) {
        let durchgefallen = 0;
        let quote;

  for (let einzelErgebnis of testErgebnisse) {
    if (einzelErgebnis < basis) {

      durchgefallen++;
      quote = durchgefallen / testErgebnisse.length *100;
    }
  }
  return quote;
}
let result = testPassed(50,testResults);

console.log(result);

/*
Imagine that a fellow teacher has decided to split your results into two arrays of 5 length each.
The one contains only scores from the ones that have passed and the other one from the ones that have not.
Find a way to unite these 2 arrays into one. Calculate the average of a score.
Add a new element score (an 11th) to the new array and recalculate the average again.
Compare if the average has moved up, down and by what margin?
In the end try to find the best score in the class and print it to the console.
*/
let passed = [67, 82, 91, 96, 54];
let notPassed = [46, 48, 24, 33, 30];
let average;
let allResults = passed.concat(notPassed);

let calculateAvg = function(array) {
  let sum = 0;
  for (let result of array) {
    sum +=result;
      }
      let average = sum / array.length;
      return average;
}
calculateAvg(allResults);
console.log(allResults);

allResults.push(78);
console.log(calculateAvg(allResults));

let calcMargin = function(firstAvg, secAvg) {
  let msg = ``;
  if (firstAvg > secAvg) {
    msg = `down`;
      }
      else {
        msg = `up`;
    }
}

let calcMax = function(array) {
  let maxNum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= maxNum) {
      maxNum = array[i];
    }
  }
  return maxNum;

}

console.log(calcMax(allResults));
