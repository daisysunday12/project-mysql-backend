var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var usersRouter = require('./app/api/users/router');
var authRouter = require('./app/api/auth/router');
var pekerjaanRouter = require('./app/api/pekerjaan/router');

const URL = '/api/v1'

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to EXPRESS REST API with MySQL',
    createdBy: 'Mochamamad Faris',
    version: '1.0',
  });
});

app.use(`${URL}/users`, usersRouter);
app.use(`${URL}/auth`, authRouter);
app.use(`${URL}/pekerjaan`, pekerjaanRouter);

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
