const API_KEY = "010f894447468acbb2757a52114aaf45";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`lat : ${lat}, lng : ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `Weather : ${data.weather[0].main} / Temp : ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find your Geolocation.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
