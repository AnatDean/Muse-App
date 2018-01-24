const mongoose = require('mongoose');
mongoose.Promise = Promise;
const DB = require('../config').DB;
const models = require('../database/models');





const saveApiDataToDatabase = (spotifyData, userData) => {
	return models.Spotify.findOne({Email: userData.Email})
		.then(profile => {
			if (profile) {
				return console.log('Already exists');
			} else {
				console.log('Add to DB: connected to the database');
				return Promise.all([new models.User(userData).save(), new models.Spotify(spotifyData).save()])
				//   const user = new models.User(userData).save()
				//   const spotify = new models.Spotify(spotifyData).save()
					.then(([userData, spotifyData]) => {
						console.log('saved new user');
						return [userData, spotifyData];
					})
					.catch(err => console.log(`DB ERROR: ${err}`));

			}
        
        
        
		});


        
    
};

module.exports = saveApiDataToDatabase;