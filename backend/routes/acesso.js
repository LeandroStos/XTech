const express = require('express');
const router = express.Router();
const acessoController = require('../controllers/acessoController');

router.get('/', acessoController.page);
router.get('/redefinir-senha', acessoController.redefinir);

module.exports = router;
