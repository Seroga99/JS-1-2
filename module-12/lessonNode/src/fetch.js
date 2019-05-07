var axios = require('axios');

const fetchForecast = city =>
  axios
    .get(
      `https://api.apixu.com/v1/forecast.json?key=8692627850634df895d103122181209&q=${city}&days=10`,
    )
    .then(({ data }) => console.log(data));

module.exports = {
  fetchForecast,
};
