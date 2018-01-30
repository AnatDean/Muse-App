const { fetchUserProfile, patchProfilePic, patchBio } = require('../models/user');
const { saveFormData } = require('../models/addToDB');
let {getEmail} = require('../models/spotify');


function sendUserProfile(req, res, next) {
	const email = getEmail(req);
		return fetchUserProfile(email)
			.then(profile => {
				res.send(profile);
			});
}

function updateUserProfile(req, res, next) {
	saveFormData(req.body)
		.then(user => res.send(user))
}

function updatePicture(req, res, next) {
	const email = getEmail(req);
	const url = req.body.url;
		return patchProfilePic(email, url)
			.then(profile => res.send(profile));
}

function updateBio(req, res, next) {
	const email = getEmail(req);
	const bio = req.body.bio;
		return patchBio(email, bio) 
			.then(profile => res.send(profile));
}

module.exports = { sendUserProfile, updateUserProfile, updatePicture, updateBio };

