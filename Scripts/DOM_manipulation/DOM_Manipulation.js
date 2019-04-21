document.addEventListener(`DOMContentLoaded`, function(ev) {
/*
Create a modal window box
Create a div that appears always at the center of the page and prompts the user to give his/her
e-mail in order to receive our newsletter.
This div is invisible, and should appear anytime the user moves his/her mouse out of the window section.
For this exercise you may find useful to learn more about the 'mousemove' event and how to detect
every time someone moves it's mouse the current coordinates
and where the mouse stands relative to  the page (ev.ClientX or ev.clientY for both every axis)
Bear in mind, once executed this event should never execute itself again.
*/
/* let leftMagic = function(ev) {
  if (ev.clientX < 2) {
    document.body.style.background = `olive`;
    ev.currentTarget.removeEventListener(`mousemove`, leftMagic);
  }
}
document.body.addEventListener(`mousemove`, leftMagic);
*/
/* let newsletterBox = document.querySelector(`div`);
let closeButton = document.querySelector(`span`);
// let collectedAdresses = [];
// let inputField = document.querySelector(`input`);
// let eAdress = document.querySelector(`input`).value;
// console.log(eAdress);
// inputField.addEventListener(`input`, function(ev) {
// collectedAdresses.push(eAdress);
// console.log(collectedAdresses);
// })
document.body.addEventListener(`mousemove`, function remove(ev) {
  if (ev.clientY < 200) {
  newsletterBox.style.display = `block`;
  document.body.removeEventListener(`mousemove`, remove);
}
})
closeButton.addEventListener(`click`, function(ev) {
  newsletterBox.style.display = `none`;
})
*/

let Divs = document.querySelectorAll(`.scroll`);
let divOffsetValue = [];
for (let i = 0; i < Divs.length; i++) {
  divOffsetValue.push(Divs[i].offsetTop);
}

window.addEventListener(`scroll`, function addText(ev) {
  for (let i = 0; i < divOffsetValue.length; i++) {
    if (divOffsetValue[i] <= window.pageYOffset+100) {
      Divs[i].style.background = `grey`;
      Divs[i].innerHTML = `In combination with the <strong>window.pageYOffset</strong> property
                            and the <strong>element.offsetTop</strong> we can make things happen
                            to elements only when the user reaches them via <b>  ....scroll</b>`;
      Divs[divOffsetValue.length-1].innerHTML = `<strong>Math.floor(Math.random()*(a-b)+b);<hr></hr> </strong>
                            // expected output: a random number rounded to it's floor between a and b`;
      Divs[divOffsetValue.length-1].style.color = `gold`;
      Divs[divOffsetValue.length-1].style.textShadow = `-0.1vw -0.3vw #000`;

      Divs[divOffsetValue.length-2].innerHTML = `The <strong>break</strong> statement terminates the <i>current</i> loop, switch, or
                            label statement and transfers program control to the statement
                            <i/>following</i> the terminated statement.`
      Divs[divOffsetValue.length-2].style.background = `black`;
      Divs[divOffsetValue.length-3].style.opacity = `0.6`;


    }
  }
})
window.addEventListener(`mousemove`, function newColor(ev) {
  for (let i = 0; i < divOffsetValue.length; i++) {
    if (divOffsetValue[i] <= window.pageYOffset) {
      Divs[i].style.background = `navy`;
      Divs[i].style.borderRadius =`2.5vw`;
    }
    else if ([i] !=0) {
      Divs[i].style.background = `olive`;
      Divs[i].style.border = `0.2vw solid lightblue`;
    }
  }
  })

let clickSection = document.querySelectorAll(`header>section`);
for (let i = 0; i < clickSection.length; i++) {
  clickSection[i].addEventListener(`click`, function paint(ev) {
    clickSection[i].style.background = `lightgreen`;
    document.body.style.background = `green`;
  })
}

let landscapes = document.querySelectorAll(`.firstMain>section`);
for (let i = 0; i < landscapes.length; i++) {

  landscapes[i].addEventListener(`mouseover`, function switchOpacity(ev) {
    for (let ii = 0; ii < landscapes.length; ii++) {
      if (landscapes[ii].classList.contains(`seeThru`)) {
        landscapes[ii].classList.remove(`seeThru`);
        break;
    }
  }
    landscapes[i].classList.add(`seeThru`);
})
}

let switchScale = document.querySelectorAll('.diaSlider');
for (let i = 0; i < switchScale.length; i++) {
    switchScale[i].addEventListener(`mouseover`, function reverseScale(ev) {
      switchScale[i].style.opacity = (`0.8`);
      // switchScale[i].style.background = (`white`);

    })

//      landscapes = document.querySelectorAll(`main>section`);
//
//     landscapes[i].addEventListener(`click`, function growLand(ev) {
//     landscapes[i].style.display = `none`;
//
//     landscapes[i].removeEventListener(`click`, growLand);
// })
}

let selectField = document.querySelector(`.linkSomewhere > select`);
console.log(selectField);
let linkToSelection = document.querySelector(`.linkSomewhere > a`);

// let webAdress = `"www.${selectField.value}.de"`;
// console.log(webAdress);

selectField.addEventListener(`change`, function(ev) {
linkToSelection.href = `https://www.${ev.currentTarget.value}.com`;
linkToSelection.innerHTML = `Go to ` + `<i>${ev.currentTarget.value}</i>`;
})

let button = document.querySelector(`button`);
let textFeld = document.querySelector(`textarea`);
button.addEventListener(`click`, function(ev) {
  let text = textFeld.value;
  let newParagraph = document.createElement(`P`);
  newParagraph.innerText = text;
  document.body.appendChild(newParagraph);
})
}) /*DOMContentLoaded*/
