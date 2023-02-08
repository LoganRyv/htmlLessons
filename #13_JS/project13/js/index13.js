// 1 Variable
// var name = "Vladilen"; // Не использовать var. Использовать const и let.
// const lastName = "Minin"; //read_Only
// let age = 26;
// age = 47; //Изменение переменной let age.
// const _private = true;
// Проверка кострукции
// console.log(age);

// const if = 'makeef' //err

// 2 Мультирование
// console.log("Имя Человека: " + name + ", а возраст человека " + age + ".");

//Взаимодействи с пользователем
// const lastName = prompt("Введите фамилию");
// const ages = prompt("Введите возраст");
// alert("Имя человека: " + lastName + ", а возраст человека: " + ages);

// 3 Операторы

//Вычисления (-)
// let currentYear = 2023;
// const birsthYear = 2004;
// const age = currentYear - birsthYear;
// console.log(age);

// const a = 10;
// const b = 30;

//Операции
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(currentYear--);
// console.log(currentYear);

// let c = 30;
// let g = 30;
// let h = 10;

// c = c + g;
// console.log(c);

// 4 типы данных
// const isProgrammer = true;
// const name = "Alexander";
// const age = 23;

// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof null);
// console.log(typeof x);

// 5 Приоритет операторов.
// const fullAge = 19;
// const brirthYear = 2004;
// const currentYear = 2023;

// const isFullAge = currentYear - brirthYear;
// if (isFullAge >= fullAge){ console.log(true);}
// else if (isFullAge < fullAge) {console.log(false);}

// const isFullAge = currentYear - brirthYear >= fullAge; // 19 >= 19
// console.log(isFullAge);

// 6 Условные операторы
// const courseStatus = "fail"; // ready, fail, pending
// if (courseStatus === "ready") {
//   console.log("Курс уже готов и его можно проходить");
// } else if (courseStatus === "pending") {
//   console.log("Курс находится в процессе разработки");
// } else {
//   console.log("Курс не получился");
// }

// Тернарное выражение
// const isRedy = true;
// isRedy ? console.log("Всё готово") : console.log("Всё не готово");

// 7 Булевая логика

// 8 Функции
// function calculateAge(year) {
//   return 2023 - year;
// }
// const myAge = calculateAge(2004);
// console.log(myAge);

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);
//   if (age > 0) {
//     console.log("Человек по имени " + name + ", сейчас имеет возраст " + age);
//   } else {
//     console.log("Вообщето это уже будующее");
//   }
// }
// logInfoAbout("Alex", 2024);

// 9 Массивы

// const cars = ["Mazda", "Mercedes", "ford"];

// const cars = new Array("Mazda", "Mercedes", "ford");

// console.log(cars);
// console.log(cars[2]);
// console.log(cars.length);
// cars[0] = "Porsche"; // Замена эленмента

// cars[cars.length] = "Mazda"; // Добавить элемент
// console.log(cars);
//11 Циклы
// const cars = ["Mazda", "Mercedes", "ford"]; // Итерация Масива
// cars[cars.length] = "Porsche"; // Добавить элемент
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   console.log(car);
// }

// for (let car of cars) {
//   console.log(car);
// }

// 11 Объекты
// const person = {
//   firstName: "Alex",
//   lastName: "Moroz",
//   year: 1993,
//   languages: ["Ru", "En"],
//   hasWife: false,
//   greet: function () {
//     console.log("greet from person");
//   },
// };

// console.log(person.firstName); //обращение к объекту
// console.log(person["lastName"]);
// const key = "languages";
// console.log(person[key]);

// person.hasWife = true;
// console.log(person);
// person.greet();
