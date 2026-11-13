create database hospital_db;
use hospital_db;

create table patients (
patient_id int primary key auto_increment,
patient_name varchar(50) not null,
age int,
gender varchar(10),
disease varchar(30),
admission_date date,
doctor_name varchar(60)
);

alter table patients rename column disease to diagnosis;
alter table patients add contact_number varchar(15);
alter table patients modify patient_name varchar(150) not null;
rename table patients to patient_records;