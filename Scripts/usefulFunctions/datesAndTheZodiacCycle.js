let currentDate = new Date();
console.log(currentDate);
let nextBday = new Date(2019,5,9);
console.log(nextBday);
let nextXmas = new Date(`Dec/24/2019`);
console.log(nextXmas);
// Date Getters
let dateOfBday = nextBday.getDate();
console.log(dateOfBday);
// Date Setters
nextXmas.setMonth(5);
console.log(nextXmas);
/*
Book future Day event
Create a function that accept two date objects as arguments. The First is the current date,
the second a future date that the user wants to book a seat on an event you are organizing.
Compare the dates and if the second date is in the future print 'Your event for the mm.dd.yyyy is already guaranteed.'
*/
// let months = [`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];
// let today = new Date();
// let eventDate = new Date(2019,5,13);
//
// let compareDates = function(today, eventDate) {
//   if (today < eventDate) {
//     let getDate = eventDate.getDate();
//     let getYear = eventDate.getFullYear();
//     let getMonth = eventDate.getMonth();
//     console.log(`Your event for ${getDate}.${months[getMonth]}.${getYear} is already guaranteed.`);
//   }
//   else {
//     console.log(`Please select a Date in the Future.`);
//   }
// }
// compareDates(today,eventDate);

/*
Is it a weekend?
Create a function that accepts a specific date given as an argument and returns a message
if the day of the specific date is a weekend day or not.
*/
// let weekendTracker = function(specificDate) {
//   let date2check = new Date(specificDate);
//   let getDay = date2check.getDay();
//   let week = [`SUN`,`MON`,`TUE`,`WED`,`THU`,`FRI`,`SAT`];
//   if (getDay === 0 || getDay === 6) {
//     console.log(`Be Happy, it is ${week[getDay]}`);
//   }
//   else {
//     console.log(`It is ${week[getDay]}, so keep working!`);
//   }
// }
// weekendTracker(`2001-09-11`);
// weekendTracker(`2001-09-09`);
/*
How many days remained?
Create a function that accepts a date object as an argument and calculates how many days remain
until the end of the month. The function should return a number.
*/

/*
Last day of each month
Write a function that calculates what is the last day of each month on a given year.
Pass the given year as an argument to make this the most reusable way you can.
*/

let lastDaysOfMonth = function(year) {
  let days = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];
  for (let i = 1; i <= 12; i++) {
  let lastDayOfMonth = new Date(year, i, 0);
  let dayOfWeek = lastDayOfMonth.getDay();
  console.log(`the ${lastDayOfMonth} in ${year} is a ${days[dayOfWeek]}.`);
  }
}
lastDaysOfMonth(2018);
/*
Create the Zodiac cycle
Write a function that accepts an argument as a date as a birthdate and returns the zodiac sign of the user.
You may want to create an array with possible dates of every zodiac sign and filter them out.
*/
let whichZodiacAmI =function(dateOfBirth) {
  dateOfBirth = new Date(dateOfBirth);
  let year = dateOfBirth.getFullYear();

let zodiacSigns = [
    Aries = [ start = new Date(year,02,21), end = new Date(year,03,19),`ARIES`],
   Taurus = [start = new Date(year,03,20), end = new Date(year,04,20),`TAURUS`],
   Gemini = [start = new Date(year,04,21), end = new Date(year,05,20),`GEMINI`],
   Cancer = [start = new Date(year,05,21), end = new Date(year,06,22),`CANCER`],
   Leo = [start = new Date (year,06,23), end = new Date(year,07,22),`LEO`],
   Virgo = [start = new Date (year,07,23), end = new Date(year,08,22),`VIRGO`],
   Libra = [start = new Date(year,08,23), end = new Date(year,09,22),`LIBRA`],
   Scorpio = [start = new Date(year,09,23), end = new Date(year,10,21),`SCORPIO`],
   Sagittarius = [start = new Date(year,10,22), end = new Date(year,11,21),`SAGITTARIUS`],
   Capricorn = [start = new Date(year-1,11,22), end = new Date(year,00,19),`CAPRICORN`],
   // due to the change of the year the code needs to be adjusted
   Aquarius = [start = new Date(year,00,20), end = new Date(year,01,18),`AQUARIUS`],
   Pisces = [start = new Date(year,01,19), end = new Date(year,02,20),`PISCES`],
 ];
  for (let i = 0; i < zodiacSigns.length; i++) {
      if (zodiacSigns[i][0] <= dateOfBirth && zodiacSigns[i][1] >= dateOfBirth) {
        console.log(`Your zodiac sign is ${zodiacSigns[i][2]}`);
        return;
    }
  }
}
let jensBirthday = new Date(1971,5,9);
let meirsBirthday = new Date(1984,0,4);
whichZodiacAmI(jensBirthday);
whichZodiacAmI(`1985-Jan-25`);
whichZodiacAmI(new Date(1954,2,5));
whichZodiacAmI(`1977/7/7`);
whichZodiacAmI(`25-Mar-1994`);
whichZodiacAmI(meirsBirthday);
