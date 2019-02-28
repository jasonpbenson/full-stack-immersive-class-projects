var express = require('express');
var router = express.Router();
const db = require('../database');

router.get('/getHome', (req, res)=> {
    const gameQuery = `SELECT * FROM games
        WHERE screenshot_url IS NOT NULL 
        ORDER BY popularity desc
        limit 4;`;
    db.query(gameQuery).then((results)=> {
        res.json(results);
    }).catch ((error)=> {
        if(error){throw error}
    })
    // res.json("Games");

})

module.exports = router;