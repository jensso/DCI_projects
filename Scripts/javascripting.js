// let jake /*object literal*/ = {
// //  keys : values
//   firstName : `Konstantinos`,
//   lastName : `Diakogiannis`,
//   nickName : `Jake`,
//   age : 30,
//   profession : `Machine Learning engineer`,
//   livesAtHome : false,
// };
//
// console.log(jake.lastName);
//
// let jensso = {
//   firstName : `Jens`,
//   lastName : `Soltwedel`,
//   nickName : `jenne`,
//   age : 47,
//   profession : `many`,
//   livesAtHome : true,
//   changeAge : function(newAge) {
//     this.age = newAge;
//   }
// }
//
// // or with different syntax: console.log(jensso[`age`]);
// console.log(`in 3 years you are going to be ${jensso.age + 3} years old! `);
//
// jensso.changeAge(29);
//
// console.log(jensso.age);
//
//
// let foreigner = {
//   firstName : `Pawel`,
//   lastName : `Mihailowicz`,
//   age : 27,
//   yearsOfResidence : 11,
//   countryOfResidence : `Switzerland`,
//   countryOfOrigin : `Poland`,
//   profession : `Facility Manager`,
//   salaryPerYear : `20000`,
//   doubleNationality : true,
//   minimumPresence : 10,
//   changeNationality : function() {
//     if (this.yearsOfResidence >= this.minimumPresence) {
//       if (this.doubleNationality) {
//       this.countryOfResidence = this.secondNationality;
//       }
//       else {
//         this.countryOfOrigin = this.countryOfResidence;
//         }
//       }
//     }
//   }
//
// foreigner.changeNationality(15);
// console.log(foreigner.nationality);
// let LatinInHH = {
//   nativeTongue : `spanish`,
//   gender : `male`,
// }
//
// mauro = {
//   inhProp : Object.create(LatinInHH),
//   firstName : `Mauro`,
//   lastName : `Navarro`,
//   nationality : `chilean`,
// }
//
// marcelo = {
//   firstName : `Marcelo`,
//   lastName : `Ramirez`,
//   nationality : `paraguyan`,
// }
//
// daniel = {
//   firstName : `Daniel`,
//   lastName : `Cipolla`,
//   nationality : `ecuadorian`,
// }
//
// console.log(daniel);
// console.log(mauro);
// console.log(marcelo);

let moneyWasted = {
  june : 888,
  july : 1005,
  august : 981,
  september : 777,
  october : 0,
}


let skills = {
  HtmlSkills : 58,
  CssSkills : 50,
  JsSkills : 66,
  SpanishSkills : 61,
}

let calcSkills = function() {
  let sum =0;
  let count =0;

  for (let props in skills) {
    sum += skills[props];
    count++;
    }
    this.average = sum / count;

}

calcSkills();
console.log(calcSkills());

Object.setPrototypeOf(moneyWasted, calcSkills);

moneyWasted.calcSkills();
