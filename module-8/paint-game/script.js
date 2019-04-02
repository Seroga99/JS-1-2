'use strict';

// window.addEventListener('DOMContentLoaded', () => {
//   const colorPicker = document.querySelector('.input__color');

//   const form = document.querySelector('form');
//   const trInput = document.querySelector('.trInput');
//   const tdInput = document.querySelector('.tdInput');

//   const table = document.querySelector('table');
//   let curentColor = 'red';
//   const removeTableBtn = document.querySelector('.removeTableBtn');

//   colorPicker.addEventListener('change', e => (curentColor = e.target.value));

//   const onGenerateTable = (trCount, tdCount) => {
//     const tbody = document.createElement('tbody');
//     for (let i = 0; i < trCount; i++) {
//       const tr = document.createElement('tr');
//       for (let j = 0; j < tdCount; j++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//       }
//       tbody.appendChild(tr);
//     }
//     table.appendChild(tbody);
//     removeTableBtn.addEventListener('click', () => tbody.remove());
//   };

//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     onGenerateTable(trInput.value, tdInput.value);
//     form.reset();
//   });

//   table.addEventListener('click', e => {
//     if (e.target.nodeName === 'TD') {
//       e.target.style.border = '1px solid blue';
//     }
//   });

//   table.addEventListener('mousemove', e => {
//     if (e.target.nodeName === 'TD') {
//       e.target.style.backgroundColor = curentColor;
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const formGenerateTable = document.querySelector('form');
  const trInput = document.querySelector('.trInput');
  const tdInput = document.querySelector('.tdInput');
  const table = document.querySelector('table');

  const input__color = document.querySelector('.input__color');
  const removeTableBtn = document.querySelector('.removeTableBtn');
  formGenerateTable.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();

    generateTable(trInput.value, tdInput.value);

    formGenerateTable.reset();
  }

  function generateTable(countTr, countTd) {
    const tbody = document.createElement('tbody');
    for (let i = 0; i < countTr; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < countTd; j++) {
        const td = document.createElement('td');
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  }

  table.addEventListener('mousemove', fnAddColor);
  function fnAddColor(e) {
    if (e.target.nodeName === 'TD') {
      e.target.style.backgroundColor = input__color.value;
    }
  }
  removeTableBtn.addEventListener('click', () => table.remove());
});
