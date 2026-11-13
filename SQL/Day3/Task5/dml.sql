create database staff_db;
use staff_db;

create table staff (
staff_id int primary key,
name varchar(30) not null,
department varchar(50),
salary decimal(10,2),
city varchar(50)
);

insert into staff (staff_id, name, department, salary, city) values
(1, 'amle', 'HR', 25000, 'Chennai'),
(2, 'anto', 'IT', 35000, 'Coimbatore'),
(3, 'agnes', 'HR', 30000, 'Madurai'),
(4, 'harika', 'Finance', 40000, 'Salem'),
(5, 'jaya', 'Sales', 28000, 'madurai'),
(6, 'romero', 'HR', 48000, 'salem'),
(7, 'Vijay', 'IT', 45000, 'Chennai'),
(8, 'anu', 'Finance', 29000, 'Vellore');

update staff set salary = 45000 where staff_id = 3;
update staff set department = 'IT' where staff_id = 5;