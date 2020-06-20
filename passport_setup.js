
let LocalStrategy = require('passport-local').Strategy;

let bcrypt = require('bcrypt');
let models = require('./models');

const validPassword = function(user, password) {
	return bcrypt.compareSync(password, user.password);
	//compareSync will also hash the password to check against
	//the user pass word
}
module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		done(null, user.id)
	}); // save user to session variable
	// deserialize gets user
	passport.desererializeUser(function(id, done){
		models.User.findONe({
			where: {
				"id": id
			}
		}).then(user => {
			if (user=null) {
				done(new Error('Wrong user id.'))
			}
			done(null, user);
		})
	});
	passport.use(new LocalStrategy({
		//local strat needs to know which fields correspond to email and password
		//name='email' field in login.pug input
		usernameField: 'email',
		passwordField: 'password'
		passReqToCallback: true
	},
	function(req, email, password, done) {
		return models.User.findOne({
			where: {
				'email': email
			},
		}).then(user => {
			if (user == null) {
				req.flash('message', 'Incorrect credentials.')
				return done(null, false)
			} else if (user.password == null || user.password == undefined) {
				req.flash('message', 'You must reset your password.')
				return done(null, false)
			} else if (!validPassword(user, password)) {
				req.flash('message', 'Incorrect credentials')
				return done(null, false)
			}
			return done(null, user);
			//handle database errors
		}).catch(err => {
			done(err, false);
		})
	}))
}