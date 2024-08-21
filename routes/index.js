const express = require('express');
const router = express.Router();

const mediaRouter = require('./post.route');

router.use('/post', mediaRouter);

module.exports = router;
