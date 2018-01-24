const {User} = require('../database/models');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

function fetchUserProfile (userEmail) {
  console.log('user.js', mongoose.connection);
	return User.find()
		.then((profile) => {
			console.log(profile);
			return (profile);
		});
}


module.exports = {fetchUserProfile};