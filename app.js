require('dotenv').config();
require("./instrument");
const Sentry = require("@sentry/node");
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
Sentry.setupExpressErrorHandler(app);

app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
  });

app.use(cors());

swaggerDocs(app);

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});

app.use('/api/v1', errorHandler, indexRouter);

module.exports = app;
