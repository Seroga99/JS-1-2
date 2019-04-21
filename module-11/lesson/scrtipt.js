'use strict';

// axios
//   .get('https://jsonplaceholder.typicode.com/todos')
//   .then(data => console.log(data.data))
//   .catch(err => console.log(err));

// const products = [
//   { name: 'Apples', quantity: 50, fresh: false, worms: ['Johny', 'Bob'] },
//   { name: 'Grapes', quantity: 44, fresh: true, worms: ['Donald', 'Anton'] },
//   { name: 'Cheese', quantity: 128, fresh: false, worms: ['Dima', 'Bob', 'Liverpool'] },
//   { name: 'Milk', quantity: 93, fresh: true, worms: ['Bodya', 'Seroga'] },
// ];
// const source = document.querySelector('#products-tpl').innerHTML.trim();
// const template = Handlebars.compile(source);
// const result = template({ products });
// document.body.insertAdjacentHTML('beforebegin', result);

// // function template(arr, name, quantity) {
// //   return arr.map(el => `<li> <h2>${el.name}</h2> <h2>${el.quantity}</h2></li>`);
// // }

// fetch('my-cool-website.net/data', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Custom-Header': 'custom value'
//   }
// }).then(() => { ... });
// fetch(
//   'https://gateway.marvel.com:443/v1/public/comics?apikey=65889c1630904587be0f67dde8fc3615&hash=a60bf2c042610195fb6fc91eb1f64cc2',
// )
//   .then(response => response.json())
//   .then(data => console.log(data));

// const source = document.querySelector('#simpsons-tpl').innerHTML.trim();
// const template = Handlebars.compile(source);

// axios
//   .get('https://codepen.io/loomernescent/pen/LRGRaB.js')
//   .then(({ data }) => document.body.insertAdjacentHTML('afterbegin', template(data)))
//   .catch(err => console.log(err));

axios
  .get('http://gateway.marvel.com/v1/public/comics', {
    params: {
      apikey: '65889c1630904587be0f67dde8fc3615',
      hash: '8feb01e1f52da213b5f541c7f966e727',
      dateDescriptor: new Date().getTime(),
    },
  })
  .then(response => console.log(response));
