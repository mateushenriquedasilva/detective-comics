CREATE DATABASE IF NOT EXISTS detective_comics;

USE detective_comics;

CREATE TABLE comics (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    date_of_publication VARCHAR(10) NOT NULL,
    url_image VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);