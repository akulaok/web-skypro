/*Задание 1 
let findMin = (a, b) => Math.min(a, b);
console.log(findMin(2, 5));

//Задание 2
let isEven = (a) => a % 2 == 0 ? "Число четное" : "Число нечетное";
console.log(isEven(5));

//Задание 3.1
let createSquare1 = (a) => console.log(a ** 2);
createSquare1(3);

//Задание 3.2
let createSquare2 = (a) => a ** 2;
console.log(createSquare2(8));

//Задание 4
function getUserAge() {
    let userAge = prompt('Сколько тебе лет?');

    if (userAge < 0) alert('Вы ввели неправильное значение');
    else if (userAge < 12) alert('Привет, друг!');
    else alert('Добро пожаловать!');
}

getUserAge();

//Задание 5
let mult = (a, b) => isNaN(a) || isNaN(b) ? 'Одно или оба значения не являются числом' : a * b;
console.log(mult(3, 8));

//Задание 6
let square = (a) => isNaN(a) ? 'Переданный параметр не является числом' : `${a} в кубе равняется ${a ** 3}`;
console.log(square(0));

//Задание 7
function getArea() { return this.radius ** 2 * Math.PI }
function getPerimeter() { return this.radius * 2 * Math.PI }

let circle1 = {
    radius: 8,
    area: getArea,
    perimeter: getPerimeter
}

let circle2 = {
    radius: 4,
    area: getArea,
    perimeter: getPerimeter
}

console.log(circle1.perimeter());
*/
//Задание 8
function seasonGame() {
    let monthNumber = prompt('Номер месяца?');
    if (monthNumber > 12 || monthNumber < 1) alert("Введите существующий номер");
    else if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) alert("Этот месяц пренадлежит сезону зима");
    else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) alert("Этот месяц пренадлежит сезону весна");
    else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) alert("Этот месяц пренадлежит сезону лето");
    else alert("Этот месяц пренадлежит сезону осень");
}