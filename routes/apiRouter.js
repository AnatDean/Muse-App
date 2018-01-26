const express = require('express');
const {authorise, sendProfileData, refreshTokens} = require('../controllers/spotifyAuth');
const {userRouter} = require('./user');
const {getEmail} = require('../models/spotify');
const {getMatches} = require('../controllers/matches')

const apiRouter = express.Router();

apiRouter.route('/authorise')
	.get(authorise);

apiRouter.route('/authorised')
	.get(sendProfileData); 

apiRouter.route('/refresh')
	.get(refreshTokens)

apiRouter.use('/user', userRouter);  


module.exports = apiRouter;