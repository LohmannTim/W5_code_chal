var express = require('express');
var router = express.Router();
var path = require('path');//lets us take strings and make file paths ie- afbj/adbbe/adfgtr/rsh

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html')); 
});

module.exports = router;