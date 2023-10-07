// free key
const weatherAPIKey = "07e4e2a749f046b5afc04637230210";

getForecast("new york", weatherAPIKey);

searchCity();

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

    getForecast(`${weatherLocation.value}`, weatherAPIKey)
      .then((forecastObject) => {
        weatherLocation.setCustomValidity("");
        displayDOM(forecastObject);
      })
      .catch((error) => {
        weatherLocation.setCustomValidity("Please enter valid city");
      });

    searchWeather.reset();
  });

  // HANDLE ERROR
}

function toggleTemperature() {
  const toggleTemp = document.getElementById("toggle-temp");
}

function displayDOM(forecastObject) {
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
  locationTemperature.textContent = `${forecastObject.current.temp_c}°C`;
  locationFeel.textContent = `Feels like: ${forecastObject.current.feelslike_c}°C`;
  locationWind.textContent = `Wind Speed: ${forecastObject.current.wind_kph}km/h`;
  locationHumidity.textContent = `Humidity: ${forecastObject.current.humidity}%`;

  // weather forecast for 3 days
  forecastObject.forecast.forecastday.forEach((forecastDayElement, index) => {
    const dayName = document.querySelector(`[data-name="${index}"]`);
    const dayWeather = document.querySelector(`[data-weather="${index}"]`);
    const dayTemp = document.querySelector(`[data-temp="${index}"]`);

    let d = new Date(forecastDayElement.date);
    let calcDayName = days[d.getDay()];
    dayName.textContent = calcDayName;

    dayWeather.textContent = forecastDayElement.day.condition.text;

    dayTemp.textContent = forecastDayElement.day.avgtemp_c;
  });
}
