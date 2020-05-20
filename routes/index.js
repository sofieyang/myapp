var express = require('express');
var router = express.Router();

let index = require('../controllers/index');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', index.index);

module.exports = router;
