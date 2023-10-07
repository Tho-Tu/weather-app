/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsT0FBTyxLQUFLLFNBQVM7QUFDN0UsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELE9BQU8sS0FBSyxTQUFTO0FBQzlFLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLDZCQUE2Qjs7QUFFcEU7QUFDQSw0Q0FBNEMsa0NBQWtDOztBQUU5RTtBQUNBLDRDQUE0QywrQkFBK0I7O0FBRTNFO0FBQ0EsOENBQThDLCtCQUErQjs7QUFFN0U7QUFDQSxrQkFBa0IsT0FBTztBQUN6QiwwREFBMEQsRUFBRTtBQUM1RCw2REFBNkQsRUFBRTtBQUMvRCwwREFBMEQsRUFBRTtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCLEdBQUcsMEJBQTBCO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VhdGhlckFQSUtleSA9IFwiMDdlNGUyYTc0OWYwNDZiNWFmYzA0NjM3MjMwMjEwXCI7XG5cbmdldFdlYXRoZXIoXCJuZXcgeW9ya1wiLCB3ZWF0aGVyQVBJS2V5KTtcbmdldEZvcmVjYXN0KFwibmV3IHlvcmtcIiwgd2VhdGhlckFQSUtleSk7XG5cbnNlYXJjaENpdHkoKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiwgYXBpS2V5KSB7XG4gIC8vIGN1cnJlbnQgd2VhdGhlclxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGFsZXJ0KGVycik7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsb2NhdGlvbiwgYXBpS2V5KSB7XG4gIC8vIDMgZGF5IGZvcmVjYXN0XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufSZkYXlzPTNgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlYXJjaENpdHkoKSB7XG4gIGNvbnN0IHdlYXRoZXJMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1sb2NhdGlvblwiKTtcbiAgY29uc3Qgc2VhcmNoV2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXdlYXRoZXJcIik7XG4gIHNlYXJjaFdlYXRoZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZ2V0V2VhdGhlcihgJHt3ZWF0aGVyTG9jYXRpb24udmFsdWV9YCwgd2VhdGhlckFQSUtleSlcbiAgICAgIC50aGVuKCh3ZWF0aGVyT2JqZWN0KSA9PiB7XG4gICAgICAgIHdlYXRoZXJMb2NhdGlvbi5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgZGlzcGxheURPTSh3ZWF0aGVyT2JqZWN0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHdlYXRoZXJMb2NhdGlvbi5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBlbnRlciB2YWxpZCBjaXR5XCIpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIC8vIEhBTkRMRSBFUlJPUlxufVxuXG5mdW5jdGlvbiB0b2dnbGVUZW1wZXJhdHVyZSgpIHtcbiAgY29uc3QgdG9nZ2xlVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLXRlbXBcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlET00od2VhdGhlck9iamVjdCkge1xuICAvLyB0b2RheSdzIHdlYXRoZXJcbiAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1uYW1lXCIpO1xuICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqZWN0LmxvY2F0aW9uLm5hbWU7XG5cbiAgY29uc3QgbG9jYXRpb25UaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi10aW1lXCIpO1xuICBsb2NhdGlvblRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqZWN0LmxvY2F0aW9uLmxvY2FsdGltZTtcblxuICBjb25zdCBsb2NhdGlvbldlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXdlYXRoZXJcIik7XG4gIGxvY2F0aW9uV2VhdGhlci50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcblxuICBjb25zdCBsb2NhdGlvblRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi10ZW1wZXJhdHVyZVwiKTtcbiAgbG9jYXRpb25UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmplY3QuY3VycmVudC50ZW1wX2N9wrBDYDtcblxuICBjb25zdCBsb2NhdGlvbkZlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWZlZWxcIik7XG4gIGxvY2F0aW9uRmVlbC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke3dlYXRoZXJPYmplY3QuY3VycmVudC5mZWVsc2xpa2VfY33CsENgO1xuXG4gIGNvbnN0IGxvY2F0aW9uV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24td2luZFwiKTtcbiAgbG9jYXRpb25XaW5kLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlck9iamVjdC5jdXJyZW50LndpbmRfa3BofWttL2hgO1xuXG4gIGNvbnN0IGxvY2F0aW9uSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWh1bWlkaXR5XCIpO1xuICBsb2NhdGlvbkh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJPYmplY3QuY3VycmVudC5odW1pZGl0eX0lYDtcblxuICAvLyB3ZWF0aGVyIGZvcmVjYXN0IGZvciBuZXh0IDMgZGF5c1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IGRheU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHtpfVwiXWApO1xuICAgIGNvbnN0IGRheVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHtpfVwiXWApO1xuICAgIGNvbnN0IGRheVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHtpfVwiXWApO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGdldFVzZXJMb2NhdGlvbigpIHtcbi8vICAgY29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gKHBvc2l0aW9uKSA9PiB7XG4vLyAgICAgcmV0dXJuIGAke3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZX0sJHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfWA7XG4vLyAgIH07XG5cbi8vICAgY29uc3QgZXJyb3JDYWxsYmFjayA9IChlcnJvcikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfTtcblxuLy8gICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=