/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const btn = document.querySelector('button')
// let i = btn.innerHTML
// const onClick = () => (btn.innerHTML = i++)
// btn.addEventListener('click', onClick)

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// const input1 = document.querySelector('.js-input_1')
// const input2 = document.querySelector('.js-input_2')
// let result = document.querySelector('.result')
// const btn = document.querySelector('.btn')

// const handlerBtn = () => (result.innerHTML = +input1.value + +input2.value)
// btn.addEventListener('click', handlerBtn)

///////////3333333333333333333333333333333333//////////////////////////////////

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
// const sub = document.querySelector('[data-action=sub]')
// const add = document.querySelector('[data-action=add]')
// const resValue = document.querySelector('.value')

// sub.addEventListener('click', () => +resValue.innerHTML--)
// add.addEventListener('click', () => +resValue.innerHTML++)

// 4444444444444444444444444444444444444444444444444444444444444

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const inputs = Array.from(document.querySelectorAll('input'))
// const form = document.querySelector('.question-form')
// const result = document.querySelector('.result')

// const hadlerSubmit = e => {
//   e.preventDefault()
//   let checkedInput = inputs.find(input => input.checked)
//   result.textContent = 'Result: ' + checkedInput.value
// }
// form.addEventListener('submit', hadlerSubmit)

////////////999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// const modal = document.querySelector('.js-modal-backdrop')
// const openModal = document.querySelector('.js-open-modal')
// const closeModal = document.querySelector('.js-close-modal')
// const backdrop = document.querySelector('.js-modal-backdrop')

// function fnOpenModal() {
//   modal.classList.remove('modal-hidden')
// }
// function fnCloseModal() {
//   modal.classList.add('modal-hidden')
// }

// openModal.addEventListener('click', fnOpenModal)
// closeModal.addEventListener('click', fnCloseModal)
// backdrop.addEventListener('click', fnCloseModal)

// document.addEventListener('keyup', e => {
//   if (e.keyCode === 27) {
//     fnCloseModal()
//   }
// })
// console.log(modal)
// console.log(openModal)
// console.log(closeModal)
// console.log(backdrop)

// function showModal() {
//   modal.classList.remove('modal-hidden')
// }
// function removeModal() {
//   modal.classList.add('modal-hidden')
// }

// openModal.addEventListener('click', showModal)
// closeModal.addEventListener('click', removeModal)
// backdrop.addEventListener('click', removeModal)
