create database student_db;
use student_db; 

CREATE TABLE students (
student_id int primary key auto_increment,
student_name varchar(30) not null,
age int,
email varchar(30) unique,
course varchar(50) not null,
fees decimal(10,2),
admission_date date
);

rename table students to student_details;
alter table student_details add mobile_number varchar(15);
