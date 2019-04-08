'use strict';

// const checkNumber = num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num % 2 === 0) {
//         resolve('Even!!! Success!!!');
//       }
//       reject('Odd!!! Fail!!!');
//     }, 1000);
//   });
// };
// const promise = checkNumber(4);

// promise.then(result => console.log(result)).catch(error => console.log(error));

////////////////====================================================================================

// const DISTANCE = 1000;
// const race = (name, speed) =>
//   new Promise(resolve =>
//     setTimeout(() => {
//       resolve(`${name} crossed the finish line!`);
//     }, (DISTANCE / speed) * 1000),
//   );
// console.log(1);
// race('fiat', 220).then(res => console.log(res));
// console.log(2);
// race('bmw', 310).then(res => console.log(res));
// console.log(3);
// race('ferrari', 400).then(res => console.log(res));
// console.log(4);

//////////////////////////

// const fiat = race('fiat', 220);
// fiat.then(res => console.log(res));
// const bmw = race('bmw', 310);
// bmw.then(res => console.log(res));
// const ferrari = race('ferrari', 400);
// ferrari.then(res => console.log(res));

//////////////////////////

// const fiat = race('fiat', 220);
// const bmw = race('bmw', 310);
// const ferrari = race('ferrari', 400);

// Promise.all([fiat, bmw, ferrari])
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// Promise.race([fiat, bmw, ferrari])
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

////////////////////////////////////////////fetch//////////////////////////////////////////

// console.log('before');
// const a = fetch('https://jsonplaceholder.typicode.com/todos').then(response =>
//   response
//     .json()
//     .then(data => data.map(el => console.log(el)))
//     .catch(err => console.log(err)),
// );
// console.log('after');

// const fn = num =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num % 2 === 0) {
//         resolve('Even');
//       } else {
//         reject('Odd');
//       }
//     }, 1000);
//   });

// const res = fn(5);
// res.then(response => console.log(response)).catch(error => console.log(error));

const DISTANCE = 1000;

// const car = (name, speed) =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve(`[${name}] crossed the finish line!`);
//     }, (DISTANCE / speed) * 1000);
//   });

// const fiat = car('fiat', 220);
// const bmw = car('bmw', 340);
// const ferrari = car('ferrari', 420);

// Promise.race([fiat, bmw, ferrari])
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
//////////////////////////////

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });
// promise
//   .then(value => value * 2)
//   .then(showValue => console.log(showValue))
//   .catch(error => console.log('error: ' + error));

// fetch('https://jsonplaceholder.typicode.com/todos').then(response =>
//   response
//     .json()
//     .then(data => fn(data.phones.SonyEricson))
//     .catch(error => {
//       const h2 = document.createElement('h2');
//       h2.textContent = 'Немає SonyEricson, купляй Sony';
//       document.body.append(h2, error);
//     }),
// );

// function fn(data) {
//   data.map(el => {
//     const arr = [];
//     const h2 = document.createElement('h2');
//     h2.textContent = el.title;
//     arr.push(h2);
//     return document.body.append(...arr);
//   });
// }
