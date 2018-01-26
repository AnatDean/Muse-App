const { fetchUserProfile } = require('../models/user');
const { saveFormData } = require('../models/addToDB');
let {getEmail} = require('../models/spotify');


function sendUserProfile(req, res, next) {
	const email = getEmail(req)
		return fetchUserProfile(email)
			.then(profile => {
				res.send(profile);
			});
}

function updateUserProfile(req, res, next) {
	saveFormData(req.body)
		.then(user => res.send(user))
}

module.exports = { sendUserProfile, updateUserProfile };

