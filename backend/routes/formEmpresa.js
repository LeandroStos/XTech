const express = require('express');
const empresaController = require('../controllers/empresaController');
const router = express.Router();

router.get('/', empresaController.page);

module.exports = router;
