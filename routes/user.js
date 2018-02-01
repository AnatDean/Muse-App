const express = require('express');

const {sendUserProfile, updateUserProfile, updatePicture, updateBio, updatePrefs, updateAgeRange} = require('../controllers/user');
const {getMatches, updateRejections, sendNewMatches, sendIncomingMatches} = require('../controllers/matches');

const userRouter = express.Router();

userRouter.route('/profile/picture/:email')
	.patch(updatePicture);

userRouter.route('/profile/bio/:email')
	.patch(updateBio);

userRouter.route('/profile/preferences/:email')
	.patch(updatePrefs);

userRouter.route('/profile/:email')
	.get(sendUserProfile)
  .patch(updateUserProfile);

userRouter.route('/matches/:email')
	.get(getMatches)
	.patch(updateRejections);

userRouter.route('/newMatches/:email')
	.get(sendNewMatches);

userRouter.route('/incoming/:email')
	.get(sendIncomingMatches);

module.exports = {userRouter};