// task 1

let a = 20;
let b = 10;

// Addition
console.log(a + b);

// Subtraction
console.log(a - b);

// Multiplication
console.log(a * b);

// Division
console.log(a / b);

// Remainder
console.log(a % b);


// Task2

let number = 15;

if (number % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Task3

let usernumber = -10;

if (usernumber > 0) {
    console.log("Positive");
} else if (usernumber < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Task4

 let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

// Task5

let x= 40;
let y = 25;

if (x > y) {
    console.log(x + " is Largest");
} else {
    console.log(y + " is Largest");
}


// Task6

let mark = 78;

if (mark >= 90) {
    console.log("Grade A");
} else if (mark >= 75) {
    console.log("Grade B");
} else if (mark >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Task7

for (let count = 1; count <= 20; count++) {
    console.log(count);
}

// Task8

for (let score = 1;  score <= 50; score++) {
    if (score % 2 == 0) {
        console.log(score);
    }
}

// Task10

let total = 0;

for (let sum = 1; sum <= 10; sum++) {
    total = total + sum;
    console.log("Total =", total);
}

