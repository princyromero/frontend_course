create database studentdb;
use studentdb;

CREATE TABLE students (
student_id INT PRIMARY KEY  auto_increment,
name VARCHAR(100) ,
age INT,
email VARCHAR(100),
course VARCHAR(50),
city VARCHAR(50)
);

insert into students values
(1, 'varun', 20, 'varun@gmail.com', 'BCA', 'Chennai'),
(2, 'hemu', 22, 'hemu@gmail.com', 'B.Sc', 'Madurai'),
(3, 'vetri', 18, 'vetri@gmail.com', 'BCA', 'Chennai'),
(4, 'arul', 25, 'arul@gmail.com', 'B.Com', 'Madurai'),
(5, 'Ravi', 17, 'ravi@gmail.com', 'B.Sc', 'Salem'),
(6, 'ram', 23, 'ram@gmail.com', 'BCA', 'erode'),
(7, 'sam', 21, 'sam@gmail.com', 'B.Com', 'Chennai'),
(8, 'lalu', 26, 'lalu@gmail.com', 'B.Sc', 'Madurai'),
(9, 'amu', 24, 'amu@gmail.com', 'BCA', 'Madurai'),
(10, 'Meenu', 19, 'meenu@gmail.com', 'B.Com', 'Chennai');

select * from students;
select * from students where age between 18 and 25 and city in ('Chennai', 'Madurai');