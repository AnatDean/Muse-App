const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: {
        type: String,
        unique: false
    },
    Surname: {
        type: String,
        unique: false
    },
    Age: {
        type: Number,
        unique: false
    },
    AgeRange: {
        type: Array,
        unique: false
    },
    Username: {
        type: String,
        unique: true
    },
    Password: {
        type: String,
        unique: false
    },
    Gender: {
        type: String,
        unique: false
    },
    GenderPreference: {
        type: Array,
        unique: false
    },
    Area: {
        type: String,
        unique: false
    },
    picture: {
        type: String,
        unique: false
    },
    Bio: {
        type: String,
        unique: false
    },
})

module.exports = mongoose.model('users', UserSchema)