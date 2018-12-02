let btn = document.querySelector(`button`);
let container = document.querySelector(`div`);

  let imagesFromSomewhere = [
    `amsterdam`,
    `miami`,
    `reykjavik`,
    `elphi`,
    `barcelona`,
    `hamburg`,
    `donostia`,
    `sifnos`,
  ];
  let getImages = async (ev)=> {
    let delayFetch = (name, time) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(fetch(`../../Images/${imagesFromSomewhere[i]}.jpg`))
          }, time)
      })
    }
    for (var i = 0; i < imagesFromSomewhere.length; i++) {
  let imagePath = await delayFetch(imagesFromSomewhere[i],1000);
  console.log(imagePath);
  let newImage = document.createElement(`IMG`);
  newImage.src = imagePath.url;
  container.appendChild(newImage);
}
}
btn.addEventListener(`click`, getImages);
