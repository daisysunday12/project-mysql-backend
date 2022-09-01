var express = require('express');
var router = express.Router();
const multer = require("multer");
const os = require("os");

const { getPekerjaanFrontEnd, getDetailsPekerjaanFrontEnd, getPekerjaanBackend, actionCreate, uploadFile, actionEdit, } = require('./controller');
const { isLoginApiAdmin } = require('../../middleware/auth')

router.get('/', getPekerjaanFrontEnd);
router.get('/pekerjaanbackend', isLoginApiAdmin, getPekerjaanBackend);
router.post("/add", isLoginApiAdmin, multer({ dest: os.tmpdir() }).single("image"), actionCreate);
router.put("/up/:id", isLoginApiAdmin, multer({ dest: os.tmpdir() }).single("image"), uploadFile);
router.put("/ed/:id", isLoginApiAdmin, multer({ dest: os.tmpdir() }).single("image"), actionEdit);
router.get('/:id', getDetailsPekerjaanFrontEnd);

module.exports = router;