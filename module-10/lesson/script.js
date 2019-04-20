'use strict';

// fetch('https://codepen.io/loomernescent/pen/LRGRaB.js')
//   .then(response => response.json())
//   .then(data => {
//     generateList(data);
//   })
//   .catch(error => {
//     const err = document.createElement('h2');
//     err.textContent = 'Купляй самсунг' + error;
//     document.body.appendChild(err);
//   });

// function generateList(arr) {
//   const list = document.createElement('ul');
//   arr.map(el => {
//     const item = document.createElement('li');
//     const qoute = document.createElement('h2');
//     const image = document.createElement('img');
//     const author = document.createElement('p');

//     qoute.textContent = el.quote;
//     author.textContent = el.whom;
//     image.setAttribute('src', el.imgSrc);

//     item.append(image, qoute, author);
//     list.append(item);
//   });

//   return document.body.appendChild(list);
// }

// const generateUI = arr => {
//   console.log(arr);
//   const list = document.createElement('ul');
//   arr.map(el => {
//     const item = document.createElement('li');

//     const name = document.createElement('h2');
//     name.textContent = el.title;

//     const image = document.createElement('img');
//     image.setAttribute('src', `https://image.tmdb.org/t/p/w500/${el.backdrop_path}`);

//     item.append(name, image);
//     list.appendChild(item);
//     document.body.appendChild(list);
//   });
// };

// fetch(
//   'https://api.themoviedb.org/3/movie/popular?api_key=5874acfd11651a28c55771624f7021f4&language=en-US',
// )
//   .then(response => response.json())
//   .then(data => generateUI(data.results));

//////////////////////////////////////////////////////////////////////////////////

// const getGenres = () =>
//   fetch(
//     'https://api.themoviedb.org/3/genre/movie/list?api_key=5874acfd11651a28c55771624f7021f4&language=en-US',
//   )
//     .then(response => response.json())
//     .then(data => console.log(data.genres));

// getGenres();

// const getMoviesByGenres = id =>
//   fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`,
//   )
//     .then(response => response.json())
//     .then(data => console.log(data.results));

// getMoviesByGenres(35);

// //////////////////////////////////////////////////

// const searchMovie = query =>
//   fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&query=${query}&page=1&include_adult=false`,
//   )
//     .then(response => response.json())
//     .then(data =>
//       data.results.map(el => {
//         const title = document.createElement('h2');
//         title.textContent = el.title;
//         document.body.appendChild(title);
//       }),
//     );
// const form = document.querySelector('form');
// const input = document.querySelector('input');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   return searchMovie(input.value);
// });

///////////////////////web storage///////////////////////////////////////////////////////

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// let a = Object.values(localStorage);
// console.log(a);
// list.append(...a);

// const onSubmit = e => {
//   e.preventDefault();
//   createItem();
//   form.reset();
// };

// form.addEventListener('submit', onSubmit);

// function createItem() {
//   const item = document.createElement('li');
//   item.textContent = input.value;
//   localStorage.setItem('task-3', input.value);
//   list.appendChild(item);
// }

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');
// const deleteAll = document.querySelector('.deleteAll');

// const onSubmit = e => {
//   e.preventDefault();
//   createItem();
//   console.log(input.value);
//   form.reset();
// };

// form.addEventListener('submit', onSubmit);

// deleteAll.addEventListener('click', () => {
//   localStorage.clear();
//   location.reload();
// });

// function createItem() {
//   const item = document.createElement('li');
//   const deleteItem = document.createElement('button');
//   deleteItem.textContent = 'X';
//   item.textContent = input.value;
//   item.appendChild(deleteItem);
//   localStorage.setItem(Date.now(), input.value);
//   list.appendChild(item);
// }

// const showLocalStorage = () =>
//   Object.values(localStorage).map(el => {
//     const item = document.createElement('li');
//     item.textContent = el;
//     const deleteItem = document.createElement('button');
//     deleteItem.textContent = 'X';
//     item.appendChild(deleteItem);
//     list.appendChild(item);
//   });

// showLocalStorage();

// console.log(Object.entries(localStorage));

const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const deleteAll = document.querySelector('.deleteAll');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  createItem();
  form.reset();
}
deleteAll.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});

function createItem() {
  const item = document.createElement('li');
  item.textContent = input.value;
  list.appendChild(item);
}

function getItemFromLocalSrorage() {
  let localStorageArr = Object.values(localStorage);
  localStorageArr.map(el => {
    const item = document.createElement('li');
    item.textContent = el;
    list.appendChild(item);
  });
}
getItemFromLocalSrorage();

// const arr = [[0, 'sdcds'], [1, 'cdscdcs']];
// const arrJSON = JSON.stringify(arr);
// localStorage.setItem('array', arrJSON);
// let a = JSON.parse(localStorage.getItem('array'));
// console.log(a);
