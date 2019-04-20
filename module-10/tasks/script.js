/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector('input');
// const form = document.querySelector('.search-form');
// const result = document.querySelector('.result');
// const API_URL = 'https://restcountries.eu/rest/v2/name/';

// form.addEventListener('submit', fetchCountryData);

/*
  @param {FormEvent} evt
*/
// function fetchCountryData(evt) {
//   evt.preventDefault();
//   const name = input.value;

//   function dataAbout(data) {
//     result.innerHTML = '';

//     const h2 = document.createElement('h2');
//     const h3 = document.createElement('h3');
//     const flag = document.createElement('img');

//     h2.textContent = `Country name: ${data[0].name}`;
//     h3.textContent = `Capital: ${data[0].capital}`;
//     flag.setAttribute('src', data[0].flag);

//     result.append(h3, h4, flag);
//   }

//   fetch(`${API_URL}${name}`)
//     .then(response => response.json())
//     .then(data => dataAbout(data))
//     .catch(err => console.log(err));
// }

// form.addEventListener('submit', fetchCountryData);

/////////22222222222222222222222222222222222222222222222222222//////////////////////

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.

  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const result = document.querySelector('.result');
const API_URL = '';

form.addEventListener('submit', fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
  evt.preventDefault();
  fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then(data => showResonse(data.name, data.login, data.avatar_url))
    .catch(err => (document.body.textContent = err));
}
function showResonse(name, userName, img) {
  const nodeName = document.createElement('h2');
  nodeName.textContent = name;
  const nodeLogin = document.createElement('h3');
  nodeLogin.textContent = userName;
  const nodeImg = document.createElement('img');
  nodeImg.setAttribute('src', img);
  result.append(nodeName, nodeLogin, nodeImg);
}
