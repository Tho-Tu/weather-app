/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// free key
const weatherAPIKey = "07e4e2a749f046b5afc04637230210";

loadCity("new york", weatherAPIKey);
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
    loadCity(`${weatherLocation.value}`, weatherAPIKey);
    searchWeather.reset();
  });
}

function loadCity(location, apiKey) {
  getForecast(location, apiKey)
    .then((forecastObject) => {
      weatherLocation.setCustomValidity("");
      displayDOM(forecastObject);
    })
    .catch((error) => {
      weatherLocation.setCustomValidity("Please enter valid city");
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxPQUFPLEtBQUssU0FBUztBQUM5RSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsOEJBQThCO0FBQ3JFLDRDQUE0QyxtQ0FBbUM7QUFDL0UsNENBQTRDLGdDQUFnQztBQUM1RSw4Q0FBOEMsZ0NBQWdDOztBQUU5RTtBQUNBO0FBQ0EsMERBQTBELE1BQU07QUFDaEUsZ0VBQWdFLE1BQU07QUFDdEUsMERBQTBELE1BQU07O0FBRWhFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyZWUga2V5XG5jb25zdCB3ZWF0aGVyQVBJS2V5ID0gXCIwN2U0ZTJhNzQ5ZjA0NmI1YWZjMDQ2MzcyMzAyMTBcIjtcblxubG9hZENpdHkoXCJuZXcgeW9ya1wiLCB3ZWF0aGVyQVBJS2V5KTtcbnNlYXJjaENpdHkoKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobG9jYXRpb24sIGFwaUtleSkge1xuICAvLyAzIGRheSBmb3JlY2FzdFxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWFyY2hDaXR5KCkge1xuICBjb25zdCB3ZWF0aGVyTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItbG9jYXRpb25cIik7XG4gIGNvbnN0IHNlYXJjaFdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC13ZWF0aGVyXCIpO1xuICBzZWFyY2hXZWF0aGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2FkQ2l0eShgJHt3ZWF0aGVyTG9jYXRpb24udmFsdWV9YCwgd2VhdGhlckFQSUtleSk7XG4gICAgc2VhcmNoV2VhdGhlci5yZXNldCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZENpdHkobG9jYXRpb24sIGFwaUtleSkge1xuICBnZXRGb3JlY2FzdChsb2NhdGlvbiwgYXBpS2V5KVxuICAgIC50aGVuKChmb3JlY2FzdE9iamVjdCkgPT4ge1xuICAgICAgd2VhdGhlckxvY2F0aW9uLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgZGlzcGxheURPTShmb3JlY2FzdE9iamVjdCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB3ZWF0aGVyTG9jYXRpb24uc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgZW50ZXIgdmFsaWQgY2l0eVwiKTtcbiAgICB9KTtcblxuICAvLyBIQU5ETEUgRVJST1Jcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVGVtcGVyYXR1cmUoKSB7XG4gIGNvbnN0IHRvZ2dsZVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS10ZW1wXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RE9NKGZvcmVjYXN0T2JqZWN0KSB7XG4gIC8vIGRlZmluZSBkYXlzXG4gIGNvbnN0IGRheXMgPSBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdO1xuXG4gIC8vIHRvZGF5J3Mgd2VhdGhlclxuICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLW5hbWVcIik7XG4gIGNvbnN0IGxvY2F0aW9uVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24tdGltZVwiKTtcbiAgY29uc3QgbG9jYXRpb25XZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi13ZWF0aGVyXCIpO1xuICBjb25zdCBsb2NhdGlvblRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi10ZW1wZXJhdHVyZVwiKTtcbiAgY29uc3QgbG9jYXRpb25GZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1mZWVsXCIpO1xuICBjb25zdCBsb2NhdGlvbldpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXdpbmRcIik7XG4gIGNvbnN0IGxvY2F0aW9uSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWh1bWlkaXR5XCIpO1xuXG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0T2JqZWN0LmxvY2F0aW9uLm5hbWU7XG4gIGxvY2F0aW9uVGltZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0T2JqZWN0LmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgbG9jYXRpb25UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0T2JqZWN0LmN1cnJlbnQudGVtcF9jfcKwQ2A7XG4gIGxvY2F0aW9uRmVlbC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2ZvcmVjYXN0T2JqZWN0LmN1cnJlbnQuZmVlbHNsaWtlX2N9wrBDYDtcbiAgbG9jYXRpb25XaW5kLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7Zm9yZWNhc3RPYmplY3QuY3VycmVudC53aW5kX2twaH1rbS9oYDtcbiAgbG9jYXRpb25IdW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtmb3JlY2FzdE9iamVjdC5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuXG4gIC8vIHdlYXRoZXIgZm9yZWNhc3QgZm9yIDMgZGF5c1xuICBmb3JlY2FzdE9iamVjdC5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChmb3JlY2FzdERheUVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGF5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCIke2luZGV4fVwiXWApO1xuICAgIGNvbnN0IGRheVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS13ZWF0aGVyPVwiJHtpbmRleH1cIl1gKTtcbiAgICBjb25zdCBkYXlUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGVtcD1cIiR7aW5kZXh9XCJdYCk7XG5cbiAgICBsZXQgZCA9IG5ldyBEYXRlKGZvcmVjYXN0RGF5RWxlbWVudC5kYXRlKTtcbiAgICBsZXQgY2FsY0RheU5hbWUgPSBkYXlzW2QuZ2V0RGF5KCldO1xuICAgIGRheU5hbWUudGV4dENvbnRlbnQgPSBjYWxjRGF5TmFtZTtcblxuICAgIGRheVdlYXRoZXIudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheUVsZW1lbnQuZGF5LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgZGF5VGVtcC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5RWxlbWVudC5kYXkuYXZndGVtcF9jO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==