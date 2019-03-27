'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const colorPicker = document.querySelector('.input__color');
  const generateTableBtn = document.querySelector('.generateTableBtn');

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
    removeTableBtn.addEventListener('click', () => tbody.remove());
    let arr = Array.from(document.querySelectorAll('td'));
    console.log(arr);
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    onGenerateTable(trInput.value, tdInput.value);
    form.reset();
  });

  table.addEventListener('click', e => console.log(e.currentTarget));
  table.addEventListener('mousemove', e => {
    if (e.target.nodeName === 'TD') {
      e.target.style.backgroundColor = curentColor;
    }
  });
});
