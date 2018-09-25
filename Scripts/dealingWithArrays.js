/*
Imagine that you are the manager of a school that teaches 5 topics.
Math, science, history, geography and programming.
For the first 4 topics you have already found the teachers to conduct the lessons
and now you are actively looking for the fifth one.

First of all create an object that holds the topics as keys
and the fullname of the teacher as a string value. Thus you don't forget from now on who is going to teach what.

Then create a method that accepts 2 arrays.
These arrays contain the programming languages that candidates for the programming position have.
Also the first and second element of each of these arrays contain the
firstname and the lastname of each of the candidates as well.
The method should compare, and understand who has more
programming languages under his/her belt and put his/her name in the fifth property of the object.
*/

let schoolTopics = {
  math : `Herr Müller`,
  science : `Frau Voß`,
  history : `Herr Dietrich`,
  geography : `Frau Hase`,
}
let candidate1 = [`Frau`,`Bums`, `HTML`, `web-design für fortgeschittene`];
let candidate2 = [`Frau`,`Fick`,`PHP`, `javascript`, `scss`, `python`, `node.js`, `react`];
let candidates = function(candidate1, candidate2) {

  let hiredPerson;

  candidate1.length > candidate2.length ? hiredPerson = candidate1[1] : hiredPerson = candidate2[1];
  schoolTopics.programming = hiredPerson;
  }
  candidates(candidate1,candidate2);

  let BuLiTeams = [
    `Bayern`,
    `Berlin`,
    `Dortmund`,
    `Gladbach`,
    `Frankfurt`,
    `Schalke`,
    `Leverkusen`,
    `Bremen`,
    `Augsburg`,
    `Freiburg`,
    `Leipzig`,
    `Nürnberg`,
    `Düsseldorf`,
    `Hoffenheim`,
    `Wolfsburg`,
    `Stuttgart`,
    `Mainz`,
    `Hannover`,
  ]
  let jensHatedTeams = [`Bayern`,`Bremen`,`Hannover`,`Augsburg`,`Wolfsburg`];

  for (let teams of BuLiTeams) {
    let hatedTeams = false;
    for (let hassTeam of jensHatedTeams) {
      if (hassTeam === teams) {
        hatedTeams = true;
        break;
              }
          }
      if (!hatedTeams) {
        console.log(teams);
      }
  }
/*
Test Results problem
Imagine that you are a teacher and you have collected the results from a test of your 10 students in one place.
The test results are number from 1 to 100. The basis is 50.
Calculate what percentage of the class has not passed the basis.
The results are the followed: 78, 82, 45, 69, 23, 91, 55, 39, 66, 60.
*/

let testResults = [78,82,45,69,23,91,55,39,66,60];

let testPassed = function( basis, testErgebnisse) {
        let durchgefallen = 0;
        let quote;

  for (let einzelErgebnis of testErgebnisse) {
    if (einzelErgebnis < basis) {

      durchgefallen++;
      quote = durchgefallen / testErgebnisse.length *100;
    }
  }
  return quote;
}
let result = testPassed(50,testResults);

console.log(result);
let emptyArray = [];
let arrayDekade2 = [101,102,103,104,105,106,107,108,109,110]
for (var i = 1; i < 100  ; i++) {
  emptyArray.push(i);
}
console.log(emptyArray);
let = nextArray = emptyArray.concat(arrayDekade2);
console.log(nextArray);

if (nextArray.includes(111)) {
  console.log(`111 ist auch dabei`);

}
else {
  console.log(`bei 110 ist Schluß`);
}
