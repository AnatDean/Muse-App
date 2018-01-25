const { fetchUserProfile } = require('../models/user');
const { saveFormData } = require('../models/addToDB');
let getEmailTest = require('../spec/testing-functions').getEmail
let getEmailDev = require('../models/spotify').getEmail;


function sendUserProfile(req, res, next) {
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

function updateUserProfile(req, res, next) {
	saveFormData(req.body)
		.then(user => res.send(user))
}

module.exports = { sendUserProfile, updateUserProfile };

