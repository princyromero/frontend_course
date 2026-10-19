
let form = document.getElementById("calculator");
let result = document.getElementById("result");

function calculate(event) {
    event.preventDefault();

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if (a === "" || b === "") {
        result.textContent = "Please enter both numbers";
        return;
    }

    a = Number(a);
    b = Number(b);

    let op = document.getElementById("operation").value;
    let answer;

    if (op === "+") {
        answer = a + b;
    } else if (op === "-") {
        answer = a - b;
    } else if (op === "*") {
        answer = a * b;
    } else if (op === "/") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero";
            return;
        }
        answer = a / b;
    }

    result.textContent = "Result: " + answer;
}

form.addEventListener("submit", calculate);

document.getElementById("clear").addEventListener("click", function() {
    form.reset();
    result.textContent = "Result:";
});


