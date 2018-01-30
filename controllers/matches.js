const {getEligible, ratePeople, addChoice} = require('../models/matching');
const {getNewMatches} = require('../models/user');
const {getEmail} = require('../models/spotify');

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
		return addChoice(currentEmail, req.body.email, req.body.choice)
		.then(() => res.status(204).send())
		.catch(console.log)
}

function sendNewMatches (req, res, next) {
	const currentEmail = getEmail(req)
	return getNewMatches(currentEmail)
		.then(matches => res.send(matches))
}

module.exports = {getMatches, updateRejections, sendNewMatches};
