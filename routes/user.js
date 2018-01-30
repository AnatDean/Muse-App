const express = require('express');

const {sendUserProfile, updateUserProfile, updatePicture} = require('../controllers/user');
const {getMatches, updateRejections, sendNewMatches} = require('../controllers/matches');

const userRouter = express.Router();

userRouter.route('/profile/picture/:email')
	.patch(updatePicture)

userRouter.route('/profile/:email')
	.get(sendUserProfile)
  .patch(updateUserProfile)

userRouter.route('/matches/:email')
	.get(getMatches)
	.patch(updateRejections);

userRouter.route('/newMatches/:email')
	.get(sendNewMatches)

module.exports = {userRouter};