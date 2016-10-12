var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var MongoServer = require('mongodb').Server;
var crypto = require("crypto");
var express = require('express');
var router = express.Router();


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var mongoclient = new MongoClient(new MongoServer("localhost",27017));
var db = mongoclient.db('mwa');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.collection('lab7').findOne({}, (err, doc) => {

    res.render('index', { title: decrypt('asaadsaad', doc.message)});
  });
  
});

app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

mongoclient.open((err, mongoclient) =>{
  if(err) throw err;
  app.listen(3000);
  console.log('Express server started on port 3000');
});

function decrypt(key, data) {
        var decipher = crypto.createDecipher('aes256', key);
        var decrypted = decipher.update(data, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
}

module.exports = app;
