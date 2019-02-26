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
  
  // whoIsTheBest = (obj) => {
  //   const value = Object.values(obj);
  //   const keys = Object.keys(obj);
  //   const maxValue = Math.max(...value); 
  //   let key = value.indexOf(maxValue);
  //   console.log(`${keys[key]}: ${maxValue}`);
  // }
  // console.log(whoIsTheBest);
  
//   whoIsTheBest(tasksCompleted);




// 23/02/2019 //////////////////////////////////////////////////////////////////////////// 








// const user = {
//   name: 'Donald',
//   skills: ['English', 'HTML', 'CSS'],
//   addSkills(skill) {
//     user.skills.push(skill)
//   },
// }
// console.log(user);
// user.addSkills('JS');
// console.log(user);


// const shop = {
//   phones: [
//     { name: 'IPhone X', price: 800, amount: 15, },
//     { name: 'Nokia', price: 230, amount: 4, },
//     { name: 'Sony', price: 300, amount: 3, }
//   ],
//   deleteProduct(productName, num) {
//     for (const el of shop.phones) {
//       if(el.name === productName) {
//         el.amount = el.amount - num
//       }
//     } 
//   }
// }
// console.log(shop);
// shop.deleteProduct('Sony', 2)
// console.log(shop);


///////////





////////////////////////



// const eloctronic = {
//   phones: [
//     {
//       name: 'IPhone X',
//       price: 800,
//       amount: 15,
//     },
//     {
//       name: 'Nokia',
//       price: 230,
//       amount: 4,
//     },
//     {
//       name: 'Sony',
//       price: 300,
//       amount: 3,
//     }
//   ],
//   addProduct(product){
//     this.phones.push(product);
//   },
//   getProductInfo(product) {
//     for (const el of this.phones) {
//       if(el.name === product) {
//         return el
//       }
//     }
//   },
//   deleteProduct(productName, num) {
//     for (const el of this.phones) {
//       if(el.name === productName) {
//         el.amount = el.amount - num;
//       }
//     }
//     const phoneName = this.getProductInfo(productName);
//     this.amount -= num;

//   },
// }

// const productSimems = {
//   name: 'Simems',
//   price: 40,
//   amount: 10,
// }

// eloctronic.addProduct(productSimems);
// console.log(eloctronic);

// const info = eloctronic.getProductInfo('Sony');
// console.log(info);

// eloctronic.deleteProduct('IPhone X', 2);
// console.log(eloctronic);

//////////// Деструктуризація 

// const productSimems = {
//   name: 'Simems',
//   price: 40,
//   amount: 10,
// }

// const {name, amount} = productSimems;
// console.log(name);
// console.log(amount);



// const showName = function() {
//   return console.log('In showName: ', this.name);
// } 

// const user = { 
//   name: 'Mango' 
// };
// user.show = showName;

// user.show();


// const greet = function () {
//   return `Wellcome to ${this.name}!`;
// };

// объект
// const hotel1 = { name: "Resort Hotel", };
// const hotel2 = { name: "Qw Hotel" };
// const hotel3 = { name: "ER Hotel" };
// const hotel4 = { name: "TY Hotel" };


// // присвоение объекту метода
// const arr = [10, 40, 20, 45];

// console.log(greet.call(hotel1, 10, 20 , 40));
// console.log(greet.apply(hotel2, [...arr]));
// console.log(greet.call(hotel3));
// console.log(greet.call(hotel4));



// hotel1.wellcome = greet;
// hotel2.wellcome = greet;
// hotel3.wellcome = greet;
// hotel.wellcome = greet;

// console.log(hotel1.wellcome());
// console.log(hotel2.wellcome());
// console.log(hotel3.wellcome());
// console.log(hotel4.wellcome());

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  Возвращает true если объект пустой, false если не пустой.
*/

// const isObjectEmpty = (obj) => !!!Object.keys(obj).length;

// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true
// console.log(
//   isObjectEmpty({a: 1})
// ); // false
// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

