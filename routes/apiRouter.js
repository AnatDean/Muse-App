const express = require('express');
const {authorise, sendProfileData} = require('../controllers/spotifyAuth');
const {userRouter} = require('./user');
const {getEmail} = require('../models/spotify');

const apiRouter = express.Router();

apiRouter.route('/authorise')
	.get(authorise);

apiRouter.route('/authorised')
	.get(sendProfileData);

// apiRouter.route('/form')
// 	.patch(saveFormData)

apiRouter.use('/user', userRouter);

apiRouter.route('/email')
	.get((req, res, next) => {
		res.send(getEmail(req, res, next));
	});



  

module.exports = apiRouter;