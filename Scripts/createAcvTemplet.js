let nameInput = document.querySelector(`input:nth-of-type(1)`);
let bdayInput = document.querySelector(`input:nth-of-type(2)`);
let photoUpload = document.querySelector(`input:nth-of-type(3)`);
let color1picker = document.querySelector(`input:nth-of-type(4)`);
let color2picker = document.querySelector(`input:nth-of-type(5)`);
let textAboutUser = document.querySelector(`textarea`);
let checkboxSkills = document.querySelectorAll(`li >input`);
let form = document.querySelector(`form`);
let createButton = document.querySelector(`button`);
let errorMsg = document.querySelector(`#errorMsg`);


form.addEventListener(`submit`, function(ev) {
  ev.preventDefault();
  let section = document.createElement(`SECTION`);
  let userName = nameInput.value;
  let header = document.createElement(`H3`);
  header.innerText = userName;
  let bDay = bdayInput.value;
  let bDayParagraph = document.createElement(`P`);
  let today = new Date();
  let usersBday = new Date(bDay);
  let usersAge = Math.floor((today-usersBday) /1000/60/60/24/365);
  bDayParagraph.innerText = `My age is ${usersAge}`;

  let firstCol = color1picker.value;
  section.style.background = firstCol;

  let secCol = color2picker.value;
  section.style.color = secCol;

  let imageToSee = photoUpload.value.substring(12);
  let image = document.createElement(`IMG`);
  image.setAttribute(`src`,`../../Images/${imageToSee}`);

  let textInput = textAboutUser.value;
  let textInputParagraph = document.createElement(`P`);
  textInputParagraph.innerText = textInput;

  let skillsArray = [];
  for (var i = 0; i < checkboxSkills.length; i++) {
  if (checkboxSkills[i].checked) {
    skillsArray.push(checkboxSkills[i].parentElement.innerText);
  }
}
let skillsInText = skillsArray.join(` & `);
let skillsParagraph = document.createElement(`P`);
skillsParagraph.innerText = `${nameInput.value} has ${skillsInText} to offer`;

section.appendChild(header);
section.appendChild(bDayParagraph);
section.appendChild(image);
section.appendChild(textInputParagraph);
section.appendChild(skillsParagraph);
document.body.appendChild(section);
errorMsg.style.display = `none`;


section.addEventListener(`click`, function(ev) {
  document.body.removeChild(section);
  })
})


nameInput.addEventListener(`invalid`, function(ev) {
  ev.preventDefault();
  let invalidMsg = `please put something better here`;
  errorMsg.innerText = invalidMsg;
  errorMsg.style.display = `block`;
  nameInput.insertAdjacentElement(`beforeBegin`,errorMsg);
})
nameInput.addEventListener(`keyup`, function(ev) {
  ev.currentTarget.checkValidity();
})

bdayInput.addEventListener(`invalid`, function(ev) {
    ev.preventDefault();
    bdayInput.insertAdjacentElement(`afterEnd`, errorMsg);
    errorMsg.innerText = `please put adult age here`;
  ev.currentTarget.setCustomValidity(`too young to proceed`);
  // ev.currentTarget.setCustomValidity(``);
})
bdayInput.addEventListener(`change`, function(ev) {
  ev.currentTarget.checkValidity();
})

let charMsg = document.createElement(`P`);
textAboutUser.addEventListener(`keyup`, function(ev) {
  textAboutUser.insertAdjacentElement(`afterEnd`,charMsg);
  let charLeft = textAboutUser.maxLength - textAboutUser.textLength;
  charMsg.innerText = `${charLeft}\n characters left`;
})


// let form2 = document.querySelector(`#validation`);
// let username = document.querySelector(`#username`);
// let age = document.querySelector(`#age`);
//
// form2.addEventListener(`submit`, function(ev) {
//   ev.preventDefault();
//   console.log(ev.currentTarget);
// })
//
// username.addEventListener(`invalid`, function(ev) {
//   ev.preventDefault();
//   let customMessage = `gib die richtigen Daten ein Du Trottel!`;
//
//   let pError = document.createElement(`P`);
//   pError.innerHTML =  `<b>${customMessage}</b>`;
//   // document.body.appendChild(pError);
//   username.insertAdjacentElement(`afterEnd`,pError);
// })
//
// let dateField = document.querySelector(`#datefield`);
// dateField.addEventListener(`invalid`, function(ev) {
//   ev.preventDefault();
//   if (ev.currentTarget.validity.rangeOverflow) {
//     console.log(`drink your milk`);
//       }
//
//       else if (ev.currentTarget.validity.rangeUnderflow) {
//         console.log(`get out weirdo`);
//       }
//       ev.currentTarget.focus();
// })
