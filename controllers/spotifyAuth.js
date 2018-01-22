const {authApp, getToken} = require('../models/spotify')

function authorise(req, res, next) {
  authApp(req, res, next)
}

function sendProfileData(req, res, next) {
  getToken(req, res, next)
  .then(tokens => res.send('Recieved Tokens'))
}

module.exports = {authorise, sendProfileData}