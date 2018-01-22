const express = require('express')
const authorise = require('../controllers/spotifyAuth')

const apiRouter = express.Router()

apiRouter.route('/authorise')
  .get(authorise)

apiRouter.route('/authorised')
  .get((req, res, next) => {
    res.send('Authentication successful')
  })

module.exports = apiRouter