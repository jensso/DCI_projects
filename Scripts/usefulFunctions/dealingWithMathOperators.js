/*
Create a random quote generator

Create 10 objects that contain quotes or sayings as strings from famous peoples,
and the names for every person who has credit for this quote, and store each object into an array.

Then create a function that any times it executes selects a random quote and prints the quote
and the name of the man who said the quote after it as a credit.

ex. 'Ask and you shall Receive, Jesus Christ'.
*/

let quoteDatabase = [

   {author: 'Jesus Christ',  quote: 'Ask and you shall receive'},
   {author: 'Lothar Matthäus',  quote: 'Milan or Madrid, at least it is Spain!'},
   {author: 'Giovanni Trappatoni',  quote: 'You play like Bottle empty'},
   {author: 'Arnold Schwarzenegger',  quote: `Hasta la vista, baby!`},
   {author: 'John F. Kennedy',  quote: 'Ich bin ein Berliner'},
   {author: 'Donald J. Trump',  quote: 'I m a very stable genius'},
   {author: 'Neil Armstrong',  quote: 'It s a little step for me but a big one for mankind!'},
   {author: 'Homer Simpson',  quote: `D'oh!`},
   {author: 'Obelix',  quote: 'son locos, los romanos'},
   {author: 'Julius Caesar', quote: 'Veni, Vidi, Vici'},
   {author: 'Tony Montana', quote: 'Say hello to my little friend!'},
   {author: 'Barack Obama', quote: 'Yes we can!'},
   {author: 'Bart Simpson', quote: 'Ay Caramba!'},


]
 let randomQuote = function() {
   let randomNumber = Math.floor(Math.random() * quoteDatabase.length);
   console.log(`"${quoteDatabase[randomNumber].quote}" said by ${quoteDatabase[randomNumber].author}`);
}
 randomQuote();
/*
Create a random Number within a range
Create a function that accepts a low number and a high number and creates a random number between these two thresholds.

ex. createRandom(1, 10) creates an integer between 1 and 10.

Make this re-usable with many combinations to be sure that it works.
At the end create a number between 50 and 55 for example.
The final random number should be an integer.
*/
let randomInRange = function(a,b) {
let randomBetween = Math.floor(Math.random() * (b-a)) + a;
  console.log(`randomly chose ${randomBetween} between ${a} & ${b}`);
}
randomInRange(10,20);
randomInRange(1,100);
randomInRange(1111,2222);

let lotto = function(x,y) {
  for (var i = 1; i <= 6; i++) {
  randomInRange(x,y)
  }
}
console.log(lotto(1,49));
/*
Find the biggest Number in an Array of Strings
An error has occurred and you have found yourself with data of 10 students result tests that are of string data type.

So the results you have is a list of : ['63', '55.5', '72', '77',  '35.5', '81', '95', '29.5', '44.5',  '80']

Find the biggest and the smallest result in this list and print the margin
between them by printing the absolute value of the difference between them.
Hint; Find a way to to convert each string into a number, or float.
Regardless round the floated numbers into the biggest nearest integer.
You may have learned some functions today that could be helpful.
*/
let otherResults = [`110`,`75.4`,`88`,`125`,`158.8`,`99.2`,`77`];
let results = ['63', '55.5', '72', '77',  '35.5', '81', '95', '29.5', '44.5',  '80'];
let marginCalc = function(arrayOfNumbers) {
  return Math.round(Math.abs((Math.max(...arrayOfNumbers))-Math.min(...arrayOfNumbers)));
}
// console.log( `The margin is ` + (Math.round(Math.max(...results)) - Math.round(Math.min(...results))));
// console.log(marginCalc(results));
// console.log(marginCalc(otherResults));
