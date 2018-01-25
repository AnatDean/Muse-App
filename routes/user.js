const express = require('express');
const {sendUserProfile} = require('../controllers/user');
const {getMatches, rejectMatches} = require('../controllers/matches');

const userRouter = express.Router();

userRouter.route('/profile')
	.get(sendUserProfile);

userRouter.route('/matches')
	.get(getMatches)
	.patch(rejectMatches);

	
module.exports = {userRouter};
