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
const obj = {
    param: 'obj param',
    showThis() {
        console.log(this);
    }
}

const fn = function(callback) {
    return callback();
}
const a = fn(obj.showThis);