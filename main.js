/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw2QkFBNkI7QUFDbkUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPLEtBQUssU0FBUztBQUM1RSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsZ0NBQWdDO0FBQzVFLDhDQUE4QyxnQ0FBZ0M7O0FBRTlFO0FBQ0E7QUFDQSx5Q0FBeUMsOEJBQThCO0FBQ3ZFLDhDQUE4QyxtQ0FBbUM7QUFDakYsSUFBSTtBQUNKLHlDQUF5Qyw4QkFBOEI7QUFDdkUsOENBQThDLG1DQUFtQztBQUNqRjs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELE1BQU07QUFDaEUsZ0VBQWdFLE1BQU07QUFDdEUsMERBQTBELE1BQU07O0FBRWhFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQixpQ0FBaUM7QUFDaEUsTUFBTTtBQUNOLCtCQUErQixpQ0FBaUM7QUFDaEU7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcmVlIGtleVxuY29uc3Qgd2VhdGhlckFQSUtleSA9IFwiMDdlNGUyYTc0OWYwNDZiNWFmYzA0NjM3MjMwMjEwXCI7XG5cbmxldCBnbG9iYWxMb2NhdGlvbiA9IFwibmV3IHlvcmtcIjtcbnNlYXJjaENpdHkoKTtcblxuZnVuY3Rpb24gc2VhcmNoQ2l0eSgpIHtcbiAgY29uc3Qgd2VhdGhlckxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWxvY2F0aW9uXCIpO1xuICBjb25zdCBzZWFyY2hXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtd2VhdGhlclwiKTtcblxuICBzZWFyY2hXZWF0aGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBnbG9iYWxMb2NhdGlvbiA9IHdlYXRoZXJMb2NhdGlvbi52YWx1ZTtcbiAgICBsb2FkQ2l0eShgJHtnbG9iYWxMb2NhdGlvbn1gLCB3ZWF0aGVyQVBJS2V5KTtcbiAgICBzZWFyY2hXZWF0aGVyLnJlc2V0KCk7XG4gIH0pO1xuXG4gIGxvYWRDaXR5KFwibmV3IHlvcmtcIiwgd2VhdGhlckFQSUtleSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDaXR5KGxvY2F0aW9uLCBhcGlLZXkpIHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1tc2dcIik7XG4gIGdldEZvcmVjYXN0KGxvY2F0aW9uLCBhcGlLZXkpXG4gICAgLnRoZW4oKGZvcmVjYXN0T2JqZWN0KSA9PiB7XG4gICAgICBpZiAoZm9yZWNhc3RPYmplY3QuZXJyb3IpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RPYmplY3QuZXJyb3IubWVzc2FnZX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGN1c3RvbSB2YWxpZGl0eSB3aGVuIGEgdmFsaWQgY2l0eSBpcyBsb2FkZWRcbiAgICAgICAgZGlzcGxheURPTShmb3JlY2FzdE9iamVjdCwgaXNDZWxzaXVzKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXRGb3JlY2FzdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvY2F0aW9uLCBhcGlLZXkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuICBjb25zb2xlLmxvZyhcInJlc3BvbnNlLm9rOiBcIiArIHJlc3BvbnNlLm9rKTtcblxuICByZXR1cm4gcmVzcG9uc2VEYXRhO1xufVxuXG5sZXQgaXNDZWxzaXVzID0gdHJ1ZTtcbnRvZ2dsZVRlbXBlcmF0dXJlKCk7XG5mdW5jdGlvbiB0b2dnbGVUZW1wZXJhdHVyZSgpIHtcbiAgY29uc3QgdG9nZ2xlVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLXRlbXBcIik7XG4gIHRvZ2dsZVRlbXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoaXNDZWxzaXVzKSB7XG4gICAgICBpc0NlbHNpdXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDZWxzaXVzID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9hZENpdHkoZ2xvYmFsTG9jYXRpb24sIHdlYXRoZXJBUElLZXkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURPTShmb3JlY2FzdE9iamVjdCwgaXNDZWxzaXVzKSB7XG4gIC8vIGRlZmluZSBkYXlzXG4gIGNvbnN0IGRheXMgPSBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdO1xuXG4gIC8vIHRvZGF5J3Mgd2VhdGhlclxuICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLW5hbWVcIik7XG4gIGNvbnN0IGxvY2F0aW9uVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24tdGltZVwiKTtcbiAgY29uc3QgbG9jYXRpb25XZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi13ZWF0aGVyXCIpO1xuICBjb25zdCBsb2NhdGlvblRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi10ZW1wZXJhdHVyZVwiKTtcbiAgY29uc3QgbG9jYXRpb25GZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1mZWVsXCIpO1xuICBjb25zdCBsb2NhdGlvbldpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXdpbmRcIik7XG4gIGNvbnN0IGxvY2F0aW9uSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWh1bWlkaXR5XCIpO1xuXG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0T2JqZWN0LmxvY2F0aW9uLm5hbWU7XG4gIGxvY2F0aW9uVGltZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0T2JqZWN0LmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgbG9jYXRpb25XZWF0aGVyLnRleHRDb250ZW50ID0gZm9yZWNhc3RPYmplY3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcblxuICBsb2NhdGlvbldpbmQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtmb3JlY2FzdE9iamVjdC5jdXJyZW50LndpbmRfa3BofWttL2hgO1xuICBsb2NhdGlvbkh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2ZvcmVjYXN0T2JqZWN0LmN1cnJlbnQuaHVtaWRpdHl9JWA7XG5cbiAgLy8gdGVtcGVyYXR1cmUgY29udHJvbFxuICBpZiAoaXNDZWxzaXVzKSB7XG4gICAgbG9jYXRpb25UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0T2JqZWN0LmN1cnJlbnQudGVtcF9jfcKwQ2A7XG4gICAgbG9jYXRpb25GZWVsLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Zm9yZWNhc3RPYmplY3QuY3VycmVudC5mZWVsc2xpa2VfY33CsENgO1xuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9uVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdE9iamVjdC5jdXJyZW50LnRlbXBfZn3CsEZgO1xuICAgIGxvY2F0aW9uRmVlbC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2ZvcmVjYXN0T2JqZWN0LmN1cnJlbnQuZmVlbHNsaWtlX2Z9wrBGYDtcbiAgfVxuXG4gIC8vIHdlYXRoZXIgZm9yZWNhc3QgZm9yIDMgZGF5c1xuICBmb3JlY2FzdE9iamVjdC5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChmb3JlY2FzdERheUVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGF5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCIke2luZGV4fVwiXWApO1xuICAgIGNvbnN0IGRheVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS13ZWF0aGVyPVwiJHtpbmRleH1cIl1gKTtcbiAgICBjb25zdCBkYXlUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGVtcD1cIiR7aW5kZXh9XCJdYCk7XG5cbiAgICBsZXQgZCA9IG5ldyBEYXRlKGZvcmVjYXN0RGF5RWxlbWVudC5kYXRlKTtcbiAgICBsZXQgY2FsY0RheU5hbWUgPSBkYXlzW2QuZ2V0RGF5KCldO1xuICAgIGRheU5hbWUudGV4dENvbnRlbnQgPSBjYWxjRGF5TmFtZTtcblxuICAgIGRheVdlYXRoZXIudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheUVsZW1lbnQuZGF5LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgaWYgKGlzQ2Vsc2l1cykge1xuICAgICAgZGF5VGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0RGF5RWxlbWVudC5kYXkuYXZndGVtcF9jfcKwQ2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdERheUVsZW1lbnQuZGF5LmF2Z3RlbXBfZn3CsEZgO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=