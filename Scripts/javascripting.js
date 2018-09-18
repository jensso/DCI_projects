let jake /*object literal*/ = {
//  keys : values
  firstName : `Konstantinos`,
  lastName : `Diakogiannis`,
  nickName : `Jake`,
  age : 30,
  profession : `Machine Learning engineer`,
  livesAtHome : false,
};

console.log(jake.lastName);

let jensso = {
  firstName : `Jens`,
  lastName : `Soltwedel`,
  nickName : `jenne`,
  age : 47,
  profession : `many`,
  livesAtHome : true,
  changeAge : function(newAge) {
    this.age = newAge;
  }
}

// or with different syntax: console.log(jensso[`age`]);
console.log(`in 3 years you are going to be ${jensso.age + 3} years old! `);

jensso.changeAge(29);

console.log(jensso.age);


let foreigner = {
  firstName : `Pawel`,
  lastName : `Mihailowicz`,
  age : 27,
  yearsOfResidence : 11,
  nationality : `polish`,
  profession : `Facility Manager`,
  salaryPerYear : `20000`,
  doubleNationality : true,
  changeNationality : function(threshold) {
    if (this.yearsOfResidence >= threshold) {
      if (this.doubleNationality) {
      nationality = this.secondNationality;
      }
      else {
        foreigner.secondNationality = foreigner.nationality;
        }
      }
    }
  }


foreigner.changeNationality(11);
console.log(foreigner.nationality);
