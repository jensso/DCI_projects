let btn = document.querySelector(`button`);
let container = document.querySelector(`div`);

  let imagesFromSomewhere = [
    `amsterdam`,
    `miami`,
    `brooklyn`,
    `forest`,
    `clouds`,
    `canyon`,
    `reykjavik`,
    `elphi`,
    `barcelona`,
    `hamburg`,
    `donostia`,
    `sifnos`,
    `colorado`,
    `cologne`,
    `lights`,
    `beachhouse`,
  ];
  let getImagesSimultan =  collection => {
  let allOfThem = [];
    for (images of imagesFromSomewhere) {
      let path = `../../Images/${images}.jpg`;
      let promisedAllOfThem = new Promise((resolve,reject) => {
        resolve(fetch(path));
      })
      allOfThem.push(promisedAllOfThem);
    }
    console.log(allOfThem);
    return Promise.all(allOfThem);
  }
  let bringImages = async (ev)=> {
  let collection = await getImagesSimultan();
  for (images of collection) {
  let newImage = document.createElement(`IMG`);
  newImage.src = images.url;
  container.appendChild(newImage);
  }
}
btn.addEventListener(`click`, bringImages);
