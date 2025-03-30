// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// --1--
// const student1 = {
//     name: "John Doe",
//     specialty: "Computer Science",
//     averageGrade: 4.5,
//     missedClasses: 2,
// };

// const student2 = {
//     name: "Jane Smith",
//     specialty: "Mathematics",
//     averageGrade: 4.8,
//     missedClasses: 1,
// };

// const student3 = {
//     name: "Alice Johnson",
//     specialty: "Physics",
//     averageGrade: 4.2,
//     missedClasses: 3,
// };

// function displayStudentInfo() {
//     console.log(`Name: ${this.name}`);
//     console.log(`Specialty: ${this.specialty}`);
//     console.log(`Average Grade: ${this.averageGrade}`);
//     console.log(`Missed Classes: ${this.missedClasses}`);
// }

// // Using call to display information for each student
// displayStudentInfo.call(student1);
// displayStudentInfo.call(student2);
// displayStudentInfo.call(student3);

// // Using apply to display information for each student

// displayStudentInfo.apply(student1);
// displayStudentInfo.apply(student2);
// displayStudentInfo.apply(student3);

// // Using bind to create a new function for each student

// const displayStudent1Info = displayStudentInfo.bind(student1);
// const displayStudent2Info = displayStudentInfo.bind(student2);
// const displayStudent3Info = displayStudentInfo.bind(student3);

// displayStudent1Info(); // Call the bound function for student 1
// displayStudent2Info(); // Call the bound function for student 2
// displayStudent3Info(); // Call the bound function for student 3



// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

function showHtmlInfo() {
    document.getElementById('info').textContent =
      'HTML (HyperText Markup Language) — це мова розмітки, яка використовується для створення структури веб-сторінок.';
  }

  function showCssInfo() {
    document.getElementById('info').textContent =
      'CSS (Cascading Style Sheets) — це мова стилів, яка використовується для оформлення вигляду HTML-елементів на веб-сторінці.';
  }


// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4


// function store(productName, pricePerKg, quantity) {
//     const totalCost = pricePerKg * quantity;
//     return `Product: ${productName}, Total Cost: ${totalCost}`;
// }

// // Test cases

// console.log(store("Banana", 30, 4.5)); // Product: Banana, Total Cost: 135
// console.log(store("Cherry", 58, 1.3)); // Product: Cherry, Total Cost: 75.4
// console.log(store("Orange", 89, 3.4)); // Product: Orange, Total Cost: 302.6
