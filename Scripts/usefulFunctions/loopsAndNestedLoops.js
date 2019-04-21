/*
Write a program that accepts a number and prints to the console it's multiplication table, up to 10.
For example the number 5 should print to the console the following sequence of numbers:
5 10 15 20 25 30 35 40 45 50

*/

var num = 3;
// var i =1;
for (var i = 1; i <=10; i++) {
  console.log(num*i);
}
// while (i <=10) {
//  console.log(num*i);
//  i++;
//  }

/*
Create a program that shows all the multiplication tables from numbers from 1 to 10
(and all the results by multiplying each number with each number from 1 to 10). Example follows:

1, 2, 3, 4, 5, 6, 7, 8, 9, 10
2, 4, 6, 8, 10, 12, 14,16, 18, 20,
3, 6, 9, 12, 15, 18, 21, 24, 27, 30
etc.
*/
for (var x=1; x<=10;x++) {
  for(var y=1; y<=10;y++) {
    console.log(x*y);
  }
}
