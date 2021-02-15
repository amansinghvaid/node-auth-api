const express = require('express');

const router = express.Router();

const api1 = require('./api/1.0/api');

router.use('/api/1.0/', api1);

router.use('/', (req, res, next) => {
    res.send('Incorrect API request.');
});

module.exports = router;