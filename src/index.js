// free key
const weatherAPIKey = "07e4e2a749f046b5afc04637230210";

searchCity();

async function getForecast(location, apiKey) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`,
      { mode: "cors" }
    );
    const responseData = await response.json();
    console.log(responseData);

    if (response.ok) {
      return responseData;
    } else {
      throw new Error(responseData.error.message);
    }
  } catch (error) {
    throw new Error("Unable to fetch weather data");
  }
}

function searchCity() {
  const weatherLocation = document.getElementById("weather-location");
  const searchWeather = document.getElementById("search-weather");
  searchWeather.addEventListener("submit", (event) => {
    event.preventDefault();

    weatherLocation.setCustomValidity("");
    loadCity(`${weatherLocation.value}`, weatherAPIKey);
    searchWeather.reset();
  });

  loadCity("new york", weatherAPIKey);

  function loadCity(location, apiKey) {
    getForecast(location, apiKey)
      .then((forecastObject) => {
        if (forecastObject.error) {
          weatherLocation.setCustomValidity(forecastObject.error.message);
        } else {
          // Clear the custom validity when a valid city is loaded
          weatherLocation.setCustomValidity("");
          displayDOM(forecastObject);
        }
      })
      .catch((error) => {
        // Handle network errors here
        console.error(error);
        weatherLocation.setCustomValidity("Failed to fetch weather data");
      });
  }
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
  locationWeather.textContent = forecastObject.current.condition.text;
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

    dayTemp.textContent = `${forecastDayElement.day.avgtemp_c}°C`;
  });
}
