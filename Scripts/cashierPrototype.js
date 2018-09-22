/*
Suppose you are a manager in a shop that sells clothes (like Karstadt or H&M etc).
The day begins, and the total balance is empty.
Your shop sells 3 kinds of goods.
   t-shirts for 10$ each.
   jeans for 30$ each.
   jackets for 150$ each.
The shop has in stock 100 t-shirts, 100 jeans and 100 jackets.
The shop has 3 different cashiers so we can serve 3 clients maximum at the same time.

  Create an object for every cashier and save inside:
   the id of the cashier (from 1 to 3)
   the fullname of the employee that works in the cashier now.
   the number of customers this cashier has served. That is different for every cashier.
   the balance of every cashier at any moment (begins empty).

   Create a function that deals with any new buy from a customer the following way:
   Accepts what the customer has bought and how much of it does he want.
   If the quantity of the specified good the customer wants to buy is ok and does not surpass
   the limit of our stock for this material then we calculate the fee the customer needs to pay and we update
   first the cashier's balance and the total balance of the shop as well.
   In the end we increase the cashier's number of customers that have been served by 1.
   else if some material is not enough because we havn't so many pieces left,
   then cancel the order by consoling log a descriptive message to the console.
   In this case of course we don't update any other value.

   Additionally create another function that is for refunding in case the customer is not happy with the material
   he bought and he wants to give it back and take his money back.
   In such a case it should be clear what he returns back, so we can update the stock and how much of this material is left,
   and of course update the cashier's balance and the shop's balance in general
   (the whole calculation result should be deducted from both balances).
   Don't forget to decrease the number of customers that have been serve by 1 in this case.

Be careful! Some of the properties that are getting changed are shared through all cashiers
(like the total shop balance, or how much of a specific material is left) when others are different for every cashier separately.
You may want to think this first before you start implementing your architecture.
*/

let shirtStock = 100;
let jeansStock = 100;
let jacketStock = 100;
let totalBalance = 0;
let shirt = 10;
let jeans = 30;
let jacket = 150;

let cashier = function(cashID,firstName,lastName,servedCustomer,cashBalance) {
  this.cashID = cashID;
  this.firstName = firstName;
  this.lastName = lastName;
  this.servedCustomer = servedCustomer;
  this.cashBalance = cashBalance;
}
let cashier1 = new cashier(1,`Britta`,`Müller`,0,0);
let cashier2 = new cashier(2,`Helga`,`Hansen`,0,0);
let cashier3 = new cashier(3,`Andrea`,`Andersen`,0,0);

let sellIt = {
cashier1 : cashier1,
cashier2 : cashier2,
cashier3 : cashier3,
totalBalance : totalBalance,
    sale : function(kasse,menge,artikel) {
    switch (kasse)    {
      case 1:                 if (artikel == shirt && shirtStock > menge) {
                                shirtStock = shirtStock - menge;
                                cashier1.cashBalance = cashier1.cashBalance + (shirt*menge);
                                cashier1.servedCustomer++;
                              }
                              else if (artikel == jeans && jeansStock > menge) {
                                jeansStock = jeansStock - menge;
                                cashier1.cashBalance = cashier1.cashBalance + (jeans*menge);
                                cashier1.servedCustomer++;
                              }
                              else if (artikel == jacket && jacketStock > menge) {
                                jacketStock = jacketStock - menge;
                                cashier1.cashBalance = cashier1.cashBalance + (jacket*menge);
                                cashier1.servedCustomer++;
                              }
                              else {
                                console.log(`Auf Wiedersehen!`);
                              }
                            break;

      case 2:                 if (artikel == shirt && shirtStock > menge) {
                                shirtStock = shirtStock - menge;
                                cashier2.cashBalance = cashier2.cashBalance + (shirt*menge);
                                cashier2.servedCustomer++;
                              }
                              else if (artikel == jeans && jeansStock > menge) {
                                jeansStock = jeansStock - menge;
                                cashier2.cashBalance = cashier2.cashBalance + (jeans*menge);
                                cashier2.servedCustomer++;
                              }
                              else if (artikel == jacket && jacketStock > menge) {
                                jacketStock = jacketStock - menge;
                                cashier2.cashBalance = cashier2.cashBalance + (jacket*menge);
                                cashier2.servedCustomer++;
                              }
                              else {
                                console.log(`Auf Wiedersehen!`);
                              }
                              break;
      case 3:
                            if (artikel == shirt && shirtStock > menge) {
                              shirtStock = shirtStock - menge;
                              cashier3.cashBalance = cashier3.cashBalance + (shirt*menge);
                              cashier3.servedCustomer++;
                            }
                            else if (artikel == jeans && jeansStock > menge) {
                              jeansStock = jeansStock - menge;
                              cashier3.cashBalance = cashier3.cashBalance + (jeans*menge);
                              cashier3.servedCustomer++;
                            }
                            else if (artikel == jacket && jacketStock > menge) {
                              jacketStock = jacketStock - menge;
                              cashier3.cashBalance = cashier3.cashBalance + (jacket*menge);
                              cashier3.servedCustomer++;
                            }
                            else {
                              console.log(`Auf Wiedersehen!`);
                            }
                      break;
                    }
                    totalBalance = cashier1.cashBalance + cashier2.cashBalance + cashier3.cashBalance;
                  }
                }
