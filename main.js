/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// free key
const weatherAPIKey = "07e4e2a749f046b5afc04637230210";

let globalForecastObject;
searchCity();

function searchCity() {
  const weatherLocation = document.getElementById("weather-location");
  const searchWeather = document.getElementById("search-weather");

  searchWeather.addEventListener("submit", (event) => {
    event.preventDefault();

    loadCity(`${weatherLocation.value}`, weatherAPIKey);
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
        displayDOM(forecastObject, "°C");
        errorMessage.textContent = "";
        globalForecastObject = forecastObject;
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

function toggleTemperature() {
  let isCelsius = true;

  const toggleTemp = document.getElementById("toggle-temp");
  toggleTemp.addEventListener("click", () => {
    let tempCelOrFah = isCelsius ? "°C" : "°F";

    console.log(globalForecastObject);

    if (!isCelsius) {
      displayDOM(globalForecastObject, tempCelOrFah);
      isCelsius = false;
    } else {
      displayDOM(globalForecastObject, tempCelOrFah);
      isCelsius = true;
    }
  });
}

function displayDOM(forecastObject, tempCelOrFah) {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkJBQTZCO0FBQ25FLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPLEtBQUssU0FBUztBQUM1RSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOEJBQThCO0FBQ3JFLDRDQUE0QyxtQ0FBbUM7QUFDL0UsNENBQTRDLGdDQUFnQztBQUM1RSw4Q0FBOEMsZ0NBQWdDOztBQUU5RTtBQUNBO0FBQ0EsMERBQTBELE1BQU07QUFDaEUsZ0VBQWdFLE1BQU07QUFDdEUsMERBQTBELE1BQU07O0FBRWhFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2QkFBNkIsaUNBQWlDO0FBQzlELEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyZWUga2V5XG5jb25zdCB3ZWF0aGVyQVBJS2V5ID0gXCIwN2U0ZTJhNzQ5ZjA0NmI1YWZjMDQ2MzcyMzAyMTBcIjtcblxubGV0IGdsb2JhbEZvcmVjYXN0T2JqZWN0O1xuc2VhcmNoQ2l0eSgpO1xuXG5mdW5jdGlvbiBzZWFyY2hDaXR5KCkge1xuICBjb25zdCB3ZWF0aGVyTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItbG9jYXRpb25cIik7XG4gIGNvbnN0IHNlYXJjaFdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC13ZWF0aGVyXCIpO1xuXG4gIHNlYXJjaFdlYXRoZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbG9hZENpdHkoYCR7d2VhdGhlckxvY2F0aW9uLnZhbHVlfWAsIHdlYXRoZXJBUElLZXkpO1xuICAgIHNlYXJjaFdlYXRoZXIucmVzZXQoKTtcbiAgfSk7XG5cbiAgbG9hZENpdHkoXCJuZXcgeW9ya1wiLCB3ZWF0aGVyQVBJS2V5KTtcbn1cblxuZnVuY3Rpb24gbG9hZENpdHkobG9jYXRpb24sIGFwaUtleSkge1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLW1zZ1wiKTtcbiAgZ2V0Rm9yZWNhc3QobG9jYXRpb24sIGFwaUtleSlcbiAgICAudGhlbigoZm9yZWNhc3RPYmplY3QpID0+IHtcbiAgICAgIGlmIChmb3JlY2FzdE9iamVjdC5lcnJvcikge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdE9iamVjdC5lcnJvci5tZXNzYWdlfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDbGVhciB0aGUgY3VzdG9tIHZhbGlkaXR5IHdoZW4gYSB2YWxpZCBjaXR5IGlzIGxvYWRlZFxuICAgICAgICBkaXNwbGF5RE9NKGZvcmVjYXN0T2JqZWN0LCBcIsKwQ1wiKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZ2xvYmFsRm9yZWNhc3RPYmplY3QgPSBmb3JlY2FzdE9iamVjdDtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXRGb3JlY2FzdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvY2F0aW9uLCBhcGlLZXkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuICBjb25zb2xlLmxvZyhcInJlc3BvbnNlLm9rOiBcIiArIHJlc3BvbnNlLm9rKTtcblxuICByZXR1cm4gcmVzcG9uc2VEYXRhO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUZW1wZXJhdHVyZSgpIHtcbiAgbGV0IGlzQ2Vsc2l1cyA9IHRydWU7XG5cbiAgY29uc3QgdG9nZ2xlVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLXRlbXBcIik7XG4gIHRvZ2dsZVRlbXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgdGVtcENlbE9yRmFoID0gaXNDZWxzaXVzID8gXCLCsENcIiA6IFwiwrBGXCI7XG5cbiAgICBjb25zb2xlLmxvZyhnbG9iYWxGb3JlY2FzdE9iamVjdCk7XG5cbiAgICBpZiAoIWlzQ2Vsc2l1cykge1xuICAgICAgZGlzcGxheURPTShnbG9iYWxGb3JlY2FzdE9iamVjdCwgdGVtcENlbE9yRmFoKTtcbiAgICAgIGlzQ2Vsc2l1cyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5RE9NKGdsb2JhbEZvcmVjYXN0T2JqZWN0LCB0ZW1wQ2VsT3JGYWgpO1xuICAgICAgaXNDZWxzaXVzID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RE9NKGZvcmVjYXN0T2JqZWN0LCB0ZW1wQ2VsT3JGYWgpIHtcbiAgLy8gZGVmaW5lIGRheXNcbiAgY29uc3QgZGF5cyA9IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF07XG5cbiAgLy8gdG9kYXkncyB3ZWF0aGVyXG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24tbmFtZVwiKTtcbiAgY29uc3QgbG9jYXRpb25UaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi10aW1lXCIpO1xuICBjb25zdCBsb2NhdGlvbldlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXdlYXRoZXJcIik7XG4gIGNvbnN0IGxvY2F0aW9uVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXRlbXBlcmF0dXJlXCIpO1xuICBjb25zdCBsb2NhdGlvbkZlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWZlZWxcIik7XG4gIGNvbnN0IGxvY2F0aW9uV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24td2luZFwiKTtcbiAgY29uc3QgbG9jYXRpb25IdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24taHVtaWRpdHlcIik7XG5cbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3RPYmplY3QubG9jYXRpb24ubmFtZTtcbiAgbG9jYXRpb25UaW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3RPYmplY3QubG9jYXRpb24ubG9jYWx0aW1lO1xuICBsb2NhdGlvbldlYXRoZXIudGV4dENvbnRlbnQgPSBmb3JlY2FzdE9iamVjdC5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBsb2NhdGlvblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RPYmplY3QuY3VycmVudC50ZW1wX2N9wrBDYDtcbiAgbG9jYXRpb25GZWVsLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Zm9yZWNhc3RPYmplY3QuY3VycmVudC5mZWVsc2xpa2VfY33CsENgO1xuICBsb2NhdGlvbldpbmQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtmb3JlY2FzdE9iamVjdC5jdXJyZW50LndpbmRfa3BofWttL2hgO1xuICBsb2NhdGlvbkh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2ZvcmVjYXN0T2JqZWN0LmN1cnJlbnQuaHVtaWRpdHl9JWA7XG5cbiAgLy8gd2VhdGhlciBmb3JlY2FzdCBmb3IgMyBkYXlzXG4gIGZvcmVjYXN0T2JqZWN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5LmZvckVhY2goKGZvcmVjYXN0RGF5RWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkYXlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cIiR7aW5kZXh9XCJdYCk7XG4gICAgY29uc3QgZGF5V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXdlYXRoZXI9XCIke2luZGV4fVwiXWApO1xuICAgIGNvbnN0IGRheVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10ZW1wPVwiJHtpbmRleH1cIl1gKTtcblxuICAgIGxldCBkID0gbmV3IERhdGUoZm9yZWNhc3REYXlFbGVtZW50LmRhdGUpO1xuICAgIGxldCBjYWxjRGF5TmFtZSA9IGRheXNbZC5nZXREYXkoKV07XG4gICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGNhbGNEYXlOYW1lO1xuXG4gICAgZGF5V2VhdGhlci50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5RWxlbWVudC5kYXkuY29uZGl0aW9uLnRleHQ7XG5cbiAgICBkYXlUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3REYXlFbGVtZW50LmRheS5hdmd0ZW1wX2N9wrBDYDtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=