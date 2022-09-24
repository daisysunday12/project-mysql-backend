var express = require('express');
var router = express.Router();

const { actionCreate, getAll, getDetails } = require('./controller');
const { isLoginApiAdmin } = require('../../middleware/auth')

// router.get("/", isLoginApiAdmin, getAll);
router.get("/", getAll);
router.post("/create", actionCreate);
router.get("/:id", getDetails);

module.exports = router;
