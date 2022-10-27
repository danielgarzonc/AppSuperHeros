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
    vehicle VARCHAR(180),
    image VARCHAR(200)
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

INSERT INTO heros (name, hero_type, operation_place, condicion, power_type, vehicle, image) VALUES ("Bruja Escarlata", "Heroe", "Ciudad", "Libertad", "Puede manejar la magia del caos, lo cual hace que su nivel de poder sea muy variable", "Capa", "https://i.blogs.es/e791d0/screenshot_1279/1366_2000.jpeg");
INSERT INTO heros (name, hero_type, operation_place, condicion, power_type, vehicle, image) VALUES ("Dr. Extraño", "Heroe", "Ciudad", "Libertad", "Experto cirujano. Maestro con las artes de la magia y poseedor de una amplia colección de artefactos místicos.", "Capa", "https://i.blogs.es/8379ae/screenshot_1282/1366_2000.jpeg");
INSERT INTO heros (name, hero_type, operation_place, condicion, power_type, vehicle, image) VALUES ("Mercurio (Quicksilver)", "Heroe", "Ciudad", "Libertad", "Su velocidad le permite correr más rápido que la luz e incluso atravesar objetos a nivel molecular.", "Ninguno", "https://i.blogs.es/595f98/screenshot_1290/1366_2000.jpeg");
INSERT INTO heros (name, hero_type, operation_place, condicion, power_type, vehicle, image) VALUES ("Agente Venom", "Villano", "Ciudad", "Detenido", "fuerza, agilidad, velocidad y resistencia superhumanas.", "Ninguno", "https://i.blogs.es/2306ee/agente-venom/1366_2000.jpeg");