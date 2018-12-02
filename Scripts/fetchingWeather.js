let btn = document.querySelector(`button`);
let form = document.querySelector(`form`);

// let = openWeatherPassword = `1234abcd`;
const openWeatherKey = `e6bcda912d208337919146e129b426ad`;
const weatherButton = document.querySelector(`#weather`);
const input = document.querySelector(`input`);

let getWeatherForCity = async ev=> {
  ev.preventDefault();
  let citys = input.value.split(`,`);

for (let i = 0; i < citys.length; i++) {
  let delayFetch = (name, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fetch(openWeatherUrl))
        }, time)
    })
  }
  let openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citys[i]}&APPID=${openWeatherKey}`;
  let url = await delayFetch(citys[i],1000);
  let weatherObject = await url.json();
  // console.log(weatherObject);
    let container = document.querySelector(`#container`);
    let section = document.createElement(`SECTION`);
    let tempHeading = document.createElement(`H3`);
    let tempDescription = document.createElement(`P`);
    let tempParagraph = document.createElement(`P`);
    let weatherIcon = document.createElement(`IMG`);
    let iconSRC = weatherObject.weather[0].icon;
    tempHeading.innerText = weatherObject.name;
    if (Math.round((weatherObject.main.temp-273.15))<= 0) {
      section.style.background = `white`;
    }
    else if (Math.round((weatherObject.main.temp-273.15)) <= 10) {
      section.style.background = `grey`;
    }
    else if (Math.round((weatherObject.main.temp-273.15)) <= 20) {
      section.style.background = `yellow`;
    }
    else if (Math.round((weatherObject.main.temp-273.15)) <= 30) {
      section.style.background = `salmon`;
    }
    else if (Math.round((weatherObject.main.temp-273.15)) <= 40) {
      section.style.background = `red`;
    }
    tempParagraph.innerText = `${Math.round((weatherObject.main.temp-273.15))} °C`;
    tempDescription.innerText = weatherObject.weather[0].description;
    weatherIcon.src = `http://openweathermap.org/img/w/${iconSRC}.png`;
    section.appendChild(tempHeading);
    section.appendChild(tempParagraph);
    section.appendChild(tempDescription);
    tempDescription.appendChild(weatherIcon);
    container.appendChild(section);
    input.value = ``;
    section.addEventListener(`click`, function removeSection(ev) {
      container.removeChild(ev.currentTarget);
    })
  }

  }
form.addEventListener(`submit`, getWeatherForCity);
