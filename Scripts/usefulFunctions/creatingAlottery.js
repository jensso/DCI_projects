/*
Create a lottery that creates a  random number from 1 to 100. This is the lucky number.
Create a random number from 1 to 100 for the user. This is users number.

If the user's number is the lucky number then the user wins 100$.
If the absolute difference between user's number and the lucky number is less or equal to ten, then the user wins 100$ minus 10$ for every number in between.
 Example: The lucky numbers is 85 and the usersNumber is 77. The absolute difference is 8,
 so the user wins 20$ (100 - 8 * 10). If the usersNumber is 84, the user wins 90$ and so on.
In any other case the user wins nothing.

Print the lucky number, the user's number and the winnings of the user.
Extra bonus: Run this lottery 100 times and calculate how much money have you given to winnings.
*/
let totalWinnings = 0;
let win = 0;
let luckyNr;
let usersNr;


let lottery = function() {
   luckyNr = Math.ceil(Math.random()*100);
   usersNr = Math.ceil(Math.random()*100);

if (luckyNr === usersNr) {
  win = 100;
  }
  else if (Math.abs(luckyNr-usersNr) <= 10) {
    win = 100 - (Math.abs(luckyNr-usersNr)*10);
      }
      else {
        win = 0;
      }
      totalWinnings += win;
}
for (let i = 1; i <= 100; i++) {
lottery();
console.log(`${i}: The #${luckyNr} was drawn. #${usersNr} wins ${win}!`);
console.log(`IN TOTAL ${totalWinnings} HAVE BEEN WON!`);
}
