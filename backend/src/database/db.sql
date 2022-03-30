# 1
create database detective_comics;
# 2
use detective_comics;

# 3
create table comics (
	id int unsigned not null auto_increment,
    name varchar(100) not null,
    author varchar(100) not null,
    date_of_publication varchar(10) not null,
    url_image varchar(100) not null,
    primary key (id)
);