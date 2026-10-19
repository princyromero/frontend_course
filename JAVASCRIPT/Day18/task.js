//Task1

const createCounter = () => {
    let count = 0;

    return () => {
        count += 10;
        console.log(count);
    };
};

const counter = createCounter();

counter();
counter();
counter();
counter();
counter();


//Task2

function calculateSalary(salary, callback) {
    callback(salary);
}

const addBonus = (salary) => {
    console.log("Salary After Bonus:", salary + 5000);
};

const deductSalary = (salary) => {
    console.log("Salary After Deduction:", salary - 2000);
};

let salary = 20000;

console.log("Original Salary:", salary);

calculateSalary(salary, addBonus);
calculateSalary(salary, deductSalary);


//Task3

function checkResult(mark) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mark >= 35) {
                resolve("Student Passed");
            } else {
                reject("Student Failed");
            }
        }, 2000);
    });
}

// First student
checkResult(75)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Second student
checkResult(20)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });