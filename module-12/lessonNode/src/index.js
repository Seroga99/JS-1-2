const shortid = require('shortid');
const weaherData = require('./fetch.js');

console.log(shortid.generate());

console.log('hello');

console.log('object');

weaherData.fetchForecast('Vinnitsa');
