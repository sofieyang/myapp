
exports.get_landing = function(req, res, next) {
	res.render('landing', {title: 'Express'});
}

exports.submit_lead = function(req, res, next) {
	console.log("lead email:", req.body.lead_email);
	res.redirect('/');
}

// first argument is the file name in views and the second
//is a key-value pair. template in pug is filled with
// the key value arguments.