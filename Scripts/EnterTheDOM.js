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

let links = document.querySelectorAll(`a`);
let movies = document.querySelectorAll(`section`);

let aFewGoodMenLink = links[0];
let goToAfew = function(ev) {
  ev.preventDefault();
  // window.scrollTo(0, 1114.5);
  let scrollToAfew = setInterval(function() {
    window.scrollBy(0, 5);
    if (window.pageYOffset >= 1114.5) {
      clearInterval(scrollToAfew);

    }

  }, 2)
}

aFewGoodMenLink.addEventListener(`click`, goToAfew);
