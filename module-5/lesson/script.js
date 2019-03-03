"use strict";

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const fn = arr => {
//     let newArr = [];
//     for (let el of arr) {
//         if(el > 5) {
//             newArr.push(el)
//         }
//     }
//     return newArr
// }
// const resultArr = fn(numbers);
// console.log(resultArr);

// const resultArr = arr => arr.filter(num => num > 5);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const phonesArr = [
//     { name: 'IPhone', amount: 10, price: 700 }, 
//     { name: 'Sony', amount: 6, price: 240 }, 
//     { name: 'Xiaomi', amount: 15, price: 480 }, 
//     { name: 'Samsung', amount: 13, price: 300 }, 
//     { name: 'Asus', amount: 64, price: 640 }, 
//     { name: 'Lenovo', amount: 24, price: 180 },
// ];
// const sortArr = arr =>arr.filter(phone => phone.price > 200 && phone.price < 550);
// console.log(sortArr(phonesArr));

//////////////////////////////////////////////////////////////////////////////////////////////

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */



  
  /* 
    Функция multiplyBy принимает два параметра - число и массив. 
    Возвращает массив все значения которого умножены на число.
  */
//   const multiplyBy = (num, arr) => {
//     let result = [];
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       result.push(arr[i] * num);
//     }
//     return result;
//   };

// const multiplyBy = (num, arr) => arr.map(el => el * num);
  
//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
  
  /* 
    Функция summAllNumbers принимает любое число аргументов.
    Возвращает число - сумму всех аргументов.
  */
//   function summAllNumbers(...args) {
//     let accumulator = 0;
  
//     for (let i = 0, max = args.length; i < max; i += 1) {
//       accumulator += args[i];
//     }
  
//     return accumulator;
//   }
  
//   console.log( summAllNumbers(1, 2, 3) ); // 6
//   console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//   console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
  
  /* 
    Функция findEvery получает два аргумента - число и массив.
    Возвращает true если все элементы массива больше или равны числу.
    Иначе если есть хоть один элемент меньше числа, то возвращается false.
  */
//   const findEvery = (num, arr) => {
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] < num) {
//         return false;
//       }
//     }
  
//     return true;
//   };
  
//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true
  


/*
  Напиши функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  Функция должна возвращать массив всех значений этого ключа из arr.
  PS: обязательно использу перебирающие методы массивов, никаких for!
*/
// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
//   const getPropValues = (arr, prop) => arr.map(el => el[prop]);
//     // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
  

const tweets = [
    { id: "1", likes: 5, tags: ["js", "nodejs"] },
    { id: "2", likes: 2, tags: ["html", "css"] },
    { id: "3", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "4", likes: 8, tags: ["css", "react"] },
    { id: "5", likes: 0, tags: ["js", "nodejs", "react"] },
  ];
const tweetsLikes = tweets
    .filter(el => el.id >= 2 && el.id <= 4)
    .reduce((acc, el) => acc += el.likes, 0);

console.log(tweetsLikes);