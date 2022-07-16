const express = require('express');
const politicasController = require('../controllers/politicasController');
const router = express.Router();

router.get("/", politicasController.page);

module.exports = router;