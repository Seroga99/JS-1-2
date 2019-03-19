"use strict"

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/


// let cat = document.querySelector('.item');
// cat.classList.toggle('red__color');
// console.log(cat);






// const img = document.querySelector('.image');



// img.src = "http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg";



/////////////////////////////////////////////////////////////////////////////////////

// const list = document.querySelector('.list');


// const newItem = el => `<li>${el}</li>`;

// for(let i=4; i <= 10; i++) {
//     list.innerHTML += newItem(i);
// }


///////////////////////////////////////////////////////////////////////////////////////////////////


// let text = document.createElement('p');
// text.textContent = 'I am text'
// let image = document.createElement('img');
// image.setAttribute('src', 'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg');
// image.setAttribute('alt', 'photo1')
// console.log(image);


// let body = document.querySelector('body');
// body.prepend(image);
// console.log(body);



/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

const galleryItems = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Two Brown Hen and One Red Rooster"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  },
  {
    url:
      "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Macaw Birds"
  },
  {
    url:
      "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "2 Lion on Grass Field during Daytime"
  }
];
const list = document.querySelector('.gallery');

const imgCreator = arr => {
  const imgArr = [];
  arr.map(el => {
    const item = document.createElement('li');
    const image = document.createElement('img');
    image.setAttribute('src', el.url);
    image.setAttribute('alt', el.alt);
    item.appendChild(image);
    imgArr.push(item);
  })
  return list.append(...imgArr);
}

imgCreator(galleryItems);

















