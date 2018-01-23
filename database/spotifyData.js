const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let spotifySchema = new Schema({
	Email: {
		type: String,
		unique: true 
	},
	tracks: {
		type: Array,
		unique: false
	},
	artists: {
		type: Array,
		unique: false
	},
	genres: {
		type: String,
		unique: false
	}
});

module.exports = mongoose.model('spotify_result', spotifySchema);