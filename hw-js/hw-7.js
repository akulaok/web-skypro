// Задание 1
let jsStr = 'str';
console.log(jsStr.toUpperCase());

// Задание 2
function searchStart(comparisonArr, comparisonStr) {
    return comparisonArr.filter((item) => item.toLowerCase().startsWith(comparisonStr.toLowerCase()));
}
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3
let n = 32.58884;
console.log("Меньшее " + Math.floor(n));
console.log('Большее ' + Math.ceil(n));
console.log('Ближайшее ' + Math.round(n));

// Задание 4
let arr4 = [52, 53, 49, 77, 21, 32];
console.log('Максимальное' + Math.max(...arr4));
console.log('Минимальное' + Math.min(...arr4));

// Задание 5
let randomNumber = () => Math.floor(Math.random() * 10) + 1;
console.log(randomNumber());

// Задание 6
let randomNumberArr = (num) => Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num) + 1);
console.log(randomNumberArr(8));

// Задание 7
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(8, 16));

// Задание 8
let currentDate = new Date();
console.log(currentDate);

// Задание 9
let days73 = 73 * 24 * 60 * 60 * 1000;
let daysAgo73 = new Date(+currentDate + days73);
console.log(daysAgo73);

// Задание 10
function CreateBeautifulDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let beautifulDate = {
        date: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}`,
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}}`
    };
    console.log(beautifulDate);
}
CreateBeautifulDate(currentDate);


// Задание 11
function RememberGame() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    let firstElem = prompt('Чему равнялся первый элемент массива?');
    let lastElem = prompt('Чему равнялся последний элемент массива?');

    if (words[0].toLowerCase() == firstElem.toLowerCase() && words[words.length - 1].toLowerCase() == lastElem.toLowerCase()) alert('Поздравляю, вы все угадали!');
    else if (words[0].toLowerCase() == firstElem.toLowerCase() || words[words.length - 1].toLowerCase() == lastElem.toLowerCase()) alert('Вы были близки к победе!');
    else alert('Вы ответили не верно(((');
}