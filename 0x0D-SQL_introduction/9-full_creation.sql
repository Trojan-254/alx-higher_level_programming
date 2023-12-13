-- script that creates a table second_table in the database hbtn_0c_0 in my MySQL server and adds multiple rows
-- The database name will be passed as an argument to the mysql command
-- not allowed to use the SELECT or SHOW statements
-- script should not fail

CREATE TABLE IF NOT EXISTS second_table(
	id INT,
	name VARCHAR(256),
	score INT
	);

INSERT INTO second_table(id, name, score) VALUES('1', 'John', '10');
INSERT INTO second_table(id, name, score) VALUES('2', 'Alex', '3');
INSERT INTO second_table(id, name, score) VALUES('3', 'Bob', '14');
INSERT INTO second_table(id, name, score) VALUES('4', 'George', '8');
