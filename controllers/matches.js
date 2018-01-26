const {getEligible, ratePeople, addRejection} = require('../models/matching');
const {getEmail} = require('../models/spotify');
const {User} = require('../database/models');
const mongoose = require('mongoose');
const db = require('../config').DB.test;


function getMatches (req, res) {
	const email = getEmail(req)
			return getEligible(email)
		.then(eligibles => {
			return ratePeople(req, eligibles);
		})
		.then(data => {
			res.send(data);
		});
}

function updateRejections (req, res, next) {
	const currentEmail = getEmail(req)
		return addRejection(currentEmail, req.body.rejectedEmail)
		.then(() => res.status(204).send())
		.catch(console.log)
}

module.exports = {getMatches, updateRejections};
