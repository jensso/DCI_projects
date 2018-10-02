/*
Suppose you are a web developer teacher that teaches 3 different types of courses.
'JS course', 'PHP course' and 'Ruby course' in an online platform.
You ask for feedback from 10 people that have taken various courses from you (but each person only one course).

Create an object for each client that holds student's full name in one property,
his level of satisfactory from 1-100 from the services you have offered him and
 the product course he has bought from you.

{fullName: 'Kostas Diakogiannis', courseHasTaken: 'PHP Course', levelOfSatisfaction: 45}

Create 10 objects like that and store them in an array called clients.
For every object add a new property that is going to be a string and depends on levelOfSatifaction value.
For example if the levelOfSatisfaction is more than 80 add a new property
with a name of happinessCondition and assign to it a 'Found the course perfect'.

For just more than 50 assign the value into it 'Content overall',
For 50 or lower, assing a value of  'Customer is complaining, potential refund is going to be asked'.
After that, calculate the average satisfaction level per course.
Store the results for each into an array and print the title of the course
that has the biggest average of the three courses.
*/

let  students =function(fullName,course,levelOfSatisfaction) {
  this.fullName = fullName;
  this.course = course;
  this.levelOfSatisfaction = levelOfSatisfaction;
  }
  let daniel = new students(`Daniel Cipolla`, `PHP course`, 47);
  let mauro = new students(`Mauro Fuentes`, `PHP course`, 77);
  let hans = new students(`Hans Hansen`, `javascript course`, 54);
  let peter = new students(`Peter Müller`, `javascript course`, 66);
  let gaby = new students(`Gaby Peters`, `PHP course`, 99);
  let berta = new students(`Berta Hansen`, `Ruby course`, 88);
  let ulla = new students(`Ulla Zipulla`, `Ruby course`, 15);
  let jörg = new students(`Jörg Schulz`, `PHP course`, 50);
  let ali = new students(`Ali Baba`, `Ruby course`, 40);
  let scarlett = new students(`Scarlett Johannsen`, `javascript course`, 100);

  let studentsArray = [daniel,mauro,hans,peter,gaby,berta,ulla,jörg,ali,scarlett];
  for (students of studentsArray) {
    console.log(students);
    if (this.levelOfSatisfaction >=80) {
      this.happinessCondition = 'Found the course perfect';
      console.log(studentsArray.happinessCondition);
    }
    else if (this.levelOfSatisfaction >=50) {
      this.happinessCondition = 'Content overall';
    }
    else {
      this.happinessCondition = 'Customer is complaining, potential refund is going to be asked';
    }
  }
