var express = require('express');
var router = express.Router();

const request = require("request");
const apiBaseUrl = 'http://api.themoviedb.org/3';
const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
const nowPlaying = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

function getNowPlaying(){
  return new Promise((resolve, reject) => {
      request.get(nowPlaying, (err, response, body) => {
          const parsedBody = JSON.parse(body);
          resolve(parsedBody);
      });
  });
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  const data = await getNowPlaying();
  res.json(data);
});

router.get('/', function(req, res, next) {
  const data = getNowPlaying();
  dataPromise.then((data) => {
    res.json(data);
  })
  res.json(data);
});

module.exports = router;
