const mongoose = require("mongoose");
mongoose.Promise = Promise
const DB = require("../config").DB;
const models = require("../database/models");





const saveApiDataToDatabase = (spotifyData, userData) => {
    
    mongoose.connect(DB.test, function(err) {
        if (!err) {
            console.log('connected to the database')
         return Promise.all([new models.User(userData).save(), new models.Spotify(spotifyData).save()])
        //   const user = new models.User(userData).save()
        //   const spotify = new models.Spotify(spotifyData).save()
        .then(() => {
            console.log('saved new user')
            mongoose.disconnect()
        })
        }
    })
}

module.exports = saveApiDataToDatabase;