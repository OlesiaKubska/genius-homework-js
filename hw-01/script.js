//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name;
// let city;
// name = "Іван";
// city = name;
// console.log(city);


//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // ? привіт Olga 



//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип


// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// вивести в консоль число

// console.log(parseInt(a));
// console.log(parseInt(b));
// console.log(parseFloat(c));


//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// console.log(c.toFixed(1));

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// let arr = [20, 10, 50, 40];
// let max = Math.max(...arr);
// console.log(max);

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// let min = 2;
// let max = 4;
// let rand = min + Math.random() * (max - min);
// console.log(rand);


//***7**
//дізнатись довжину message

// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let obj = {};
// obj.name = "Ivan";
// obj.age = 25;
// obj.city = "Lviv";
// console.log(obj);
// delete obj.city;
// console.log(obj);
// obj["like flowers"] = true;
// console.log(obj);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// let obj = {
//     name: "Ivan",
//     age: 25,
//     city: "Lviv",
//     "like flowers": true
// };
// for (let key in obj) {
//     console.log(key + " : " + obj[key]);
// }