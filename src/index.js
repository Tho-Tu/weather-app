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
  } catch (err) {
    console.log(err);
  }
}

async function getForecast(location, apiKey) {
  // current forecast
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`,
      { mode: "cors" }
    );
    const responseData = await response.json();
    console.log(responseData);
  } catch (err) {
    console.log(err);
  }
}
