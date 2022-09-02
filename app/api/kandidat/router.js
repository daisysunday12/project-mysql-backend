var express = require('express');
var router = express.Router();
const multer = require("multer");
const os = require("os");

const { getAll, kandidatDetails, actionCreate } = require('./controller');
const { isLoginApiAdmin } = require('../../middleware/auth');

router.get('/', isLoginApiAdmin, getAll);
router.post('/add', multer({ dest: os.tmpdir() }).single('image'), actionCreate);
router.get('/:id', isLoginApiAdmin, kandidatDetails);

module.exports = router;