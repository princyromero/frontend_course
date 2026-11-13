create database employee_db;
use employee_db;

CREATE TABLE employees (
emp_id int primary key auto_increment,
name varchar(50) not null,
salary int,
department varchar(50),
joining_date date,
city varchar(50)
);
 
alter table employees rename column name to employee_name;
alter table employees modify salary decimal(12,2);
alter table employees add email varchar(50);