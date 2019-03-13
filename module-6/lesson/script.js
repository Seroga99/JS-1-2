"use strict"


// const obj1 = {
//     a: 10
// }
// const obj2  = new Object();
// obj2.a = 10;

// console.log(obj1);
// console.log(obj2);

///////////////////////////////////////////////////////////////////////////////


// const b = {
//     a: 10,
//     fn() {
//         console.log(this.a);
//     }
// }
// const a = Object.create(b);
// a.fn()

///////////////////////////////////////////////////////////////////////////////


// function Guest (name, room) {
//   this.name = name;
//   this.room = room;
// }

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// console.log(mango);
// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); 

////////////////////////////////////////////////////////////////////////////////////////////



// function Car(name, speed, distance, isDrive = true) {
//   // this = {}
//   // this.__proto__ = {}
//   this.name = name;
//   this.speed = speed;
//   this.distance = distance;
//   this.isDrive = isDrive;
//   // return this
// }

// Car.prototype.addDistance = function(amountDistance) {
// this.distance += amountDistance;
// return this.distance += amountDistance;
// }
// Car.prototype.criticalDistance = function(criticalDistance) {
// if(this.distance >= criticalDistance) {
//   this.isDrive = false;
// }

// }
// let BMW = new Car('BMW', 230, 45000);
// let Volvo = new Car('Volvo', 230, 235000);
// Volvo.addDistance(100000);
// Volvo.criticalDistance(250000);



//////////////////////////////////////////////////////////////////////////////////////////////////////////

// let productsDB = [
//   {name: 'apples', amount: 10, price: 20},
//   {name: 'dogs', amount: 40, price: 3},
//   {name: 'cars', amount: 2, price: 2000},
// ];

// let Shop = function(name,  productsDB) {
//   this.name = name;
//   this.productsDB = productsDB;
// }
// Shop.prototype.sumAmount = function(productsDB) {
//   productsDB.reduce((acc , el) => acc + el.amount, 0)
// }

// const ATB = new Shop('ATB', productsDB);
// const SILPO = new Shop('SILPO', productsDB);
// const Novus = new Shop('Novus', productsDB);

// console.log(ATB.sumAmount());
// console.log(SILPO);
// console.log(Novus);


/////////////////////////////////////////////////////////////////////////////////


// const methods = {
//     showName() {
//         console.log(this.name);
//     },
//     changeName(name) {
//         this.name = name;
//     },
// }

// const Donald = createObjWithMethods('Donald');
// console.log(Donald);
// Donald.showName();

// console.log(Donald.changeName('Nastia'));

// function createObjWithMethods(name) {
//     const obj = Object.create(methods);

//     obj.name = name;

//     return obj
// }


///////////////////////////////////////////////////////////////////////////////////////


// function User(name) {
//     this.name = name;

//     // this.showName = function() {
//     //     console.log(this.name);
//     // }
// }

// User.prototype.showName = function() {
//     console.log(this.name);
// }

// User.prototype.changeName = function(name) {
//     this.name = name;
// }

// console.log("User.prototype: ", User.prototype);

// const Donald = new User('Donald');

// Donald.showName();
// Donald.changeName('Olga');
// Donald.showName();




///////////////////// Доп завдання //////////////////////////////////////////////////////////////////////////



/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/
// function Account(login, email) {
//   this.login = login;
//   this.email = email;
//   this.getInfo = function() {
//     console.log(`login: ${this.login}`);
//   }
// }
// Account.prototype.getInfo = function() {
//   console.log(`login: ${this.login}, email: ${this.email}`);
// }

// const account = new Account('Mangozedog', 'mango@dog.woof');
// console.log(account);
// Account.prototype.getInfo();




// function FnString(str) {
//   this.str = str;
// }

// FnString.prototype.argSum = function(num) {
//   let res = '';
//   for(let i = 0; i < num; i++) {
//     res += this.str;
//   }
//   console.log(res);
// }

// const str = new FnString('str');
// str.argSum(3);



// function Account(str) {
//   this.string = str;
// }
// Account.prototype.sumAumoun = function(num) {
//   console.log(this.string.repeat(num));
// }
// let el = new Account('qwerty');
// el.sumAumoun(5); // strstrstr





//////////////////////class/////////////////////////////////class//////////////////////////////////////////////

// function GuestA (name, days, roomNumber) {
//   this.name = name;
//   this.days = days;
//   this.roomNumber = roomNumber;
// }
// GuestA.prototype.getFullInfo = function() {
//   console.log(`
//   Guest ${this.name}
//   Will stay for ${this.days} more days
//   In room number ${this.roomNumber}
// `);
// }
// const a = new GuestA('Mango', 7, 26);
// console.log(a);

// class Guest {
//   // аналог функции-конструктора
//   constructor (name, days, roomNumber) {
//     this.name = name;
//     this.days = days;
//     this.roomNumber = roomNumber;
//   }

//   // аналог Guest.prototype.getFullInfo 
//   getFullInfo () {
//     console.log(`
//       Guest ${this.name}
//       Will stay for ${this.days} more days
//       In room number ${this.roomNumber}
//     `);
//   }
// }
// const mango = new Guest('Mango', 7, 26);

// console.log(mango);
// mango.getFullInfo();
// // Guest Mango
// // Will stay for 7 more days
// // In room number 26
// console.log(mango instanceof Guest); // true
// console.log(mango instanceof Object); // true


// function AnimailCreate(name, isEat = true) {
//   this.name = name;
//   this.isEat = isEat;
// }

// AnimailCreate.prototype.runs = function() {
//   console.log(`${this.name} can run`);
// }
// AnimailCreate.prototype.isHappy = function() {
//   console.log(`${this.name} is happy`);
// }
// AnimailCreate.prototype.isNotHappy = function() {
//   console.log(`${this.name} isn't happy`);
// }

// const dog = new AnimailCreate('Bob');
// const cat = new AnimailCreate('Alina');

// console.log(dog);
// console.log(cat);
// cat.isHappy();


// class AnimailCreate {
//   constructor(name, isEat = true) {
//     this.name = name;
//     this.isEat = isEat;
//   }
//   static runs() {
//     console.log(`${this.name} can run`);
//   }
//   isHappy() {
//     console.log(`${this.name} is happy`);
//     this.runs()
//   }
// }

// const dog = new AnimailCreate('Bob');


// console.log(dog);
// dog.isHappy()



/*
  Напиши ES6 класс StringBuilder.
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  Добавь классу следующие методы:
    - геттер value - возвращает текущее значение поля _value
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder {
//   constructor(string) {
//     this._value = string
//   }
//   get value() {
//     return this._value
//   }
//   append(str) {
//     this._value = this._value + str
//   }
//   prepend(str) {
//     this._value = str + this._value
//   }
//   pad(str) {
//     this._value = str + this._value + str
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='

