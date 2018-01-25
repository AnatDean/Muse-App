const express = require('express');

const {sendUserProfile, updateUserProfile} = require('../controllers/user');
const {getMatches, updateRejections} = require('../controllers/matches');

const userRouter = express.Router();

userRouter.route('/profile')
	.get(sendUserProfile)
  .patch(updateUserProfile)

userRouter.route('/matches')
	.get(getMatches)
	.patch(updateRejections);

module.exports = {userRouter};
