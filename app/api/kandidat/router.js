var express = require('express');
var router = express.Router();

const { getAll, kandidatDetails } = require('./controller');
const { isLoginApiAdmin } = require('../../middleware/auth');

router.get('/', isLoginApiAdmin, getAll);
router.get('/:id', isLoginApiAdmin, kandidatDetails);

module.exports = router;