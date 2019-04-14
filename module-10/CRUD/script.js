'use strict';

const tbody = document.querySelector('tbody');
const getBtn = document.querySelector('.get');
const addBtn = document.querySelector('.add');
const update = document.querySelector('.update');
const removeBtn = document.querySelector('.remove');

const url = 'http://localhost:3000/students';

const generateTable = (name, surname, amountHmw) => {
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  tdName.textContent = name;
  const tdSurname = document.createElement('td');
  tdSurname.textContent = surname;
  const tdHmw = document.createElement('td');
  tdHmw.textContent = amountHmw;

  tr.append(tdName, tdSurname, tdHmw);
  tbody.append(tr);
};

const getStudents = () =>
  fetch(url)
    .then(response => response.json())
    .then(data => data.map(el => generateTable(el.first_name, el.last_name, el.Homeworks)))
    .catch(err => (document.body.textContent = err));

getBtn.addEventListener('click', getStudents);

const addStudent = () => {
  const newStudent = {
    first_name: prompt('Enter name'),
    last_name: prompt('Enter surname'),
    Homeworks: prompt('Enter amount homeworks'),
  };
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(newStudent),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error));
};
addBtn.addEventListener('click', addStudent);

const updateStudent = () => {
  let id = prompt('Which student do you want to change?');
  const newStudent = {
    first_name: prompt('Enter name'),
    last_name: prompt('Enter surname'),
    Homeworks: prompt('Enter amount homeworks'),
  };
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newStudent),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error));
};
update.addEventListener('click', updateStudent);

const deleteStudent = () => {
  let id = prompt('Which student do you want to change?');
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  }).then(response => console.log(response));
};
removeBtn.addEventListener('click', deleteStudent);
