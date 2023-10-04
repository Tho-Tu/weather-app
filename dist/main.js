/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const weatherAPIKey = "07e4e2a749f046b5afc04637230210";

getWeather("brisbane", weatherAPIKey);
getForecast("brisbane", weatherAPIKey);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsT0FBTyxLQUFLLFNBQVM7QUFDN0UsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELE9BQU8sS0FBSyxTQUFTO0FBQzlFLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUIsR0FBRywwQkFBMEI7QUFDdkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3ZWF0aGVyQVBJS2V5ID0gXCIwN2U0ZTJhNzQ5ZjA0NmI1YWZjMDQ2MzcyMzAyMTBcIjtcblxuZ2V0V2VhdGhlcihcImJyaXNiYW5lXCIsIHdlYXRoZXJBUElLZXkpO1xuZ2V0Rm9yZWNhc3QoXCJicmlzYmFuZVwiLCB3ZWF0aGVyQVBJS2V5KTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiwgYXBpS2V5KSB7XG4gIC8vIGN1cnJlbnQgd2VhdGhlclxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGFsZXJ0KGVycik7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsb2NhdGlvbiwgYXBpS2V5KSB7XG4gIC8vIDMgZGF5IGZvcmVjYXN0XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufSZkYXlzPTNgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGdldFVzZXJMb2NhdGlvbigpIHtcbi8vICAgY29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gKHBvc2l0aW9uKSA9PiB7XG4vLyAgICAgcmV0dXJuIGAke3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZX0sJHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfWA7XG4vLyAgIH07XG5cbi8vICAgY29uc3QgZXJyb3JDYWxsYmFjayA9IChlcnJvcikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfTtcblxuLy8gICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=