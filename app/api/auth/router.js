var express = require('express');
var router = express.Router();
const { login } = require('./controller')

router.post('/', login);

module.exports = router;
