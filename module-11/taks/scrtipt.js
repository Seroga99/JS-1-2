/*11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 *
 * Создай шаблон элемента списка указаного на вкладке HTML.
 * Отрендери список в DOM по данным из массива products.
 */

// const products = [
//   { name: 'Apples', quantity: 50 },
//   { name: 'Grapes', quantity: 44 },
//   { name: 'Cheese', quantity: 128 },
//   { name: 'Milk', quantity: 93 },
// ];

// const list = document.querySelector('.products');
// const source = document.querySelector('#products-tpl').innerHTML.trim();
// const template = Handlebars.compile(source);

// const markup = template({ products });
// console.log(markup);
// list.insertAdjacentHTML('afterbegin', markup);

/*222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 *
 * Создай шаблон поста указаного на вкладке HTML.
 * Отрендери список постов в DOM по данным из массива posts.
 *
 * Если в объекте поле favourite=true, в посте должна быть
 * разметка иконки избранного поста, в противном случае,
 * разметки иконки быть не должно.
 */

const posts = [
  {
    title: 'Phasellus volutpat metus',
    text:
      'Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.',
    favourite: true,
  },
  {
    title: 'Nulla consequat massa',
    text:
      'Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    favourite: false,
  },
  {
    title: 'In enim justo',
    text:
      'Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.',
    favourite: true,
  },
  {
    title: 'Vestibulum ante ipsum',
    text:
      'Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.',
    favourite: false,
  },
];

const section = document.querySelector('.posts');
const source = document.querySelector('#posts-tpl').innerHTML.trim();

const template = Handlebars.compile(source);
const markup = template({ posts });
section.insertAdjacentHTML('afterbegin', markup);
