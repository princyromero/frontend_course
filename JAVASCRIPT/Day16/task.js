
let employees = JSON.parse(localStorage.getItem("employees")) || [];

let form = document.getElementById("employeeForm");
let table = document.getElementById("employeeTable");

displayEmployees();

form.addEventListener("submit", function(event) {
    event.preventDefault();


    let name = document.getElementById("empName").value.trim();
    let age = document.getElementById("empAge").value;
    let department = document.getElementById("empDepartment").value.trim();
    let salary = document.getElementById("empSalary").value;

    if (name === "" || age === "" ||
        department === "" || salary === "") {
        alert("Please fill in all fields!");
        return;
    }

    age = Number(age);
    salary = Number(salary);

    if (!Number.isFinite(age) || age <= 0 ||
        !Number.isFinite(salary) || salary <= 0) {
        alert("Age and salary must be positive numbers!");
        return;
    }

    let employee = {
        id: Date.now(),
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employee);

    localStorage.setItem("employees", JSON.stringify(employees));

    displayEmployees();

   
    form.reset();
});

function displayEmployees() {
    table.innerHTML = "";

    employees.forEach(function(emp) {
        table.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>
                    <button onclick="deleteEmployee(${emp.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}


function deleteEmployee(id) {
    employees = employees.filter(function(emp) {
        return emp.id !== id;
    });

    localStorage.setItem("employees", JSON.stringify(employees));

    displayEmployees();
}
