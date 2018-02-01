const {User} = require('../database/models');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

function fetchUserProfile (userEmail) {
	return User.findOne({Email: userEmail})
		.then((profile) => {
			return (profile);
		});
}

function getNewMatches(userEmail) {
	return User.find({ Matched: {$in: [userEmail]}})
		.then(matches => console.log(matches))
}

function patchProfilePic(userEmail, incUrl) {
	return User.findOneAndUpdate({Email: userEmail}, {$set: {picture: incUrl}}, {new: true})
		.then(profile => profile);
}

function patchBio(userEmail, incBio) {
	return User.findOneAndUpdate({Email: userEmail}, {$set: {Bio: incBio}}, {new: true})
		.then(profile => profile);
}

function patchPrefs(userEmail, genderPrefs, location, ageRange) {
	return User.findOneAndUpdate({Email: userEmail}, {$set: {GenderPreference: genderPrefs, Area: location, AgeRange: ageRange}}, {new: true})
		.then(profile => profile);
}

module.exports = {fetchUserProfile, getNewMatches, patchProfilePic, patchBio, patchPrefs};