//Task4

function createCounter() {

    let count = 0;

    function counter() {

        count = count + 1;

        console.log(count);
    }

    return counter;
}

let myCounter = createCounter();

myCounter();
myCounter();
myCounter();


//Task5

//Addition Callback

function add(a, b) {
    console.log(a + b);
}

function calculate(a, b, callback) {
    callback(a, b);
}

calculate(20, 10, add);


//Subtraction Callback

function subtract(a1, b1) {
    console.log(a1 - b1);
}

function calculate(a1, b1, callback) {
    callback(a1, b1);
}

calculate(20, 10, subtract);


//Task1

let company = "ABC Technologies";

function showEmployee() {

    let employee = "Arun";

    console.log(company);
    console.log(employee);
}

showEmployee();

console.log(employee);
