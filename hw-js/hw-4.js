//Задание 1
for (i = 0; i < 2; i++) console.log('Привет')

//Задание 2
for (i = 1; i <= 5; i++) console.log(i)

//Задание 3
for (i = 7; i <= 22; i++) console.log(i)

//Задание 4
let users = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}

for (let user in users){
    console.log(`${user} — зарплата ${users[user]} долларов.`)
}

//Задание 5
let num = 0;
for(n = 1000; n > 50; n=n/2){
    num++;
}
console.log(n, num);

//Задание 6
let first_friday = 2;
for(i = first_friday; i<=31;i+=7)
{
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}