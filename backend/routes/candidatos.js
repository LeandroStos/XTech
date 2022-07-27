const express = require('express');
const router = express.Router();

/* Controllers */
const controller = require('../controllers/candidatosController');

// Middlewares
const candidatoLoggedMiddleware = require('../middleware/candidatoLoggedMiddleware');
const candidatoMiddleware = require('../middleware/candidatoMiddleware')

// Formulário de acesso
router.get('/acessoCandidato', candidatoLoggedMiddleware, controller.acesso);

// Formulário de registro
router.get('/registro', candidatoLoggedMiddleware, controller.registro);

// Processar registro
router.post('/registro', controller.processRegister);

// Formulário de acesso
router.post('/acessoCandidato', controller.acessoProcess);

// Página de usuario candidato
router.get('/areaCandidato/', candidatoMiddleware, controller.profile);

// Saindo do sistema
router.get('/sair/', candidatoMiddleware,controller.logout);

module.exports = router;
