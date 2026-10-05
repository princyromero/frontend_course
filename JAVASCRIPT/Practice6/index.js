//Function Decaration 

let a = 10;
let b = 20;

function add() {
    console.log(a + b);
}
add();

let x = 40;
let y = 20;

function subtract() {
    console.log(x - y);
}
subtract();

let value1 = 3;
let value2 = 6;

function multiply() {
    console.log(value1 * value2);
}
multiply();

let a1 = 20;
let b1 = 5;

function divide() {
    console.log(a1 / b1);
}
divide();

let num = 10;
function checkEven() {
    if (num % 2 === 0) {
        console.log("Even");
    }
}
checkEven();

let numvalue = 7;
function checkOdd() {
    if (numvalue % 2 !== 0) {
        console.log("Odd");
    }
}
checkOdd();

let number = 5;
function square() {
    console.log(number * number);
}
square();

let no = 3;
function cube() {
    console.log(no * no * no);
}
cube();

let sum1 = 20;
let sum2 = 35;
function findLargest() {
    if (sum1 > sum2) {
        console.log(sum1);
    } else {
        console.log(sum2);
    }
}
findLargest();

let g = 15;
let h = 8;
function findSmallest() {
    if (g < h) {
        console.log(g);
    } else {
        console.log(h);
    }
}
findSmallest();

let value = 25;
function checkPositive() {
    if (value > 0) {
        console.log("Positive");
    }
}
checkPositive();

let f = -10;
function checkNegative() {
    if (f < 0) {
        console.log("Negative");
    }
}
checkNegative();

let name = "Arun";
function printName() {
    let i;

    for (i = 1; i <= 3; i++) {
        console.log(name);
    }
}
printName();

let price = 500;
let quantity = 3;
function totalPrice() {
    console.log(price * quantity);
}
totalPrice();

let sales = 1000;
let delivery = 100;
function calculateBill() {
    console.log(sales + delivery);
}
calculateBill();

let age = 22;
function showAge() {
    console.log("Age:", age);
}
showAge();

let city = "Chennai";
function showCity() {
    console.log("City:", city);
}
showCity();

let firstName = "Anu";
let lastName = "priya";
function fullName() {
    console.log(firstName + " " + lastName);
}
fullName();



//Function Expression

let username = "abi";
let Name = function() {
    console.log(username);
};
Name();

let course = "Full Stack";
let showCourse = function() {
    console.log(course);
};
showCourse();

let mark1 = 80;
let mark2 = 60;
let average = function() {
    console.log((mark1 + mark2) / 2);
};
average();


let mark = 450;
let total = 500;
let percentage = function() {
    console.log((mark / total) * 100);
};
percentage();

let stdtage = 20;
let checkVote = function() {
    if (stdtage >= 18) {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible");
    }
};
checkVote();

let temperature = 35;
let checkTemperature = function() {
    if (temperature > 30) {
        console.log("Hot");
    } else {
        console.log("Normal");
    }
};
checkTemperature();

let numbers = [10, 20, 30, 40];
let numtotal = 0;
let getTotal = function() {
    for (let a = 0; a < numbers.length; a++) {
        numtotal += numbers[a];
    }

    console.log(numtotal);
};
getTotal();

let fruits = ["Apple", "Mango", "Orange"];
let countItems = function() {
    console.log(fruits.length);
};
countItems();

let multiplesOfFive = function() {
    for (let a = 5; a <= 25; a += 5) {
        console.log(a);
    }
};
multiplesOfFive();

let printSquares = function() {
    for (let a = 1; a <= 5; a++) {
        console.log(a * a);
    }
};
printSquares();

let minutes = 5;
let convertSeconds = function() {
    console.log(minutes * 60);
};
convertSeconds();

let hours = 2;
let convertMinutes = function() {
    console.log(hours * 60);
};
convertMinutes();

let radius = 5;
let circleArea = function() {
    let area = 3.14 * radius * radius;
    console.log(area);
};
circleArea();



//Function Arrow Types

let greet = () => {
    console.log("Hello");
};
greet();

let welcome = () => {
    console.log("Welcome");
};
welcome();

let staffname = "harini";
let showName = () => {
    console.log(staffname);
};
showName();

let addvalue = (a, b) => {
    console.log(a + b);
};
addvalue(10, 20);

let squarevalue = (num) => {
    console.log(num * num);
};
squarevalue(7);

let discountPrice = (price, discount) => {
    console.log(price - discount);
};
discountPrice(1200, 200);