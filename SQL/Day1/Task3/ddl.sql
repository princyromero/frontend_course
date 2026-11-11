create database company_db;
use company_db;
CREATE TABLE employees (
emp_id INT PRIMARY KEY AUTO_INCREMENT,
emp_name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE,
salary DECIMAL(10,2) CHECK (salary > 10000),
department VARCHAR(50) DEFAULT 'IT',
joining_date DATE NOT NULL,
status VARCHAR(20) DEFAULT 'Active',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
