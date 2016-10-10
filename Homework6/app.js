var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var session = require('express-session');
var uuid = require('uuid');
var csrf = require('csurf');
var validator = require('express-validator');
var contact_us = require('./routes/contact_us');

var app = express();

app.use(helmet());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator({
 customValidators: {
    is: function(value,params) {
      return params.includes(value);
    }
 }
}

));



app.use(require('less-middleware')(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));


app.use(cookieParser());
app.use(session({
  secret: 'MySecret',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 60000 },
  genid: function(req) {
    return uuid.v4(); // use UUIDs for session IDs
  },  
}));

app.use(csrf());

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/', contact_us);

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
    if (err.code !== 'EBADCSRFTOKEN'){
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
      return;
    }

    res.status(403);
    res.send('form tampered with <a href="' + req.url +  '">try again</a>');
    next();

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


module.exports = app;
