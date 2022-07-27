const express = require('express');
const controller = require('../controllers/mainController');
const router = express.Router();

router.get("/", controller.main);
router.get("/opcaoAcesso", controller.opcaoAcesso);
router.get("/politicas", controller.politica);
router.get("/sobre", controller.sobre);

module.exports = router;
