const express = require('express');
const candidatoController = require('../controllers/candidatoController');
const router = express.Router();


router.get('/', candidatoController.page);

module.exports = router;
