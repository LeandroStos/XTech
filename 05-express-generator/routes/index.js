var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', controller.index);
res.render('index', { title: 'Express' });


module.exports = router;
 