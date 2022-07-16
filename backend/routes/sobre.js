const express = require('express');
const sobreController = require('../controllers/sobreController');
const router = express.Router();

router.get("/", sobreController.page);

module.exports = router;