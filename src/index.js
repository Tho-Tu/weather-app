// free key
const weatherAPIKey = "07e4e2a749f046b5afc04637230210";

let globalLocation = "new york";
searchCity();

function searchCity() {
  const weatherLocation = document.getElementById("weather-location");
  const searchWeather = document.getElementById("search-weather");

  searchWeather.addEventListener("submit", (event) => {
    event.preventDefault();
    globalLocation = weatherLocation.value;
    loadCity(`${globalLocation}`, weatherAPIKey);
    searchWeather.reset();
  });

  loadCity("new york", weatherAPIKey);
}

function loadCity(location, apiKey) {
  const errorMessage = document.getElementById("error-msg");
  getForecast(location, apiKey)
    .then((forecastObject) => {
      if (forecastObject.error) {
        errorMessage.textContent = `${forecastObject.error.message}`;
      } else {
        // Clear the custom validity when a valid city is loaded
        displayDOM(forecastObject, isCelsius);
        errorMessage.textContent = "";
      }
    })
    .catch((error) => {
      console.error("getForecast error: " + error);
    });
}

async function getForecast(location, apiKey) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`,
    { mode: "cors" }
  );
  const responseData = await response.json();
  console.log(responseData);
  console.log("response.ok: " + response.ok);

  return responseData;
}

let isCelsius = true;
toggleTemperature();
function toggleTemperature() {
  const toggleTemp = document.getElementById("toggle-temp");
  toggleTemp.addEventListener("click", () => {
    if (isCelsius) {
      isCelsius = false;
    } else {
      isCelsius = true;
    }
    loadCity(globalLocation, weatherAPIKey);
  });
}

function displayDOM(forecastObject, isCelsius) {
  // define days
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // today's weather
  const locationName = document.querySelector(".location-name");
  const locationTime = document.querySelector(".location-time");
  const locationWeather = document.querySelector(".location-weather");
  const locationTemperature = document.querySelector(".location-temperature");
  const locationFeel = document.querySelector(".location-feel");
  const locationWind = document.querySelector(".location-wind");
  const locationHumidity = document.querySelector(".location-humidity");

  locationName.textContent = forecastObject.location.name;
  locationTime.textContent = forecastObject.location.localtime;
  locationWeather.textContent = forecastObject.current.condition.text;

  locationWind.textContent = `Wind Speed: ${forecastObject.current.wind_kph}km/h`;
  locationHumidity.textContent = `Humidity: ${forecastObject.current.humidity}%`;

  // temperature control
  if (isCelsius) {
    locationTemperature.textContent = `${forecastObject.current.temp_c}°C`;
    locationFeel.textContent = `Feels like: ${forecastObject.current.feelslike_c}°C`;
  } else {
    locationTemperature.textContent = `${forecastObject.current.temp_f}°F`;
    locationFeel.textContent = `Feels like: ${forecastObject.current.feelslike_f}°F`;
  }

  // weather forecast for 3 days
  forecastObject.forecast.forecastday.forEach((forecastDayElement, index) => {
    const dayName = document.querySelector(`[data-name="${index}"]`);
    const dayWeather = document.querySelector(`[data-weather="${index}"]`);
    const dayTemp = document.querySelector(`[data-temp="${index}"]`);

    let d = new Date(forecastDayElement.date);
    let calcDayName = days[d.getDay()];
    dayName.textContent = calcDayName;

    dayWeather.textContent = forecastDayElement.day.condition.text;

    if (isCelsius) {
      dayTemp.textContent = `${forecastDayElement.day.avgtemp_c}°C`;
    } else {
      dayTemp.textContent = `${forecastDayElement.day.avgtemp_f}°F`;
    }
  });
}
