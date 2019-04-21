let shop = {
  tshirtPrice : 10,
  jeansPrice : 30,
  jacketPrice : 150,
  tshirtStock : 100,
  jeansStock : 100,
  jacketStock : 100,
  balance : 0,
  sale: function(numShirts,numJeans,numJackets) {
    if (numShirts <= shop.tshirtStock && numJeans <= shop.jeansStock && numJackets <= shop.jacketStock)

     {
      let costOrder = numShirts* shop.tshirtPrice + numJeans* shop.jeansPrice + numJackets* shop.jacketPrice;
      this.numOfSales +=1;
      this.cashierBalance += costOrder;
      shop.balance += costOrder;
      shop.tshirtStock -=  numShirts;
      shop.jeansStock -= numJeans;
      shop.jacketStock -= numJackets;

          }
          else if (numShirts > shop.tshirtStock) {
            let costOrder = shop.tshirtStock* shop.tshirtPrice + numJeans* shop.jeansPrice + numJackets* shop.jacketPrice;
            this.numOfSales +=1;
            this.cashierBalance += costOrder;
            shop.balance += costOrder;
            shop.tshirtStock -=  shop.tshirtStock;
            shop.jeansStock -= numJeans;
            shop.jacketStock -= numJackets;
            }
            else if (numJeans > shop.jeansStock) {
              let costOrder = numShirts* shop.tshirtPrice + shop.jeansPrice* shop.jeansPrice + numJackets* shop.jacketPrice;
              this.numOfSales +=1;
              this.cashierBalance += costOrder;
              shop.balance += costOrder;
              shop.tshirtStock -=  shop.tshirtStock;
              shop.jeansStock -= numJeans;
              shop.jacketStock -= numJackets;
              }

    else {
      console.log(`not availebel`);
    }
  }
};

let cashier = function(id, employee) {
  this.id = id;
  this.employee = employee;
  this.numOfSales = 0;
  this.cashierBalance = 0;
}

let cashier1 = new cashier(1,`Hans`);
let cashier2 = new cashier(2, `Peter`);
let cashier3 = new cashier(3, `Paul`);

Object.setPrototypeOf(cashier1,shop);
Object.setPrototypeOf(cashier2,shop);
Object.setPrototypeOf(cashier3,shop);


cashier1.sale(1,2,0);
cashier2.sale(0,0,1);
cashier3.sale(0,2,0);

console.log(cashier1);
console.log(cashier2);
console.log(cashier3);
