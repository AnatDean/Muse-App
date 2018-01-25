const {User} = require('../database/models');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

function fetchUserProfile (userEmail) {
	return User.findOne({Email: userEmail})
		.then((profile) => {
			return (profile);
		});
}


module.exports = {fetchUserProfile};