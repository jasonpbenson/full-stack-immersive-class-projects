var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'the students:',
    students: [
      "Rob",
      "Brandon",
      "Connor",
      "Khahn",
      "Christopher",
      "Sean",
      "Katie",
      "Jason"
    ]
  });
});

router.get('/reverse', function(req, res, next) {
  res.render('reverse', { 
    title: 'the students reversed:',
    students: [
      "Rob",
      "Brandon",
      "Connor",
      "Khahn",
      "Christopher",
      "Sean",
      "Katie",
      "Jason"
    ]
  });
});


module.exports = router;
