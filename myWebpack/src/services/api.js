import axios from 'axios';
const weatherData = city =>
  axios
    .get(
      `https://api.apixu.com/v1/forecast.json?key=8692627850634df895d103122181209&q=${city}&days=10`,
    )
    .then(({ data }) => console.log(data));

export default weatherData;
