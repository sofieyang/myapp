var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', landing.get_landing);

module.exports = router;
