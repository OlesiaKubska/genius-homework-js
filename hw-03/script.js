//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const names = fruts.map((item) => item.name);
// console.log(names);



//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }


//  -- 3 --
//Замініть цикл "for" на "while"
// let i = 0;
// for (let i = 0; i < 5; i++) {
//     console.log( `цифра ${i}!` );
//   }


// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }


//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let number;
// do {
//   number = prompt("Введіть число більше за 100:");
// }
// while (number !== null && number.trim() !== "" && Number(number) <= 100);

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// const totalAge = girls.reduce((sum, girl) => sum + girl.age, 0);
// const averageAge = totalAge / girls.length;

// console.log(`Середній вік: ${averageAge}`);
