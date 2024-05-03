var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mongoose = require("mongoose");


var additionRouter = require('./routes/addition');
var productsRouter = require('./routes/products');
var usersRouter = require('./routes/users')



require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewURLParser: true,
  }
);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/addition', additionRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter)

app.use(express.json());

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



//const mongoose = require("mongoose");

// local-mongodb-connection
// const uri = "mongodb://localhost:27017/";
// mongoose.connect(uri).then(console.log("Connected!"));

// atlas-cluster-mongodb-connection
// mongoose.connect(
//   "mongodb+srv://satwik:aneCtJ5dCUd5ofge@satwikbhasin-assignment.dqz7zzb.mongodb.net/?retryWrites=true&w=majority",
//   {
//     useNewURLParser: true,
//   }
// );