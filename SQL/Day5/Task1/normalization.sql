create database training_db;
use training_db;

CREATE table student_course_1nf (
sdt_id int AUTO_INCREMENT,
studentname VARCHAR(20),
course VARCHAR(30),
skills VARCHAR(20),
PRIMARY key (sdt_id,course,skills)

);

insert into student_course_1nf values 
(1,"Arun","Java","HTML"),
(1,"Arun","Java","CSS"),
(1,"Arun","Java","JS"),
(1,"Arun","Java","Node");

CREATE table entrollment (

eid int  AUTO_INCREMENT,
sdu_id int,
course_id int,
trainer_id int,
PRIMARY key (eid,sdt_id,course_id,trainer_id),
foreign key (sdu_id) REFERENCES studenttable_2nf (sdt_id),
foreign key (c_id) REFERENCES coursetable (c_id),
foreign key (t_id) REFERENCES trainer (t_id)

);


select * from student_course_1nf;

CREATE table studenttable_2nf (
sdt_id int AUTO_INCREMENT,
studentname VARCHAR(20),
skills VARCHAR(20),
PRIMARY key (sdt_id,skills)

);

insert into studenttable_2nf values (1,"Arun","HTML"),(1,"Arun","JS"),(2,"varun","CSS");

select * from studenttable_2nf;

CREATE table trainer (
trainer_id int  AUTO_INCREMENT,
trainername VARCHAR(20),
skills VARCHAR(20),
PRIMARY key(trainer_id,skills)
);

insert into trainer values 
(1,"sam","MERN"),
(2,"hema","Java"),
(3,"arun","AWS");

select * from trainer;

CREATE table coursetable (
course_id int PRIMARY key  AUTO_INCREMENT,
coursename VARCHAR(20),
coursefees VARCHAR(20)
);

insert into coursetable values 
(1,"MERN","30000"),
(2,"Java","40000"),
(3,"AWS","50000");

select * from coursetable;

CREATE table enrollment (
eid int  AUTO_INCREMENT,
sdt_id int,
course_id int,
trainer_id int,
PRIMARY key (eid,sdt_id,course_id,trainer_id),
foreign key (sdt_id) REFERENCES studenttable_2nf (sdt_id),
foreign key (course_id) REFERENCES coursetable (course_id),
foreign key (trainer_id) REFERENCES trainer (trainer_id)

);

select * from enrollment;

insert into enrollment values (1,1,2,2);

















