var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const config = require('../config');
var connection = mysql.createConnection(config);

function formatDate(date) {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  const selectQuery = 'SELECT * FROM tasks;';
  connection.query(selectQuery, (error, results) => {
    res.render('index', { taskArray: results });
  })
});

router.post('/addItem', (req, res, next) => {
  const newTask = req.body.newTask;
  const newTaskDate = req.body.newTaskDate;
  //form submission comes to this route inside req.body
  //values are stored inside vars
  //next data needs to be pulled from vars and inserted into mysql...

  //this is bad...
  // const badInsertQuery = `INSERT INTO tasks (taskName, taskDate)
  //   VALUES
  //   (${newTask}, ${newTaskDate});`;
  
  //SQL injection... this is a good query...
  const insertQuery = `INSERT into tasks (taskName, taskDate)
      VALUES 
      (?,?)
      WHERE id = ?;`;
  console.log(insertQuery);
  connection.query(insertQuery, [newTask, newTaskDate], (error, results) => {
    if(error){
      //error/STOP:
      throw error;
    }else{
      //success/redirect to home page:
      res.redirect('/');
    }
  })
  // res.json(req.body);
});

//a wildcard route in Express has a :
router.get('/delete/:id', (req, res) => {
  //wildcard routes are available in req.params
  // res.json(req.params);
  const deleteQuery = 'DELETE FROM tasks WHERE id = ?;';
  connection.query(deleteQuery, [req.params.id], (error) => {
    res.redirect('/');
  })
})

router.get('/edit/:id', (req, res) => {
  // this route should be a pre-populated form
  const selectQuery = 'SELECT * FROM tasks WHERE id = ?;';
  connection.query(selectQuery, [req.params.id], (err, results) => {
    let formattedDate = formatDate(results[0].taskDate);
    results[0].taskDate = formattedDate;
    res.render('edit',{task: results[0]});
  }) 
});

router.post('/editItem', (req, res) => {
  const updateQuery = `UPDATE tasks SET
  taskName = ?,
  taskDate = ?
  WHERE id = ?`
  connection.query(updateQuery, [req.body.newTask, req.body.newTaskDate, req.body.taskId], (error, results) => {
    if (error){
      throw error;
    }else{
      res.redirect('/');
    }
  })
});
    
module.exports = router;
