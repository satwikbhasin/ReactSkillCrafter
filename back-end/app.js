var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mongoose = require("mongoose");
require('dotenv').config();
var app = express();

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewURLParser: true,
  }
);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json()); // This line should be here
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var additionRouter = require('./api/addition');
app.use('/api/addition', additionRouter);

var productsRouter = require('./api/products');
app.use('/api/products', productsRouter);

var usersRouter = require('./api/users')
app.use('/api/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {

  // set locals, only providing error in development

  res.locals.message = err.message;

  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page

  res.status(err.status || 500);

  res.render('error');

});




module.exports = app;