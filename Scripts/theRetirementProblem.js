/* Write a function that accepts some parameters and calculates the number of money
that will have been saved until a person retires.

If the person has already retired then the message 'Calculate your past memories mate!' should be printed.

If not, then the program should calculate how many years remain until the person retires,
the monthly income and take a specific percent of this income every month as saved money.

Example: A lady is 40 years old, she retires at 65, she earns 2000$ per month
and she saves the 5% of it. How much money will she have saved until she retires?
*/

function pension(age, retirementAge, monthlyIncome, savedMoneyPerMonthInPercent) {
  var amountOfMoney =0;
  if (age >=retirementAge) {
    console.log(`Calculate your past memories mate!`);
    return;
    }
  if (age <retirementAge) {
    amountOfMoney = (monthlyIncome*12)*(retirementAge-age)*savedMoneyPerMonthInPercent/100;
    console.log(`You will have collected ${amountOfMoney} until your retirement!`);
    }

}
pension(62, 67, 500, 10);
pension(25, 67, 2500, 7);
pension(47, 65, 1850, 5);
pension(67, 21, 500, 10);
pension(18, 66, 1200, 6.5);
pension(40, 63, 4800, 3.6);
