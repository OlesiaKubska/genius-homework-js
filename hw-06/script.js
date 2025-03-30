
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getInfo() {
        return `Name: ${this.name}, Phone: ${this.phone}`;
    }
}

// Створюємо трьох різних абонентів
const abonent1 = new Abonent('John Doe', '123-456-7890');
const abonent2 = new Abonent('Jane Smith', '098-765-4321');
const abonent3 = new Abonent('Alice Johnson', '555-555-5555');

// Виводимо дані про абонентів

console.log(abonent1.getInfo());
console.log(abonent2.getInfo());
console.log(abonent3.getInfo());

// Змінюємо номер телефону для одного з абонентів
abonent1.setPhone('111-222-3333');

// Виводимо оновлені дані
console.log(abonent1.getInfo());
console.log(abonent2.getInfo());
console.log(abonent3.getInfo());