const express = require('express')
const {authorise, sendProfileData} = require('../controllers/spotifyAuth')

const apiRouter = express.Router()

apiRouter.route('/authorise')
  .get(authorise)

apiRouter.route('/authorised')
  .get(sendProfileData)

module.exports = apiRouter