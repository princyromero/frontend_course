//Task1

let salary = 20000;
salary = 25000;

console.log(salary);


//Task2

const country = "India";
console.log("My Country is " + country);


//Task3

let name = "Arjun";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);


//Task4

let price = 500;
let quantity = 4;

let total = price * quantity;

console.log(`Total Price = ${total}`);


//Task5

function greet(name = "Guest") {
    console.log(`Welcome ${name}`);
}

greet("Arun");
greet();


//Task6

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);


//Tak7

const student = {
    stdname: "Arun",
    stdage: 20,
    city: "Chennai"
};

const { stdname, stdage, city } = student;

console.log(stdname);
console.log(stdage);
console.log(city);


//Task8

const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40, 50];

console.log(newNumbers);


//Task9

function showNumbers(...numbers) {
    console.log(numbers);
}

showNumbers(10, 20, 30, 40);


//Task10

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));