var express = require('express');
var router = express.Router();

const apiKey = require("../config");
const apiBaseUrl = "http://api.themoviedb.org/3";
const imageBaseUrl = "http://image.tmdb.org/t/p/w300";
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

const request = require("request");

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
  const searchUrl = `${apiBaseUrl}/search/movie?query=${movieTitle}&api_key=${apiKey}`;
  request.get(searchUrl,(error, response, body) => {
    const parsedData = JSON.parse(body);
    res.render("now_playing", {
      imageBaseUrl,
      parsedData: parsedData.results
    });
  });
});

module.exports = router;
