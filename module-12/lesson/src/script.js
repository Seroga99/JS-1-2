'use strict';

// mpm init
// npm i shortid
var shortid = require('shortid');
console.log('our id ' + shortid.generate());

// npm i axios
var axios = require('axios');

axios
  .get('https://api.apixu.com/v1/forecast.json?key=8692627850634df895d103122181209&q=kiev&days=10')
  .then(({ data }) => console.log(data));

// ставимо webpack і  webpack-cli (пакет з інструментами для роботи в консолі) в залежність розробки
// npm i webpack webpack-cli --save-dev
