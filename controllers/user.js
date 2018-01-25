const {fetchUserProfile} = require('../models/user');
let getEmailTest = require('../spec/testing-functions').getEmail 
let getEmailDev = require('../models/spotify').getEmail;


function sendUserProfile (req, res, next) {
let getEmail;

if (process.env.NODE_ENV === "test") {
	getEmail = getEmailTest

} else {
	getEmail = getEmailDev
}

getEmail()
		.then(email => {
			return fetchUserProfile(email)
				.then(profile => {
					res.send(profile);
				});
		});
}

module.exports = {sendUserProfile};

