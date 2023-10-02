//Задание 1
let firsArr = [1, 5, 4, 10, 0, 3];
for (let item of firsArr) {
    console.log(item);
    if (item == 10) break;
}

//Задание 2
console.log(firsArr.indexOf(4))

//Задание 3
let secondArr = [1, 3, 5, 10, 20];
let str = secondArr.join(' ');
console.log(str);

//Заданаие 4 
let thirdArr = [];
for (let i = 0; i < 3; i++) {
    thirdArr[i] = [];
    for (let j = 0; j < 3; j++) {
        thirdArr[i][j] = 1;
    }
}
console.log(thirdArr);

//Заданаие 5
const array1 = [1, 1, 1];
const array2 = [2, 2, 2];
const array3 = array1.concat(array2);
console.log(array3);

// Задание 6 
let fourthArr = [9, 8, 7, 'a', 6, 5];
let removed = fourthArr.sort().pop();
console.log(fourthArr);

// Задание 7
let fifthArr = [9, 8, 7, 6, 5];
let userAns = prompt('Введи число');
if (fifthArr.includes(Number(userAns))) alert('Угадал');
else alert("Не угадал");

// Задание 8
const s = "abcdef"
const reverse = s.split('').reverse().join('');

console.log(reverse);

// Задание 9
var arr = [[1, 2, 3,], [4, 5, 6]]
var result = [].concat(arr[0], arr[1]);
console.log(result);

// Задание 10
let randomMass = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10) + 1 );
console.log(randomMass);
for (let i = 0; i < randomMass.length - 1; i++) console.log(randomMass[i] + randomMass[i + 1]);

// Задание 11
let arr11 = [1,2,3]
function getSquare(arr) { return arr.map(item => item ** 2) }
console.log(getSquare(arr11));

// Задание 12
function getLengthWords (arr){
    return arr.map(item => item.length);
}
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква'])) // [5, 0, 4, 19, 5])

//Задание 13
function filterPositive(array) {
    return array.filter(item => item < 0)
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
  console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]