"use strict"
// =====================================================
// const fn = function () {
//     console.log('Hello, I am function');
// }


// ====================================================
// let firstNum = +prompt('Enter first number:');
// let SecondNum = +prompt('Enter second number:');
// console.log(firstNum);
// console.log(SecondNum);

// const fnAdd = function (num1, num2) {
//     let res = num1 + num2;
//     return res;
// };
// const fnMult = function (num1, num2) {
//     let res = num1 * num2;
//     return res;
// };
// const fnSUB = function (num1, num2) {
//     let res = num1 - num2;
//     return res;
// };
// const fnDiv = function (num1, num2) {
//     let res = num1 / num2;
//     return res;
// };
// const fnShow = function (add, mult, sub, div) {
//     console.log('+ ' + add(firstNum, SecondNum));
//     console.log('* ' + mult(firstNum, SecondNum));
//     console.log('- ' + sub(firstNum, SecondNum));
//     console.log('/ ' + div(firstNum, SecondNum));
// }
// fnShow(fnAdd, fnMult, fnSUB, fnDiv)

// ==================================================



// const arr1 = [1, 5, 23, 42, 8, 12];
// let resultArr1 = [];
// for (const el of arr1) {
//     if(el < 10) {
//         resultArr1.push(el)
//     }
// }
// console.log(resultArr1);

// const arr2 = [10, 3, 233, 34, 12, 2];
// let resultArr2 = [];
// for (const el of arr2) {
//     if (el < 15) {
//         resultArr2.push(el)
//     }
// }
// console.log(resultArr2);

// =================================================
// те саме, що і вище, тільки через функцію 
// const fnFindNum = function (arr, num) {
//     let resultArr = [];
//     for (const el of arr) {
//         if (el < num) {
//             resultArr.push(el)
//         }
//     }
//     return resultArr;
// }

// console.log(fnFindNum(arr1, 10));
// console.log(fnFindNum(arr2, 15));

// параметры по умолчанию !!!!!!!!!



// =========================================================

// const transfornArrToNumber = function (arr) {
//     const newArr = [];

//     for(let el of arr) {
//         newArr.push(Number(el))
//     }

//     return newArr;
// }

// const getUserInput = function() {
//     const input = prompt('Enter some number');

//     if(input === null) {
//         return
//     }

//     const arr = input.split('');
//     return arr;
// }
// console.log(getUserInput());

// const arrString = getUserInput();

// const getArrNumbers = function (arr) {
//     let newArr = transfornArrToNumber(arr);
//     return newArr;
// }

// console.log(getArrNumbers(arrString));





// ===========================================================


// spread і rest 

// const arr = [1, 2, 3, 4];
// const arr2 = [arr[0], arr[1], arr[2], arr[3] ];
// const arr3 = [...arr]; // spread
// console.log(arr);
// console.log(arr2);
// console.log(arr3);


// const arr = [1, 2, 3, 4];
// const [...rest] = arr; // rest
// console.log(rest);

// ========================================================= arguments


// const fn = function () {
//     console.log(arguments);
// }
// fn(1, 3, 4 , 6, 5);

// const fnForLernArg = function () {

    // console.log(arguments);

    // let arr = Array.from(arguments);
    // console.log(arr);

    // console.log([...arguments]);

    // console.log(args);
    
// } 
// fnForLernArg(2, 4, 6, 1, 3, 4, 10);


//==========
// const fnSumm = function () {

//     let result = 0;

//     for(let el of arguments) {
//         result += el
//     }

//     return result;
// }
// console.log(fnSumm());


// Область бачення 




// // Gle = {}
// const a = 20;
// const b = 30;
// // Gle = {a: 20, b: 30}

// const add = function () {
//     // LE = {}
//     const a = 5;
//     // LE = {a: 5}
//     return a + b;
// }

// // Cle = {a: 20, b: 10, add: fn}
// add(); //35




// ======================================================== 
// console.log(fnAdd(10, 40, 2));   

// function fnAdd (a, b, c) {
//     return a + b + c;
// }

// const fnAdd = (a, b, c) => a + b + c;

// const fn = () => {
//     console.log(arguments);
// } 
// fn(1, 2, 4, 5); // Error

// const fn = (...args) => {
//     console.log(args);
// }
// fn(1, 2, 4, 5);

// ==========

// const hasElement = (arr, el) => {
//     const result = arr.includes(el);
//     return result;
// }
// const hasElement = (arr, el) => arr.includes(el);

// const x = hasElement([1, 2, 3], 5);
// console.log(x);


// ===========================================================


// const showSuccess = () => console.log('Success');
// const showError = () => console.log('Error');
// const showGoodbye = () => console.log('Goodbye');


// const getNumber = function (onCancel, onError, onSuccess) {
//     const input = prompt('Enter: 0 < number > 5');

//     if(input === null) {
//         onCancel();
//         return;
//     }
//     if (input < 1 || input > 5) {
//         onError();
//         return;
//     }
//     onSuccess();
// }
// getNumber(showGoodbye, showError, showSuccess);




// ===================================================== dop task


/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// const checkNumberType = function(num) {
//     let result;
//     if(num % 2 === 0) {
//         result = 'Even';
//     } else {
//         result = 'Odd'
//     }
//     return result;
// };

// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'



// ===================================================


/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/


// const formatString = str => {
//     let result;
//     str.length <= 40 ? result = str : result = str.slice(0, 40) + '...';
//     return result;
// } 

// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка
  
