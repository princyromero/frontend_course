create database orders_db;
use orders_db;

create table orders (
order_id int primary key,
customer_name varchar(30),
product_name varchar(100),
quantity int,
price decimal(10,2),
order_date date
);

insert into orders (order_id, customer_name, product_name, quantity, price, order_date) values
(1, 'Amu', 'Laptop', 1, 45000, '2026-10-10'),
(2, 'sathish', 'phone', 1, 25000, '2026-08-12'),
(3, 'arun', 'Keyboard', 2, 800, '2026-05-15'),
(4, 'devi', 'Pen ', 2, 50, '2026-01-18'),
(5, 'harish', 'ring', 1, 12000, '2026-03-20'),
(6, 'jeni', 'Notebook', 5, 100, '2026-04-22'),
(7, 'jai', 'Headphones', 2, 600, '2026-03-25'),
(8, 'rahul', 'Charger', 1, 450, '2026-06-28'),
(9, 'Sam', 'box', 2, 300, '2026-02-01'),
(10, 'arul', 'dress', 3, 200, '2026-02-05');

delete from orders where order_id = 4;
delete from orders where quantity < 1;

