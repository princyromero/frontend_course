//Task1

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

//Task2

let colors = ["Red", "Blue", "Green", "Yellow"];
colors[1] = "Black";
console.log(colors);

//Task3

let students = ["Arun", "Kumar", "Priya", "Ravi", "Divya"];
for (let a = 0; a < students.length; a++) {
    console.log(students[a]);
}

//Task4

let marks = [80, 70, 90, 60, 85];
let total = 0;
for (let a = 0; a < marks.length; a++) {
    total = total + marks[a];
}
console.log( Total = "" + total);

//Task5

let numbers = [2, 4, 6, 8, 10];
for (let a = 0; a < numbers.length; a++) {
    console.log(numbers[a] * 2);
}

//Task6

let student = {name: "Arjun",age: 23,course: "B.E CSE",city: "Chennai"};

console.log(student.name);
console.log(student.course);

//Task7

let employee = {name: "Arun",salary: 25000, role: "Developer"};
employee.salary = 30000;

console.log(employee);

//Task8

let product = {name: "Laptop",price: 50000};
product.brand = "Dell";

console.log("Product Name:", product.name);
console.log("Price:", product.price);
console.log("Brand:", product.brand);

//Task9

let car = { brand: "Toyota", model: "Fortuner", year: 2025 };
let keys = Object.keys(car);

for (let a = 0; a < keys.length; a++) {
    console.log(keys[a], car[keys[a]]);
}


//Task10

let Sclstudents = [{name: "Arun",mark: 80},{name: "Priya",mark: 90},
    {name: "Kumar",mark: 75}];

for (let a = 0; a < Sclstudents.length; a++) {
    console.log(Sclstudents[a].name + " - " + Sclstudents[a].mark);
}