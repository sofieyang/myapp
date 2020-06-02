const models = require('../models')

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express', user: req.user });
}

exports.submit_lead = function(req, res, next) {

	return models.Lead.create({
		email: req.body.lead_email
	}).then(lead => {
		res.redirect('/leads');
	})
}

exports.show_lead = function(req, res, next) {
	// guarantee that the body will be available after executing the findAll even though
	//call is async
	models.Lead.findAll().then(leads => {
		res.render('landing', {title: 'Express', leads: leads});

	})
}

// first argument is the file name in views and the second
//is a key-value pair. template in pug is filled with
// the key value arguments.