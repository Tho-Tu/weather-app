const weatherAPIKey = "07e4e2a749f046b5afc04637230210";

getWeather("new york", weatherAPIKey);
getForecast("new york", weatherAPIKey);

searchCity();

async function getWeather(location, apiKey) {
  // current weather
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
      { mode: "cors" }
    );
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (err) {
    alert(err);
    console.log(err);
  }
}

async function getForecast(location, apiKey) {
  // 3 day forecast
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`,
      { mode: "cors" }
    );
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
}

function searchCity() {
  const weatherLocation = document.getElementById("weather-location");
  const searchWeather = document.getElementById("search-weather");
  searchWeather.addEventListener("submit", (event) => {
    event.preventDefault();

    getWeather(`${weatherLocation.value}`, weatherAPIKey)
      .then((weatherObject) => {
        weatherLocation.setCustomValidity("");
        displayDOM(weatherObject);
      })
      .catch((error) => {
        weatherLocation.setCustomValidity("Please enter valid city");
      });
  });

  // HANDLE ERROR
}

function toggleTemperature() {
  const toggleTemp = document.getElementById("toggle-temp");
}

function displayDOM(weatherObject) {
  // today's weather
  const locationName = document.querySelector(".location-name");
  locationName.textContent = weatherObject.location.name;

  const locationTime = document.querySelector(".location-time");
  locationTime.textContent = weatherObject.location.localtime;

  const locationWeather = document.querySelector(".location-weather");
  locationWeather.textContent = weatherObject.current.condition.text;

  const locationTemperature = document.querySelector(".location-temperature");
  locationTemperature.textContent = `${weatherObject.current.temp_c}°C`;

  const locationFeel = document.querySelector(".location-feel");
  locationFeel.textContent = `Feels like: ${weatherObject.current.feelslike_c}°C`;

  const locationWind = document.querySelector(".location-wind");
  locationWind.textContent = `Wind Speed: ${weatherObject.current.wind_kph}km/h`;

  const locationHumidity = document.querySelector(".location-humidity");
  locationHumidity.textContent = `Humidity: ${weatherObject.current.humidity}%`;

  // weather forecast for next 3 days
  for (let i = 1; i < 4; i++) {
    const dayName = document.querySelector(`[data-name="${i}"]`);
    const dayWeather = document.querySelector(`[data-name="${i}"]`);
    const dayTemp = document.querySelector(`[data-name="${i}"]`);
  }
}

// function getUserLocation() {
//   const successCallback = (position) => {
//     return `${position.coords.latitude},${position.coords.longitude}`;
//   };

//   const errorCallback = (error) => {
//     console.log(error);
//   };

//   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// }
