const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cookies = require('cookie-parser');
const candidatoDataMiddleware = require('./middleware/candidatoDataMiddleware');
const empresaDataMiddleware = require('./middleware/empresaDataMiddleware');

// const indexRouter = require('./routes/index');
const mainRouter = require('./routes/main');
const candidatosRouter = require('./routes/candidatos');
const empresasRouter = require('./routes/empresas');

const app = express();

app.use(session({
  secret: "Shhh, Muito secreto!",
  resave: false,
  saveUninitialized: false,
}));

app.use(cookies())

app.use(candidatoDataMiddleware);
app.use(empresaDataMiddleware);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/', mainRouter);
app.use('/candidatos', candidatosRouter);
app.use('/empresas', empresasRouter);

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
  res.render('error');
});

module.exports = app;
