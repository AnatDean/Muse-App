const {authApp} = require('../models/spotify')

function authorise(req, res, next) {
  authApp(req, res, next)
}

module.exports = authorise