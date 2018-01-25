const {getEligible, ratePeople} = require('../models/matching');
const {getEmail} = require('../models/spotify');
const {User} = require('../database/models');
const mongoose = require('mongoose');
const db = require('../config').DB.test;


function getMatches (req, res) {
	return getEmail(req, res)
		.then(email => {
			return getEligible(email)
		})
		.then(eligibles => {
			return ratePeople(eligibles);
		})
		.then(data => {
			res.send(data);
		});
}

function updateRejections (email) {
	return getEmail()
		.then(currentEmail => {
			return User.findOneAndUpdate({Email: { $eq: currentEmail }}, {$addToSet: {Rejected: email}} );
		})
		.then(updatedUser => res.send(updatedUser))
}

module.exports = {getMatches, updateRejections};
