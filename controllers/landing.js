
exports.get_landing = function(req, res, next) {
	res.render('landing', {title: 'Express'});
}

// first argument is the file name in views and the second
//is a key-value pair. template in pug is filled with
// the key value arguments.