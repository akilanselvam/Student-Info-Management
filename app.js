const express = require('express');
const app = express();
const morgan = require('morgan');
const studentRouter = require('./routes/studentRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the Middleware😎');
  next();
});
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

module.exports = app;
