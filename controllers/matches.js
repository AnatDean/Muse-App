const {getEligible, ratePeople} = require('../models/matching');
const {getEmail} = require('../models/spotify');
const models = require('../database/models');
const mongoose = require('mongoose');
const db = require('../config').DB.test;


function getMatches (req, res) {
	return getEmail(req, res)
		.then(email => {
			return getEligible(email)

				.then(eligibles => {
					return ratePeople(eligibles);
				})
				.then(data => {
					res.send(data);
				});
		});
}

function rejectMatches (email) {
	return getEmail()
		.then(currentEmail => {
			return models.User.findOneAndUpdate({Email: { $eq: currentEmail }}, {$addToSet: {Rejected: email}} );
		});
}

module.exports = {getMatches};
