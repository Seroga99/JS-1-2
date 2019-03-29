'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const colorPicker = document.querySelector('.input__color');

  const form = document.querySelector('form');
  const trInput = document.querySelector('.trInput');
  const tdInput = document.querySelector('.tdInput');

  const table = document.querySelector('table');
  let curentColor = 'red';
  const removeTableBtn = document.querySelector('.removeTableBtn');

  colorPicker.addEventListener('change', e => (curentColor = e.target.value));

  const onGenerateTable = (trCount, tdCount) => {
    const tbody = document.createElement('tbody');
    for (let i = 0; i < trCount; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < tdCount; j++) {
        const td = document.createElement('td');
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    let countMine = document.querySelector('select').value;
    getRandomTd(countMine);

    const getCountMinesSibling = () => {
      let trArr = Array.from(document.querySelectorAll('tr'));
      for (let elTr of trArr) {
        let tdArr = Array.from(elTr.children);
        let nextTr = elTr.nextElementSibling;
        let prevTr = elTr.previousElementSibling;

        let nextTrChildren;
        let prevTrChildren;
        nextTr && (nextTrChildren = Array.from(nextTr.childNodes));
        prevTr && (prevTrChildren = Array.from(prevTr.childNodes));
        for (let elTd of tdArr) {
          let next = elTd.nextElementSibling;
          let prev = elTd.previousElementSibling;
          if (elTd.matches('.mine')) {
            var idxMine = tdArr.indexOf(elTd);
            elTd.textContent = 0;
          } else if (next && prev && next.matches('.mine') && prev.matches('.mine')) {
            elTd.textContent = 2;
          } else if ((next && next.matches('.mine')) || (prev && prev.matches('.mine'))) {
            elTd.textContent = 1;
          } else {
            elTd.textContent = 0;
          }
          if (
            nextTrChildren &&
            nextTrChildren[idxMine] &&
            prevTrChildren &&
            prevTrChildren[idxMine] >= 0
          ) {
            elTd.textContent = +elTd.textContent + 2;
          } else if (nextTrChildren && nextTrChildren[idxMine]) {
            elTd.textContent = +elTd.textContent + 1;
          } else if (prevTrChildren && prevTrChildren[idxMine]) {
            elTd.textContent = +elTd.textContent + 1;
          } else {
            elTd.textContent = elTd.textContent;
          }
        }
      }
    };
    getCountMinesSibling();
    removeTableBtn.addEventListener('click', () => tbody.remove());
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    onGenerateTable(trInput.value, tdInput.value);
    form.reset();
  });

  table.addEventListener('click', e => {
    if (e.target.nodeName === 'TD') {
      e.target.style.border = '1px solid blue';
    }
  });

  table.addEventListener('click', e => {
    if (e.target.nodeName === 'TD') {
      e.target.style.backgroundColor = curentColor;
    }
  });
});

function getRandomTd(count) {
  const arr = Array.from(document.querySelectorAll('td'));
  const randomElemsArr = [];
  for (let i = 0; i < count; i++) {
    const randomElem = arr[Math.floor(Math.random() * arr.length)];
    randomElemsArr.push(randomElem);
  }
  randomElemsArr.forEach(el => el.classList.add('mine'));
  return randomElemsArr;
}

function nextUntil(elem, selector, filter) {
  let siblings = [];
  elem = elem.nextElementSibling;
  // As long as a sibling exists
  while (elem) {
    // If we've reached our match, bail
    if (elem.matches(selector)) break;
    // If filtering by a selector, check if the sibling matches
    if (filter && !elem.matches(filter)) {
      elem = elem.nextElementSibling;
      continue;
    }
    // Otherwise, push it to the siblings array
    siblings.push(elem);

    // Get the next sibling element
    elem = elem.nextElementSibling;
  }
  return siblings;
}
// nextUntil();
