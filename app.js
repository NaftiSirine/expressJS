var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// declaration du serveur
require('dotenv').config();
const  http = require('http');


//import database 
var mongoose = require('mongoose');
 var configDB=require('./database/mongodb.json');
//mongo config 
const connect =mongoose.connect(
  configDB.mongo.uri ,
  { useNewUrlParser:
  true ,
  useUnifiedTopology: true
  },
  ()=> console.log("Connected to DB !!") );

// router declaration 
var indexRouter = require('./routes/index');
var osRouter= require('./routes/os');
var productsRouter= require('./routes/products');
var contactRouter= require('./routes/contacts');
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/os', osRouter);
app.use('/products', productsRouter);
app.use('/contacts', contactRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json( err.message);
});
console.log(process.env.PORT)
const server = http.createServer(app);
server.listen(5000, ()=> { console.log("app is running in port 5000")  });
