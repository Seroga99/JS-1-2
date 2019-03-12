/* 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

// function Account(login, email) {
//     this.login = login;
//     this.email = email;
// }
// Account. prototype.getInfo = function() {
//     console.log(`login: ${this.login} // email: ${this.email}`);
// }


// const account = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof











/* 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
 




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
//     constructor(string) {
//         this._value = string;
//     }

//     get value() {
//         return this._value 
//     }
    
//     set value (str) {
//         this._value = str;
//     }

//     append(str) {
//         this.value += str;
//         return this.value;
//     }

//     prepend(str) {
//         this.value = (str + this.value);
//         return this.value
        
//     }

//     pad(str) {
//         this.value = str + this.value + str;
//         return this.value
//     }

// }

// const builder = new StringBuilder('.');
// console.log(builder.value);

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='


///////////////////////////////////333333333333333333333333333333333333333333333333333333333333333333333333333

/*
 * Напиши класс Car с указанными свойствами и методами
*/

// class Car {
//     constructor({ maxSpeed = 0 }) {
//       /*
//         Добавь свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//      this.speed = 0;
//      this.maxSpeed = maxSpeed;
//      this.running = false;
//      this.distance = 0;
//     }
  
//     turnOn() {
//       // Добавь код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//       this.running = true;
//     }
  
//     turnOff() {
//       // Добавь код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//       this.running = false;
//     }
  
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//       if(spd <= this.maxSpeed) {
//             this.speed = spd;
//         }
//     }
  
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//       if(spd <= this.maxSpeed && spd >= 0) {
//           this.speed = spd
//       }
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//       if(this.running) {
//           this.distance = hours * this.speed;
//       }
//     }
//   }
  
// const car = new Car({ maxSpeed: 100 });
// console.log(car);

// car.turnOn();
// console.log(car);


// car.decelerate(80) 
// console.log(car);

// car.drive(30);
// console.log(car);



///////////////////////////////////444444444444444444444444444444444444444444///////////////////////////////////////////////////////


/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/


// class Car {
//     constructor({ maxSpeed = 0 }) {
//       /*
//         Добавь свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//      this.speed = 0;
//      this.maxSpeed = maxSpeed;
//      this.running = false;
//      this.distance = 0;
//     }
  
//     turnOn() {
//       // Добавь код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//       this.running = true;
//     }
  
//     turnOff() {
//       // Добавь код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//       this.running = false;
//     }
  
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//       if(spd <= this.maxSpeed) {
//             this.speed = spd;
//         }
//     }
  
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//       if(spd <= this.maxSpeed && spd >= 0) {
//           this.speed = spd
//       }
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//       if(this.running) {
//           this.distance = hours * this.speed;
//       }
//     }
    
//     static getSpecs(car) {
//         console.log('maxSpeed: ', car.maxSpeed);
//         console.log('speed: ', car.speed);
//         console.log('running: ', car.running);
//         console.log('distance: ', car.distance);
//     }
//   }

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100





////////////////555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555





/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/




// class Car {
//     constructor({ maxSpeed = 0, price = 2000}) {
//       /*
//         Добавь свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//      this.speed = 0;
//      this.maxSpeed = maxSpeed;
//      this.running = false;
//      this.distance = 0;
//      this.price = price;
//     }
  
//     turnOn() {
//       // Добавь код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//       this.running = true;
//     }
  
//     turnOff() {
//       // Добавь код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//       this.running = false;
//     }
  
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//       if(spd <= this.maxSpeed) {
//             this.speed = spd;
//         }
//     }
  
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//       if(spd <= this.maxSpeed && spd >= 0) {
//           this.speed = spd
//       }
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//       if(this.running) {
//           this.distance = hours * this.speed;
//       }
//     }
    
//     static getSpecs(car) {
//         console.log('maxSpeed: ', car.maxSpeed);
//         console.log('speed: ', car.speed);
//         console.log('running: ', car.running);
//         console.log('distance: ', car.distance);
//     }

//     get value() {
//         return this.price
//     }
//     set value(value) {
//         return this.price = value
//     }
    
//   }

// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000
// car.value = 4000;
// console.log(car.value); // 4000