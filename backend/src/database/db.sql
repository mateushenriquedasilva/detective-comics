create database detective_comics;
use detective_comics;

create table comics (
	id int unsigned not null auto_increment,
    name varchar(100) not null,
    author varchar(100) not null,
    date_of_publication varchar(10) not null,
    url_image varchar(100) not null,
    primary key (id)
);

SELECT * FROM comics;

INSERT INTO comics (name, author, date_of_publication, url_image) VALUES("Batman: Year One: Year One Deluxe", "Frank Miller", "2007-04-01", "https://images-na.ssl-images-amazon.com/images/I/41H1ZfNj36L._SX322_BO1,204,203,200_.jpg")

# UPDATE comics SET name = "", date_of_publicaton = "", url_image = "" WHERE id = 1

# DELETE FROM comics WHERE id = 12

