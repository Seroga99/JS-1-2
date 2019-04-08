/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
// let colorId;

// const start = document.querySelector('button[data-action="start"]');
// const stop = document.querySelector('button[data-action="stop"]');

// start.addEventListener('click', () => {
//   colorId = setInterval(() => {
//     document.body.style.backgroundColor = `${colors[Math.floor(Math.random() * colors.length)]}`;
//   }, 1000);
// });
// stop.addEventListener('click', () => {
//   clearInterval(colorId);
// });

/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 *
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 *
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 *
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 *
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 *
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
 */

//////////////////////////////////444444444444444444//////////////////////////////////////
// const DELAY = 1000;
// const quantity = 100;

// const processOrder = value =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isNaN(value)) {
//         reject('Некорректный ввод!');
//       }
//       if (quantity >= value) {
//         resolve('Ваш заказ готов!');
//       }
//       resolve('К сожалению на складе не достаточно товаров!');
//     }, DELAY);
//   });

// // Вызовы функции для проверки
// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(40)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder('lorem')
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!

/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

// const start = document.querySelector('button[data-action="start"]');
// const stop = document.querySelector('button[data-action="stop"]');

// let timeId;
// let isActive = false;

// start.addEventListener('click', () => {
//   if (!isActive) {
//     timeId = setInterval(() => {
//       document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//     }, 1000);
//     isActive = true;
//   }
// });

// stop.addEventListener('click', () => {
//   clearInterval(timeId);
//   isActive = false;
// });
