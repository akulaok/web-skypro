// Задание 1
let password = 'blaKek';
let userPassword = prompt("Введите пароль");
(userPassword == password) ? alert("Пароль введен верно") : alert("Пароль введен неправильно");

// Задание 2
let c = 8;
(c < 10 && c > 0) ? console.log("Верно") : console.log("Неверно");

// Задание 3
let e = 122;
let d = 4;
(d > 100 || e > 100) ? console.log("Верно") : console.log("Неверно");

// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));
// Задание 5
let monthNumber = prompt('Номер месяца?');
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима')
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна')
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето')
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень')
        break;
    default:
        alert('Что-то тебя совсем далеко унесло');
        break;
}