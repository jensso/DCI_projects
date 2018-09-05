// This is my age
console.log(47);

// This is the age  my Dad died
console.log(66);

/*this is the amount of years
there will be until I reach this age*/
console.log(66-47);

console.log(222+111);
console.log(222-111);
console.log(222*111);
console.log(222/111);
console.log(222%111);

// the number of days earths circles around the sun
console.log(365);

// the number of days mercury circles around the sun
console.log(365*0.15);

console.log('this is my first string');
console.log('...and this my second');
console.log(`..maybe I should create a loop.....`);

console.log(`It s been ${2018-1969} years since moon-landing`);
console.log('It s been '+(2018-1969)+' years since moon-landing');

console.log(typeof(50+`35`));
console.log(typeof(112+55-`33`));

var myAge = 47;
var dadsAge = 66+6;
var dadBecomingDaddy = dadsAge - myAge;
var vater = `Papa wurde Vater mit ${dadBecomingDaddy}`;
console.log(vater);

var celsiusReykjavik = 12;
var celsiusRome = 28;
var kelvinReykjavik = celsiusReykjavik +273;
var kelvinRome = celsiusRome +273;
console.log(kelvinReykjavik);
console.log(kelvinRome);

var randomNumber = 44;
var even =  randomNumber  %2;

console.log(even);
/*(!) HOISTING : scans code before! executing regarding existence of Variables & Functions,
this is the reason not executed code in statements is labelt as 'undefinded'*/
var myMoney = 100;
var hotelRate = 200;
// assuming a suite cost double as a regular room
if (myMoney*2 > hotelRate) {
  console.log(`Take the suite`)
} else if (myMoney <= hotelRate) {
  console.log(`take the room`)
}
else {
  console.log(`leave mate!`)
};
