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
    `FC Bayern München`,`Hertha BSC Berlin`,`Borussia Dortmund`,`Borussia Mönchengladbach`,
    `Eintracht Frankfurt`,`FC Schalke 04`,`Bayer Leverkusen`,`Werder Bremen`,
    `FC Augsburg`,`SC Freiburg`,`RB Leipzig`,`1.FC Nürnberg`,`Fortuna Düsseldorf`,`TSG 1899 Hoffenheim`,
    `VfL Wolfsburg`,`VfB Stuttgart`,`Mainz 05`,`Hannover 96`,
  ]
  console.log(BuLiTeams.length);
  console.log(BuLiTeams.reverse());
  console.log(BuLiTeams.sort()); /*alphabetisch*/
  console.log(BuLiTeams.sort().reverse());
  console.log(BuLiTeams.join(` beats `));

  let jensHatedTeams = [`FC Bayern München`,`Werder Bremen`,`Hannover 96`,`FC Augsburg`,`VfL Wolfsburg`];
  for (let teams of BuLiTeams) {
    let hatedTeams = false;
    for (let hassTeam of jensHatedTeams) {
      if (hassTeam === teams) {
        hatedTeams = true;
        break;
              }
          }
      if (!hatedTeams) {
        // console.log(teams);
      }
  }

let emptyArray = [];
let arrayDekade2 = [11,12,13,14,15,16,17,18,19,20]
for (var i = 1; i <= 10 ; i++) {
  emptyArray.push(i);
}
console.log(emptyArray);
let = nextArray = emptyArray.concat(arrayDekade2);
console.log(nextArray);

if (nextArray.includes(21)) {
  console.log(`21 ist auch dabei`);
}
else {
  console.log(`bei 20 ist Schluß`);
}
// Nesting arrays
let jake = [`Kostas`, `Diakogiannis`,30];
let jensso = [`Jens`, `Soltwedel`,47];
let milad = [`Milad`, `Khoskaran`, 29];
let students = [jake,jensso,milad];
console.log(students[0][0]);
/*
Pick a random food to eat
Are you hungry but you don't know what to eat for today?
Create an array with 7 different favorite foods of yours.
ex. favFoods = ['bananas', 'rice', 'chocolate', 'pizza', 'mett', 'bread', 'onions'];
Create a function that picks randomly one of this seven foods and prints it to the console.
Bonus: Create a function that actually selects randomly one of these for every day of the week
and  prints ('On Monday i will have bananas').
hint; You may want to create another array to hold there, the days of the week.
Also when a food is selected it cannot be reselected, that means you need to remove it from the array.
Maybe the splice method that any array provides will help in this case.
arr.splice(which index to start removing, how many elements)
*/
let favFoods = ['bananas', 'rice', 'chocolate', 'pizza', 'mett', 'bread', 'onions'];
let days = [`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`];

let foodPicker = function(array) {
  for (var i = 0; i < days.length; i++) {
    let randomNum =  Math.floor(Math.random()*array.length);
    let myFoodToday = array[randomNum];
    array.splice(randomNum,1);
    console.log(`On ${days[i]} I will eat ${myFoodToday}`);
    console.log(array);
  }
}
foodPicker(favFoods);
