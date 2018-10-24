let button = document.querySelector(`button`);
let button2 = document.querySelector(`button:nth-of-type(2)`);
let unorderedList = document.querySelector(`ul`);
let paragraph = document.querySelector(`p`);

let listIsVisible = false;
let paragraphIsVisible = false;

// button.addEventListener(`click`,function() {
//   if (listIsVisible) {
//     unorderedList.style.display = `none`;
//   }
//   else {
//     unorderedList.style.display = `flex`;
//     unorderedList.style.flexDirection = `column`;
//
//     // button.removeEventListener('click', function());
//   }
//   listIsVisible = !listIsVisible;
// })
button2.addEventListener(`click`, function() {
  if (paragraphIsVisible) {
    paragraph.style.opacity = `0`;
    button2.innerHTML = `click to see`;
  }
  else {
    paragraph.style.opacity = `1`;
    button2.innerHTML = `click to hide`;
  }
  paragraphIsVisible = !paragraphIsVisible;
})

let notVisibleItem = true;
let items = document.querySelectorAll(`li`);

button.addEventListener(`click`, function() {

if (notVisibleItem) {

for (let i = 0; i < items.length; i++) {
    items[i].style.width = `60%`;
    items[i].style.transition = `width 0.5s linear ${i*0.2}s`;
    }
  }
else {
  for (let i = 0; i < items.length; i++) {
        items[i].style.width = `0`;
    }
}
notVisibleItem = !notVisibleItem;
console.log(notVisibleItem);
})

let links = document.querySelectorAll(`header>a`);
let list = document.querySelectorAll(`header>a>ul`);


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(`click`, function(ev) {

    ev.preventDefault();
    ev.stopPropagation();
    for (let ii = 0; ii < list.length; ii++) {
    if (list[ii].classList.contains(`visible`)) {
      list[ii].classList.remove(`visible`);
      break;
      }
    }
    list[i].classList.add(`visible`);
  })
}
document.body.addEventListener(`click`, function() {
  for (let ii = 0; ii < list.length; ii++) {
  if (list[ii].classList.contains(`visible`)) {
    list[ii].classList.remove(`visible`);
    break;
    }
  }
})

let checkAndRemoveClass = function(classTyp, arrayTyp) {
  for (let i = 0; i < arrayTyp.length; i++) {
    if (classTyp[i].classList.contains(classTyp)) {
      classTyp[i].classList.remove(classTyp);
      break;
    }
  }
}








// let movies = document.querySelectorAll(`section`);

// let aFewGoodMenLink = links[0];
// let goToAfew = function(ev) {
//   ev.preventDefault();
//   // window.scrollTo(0, 1114.5);
//   let scrollToAfew = setInterval(function() {
//     window.scrollBy(0, 5);
//     if (window.pageYOffset >= 1114.5) {
//       clearInterval(scrollToAfew);
//     }
//   }, 2)
// }
// aFewGoodMenLink.addEventListener(`click`, goToAfew);
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener(`click`, function(ev) {
//     ev.preventDefault();
//
//
// let scrollDown = setInterval(function() {
//   if (window.pageYOffset >= movies[i].offsetTop) {
//     clearInterval(scrollDown);
//   }
//   window.scrollBy(0, 3);
//
// }, 1)
// })
// }

let button3 = document.querySelector(`button:nth-of-type(3)`);
let paragraph2 = document.querySelector(`p:nth-of-type(2)`);

button3.addEventListener(`click`, function() {
  paragraph2.classList.toggle(`styleParagraph`);


})
