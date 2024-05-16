use hellodb;

create table my_user (
    id int primary key auto_increment,
    name varchar(255) not null,
    age int not null
);