const express = require('express');
const app = express();
const morgan = require('morgan');
const studentRouter = require('./routes/studentRouter');
const userRouter = require('./routes/userRouter');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./utils/errorController');
app.use(express.json());

app.use((req, res, next) => {
  req.requesttime = new Date().toISOString();
  next();
});
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/student', studentRouter);
app.use('/api/v1/user', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find the ${req.originalUrl} on this server`, 404));
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.use(globalErrorHandler);

module.exports = app;
