// document.addEventListener(`DOMContentLoaded`, function(ev) {})

  let taskInput = document.querySelector(`input`);
  let submitButton = document.querySelector(`button`);

submitButton.addEventListener(`click`, function(ev) {
  let newTask = taskInput.value;
  let showTask = document.createElement(`P`);
  // showTask.innerText = newTask;
  showTask.innerHTML = `${newTask} <span>Job done!</span>`;
  document.body.appendChild(showTask);
  let doneSpan = document.querySelectorAll(`span`);
  for (let i = 0; i < doneSpan.length; i++) {
    doneSpan[i].addEventListener(`click`, function(ev) {
      let doneMark = ev.currentTarget;
      let targetsParent = doneMark.parentElement;
      targetsParent.parentElement.removeChild(targetsParent);
    })
  }
})
