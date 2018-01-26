const express = require('express');
const {authorise, sendProfileData} = require('../controllers/spotifyAuth');
const {userRouter} = require('./user');

const apiRouter = express.Router();

apiRouter.route('/authorise')
	.get(authorise);

apiRouter.route('/authorised')
	.get(sendProfileData); 

apiRouter.use('/user', userRouter);  


module.exports = apiRouter;