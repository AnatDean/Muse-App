const mongoose = require('mongoose');
mongoose.Promise = Promise;
const DB = require('../config').DB;
const userData = require('../user-data');
const models = require('../models/models');
const async = require('async');

mongoose.connect(DB.test, function (err) {
    if (!err) {
        console.log('connected to database');
        mongoose.connection.db.dropDatabase();
        addUsers()
        .then(() => {
            console.log('saved data')
            mongoose.disconnect()
        })
    }
})

function addUsers(done) {
const user = userData.map((data) => {
    return new models.User(data).save()
});
return Promise.all(user);
}
