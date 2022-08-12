const express = require('express');
const router = express.Router();

/* Controllers */
const controller = require('../controllers/candidatosController');

/* Middlewares */
const logadoUsuario = require('../middlewares/logadoUsuario');
const naoLogado = require('../middlewares/naoLogado');

// Formulário de acesso
router.get('/acessoCandidato', logadoUsuario, controller.acesso);

// Formulário de registro
router.get('/registro', logadoUsuario, controller.registro);

// Processar registro
router.post('/registro', controller.processRegister);

// Formulário de acesso
router.post('/acessoCandidato', controller.acessoProcess);

// Página de usuario candidato
router.get('/areaCandidato/', naoLogado, controller.profile);

// Saindo do sistema
router.get('/sair/', naoLogado, controller.logout);


module.exports = router;
