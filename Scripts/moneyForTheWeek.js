/*
Write a function that calculates how much money i am going to earn until the end of the week
by just accepting a number from 1 to 7 that represents the days of the week.
(1 is for Monday, 2 for Tuesday, etc 7 is for Sunday).

Given i earn 10$ per hour and my working schedule is this:

Monday: I work 4 hours
Tuesday: I work 6 hours
Wednesday: I work 8 hours
Thursday: I work 10 hours
Saturday: I work 2 hours
Fridays and Sundays i can have my days-off.

Rules: Write this in a re-usable way and without using a loop (recursive style maybe!).
*/

function moneyForTheWeek(mon) {

let mon=4*10;
let tue=6*10;
let wed=8*10;
let thu=10*10;
let fri=0;
let sat=2*10;
let sun=0;

  if (mon) {
    console.log(tue+wed+thu+fri+sat+sun);
  }
  else if (tue) {
    console.log(wed+thu+fr+sat+sun);

  }
  else if (wed) {
    console.log(thu+sat+sun);

  }
  else if (thu) {
    console.log(fri+sat+sun);

  }
  else if (fri) {
    console.log(sat+sun);

}
else if (sat) {
  console.log(`tomorrow is Sunday! Thank the Lord!`);

}
else {
  console.log(`It's Sunday: Go to church!`)
}

moneyForTheWeek(`tue `);
