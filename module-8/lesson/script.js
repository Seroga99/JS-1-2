'use strict';

// const btn = document.querySelector('.js-btn')

// const showClick = () => console.log('Like')
// btn.addEventListener('click', showClick)

// const btnRemoveListner = document.querySelector('.js-remove-event')
// const hendlerRemoveEvent = () => btn.removeEventListener('click', showClick)
// btnRemoveListner.addEventListener('click', hendlerRemoveEvent)

// const btnAddListener = document.querySelector('.js-add-event')
// const hendlerAddEvent = () => btn.addEventListener('click', showClick)
// btnAddListener.addEventListener('click', hendlerAddEvent)

///////////////////////////////////////////////////////////////////////////////////////////

// btn.addEventListener('click', e => {
//   console.log('BTN')
//   console.log(e)
//   console.log(e.target)
//   console.log(e.currentTarget)
// })
// document.body.addEventListener('click', e => {
//   console.log('')
//   console.log('BODY')
//   console.log(e)
//   console.log(e.target)
//   console.log(e.currentTarget)
// })

////////////////////////////////////////////////////////////////////////////////////////////////
// const btn = document.querySelector('.js-btn')

// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this)
//     // this будет ссылаться на button
//     // если использовать showName как callback
//     console.log(`My name is: ${this.name}`)
//     // тут undefined так как поля name нету у button
//   },
// }
// // Представим что у нас есть кнопка с классом js-btn
// // Выберем ее и повесим на нее слушатель клика
// // const btn = document.querySelector('.js-btn')

// btn.addEventListener('click', user.showName.bind(user))

////////////////////////////////////////////////////////////////////////////////////////////////////

// btn.addEventListener('click', function(e) {
//   console.log(this === e.currentTarget)
// })
// btn.addEventListener('click', e => {
//   console.log('=>')
//   console.log(this === e.currentTarget)
// })

/////////Делегирование событий///////////////////////Делегирование событий///////////////////////////////Делегирование событий////////////////////////////////////

// const gallery = document.querySelector('.images')

// const images = gallery.querySelectorAll('.images img')
// const showImgSrc = event => console.log(event.target.src)
// images.forEach(img => img.addEventListener('click', showImgSrc))

//Делегирование событий

// const onShowImgSrc = e => {
//   if (e.target.nodeName === 'IMG') {
//     console.log(e.target.src)
//   }
// }
// gallery.addEventListener('click', onShowImgSrc)

// const onGalleryClick = ({ target }) => (target.nodeName === 'IMG' ? console.log(target.src) : null)
// gallery.addEventListener('click', onGalleryClick)

/////////////////////////////////

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.js-form')
//   const input = document.querySelector('.js-input')
//   const list = document.querySelector('.js-list')

//   form.addEventListener('submit', handleFormSubmit)
//   input.addEventListener('change', handleInputChange)
//   list.addEventListener('click', handleListClick)

//   function handleInputChange(event) {
//     console.log(event.target)
//   }

//   function handleFormSubmit(event) {
//     event.preventDefault()
//     const listItem = createItem(input.value)
//     list.appendChild(listItem)
//     form.reset()
//   }
//   function handleListClick(e) {
//     const nodeName = e.target.nodeName
//     const parent = e.target.parentNode
//     const hasClass = e.target.classList.contains('js-btn-del')
//     if (nodeName === 'BUTTON' || hasClass) {
//       return parent.remove()
//     }
//   }
// })

// function createItem(text) {
//   const item = document.createElement('li')
//   item.textContent = text
//   const btn = document.createElement('button')
//   btn.textContent = 'X'
//   btn.classList.add('js-btn-del')
//   item.append(btn)
//   return item
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form')
//   const btnSubmit = document.querySelector('.js-btn-submit')
//   const list = document.querySelector('.js-list')
//   const input = document.querySelector('.js-input')

//   form.addEventListener('submit', onSubmit)
//   list.addEventListener('click', onDeleteItem)

//   function onSubmit(event) {
//     event.preventDefault()
//     const listItem = createItem(input.value)
//     list.append(listItem)
//     form.reset()
//   }
//   function createItem(text) {
//     const item = document.createElement('li')
//     item.textContent = text
//     const btnDelete = document.createElement('button')
//     btnDelete.textContent = 'X'
//     item.appendChild(btnDelete)
//     return item
//   }
//   function onDeleteItem({ target }) {
//     if (target.nodeName === 'BUTTON') {
//       target.parentNode.remove()
//     }
//   }
//   window.addEventListener('click', e => console.log(e.target.nodeName))
// })

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const list = document.querySelector('.list');

// const createItem = text => {
//   const item = document.createElement('li');
//   item.textContent = text;

//   const btnDelete = document.createElement('button');
//   btnDelete.textContent = 'Delete item';

//   item.appendChild(btnDelete);
//   list.append(item);
// };

// const onSubmit = e => {
//   e.preventDefault();
//   createItem(input.value);
//   form.reset();
// };

// form.addEventListener('submit', onSubmit);

// const onDelete = e => {
//   if (e.target.nodeName === 'BUTTON') {
//     e.target.parentNode.remove();
//   }
// };

// list.addEventListener('click', onDelete);

///////////////////////////////////////////////////////////////////////////////////////

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const inputList = document.querySelector('.input-list');
inputList.addEventListener('focusout', e => {
  if (+e.target.dataset.length === e.target.value.length) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
  }
});
