class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}

let myRectangle = new Rectangle(5, 10);

console.log(myRectangle.calculateArea());

let oddRectangle = new Rectangle(10, 4);

console.log(oddRectangle.calculateArea());

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        console.log(this.year, this.brand, this.model);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2020);
myCar.displayInfo();

let anotherCar = new Car('Ford', 'Focus', 2018);
anotherCar.displayInfo();

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

let myCircle = new Circle(5);
console.log(myCircle.calculateArea());

myCircle.setRadius(10);
console.log(myCircle.calculateArea());

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    study() {
        console.log(`this student ${this.name}. ${this.age}. ${this.grade} is studying.`);
    }
}

let myStudent = new Student('John', 18, 5);
myStudent.study();

class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        console.log("insufficient funds");
    }
    }
}

let myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.balance);
myAccount.withdraw(200);
console.log(myAccount.balance);
myAccount.withdraw(2000);
console.log(myAccount.balance);

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayInfo() {
        console.log(`${this.title}, ${this.author}, ${this.year}.`);
    }
}

let myBook = new Book("Унесенные Ветром", "Маргаретт Митчелл", 1936);
myBook.displayInfo();
