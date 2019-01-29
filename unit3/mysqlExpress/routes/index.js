var express = require('express');
var router = express.Router();
//use mysql module to connect and query from express/node
//the mysql module is not part of core so it must be installed
var mysql      = require('mysql');
const config = require("../config");
var connection = mysql.createConnection(config);
connection.connect();

router.get('/', function(req, res, next) {
    const query = 'SELECT * FROM restaurant;'
    connection.query(query,(err, results) => {
        if (err) {
            throw err;
        } else {
            res.json(results);
        }
    })
});

router.get('/takeout', (req, res) => {
    const takeoutQuery = 'SELECT * FROM restaurant WHERE doesTakeout != 0';
    connection.query(takeoutQuery, (err, results) => {
        if (err) {
            throw err;
        } else {
            res.json(results);
        }    
    })
});

module.exports = router;
