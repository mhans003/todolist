DROP DATABASE todolist_db; 

CREATE DATABASE todolist_db; 

USE todolist_db; 

CREATE TABLE todos(
id INTEGER AUTO_INCREMENT UNIQUE,
todo_item VARCHAR(100) NOT NULL,
done BOOLEAN NOT NULL DEFAULT FALSE,
PRIMARY KEY(id)
); 
