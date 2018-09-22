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
