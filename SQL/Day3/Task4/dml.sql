create database customer_db;
use customer_db;

create table customers (
customer_id int primary key,
name varchar(100) not null,
email varchar(100) unique,
city varchar(50),
age int,
registration_date date
);

insert into customers (customer_id, name, email, city, age, registration_date) values
(1, 'Anu', 'anu@gmail.com', 'Chennai', 25, '2026-10-10'),
(2, 'Priya', 'priya@gmail.com', 'Coimbatore', 23, '2026-07-12'),
(3, 'devi', 'devi@gmail.com', 'Madurai', 28, '2026-10-15'),
(4, 'hari', 'hari@gmail.com', 'Salem', 24, '2026-01-18'),
(5, 'Ravi', 'ravi@gmail.com', 'Trichy', 30, '2026-01-20'),
(6, 'priyan', 'priyan@gmail.com', 'salem', 26, '2026-09-22'),
(7, 'Vijay', 'vijay@gmail.com', 'Chennai', 32, '2026-10-25'),
(8, 'Anitha', 'anitha@gmail.com', 'salem', 22, '2026-06-28'),
(9, 'ram', 'ram@gmail.com', 'Vellore', 29, '2026-05-01'),
(10, 'meenu', 'meenu@gmail.com', 'Thanjavur', 27, '2026-08-05');

insert into customers values (11, 'reena', 'reena@gmail.com', 'Chennai', 31, '2026-02-10');
insert into customers values (12, 'abi', 'abi@gmail.com', 'vellore', 31, '2026-06-13');
