// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let number = 1; 
// let number = 0;
// let number = -3;

// if (number > 0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let string = 'test';
// let string = 'qwerty';
// let string = true;

// if (string === 'test') {
//     console.log(true);
// }
// else {
//     console.log(false);
// }


// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let number = 1;
// let number = 10;
// let number = 13;

// if (number >= 10) {
//     number -= 5;
// }
// else {
//     number += 5;
// }

// console.log(number);


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let monthNumber = 7;

// let monthName;
// switch (monthNumber) {
//     case 1:
//         monthName = 'Січень';
//         break;
//     case 2:
//         monthName = 'Лютий';
//         break;
//     case 3:
//         monthName = 'Березень';
//         break;
//     case 4:
//         monthName = 'Квітень';
//         break;
//     case 5:
//         monthName = 'Травень';
//         break;
//     case 6:
//         monthName = 'Червень';
//         break;
//     case 7:
//         monthName = 'Липень';
//         break;
//     case 8:
//         monthName = 'Серпень';
//         break;
//     case 9:
//         monthName = 'Вересень';
//         break;
//     case 10:
//         monthName = 'Жовтень';
//         break;
//     case 11:
//         monthName = 'Листопад';
//         break;
//     case 12:
//         monthName = 'Грудень';
//         break;
//     default:
//         monthName = 'Невірний номер місяця';
//         break;
// }
// console.log(monthName);

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let number = 945;
// let sum = 0;
// let strNumber = number.toString();
// let length = strNumber.length;
// for (let i = 0; i < length; i++) {
//     sum += parseInt(strNumber[i]);
// }
// console.log(sum);
