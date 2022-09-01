var express = require('express');
var router = express.Router();

const { getPekerjaanFrontEnd } = require('./controller');

router.get('/', getPekerjaanFrontEnd);

module.exports = router;