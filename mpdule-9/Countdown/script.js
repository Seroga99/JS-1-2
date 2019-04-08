'use strict';
let secc = document.querySelector('.seconds');
let minn = document.querySelector('.minutes');
let hourss = document.querySelector('.hours');
let dayess = document.querySelector('.days');

// const timer = () => {
//   const deadline = new Date(2020, 0, 1, 0, 0, 0);
//   const today = Date.now();
//   const result = deadline - today;

//   let sec = Math.floor(result / 1000);
//   let min = Math.floor(sec / 60);
//   let hours = Math.floor(min / 60);
//   let dayes = Math.floor(hours / 24);
//   secc.textContent = sec % 60;
//   minn.textContent = min % 60;
//   hourss.textContent = hours % 24;
//   dayess.textContent = dayes;
// };

// setInterval(timer, 1000);

// const timer = () => {
//   const today = new Date();
//   const deadline = new Date(2020, 0, 1, 0, 0, 0);

//   let result = deadline - today;

//   let sec = Math.floor((result / 1000) % 60);
//   let min = Math.floor((result / 1000 / 60) % 60);
//   let hours = Math.floor((result / 1000 / 60 / 60) % 60);
//   let dayes = Math.floor(result / 1000 / 60 / 60 / 24);

//   let secc = document.querySelector('.seconds');
//   let minn = document.querySelector('.minutes');
//   let hourss = document.querySelector('.hours');
//   let dayess = document.querySelector('.days');
//   secc.textContent = sec;
//   minn.textContent = min;
//   hourss.textContent = hours;
//   dayess.textContent = dayes;
// };
// setInterval(timer, 1000);

let deadLine = new Date(2020, 0, 1);

const timer = () => {
  let today = Date.now();
  let result = deadLine - today;
  let sec = Math.floor(result / 1000);
  let min = Math.floor(sec / 60);
  let houres = Math.floor(min / 60);
  let dayes = Math.floor(houres / 24);

  secc.textContent = sec % 60;
  minn.textContent = min % 60;
  hourss.textContent = houres % 24;
  dayess.textContent = dayes;
};
setInterval(timer, 1000);

let a = minn.getBoundingClientRect();
console.log(a.top);
