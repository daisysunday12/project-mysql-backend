var express = require('express');
var router = express.Router();

const { getPekerjaanFrontEnd, getDetailsPekerjaanFrontEnd, getPekerjaanBackend, } = require('./controller');
const { isLoginApiAdmin } = require('../../middleware/auth')

router.get('/', getPekerjaanFrontEnd);
router.get('/pekerjaanbackend', isLoginApiAdmin, getPekerjaanBackend);
router.get('/:id', getDetailsPekerjaanFrontEnd);

module.exports = router;