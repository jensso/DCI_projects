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

    for (let ii = 0; ii < sections.length; ii++) {
    if (sections[ii].classList.contains(`visible`)) {
      sections[ii].classList.remove(`visible`);
      break;
      }
    }
    sections[i].classList.add(`visible`);
  })
}

document.body.addEventListener(`click`, function() {
  for (let iii = 0; iii < sections.length; iii++) {
  if (sections[iii].classList.contains(`visible`)) {
    sections[iii].classList.remove(`visible`);
    break;
    }
  }
})

let movie = document.querySelectorAll(`aside > li`);
let description = document.querySelectorAll(`section.templet > p`);

for (let j = 0; j < movie.length; j++) {
  movie[j].addEventListener(`click`, function() {
    for (let k = 0; k < description.length; k++) {
      if (description[k].classList.contains(`seeText`)) {
        description[k].classList.remove(`seeText`);
        break;
      }
    }
    description[j].classList.add(`seeText`);
  })
}
