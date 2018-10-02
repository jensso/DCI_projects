/*
Hire or Not
Imagine that you work currently as an HR manager in a company that wants to hire developers.
The prerequisites for hiring someone is to know 3 of the 5 following programming languages.
PHP, JavaScript, Ruby, Python and or Java.

If the candidate has at least 3 of these 5 skills then he should be hire.
Create an array that holds the prerequisites.
And a different array that holds every candidate's skills.
Write a function so it can be re-usable for multiple pre-requisites and multiple candidates at the same time.

Create an empty array to store the full name of the ones that got hired.
If the guy is hired, push his name to the employed ones array.
At the end this array is going to contain the names for every person that got hired.
Hint: Use the push and the includes method you learned.
*/


let candSkillsFunction =function(name,skill1,skill2,skill3,skill4,skill5) {
  applicant =[name,skill1,skill2,skill3,skill4,skill5];

}
let candidateCheck =function(applicant) {
  let hiredPeople = [];
  let progLang = [`PHP`,`javascript`,`Ruby`,`Python`,`Java`];

  let enoughSkills =0;
  for (progLang of applicant) {
    if (applicant.includes(progLang)) {
      enoughSkills++;
    }
  }
      if (enoughSkills >=3) {

        hiredPeople.push(applicant[0]);
        console.log(hiredPeople);
      }
    }
candSkillsFunction(`Jake D.`,`julia`,`Python`,`javascript`,`greek`,`PHP`);
// candSkillsFunction(`Jens S.`,`PHP`,`javascript`,`Python`,`Ruby`,`Tennis`);
candidateCheck(applicant);

console.log(applicant[0]);
