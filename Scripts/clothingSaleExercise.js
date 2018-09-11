/*
Imagine that you work at sales department in a clothing-shop and you are responsible for selling 3 products:

A t-shirt that costs 10$
A Jeans that costs 30$
and a Jacket that costs 150$

You have noticed a paradox pattern. Every three people of the new customers buy the same things.
For example the first customer buys  3 t-shirts.
1,4,7... 3*10
The second customer buys  2 Jeans.
2,5,8... 2*30
The third customer buys a jacket.
3,6,9.... 1*150
And then again the same from the beginning.
The fourth customer again 3 t-shirts.
The fifth customer buys again 2 jeans.
The sixth customer buys again one jacket.
That continues until the end of the day.

Find out how much money your cashier has if the initial cashier was already at 150$ and the total
number of customers at the end of the day was 78.
*/

console.log(`clothingSaleExercise`);

var tshirt=10;
var jeans=30;
var jacket=150;

var customerID=1;

for (var cashier=150; customerID <=78; customerID++) {
  if (customerID === 1 || customerID %3 ===1) {
    cashier += 3*tshirt;
    }
  else if (customerID === 2 || customerID %3 ===2) {
    cashier += 2*jeans;
    }
    else if (customerID  %3 ===0){
      cashier += 1*jacket;
    }
    console.log(`You had ${customerID} customers and your total money should be: ${cashier}! `);
}
