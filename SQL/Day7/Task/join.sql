create database collegedb;
use collegedb;

create table student (
std_id int primary key auto_increment,
std_name varchar(30),
std_age varchar(30),
std_email varchar(20),
city varchar(30)
);

create table course(
course_id int primary key auto_increment,
course_name varchar(30),
course_duration varchar(20),
fees int
);

create table train