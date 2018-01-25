const {getEligible, ratePeople} = require('../models/matching');
const {getEmail} = require('../models/spotify');


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

module.exports = {getMatches};
