
let counter = 10;
let countToZero = setInterval(function() {
  counter --;
  console.log(counter);
  if (counter === 0) {
    console.log(`Boom`);

    clearInterval(countToZero);
  }
},1000)

/*
Create a countdown until an event

Create a countdown timer between the current  date and a future day that holds an event at least 3 months from now.
The countdown should count reversely and show how many months remain between the dates ,
how many days, how many hours, minutes and seconds. The countdown should be updated after each second.
*/

let countToXmas = setInterval(ev=> {

let futureDate = new Date(2018,11,25);
let now = new Date();
let diffInMS = futureDate-now;

let yearsRemaining = diffInMS/1000/60/60/24/365;
let yearsRounded = Math.floor(yearsRemaining);
let daysRemaining = (yearsRemaining-yearsRounded)*365;
let daysRounded = Math.floor(daysRemaining);
let hoursRemaining = (daysRemaining-daysRounded)*24;
let hoursRounded = Math.floor(hoursRemaining);
let minutesRemaining = (hoursRemaining-hoursRounded)*60;
let minutesRounded = Math.floor(minutesRemaining);
let secondsRemaining = (minutesRemaining-minutesRounded)*60;
let secondsRounded = Math.floor(secondsRemaining);
let countdown = `${yearsRounded} years:${daysRounded} days:${hoursRounded} hours:${minutesRounded} minutes:${secondsRounded} seconds until X-Mas `;
   // document.body.innerHTML = (countdown);
if (futureDate <= now) {
  clearInterval(countToXmas);
}
},1000)