refund = function(kasse,menge,artikel) {
  switch (kasse)    {
    case 1:                 if (artikel == shirt) {
                                shirtStock = shirtStock + menge;
                                cashier1.cashBalance = cashier1.cashBalance - (shirt*menge);
                                cashier1.servedCustomer -= 1;
                                }
                            else if (artikel == jeans) {
                                jeansStock = jeansStock + menge;
                                cashier1.cashBalance = cashier1.cashBalance - (jeans*menge);
                                cashier1.servedCustomer  -= 1;
                                }
                            else if (artikel == jacket) {
                                jacketStock = jacketStock + menge;
                                cashier1.cashBalance = cashier1.cashBalance - (jacket*menge);
                                cashier1.servedCustomer  -= 1;
                                }
                            break;

      case 2:               if (artikel == shirt) {
                                shirtStock = shirtStock + menge;
                                cashier2.cashBalance = cashier2.cashBalance - (shirt*menge);
                                cashier2.servedCustomer -= 1;
                                }
                            else if (artikel == jeans) {
                                jeansStock = jeansStock + menge;
                                cashier2.cashBalance = cashier2.cashBalance - (jeans*menge);
                                cashier2.servedCustomer -= 1;
                                }
                            else if (artikel == jacket) {
                                jacketStock = jacketStock + menge;
                                cashier2.cashBalance = cashier2.cashBalance - (jacket*menge);
                                cashier2.servedCustomer -= 1;
                                }
                            break;

      case 3:               if (artikel == shirt) {
                                shirtStock = shirtStock + menge;
                                cashier3.cashBalance = cashier3.cashBalance - (shirt*menge);
                                cashier3.servedCustomer -= 1;
                                }
                            else if (artikel == jeans) {
                                jeansStock = jeansStock + menge;
                                cashier3.cashBalance = cashier3.cashBalance - (jeans*menge);
                                cashier3.servedCustomer -= 1;
                                }
                            else if (artikel == jacket) {
                                jacketStock = jacketStock + menge;
                                cashier3.cashBalance = cashier3.cashBalance - (jacket*menge);
                                cashier3.servedCustomer -= 1;
                                }
                            break;
                              }
                              totalBalance = cashier1.cashBalance + cashier2.cashBalance + cashier3.cashBalance;
                            }


sellIt.sale(1,5,shirt);
sellIt.sale(2,2,jeans);
sellIt.sale(3,1,jacket);
sellIt.sale(2,2,jeans);
refund(3,1,jacket);
sellIt.sale(2,4,jeans);
sellIt.sale(1,2,jacket);
sellIt.sale(3,2,shirt);
sellIt.sale(1,3,shirt);
sellIt.sale(2,1,jeans);
sellIt.sale(3,1,jacket);
refund(3,1,shirt);
sellIt.sale(1,1,jeans);
sellIt.sale(2,4,jeans);
sellIt.sale(3,2,jacket);
refund(2,1,jeans);
sellIt.sale(1,2,shirt);
sellIt.sale(1,5,shirt);
sellIt.sale(2,2,jeans);
sellIt.sale(3,1,jacket);
refund(2,2,shirt);

console.log(cashier1);
console.log(cashier2);
console.log(cashier3);

console.log(`there are ${shirtStock} T-Shirts, ${jeansStock} Jeans & ${jacketStock} Jackets left in stock and $ ${totalBalance} in the cash box! `);
