const fishStock = [];
const fishes4sale = [
  {name: 'tuna', price: 10},
  {name: 'salmon', price: 50},
  {name: 'koi', price: 100}
  ];
console.log(fishes4sale);
const orderBasket = [];
// const removeFishFromStock = (type, nrOfFish)=> {
//   for (let i = 1; i < nrOfFish.length; i++) {
//     fishStock.splice(type, 1);
//   }
// }

for (let i = 1; i <= 100; i++) {
  let randomNo =Math.floor(Math.random() * fishes4sale.length);
  for (let j = 0; j < fishes4sale.length; j++) {
    if (randomNo === j) {
      fishStock.push(fishes4sale[j]);
    }
  }
}
console.log('menge im stock ' + fishStock.length);

let orderFish = (nrTunas,nrSalmons,nrKois)=> {
  let tunas4sale =fishStock.filter((obj)=> obj.name ==='tuna');
  let salmons4sale =fishStock.filter((obj)=> obj.name ==='salmon');
  let kois4sale =fishStock.filter((obj)=> obj.name ==='koi');
  let quantityTunas = 0;
  let quantitySalmons = 0;
  let quantityKois = 0;

  if (tunas4sale.length >= nrTunas) {
    for (let i = 0; i < nrTunas; i++) {

      if (orderBasket.includes(tunas4sale[i])) {
        quantityTunas++;
        fishStock.splice(tunas4sale[i], 1);
      }
      else {
        orderBasket.push(tunas4sale[i]);
        fishStock.splice(tunas4sale[i], 1);
      }
    }
  }
    if (salmons4sale.length >= nrSalmons) {
      for (let i = 1; i <= nrSalmons; i++) {
        if (orderBasket.includes(salmons4sale[i])) {
          quantitySalmons++;
          fishStock.splice(tunas4sale[i], 1);
        }
        else {
          orderBasket.push(salmons4sale[i]);
          fishStock.splice(salmons4sale[i], 1);
        }
      }
    }
      if (kois4sale.length >= nrKois) {
        for (let i = 1; i <= nrKois; i++) {
          if (orderBasket.includes(kois4sale[i])) {
            quantityKois++;
            fishStock.splice(kois4sale[i], 1);
          }
          else {
            orderBasket.push(kois4sale[i]);
            fishStock.splice(kois4sale[i], 1);
          }
        }
      }

      console.log(fishStock.length);
  }
orderFish(2,2,2);


//const offeredTunas = tunas4sale >= nrTunas ? nrTunas : tunas4sale;
// return {{name: 'tuna', price: 10, quantity: offeredTunas}};
//...returns a new object for the orderBasket with the necessary info about quantity
// call the RemoveFishFromStock Function inside with the corresponding data
// const calcCost = cart=> {
//   return cart.reduce((totalOrderCost,eachFish)=> totatalOrderCost + eachFish.quantity * eachFish.price, 0);
// }
const nummern= [
  2,5,10,2,5,7,5
];
const myname= [
  'J','E','N','S'
];
console.log(myname.reduce((meinName, Buchstaben)=> meinName + Buchstaben,'ich heisse '));
console.log(myname.reduceRight((meinName, Buchstaben)=> meinName + Buchstaben,'rückwärts heisse ich '));
console.log(nummern.reduce((ergebnis, element)=> ergebnis * element,1));
console.log(myname.concat(nummern));

// // senior solution highly reusable:
// const allMyFishes = [];
// const fishInformation = [
//   {species: 'tuna', price: 10},
//   {species: 'salmon', price: 50},
//   {species: 'koi', price: 100},
//   {species: 'bacalao', price: 30}
// ]
// //populate our market
// const populateMarket = numOfFishes => {
//
//   for (let i = 1; i <= numOfFishes; i++) {
//     const createRandomIndex = Math.floor(Math.random() * fishInformation.length) // Generate a random number 0, 1 or 2
//     allMyFishes.push(fishInformation[createRandomIndex].species);
//   }
//
// }
// populateMarket(100);
// const removeFish = (type, numOfRemovedFishes) => {
//   for (let i = 1; i <= numOfRemovedFishes; i++) {
//     allMyFishes.splice(type, 1);
//   }
// }
// const createFishOrder = function(numOfTuna, numOfSalmons, numOfKois, numOfBacalaos) {
// const basket = [];
//   for(let i = 0; i < fishInformation.length; i++) {
//     const availableTypeFish = allMyFishes.filter(fish => fish === fishInformation[i].species).length;
//     const offeredTypeFish = availableTypeFish >= arguments[i] ? arguments[i] : availableTypeFish
//     removeFish(fishInformation[i].species, offeredTypeFish);
//     basket.push({species: fishInformation[i].species, price: fishInformation[i].price, quantity: offeredTypeFish});
//   }
//   return basket;
// }
// const calculateCost = (cart) => {
//   return cart.reduce((totalOrderCost, eachFish) => totalOrderCost + eachFish.quantity * eachFish.price, 0);
// }
//
// const maurosOrder = createFishOrder(5, 0, 2);
// console.log(calculateCost(maurosOrder));
//
// console.log(maurosOrder);
