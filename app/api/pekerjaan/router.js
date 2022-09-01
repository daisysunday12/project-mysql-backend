var express = require('express');
var router = express.Router();

const { getPekerjaanFrontEnd, getDetailsPekerjaanFrontEnd } = require('./controller');

router.get('/', getPekerjaanFrontEnd);
router.get('/:id', getDetailsPekerjaanFrontEnd);

module.exports = router;