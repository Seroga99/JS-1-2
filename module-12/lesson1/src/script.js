function fn(msg) {
  console.log('Hello from script.js and' + msg);
  console.log('we are online');
}

module.exports = { fn };
var axios = require('axios');

axios
  .get('https://api.apixu.com/v1/forecast.json?key=8692627850634df895d103122181209&q=kiev&days=10')
  .then(({ data }) => console.log(data));
