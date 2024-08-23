require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');  
const swaggerDocs = require('./libs/swagger');

const indexRouter = require('./routes/index');
const {errorHandler} = require('./middleware/error.handling');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

swaggerDocs(app);

app.use('/api/v1', errorHandler, indexRouter);

module.exports = app;
