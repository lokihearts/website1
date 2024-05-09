CREATE DATABASE IF NOT EXISTS mini;

USE mini;

CREATE TABLE IF NOT EXISTS miniflower (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    event VARCHAR(255)
);

SELECT * FROM miniflower;
