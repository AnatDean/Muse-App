const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    Name: {
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
    Email: {
        type: String,
        unique: true
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

module.exports = mongoose.model('users', UserSchema);