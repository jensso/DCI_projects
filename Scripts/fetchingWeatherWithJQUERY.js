const openWeatherKey = `e6bcda912d208337919146e129b426ad`;

$().ready(ev=> {
  $(`form`).submit(async ev=> {
    ev.preventDefault();

  let cityToCheck =  $(`input`).val().split(`-`);
  for (var i = 0; i < cityToCheck.length; i++) {

    let openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityToCheck[i]}&APPID=${openWeatherKey}`;
    let weatherData = await $.ajax(openWeatherUrl);

  let section = document.createElement(`SECTION`);
  let tempHeading = document.createElement(`H3`);
  tempHeading.innerText = `${weatherData.name}`;
  let tempDescription = document.createElement(`P`);
  tempDescription.innerText = weatherData.weather[0].description;
  let tempParagraph = document.createElement(`P`);
  tempParagraph.innerText = Math.round((weatherData.main.temp-273.15)) + `°C`;
  let weatherIcon = document.createElement(`IMG`);
  let iconSRC = weatherData.weather[0].icon;
  weatherIcon.src = `http://openweathermap.org/img/w/${iconSRC}.png`;


  section.append(tempHeading,tempParagraph,tempDescription);
  tempDescription.append(weatherIcon);
  $(`#container`).append(section);
}
  $(`input`).val(``);

  $(`section`).click(ev=> {
    ev.currentTarget.remove();
  })
  
  })

})
