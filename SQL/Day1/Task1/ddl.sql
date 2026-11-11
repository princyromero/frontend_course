CREATE DATABASE Studentdb;

use studentdb;
create table student(
student_id int primary key auto_increment,
student_name varchar(100) not null,
age int CHECK (age >= 18)


);
