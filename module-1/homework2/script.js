"use strict"
const sharm = 15;
const hurgada  = 25;
const taba = 6;

const neededPlaces = +prompt('How much places you need? ');
const result = Number.parseInt(neededPlaces);



if(neededPlaces > 0 && neededPlaces === result) {
    if(neededPlaces <= sharm && neededPlaces > taba) {
        const isSharm = confirm('Есть место в группе: sharm');
        if (isSharm === true) {
            alert('Приятного путешествия в группе sharm')
        } else {
            alert('Нам очень жаль, приходите еще!')
        }
    } 
    if(neededPlaces <= hurgada && neededPlaces > sharm) {
        const isHurgada = confirm('Есть место в группе: hurgada');
       if (isHurgada === true) {
        alert('Приятного путешествия в группе hurgada')
        } else {
            alert('Нам очень жаль, приходите еще!')
        }
    }
    if(neededPlaces <= taba) {
        const isTaba = confirm('Есть место в группе: taba');
       if (isTaba === true) {
        alert('Приятного путешествия в группе taba')
        } else {
            alert('Нам очень жаль, приходите еще!')
        }
    }
    else {
        alert("Извините, мест нет")
    }
} else if (neededPlaces === null) {
    alert("Нам очень жаль, приходите еще!")
} else {
    alert("Ошибка ввода");
}