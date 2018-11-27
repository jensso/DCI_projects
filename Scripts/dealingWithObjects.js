let commonValues = {
  City: `Hamburg`,
  Language: `spanish`,
}

let mauro = {
  firstName: `Mauro`,
  lastName: `Fuentes`,
  age: `45`,
}

let daniel = {
  firstName: `Daniel`,
  lastName: `Cebolla`,
  age: `33`,
}

let marcelo = {
  firstName: `Marcelo`,
  lastName: `Ramirez`,
  age: `46`,
}
mauro = Object.create(commonValues);
// Attention!!! This way overwrites already existing propertys

Object.setPrototypeOf(daniel, commonValues);
Object.setPrototypeOf(marcelo, commonValues);

marcelo.city = `Basel`;
daniel.originCountry = `Ecuador`,
console.log(daniel.City);
delete marcelo.firstName;
let LatinoGuys = function(firstName,lastName,age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
let jensso = new LatinoGuys(`Jens`, `Soltwedel`, 47);

class CarCompany {
  constructor(yearFounded, NameOfCEO, FieldOfCompany, OriginNation) {
    this.yearFounded = yearFounded;
    this.NameOfCEO = NameOfCEO;
    this.FieldOfCompany = FieldOfCompany;
    this.OriginNation = OriginNation
  }
}

class AlfaRomeo extends CarCompany {
  constructor(residence) {
    super(1901, `Alf Romeo`, `sportive Cars`, `Italy`);
    this.residence = residence;
  }
}

class Audi extends CarCompany {
  constructor() {
    super(1899, `August Horch`, `suburban Cars`, `Germany`);
    this.residence = `Ingolstadt`;
  }
}

class Bmw extends CarCompany {
  constructor() {
    super(1878, `Bernd Michael Weber`,`sportive & suburban Cars`, `Germany`);
    this.residence = `Munich`;
  }
}

class Dodge extends CarCompany {
  constructor() {
    super(1905,`Dick Dodgenson`, `Muscle Cars`, `USA`);
    this.residence = `Detroit`;
  }
}

class AlfaRomeoModels extends AlfaRomeo {
  constructor(smallCars,mediumCars,bigCars) {
    super(`Rome`);
    this.smallCars = smallCars;
    this.mediumCars = mediumCars;
    this.bigCars = bigCars;
  }
}

class BmwModels extends Bmw {
  constructor(smallCars,mediumCars,bigCars) {
    super();
    this.smallCars = smallCars;
    this.mediumCars = mediumCars;
    this.bigCars = bigCars;
  }
}

class DodgeModels extends Dodge {
  constructor(smallCars,mediumCars,bigCars) {
    super();
    this.smallCars = smallCars;
    this.mediumCars = mediumCars;
    this.bigCars = bigCars;
  }
}


let CarsFromDodge = new DodgeModels(`Pony`,`Charger`,`Challenger`);
console.log(CarsFromDodge);

let CarsFromAlfa = new AlfaRomeoModels(`123`,`Giulia`,`Spyder`);
console.table(CarsFromAlfa);
