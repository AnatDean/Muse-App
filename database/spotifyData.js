const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let spotifySchema = new Schema({
    username: {
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
        type: Array,
        unique: false
    }
})

module.exports = mongoose.model('spotifyData', spotifySchema)