//Task1

let numbers = [10, 20, 30, 40, 50];

let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers);


//Task4

let students = [
    { id: 1, name: "Arun", mark: 75 },
    { id: 2, name: "Priya", mark: 90 },
    { id: 3, name: "Kumar", mark: 65 }
];

let student = students.find(function(student) {
    return student.id === 2;
});

console.log(student);


//Task6

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Priya", salary: 45000 },
    { name: "Kumar", salary: 30000 },
    { name: "Ravi", salary: 50000 }
];

let names = employees.map(function(employee) {
    return employee.name;
});

console.log(names);


//Task7

let prices = [100, 200, 300, 400];

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(total);


//Task9

let skills = ["HTML","CSS","JavaScript","React"];

for (let skill of skills) {
    console.log(skill);    
}


//Task10

let studentdata = {
    name: "Arun",
    age: 21,
    course: "JavaScript",
    city: "Chennai"
};

for (let key in studentdata) {
    console.log(key, studentdata[key]);
}






