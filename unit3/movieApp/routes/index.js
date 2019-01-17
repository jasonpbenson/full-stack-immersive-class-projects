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
  })

  // res.render('index', { title: 'Express' });
});

module.exports = router;
