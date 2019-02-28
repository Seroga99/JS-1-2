'use strict';

// const user = {
//     name: 'Bob',
//     // showName: function() {
//     //     console.log(user.name);
//     // },
//     showName() {
//         console.log(user.name);
//     }
// }
// const show = user.showName();

////

// const user = {
//     name: 'Bob',
//     showName() {
//         console.log(this.name);
//     }
// }
// const show = user.showName();

////


// console.log(this);


///////


// const obj = {
//     param: 'obj param',
//     showThis() {
//         console.log('this: ', this);
//     }
// }
// obj.showThis();

// const fn = obj.showThis;

// console.log(fn);

// fn();


//////
// const obj = {
//     param: 'obj param',
//     showThis() {
//         console.log(this);
//     }
// }

// const fn = function(callback) {
//     return callback();
// }
// const a = fn(obj.showThis);




/////////////////////////////////////////////////////////////////////////////////////////////////



// function UserCreate({name, surname, age}) {
//     this.name = name,
//     this.surname = surname

// }

// const user2 = new UserCreate('Barak', 'Obama', 46, false);

// const user1 = new UserCreate({
//     name: 'Donald',
//     surname: 'Tramp',
//     age: 72,
// })
// console.log(user1);
// console.log('user 1: ', user1);
// console.log('user 2: ', user2);


/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/


// function UserCreate (name, isActive, age, friends) {
//     this.name = name;
//     this.isActive = isActive;
//     this.age = age;
//     this.friends = friends;
//     this.getUserInfo = function() {
//         return `User ${this.name} is ${this.age} years old and has ${this.friends} friends`
//     }
// }

// const Tramp = new UserCreate('Danald', true, 72, 1);
// console.log(Tramp.getUserInfo());








// function Shop({ phonesArr = [] }) {
//     this.phones = phonesArr;

//     this.addPhone = function (phone) {
//         this.phonesArr.push(phone);
//     };
//     this.findPhone = function (phoneName) {
//         for(const el of this.phones) {
//             if (el.name = phoneName) {
//                 return el;
//             }
//         }
//     };
//     this.addPhoneAmount = function (phone, num) {
//         console.log(`Adding ${num} ${phone}`);

//         const product = this.findPhone(phone);
//         product.amount += num;
//     };
//     this.substractPhoneAmount = function (phone, num) {
//         console.log(`Adding ${num} ${phone}`);

//         const product = this.findPhone(phone);
//         product.amount -= num;
//     };
//     this.getAllPhones = function() {
//         return this.phones;
//     }

// }

// const phonesArr = [
//     { name: 'IPhone', amount: 10, price: 700 }, 
//     { name: 'Sony', amount: 6, price: 240 }, 
//     { name: 'Xiaomi', amount: 14, price: 180 }, 
// ];

// const shopA = new Shop({phonesArr});


// const productArr = [
//     { name: 'apples', amount: 200, price: 20 }, 
//     { name: 'bananas', amount: 350, price: 40 }, 
//     { name: 'pineapples', amount: 140, price: 80 }, 
// ];
// function CreateShop(name, products) {
//     this.name = name;
//     this.productArr = products;
//     this.getProductInfo = function(productName) {
//         for (const el of products) {
//             if (el.name === productName) {
//                 return el;
//             }
//         }
//     };
//     this.addProduct = function (productName , num) {
//         const product =  this.getProductInfo(productName)
//         return product.amount += num;
//     }

// }

// const ATB = new CreateShop ('ATB', productArr);
// console.log(ATB);
// console.log(ATB.getProductInfo('bananas'));
// ATB.addProduct('pineapples', 60);
// console.log(ATB);

// const Silpo = new CreateShop ('Silpo', [...productArr]);
// console.log(Silpo);

// const ATB = {
//     name: 'ATB',
//     productArr: [],
//     addProduct() {
//     },
//     deleteProduct() {
//     },
//     getProductInfo() {
//     },
// }





/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.

  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/