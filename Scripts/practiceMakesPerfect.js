 // a program that accepts a number, and prints to the console if its negative, positive or 0.
var randomNumber = 0;

if (randomNumber > 0) {
  console.log(`${randomNumber} is positive!`);
  }
  else if (randomNumber <  0) {
    console.log(`${randomNumber} is negative!`);
    }
      else {
        console.log(`${randomNumber} is Zero!`);
        }

/* a program that reads a number and returns it's opposite.
e.g. If 5 returns -5. If -5 returns 5. */
var oppositeNumber = -96;

if (oppositeNumber !== 0) {
  console.log(oppositeNumber* -1);
  }
    else {
    console.log(`zero is neutral, dumbass!`);
    }
/*  or as ternary:
oppositeNumber !== 0 ? console.log(oppositeNumber* -1) : console.log(`zero is neutral, dumbass!`); */

 // a program that accepts 5 inputs as numbers & calculates the sum and the average of them.
var sum = true;
 var inputI = 110;
 var inputII = 22;
 var inputIII = 8;
 var inputIV = 45;
 var inputV = 517;

 if (sum) {
   console.log(inputI + inputII + inputIII + inputIV + inputV);
   console.log((inputI + inputII + inputIII + inputIV + inputV)/5);
    }
    else {
      console.log(`your input was not correct. Try again!`);
    }

// a program that accepts 3 numbers and prints the bigger of them.
var uno = 110;
var due = 112;
var tre = 911;

if (uno > due && uno > tre) {
  console.log(uno);
  }
  else if (due > uno && due > tre) {
    console.log(due);
}
  else if (tre > uno && tre > due) {
    console.log(tre)
}
      else {
      console.log(`at least 2 of your chosen numbers are identical. Try again!`)
}

/* a program that accepts an integer and prints how many days the corresponding month has.
When you achieve this, think a better and more efficient way to do this. */
var month30 = 4 || 6 || 9 || 11;
var month31 = 1 || 3 || 5 || 7 || 8 || 10 || 12;

var daysToSurvive = Math.floor(Math.random() *10) +3;

switch (daysToSurvive) {
  case 04:
  case 06:
  case 09:
  case 11:
    console.log(`the month ${daysToSurvive} has 30 days to survive!`);
    break;
  case 01:
  case 03:
  case 05:
  case 07:
  case 08:
  case 10:
  case 12:
    console.log(`the month ${daysToSurvive} has 31 days to survive!`);
    break;
  default:
    console.log(`It's february, dumbass!`)
}

/*Type a year and check if this year is a leap year (366 days),
given that leap years  are 2016, 2012, 2008, 2004, 2000 etc.*/
var yearInput = 2010;

if (yearInput/4 % !0) {
  console.log(`${yearInput} is not a leap year. Go directly to march 1st!`);
}
else {
  console.log(`${yearInput} is a leap year and you gain february 29th!`);
}
/* Print the sum of all numbers between 2 given numbers x, y.
For example if x = 1; y = 10; The sum of all between numbers is 55.
Do this without using a loop. The formula is not: (x + y) * (y / 2);
the formula is : n2(n2 + 1) / 2 - n1(n1 - 1) / 2; */
var alpha = Math.floor(Math.random() * 11);
var beta = Math.floor(Math.random() * 101);
if (alpha != beta) {
  console.log(`The sum of all the numbers between ${alpha} and ${beta} is:
                ${(beta*(beta+1)/2 - alpha*(alpha-1)/2)}`);
}
else {
  console.log(`there are no between numbers, dumbass!`);
}
