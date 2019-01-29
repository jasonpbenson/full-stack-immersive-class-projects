/* SELECT = get column(s) */
/* SELECT options:
* = selects everything */
/* city = selects city column only
city, phone = selects city and phone columns
etc.  */
/* after the column(s) selection keyword FROM selects the specific table */
/* such as: employees, customers, etc.  */
SELECT * FROM customers;
SELECT firstName, lastName FROM employees; 

/* add WHERE after table name to select specific rows */

SELECT * FROM employees WHERE jobTitle = "Sales Rep";
SELECT firstName, lastName, extension FROM employees;
SELECT jobTitle FROM employees;
/* vs */
SELECT DISTINCT(jobTitle) FROM employees;
/* distinct will not repeat results */
/* WHERE clauses can have multiple conditions, such as AND and OR  */
SELECT * FROM orders WHERE status = "Cancelled" OR status = "Resolved";
SELECT * FROM orders WHERE orderDate < '2004-01-01' AND orderDate > '2003-01-01';
/* and LIKE, which basically declares "equal to" */
SELECT * FROM producLines WHERE productLine LIKE 'planes';
/* LIKE combined with %...% will search for "things that include __", such as:  */
SELECT * FROM employees WHERE lastName LIKE '%ur%';
SELECT * FROM employees WHERE lastName LIKE '%ur%' AND firstName LIKE '%d%';

/* after the WHERE clause can add ORDER BY
ORDER BY expects a column, and a direction (asc, desc) */
SELECT * FROM offices;
SELECT * FROM offices ORDER BY city asc;
/* after everything the LIMIT keyword will can be used to limit the return data */
SELECT * FROM orderdetails; 
/* LIMIT takes 2 args: where to start and how many (0 is default start position) */
SELECT * FROM orderdetails ORDER BY priceEach desc LIMIT 0,5;
/* can create a new temporary column in SELECT */
/* example orderTotal column: */
SELECT *, quantityOrdered * priceEach FROM orderdetails;
/* AS will alias, or change the name of anything in the result */
SELECT *, quantityOrdered * priceEach AS orderTotal FROM orderdetails;
SELECT *, quantityOrdered * priceEach AS orderTotal FROM orderdetails ORDER BY orderTotal desc;
/* GET all employees with officeCode 1,2,3 */
SELECT * FROM employees WHERE officeCode = 1 OR officeCode = 2 OR officeCode = 3;
/* GET all employees with officeCode 1,2,3 using IN keyword */
SELECT * FROM employees WHERE officeCode IN (1,2,3);

/* Math functions from Excel are available */
/* SUM: */
SELECT SUM(quantityOrdered * priceEach) AS orderTotal FROM orderdetails ORDER BY orderTotal desc;
/* AVERAGE */
SELECT AVG(quantityOrdered * priceEach) AS orderTotal FROM orderdetails ORDER BY orderTotal desc;
/* Aggregate functions are things like SUM, AVG etc. grab data from a bunch of rows and return one thing */




