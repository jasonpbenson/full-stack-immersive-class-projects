var express = require('express');
var router = express.Router();

const passport = require ('passport');
const pgp = require('pg-promise')();
const config = require('../config');
const connection = config.pg;
const db = pgp(connection);
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
          token
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

module.exports = router;
