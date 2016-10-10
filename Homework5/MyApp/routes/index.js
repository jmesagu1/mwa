var express = require('express');
var router = express.Router({ strict: true, 
                              caseSensitive : true});
var fs = require('fs');

/* GET home page. */

router.get('/inventors', function(req, res, next) {
  var contents = fs.readFileSync("data/inventors.json");
   var jsonContent = JSON.parse(contents);
  console.log(jsonContent);
  res.render('index', { title: 'Homework 4', data :jsonContent });
});

module.exports = router;
