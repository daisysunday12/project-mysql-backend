var express = require('express');
var router = express.Router();

const { getPekerjaanFrontEnd, getDetailsPekerjaanFrontEnd, getPekerjaanBackend, } = require('./controller');

router.get('/', getPekerjaanFrontEnd);
router.get('/pekerjaanbackend', getPekerjaanBackend);
router.get('/:id', getDetailsPekerjaanFrontEnd);

module.exports = router;