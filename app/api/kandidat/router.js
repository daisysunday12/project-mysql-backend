var express = require('express');
var router = express.Router();

const { getAll } = require('./controller');
const { isLoginApiAdmin } = require('../../middleware/auth');

router.get('/', isLoginApiAdmin, getAll);

module.exports = router;