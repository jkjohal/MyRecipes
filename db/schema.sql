DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;

USE recipe_db;

CREATE TABLE `recipe` (
   `recipe_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(128) DEFAULT NULL,
   `description` text,
   `instructions` text,
   PRIMARY KEY (`recipe_id`)
);

CREATE TABLE `ingredient` (
   `ingredient_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `ingredient` varchar(64) DEFAULT NULL,
   PRIMARY KEY (`ingredient_id`)
);

CREATE TABLE `recipe_ingredient` (
   `recipe_id` int(10) unsigned NOT NULL,
   `ingredient_id` int(10) unsigned NOT NULL,
   `amount` decimal(4,2) DEFAULT NULL,
   `unit` varchar(8) DEFAULT NULL,
   INDEX (`recipe_id`)
);
