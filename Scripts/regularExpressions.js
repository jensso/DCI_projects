let dataFromUser = `jens`;

let myRegEx = /^(jens|peter)\ssoltwedel$/i;
// ^ accepts NOTHING before  $ accepts NOTHING after
// i IGNORES caseSensivity (upper-/lowercase)
console.log(myRegEx.test(dataFromUser));

let exerciseData =`Jack Nicholson`;
let exerciseRegex = /^jack\s(Nicholson|Sparrow)$/i;

console.log(exerciseRegex.test(exerciseData));

// let mhdRegEx = /^m(o|u)hamm?(a|e)d$/i;
//
// let version1 = `mohammed`;
// let version2 = `mohamad`;
// let version3 = `Muhammad`;
// let version4 = `mihammed`;
// console.log(mhdRegEx.test(version1));
// console.log(mhdRegEx.test(version2));
// console.log(mhdRegEx.test(version3));
// console.log(mhdRegEx.test(version4));

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
