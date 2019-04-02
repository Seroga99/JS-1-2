// const time = document.querySelector('.time');
// const start = document.querySelector('.start');
// const stop = document.querySelector('.stop');

///////////////////////////////погано//////////////////////
// let counter = 0;
// let timerid = null;
// let isActive = false;

// start.addEventListener('click', handleStart);
// stop.addEventListener('click', handleStop);

// function handleStart() {
//   if (!isActive) {
//     timerid = setInterval(updateCounter, 1000);
//     isActive = true;
//   }
// }
// function handleStop() {
//   clearInterval(timerid);
//   isActive = false;
// }
// function updateCounter() {
//   counter += 1;
//   time.textContent = counter;
// }

//////////////////////////////////////краще//////////////////////////////////
// const timer = {
//   counter: 0,
//   timerid: null,
//   isActive: false,
//   start(onStart) {
//     if (!this.isActive) {
//       this.isActive = true;
//       this.timerid = setInterval(() => {
//         this.counter += 1;
//         onStart(this.counter);
//       }, 1000);
//     }
//   },
// stop(onStop) {
//   this.isActive = false;
//   clearInterval(this.timerid);
//   onStop(this.counter);
// },
// };

//////////////////////////////супер//////////////////////////////////////////////

// class Timer {
//   constructor({ startCount = 0, delay = 1000,  {
//     this.counter = startCount;onTick = () => null })
//     this.timerid = null;
//     this.delay = delay;
//     this.isActive = false;
//     this.onTick = onTick;
//   }
//   start() {
//     if (!this.isActive) {
//       this.isActive = true;
//       this.timerid = setInterval(() => {
//         this.counter += 1;
//         this.onTick(this.counter);
//       }, this.delay);
//     }
//   }
//   stop() {
//     this.isActive = false;
//     clearInterval(this.timerid);
//     this.onTick(this.counter);
//   }
// }

// const timer = new Timer({
//   startCount: 0,
//   onTick: updateTime,
// });

// start.addEventListener('click', timer.start.bind(timer));
// stop.addEventListener('click', timer.stop.bind(timer));

// function updateTime(val) {
//   time.textContent = val;
// }

let start = Date.now();
