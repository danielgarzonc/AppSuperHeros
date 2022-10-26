CREATE DATABASE ng_heros_db;
USE ng_heros_db;

CREATE TABLE heros(
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    hero_type VARCHAR(180),
    operation_place VARCHAR(180),
    condicion VARCHAR(180),
    power_type VARCHAR(180),
    vehicle VARCHAR(180)
);

CREATE TABLE power_types(
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    description VARCHAR(255)
);

CREATE TABLE vehicles(
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    description VARCHAR(255)
);


DESCRIBE heros;
DESCRIBE power_types;
DESCRIBE vehicles;