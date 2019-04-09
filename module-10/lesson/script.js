'use strict';

fetch('https://codepen.io/loomernescent/pen/LRGRaB.js')
  .then(response => response.json())
  .then(data => {
    generateList(data);
    infoArr = data;
  })
  .catch(error => {
    const err = document.createElement('h2');
    err.textContent = 'Купляй самсунг' + error;
    document.body.appendChild(err);
  });

function generateList(arr) {
  const list = document.createElement('ul');
  arr.map(el => {
    const item = document.createElement('li');
    const qoute = document.createElement('h2');
    const image = document.createElement('img');
    const author = document.createElement('p');

    qoute.textContent = el.quote;
    author.textContent = el.whom;
    image.setAttribute('src', el.imgSrc);

    item.append(image, qoute, author);
    list.append(item);
  });

  return document.body.appendChild(list);
}
