"use strict";

















// let arr = [1, 2, 4, 6];

// arr.Dan = 'Hello, I\'m Dan';
// console.log(arr)


// function fn() {
//     console.log('lol');
// }
// fn.lololol = 'Dan';
// console.log(fn.lololol);



// =======



// const user = {
//     name: 'Taras',
//     age: 29,
//     isLearnJS: true
// }
// user.surname = 'Shevchenko';
// user.name = 'Donald';
// console.log(user);


// =========

// const name = 'Donald';

// const user = {
//     name, 
//     surname: 'Tramp'
// }
// console.log(user);

// ======

// const user = {
//     name: 'Taras',
//     age: 29,
//     isLearnJS: true,
    // mark: function(arr) {
    //     console.log(arr);
    // }
// }
// const getPropValue = (obj, prop) => {
//     console.log(obj[prop]);
// }

// getPropValue(user, 'age');



// ===============

// console.log( console );


// =============================

// // не використовуємо стрєлочні функції як методи об'єкта


// const user = {
//     name: 'Taras',
//     age: 29,
//     isLearnJS: true,
//     fn: function() {
//         console.log('I learn JS');
//     },
//     fnES6() {
//         console.log('I learn JS');
//     }
// }

// user.fn();



// ====================

// const numbers = [1, 2, 3, 4];

// function addToArray(arr) {
//     arr.push(5);
// };

// addToArray(numbers);

// console.log(numbers); // тому що масиви також передаються по ссилці, так як і обєкти і функції;



// ================ for in

// let name = prompt('Enter name')
// console.log(user);
// for(let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }



// // for(let key in user) {
// //     const hasKey = user.hasOwnProperty(key);
// //     if(hasKey) {
// //         console.log(key);
// //         console.log(user[key]);
// //     }
// // }





/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
  
// user.mood = 'happy';
// user.hobby = 'JS';
// delete user.premium;
// console.log(user);

// for(const key in user) {
//     console.log(`${key}: ${user[key]}`);
// }
// ///////////////
// const arrUserInfo = Object.keys(user);
// console.log(arrUserInfo);
// for(let el of arrUserInfo) {
//     console.log(el + ': ' + user[el]);
// }




/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted1 = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//     dima: 20,
// };
// const tasksCompleted2 = {
//     ann: 29,
//     david: 35,
//     shevchenko: 1000,
//     lorence: 99,
//     dima: 20,
// };const tasksCompleted3 = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//     dima: 202,
// };

// const TheBestEmployes = (obj) => {
//     const arrValues = Object.values(obj);
//     const arrKeys = Object.keys(obj);
//     let theBiggestValue = arrValues[0];
//     for(let el of arrValues) {
//         if(el > theBiggestValue) {
//             theBiggestValue = el;
//         };
//     }
//     let indexArr = arrValues.indexOf(theBiggestValue)
//     let result = `${arrKeys[indexArr]}: ${arrValues[indexArr]}`;
//     return result;
// }
// console.log(TheBestEmployes(tasksCompleted1));;
// console.log(TheBestEmployes(tasksCompleted2));;
// console.log(TheBestEmployes(tasksCompleted3));;


// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };
  
//   whoIsTheBest = (obj) => {
//     const value = Object.values(obj);
//     const keys = Object.keys(obj);
//     const maxValue = Math.max(...value); 
//     let key = value.indexOf(maxValue);
//     console.log(`${keys[key]}: ${maxValue}`);
//   }
  
//   whoIsTheBest(tasksCompleted);


