/*
Create three person objects with the necessary info. Firstname, lastname, and bank account and country of residence.
The bank account is going to be a number that the person has to his/her bank account in US dollars.

Add a new property that corresponds to how much 1$ to the currency of every person's country corresponds.

The persons are coming from Greece, Switzerland and Australia respectively.

Create a function that creates a new property for each person that shows the bank account in his country's money.
*/


let general = {
  gender : `male`,
  retiredYet : false,
   convertCurr : function() {
    this.moneyInOwnCurrency =
    this.bankAccountUSD * this.weku;
  }
}

let PersonWith2Currencys = function(lastName,firstName,bankAccountUSD,weku,countryOfResidence) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.bankAccountUSD = bankAccountUSD;
  this.weku = weku;
  this.countryOfResidence = countryOfResidence;

  }

  let person1 = new PersonWith2Currencys(`Muller`, `Bob`, 2547, 1.236, `Switzerland`);
  let person2 = new PersonWith2Currencys(`Hans`, `Hansen`, 16325, 0.8777, `Sweden`);
  let person3 = new PersonWith2Currencys(`Trump`, `Vladimir`, 1000000, 1.11, `Russia`);



Object.setPrototypeOf(person1, general);
Object.setPrototypeOf(person2, general);
Object.setPrototypeOf(person3, general);

person3.convertCurr();
console.log(person3);
