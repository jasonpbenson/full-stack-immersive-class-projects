var express = require('express');
var router = express.Router();

const config = require('../config');

const apiBaseUrl = "http://api.themoviedb.org/3";
const imageBaseUrl = "http://image.tmdb.org/t/p/w300";
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${config.apiKey}`;

const request = require("request");

const mysql = require('mysql');
const connection = mysql.createConnection(config.db);
connection.connect();

// console.log(apiKey);
// console.log(nowPlayingUrl);

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(nowPlayingUrl, (error, response, body) => {
    const parsedData = JSON.parse(body);
    //data has been pulled from api
    //need to send to view/EJS
    res.render("now_playing", {
      parsedData: parsedData.results, 
      imageBaseUrl
    });
    // console.log(parsedData);
    // res.json(parsedData);
  });

  // res.render('index', { title: 'Express' });
});

router.get("/search", (req, res) => {
  res.render("search");
});

router.post("/search/movie", (req, res) => {
  //submitted data from forms comes from the req object
  //querystring data is in req.query
  //posted data is in req.body
  const movieTitle = req.body.movieTitle;
  // res.json(req.body);
  const searchUrl = `${apiBaseUrl}/search/movie?query=${movieTitle}&api_key=${config.apiKey}`;
  request.get(searchUrl,(error, response, body) => {
    const parsedData = JSON.parse(body);
    res.render("now_playing", {
      imageBaseUrl,
      parsedData: parsedData.results
    });
  });
});

router.get('/login', (req, res) =>{
  res.render('login');
})

router.post('/loginProcess', (req, res) => {
  const insertQuery = `INSERT into users (email, password)
  VALUES
  (?, ?)`
  res.json(req.body);
})

module.exports = router;
