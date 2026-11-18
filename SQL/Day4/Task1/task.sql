create database employeedb;
use employeedb;

CREATE TABLE employees (
emp_id INT PRIMARY KEY auto_increment,
name VARCHAR(100),
department VARCHAR(50),
salary DECIMAL(10,2),
city VARCHAR(50),
joining_date DATE
);

INSERT INTO employees VALUES
(1, 'anu', 'IT', 45000, 'Chennai', '2026-09-10'),
(2, 'velu', 'HR', 25000, 'vellore', '2023-05-15'),
(3, 'Keerthi', 'IT', 35000, 'Chennai', '2025-06-20'),
(4, 'Divya', 'Finance', 40000, 'Salem', '2022-06-12'),
(5, 'Ravi', 'IT', 50000, 'Chennai', '2020-08-25'),
(6, 'Sri', 'HR', 32000, 'erode', '2024-02-18'),
(7, 'arul', 'IT', 28000, 'salem', '2023-12-05'),
(8, 'hari', 'Finance', 45000, 'Chennai', '2022-09-14'),
(9, 'hema', 'IT', 60000, 'Coimbatore', '2023-07-22'),
(10, 'reena', 'Sales', 30000, 'vellore', '2024-04-10');

select * FROM employees;
select *from employees where department = 'IT' and salary > 30000;





