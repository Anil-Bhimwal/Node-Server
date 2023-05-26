const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require('./routes/userRoute');
const toursRouter = require('./routes/toursRoute');
/** Middlewares */

app.use(express.json());
app.use(morgan('dev'));

/** Routes */

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
