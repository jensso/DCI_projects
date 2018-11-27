let dataFromUser = `jens`;

let myRegEx = /^(jens|peter)\ssoltwedel$/i;
// ^ accepts NOTHING before  $ accepts NOTHING after
// i IGNORES caseSensivity (upper-/lowercase)
console.log(myRegEx.test(dataFromUser));

let exerciseData =`Jack Nicholson`;
let exerciseRegex = /^jack\s(Nicholson|Sparrow)$/i;

console.log(exerciseRegex.test(exerciseData));

let mhdRegEx = /^m(o|u)hamm?(a|e)d$/i;

let version1 = `mohammed`;
let version2 = `mohamad`;
let version3 = `Muhammad`;
let version4 = `mihammed`;
console.log(mhdRegEx.test(version1));
console.log(mhdRegEx.test(version2));
console.log(mhdRegEx.test(version3));
console.log(mhdRegEx.test(version4));

let nameRegEx = /^[a-z\s]+$/i;
console.log(nameRegEx.test(`mauro`));

let phoneRegEx = /^[0-9]{3}-[0-9]{4}-[0-9]{3}$/;
let telephone1 = `123-4567-123`;
console.log(phoneRegEx.test(telephone1));

let passwordRegEx = /^[a-z0-9]{5,20}$/i;
// [0-9] equals \d
// [a-z0-9] equals \w
// . (der Punkt) accepts EVERY single character
// {1,10} means min 1 and max 10
let myPassWord = `12A37bc`;
// console.log(passwordRegEx.test(myPassWord));

let cellPhoneRegEx = /^(0049|0)\s?(\d\s?){11}$/;
cellNo1 = `0049 01724192931`;
cellNo2 = `0 0172 4 19 29 31`;
cellNo3 = `0 0172 4 192931`;

console.log(cellPhoneRegEx.test(cellNo1));
console.log(cellPhoneRegEx.test(cellNo2));
console.log(cellPhoneRegEx.test(cellNo3));

let emailRegEx = /^.{2,50}\@[a-z]+\.[a-z]+$/;

let mail1 = `jensso@web.de`;
let mail2 = `kostas23@gmail.com`;
let fakeMail = `jenssoatweb,de`;
console.log(emailRegEx.test(mail1));
// console.log(emailRegEx.test(mail2));
// console.log(emailRegEx.test(fakeMail));

let urlRegEx = /^https?:\/\/www\.[\w|\-]{2,50}\.[a-z]{2,4}$/i;
console.log(urlRegEx.test(`https://www.w3schools.com`));
console.log(urlRegEx.test(`http://www.RTL.tv`));
console.log(urlRegEx.test(`https://www.norisbank-online.govt`));

let bearRegEx = /\bbears?\b/i;
console.log(bearRegEx.test(`i shave my beard`));
console.log(bearRegEx.test(`i like furry bears`));
console.log(bearRegEx.test(`I love watching bears fishing salmons in Kamtschatka`));
console.log(bearRegEx.test(`the heat is unbearable`));
console.log(bearRegEx.test(`i shave a bear with my swiss knife`));
console.log(`i like furry bears`.match(bearRegEx));

let twRegEx = /\btw(itter)?\b/ig;
let fbRegEx = /\bf(ace)?b(ook)?\b/ig;

let textarea = document.querySelector(`textarea`);
let fbSpan = document.querySelector(`#fb`);
let twSpan = document.querySelector(`#tw`);

textarea.addEventListener(`keyup`, function(ev) {

  if (textarea.value.match(fbRegEx)) {
    fbSpan.innerText = `Facebook is mentioned ${fbSpan.innerText = textarea.value.match(fbRegEx).length} times`;
  }
  if (textarea.value.match(twRegEx)) {
    twSpan.innerText = `Twitter is mentioned ${twSpan.innerText = textarea.value.match(twRegEx).length} times`;
  }
})

/*
Create an arrow function that accepts a string only, (the telephone country code)
and prints to the console the corresponding country string.
Bonus: Try to use no if statements, switch-case statements or ternary operators.
You can use of course loops and any array function you know.\
*/
let telephoneData = [
  {countryCode: '0030', country: 'Greece'},
  {countryCode: '0039', country: 'Italy'},
  {countryCode: '00972', country: 'Israel'},
  {countryCode: '0007', country: 'Russia'},
  {countryCode: '0044', country: 'United Kingdom'},
  {countryCode: '0001', country: 'United States'},
  {countryCode: '00963', country: 'Syria'},
  {countryCode: '0029', country: 'Belgium'},
  {countryCode: '0031', country: 'Holland'},
  {countryCode: '0049', country: 'Germany'},
];
let finder = (num) => {
   let countryMatch = telephoneData.find(o => o.countryCode === num);
   console.log(countryMatch.country);
}
finder(`0049`);
/*
Try to create a single arrow function that accepts a collection of data (in this case this array)
and returns only the names of every airline company whose average ticket costs less than 100 Euro.
Bonus: Try to use no if-statements etc. Make this as compact as possible.
*/
let airlinePrices = [
  {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
  {airlinesName: 'Aegean', avgPriceTicket: 65.8},
  {airlinesName: 'KLM', avgPriceTicket: 102.82},
  {airlinesName: 'British Airways', avgPriceTicket: 114.9},
  {airlinesName: 'Iberia', avgPriceTicket: 77.2},
  {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
  {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
  {airlinesName: 'Air France', avgPriceTicket: 105.6},
  {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
  {airlinesName: 'Emirates', avgPriceTicket: 135.4},
]

let findCheapAirlines = () => {
let cheapAirlines = airlinePrices.filter(cheapest => cheapest.avgPriceTicket <= 100);
for (var i = 0; i < cheapAirlines.length; i++) {
  console.log(cheapAirlines[i].airlinesName);
}
};
findCheapAirlines();

/*
Create a single arrow function that accepts this array as an argument and returns a new collection:
(new array with unique names, so no duplicates allowed. All the names but only once!).
*/
let names = [
  'Mauro','Eugen','Mauro', 'Meir','Eugen','Jens','Jens','Jake',
  'Mohammed','Mauro','Mohammed','Marcelo','Sue','Murhaf','Jens',
  ];

let createUniqueNames = (collection = names) => {
  let uniqueNames = [];
   for (let name of collection) {
    if (!uniqueNames.includes(name)) {
      uniqueNames.push(name);
    }
   }
   return uniqueNames;
}
let uniqueNames = createUniqueNames();
console.log(uniqueNames);

let specialNames = new Set();
 for (let name of names) {
  specialNames.add(name);
}
 console.log(specialNames);


let numbers = [0,2,4,6,8];
let multiplier = (array) => {
  let doubled = array.map(item => {
    return item *2;

  })
  return doubled;

}
let doubled = multiplier(numbers);
console.log(doubled);


let summAnArray = () => {
  let numbersArray = [1,2,3,4,6,8,10];
  let sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}
let sum = summAnArray();
console.log(sum);

let returnSum = arr => {
  return arr.reduce(function(a,b) {
    return a + b;
  }, 0)
}
console.log(returnSum(numbers));
