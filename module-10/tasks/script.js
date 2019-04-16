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

const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const result = document.querySelector('.result');
const API_URL = 'https://restcountries.eu/rest/v2/name/';

form.addEventListener('submit', fetchCountryData);

/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
  evt.preventDefault();
  const name = input.value;

  function dataAbout(data) {
    result.innerHTML = '';

    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const flag = document.createElement('img');

    h2.textContent = `Country name: ${data[0].name}`;
    h3.textContent = `Capital: ${data[0].capital}`;
    flag.setAttribute('src', data[0].flag);

    result.append(h3, h4, flag);
  }

  fetch(`${API_URL}${name}`)
    .then(response => response.json())
    .then(data => dataAbout(data))
    .catch(err => console.log(err));
}

form.addEventListener('submit', fetchCountryData);
