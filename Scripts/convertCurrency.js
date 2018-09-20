/*
Create three person objects with the necessary info. Firstname, lastname, and bank account and country of residence.
The bank account is going to be a number that the person has to his/her bank account in US dollars.

Add a new property that corresponds to how much 1$ to the currency of every person's country corresponds.

The persons are coming from Greece, Switzerland and Australia respectively.

Create a function that creates a new property for each person that shows the bank account in his country's money.
*/

let convertCurr = function(person) {
  person.moneyInOwnCurrency = person.bankAccountUSD * person.weku;
}
let general =  {
  gender : `male`,
  retiredYet : false,
}

let mrSoflakis = {
  lastName : `Soflakis`,
  firstName : `Joannis`,
  bankAccountUSD : 15682,
  weku : 1.15,
  countryOfResidence : `Greece`,
  }

let mrBerli = {
  lastName : `Berli`,
  firstName : `Hans`,
  bankAccountUSD : 22311,
  weku : 2.1,
  countryOfResidence : `Switzerland`,
  }

let mrKangaroo = {
  lastName : `Kangaroo`,
  firstName : `Guy`,
  bankAccountUSD : 75150,
  weku : 0.83,
  countryOfResidence : `Australia`,
  }


convertCurr(mrKangaroo);
convertCurr(mrSoflakis);
convertCurr(mrBerli);
console.log(mrKangaroo);
console.log(mrSoflakis);
console.log(mrBerli);
