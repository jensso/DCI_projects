// document.addEventListener(`DOMContentLoaded`, function(ev) {})

  let taskInput = document.querySelector(`input`);
  let submitButton = document.querySelector(`button`);
  let form = document.querySelector(`form`);
  let counterID = localStorage.length;

  if (localStorage.length > 0) {

    for (let task in localStorage) {

      if (typeof localStorage[task] !== `string`) {
        break;
      }

      let taskToBringBack = document.createElement(`P`);
      taskToBringBack.innerText = localStorage[task];
      let doneSpan = document.createElement(`SPAN`);
      doneSpan.innerText = `job done!`;
      taskToBringBack.appendChild(doneSpan);
      document.body.appendChild(taskToBringBack);

      doneSpan.addEventListener(`click`, function(ev) {
        let taskSetToDone = ev.currentTarget.parentElement;
        document.body.removeChild(taskSetToDone);
      })

    }
  }

form.addEventListener(`submit`, function(ev) {
  ev.preventDefault();
  counterID++;
  let newTask = taskInput.value;
  taskInput.value = ``;

  let showTask = document.createElement(`P`);
  let doneSpan = document.createElement(`span`);

  showTask.innerText = newTask;
  doneSpan.innerText = `job done!`;

  document.body.appendChild(showTask);
  showTask.appendChild(doneSpan);

  localStorage.setItem(`task-${counterID}`,newTask);

  doneSpan.addEventListener(`click`, function(ev) {
    let doneMark = ev.currentTarget;
    let targetsParent = doneMark.parentElement;
    targetsParent.parentElement.removeChild(targetsParent);
    // removeItem();
    })
})
// console.log(localStorage);
