// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
const firstIPhoneYear = 2007;
alert(firstIPhoneYear);

// Задание 3
let theNameOfCreatorJS = "Брендан Эйх";
alert(theNameOfCreatorJS);

// Задание 4
let first = 8;
let second = 4;
alert(`сумма: ${first + second}, разность: ${first - second}, произведение: ${first * second}, частное: ${first / second}`);

// Задание 5
let result = 2**5;
alert(result);

// Задание 6
alert(9%2);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9.0
let user = {
    name: "Olga",
    age: 20,
    isAdmin: true,
}

// Задание 9.1
user["city of residence"] = "Blablabla";

// Задание 9.2
user.age = 21;

// Задание 9.3
delete user["city of residence"];

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
let userName = prompt("Как вас зовут?","имя");
alert(`Привет, ${userName}!`);


