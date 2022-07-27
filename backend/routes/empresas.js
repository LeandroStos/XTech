const express = require('express');
const router = express.Router();

/* Controllers */
const empresaController = require('../controllers/empresasController');

// Middlewares
const empresaLoggedMiddleware = require('../middleware/empresaLoggedMiddleware');
const empresaMiddleware = require('../middleware/empresaMiddleware');

// Formulário de acesso
router.get('/acessoEmpresa', empresaLoggedMiddleware, empresaController.acessoEmpresa);

// Formulário de registro
router.get('/registro', empresaLoggedMiddleware, empresaController.registroEmpresa);

// Processar registro
router.post('/registro', empresaController.processRegister);

// Formulário de acesso
router.post('/acessoEmpresa', empresaController.acessoProcess);

// Página de usuario areaEmpresa
router.get('/areaEmpresa/', empresaMiddleware, empresaController.profile);

// Saindo do sistema
router.get('/sair/', empresaMiddleware, empresaController.logout);

module.exports = router;
