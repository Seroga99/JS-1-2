/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/animal",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    },
  ];


const createPostCard = (img, title, text, link) => {

    const movie = document.createElement('div');
    movie.classList.add('movie');
    
    const image = document.createElement('img');
    image.classList.add('movie__image');
    image.setAttribute('src', img);
    image.setAttribute('alt', 'movie image');
    
    const movie__body = document.createElement('div');
    movie__body.classList.add('movie__body');
    
    movie__title = document.createElement('h2');
    movie__title.classList.add('movie__title');
    movie__title.textContent = title;
    
    movie__description = document.createElement('p');
    movie__description.classList.add('movie__description');
    movie__description.textContent = text;
        
    movie__date = document.createElement('a');
    movie__date.classList.add('movie__date');
    movie__date.textContent =link;
        
    movie.appendChild(image);
    movie.appendChild(movie__body);
    movie__body.append(movie__title);
    movie__body.appendChild(movie__description);
    movie__body.appendChild(movie__date);

    return movie;
}

const createCards = posts => posts.map(el => createPostCard(img = el.img, title = el.title, text = el.text, link = el.link ));
document.body.append(...(createCards(posts)));

