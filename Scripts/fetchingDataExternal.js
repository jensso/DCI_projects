// let currentKing = `Cersei`;
//
// let setNewKing =  () => {
//   setTimeout(() => {
//     currentKing = `Danny`;
//     console.log(currentKing);
//
//     setTimeout(() => {
//       currentKing = `Snow`;
//       console.log(currentKing);
//
//       setTimeout(() => {
//         currentKing = `Lannister`;
//         console.log(currentKing);
//
//         setTimeout(() => {
//           currentKing = `NightKing`;
//           console.log(currentKing);
//         }, 1000)
//       }, 2000)
//     }, 3000)
//   }, 4000)
// }
// setNewKing();

// let setKingAsync = (name, time) => {
//   let promisedKing = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(name);
//     }, time);
//   })
//   return promisedKing;
// }
//
// setKingAsync(`Jens`,1000)
// .then(name => {
//   promisedKing = name;
//   console.log(promisedKing);
//   return setKingAsync(`Marcelo`,2000);
// })
// .then(name => {
//   promisedKing = name;
//   console.log(promisedKing);
//   return setKingAsync(`Daniel`,3000);
// })
// .then(name => {
//   promisedKing = name;
//   console.log(promisedKing);
//   return setKingAsync(`Milad`,2000);
// })
// .then(name => {
//   promisedKing = name;
//   console.log(promisedKing);
//   return setKingAsync(`Sue`,1000);
// })
// .then(name => {
//   promisedKing = name;
//   console.log(promisedKing);
// })

let = exampleURL = `https://reqres.in/api/users`;
let btn = document.querySelector(`button`);

btn.addEventListener(`click`, (ev)=> {
  fetch(exampleURL)
  .then(response=> response.json())
  .then(object=> {
    // console.log(object.data);
    for (let i = 0; i < object.data.length; i++) {
      console.log(object.data[i]);
      let heading = document.createElement(`H3`);
      let image = document.createElement(`IMG`);
      heading.innerText = object.data[i].last_name;
      image.src = object.data[i].avatar;
      document.body.appendChild(heading);
      document.body.appendChild(image);
    }
  })
})

let commentUrl = `http://35.156.88.18:3050/comments`;
btn.addEventListener(`click`, (ev)=> {
  fetch(commentUrl)
  .then(response=> response.json())
  .then(object=> {
    for (let i = 0; i < object.length; i++) {
      let section = document.createElement(`SECTION`);
      let header = document.createElement(`H4`);
      let paragraph = document.createElement(`P`);
      header.innerText = object[i].name;
      paragraph.innerText = object[i].body;
      document.body.appendChild(section);
      section.appendChild(header);
      section.appendChild(paragraph);
    }
  })
  .catch(err => {
    document.write(err)
  })

})
