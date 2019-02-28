var express = require('express');
var router = express.Router();
const db = require('../database');
const passport = require ('passport');
const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');

router.get('/auth/github',passport.authenticate('github'));

router.get('/auth/callback', passport.authenticate('github'), (req, res)=> {
  const selectQuery = `SELECT * FROM users`;
  const pgPromise = db.query(selectQuery);
  console.log(pgPromise);
  pgPromise.then((data)=> {
    console.log(data);
    res.json(data);
  })
  res.json(req.user);
})

router.post('/register', (req, res)=> {
  // bcrypt
  // check if username exists:
  const checkUsernameQuery = `SELECT * FROM users WHERE username = $1`
  
  db.query(checkUsernameQuery, [req.body.username]).then((results)=> {
    // console.log(results);
    if(results.length === 0){
      // user doesn't exist
      const insertUserQuery = `INSERT INTO users (username, password, token) VALUES ($1, $2, $3)`;
      const token = randToken.uid(50);
      // use bcrypt.hashSync to make their password wicked
      const hash = bcrypt.hashSync(req.body.password);
      db.query(insertUserQuery, [req.body.username, hash, token]).then(()=> {
        res.json({
          msg: "userAdded",
          token,
          username: req.body.username
        });
      })
    }else{
      // user does exist
      res.json({msg: "userExists"});
    }
  }).catch((error)=> {
    if(error){throw error};
  })
  // if not: insert--username + hashed password
  // --create token
  // if so, let react know
  // res.json(req.body);
})

router.post('/login', (req, res)=> {
  const username = req.body.username;
  const password = req.body.password;
  // 1.get row with username from db
  const selectUserQuery = `SELECT * FROM users WHERE username = $1`;
  db.query(selectUserQuery, [username]).then((results)=> {
    if(results.length === 0){
      // user doesn't exist
      res.json({
        msg: "badUser"
      })
    }else{
      // user exists
      // check password
      const checkHash = bcrypt.compareSync(password, results[0].password)
      // checkHash is a boolean
      if(checkHash){
        // passwords match –> create new token
        const token = randToken.uid(50);
        // update db with new token
        const updateTokenQuery = `UPDATE users SET token = $1
          WHERE username = $2`;
        db.query(updateTokenQuery, [token, username]).catch((error)=> {
          if (error){throw error};
        });
        res.json({
          msg: "loginSuccess",
          token,
          username
        })
      }else{
        // password doesn't match
        res.json({
          msg: "badPassword"
        })
      }
    }
  }).catch((error)=> {
    if(error){throw error};
  })
})

module.exports = router;
