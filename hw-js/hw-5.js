//Задание 1 
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
/*function getUserAge() {
    let userAge = prompt('Сколько тебе лет?');

    if (userAge < 0) alert('Вы ввели неправильное значение');
    else if (userAge < 12) alert('Привет, друг!');
    else alert('Добро пожаловать!');
}

getUserAge();
*/

//Задание 5
let mult = (a, b) => isNaN(a) || isNaN(b) ? 'Одно или оба значения не являются числом' : a * b;
console.log(mult(3, 8));

// Задание 6
let square = (a) => isNaN(a) ? 'Переданный параметр не является числом' : `${a} в кубе равняется ${a ** 3}`;
console.log(square(0));

// Задание 7
function getArea() {return  this.radius ** 2 * Math.PI}
function getPerimeter() { return this.radius * 2 * Math.PI}

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

console.log (circle1.perimeter());