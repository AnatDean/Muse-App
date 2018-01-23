const {fetchUserProfile} = require('../models/user');
const {getUserEmail} = require('../models/spotify');


function sendUserProfile (req, res, next) {

	// getUserEmail()
	let email = 'pkcopley@gmail.com';
	// .then(email => {
	return fetchUserProfile(email)
		// })
		.then(profile => {
      console.log(profile);
			res.send(profile);
		});
}

module.exports = {sendUserProfile};

