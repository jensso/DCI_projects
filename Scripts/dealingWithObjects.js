let commonValues = {
  City: `Hamburg`,
  Language: `spanish`,
}

let mauro = {
  firstName: `Mauro`,
  lastName: `Fuentes`,
}

let daniel = {
  firstName: `Daniel`,
  lastName: `Cebolla`,
}

let marcelo = {
  firstName: `Marcelo`,
  lastName: `Ramirez`,
}

mauro = Object.create(commonValues);
// Attention!!! This way overwrites already existing propertys

Object.setPrototypeOf(daniel, commonValues);
Object.setPrototypeOf(marcelo, commonValues);

marcelo.city = `Basel`;
daniel.originCountry = `Ecuador`,
console.log(daniel.City);

delete marcelo.firstName;
