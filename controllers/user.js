const {fetchUserProfile} = require('../models/user');
const {getEmail} = require('../models/spotify');


function sendUserProfile (req, res, next) {

	getEmail()
		.then(email => {
			return fetchUserProfile(email)
				.then(profile => {
					res.send(profile);
				});
		});
}

module.exports = {sendUserProfile};

