const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TokenSchema = new Schema({
	access_token: {
		type: String
	},
	refresh_token:{
		type: String
	},
	name: {
		type: String
	}
});

module.exports = mongoose.model('tokens', TokenSchema);