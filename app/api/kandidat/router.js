var express = require('express');
var router = express.Router();
const multer = require("multer");
const os = require("os");

const { getAll, kandidatDetails, actionCreate, actionPostImage, actionPostFile, actionDelete, kandidatDetailsFrontend, getKandidatPria, getKandidatWanita } = require('./controller');
const { isLoginApiAdmin } = require('../../middleware/auth');

// router.get('/', isLoginApiAdmin, getAll);
router.get('/', getAll);
router.get('/totalpria', getKandidatPria);
router.get('/totalwanita', getKandidatWanita);
router.post('/add', multer({ dest: os.tmpdir() }).single('image'), actionCreate);
router.put('/add/:id', multer({ dest: os.tmpdir() }).single('image'), actionPostImage);
router.put("/up/:id", multer({ dest: os.tmpdir() }).single("file"), actionPostFile);
router.delete('/del/:id', isLoginApiAdmin, actionDelete);
router.get('/:id', isLoginApiAdmin, kandidatDetails);
router.get('/details/:id', kandidatDetailsFrontend);

module.exports = router;