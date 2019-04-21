/*
Create an accordion menu

Create an accordion with 5 headings that when clicked, reveal 5 sections.
The initial height of the sections is 0 and then gets bigger.
Use vanillaJS to do that and transition the height.
*/

let sections = document.querySelectorAll(`section`);
let headings = document.querySelectorAll(`h4`);

for (let i = 0; i < headings.length; i++) {
  headings[i].addEventListener(`click`, function(ev) {
    ev.stopPropagation();

    for (let j = 0; j < sections.length; j++) {
    if (sections[j].classList.contains(`visible`)) {
      sections[j].classList.remove(`visible`);
      break;
      }
    }
    sections[i].classList.add(`visible`);
  })
}

document.body.addEventListener(`click`, function() {
  for (let k = 0; k < sections.length; k++) {
  if (sections[k].classList.contains(`visible`)) {
    sections[k].classList.remove(`visible`);
    break;
    }
  }
})

let movie = document.querySelectorAll(`aside > li`);
let description = document.querySelectorAll(`section.templet > p`);

for (let l = 0; l < movie.length; l++) {
  movie[l].addEventListener(`click`, function() {
    for (let m = 0; m < description.length; m++) {
      if (description[m].classList.contains(`seeText`)) {
        description[m].classList.remove(`seeText`);
        break;
      }
    }
    description[l].classList.add(`seeText`);
  })
}
