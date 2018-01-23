const mongoose = require('mongoose');
mongoose.Promise = Promise;
const DB = require('../config').DB;
const {formInput, spotifyResults} = require('../user-data');
const models = require('../database/models');
const async = require('async');

mongoose.connect(DB.test, function (err) {
	if (!err) {
		console.log('connected to database');
		mongoose.connection.db.dropDatabase();
		addUsers();
		addMusicData()
			.then(() => {
				console.log('saved data');
				mongoose.disconnect();
			});
	}
});

function addUsers(done) {
	const user = formInput.map((data) => {
		return new models.User(data).save();
	});
	return Promise.all(user);
}


function addMusicData(done) {
	const userMusicData = spotifyResults.map((data) => {
		return new models.Spotify(data).save();
	});
	return Promise.all(userMusicData);
}
