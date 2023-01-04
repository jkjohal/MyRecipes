var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('login');
});

router.post('/authenticateLogin', function(req, res){
    console.log("Authenticating 2!");
    res.send('number two!');
});

module.exports = router;