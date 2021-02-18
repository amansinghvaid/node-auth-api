const express = require('express');

const router = express.Router();
const Response = require('../util/response');
const api1 = require('./api/v1/api');

router.use('/api/v1/', api1);

router.use('/', (req, res, next) => {
    return res.status(404).json(new Response(false, 'Incorrect API request.'));
});

module.exports = router;