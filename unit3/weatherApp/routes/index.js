var express = require('express');
var router = express.Router();

let zip;
const apiKey = require("../config");
const request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weather' });
});

router.post("/weather", (req, res) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`;
  const zip = req.body.zip;
  request.get(weatherUrl, (error, response, body) => {
    const parsedData = JSON.parse(body);
    res.render("weather", {
      parsedData
    })
  })
})

router.get("/");

module.exports = router;
