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

/////////////////////////RegExp/////////////////////////////////////////

// const form = document.querySelector('form');

// const VALIDATOR = {
//   patterns: {
//     name: /^[a-zA-Z]{4,}$/,
//     email: /^[a-zA-Z]{4,}$/,
//     pass: /^[a-zA-Z]{4,}$/,
//   },
//   validate(formElement) {
//     const inputs = Array.from(formElement.querySelectorAll('input'));

//     const results = inputs.reduce((acc, { name, value }) => {
//       const valid = this.valid(name, value);
//       acc[name] = valid;

//       return acc;
//     }, {});
//     const valid = Object.values(result).every(value => value);
//     return {
//       valid,
//       results,
//     };
//   },
//   isValid(patternKey, value) {
//     return this.patterns[patternKey].test(value);
//   },
// };
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();
//   const validatorResult = VALIDATOR.validate(form);
//   if (validatorResult.valid) {
//     alert('Valid');
//   } else {
//     alert('invalid');
//   }
// }

// const str = 'Donald';
// const regExp = /^[A-Z]+[a-z]{4,15}/;
// const validName = regExp.test(str);
// console.log(validName);

// [+?380]+[-]+[0-9]{4}[-]+[0-9]{4} phone

// const form = document.querySelector('form');
// const name = document.querySelector('[name="name"]');
// const email = document.querySelector('[name="email"]');
// const pass = document.querySelector('[name="pass"]');
// const arrInputs = Array.from(document.querySelectorAll('input'));
// const tbody = document.querySelector('tbody');

// const VALIDATOR = {
//   name: /^[A-Z]+[a-z]{4,15}/,
//   email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
//   pass: /^[a-z0-9_-]{6,18}$/,
// };
// form.addEventListener('submit', handleSubmit);
// function handleSubmit(e) {
//   e.preventDefault();
//   if (
//     VALIDATOR.name.test(name.value) &&
//     VALIDATOR.email.test(email.value) &&
//     VALIDATOR.pass.test(pass.value)
//   ) {
//     const tr = document.createElement('tr');
//     arrInputs.map(el => {
//       const td = document.createElement('td');
//       td.textContent = el.value;
//       tr.appendChild(td);
//     });
//     tbody.append(tr);
//   } else {
//     alert('Купляй sumsung');
//   }
//   form.reset();
// }
/////////////////////??////////////////////////////////////////////////////////////
// const form = document.querySelector('form');
// const name = document.querySelector('[name="name"]');
// const email = document.querySelector('[name="email"]');
// const pass = document.querySelector('[name="pass"]');
// const inputs = Array.from(document.querySelectorAll('input'));
// const VALIDATOR = {
//   name: /^[A-Z]+[a-z]{3,15}/,
//   email: /^[a-z0-9_-]{6,18}$/,
//   pass: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
// };

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();
//   if (
//     VALIDATOR.name.test(name.value) &&
//     VALIDATOR.email.test(email.value) &&
//     VALIDATOR.pass.test(pass.value)
//   ) {
//     fetchUsers();
//     console.log(VALIDATOR.name.test(name.value));
//   } else {
//     alert('Error');
//   }
//   form.reset();
// }

// const userTable = document.querySelector('.user-table');
// function fetchUsers() {
//   axios.get('https://jsonplaceholder.typicode.com/users/').then(data => generateTable(data.data));
// }

// // Имя | Почта | Город | Вебсайт | Компания
// function generateTable(arr) {
//   arr.map(el => {
//     const tr = document.createElement('tr');
//     const TdName = document.createElement('td');
//     TdName.textContent = el.name;
//     const tdEmail = document.createElement('td');
//     tdEmail.textContent = el.email;
//     const tdcity = document.createElement('td');
//     tdcity.textContent = el.address.city;
//     const tdSite = document.createElement('td');
//     tdSite.textContent = el.website;
//     const tdCompany = document.createElement('td');
//     tdCompany.textContent = el.company.name;
//     tr.append(TdName, tdEmail, tdcity, tdSite, tdCompany);
//     userTable.append(tr);
//   });
// }

let time = document.querySelector('.js-time');
let strbutt = document.querySelector('.js-start');
let lapbutt = document.querySelector('.js-take-lap');
let rstbutt = document.querySelector('.js-reset');
let ul = document.querySelector('.laps');
let counter = 0;
let clock;
let bool = false;
let checker = false;
strbutt.addEventListener(
  'click',

  () => {
    bool = !bool;

    if (!checker) {
      clock = setInterval(() => {
        if (bool) {
          counter += 100;
          let mins = Math.floor(counter / 60000);
          let secs = Math.floor((counter / 1000) % 60);
          let huns = Math.floor((counter / 100) % 10);
          time.textContent = `${mins}:${secs}.${huns}`;
          strbutt.textContent = 'Continue';
        } else {
          strbutt.textContent = 'Start';
        }
      }, 100);
      checker = true;
    }
  },
);
lapbutt.addEventListener('click', () => {
  let currt = time.textContent;
  const li = document.createElement('li');
  li.textContent = currt;
  ul.append(li);
});
rstbutt.addEventListener('click', () => {
  clearInterval(clock);
  time.textContent = '0:0.0';
  strbutt.textContent = 'Start';
  bool = false;
  counter = 0;
  checker = false;
});
