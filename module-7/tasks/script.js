/* 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// const items = Array.from(document.querySelectorAll('.categories > li'));
// console.log(items);
// const itemsText = items.map(el => console.log(el.firstChild.textContent));
// const itemsChildsLength = items.map(el => console.log('ulArr.length:', el.firstElementChild.children.length))











/*2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list = document.querySelector('.list');

// const firstChild = list.firstElementChild;
// firstChild.classList.add('color__red');

// const lastChild = list.lastElementChild;
// lastChild.classList.add('color__blue');












// 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/
// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');
// const appendElementsToList = arr => {
//     const items = [];
//     arr.map(el => {
//         const item = document.createElement('li');
//         item.textContent = el;
//         items.push(item);   
//     });
//     list.append(...items)
// }
// appendElementsToList(elements);













// 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [   
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

// const galleryList = document.querySelector('.gallery');

// const createGelleryItems = arr => {
//     const items = [];
//     arr.map(el => {
//         const item = document.createElement('li');
//         const img = document.createElement('img');
//         img.setAttribute('src', el.url);
//         img.setAttribute('alt', el.alt);
//         item.appendChild(img);
//         items.push(item);
//     });
//     galleryList.append(...items);
// }
// createGelleryItems(galleryItems);













/*55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// const checkedCheckbox = Array.from(document.querySelectorAll(':checked'));
// const collectInputData = inputs => inputs.map(el => el.value);
// console.log(collectInputData(checkedCheckbox));















/*66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// const body = document.querySelector('body');

// const createMovieCard = () => {
//     const movie = document.createElement('div');
//     movie.classList.add('movie');

//     const img = document.createElement('img');
//     img.classList.add('movie__image');
//     img.setAttribute('src', "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg");
//     img.setAttribute('alt', 'movie image');

//     const movie__body = document.createElement('div');
//     movie__body.classList.add('movie__body');

//     movie__title = document.createElement('h2');
//     movie__title.classList.add('movie__title');
//     movie__title.textContent = 'The Godfather';

//     movie__description = document.createElement('p');
//     movie__description.classList.add('movie__description');
//     movie__description.textContent ="Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.";
    
//     movie__date = document.createElement('p');
//     movie__date.classList.add('movie__date');
//     movie__date.textContent ="Released: 1972-03-14";
    
//     movie__rating = document.createElement('p');
//     movie__rating.classList.add('movie__rating');
//     movie__rating.textContent ="Rating: 8.6";
    
//     movie.appendChild(img);
//     movie.appendChild(movie__body);
//     movie__body.append(movie__title);
//     movie__body.appendChild(movie__description);
//     movie__body.appendChild(movie__date);
//     movie__body.appendChild(movie__rating);
//     body.appendChild(movie);
// }
// createMovieCard();
// createMovieCard();
// createMovieCard();
// createMovieCard();












// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/


const container = document.querySelector('#root');

const genaratorBGC = (container, a, b, c) => container.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';


const createBoxes = num => {
    const arrBoxes = []
    for(let i = 0; i<=num; i++) {
        const box = document.createElement('div');
        box.style.width=`${30 + i * 10}px`;
        box.style.height=`${30 + i * 10}px`;
        genaratorBGC(box, Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255));
        arrBoxes.push(box)
    }
    container.append(...arrBoxes)
}
createBoxes(10);

