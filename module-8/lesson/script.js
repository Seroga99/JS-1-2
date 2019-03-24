'use strict'

const btn = document.querySelector('.js-btn')
// const btnRemoveListner = document.querySelector('.js-remove-event')
// const btnAddListener = document.querySelector('.js-add-event')

// const onBtnClick = () => alert('click!!!')
// const onAddListner = () => btn.addEventListener('click', onBtnClick)
// const onRemoveListner = () => btn.removeEventListener('click', onBtnClick)

// btnRemoveListner.addEventListener('click', onRemoveListner)
// btnAddListener.addEventListener('click', onAddListner)

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

////////////////////////////////////////////////////////////////////////////////////////////////////

// btn.addEventListener('click', function(e) {
//   console.log(this === e.currentTarget)
// })
// btn.addEventListener('click', e => {
//   console.log(this === e.currentTarget)
// })

/////////Делегирование событий///////////////////////Делегирование событий///////////////////////////////Делегирование событий////////////////////////////////////

const gallery = document.querySelector('.images')

// const images = gallery.querySelectorAll('.images img')
// const showImgSrc = event => console.log(event.target.src)
// images.forEach(img => img.addEventListener('click', showImgSrc))

//Делегирование событий
// gallery.addEventListener('click', e => console.log(e.target.src))
