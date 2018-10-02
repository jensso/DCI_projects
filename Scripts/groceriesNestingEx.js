/*
Groceries Nesting exercise
Your wife / your husband has left urgently for work this morning and has left you the list for the grocery items
that you should pick from the supermarket for the week. Because he/she was in a rush meshed it up and you
ended up with 2 lists.

The first list contains the names of the groceries.
And the second one the amount of every corresponding items you should buy.
The groceries list is comprised of 5 items. chocolate, bananas, rice, beers, deodorant.
The amount for each is: 5, 5, 2, 6, 1.
Store these lists in 2 different arrays.
g
Then find a way to create a pair for every index (ex. ['chocolate', 5] and store this into an empty array.
The final result should be: [['chocolate', 5], ['bananas', 5], ['rice', 2], ['beers', 6], ['deodorant', 1]].

In the end find a way to print 5 times a message to the console that says:
Please buy 5x chocolate.
Please buy 5x bananas.
Please buy 2x rice.
Please buy 6x beers.
Please buy 1x dedorant.
*/

  let groceries = [`chocolate`, `bananas`, `rice`, `beers`, `deodorant`];
  let amount = [5, 5, 2, 6, 1];
  let finalList = [];

  for (let i = 0; i < amount.length; i++) {
    finalList.push([groceries[i], amount[i]]);
    console.log(groceries[i], amount[i]);
}
// console.log(finalList); Try it with a Loop,
console.log(`Please buy ${finalList[0][1]} x ${finalList[0][0]}`);
console.log(`Please buy ${finalList[1][1]} x ${finalList[1][0]}`);
console.log(`Please buy ${finalList[2][1]} x ${finalList[2][0]}`);
console.log(`Please buy ${finalList[3][1]} x ${finalList[3][0]}`);
console.log(`Please buy ${finalList[4][1]} x ${finalList[4][0]}`);
