/*
Find the forbidden word
Create a function that accepts a sentence as an argument (a string) and checks if this sentence contains
one of the forbidden words you have predefined. If it does print to the console something like
('The message cannot be printed because it contains inappropriate words'). Otherwise print the sentence itself.
Predefine 5 forbidden words and put them in an array before creating the function.
Thus it would be easier to check every word if it is included to the forbidden array of words or not.
hint; You may want to refresh the strings split and the arrays includes method before starting.
*/
let showSentence = (sentence)=> {
  let explicit = [`cock`,`ASS`,`butt`,`Dick`,`cunt`];
  explicit = explicit.join(` `).toLowerCase().split(` `);
  sentence = sentence.toLowerCase().split(` `);

  for (let i = 0; i < explicit.length; i++) {
    if (sentence.includes(explicit[i])) {
    console.log('The message cannot be printed because it contains inappropriate words');
    return sentence;
    break;
    }
  }
console.log(sentence.join(` `));
}
showSentence(`My name is DICK`);
showSentence(`My Name is Dirk`);
/*
Print all favorite colors
Store into an array of strings all the colors that you like.
example ['navy blue', 'lightgreen', 'brown' , 'rebeccapurple'].
Then print a phrase to console without using a loop that is like this
'My favorite colors among others are: navy blue, lightgreen, brown, rebeccapurple.'
Make this the most reusable way you know, so it can be expanded for
favorite foods, favorite places to visit and many other types of arrays
and collection you may think.
hint; You may want to revisit the array join method before proceeding further.
*/
let favColors = [`colors`,`navy`,`red`,`silver`,`grey`,`darkgrey`,`black`,`even more black`];
let favFoods = [`food`,`Pizza`,`Pasta`,`Chocolate`,`beer`,`more beer`]
let favThings = (favThings)=> {
  let things = favThings.shift();
console.log(`My favorite ${things} among others are ${favThings}`);
}
favThings(favFoods);
favThings(favColors);
/*
Create an array that contains 10 objects. Every object holds information about a person.
The attributes that are being stored for every person are:
his first name,his last name,his favorite team,and the city that he lives in.
So all of them are type of strings.
Create a global function that accepts a specific team as an argument,
loops through all the objects of the array and prints the city of the person
only if he supports the team that is specified in the parameter.
In other words the function  printCityOf Fans('Dortmund')
is going to print the city of living of all the fans (objects inside the array)
that have 'Dortmund' as a favorite team.
hint; You may want to recall how to loop through an array
and also how to use the new constructor for creating multiple objects from a template.
*/

let fan = (firstName,lastName,favTeam,homeTown)=> {
this.firstName = firstName;
this.lastName = lastName;
this.favTeam = favTeam;
this.homeTown = homeTown;
}
let heiko = new fan(`Heiko`,`Rathofer`,`Schalke 04`,`Plön`);
let dirk = new fan(`Dirk`,`Dirksen`,`Werder Bremen`,`Bremen`);
let uwe = new fan(`Uwe`,`Seeler`,`HSV`,`Hamburg`);
let thomas = new fan(`Thomas`,`Tuchel`,`Paris SG`,`Dortmund`);
let marco = new fan(`Marco`,`Reus`,`BvB 09`,`Dortmund`);
let franz = new fan(`Franz`,`Beckenbauer`,`Bayern München`,`München`);
let angela = new fan(`Angela`,`Merkel`,`Dynamo Dresden`,`Berlin`);
let pep = new fan(`Pep`,`Guardiola`,`Manchester City`,`Manchester`);
let cristiano = new fan(`Cristiano`,`Ronaldo`,`Real Madrid`,`Turin`);
let stefan = new fan(`Stefan`,`Schulz`,`BvB 09`,`Stuttgart`);

let fanPeople = [heiko,dirk,uwe,thomas,marco,franz,angela,pep,cristiano,stefan];

