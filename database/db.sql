-- Creating databse

CREATE DATABASE crudnodejsmysql;

-- Using the databse

use crudnodejsmysql;

-- Creating a table

CREATE TABLE customer (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR (50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  PRIMARY KEY (id)
);

-- To show all tables

SHOW TABLES;

-- To describe the table

describe customer;