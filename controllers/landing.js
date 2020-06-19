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

exports.show_leads = function(req, res, next) {
	// guarantee that the body will be available after executing the findAll even though
	//call is async
	models.Lead.findAll().then(leads => {
		res.render('lead/leads', {title: 'Express', leads: leads});

	})
}

exports.show_lead = function(req, res, next) {
	return models.Lead.findOne({
		where : {
			id : req.params.lead_id
		}
	}).then(lead => {
		res.render('lead/lead', { lead: lead});
	});
}

exports.show_edit_lead = function(req, res, next) {
	console.log("Entered show_edit_lead");
	return models.Lead.findOne({
		where : {
			id : req.params.lead_id
		}
	}).then(lead => {
		res.render('lead/edit_lead', { lead : lead });
	});
}

exports.edit_lead = function(req, res, next) {
	console.log("Entered edit_lead");
	return models.Lead.update({
		email: req.body.lead_email
	}, { 
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		console.log("Entered promise");
		console.log(req.params.lead_id); //i added this
		res.redirect('/lead/' + req.params.lead_id);
	})
}

exports.delete_lead = function(req, res, next) {
	return models.Lead.destroy({
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.redirect('/leads');
	})
}

exports.delete_lead_json = function(req, res, next) {
	return models.Lead.destroy({
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.send({ msg: "Success"}); //send back json object
	})
}

// first argument is the file name in views and the second
//is a key-value pair. template in pug is filled with
// the key value arguments.