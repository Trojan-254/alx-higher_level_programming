-- scrip that creates a table first_table in the current database in my MySQL server
-- The database name will be passed as an argument of the mysql command
-- The script should not fail
-- not allowed to use the SELECT or SHOW statements

CREATE TABLE IF NOT EXISTS first_table(id INT, name VARCHAR(256))
