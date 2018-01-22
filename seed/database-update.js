const mongoose = require('mongoose');
mongoose.Promise = Promise;
const DB = require('../config').DB;
const models = require('../database/models');
const {spotifyResults} = require('../user-data')
mongoose.connect(DB.test, function (err) {
    if (!err) {
        console.log('connected to database');
        mongoose.connection.db.dropDatabase();
        addMusicData()
        .then(() => {
            console.log('saved data')
            mongoose.disconnect()
        })
    }
})

function addMusicData(done) {
const deets = spotifyResults.map((data) => {
    return new models.Spotify(data).save()
});
return Promise.all(deets);
}
