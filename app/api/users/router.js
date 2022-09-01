var express = require('express');
var router = express.Router();

const { actionCreate, getAll } = require('./controller');
const { isLoginApiAdmin } = require('../../middleware/auth')

router.get("/", isLoginApiAdmin, getAll);
router.post("/create", actionCreate);

module.exports = router;
