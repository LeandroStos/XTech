const express = require('express');
const router = express.Router();

/* Controllers */
const controller = require('../controllers/empresasController');

/* Middlewares */
const logadoEmpresa = require('../middlewares/logadoEmpresa');
const notLogged = require('../middlewares/notLogged');
const logadoEmpresaVagas = require('../middlewares/logadoEmpresaVagas'); 

// Formulário de acesso
router.get('/acessoEmpresa', logadoEmpresa, controller.acesso);

// Formulário de registro
router.get('/registro', logadoEmpresa, controller.registro);

// Processar registro
router.post('/registro', controller.processRegister);

// Formulário de acesso
router.post('/acessoEmpresa', controller.acessoProcess);

// Página de usuario candidato
router.get('/areaEmpresa/', notLogged, controller.profile);

// Página de cadastro de vagas
router.get('/cadastrarVagas', controller.cadastrarVagas);

router.get('/vagasEmpresas', logadoEmpresaVagas, controller.vagasEmpresas);

router.delete('/vagasEmpresas/:id', logadoEmpresaVagas, controller.vagasDelete);

router.post('/cadastrarVagas', controller.vagaRegister);

// Saindo do sistema
router.get('/sair/', notLogged, controller.logout);


module.exports = router;
