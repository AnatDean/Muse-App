const mongoose = require('mongoose');
mongoose.Promise = Promise;
const DB = require('../config').DB;
const models = require('../database/models');


const saveApiDataToDatabase = (spotifyData, userData) => {
    return models.Spotify.findOne({ Email: userData.Email })
        .then(profile => {
            if (profile) {
                console.log('already a user')
                updateSpotifyData(spotifyData)
                return [userData, spotifyData];
            } else {
                console.log('Add to DB: connected to the database');
                return Promise.all([new models.User(userData).save(), new models.Spotify(spotifyData).save()])
                    .then(([userData, spotifyData]) => {
                        console.log('saved new user');
                        return [userData, spotifyData];
                    })
                    .catch(err => console.log(`DB ERROR: ${err}`));
            }
        });
};


const formData = { Email: 'megan.field@hotmail.co.uk', AgeRange: [26, 35], Gender: 'Female', GenderPreference: ['female, male'], Area: 'Manchester', Bio: 'for i am Megan!' }

const saveFormData = (formData) => {
    return models.User.findOneAndUpdate({ Email: { $eq: formData.Email } }, { $set: { AgeRange: formData.AgeRange, Gender: formData.Gender, GenderPreference: formData.GenderPreference, Area: formData.Area, Bio: formData.Bio } }, { upsert: true })
        .then(user => {
            return;
        })
}; 


const updateSpotifyData = (spotifyData) => {
   return  models.Spotify.findOneAndUpdate({ Email: { $eq: spotifyData.Email }}, {$set: {tracks: spotifyData.tracks, artists: spotifyData.artists, genres: spotifyData.genres}})
   .then(user => {
       console.log('existing user')
    return;
})
}

module.exports = saveApiDataToDatabase;