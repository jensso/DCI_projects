/*
Imagine that you are currently the big boss of a company.
It is the first day of the month and you want to pay your employees. In the company now work 72 employees.
The cashier/balance of your company now is 100.000$. You will use these to pay the salaries to your workers.
Analytically your company is comprised of:
50 workers with ops and general duites: each earns 1.000$.
10 web developers:

      4 of them are Frontend Developers: each earns 1.500$

      4 of them are Backend Developers: each earns 2.000$

      2 of them are FullStack developers: each earns 3.000$

5 Project managers: each earns 4.000$
5 DevOps Engineers: each earns 5.000$
2 Data Scientists:
      1 Data Analyst: each earns $7.500
      1 Machine Learning Engineer: each earns 10.000$
Suppose you want to start paying them one by one and pay as many as you can. But there is an order.
Everyone has an identifying number. The Data Scientist come first (from 1 to 2).
Then the web devs (3 to 4, Full stack come first), (5 to 8, here come the Backend Devs), then the frontend Devs.
Then the normal workers.
Then DevOps Engineers
Project Managers last.

Print a message to console after the program to know exactly how many people have not received
their payment yet, in order to raise your middle finger to these suckers.
Additionally print how much money your balance has after the payment.
*/

var cashier = 100000;
var staffId = 1;
var engineerGuy = 10000;
var dataAnalystGuy = 7500;
var fullStackGuys =3000;
var backendGuys = 2000;
var frontendGuys = 1500;
var normalGuys = 1000;
var devOpsEngineers = 5000;
var projectManager = 4000;

while (cashier > 0) {
  if (staffId == 1) {
    cashier = cashier-engineerGuy;
    }
  else if (staffId == 2) {
    cashier = cashier-dataAnalystGuy;
    }
  else if (staffId >2 && staffId <5) {
    cashier = cashier-fullStackGuys;
    }
  else if (staffId >4 && staffId <9) {
    cashier = cashier-backendGuys;
    }
  else if (staffId >8 && staffId <13) {
    cashier = cashier-frontendGuys;
  }
  else if (staffId >12 && staffId <63) {
    cashier = cashier-normalGuys;
  }
  else if (staffId >62 && staffId <68) {
    cashier = cashier-devOpsEngineers;
  }
  else {
    cashier = cashier-projectManager;
  }
  staffId++;
}

console.log(`${staffId} of the staff got paid, ${cashier} € are left over to spent for important stuff!`);
