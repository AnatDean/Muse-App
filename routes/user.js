const express = require('express');
const {sendUserProfile, updateUserProfile} = require('../controllers/user');
const userRouter = express.Router();

userRouter.route('/profile')
	.get(sendUserProfile)
	.patch(updateUserProfile)
module.exports = {userRouter};