let printCityOfFans = (team)=> {
  for (var i = 0; i < fanPeople.length; i++) {
    if (fanPeople[i].favTeam === team) {
      console.log(`${fanPeople[i].firstName + ` ` + fanPeople[i].lastName} is from ${fanPeople[i].homeTown}
                  and supports ${fanPeople[i].favTeam}`);
    }
  }
}
printCityOfFans(`HSV`);
printCityOfFans(`Dynamo Dresden`);
printCityOfFans(`BvB 09`);
/*
Return abbreviated strings
Write a function that accepts a string and returns an abbreviated form of it.
So for each word converts it to uppercase and takes the first letter from it.
hint; You may want to recall how to split a string into an array for having access
to each word. Then convert every word to upper case (there is a method for that)
and extracting the first letter of each word (words have indexes or what)
and push it into a new array where you store everything.
Then you may want to join the latest array into one string.
in the end when you call the function returnAbbr
('I write this text from Amsterdam') it should return 'IWTTFA'.
*/
let returnAbbr = (sentence)=> {
  let words =  sentence.toUpperCase().split(` `);
  let emptyArray = [];

    for (let i = 0; i < words.length; i++) {
      let firstLetters = words[i][0].slice(0);
      emptyArray.push(firstLetters);
    }
  emptyArray = emptyArray.join(`-`);
  console.log(`${words} abbreviated is ${emptyArray}`);
}
returnAbbr(`i write something here`);
returnAbbr(`all by clearly doing everything fine`);
/*
Show affordable items
Create 10 objects that contain only two properties each.
The name of a supermarket item, and it's price in $.
let bananas = {item: 'Banana', cost: 2};let onions = {item: 'Onion',  cost: 1}'
Store 10 of them in an array.
Create a budget variable that represents the money you have in your wallet.
Iterate through the array, and print the item property for every object that is affordable,
& for every object that your budget is bigger than item's cost.
Try to place the budget also as an argument in order to make this the most re-usable way you can.
*/
let bananas = {item: 'Banana', price: 2};
let onions = {item: "Onion", price: 1};
let tomatos = {item: "Tomato", price: 1.2};
let apples = {item: "Apple", price: 1.75};
let coke = {item: "Coca-Cola", price: 2.85};
let beer = {item: "Beer", price: 1.1};
let bread = {item: "Toast", price: 0.85};
let butter = {item: "Butter", price: 2.5};
let cheese = {item: "Cheese", price: 2.2};
let milk = {item: "Milk", price: 1};

let buyableThings = [bananas,onions,tomatos,apples,coke,beer,bread,butter,cheese,milk];

let budgetCalculator = (money)=> {
  for (var i = 0; i < buyableThings.length; i++) {
    if (buyableThings[i].price < money) {
      console.log(`You can have ${buyableThings[i].item}`);
    }
    else {
      console.log(`You can NOT have ${buyableThings[i].item}`);
    }
  }
}
budgetCalculator(2);

/*
Summarize the products
Imagine that  you sell 3 species of electronic equipment. Smartphones, laptops and air coolers.
An array that is called sales, holds the information about which kind has been sold.
You hold there from the beginning the last 10 sales. ex:
let sales = ['smartphone', 'smartphone', 'laptop', 'smartphone', 'laptop', 'air cooler',  'smartphone', 'smartphone', 'laptop', 'smartphone'];
This array shows that have been solved until now 6 smartphones, 3 laptops and 1 air cooler.
Create a function that accepts an array of sold items (like sales)
and returns an object with keys the string of the item ('smartphone', 'laptop', 'air cooler' etc)
and a property the number of sold from this material.

For example. the function showQuantity(sales) is going to give back
   // {smartphone: 6,laptop: 3,air cooler: 1}
Make this the most re-usable way you can.
You may want to remind yourself both ways for adding properties into an object.
Especially one of those is going to untie your hands.
*/

let sales = ['smartphone', 'smartphone', 'laptop', 'smartphone', 'laptop', 'air cooler',
             'smartphone', 'smartphone', 'laptop', 'smartphone'];
let showQuantity = (array)=> {
  let soldSmartphones = 0;
  let soldLaptops = 0;
  let soldAirCooler = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === `smartphone`) {
      soldSmartphones++;
    }
    else if (array[i] === `laptop`) {
      soldLaptops++;
    }
    else if (array[i] === `air cooler`) {
      soldAirCooler++;
    }
  }
  console.log(`${soldSmartphones} Smartphones, ${soldLaptops} Laptops & ${soldAirCooler} AirCooler sold`);
}
showQuantity(sales);
